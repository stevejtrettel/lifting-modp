import {
    Vector2,
    Vector3,
    MeshPhysicalMaterial, Mesh, CatmullRomCurve3, SphereGeometry, Group,
} from "three";


import{
    sphCoords,
    toroidalCoords,
    stereoProj,
} from "./utils";
import ParametricGeometry from "./ParametricGeometry";
import {VarTubeGeometry} from "./VarTubeGeometry";


const glassColor =0xc9eaff;
const redColor = 0xd43b3b;//0xe03d24
const greenColor = 0x4fbf45;
const blueColor = 0x4287f5;
const yellowColor = 0xffd738;


class HopfTorus{

    constructor(coordCurve, length, area) {
        //curve is a closed curve on 0 to 2*pi
        this.coordCurve = coordCurve;

        //store length and area
        this.length = length;
        this.area = area;

        //the generators of the lattice in fiber, edge direction
        this.fiberGenerator = new Vector2(2*Math.PI,0);
        this.edgeGenerator = new Vector2(area/2,length/2);

        this.res = 256;

        //auxiliary functions for building the actual isometry
        let fudgeFactor = function(t){
            let dt = 0.00025;
            //do a riemann sum up to t:
            let N = Math.floor(t/dt);
            let total = 0.;
            let x = 0.;
            for(let i=0;i<N;i++){
                let a0 = coordCurve(x);
                let a1 = coordCurve(x+dt);

                let sin = Math.sin(a0.phi/2);
                let dtheta = (a1.theta-a0.theta);
                total+= sin*sin*dtheta;
                x += dt;
            }
            return total;
        }
        this.fudgeFactor = fudgeFactor;

        let arcLength = function(t){
            //find the arclength of c(t) at parameter t;
            let x = 0;
            let dx = 2*Math.PI/1000;
            let N = Math.floor(t/dx);

            let tot = 0;
            for(let i=0; i<N; i++) {
                let a0 = coordCurve(x);
                let a1 = coordCurve(x + dx);

                let sin = Math.sin(a0.phi);
                let dtheta = a1.theta - a0.theta;
                let dphi = a1.phi - a0.phi;
                let ds2 = sin * sin * dtheta * dtheta + dphi * dphi;
                let ds = Math.sqrt(ds2);

                tot += ds;
                x += dx;
            }

            return tot;
        }
        this.arcLength = arcLength;

        let inverseArc = function(L){
            //find the t such that the curve on the 2 sphere has length L from o to t.
            let t=0;
            let tot = 0;
            let N = 3000;
            let dt = 2.*Math.PI/N;

            for(let i=0; i<N; i++){
                let a0 = coordCurve(t);
                let a1 = coordCurve(t+dt);

                let sin = Math.sin(a0.phi);
                let dtheta = a1.theta-a0.theta;
                let dphi = a1.phi-a0.phi;
                let ds2 = sin*sin*dtheta*dtheta + dphi*dphi;
                let ds = Math.sqrt(ds2);

                tot += ds;

                if(tot>L){
                    break;
                }
                t += dt;
            }

            return t;
        }
        //save it
        this.inverseArc = inverseArc;



        let toFundamentalDomain = function(pt){
            //take a point (u,v) in the plane and find a representative in the fundamental domain:

            //figure out the vertical shift that needs to happen
            let vert = Math.floor(pt.y/(length/2));
            //add the appropriate number of the generator:
            pt.add(new Vector2(area/2,length/2).multiplyScalar(vert));

            //remove factors of 2Pi from fiber until in [0,2pi]
            let u = pt.x % 2*Math.PI;
            let v = pt.y;

            return new Vector2(u,v);
        }
        this.toFundamentalDomain = toFundamentalDomain;

        let isometricImage = function(pt){
            //take a point (u,v) in the plane and find its image on the torus
            //FUNDAMENTAL DOMAIN: (0,2PI) in U direction, to height (A/2, L/2).
           // pt = toFundamentalDomain(pt);
            let s = pt.x;
            let v = pt.y;
            //STEP 1: find inverse arclength of 2v
            let t = inverseArc(2*v);
            //STEP 2: PLUG (s,t) into Hopf Map
            let angles = coordCurve(t);
            let phi = angles.phi;
            let theta = angles.theta;
            let f = fudgeFactor(t);
            let P = toroidalCoords(theta+s-f,s-f,phi/2);
            return stereoProj(P);
        }
        this.isometricImage = isometricImage;


    }


    getSurface(color=glassColor, glass=false){

            let mat = new MeshPhysicalMaterial({
                color:color,
                roughness:0.1,
                metalness:0,
                clearcoat:1
            });

        //now build the geometry of the hopf surface:
        //this is a function on [0,2pi]x[0,2pi]
        let coordCurve = this.coordCurve;
        let parameterization = function(s,t,dest){
            //s and t are in [0,1]x[0,1]:
            let S = 2*Math.PI*s;
            let T = 2.*Math.PI*t;
            let angles = coordCurve(T);
            let phi = angles.phi;
            let theta = angles.theta;
            let p4 =  toroidalCoords(theta+S,S,phi/2);
            let p = stereoProj(p4);
            dest.set(p.x,p.y,p.z);
        }
        let surfGeom = new ParametricGeometry(parameterization, this.res, this.res);
        return new Mesh(surfGeom, mat);
    }


    getLift(planecurve, radius=0.05, color =  redColor, glass=false){
        //DOMAIN OF CURVE: [0,1]
        //given a curve x->(s(x),t(x)) in the domain
        //lift under isometry to hopf torus
        let isometricImage = this.isometricImage;
        //the curve mesh
        let curvePts = [];
        let radiusValues = [];
        for(let i=0;i<this.res+1;i++){
            let t = i/this.res;
            let planarPt = planecurve(t);
            let pt = isometricImage(planarPt);
            curvePts.push(pt);
            let r = radius*(1+pt.lengthSq());
            radiusValues.push(new Vector3(r,r,r));
        }
        let curve  = new CatmullRomCurve3(curvePts);
        let radii = new CatmullRomCurve3(radiusValues);
        let mat = new MeshPhysicalMaterial({color:color, roughness:0.5,metalness:0,clearcoat:1});
        let curveGeom = new VarTubeGeometry(curve, radii, 2.*this.res,  16, closed);
        return new Mesh(curveGeom, mat);
    }


    getFiberAt(x,radius, color, glass=false){
        let edgeGen = this.edgeGenerator.clone();
        let fiberCurve = function(s){
            let origin = edgeGen.multiplyScalar(x);
            return origin.add(2*Math.PI*s,0);
        }
        return this.getLift(fiberCurve,radius,color,glass);
    }

    getEdgeAt(x,radius, color, glass=false){
        let edgeGen = this.edgeGenerator.clone();
        let edgeCurve = function(t){
            let origin = new Vector2(2*Math.PI,0).multiplyScalar(x);
            return origin.add(edgeGen.multiplyScalar(t));
        }
        return this.getLift(edgeCurve,radius,color,glass);
    }

    getGridlines(N, radius, color, glass=false){
        let lines = new Group();
        //get curves on the surface:
        for(let i=0; i<N+1; i++){
            let horiz = this.getFiberTranslate(i/N,radius,color,glass);
            let vert = this.getEdgeTranslate(i/N,radius,color,glass);
            lines.add(horiz);
            lines.add(vert);
        }
        return lines;
    }

    getPoint(pt, radius=0.05, color=redColor, glass=false){
        //let p = this.toFundamentalDomain(pt);
        let q = this.isometricImage(pt);
        let rescale = 1+q.lengthSq();
        let geom = new SphereGeometry(radius*rescale);
        let mat = new MeshPhysicalMaterial({
            color:color, roughness:0.1, metalness:0, clearcoat:1,
        });
        let mesh = new Mesh(geom, mat);
        mesh.position.set(q.x,q.y,q.z);
        return mesh;
    }

    getPointFromData(data,radius,color,glass=false){
        //get a point from our data set
        //these come in the form [x,y], using fundamental domain (1,tau)
        //need to scale up and turn into vector!
        let pt = new Vector2(data[0],data[1]).multiplyScalar(2.*Math.PI);
        return this.getPoint(pt,radius, color,glass);
    }

}


export default HopfTorus;
