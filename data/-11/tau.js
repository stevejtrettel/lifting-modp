import {Vector2} from "three";


const tau = new Vector2(1/2, Math.sqrt(11)/2);

//these come directly from tau
let curveArea = 4*Math.PI*tau,x;
let curveLength = 4*Math.PI*tau.y;



//CURVE FOR THE HEX TORUS
let coordCurve = function(t){

    let a =0.07;
    let b =5.705;
    let n = 11;

    // let a =0.03305;
    // let b =6;
    // let n = 22;

    return {
        phi: Math.PI/2 + a*b*Math.cos(n*t),
        theta: t + a*Math.sin(2*n*t)
    };
}



export {tau, curveLength,curveArea, coordCurve};
