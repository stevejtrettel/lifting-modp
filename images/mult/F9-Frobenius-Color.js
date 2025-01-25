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

let sphGeom = new SphereGeometry(0.25);


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


//add each orbit to the scene one by one:


//the origin (not in any orbit)
let origin = new Mesh(sphGeom,createGlassHex(0xc9eaff));
scene.add(origin);

//SINGLETONS 1 and -1
let pos1 = new Mesh(sphGeom,createGlassHex(0xd43b3b));
pos1.position.set(1,0,0);
scene.add(pos1);

let neg1 = new Mesh(sphGeom,createGlassHex(0xd154c7));
neg1.position.set(-1,0,0);
scene.add(neg1);


//ORBIT 1: the points i, -i
let o1Mat = createGlassHex(0x4471e3);
let o1 = new Group();
scene.add(o1);

let o11 = new Mesh(sphGeom,o1Mat);
o11.position.set(0,0,1);
o1.add(o11);

let o12 = new Mesh(sphGeom,o1Mat);
o12.position.set(0,0,-1);
o1.add(o12);

//curve connecting them
let pts1 = [];
for(let i=18; i<83; i++){
    let t = Math.PI*i/100;
    pts1.push(new Vector3(0,0.35*Math.sin(t),Math.cos(t)));
}
let c1 = new CatmullRomCurve3(pts1);
let tube1 = new TubeGeometry(c1,128,0.02);
let curve1 = new Mesh(tube1,o1Mat);
o1.add(curve1);




//ORBIT 2: 1+i -1+i
let o2= new Group();
scene.add(o2);

let o2Mat = createGlassHex(0x4e9c38);

let o21 = new Mesh(sphGeom,o2Mat);
o21.position.set(1,0,1);
o2.add(o21);

let o22 = new Mesh(sphGeom,o2Mat);
o22.position.set(-1,0,1);
o2.add(o22);

//curve connecting them
let pts2 = [];
for(let i=18; i<83; i++){
    let t = Math.PI*i/100;
    pts2.push(new Vector3(Math.cos(t),0.35*Math.sin(t),1));
}
let c2 = new CatmullRomCurve3(pts2);
let tube2 = new TubeGeometry(c2,128,0.02);
let curve2 = new Mesh(tube2,o2Mat);
o2.add(curve2);




//ORBIT 3: -1+i -1-i
let o3 = new Group();
scene.add(o3);

let o3Mat = createGlassHex(0xffac38);

let o31 = new Mesh(sphGeom,o3Mat);
o31.position.set(-1,0,-1);
o3.add(o31);

let o32 = new Mesh(sphGeom,o3Mat);
o32.position.set(1,0,-1);
o3.add(o32);

//curve
let pts3 = [];
for(let i=18; i<83; i++){
    let t = Math.PI*i/100;
    pts3.push(new Vector3(Math.cos(t),0.35*Math.sin(t),-1));
}
let c3 = new CatmullRomCurve3(pts3);
let tube3 = new TubeGeometry(c3,128,0.02);
let curve3 = new Mesh(tube3,o3Mat);
o3.add(curve3);









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

