
//color scheme
import {
    EllipseCurve,
    MeshPhysicalMaterial,
    TubeGeometry,
    Vector3,
    Mesh,
    LineCurve3,
    SphereGeometry,
    CatmullRomCurve3
} from "three";

import CircleCurve from "./CircleCurve";


const glassColor =0xc9eaff;
const redColor = 0xd43b3b;//0xe03d24
const greenColor = 0x4fbf45;
const blueColor = 0x4287f5;
const yellowColor = 0xffd738;


//some material creation functions
let makeGlass = function(color){
    return new MeshPhysicalMaterial({
        color : color,
        transparent:true,
        clearcoat:1,
        opacity:1,
        transmission:0.9,
        ior:1.5,
        thickness:1,
        roughness:0.2,
    });
}

let makeMat = function(color){
    return new MeshPhysicalMaterial({
        color:color,
        metalness:0,
        roughness:0.1,
        clearcoat:1,
    });
}


let toVec3 = function(ang){
    return new Vector3(Math.cos(ang), 0, Math.sin(ang));
}


class Circle{
    constructor(scale=1.){
        this.scale = scale;
    }

    getCircle(color=glassColor,radius=0.02){

        const tau = 2*Math.PI;
        let scale = this.scale;
        let fn = function(t){
            return new Vector3(Math.cos(tau*t),0, Math.sin(tau*t)).multiplyScalar(scale);
        }
        return this.getCurve(fn,color,radius);



        // let curve = new CircleCurve(0,2*Math.PI, this.scale);
        // let geom = new TubeGeometry(curve,64,radius,8,true);
        // let mat = makeGlass(color);
        // return new Mesh(geom,mat);
    }

    getArc(ang0,ang1,color=blueColor,radius=0.025){

        let scale = this.scale;
        let fn = function(t){
            let ang = ang0 + t*(ang1-ang0);
            return new Vector3(Math.cos(ang),0, Math.sin(ang)).multiplyScalar(scale);
        }
        return this.getCurve(fn,color,radius);


        // let curve = new CircleCurve(ang0,ang1,this.scale);
        // let geom = new TubeGeometry(curve,64,radius,8,false);
        // let mat = makeGlass(color);
        // return new Mesh(geom,mat);
    }

    getRod(ang0,ang1,color=blueColor,radius=0.025){
        let p = toVec3(ang0).multiplyScalar(this.scale);
        let q = toVec3(ang1).multiplyScalar(this.scale);
        const line = new LineCurve3(p,q);
        const geom = new TubeGeometry(line,64,radius,8,false);
        const mesh = new Mesh(geom, makeGlass(color));
        return mesh;
    }

    getBentRod(start,end,bendingDir, color=blueColor,radius=0.02){
        //start and end are angles
        const p = toVec3(start).multiplyScalar(this.scale);
        const q = toVec3(end).multiplyScalar(this.scale);
        const dir = q.clone().sub(p);
        let amp =this.scale;

        let pts = [];
        for(let i=0; i<64; i++){
            let t = i/63;
            let pos = p.clone().add(dir.clone().multiplyScalar(t));
            let offset = bendingDir.clone().multiplyScalar(amp*Math.sin(Math.PI*t));
            pos.add(offset)
            pts.push(pos);
        }

        const curve = new CatmullRomCurve3(pts);
        const geom = new TubeGeometry(curve, 64,radius);
        const mesh = new Mesh(geom, makeGlass(color));
        return mesh;
    }

    getVertex(ang,color=redColor,radius=0.15){
        const p = toVec3(ang).multiplyScalar(this.scale);
        let geom = new SphereGeometry(radius);
        let mesh = new Mesh(geom, makeMat(color));
        mesh.position.set(p.x,p.y,p.z);
        return mesh;
    }

    getCurve(fn,color=blueColor,radius=0.025){
        let pts = [];
        for(let i=0; i<64; i++){
            let t = i/63;
            pts.push(fn(t));
        }
        let path = new CatmullRomCurve3(pts);
        let curveGeom = new TubeGeometry(path,64,radius);
        return new Mesh(curveGeom, makeGlass(color));
    }

}


export default Circle;
