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


//make the glass ball representing a point






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



function createRodMesh(start,end,color,rad=0.02){

    let dir = new Vector3(-(end[0]-start[0]),0,end[1]-start[1]);
    let st = new Vector3(-start[0],0,start[1]);

    let pts=[];
    for(let i=11; i<90;i++){
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
    let mesh = new Mesh(sphGeom,createGlassHex(color));
    mesh.position.set(-pos[0],0,pos[1]);
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

        if(i==0 && j== 0){
           // scene.add(createSphere([i,j], glassColor));
        }
        else{
            scene.add(createSphere([i,j], redColor));
        }

    }
}






//add the grid in the background
for(let n=-1; n<2; n++){

    let horizRod = createRodMesh([-2.,n],[2.,n],glassColor);
    let vertRod = createRodMesh([n,-2.],[n,2.], glassColor);

    horizRod.position.set(0,-0.25,0);
    vertRod.position.set(0,-0.25,0);
    scene.add(horizRod);
    scene.add(vertRod);
}

//add the origin to background grid
const origin = createSphere([0,0], 0x000000,0.05);
origin.position.set(0,-0.25,0);
scene.add(origin);





//GENERATOR
//add the edges to the scene
//list of group elements in order
// const gen = [
//     [1,0], [1,1], [0,-1], [1,-1], [-1,0], [-1,-1], [0,1], [-1,1],[1,0]
// ];
// for(let i=0; i<gen.length-1; i++){
//     scene.add(createRod(gen[i],gen[i+1],blueColor));
// }



//FROBENIUS

//define the different curves we need to connect points

//path for the fixed point 1
let f1 = function(s){
    let t = 2*Math.PI*s;
    return new Vector3(1.35+0.2*Math.sin(t),0,0.2*Math.cos(t))
}

//path for the fixed point -1
let f2 = function(s){
    let t = 2*Math.PI*s;
    return new Vector3(-1.35+0.2*Math.sin(t),0,0.2*Math.cos(t));
}

//path for i, -i
let f3 = function(s){
    let t = Math.PI*s;
    return new Vector3(0,0.35*Math.sin(t),Math.cos(t));
}

//path for 1+i, -1+i
let f4 = function(s){
    let t = Math.PI*s;
    return new Vector3(Math.cos(t),0,0.35*Math.sin(t)+1);
}

//path for 1-i, -1-i
let f5 = function(s){
    let t = Math.PI*s;
    return new Vector3(Math.cos(t),0,-0.35*Math.sin(t)-1);
}


let frobeniusCurves = [f1,f2,f3,f4,f5];

for(let i=0; i<frobeniusCurves.length; i++){
    let curve = createCurveMesh(frobeniusCurves[i],yellowColor,0.03);
    scene.add(curve);
}





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
ground.position.set(0.,-0.5,0);
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

