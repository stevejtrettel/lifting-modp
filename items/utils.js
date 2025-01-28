import {Vector3, Vector4} from "three";


let toroidalCoords = function(a,b,c){
    let x = Math.cos(a)*Math.sin(c);
    let y = Math.sin(a)*Math.sin(c);
    let z = Math.cos(b)*Math.cos(c);
    let w = Math.sin(b)*Math.cos(c);
    //rotate (x,z,-y)
    return new Vector4(x,z,-y,w);
}

let stereoProj = function(pt){
    return new Vector3(-pt.x,-pt.y,pt.z).divideScalar(1.-pt.w);
}

let sphCoords = function(angles){
    let phi = angles.phi;
    let theta = angles.theta;

    let x = Math.cos(theta)*Math.sin(phi);
    let y = Math.sin(theta)*Math.sin(phi);
    let z = Math.cos(phi);

    return new Vector3(x,y,z);
}



let sphLength = function(curve, start, end){
    //length of curve(t) between t=start and t=end
}

let sphLengthInverse = function(curve, value){
    //finds the t such that the length on [0,t] is equal to value
}

let sphArea = function(curve){

}


export{
    stereoProj,
    toroidalCoords,
    sphCoords,
    sphLength,
    sphArea,
    sphLengthInverse,
}
