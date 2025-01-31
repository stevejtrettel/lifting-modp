import {
    CatmullRomCurve3,
    Mesh,
    MeshPhysicalMaterial,
    TubeGeometry,
    Vector2,
    Vector3,
    Vector4,
    SphereGeometry,
    DoubleSide,
    Group,
} from "three";

import {VarTubeGeometry} from "./VarTubeGeometry";
import ParametricGeometry from "./ParametricGeometry";




let defaultMatParams = {
    color : 0xffffff,
        //0x4d80d1,
        //0xc9eaff,//lightblue
        //0xbee6c5,
        //0xffffff,
    side: DoubleSide,
    transparent:true,
    clearcoat:1,
    opacity:1,
    transmission:0.99,
    ior:1.5,
    thickness:0.2,
    roughness:0.5,
};



let toroidalCoords = function(a,b,c){
    let x = Math.cos(a)*Math.sin(c);
    let y = Math.sin(a)*Math.sin(c);
    let z = Math.cos(b)*Math.cos(c);
    let w = Math.sin(b)*Math.cos(c);

    //rotate (x,z,-y)
    return new Vector4(x,z,-y,w);
}


let stereoProj = function(pt){
    return new Vector3(pt.x,pt.y,pt.z).divideScalar(1.-pt.w);
}


//a class for showing what happens when we don't do all the
//work to make an isometric parameterization
//works same as HopfTorus

//coord curve is a function of the form t->{theta: f(t), phi:g(t)}
class HopfTorusNonIso{
    constructor(coordCurve,length=6.28, area=6.28) {

        this.length = length;
        this.area = area;

        this.coordCurve = coordCurve;
        this.res = 256;

        //now build the geometry of the hopf surface:
        // map from R2 to R4, in the 3 sphere
        this.surface = function(s,t){
            let angles = coordCurve(t);
            let phi = angles.phi;
            let theta = angles.theta;
            return  stereoProj(toroidalCoords(theta+s,s,phi/2));
        }

    }

    getCurve(curveFn, color=0x25178f, radius = 0.01,closed=false){

        //the curve mesh
        let curvePts = [];
        let radiusValues = [];
        for(let i=0;i<this.res+1;i++){
            let t = 2.*Math.PI * i/this.res;
            let pt = curveFn(t);
            curvePts.push(pt);
            let r = radius*(1+pt.lengthSq());
            radiusValues.push(new Vector3(r,r,r));
        }

        //this is a curve we can call with respect to arclength!
        let curve  = new CatmullRomCurve3(curvePts);
        let radii = new CatmullRomCurve3(radiusValues);
        let mat = new MeshPhysicalMaterial({color:color, roughness:0.5,metalness:0,clearcoat:1});
        let curveGeom = new VarTubeGeometry(curve, radii, 2.*this.res,  16, closed);
        return new Mesh(curveGeom, mat);
    }


    getSurface(materialParams = defaultMatParams){

        let mat = new MeshPhysicalMaterial(materialParams);

        let surface = this.surface;
        let paraFn = function(s,t,dest){
            let S = 2.*Math.PI*s;
            let T = 2.*Math.PI*t;
            let q = surface(S,T);
            dest.set(q.x,q.y,q.z);
        };

        let surfGeom = new ParametricGeometry(paraFn, this.res, this.res);
       return new Mesh(surfGeom, mat);

    }



    //takes in a point p=(x,y) in the plane
    getPointXY(p, color=0x8c1a0f, radius =0.01){
        //p is mathematica input [x,y] in the domain spanned by 1 and tau.
        let P = new Vector2(p[0],p[1]).multiplyScalar(2.*Math.PI);

        let pt = this.surface(P.x,P.y);
        let r2 = pt.lengthSq();

        let pointGeom = new SphereGeometry(radius*(1+r2));
        let pointMat = new MeshPhysicalMaterial({color:color,roughness:0.1,metalness:0,clearcoat:1});
        let mesh = new Mesh(pointGeom,pointMat)
        mesh.position.set(pt.x,pt.y,pt.z);
        return mesh;
    }

    getFiberTranslate(x,color,radius){
        let surf = this.surface;
        let area = this.area;
        let length=this.length;

        let curve = function(t){
            //translate along curve from (0,0) to (A/2,L/2):
            //to go x percent is easy; just multiply endpoint by x
            let pt = new Vector2(area/2, length/2).multiplyScalar(1.153*x);
            pt.add(new Vector2(t,0));
            //now apply isometry
            return surf(pt.x,pt.y);
        }

        return this.getCurve(curve,color,radius,false);
    }

    getEdgeTranslate(x,color,radius){
        let surf = this.surface;
        let area = this.area;
        let length=this.length;

        let curve = function(t){

            //move horizontally along the fiber to get new point
            //fiber has length 2Pi
            let dist = 2.*Math.PI *x;

            //draw translate of the curve connecting  (0,0) to (A/2,L/2)
            let pt = new Vector2(t*area/(4*Math.PI)+dist, t*length/(4*Math.PI)).multiplyScalar(1.05);
            //now apply isometry
            return surf(pt.x,pt.y);
        }
        return this.getCurve(curve,color,radius,false);
    }

    getGridlines(N, edgeColor, vertexColor, radius) {

        let lines = new Group();

        //get curves on the surface:
        for (let i = 0; i < N + 1; i++) {
            let horiz = this.getFiberTranslate(i / N, edgeColor, radius);
            let vert = this.getEdgeTranslate(i / N, edgeColor, radius);
            lines.add(horiz);
            lines.add(vert);
        }

        return lines;
    }

}


export default HopfTorusNonIso;
