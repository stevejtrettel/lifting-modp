import {Vector2} from "three";


const tau = new Vector2(0,1);

//these *dont* come directly from tau, as thats the wrong representation of the rectangle
//need to change coordinates in SL2Z: apply Tinv to move one to the left
//then apply S = -1/z
//this maps tau 1/2 + i/2
//multiply by 2Pi to get (A/2,L/2)

const curveArea = 2*Math.PI;
const curveLength =  2*Math.PI;

//this is the equator of the 2 sphere!

let coordCurve = function(t){

    return {
        phi: Math.PI/2,
        theta: t
    };
}


export {tau, curveLength,curveArea, coordCurve};
