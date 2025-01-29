import {
    BoxGeometry,
    Matrix4,
    Mesh,
    CatmullRomCurve3,
    TubeGeometry,
    Vector2,
    Vector3,
    SphereGeometry,
    Group,
    LineCurve3,
} from "three";


import{makeMaterial,colors} from "./utils";


class FD{
    constructor(tau,width=1) {
        this.width = width;
        this.tau = tau.multiplyScalar(this.width);
    }

    getParallelogram(color = colors.glass, glass=false){
        const geometry = new BoxGeometry(1,1,0.1);
        geometry.scale(this.width,this.tau.y,1);
        geometry.translate(this.width/2,this.tau.y/2,0.05);
        const matrix = new Matrix4();
        matrix.makeShear(0, 0, this.tau.x/this.tau.y, 0, 0,0);
        geometry.applyMatrix4(matrix);
        let mesh = new Mesh(geometry, makeMaterial(color,glass));
        mesh.rotateX(Math.PI/2);
        return mesh;
    }

    getCurve(fn, color=colors.blue,radius=0.025,glass=false){
        let pts = [];
        for(let i=0; i<100; i++){
            let t = i/99;
            pts.push(fn(t));
        }
        let curve = new CatmullRomCurve3(pts);
        let geom = new TubeGeometry(curve,64,radius);
        return new Mesh(geom,makeMaterial(color,glass));
    }

    getPoint(pos,color=colors.red,radius=0.05,glass=false){
        let geom = new SphereGeometry(radius);
        let mesh = new Mesh(geom,makeMaterial(color,glass));
        mesh.position.set(pos.x,0,pos.y);
        return mesh;
    }

    getDataPoint(data,color=colors.red,radius=0.05,glass=false) {
        //data always stored [x,y] with width 1
        let pos = new Vector2(data[0],data[1]).multiplyScalar(this.width);
        return this.getPoint(pos,color,radius,glass);
    }

    getHorizontalAt(x,color=colors.blue,radius=0.025,glass=false){
        let start = new Vector3(this.tau.x, 0, this.tau.y).multiplyScalar(x);
        let end = start.clone().add(new Vector2(this.width,0));
        let line = new LineCurve3(start,end);
        let geom = new TubeGeometry(line,64,radius);
        return new Mesh(geom, makeMaterial(color,glass));
    }

    getVerticalAt(x,color=colors.blue,radius=0.025,glass=false){
        let start = new Vector3(this.width,0,0).multiplyScalar(x);
        let end =  start.clone().add(new Vector3(this.tau.x,0,this.tau.y));
        let line = new LineCurve3(start,end);
        let geom = new TubeGeometry(line,64,radius);
        return new Mesh(geom, makeMaterial(color,glass));
    }

    getGridLines(n,color=colors.glass, radius=0.025,glass=true){

    }

    getGridVertices(n,color=colors.glass,radius=0.05,glass=true){

    }

}

export default FD;
