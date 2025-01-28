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
import HopfTorus from "../../items/HopfTorusOLD";
import FD from "../../items/FD";



// init scene and objects, and lights
//--------------------------------------------

const scene = new Scene();

let getCurve = function(a,b,n,p){
    return function(t){
        return {
            phi: p+a*b*Math.cos(n*t),
            theta: t + a*Math.sin(2*n*t)
        };
    }
}


let dist = 1.25;

let tau1 = new Vector2(0,Math.sqrt(2));
let area1 = 4*Math.PI/3;
let length1 =  4*Math.PI/3*Math.sqrt(2);
let hopf1 = new HopfTorus(getCurve(0,0,0,Math.PI/2+0.7),length1,area1);

let base1 = hopf1.getBaseSphere(0xe86c43);
base1.position.set(2*dist,0,0);
scene.add(base1);

let torus1 = hopf1.getSurfaceMesh({color: 0xe86c43, metalness:0, roughness:0.3,clearcoat:true});
torus1.scale.set(0.28,0.28,0.28);
torus1.rotateX(Math.PI/2);
torus1.position.set(2*dist,dist,0);
scene.add(torus1);

let fd1 = new FD(tau1);
let parallel1 = fd1.getParallelogram(0xe86c43);
parallel1.scale.set(0.1,0.1,0.1);
parallel1.rotateX(Math.PI/2);
parallel1.position.set(2*dist-0.25,-0.6,-1.5);
scene.add(parallel1);








let tau2 = new Vector2(0,1);
let area2 = 2*Math.PI;
let length2 = 2*Math.PI;
let hopf2 = new HopfTorus(getCurve(0,0,0,Math.PI/2),length2,area2);

let base2 = hopf2.getBaseSphere(0xffcc40);
base2.position.set(dist,0,0);
scene.add(base2);

let torus2 = hopf2.getSurfaceMesh({color: 0xffcc40, metalness:0, roughness:0.3,clearcoat:true});
torus2.scale.set(0.2,0.2,0.2);
torus2.rotateX(Math.PI/2);
torus2.position.set(dist,dist,0);
scene.add(torus2);

let fd2 = new FD(tau2);
let parallel2 = fd2.getParallelogram(0xffcc40);
parallel2.scale.set(0.1,0.1,0.1);
parallel2.rotateX(Math.PI/2);
parallel2.position.set(dist-0.25,-0.6,-1.5);
scene.add(parallel2);


let tau3 = new Vector2(1/2, Math.sqrt(3)/2);
let area3 = 4*Math.PI*tau3.x;
let length3 = 4*Math.PI*tau3.y;
let hopf3 = new HopfTorus(getCurve(0.276,1.8,3,Math.PI/2),length3,area3);

let base3 = hopf3.getBaseSphere(0x43bf4b);
base3.position.set(0,0,0);
scene.add(base3);


let torus3 = hopf3.getSurfaceMesh({color: 0x43bf4b, metalness:0, roughness:0.3,clearcoat:true});
torus3.scale.set(0.15,0.15,0.15);
torus3.rotateX(Math.PI/2);
torus3.position.set(0,dist,0);
scene.add(torus3);

let fd3 = new FD(tau3);
let parallel3 = fd3.getParallelogram(0x43bf4b);
parallel3.scale.set(0.1,0.1,0.1);
parallel3.rotateX(Math.PI/2);
parallel3.rotateY(Math.PI);
parallel3.position.set(0.5,-0.6,-1.5);
scene.add(parallel3);




let tau4 = new Vector2(1/2, Math.sqrt(7)/2);
let area4 = 4*Math.PI*tau4.x;
let length4 = 4*Math.PI*tau4.y;
let hopf4 = new HopfTorus(getCurve(0.1179,3.89,7,Math.PI/2),length4,area4);

let base4 = hopf4.getBaseSphere(0x4287f5);
base4.position.set(-dist,0,0);
scene.add(base4);

let torus4 = hopf4.getSurfaceMesh({color: 0x4287f5, metalness:0, roughness:0.3,clearcoat:true});
torus4.scale.set(0.15,0.15,0.15);
torus4.rotateX(Math.PI/2);
torus4.position.set(-dist,dist,0);
scene.add(torus4);


let fd4 = new FD(tau4);
let parallel4 = fd4.getParallelogram(0x4287f5);
parallel4.scale.set(0.09,0.09,0.09);
parallel4.rotateX(Math.PI/2);
parallel4.rotateY(Math.PI);
parallel4.position.set(-dist+0.5,-0.6,-1.5);
scene.add(parallel4);



let tau5 = new Vector2(1/2, Math.sqrt(11)/2);
let area5 = 4*Math.PI*tau5.x;
let length5 = 4*Math.PI*tau5.y;
let hopf5 = new HopfTorus(getCurve(0.07,5.705,11,Math.PI/2),length5,area5);

let base5 = hopf5.getBaseSphere(0xa83cf0);
base5.position.set(-2*dist,0,0);
scene.add(base5);


let torus5 = hopf5.getSurfaceMesh({color: 0xa83cf0, metalness:0, roughness:0.3,clearcoat:true});
torus5.scale.set(0.155,0.155,0.155);
torus5.rotateX(Math.PI/2);
torus5.position.set(-2*dist,dist,0);
scene.add(torus5);


let fd5 = new FD(tau5);
let parallel5 = fd5.getParallelogram(0xa83cf0);
parallel5.scale.set(0.075,0.075,0.075);
parallel5.rotateX(Math.PI/2);
parallel5.rotateY(Math.PI);
parallel5.position.set(-2*dist+0.5,-0.6,-1.5);
scene.add(parallel5);



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

