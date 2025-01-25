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

//color scheme
const glassColor =0xc9eaff;
const redColor = 0xd43b3b;//0xe03d24
const greenColor = 0x4fbf45;
const blueColor = 0x4287f5;
const yellowColor = 0xffd738;

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


function createPointOnCircle(ang, color,rad=0.2){
    let p = new Vector3(Math.cos(ang),0,Math.sin(ang));
    let geom = new SphereGeometry(rad);
    let mat = createGlassHex(color);
    let mesh = new Mesh(geom,mat);
    mesh.position.set(p.x,p.y,p.z);
    return mesh;
}


function createCircleArcMesh(ang0,ang1,color,rad=0.02){

    let closed = false;
    if(ang1-ang0>2*Math.PI-0.1){closed=true};

    let pts = [];
    for(let i=0; i<100; i++){
        let t = ang0 + (ang1-ang0)*i/99;
        pts.push(new Vector3(Math.cos(t),0,Math.sin(t)));
    }

    let path = new CatmullRomCurve3(pts,closed);
    let arcGeom = new TubeGeometry(path,64,rad,8,closed);
    return new Mesh(arcGeom, createGlassHex(color));
}


function createRodMesh(start,end,color,rad=0.02){

    let dir = end.clone().sub(start);

    let pts=[];
    for(let i=11; i<90;i++){
        let t = i/100;
        let p = start.clone().add(dir.clone().multiplyScalar(t))
        pts.push(p);
    }
    const path = new CatmullRomCurve3(pts);
    const rodGeom = new TubeGeometry(path,64,rad)
    return new Mesh(rodGeom,createGlassHex(color));

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






//draw the points on the unit circle
for(let i=0; i<8; i++){
    let t = 2*Math.PI * i/8;
    scene.add(createPointOnCircle(t,redColor));
}


// //draw the full circle
let unitCircle = createCircleArcMesh(0,2*Math.PI,glassColor,0.07);
unitCircle.position.set(0,-0.25,0);
 scene.add(unitCircle);

//draw glass circular arcs
// for(let i=0; i<8; i++){
//     let start = 2*Math.PI * i/8+0.11;
//     let end = 2*Math.PI *(i+1)/8-0.11;
//     scene.add(createCircleArcMesh(start,end,glassColor,0.07));
// }


let start,end,ang;


//draw the generators
// for(let i=0; i<8; i++){
//     start = 2*Math.PI * i/8+0.11;
//     end = 2*Math.PI *(i+1)/8-0.11;
//     scene.add(createCircleArcMesh(start,end,blueColor,0.02));
// }




//draw frobenius

//the fixed point 1;
let f1 = function(s){
    let t = 2*Math.PI*s;
    let p = new Vector3(Math.cos(t),0,Math.sin(t)).multiplyScalar(0.2);
    p.x -= 1.3;
    return p;
}

scene.add( createCurveMesh(f1,yellowColor,0.03));


//the fixed point -1;
let f2 = function(s){
    let t = 2*Math.PI*s;
    let p = new Vector3(Math.cos(t),0,Math.sin(t)).multiplyScalar(0.2);
    p.x += 1.3;
    return p;
}

scene.add( createCurveMesh(f2,yellowColor,0.03));


//the first rod
ang = Math.PI/4
start = new Vector3(Math.cos(ang),0, Math.sin(ang));
end = new Vector3(Math.cos(ang),0, -Math.sin(ang));
scene.add(createRodMesh(start,end,yellowColor,0.03));

//the second rod
ang = Math.PI/2
start = new Vector3(Math.cos(ang),0, Math.sin(ang));
end = new Vector3(Math.cos(ang),0, -Math.sin(ang));
scene.add(createRodMesh(start,end,yellowColor,0.03));

//the third rod
ang = 3*Math.PI/4
start = new Vector3(Math.cos(ang),0, Math.sin(ang));
end = new Vector3(Math.cos(ang),0, -Math.sin(ang));
scene.add(createRodMesh(start,end,yellowColor,0.03));














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

