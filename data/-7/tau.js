import {Vector2} from "three";


const tau = new Vector2(1/2, Math.sqrt(7)/2);

//these come directly from tau
let curveArea = 4*Math.PI*tau.x;
let curveLength = 4*Math.PI*tau.y;



let coordCurve = function(t){

    let a =0.1179;
    let b =3.89;
    let n = 7;

    // let a =0.222;
    // let b =1.31;
    // let n = 7;

    return {
        phi: Math.PI/2 + a*b*Math.cos(n*t),
        theta: t + a*Math.sin(2*n*t)
    };
}



export {tau, curveLength,curveArea, coordCurve};
