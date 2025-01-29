import {Group} from "three";



//a class to draw the preimage of a curve under the hopf fibration
//doesn't need any of the fancy stuff for isometrics, just points along curve and hopf fibers.
//also can render out the base


class HopfPreimage{
    constructor(coordCurve) {

        this.coordCurve = coordCurve;


    }

    getCurvePreimage(){
        //preimage of entire curve = a surface
    }

    getPointPreimage(t){
        //preimage of c(t) along curve
    }

    getBase(){
        //get glass sphere for base
    }

    getPointBase(t){
        //get point c(t) along curve

    }

    getCurveBase(){
        //get the curve on the base sphere
    }

    getCurveAndBase(){
        //curve and base as one object
        let base = new Group();
        base.add(this.getBase());
        base.add(this.getCurveBase());
        return base;
    }

}


export default HopfPreimage;
