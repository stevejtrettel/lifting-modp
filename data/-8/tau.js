import {Vector2} from "three";


const tau = new Vector2(0,Math.sqrt(2));

//these *dont* come directly from tau, as thats the wrong representation of the rectangle
//need to change coordinates in SL2Z: apply Tinv to move one to the left
//then apply S = -1/z
//this maps tau to a point along the circle (x-1/2)^2+y^2=1
//multiply by 2Pi to get (A/2,L/2)

const curveArea = 4*Math.PI/3;
const curveLength = 4*Math.PI/3*Math.sqrt(2);

//finding this curve is possible with basic trig!
//length is 2pi R for R the radius of cross section of sphere at height of curve
//this implies R = 2sqrt(2)/3.
//drawing a triangle shows the angle a from the horizontal at the equator is arccos(this).

let coordCurve = function(t){

    const a = Math.acos(2*Math.sqrt(2)/3);

    return {
        phi: Math.PI/2 - a,
        //this makes skinnier torus in projection. + a is OK too
        theta: t
    };
}



export {tau, curveLength,curveArea, coordCurve};
