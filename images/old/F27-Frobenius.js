import {
    WebGLRenderer,
    ACESFilmicToneMapping,
    PerspectiveCamera,
    Color,
    Scene,
    Mesh,
    MeshPhysicalMaterial,
    Vector2,
    BoxGeometry, TorusKnotGeometry,
    TorusGeometry, TubeGeometry, CylinderGeometry,
    Vector3, Group, SphereGeometry, FloatType, DoubleSide, CatmullRomCurve3,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {
    GradientEquirectTexture,
    WebGLPathTracer,
    ShapedAreaLight, PhysicalSpotLight,PhysicalCamera,
} from 'three-gpu-pathtracer';

import {GUI} from "three/examples/jsm/libs/lil-gui.module.min.js";



// init scene and objects, and lights
//--------------------------------------------

const scene = new Scene();

function toVec3(p){
    return new Vector3(p[0],p[1],p[2]);
}

function createGlassHex(col){
    return new MeshPhysicalMaterial({
        color : col,
        transparent:true,
        clearcoat:1,
        opacity:1,
        transmission:0.9,
        ior:1.5,
        thickness:1,
        roughness:0.2,
    });
}

function createOpaqueHex(col){
    return new MeshPhysicalMaterial({
        color : col,
        metalness:0,
        roughness:0.2,
        clearcoat:1,
    });
}




function createRodMesh(start,end,color,rad=0.02){

    let dir = toVec3(end).sub(toVec3(start));
    let st =toVec3(start);

    let pts=[];
    for(let i=0; i<99;i++){
        let t = i/100;
        let p = st.clone().add(dir.clone().multiplyScalar(t))
        pts.push(p);
    }
    const path = new CatmullRomCurve3(pts);
    const rodGeom = new TubeGeometry(path,64,rad)
    return new Mesh(rodGeom,createGlassHex(color));

}


function createSphere(pos,color,rad=0.25){

    let sphGeom = new SphereGeometry(rad);
    let mesh = new Mesh(sphGeom,createOpaqueHex(color));
    mesh.position.set(pos[0],pos[1],pos[2]);
    return mesh;

}


function createCurveMesh(fn,color,rad=0.05){

    let pts = [];
    for(let i=0; i<100; i++){
        let t = i/99;
        pts.push(fn(t));
    }

    let path = new CatmullRomCurve3(pts);
    let curveGeom = new TubeGeometry(path,64,rad);
    return new Mesh(curveGeom, createGlassHex(color));
}


//color scheme
const glassColor =0xc9eaff;
const redColor = 0xd43b3b;//0xe03d24
const greenColor = 0x4fbf45;
const blueColor = 0x4287f5;
const yellowColor = 0xffd738;

//add the points to the scene:



for(let i=-1;i<2;i++){
    for(let j=-1; j<2; j++){
        for(let k=-1; k<2; k++) {

            if (i == 0 && j == 0 && k == 0) {
                //do nothing
            } else {
                scene.add(createSphere([i, j, k], redColor,0.15));
            }
        }
    }
}






//add the grid in the background
for(let n=-1; n<2; n++){
    for(let m=-1; m<2; m++){
        let xRod = createRodMesh([-1.5, n,m], [1.5, n,m], glassColor,0.01);
        let yRod = createRodMesh([n, -1.5,m], [n, 1.5,m], glassColor,0.01);
        let zRod = createRodMesh([n,m, -1.5], [n, m,1.5], glassColor,0.01);
        scene.add(xRod);
        scene.add(yRod);
        scene.add(zRod);
    }
}

//add the origin to background grid
const origin = createSphere([0,0,0], 0x000000,0.05);
scene.add(origin);







//FROBENIUS

//frobenius map x->x^3 has 1 fixed points (+-1) and eight 3-cycles
// (they are in four groups, each  negative of the other)
//each group has a LONG DIAGONAL as the last connection of the triangle, which we will have to render separately

const o1 = [[1,-1,1],[1,0,0], [1,1,1]];
const o2 = [[-1,1,-1],[-1,0,0], [-1,-1,-1]];
//the associated diagonals
const d1 = [[1,-1,1], [1,1,1]];
const d2 = [[-1,1,-1], [-1,-1,-1]];

const o3 = [[0,1,1],[0,1,0], [0,1,-1]];
const o4 =  [[0,-1,-1],[0,-1,0], [0,-1,1]];
//the associated diagonals
const d3 = [[0,1,1],[0,1,-1]];
const d4 = [[0,-1,-1],[0,-1,1]];

const o5 = [[1,-1,-1],[1,0,1],[1,1,-1]];
const o6 = [[-1,1,1],[-1,0,-1],[-1,-1,1]];
//the associated diagonals
const d5 = [[1,-1,-1],[1,1,-1]];
const d6 = [[-1,1,1],[-1,-1,1]];

const o7 = [[1,-1,0],[1,0,-1],[1,1,0]];
const o8 = [[-1,1,0],[-1,0,1],[-1,-1,0]];
//the associated diagonals
const d7 = [[1,-1,0],[1,1,0]];
const d8 = [[-1,1,0],[-1,-1,0]];


//ORBIT 1
for(let i=0; i<o1.length-1; i++){
    scene.add(createRodMesh(o1[i],o1[i+1],blueColor,0.025));
}
//and the diagonal
let od1 = function(t){
    let start = toVec3(d1[0]);
    let end = toVec3(d1[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,0,0.3*Math.sin(Math.PI*t)));
    return diag;
}
scene.add(createCurveMesh(od1,blueColor,0.025));


//ORBIT 2
for(let i=0; i<o2.length-1; i++){
    scene.add(createRodMesh(o2[i],o2[i+1],blueColor,0.025));
}
let od2 = function(t){
    let start = toVec3(d2[0]);
    let end = toVec3(d2[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,0,-0.3*Math.sin(Math.PI*t)));
    return diag;
}
scene.add(createCurveMesh(od2,blueColor,0.025));



//ORBIT 3
for(let i=0; i<o3.length-1; i++){
    scene.add(createRodMesh(o3[i],o3[i+1],blueColor,0.025));
}
let od3 = function(t){
    let start = toVec3(d3[0]);
    let end = toVec3(d3[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,0.3*Math.sin(Math.PI*t)),0);
    return diag;
}
scene.add(createCurveMesh(od3,blueColor,0.025));


//ORBIT 4
for(let i=0; i<o4.length-1; i++){
    scene.add(createRodMesh(o4[i],o4[i+1],blueColor,0.025));
}
let od4 = function(t){
    let start = toVec3(d4[0]);
    let end = toVec3(d4[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,-0.3*Math.sin(Math.PI*t)),0);
    return diag;
}
scene.add(createCurveMesh(od4,blueColor,0.025));



//ORBIT 5
for(let i=0; i<o5.length-1; i++){
    scene.add(createRodMesh(o5[i],o5[i+1],blueColor,0.025));
}
let od5 = function(t){
    let start = toVec3(d5[0]);
    let end = toVec3(d5[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,0,-0.3*Math.sin(Math.PI*t)));
    return diag;
}
scene.add(createCurveMesh(od5,blueColor,0.025));



//ORBIT 6
for(let i=0; i<o6.length-1; i++){
    scene.add(createRodMesh(o6[i],o6[i+1],blueColor,0.025));
}
let od6 = function(t){
    let start = toVec3(d6[0]);
    let end = toVec3(d6[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,0,0.3*Math.sin(Math.PI*t)));
    return diag;
}
scene.add(createCurveMesh(od6,blueColor,0.025));


//ORBIT 7
for(let i=0; i<o7.length-1; i++){
    scene.add(createRodMesh(o7[i],o7[i+1],blueColor,0.025));
}
let od7 = function(t){
    let start = toVec3(d7[0]);
    let end = toVec3(d7[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,0,0.3*Math.sin(Math.PI*t)));
    return diag;
}
scene.add(createCurveMesh(od7,blueColor,0.025));


//ORBIT 8
for(let i=0; i<o8.length-1; i++){
    scene.add(createRodMesh(o8[i],o8[i+1],blueColor,0.025));
}
let od8 = function(t){
    let start = toVec3(d8[0]);
    let end = toVec3(d8[1]);
    let dir = end.clone().sub(start);
    let diag = start.add(dir.multiplyScalar(t));
    diag.add(new Vector3(0,0,-0.3*Math.sin(Math.PI*t)));
    return diag;
}
scene.add(createCurveMesh(od8,blueColor,0.025));



//the fixed point 1
//path for the fixed point 1
let fixPos = function(s){
    let t = 2*Math.PI*s;
    let circ = new Vector3(0,0.2*Math.sin(t),0.2*Math.cos(t));
    circ.add(new Vector3(0,0,1.25));
    return circ;
}
scene.add(createCurveMesh(fixPos,blueColor,0.025));

//path for the fixed point -1
let fixNeg = function(s){
    let t = 2*Math.PI*s;
    let circ = new Vector3(0,0.2*Math.sin(t),0.2*Math.cos(t));
    circ.add(new Vector3(0,0,-1.25));
    return circ;
}
scene.add(createCurveMesh(fixNeg,greenColor,0.025));


//the fixed point -1





// spot light
let spotLight = new PhysicalSpotLight( 0xffffff );
spotLight.position.set( 2, 6.0, 0 );
spotLight.angle = Math.PI / 2;
spotLight.decay = 0;
spotLight.penumbra = 1.0;
spotLight.distance = 0.0;
spotLight.intensity = 2.0;
spotLight.radius = 0.5;

// spot light shadow
spotLight.shadow.mapSize.width = 512;
spotLight.shadow.mapSize.height = 512;
spotLight.shadow.camera.near = 0.1;
spotLight.shadow.camera.far = 10.0;
spotLight.shadow.focus = 1.0;
spotLight.castShadow = true;
scene.add( spotLight );

// spot light target
const targetObject = spotLight.target;
targetObject.position.x = 1;
targetObject.position.y = 0;
targetObject.position.z = 0.05;
scene.add( targetObject );









const ground = new Mesh(
    new BoxGeometry( 100, 0.1, 100 ),
    new MeshPhysicalMaterial({
        color:0xffffff, clearcoat:1, roughness:0.5,metalness:0
    }),
);
ground.position.set(0.,-1.5,0);
scene.add(ground);

// const backWall = new Mesh(
//     new BoxGeometry( 100, 100, 0.1 ),
//     new MeshPhysicalMaterial({
//     }),
// );
// backWall.position.set(0,4,31);
// scene.add(backWall);


// environment for the scene
//--------------------------------------------
// set the environment map
const texture = new GradientEquirectTexture();
texture.bottomColor.set( 0xffffff );
texture.bottomColor.set( 0x666666 );
texture.update();
scene.environment = texture;
scene.background = texture;


// camera
//--------------------------------------------
const camera = new PerspectiveCamera();
camera.position.set( 1, 2.2, - 5 );
camera.lookAt( 0, 0, 0 );


// const camera = new PhysicalCamera( 60, window.innerWidth / window.innerHeight, 0.025, 500 );
// camera.position.set( - 0.262, 0.5276, - 1.1606 );
// camera.apertureBlades = 0;
// camera.fStop = 1.5;
// camera.focusDistance = 1.1878;
// let focusPoint = new Vector3();
// focusPoint.set( 0,0,-0.25 );



// set up the renderer
//--------------------------------------------
let renderer = new WebGLRenderer({
    preserveDrawingBuffer:true,
});
renderer.toneMapping = ACESFilmicToneMapping;
document.body.appendChild( renderer.domElement );



// set up the Path tracer
//--------------------------------------------
let pathTracer = new WebGLPathTracer( renderer );
pathTracer.setScene( scene, camera );

pathTracer.renderScale = Math.max( 1 / window.devicePixelRatio, 0.5 );;
pathTracer.tiles.setScalar( 3 );
pathTracer.bounces = 30.;



// SCREENSHOTS
//---------------------------------------------------

function saveImage(canvas){
    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let hour = date.getHours();
    let minute = date.getMinutes();

    let link = document.createElement('a');
    link.download = `pathtrace ${month}-${day}-${hour}${minute}`+'.png';
    link.href = canvas.toDataURL("image/png");
    //.replace("image/png", "image/octet-stream");
    link.click();
}


const gui = new GUI().close();
let params = {
    saveit: ()=>saveImage(renderer.domElement),
};
gui.add( params, 'saveit' );



//controls
//--------------------------------------------
let controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.33, - 0.08 );
controls.addEventListener( 'change', () => pathTracer.updateCamera() );
controls.update();
// controls.addEventListener( 'change', () => {
//     camera.focusDistance = camera.position.distanceTo( focusPoint ) - camera.near;
//     pathTracer.updateCamera();
// } );




//animate loop
//--------------------------------------------


onResize();

animate();

window.addEventListener( 'resize', onResize );

function animate() {

    // if the camera position changes call "ptRenderer.reset()"
    requestAnimationFrame( animate );

    // update the camera and render one sample
    pathTracer.renderSample();

}

function onResize() {

    // update rendering resolution
    const w = window.innerWidth;
    const h = window.innerHeight;

    renderer.setSize( w, h );
    renderer.setPixelRatio( window.devicePixelRatio );

    const aspect = w / h;
    camera.aspect = aspect;
    camera.updateProjectionMatrix();

    pathTracer.setScene( scene, camera );

}

