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
    Vector3, Group, SphereGeometry,FloatType,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {
    GradientEquirectTexture,
    WebGLPathTracer,
    ShapedAreaLight, PhysicalSpotLight,PhysicalCamera,
} from 'three-gpu-pathtracer';

import {GUI} from "three/examples/jsm/libs/lil-gui.module.min.js";


import {colors} from "../../../items/utils";
import HopfTorus from "../../../items/HopfTorus";
import {coordCurve,latticeData} from "/data/-3/tau";



// init scene and objects, and lights
//--------------------------------------------



const scene = new Scene();


// the computer for dealing with the hopf torus
let torus = new HopfTorus(coordCurve,latticeData);


//drawing the torus surface in R3
let surf = torus.getSurface(colors.glass,true);
scene.add(surf);

//draw the two circles that are the real points:
//this is not a rectangle, so only one real component
let real1 = function(t){
    //generator in fiber direction
    let dir = torus.fromTauCoords([1,0]);
    dir.multiplyScalar(t);
    return dir.add(torus.fromTauCoords([0,0.]));
}
scene.add(torus.getLift(real1,colors.green,0.04,false));

//add in the marked point
scene.add(torus.getPoint(new Vector2(4,0),0x000000,0.08));




//
// // area light for the scene:
// let areaLight = new ShapedAreaLight( new Color( 0xffffff ), 5.0, 1.0, 1.0 );
// areaLight.position.x = 1.5;
// areaLight.position.y = 1.0;
// areaLight.position.z = - 0.5;
// areaLight.rotateZ( - Math.PI / 4 );
// areaLight.rotateX( - Math.PI / 2 );
// areaLight.isCircular = false;
// scene.add( areaLight );
//
// let redLight = new ShapedAreaLight( new Color( 0xff0000 ), 15.0, 3.25, 3.75 );
// redLight.position.y = 1.25;
// redLight.position.z = - 3.5;
// redLight.rotateX( Math.PI );
// redLight.isCircular = false;
// scene.add( redLight );



// spot light
let spotLight = new PhysicalSpotLight( 0xffffff );
spotLight.position.set( 2, 6.0, 0 );
spotLight.angle = Math.PI / 2;
spotLight.decay = 0;
spotLight.penumbra = 1.0;
spotLight.distance = 0.0;
spotLight.intensity = 5.0;
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
ground.position.set(-1.,-4,-1);
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

