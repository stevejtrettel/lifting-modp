import {
    CatmullRomCurve3,
    Mesh,
    MeshPhysicalMaterial,
    TubeGeometry,
    Vector3,
    LineCurve3,
    SphereGeometry,
    Group
} from "three";




//color scheme
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


let toVec3 = function(p){
    return new Vector3(p[0],p[1],p[2]);
}




class Grid3D{
    constructor(scale=1) {
        this.scale = scale;
    }

    getVertex(pos,color=redColor,radius=0.15){
        //pos is something like [i,j,k];
        const p = toVec3(pos).multiplyScalar(this.scale);
        let geom = new SphereGeometry(radius);
        let mesh = new Mesh(geom, makeMat(color));
        mesh.position.set(p.x,p.y,p.z);
        return mesh;
    }

    getRod(start, end, color=blueColor, radius=0.025){
        //start end are [i,j,k]
        const p = toVec3(start).multiplyScalar(this.scale);
        const q = toVec3(end).multiplyScalar(this.scale);
        const line = new LineCurve3(p,q);
        const geom = new TubeGeometry(line,64,radius,8,false);
        const mesh = new Mesh(geom, makeGlass(color));
        return mesh;
    }

    getBentRod(start,end,bendingDir, color=blueColor,radius=0.02){
        //start and end are [i,j,k]
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


    getGridLines(n,color=glassColor,radius=0.02,overhang = 0.5){
        //n gridlines in each direction
        let grid = new Group();

        //overhang is a percentage of spacing:
        let over = overhang*this.scale;

        for(let i = -n; i<n+1; i++) {
            for (let j = -n; j < n + 1; j++) {
                //x gridline
                grid.add(this.getRod([-n - over, i, j], [n + over, i, j], color, radius));
                //y gridline
                grid.add(this.getRod([i, -n - over, j], [i, n + over,j], color, radius));
                //z gridline
                grid.add(this.getRod([i,j, -n - over], [i,j, n + over], color, radius));
            }
        }
        return grid;
    }

    getGridVertices(n,color=0xc9eaff,radius=0.05){
        //nxn spread of vertices
        let sphGeom = new SphereGeometry(radius);
        let sphMesh = new Mesh(sphGeom, makeGlass(color));
        let vertices = new Group();
        for(let i=-n;i<n+1;i++){
            for(let j=-n;j<n;j++){
                for(let k=-n;k<n+1;k++) {
                    let mesh = sphMesh.clone();
                    let p = toVec3([i,j,k]).multiplyScalar(this.scale);
                    mesh.position.set(p.x,p.y,p.z);
                    vertices.add(mesh);
                }
            }
        }
        return vertices;
    }

    getCurve(fn,color=blueColor,rad=0.025){
            let pts = [];
            for(let i=0; i<64; i++){
                let t = i/63;
                pts.push(fn(t).multiplyScalar(this.scale));
            }
            let path = new CatmullRomCurve3(pts);
            let curveGeom = new TubeGeometry(path,64,rad);
            return new Mesh(curveGeom, makeGlass(color));
    }

}


export default Grid3D;
