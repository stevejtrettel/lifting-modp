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
    Vector3, Group, SphereGeometry, FloatType, DoubleSide,
} from "three";

import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

import {
    GradientEquirectTexture,
    WebGLPathTracer,
    ShapedAreaLight, PhysicalSpotLight,PhysicalCamera,
} from 'three-gpu-pathtracer';

import {GUI} from "three/examples/jsm/libs/lil-gui.module.min.js";

import HopfPreimage from "../../items/HopfPreimage";
import {colors} from "../../items/utils";

import {coordCurve as coordCurve3 } from "../../../data/-3/tau";
import {coordCurve as coordCurve4 } from "../../../data/-4/tau";
import {coordCurve as coordCurve7 } from "../../../data/-7/tau";
import {coordCurve as coordCurve8 } from "../../../data/-8/tau";
import {coordCurve as coordCurve11 } from "../../../data/-11/tau";


// init scene and objects, and lights
//--------------------------------------------

const scene = new Scene();





let g4 = new Group();
scene.add(g4);
let hopf4 = new HopfPreimage(coordCurve4);
g4.add(hopf4.getCurveOnBase(colors.red));
let torus4 = hopf4.getPreimageCurve(0.27,colors.red);
torus4.rotateX(Math.PI/2);
torus4.position.set(0,1.5,0);
g4.add(torus4);
g4.position.set(3,0,0);


let g8 = new Group();
scene.add(g8);
let hopf8 = new HopfPreimage(coordCurve8);
g8.add(hopf8.getCurveOnBase(colors.yellow));
let torus8 = hopf8.getPreimageCurve(0.34,colors.yellow);
torus8.rotateX(Math.PI/2);
torus8.position.set(0,1.5,0);
g8.add(torus8);
g8.position.set(1.5,0,0);



let g3 = new Group();
scene.add(g3);
let hopf3 = new HopfPreimage(coordCurve3);
g3.add(hopf3.getCurveOnBase(colors.green));
let torus3 = hopf3.getPreimageCurve(0.2,colors.green);
torus3.rotateX(Math.PI/2);
torus3.position.set(0,1.5,0);
g3.add(torus3);






let g7 = new Group();
scene.add(g7);
let hopf7 = new HopfPreimage(coordCurve7);
g7.add(hopf7.getCurveOnBase(colors.blue));
let torus7 = hopf7.getPreimageCurve(0.2,colors.blue);
torus7.rotateX(Math.PI/2);
torus7.position.set(0,1.5,0);
g7.add(torus7);
g7.position.set(-1.5,0,0);




let g11 = new Group();
scene.add(g11);
let hopf11 = new HopfPreimage(coordCurve11);
g11.add(hopf11.getCurveOnBase(colors.purple));
let torus11 = hopf11.getPreimageCurve(0.2,colors.purple);
torus11.rotateX(Math.PI/2);
torus11.position.set(0,1.5,0);
g11.add(torus11);
g11.position.set(-3,0,0);







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
ground.position.set(0.,-0.75,0);
scene.add(ground);

const backWall = new Mesh(
    new BoxGeometry( 100, 100, 0.1 ),
    new MeshPhysicalMaterial({
    }),
);
backWall.position.set(0,0,5);
scene.add(backWall);


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

