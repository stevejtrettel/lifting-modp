

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


import ParametricGeometry from "../../items/ParametricGeometry";
import {VarTubeGeometry} from "../../items/VarTubeGeometry";


//a file drawing a torus of revolution, a non-conformal map.


import {colors, makeMaterial, stereoProj, toroidalCoords} from "../../items/utils";


// init scene and objects, and lights
//--------------------------------------------

const scene = new Scene();




let parameterization = function(s,t){
    s *= 2*Math.PI;
    t *= 2*Math.PI;

    let R = 1;
    let r = 0.65;

    let x = (R+r*Math.sin(s))*Math.cos(t);
    let y = (R+r*Math.sin(s))*Math.sin(t);
    let z = r*Math.cos(s);
    return new Vector3(x,z,-y);

}
let torusRev = function(s,t,dest){
    let p = parameterization(s,t);
    dest.set(p.x,p.y,p.z);
}



let torusGeom = new ParametricGeometry(torusRev,100,100);
let torusMat = makeMaterial(colors.glass);
let torusMesh = new Mesh(torusGeom,torusMat);

scene.add(torusMesh);



let latMat = makeMaterial(colors.red);
let longMat = makeMaterial(colors.orange);



function createLatitude(x){
    //x is between 0 and 1

    //get points and radii
    let curvePts = [];
    let curveRadii = [];
    for(let i=0;i<128;i++){
        let pt = parameterization(x,i/128);
        curvePts.push(pt);
        let r = 0.005*(1+pt.lengthSq());
        curveRadii.push(new Vector3(r,r,r));
    }
    let curve  = new CatmullRomCurve3(curvePts);
    let radii = new CatmullRomCurve3(curveRadii);
    let curveGeom = new VarTubeGeometry(curve, radii, 256,  16, true);

    return new Mesh(curveGeom, latMat);
}


function createLongitude(x){
    //x is between 0 and 1

    //get points and radii
    let curvePts = [];
    let curveRadii = [];
    for(let i=0;i<128;i++){
        let pt = parameterization(i/128,x);
        curvePts.push(pt);
        let r = 0.005*(1+pt.lengthSq());
        curveRadii.push(new Vector3(r,r,r));
    }
    let curve  = new CatmullRomCurve3(curvePts);
    let radii = new CatmullRomCurve3(curveRadii);
    let curveGeom = new VarTubeGeometry(curve, radii, 256,  16, true);

    return new Mesh(curveGeom, longMat);
}


//make circles of latitude and longitude
let N = 50;
let latitudes = new Group();
let longitudes = new Group();
for(let i=0; i<N; i++){
    let x = i/N;

    latitudes.add(createLatitude(x));
    longitudes.add(createLongitude(x));
}

scene.add(latitudes);
scene.add(longitudes);







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
ground.position.set(0.,-1.25,0);
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
camera.position.set( 0, 5, - 1 );
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

