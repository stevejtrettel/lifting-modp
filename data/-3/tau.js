import {Vector2} from "three";

//the hexagonal torus
const tau = new Vector2(1/2, Math.sqrt(3)/2);
const alpha = new Vector2(-13/2, Math.sqrt(-3)/2);

let curveLength = 4*Math.PI*tau.x;
let curveArea = 4*Math.PI*tau,y;


//CURVE FOR THE HEX TORUS
let coordCurve = function(t){

    // let a =0.104;
    // let b = 2.67;
    // let n = 6;

    let a =0.276;
    let b =1.9;
    let n = 3;

    // let a =0.42;
    // let b = 2.6;
    // let n = 2;

    // let a =0.028;
    // let b = 3.46;
    // let n = 18;

    return {
        phi: Math.PI/2 + a*b*Math.cos(n*t),
        theta: t + a*Math.sin(2*n*t)
    };
}



export {tau, alpha, curveLength,curveArea, coordCurve};
