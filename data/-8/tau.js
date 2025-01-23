import {Vector2} from "three";


const tau = new Vector2(0,Math.sqrt(2));

//these *dont* come directly from tau, as thats the wrong representation of the rectangle
//for area and length we need the *diagonal* rep of the rectangle
const diag = new Vector2(1,Math.sqrt(2));
let curveArea = 4*Math.PI*diag,x;
let curveLength = 4*Math.PI*diag.y;



//CURVE FOR THE HEX TORUS
let coordCurve = function(t){

    let a =0.276;
    let b =1.9;
    let n = 3;

    return {
        phi: Math.PI/2 + a*b*Math.cos(n*t),
        theta: t + a*Math.sin(2*n*t)
    };
}



export {tau, curveLength,curveArea, coordCurve};
