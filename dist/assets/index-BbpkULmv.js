(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ks="172",nr={ROTATE:0,DOLLY:1,PAN:2},Ji={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},vu=0,Pl=1,xu=2,p0=1,yu=2,Pn=3,xn=0,Re=1,rn=2,Ke=0,Jn=1,ro=2,Dl=3,Il=4,Mu=5,xi=100,Su=101,Tu=102,bu=103,Eu=104,wu=200,Au=201,Ru=202,Cu=203,so=204,ao=205,Pu=206,Du=207,Iu=208,Lu=209,Uu=210,Fu=211,Nu=212,Ou=213,Bu=214,oo=0,lo=1,co=2,ar=3,uo=4,ho=5,fo=6,po=7,m0=0,zu=1,Hu=2,On=0,ku=1,Vu=2,Gu=3,g0=4,Wu=5,Xu=6,qu=7,_0=300,or=301,lr=302,Br=303,mo=304,Zs=306,vn=1e3,Fe=1001,go=1002,Bt=1003,Yu=1004,Xr=1005,fe=1006,ca=1007,Mi=1008,ju=1008,cn=1009,Ws=1010,rl=1011,cr=1012,ir=1013,on=1014,ne=1015,Le=1016,sl=1017,al=1018,ur=1020,v0=35902,x0=1021,y0=1022,Zt=1023,M0=1024,S0=1025,rr=1026,hr=1027,fr=1028,Js=1029,Qs=1030,zr=1031,dr=1033,Fs=33776,Ns=33777,Os=33778,Bs=33779,_o=35840,vo=35841,xo=35842,yo=35843,Mo=36196,So=37492,To=37496,bo=37808,Eo=37809,wo=37810,Ao=37811,Ro=37812,Co=37813,Po=37814,Do=37815,Io=37816,Lo=37817,Uo=37818,Fo=37819,No=37820,Oo=37821,zs=36492,Bo=36494,zo=36495,T0=36283,Ho=36284,ko=36285,Vo=36286,$u=3200,Ku=3201,b0=0,Zu=1,Kn="",nn="srgb",pr="srgb-linear",Xs="linear",Jt="srgb",wi=7680,Ll=519,Ju=512,Qu=513,th=514,E0=515,eh=516,nh=517,ih=518,rh=519,Ul=35044,Fl="300 es",Nn=2e3,qs=2001;class bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const r=this._listeners[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Hs=Math.PI/180,Ys=180/Math.PI;function Hr(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Pt(i,t,e){return Math.max(t,Math.min(e,i))}function sh(i,t){return(i%t+t)%t}function ua(i,t,e){return(1-e)*i+e*t}function Mr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function ke(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:Hs};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Pt(this.x,t.x,e.x),this.y=Pt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Pt(this.x,t,e),this.y=Pt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,a=this.y-t.y;return this.x=s*n-a*r+t.x,this.y=s*r+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ct{constructor(t,e,n,r,s,a,o,l,u){Ct.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u)}set(t,e,n,r,s,a,o,l,u){const f=this.elements;return f[0]=t,f[1]=r,f[2]=o,f[3]=e,f[4]=s,f[5]=l,f[6]=n,f[7]=a,f[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],f=n[4],h=n[7],c=n[2],m=n[5],g=n[8],_=r[0],d=r[3],p=r[6],x=r[1],y=r[4],v=r[7],b=r[2],A=r[5],w=r[8];return s[0]=a*_+o*x+l*b,s[3]=a*d+o*y+l*A,s[6]=a*p+o*v+l*w,s[1]=u*_+f*x+h*b,s[4]=u*d+f*y+h*A,s[7]=u*p+f*v+h*w,s[2]=c*_+m*x+g*b,s[5]=c*d+m*y+g*A,s[8]=c*p+m*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],f=t[8];return e*a*f-e*o*u-n*s*f+n*o*l+r*s*u-r*a*l}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],f=t[8],h=f*a-o*u,c=o*l-f*s,m=u*s-a*l,g=e*h+n*c+r*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(r*u-f*n)*_,t[2]=(o*n-r*a)*_,t[3]=c*_,t[4]=(f*e-r*l)*_,t[5]=(r*s-o*e)*_,t[6]=m*_,t[7]=(n*l-u*e)*_,t[8]=(a*e-n*s)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,a,o){const l=Math.cos(s),u=Math.sin(s);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-r*u,r*l,-r*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Ct;function w0(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function js(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function oh(){const i=js("canvas");return i.style.display="block",i}const Nl={};function Ki(i){i in Nl||(Nl[i]=!0,console.warn(i))}function lh(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}function ch(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function uh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Ol=new Ct().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Bl=new Ct().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function hh(){const i={enabled:!0,workingColorSpace:pr,spaces:{},convert:function(r,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===Jt&&(r.r=Bn(r.r),r.g=Bn(r.g),r.b=Bn(r.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(r.r=sr(r.r),r.g=sr(r.g),r.b=sr(r.b))),r},fromWorkingColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},toWorkingColorSpace:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===Kn?Xs:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,a){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[pr]:{primaries:t,whitePoint:n,transfer:Xs,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Ol,fromXYZ:Bl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const qt=hh();function Bn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function sr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class fh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=js("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=js("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Bn(s[a]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Bn(e[n]/255)*255):e[n]=Bn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let dh=0;class ol{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:dh++}),this.uuid=Hr(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(fa(r[a].image)):s.push(fa(r[a]))}else s=fa(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?fh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ph=0;class Ne extends bi{constructor(t=Ne.DEFAULT_IMAGE,e=Ne.DEFAULT_MAPPING,n=Fe,r=Fe,s=fe,a=Mi,o=Zt,l=cn,u=Ne.DEFAULT_ANISOTROPY,f=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ph++}),this.uuid=Hr(),this.name="",this.source=new ol(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ct,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==_0)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vn:t.x=t.x-Math.floor(t.x);break;case Fe:t.x=t.x<0?0:1;break;case go:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vn:t.y=t.y-Math.floor(t.y);break;case Fe:t.y=t.y<0?0:1;break;case go:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ne.DEFAULT_IMAGE=null;Ne.DEFAULT_MAPPING=_0;Ne.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,r=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*e+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*e+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*e+a[7]*n+a[11]*r+a[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const l=t.elements,u=l[0],f=l[4],h=l[8],c=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(f-c)<.01&&Math.abs(h-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(f+c)<.1&&Math.abs(h+_)<.1&&Math.abs(g+d)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,v=(m+1)/2,b=(p+1)/2,A=(f+c)/4,w=(h+_)/4,P=(g+d)/4;return y>v&&y>b?y<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(y),r=A/n,s=w/n):v>b?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=P/r):b<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),n=w/s,r=P/s),this.set(n,r,s,e),this}let x=Math.sqrt((d-g)*(d-g)+(h-_)*(h-_)+(c-f)*(c-f));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(h-_)/x,this.z=(c-f)/x,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Pt(this.x,t.x,e.x),this.y=Pt(this.y,t.y,e.y),this.z=Pt(this.z,t.z,e.z),this.w=Pt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Pt(this.x,t,e),this.y=Pt(this.y,t,e),this.z=Pt(this.z,t,e),this.w=Pt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class mh extends bi{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const r={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new Ne(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,r=t.textures.length;n<r;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new ol(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends mh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ta extends Ne{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class gh extends Ze{constructor(t=1,e=1,n=1,r={}){super(t,e,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ta(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class _h extends Ne{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Fe,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,a,o){let l=n[r+0],u=n[r+1],f=n[r+2],h=n[r+3];const c=s[a+0],m=s[a+1],g=s[a+2],_=s[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=f,t[e+3]=h;return}if(o===1){t[e+0]=c,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(h!==_||l!==c||u!==m||f!==g){let d=1-o;const p=l*c+u*m+f*g+h*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const b=Math.sqrt(y),A=Math.atan2(b,p*x);d=Math.sin(d*A)/b,o=Math.sin(o*A)/b}const v=o*x;if(l=l*d+c*v,u=u*d+m*v,f=f*d+g*v,h=h*d+_*v,d===1-o){const b=1/Math.sqrt(l*l+u*u+f*f+h*h);l*=b,u*=b,f*=b,h*=b}}t[e]=l,t[e+1]=u,t[e+2]=f,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,r,s,a){const o=n[r],l=n[r+1],u=n[r+2],f=n[r+3],h=s[a],c=s[a+1],m=s[a+2],g=s[a+3];return t[e]=o*g+f*h+l*m-u*c,t[e+1]=l*g+f*c+u*h-o*m,t[e+2]=u*g+f*m+o*c-l*h,t[e+3]=f*g-o*h-l*c-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),f=o(r/2),h=o(s/2),c=l(n/2),m=l(r/2),g=l(s/2);switch(a){case"XYZ":this._x=c*f*h+u*m*g,this._y=u*m*h-c*f*g,this._z=u*f*g+c*m*h,this._w=u*f*h-c*m*g;break;case"YXZ":this._x=c*f*h+u*m*g,this._y=u*m*h-c*f*g,this._z=u*f*g-c*m*h,this._w=u*f*h+c*m*g;break;case"ZXY":this._x=c*f*h-u*m*g,this._y=u*m*h+c*f*g,this._z=u*f*g+c*m*h,this._w=u*f*h-c*m*g;break;case"ZYX":this._x=c*f*h-u*m*g,this._y=u*m*h+c*f*g,this._z=u*f*g-c*m*h,this._w=u*f*h+c*m*g;break;case"YZX":this._x=c*f*h+u*m*g,this._y=u*m*h+c*f*g,this._z=u*f*g-c*m*h,this._w=u*f*h-c*m*g;break;case"XZY":this._x=c*f*h-u*m*g,this._y=u*m*h-c*f*g,this._z=u*f*g+c*m*h,this._w=u*f*h+c*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],a=e[1],o=e[5],l=e[9],u=e[2],f=e[6],h=e[10],c=n+o+h;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(f-l)*m,this._y=(s-u)*m,this._z=(a-r)*m}else if(n>o&&n>h){const m=2*Math.sqrt(1+n-o-h);this._w=(f-l)/m,this._x=.25*m,this._y=(r+a)/m,this._z=(s+u)/m}else if(o>h){const m=2*Math.sqrt(1+o-n-h);this._w=(s-u)/m,this._x=(r+a)/m,this._y=.25*m,this._z=(l+f)/m}else{const m=2*Math.sqrt(1+h-n-o);this._w=(a-r)/m,this._x=(s+u)/m,this._y=(l+f)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Pt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,a=t._w,o=e._x,l=e._y,u=e._z,f=e._w;return this._x=n*f+a*o+r*u-s*l,this._y=r*f+a*l+s*o-n*u,this._z=s*f+a*u+n*l-r*o,this._w=a*f-n*o-r*l-s*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*t._w+n*t._x+r*t._y+s*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*r+e*this._y,this._z=m*s+e*this._z,this.normalize(),this}const u=Math.sqrt(l),f=Math.atan2(u,o),h=Math.sin((1-e)*f)/u,c=Math.sin(e*f)/u;return this._w=a*h+this._w*c,this._x=n*h+this._x*c,this._y=r*h+this._y*c,this._z=s*h+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(zl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(zl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,a=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*r-o*n),f=2*(o*e-s*r),h=2*(s*n-a*e);return this.x=e+l*u+a*h-o*f,this.y=n+l*f+o*u-s*h,this.z=r+l*h+s*f-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Pt(this.x,t.x,e.x),this.y=Pt(this.y,t.y,e.y),this.z=Pt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Pt(this.x,t,e),this.y=Pt(this.y,t,e),this.z=Pt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Pt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,a=e.x,o=e.y,l=e.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Pt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new D,zl=new ti;class Oe{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(s,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),qr.copy(n.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const r=t.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Sr),Yr.subVectors(this.max,Sr),Ri.subVectors(t.a,Sr),Ci.subVectors(t.b,Sr),Pi.subVectors(t.c,Sr),Vn.subVectors(Ci,Ri),Gn.subVectors(Pi,Ci),si.subVectors(Ri,Pi);let e=[0,-Vn.z,Vn.y,0,-Gn.z,Gn.y,0,-si.z,si.y,Vn.z,0,-Vn.x,Gn.z,0,-Gn.x,si.z,0,-si.x,-Vn.y,Vn.x,0,-Gn.y,Gn.x,0,-si.y,si.x,0];return!pa(e,Ri,Ci,Pi,Yr)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ri,Ci,Pi,Yr))?!1:(jr.crossVectors(Vn,Gn),e=[jr.x,jr.y,jr.z],pa(e,Ri,Ci,Pi,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(En[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),En[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),En[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),En[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),En[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),En[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),En[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),En[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(En),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const En=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,qr=new Oe,Ri=new D,Ci=new D,Pi=new D,Vn=new D,Gn=new D,si=new D,Sr=new D,Yr=new D,jr=new D,ai=new D;function pa(i,t,e,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){ai.fromArray(i,s);const o=r.x*Math.abs(ai.x)+r.y*Math.abs(ai.y)+r.z*Math.abs(ai.z),l=t.dot(ai),u=e.dot(ai),f=n.dot(ai);if(Math.max(-Math.max(l,u,f),Math.min(l,u,f))>o)return!1}return!0}const vh=new Oe,Tr=new D,ma=new D;class ea{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):vh.setFromPoints(t).getCenter(n);let r=0;for(let s=0,a=t.length;s<a;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Tr.subVectors(t,this.center);const e=Tr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Tr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Tr.copy(t.center).add(ma)),this.expandByPoint(Tr.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const wn=new D,ga=new D,$r=new D,Wn=new D,_a=new D,Kr=new D,va=new D;class A0{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,wn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=wn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(wn.copy(this.origin).addScaledVector(this.direction,e),wn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){ga.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(ga);const s=t.distanceTo(e)*.5,a=-this.direction.dot($r),o=Wn.dot(this.direction),l=-Wn.dot($r),u=Wn.lengthSq(),f=Math.abs(1-a*a);let h,c,m,g;if(f>0)if(h=a*l-o,c=a*o-l,g=s*f,h>=0)if(c>=-g)if(c<=g){const _=1/f;h*=_,c*=_,m=h*(h+a*c+2*o)+c*(a*h+c+2*l)+u}else c=s,h=Math.max(0,-(a*c+o)),m=-h*h+c*(c+2*l)+u;else c=-s,h=Math.max(0,-(a*c+o)),m=-h*h+c*(c+2*l)+u;else c<=-g?(h=Math.max(0,-(-a*s+o)),c=h>0?-s:Math.min(Math.max(-s,-l),s),m=-h*h+c*(c+2*l)+u):c<=g?(h=0,c=Math.min(Math.max(-s,-l),s),m=c*(c+2*l)+u):(h=Math.max(0,-(a*s+o)),c=h>0?s:Math.min(Math.max(-s,-l),s),m=-h*h+c*(c+2*l)+u);else c=a>0?-s:s,h=Math.max(0,-(a*c+o)),m=-h*h+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ga).addScaledVector($r,c),m}intersectSphere(t,e){wn.subVectors(t.center,this.origin);const n=wn.dot(this.direction),r=wn.dot(wn)-n*n,s=t.radius*t.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,a,o,l;const u=1/this.direction.x,f=1/this.direction.y,h=1/this.direction.z,c=this.origin;return u>=0?(n=(t.min.x-c.x)*u,r=(t.max.x-c.x)*u):(n=(t.max.x-c.x)*u,r=(t.min.x-c.x)*u),f>=0?(s=(t.min.y-c.y)*f,a=(t.max.y-c.y)*f):(s=(t.max.y-c.y)*f,a=(t.min.y-c.y)*f),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(t.min.z-c.z)*h,l=(t.max.z-c.z)*h):(o=(t.max.z-c.z)*h,l=(t.min.z-c.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,wn)!==null}intersectTriangle(t,e,n,r,s){_a.subVectors(e,t),Kr.subVectors(n,t),va.crossVectors(_a,Kr);let a=this.direction.dot(va),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Wn.subVectors(this.origin,t);const l=o*this.direction.dot(Kr.crossVectors(Wn,Kr));if(l<0)return null;const u=o*this.direction.dot(_a.cross(Wn));if(u<0||l+u>a)return null;const f=-o*Wn.dot(va);return f<0?null:this.at(f/a,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ft{constructor(t,e,n,r,s,a,o,l,u,f,h,c,m,g,_,d){Ft.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,a,o,l,u,f,h,c,m,g,_,d)}set(t,e,n,r,s,a,o,l,u,f,h,c,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=r,p[1]=s,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=f,p[10]=h,p[14]=c,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ft().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Di.setFromMatrixColumn(t,0).length(),s=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),u=Math.sin(r),f=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){const c=a*f,m=a*h,g=o*f,_=o*h;e[0]=l*f,e[4]=-l*h,e[8]=u,e[1]=m+g*u,e[5]=c-_*u,e[9]=-o*l,e[2]=_-c*u,e[6]=g+m*u,e[10]=a*l}else if(t.order==="YXZ"){const c=l*f,m=l*h,g=u*f,_=u*h;e[0]=c+_*o,e[4]=g*o-m,e[8]=a*u,e[1]=a*h,e[5]=a*f,e[9]=-o,e[2]=m*o-g,e[6]=_+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*f,m=l*h,g=u*f,_=u*h;e[0]=c-_*o,e[4]=-a*h,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*f,e[9]=_-c*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*f,m=a*h,g=o*f,_=o*h;e[0]=l*f,e[4]=g*u-m,e[8]=c*u+_,e[1]=l*h,e[5]=_*u+c,e[9]=m*u-g,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,m=a*u,g=o*l,_=o*u;e[0]=l*f,e[4]=_-c*h,e[8]=g*h+m,e[1]=h,e[5]=a*f,e[9]=-o*f,e[2]=-u*f,e[6]=m*h+g,e[10]=c-_*h}else if(t.order==="XZY"){const c=a*l,m=a*u,g=o*l,_=o*u;e[0]=l*f,e[4]=-h,e[8]=u*f,e[1]=c*h+_,e[5]=a*f,e[9]=m*h-g,e[2]=g*h-m,e[6]=o*f,e[10]=_*h+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(xh,t,yh)}lookAt(t,e,n){const r=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Xn.crossVectors(n,qe),Xn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Xn.crossVectors(n,qe)),Xn.normalize(),Zr.crossVectors(qe,Xn),r[0]=Xn.x,r[4]=Zr.x,r[8]=qe.x,r[1]=Xn.y,r[5]=Zr.y,r[9]=qe.y,r[2]=Xn.z,r[6]=Zr.z,r[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],f=n[1],h=n[5],c=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],x=n[3],y=n[7],v=n[11],b=n[15],A=r[0],w=r[4],P=r[8],S=r[12],M=r[1],C=r[5],U=r[9],L=r[13],B=r[2],G=r[6],k=r[10],q=r[14],W=r[3],tt=r[7],ct=r[11],_t=r[15];return s[0]=a*A+o*M+l*B+u*W,s[4]=a*w+o*C+l*G+u*tt,s[8]=a*P+o*U+l*k+u*ct,s[12]=a*S+o*L+l*q+u*_t,s[1]=f*A+h*M+c*B+m*W,s[5]=f*w+h*C+c*G+m*tt,s[9]=f*P+h*U+c*k+m*ct,s[13]=f*S+h*L+c*q+m*_t,s[2]=g*A+_*M+d*B+p*W,s[6]=g*w+_*C+d*G+p*tt,s[10]=g*P+_*U+d*k+p*ct,s[14]=g*S+_*L+d*q+p*_t,s[3]=x*A+y*M+v*B+b*W,s[7]=x*w+y*C+v*G+b*tt,s[11]=x*P+y*U+v*k+b*ct,s[15]=x*S+y*L+v*q+b*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],a=t[1],o=t[5],l=t[9],u=t[13],f=t[2],h=t[6],c=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+s*l*h-r*u*h-s*o*c+n*u*c+r*o*m-n*l*m)+_*(+e*l*m-e*u*c+s*a*c-r*a*m+r*u*f-s*l*f)+d*(+e*u*h-e*o*m-s*a*h+n*a*m+s*o*f-n*u*f)+p*(-r*o*f-e*l*h+e*o*c+r*a*h-n*a*c+n*l*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],a=t[4],o=t[5],l=t[6],u=t[7],f=t[8],h=t[9],c=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],x=h*d*u-_*c*u+_*l*m-o*d*m-h*l*p+o*c*p,y=g*c*u-f*d*u-g*l*m+a*d*m+f*l*p-a*c*p,v=f*_*u-g*h*u+g*o*m-a*_*m-f*o*p+a*h*p,b=g*h*l-f*_*l-g*o*c+a*_*c+f*o*d-a*h*d,A=e*x+n*y+r*v+s*b;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=x*w,t[1]=(_*c*s-h*d*s-_*r*m+n*d*m+h*r*p-n*c*p)*w,t[2]=(o*d*s-_*l*s+_*r*u-n*d*u-o*r*p+n*l*p)*w,t[3]=(h*l*s-o*c*s-h*r*u+n*c*u+o*r*m-n*l*m)*w,t[4]=y*w,t[5]=(f*d*s-g*c*s+g*r*m-e*d*m-f*r*p+e*c*p)*w,t[6]=(g*l*s-a*d*s-g*r*u+e*d*u+a*r*p-e*l*p)*w,t[7]=(a*c*s-f*l*s+f*r*u-e*c*u-a*r*m+e*l*m)*w,t[8]=v*w,t[9]=(g*h*s-f*_*s-g*n*m+e*_*m+f*n*p-e*h*p)*w,t[10]=(a*_*s-g*o*s+g*n*u-e*_*u-a*n*p+e*o*p)*w,t[11]=(f*o*s-a*h*s-f*n*u+e*h*u+a*n*m-e*o*m)*w,t[12]=b*w,t[13]=(f*_*r-g*h*r+g*n*c-e*_*c-f*n*d+e*h*d)*w,t[14]=(g*o*r-a*_*r-g*n*l+e*_*l+a*n*d-e*o*d)*w,t[15]=(a*h*r-f*o*r+f*n*l-e*h*l-a*n*c+e*o*c)*w,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,a=t.x,o=t.y,l=t.z,u=s*a,f=s*o;return this.set(u*a+n,u*o-r*l,u*l+r*o,0,u*o+r*l,f*o+n,f*l-r*a,0,u*l-r*o,f*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,a){return this.set(1,n,s,0,t,1,a,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,a=e._y,o=e._z,l=e._w,u=s+s,f=a+a,h=o+o,c=s*u,m=s*f,g=s*h,_=a*f,d=a*h,p=o*h,x=l*u,y=l*f,v=l*h,b=n.x,A=n.y,w=n.z;return r[0]=(1-(_+p))*b,r[1]=(m+v)*b,r[2]=(g-y)*b,r[3]=0,r[4]=(m-v)*A,r[5]=(1-(c+p))*A,r[6]=(d+x)*A,r[7]=0,r[8]=(g+y)*w,r[9]=(d-x)*w,r[10]=(1-(c+_))*w,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Di.set(r[0],r[1],r[2]).length();const a=Di.set(r[4],r[5],r[6]).length(),o=Di.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],pn.copy(this);const u=1/s,f=1/a,h=1/o;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=f,pn.elements[5]*=f,pn.elements[6]*=f,pn.elements[8]*=h,pn.elements[9]*=h,pn.elements[10]*=h,e.setFromRotationMatrix(pn),n.x=s,n.y=a,n.z=o,this}makePerspective(t,e,n,r,s,a,o=Nn){const l=this.elements,u=2*s/(e-t),f=2*s/(n-r),h=(e+t)/(e-t),c=(n+r)/(n-r);let m,g;if(o===Nn)m=-(a+s)/(a-s),g=-2*a*s/(a-s);else if(o===qs)m=-a/(a-s),g=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=f,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,r,s,a,o=Nn){const l=this.elements,u=1/(e-t),f=1/(n-r),h=1/(a-s),c=(e+t)*u,m=(n+r)*f;let g,_;if(o===Nn)g=(a+s)*h,_=-2*h;else if(o===qs)g=s*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*f,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new D,pn=new Ft,xh=new D(0,0,0),yh=new D(1,1,1),Xn=new D,Zr=new D,qe=new D,Hl=new Ft,kl=new ti;class Tn{constructor(t=0,e=0,n=0,r=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],a=r[4],o=r[8],l=r[1],u=r[5],f=r[9],h=r[2],c=r[6],m=r[10];switch(e){case"XYZ":this._y=Math.asin(Pt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,m),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Pt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(Pt(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Pt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Pt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Pt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Hl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return kl.setFromEuler(this),this.setFromQuaternion(kl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class R0{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Mh=0;const Vl=new D,Ii=new ti,An=new Ft,Jr=new D,br=new D,Sh=new D,Th=new ti,Gl=new D(1,0,0),Wl=new D(0,1,0),Xl=new D(0,0,1),ql={type:"added"},bh={type:"removed"},Li={type:"childadded",child:null},xa={type:"childremoved",child:null};class Ce extends bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mh++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new D,e=new Tn,n=new ti,r=new D(1,1,1);function s(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Ft},normalMatrix:{value:new Ct}}),this.matrix=new Ft,this.matrixWorld=new Ft,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new R0,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Gl,t)}rotateY(t){return this.rotateOnAxis(Wl,t)}rotateZ(t){return this.rotateOnAxis(Xl,t)}translateOnAxis(t,e){return Vl.copy(t).applyQuaternion(this.quaternion),this.position.add(Vl.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Gl,t)}translateY(t){return this.translateOnAxis(Wl,t)}translateZ(t){return this.translateOnAxis(Xl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(An.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Jr.copy(t):Jr.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),br.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?An.lookAt(br,Jr,this.up):An.lookAt(Jr,br,this.up),this.quaternion.setFromRotationMatrix(An),r&&(An.extractRotation(r.matrixWorld),Ii.setFromRotationMatrix(An),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ql),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(bh),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),An.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),An.multiply(t.parent.matrixWorld)),t.applyMatrix4(An),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ql),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,t,Sh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(br,Th,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,f=l.length;u<f;u++){const h=l[u];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(s(t.materials,this.material[l]));r.material=o}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),f=a(t.images),h=a(t.shapes),c=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),f.length>0&&(n.images=f),h.length>0&&(n.shapes=h),c.length>0&&(n.skeletons=c),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=r,n;function a(o){const l=[];for(const u in o){const f=o[u];delete f.metadata,l.push(f)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,Rn=new D,ya=new D,Cn=new D,Ui=new D,Fi=new D,Yl=new D,Ma=new D,Sa=new D,Ta=new D,ba=new Kt,Ea=new Kt,wa=new Kt;class Se{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),mn.subVectors(t,e),r.cross(mn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){mn.subVectors(r,e),Rn.subVectors(n,e),ya.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Rn),l=mn.dot(ya),u=Rn.dot(Rn),f=Rn.dot(ya),h=a*u-o*o;if(h===0)return s.set(0,0,0),null;const c=1/h,m=(u*l-o*f)*c,g=(a*f-o*l)*c;return s.set(1-m-g,g,m)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Cn)===null?!1:Cn.x>=0&&Cn.y>=0&&Cn.x+Cn.y<=1}static getInterpolation(t,e,n,r,s,a,o,l){return this.getBarycoord(t,e,n,r,Cn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Cn.x),l.addScaledVector(a,Cn.y),l.addScaledVector(o,Cn.z),l)}static getInterpolatedAttribute(t,e,n,r,s,a){return ba.setScalar(0),Ea.setScalar(0),wa.setScalar(0),ba.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),wa.fromBufferAttribute(t,r),a.setScalar(0),a.addScaledVector(ba,s.x),a.addScaledVector(Ea,s.y),a.addScaledVector(wa,s.z),a}static isFrontFacing(t,e,n,r){return mn.subVectors(n,e),Rn.subVectors(t,e),mn.cross(Rn).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Rn.subVectors(this.a,this.b),mn.cross(Rn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Se.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Se.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return Se.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return Se.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Se.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let a,o;Ui.subVectors(r,n),Fi.subVectors(s,n),Ma.subVectors(t,n);const l=Ui.dot(Ma),u=Fi.dot(Ma);if(l<=0&&u<=0)return e.copy(n);Sa.subVectors(t,r);const f=Ui.dot(Sa),h=Fi.dot(Sa);if(f>=0&&h<=f)return e.copy(r);const c=l*h-f*u;if(c<=0&&l>=0&&f<=0)return a=l/(l-f),e.copy(n).addScaledVector(Ui,a);Ta.subVectors(t,s);const m=Ui.dot(Ta),g=Fi.dot(Ta);if(g>=0&&m<=g)return e.copy(s);const _=m*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector(Fi,o);const d=f*g-m*h;if(d<=0&&h-f>=0&&m-g>=0)return Yl.subVectors(s,r),o=(h-f)/(h-f+(m-g)),e.copy(r).addScaledVector(Yl,o);const p=1/(d+_+c);return a=_*p,o=c*p,e.copy(n).addScaledVector(Ui,a).addScaledVector(Fi,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const C0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ut{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,r=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,r),this}setHSL(t,e,n,r=qt.workingColorSpace){if(t=sh(t,1),e=Pt(e,0,1),n=Pt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,a=2*n-s;this.r=Aa(a,s,t+1/3),this.g=Aa(a,s,t),this.b=Aa(a,s,t-1/3)}return qt.toWorkingColorSpace(this,r),this}setStyle(t,e=nn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=C0[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Bn(t.r),this.g=Bn(t.g),this.b=Bn(t.b),this}copyLinearToSRGB(t){return this.r=sr(t.r),this.g=sr(t.g),this.b=sr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return qt.fromWorkingColorSpace(we.copy(this),t),Math.round(Pt(we.r*255,0,255))*65536+Math.round(Pt(we.g*255,0,255))*256+Math.round(Pt(we.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,r=we.g,s=we.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,u;const f=(o+a)/2;if(o===a)l=0,u=0;else{const h=a-o;switch(u=f<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return t.h=l,t.s=u,t.l=f,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=nn){qt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,r=we.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(Qr);const n=ua(qn.h,Qr.h,e),r=ua(qn.s,Qr.s,e),s=ua(qn.l,Qr.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Ut;Ut.NAMES=C0;let Eh=0;class kr extends bi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Eh++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=Jn,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=so,this.blendDst=ao,this.blendEquation=xi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ut(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Ll,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==so&&(n.blendSrc=this.blendSrc),this.blendDst!==ao&&(n.blendDst=this.blendDst),this.blendEquation!==xi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Ll&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(e){const s=r(t.textures),a=r(t.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ll extends kr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ut(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=m0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Un=wh();function wh(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const u=l-127;u<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,r[l]=-u-1,r[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,r[l]=13,r[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,f=0;for(;(u&8388608)===0;)u<<=1,f-=8388608;u&=-8388609,f+=947912704,s[l]=u|f}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function Ah(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Pt(i,-65504,65504),Un.floatView[0]=i;const t=Un.uint32View[0],e=t>>23&511;return Un.baseTable[e]+((t&8388607)>>Un.shiftTable[e])}function Rh(i){const t=i>>10;return Un.uint32View[0]=Un.mantissaTable[Un.offsetTable[t]+(i&1023)]+Un.exponentTable[t],Un.floatView[0]}const Fn={toHalfFloat:Ah,fromHalfFloat:Rh},pe=new D,ts=new ut;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ul,this.updateRanges=[],this.gpuType=ne,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ts.fromBufferAttribute(this,e),ts.applyMatrix3(t),this.setXY(e,ts.x,ts.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Mr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=ke(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Mr(e,this.array)),e}setX(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Mr(e,this.array)),e}setY(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Mr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Mr(e,this.array)),e}setW(t,e){return this.normalized&&(e=ke(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=ke(e,this.array),n=ke(n,this.array),r=ke(r,this.array),s=ke(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ul&&(t.usage=this.usage),t}}class P0 extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class D0 extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Ch=0;const en=new Ft,Ra=new Ce,Ni=new D,Ye=new Oe,Er=new Oe,xe=new D;class Te extends bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ch++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(w0(t)?D0:P0)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new Ct().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const a=t[r];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Ye.setFromBufferAttribute(s),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ea);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let s=0,a=e.length;s<a;s++){const o=e[s];Er.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ye.min,Er.min),Ye.expandByPoint(xe),xe.addVectors(Ye.max,Er.max),Ye.expandByPoint(xe)):(Ye.expandByPoint(Er.min),Ye.expandByPoint(Er.max))}Ye.getCenter(n);let r=0;for(let s=0,a=t.count;s<a;s++)xe.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(xe));if(e)for(let s=0,a=e.length;s<a;s++){const o=e[s],l=this.morphTargetsRelative;for(let u=0,f=o.count;u<f;u++)xe.fromBufferAttribute(o,u),l&&(Ni.fromBufferAttribute(t,u),xe.add(Ni)),r=Math.max(r,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new D,l[P]=new D;const u=new D,f=new D,h=new D,c=new ut,m=new ut,g=new ut,_=new D,d=new D;function p(P,S,M){u.fromBufferAttribute(n,P),f.fromBufferAttribute(n,S),h.fromBufferAttribute(n,M),c.fromBufferAttribute(s,P),m.fromBufferAttribute(s,S),g.fromBufferAttribute(s,M),f.sub(u),h.sub(u),m.sub(c),g.sub(c);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(C),d.copy(h).multiplyScalar(m.x).addScaledVector(f,-g.x).multiplyScalar(C),o[P].add(_),o[S].add(_),o[M].add(_),l[P].add(d),l[S].add(d),l[M].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,S=x.length;P<S;++P){const M=x[P],C=M.start,U=M.count;for(let L=C,B=C+U;L<B;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new D,v=new D,b=new D,A=new D;function w(P){b.fromBufferAttribute(r,P),A.copy(b);const S=o[P];y.copy(S),y.sub(b.multiplyScalar(b.dot(S))).normalize(),v.crossVectors(A,S);const C=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,S=x.length;P<S;++P){const M=x[P],C=M.start,U=M.count;for(let L=C,B=C+U;L<B;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,m=n.count;c<m;c++)n.setXYZ(c,0,0,0);const r=new D,s=new D,a=new D,o=new D,l=new D,u=new D,f=new D,h=new D;if(t)for(let c=0,m=t.count;c<m;c+=3){const g=t.getX(c+0),_=t.getX(c+1),d=t.getX(c+2);r.fromBufferAttribute(e,g),s.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,d),o.add(f),l.add(f),u.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,u.x,u.y,u.z)}else for(let c=0,m=e.count;c<m;c+=3)r.fromBufferAttribute(e,c+0),s.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),f.subVectors(a,s),h.subVectors(r,s),f.cross(h),n.setXYZ(c+0,f.x,f.y,f.z),n.setXYZ(c+1,f.x,f.y,f.z),n.setXYZ(c+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const u=o.array,f=o.itemSize,h=o.normalized,c=new u.constructor(l.length*f);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*f;for(let p=0;p<f;p++)c[g++]=u[m++]}return new ue(c,f,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Te,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],u=t(l,n);e.setAttribute(o,u)}const s=this.morphAttributes;for(const o in s){const l=[],u=s[o];for(let f=0,h=u.length;f<h;f++){const c=u[f],m=t(c,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],f=[];for(let h=0,c=u.length;h<c;h++){const m=u[h];f.push(m.toJSON(t.data))}f.length>0&&(r[l]=f,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const r=t.attributes;for(const u in r){const f=r[u];this.setAttribute(u,f.clone(e))}const s=t.morphAttributes;for(const u in s){const f=[],h=s[u];for(let c=0,m=h.length;c<m;c++)f.push(h[c].clone(e));this.morphAttributes[u]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,f=a.length;u<f;u++){const h=a[u];this.addGroup(h.start,h.count,h.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jl=new Ft,oi=new A0,es=new ea,$l=new D,ns=new D,is=new D,rs=new D,Ca=new D,ss=new D,Kl=new D,as=new D;class Ae extends Ce{constructor(t=new Te,e=new ll){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const o=this.morphTargetInfluences;if(s&&o){ss.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const f=o[l],h=s[l];f!==0&&(Ca.fromBufferAttribute(h,t),a?ss.addScaledVector(Ca,f):ss.addScaledVector(Ca.sub(e),f))}e.add(ss)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),es.copy(n.boundingSphere),es.applyMatrix4(s),oi.copy(t.ray).recast(t.near),!(es.containsPoint(oi.origin)===!1&&(oi.intersectSphere(es,$l)===null||oi.origin.distanceToSquared($l)>(t.far-t.near)**2))&&(jl.copy(s).invert(),oi.copy(t.ray).applyMatrix4(jl),!(n.boundingBox!==null&&oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,oi)))}_computeIntersections(t,e,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,u=s.attributes.uv,f=s.attributes.uv1,h=s.attributes.normal,c=s.groups,m=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const d=c[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),y=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let v=x,b=y;v<b;v+=3){const A=o.getX(v),w=o.getX(v+1),P=o.getX(v+2);r=os(this,p,t,n,u,f,h,A,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const x=o.getX(d),y=o.getX(d+1),v=o.getX(d+2);r=os(this,a,t,n,u,f,h,x,y,v),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const d=c[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),y=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let v=x,b=y;v<b;v+=3){const A=v,w=v+1,P=v+2;r=os(this,p,t,n,u,f,h,A,w,P),r&&(r.faceIndex=Math.floor(v/3),r.face.materialIndex=d.materialIndex,e.push(r))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const x=d,y=d+1,v=d+2;r=os(this,a,t,n,u,f,h,x,y,v),r&&(r.faceIndex=Math.floor(d/3),e.push(r))}}}}function Ph(i,t,e,n,r,s,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,t.side===xn,o),l===null)return null;as.copy(o),as.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(as);return u<e.near||u>e.far?null:{distance:u,point:as.clone(),object:i}}function os(i,t,e,n,r,s,a,o,l,u){i.getVertexPosition(o,ns),i.getVertexPosition(l,is),i.getVertexPosition(u,rs);const f=Ph(i,t,e,n,ns,is,rs,Kl);if(f){const h=new D;Se.getBarycoord(Kl,ns,is,rs,h),r&&(f.uv=Se.getInterpolatedAttribute(r,o,l,u,h,new ut)),s&&(f.uv1=Se.getInterpolatedAttribute(s,o,l,u,h,new ut)),a&&(f.normal=Se.getInterpolatedAttribute(a,o,l,u,h,new D),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new D,materialIndex:0};Se.getNormal(ns,is,rs,c.normal),f.face=c,f.barycoord=h}return f}class _r extends Te{constructor(t=1,e=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],u=[],f=[],h=[];let c=0,m=0;g("z","y","x",-1,-1,n,e,t,a,s,0),g("z","y","x",1,-1,n,e,-t,a,s,1),g("x","z","y",1,1,t,n,e,r,a,2),g("x","z","y",1,-1,t,n,-e,r,a,3),g("x","y","z",1,-1,t,e,n,r,s,4),g("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(f,3)),this.setAttribute("uv",new ye(h,2));function g(_,d,p,x,y,v,b,A,w,P,S){const M=v/w,C=b/P,U=v/2,L=b/2,B=A/2,G=w+1,k=P+1;let q=0,W=0;const tt=new D;for(let ct=0;ct<k;ct++){const _t=ct*C-L;for(let Nt=0;Nt<G;Nt++){const te=Nt*M-U;tt[_]=te*x,tt[d]=_t*y,tt[p]=B,u.push(tt.x,tt.y,tt.z),tt[_]=0,tt[d]=0,tt[p]=A>0?1:-1,f.push(tt.x,tt.y,tt.z),h.push(Nt/w),h.push(1-ct/P),q+=1}}for(let ct=0;ct<P;ct++)for(let _t=0;_t<w;_t++){const Nt=c+_t+G*ct,te=c+_t+G*(ct+1),j=c+(_t+1)+G*(ct+1),et=c+(_t+1)+G*ct;l.push(Nt,te,et),l.push(te,j,et),W+=6}o.addGroup(m,W,S),m+=W,c+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function mr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function De(i){const t={};for(let e=0;e<i.length;e++){const n=mr(i[e]);for(const r in n)t[r]=n[r]}return t}function Dh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function I0(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Ih={clone:mr,merge:De};var Lh=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Uh=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends kr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Lh,this.fragmentShader=Uh,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=mr(t.uniforms),this.uniformsGroups=Dh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?e.uniforms[r]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[r]={type:"m4",value:a.toArray()}:e.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class L0 extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ft,this.projectionMatrix=new Ft,this.projectionMatrixInverse=new Ft,this.coordinateSystem=Nn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new D,Zl=new ut,Jl=new ut;class Ie extends L0{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ys*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ys*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Zl,Jl),e.subVectors(Jl,Zl)}setViewOffset(t,e,n,r,s,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;s+=a.offsetX*r/l,e-=a.offsetY*n/u,r*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(s+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class Fh extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Ie(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const s=new Ie(Oi,Bi,t,e);s.layers=this.layers,this.add(s);const a=new Ie(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const o=new Ie(Oi,Bi,t,e);o.layers=this.layers,this.add(o);const l=new Ie(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const u=new Ie(Oi,Bi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,a,o,l]=e;for(const u of e)this.remove(u);if(t===Nn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===qs)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,u,f]=this.children,h=t.getRenderTarget(),c=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,a),t.setRenderTarget(n,2,r),t.render(e,o),t.setRenderTarget(n,3,r),t.render(e,l),t.setRenderTarget(n,4,r),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,r),t.render(e,f),t.setRenderTarget(h,c,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class U0 extends Ne{constructor(t,e,n,r,s,a,o,l,u,f){t=t!==void 0?t:[],e=e!==void 0?e:or,super(t,e,n,r,s,a,o,l,u,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Nh extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new U0(r,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new _r(5,5,5),s=new un({name:"CubemapFromEquirect",uniforms:mr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Ke});s.uniforms.tEquirect.value=e;const a=new Ae(r,s),o=e.minFilter;return e.minFilter===Mi&&(e.minFilter=fe),new Fh(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,r){const s=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,r);t.setRenderTarget(s)}}class F0 extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ln extends Ne{constructor(t=null,e=1,n=1,r,s,a,o,l,u=Bt,f=Bt,h,c){super(null,a,o,l,u,f,r,s,h,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new D,Oh=new D,Bh=new Ct;class Mn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Pa.subVectors(n,e).cross(Oh.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Bh.getNormalMatrix(t),r=this.coplanarPoint(Pa).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const li=new ea,ls=new D;class cl{constructor(t=new Mn,e=new Mn,n=new Mn,r=new Mn,s=new Mn,a=new Mn){this.planes=[t,e,n,r,s,a]}set(t,e,n,r,s,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Nn){const n=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],u=r[4],f=r[5],h=r[6],c=r[7],m=r[8],g=r[9],_=r[10],d=r[11],p=r[12],x=r[13],y=r[14],v=r[15];if(n[0].setComponents(l-s,c-u,d-m,v-p).normalize(),n[1].setComponents(l+s,c+u,d+m,v+p).normalize(),n[2].setComponents(l+a,c+f,d+g,v+x).normalize(),n[3].setComponents(l-a,c-f,d-g,v-x).normalize(),n[4].setComponents(l-o,c-h,d-_,v-y).normalize(),e===Nn)n[5].setComponents(l+o,c+h,d+_,v+y).normalize();else if(e===qs)n[5].setComponents(o,h,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),li.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),li.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(li)}intersectsSprite(t){return li.center.set(0,0,0),li.radius=.7071067811865476,li.applyMatrix4(t.matrixWorld),this.intersectsSphere(li)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(ls.x=r.normal.x>0?t.max.x:t.min.x,ls.y=r.normal.y>0?t.max.y:t.min.y,ls.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(ls)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Qi extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}class N0 extends Ne{constructor(t,e,n,r,s,a,o,l,u,f=rr){if(f!==rr&&f!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&f===rr&&(n=on),n===void 0&&f===hr&&(n=ur),super(null,r,s,a,o,l,f,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class zh{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,r=this.getPoint(0),s=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),s+=n.distanceTo(r),e.push(s),r=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let r=0;const s=n.length;let a;e?a=e:a=t*n[s-1];let o=0,l=s-1,u;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),u=n[r]-a,u<0)o=r+1;else if(u>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const f=n[r],c=n[r+1]-f,m=(a-f)/c;return(r+m)/(s-1)}getTangent(t,e){let r=t-1e-4,s=t+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=e||(a.isVector2?new ut:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,r=[],s=[],a=[],o=new D,l=new Ft;for(let m=0;m<=t;m++){const g=m/t;r[m]=this.getTangentAt(g,new D)}s[0]=new D,a[0]=new D;let u=Number.MAX_VALUE;const f=Math.abs(r[0].x),h=Math.abs(r[0].y),c=Math.abs(r[0].z);f<=u&&(u=f,n.set(1,0,0)),h<=u&&(u=h,n.set(0,1,0)),c<=u&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let m=1;m<=t;m++){if(s[m]=s[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(r[m-1],r[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Pt(r[m-1].dot(r[m]),-1,1));s[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(r[m],s[m])}if(e===!0){let m=Math.acos(Pt(s[0].dot(s[t]),-1,1));m/=t,r[0].dot(o.crossVectors(s[0],s[t]))>0&&(m=-m);for(let g=1;g<=t;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],m*g)),a[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function ul(){let i=0,t=0,e=0,n=0;function r(s,a,o,l){i=s,t=o,e=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,u){r(a,o,u*(o-s),u*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,u,f,h){let c=(a-s)/u-(o-s)/(u+f)+(o-a)/f,m=(o-a)/f-(l-a)/(f+h)+(l-o)/h;c*=f,m*=f,r(a,o,c,m)},calc:function(s){const a=s*s,o=a*s;return i+t*s+e*a+n*o}}}const cs=new D,Da=new ul,Ia=new ul,La=new ul;class Go extends zh{constructor(t=[],e=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=r}getPoint(t,e=new D){const n=e,r=this.points,s=r.length,a=(s-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let u,f;this.closed||o>0?u=r[(o-1)%s]:(cs.subVectors(r[0],r[1]).add(r[0]),u=cs);const h=r[o%s],c=r[(o+1)%s];if(this.closed||o+2<s?f=r[(o+2)%s]:(cs.subVectors(r[s-1],r[s-2]).add(r[s-1]),f=cs),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(h),m),_=Math.pow(h.distanceToSquared(c),m),d=Math.pow(c.distanceToSquared(f),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),Da.initNonuniformCatmullRom(u.x,h.x,c.x,f.x,g,_,d),Ia.initNonuniformCatmullRom(u.y,h.y,c.y,f.y,g,_,d),La.initNonuniformCatmullRom(u.z,h.z,c.z,f.z,g,_,d)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(u.x,h.x,c.x,f.x,this.tension),Ia.initCatmullRom(u.y,h.y,c.y,f.y,this.tension),La.initCatmullRom(u.z,h.z,c.z,f.z,this.tension));return n.set(Da.calc(l),Ia.calc(l),La.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(r.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const r=this.points[e];t.points.push(r.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const r=t.points[e];this.points.push(new D().fromArray(r))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class na extends Te{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,a=e/2,o=Math.floor(n),l=Math.floor(r),u=o+1,f=l+1,h=t/o,c=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<f;p++){const x=p*c-a;for(let y=0;y<u;y++){const v=y*h-s;g.push(v,-x,0),_.push(0,0,1),d.push(y/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+u*p,v=x+u*(p+1),b=x+1+u*(p+1),A=x+1+u*p;m.push(y,v,A),m.push(v,b,A)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new na(t.width,t.height,t.widthSegments,t.heightSegments)}}class hl extends Te{constructor(t=1,e=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let u=0;const f=[],h=new D,c=new D,m=[],g=[],_=[],d=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let b=0;b<=e;b++){const A=b/e;h.x=-t*Math.cos(r+A*s)*Math.sin(a+y*o),h.y=t*Math.cos(a+y*o),h.z=t*Math.sin(r+A*s)*Math.sin(a+y*o),g.push(h.x,h.y,h.z),c.copy(h).normalize(),_.push(c.x,c.y,c.z),d.push(A+v,1-y),x.push(u++)}f.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=f[p][x+1],v=f[p][x],b=f[p+1][x],A=f[p+1][x+1];(p!==0||a>0)&&m.push(y,v,A),(p!==n-1||l<Math.PI)&&m.push(v,b,A)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Hh extends kr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ut(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ut(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=b0,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class O0 extends Hh{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Pt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ut(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ut(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ut(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class kh extends kr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=$u,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Vh extends kr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Gh extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ut(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Ua=new Ft,Ql=new D,tc=new D;class Wh{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Ft,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new cl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Ql.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ql),tc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(tc),e.updateMatrixWorld(),Ua.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ua),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ua)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class Xh extends Wh{constructor(){super(new Ie(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=Ys*2*t.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=t.distance||e.far;(n!==e.fov||r!==e.aspect||s!==e.far)&&(e.fov=n,e.aspect=r,e.far=s,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class qh extends Gh{constructor(t,e,n=0,r=Math.PI/3,s=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new Xh}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class B0 extends L0{constructor(t=-1,e=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,a=n+t,o=r+e,l=r-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,a=s+u*this.view.width,o-=f*this.view.offsetY,l=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Yh extends Ie{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class jh{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ec(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=ec();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function ec(){return performance.now()}class Wo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Pt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Pt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const nc=new D,us=new D;class zn{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){nc.subVectors(t,this.start),us.subVectors(this.end,this.start);const n=us.dot(us);let s=us.dot(nc)/n;return e&&(s=Pt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class $h extends bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function ic(i,t,e,n){const r=Kh(n);switch(e){case x0:return i*t;case M0:return i*t;case S0:return i*t*2;case fr:return i*t/r.components*r.byteLength;case Js:return i*t/r.components*r.byteLength;case Qs:return i*t*2/r.components*r.byteLength;case zr:return i*t*2/r.components*r.byteLength;case y0:return i*t*3/r.components*r.byteLength;case Zt:return i*t*4/r.components*r.byteLength;case dr:return i*t*4/r.components*r.byteLength;case Fs:case Ns:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Os:case Bs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case vo:case yo:return Math.max(i,16)*Math.max(t,8)/4;case _o:case xo:return Math.max(i,8)*Math.max(t,8)/2;case Mo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case bo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ao:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Co:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Io:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case No:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case zs:case Bo:case zo:return Math.ceil(i/4)*Math.ceil(t/4)*16;case T0:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case ko:case Vo:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Kh(i){switch(i){case cn:case Ws:return{byteLength:1,components:1};case cr:case rl:case Le:return{byteLength:2,components:1};case sl:case al:return{byteLength:2,components:4};case on:case ir:case ne:return{byteLength:4,components:1};case v0:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ks}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ks);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function z0(){let i=null,t=!1,e=null,n=null;function r(s,a){e(s,a),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Zh(i){const t=new WeakMap;function e(o,l){const u=o.array,f=o.usage,h=u.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,u,f),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,u){const f=l.array,h=l.updateRanges;if(i.bindBuffer(u,o),h.length===0)i.bufferSubData(u,0,f);else{h.sort((m,g)=>m.start-g.start);let c=0;for(let m=1;m<h.length;m++){const g=h[c],_=h[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,h[c]=_)}h.length=c+1;for(let m=0,g=h.length;m<g;m++){const _=h[m];i.bufferSubData(u,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=t.get(o);(!f||f.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:r,remove:s,update:a}}var Jh=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Qh=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,tf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ef=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,sf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,of=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,lf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,hf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,ff=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,df=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,pf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,mf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,_f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,xf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,yf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Mf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Sf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Tf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,bf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Ef=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Af=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Rf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Cf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Pf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Df=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,If=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Lf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Nf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Of=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Bf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Hf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,kf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Vf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Gf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Wf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Xf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,qf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Yf=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,jf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,$f=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Kf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Zf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Jf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Qf=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ed=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,id=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rd=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,od=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ld=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ud=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,hd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,dd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pd=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,md=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,_d=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,vd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Md=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Sd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Td=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,bd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ed=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,wd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Ad=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Rd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Cd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Pd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Dd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Id=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ld=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ud=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Fd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Nd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Od=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Bd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Hd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,kd=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Vd=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Gd=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Wd=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Xd=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,qd=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Yd=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,$d=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Kd=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Zd=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Jd=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Qd=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ep=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,np=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ip=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,sp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ap=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,op=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,up=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,hp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,dp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,_p=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Mp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Tp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ep=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ap=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Pp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Dp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Lt={alphahash_fragment:Jh,alphahash_pars_fragment:Qh,alphamap_fragment:tf,alphamap_pars_fragment:ef,alphatest_fragment:nf,alphatest_pars_fragment:rf,aomap_fragment:sf,aomap_pars_fragment:af,batching_pars_vertex:of,batching_vertex:lf,begin_vertex:cf,beginnormal_vertex:uf,bsdfs:hf,iridescence_fragment:ff,bumpmap_pars_fragment:df,clipping_planes_fragment:pf,clipping_planes_pars_fragment:mf,clipping_planes_pars_vertex:gf,clipping_planes_vertex:_f,color_fragment:vf,color_pars_fragment:xf,color_pars_vertex:yf,color_vertex:Mf,common:Sf,cube_uv_reflection_fragment:Tf,defaultnormal_vertex:bf,displacementmap_pars_vertex:Ef,displacementmap_vertex:wf,emissivemap_fragment:Af,emissivemap_pars_fragment:Rf,colorspace_fragment:Cf,colorspace_pars_fragment:Pf,envmap_fragment:Df,envmap_common_pars_fragment:If,envmap_pars_fragment:Lf,envmap_pars_vertex:Uf,envmap_physical_pars_fragment:Xf,envmap_vertex:Ff,fog_vertex:Nf,fog_pars_vertex:Of,fog_fragment:Bf,fog_pars_fragment:zf,gradientmap_pars_fragment:Hf,lightmap_pars_fragment:kf,lights_lambert_fragment:Vf,lights_lambert_pars_fragment:Gf,lights_pars_begin:Wf,lights_toon_fragment:qf,lights_toon_pars_fragment:Yf,lights_phong_fragment:jf,lights_phong_pars_fragment:$f,lights_physical_fragment:Kf,lights_physical_pars_fragment:Zf,lights_fragment_begin:Jf,lights_fragment_maps:Qf,lights_fragment_end:td,logdepthbuf_fragment:ed,logdepthbuf_pars_fragment:nd,logdepthbuf_pars_vertex:id,logdepthbuf_vertex:rd,map_fragment:sd,map_pars_fragment:ad,map_particle_fragment:od,map_particle_pars_fragment:ld,metalnessmap_fragment:cd,metalnessmap_pars_fragment:ud,morphinstance_vertex:hd,morphcolor_vertex:fd,morphnormal_vertex:dd,morphtarget_pars_vertex:pd,morphtarget_vertex:md,normal_fragment_begin:gd,normal_fragment_maps:_d,normal_pars_fragment:vd,normal_pars_vertex:xd,normal_vertex:yd,normalmap_pars_fragment:Md,clearcoat_normal_fragment_begin:Sd,clearcoat_normal_fragment_maps:Td,clearcoat_pars_fragment:bd,iridescence_pars_fragment:Ed,opaque_fragment:wd,packing:Ad,premultiplied_alpha_fragment:Rd,project_vertex:Cd,dithering_fragment:Pd,dithering_pars_fragment:Dd,roughnessmap_fragment:Id,roughnessmap_pars_fragment:Ld,shadowmap_pars_fragment:Ud,shadowmap_pars_vertex:Fd,shadowmap_vertex:Nd,shadowmask_pars_fragment:Od,skinbase_vertex:Bd,skinning_pars_vertex:zd,skinning_vertex:Hd,skinnormal_vertex:kd,specularmap_fragment:Vd,specularmap_pars_fragment:Gd,tonemapping_fragment:Wd,tonemapping_pars_fragment:Xd,transmission_fragment:qd,transmission_pars_fragment:Yd,uv_pars_fragment:jd,uv_pars_vertex:$d,uv_vertex:Kd,worldpos_vertex:Zd,background_vert:Jd,background_frag:Qd,backgroundCube_vert:tp,backgroundCube_frag:ep,cube_vert:np,cube_frag:ip,depth_vert:rp,depth_frag:sp,distanceRGBA_vert:ap,distanceRGBA_frag:op,equirect_vert:lp,equirect_frag:cp,linedashed_vert:up,linedashed_frag:hp,meshbasic_vert:fp,meshbasic_frag:dp,meshlambert_vert:pp,meshlambert_frag:mp,meshmatcap_vert:gp,meshmatcap_frag:_p,meshnormal_vert:vp,meshnormal_frag:xp,meshphong_vert:yp,meshphong_frag:Mp,meshphysical_vert:Sp,meshphysical_frag:Tp,meshtoon_vert:bp,meshtoon_frag:Ep,points_vert:wp,points_frag:Ap,shadow_vert:Rp,shadow_frag:Cp,sprite_vert:Pp,sprite_frag:Dp},nt={common:{diffuse:{value:new Ut(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ct}},envmap:{envMap:{value:null},envMapRotation:{value:new Ct},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ct}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ct}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ct},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ct},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ct},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ct}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ct}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ct}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ut(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ut(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0},uvTransform:{value:new Ct}},sprite:{diffuse:{value:new Ut(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ct},alphaMap:{value:null},alphaMapTransform:{value:new Ct},alphaTest:{value:0}}},Sn={basic:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:De([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},specular:{value:new Ut(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:De([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:De([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ut(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:De([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:De([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:De([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:De([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:De([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ct},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ct}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:De([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:De([nt.lights,nt.fog,{color:{value:new Ut(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Sn.physical={uniforms:De([Sn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ct},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ct},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ct},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ct},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ct},sheen:{value:0},sheenColor:{value:new Ut(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ct},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ct},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ct},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ct},attenuationDistance:{value:0},attenuationColor:{value:new Ut(0)},specularColor:{value:new Ut(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ct},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ct},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ct}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const hs={r:0,b:0,g:0},ci=new Tn,Ip=new Ft;function Lp(i,t,e,n,r,s,a){const o=new Ut(0);let l=s===!0?0:1,u,f,h=null,c=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const b=g(y);b===null?p(o,l):b&&b.isColor&&(p(b,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,v){const b=g(v);b&&(b.isCubeTexture||b.mapping===Zs)?(f===void 0&&(f=new Ae(new _r(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:mr(Sn.backgroundCube.uniforms),vertexShader:Sn.backgroundCube.vertexShader,fragmentShader:Sn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),ci.copy(v.backgroundRotation),ci.x*=-1,ci.y*=-1,ci.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),f.material.uniforms.envMap.value=b,f.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Ip.makeRotationFromEuler(ci)),f.material.toneMapped=qt.getTransfer(b.colorSpace)!==Jt,(h!==b||c!==b.version||m!==i.toneMapping)&&(f.material.needsUpdate=!0,h=b,c=b.version,m=i.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):b&&b.isTexture&&(u===void 0&&(u=new Ae(new na(2,2),new un({name:"BackgroundMaterial",uniforms:mr(Sn.background.uniforms),vertexShader:Sn.background.vertexShader,fragmentShader:Sn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=b,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=qt.getTransfer(b.colorSpace)!==Jt,b.matrixAutoUpdate===!0&&b.updateMatrix(),u.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||c!==b.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,h=b,c=b.version,m=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,v){y.getRGB(hs,I0(i)),n.buffers.color.setClear(hs.r,hs.g,hs.b,v,a)}function x(){f!==void 0&&(f.geometry.dispose(),f.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:d,dispose:x}}function Up(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=c(null);let s=r,a=!1;function o(M,C,U,L,B){let G=!1;const k=h(L,U,C);s!==k&&(s=k,u(s.object)),G=m(M,L,U,B),G&&g(M,L,U,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(M,C,U,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function f(M){return i.deleteVertexArray(M)}function h(M,C,U){const L=U.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let G=B[C.id];G===void 0&&(G={},B[C.id]=G);let k=G[L];return k===void 0&&(k=c(l()),G[L]=k),k}function c(M){const C=[],U=[],L=[];for(let B=0;B<e;B++)C[B]=0,U[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:L,object:M,attributes:{},index:null}}function m(M,C,U,L){const B=s.attributes,G=C.attributes;let k=0;const q=U.getAttributes();for(const W in q)if(q[W].location>=0){const ct=B[W];let _t=G[W];if(_t===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),ct===void 0||ct.attribute!==_t||_t&&ct.data!==_t.data)return!0;k++}return s.attributesNum!==k||s.index!==L}function g(M,C,U,L){const B={},G=C.attributes;let k=0;const q=U.getAttributes();for(const W in q)if(q[W].location>=0){let ct=G[W];ct===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const _t={};_t.attribute=ct,ct&&ct.data&&(_t.data=ct.data),B[W]=_t,k++}s.attributes=B,s.attributesNum=k,s.index=L}function _(){const M=s.newAttributes;for(let C=0,U=M.length;C<U;C++)M[C]=0}function d(M){p(M,0)}function p(M,C){const U=s.newAttributes,L=s.enabledAttributes,B=s.attributeDivisors;U[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),B[M]!==C&&(i.vertexAttribDivisor(M,C),B[M]=C)}function x(){const M=s.newAttributes,C=s.enabledAttributes;for(let U=0,L=C.length;U<L;U++)C[U]!==M[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function y(M,C,U,L,B,G,k){k===!0?i.vertexAttribIPointer(M,C,U,B,G):i.vertexAttribPointer(M,C,U,L,B,G)}function v(M,C,U,L){_();const B=L.attributes,G=U.getAttributes(),k=C.defaultAttributeValues;for(const q in G){const W=G[q];if(W.location>=0){let tt=B[q];if(tt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const ct=tt.normalized,_t=tt.itemSize,Nt=t.get(tt);if(Nt===void 0)continue;const te=Nt.buffer,j=Nt.type,et=Nt.bytesPerElement,gt=j===i.INT||j===i.UNSIGNED_INT||tt.gpuType===ir;if(tt.isInterleavedBufferAttribute){const st=tt.data,bt=st.stride,At=tt.offset;if(st.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)p(W.location+Ot,st.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)d(W.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ot=0;Ot<W.locationSize;Ot++)y(W.location+Ot,_t/W.locationSize,j,ct,bt*et,(At+_t/W.locationSize*Ot)*et,gt)}else{if(tt.isInstancedBufferAttribute){for(let st=0;st<W.locationSize;st++)p(W.location+st,tt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let st=0;st<W.locationSize;st++)d(W.location+st);i.bindBuffer(i.ARRAY_BUFFER,te);for(let st=0;st<W.locationSize;st++)y(W.location+st,_t/W.locationSize,j,ct,_t*et,_t/W.locationSize*st*et,gt)}}else if(k!==void 0){const ct=k[q];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(W.location,ct);break;case 3:i.vertexAttrib3fv(W.location,ct);break;case 4:i.vertexAttrib4fv(W.location,ct);break;default:i.vertexAttrib1fv(W.location,ct)}}}}x()}function b(){P();for(const M in n){const C=n[M];for(const U in C){const L=C[U];for(const B in L)f(L[B].object),delete L[B];delete C[U]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const U in C){const L=C[U];for(const B in L)f(L[B].object),delete L[B];delete C[U]}delete n[M.id]}function w(M){for(const C in n){const U=n[C];if(U[M.id]===void 0)continue;const L=U[M.id];for(const B in L)f(L[B].object),delete L[B];delete U[M.id]}}function P(){S(),a=!0,s!==r&&(s=r,u(s.object))}function S(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:P,resetDefaultState:S,dispose:b,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:d,disableUnusedAttributes:x}}function Fp(i,t,e){let n;function r(u){n=u}function s(u,f){i.drawArrays(n,u,f),e.update(f,n,1)}function a(u,f,h){h!==0&&(i.drawArraysInstanced(n,u,f,h),e.update(f,n,h))}function o(u,f,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=f[g];e.update(m,n,1)}function l(u,f,h,c){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)a(u[g],f[g],c[g]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,f,0,c,0,h);let g=0;for(let _=0;_<h;_++)g+=f[_]*c[_];e.update(g,n,1)}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Np(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(w){return!(w!==Zt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Le&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ne&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const f=l(u);f!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",f,"instead."),u=f);const h=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:h,reverseDepthBuffer:c,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:b,maxSamples:A}}function Op(i){const t=this;let e=null,n=0,r=!1,s=!1;const a=new Mn,o=new Ct,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,c){const m=h.length!==0||c||n!==0||r;return r=c,n=h.length,m},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,c){e=f(h,c,0)},this.setState=function(h,c,m){const g=h.clippingPlanes,_=h.clipIntersection,d=h.clipShadows,p=i.get(h);if(!r||g===null||g.length===0||s&&!d)s?f(null):u();else{const x=s?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=f(g,c,y,m);for(let b=0;b!==y;++b)v[b]=e[b];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function f(h,c,m,g){const _=h!==null?h.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,x=c.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<p)&&(d=new Float32Array(p));for(let y=0,v=m;y!==_;++y,v+=4)a.copy(h[y]).applyMatrix4(x,o),a.normal.toArray(d,v),d[v+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function Bp(i){let t=new WeakMap;function e(a,o){return o===Br?a.mapping=or:o===mo&&(a.mapping=lr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Br||o===mo)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new Nh(l.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",r),e(u.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const tr=4,rc=[.125,.215,.35,.446,.526,.582],yi=20,Fa=new B0,sc=new Ut;let Na=null,Oa=0,Ba=0,za=!1;const vi=(1+Math.sqrt(5))/2,zi=1/vi,ac=[new D(-vi,zi,0),new D(vi,zi,0),new D(-zi,0,vi),new D(zi,0,vi),new D(0,vi,-zi),new D(0,vi,zi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class oc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100){Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(t,n,r,s),e>0&&this._blur(s,0,0,e),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Oa,Ba),this._renderer.xr.enabled=za,t.scissorTest=!1,fs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===or||t.mapping===lr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:Le,format:Zt,colorSpace:pr,depthBuffer:!1},r=lc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lc(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=zp(s)),this._blurMaterial=Hp(s,t,e)}return r}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,r){const o=new Ie(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],f=this._renderer,h=f.autoClear,c=f.toneMapping;f.getClearColor(sc),f.toneMapping=On,f.autoClear=!1;const m=new ll({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new Ae(new _r,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(sc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const y=this._cubeSize;fs(r,x*y,p>2?y:0,y,y),f.setRenderTarget(r),_&&f.render(g,o),f.render(t,o)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=c,f.autoClear=h,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===or||t.mapping===lr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cc());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=t;const l=this._cubeSize;fs(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=ac[(r-s-1)%ac.length];this._blur(t,s-1,s,a,o)}e.autoClear=n}_blur(t,e,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,r,"latitudinal",s),this._halfBlur(a,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,h=new Ae(this._lodPlanes[r],u),c=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*m):2*Math.PI/(2*yi-1),_=s/g,d=isFinite(s)?1+Math.floor(f*_):yi;d>yi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${yi}`);const p=[];let x=0;for(let w=0;w<yi;++w){const P=w/_,S=Math.exp(-P*P/2);p.push(S),w===0?x+=S:w<d&&(x+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;c.envMap.value=t.texture,c.samples.value=d,c.weights.value=p,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-n;const v=this._sizeLods[r],b=3*v*(r>y-tr?r-y+tr:0),A=4*(this._cubeSize-v);fs(e,b,A,3*v,2*v),l.setRenderTarget(e),l.render(h,Fa)}}function zp(i){const t=[],e=[],n=[];let r=i;const s=i-tr+1+rc.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);e.push(o);let l=1/o;a>i-tr?l=rc[a-i+tr-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),f=-u,h=1+u,c=[f,f,h,f,h,h,f,f,h,h,f,h],m=6,g=6,_=3,d=2,p=1,x=new Float32Array(_*g*m),y=new Float32Array(d*g*m),v=new Float32Array(p*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,P=A>2?0:-1,S=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(S,_*g*A),y.set(c,d*g*A);const M=[A,A,A,A,A,A];v.set(M,p*g*A)}const b=new Te;b.setAttribute("position",new ue(x,_)),b.setAttribute("uv",new ue(y,d)),b.setAttribute("faceIndex",new ue(v,p)),t.push(b),r>tr&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function lc(i,t,e){const n=new Ze(i,t,e);return n.texture.mapping=Zs,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function fs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function Hp(i,t,e){const n=new Float32Array(yi),r=new D(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:yi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function cc(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function uc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function fl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function kp(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Br||l===mo,f=l===or||l===lr;if(u||f){let h=t.get(o);const c=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new oc(i)),h=u?e.fromEquirectangular(o,h):e.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),h.texture;if(h!==void 0)return h.texture;{const m=o.image;return u&&m&&m.height>0||f&&m&&r(m)?(e===null&&(e=new oc(i)),h=u?e.fromEquirectangular(o):e.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,t.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const u=6;for(let f=0;f<u;f++)o[f]!==void 0&&l++;return l===u}function s(o){const l=o.target;l.removeEventListener("dispose",s);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function Vp(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&Ki("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function Gp(i,t,e,n){const r={},s=new WeakMap;function a(h){const c=h.target;c.index!==null&&t.remove(c.index);for(const g in c.attributes)t.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete r[c.id];const m=s.get(c);m&&(t.remove(m),s.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(h,c){return r[c.id]===!0||(c.addEventListener("dispose",a),r[c.id]=!0,e.memory.geometries++),c}function l(h){const c=h.attributes;for(const m in c)t.update(c[m],i.ARRAY_BUFFER)}function u(h){const c=[],m=h.index,g=h.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let y=0,v=x.length;y<v;y+=3){const b=x[y+0],A=x[y+1],w=x[y+2];c.push(b,A,A,w,w,b)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const b=y+0,A=y+1,w=y+2;c.push(b,A,A,w,w,b)}}else return;const d=new(w0(c)?D0:P0)(c,1);d.version=_;const p=s.get(h);p&&t.remove(p),s.set(h,d)}function f(h){const c=s.get(h);if(c){const m=h.index;m!==null&&c.version<m.version&&u(h)}else u(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:f}}function Wp(i,t,e){let n;function r(c){n=c}let s,a;function o(c){s=c.type,a=c.bytesPerElement}function l(c,m){i.drawElements(n,m,s,c*a),e.update(m,n,1)}function u(c,m,g){g!==0&&(i.drawElementsInstanced(n,m,s,c*a,g),e.update(m,n,g))}function f(c,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,s,c,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function h(c,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)u(c[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,s,c,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x]*_[x];e.update(p,n,1)}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function Xp(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(s/3);break;case i.LINES:e.lines+=o*(s/2);break;case i.LINE_STRIP:e.lines+=o*(s-1);break;case i.LINE_LOOP:e.lines+=o*s;break;case i.POINTS:e.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function qp(i,t,e){const n=new WeakMap,r=new Kt;function s(a,o,l){const u=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=f!==void 0?f.length:0;let c=n.get(o);if(c===void 0||c.count!==h){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;c!==void 0&&c.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),d===!0&&(v=3);let b=o.attributes.position.count*v,A=1;b>t.maxTextureSize&&(A=Math.ceil(b/t.maxTextureSize),b=t.maxTextureSize);const w=new Float32Array(b*A*4*h),P=new ta(w,b,A,h);P.type=ne,P.needsUpdate=!0;const S=v*4;for(let C=0;C<h;C++){const U=p[C],L=x[C],B=y[C],G=b*A*4*C;for(let k=0;k<U.count;k++){const q=k*S;g===!0&&(r.fromBufferAttribute(U,k),w[G+q+0]=r.x,w[G+q+1]=r.y,w[G+q+2]=r.z,w[G+q+3]=0),_===!0&&(r.fromBufferAttribute(L,k),w[G+q+4]=r.x,w[G+q+5]=r.y,w[G+q+6]=r.z,w[G+q+7]=0),d===!0&&(r.fromBufferAttribute(B,k),w[G+q+8]=r.x,w[G+q+9]=r.y,w[G+q+10]=r.z,w[G+q+11]=B.itemSize===4?r.w:1)}}c={count:h,texture:P,size:new ut(b,A)},n.set(o,c),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<u.length;d++)g+=u[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:s}}function Yp(i,t,e,n){let r=new WeakMap;function s(l){const u=n.render.frame,f=l.geometry,h=t.get(l,f);if(r.get(h)!==u&&(t.update(h),r.set(h,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,u))),l.isSkinnedMesh){const c=l.skeleton;r.get(c)!==u&&(c.update(),r.set(c,u))}return h}function a(){r=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:s,dispose:a}}const H0=new Ne,hc=new N0(1,1),k0=new ta,V0=new _h,G0=new U0,fc=[],dc=[],pc=new Float32Array(16),mc=new Float32Array(9),gc=new Float32Array(4);function vr(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=fc[r];if(s===void 0&&(s=new Float32Array(r),fc[r]=s),t!==0){n.toArray(s,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(s,o)}return s}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function ia(i,t){let e=dc[t];e===void 0&&(e=new Int32Array(t),dc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function jp(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function $p(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function Kp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function Zp(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function Jp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;gc.set(n),i.uniformMatrix2fv(this.addr,!1,gc),ve(e,n)}}function Qp(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;mc.set(n),i.uniformMatrix3fv(this.addr,!1,mc),ve(e,n)}}function t1(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;pc.set(n),i.uniformMatrix4fv(this.addr,!1,pc),ve(e,n)}}function e1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function n1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function i1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function r1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function s1(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function a1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function o1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function l1(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function c1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(hc.compareFunction=E0,s=hc):s=H0,e.setTexture2D(t||s,r)}function u1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||V0,r)}function h1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||G0,r)}function f1(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||k0,r)}function d1(i){switch(i){case 5126:return jp;case 35664:return $p;case 35665:return Kp;case 35666:return Zp;case 35674:return Jp;case 35675:return Qp;case 35676:return t1;case 5124:case 35670:return e1;case 35667:case 35671:return n1;case 35668:case 35672:return i1;case 35669:case 35673:return r1;case 5125:return s1;case 36294:return a1;case 36295:return o1;case 36296:return l1;case 35678:case 36198:case 36298:case 36306:case 35682:return c1;case 35679:case 36299:case 36307:return u1;case 35680:case 36300:case 36308:case 36293:return h1;case 36289:case 36303:case 36311:case 36292:return f1}}function p1(i,t){i.uniform1fv(this.addr,t)}function m1(i,t){const e=vr(t,this.size,2);i.uniform2fv(this.addr,e)}function g1(i,t){const e=vr(t,this.size,3);i.uniform3fv(this.addr,e)}function _1(i,t){const e=vr(t,this.size,4);i.uniform4fv(this.addr,e)}function v1(i,t){const e=vr(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function x1(i,t){const e=vr(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function y1(i,t){const e=vr(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function M1(i,t){i.uniform1iv(this.addr,t)}function S1(i,t){i.uniform2iv(this.addr,t)}function T1(i,t){i.uniform3iv(this.addr,t)}function b1(i,t){i.uniform4iv(this.addr,t)}function E1(i,t){i.uniform1uiv(this.addr,t)}function w1(i,t){i.uniform2uiv(this.addr,t)}function A1(i,t){i.uniform3uiv(this.addr,t)}function R1(i,t){i.uniform4uiv(this.addr,t)}function C1(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture2D(t[a]||H0,s[a])}function P1(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture3D(t[a]||V0,s[a])}function D1(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTextureCube(t[a]||G0,s[a])}function I1(i,t,e){const n=this.cache,r=t.length,s=ia(e,r);_e(n,s)||(i.uniform1iv(this.addr,s),ve(n,s));for(let a=0;a!==r;++a)e.setTexture2DArray(t[a]||k0,s[a])}function L1(i){switch(i){case 5126:return p1;case 35664:return m1;case 35665:return g1;case 35666:return _1;case 35674:return v1;case 35675:return x1;case 35676:return y1;case 5124:case 35670:return M1;case 35667:case 35671:return S1;case 35668:case 35672:return T1;case 35669:case 35673:return b1;case 5125:return E1;case 36294:return w1;case 36295:return A1;case 36296:return R1;case 35678:case 36198:case 36298:case 36306:case 35682:return C1;case 35679:case 36299:case 36307:return P1;case 35680:case 36300:case 36308:case 36293:return D1;case 36289:case 36303:case 36311:case 36292:return I1}}class U1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=d1(e.type)}}class F1{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=L1(e.type)}}class N1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(t,e[o.id],n)}}}const Ha=/(\w+)(\])?(\[|\.)?/g;function _c(i,t){i.seq.push(t),i.map[t.id]=t}function O1(i,t,e){const n=i.name,r=n.length;for(Ha.lastIndex=0;;){const s=Ha.exec(n),a=Ha.lastIndex;let o=s[1];const l=s[2]==="]",u=s[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===r){_c(e,u===void 0?new U1(o,i,t):new F1(o,i,t));break}else{let h=e.map[o];h===void 0&&(h=new N1(o),_c(e,h)),e=h}}}class ks{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),a=t.getUniformLocation(e,s.name);O1(s,a,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,a=e.length;s!==a;++s){const o=e[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const a=t[r];a.id in e&&n.push(a)}return n}}function vc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const B1=37297;let z1=0;function H1(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const xc=new Ct;function k1(i){qt._getMatrix(xc,qt.workingColorSpace,i);const t=`mat3( ${xc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case Xs:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function yc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),r=i.getShaderInfoLog(t).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+H1(i.getShaderSource(t),a)}else return r}function V1(i,t){const e=k1(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function G1(i,t){let e;switch(t){case ku:e="Linear";break;case Vu:e="Reinhard";break;case Gu:e="Cineon";break;case g0:e="ACESFilmic";break;case Xu:e="AgX";break;case qu:e="Neutral";break;case Wu:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const ds=new D;function W1(){qt.getLuminanceCoefficients(ds);const i=ds.x.toFixed(4),t=ds.y.toFixed(4),e=ds.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function X1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Lr).join(`
`)}function q1(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Y1(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),e[a]={type:s.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Lr(i){return i!==""}function Mc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Sc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const j1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xo(i){return i.replace(j1,K1)}const $1=new Map;function K1(i,t){let e=Lt[t];if(e===void 0){const n=$1.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Xo(e)}const Z1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Tc(i){return i.replace(Z1,J1)}function J1(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bc(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Q1(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===p0?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===yu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Pn&&(t="SHADOWMAP_TYPE_VSM"),t}function tm(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case or:case lr:t="ENVMAP_TYPE_CUBE";break;case Zs:t="ENVMAP_TYPE_CUBE_UV";break}return t}function em(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case lr:t="ENVMAP_MODE_REFRACTION";break}return t}function nm(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case m0:t="ENVMAP_BLENDING_MULTIPLY";break;case zu:t="ENVMAP_BLENDING_MIX";break;case Hu:t="ENVMAP_BLENDING_ADD";break}return t}function im(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function rm(i,t,e,n){const r=i.getContext(),s=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Q1(e),u=tm(e),f=em(e),h=nm(e),c=im(e),m=X1(e),g=q1(s),_=r.createProgram();let d,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Lr).join(`
`),p.length>0&&(p+=`
`)):(d=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Lr).join(`
`),p=[bc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",e.envMap?"#define "+h:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==On?"#define TONE_MAPPING":"",e.toneMapping!==On?Lt.tonemapping_pars_fragment:"",e.toneMapping!==On?G1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,V1("linearToOutputTexel",e.outputColorSpace),W1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Lr).join(`
`)),a=Xo(a),a=Mc(a,e),a=Sc(a,e),o=Xo(o),o=Mc(o,e),o=Sc(o,e),a=Tc(a),o=Tc(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Fl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Fl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+d+a,v=x+p+o,b=vc(r,r.VERTEX_SHADER,y),A=vc(r,r.FRAGMENT_SHADER,v);r.attachShader(_,b),r.attachShader(_,A),e.index0AttributeName!==void 0?r.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(_,0,"position"),r.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const U=r.getProgramInfoLog(_).trim(),L=r.getShaderInfoLog(b).trim(),B=r.getShaderInfoLog(A).trim();let G=!0,k=!0;if(r.getProgramParameter(_,r.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,_,b,A);else{const q=yc(r,b,"vertex"),W=yc(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(_,r.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+q+`
`+W)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(L===""||B==="")&&(k=!1);k&&(C.diagnostics={runnable:G,programLog:U,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:p}})}r.deleteShader(b),r.deleteShader(A),P=new ks(r,_),S=Y1(r,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(_,B1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=z1++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=b,this.fragmentShader=A,this}let sm=0;class am{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new om(t),e.set(t,n)),n}}class om{constructor(t){this.id=sm++,this.code=t,this.usedTimes=0}}function lm(i,t,e,n,r,s,a){const o=new R0,l=new am,u=new Set,f=[],h=r.logarithmicDepthBuffer,c=r.vertexTextures;let m=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(S){return u.add(S),S===0?"uv":`uv${S}`}function d(S,M,C,U,L){const B=U.fog,G=L.geometry,k=S.isMeshStandardMaterial?U.environment:null,q=(S.isMeshStandardMaterial?e:t).get(S.envMap||k),W=q&&q.mapping===Zs?q.image.height:null,tt=g[S.type];S.precision!==null&&(m=r.getMaxPrecision(S.precision),m!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",m,"instead."));const ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_t=ct!==void 0?ct.length:0;let Nt=0;G.morphAttributes.position!==void 0&&(Nt=1),G.morphAttributes.normal!==void 0&&(Nt=2),G.morphAttributes.color!==void 0&&(Nt=3);let te,j,et,gt;if(tt){const $t=Sn[tt];te=$t.vertexShader,j=$t.fragmentShader}else te=S.vertexShader,j=S.fragmentShader,l.update(S),et=l.getVertexShaderID(S),gt=l.getFragmentShaderID(S);const st=i.getRenderTarget(),bt=i.state.buffers.depth.getReversed(),At=L.isInstancedMesh===!0,Ot=L.isBatchedMesh===!0,ae=!!S.map,Vt=!!S.matcap,he=!!q,I=!!S.aoMap,Je=!!S.lightMap,zt=!!S.bumpMap,Ht=!!S.normalMap,yt=!!S.displacementMap,ie=!!S.emissiveMap,xt=!!S.metalnessMap,R=!!S.roughnessMap,T=S.anisotropy>0,z=S.clearcoat>0,$=S.dispersion>0,Z=S.iridescence>0,Y=S.sheen>0,vt=S.transmission>0,at=T&&!!S.anisotropyMap,ft=z&&!!S.clearcoatMap,Gt=z&&!!S.clearcoatNormalMap,Q=z&&!!S.clearcoatRoughnessMap,dt=Z&&!!S.iridescenceMap,Tt=Z&&!!S.iridescenceThicknessMap,Et=Y&&!!S.sheenColorMap,pt=Y&&!!S.sheenRoughnessMap,kt=!!S.specularMap,It=!!S.specularColorMap,ee=!!S.specularIntensityMap,F=vt&&!!S.transmissionMap,it=vt&&!!S.thicknessMap,X=!!S.gradientMap,K=!!S.alphaMap,lt=S.alphaTest>0,ot=!!S.alphaHash,Dt=!!S.extensions;let oe=On;S.toneMapped&&(st===null||st.isXRRenderTarget===!0)&&(oe=i.toneMapping);const be={shaderID:tt,shaderType:S.type,shaderName:S.name,vertexShader:te,fragmentShader:j,defines:S.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&L._colorsTexture!==null,instancing:At,instancingColor:At&&L.instanceColor!==null,instancingMorph:At&&L.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:st===null?i.outputColorSpace:st.isXRRenderTarget===!0?st.texture.colorSpace:pr,alphaToCoverage:!!S.alphaToCoverage,map:ae,matcap:Vt,envMap:he,envMapMode:he&&q.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:Je,bumpMap:zt,normalMap:Ht,displacementMap:c&&yt,emissiveMap:ie,normalMapObjectSpace:Ht&&S.normalMapType===Zu,normalMapTangentSpace:Ht&&S.normalMapType===b0,metalnessMap:xt,roughnessMap:R,anisotropy:T,anisotropyMap:at,clearcoat:z,clearcoatMap:ft,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Q,dispersion:$,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:Tt,sheen:Y,sheenColorMap:Et,sheenRoughnessMap:pt,specularMap:kt,specularColorMap:It,specularIntensityMap:ee,transmission:vt,transmissionMap:F,thicknessMap:it,gradientMap:X,opaque:S.transparent===!1&&S.blending===Jn&&S.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ot,combine:S.combine,mapUv:ae&&_(S.map.channel),aoMapUv:I&&_(S.aoMap.channel),lightMapUv:Je&&_(S.lightMap.channel),bumpMapUv:zt&&_(S.bumpMap.channel),normalMapUv:Ht&&_(S.normalMap.channel),displacementMapUv:yt&&_(S.displacementMap.channel),emissiveMapUv:ie&&_(S.emissiveMap.channel),metalnessMapUv:xt&&_(S.metalnessMap.channel),roughnessMapUv:R&&_(S.roughnessMap.channel),anisotropyMapUv:at&&_(S.anisotropyMap.channel),clearcoatMapUv:ft&&_(S.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(S.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(S.iridescenceMap.channel),iridescenceThicknessMapUv:Tt&&_(S.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(S.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(S.sheenRoughnessMap.channel),specularMapUv:kt&&_(S.specularMap.channel),specularColorMapUv:It&&_(S.specularColorMap.channel),specularIntensityMapUv:ee&&_(S.specularIntensityMap.channel),transmissionMapUv:F&&_(S.transmissionMap.channel),thicknessMapUv:it&&_(S.thicknessMap.channel),alphaMapUv:K&&_(S.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ht||T),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(ae||K),fog:!!B,useFog:S.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:bt,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ae&&S.map.isVideoTexture===!0&&qt.getTransfer(S.map.colorSpace)===Jt,decodeVideoTextureEmissive:ie&&S.emissiveMap.isVideoTexture===!0&&qt.getTransfer(S.emissiveMap.colorSpace)===Jt,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===rn,flipSided:S.side===Re,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Dt&&S.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&S.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return be.vertexUv1s=u.has(1),be.vertexUv2s=u.has(2),be.vertexUv3s=u.has(3),u.clear(),be}function p(S){const M=[];if(S.shaderID?M.push(S.shaderID):(M.push(S.customVertexShaderID),M.push(S.customFragmentShaderID)),S.defines!==void 0)for(const C in S.defines)M.push(C),M.push(S.defines[C]);return S.isRawShaderMaterial===!1&&(x(M,S),y(M,S),M.push(i.outputColorSpace)),M.push(S.customProgramCacheKey),M.join()}function x(S,M){S.push(M.precision),S.push(M.outputColorSpace),S.push(M.envMapMode),S.push(M.envMapCubeUVHeight),S.push(M.mapUv),S.push(M.alphaMapUv),S.push(M.lightMapUv),S.push(M.aoMapUv),S.push(M.bumpMapUv),S.push(M.normalMapUv),S.push(M.displacementMapUv),S.push(M.emissiveMapUv),S.push(M.metalnessMapUv),S.push(M.roughnessMapUv),S.push(M.anisotropyMapUv),S.push(M.clearcoatMapUv),S.push(M.clearcoatNormalMapUv),S.push(M.clearcoatRoughnessMapUv),S.push(M.iridescenceMapUv),S.push(M.iridescenceThicknessMapUv),S.push(M.sheenColorMapUv),S.push(M.sheenRoughnessMapUv),S.push(M.specularMapUv),S.push(M.specularColorMapUv),S.push(M.specularIntensityMapUv),S.push(M.transmissionMapUv),S.push(M.thicknessMapUv),S.push(M.combine),S.push(M.fogExp2),S.push(M.sizeAttenuation),S.push(M.morphTargetsCount),S.push(M.morphAttributeCount),S.push(M.numDirLights),S.push(M.numPointLights),S.push(M.numSpotLights),S.push(M.numSpotLightMaps),S.push(M.numHemiLights),S.push(M.numRectAreaLights),S.push(M.numDirLightShadows),S.push(M.numPointLightShadows),S.push(M.numSpotLightShadows),S.push(M.numSpotLightShadowsWithMaps),S.push(M.numLightProbes),S.push(M.shadowMapType),S.push(M.toneMapping),S.push(M.numClippingPlanes),S.push(M.numClipIntersection),S.push(M.depthPacking)}function y(S,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),S.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),S.push(o.mask)}function v(S){const M=g[S.type];let C;if(M){const U=Sn[M];C=Ih.clone(U.uniforms)}else C=S.uniforms;return C}function b(S,M){let C;for(let U=0,L=f.length;U<L;U++){const B=f[U];if(B.cacheKey===M){C=B,++C.usedTimes;break}}return C===void 0&&(C=new rm(i,M,S,s),f.push(C)),C}function A(S){if(--S.usedTimes===0){const M=f.indexOf(S);f[M]=f[f.length-1],f.pop(),S.destroy()}}function w(S){l.remove(S)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:b,releaseProgram:A,releaseShaderCache:w,programs:f,dispose:P}}function cm(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function r(a,o,l){i.get(a)[o]=l}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function um(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Ec(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function wc(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function a(h,c,m,g,_,d){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:c,material:m,groupOrder:g,renderOrder:h.renderOrder,z:_,group:d},i[t]=p):(p.id=h.id,p.object=h,p.geometry=c,p.material=m,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=d),t++,p}function o(h,c,m,g,_,d){const p=a(h,c,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?r.push(p):e.push(p)}function l(h,c,m,g,_,d){const p=a(h,c,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?r.unshift(p):e.unshift(p)}function u(h,c){e.length>1&&e.sort(h||um),n.length>1&&n.sort(c||Ec),r.length>1&&r.sort(c||Ec)}function f(){for(let h=t,c=i.length;h<c;h++){const m=i[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:f,sort:u}}function hm(){let i=new WeakMap;function t(n,r){const s=i.get(n);let a;return s===void 0?(a=new wc,i.set(n,[a])):r>=s.length?(a=new wc,s.push(a)):a=s[r],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function fm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ut};break;case"SpotLight":e={position:new D,direction:new D,color:new Ut,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ut,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ut,groundColor:new Ut};break;case"RectAreaLight":e={color:new Ut,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function dm(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let pm=0;function mm(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function gm(i){const t=new fm,e=dm(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new D);const r=new D,s=new Ft,a=new Ft;function o(u){let f=0,h=0,c=0;for(let S=0;S<9;S++)n.probe[S].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,x=0,y=0,v=0,b=0,A=0,w=0;u.sort(mm);for(let S=0,M=u.length;S<M;S++){const C=u[S],U=C.color,L=C.intensity,B=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=U.r*L,h+=U.g*L,c+=U.b*L;else if(C.isLightProbe){for(let k=0;k<9;k++)n.probe[k].addScaledVector(C.sh.coefficients[k],L);w++}else if(C.isDirectionalLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=C.shadow.matrix,x++}n.directional[m]=k,m++}else if(C.isSpotLight){const k=t.get(C);k.position.setFromMatrixPosition(C.matrixWorld),k.color.copy(U).multiplyScalar(L),k.distance=B,k.coneCos=Math.cos(C.angle),k.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),k.decay=C.decay,n.spot[_]=k;const q=C.shadow;if(C.map&&(n.spotLightMap[b]=C.map,b++,q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,v++}_++}else if(C.isRectAreaLight){const k=t.get(C);k.color.copy(U).multiplyScalar(L),k.halfWidth.set(C.width*.5,0,0),k.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=k,d++}else if(C.isPointLight){const k=t.get(C);if(k.color.copy(C.color).multiplyScalar(C.intensity),k.distance=C.distance,k.decay=C.decay,C.castShadow){const q=C.shadow,W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=k,g++}else if(C.isHemisphereLight){const k=t.get(C);k.skyColor.copy(C.color).multiplyScalar(L),k.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=k,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=h,n.ambient[2]=c;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==d||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==b||P.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+b-A,n.spotLightMap.length=b,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=d,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=b,P.numLightProbes=w,n.version=pm++)}function l(u,f){let h=0,c=0,m=0,g=0,_=0;const d=f.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const y=u[p];if(y.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(d),h++}else if(y.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(y.matrixWorld),r.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(r),v.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(d),a.identity(),s.copy(y.matrixWorld),s.premultiply(d),a.extractRotation(s),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[c];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(d),c++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function Ac(i){const t=new gm(i),e=[],n=[];function r(f){u.camera=f,e.length=0,n.length=0}function s(f){e.push(f)}function a(f){n.push(f)}function o(){t.setup(e)}function l(f){t.setupView(e,f)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:u,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function _m(i){let t=new WeakMap;function e(r,s=0){const a=t.get(r);let o;return a===void 0?(o=new Ac(i),t.set(r,[o])):s>=a.length?(o=new Ac(i),a.push(o)):o=a[s],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const vm=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,xm=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function ym(i,t,e){let n=new cl;const r=new ut,s=new ut,a=new Kt,o=new kh({depthPacking:Ku}),l=new Vh,u={},f=e.maxTextureSize,h={[xn]:Re,[Re]:xn,[rn]:rn},c=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:vm,fragmentShader:xm}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const g=new Te;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,c),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=p0;let p=this.type;this.render=function(A,w,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const S=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ke),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const L=p!==Pn&&this.type===Pn,B=p===Pn&&this.type!==Pn;for(let G=0,k=A.length;G<k;G++){const q=A[G],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const tt=W.getFrameExtents();if(r.multiply(tt),s.copy(W.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/tt.x),r.x=s.x*tt.x,W.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/tt.y),r.y=s.y*tt.y,W.mapSize.y=s.y)),W.map===null||L===!0||B===!0){const _t=this.type!==Pn?{minFilter:Bt,magFilter:Bt}:{};W.map!==null&&W.map.dispose(),W.map=new Ze(r.x,r.y,_t),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ct=W.getViewportCount();for(let _t=0;_t<ct;_t++){const Nt=W.getViewport(_t);a.set(s.x*Nt.x,s.y*Nt.y,s.x*Nt.z,s.y*Nt.w),U.viewport(a),W.updateMatrices(q,_t),n=W.getFrustum(),v(w,P,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Pn&&x(W,P),W.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(S,M,C)};function x(A,w){const P=t.update(_);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ze(r.x,r.y)),c.uniforms.shadow_pass.value=A.map.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,P,c,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,P,m,_,null)}function y(A,w,P,S){let M=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=M.uuid,L=w.uuid;let B=u[U];B===void 0&&(B={},u[U]=B);let G=B[L];G===void 0&&(G=M.clone(),B[L]=G,w.addEventListener("dispose",b)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,S===Pn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:h[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=i.properties.get(M);U.light=P}return M}function v(A,w,P,S,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Pn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const L=t.update(A),B=A.material;if(Array.isArray(B)){const G=L.groups;for(let k=0,q=G.length;k<q;k++){const W=G[k],tt=B[W.materialIndex];if(tt&&tt.visible){const ct=y(A,tt,S,M);A.onBeforeShadow(i,A,w,P,L,ct,W),i.renderBufferDirect(P,null,L,ct,A,W),A.onAfterShadow(i,A,w,P,L,ct,W)}}}else if(B.visible){const G=y(A,B,S,M);A.onBeforeShadow(i,A,w,P,L,G,null),i.renderBufferDirect(P,null,L,G,A,null),A.onAfterShadow(i,A,w,P,L,G,null)}}const U=A.children;for(let L=0,B=U.length;L<B;L++)v(U[L],w,P,S,M)}function b(A){A.target.removeEventListener("dispose",b);for(const P in u){const S=u[P],M=A.target.uuid;M in S&&(S[M].dispose(),delete S[M])}}}const Mm={[oo]:lo,[co]:fo,[uo]:po,[ar]:ho,[lo]:oo,[fo]:co,[po]:uo,[ho]:ar};function Sm(i,t){function e(){let F=!1;const it=new Kt;let X=null;const K=new Kt(0,0,0,0);return{setMask:function(lt){X!==lt&&!F&&(i.colorMask(lt,lt,lt,lt),X=lt)},setLocked:function(lt){F=lt},setClear:function(lt,ot,Dt,oe,be){be===!0&&(lt*=oe,ot*=oe,Dt*=oe),it.set(lt,ot,Dt,oe),K.equals(it)===!1&&(i.clearColor(lt,ot,Dt,oe),K.copy(it))},reset:function(){F=!1,X=null,K.set(-1,0,0,0)}}}function n(){let F=!1,it=!1,X=null,K=null,lt=null;return{setReversed:function(ot){if(it!==ot){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const oe=lt;lt=null,this.setClear(oe)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?st(i.DEPTH_TEST):bt(i.DEPTH_TEST)},setMask:function(ot){X!==ot&&!F&&(i.depthMask(ot),X=ot)},setFunc:function(ot){if(it&&(ot=Mm[ot]),K!==ot){switch(ot){case oo:i.depthFunc(i.NEVER);break;case lo:i.depthFunc(i.ALWAYS);break;case co:i.depthFunc(i.LESS);break;case ar:i.depthFunc(i.LEQUAL);break;case uo:i.depthFunc(i.EQUAL);break;case ho:i.depthFunc(i.GEQUAL);break;case fo:i.depthFunc(i.GREATER);break;case po:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ot}},setLocked:function(ot){F=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){F=!1,X=null,K=null,lt=null,it=!1}}}function r(){let F=!1,it=null,X=null,K=null,lt=null,ot=null,Dt=null,oe=null,be=null;return{setTest:function($t){F||($t?st(i.STENCIL_TEST):bt(i.STENCIL_TEST))},setMask:function($t){it!==$t&&!F&&(i.stencilMask($t),it=$t)},setFunc:function($t,hn,bn){(X!==$t||K!==hn||lt!==bn)&&(i.stencilFunc($t,hn,bn),X=$t,K=hn,lt=bn)},setOp:function($t,hn,bn){(ot!==$t||Dt!==hn||oe!==bn)&&(i.stencilOp($t,hn,bn),ot=$t,Dt=hn,oe=bn)},setLocked:function($t){F=$t},setClear:function($t){be!==$t&&(i.clearStencil($t),be=$t)},reset:function(){F=!1,it=null,X=null,K=null,lt=null,ot=null,Dt=null,oe=null,be=null}}}const s=new e,a=new n,o=new r,l=new WeakMap,u=new WeakMap;let f={},h={},c=new WeakMap,m=[],g=null,_=!1,d=null,p=null,x=null,y=null,v=null,b=null,A=null,w=new Ut(0,0,0),P=0,S=!1,M=null,C=null,U=null,L=null,B=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,q=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),k=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),k=q>=2);let tt=null,ct={};const _t=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),te=new Kt().fromArray(_t),j=new Kt().fromArray(Nt);function et(F,it,X,K){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(F,ot),i.texParameteri(F,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(F,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<X;Dt++)F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),st(i.DEPTH_TEST),a.setFunc(ar),zt(!1),Ht(Pl),st(i.CULL_FACE),I(Ke);function st(F){f[F]!==!0&&(i.enable(F),f[F]=!0)}function bt(F){f[F]!==!1&&(i.disable(F),f[F]=!1)}function At(F,it){return h[F]!==it?(i.bindFramebuffer(F,it),h[F]=it,F===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=it),F===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(F,it){let X=m,K=!1;if(F){X=c.get(it),X===void 0&&(X=[],c.set(it,X));const lt=F.textures;if(X.length!==lt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Dt=lt.length;ot<Dt;ot++)X[ot]=i.COLOR_ATTACHMENT0+ot;X.length=lt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function ae(F){return g!==F?(i.useProgram(F),g=F,!0):!1}const Vt={[xi]:i.FUNC_ADD,[Su]:i.FUNC_SUBTRACT,[Tu]:i.FUNC_REVERSE_SUBTRACT};Vt[bu]=i.MIN,Vt[Eu]=i.MAX;const he={[wu]:i.ZERO,[Au]:i.ONE,[Ru]:i.SRC_COLOR,[so]:i.SRC_ALPHA,[Uu]:i.SRC_ALPHA_SATURATE,[Iu]:i.DST_COLOR,[Pu]:i.DST_ALPHA,[Cu]:i.ONE_MINUS_SRC_COLOR,[ao]:i.ONE_MINUS_SRC_ALPHA,[Lu]:i.ONE_MINUS_DST_COLOR,[Du]:i.ONE_MINUS_DST_ALPHA,[Fu]:i.CONSTANT_COLOR,[Nu]:i.ONE_MINUS_CONSTANT_COLOR,[Ou]:i.CONSTANT_ALPHA,[Bu]:i.ONE_MINUS_CONSTANT_ALPHA};function I(F,it,X,K,lt,ot,Dt,oe,be,$t){if(F===Ke){_===!0&&(bt(i.BLEND),_=!1);return}if(_===!1&&(st(i.BLEND),_=!0),F!==Mu){if(F!==d||$t!==S){if((p!==xi||v!==xi)&&(i.blendEquation(i.FUNC_ADD),p=xi,v=xi),$t)switch(F){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFunc(i.ONE,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}else switch(F){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Dl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Il:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",F);break}x=null,y=null,b=null,A=null,w.set(0,0,0),P=0,d=F,S=$t}return}lt=lt||it,ot=ot||X,Dt=Dt||K,(it!==p||lt!==v)&&(i.blendEquationSeparate(Vt[it],Vt[lt]),p=it,v=lt),(X!==x||K!==y||ot!==b||Dt!==A)&&(i.blendFuncSeparate(he[X],he[K],he[ot],he[Dt]),x=X,y=K,b=ot,A=Dt),(oe.equals(w)===!1||be!==P)&&(i.blendColor(oe.r,oe.g,oe.b,be),w.copy(oe),P=be),d=F,S=!1}function Je(F,it){F.side===rn?bt(i.CULL_FACE):st(i.CULL_FACE);let X=F.side===Re;it&&(X=!X),zt(X),F.blending===Jn&&F.transparent===!1?I(Ke):I(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),a.setFunc(F.depthFunc),a.setTest(F.depthTest),a.setMask(F.depthWrite),s.setMask(F.colorWrite);const K=F.stencilWrite;o.setTest(K),K&&(o.setMask(F.stencilWriteMask),o.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),o.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),ie(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?st(i.SAMPLE_ALPHA_TO_COVERAGE):bt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(F){M!==F&&(F?i.frontFace(i.CW):i.frontFace(i.CCW),M=F)}function Ht(F){F!==vu?(st(i.CULL_FACE),F!==C&&(F===Pl?i.cullFace(i.BACK):F===xu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):bt(i.CULL_FACE),C=F}function yt(F){F!==U&&(k&&i.lineWidth(F),U=F)}function ie(F,it,X){F?(st(i.POLYGON_OFFSET_FILL),(L!==it||B!==X)&&(i.polygonOffset(it,X),L=it,B=X)):bt(i.POLYGON_OFFSET_FILL)}function xt(F){F?st(i.SCISSOR_TEST):bt(i.SCISSOR_TEST)}function R(F){F===void 0&&(F=i.TEXTURE0+G-1),tt!==F&&(i.activeTexture(F),tt=F)}function T(F,it,X){X===void 0&&(tt===null?X=i.TEXTURE0+G-1:X=tt);let K=ct[X];K===void 0&&(K={type:void 0,texture:void 0},ct[X]=K),(K.type!==F||K.texture!==it)&&(tt!==X&&(i.activeTexture(X),tt=X),i.bindTexture(F,it||gt[F]),K.type=F,K.texture=it)}function z(){const F=ct[tt];F!==void 0&&F.type!==void 0&&(i.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function $(){try{i.compressedTexImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Tt(){try{i.texImage3D.apply(i,arguments)}catch(F){console.error("THREE.WebGLState:",F)}}function Et(F){te.equals(F)===!1&&(i.scissor(F.x,F.y,F.z,F.w),te.copy(F))}function pt(F){j.equals(F)===!1&&(i.viewport(F.x,F.y,F.z,F.w),j.copy(F))}function kt(F,it){let X=u.get(it);X===void 0&&(X=new WeakMap,u.set(it,X));let K=X.get(F);K===void 0&&(K=i.getUniformBlockIndex(it,F.name),X.set(F,K))}function It(F,it){const K=u.get(it).get(F);l.get(it)!==K&&(i.uniformBlockBinding(it,K,F.__bindingPointIndex),l.set(it,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),f={},tt=null,ct={},h={},c=new WeakMap,m=[],g=null,_=!1,d=null,p=null,x=null,y=null,v=null,b=null,A=null,w=new Ut(0,0,0),P=0,S=!1,M=null,C=null,U=null,L=null,B=null,te.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:st,disable:bt,bindFramebuffer:At,drawBuffers:Ot,useProgram:ae,setBlending:I,setMaterial:Je,setFlipSided:zt,setCullFace:Ht,setLineWidth:yt,setPolygonOffset:ie,setScissorTest:xt,activeTexture:R,bindTexture:T,unbindTexture:z,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:dt,texImage3D:Tt,updateUBOMapping:kt,uniformBlockBinding:It,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Et,viewport:pt,reset:ee}}function Tm(i,t,e,n,r,s,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ut,f=new WeakMap;let h;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,T){return m?new OffscreenCanvas(R,T):js("canvas")}function _(R,T,z){let $=1;const Z=xt(R);if((Z.width>z||Z.height>z)&&($=z/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor($*Z.width),vt=Math.floor($*Z.height);h===void 0&&(h=g(Y,vt));const at=T?g(Y,vt):h;return at.width=Y,at.height=vt,at.getContext("2d").drawImage(R,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+vt+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,T,z,$,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=T;if(T===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),T===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),T===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),T===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),T===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),T===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),T===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),T===i.RGBA){const vt=Z?Xs:qt.getTransfer($);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=vt===Jt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,T){let z;return R?T===null||T===on||T===ur?z=i.DEPTH24_STENCIL8:T===ne?z=i.DEPTH32F_STENCIL8:T===cr&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===on||T===ur?z=i.DEPTH_COMPONENT24:T===ne?z=i.DEPTH_COMPONENT32F:T===cr&&(z=i.DEPTH_COMPONENT16),z}function b(R,T){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==fe?Math.log2(Math.max(T.width,T.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?T.mipmaps.length:1}function A(R){const T=R.target;T.removeEventListener("dispose",A),P(T),T.isVideoTexture&&f.delete(T)}function w(R){const T=R.target;T.removeEventListener("dispose",w),M(T)}function P(R){const T=n.get(R);if(T.__webglInit===void 0)return;const z=R.source,$=c.get(z);if($){const Z=$[T.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&S(R),Object.keys($).length===0&&c.delete(z)}n.remove(R)}function S(R){const T=n.get(R);i.deleteTexture(T.__webglTexture);const z=R.source,$=c.get(z);delete $[T.__cacheKey],a.memory.textures--}function M(R){const T=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(T.__webglFramebuffer[$]))for(let Z=0;Z<T.__webglFramebuffer[$].length;Z++)i.deleteFramebuffer(T.__webglFramebuffer[$][Z]);else i.deleteFramebuffer(T.__webglFramebuffer[$]);T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer[$])}else{if(Array.isArray(T.__webglFramebuffer))for(let $=0;$<T.__webglFramebuffer.length;$++)i.deleteFramebuffer(T.__webglFramebuffer[$]);else i.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&i.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&i.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let $=0;$<T.__webglColorRenderbuffer.length;$++)T.__webglColorRenderbuffer[$]&&i.deleteRenderbuffer(T.__webglColorRenderbuffer[$]);T.__webglDepthRenderbuffer&&i.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const z=R.textures;for(let $=0,Z=z.length;$<Z;$++){const Y=n.get(z[$]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[$])}n.remove(R)}let C=0;function U(){C=0}function L(){const R=C;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),C+=1,R}function B(R){const T=[];return T.push(R.wrapS),T.push(R.wrapT),T.push(R.wrapR||0),T.push(R.magFilter),T.push(R.minFilter),T.push(R.anisotropy),T.push(R.internalFormat),T.push(R.format),T.push(R.type),T.push(R.generateMipmaps),T.push(R.premultiplyAlpha),T.push(R.flipY),T.push(R.unpackAlignment),T.push(R.colorSpace),T.join()}function G(R,T){const z=n.get(R);if(R.isVideoTexture&&yt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const $=R.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(z,R,T);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+T)}function k(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){j(z,R,T);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+T)}function q(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){j(z,R,T);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+T)}function W(R,T){const z=n.get(R);if(R.version>0&&z.__version!==R.version){et(z,R,T);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+T)}const tt={[vn]:i.REPEAT,[Fe]:i.CLAMP_TO_EDGE,[go]:i.MIRRORED_REPEAT},ct={[Bt]:i.NEAREST,[Yu]:i.NEAREST_MIPMAP_NEAREST,[Xr]:i.NEAREST_MIPMAP_LINEAR,[fe]:i.LINEAR,[ca]:i.LINEAR_MIPMAP_NEAREST,[Mi]:i.LINEAR_MIPMAP_LINEAR},_t={[Ju]:i.NEVER,[rh]:i.ALWAYS,[Qu]:i.LESS,[E0]:i.LEQUAL,[th]:i.EQUAL,[ih]:i.GEQUAL,[eh]:i.GREATER,[nh]:i.NOTEQUAL};function Nt(R,T){if(T.type===ne&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===fe||T.magFilter===ca||T.magFilter===Xr||T.magFilter===Mi||T.minFilter===fe||T.minFilter===ca||T.minFilter===Xr||T.minFilter===Mi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,tt[T.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,tt[T.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,tt[T.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[T.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[T.minFilter]),T.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_t[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===Bt||T.minFilter!==Xr&&T.minFilter!==Mi||T.type===ne&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,r.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function te(R,T){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,T.addEventListener("dispose",A));const $=T.source;let Z=c.get($);Z===void 0&&(Z={},c.set($,Z));const Y=B(T);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[Y].usedTimes++;const vt=Z[R.__cacheKey];vt!==void 0&&(Z[R.__cacheKey].usedTimes--,vt.usedTimes===0&&S(T)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return z}function j(R,T,z){let $=i.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&($=i.TEXTURE_2D_ARRAY),T.isData3DTexture&&($=i.TEXTURE_3D);const Z=te(R,T),Y=T.source;e.bindTexture($,R.__webglTexture,i.TEXTURE0+z);const vt=n.get(Y);if(Y.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const at=qt.getPrimaries(qt.workingColorSpace),ft=T.colorSpace===Kn?null:qt.getPrimaries(T.colorSpace),Gt=T.colorSpace===Kn||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=_(T.image,!1,r.maxTextureSize);Q=ie(T,Q);const dt=s.convert(T.format,T.colorSpace),Tt=s.convert(T.type);let Et=y(T.internalFormat,dt,Tt,T.colorSpace,T.isVideoTexture);Nt($,T);let pt;const kt=T.mipmaps,It=T.isVideoTexture!==!0,ee=vt.__version===void 0||Z===!0,F=Y.dataReady,it=b(T,Q);if(T.isDepthTexture)Et=v(T.format===hr,T.type),ee&&(It?e.texStorage2D(i.TEXTURE_2D,1,Et,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Et,Q.width,Q.height,0,dt,Tt,null));else if(T.isDataTexture)if(kt.length>0){It&&ee&&e.texStorage2D(i.TEXTURE_2D,it,Et,kt[0].width,kt[0].height);for(let X=0,K=kt.length;X<K;X++)pt=kt[X],It?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,X,Et,pt.width,pt.height,0,dt,Tt,pt.data);T.generateMipmaps=!1}else It?(ee&&e.texStorage2D(i.TEXTURE_2D,it,Et,Q.width,Q.height),F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,Tt,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Et,Q.width,Q.height,0,dt,Tt,Q.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){It&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,kt[0].width,kt[0].height,Q.depth);for(let X=0,K=kt.length;X<K;X++)if(pt=kt[X],T.format!==Zt)if(dt!==null)if(It){if(F)if(T.layerUpdates.size>0){const lt=ic(pt.width,pt.height,T.format,T.type);for(const ot of T.layerUpdates){const Dt=pt.data.subarray(ot*lt/pt.data.BYTES_PER_ELEMENT,(ot+1)*lt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ot,pt.width,pt.height,1,dt,Dt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Et,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?F&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,Tt,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Et,pt.width,pt.height,Q.depth,0,dt,Tt,pt.data)}else{It&&ee&&e.texStorage2D(i.TEXTURE_2D,it,Et,kt[0].width,kt[0].height);for(let X=0,K=kt.length;X<K;X++)pt=kt[X],T.format!==Zt?dt!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,Tt,pt.data):e.texImage2D(i.TEXTURE_2D,X,Et,pt.width,pt.height,0,dt,Tt,pt.data)}else if(T.isDataArrayTexture)if(It){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,Q.width,Q.height,Q.depth),F)if(T.layerUpdates.size>0){const X=ic(Q.width,Q.height,T.format,T.type);for(const K of T.layerUpdates){const lt=Q.data.subarray(K*X/Q.data.BYTES_PER_ELEMENT,(K+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,dt,Tt,lt)}T.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,Tt,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,Q.width,Q.height,Q.depth,0,dt,Tt,Q.data);else if(T.isData3DTexture)It?(ee&&e.texStorage3D(i.TEXTURE_3D,it,Et,Q.width,Q.height,Q.depth),F&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,Tt,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Et,Q.width,Q.height,Q.depth,0,dt,Tt,Q.data);else if(T.isFramebufferTexture){if(ee)if(It)e.texStorage2D(i.TEXTURE_2D,it,Et,Q.width,Q.height);else{let X=Q.width,K=Q.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,Et,X,K,0,dt,Tt,null),X>>=1,K>>=1}}else if(kt.length>0){if(It&&ee){const X=xt(kt[0]);e.texStorage2D(i.TEXTURE_2D,it,Et,X.width,X.height)}for(let X=0,K=kt.length;X<K;X++)pt=kt[X],It?F&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,dt,Tt,pt):e.texImage2D(i.TEXTURE_2D,X,Et,dt,Tt,pt);T.generateMipmaps=!1}else if(It){if(ee){const X=xt(Q);e.texStorage2D(i.TEXTURE_2D,it,Et,X.width,X.height)}F&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,Tt,Q)}else e.texImage2D(i.TEXTURE_2D,0,Et,dt,Tt,Q);d(T)&&p($),vt.__version=Y.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function et(R,T,z){if(T.image.length!==6)return;const $=te(R,T),Z=T.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const Y=n.get(Z);if(Z.version!==Y.__version||$===!0){e.activeTexture(i.TEXTURE0+z);const vt=qt.getPrimaries(qt.workingColorSpace),at=T.colorSpace===Kn?null:qt.getPrimaries(T.colorSpace),ft=T.colorSpace===Kn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,T.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,T.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Gt=T.isCompressedTexture||T.image[0].isCompressedTexture,Q=T.image[0]&&T.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Gt&&!Q?dt[K]=_(T.image[K],!0,r.maxCubemapSize):dt[K]=Q?T.image[K].image:T.image[K],dt[K]=ie(T,dt[K]);const Tt=dt[0],Et=s.convert(T.format,T.colorSpace),pt=s.convert(T.type),kt=y(T.internalFormat,Et,pt,T.colorSpace),It=T.isVideoTexture!==!0,ee=Y.__version===void 0||$===!0,F=Z.dataReady;let it=b(T,Tt);Nt(i.TEXTURE_CUBE_MAP,T);let X;if(Gt){It&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,Tt.width,Tt.height);for(let K=0;K<6;K++){X=dt[K].mipmaps;for(let lt=0;lt<X.length;lt++){const ot=X[lt];T.format!==Zt?Et!==null?It?F&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ot.width,ot.height,Et,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,kt,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ot.width,ot.height,Et,pt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,kt,ot.width,ot.height,0,Et,pt,ot.data)}}}else{if(X=T.mipmaps,It&&ee){X.length>0&&it++;const K=xt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,kt,K.width,K.height)}for(let K=0;K<6;K++)if(Q){It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Et,pt,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,dt[K].width,dt[K].height,0,Et,pt,dt[K].data);for(let lt=0;lt<X.length;lt++){const Dt=X[lt].image[K].image;It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Dt.width,Dt.height,Et,pt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,kt,Dt.width,Dt.height,0,Et,pt,Dt.data)}}else{It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,pt,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,kt,Et,pt,dt[K]);for(let lt=0;lt<X.length;lt++){const ot=X[lt];It?F&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Et,pt,ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,kt,Et,pt,ot.image[K])}}}d(T)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,T.onUpdate&&T.onUpdate(T)}R.__version=T.version}function gt(R,T,z,$,Z,Y){const vt=s.convert(z.format,z.colorSpace),at=s.convert(z.type),ft=y(z.internalFormat,vt,at,z.colorSpace),Gt=n.get(T),Q=n.get(z);if(Q.__renderTarget=T,!Gt.__hasExternalTextures){const dt=Math.max(1,T.width>>Y),Tt=Math.max(1,T.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,ft,dt,Tt,T.depth,0,vt,at,null):e.texImage2D(Z,Y,ft,dt,Tt,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),Ht(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,$,Z,Q.__webglTexture,0,zt(T)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,$,Z,Q.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function st(R,T,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),T.depthBuffer){const $=T.depthTexture,Z=$&&$.isDepthTexture?$.type:null,Y=v(T.stencilBuffer,Z),vt=T.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(T);Ht(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,T.width,T.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,Y,T.width,T.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,R)}else{const $=T.textures;for(let Z=0;Z<$.length;Z++){const Y=$[Z],vt=s.convert(Y.format,Y.colorSpace),at=s.convert(Y.type),ft=y(Y.internalFormat,vt,at,Y.colorSpace),Gt=zt(T);z&&Ht(T)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ft,T.width,T.height):Ht(T)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ft,T.width,T.height):i.renderbufferStorage(i.RENDERBUFFER,ft,T.width,T.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function bt(R,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(T.depthTexture);$.__renderTarget=T,(!$.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),G(T.depthTexture,0);const Z=$.__webglTexture,Y=zt(T);if(T.depthTexture.format===rr)Ht(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(T.depthTexture.format===hr)Ht(T)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function At(R){const T=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==R.depthTexture){const $=R.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),$){const Z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),T.__depthDisposeCallback=Z}T.__boundDepthTexture=$}if(R.depthTexture&&!T.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,R)}else if(z){T.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer[$]),T.__webglDepthbuffer[$]===void 0)T.__webglDepthbuffer[$]=i.createRenderbuffer(),st(T.__webglDepthbuffer[$],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=T.__webglDepthbuffer[$];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=i.createRenderbuffer(),st(T.__webglDepthbuffer,R,!1);else{const $=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=T.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,$,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,T,z){const $=n.get(R);T!==void 0&&gt($.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&At(R)}function ae(R){const T=R.texture,z=n.get(R),$=n.get(T);R.addEventListener("dispose",w);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||($.__webglTexture===void 0&&($.__webglTexture=i.createTexture()),$.__version=T.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ft=0;ft<T.mipmaps.length;ft++)z.__webglFramebuffer[at][ft]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<T.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ft=Z.length;at<ft;at++){const Gt=n.get(Z[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&Ht(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ft=Z[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Gt=s.convert(ft.format,ft.colorSpace),Q=s.convert(ft.type),dt=y(ft.internalFormat,Gt,Q,ft.colorSpace,R.isXRRenderTarget===!0),Tt=zt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Tt,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),st(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,$.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,T);for(let at=0;at<6;at++)if(T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)gt(z.__webglFramebuffer[at][ft],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else gt(z.__webglFramebuffer[at],R,T,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);d(T)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=Z.length;at<ft;at++){const Gt=Z[at],Q=n.get(Gt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Nt(i.TEXTURE_2D,Gt),gt(z.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),d(Gt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,$.__webglTexture),Nt(at,T),T.mipmaps&&T.mipmaps.length>0)for(let ft=0;ft<T.mipmaps.length;ft++)gt(z.__webglFramebuffer[ft],R,T,i.COLOR_ATTACHMENT0,at,ft);else gt(z.__webglFramebuffer,R,T,i.COLOR_ATTACHMENT0,at,0);d(T)&&p(at),e.unbindTexture()}R.depthBuffer&&At(R)}function Vt(R){const T=R.textures;for(let z=0,$=T.length;z<$;z++){const Z=T[z];if(d(Z)){const Y=x(R),vt=n.get(Z).__webglTexture;e.bindTexture(Y,vt),p(Y),e.unbindTexture()}}}const he=[],I=[];function Je(R){if(R.samples>0){if(Ht(R)===!1){const T=R.textures,z=R.width,$=R.height;let Z=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(R),at=T.length>1;if(at)for(let ft=0;ft<T.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<T.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Gt=n.get(T[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,z,$,0,0,z,$,Z,i.NEAREST),l===!0&&(he.length=0,I.length=0,he.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(he.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<T.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Gt=n.get(T[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const T=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[T])}}}function zt(R){return Math.min(r.maxSamples,R.samples)}function Ht(R){const T=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function yt(R){const T=a.render.frame;f.get(R)!==T&&(f.set(R,T),R.update())}function ie(R,T){const z=R.colorSpace,$=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==pr&&z!==Kn&&(qt.getTransfer(z)===Jt?($!==Zt||Z!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),T}function xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=U,this.setTexture2D=G,this.setTexture2DArray=k,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=Ht}function bm(i,t){function e(n,r=Kn){let s;const a=qt.getTransfer(r);if(n===cn)return i.UNSIGNED_BYTE;if(n===sl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===al)return i.UNSIGNED_SHORT_5_5_5_1;if(n===v0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Ws)return i.BYTE;if(n===rl)return i.SHORT;if(n===cr)return i.UNSIGNED_SHORT;if(n===ir)return i.INT;if(n===on)return i.UNSIGNED_INT;if(n===ne)return i.FLOAT;if(n===Le)return i.HALF_FLOAT;if(n===x0)return i.ALPHA;if(n===y0)return i.RGB;if(n===Zt)return i.RGBA;if(n===M0)return i.LUMINANCE;if(n===S0)return i.LUMINANCE_ALPHA;if(n===rr)return i.DEPTH_COMPONENT;if(n===hr)return i.DEPTH_STENCIL;if(n===fr)return i.RED;if(n===Js)return i.RED_INTEGER;if(n===Qs)return i.RG;if(n===zr)return i.RG_INTEGER;if(n===dr)return i.RGBA_INTEGER;if(n===Fs||n===Ns||n===Os||n===Bs)if(a===Jt)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Fs)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Bs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Fs)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ns)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Os)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Bs)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===_o||n===vo||n===xo||n===yo)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===_o)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===vo)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===xo)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===yo)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Mo||n===So||n===To)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Mo||n===So)return a===Jt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===To)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===bo||n===Eo||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Io||n===Lo||n===Uo||n===Fo||n===No||n===Oo)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===bo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Eo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===wo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ao)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ro)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Co)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Po)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Do)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Io)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Lo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Fo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===No)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oo)return a===Jt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===zs||n===Bo||n===zo)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===zs)return a===Jt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Bo)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===zo)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===T0||n===Ho||n===ko||n===Vo)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===zs)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ko)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Vo)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const Em={type:"move"};class ka{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),p=this._getHandJoint(u,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const f=u.joints["index-finger-tip"],h=u.joints["thumb-tip"],c=f.position.distanceTo(h.position),m=.02,g=.005;u.inputState.pinching&&c>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&c<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Em)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Qi;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const wm=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Am=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Rm{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const r=new Ne,s=t.properties.get(r);s.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:wm,fragmentShader:Am,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new na(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Cm extends bi{constructor(t,e){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,u=null,f=null,h=null,c=null,m=null,g=null;const _=new Rm,d=e.getContextAttributes();let p=null,x=null;const y=[],v=[],b=new ut;let A=null;const w=new Ie;w.viewport=new Kt;const P=new Ie;P.viewport=new Kt;const S=[w,P],M=new Yh;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let et=y[j];return et===void 0&&(et=new ka,y[j]=et),et.getTargetRaySpace()},this.getControllerGrip=function(j){let et=y[j];return et===void 0&&(et=new ka,y[j]=et),et.getGripSpace()},this.getHand=function(j){let et=y[j];return et===void 0&&(et=new ka,y[j]=et),et.getHandSpace()};function L(j){const et=v.indexOf(j.inputSource);if(et===-1)return;const gt=y[et];gt!==void 0&&(gt.update(j.inputSource,j.frame,u||a),gt.dispatchEvent({type:j.type,data:j.inputSource}))}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",G);for(let j=0;j<y.length;j++){const et=v[j];et!==null&&(v[j]=null,y[j].disconnect(et))}C=null,U=null,_.reset(),t.setRenderTarget(p),m=null,c=null,h=null,r=null,x=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(b.width,b.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function(j){u=j},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(j){if(r=j,r!==null){if(p=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(b),r.enabledFeatures!==void 0&&r.enabledFeatures.includes("layers")){let gt=null,st=null,bt=null;d.depth&&(bt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=d.stencil?hr:rr,st=d.stencil?ur:on);const At={colorFormat:e.RGBA8,depthFormat:bt,scaleFactor:s};h=new XRWebGLBinding(r,e),c=h.createProjectionLayer(At),r.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),x=new Ze(c.textureWidth,c.textureHeight,{format:Zt,type:cn,depthTexture:new N0(c.textureWidth,c.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}else{const gt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:s};m=new XRWebGLLayer(r,e,gt),r.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ze(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await r.requestReferenceSpace(o),te.setContext(r),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(j){for(let et=0;et<j.removed.length;et++){const gt=j.removed[et],st=v.indexOf(gt);st>=0&&(v[st]=null,y[st].disconnect(gt))}for(let et=0;et<j.added.length;et++){const gt=j.added[et];let st=v.indexOf(gt);if(st===-1){for(let At=0;At<y.length;At++)if(At>=v.length){v.push(gt),st=At;break}else if(v[At]===null){v[At]=gt,st=At;break}if(st===-1)break}const bt=y[st];bt&&bt.connect(gt)}}const k=new D,q=new D;function W(j,et,gt){k.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);const st=k.distanceTo(q),bt=et.projectionMatrix.elements,At=gt.projectionMatrix.elements,Ot=bt[14]/(bt[10]-1),ae=bt[14]/(bt[10]+1),Vt=(bt[9]+1)/bt[5],he=(bt[9]-1)/bt[5],I=(bt[8]-1)/bt[0],Je=(At[8]+1)/At[0],zt=Ot*I,Ht=Ot*Je,yt=st/(-I+Je),ie=yt*-I;if(et.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ie),j.translateZ(yt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),bt[10]===-1)j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const xt=Ot+yt,R=ae+yt,T=zt-ie,z=Ht+(st-ie),$=Vt*ae/R*xt,Z=he*ae/R*xt;j.projectionMatrix.makePerspective(T,z,$,Z,xt,R),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function tt(j,et){et===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(et.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(r===null)return;let et=j.near,gt=j.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=P.near=w.near=et,M.far=P.far=w.far=gt,(C!==M.near||U!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,U=M.far),w.layers.mask=j.layers.mask|2,P.layers.mask=j.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;const st=j.parent,bt=M.cameras;tt(M,st);for(let At=0;At<bt.length;At++)tt(bt[At],st);bt.length===2?W(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),ct(j,M,st)};function ct(j,et,gt){gt===null?j.matrix.copy(et.matrixWorld):(j.matrix.copy(gt.matrixWorld),j.matrix.invert(),j.matrix.multiply(et.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(et.projectionMatrix),j.projectionMatrixInverse.copy(et.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ys*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function(j){l=j,c!==null&&(c.fixedFoveation=j),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _t=null;function Nt(j,et){if(f=et.getViewerPose(u||a),g=et,f!==null){const gt=f.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let st=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,st=!0);for(let At=0;At<gt.length;At++){const Ot=gt[At];let ae=null;if(m!==null)ae=m.getViewport(Ot);else{const he=h.getViewSubImage(c,Ot);ae=he.viewport,At===0&&(t.setRenderTargetTextures(x,he.colorTexture,c.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(x))}let Vt=S[At];Vt===void 0&&(Vt=new Ie,Vt.layers.enable(At),Vt.viewport=new Kt,S[At]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ae.x,ae.y,ae.width,ae.height),At===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),st===!0&&M.cameras.push(Vt)}const bt=r.enabledFeatures;if(bt&&bt.includes("depth-sensing")){const At=h.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&_.init(t,At,r.renderState)}}for(let gt=0;gt<y.length;gt++){const st=v[gt],bt=y[gt];st!==null&&bt!==void 0&&bt.update(st,et,u||a)}_t&&_t(j,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const te=new z0;te.setAnimationLoop(Nt),this.setAnimationLoop=function(j){_t=j},this.dispose=function(){}}}const ui=new Tn,Pm=new Ft;function Dm(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,I0(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function r(d,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(d,p):p.isMeshToonMaterial?(s(d,p),h(d,p)):p.isMeshPhongMaterial?(s(d,p),f(d,p)):p.isMeshStandardMaterial?(s(d,p),c(d,p),p.isMeshPhysicalMaterial&&m(d,p,v)):p.isMeshMatcapMaterial?(s(d,p),g(d,p)):p.isMeshDepthMaterial?s(d,p):p.isMeshDistanceMaterial?(s(d,p),_(d,p)):p.isMeshNormalMaterial?s(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,x,y):p.isSpriteMaterial?u(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Re&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Re&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(d.envMap.value=y,ui.copy(v),ui.x*=-1,ui.y*=-1,ui.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ui.y*=-1,ui.z*=-1),d.envMapRotation.value.setFromMatrix4(Pm.makeRotationFromEuler(ui)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,x,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=y*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function f(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function h(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function c(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const x=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function Im(i,t,e,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function u(x,y){let v=r[x.id];v===void 0&&(g(x),v=f(x),r[x.id]=v,x.addEventListener("dispose",d));const b=y.program;n.updateUBOMapping(x,b);const A=t.render.frame;s[x.id]!==A&&(c(x),s[x.id]=A)}function f(x){const y=h();x.__bindingPointIndex=y;const v=i.createBuffer(),b=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,b,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function h(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const y=r[x.id],v=x.uniforms,b=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,w=v.length;A<w;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let S=0,M=P.length;S<M;S++){const C=P[S];if(m(C,A,S,b)===!0){const U=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let G=0;G<L.length;G++){const k=L[G],q=_(k);typeof k=="number"||typeof k=="boolean"?(C.__data[0]=k,i.bufferSubData(i.UNIFORM_BUFFER,U+B,C.__data)):k.isMatrix3?(C.__data[0]=k.elements[0],C.__data[1]=k.elements[1],C.__data[2]=k.elements[2],C.__data[3]=0,C.__data[4]=k.elements[3],C.__data[5]=k.elements[4],C.__data[6]=k.elements[5],C.__data[7]=0,C.__data[8]=k.elements[6],C.__data[9]=k.elements[7],C.__data[10]=k.elements[8],C.__data[11]=0):(k.toArray(C.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,y,v,b){const A=x.value,w=y+"_"+v;if(b[w]===void 0)return typeof A=="number"||typeof A=="boolean"?b[w]=A:b[w]=A.clone(),!0;{const P=b[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return b[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(x){const y=x.uniforms;let v=0;const b=16;for(let w=0,P=y.length;w<P;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,C=S.length;M<C;M++){const U=S[M],L=Array.isArray(U.value)?U.value:[U.value];for(let B=0,G=L.length;B<G;B++){const k=L[B],q=_(k),W=v%b,tt=W%q.boundary,ct=W+tt;v+=tt,ct!==0&&b-ct<q.storage&&(v+=b-ct),U.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=v,v+=q.storage}}}const A=v%b;return A>0&&(v+=b-A),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function d(x){const y=x.target;y.removeEventListener("dispose",d);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(r[y.id]),delete r[y.id],delete s[y.id]}function p(){for(const x in r)i.deleteBuffer(r[x]);a=[],r={},s={}}return{bind:l,update:u,dispose:p}}class Lm{constructor(t={}){const{canvas:e=oh(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=On,this.toneMappingExposure=1;const v=this;let b=!1,A=0,w=0,P=null,S=-1,M=null;const C=new Kt,U=new Kt;let L=null;const B=new Ut(0);let G=0,k=e.width,q=e.height,W=1,tt=null,ct=null;const _t=new Kt(0,0,k,q),Nt=new Kt(0,0,k,q);let te=!1;const j=new cl;let et=!1,gt=!1;this.transmissionResolutionScale=1;const st=new Ft,bt=new Ft,At=new D,Ot=new Kt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function he(){return P===null?W:1}let I=n;function Je(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:f,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ks}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),I===null){const N="webgl2";if(I=Je(N,E),I===null)throw Je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,Ht,yt,ie,xt,R,T,z,$,Z,Y,vt,at,ft,Gt,Q,dt,Tt,Et,pt,kt,It,ee,F;function it(){zt=new Vp(I),zt.init(),It=new bm(I,zt),Ht=new Np(I,zt,t,It),yt=new Sm(I,zt),Ht.reverseDepthBuffer&&c&&yt.buffers.depth.setReversed(!0),ie=new Xp(I),xt=new cm,R=new Tm(I,zt,yt,xt,Ht,It,ie),T=new Bp(v),z=new kp(v),$=new Zh(I),ee=new Up(I,$),Z=new Gp(I,$,ie,ee),Y=new Yp(I,Z,$,ie),Et=new qp(I,Ht,R),Q=new Op(xt),vt=new lm(v,T,z,zt,Ht,ee,Q),at=new Dm(v,xt),ft=new hm,Gt=new _m(zt),Tt=new Lp(v,T,z,yt,Y,m,l),dt=new ym(v,Y,Ht),F=new Im(I,ie,Ht,yt),pt=new Fp(I,zt,ie),kt=new Wp(I,zt,ie),ie.programs=vt.programs,v.capabilities=Ht,v.extensions=zt,v.properties=xt,v.renderLists=ft,v.shadowMap=dt,v.state=yt,v.info=ie}it();const X=new Cm(v,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(k,q,!1))},this.getSize=function(E){return E.set(k,q)},this.setSize=function(E,N,H=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}k=E,q=N,e.width=Math.floor(E*W),e.height=Math.floor(N*W),H===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(k*W,q*W).floor()},this.setDrawingBufferSize=function(E,N,H){k=E,q=N,W=H,e.width=Math.floor(E*H),e.height=Math.floor(N*H),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,N,H,V){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,N,H,V),yt.viewport(C.copy(_t).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,N,H,V){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,N,H,V),yt.scissor(U.copy(Nt).multiplyScalar(W).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){yt.setScissorTest(te=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(Tt.getClearColor())},this.setClearColor=function(){Tt.setClearColor.apply(Tt,arguments)},this.getClearAlpha=function(){return Tt.getClearAlpha()},this.setClearAlpha=function(){Tt.setClearAlpha.apply(Tt,arguments)},this.clear=function(E=!0,N=!0,H=!0){let V=0;if(E){let O=!1;if(P!==null){const J=P.texture.format;O=J===dr||J===zr||J===Js}if(O){const J=P.texture.type,rt=J===cn||J===on||J===cr||J===ur||J===sl||J===al,ht=Tt.getClearColor(),mt=Tt.getClearAlpha(),wt=ht.r,Rt=ht.g,Mt=ht.b;rt?(g[0]=wt,g[1]=Rt,g[2]=Mt,g[3]=mt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=wt,_[1]=Rt,_[2]=Mt,_[3]=mt,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),H&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),Tt.dispose(),ft.dispose(),Gt.dispose(),xt.dispose(),T.dispose(),z.dispose(),Y.dispose(),ee.dispose(),F.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",Tl),X.removeEventListener("sessionend",bl),ii.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const E=ie.autoReset,N=dt.enabled,H=dt.autoUpdate,V=dt.needsUpdate,O=dt.type;it(),ie.autoReset=E,dt.enabled=N,dt.autoUpdate=H,dt.needsUpdate=V,dt.type=O}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const N=E.target;N.removeEventListener("dispose",Dt),oe(N)}function oe(E){be(E),xt.remove(E)}function be(E){const N=xt.get(E).programs;N!==void 0&&(N.forEach(function(H){vt.releaseProgram(H)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,H,V,O,J){N===null&&(N=ae);const rt=O.isMesh&&O.matrixWorld.determinant()<0,ht=fu(E,N,H,V,O);yt.setMaterial(V,rt);let mt=H.index,wt=1;if(V.wireframe===!0){if(mt=Z.getWireframeAttribute(H),mt===void 0)return;wt=2}const Rt=H.drawRange,Mt=H.attributes.position;let Wt=Rt.start*wt,Yt=(Rt.start+Rt.count)*wt;J!==null&&(Wt=Math.max(Wt,J.start*wt),Yt=Math.min(Yt,(J.start+J.count)*wt)),mt!==null?(Wt=Math.max(Wt,0),Yt=Math.min(Yt,mt.count)):Mt!=null&&(Wt=Math.max(Wt,0),Yt=Math.min(Yt,Mt.count));const de=Yt-Wt;if(de<0||de===1/0)return;ee.setup(O,V,ht,H,mt);let le,Xt=pt;if(mt!==null&&(le=$.get(mt),Xt=kt,Xt.setIndex(le)),O.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*he()),Xt.setMode(I.LINES)):Xt.setMode(I.TRIANGLES);else if(O.isLine){let St=V.linewidth;St===void 0&&(St=1),yt.setLineWidth(St*he()),O.isLineSegments?Xt.setMode(I.LINES):O.isLineLoop?Xt.setMode(I.LINE_LOOP):Xt.setMode(I.LINE_STRIP)}else O.isPoints?Xt.setMode(I.POINTS):O.isSprite&&Xt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Xt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const St=O._multiDrawStarts,Me=O._multiDrawCounts,jt=O._multiDrawCount,fn=mt?$.get(mt).bytesPerElement:1,Ei=xt.get(V).currentProgram.getUniforms();for(let Xe=0;Xe<jt;Xe++)Ei.setValue(I,"_gl_DrawID",Xe),Xt.render(St[Xe]/fn,Me[Xe])}else if(O.isInstancedMesh)Xt.renderInstances(Wt,de,O.count);else if(H.isInstancedBufferGeometry){const St=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,Me=Math.min(H.instanceCount,St);Xt.renderInstances(Wt,de,Me)}else Xt.render(Wt,de)};function $t(E,N,H){E.transparent===!0&&E.side===rn&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,Wr(E,N,H),E.side=xn,E.needsUpdate=!0,Wr(E,N,H),E.side=rn):Wr(E,N,H)}this.compile=function(E,N,H=null){H===null&&(H=E),p=Gt.get(H),p.init(N),y.push(p),H.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==H&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const J=O.material;if(J)if(Array.isArray(J))for(let rt=0;rt<J.length;rt++){const ht=J[rt];$t(ht,H,O),V.add(ht)}else $t(J,H,O),V.add(J)}),y.pop(),p=null,V},this.compileAsync=function(E,N,H=null){const V=this.compile(E,N,H);return new Promise(O=>{function J(){if(V.forEach(function(rt){xt.get(rt).currentProgram.isReady()&&V.delete(rt)}),V.size===0){O(E);return}setTimeout(J,10)}zt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let hn=null;function bn(E){hn&&hn(E)}function Tl(){ii.stop()}function bl(){ii.start()}const ii=new z0;ii.setAnimationLoop(bn),typeof self<"u"&&ii.setContext(self),this.setAnimationLoop=function(E){hn=E,X.setAnimationLoop(E),E===null?ii.stop():ii.start()},X.addEventListener("sessionstart",Tl),X.addEventListener("sessionend",bl),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,P),p=Gt.get(E,y.length),p.init(N),y.push(p),bt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),j.setFromProjectionMatrix(bt),gt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,gt),d=ft.get(E,x.length),d.init(),x.push(d),X.enabled===!0&&X.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&oa(J,N,-1/0,v.sortObjects)}oa(E,N,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(tt,ct),Vt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Vt&&Tt.addToRenderList(d,E),this.info.render.frame++,et===!0&&Q.beginShadows();const H=p.state.shadowsArray;dt.render(H,E,N),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=d.opaque,O=d.transmissive;if(p.setupLights(),N.isArrayCamera){const J=N.cameras;if(O.length>0)for(let rt=0,ht=J.length;rt<ht;rt++){const mt=J[rt];wl(V,O,E,mt)}Vt&&Tt.render(E);for(let rt=0,ht=J.length;rt<ht;rt++){const mt=J[rt];El(d,E,mt,mt.viewport)}}else O.length>0&&wl(V,O,E,N),Vt&&Tt.render(E),El(d,E,N);P!==null&&w===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,N),ee.resetDefaultState(),S=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&Q.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?d=x[x.length-1]:d=null};function oa(E,N,H,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){V&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(bt);const rt=Y.update(E),ht=E.material;ht.visible&&d.push(E,rt,ht,H,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const rt=Y.update(E),ht=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(rt.boundingSphere===null&&rt.computeBoundingSphere(),Ot.copy(rt.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(bt)),Array.isArray(ht)){const mt=rt.groups;for(let wt=0,Rt=mt.length;wt<Rt;wt++){const Mt=mt[wt],Wt=ht[Mt.materialIndex];Wt&&Wt.visible&&d.push(E,rt,Wt,H,Ot.z,Mt)}}else ht.visible&&d.push(E,rt,ht,H,Ot.z,null)}}const J=E.children;for(let rt=0,ht=J.length;rt<ht;rt++)oa(J[rt],N,H,V)}function El(E,N,H,V){const O=E.opaque,J=E.transmissive,rt=E.transparent;p.setupLightsView(H),et===!0&&Q.setGlobalState(v.clippingPlanes,H),V&&yt.viewport(C.copy(V)),O.length>0&&Gr(O,N,H),J.length>0&&Gr(J,N,H),rt.length>0&&Gr(rt,N,H),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function wl(E,N,H,V){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ze(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Le:cn,minFilter:Mi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const J=p.state.transmissionRenderTarget[V.id],rt=V.viewport||C;J.setSize(rt.z*v.transmissionResolutionScale,rt.w*v.transmissionResolutionScale);const ht=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Tt.render(H);const mt=v.toneMapping;v.toneMapping=On;const wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),et===!0&&Q.setGlobalState(v.clippingPlanes,V),Gr(E,H,V),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Mt=0,Wt=N.length;Mt<Wt;Mt++){const Yt=N[Mt],de=Yt.object,le=Yt.geometry,Xt=Yt.material,St=Yt.group;if(Xt.side===rn&&de.layers.test(V.layers)){const Me=Xt.side;Xt.side=Re,Xt.needsUpdate=!0,Al(de,H,V,le,Xt,St),Xt.side=Me,Xt.needsUpdate=!0,Rt=!0}}Rt===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J))}v.setRenderTarget(ht),v.setClearColor(B,G),wt!==void 0&&(V.viewport=wt),v.toneMapping=mt}function Gr(E,N,H){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,J=E.length;O<J;O++){const rt=E[O],ht=rt.object,mt=rt.geometry,wt=V===null?rt.material:V,Rt=rt.group;ht.layers.test(H.layers)&&Al(ht,N,H,mt,wt,Rt)}}function Al(E,N,H,V,O,J){E.onBeforeRender(v,N,H,V,O,J),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,N,H,V,E,J),O.transparent===!0&&O.side===rn&&O.forceSinglePass===!1?(O.side=Re,O.needsUpdate=!0,v.renderBufferDirect(H,N,V,O,E,J),O.side=xn,O.needsUpdate=!0,v.renderBufferDirect(H,N,V,O,E,J),O.side=rn):v.renderBufferDirect(H,N,V,O,E,J),E.onAfterRender(v,N,H,V,O,J)}function Wr(E,N,H){N.isScene!==!0&&(N=ae);const V=xt.get(E),O=p.state.lights,J=p.state.shadowsArray,rt=O.state.version,ht=vt.getParameters(E,O.state,J,N,H),mt=vt.getProgramCacheKey(ht);let wt=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?z:T).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",Dt),wt=new Map,V.programs=wt);let Rt=wt.get(mt);if(Rt!==void 0){if(V.currentProgram===Rt&&V.lightsStateVersion===rt)return Cl(E,ht),Rt}else ht.uniforms=vt.getUniforms(E),E.onBeforeCompile(ht,v),Rt=vt.acquireProgram(ht,mt),wt.set(mt,Rt),V.uniforms=ht.uniforms;const Mt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=Q.uniform),Cl(E,ht),V.needsLights=pu(E),V.lightsStateVersion=rt,V.needsLights&&(Mt.ambientLightColor.value=O.state.ambient,Mt.lightProbe.value=O.state.probe,Mt.directionalLights.value=O.state.directional,Mt.directionalLightShadows.value=O.state.directionalShadow,Mt.spotLights.value=O.state.spot,Mt.spotLightShadows.value=O.state.spotShadow,Mt.rectAreaLights.value=O.state.rectArea,Mt.ltc_1.value=O.state.rectAreaLTC1,Mt.ltc_2.value=O.state.rectAreaLTC2,Mt.pointLights.value=O.state.point,Mt.pointLightShadows.value=O.state.pointShadow,Mt.hemisphereLights.value=O.state.hemi,Mt.directionalShadowMap.value=O.state.directionalShadowMap,Mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Mt.spotShadowMap.value=O.state.spotShadowMap,Mt.spotLightMatrix.value=O.state.spotLightMatrix,Mt.spotLightMap.value=O.state.spotLightMap,Mt.pointShadowMap.value=O.state.pointShadowMap,Mt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Rt,V.uniformsList=null,Rt}function Rl(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=ks.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Cl(E,N){const H=xt.get(E);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function fu(E,N,H,V,O){N.isScene!==!0&&(N=ae),R.resetTextureUnits();const J=N.fog,rt=V.isMeshStandardMaterial?N.environment:null,ht=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:pr,mt=(V.isMeshStandardMaterial?z:T).get(V.envMap||rt),wt=V.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Rt=!!H.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!H.morphAttributes.position,Wt=!!H.morphAttributes.normal,Yt=!!H.morphAttributes.color;let de=On;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=v.toneMapping);const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Xt=le!==void 0?le.length:0,St=xt.get(V),Me=p.state.lights;if(et===!0&&(gt===!0||E!==M)){const Pe=E===M&&V.id===S;Q.setState(V,E,Pe)}let jt=!1;V.version===St.__version?(St.needsLights&&St.lightsStateVersion!==Me.state.version||St.outputColorSpace!==ht||O.isBatchedMesh&&St.batching===!1||!O.isBatchedMesh&&St.batching===!0||O.isBatchedMesh&&St.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&St.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&St.instancing===!1||!O.isInstancedMesh&&St.instancing===!0||O.isSkinnedMesh&&St.skinning===!1||!O.isSkinnedMesh&&St.skinning===!0||O.isInstancedMesh&&St.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&St.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&St.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&St.instancingMorph===!1&&O.morphTexture!==null||St.envMap!==mt||V.fog===!0&&St.fog!==J||St.numClippingPlanes!==void 0&&(St.numClippingPlanes!==Q.numPlanes||St.numIntersection!==Q.numIntersection)||St.vertexAlphas!==wt||St.vertexTangents!==Rt||St.morphTargets!==Mt||St.morphNormals!==Wt||St.morphColors!==Yt||St.toneMapping!==de||St.morphTargetsCount!==Xt)&&(jt=!0):(jt=!0,St.__version=V.version);let fn=St.currentProgram;jt===!0&&(fn=Wr(V,N,O));let Ei=!1,Xe=!1,yr=!1;const se=fn.getUniforms(),Qe=St.uniforms;if(yt.useProgram(fn.program)&&(Ei=!0,Xe=!0,yr=!0),V.id!==S&&(S=V.id,Xe=!0),Ei||M!==E){yt.buffers.depth.getReversed()?(st.copy(E.projectionMatrix),ch(st),uh(st),se.setValue(I,"projectionMatrix",st)):se.setValue(I,"projectionMatrix",E.projectionMatrix),se.setValue(I,"viewMatrix",E.matrixWorldInverse);const He=se.map.cameraPosition;He!==void 0&&He.setValue(I,At.setFromMatrixPosition(E.matrixWorld)),Ht.logarithmicDepthBuffer&&se.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&se.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Xe=!0,yr=!0)}if(O.isSkinnedMesh){se.setOptional(I,O,"bindMatrix"),se.setOptional(I,O,"bindMatrixInverse");const Pe=O.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),se.setValue(I,"boneTexture",Pe.boneTexture,R))}O.isBatchedMesh&&(se.setOptional(I,O,"batchingTexture"),se.setValue(I,"batchingTexture",O._matricesTexture,R),se.setOptional(I,O,"batchingIdTexture"),se.setValue(I,"batchingIdTexture",O._indirectTexture,R),se.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&se.setValue(I,"batchingColorTexture",O._colorsTexture,R));const tn=H.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Et.update(O,H,fn),(Xe||St.receiveShadow!==O.receiveShadow)&&(St.receiveShadow=O.receiveShadow,se.setValue(I,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Qe.envMap.value=mt,Qe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Qe.envMapIntensity.value=N.environmentIntensity),Xe&&(se.setValue(I,"toneMappingExposure",v.toneMappingExposure),St.needsLights&&du(Qe,yr),J&&V.fog===!0&&at.refreshFogUniforms(Qe,J),at.refreshMaterialUniforms(Qe,V,W,q,p.state.transmissionRenderTarget[E.id]),ks.upload(I,Rl(St),Qe,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(ks.upload(I,Rl(St),Qe,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&se.setValue(I,"center",O.center),se.setValue(I,"modelViewMatrix",O.modelViewMatrix),se.setValue(I,"normalMatrix",O.normalMatrix),se.setValue(I,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Pe=V.uniformsGroups;for(let He=0,la=Pe.length;He<la;He++){const ri=Pe[He];F.update(ri,fn),F.bind(ri,fn)}}return fn}function du(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function pu(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,H){xt.get(E.texture).__webglTexture=N,xt.get(E.depthTexture).__webglTexture=H;const V=xt.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=H===void 0,V.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const H=xt.get(E);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0};const mu=I.createFramebuffer();this.setRenderTarget=function(E,N=0,H=0){P=E,A=N,w=H;let V=!0,O=null,J=!1,rt=!1;if(E){const mt=xt.get(E);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(mt.__hasExternalTextures)R.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Mt=E.depthTexture;if(mt.__boundDepthTexture!==Mt){if(Mt!==null&&xt.has(Mt)&&(E.width!==Mt.image.width||E.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(rt=!0);const Rt=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?O=Rt[N][H]:O=Rt[N],J=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?O=Rt[H]:O=Rt,C.copy(E.viewport),U.copy(E.scissor),L=E.scissorTest}else C.copy(_t).multiplyScalar(W).floor(),U.copy(Nt).multiplyScalar(W).floor(),L=te;if(H!==0&&(O=mu),yt.bindFramebuffer(I.FRAMEBUFFER,O)&&V&&yt.drawBuffers(E,O),yt.viewport(C),yt.scissor(U),yt.setScissorTest(L),J){const mt=xt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,H)}else if(rt){const mt=xt.get(E.texture),wt=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.__webglTexture,H,wt)}else if(E!==null&&H!==0){const mt=xt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,H)}S=-1},this.readRenderTargetPixels=function(E,N,H,V,O,J,rt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){yt.bindFramebuffer(I.FRAMEBUFFER,ht);try{const mt=E.texture,wt=mt.format,Rt=mt.type;if(!Ht.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ht.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&H>=0&&H<=E.height-O&&I.readPixels(N,H,V,O,It.convert(wt),It.convert(Rt),J)}finally{const mt=P!==null?xt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(E,N,H,V,O,J,rt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&rt!==void 0&&(ht=ht[rt]),ht){const mt=E.texture,wt=mt.format,Rt=mt.type;if(!Ht.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ht.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-V&&H>=0&&H<=E.height-O){yt.bindFramebuffer(I.FRAMEBUFFER,ht);const Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),I.readPixels(N,H,V,O,It.convert(wt),It.convert(Rt),0);const Wt=P!==null?xt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,Wt);const Yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await lh(I,Yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(Mt),I.deleteSync(Yt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,H=0){E.isTexture!==!0&&(Ki("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-H),O=Math.floor(E.image.width*V),J=Math.floor(E.image.height*V),rt=N!==null?N.x:0,ht=N!==null?N.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,H,0,0,rt,ht,O,J),yt.unbindTexture()};const gu=I.createFramebuffer(),_u=I.createFramebuffer();this.copyTextureToTexture=function(E,N,H=null,V=null,O=0,J=null){E.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],N=arguments[2],J=arguments[3]||0,H=null),J===null&&(O!==0?(Ki("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=O,O=0):J=0);let rt,ht,mt,wt,Rt,Mt,Wt,Yt,de;const le=E.isCompressedTexture?E.mipmaps[J]:E.image;if(H!==null)rt=H.max.x-H.min.x,ht=H.max.y-H.min.y,mt=H.isBox3?H.max.z-H.min.z:1,wt=H.min.x,Rt=H.min.y,Mt=H.isBox3?H.min.z:0;else{const tn=Math.pow(2,-O);rt=Math.floor(le.width*tn),ht=Math.floor(le.height*tn),E.isDataArrayTexture?mt=le.depth:E.isData3DTexture?mt=Math.floor(le.depth*tn):mt=1,wt=0,Rt=0,Mt=0}V!==null?(Wt=V.x,Yt=V.y,de=V.z):(Wt=0,Yt=0,de=0);const Xt=It.convert(N.format),St=It.convert(N.type);let Me;N.isData3DTexture?(R.setTexture3D(N,0),Me=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Me=I.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const jt=I.getParameter(I.UNPACK_ROW_LENGTH),fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ei=I.getParameter(I.UNPACK_SKIP_PIXELS),Xe=I.getParameter(I.UNPACK_SKIP_ROWS),yr=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mt);const se=E.isDataArrayTexture||E.isData3DTexture,Qe=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const tn=xt.get(E),Pe=xt.get(N),He=xt.get(tn.__renderTarget),la=xt.get(Pe.__renderTarget);yt.bindFramebuffer(I.READ_FRAMEBUFFER,He.__webglFramebuffer),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,la.__webglFramebuffer);for(let ri=0;ri<mt;ri++)se&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(E).__webglTexture,O,Mt+ri),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(N).__webglTexture,J,de+ri)),I.blitFramebuffer(wt,Rt,rt,ht,Wt,Yt,rt,ht,I.DEPTH_BUFFER_BIT,I.NEAREST);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||xt.has(E)){const tn=xt.get(E),Pe=xt.get(N);yt.bindFramebuffer(I.READ_FRAMEBUFFER,gu),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,_u);for(let He=0;He<mt;He++)se?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,O,Mt+He):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,O),Qe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,J,de+He):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,J),O!==0?I.blitFramebuffer(wt,Rt,rt,ht,Wt,Yt,rt,ht,I.COLOR_BUFFER_BIT,I.NEAREST):Qe?I.copyTexSubImage3D(Me,J,Wt,Yt,de+He,wt,Rt,rt,ht):I.copyTexSubImage2D(Me,J,Wt,Yt,wt,Rt,rt,ht);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qe?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Me,J,Wt,Yt,de,rt,ht,mt,Xt,St,le.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,J,Wt,Yt,de,rt,ht,mt,Xt,le.data):I.texSubImage3D(Me,J,Wt,Yt,de,rt,ht,mt,Xt,St,le):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,Wt,Yt,rt,ht,Xt,St,le.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,Wt,Yt,le.width,le.height,Xt,le.data):I.texSubImage2D(I.TEXTURE_2D,J,Wt,Yt,rt,ht,Xt,St,le);I.pixelStorei(I.UNPACK_ROW_LENGTH,jt),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,yr),J===0&&N.generateMipmaps&&I.generateMipmap(Me),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,H=null,V=null,O=0){return E.isTexture!==!0&&(Ki("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,V=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),Ki('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,H,V,O)},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){A=0,w=0,P=null,yt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Nn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Rc={type:"change"},dl={type:"start"},W0={type:"end"},ps=new A0,Cc=new Mn,Um=Math.cos(70*ah.DEG2RAD),ge=new D,Ve=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Va=1e-6;class Fm extends $h{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:nr.ROTATE,MIDDLE:nr.DOLLY,RIGHT:nr.PAN},this.touches={ONE:Ji.ROTATE,TWO:Ji.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ti,this._lastTargetPosition=new D,this._quat=new ti().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Wo,this._sphericalDelta=new Wo,this._scale=1,this._panOffset=new D,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new D,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Om.bind(this),this._onPointerDown=Nm.bind(this),this._onPointerUp=Bm.bind(this),this._onContextMenu=Xm.bind(this),this._onMouseWheel=km.bind(this),this._onKeyDown=Vm.bind(this),this._onTouchStart=Gm.bind(this),this._onTouchMove=Wm.bind(this),this._onMouseDown=zm.bind(this),this._onMouseMove=Hm.bind(this),this._interceptControlDown=qm.bind(this),this._interceptControlUp=Ym.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Rc),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),r<-Math.PI?r+=Ve:r>Math.PI&&(r-=Ve),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=a!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ge.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),s=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=l!==this.object.zoom;const u=new D(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(ps.origin.copy(this.object.position),ps.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ps.direction))<Um?this.object.lookAt(this.target):(Cc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ps.intersectPlane(Cc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>Va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Va||this._lastTargetPosition.distanceToSquared(this.target)>Va?(this.dispatchEvent(Rc),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;ge.copy(r).sub(this.target);let s=ge.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,a=n.width,o=n.height;this._mouse.x=r/a*2-1,this._mouse.y=-(s/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function Nm(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function Om(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Bm(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(W0),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function zm(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case nr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case nr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(dl)}function Hm(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function km(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(dl),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(W0))}function Vm(i){this.enabled!==!1&&this._handleKeyDown(i)}function Gm(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ji.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case Ji.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Ji.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case Ji.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(dl)}function Wm(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function Xm(i){this.enabled!==!1&&i.preventDefault()}function qm(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Ym(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const X0=0,jm=1,q0=2,Pc=2,Ga=1.25,Dc=1,Qn=6*4+4+4,ra=65535,$m=Math.pow(2,-24),Wa=Symbol("SKIP_GENERATION");function Y0(i){return i.index?i.index.count:i.attributes.position.count}function xr(i){return Y0(i)/3}function j0(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Km(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=j0(e,n);i.setIndex(new ue(r,1));for(let s=0;s<e;s++)r[s]=s}}function $0(i,t){const e=xr(i),n=t||i.drawRange,r=n.start/3,s=(n.start+n.count)/3,a=Math.max(0,r),o=Math.min(e,s)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function K0(i,t){if(!i.groups||!i.groups.length)return $0(i,t);const e=[],n=new Set,r=t||i.drawRange,s=r.start/3,a=(r.start+r.count)/3;for(const l of i.groups){const u=l.start/3,f=(l.start+l.count)/3;n.add(Math.max(s,u)),n.add(Math.min(a,f))}const o=Array.from(n.values()).sort((l,u)=>l-u);for(let l=0;l<o.length-1;l++){const u=o[l],f=o[l+1];e.push({offset:Math.floor(u),count:Math.floor(f-u)})}return e}function Zm(i,t){const e=xr(i),n=K0(i,t).sort((a,o)=>a.offset-o.offset),r=n[n.length-1];r.count=Math.min(e-r.offset,r.count);let s=0;return n.forEach(({count:a})=>s+=a),e!==s}function Xa(i,t,e,n,r){let s=1/0,a=1/0,o=1/0,l=-1/0,u=-1/0,f=-1/0,h=1/0,c=1/0,m=1/0,g=-1/0,_=-1/0,d=-1/0;for(let p=t*6,x=(t+e)*6;p<x;p+=6){const y=i[p+0],v=i[p+1],b=y-v,A=y+v;b<s&&(s=b),A>l&&(l=A),y<h&&(h=y),y>g&&(g=y);const w=i[p+2],P=i[p+3],S=w-P,M=w+P;S<a&&(a=S),M>u&&(u=M),w<c&&(c=w),w>_&&(_=w);const C=i[p+4],U=i[p+5],L=C-U,B=C+U;L<o&&(o=L),B>f&&(f=B),C<m&&(m=C),C>d&&(d=C)}n[0]=s,n[1]=a,n[2]=o,n[3]=l,n[4]=u,n[5]=f,r[0]=h,r[1]=c,r[2]=m,r[3]=g,r[4]=_,r[5]=d}function Jm(i,t=null,e=null,n=null){const r=i.attributes.position,s=i.index?i.index.array:null,a=xr(i),o=r.normalized;let l;t===null?(l=new Float32Array(a*6),e=0,n=a):(l=t,e=e||0,n=n||a);const u=r.array,f=r.offset||0;let h=3;r.isInterleavedBufferAttribute&&(h=r.data.stride);const c=["getX","getY","getZ"];for(let m=e;m<e+n;m++){const g=m*3,_=m*6;let d=g+0,p=g+1,x=g+2;s&&(d=s[d],p=s[p],x=s[x]),o||(d=d*h+f,p=p*h+f,x=x*h+f);for(let y=0;y<3;y++){let v,b,A;o?(v=r[c[y]](d),b=r[c[y]](p),A=r[c[y]](x)):(v=u[d+y],b=u[p+y],A=u[x+y]);let w=v;b<w&&(w=b),A<w&&(w=A);let P=v;b>P&&(P=b),A>P&&(P=A);const S=(P-w)/2,M=y*2;l[_+M+0]=w+S,l[_+M+1]=S+(Math.abs(w)+S)*$m}}return l}function ce(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Ic(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Lc(i,t){t.set(i)}function Uc(i,t,e){let n,r;for(let s=0;s<3;s++){const a=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[a],r=t[a],e[a]=n>r?n:r}}function ms(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],a=r-s,o=r+s;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function wr(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const Dn=32,Qm=(i,t)=>i.candidate-t.candidate,jn=new Array(Dn).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),gs=new Float32Array(6);function t2(i,t,e,n,r,s){let a=-1,o=0;if(s===X0)a=Ic(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(s===jm)a=Ic(i),a!==-1&&(o=e2(e,n,r,a));else if(s===q0){const l=wr(i);let u=Ga*r;const f=n*6,h=(n+r)*6;for(let c=0;c<3;c++){const m=t[c],d=(t[c+3]-m)/Dn;if(r<Dn/4){const p=[...jn];p.length=r;let x=0;for(let v=f;v<h;v+=6,x++){const b=p[x];b.candidate=e[v+2*c],b.count=0;const{bounds:A,leftCacheBounds:w,rightCacheBounds:P}=b;for(let S=0;S<3;S++)P[S]=1/0,P[S+3]=-1/0,w[S]=1/0,w[S+3]=-1/0,A[S]=1/0,A[S+3]=-1/0;ms(v,e,A)}p.sort(Qm);let y=r;for(let v=0;v<y;v++){const b=p[v];for(;v+1<y&&p[v+1].candidate===b.candidate;)p.splice(v+1,1),y--}for(let v=f;v<h;v+=6){const b=e[v+2*c];for(let A=0;A<y;A++){const w=p[A];b>=w.candidate?ms(v,e,w.rightCacheBounds):(ms(v,e,w.leftCacheBounds),w.count++)}}for(let v=0;v<y;v++){const b=p[v],A=b.count,w=r-b.count,P=b.leftCacheBounds,S=b.rightCacheBounds;let M=0;A!==0&&(M=wr(P)/l);let C=0;w!==0&&(C=wr(S)/l);const U=Dc+Ga*(M*A+C*w);U<u&&(a=c,u=U,o=b.candidate)}}else{for(let y=0;y<Dn;y++){const v=jn[y];v.count=0,v.candidate=m+d+y*d;const b=v.bounds;for(let A=0;A<3;A++)b[A]=1/0,b[A+3]=-1/0}for(let y=f;y<h;y+=6){let A=~~((e[y+2*c]-m)/d);A>=Dn&&(A=Dn-1);const w=jn[A];w.count++,ms(y,e,w.bounds)}const p=jn[Dn-1];Lc(p.bounds,p.rightCacheBounds);for(let y=Dn-2;y>=0;y--){const v=jn[y],b=jn[y+1];Uc(v.bounds,b.rightCacheBounds,v.rightCacheBounds)}let x=0;for(let y=0;y<Dn-1;y++){const v=jn[y],b=v.count,A=v.bounds,P=jn[y+1].rightCacheBounds;b!==0&&(x===0?Lc(A,gs):Uc(A,gs,gs)),x+=b;let S=0,M=0;x!==0&&(S=wr(gs)/l);const C=r-x;C!==0&&(M=wr(P)/l);const U=Dc+Ga*(S*x+M*C);U<u&&(a=c,u=U,o=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${s} used.`);return{axis:a,pos:o}}function e2(i,t,e,n){let r=0;for(let s=t,a=t+e;s<a;s++)r+=i[s*6+n*2];return r/e}class qa{constructor(){this.boundingData=new Float32Array(6)}}function n2(i,t,e,n,r,s){let a=n,o=n+r-1;const l=s.pos,u=s.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){for(let f=0;f<3;f++){let h=t[a*3+f];t[a*3+f]=t[o*3+f],t[o*3+f]=h}for(let f=0;f<6;f++){let h=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=h}a++,o--}else return a}}function i2(i,t,e,n,r,s){let a=n,o=n+r-1;const l=s.pos,u=s.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){let f=i[a];i[a]=i[o],i[o]=f;for(let h=0;h<6;h++){let c=e[a*6+h];e[a*6+h]=e[o*6+h],e[o*6+h]=c}a++,o--}else return a}}function Ue(i,t){return t[i+15]===65535}function We(i,t){return t[i+6]}function je(i,t){return t[i+14]}function sn(i){return i+8}function $e(i,t){return t[i+6]}function pl(i,t){return t[i+7]}let Z0,Ur,Vs,J0;const r2=Math.pow(2,32);function qo(i){return"count"in i?1:1+qo(i.left)+qo(i.right)}function s2(i,t,e){return Z0=new Float32Array(e),Ur=new Uint32Array(e),Vs=new Uint16Array(e),J0=new Uint8Array(e),Yo(i,t)}function Yo(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let a=0;a<6;a++)Z0[e+a]=s[a];if(r)if(t.buffer){const a=t.buffer;J0.set(new Uint8Array(a),i);for(let o=i,l=i+a.byteLength;o<l;o+=Qn){const u=o/2;Ue(u,Vs)||(Ur[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return Ur[e+6]=a,Vs[n+14]=o,Vs[n+15]=ra,i+Qn}else{const a=t.left,o=t.right,l=t.splitAxis;let u;if(u=Yo(i+Qn,a),u/4>r2)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ur[e+6]=u/4,u=Yo(u,o),Ur[e+7]=l,u}}function a2(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,r=n?4:2,s=t?new SharedArrayBuffer(e*r):new ArrayBuffer(e*r),a=n?new Uint32Array(s):new Uint16Array(s);for(let o=0,l=a.length;o<l;o++)a[o]=o;return a}function o2(i,t,e,n,r){const{maxDepth:s,verbose:a,maxLeafTris:o,strategy:l,onProgress:u,indirect:f}=r,h=i._indirectBuffer,c=i.geometry,m=c.index?c.index.array:null,g=f?i2:n2,_=xr(c),d=new Float32Array(6);let p=!1;const x=new qa;return Xa(t,e,n,x.boundingData,d),v(x,e,n,d),x;function y(b){u&&u(b/_)}function v(b,A,w,P=null,S=0){if(!p&&S>=s&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${s} reached when generating BVH. Consider increasing maxDepth.`),console.warn(c))),w<=o||S>=s)return y(A+w),b.offset=A,b.count=w,b;const M=t2(b.boundingData,P,t,A,w,l);if(M.axis===-1)return y(A+w),b.offset=A,b.count=w,b;const C=g(h,m,t,A,w,M);if(C===A||C===A+w)y(A+w),b.offset=A,b.count=w;else{b.splitAxis=M.axis;const U=new qa,L=A,B=C-A;b.left=U,Xa(t,L,B,U.boundingData,d),v(U,L,B,d,S+1);const G=new qa,k=C,q=w-B;b.right=G,Xa(t,k,q,G.boundingData,d),v(G,k,q,d,S+1)}return b}}function l2(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=a2(e,t.useSharedArrayBuffer),Zm(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||Km(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=Jm(e),s=t.indirect?$0(e,t.range):K0(e,t.range);i._roots=s.map(a=>{const o=o2(i,r,a.offset,a.count,t),l=qo(o),u=new n(Qn*l);return s2(0,o,u),u})}class Hn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,a=t.length;s<a;s++){const l=t[s][e];n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,a=e.length;s<a;s++){const o=e[s],l=t.dot(o);n=l<n?l:n,r=l>r?l:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Hn.prototype.setFromBox=function(){const i=new D;return function(e,n){const r=n.min,s=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let f=0;f<=1;f++){i.x=r.x*l+s.x*(1-l),i.y=r.y*u+s.y*(1-u),i.z=r.z*f+s.z*(1-f);const h=e.dot(i);a=Math.min(h,a),o=Math.max(h,o)}this.min=a,this.max=o}}();const c2=function(){const i=new D,t=new D,e=new D;return function(r,s,a){const o=r.start,l=i,u=s.start,f=t;e.subVectors(o,u),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const h=e.dot(f),c=f.dot(l),m=f.dot(f),g=e.dot(l),d=l.dot(l)*m-c*c;let p,x;d!==0?p=(h*c-g*m)/d:p=0,x=(h+p*c)/m,a.x=p,a.y=x}}(),ml=function(){const i=new ut,t=new D,e=new D;return function(r,s,a,o){c2(r,s,i);let l=i.x,u=i.y;if(l>=0&&l<=1&&u>=0&&u<=1){r.at(l,a),s.at(u,o);return}else if(l>=0&&l<=1){u<0?s.at(0,o):s.at(1,o),r.closestPointToPoint(o,!0,a);return}else if(u>=0&&u<=1){l<0?r.at(0,a):r.at(1,a),s.closestPointToPoint(a,!0,o);return}else{let f;l<0?f=r.start:f=r.end;let h;u<0?h=s.start:h=s.end;const c=t,m=e;if(r.closestPointToPoint(h,!0,t),s.closestPointToPoint(f,!0,e),c.distanceToSquared(h)<=m.distanceToSquared(f)){a.copy(c),o.copy(h);return}else{a.copy(f),o.copy(m);return}}}}(),u2=function(){const i=new D,t=new D,e=new Mn,n=new zn;return function(s,a){const{radius:o,center:l}=s,{a:u,b:f,c:h}=a;if(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=f,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const _=a.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=o){const p=_.projectPoint(l,t);if(a.containsPoint(p))return!0}return!1}}(),h2=1e-15;function Ya(i){return Math.abs(i)<h2}class yn extends Se{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new Hn),this.points=[this.a,this.b,this.c],this.sphere=new ea,this.plane=new Mn,this.needsUpdate=!0}intersectsSphere(t){return u2(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,a=this.satBounds,o=s[0],l=a[0];this.getNormal(o),l.setFromPoints(o,r);const u=s[1],f=a[1];u.subVectors(t,e),f.setFromPoints(u,r);const h=s[2],c=a[2];h.subVectors(e,n),c.setFromPoints(h,r);const m=s[3],g=a[3];m.subVectors(n,t),g.setFromPoints(m,r),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}yn.prototype.closestPointToSegment=function(){const i=new D,t=new D,e=new zn;return function(r,s=null,a=null){const{start:o,end:l}=r,u=this.points;let f,h=1/0;for(let c=0;c<3;c++){const m=(c+1)%3;e.start.copy(u[c]),e.end.copy(u[m]),ml(e,r,i,t),f=i.distanceToSquared(t),f<h&&(h=f,s&&s.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),f=o.distanceToSquared(i),f<h&&(h=f,s&&s.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),f=l.distanceToSquared(i),f<h&&(h=f,s&&s.copy(i),a&&a.copy(l)),Math.sqrt(h)}}();yn.prototype.intersectsTriangle=function(){const i=new yn,t=new Array(3),e=new Array(3),n=new Hn,r=new Hn,s=new D,a=new D,o=new D,l=new D,u=new D,f=new zn,h=new zn,c=new zn,m=new D;function g(_,d,p){const x=_.points;let y=0,v=-1;for(let b=0;b<3;b++){const{start:A,end:w}=f;A.copy(x[b]),w.copy(x[(b+1)%3]),f.delta(a);const P=Ya(d.distanceToPoint(A));if(Ya(d.normal.dot(a))&&P){p.copy(f),y=2;break}const S=d.intersectLine(f,m);if(!S&&P&&m.copy(A),(S||P)&&!Ya(m.distanceTo(w))){if(y<=1)(y===1?p.start:p.end).copy(m),P&&(v=y);else if(y>=2){(v===1?p.start:p.end).copy(m),y=2;break}if(y++,y===2&&v===-1)break}}return y}return function(d,p=null,x=!1){this.needsUpdate&&this.update(),d.isExtendedTriangle?d.needsUpdate&&d.update():(i.copy(d),i.update(),d=i);const y=this.plane,v=d.plane;if(Math.abs(y.normal.dot(v.normal))>1-1e-10){const b=this.satBounds,A=this.satAxes;e[0]=d.a,e[1]=d.b,e[2]=d.c;for(let S=0;S<4;S++){const M=b[S],C=A[S];if(n.setFromPoints(C,e),M.isSeparated(n))return!1}const w=d.satBounds,P=d.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let S=0;S<4;S++){const M=w[S],C=P[S];if(n.setFromPoints(C,t),M.isSeparated(n))return!1}for(let S=0;S<4;S++){const M=A[S];for(let C=0;C<4;C++){const U=P[C];if(s.crossVectors(M,U),n.setFromPoints(s,t),r.setFromPoints(s,e),n.isSeparated(r))return!1}}return p&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const b=g(this,v,h);if(b===1&&d.containsPoint(h.end))return p&&(p.start.copy(h.end),p.end.copy(h.end)),!0;if(b!==2)return!1;const A=g(d,y,c);if(A===1&&this.containsPoint(c.end))return p&&(p.start.copy(c.end),p.end.copy(c.end)),!0;if(A!==2)return!1;if(h.delta(o),c.delta(l),o.dot(l)<0){let L=c.start;c.start=c.end,c.end=L}const w=h.start.dot(o),P=h.end.dot(o),S=c.start.dot(o),M=c.end.dot(o),C=P<S,U=w<M;return w!==M&&S!==P&&C===U?!1:(p&&(u.subVectors(h.start,c.start),u.dot(o)>0?p.start.copy(h.start):p.start.copy(c.start),u.subVectors(h.end,c.end),u.dot(o)<0?p.end.copy(h.end):p.end.copy(c.end)),!0)}}}();yn.prototype.distanceToPoint=function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();yn.prototype.distanceToTriangle=function(){const i=new D,t=new D,e=["a","b","c"],n=new zn,r=new zn;return function(a,o=null,l=null){const u=o||l?n:null;if(this.intersectsTriangle(a,u))return(o||l)&&(o&&u.getCenter(o),l&&u.getCenter(l)),0;let f=1/0;for(let h=0;h<3;h++){let c;const m=e[h],g=a[m];this.closestPointToPoint(g,i),c=g.distanceToSquared(i),c<f&&(f=c,o&&o.copy(i),l&&l.copy(g));const _=this[m];a.closestPointToPoint(_,i),c=_.distanceToSquared(i),c<f&&(f=c,o&&o.copy(_),l&&l.copy(i))}for(let h=0;h<3;h++){const c=e[h],m=e[(h+1)%3];n.set(this[c],this[m]);for(let g=0;g<3;g++){const _=e[g],d=e[(g+1)%3];r.set(a[_],a[d]),ml(n,r,i,t);const p=i.distanceToSquared(t);p<f&&(f=p,o&&o.copy(i),l&&l.copy(t))}}return Math.sqrt(f)}}();class Be{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Ft,this.invMatrix=new Ft,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new Hn),this.alignedSatBounds=new Array(3).fill().map(()=>new Hn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Be.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let u=0;u<=1;u++)for(let f=0;f<=1;f++)for(let h=0;h<=1;h++){const c=1*u|2*f|4*h,m=r[c];m.x=u?n.x:e.x,m.y=f?n.y:e.y,m.z=h?n.z:e.z,m.applyMatrix4(t)}const s=this.satBounds,a=this.satAxes,o=r[0];for(let u=0;u<3;u++){const f=a[u],h=s[u],c=1<<u,m=r[c];f.subVectors(o,m),h.setFromPoints(f,r)}const l=this.alignedSatBounds;l[0].setFromPointsField(r,"x"),l[1].setFromPointsField(r,"y"),l[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Be.prototype.intersectsBox=function(){const i=new Hn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,o[0].isSeparated(i)||(i.min=n.y,i.max=r.y,o[1].isSeparated(i))||(i.min=n.z,i.max=r.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const u=a[l],f=s[l];if(i.setFromBox(u,e),f.isSeparated(i))return!1}return!0}}();Be.prototype.intersectsTriangle=function(){const i=new yn,t=new Array(3),e=new Hn,n=new Hn,r=new D;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let c=0;c<3;c++){const m=o[c],g=l[c];if(e.setFromPoints(g,t),m.isSeparated(e))return!1}const u=a.satBounds,f=a.satAxes,h=this.points;for(let c=0;c<3;c++){const m=u[c],g=f[c];if(e.setFromPoints(g,h),m.isSeparated(e))return!1}for(let c=0;c<3;c++){const m=l[c];for(let g=0;g<4;g++){const _=f[g];if(r.crossVectors(m,_),e.setFromPoints(r,t),n.setFromPoints(r,h),e.isSeparated(n))return!1}}return!0}}();Be.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Be.prototype.distanceToPoint=function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Be.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new zn),e=new Array(12).fill().map(()=>new zn),n=new D,r=new D;return function(a,o=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||u)&&(a.getCenter(r),this.closestPointToPoint(r,n),a.closestPointToPoint(n,r),l&&l.copy(n),u&&u.copy(r)),0;const f=o*o,h=a.min,c=a.max,m=this.points;let g=1/0;for(let d=0;d<8;d++){const p=m[d];r.copy(p).clamp(h,c);const x=p.distanceToSquared(r);if(x<g&&(g=x,l&&l.copy(p),u&&u.copy(r),x<f))return Math.sqrt(x)}let _=0;for(let d=0;d<3;d++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const y=(d+1)%3,v=(d+2)%3,b=p<<y|x<<v,A=1<<d|p<<y|x<<v,w=m[b],P=m[A];t[_].set(w,P);const M=i[d],C=i[y],U=i[v],L=e[_],B=L.start,G=L.end;B[M]=h[M],B[C]=p?h[C]:c[C],B[U]=x?h[U]:c[C],G[M]=c[M],G[C]=p?h[C]:c[C],G[U]=x?h[U]:c[C],_++}for(let d=0;d<=1;d++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){r.x=d?c.x:h.x,r.y=p?c.y:h.y,r.z=x?c.z:h.z,this.closestPointToPoint(r,n);const y=r.distanceToSquared(n);if(y<g&&(g=y,l&&l.copy(n),u&&u.copy(r),y<f))return Math.sqrt(y)}for(let d=0;d<12;d++){const p=t[d];for(let x=0;x<12;x++){const y=e[x];ml(p,y,n,r);const v=n.distanceToSquared(r);if(v<g&&(g=v,l&&l.copy(n),u&&u.copy(r),v<f))return Math.sqrt(v)}}return Math.sqrt(g)}}();class gl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class f2 extends gl{constructor(){super(()=>new yn)}}const an=new f2;class d2{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const re=new d2;let Zn,er;const Hi=[],_s=new gl(()=>new Oe);function p2(i,t,e,n,r,s){Zn=_s.getPrimitive(),er=_s.getPrimitive(),Hi.push(Zn,er),re.setBuffer(i._roots[t]);const a=jo(0,i.geometry,e,n,r,s);re.clearBuffer(),_s.releasePrimitive(Zn),_s.releasePrimitive(er),Hi.pop(),Hi.pop();const o=Hi.length;return o>0&&(er=Hi[o-1],Zn=Hi[o-2]),a}function jo(i,t,e,n,r=null,s=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:u}=re;let f=i*2;if(Ue(f,l)){const g=We(i,u),_=je(f,l);return ce(i,o,Zn),n(g,_,!1,a,s+i,Zn)}else{let U=function(B){const{uint16Array:G,uint32Array:k}=re;let q=B*2;for(;!Ue(q,G);)B=sn(B),q=B*2;return We(B,k)},L=function(B){const{uint16Array:G,uint32Array:k}=re;let q=B*2;for(;!Ue(q,G);)B=$e(B,k),q=B*2;return We(B,k)+je(q,G)};var c=U,m=L;const g=sn(i),_=$e(i,u);let d=g,p=_,x,y,v,b;if(r&&(v=Zn,b=er,ce(d,o,v),ce(p,o,b),x=r(v),y=r(b),y<x)){d=_,p=g;const B=x;x=y,y=B,v=b}v||(v=Zn,ce(d,o,v));const A=Ue(d*2,l),w=e(v,A,x,a+1,s+d);let P;if(w===Pc){const B=U(d),k=L(d)-B;P=n(B,k,!0,a+1,s+d,v)}else P=w&&jo(d,t,e,n,r,s,a+1);if(P)return!0;b=er,ce(p,o,b);const S=Ue(p*2,l),M=e(b,S,y,a+1,s+p);let C;if(M===Pc){const B=U(p),k=L(p)-B;C=n(B,k,!0,a+1,s+p,b)}else C=M&&jo(p,t,e,n,r,s,a+1);return!!C}}const Ar=new D,ja=new D;function m2(i,t,e={},n=0,r=1/0){const s=n*n,a=r*r;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:f=>(Ar.copy(t).clamp(f.min,f.max),Ar.distanceToSquared(t)),intersectsBounds:(f,h,c)=>c<o&&c<a,intersectsTriangle:(f,h)=>{f.closestPointToPoint(t,Ar);const c=t.distanceToSquared(Ar);return c<o&&(ja.copy(Ar),o=c,l=h),c<s}}),o===1/0)return null;const u=Math.sqrt(o);return e.point?e.point.copy(ja):e.point=ja.clone(),e.distance=u,e.faceIndex=l,e}const g2=parseInt(Ks)>=169,hi=new D,fi=new D,di=new D,vs=new ut,xs=new ut,ys=new ut,Fc=new D,Nc=new D,Oc=new D,Rr=new D;function _2(i,t,e,n,r,s,a,o){let l;if(s===Re?l=i.intersectTriangle(n,e,t,!0,r):l=i.intersectTriangle(t,e,n,s!==rn,r),l===null)return null;const u=i.origin.distanceTo(r);return u<a||u>o?null:{distance:u,point:r.clone()}}function v2(i,t,e,n,r,s,a,o,l,u,f){hi.fromBufferAttribute(t,s),fi.fromBufferAttribute(t,a),di.fromBufferAttribute(t,o);const h=_2(i,hi,fi,di,Rr,l,u,f);if(h){const c=new D;Se.getBarycoord(Rr,hi,fi,di,c),n&&(vs.fromBufferAttribute(n,s),xs.fromBufferAttribute(n,a),ys.fromBufferAttribute(n,o),h.uv=Se.getInterpolation(Rr,hi,fi,di,vs,xs,ys,new ut)),r&&(vs.fromBufferAttribute(r,s),xs.fromBufferAttribute(r,a),ys.fromBufferAttribute(r,o),h.uv1=Se.getInterpolation(Rr,hi,fi,di,vs,xs,ys,new ut)),e&&(Fc.fromBufferAttribute(e,s),Nc.fromBufferAttribute(e,a),Oc.fromBufferAttribute(e,o),h.normal=Se.getInterpolation(Rr,hi,fi,di,Fc,Nc,Oc,new D),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const m={a:s,b:a,c:o,normal:new D,materialIndex:0};Se.getNormal(hi,fi,di,m.normal),h.face=m,h.faceIndex=s,g2&&(h.barycoord=c)}return h}function sa(i,t,e,n,r,s,a){const o=n*3;let l=o+0,u=o+1,f=o+2;const h=i.index;i.index&&(l=h.getX(l),u=h.getX(u),f=h.getX(f));const{position:c,normal:m,uv:g,uv1:_}=i.attributes,d=v2(e,c,m,g,_,l,u,f,t,s,a);return d?(d.faceIndex=n,r&&r.push(d),d):null}function me(i,t,e,n){const r=i.a,s=i.b,a=i.c;let o=t,l=t+1,u=t+2;e&&(o=e.getX(o),l=e.getX(l),u=e.getX(u)),r.x=n.getX(o),r.y=n.getY(o),r.z=n.getZ(o),s.x=n.getX(l),s.y=n.getY(l),s.z=n.getZ(l),a.x=n.getX(u),a.y=n.getY(u),a.z=n.getZ(u)}function x2(i,t,e,n,r,s,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let f=n,h=n+r;f<h;f++)sa(l,t,e,f,s,a,o)}function y2(i,t,e,n,r,s,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,f=null;for(let h=n,c=n+r;h<c;h++){let m;m=sa(o,t,e,h,null,s,a),m&&m.distance<u&&(f=m,u=m.distance)}return f}function M2(i,t,e,n,r,s,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let f=i,h=t+i;f<h;f++){let c;if(c=f,me(a,c*3,l,u),a.needsUpdate=!0,n(a,c,r,s))return!0}return!1}function S2(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,a,o,l,u=0;const f=i._roots;for(let c=0,m=f.length;c<m;c++)s=f[c],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),h(0,u),u+=s.byteLength;function h(c,m,g=!1){const _=c*2;if(o[_+15]===ra){const p=a[c+6],x=o[_+14];let y=1/0,v=1/0,b=1/0,A=-1/0,w=-1/0,P=-1/0;for(let S=3*p,M=3*(p+x);S<M;S++){let C=n[S];const U=r.getX(C),L=r.getY(C),B=r.getZ(C);U<y&&(y=U),U>A&&(A=U),L<v&&(v=L),L>w&&(w=L),B<b&&(b=B),B>P&&(P=B)}return l[c+0]!==y||l[c+1]!==v||l[c+2]!==b||l[c+3]!==A||l[c+4]!==w||l[c+5]!==P?(l[c+0]=y,l[c+1]=v,l[c+2]=b,l[c+3]=A,l[c+4]=w,l[c+5]=P,!0):!1}else{const p=c+8,x=a[c+6],y=p+m,v=x+m;let b=g,A=!1,w=!1;t?b||(A=t.has(y),w=t.has(v),b=!A&&!w):(A=!0,w=!0);const P=b||A,S=b||w;let M=!1;P&&(M=h(p,m,b));let C=!1;S&&(C=h(x,m,b));const U=M||C;if(U)for(let L=0;L<3;L++){const B=p+L,G=x+L,k=l[B],q=l[B+3],W=l[G],tt=l[G+3];l[c+L]=k<W?k:W,l[c+L+3]=q>tt?q:tt}return U}}}function ei(i,t,e,n,r){let s,a,o,l,u,f;const h=1/e.direction.x,c=1/e.direction.y,m=1/e.direction.z,g=e.origin.x,_=e.origin.y,d=e.origin.z;let p=t[i],x=t[i+3],y=t[i+1],v=t[i+3+1],b=t[i+2],A=t[i+3+2];return h>=0?(s=(p-g)*h,a=(x-g)*h):(s=(x-g)*h,a=(p-g)*h),c>=0?(o=(y-_)*c,l=(v-_)*c):(o=(v-_)*c,l=(y-_)*c),s>l||o>a||((o>s||isNaN(s))&&(s=o),(l<a||isNaN(a))&&(a=l),m>=0?(u=(b-d)*m,f=(A-d)*m):(u=(A-d)*m,f=(b-d)*m),s>f||u>a)?!1:((u>s||s!==s)&&(s=u),(f<a||a!==a)&&(a=f),s<=r&&a>=n)}function T2(i,t,e,n,r,s,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let f=n,h=n+r;f<h;f++){let c=u?u[f]:f;sa(l,t,e,c,s,a,o)}}function b2(i,t,e,n,r,s,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,f=null;for(let h=n,c=n+r;h<c;h++){let m;m=sa(o,t,e,l?l[h]:h,null,s,a),m&&m.distance<u&&(f=m,u=m.distance)}return f}function E2(i,t,e,n,r,s,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let f=i,h=t+i;f<h;f++){let c;if(c=e.resolveTriangleIndex(f),me(a,c*3,l,u),a.needsUpdate=!0,n(a,c,r,s))return!0}return!1}function w2(i,t,e,n,r,s,a){re.setBuffer(i._roots[t]),$o(0,i,e,n,r,s,a),re.clearBuffer()}function $o(i,t,e,n,r,s,a){const{float32Array:o,uint16Array:l,uint32Array:u}=re,f=i*2;if(Ue(f,l)){const c=We(i,u),m=je(f,l);x2(t,e,n,c,m,r,s,a)}else{const c=sn(i);ei(c,o,n,s,a)&&$o(c,t,e,n,r,s,a);const m=$e(i,u);ei(m,o,n,s,a)&&$o(m,t,e,n,r,s,a)}}const A2=["x","y","z"];function R2(i,t,e,n,r,s){re.setBuffer(i._roots[t]);const a=Ko(0,i,e,n,r,s);return re.clearBuffer(),a}function Ko(i,t,e,n,r,s){const{float32Array:a,uint16Array:o,uint32Array:l}=re;let u=i*2;if(Ue(u,o)){const h=We(i,l),c=je(u,o);return y2(t,e,n,h,c,r,s)}else{const h=pl(i,l),c=A2[h],g=n.direction[c]>=0;let _,d;g?(_=sn(i),d=$e(i,l)):(_=$e(i,l),d=sn(i));const x=ei(_,a,n,r,s)?Ko(_,t,e,n,r,s):null;if(x){const b=x.point[c];if(g?b<=a[d+h]:b>=a[d+h+3])return x}const v=ei(d,a,n,r,s)?Ko(d,t,e,n,r,s):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const Ms=new Oe,ki=new yn,Vi=new yn,Cr=new Ft,Bc=new Be,Ss=new Be;function C2(i,t,e,n){re.setBuffer(i._roots[t]);const r=Zo(0,i,e,n);return re.clearBuffer(),r}function Zo(i,t,e,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=re;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Bc.set(e.boundingBox.min,e.boundingBox.max,n),r=Bc),Ue(l,a)){const f=t.geometry,h=f.index,c=f.attributes.position,m=e.index,g=e.attributes.position,_=We(i,o),d=je(l,a);if(Cr.copy(n).invert(),e.boundsTree)return ce(i,s,Ss),Ss.matrix.copy(Cr),Ss.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Ss.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_*3,v=(d+_)*3;y<v;y+=3)if(me(Vi,y,h,c),Vi.needsUpdate=!0,x.intersectsTriangle(Vi))return!0;return!1}});for(let p=_*3,x=(d+_)*3;p<x;p+=3){me(ki,p,h,c),ki.a.applyMatrix4(Cr),ki.b.applyMatrix4(Cr),ki.c.applyMatrix4(Cr),ki.needsUpdate=!0;for(let y=0,v=m.count;y<v;y+=3)if(me(Vi,y,m,g),Vi.needsUpdate=!0,ki.intersectsTriangle(Vi))return!0}}else{const f=i+8,h=o[i+6];return ce(f,s,Ms),!!(r.intersectsBox(Ms)&&Zo(f,t,e,n,r)||(ce(h,s,Ms),r.intersectsBox(Ms)&&Zo(h,t,e,n,r)))}}const Ts=new Ft,$a=new Be,Pr=new Be,P2=new D,D2=new D,I2=new D,L2=new D;function U2(i,t,e,n={},r={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),$a.set(t.boundingBox.min,t.boundingBox.max,e),$a.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,f=t.attributes.position,h=t.index,c=an.getPrimitive(),m=an.getPrimitive();let g=P2,_=D2,d=null,p=null;r&&(d=I2,p=L2);let x=1/0,y=null,v=null;return Ts.copy(e).invert(),Pr.matrix.copy(Ts),i.shapecast({boundsTraverseOrder:b=>$a.distanceToBox(b),intersectsBounds:(b,A,w)=>w<x&&w<a?(A&&(Pr.min.copy(b.min),Pr.max.copy(b.max),Pr.needsUpdate=!0),!0):!1,intersectsRange:(b,A)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:P=>Pr.distanceToBox(P),intersectsBounds:(P,S,M)=>M<x&&M<a,intersectsRange:(P,S)=>{for(let M=P,C=P+S;M<C;M++){me(m,3*M,h,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let U=b,L=b+A;U<L;U++){me(c,3*U,u,l),c.needsUpdate=!0;const B=c.distanceToTriangle(m,g,d);if(B<x&&(_.copy(g),p&&p.copy(d),x=B,y=U,v=M),B<s)return!0}}}});{const w=xr(t);for(let P=0,S=w;P<S;P++){me(m,3*P,h,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let M=b,C=b+A;M<C;M++){me(c,3*M,u,l),c.needsUpdate=!0;const U=c.distanceToTriangle(m,g,d);if(U<x&&(_.copy(g),p&&p.copy(d),x=U,y=M,v=P),U<s)return!0}}}}}),an.releasePrimitive(c),an.releasePrimitive(m),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(Ts),_.applyMatrix4(Ts),r.distance=_.sub(r.point).length(),r.faceIndex=v),n)}function F2(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,a,o,l,u=0;const f=i._roots;for(let c=0,m=f.length;c<m;c++)s=f[c],a=new Uint32Array(s),o=new Uint16Array(s),l=new Float32Array(s),h(0,u),u+=s.byteLength;function h(c,m,g=!1){const _=c*2;if(o[_+15]===ra){const p=a[c+6],x=o[_+14];let y=1/0,v=1/0,b=1/0,A=-1/0,w=-1/0,P=-1/0;for(let S=p,M=p+x;S<M;S++){const C=3*i.resolveTriangleIndex(S);for(let U=0;U<3;U++){let L=C+U;L=n?n[L]:L;const B=r.getX(L),G=r.getY(L),k=r.getZ(L);B<y&&(y=B),B>A&&(A=B),G<v&&(v=G),G>w&&(w=G),k<b&&(b=k),k>P&&(P=k)}}return l[c+0]!==y||l[c+1]!==v||l[c+2]!==b||l[c+3]!==A||l[c+4]!==w||l[c+5]!==P?(l[c+0]=y,l[c+1]=v,l[c+2]=b,l[c+3]=A,l[c+4]=w,l[c+5]=P,!0):!1}else{const p=c+8,x=a[c+6],y=p+m,v=x+m;let b=g,A=!1,w=!1;t?b||(A=t.has(y),w=t.has(v),b=!A&&!w):(A=!0,w=!0);const P=b||A,S=b||w;let M=!1;P&&(M=h(p,m,b));let C=!1;S&&(C=h(x,m,b));const U=M||C;if(U)for(let L=0;L<3;L++){const B=p+L,G=x+L,k=l[B],q=l[B+3],W=l[G],tt=l[G+3];l[c+L]=k<W?k:W,l[c+L+3]=q>tt?q:tt}return U}}}function N2(i,t,e,n,r,s,a){re.setBuffer(i._roots[t]),Jo(0,i,e,n,r,s,a),re.clearBuffer()}function Jo(i,t,e,n,r,s,a){const{float32Array:o,uint16Array:l,uint32Array:u}=re,f=i*2;if(Ue(f,l)){const c=We(i,u),m=je(f,l);T2(t,e,n,c,m,r,s,a)}else{const c=sn(i);ei(c,o,n,s,a)&&Jo(c,t,e,n,r,s,a);const m=$e(i,u);ei(m,o,n,s,a)&&Jo(m,t,e,n,r,s,a)}}const O2=["x","y","z"];function B2(i,t,e,n,r,s){re.setBuffer(i._roots[t]);const a=Qo(0,i,e,n,r,s);return re.clearBuffer(),a}function Qo(i,t,e,n,r,s){const{float32Array:a,uint16Array:o,uint32Array:l}=re;let u=i*2;if(Ue(u,o)){const h=We(i,l),c=je(u,o);return b2(t,e,n,h,c,r,s)}else{const h=pl(i,l),c=O2[h],g=n.direction[c]>=0;let _,d;g?(_=sn(i),d=$e(i,l)):(_=$e(i,l),d=sn(i));const x=ei(_,a,n,r,s)?Qo(_,t,e,n,r,s):null;if(x){const b=x.point[c];if(g?b<=a[d+h]:b>=a[d+h+3])return x}const v=ei(d,a,n,r,s)?Qo(d,t,e,n,r,s):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const bs=new Oe,Gi=new yn,Wi=new yn,Dr=new Ft,zc=new Be,Es=new Be;function z2(i,t,e,n){re.setBuffer(i._roots[t]);const r=tl(0,i,e,n);return re.clearBuffer(),r}function tl(i,t,e,n,r=null){const{float32Array:s,uint16Array:a,uint32Array:o}=re;let l=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),zc.set(e.boundingBox.min,e.boundingBox.max,n),r=zc),Ue(l,a)){const f=t.geometry,h=f.index,c=f.attributes.position,m=e.index,g=e.attributes.position,_=We(i,o),d=je(l,a);if(Dr.copy(n).invert(),e.boundsTree)return ce(i,s,Es),Es.matrix.copy(Dr),Es.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Es.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_,v=d+_;y<v;y++)if(me(Wi,3*t.resolveTriangleIndex(y),h,c),Wi.needsUpdate=!0,x.intersectsTriangle(Wi))return!0;return!1}});for(let p=_,x=d+_;p<x;p++){const y=t.resolveTriangleIndex(p);me(Gi,3*y,h,c),Gi.a.applyMatrix4(Dr),Gi.b.applyMatrix4(Dr),Gi.c.applyMatrix4(Dr),Gi.needsUpdate=!0;for(let v=0,b=m.count;v<b;v+=3)if(me(Wi,v,m,g),Wi.needsUpdate=!0,Gi.intersectsTriangle(Wi))return!0}}else{const f=i+8,h=o[i+6];return ce(f,s,bs),!!(r.intersectsBox(bs)&&tl(f,t,e,n,r)||(ce(h,s,bs),r.intersectsBox(bs)&&tl(h,t,e,n,r)))}}const ws=new Ft,Ka=new Be,Ir=new Be,H2=new D,k2=new D,V2=new D,G2=new D;function W2(i,t,e,n={},r={},s=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Ka.set(t.boundingBox.min,t.boundingBox.max,e),Ka.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,f=t.attributes.position,h=t.index,c=an.getPrimitive(),m=an.getPrimitive();let g=H2,_=k2,d=null,p=null;r&&(d=V2,p=G2);let x=1/0,y=null,v=null;return ws.copy(e).invert(),Ir.matrix.copy(ws),i.shapecast({boundsTraverseOrder:b=>Ka.distanceToBox(b),intersectsBounds:(b,A,w)=>w<x&&w<a?(A&&(Ir.min.copy(b.min),Ir.max.copy(b.max),Ir.needsUpdate=!0),!0):!1,intersectsRange:(b,A)=>{if(t.boundsTree){const w=t.boundsTree;return w.shapecast({boundsTraverseOrder:P=>Ir.distanceToBox(P),intersectsBounds:(P,S,M)=>M<x&&M<a,intersectsRange:(P,S)=>{for(let M=P,C=P+S;M<C;M++){const U=w.resolveTriangleIndex(M);me(m,3*U,h,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let L=b,B=b+A;L<B;L++){const G=i.resolveTriangleIndex(L);me(c,3*G,u,l),c.needsUpdate=!0;const k=c.distanceToTriangle(m,g,d);if(k<x&&(_.copy(g),p&&p.copy(d),x=k,y=L,v=M),k<s)return!0}}}})}else{const w=xr(t);for(let P=0,S=w;P<S;P++){me(m,3*P,h,f),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let M=b,C=b+A;M<C;M++){const U=i.resolveTriangleIndex(M);me(c,3*U,u,l),c.needsUpdate=!0;const L=c.distanceToTriangle(m,g,d);if(L<x&&(_.copy(g),p&&p.copy(d),x=L,y=M,v=P),L<s)return!0}}}}}),an.releasePrimitive(c),an.releasePrimitive(m),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,r&&(r.point?r.point.copy(p):r.point=p.clone(),r.point.applyMatrix4(ws),_.applyMatrix4(ws),r.distance=_.sub(r.point).length(),r.faceIndex=v),n)}function X2(){return typeof SharedArrayBuffer<"u"}const Or=new re.constructor,$s=new re.constructor,$n=new gl(()=>new Oe),Xi=new Oe,qi=new Oe,Za=new Oe,Ja=new Oe;let Qa=!1;function q2(i,t,e,n){if(Qa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Qa=!0;const r=i._roots,s=t._roots;let a,o=0,l=0;const u=new Ft().copy(e).invert();for(let f=0,h=r.length;f<h;f++){Or.setBuffer(r[f]),l=0;const c=$n.getPrimitive();ce(0,Or.float32Array,c),c.applyMatrix4(u);for(let m=0,g=s.length;m<g&&($s.setBuffer(s[m]),a=_n(0,0,e,u,n,o,l,0,0,c),$s.clearBuffer(),l+=s[m].length,!a);m++);if($n.releasePrimitive(c),Or.clearBuffer(),o+=r[f].length,a)break}return Qa=!1,a}function _n(i,t,e,n,r,s=0,a=0,o=0,l=0,u=null,f=!1){let h,c;f?(h=$s,c=Or):(h=Or,c=$s);const m=h.float32Array,g=h.uint32Array,_=h.uint16Array,d=c.float32Array,p=c.uint32Array,x=c.uint16Array,y=i*2,v=t*2,b=Ue(y,_),A=Ue(v,x);let w=!1;if(A&&b)f?w=r(We(t,p),je(t*2,x),We(i,g),je(i*2,_),l,a+t,o,s+i):w=r(We(i,g),je(i*2,_),We(t,p),je(t*2,x),o,s+i,l,a+t);else if(A){const P=$n.getPrimitive();ce(t,d,P),P.applyMatrix4(e);const S=sn(i),M=$e(i,g);ce(S,m,Xi),ce(M,m,qi);const C=P.intersectsBox(Xi),U=P.intersectsBox(qi);w=C&&_n(t,S,n,e,r,a,s,l,o+1,P,!f)||U&&_n(t,M,n,e,r,a,s,l,o+1,P,!f),$n.releasePrimitive(P)}else{const P=sn(t),S=$e(t,p);ce(P,d,Za),ce(S,d,Ja);const M=u.intersectsBox(Za),C=u.intersectsBox(Ja);if(M&&C)w=_n(i,P,e,n,r,s,a,o,l+1,u,f)||_n(i,S,e,n,r,s,a,o,l+1,u,f);else if(M)if(b)w=_n(i,P,e,n,r,s,a,o,l+1,u,f);else{const U=$n.getPrimitive();U.copy(Za).applyMatrix4(e);const L=sn(i),B=$e(i,g);ce(L,m,Xi),ce(B,m,qi);const G=U.intersectsBox(Xi),k=U.intersectsBox(qi);w=G&&_n(P,L,n,e,r,a,s,l,o+1,U,!f)||k&&_n(P,B,n,e,r,a,s,l,o+1,U,!f),$n.releasePrimitive(U)}else if(C)if(b)w=_n(i,S,e,n,r,s,a,o,l+1,u,f);else{const U=$n.getPrimitive();U.copy(Ja).applyMatrix4(e);const L=sn(i),B=$e(i,g);ce(L,m,Xi),ce(B,m,qi);const G=U.intersectsBox(Xi),k=U.intersectsBox(qi);w=G&&_n(S,L,n,e,r,a,s,l,o+1,U,!f)||k&&_n(S,B,n,e,r,a,s,l,o+1,U,!f),$n.releasePrimitive(U)}}return w}const As=new Be,Hc=new Oe,Y2={strategy:X0,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class _l{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:r.map(l=>l.slice()),index:a?a.array.slice():null,indirectBuffer:s?s.slice():null}:o={roots:r,index:a?a.array:null,indirectBuffer:s},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:a}=t,o=new _l(e,{...n,[Wa]:!0});if(o._roots=s,o._indirectBuffer=a||null,n.setIndex){const l=e.getIndex();if(l===null){const u=new ue(t.index,1,!1);e.setIndex(u)}else l.array!==r&&(l.array.set(r),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...Y2,[Wa]:!1},e),e.useSharedArrayBuffer&&!X2())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Wa]||(l2(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Oe))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?F2:S2)(this,t)}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);a(0);function a(o,l=0){const u=o*2,f=s[u+15]===ra;if(f){const h=r[o+6],c=s[u+14];t(l,f,new Float32Array(n,o*4,6),h,c)}else{const h=o+Qn/4,c=r[o+6],m=r[o+7];t(l,f,new Float32Array(n,o*4,6),m)||(a(h,l+1),a(c,l+1))}}}raycast(t,e=xn,n=0,r=1/0){const s=this._roots,a=this.geometry,o=[],l=e.isMaterial,u=Array.isArray(e),f=a.groups,h=l?e.side:e,c=this.indirect?N2:w2;for(let m=0,g=s.length;m<g;m++){const _=u?e[f[m].materialIndex].side:h,d=o.length;if(c(this,m,_,t,o,n,r),u){const p=f[m].materialIndex;for(let x=d,y=o.length;x<y;x++)o[x].face.materialIndex=p}}return o}raycastFirst(t,e=xn,n=0,r=1/0){const s=this._roots,a=this.geometry,o=e.isMaterial,l=Array.isArray(e);let u=null;const f=a.groups,h=o?e.side:e,c=this.indirect?B2:R2;for(let m=0,g=s.length;m<g;m++){const _=l?e[f[m].materialIndex].side:h,d=c(this,m,_,t,n,r);d!=null&&(u==null||d.distance<u.distance)&&(u=d,l&&(d.face.materialIndex=f[m].materialIndex))}return u}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?z2:C2;for(let a=0,o=r.length;a<o&&(n=s(this,a,t,e),!n);a++);return n}shapecast(t){const e=an.getPrimitive(),n=this.indirect?E2:M2;let{boundsTraverseOrder:r,intersectsBounds:s,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const h=a;a=(c,m,g,_,d)=>h(c,m,g,_,d)?!0:n(c,m,this,o,g,_,e)}else a||(o?a=(h,c,m,g)=>n(h,c,this,o,m,g,e):a=(h,c,m)=>m);let l=!1,u=0;const f=this._roots;for(let h=0,c=f.length;h<c;h++){const m=f[h];if(l=p2(this,h,s,a,r,u),l)break;u+=m.byteLength}return an.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const a=an.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?g=>{const _=this.resolveTriangleIndex(g);me(a,_*3,o,l)}:g=>{me(a,g*3,o,l)},f=an.getPrimitive(),h=t.geometry.index,c=t.geometry.attributes.position,m=t.indirect?g=>{const _=t.resolveTriangleIndex(g);me(f,_*3,h,c)}:g=>{me(f,g*3,h,c)};if(s){const g=(_,d,p,x,y,v,b,A)=>{for(let w=p,P=p+x;w<P;w++){m(w),f.a.applyMatrix4(e),f.b.applyMatrix4(e),f.c.applyMatrix4(e),f.needsUpdate=!0;for(let S=_,M=_+d;S<M;S++)if(u(S),a.needsUpdate=!0,s(a,f,S,w,y,v,b,A))return!0}return!1};if(r){const _=r;r=function(d,p,x,y,v,b,A,w){return _(d,p,x,y,v,b,A,w)?!0:g(d,p,x,y,v,b,A,w)}}else r=g}return q2(this,t,e,r)}intersectsBox(t,e){return As.set(t.min,t.max,e),As.needsUpdate=!0,this.shapecast({intersectsBounds:n=>As.intersectsBox(n),intersectsTriangle:n=>As.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,a=1/0){return(this.indirect?W2:U2)(this,t,e,n,r,s,a)}closestPointToPoint(t,e={},n=0,r=1/0){return m2(this,t,e,n,r)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ce(0,new Float32Array(n),Hc),t.union(Hc)}),t}}function j2(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function $2(i){switch(i){case 1:return fr;case 2:return Qs;case 3:return Zt;case 4:return Zt}}function kc(i){switch(i){case 1:return Js;case 2:return zr;case 3:return dr;case 4:return dr}}class Q0 extends ln{constructor(){super(),this.minFilter=Bt,this.magFilter=Bt,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){const e=this.overrideItemSize,n=t.itemSize,r=t.count;if(e!==null){if(n*r%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=r*n/e}const s=t.itemSize,a=t.count,o=t.normalized,l=t.array.constructor,u=l.BYTES_PER_ELEMENT;let f=this._forcedType,h=s;if(f===null)switch(l){case Float32Array:f=ne;break;case Uint8Array:case Uint16Array:case Uint32Array:f=on;break;case Int8Array:case Int16Array:case Int32Array:f=ir;break}let c,m,g,_,d=j2(s);switch(f){case ne:g=1,m=$2(s),o&&u===1?(_=l,d+="8",l===Uint8Array?c=cn:(c=Ws,d+="_SNORM")):(_=Float32Array,d+="32F",c=ne);break;case ir:d+=u*8+"I",g=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=kc(s),u===1?(_=Int8Array,c=Ws):u===2?(_=Int16Array,c=rl):(_=Int32Array,c=ir);break;case on:d+=u*8+"UI",g=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=kc(s),u===1?(_=Uint8Array,c=cn):u===2?(_=Uint16Array,c=cr):(_=Uint32Array,c=on);break}h===3&&(m===Zt||m===dr)&&(h=4);const p=Math.ceil(Math.sqrt(a))||1,x=h*p*p,y=new _(x),v=t.normalized;t.normalized=!1;for(let b=0;b<a;b++){const A=h*b;y[A]=t.getX(b)/g,s>=2&&(y[A+1]=t.getY(b)/g),s>=3&&(y[A+2]=t.getZ(b)/g,h===4&&(y[A+3]=1)),s>=4&&(y[A+3]=t.getW(b)/g)}t.normalized=v,this.internalFormat=d,this.format=m,this.type=c,this.image.width=p,this.image.height=p,this.image.data=y,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=r}}class tu extends Q0{constructor(){super(),this._forcedType=on}}class eu extends Q0{constructor(){super(),this._forcedType=ne}}class K2{constructor(){this.index=new tu,this.position=new eu,this.bvhBounds=new ln,this.bvhContents=new ln,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){const{geometry:e}=t;if(J2(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){const n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{const r=j0(Y0(e));this._cachedIndexAttr=new ue(r,1,!1)}Z2(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){const{index:t,position:e,bvhBounds:n,bvhContents:r}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),r&&r.dispose()}}function Z2(i,t,e){const n=e.array,r=i.index?i.index.array:null;for(let s=0,a=t.length;s<a;s++){const o=3*s,l=3*t[s];for(let u=0;u<3;u++)n[o+u]=r?r[l+u]:l+u}}function J2(i,t,e){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const r=n[0],s=new Uint16Array(r),a=new Uint32Array(r),o=new Float32Array(r),l=r.byteLength/Qn,u=2*Math.ceil(Math.sqrt(l/2)),f=new Float32Array(4*u*u),h=Math.ceil(Math.sqrt(l)),c=new Uint32Array(2*h*h);for(let m=0;m<l;m++){const g=m*Qn/4,_=g*2,d=g;for(let p=0;p<3;p++)f[8*m+0+p]=o[d+0+p],f[8*m+4+p]=o[d+3+p];if(Ue(_,s)){const p=je(_,s),x=We(g,a),y=4294901760|p;c[m*2+0]=y,c[m*2+1]=x}else{const p=4*$e(g,a)/Qn,x=pl(g,a);c[m*2+0]=x,c[m*2+1]=p}}t.image.data=f,t.image.width=u,t.image.height=u,t.format=Zt,t.type=ne,t.internalFormat="RGBA32F",t.minFilter=Bt,t.magFilter=Bt,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=c,e.image.width=h,e.image.height=h,e.format=zr,e.type=on,e.internalFormat="RG32UI",e.minFilter=Bt,e.magFilter=Bt,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}const Q2=`

// A stack of uint32 indices can can store the indices for
// a perfectly balanced tree with a depth up to 31. Lower stack
// depth gets higher performance.
//
// However not all trees are balanced. Best value to set this to
// is the trees max depth.
#ifndef BVH_STACK_DEPTH
#define BVH_STACK_DEPTH 60
#endif

#ifndef INFINITY
#define INFINITY 1e20
#endif

// Utilities
uvec4 uTexelFetch1D( usampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

ivec4 iTexelFetch1D( isampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 texelFetch1D( sampler2D tex, uint index ) {

	uint width = uint( textureSize( tex, 0 ).x );
	uvec2 uv;
	uv.x = index % width;
	uv.y = index / width;

	return texelFetch( tex, ivec2( uv ), 0 );

}

vec4 textureSampleBarycoord( sampler2D tex, vec3 barycoord, uvec3 faceIndices ) {

	return
		barycoord.x * texelFetch1D( tex, faceIndices.x ) +
		barycoord.y * texelFetch1D( tex, faceIndices.y ) +
		barycoord.z * texelFetch1D( tex, faceIndices.z );

}

void ndcToCameraRay(
	vec2 coord, mat4 cameraWorld, mat4 invProjectionMatrix,
	out vec3 rayOrigin, out vec3 rayDirection
) {

	// get camera look direction and near plane for camera clipping
	vec4 lookDirection = cameraWorld * vec4( 0.0, 0.0, - 1.0, 0.0 );
	vec4 nearVector = invProjectionMatrix * vec4( 0.0, 0.0, - 1.0, 1.0 );
	float near = abs( nearVector.z / nearVector.w );

	// get the camera direction and position from camera matrices
	vec4 origin = cameraWorld * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec4 direction = invProjectionMatrix * vec4( coord, 0.5, 1.0 );
	direction /= direction.w;
	direction = cameraWorld * direction - origin;

	// slide the origin along the ray until it sits at the near clip plane position
	origin.xyz += direction.xyz * near / dot( direction, lookDirection );

	rayOrigin = origin.xyz;
	rayDirection = direction.xyz;

}
`,t3=`

#ifndef TRI_INTERSECT_EPSILON
#define TRI_INTERSECT_EPSILON 1e-5
#endif

// Raycasting
bool intersectsBounds( vec3 rayOrigin, vec3 rayDirection, vec3 boundsMin, vec3 boundsMax, out float dist ) {

	// https://www.reddit.com/r/opengl/comments/8ntzz5/fast_glsl_ray_box_intersection/
	// https://tavianator.com/2011/ray_box.html
	vec3 invDir = 1.0 / rayDirection;

	// find intersection distances for each plane
	vec3 tMinPlane = invDir * ( boundsMin - rayOrigin );
	vec3 tMaxPlane = invDir * ( boundsMax - rayOrigin );

	// get the min and max distances from each intersection
	vec3 tMinHit = min( tMaxPlane, tMinPlane );
	vec3 tMaxHit = max( tMaxPlane, tMinPlane );

	// get the furthest hit distance
	vec2 t = max( tMinHit.xx, tMinHit.yz );
	float t0 = max( t.x, t.y );

	// get the minimum hit distance
	t = min( tMaxHit.xx, tMaxHit.yz );
	float t1 = min( t.x, t.y );

	// set distance to 0.0 if the ray starts inside the box
	dist = max( t0, 0.0 );

	return t1 >= dist;

}

bool intersectsTriangle(
	vec3 rayOrigin, vec3 rayDirection, vec3 a, vec3 b, vec3 c,
	out vec3 barycoord, out vec3 norm, out float dist, out float side
) {

	// https://stackoverflow.com/questions/42740765/intersection-between-line-and-triangle-in-3d
	vec3 edge1 = b - a;
	vec3 edge2 = c - a;
	norm = cross( edge1, edge2 );

	float det = - dot( rayDirection, norm );
	float invdet = 1.0 / det;

	vec3 AO = rayOrigin - a;
	vec3 DAO = cross( AO, rayDirection );

	vec4 uvt;
	uvt.x = dot( edge2, DAO ) * invdet;
	uvt.y = - dot( edge1, DAO ) * invdet;
	uvt.z = dot( AO, norm ) * invdet;
	uvt.w = 1.0 - uvt.x - uvt.y;

	// set the hit information
	barycoord = uvt.wxy; // arranged in A, B, C order
	dist = uvt.z;
	side = sign( det );
	norm = side * normalize( norm );

	// add an epsilon to avoid misses between triangles
	uvt += vec4( TRI_INTERSECT_EPSILON );

	return all( greaterThanEqual( uvt, vec4( 0.0 ) ) );

}

bool intersectTriangles(
	// geometry info and triangle range
	sampler2D positionAttr, usampler2D indexAttr, uint offset, uint count,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// outputs
	inout float minDistance, inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	bool found = false;
	vec3 localBarycoord, localNormal;
	float localDist, localSide;
	for ( uint i = offset, l = offset + count; i < l; i ++ ) {

		uvec3 indices = uTexelFetch1D( indexAttr, i ).xyz;
		vec3 a = texelFetch1D( positionAttr, indices.x ).rgb;
		vec3 b = texelFetch1D( positionAttr, indices.y ).rgb;
		vec3 c = texelFetch1D( positionAttr, indices.z ).rgb;

		if (
			intersectsTriangle( rayOrigin, rayDirection, a, b, c, localBarycoord, localNormal, localDist, localSide )
			&& localDist < minDistance
		) {

			found = true;
			minDistance = localDist;

			faceIndices = uvec4( indices.xyz, i );
			faceNormal = localNormal;

			side = localSide;
			barycoord = localBarycoord;
			dist = localDist;

		}

	}

	return found;

}

bool intersectsBVHNodeBounds( vec3 rayOrigin, vec3 rayDirection, sampler2D bvhBounds, uint currNodeIndex, out float dist ) {

	uint cni2 = currNodeIndex * 2u;
	vec3 boundsMin = texelFetch1D( bvhBounds, cni2 ).xyz;
	vec3 boundsMax = texelFetch1D( bvhBounds, cni2 + 1u ).xyz;
	return intersectsBounds( rayOrigin, rayDirection, boundsMin, boundsMax, dist );

}

// use a macro to hide the fact that we need to expand the struct into separate fields
#define	bvhIntersectFirstHit(		bvh,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)	_bvhIntersectFirstHit(		bvh.position, bvh.index, bvh.bvhBounds, bvh.bvhContents,		rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist	)

bool _bvhIntersectFirstHit(
	// bvh info
	sampler2D bvh_position, usampler2D bvh_index, sampler2D bvh_bvhBounds, usampler2D bvh_bvhContents,

	// ray
	vec3 rayOrigin, vec3 rayDirection,

	// output variables split into separate variables due to output precision
	inout uvec4 faceIndices, inout vec3 faceNormal, inout vec3 barycoord,
	inout float side, inout float dist
) {

	// stack needs to be twice as long as the deepest tree we expect because
	// we push both the left and right child onto the stack every traversal
	int ptr = 0;
	uint stack[ BVH_STACK_DEPTH ];
	stack[ 0 ] = 0u;

	float triangleDistance = INFINITY;
	bool found = false;
	while ( ptr > - 1 && ptr < BVH_STACK_DEPTH ) {

		uint currNodeIndex = stack[ ptr ];
		ptr --;

		// check if we intersect the current bounds
		float boundsHitDistance;
		if (
			! intersectsBVHNodeBounds( rayOrigin, rayDirection, bvh_bvhBounds, currNodeIndex, boundsHitDistance )
			|| boundsHitDistance > triangleDistance
		) {

			continue;

		}

		uvec2 boundsInfo = uTexelFetch1D( bvh_bvhContents, currNodeIndex ).xy;
		bool isLeaf = bool( boundsInfo.x & 0xffff0000u );

		if ( isLeaf ) {

			uint count = boundsInfo.x & 0x0000ffffu;
			uint offset = boundsInfo.y;

			found = intersectTriangles(
				bvh_position, bvh_index, offset, count,
				rayOrigin, rayDirection, triangleDistance,
				faceIndices, faceNormal, barycoord, side, dist
			) || found;

		} else {

			uint leftIndex = currNodeIndex + 1u;
			uint splitAxis = boundsInfo.x & 0x0000ffffu;
			uint rightIndex = boundsInfo.y;

			bool leftToRight = rayDirection[ splitAxis ] >= 0.0;
			uint c1 = leftToRight ? leftIndex : rightIndex;
			uint c2 = leftToRight ? rightIndex : leftIndex;

			// set c2 in the stack so we traverse it later. We need to keep track of a pointer in
			// the stack while we traverse. The second pointer added is the one that will be
			// traversed first
			ptr ++;
			stack[ ptr ] = c2;

			ptr ++;
			stack[ ptr ] = c1;

		}

	}

	return found;

}
`,e3=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function nu(i,t,e=0){if(i.isInterleavedBufferAttribute){const n=i.itemSize;for(let r=0,s=i.count;r<s;r++){const a=r+e;t.setX(a,i.getX(r)),n>=2&&t.setY(a,i.getY(r)),n>=3&&t.setZ(a,i.getZ(r)),n>=4&&t.setW(a,i.getW(r))}}else{const n=t.array,r=n.constructor,s=n.BYTES_PER_ELEMENT*i.itemSize*e;new r(n.buffer,s,i.array.length).set(i.array)}}function Fr(i,t=null){const e=i.array.constructor,n=i.normalized,r=i.itemSize,s=t===null?i.count:t;return new ue(new e(r*s),r,n)}function Zi(i,t){if(!i&&!t)return!0;if(!!i!=!!t)return!1;const e=i.count===t.count,n=i.normalized===t.normalized,r=i.array.constructor===t.array.constructor,s=i.itemSize===t.itemSize;return!(!e||!n||!r||!s)}function n3(i){const t=i[0].index!==null,e=new Set(Object.keys(i[0].attributes));if(!i[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let n=0;n<i.length;++n){const r=i[n];let s=0;if(t!==(r.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const a in r.attributes){if(!e.has(a))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+a+'" attribute exists among all geometries, or in none of them.');s++}if(s!==e.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function i3(i){let t=0;for(let e=0,n=i.length;e<n;e++)t+=i[e].getIndex().count;return t}function r3(i){let t=0;for(let e=0,n=i.length;e<n;e++)t+=i[e].getAttribute("position").count;return t}function s3(i,t,e){i.index&&i.index.count!==t&&i.setIndex(null);const n=i.attributes;for(const r in n)n[r].count!==e&&i.deleteAttribute(r)}function a3(i,t={},e=new Te){const{useGroups:n=!1,forceUpdate:r=!1,skipAssigningAttributes:s=[],overwriteIndex:a=!0}=t;n3(i);const o=i[0].index!==null,l=o?i3(i):-1,u=r3(i);if(s3(e,l,u),n){let h=0;for(let c=0,m=i.length;c<m;c++){const g=i[c];let _;o?_=g.getIndex().count:_=g.getAttribute("position").count,e.addGroup(h,_,c),h+=_}}if(o){let h=!1;if(e.index||(e.setIndex(new ue(new Uint32Array(l),1,!1)),h=!0),h||a){let c=0,m=0;const g=e.getIndex();for(let _=0,d=i.length;_<d;_++){const p=i[_],x=p.getIndex();if(!(!r&&!h&&s[_]))for(let v=0;v<x.count;++v)g.setX(c+v,x.getX(v)+m);c+=x.count,m+=p.getAttribute("position").count}}}const f=Object.keys(i[0].attributes);for(let h=0,c=f.length;h<c;h++){let m=!1;const g=f[h];if(!e.getAttribute(g)){const p=i[0].getAttribute(g);e.setAttribute(g,Fr(p,u)),m=!0}let _=0;const d=e.getAttribute(g);for(let p=0,x=i.length;p<x;p++){const y=i[p],v=!r&&!m&&s[p],b=y.getAttribute(g);v||nu(b,d,_),_+=b.count}}}function o3(i,t,e){const n=i.index,s=i.attributes.position.count,a=n?n.count:s;let o=i.groups;o.length===0&&(o=[{count:a,start:0,materialIndex:0}]);let l=i.getAttribute("materialIndex");if(!l||l.count!==s){let f;e.length<=255?f=new Uint8Array(s):f=new Uint16Array(s),l=new ue(f,1,!1),i.deleteAttribute("materialIndex"),i.setAttribute("materialIndex",l)}const u=l.array;for(let f=0;f<o.length;f++){const h=o[f],c=h.start,m=h.count,g=Math.min(m,a-c),_=Array.isArray(t)?t[h.materialIndex]:t,d=e.indexOf(_);for(let p=0;p<g;p++){let x=c+p;n&&(x=n.getX(x)),u[x]=d}}}function l3(i,t){if(!i.index){const e=i.attributes.position.count,n=new Array(e);for(let r=0;r<e;r++)n[r]=r;i.setIndex(n)}if(!i.attributes.normal&&t&&t.includes("normal")&&i.computeVertexNormals(),!i.attributes.uv&&t&&t.includes("uv")){const e=i.attributes.position.count;i.setAttribute("uv",new ue(new Float32Array(e*2),2,!1))}if(!i.attributes.uv2&&t&&t.includes("uv2")){const e=i.attributes.position.count;i.setAttribute("uv2",new ue(new Float32Array(e*2),2,!1))}if(!i.attributes.tangent&&t&&t.includes("tangent"))if(i.attributes.uv&&i.attributes.normal)i.computeTangents();else{const e=i.attributes.position.count;i.setAttribute("tangent",new ue(new Float32Array(e*4),4,!1))}if(!i.attributes.color&&t&&t.includes("color")){const e=i.attributes.position.count,n=new Float32Array(e*4);n.fill(1),i.setAttribute("color",new ue(n,4))}}function vl(i){let t=0;if(i.byteLength!==0){const e=new Uint8Array(i);for(let n=0;n<i.byteLength;n++){const r=e[n];t=(t<<5)-t+r,t|=0}}return t}function Vc(i){let t=i.uuid;const e=Object.values(i.attributes);i.index&&(e.push(i.index),t+=`index|${i.index.version}`);const n=Object.keys(e).sort();for(const r of n){const s=e[r];t+=`${r}_${s.version}|`}return t}function Gc(i){const t=i.skeleton;return t?(t.boneTexture||t.computeBoneTexture(),`${vl(t.boneTexture.image.data.buffer)}_${t.boneTexture.uuid}`):null}class c3{constructor(t=null){this.matrixWorld=new Ft,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,t!==null&&this.updateFrom(t)}updateFrom(t){const e=t.geometry,n=(e.index?e.index.count:e.attributes.position.count)/3;this.matrixWorld.copy(t.matrixWorld),this.geometryHash=Vc(e),this.primitiveCount=n,this.skeletonHash=Gc(t)}didChange(t){const e=t.geometry,n=(e.index?e.index.count:e.attributes.position.count)/3;return!(this.matrixWorld.equals(t.matrixWorld)&&this.geometryHash===Vc(e)&&this.skeletonHash===Gc(t)&&this.primitiveCount===n)}}const pi=new D,mi=new D,gi=new D,Wc=new Kt,Rs=new D,to=new D,Xc=new Kt,qc=new Kt,Cs=new Ft,Yc=new Ft;function jc(i,t,e){const n=i.skeleton,r=i.geometry,s=n.bones,a=n.boneInverses;Xc.fromBufferAttribute(r.attributes.skinIndex,t),qc.fromBufferAttribute(r.attributes.skinWeight,t),Cs.elements.fill(0);for(let o=0;o<4;o++){const l=qc.getComponent(o);if(l!==0){const u=Xc.getComponent(o);Yc.multiplyMatrices(s[u].matrixWorld,a[u]),u3(Cs,Yc,l)}}return Cs.multiply(i.bindMatrix).premultiply(i.bindMatrixInverse),e.transformDirection(Cs),e}function eo(i,t,e,n,r){Rs.set(0,0,0);for(let s=0,a=i.length;s<a;s++){const o=t[s],l=i[s];o!==0&&(to.fromBufferAttribute(l,n),e?Rs.addScaledVector(to,o):Rs.addScaledVector(to.sub(r),o))}r.add(Rs)}function u3(i,t,e){const n=i.elements,r=t.elements;for(let s=0,a=r.length;s<a;s++)n[s]+=r[s]*e}function h3(i){const{index:t,attributes:e}=i;if(t)for(let n=0,r=t.count;n<r;n+=3){const s=t.getX(n),a=t.getX(n+2);t.setX(n,a),t.setX(n+2,s)}else for(const n in e){const r=e[n],s=r.itemSize;for(let a=0,o=r.count;a<o;a+=3)for(let l=0;l<s;l++){const u=r.getComponent(a,l),f=r.getComponent(a+2,l);r.setComponent(a,l,f),r.setComponent(a+2,l,u)}}return i}function f3(i,t={},e=new Te){t={applyWorldTransforms:!0,attributes:[],...t};const n=i.geometry,r=t.applyWorldTransforms,s=t.attributes.includes("normal"),a=t.attributes.includes("tangent"),o=n.attributes,l=e.attributes;for(const x in e.attributes)(!t.attributes.includes(x)||!(x in n.attributes))&&e.deleteAttribute(x);!e.index&&n.index&&(e.index=n.index.clone()),l.position||e.setAttribute("position",Fr(o.position)),s&&!l.normal&&o.normal&&e.setAttribute("normal",Fr(o.normal)),a&&!l.tangent&&o.tangent&&e.setAttribute("tangent",Fr(o.tangent)),Zi(n.index,e.index),Zi(o.position,l.position),s&&Zi(o.normal,l.normal),a&&Zi(o.tangent,l.tangent);const u=o.position,f=s?o.normal:null,h=a?o.tangent:null,c=n.morphAttributes.position,m=n.morphAttributes.normal,g=n.morphAttributes.tangent,_=n.morphTargetsRelative,d=i.morphTargetInfluences,p=new Ct;p.getNormalMatrix(i.matrixWorld),n.index&&e.index.array.set(n.index.array);for(let x=0,y=o.position.count;x<y;x++)pi.fromBufferAttribute(u,x),f&&mi.fromBufferAttribute(f,x),h&&(Wc.fromBufferAttribute(h,x),gi.fromBufferAttribute(h,x)),d&&(c&&eo(c,d,_,x,pi),m&&eo(m,d,_,x,mi),g&&eo(g,d,_,x,gi)),i.isSkinnedMesh&&(i.applyBoneTransform(x,pi),f&&jc(i,x,mi),h&&jc(i,x,gi)),r&&pi.applyMatrix4(i.matrixWorld),l.position.setXYZ(x,pi.x,pi.y,pi.z),f&&(r&&mi.applyNormalMatrix(p),l.normal.setXYZ(x,mi.x,mi.y,mi.z)),h&&(r&&gi.transformDirection(i.matrixWorld),l.tangent.setXYZW(x,gi.x,gi.y,gi.z,Wc.w));for(const x in t.attributes){const y=t.attributes[x];y==="position"||y==="tangent"||y==="normal"||!(y in o)||(l[y]||e.setAttribute(y,Fr(o[y])),Zi(o[y],l[y]),nu(o[y],l[y]))}return i.matrixWorld.determinant()<0&&h3(e),e}class d3 extends Te{constructor(){super(),this.version=0,this.hash=null,this._diff=new c3}isCompatible(t,e){const n=t.geometry;for(let r=0;r<e.length;r++){const s=e[r],a=n.attributes[s],o=this.attributes[s];if(a&&!Zi(a,o))return!1}return!0}updateFrom(t,e){const n=this._diff;return n.didChange(t)?(f3(t,e,this),n.updateFrom(t),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}const el=0,iu=1,ru=2;function p3(i,t){for(let e=0,n=i.length;e<n;e++)i[e].traverseVisible(s=>{s.isMesh&&t(s)})}function m3(i){const t=[];for(let e=0,n=i.length;e<n;e++){const r=i[e];Array.isArray(r.material)?t.push(...r.material):t.push(r.material)}return t}function g3(i,t,e){if(i.length===0){t.setIndex(null);const n=t.attributes;for(const r in n)t.deleteAttribute(r);for(const r in e.attributes)t.setAttribute(e.attributes[r],new ue(new Float32Array(0),4,!1))}else a3(i,e,t);for(const n in t.attributes)t.attributes[n].needsUpdate=!0}class _3{constructor(t){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(t||[])}_getDummyMesh(){if(!this._dummyMesh){const t=new ll,e=new Te;e.setAttribute("position",new ue(new Float32Array(9),3)),this._dummyMesh=new Ae(e,t)}return this._dummyMesh}_getMeshes(){const t=[];return p3(this.objects,e=>{t.push(e)}),t.sort((e,n)=>e.uuid>n.uuid?1:e.uuid<n.uuid?-1:0),t.length===0&&t.push(this._getDummyMesh()),t}_updateIntermediateGeometries(){const{_intermediateGeometry:t}=this,e=this._getMeshes(),n=new Set(t.keys()),r={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let s=0,a=e.length;s<a;s++){const o=e[s],l=o.uuid;n.delete(l);let u=t.get(l);(!u||!u.isCompatible(o,this.attributes))&&(u&&u.dispose(),u=new d3,t.set(l,u)),u.updateFrom(o,r)&&this.generateMissingAttributes&&l3(u,this.attributes)}n.forEach(s=>{t.delete(s)})}setObjects(t){Array.isArray(t)?this.objects=[...t]:this.objects=[t]}generate(t=new Te){const{useGroups:e,overwriteIndex:n,_intermediateGeometry:r,_geometryMergeSets:s}=this,a=this._getMeshes(),o=[],l=[],u=s.get(t)||[];this._updateIntermediateGeometries();let f=!1;a.length!==u.length&&(f=!0);for(let c=0,m=a.length;c<m;c++){const g=a[c],_=r.get(g.uuid);l.push(_);const d=u[c];!d||d.uuid!==_.uuid?(o.push(!1),f=!0):d.version!==_.version?o.push(!1):o.push(!0)}g3(l,t,{useGroups:e,forceUpdate:f,skipAssigningAttributes:o,overwriteIndex:n}),f&&t.dispose(),s.set(t,l.map(c=>({version:c.version,uuid:c.uuid})));let h=el;return f?h=ru:o.includes(!1)&&(h=iu),{changeType:h,materials:m3(a),geometry:t}}}function v3(i){const t=new Set;for(let e=0,n=i.length;e<n;e++){const r=i[e];for(const s in r){const a=r[s];a&&a.isTexture&&t.add(a)}}return Array.from(t)}function x3(i){const t=[],e=new Set;for(let r=0,s=i.length;r<s;r++)i[r].traverse(a=>{a.visible&&(a.isRectAreaLight||a.isSpotLight||a.isPointLight||a.isDirectionalLight)&&(t.push(a),a.iesMap&&e.add(a.iesMap))});const n=Array.from(e).sort((r,s)=>r.uuid<s.uuid?1:r.uuid>s.uuid?-1:0);return{lights:t,iesTextures:n}}class y3{get initialized(){return!!this.bvh}constructor(t){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new Te,this.staticGeometryGenerator=new _3(t),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1}setObjects(t){this.staticGeometryGenerator.setObjects(t)}setBVHWorker(t){this._bvhWorker=t}async generateAsync(t=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(t)))),this._pendingGenerate;{this._buildAsync=!0;const e=this.generate(t);return this._buildAsync=!1,e.bvh=this.bvh=await e.bvh,e}}generate(t=null){const{staticGeometryGenerator:e,geometry:n,attributes:r}=this,s=e.objects;e.attributes=r,s.forEach(h=>{h.traverse(c=>{c.isSkinnedMesh&&c.skeleton&&c.skeleton.update()})});const a=e.generate(n),o=a.materials,l=v3(o),{lights:u,iesTextures:f}=x3(s);if(a.changeType!==el&&o3(n,o,o),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(a.changeType===ru){const h={strategy:q0,maxLeafTris:1,indirect:!0,onProgress:t,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(n,h):this.bvh=new _l(n,h)}else a.changeType===iu&&this.bvh.refit()}return{bvhChanged:a.changeType!==el,bvh:this.bvh,lights:u,iesTextures:f,geometry:n,materials:o,textures:l,objects:s}}}const M3=new B0(-1,1,1,-1,0,1);class S3 extends Te{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}}const T3=new S3;class gr{constructor(t){this._mesh=new Ae(T3,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,M3)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class xl extends un{set needsUpdate(t){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(t){super(t);for(const e in this.uniforms)Object.defineProperty(this,e,{get(){return this.uniforms[e].value},set(n){this.uniforms[e].value=n}})}setDefine(t,e=void 0){if(e==null){if(t in this.defines)return delete this.defines[t],this.needsUpdate=!0,!0}else if(this.defines[t]!==e)return this.defines[t]=e,this.needsUpdate=!0,!0;return!1}}class b3 extends xl{constructor(t){super({blending:Ke,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				uniform float opacity;

				uniform sampler2D target1;
				uniform sampler2D target2;

				varying vec2 vUv;

				void main() {

					vec4 color1 = texture2D( target1, vUv );
					vec4 color2 = texture2D( target2, vUv );

					float invOpacity = 1.0 - opacity;
					float totalAlpha = color1.a * invOpacity + color2.a * opacity;

					if ( color1.a != 0.0 || color2.a != 0.0 ) {

						gl_FragColor.rgb = color1.rgb * ( invOpacity * color1.a / totalAlpha ) + color2.rgb * ( opacity * color2.a / totalAlpha );
						gl_FragColor.a = totalAlpha;

					} else {

						gl_FragColor = vec4( 0.0 );

					}

				}`}),this.setValues(t)}}function Ps(i=1){let t="uint";return i>1&&(t="uvec"+i),`
		${t} sobolReverseBits( ${t} x ) {

			x = ( ( ( x & 0xaaaaaaaau ) >> 1 ) | ( ( x & 0x55555555u ) << 1 ) );
			x = ( ( ( x & 0xccccccccu ) >> 2 ) | ( ( x & 0x33333333u ) << 2 ) );
			x = ( ( ( x & 0xf0f0f0f0u ) >> 4 ) | ( ( x & 0x0f0f0f0fu ) << 4 ) );
			x = ( ( ( x & 0xff00ff00u ) >> 8 ) | ( ( x & 0x00ff00ffu ) << 8 ) );
			return ( ( x >> 16 ) | ( x << 16 ) );

		}

		${t} sobolHashCombine( uint seed, ${t} v ) {

			return seed ^ ( v + ${t}( ( seed << 6 ) + ( seed >> 2 ) ) );

		}

		${t} sobolLaineKarrasPermutation( ${t} x, ${t} seed ) {

			x += seed;
			x ^= x * 0x6c50b47cu;
			x ^= x * 0xb82f1e52u;
			x ^= x * 0xc7afe638u;
			x ^= x * 0x8d22f6e6u;
			return x;

		}

		${t} nestedUniformScrambleBase2( ${t} x, ${t} seed ) {

			x = sobolLaineKarrasPermutation( x, seed );
			x = sobolReverseBits( x );
			return x;

		}
	`}function Ds(i=1){let t="uint",e="float",n="",r=".r",s="1u";return i>1&&(t="uvec"+i,e="vec"+i,n=i+"",i===2?(r=".rg",s="uvec2( 1u, 2u )"):i===3?(r=".rgb",s="uvec3( 1u, 2u, 3u )"):(r="",s="uvec4( 1u, 2u, 3u, 4u )")),`

		${e} sobol${n}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${e} sobol_pt = sobolGetTexturePoint( shuffled_index )${r};
			${t} result = ${t}( sobol_pt * 16777216.0 );

			${t} seed2 = sobolHashCombine( seed, ${s} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${e}( result >> 8 );

		}
	`}const su=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Ps(1)}
	${Ps(2)}
	${Ps(3)}
	${Ps(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,E3=`

	const uint SOBOL_DIRECTIONS_1[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0xa0000000u, 0xf0000000u,
		0x88000000u, 0xcc000000u, 0xaa000000u, 0xff000000u,
		0x80800000u, 0xc0c00000u, 0xa0a00000u, 0xf0f00000u,
		0x88880000u, 0xcccc0000u, 0xaaaa0000u, 0xffff0000u,
		0x80008000u, 0xc000c000u, 0xa000a000u, 0xf000f000u,
		0x88008800u, 0xcc00cc00u, 0xaa00aa00u, 0xff00ff00u,
		0x80808080u, 0xc0c0c0c0u, 0xa0a0a0a0u, 0xf0f0f0f0u,
		0x88888888u, 0xccccccccu, 0xaaaaaaaau, 0xffffffffu
	);

	const uint SOBOL_DIRECTIONS_2[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x60000000u, 0x90000000u,
		0xe8000000u, 0x5c000000u, 0x8e000000u, 0xc5000000u,
		0x68800000u, 0x9cc00000u, 0xee600000u, 0x55900000u,
		0x80680000u, 0xc09c0000u, 0x60ee0000u, 0x90550000u,
		0xe8808000u, 0x5cc0c000u, 0x8e606000u, 0xc5909000u,
		0x6868e800u, 0x9c9c5c00u, 0xeeee8e00u, 0x5555c500u,
		0x8000e880u, 0xc0005cc0u, 0x60008e60u, 0x9000c590u,
		0xe8006868u, 0x5c009c9cu, 0x8e00eeeeu, 0xc5005555u
	);

	const uint SOBOL_DIRECTIONS_3[ 32 ] = uint[ 32 ](
		0x80000000u, 0xc0000000u, 0x20000000u, 0x50000000u,
		0xf8000000u, 0x74000000u, 0xa2000000u, 0x93000000u,
		0xd8800000u, 0x25400000u, 0x59e00000u, 0xe6d00000u,
		0x78080000u, 0xb40c0000u, 0x82020000u, 0xc3050000u,
		0x208f8000u, 0x51474000u, 0xfbea2000u, 0x75d93000u,
		0xa0858800u, 0x914e5400u, 0xdbe79e00u, 0x25db6d00u,
		0x58800080u, 0xe54000c0u, 0x79e00020u, 0xb6d00050u,
		0x800800f8u, 0xc00c0074u, 0x200200a2u, 0x50050093u
	);

	const uint SOBOL_DIRECTIONS_4[ 32 ] = uint[ 32 ](
		0x80000000u, 0x40000000u, 0x20000000u, 0xb0000000u,
		0xf8000000u, 0xdc000000u, 0x7a000000u, 0x9d000000u,
		0x5a800000u, 0x2fc00000u, 0xa1600000u, 0xf0b00000u,
		0xda880000u, 0x6fc40000u, 0x81620000u, 0x40bb0000u,
		0x22878000u, 0xb3c9c000u, 0xfb65a000u, 0xddb2d000u,
		0x78022800u, 0x9c0b3c00u, 0x5a0fb600u, 0x2d0ddb00u,
		0xa2878080u, 0xf3c9c040u, 0xdb65a020u, 0x6db2d0b0u,
		0x800228f8u, 0x400b3cdcu, 0x200fb67au, 0xb00ddb9du
	);

	uint getMaskedSobol( uint index, uint directions[ 32 ] ) {

		uint X = 0u;
		for ( int bit = 0; bit < 32; bit ++ ) {

			uint mask = ( index >> bit ) & 1u;
			X ^= mask * directions[ bit ];

		}
		return X;

	}

	vec4 generateSobolPoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			return vec4( 0.0 );

		}

		// NOTE: this sobol "direction" is also available but we can't write out 5 components
		// uint x = index & 0x00ffffffu;
		uint x = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_1 ) ) & 0x00ffffffu;
		uint y = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_2 ) ) & 0x00ffffffu;
		uint z = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_3 ) ) & 0x00ffffffu;
		uint w = sobolReverseBits( getMaskedSobol( index, SOBOL_DIRECTIONS_4 ) ) & 0x00ffffffu;

		return vec4( x, y, z, w ) * SOBOL_FACTOR;

	}

`,w3=`

	// Seeds
	uniform sampler2D sobolTexture;
	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;

	uint sobolGetSeed( uint bounce, uint effect ) {

		return sobolHash(
			sobolHashCombine(
				sobolHashCombine(
					sobolHash( bounce ),
					sobolPixelIndex
				),
				effect
			)
		);

	}

	vec4 sobolGetTexturePoint( uint index ) {

		if ( index >= SOBOL_MAX_POINTS ) {

			index = index % SOBOL_MAX_POINTS;

		}

		uvec2 dim = uvec2( textureSize( sobolTexture, 0 ).xy );
		uint y = index / dim.x;
		uint x = index - y * dim.x;
		vec2 uv = vec2( x, y ) / vec2( dim );
		return texture( sobolTexture, uv );

	}

	${Ds(1)}
	${Ds(2)}
	${Ds(3)}
	${Ds(4)}

`;class A3 extends xl{constructor(){super({blending:Ke,uniforms:{resolution:{value:new ut}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${su}
				${E3}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class R3{generate(t,e=256){const n=new Ze(e,e,{type:ne,format:Zt,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),r=t.getRenderTarget();t.setRenderTarget(n);const s=new gr(new A3);return s.material.resolution.set(e,e),s.render(t),t.setRenderTarget(r),s.dispose(),n}}class C3 extends Ie{set bokehSize(t){this.fStop=this.getFocalLength()/t}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...t){super(...t),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(t,e){return super.copy(t,e),this.fStop=t.fStop,this.apertureBlades=t.apertureBlades,this.apertureRotation=t.apertureRotation,this.focusDistance=t.focusDistance,this.anamorphicRatio=t.anamorphicRatio,this}}class P3{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(t){t instanceof C3?(this.bokehSize=t.bokehSize,this.apertureBlades=t.apertureBlades,this.apertureRotation=t.apertureRotation,this.focusDistance=t.focusDistance,this.anamorphicRatio=t.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}function no(i){const t=new Uint16Array(i.length);for(let e=0,n=i.length;e<n;++e)t[e]=Fn.toHalfFloat(i[e]);return t}function $c(i,t,e=0,n=i.length){let r=e,s=e+n-1;for(;r<s;){const a=r+s>>1;i[a]<t?r=a+1:s=a}return r-e}function D3(i,t,e){return .2126*i+.7152*t+.0722*e}function I3(i,t=Le){const e=i.clone();e.source=new ol({...e.image});const{width:n,height:r,data:s}=e.image;let a=s;if(e.type!==t){t===Le?a=new Uint16Array(s.length):a=new Float32Array(s.length);let o;s instanceof Int8Array||s instanceof Int16Array||s instanceof Int32Array?o=2**(8*s.BYTES_PER_ELEMENT-1)-1:o=2**(8*s.BYTES_PER_ELEMENT)-1;for(let l=0,u=s.length;l<u;l++){let f=s[l];e.type===Le&&(f=Fn.fromHalfFloat(s[l])),e.type!==ne&&e.type!==Le&&(f/=o),t===Le&&(a[l]=Fn.toHalfFloat(f))}e.image.data=a,e.type=t}if(e.flipY){const o=a;a=a.slice();for(let l=0;l<r;l++)for(let u=0;u<n;u++){const f=r-l-1,h=4*(l*n+u),c=4*(f*n+u);a[c+0]=o[h+0],a[c+1]=o[h+1],a[c+2]=o[h+2],a[c+3]=o[h+3]}e.flipY=!1,e.image.data=a}return e}class L3{constructor(){const t=new ln(no(new Float32Array([0,0,0,0])),1,1);t.type=Le,t.format=Zt,t.minFilter=fe,t.magFilter=fe,t.wrapS=vn,t.wrapT=vn,t.generateMipmaps=!1,t.needsUpdate=!0;const e=new ln(no(new Float32Array([0,1])),1,2);e.type=Le,e.format=fr,e.minFilter=fe,e.magFilter=fe,e.generateMipmaps=!1,e.needsUpdate=!0;const n=new ln(no(new Float32Array([0,0,1,1])),2,2);n.type=Le,n.format=fr,n.minFilter=fe,n.magFilter=fe,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=t,this.marginalWeights=e,this.conditionalWeights=n,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(t){const e=I3(t);e.wrapS=vn,e.wrapT=Fe;const{width:n,height:r,data:s}=e.image,a=new Float32Array(n*r),o=new Float32Array(n*r),l=new Float32Array(r),u=new Float32Array(r);let f=0,h=0;for(let d=0;d<r;d++){let p=0;for(let x=0;x<n;x++){const y=d*n+x,v=Fn.fromHalfFloat(s[4*y+0]),b=Fn.fromHalfFloat(s[4*y+1]),A=Fn.fromHalfFloat(s[4*y+2]),w=D3(v,b,A);p+=w,f+=w,a[y]=w,o[y]=p}if(p!==0)for(let x=d*n,y=d*n+n;x<y;x++)a[x]/=p,o[x]/=p;h+=p,l[d]=p,u[d]=h}if(h!==0)for(let d=0,p=l.length;d<p;d++)l[d]/=h,u[d]/=h;const c=new Uint16Array(r),m=new Uint16Array(n*r);for(let d=0;d<r;d++){const p=(d+1)/r,x=$c(u,p);c[d]=Fn.toHalfFloat((x+.5)/r)}for(let d=0;d<r;d++)for(let p=0;p<n;p++){const x=d*n+p,y=(p+1)/n,v=$c(o,y,d*n,n);m[x]=Fn.toHalfFloat((v+.5)/n)}this.dispose();const{marginalWeights:g,conditionalWeights:_}=this;g.image={width:r,height:1,data:c},g.needsUpdate=!0,_.image={width:n,height:r,data:m},_.needsUpdate=!0,this.totalSum=f,this.map=e}}const io=6,U3=0,F3=1,N3=2,O3=3,B3=4,gn=new D,Ge=new D,Kc=new Ft,Yi=new ti,Zc=new D,ji=new D,z3=new D(0,1,0);class H3{constructor(){const t=new ln(new Float32Array(4),1,1);t.format=Zt,t.type=ne,t.wrapS=Fe,t.wrapT=Fe,t.generateMipmaps=!1,t.minFilter=Bt,t.magFilter=Bt,this.tex=t,this.count=0}updateFrom(t,e=[]){const n=this.tex,r=Math.max(t.length*io,1),s=Math.ceil(Math.sqrt(r));n.image.width!==s&&(n.dispose(),n.image.data=new Float32Array(s*s*4),n.image.width=s,n.image.height=s);const a=n.image.data;for(let l=0,u=t.length;l<u;l++){const f=t[l],h=l*io*4;let c=0;for(let g=0;g<io*4;g++)a[h+g]=0;f.getWorldPosition(Ge),a[h+c++]=Ge.x,a[h+c++]=Ge.y,a[h+c++]=Ge.z;let m=U3;if(f.isRectAreaLight&&f.isCircular?m=F3:f.isSpotLight?m=N3:f.isDirectionalLight?m=O3:f.isPointLight&&(m=B3),a[h+c++]=m,a[h+c++]=f.color.r,a[h+c++]=f.color.g,a[h+c++]=f.color.b,a[h+c++]=f.intensity,f.getWorldQuaternion(Yi),f.isRectAreaLight)gn.set(f.width,0,0).applyQuaternion(Yi),a[h+c++]=gn.x,a[h+c++]=gn.y,a[h+c++]=gn.z,c++,Ge.set(0,f.height,0).applyQuaternion(Yi),a[h+c++]=Ge.x,a[h+c++]=Ge.y,a[h+c++]=Ge.z,a[h+c++]=gn.cross(Ge).length()*(f.isCircular?Math.PI/4:1);else if(f.isSpotLight){const g=f.radius||0;Zc.setFromMatrixPosition(f.matrixWorld),ji.setFromMatrixPosition(f.target.matrixWorld),Kc.lookAt(Zc,ji,z3),Yi.setFromRotationMatrix(Kc),gn.set(1,0,0).applyQuaternion(Yi),a[h+c++]=gn.x,a[h+c++]=gn.y,a[h+c++]=gn.z,c++,Ge.set(0,1,0).applyQuaternion(Yi),a[h+c++]=Ge.x,a[h+c++]=Ge.y,a[h+c++]=Ge.z,a[h+c++]=Math.PI*g*g,a[h+c++]=g,a[h+c++]=f.decay,a[h+c++]=f.distance,a[h+c++]=Math.cos(f.angle),a[h+c++]=Math.cos(f.angle*(1-f.penumbra)),a[h+c++]=f.iesMap?e.indexOf(f.iesMap):-1}else if(f.isPointLight){const g=gn.setFromMatrixPosition(f.matrixWorld);a[h+c++]=g.x,a[h+c++]=g.y,a[h+c++]=g.z,c++,c+=4,c+=1,a[h+c++]=f.decay,a[h+c++]=f.distance}else if(f.isDirectionalLight){const g=gn.setFromMatrixPosition(f.matrixWorld),_=Ge.setFromMatrixPosition(f.target.matrixWorld);ji.subVectors(g,_).normalize(),a[h+c++]=ji.x,a[h+c++]=ji.y,a[h+c++]=ji.z}}this.count=t.length;const o=vl(a.buffer);return this.hash!==o?(this.hash=o,n.needsUpdate=!0,!0):!1}}function Jc(i,t,e,n,r){if(t>n)throw new Error;const s=i.length/t,a=i.constructor.BYTES_PER_ELEMENT*8;let o=1;switch(i.constructor){case Uint8Array:case Uint16Array:case Uint32Array:o=2**a-1;break;case Int8Array:case Int16Array:case Int32Array:o=2**(a-1)-1;break}for(let l=0;l<s;l++){const u=4*l,f=t*l;for(let h=0;h<n;h++)e[r+u+h]=t>=h+1?i[f+h]/o:0}}class k3 extends ta{constructor(){super(),this._textures=[],this.type=ne,this.format=Zt,this.internalFormat="RGBA32F"}updateAttribute(t,e){const n=this._textures[t];n.updateFrom(e);const r=n.image,s=this.image;if(r.width!==s.width||r.height!==s.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:a,height:o,data:l}=s,f=a*o*4*t;let h=e.itemSize;h===3&&(h=4),Jc(n.image.data,h,l,4,f),this.dispose(),this.needsUpdate=!0}setAttributes(t){const e=t[0].count,n=t.length;for(let h=0,c=n;h<c;h++)if(t[h].count!==e)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const r=this._textures;for(;r.length<n;){const h=new eu;r.push(h)}for(;r.length>n;)r.pop();for(let h=0,c=n;h<c;h++)r[h].updateFrom(t[h]);const a=r[0].image,o=this.image;(a.width!==o.width||a.height!==o.height||a.depth!==n)&&(o.width=a.width,o.height=a.height,o.depth=n,o.data=new Float32Array(o.width*o.height*o.depth*4));const{data:l,width:u,height:f}=o;for(let h=0,c=n;h<c;h++){const m=r[h],_=u*f*4*h;let d=t[h].itemSize;d===3&&(d=4),Jc(m.image.data,d,l,4,_)}this.dispose(),this.needsUpdate=!0}}class V3 extends k3{updateNormalAttribute(t){this.updateAttribute(0,t)}updateTangentAttribute(t){this.updateAttribute(1,t)}updateUvAttribute(t){this.updateAttribute(2,t)}updateColorAttribute(t){this.updateAttribute(3,t)}updateFrom(t,e,n,r){this.setAttributes([t,e,n,r])}}function yl(i,t){return i.uuid<t.uuid?1:i.uuid>t.uuid?-1:0}function nl(i){return`${i.source.uuid}:${i.colorSpace}`}function G3(i){const t=new Set,e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],a=nl(s);t.has(a)||(t.add(a),e.push(s))}return e}function W3(i){const t=i.map(n=>n.iesMap||null).filter(n=>n),e=new Set(t);return Array.from(e).sort(yl)}function X3(i){const t=new Set;for(let n=0,r=i.length;n<r;n++){const s=i[n];for(const a in s){const o=s[a];o&&o.isTexture&&t.add(o)}}const e=Array.from(t);return G3(e).sort(yl)}function q3(i){const t=[];return i.traverse(e=>{e.visible&&(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight)&&t.push(e)}),t.sort(yl)}const au=45,Qc=au*4;class Y3{constructor(){this._features={}}isUsed(t){return t in this._features}setUsed(t,e=!0){e===!1?delete this._features[t]:this._features[t]=!0}reset(){this._features={}}}class j3 extends ln{constructor(){super(new Float32Array(4),1,1),this.format=Zt,this.type=ne,this.wrapS=Fe,this.wrapT=Fe,this.minFilter=Bt,this.magFilter=Bt,this.generateMipmaps=!1,this.features=new Y3}updateFrom(t,e){function n(g,_,d=-1){if(_ in g&&g[_]){const p=nl(g[_]);return h[p]}else return d}function r(g,_,d){return _ in g?g[_]:d}function s(g,_,d,p){const x=g[_]&&g[_].isTexture?g[_]:null;if(x){x.matrixAutoUpdate&&x.updateMatrix();const y=x.matrix.elements;let v=0;d[p+v++]=y[0],d[p+v++]=y[3],d[p+v++]=y[6],v++,d[p+v++]=y[1],d[p+v++]=y[4],d[p+v++]=y[7],v++}return 8}let a=0;const o=t.length*au,l=Math.ceil(Math.sqrt(o))||1,{image:u,features:f}=this,h={};for(let g=0,_=e.length;g<_;g++)h[nl(e[g])]=g;u.width!==l&&(this.dispose(),u.data=new Float32Array(l*l*4),u.width=l,u.height=l);const c=u.data;f.reset();for(let g=0,_=t.length;g<_;g++){const d=t[g];if(d.isFogVolumeMaterial){f.setUsed("FOG");for(let y=0;y<Qc;y++)c[a+y]=0;c[a+0*4+0]=d.color.r,c[a+0*4+1]=d.color.g,c[a+0*4+2]=d.color.b,c[a+2*4+3]=r(d,"emissiveIntensity",0),c[a+3*4+0]=d.emissive.r,c[a+3*4+1]=d.emissive.g,c[a+3*4+2]=d.emissive.b,c[a+13*4+1]=d.density,c[a+13*4+3]=0,c[a+14*4+2]=4,a+=Qc;continue}c[a++]=d.color.r,c[a++]=d.color.g,c[a++]=d.color.b,c[a++]=n(d,"map"),c[a++]=r(d,"metalness",0),c[a++]=n(d,"metalnessMap"),c[a++]=r(d,"roughness",0),c[a++]=n(d,"roughnessMap"),c[a++]=r(d,"ior",1.5),c[a++]=r(d,"transmission",0),c[a++]=n(d,"transmissionMap"),c[a++]=r(d,"emissiveIntensity",0),"emissive"in d?(c[a++]=d.emissive.r,c[a++]=d.emissive.g,c[a++]=d.emissive.b):(c[a++]=0,c[a++]=0,c[a++]=0),c[a++]=n(d,"emissiveMap"),c[a++]=n(d,"normalMap"),"normalScale"in d?(c[a++]=d.normalScale.x,c[a++]=d.normalScale.y):(c[a++]=1,c[a++]=1),c[a++]=r(d,"clearcoat",0),c[a++]=n(d,"clearcoatMap"),c[a++]=r(d,"clearcoatRoughness",0),c[a++]=n(d,"clearcoatRoughnessMap"),c[a++]=n(d,"clearcoatNormalMap"),"clearcoatNormalScale"in d?(c[a++]=d.clearcoatNormalScale.x,c[a++]=d.clearcoatNormalScale.y):(c[a++]=1,c[a++]=1),a++,c[a++]=r(d,"sheen",0),"sheenColor"in d?(c[a++]=d.sheenColor.r,c[a++]=d.sheenColor.g,c[a++]=d.sheenColor.b):(c[a++]=0,c[a++]=0,c[a++]=0),c[a++]=n(d,"sheenColorMap"),c[a++]=r(d,"sheenRoughness",0),c[a++]=n(d,"sheenRoughnessMap"),c[a++]=n(d,"iridescenceMap"),c[a++]=n(d,"iridescenceThicknessMap"),c[a++]=r(d,"iridescence",0),c[a++]=r(d,"iridescenceIOR",1.3);const p=r(d,"iridescenceThicknessRange",[100,400]);c[a++]=p[0],c[a++]=p[1],"specularColor"in d?(c[a++]=d.specularColor.r,c[a++]=d.specularColor.g,c[a++]=d.specularColor.b):(c[a++]=1,c[a++]=1,c[a++]=1),c[a++]=n(d,"specularColorMap"),c[a++]=r(d,"specularIntensity",1),c[a++]=n(d,"specularIntensityMap");const x=r(d,"thickness",0)===0&&r(d,"attenuationDistance",1/0)===1/0;if(c[a++]=Number(x),a++,"attenuationColor"in d?(c[a++]=d.attenuationColor.r,c[a++]=d.attenuationColor.g,c[a++]=d.attenuationColor.b):(c[a++]=1,c[a++]=1,c[a++]=1),c[a++]=r(d,"attenuationDistance",1/0),c[a++]=n(d,"alphaMap"),c[a++]=d.opacity,c[a++]=d.alphaTest,!x&&d.transmission>0)c[a++]=0;else switch(d.side){case xn:c[a++]=1;break;case Re:c[a++]=-1;break;case rn:c[a++]=0;break}c[a++]=Number(r(d,"matte",!1)),c[a++]=Number(r(d,"castShadow",!0)),c[a++]=Number(d.vertexColors)|Number(d.flatShading)<<1,c[a++]=Number(d.transparent),a+=s(d,"map",c,a),a+=s(d,"metalnessMap",c,a),a+=s(d,"roughnessMap",c,a),a+=s(d,"transmissionMap",c,a),a+=s(d,"emissiveMap",c,a),a+=s(d,"normalMap",c,a),a+=s(d,"clearcoatMap",c,a),a+=s(d,"clearcoatNormalMap",c,a),a+=s(d,"clearcoatRoughnessMap",c,a),a+=s(d,"sheenColorMap",c,a),a+=s(d,"sheenRoughnessMap",c,a),a+=s(d,"iridescenceMap",c,a),a+=s(d,"iridescenceThicknessMap",c,a),a+=s(d,"specularColorMap",c,a),a+=s(d,"specularIntensityMap",c,a)}const m=vl(c.buffer);return this.hash!==m?(this.hash=m,this.needsUpdate=!0,!0):!1}}const t0=new Ut;function $3(i){return i?`${i.uuid}:${i.version}`:null}function K3(i,t){for(const e in t)e in i&&(i[e]=t[e])}class e0 extends gh{constructor(t,e,n){const r={format:Zt,type:cn,minFilter:fe,magFilter:fe,wrapS:vn,wrapT:vn,generateMipmaps:!1,...n};super(t,e,1,r),K3(this.texture,r),this.texture.setTextures=(...a)=>{this.setTextures(...a)},this.hashes=[null];const s=new gr(new Z3);this.fsQuad=s}setTextures(t,e,n=this.width,r=this.height){const s=t.getRenderTarget(),a=t.toneMapping,o=t.getClearAlpha();t.getClearColor(t0);const l=e.length||1;(n!==this.width||r!==this.height||this.depth!==l)&&(this.setSize(n,r,l),this.hashes=new Array(l).fill(null)),t.setClearColor(0,0),t.toneMapping=On;const u=this.fsQuad,f=this.hashes;let h=!1;for(let c=0,m=l;c<m;c++){const g=e[c],_=$3(g);g&&(f[c]!==_||g.isWebGLRenderTarget)&&(g.matrixAutoUpdate=!1,g.matrix.identity(),u.material.map=g,t.setRenderTarget(this,c),u.render(t),g.updateMatrix(),g.matrixAutoUpdate=!0,f[c]=_,h=!0)}return u.material.map=null,t.setClearColor(t0,o),t.setRenderTarget(s),t.toneMapping=a,h}dispose(){super.dispose(),this.fsQuad.dispose()}}class Z3 extends un{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				varying vec2 vUv;
				void main() {

					gl_FragColor = texture2D( map, vUv );

				}
			`})}}function J3(i,t=Math.random()){for(let e=i.length-1;e>0;e--){const n=Math.floor(t()*(e+1)),r=i[e];i[e]=i[n],i[n]=r}return i}class Q3{constructor(t,e,n=Math.random){const r=t**e,s=new Uint16Array(r);let a=r;for(let o=0;o<r;o++)s[o]=o;this.samples=new Float32Array(e),this.strataCount=t,this.reset=function(){for(let o=0;o<r;o++)s[o]=o;a=0},this.reshuffle=function(){a=0},this.next=function(){const{samples:o}=this;a>=s.length&&(J3(s,n),this.reshuffle());let l=s[a++];for(let u=0;u<e;u++)o[u]=(l%t+n())/t,l=Math.floor(l/t);return o}}}class tg{constructor(t,e,n=Math.random){let r=0;for(const l of e)r+=l;const s=new Float32Array(r),a=[];let o=0;for(const l of e){const u=new Q3(t,l,n);u.samples=new Float32Array(s.buffer,o,u.samples.length),o+=u.samples.length*4,a.push(u)}this.samples=s,this.strataCount=t,this.next=function(){for(const l of a)l.next();return s},this.reshuffle=function(){for(const l of a)l.reshuffle()},this.reset=function(){for(const l of a)l.reset()}}}class eg{constructor(t=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=t}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}}class ng extends ln{constructor(t=1,e=1,n=8){super(new Float32Array(1),1,1,Zt,ne),this.minFilter=Bt,this.magFilter=Bt,this.strata=n,this.sampler=null,this.generator=new eg,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(t,e,n)}init(t=this.image.height,e=this.image.width,n=this.strata){const{image:r}=this;if(r.width===e&&r.height===t&&this.sampler!==null)return;const s=new Array(t*e).fill(4),a=new tg(n,s,this.random);r.width=e,r.height=t,r.data=a.samples,this.sampler=a,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}function ig(i,t=Math.random){for(let e=i.length-1;e>0;e--){const n=~~((t()-1e-6)*e),r=i[e];i[e]=i[n],i[n]=r}}function rg(i,t){i.fill(0);for(let e=0;e<t;e++)i[e]=1}class n0{constructor(t){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(t),this.setSigma(1.5)}findVoid(){const{score:t,binaryPattern:e}=this;let n=1/0,r=-1;for(let s=0,a=e.length;s<a;s++){if(e[s]!==0)continue;const o=t[s];o<n&&(n=o,r=s)}return r}findCluster(){const{score:t,binaryPattern:e}=this;let n=-1/0,r=-1;for(let s=0,a=e.length;s<a;s++){if(e[s]!==1)continue;const o=t[s];o>n&&(n=o,r=s)}return r}setSigma(t){if(t===this.sigma)return;const e=~~(Math.sqrt(10*2*t**2)+1),n=2*e+1,r=new Float32Array(n*n),s=t*t;for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++){const l=(e+o)*n+a+e,u=a*a+o*o;r[l]=Math.E**(-u/(2*s))}this.lookupTable=r,this.sigma=t,this.radius=e}resize(t){this.size!==t&&(this.size=t,this.score=new Float32Array(t*t),this.binaryPattern=new Uint8Array(t*t))}invert(){const{binaryPattern:t,score:e,size:n}=this;e.fill(0);for(let r=0,s=t.length;r<s;r++)if(t[r]===0){const a=~~(r/n),o=r-a*n;this.updateScore(o,a,1),t[r]=1}else t[r]=0}updateScore(t,e,n){const{size:r,score:s,lookupTable:a}=this,o=this.radius,l=2*o+1;for(let u=-o;u<=o;u++)for(let f=-o;f<=o;f++){const h=(o+f)*l+u+o,c=a[h];let m=t+u;m=m<0?r+m:m%r;let g=e+f;g=g<0?r+g:g%r;const _=g*r+m;s[_]+=n*c}}addPointIndex(t){this.binaryPattern[t]=1;const e=this.size,n=~~(t/e),r=t-n*e;this.updateScore(r,n,1),this.count++}removePointIndex(t){this.binaryPattern[t]=0;const e=this.size,n=~~(t/e),r=t-n*e;this.updateScore(r,n,-1),this.count--}copy(t){this.resize(t.size),this.score.set(t.score),this.binaryPattern.set(t.binaryPattern),this.setSigma(t.sigma),this.count=t.count}}class sg{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new n0(1),this.savedSamples=new n0(1)}generate(){const{samples:t,savedSamples:e,sigma:n,majorityPointsRatio:r,size:s}=this;t.resize(s),t.setSigma(n);const a=Math.floor(s*s*r),o=t.binaryPattern;rg(o,a),ig(o,this.random);for(let h=0,c=o.length;h<c;h++)o[h]===1&&t.addPointIndex(h);for(;;){const h=t.findCluster();t.removePointIndex(h);const c=t.findVoid();if(h===c){t.addPointIndex(h);break}t.addPointIndex(c)}const l=new Uint32Array(s*s);e.copy(t);let u;for(u=t.count-1;u>=0;){const h=t.findCluster();t.removePointIndex(h),l[h]=u,u--}const f=s*s;for(u=e.count;u<f/2;){const h=e.findVoid();e.addPointIndex(h),l[h]=u,u++}for(e.invert();u<f;){const h=e.findCluster();e.removePointIndex(h),l[h]=u,u++}return{data:l,maxValue:f}}}function ag(i){return i>=3?4:i}function og(i){switch(i){case 1:return fr;case 2:return Qs;default:return Zt}}class lg extends ln{constructor(t=64,e=1){super(new Float32Array(4),1,1,Zt,ne),this.minFilter=Bt,this.magFilter=Bt,this.size=t,this.channels=e,this.update()}update(){const t=this.channels,e=this.size,n=new sg;n.channels=t,n.size=e;const r=ag(t),s=og(r);(this.image.width!==e||s!==this.format)&&(this.image.width=e,this.image.height=e,this.image.data=new Float32Array(e**2*r),this.format=s,this.dispose());const a=this.image.data;for(let o=0,l=t;o<l;o++){const u=n.generate(),f=u.data,h=u.maxValue;for(let c=0,m=f.length;c<m;c++){const g=f[c]/h;a[c*r+o]=g}}this.needsUpdate=!0}}const cg=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,ug=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,hg=`

	#define RECT_AREA_LIGHT_TYPE 0
	#define CIRC_AREA_LIGHT_TYPE 1
	#define SPOT_LIGHT_TYPE 2
	#define DIR_LIGHT_TYPE 3
	#define POINT_LIGHT_TYPE 4

	struct LightsInfo {

		sampler2D tex;
		uint count;

	};

	struct Light {

		vec3 position;
		int type;

		vec3 color;
		float intensity;

		vec3 u;
		vec3 v;
		float area;

		// spot light fields
		float radius;
		float near;
		float decay;
		float distance;
		float coneCos;
		float penumbraCos;
		int iesProfile;

	};

	Light readLightInfo( sampler2D tex, uint index ) {

		uint i = index * 6u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );

		Light l;
		l.position = s0.rgb;
		l.type = int( round( s0.a ) );

		l.color = s1.rgb;
		l.intensity = s1.a;

		l.u = s2.rgb;
		l.v = s3.rgb;
		l.area = s3.a;

		if ( l.type == SPOT_LIGHT_TYPE || l.type == POINT_LIGHT_TYPE ) {

			vec4 s4 = texelFetch1D( tex, i + 4u );
			vec4 s5 = texelFetch1D( tex, i + 5u );
			l.radius = s4.r;
			l.decay = s4.g;
			l.distance = s4.b;
			l.coneCos = s4.a;

			l.penumbraCos = s5.r;
			l.iesProfile = int( round( s5.g ) );

		} else {

			l.radius = 0.0;
			l.decay = 0.0;
			l.distance = 0.0;

			l.coneCos = 0.0;
			l.penumbraCos = 0.0;
			l.iesProfile = - 1;

		}

		return l;

	}

`,fg=`

	struct Material {

		vec3 color;
		int map;

		float metalness;
		int metalnessMap;

		float roughness;
		int roughnessMap;

		float ior;
		float transmission;
		int transmissionMap;

		float emissiveIntensity;
		vec3 emissive;
		int emissiveMap;

		int normalMap;
		vec2 normalScale;

		float clearcoat;
		int clearcoatMap;
		int clearcoatNormalMap;
		vec2 clearcoatNormalScale;
		float clearcoatRoughness;
		int clearcoatRoughnessMap;

		int iridescenceMap;
		int iridescenceThicknessMap;
		float iridescence;
		float iridescenceIor;
		float iridescenceThicknessMinimum;
		float iridescenceThicknessMaximum;

		vec3 specularColor;
		int specularColorMap;

		float specularIntensity;
		int specularIntensityMap;
		bool thinFilm;

		vec3 attenuationColor;
		float attenuationDistance;

		int alphaMap;

		bool castShadow;
		float opacity;
		float alphaTest;

		float side;
		bool matte;

		float sheen;
		vec3 sheenColor;
		int sheenColorMap;
		float sheenRoughness;
		int sheenRoughnessMap;

		bool vertexColors;
		bool flatShading;
		bool transparent;
		bool fogVolume;

		mat3 mapTransform;
		mat3 metalnessMapTransform;
		mat3 roughnessMapTransform;
		mat3 transmissionMapTransform;
		mat3 emissiveMapTransform;
		mat3 normalMapTransform;
		mat3 clearcoatMapTransform;
		mat3 clearcoatNormalMapTransform;
		mat3 clearcoatRoughnessMapTransform;
		mat3 sheenColorMapTransform;
		mat3 sheenRoughnessMapTransform;
		mat3 iridescenceMapTransform;
		mat3 iridescenceThicknessMapTransform;
		mat3 specularColorMapTransform;
		mat3 specularIntensityMapTransform;

	};

	mat3 readTextureTransform( sampler2D tex, uint index ) {

		mat3 textureTransform;

		vec4 row1 = texelFetch1D( tex, index );
		vec4 row2 = texelFetch1D( tex, index + 1u );

		textureTransform[0] = vec3(row1.r, row2.r, 0.0);
		textureTransform[1] = vec3(row1.g, row2.g, 0.0);
		textureTransform[2] = vec3(row1.b, row2.b, 1.0);

		return textureTransform;

	}

	Material readMaterialInfo( sampler2D tex, uint index ) {

		uint i = index * 45u;

		vec4 s0 = texelFetch1D( tex, i + 0u );
		vec4 s1 = texelFetch1D( tex, i + 1u );
		vec4 s2 = texelFetch1D( tex, i + 2u );
		vec4 s3 = texelFetch1D( tex, i + 3u );
		vec4 s4 = texelFetch1D( tex, i + 4u );
		vec4 s5 = texelFetch1D( tex, i + 5u );
		vec4 s6 = texelFetch1D( tex, i + 6u );
		vec4 s7 = texelFetch1D( tex, i + 7u );
		vec4 s8 = texelFetch1D( tex, i + 8u );
		vec4 s9 = texelFetch1D( tex, i + 9u );
		vec4 s10 = texelFetch1D( tex, i + 10u );
		vec4 s11 = texelFetch1D( tex, i + 11u );
		vec4 s12 = texelFetch1D( tex, i + 12u );
		vec4 s13 = texelFetch1D( tex, i + 13u );
		vec4 s14 = texelFetch1D( tex, i + 14u );

		Material m;
		m.color = s0.rgb;
		m.map = int( round( s0.a ) );

		m.metalness = s1.r;
		m.metalnessMap = int( round( s1.g ) );
		m.roughness = s1.b;
		m.roughnessMap = int( round( s1.a ) );

		m.ior = s2.r;
		m.transmission = s2.g;
		m.transmissionMap = int( round( s2.b ) );
		m.emissiveIntensity = s2.a;

		m.emissive = s3.rgb;
		m.emissiveMap = int( round( s3.a ) );

		m.normalMap = int( round( s4.r ) );
		m.normalScale = s4.gb;

		m.clearcoat = s4.a;
		m.clearcoatMap = int( round( s5.r ) );
		m.clearcoatRoughness = s5.g;
		m.clearcoatRoughnessMap = int( round( s5.b ) );
		m.clearcoatNormalMap = int( round( s5.a ) );
		m.clearcoatNormalScale = s6.rg;

		m.sheen = s6.a;
		m.sheenColor = s7.rgb;
		m.sheenColorMap = int( round( s7.a ) );
		m.sheenRoughness = s8.r;
		m.sheenRoughnessMap = int( round( s8.g ) );

		m.iridescenceMap = int( round( s8.b ) );
		m.iridescenceThicknessMap = int( round( s8.a ) );
		m.iridescence = s9.r;
		m.iridescenceIor = s9.g;
		m.iridescenceThicknessMinimum = s9.b;
		m.iridescenceThicknessMaximum = s9.a;

		m.specularColor = s10.rgb;
		m.specularColorMap = int( round( s10.a ) );

		m.specularIntensity = s11.r;
		m.specularIntensityMap = int( round( s11.g ) );
		m.thinFilm = bool( s11.b );

		m.attenuationColor = s12.rgb;
		m.attenuationDistance = s12.a;

		m.alphaMap = int( round( s13.r ) );

		m.opacity = s13.g;
		m.alphaTest = s13.b;
		m.side = s13.a;

		m.matte = bool( s14.r );
		m.castShadow = bool( s14.g );
		m.vertexColors = bool( int( s14.b ) & 1 );
		m.flatShading = bool( int( s14.b ) & 2 );
		m.fogVolume = bool( int( s14.b ) & 4 );
		m.transparent = bool( s14.a );

		uint firstTextureTransformIdx = i + 15u;

		// mat3( 1.0 ) is an identity matrix
		m.mapTransform = m.map == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx );
		m.metalnessMapTransform = m.metalnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 2u );
		m.roughnessMapTransform = m.roughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 4u );
		m.transmissionMapTransform = m.transmissionMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 6u );
		m.emissiveMapTransform = m.emissiveMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 8u );
		m.normalMapTransform = m.normalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 10u );
		m.clearcoatMapTransform = m.clearcoatMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 12u );
		m.clearcoatNormalMapTransform = m.clearcoatNormalMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 14u );
		m.clearcoatRoughnessMapTransform = m.clearcoatRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 16u );
		m.sheenColorMapTransform = m.sheenColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 18u );
		m.sheenRoughnessMapTransform = m.sheenRoughnessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 20u );
		m.iridescenceMapTransform = m.iridescenceMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 22u );
		m.iridescenceThicknessMapTransform = m.iridescenceThicknessMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 24u );
		m.specularColorMapTransform = m.specularColorMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 26u );
		m.specularIntensityMapTransform = m.specularIntensityMap == - 1 ? mat3( 1.0 ) : readTextureTransform( tex, firstTextureTransformIdx + 28u );

		return m;

	}

`,dg=`

	struct SurfaceRecord {

		// surface type
		bool volumeParticle;

		// geometry
		vec3 faceNormal;
		bool frontFace;
		vec3 normal;
		mat3 normalBasis;
		mat3 normalInvBasis;

		// cached properties
		float eta;
		float f0;

		// material
		float roughness;
		float filteredRoughness;
		float metalness;
		vec3 color;
		vec3 emission;

		// transmission
		float ior;
		float transmission;
		bool thinFilm;
		vec3 attenuationColor;
		float attenuationDistance;

		// clearcoat
		vec3 clearcoatNormal;
		mat3 clearcoatBasis;
		mat3 clearcoatInvBasis;
		float clearcoat;
		float clearcoatRoughness;
		float filteredClearcoatRoughness;

		// sheen
		float sheen;
		vec3 sheenColor;
		float sheenRoughness;

		// iridescence
		float iridescence;
		float iridescenceIor;
		float iridescenceThickness;

		// specular
		vec3 specularColor;
		float specularIntensity;
	};

	struct ScatterRecord {
		float specularPdf;
		float pdf;
		vec3 direction;
		vec3 color;
	};

`,pg=`

	// samples the the given environment map in the given direction
	vec3 sampleEquirectColor( sampler2D envMap, vec3 direction ) {

		return texture2D( envMap, equirectDirectionToUv( direction ) ).rgb;

	}

	// gets the pdf of the given direction to sample
	float equirectDirectionPdf( vec3 direction ) {

		vec2 uv = equirectDirectionToUv( direction );
		float theta = uv.y * PI;
		float sinTheta = sin( theta );
		if ( sinTheta == 0.0 ) {

			return 0.0;

		}

		return 1.0 / ( 2.0 * PI * PI * sinTheta );

	}

	// samples the color given env map with CDF and returns the pdf of the direction
	float sampleEquirect( vec3 direction, inout vec3 color ) {

		float totalSum = envMapInfo.totalSum;
		if ( totalSum == 0.0 ) {

			color = vec3( 0.0 );
			return 1.0;

		}

		vec2 uv = equirectDirectionToUv( direction );
		color = texture2D( envMapInfo.map, uv ).rgb;

		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}

	// samples a direction of the envmap with color and retrieves pdf
	float sampleEquirectProbability( vec2 r, inout vec3 color, inout vec3 direction ) {

		// sample env map cdf
		float v = texture2D( envMapInfo.marginalWeights, vec2( r.x, 0.0 ) ).x;
		float u = texture2D( envMapInfo.conditionalWeights, vec2( r.y, v ) ).x;
		vec2 uv = vec2( u, v );

		vec3 derivedDirection = equirectUvToDirection( uv );
		direction = derivedDirection;
		color = texture2D( envMapInfo.map, uv ).rgb;

		float totalSum = envMapInfo.totalSum;
		float lum = luminance( color );
		ivec2 resolution = textureSize( envMapInfo.map, 0 );
		float pdf = lum / totalSum;

		return float( resolution.x * resolution.y ) * pdf * equirectDirectionPdf( direction );

	}
`,mg=`

	float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {

		return smoothstep( coneCosine, penumbraCosine, angleCosine );

	}

	float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {

		// based upon Frostbite 3 Moving to Physically-based Rendering
		// page 32, equation 26: E[window1]
		// https://seblagarde.files.wordpress.com/2015/07/course_notes_moving_frostbite_to_pbr_v32.pdf
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), EPSILON );

		if ( cutoffDistance > 0.0 ) {

			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );

		}

		return distanceFalloff;

	}

	float getPhotometricAttenuation( sampler2DArray iesProfiles, int iesProfile, vec3 posToLight, vec3 lightDir, vec3 u, vec3 v ) {

		float cosTheta = dot( posToLight, lightDir );
		float angle = acos( cosTheta ) / PI;

		return texture2D( iesProfiles, vec3( angle, 0.0, iesProfile ) ).r;

	}

	struct LightRecord {

		float dist;
		vec3 direction;
		float pdf;
		vec3 emission;
		int type;

	};

	bool intersectLightAtIndex( sampler2D lights, vec3 rayOrigin, vec3 rayDirection, uint l, inout LightRecord lightRec ) {

		bool didHit = false;
		Light light = readLightInfo( lights, l );

		vec3 u = light.u;
		vec3 v = light.v;

		// check for backface
		vec3 normal = normalize( cross( u, v ) );
		if ( dot( normal, rayDirection ) > 0.0 ) {

			u *= 1.0 / dot( u, u );
			v *= 1.0 / dot( v, v );

			float dist;

			// MIS / light intersection is not supported for punctual lights.
			if(
				( light.type == RECT_AREA_LIGHT_TYPE && intersectsRectangle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) ) ||
				( light.type == CIRC_AREA_LIGHT_TYPE && intersectsCircle( light.position, normal, u, v, rayOrigin, rayDirection, dist ) )
			) {

				float cosTheta = dot( rayDirection, normal );
				didHit = true;
				lightRec.dist = dist;
				lightRec.pdf = ( dist * dist ) / ( light.area * cosTheta );
				lightRec.emission = light.color * light.intensity;
				lightRec.direction = rayDirection;
				lightRec.type = light.type;

			}

		}

		return didHit;

	}

	LightRecord randomAreaLightSample( Light light, vec3 rayOrigin, vec2 ruv ) {

		vec3 randomPos;
		if( light.type == RECT_AREA_LIGHT_TYPE ) {

			// rectangular area light
			randomPos = light.position + light.u * ( ruv.x - 0.5 ) + light.v * ( ruv.y - 0.5 );

		} else if( light.type == CIRC_AREA_LIGHT_TYPE ) {

			// circular area light
			float r = 0.5 * sqrt( ruv.x );
			float theta = ruv.y * 2.0 * PI;
			float x = r * cos( theta );
			float y = r * sin( theta );

			randomPos = light.position + light.u * x + light.v * y;

		}

		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );
		vec3 direction = toLight / dist;
		vec3 lightNormal = normalize( cross( light.u, light.v ) );

		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.emission = light.color * light.intensity;
		lightRec.dist = dist;
		lightRec.direction = direction;

		// TODO: the denominator is potentially zero
		lightRec.pdf = lightDistSq / ( light.area * dot( direction, lightNormal ) );

		return lightRec;

	}

	LightRecord randomSpotLightSample( Light light, sampler2DArray iesProfiles, vec3 rayOrigin, vec2 ruv ) {

		float radius = light.radius * sqrt( ruv.x );
		float theta = ruv.y * 2.0 * PI;
		float x = radius * cos( theta );
		float y = radius * sin( theta );

		vec3 u = light.u;
		vec3 v = light.v;
		vec3 normal = normalize( cross( u, v ) );

		float angle = acos( light.coneCos );
		float angleTan = tan( angle );
		float startDistance = light.radius / max( angleTan, EPSILON );

		vec3 randomPos = light.position - normal * startDistance + u * x + v * y;
		vec3 toLight = randomPos - rayOrigin;
		float lightDistSq = dot( toLight, toLight );
		float dist = sqrt( lightDistSq );

		vec3 direction = toLight / max( dist, EPSILON );
		float cosTheta = dot( direction, normal );

		float spotAttenuation = light.iesProfile != - 1 ?
			getPhotometricAttenuation( iesProfiles, light.iesProfile, direction, normal, u, v ) :
			getSpotAttenuation( light.coneCos, light.penumbraCos, cosTheta );

		float distanceAttenuation = getDistanceAttenuation( dist, light.distance, light.decay );
		LightRecord lightRec;
		lightRec.type = light.type;
		lightRec.dist = dist;
		lightRec.direction = direction;
		lightRec.emission = light.color * light.intensity * distanceAttenuation * spotAttenuation;
		lightRec.pdf = 1.0;

		return lightRec;

	}

	LightRecord randomLightSample( sampler2D lights, sampler2DArray iesProfiles, uint lightCount, vec3 rayOrigin, vec3 ruv ) {

		LightRecord result;

		// pick a random light
		uint l = uint( ruv.x * float( lightCount ) );
		Light light = readLightInfo( lights, l );

		if ( light.type == SPOT_LIGHT_TYPE ) {

			result = randomSpotLightSample( light, iesProfiles, rayOrigin, ruv.yz );

		} else if ( light.type == POINT_LIGHT_TYPE ) {

			vec3 lightRay = light.u - rayOrigin;
			float lightDist = length( lightRay );
			float cutoffDistance = light.distance;
			float distanceFalloff = 1.0 / max( pow( lightDist, light.decay ), 0.01 );
			if ( cutoffDistance > 0.0 ) {

				distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDist / cutoffDistance ) ) );

			}

			LightRecord rec;
			rec.direction = normalize( lightRay );
			rec.dist = length( lightRay );
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity * distanceFalloff;
			rec.type = light.type;
			result = rec;

		} else if ( light.type == DIR_LIGHT_TYPE ) {

			LightRecord rec;
			rec.dist = 1e10;
			rec.direction = light.u;
			rec.pdf = 1.0;
			rec.emission = light.color * light.intensity;
			rec.type = light.type;

			result = rec;

		} else {

			// sample the light
			result = randomAreaLightSample( light, rayOrigin, ruv.yz );

		}

		return result;

	}

`,gg=`

	vec3 sampleHemisphere( vec3 n, vec2 uv ) {

		// https://www.rorydriscoll.com/2009/01/07/better-sampling/
		// https://graphics.pixar.com/library/OrthonormalB/paper.pdf
		float sign = n.z == 0.0 ? 1.0 : sign( n.z );
		float a = - 1.0 / ( sign + n.z );
		float b = n.x * n.y * a;
		vec3 b1 = vec3( 1.0 + sign * n.x * n.x * a, sign * b, - sign * n.x );
		vec3 b2 = vec3( b, sign + n.y * n.y * a, - n.y );

		float r = sqrt( uv.x );
		float theta = 2.0 * PI * uv.y;
		float x = r * cos( theta );
		float y = r * sin( theta );
		return x * b1 + y * b2 + sqrt( 1.0 - uv.x ) * n;

	}

	vec2 sampleTriangle( vec2 a, vec2 b, vec2 c, vec2 r ) {

		// get the edges of the triangle and the diagonal across the
		// center of the parallelogram
		vec2 e1 = a - b;
		vec2 e2 = c - b;
		vec2 diag = normalize( e1 + e2 );

		// pick the point in the parallelogram
		if ( r.x + r.y > 1.0 ) {

			r = vec2( 1.0 ) - r;

		}

		return e1 * r.x + e2 * r.y;

	}

	vec2 sampleCircle( vec2 uv ) {

		float angle = 2.0 * PI * uv.x;
		float radius = sqrt( uv.y );
		return vec2( cos( angle ), sin( angle ) ) * radius;

	}

	vec3 sampleSphere( vec2 uv ) {

		float u = ( uv.x - 0.5 ) * 2.0;
		float t = uv.y * PI * 2.0;
		float f = sqrt( 1.0 - u * u );

		return vec3( f * cos( t ), f * sin( t ), u );

	}

	vec2 sampleRegularPolygon( int sides, vec3 uvw ) {

		sides = max( sides, 3 );

		vec3 r = uvw;
		float anglePerSegment = 2.0 * PI / float( sides );
		float segment = floor( float( sides ) * r.x );

		float angle1 = anglePerSegment * segment;
		float angle2 = angle1 + anglePerSegment;
		vec2 a = vec2( sin( angle1 ), cos( angle1 ) );
		vec2 b = vec2( 0.0, 0.0 );
		vec2 c = vec2( sin( angle2 ), cos( angle2 ) );

		return sampleTriangle( a, b, c, r.yz );

	}

	// samples an aperture shape with the given number of sides. 0 means circle
	vec2 sampleAperture( int blades, vec3 uvw ) {

		return blades == 0 ?
			sampleCircle( uvw.xy ) :
			sampleRegularPolygon( blades, uvw );

	}


`,_g=`

	bool totalInternalReflection( float cosTheta, float eta ) {

		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		return eta * sinTheta > 1.0;

	}

	// https://google.github.io/filament/Filament.md.html#materialsystem/diffusebrdf
	float schlickFresnel( float cosine, float f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0 ) {

		return f0 + ( 1.0 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	vec3 schlickFresnel( float cosine, vec3 f0, vec3 f90 ) {

		return f0 + ( f90 - f0 ) * pow( 1.0 - cosine, 5.0 );

	}

	float dielectricFresnel( float cosThetaI, float eta ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float ni = eta;
		float nt = 1.0;

		// Check for total internal reflection
		float sinThetaISq = 1.0f - cosThetaI * cosThetaI;
		float sinThetaTSq = eta * eta * sinThetaISq;
		if( sinThetaTSq >= 1.0 ) {

			return 1.0;

		}

		float sinThetaT = sqrt( sinThetaTSq );

		float cosThetaT = sqrt( max( 0.0, 1.0f - sinThetaT * sinThetaT ) );
		float rParallel = ( ( nt * cosThetaI ) - ( ni * cosThetaT ) ) / ( ( nt * cosThetaI ) + ( ni * cosThetaT ) );
		float rPerpendicular = ( ( ni * cosThetaI ) - ( nt * cosThetaT ) ) / ( ( ni * cosThetaI ) + ( nt * cosThetaT ) );
		return ( rParallel * rParallel + rPerpendicular * rPerpendicular ) / 2.0;

	}

	// https://raytracing.github.io/books/RayTracingInOneWeekend.html#dielectrics/schlickapproximation
	float iorRatioToF0( float eta ) {

		return pow( ( 1.0 - eta ) / ( 1.0 + eta ), 2.0 );

	}

	vec3 evaluateFresnel( float cosTheta, float eta, vec3 f0, vec3 f90 ) {

		if ( totalInternalReflection( cosTheta, eta ) ) {

			return f90;

		}

		return schlickFresnel( cosTheta, f0, f90 );

	}

	// TODO: disney fresnel was removed and replaced with this fresnel function to better align with
	// the glTF but is causing blown out pixels. Should be revisited
	// float evaluateFresnelWeight( float cosTheta, float eta, float f0 ) {

	// 	if ( totalInternalReflection( cosTheta, eta ) ) {

	// 		return 1.0;

	// 	}

	// 	return schlickFresnel( cosTheta, f0 );

	// }

	// https://schuttejoe.github.io/post/disneybsdf/
	float disneyFresnel( vec3 wo, vec3 wi, vec3 wh, float f0, float eta, float metalness ) {

		float dotHV = dot( wo, wh );
		if ( totalInternalReflection( dotHV, eta ) ) {

			return 1.0;

		}

		float dotHL = dot( wi, wh );
		float dielectricFresnel = dielectricFresnel( abs( dotHV ), eta );
		float metallicFresnel = schlickFresnel( dotHL, f0 );

		return mix( dielectricFresnel, metallicFresnel, metalness );

	}

`,vg=`

	// Fast arccos approximation used to remove banding artifacts caused by numerical errors in acos.
	// This is a cubic Lagrange interpolating polynomial for x = [-1, -1/2, 0, 1/2, 1].
	// For more information see: https://github.com/gkjohnson/three-gpu-pathtracer/pull/171#issuecomment-1152275248
	float acosApprox( float x ) {

		x = clamp( x, -1.0, 1.0 );
		return ( - 0.69813170079773212 * x * x - 0.87266462599716477 ) * x + 1.5707963267948966;

	}

	// An acos with input values bound to the range [-1, 1].
	float acosSafe( float x ) {

		return acos( clamp( x, -1.0, 1.0 ) );

	}

	float saturateCos( float val ) {

		return clamp( val, 0.001, 1.0 );

	}

	float square( float t ) {

		return t * t;

	}

	vec2 square( vec2 t ) {

		return t * t;

	}

	vec3 square( vec3 t ) {

		return t * t;

	}

	vec4 square( vec4 t ) {

		return t * t;

	}

	vec2 rotateVector( vec2 v, float t ) {

		float ac = cos( t );
		float as = sin( t );
		return vec2(
			v.x * ac - v.y * as,
			v.x * as + v.y * ac
		);

	}

	// forms a basis with the normal vector as Z
	mat3 getBasisFromNormal( vec3 normal ) {

		vec3 other;
		if ( abs( normal.x ) > 0.5 ) {

			other = vec3( 0.0, 1.0, 0.0 );

		} else {

			other = vec3( 1.0, 0.0, 0.0 );

		}

		vec3 ortho = normalize( cross( normal, other ) );
		vec3 ortho2 = normalize( cross( normal, ortho ) );
		return mat3( ortho2, ortho, normal );

	}

`,xg=`

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the rectangle on that same plane.
	// Plane intersection: https://lousodrome.net/blog/light/2020/07/03/intersection-of-a-ray-and-a-plane/
	bool intersectsRectangle( vec3 center, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( center - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 p = rayOrigin + rayDirection * t;
			vec3 vi = p - center;

			// check if p falls inside the rectangle
			float a1 = dot( u, vi );
			if ( abs( a1 ) <= 0.5 ) {

				float a2 = dot( v, vi );
				if ( abs( a2 ) <= 0.5 ) {

					dist = t;
					return true;

				}

			}

		}

		return false;

	}

	// Finds the point where the ray intersects the plane defined by u and v and checks if this point
	// falls in the bounds of the circle on that same plane. See above URL for a description of the plane intersection algorithm.
	bool intersectsCircle( vec3 position, vec3 normal, vec3 u, vec3 v, vec3 rayOrigin, vec3 rayDirection, inout float dist ) {

		float t = dot( position - rayOrigin, normal ) / dot( rayDirection, normal );

		if ( t > EPSILON ) {

			vec3 hit = rayOrigin + rayDirection * t;
			vec3 vi = hit - position;

			float a1 = dot( u, vi );
			float a2 = dot( v, vi );

			if( length( vec2( a1, a2 ) ) <= 0.5 ) {

				dist = t;
				return true;

			}

		}

		return false;

	}

`,yg=`

	// add texel fetch functions for texture arrays
	vec4 texelFetch1D( sampler2DArray tex, int layer, uint index ) {

		uint width = uint( textureSize( tex, 0 ).x );
		uvec2 uv;
		uv.x = index % width;
		uv.y = index / width;

		return texelFetch( tex, ivec3( uv, layer ), 0 );

	}

	vec4 textureSampleBarycoord( sampler2DArray tex, int layer, vec3 barycoord, uvec3 faceIndices ) {

		return
			barycoord.x * texelFetch1D( tex, layer, faceIndices.x ) +
			barycoord.y * texelFetch1D( tex, layer, faceIndices.y ) +
			barycoord.z * texelFetch1D( tex, layer, faceIndices.z );

	}

`,ou=`

	// TODO: possibly this should be renamed something related to material or path tracing logic

	#ifndef RAY_OFFSET
	#define RAY_OFFSET 1e-4
	#endif

	// adjust the hit point by the surface normal by a factor of some offset and the
	// maximum component-wise value of the current point to accommodate floating point
	// error as values increase.
	vec3 stepRayOrigin( vec3 rayOrigin, vec3 rayDirection, vec3 offset, float dist ) {

		vec3 point = rayOrigin + rayDirection * dist;
		vec3 absPoint = abs( point );
		float maxPoint = max( absPoint.x, max( absPoint.y, absPoint.z ) );
		return point + offset * ( maxPoint + 1.0 ) * RAY_OFFSET;

	}

	// https://github.com/KhronosGroup/glTF/blob/main/extensions/2.0/Khronos/KHR_materials_volume/README.md#attenuation
	vec3 transmissionAttenuation( float dist, vec3 attColor, float attDist ) {

		vec3 ot = - log( attColor ) / attDist;
		return exp( - ot * dist );

	}

	vec3 getHalfVector( vec3 wi, vec3 wo, float eta ) {

		// get the half vector - assuming if the light incident vector is on the other side
		// of the that it's transmissive.
		vec3 h;
		if ( wi.z > 0.0 ) {

			h = normalize( wi + wo );

		} else {

			// Scale by the ior ratio to retrieve the appropriate half vector
			// From Section 2.2 on computing the transmission half vector:
			// https://blog.selfshadow.com/publications/s2015-shading-course/burley/s2015_pbs_disney_bsdf_notes.pdf
			h = normalize( wi + wo * eta );

		}

		h *= sign( h.z );
		return h;

	}

	vec3 getHalfVector( vec3 a, vec3 b ) {

		return normalize( a + b );

	}

	// The discrepancy between interpolated surface normal and geometry normal can cause issues when a ray
	// is cast that is on the top side of the geometry normal plane but below the surface normal plane. If
	// we find a ray like that we ignore it to avoid artifacts.
	// This function returns if the direction is on the same side of both planes.
	bool isDirectionValid( vec3 direction, vec3 surfaceNormal, vec3 geometryNormal ) {

		bool aboveSurfaceNormal = dot( direction, surfaceNormal ) > 0.0;
		bool aboveGeometryNormal = dot( direction, geometryNormal ) > 0.0;
		return aboveSurfaceNormal == aboveGeometryNormal;

	}

	// ray sampling x and z are swapped to align with expected background view
	vec2 equirectDirectionToUv( vec3 direction ) {

		// from Spherical.setFromCartesianCoords
		vec2 uv = vec2( atan( direction.z, direction.x ), acos( direction.y ) );
		uv /= vec2( 2.0 * PI, PI );

		// apply adjustments to get values in range [0, 1] and y right side up
		uv.x += 0.5;
		uv.y = 1.0 - uv.y;
		return uv;

	}

	vec3 equirectUvToDirection( vec2 uv ) {

		// undo above adjustments
		uv.x -= 0.5;
		uv.y = 1.0 - uv.y;

		// from Vector3.setFromSphericalCoords
		float theta = uv.x * 2.0 * PI;
		float phi = uv.y * PI;

		float sinPhi = sin( phi );

		return vec3( sinPhi * cos( theta ), cos( phi ), sinPhi * sin( theta ) );

	}

	// power heuristic for multiple importance sampling
	float misHeuristic( float a, float b ) {

		float aa = a * a;
		float bb = b * b;
		return aa / ( aa + bb );

	}

	// tentFilter from Peter Shirley's 'Realistic Ray Tracing (2nd Edition)' book, pg. 60
	// erichlof/THREE.js-PathTracing-Renderer/
	float tentFilter( float x ) {

		return x < 0.5 ? sqrt( 2.0 * x ) - 1.0 : 1.0 - sqrt( 2.0 - ( 2.0 * x ) );

	}
`,i0=`

	// https://www.shadertoy.com/view/wltcRS
	uvec4 WHITE_NOISE_SEED;

	void rng_initialize( vec2 p, int frame ) {

		// white noise seed
		WHITE_NOISE_SEED = uvec4( p, uint( frame ), uint( p.x ) + uint( p.y ) );

	}

	// https://www.pcg-random.org/
	void pcg4d( inout uvec4 v ) {

		v = v * 1664525u + 1013904223u;
		v.x += v.y * v.w;
		v.y += v.z * v.x;
		v.z += v.x * v.y;
		v.w += v.y * v.z;
		v = v ^ ( v >> 16u );
		v.x += v.y*v.w;
		v.y += v.z*v.x;
		v.z += v.x*v.y;
		v.w += v.y*v.z;

	}

	// returns [ 0, 1 ]
	float pcgRand() {

		pcg4d( WHITE_NOISE_SEED );
		return float( WHITE_NOISE_SEED.x ) / float( 0xffffffffu );

	}

	vec2 pcgRand2() {

		pcg4d( WHITE_NOISE_SEED );
		return vec2( WHITE_NOISE_SEED.xy ) / float(0xffffffffu);

	}

	vec3 pcgRand3() {

		pcg4d( WHITE_NOISE_SEED );
		return vec3( WHITE_NOISE_SEED.xyz ) / float( 0xffffffffu );

	}

	vec4 pcgRand4() {

		pcg4d( WHITE_NOISE_SEED );
		return vec4( WHITE_NOISE_SEED ) / float( 0xffffffffu );

	}
`,Mg=`

	uniform sampler2D stratifiedTexture;
	uniform sampler2D stratifiedOffsetTexture;

	uint sobolPixelIndex = 0u;
	uint sobolPathIndex = 0u;
	uint sobolBounceIndex = 0u;
	vec4 pixelSeed = vec4( 0 );

	vec4 rand4( int v ) {

		ivec2 uv = ivec2( v, sobolBounceIndex );
		vec4 stratifiedSample = texelFetch( stratifiedTexture, uv, 0 );
		return fract( stratifiedSample + pixelSeed.r ); // blue noise + stratified samples

	}

	vec3 rand3( int v ) {

		return rand4( v ).xyz;

	}

	vec2 rand2( int v ) {

		return rand4( v ).xy;

	}

	float rand( int v ) {

		return rand4( v ).x;

	}

	void rng_initialize( vec2 screenCoord, int frame ) {

		// tile the small noise texture across the entire screen
		ivec2 noiseSize = ivec2( textureSize( stratifiedOffsetTexture, 0 ) );
		ivec2 pixel = ivec2( screenCoord.xy ) % noiseSize;
		vec2 pixelWidth = 1.0 / vec2( noiseSize );
		vec2 uv = vec2( pixel ) * pixelWidth + pixelWidth * 0.5;

		// note that using "texelFetch" here seems to break Android for some reason
		pixelSeed = texture( stratifiedOffsetTexture, uv );

	}

`,Sg=`

	// diffuse
	float diffuseEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// https://schuttejoe.github.io/post/disneybsdf/
		float fl = schlickFresnel( wi.z, 0.0 );
		float fv = schlickFresnel( wo.z, 0.0 );

		float metalFactor = ( 1.0 - surf.metalness );
		float transFactor = ( 1.0 - surf.transmission );
		float rr = 0.5 + 2.0 * surf.roughness * fl * fl;
		float retro = rr * ( fl + fv + fl * fv * ( rr - 1.0f ) );
		float lambert = ( 1.0f - 0.5f * fl ) * ( 1.0f - 0.5f * fv );

		// TODO: subsurface approx?

		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		color = ( 1.0 - F ) * transFactor * metalFactor * wi.z * surf.color * ( retro + lambert ) / PI;

		return wi.z / PI;

	}

	vec3 diffuseDirection( vec3 wo, SurfaceRecord surf ) {

		vec3 lightDirection = sampleSphere( rand2( 11 ) );
		lightDirection.z += 1.0;
		lightDirection = normalize( lightDirection );

		return lightDirection;

	}

	// specular
	float specularEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// if roughness is set to 0 then D === NaN which results in black pixels
		float metalness = surf.metalness;
		float roughness = surf.filteredRoughness;

		float eta = surf.eta;
		float f0 = surf.f0;

		vec3 f0Color = mix( f0 * surf.specularColor * surf.specularIntensity, surf.color, surf.metalness );
		vec3 f90Color = vec3( mix( surf.specularIntensity, 1.0, surf.metalness ) );
		vec3 F = evaluateFresnel( dot( wo, wh ), eta, f0Color, f90Color );

		vec3 iridescenceF = evalIridescence( 1.0, surf.iridescenceIor, dot( wi, wh ), surf.iridescenceThickness, f0Color );
		F = mix( F, iridescenceF,  surf.iridescence );

		// PDF
		// See 14.1.1 Microfacet BxDFs in https://www.pbr-book.org/
		float incidentTheta = acos( wo.z );
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );
		float ggxPdf = D * G1 * max( 0.0, abs( dot( wo, wh ) ) ) / abs ( wo.z );

		color = wi.z * F * G * D / ( 4.0 * abs( wi.z * wo.z ) );
		return ggxPdf / ( 4.0 * dot( wo, wh ) );

	}

	vec3 specularDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 12 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}


	// transmission
	/*
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		// See section 4.2 in https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;
		bool thinFilm = surf.thinFilm;

		color = surf.transmission * surf.color;

		float denom = pow( eta * dot( wi, wh ) + dot( wo, wh ), 2.0 );
		return ggxPDF( wo, wh, filteredRoughness ) / denom;

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float filteredRoughness = surf.filteredRoughness;
		float eta = surf.eta;
		bool frontFace = surf.frontFace;

		// sample ggx vndf distribution which gives a new normal
		vec3 halfVector = ggxDirection(
			wo,
			vec2( filteredRoughness ),
			rand2( 13 )
		);

		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );
		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}

		return normalize( lightDirection );

	}
	*/

	// TODO: This is just using a basic cosine-weighted specular distribution with an
	// incorrect PDF value at the moment. Update it to correctly use a GGX distribution
	float transmissionEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		color = surf.transmission * surf.color;

		// PDF
		// float F = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		// float F = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );
		// if ( F >= 1.0 ) {

		// 	return 0.0;

		// }

		// return 1.0 / ( 1.0 - F );

		// reverted to previous to transmission. The above was causing black pixels
		float eta = surf.eta;
		float f0 = surf.f0;
		float cosTheta = min( wo.z, 1.0 );
		float sinTheta = sqrt( 1.0 - cosTheta * cosTheta );
		float reflectance = schlickFresnel( cosTheta, f0 );
		bool cannotRefract = eta * sinTheta > 1.0;
		if ( cannotRefract ) {

			return 0.0;

		}

		return 1.0 / ( 1.0 - reflectance );

	}

	vec3 transmissionDirection( vec3 wo, SurfaceRecord surf ) {

		float roughness = surf.filteredRoughness;
		float eta = surf.eta;
		vec3 halfVector = normalize( vec3( 0.0, 0.0, 1.0 ) + sampleSphere( rand2( 13 ) ) * roughness );
		vec3 lightDirection = refract( normalize( - wo ), halfVector, eta );

		if ( surf.thinFilm ) {

			lightDirection = - refract( normalize( - lightDirection ), - vec3( 0.0, 0.0, 1.0 ), 1.0 / eta );

		}
		return normalize( lightDirection );

	}

	// clearcoat
	float clearcoatEval( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf, inout vec3 color ) {

		float ior = 1.5;
		float f0 = iorRatioToF0( ior );
		bool frontFace = surf.frontFace;
		float roughness = surf.filteredClearcoatRoughness;

		float eta = frontFace ? 1.0 / ior : ior;
		float G = ggxShadowMaskG2( wi, wo, roughness );
		float D = ggxDistribution( wh, roughness );
		float F = schlickFresnel( dot( wi, wh ), f0 );

		float fClearcoat = F * D * G / ( 4.0 * abs( wi.z * wo.z ) );
		color = color * ( 1.0 - surf.clearcoat * F ) + fClearcoat * surf.clearcoat * wi.z;

		// PDF
		// See equation (27) in http://jcgt.org/published/0003/02/03/
		return ggxPDF( wo, wh, roughness ) / ( 4.0 * dot( wi, wh ) );

	}

	vec3 clearcoatDirection( vec3 wo, SurfaceRecord surf ) {

		// sample ggx vndf distribution which gives a new normal
		float roughness = surf.filteredClearcoatRoughness;
		vec3 halfVector = ggxDirection(
			wo,
			vec2( roughness ),
			rand2( 14 )
		);

		// apply to new ray by reflecting off the new normal
		return - reflect( wo, halfVector );

	}

	// sheen
	vec3 sheenColor( vec3 wo, vec3 wi, vec3 wh, SurfaceRecord surf ) {

		float cosThetaO = saturateCos( wo.z );
		float cosThetaI = saturateCos( wi.z );
		float cosThetaH = wh.z;

		float D = velvetD( cosThetaH, surf.sheenRoughness );
		float G = velvetG( cosThetaO, cosThetaI, surf.sheenRoughness );

		// See equation (1) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
		vec3 color = surf.sheenColor;
		color *= D * G / ( 4.0 * abs( cosThetaO * cosThetaI ) );
		color *= wi.z;

		return color;

	}

	// bsdf
	void getLobeWeights(
		vec3 wo, vec3 wi, vec3 wh, vec3 clearcoatWo, SurfaceRecord surf,
		inout float diffuseWeight, inout float specularWeight, inout float transmissionWeight, inout float clearcoatWeight
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;
		// float fEstimate = evaluateFresnelWeight( dot( wo, wh ), surf.eta, surf.f0 );
		float fEstimate = disneyFresnel( wo, wi, wh, surf.f0, surf.eta, surf.metalness );

		float transSpecularProb = mix( max( 0.25, fEstimate ), 1.0, metalness );
		float diffSpecularProb = 0.5 + 0.5 * metalness;

		diffuseWeight = ( 1.0 - transmission ) * ( 1.0 - diffSpecularProb );
		specularWeight = transmission * transSpecularProb + ( 1.0 - transmission ) * diffSpecularProb;
		transmissionWeight = transmission * ( 1.0 - transSpecularProb );
		clearcoatWeight = surf.clearcoat * schlickFresnel( clearcoatWo.z, 0.04 );

		float totalWeight = diffuseWeight + specularWeight + transmissionWeight + clearcoatWeight;
		diffuseWeight /= totalWeight;
		specularWeight /= totalWeight;
		transmissionWeight /= totalWeight;
		clearcoatWeight /= totalWeight;
	}

	float bsdfEval(
		vec3 wo, vec3 clearcoatWo, vec3 wi, vec3 clearcoatWi, SurfaceRecord surf,
		float diffuseWeight, float specularWeight, float transmissionWeight, float clearcoatWeight, inout float specularPdf, inout vec3 color
	) {

		float metalness = surf.metalness;
		float transmission = surf.transmission;

		float spdf = 0.0;
		float dpdf = 0.0;
		float tpdf = 0.0;
		float cpdf = 0.0;
		color = vec3( 0.0 );

		vec3 halfVector = getHalfVector( wi, wo, surf.eta );

		// diffuse
		if ( diffuseWeight > 0.0 && wi.z > 0.0 ) {

			dpdf = diffuseEval( wo, wi, halfVector, surf, color );
			color *= 1.0 - surf.transmission;

		}

		// ggx specular
		if ( specularWeight > 0.0 && wi.z > 0.0 ) {

			vec3 outColor;
			spdf = specularEval( wo, wi, getHalfVector( wi, wo ), surf, outColor );
			color += outColor;

		}

		// transmission
		if ( transmissionWeight > 0.0 && wi.z < 0.0 ) {

			tpdf = transmissionEval( wo, wi, halfVector, surf, color );

		}

		// sheen
		color *= mix( 1.0, sheenAlbedoScaling( wo, wi, surf ), surf.sheen );
		color += sheenColor( wo, wi, halfVector, surf ) * surf.sheen;

		// clearcoat
		if ( clearcoatWi.z >= 0.0 && clearcoatWeight > 0.0 ) {

			vec3 clearcoatHalfVector = getHalfVector( clearcoatWo, clearcoatWi );
			cpdf = clearcoatEval( clearcoatWo, clearcoatWi, clearcoatHalfVector, surf, color );

		}

		float pdf =
			dpdf * diffuseWeight
			+ spdf * specularWeight
			+ tpdf * transmissionWeight
			+ cpdf * clearcoatWeight;

		// retrieve specular rays for the shadows flag
		specularPdf = spdf * specularWeight + cpdf * clearcoatWeight;

		return pdf;

	}

	float bsdfResult( vec3 worldWo, vec3 worldWi, SurfaceRecord surf, inout vec3 color ) {

		if ( surf.volumeParticle ) {

			color = surf.color / ( 4.0 * PI );
			return 1.0 / ( 4.0 * PI );

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 wi = normalize( surf.normalInvBasis * worldWi );

		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		vec3 clearcoatWi = normalize( surf.clearcoatInvBasis * worldWi );

		vec3 wh = getHalfVector( wo, wi, surf.eta );
		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		getLobeWeights( wo, wi, wh, clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float specularPdf;
		return bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, specularPdf, color );

	}

	ScatterRecord bsdfSample( vec3 worldWo, SurfaceRecord surf ) {

		if ( surf.volumeParticle ) {

			ScatterRecord sampleRec;
			sampleRec.specularPdf = 0.0;
			sampleRec.pdf = 1.0 / ( 4.0 * PI );
			sampleRec.direction = sampleSphere( rand2( 16 ) );
			sampleRec.color = surf.color / ( 4.0 * PI );
			return sampleRec;

		}

		vec3 wo = normalize( surf.normalInvBasis * worldWo );
		vec3 clearcoatWo = normalize( surf.clearcoatInvBasis * worldWo );
		mat3 normalBasis = surf.normalBasis;
		mat3 invBasis = surf.normalInvBasis;
		mat3 clearcoatNormalBasis = surf.clearcoatBasis;
		mat3 clearcoatInvBasis = surf.clearcoatInvBasis;

		float diffuseWeight;
		float specularWeight;
		float transmissionWeight;
		float clearcoatWeight;
		// using normal and basically-reflected ray since we don't have proper half vector here
		getLobeWeights( wo, wo, vec3( 0, 0, 1 ), clearcoatWo, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight );

		float pdf[4];
		pdf[0] = diffuseWeight;
		pdf[1] = specularWeight;
		pdf[2] = transmissionWeight;
		pdf[3] = clearcoatWeight;

		float cdf[4];
		cdf[0] = pdf[0];
		cdf[1] = pdf[1] + cdf[0];
		cdf[2] = pdf[2] + cdf[1];
		cdf[3] = pdf[3] + cdf[2];

		if( cdf[3] != 0.0 ) {

			float invMaxCdf = 1.0 / cdf[3];
			cdf[0] *= invMaxCdf;
			cdf[1] *= invMaxCdf;
			cdf[2] *= invMaxCdf;
			cdf[3] *= invMaxCdf;

		} else {

			cdf[0] = 1.0;
			cdf[1] = 0.0;
			cdf[2] = 0.0;
			cdf[3] = 0.0;

		}

		vec3 wi;
		vec3 clearcoatWi;

		float r = rand( 15 );
		if ( r <= cdf[0] ) { // diffuse

			wi = diffuseDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[1] ) { // specular

			wi = specularDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[2] ) { // transmission / refraction

			wi = transmissionDirection( wo, surf );
			clearcoatWi = normalize( clearcoatInvBasis * normalize( normalBasis * wi ) );

		} else if ( r <= cdf[3] ) { // clearcoat

			clearcoatWi = clearcoatDirection( clearcoatWo, surf );
			wi = normalize( invBasis * normalize( clearcoatNormalBasis * clearcoatWi ) );

		}

		ScatterRecord result;
		result.pdf = bsdfEval( wo, clearcoatWo, wi, clearcoatWi, surf, diffuseWeight, specularWeight, transmissionWeight, clearcoatWeight, result.specularPdf, result.color );
		result.direction = normalize( surf.normalBasis * wi );

		return result;

	}

`,Tg=`

	// returns the hit distance given the material density
	float intersectFogVolume( Material material, float u ) {

		// https://raytracing.github.io/books/RayTracingTheNextWeek.html#volumes/constantdensitymediums
		return material.opacity == 0.0 ? INFINITY : ( - 1.0 / material.opacity ) * log( u );

	}

	ScatterRecord sampleFogVolume( SurfaceRecord surf, vec2 uv ) {

		ScatterRecord sampleRec;
		sampleRec.specularPdf = 0.0;
		sampleRec.pdf = 1.0 / ( 2.0 * PI );
		sampleRec.direction = sampleSphere( uv );
		sampleRec.color = surf.color;
		return sampleRec;

	}

`,bg=`

	// The GGX functions provide sampling and distribution information for normals as output so
	// in order to get probability of scatter direction the half vector must be computed and provided.
	// [0] https://www.cs.cornell.edu/~srm/publications/EGSR07-btdf.pdf
	// [1] https://hal.archives-ouvertes.fr/hal-01509746/document
	// [2] http://jcgt.org/published/0007/04/01/
	// [4] http://jcgt.org/published/0003/02/03/

	// trowbridge-reitz === GGX === GTR

	vec3 ggxDirection( vec3 incidentDir, vec2 roughness, vec2 uv ) {

		// TODO: try GGXVNDF implementation from reference [2], here. Needs to update ggxDistribution
		// function below, as well

		// Implementation from reference [1]
		// stretch view
		vec3 V = normalize( vec3( roughness * incidentDir.xy, incidentDir.z ) );

		// orthonormal basis
		vec3 T1 = ( V.z < 0.9999 ) ? normalize( cross( V, vec3( 0.0, 0.0, 1.0 ) ) ) : vec3( 1.0, 0.0, 0.0 );
		vec3 T2 = cross( T1, V );

		// sample point with polar coordinates (r, phi)
		float a = 1.0 / ( 1.0 + V.z );
		float r = sqrt( uv.x );
		float phi = ( uv.y < a ) ? uv.y / a * PI : PI + ( uv.y - a ) / ( 1.0 - a ) * PI;
		float P1 = r * cos( phi );
		float P2 = r * sin( phi ) * ( ( uv.y < a ) ? 1.0 : V.z );

		// compute normal
		vec3 N = P1 * T1 + P2 * T2 + V * sqrt( max( 0.0, 1.0 - P1 * P1 - P2 * P2 ) );

		// unstretch
		N = normalize( vec3( roughness * N.xy, max( 0.0, N.z ) ) );

		return N;

	}

	// Below are PDF and related functions for use in a Monte Carlo path tracer
	// as specified in Appendix B of the following paper
	// See equation (34) from reference [0]
	float ggxLamda( float theta, float roughness ) {

		float tanTheta = tan( theta );
		float tanTheta2 = tanTheta * tanTheta;
		float alpha2 = roughness * roughness;

		float numerator = - 1.0 + sqrt( 1.0 + alpha2 * tanTheta2 );
		return numerator / 2.0;

	}

	// See equation (34) from reference [0]
	float ggxShadowMaskG1( float theta, float roughness ) {

		return 1.0 / ( 1.0 + ggxLamda( theta, roughness ) );

	}

	// See equation (125) from reference [4]
	float ggxShadowMaskG2( vec3 wi, vec3 wo, float roughness ) {

		float incidentTheta = acos( wi.z );
		float scatterTheta = acos( wo.z );
		return 1.0 / ( 1.0 + ggxLamda( incidentTheta, roughness ) + ggxLamda( scatterTheta, roughness ) );

	}

	// See equation (33) from reference [0]
	float ggxDistribution( vec3 halfVector, float roughness ) {

		float a2 = roughness * roughness;
		a2 = max( EPSILON, a2 );
		float cosTheta = halfVector.z;
		float cosTheta4 = pow( cosTheta, 4.0 );

		if ( cosTheta == 0.0 ) return 0.0;

		float theta = acosSafe( halfVector.z );
		float tanTheta = tan( theta );
		float tanTheta2 = pow( tanTheta, 2.0 );

		float denom = PI * cosTheta4 * pow( a2 + tanTheta2, 2.0 );
		return ( a2 / denom );

	}

	// See equation (3) from reference [2]
	float ggxPDF( vec3 wi, vec3 halfVector, float roughness ) {

		float incidentTheta = acos( wi.z );
		float D = ggxDistribution( halfVector, roughness );
		float G1 = ggxShadowMaskG1( incidentTheta, roughness );

		return D * G1 * max( 0.0, dot( wi, halfVector ) ) / wi.z;

	}

`,Eg=`

	// XYZ to sRGB color space
	const mat3 XYZ_TO_REC709 = mat3(
		3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);

	vec3 fresnel0ToIor( vec3 fresnel0 ) {

		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );

	}

	// Conversion FO/IOR
	vec3 iorToFresnel0( vec3 transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );

	}

	// ior is a value between 1.0 and 3.0. 1.0 is air interface
	float iorToFresnel0( float transmittedIor, float incidentIor ) {

		return square( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ) );

	}

	// Fresnel equations for dielectric/dielectric interfaces. See https://belcour.github.io/blog/research/2017/05/01/brdf-thin-film.html
	vec3 evalSensitivity( float OPD, vec3 shift ) {

		float phase = 2.0 * PI * OPD * 1.0e-9;

		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );

		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - square( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * square( phase ) );
		xyz /= 1.0685e-7;

		vec3 srgb = XYZ_TO_REC709 * xyz;
		return srgb;

	}

	// See Section 4. Analytic Spectral Integration, A Practical Extension to Microfacet Theory for the Modeling of Varying Iridescence, https://hal.archives-ouvertes.fr/hal-01518344/document
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {

		vec3 I;

		// Force iridescenceIor -> outsideIOR when thinFilmThickness -> 0.0
		float iridescenceIor = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );

		// Evaluate the cosTheta on the base layer (Snell law)
		float sinTheta2Sq = square( outsideIOR / iridescenceIor ) * ( 1.0 - square( cosTheta1 ) );

		// Handle TIR:
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {

			return vec3( 1.0 );

		}

		float cosTheta2 = sqrt( cosTheta2Sq );

		// First interface
		float R0 = iorToFresnel0( iridescenceIor, outsideIOR );
		float R12 = schlickFresnel( cosTheta1, R0 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIor < outsideIOR ) {

			phi12 = PI;

		}

		float phi21 = PI - phi12;

		// Second interface
		vec3 baseIOR = fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) ); // guard against 1.0
		vec3 R1 = iorToFresnel0( baseIOR, iridescenceIor );
		vec3 R23 = schlickFresnel( cosTheta2, R1 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[0] < iridescenceIor ) {

			phi23[ 0 ] = PI;

		}

		if ( baseIOR[1] < iridescenceIor ) {

			phi23[ 1 ] = PI;

		}

		if ( baseIOR[2] < iridescenceIor ) {

			phi23[ 2 ] = PI;

		}

		// Phase shift
		float OPD = 2.0 * iridescenceIor * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;

		// Compound terms
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = square( T121 ) * R23 / ( vec3( 1.0 ) - R123 );

		// Reflectance term for m = 0 (DC term amplitude)
		vec3 C0 = R12 + Rs;
		I = C0;

		// Reflectance term for m > 0 (pairs of diracs)
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {

			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;

		}

		// Since out of gamut colors might be produced, negative color values are clamped to 0.
		return max( I, vec3( 0.0 ) );

	}

`,wg=`

	// See equation (2) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetD( float cosThetaH, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		float invAlpha = 1.0 / alpha;

		float sqrCosThetaH = cosThetaH * cosThetaH;
		float sinThetaH = max( 1.0 - sqrCosThetaH, 0.001 );

		return ( 2.0 + invAlpha ) * pow( sinThetaH, 0.5 * invAlpha ) / ( 2.0 * PI );

	}

	float velvetParamsInterpolate( int i, float oneMinusAlphaSquared ) {

		const float p0[5] = float[5]( 25.3245, 3.32435, 0.16801, -1.27393, -4.85967 );
		const float p1[5] = float[5]( 21.5473, 3.82987, 0.19823, -1.97760, -4.32054 );

		return mix( p1[i], p0[i], oneMinusAlphaSquared );

	}

	float velvetL( float x, float alpha ) {

		float oneMinusAlpha = 1.0 - alpha;
		float oneMinusAlphaSquared = oneMinusAlpha * oneMinusAlpha;

		float a = velvetParamsInterpolate( 0, oneMinusAlphaSquared );
		float b = velvetParamsInterpolate( 1, oneMinusAlphaSquared );
		float c = velvetParamsInterpolate( 2, oneMinusAlphaSquared );
		float d = velvetParamsInterpolate( 3, oneMinusAlphaSquared );
		float e = velvetParamsInterpolate( 4, oneMinusAlphaSquared );

		return a / ( 1.0 + b * pow( abs( x ), c ) ) + d * x + e;

	}

	// See equation (3) in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetLambda( float cosTheta, float alpha ) {

		return abs( cosTheta ) < 0.5 ? exp( velvetL( cosTheta, alpha ) ) : exp( 2.0 * velvetL( 0.5, alpha ) - velvetL( 1.0 - cosTheta, alpha ) );

	}

	// See Section 3, Shadowing Term, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float velvetG( float cosThetaO, float cosThetaI, float roughness ) {

		float alpha = max( roughness, 0.07 );
		alpha = alpha * alpha;

		return 1.0 / ( 1.0 + velvetLambda( cosThetaO, alpha ) + velvetLambda( cosThetaI, alpha ) );

	}

	float directionalAlbedoSheen( float cosTheta, float alpha ) {

		cosTheta = saturate( cosTheta );

		float c = 1.0 - cosTheta;
		float c3 = c * c * c;

		return 0.65584461 * c3 + 1.0 / ( 4.16526551 + exp( -7.97291361 * sqrt( alpha ) + 6.33516894 ) );

	}

	float sheenAlbedoScaling( vec3 wo, vec3 wi, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );
		float eWi = directionalAlbedoSheen( saturateCos( wi.z ), alpha );

		return min( 1.0 - maxSheenColor * eWo, 1.0 - maxSheenColor * eWi );

	}

	// See Section 5, Layering, in http://www.aconty.com/pdf/s2017_pbs_imageworks_sheen.pdf
	float sheenAlbedoScaling( vec3 wo, SurfaceRecord surf ) {

		float alpha = max( surf.sheenRoughness, 0.07 );
		alpha = alpha * alpha;

		float maxSheenColor = max( max( surf.sheenColor.r, surf.sheenColor.g ), surf.sheenColor.b );

		float eWo = directionalAlbedoSheen( saturateCos( wo.z ), alpha );

		return 1.0 - maxSheenColor * eWo;

	}

`,Ag=`

#ifndef FOG_CHECK_ITERATIONS
#define FOG_CHECK_ITERATIONS 30
#endif

// returns whether the given material is a fog material or not
bool isMaterialFogVolume( sampler2D materials, uint materialIndex ) {

	uint i = materialIndex * 45u;
	vec4 s14 = texelFetch1D( materials, i + 14u );
	return bool( int( s14.b ) & 4 );

}

// returns true if we're within the first fog volume we hit
bool bvhIntersectFogVolumeHit(
	vec3 rayOrigin, vec3 rayDirection,
	usampler2D materialIndexAttribute, sampler2D materials,
	inout Material material
) {

	material.fogVolume = false;

	for ( int i = 0; i < FOG_CHECK_ITERATIONS; i ++ ) {

		// find nearest hit
		uvec4 faceIndices = uvec4( 0u );
		vec3 faceNormal = vec3( 0.0, 0.0, 1.0 );
		vec3 barycoord = vec3( 0.0 );
		float side = 1.0;
		float dist = 0.0;
		bool hit = bvhIntersectFirstHit( bvh, rayOrigin, rayDirection, faceIndices, faceNormal, barycoord, side, dist );
		if ( hit ) {

			// if it's a fog volume return whether we hit the front or back face
			uint materialIndex = uTexelFetch1D( materialIndexAttribute, faceIndices.x ).r;
			if ( isMaterialFogVolume( materials, materialIndex ) ) {

				material = readMaterialInfo( materials, materialIndex );
				return side == - 1.0;

			} else {

				// move the ray forward
				rayOrigin = stepRayOrigin( rayOrigin, rayDirection, - faceNormal, dist );

			}

		} else {

			return false;

		}

	}

	return false;

}

`,Rg=`

	// step through multiple surface hits and accumulate color attenuation based on transmissive surfaces
	// returns true if a solid surface was hit
	bool attenuateHit(
		RenderState state,
		Ray ray, float rayDist,
		out vec3 color
	) {

		// store the original bounce index so we can reset it after
		uint originalBounceIndex = sobolBounceIndex;

		int traversals = state.traversals;
		int transmissiveTraversals = state.transmissiveTraversals;
		bool isShadowRay = state.isShadowRay;
		Material fogMaterial = state.fogMaterial;

		vec3 startPoint = ray.origin;

		// hit results
		SurfaceHit surfaceHit;

		color = vec3( 1.0 );

		bool result = true;
		for ( int i = 0; i < traversals; i ++ ) {

			sobolBounceIndex ++;

			int hitType = traceScene( ray, fogMaterial, surfaceHit );

			if ( hitType == FOG_HIT ) {

				result = true;
				break;

			} else if ( hitType == SURFACE_HIT ) {

				float totalDist = distance( startPoint, ray.origin + ray.direction * surfaceHit.dist );
				if ( totalDist > rayDist ) {

					result = false;
					break;

				}

				// TODO: attenuate the contribution based on the PDF of the resulting ray including refraction values
				// Should be able to work using the material BSDF functions which will take into account specularity, etc.
				// TODO: should we account for emissive surfaces here?

				uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
				Material material = readMaterialInfo( materials, materialIndex );

				// adjust the ray to the new surface
				bool isEntering = surfaceHit.side == 1.0;
				ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

				#if FEATURE_FOG

				if ( material.fogVolume ) {

					fogMaterial = material;
					fogMaterial.fogVolume = surfaceHit.side == 1.0;
					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;
					continue;

				}

				#endif

				if ( ! material.castShadow && isShadowRay ) {

					continue;

				}

				vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
				vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

				// albedo
				vec4 albedo = vec4( material.color, material.opacity );
				if ( material.map != - 1 ) {

					vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
					albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

				}

				if ( material.vertexColors ) {

					albedo *= vertexColor;

				}

				// alphaMap
				if ( material.alphaMap != - 1 ) {

					albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

				}

				// transmission
				float transmission = material.transmission;
				if ( material.transmissionMap != - 1 ) {

					vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
					transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

				}

				// metalness
				float metalness = material.metalness;
				if ( material.metalnessMap != - 1 ) {

					vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
					metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

				}

				float alphaTest = material.alphaTest;
				bool useAlphaTest = alphaTest != 0.0;
				float transmissionFactor = ( 1.0 - metalness ) * transmission;
				if (
					transmissionFactor < rand( 9 ) && ! (
						// material sidedness
						material.side != 0.0 && surfaceHit.side == material.side

						// alpha test
						|| useAlphaTest && albedo.a < alphaTest

						// opacity
						|| material.transparent && ! useAlphaTest && albedo.a < rand( 10 )
					)
				) {

					result = true;
					break;

				}

				if ( surfaceHit.side == 1.0 && isEntering ) {

					// only attenuate by surface color on the way in
					color *= mix( vec3( 1.0 ), albedo.rgb, transmissionFactor );

				} else if ( surfaceHit.side == - 1.0 ) {

					// attenuate by medium once we hit the opposite side of the model
					color *= transmissionAttenuation( surfaceHit.dist, material.attenuationColor, material.attenuationDistance );

				}

				bool isTransmissiveRay = dot( ray.direction, surfaceHit.faceNormal * surfaceHit.side ) < 0.0;
				if ( ( isTransmissiveRay || isEntering ) && transmissiveTraversals > 0 ) {

					i -= sign( transmissiveTraversals );
					transmissiveTraversals --;

				}

			} else {

				result = false;
				break;

			}

		}

		// reset the bounce index
		sobolBounceIndex = originalBounceIndex;
		return result;

	}

`,Cg=`

	vec3 ndcToRayOrigin( vec2 coord ) {

		vec4 rayOrigin4 = cameraWorldMatrix * invProjectionMatrix * vec4( coord, - 1.0, 1.0 );
		return rayOrigin4.xyz / rayOrigin4.w;
	}

	Ray getCameraRay() {

		vec2 ssd = vec2( 1.0 ) / resolution;

		// Jitter the camera ray by finding a uv coordinate at a random sample
		// around this pixel's UV coordinate for AA
		vec2 ruv = rand2( 0 );
		vec2 jitteredUv = vUv + vec2( tentFilter( ruv.x ) * ssd.x, tentFilter( ruv.y ) * ssd.y );
		Ray ray;

		#if CAMERA_TYPE == 2

			// Equirectangular projection
			vec4 rayDirection4 = vec4( equirectUvToDirection( jitteredUv ), 0.0 );
			vec4 rayOrigin4 = vec4( 0.0, 0.0, 0.0, 1.0 );

			rayDirection4 = cameraWorldMatrix * rayDirection4;
			rayOrigin4 = cameraWorldMatrix * rayOrigin4;

			ray.direction = normalize( rayDirection4.xyz );
			ray.origin = rayOrigin4.xyz / rayOrigin4.w;

		#else

			// get [- 1, 1] normalized device coordinates
			vec2 ndc = 2.0 * jitteredUv - vec2( 1.0 );
			ray.origin = ndcToRayOrigin( ndc );

			#if CAMERA_TYPE == 1

				// Orthographic projection
				ray.direction = ( cameraWorldMatrix * vec4( 0.0, 0.0, - 1.0, 0.0 ) ).xyz;
				ray.direction = normalize( ray.direction );

			#else

				// Perspective projection
				ray.direction = normalize( mat3( cameraWorldMatrix ) * ( invProjectionMatrix * vec4( ndc, 0.0, 1.0 ) ).xyz );

			#endif

		#endif

		#if FEATURE_DOF
		{

			// depth of field
			vec3 focalPoint = ray.origin + normalize( ray.direction ) * physicalCamera.focusDistance;

			// get the aperture sample
			// if blades === 0 then we assume a circle
			vec3 shapeUVW= rand3( 1 );
			int blades = physicalCamera.apertureBlades;
			float anamorphicRatio = physicalCamera.anamorphicRatio;
			vec2 apertureSample = blades == 0 ? sampleCircle( shapeUVW.xy ) : sampleRegularPolygon( blades, shapeUVW );
			apertureSample *= physicalCamera.bokehSize * 0.5 * 1e-3;

			// rotate the aperture shape
			apertureSample =
				rotateVector( apertureSample, physicalCamera.apertureRotation ) *
				saturate( vec2( anamorphicRatio, 1.0 / anamorphicRatio ) );

			// create the new ray
			ray.origin += ( cameraWorldMatrix * vec4( apertureSample, 0.0, 0.0 ) ).xyz;
			ray.direction = focalPoint - ray.origin;

		}
		#endif

		ray.direction = normalize( ray.direction );

		return ray;

	}

`,Pg=`

	vec3 directLightContribution( vec3 worldWo, SurfaceRecord surf, RenderState state, vec3 rayOrigin ) {

		vec3 result = vec3( 0.0 );

		// uniformly pick a light or environment map
		if( lightsDenom != 0.0 && rand( 5 ) < float( lights.count ) / lightsDenom ) {

			// sample a light or environment
			LightRecord lightRec = randomLightSample( lights.tex, iesProfiles, lights.count, rayOrigin, rand3( 6 ) );

			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, lightRec.direction ) < 0.0;
			if ( isSampleBelowSurface ) {

				lightRec.pdf = 0.0;

			}

			// check if a ray could even reach the light area
			Ray lightRay;
			lightRay.origin = rayOrigin;
			lightRay.direction = lightRec.direction;
			vec3 attenuatedColor;
			if (
				lightRec.pdf > 0.0 &&
				isDirectionValid( lightRec.direction, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, lightRay, lightRec.dist, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float lightMaterialPdf = bsdfResult( worldWo, lightRec.direction, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( lightMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					float lightPdf = lightRec.pdf / lightsDenom;
					float misWeight = lightRec.type == SPOT_LIGHT_TYPE || lightRec.type == DIR_LIGHT_TYPE || lightRec.type == POINT_LIGHT_TYPE ? 1.0 : misHeuristic( lightPdf, lightMaterialPdf );
					result = attenuatedColor * lightRec.emission * state.throughputColor * sampleColor * misWeight / lightPdf;

				}

			}

		} else if ( envMapInfo.totalSum != 0.0 && environmentIntensity != 0.0 ) {

			// find a sample in the environment map to include in the contribution
			vec3 envColor, envDirection;
			float envPdf = sampleEquirectProbability( rand2( 7 ), envColor, envDirection );
			envDirection = invEnvRotation3x3 * envDirection;

			// this env sampling is not set up for transmissive sampling and yields overly bright
			// results so we ignore the sample in this case.
			// TODO: this should be improved but how? The env samples could traverse a few layers?
			bool isSampleBelowSurface = ! surf.volumeParticle && dot( surf.faceNormal, envDirection ) < 0.0;
			if ( isSampleBelowSurface ) {

				envPdf = 0.0;

			}

			// check if a ray could even reach the surface
			Ray envRay;
			envRay.origin = rayOrigin;
			envRay.direction = envDirection;
			vec3 attenuatedColor;
			if (
				envPdf > 0.0 &&
				isDirectionValid( envDirection, surf.normal, surf.faceNormal ) &&
				! attenuateHit( state, envRay, INFINITY, attenuatedColor )
			) {

				// get the material pdf
				vec3 sampleColor;
				float envMaterialPdf = bsdfResult( worldWo, envDirection, surf, sampleColor );
				bool isValidSampleColor = all( greaterThanEqual( sampleColor, vec3( 0.0 ) ) );
				if ( envMaterialPdf > 0.0 && isValidSampleColor ) {

					// weight the direct light contribution
					envPdf /= lightsDenom;
					float misWeight = misHeuristic( envPdf, envMaterialPdf );
					result = attenuatedColor * environmentIntensity * envColor * state.throughputColor * sampleColor * misWeight / envPdf;

				}

			}

		}

		// Function changed to have a single return statement to potentially help with crashes on Mac OS.
		// See issue #470
		return result;

	}

`,Dg=`

	#define SKIP_SURFACE 0
	#define HIT_SURFACE 1
	int getSurfaceRecord(
		Material material, SurfaceHit surfaceHit, sampler2DArray attributesArray,
		float accumulatedRoughness,
		inout SurfaceRecord surf
	) {

		if ( material.fogVolume ) {

			vec3 normal = vec3( 0, 0, 1 );

			SurfaceRecord fogSurface;
			fogSurface.volumeParticle = true;
			fogSurface.color = material.color;
			fogSurface.emission = material.emissiveIntensity * material.emissive;
			fogSurface.normal = normal;
			fogSurface.faceNormal = normal;
			fogSurface.clearcoatNormal = normal;

			surf = fogSurface;
			return HIT_SURFACE;

		}

		// uv coord for textures
		vec2 uv = textureSampleBarycoord( attributesArray, ATTR_UV, surfaceHit.barycoord, surfaceHit.faceIndices.xyz ).xy;
		vec4 vertexColor = textureSampleBarycoord( attributesArray, ATTR_COLOR, surfaceHit.barycoord, surfaceHit.faceIndices.xyz );

		// albedo
		vec4 albedo = vec4( material.color, material.opacity );
		if ( material.map != - 1 ) {

			vec3 uvPrime = material.mapTransform * vec3( uv, 1 );
			albedo *= texture2D( textures, vec3( uvPrime.xy, material.map ) );

		}

		if ( material.vertexColors ) {

			albedo *= vertexColor;

		}

		// alphaMap
		if ( material.alphaMap != - 1 ) {

			albedo.a *= texture2D( textures, vec3( uv, material.alphaMap ) ).x;

		}

		// possibly skip this sample if it's transparent, alpha test is enabled, or we hit the wrong material side
		// and it's single sided.
		// - alpha test is disabled when it === 0
		// - the material sidedness test is complicated because we want light to pass through the back side but still
		// be able to see the front side. This boolean checks if the side we hit is the front side on the first ray
		// and we're rendering the other then we skip it. Do the opposite on subsequent bounces to get incoming light.
		float alphaTest = material.alphaTest;
		bool useAlphaTest = alphaTest != 0.0;
		if (
			// material sidedness
			material.side != 0.0 && surfaceHit.side != material.side

			// alpha test
			|| useAlphaTest && albedo.a < alphaTest

			// opacity
			|| material.transparent && ! useAlphaTest && albedo.a < rand( 3 )
		) {

			return SKIP_SURFACE;

		}

		// fetch the interpolated smooth normal
		vec3 normal = normalize( textureSampleBarycoord(
			attributesArray,
			ATTR_NORMAL,
			surfaceHit.barycoord,
			surfaceHit.faceIndices.xyz
		).xyz );

		// roughness
		float roughness = material.roughness;
		if ( material.roughnessMap != - 1 ) {

			vec3 uvPrime = material.roughnessMapTransform * vec3( uv, 1 );
			roughness *= texture2D( textures, vec3( uvPrime.xy, material.roughnessMap ) ).g;

		}

		// metalness
		float metalness = material.metalness;
		if ( material.metalnessMap != - 1 ) {

			vec3 uvPrime = material.metalnessMapTransform * vec3( uv, 1 );
			metalness *= texture2D( textures, vec3( uvPrime.xy, material.metalnessMap ) ).b;

		}

		// emission
		vec3 emission = material.emissiveIntensity * material.emissive;
		if ( material.emissiveMap != - 1 ) {

			vec3 uvPrime = material.emissiveMapTransform * vec3( uv, 1 );
			emission *= texture2D( textures, vec3( uvPrime.xy, material.emissiveMap ) ).xyz;

		}

		// transmission
		float transmission = material.transmission;
		if ( material.transmissionMap != - 1 ) {

			vec3 uvPrime = material.transmissionMapTransform * vec3( uv, 1 );
			transmission *= texture2D( textures, vec3( uvPrime.xy, material.transmissionMap ) ).r;

		}

		// normal
		if ( material.flatShading ) {

			// if we're rendering a flat shaded object then use the face normals - the face normal
			// is provided based on the side the ray hits the mesh so flip it to align with the
			// interpolated vertex normals.
			normal = surfaceHit.faceNormal * surfaceHit.side;

		}

		vec3 baseNormal = normal;
		if ( material.normalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( normal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, normal );

				vec3 uvPrime = material.normalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.normalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.normalScale;
				normal = vTBN * texNormal;

			}

		}

		normal *= surfaceHit.side;

		// clearcoat
		float clearcoat = material.clearcoat;
		if ( material.clearcoatMap != - 1 ) {

			vec3 uvPrime = material.clearcoatMapTransform * vec3( uv, 1 );
			clearcoat *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatMap ) ).r;

		}

		// clearcoatRoughness
		float clearcoatRoughness = material.clearcoatRoughness;
		if ( material.clearcoatRoughnessMap != - 1 ) {

			vec3 uvPrime = material.clearcoatRoughnessMapTransform * vec3( uv, 1 );
			clearcoatRoughness *= texture2D( textures, vec3( uvPrime.xy, material.clearcoatRoughnessMap ) ).g;

		}

		// clearcoatNormal
		vec3 clearcoatNormal = baseNormal;
		if ( material.clearcoatNormalMap != - 1 ) {

			vec4 tangentSample = textureSampleBarycoord(
				attributesArray,
				ATTR_TANGENT,
				surfaceHit.barycoord,
				surfaceHit.faceIndices.xyz
			);

			// some provided tangents can be malformed (0, 0, 0) causing the normal to be degenerate
			// resulting in NaNs and slow path tracing.
			if ( length( tangentSample.xyz ) > 0.0 ) {

				vec3 tangent = normalize( tangentSample.xyz );
				vec3 bitangent = normalize( cross( clearcoatNormal, tangent ) * tangentSample.w );
				mat3 vTBN = mat3( tangent, bitangent, clearcoatNormal );

				vec3 uvPrime = material.clearcoatNormalMapTransform * vec3( uv, 1 );
				vec3 texNormal = texture2D( textures, vec3( uvPrime.xy, material.clearcoatNormalMap ) ).xyz * 2.0 - 1.0;
				texNormal.xy *= material.clearcoatNormalScale;
				clearcoatNormal = vTBN * texNormal;

			}

		}

		clearcoatNormal *= surfaceHit.side;

		// sheenColor
		vec3 sheenColor = material.sheenColor;
		if ( material.sheenColorMap != - 1 ) {

			vec3 uvPrime = material.sheenColorMapTransform * vec3( uv, 1 );
			sheenColor *= texture2D( textures, vec3( uvPrime.xy, material.sheenColorMap ) ).rgb;

		}

		// sheenRoughness
		float sheenRoughness = material.sheenRoughness;
		if ( material.sheenRoughnessMap != - 1 ) {

			vec3 uvPrime = material.sheenRoughnessMapTransform * vec3( uv, 1 );
			sheenRoughness *= texture2D( textures, vec3( uvPrime.xy, material.sheenRoughnessMap ) ).a;

		}

		// iridescence
		float iridescence = material.iridescence;
		if ( material.iridescenceMap != - 1 ) {

			vec3 uvPrime = material.iridescenceMapTransform * vec3( uv, 1 );
			iridescence *= texture2D( textures, vec3( uvPrime.xy, material.iridescenceMap ) ).r;

		}

		// iridescence thickness
		float iridescenceThickness = material.iridescenceThicknessMaximum;
		if ( material.iridescenceThicknessMap != - 1 ) {

			vec3 uvPrime = material.iridescenceThicknessMapTransform * vec3( uv, 1 );
			float iridescenceThicknessSampled = texture2D( textures, vec3( uvPrime.xy, material.iridescenceThicknessMap ) ).g;
			iridescenceThickness = mix( material.iridescenceThicknessMinimum, material.iridescenceThicknessMaximum, iridescenceThicknessSampled );

		}

		iridescence = iridescenceThickness == 0.0 ? 0.0 : iridescence;

		// specular color
		vec3 specularColor = material.specularColor;
		if ( material.specularColorMap != - 1 ) {

			vec3 uvPrime = material.specularColorMapTransform * vec3( uv, 1 );
			specularColor *= texture2D( textures, vec3( uvPrime.xy, material.specularColorMap ) ).rgb;

		}

		// specular intensity
		float specularIntensity = material.specularIntensity;
		if ( material.specularIntensityMap != - 1 ) {

			vec3 uvPrime = material.specularIntensityMapTransform * vec3( uv, 1 );
			specularIntensity *= texture2D( textures, vec3( uvPrime.xy, material.specularIntensityMap ) ).a;

		}

		surf.volumeParticle = false;

		surf.faceNormal = surfaceHit.faceNormal;
		surf.normal = normal;

		surf.metalness = metalness;
		surf.color = albedo.rgb;
		surf.emission = emission;

		surf.ior = material.ior;
		surf.transmission = transmission;
		surf.thinFilm = material.thinFilm;
		surf.attenuationColor = material.attenuationColor;
		surf.attenuationDistance = material.attenuationDistance;

		surf.clearcoatNormal = clearcoatNormal;
		surf.clearcoat = clearcoat;

		surf.sheen = material.sheen;
		surf.sheenColor = sheenColor;

		surf.iridescence = iridescence;
		surf.iridescenceIor = material.iridescenceIor;
		surf.iridescenceThickness = iridescenceThickness;

		surf.specularColor = specularColor;
		surf.specularIntensity = specularIntensity;

		// apply perceptual roughness factor from gltf. sheen perceptual roughness is
		// applied by its brdf function
		// https://registry.khronos.org/glTF/specs/2.0/glTF-2.0.html#microfacet-surfaces
		surf.roughness = roughness * roughness;
		surf.clearcoatRoughness = clearcoatRoughness * clearcoatRoughness;
		surf.sheenRoughness = sheenRoughness;

		// frontFace is used to determine transmissive properties and PDF. If no transmission is used
		// then we can just always assume this is a front face.
		surf.frontFace = surfaceHit.side == 1.0 || transmission == 0.0;
		surf.eta = material.thinFilm || surf.frontFace ? 1.0 / material.ior : material.ior;
		surf.f0 = iorRatioToF0( surf.eta );

		// Compute the filtered roughness value to use during specular reflection computations.
		// The accumulated roughness value is scaled by a user setting and a "magic value" of 5.0.
		// If we're exiting something transmissive then scale the factor down significantly so we can retain
		// sharp internal reflections
		surf.filteredRoughness = applyFilteredGlossy( surf.roughness, accumulatedRoughness );
		surf.filteredClearcoatRoughness = applyFilteredGlossy( surf.clearcoatRoughness, accumulatedRoughness );

		// get the normal frames
		surf.normalBasis = getBasisFromNormal( surf.normal );
		surf.normalInvBasis = inverse( surf.normalBasis );

		surf.clearcoatBasis = getBasisFromNormal( surf.clearcoatNormal );
		surf.clearcoatInvBasis = inverse( surf.clearcoatBasis );

		return HIT_SURFACE;

	}
`,Ig=`

	struct Ray {

		vec3 origin;
		vec3 direction;

	};

	struct SurfaceHit {

		uvec4 faceIndices;
		vec3 barycoord;
		vec3 faceNormal;
		float side;
		float dist;

	};

	struct RenderState {

		bool firstRay;
		bool transmissiveRay;
		bool isShadowRay;
		float accumulatedRoughness;
		int transmissiveTraversals;
		int traversals;
		uint depth;
		vec3 throughputColor;
		Material fogMaterial;

	};

	RenderState initRenderState() {

		RenderState result;
		result.firstRay = true;
		result.transmissiveRay = true;
		result.isShadowRay = false;
		result.accumulatedRoughness = 0.0;
		result.transmissiveTraversals = 0;
		result.traversals = 0;
		result.throughputColor = vec3( 1.0 );
		result.depth = 0u;
		result.fogMaterial.fogVolume = false;
		return result;

	}

`,Lg=`

	#define NO_HIT 0
	#define SURFACE_HIT 1
	#define LIGHT_HIT 2
	#define FOG_HIT 3

	// Passing the global variable 'lights' into this function caused shader program errors.
	// So global variables like 'lights' and 'bvh' were moved out of the function parameters.
	// For more information, refer to: https://github.com/gkjohnson/three-gpu-pathtracer/pull/457
	int traceScene(
		Ray ray, Material fogMaterial, inout SurfaceHit surfaceHit
	) {

		int result = NO_HIT;
		bool hit = bvhIntersectFirstHit( bvh, ray.origin, ray.direction, surfaceHit.faceIndices, surfaceHit.faceNormal, surfaceHit.barycoord, surfaceHit.side, surfaceHit.dist );

		#if FEATURE_FOG

		if ( fogMaterial.fogVolume ) {

			// offset the distance so we don't run into issues with particles on the same surface
			// as other objects
			float particleDist = intersectFogVolume( fogMaterial, rand( 1 ) );
			if ( particleDist + RAY_OFFSET < surfaceHit.dist ) {

				surfaceHit.side = 1.0;
				surfaceHit.faceNormal = normalize( - ray.direction );
				surfaceHit.dist = particleDist;
				return FOG_HIT;

			}

		}

		#endif

		if ( hit ) {

			result = SURFACE_HIT;

		}

		return result;

	}

`;class Ug extends xl{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(t){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new ut},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new P3},cameraWorldMatrix:{value:new Ft},invProjectionMatrix:{value:new Ft},bvh:{value:new K2},attributesArray:{value:new V3},materialIndexAttribute:{value:new tu},materials:{value:new j3},textures:{value:new e0().texture},lights:{value:new H3},iesProfiles:{value:new e0(360,180,{type:Le,wrapS:Fe,wrapT:Fe}).texture},environmentIntensity:{value:1},environmentRotation:{value:new Ft},envMapInfo:{value:new L3},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new Ft},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new ng},stratifiedOffsetTexture:{value:new lg(64,1)}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vec4 mvPosition = vec4( position, 1.0 );
					mvPosition = modelViewMatrix * mvPosition;
					gl_Position = projectionMatrix * mvPosition;

					vUv = uv;

				}

			`,fragmentShader:`
				#define RAY_OFFSET 1e-4
				#define INFINITY 1e20

				precision highp isampler2D;
				precision highp usampler2D;
				precision highp sampler2DArray;
				vec4 envMapTexelToLinear( vec4 a ) { return a; }
				#include <common>

				// bvh intersection
				${Q2}
				${e3}
				${t3}

				// uniform structs
				${cg}
				${hg}
				${ug}
				${fg}
				${dg}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${Mg}

				#elif RANDOM_TYPE == 1 	// Sobol

					${i0}
					${su}
					${w3}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${i0}

					// Using the sobol functions seems to break the the compiler on MacOS
					// - specifically the "sobolReverseBits" function.
					uint sobolPixelIndex = 0u;
					uint sobolPathIndex = 0u;
					uint sobolBounceIndex = 0u;

					#define rand(v) pcgRand()
					#define rand2(v) pcgRand2()
					#define rand3(v) pcgRand3()
					#define rand4(v) pcgRand4()

				#endif

				// common
				${yg}
				${_g}
				${ou}
				${vg}
				${xg}

				// environment
				uniform EquirectHdrInfo envMapInfo;
				uniform mat4 environmentRotation;
				uniform float environmentIntensity;

				// lighting
				uniform sampler2DArray iesProfiles;
				uniform LightsInfo lights;

				// background
				uniform float backgroundBlur;
				uniform float backgroundAlpha;
				#if FEATURE_BACKGROUND_MAP

				uniform sampler2D backgroundMap;
				uniform mat4 backgroundRotation;
				uniform float backgroundIntensity;

				#endif

				// camera
				uniform mat4 cameraWorldMatrix;
				uniform mat4 invProjectionMatrix;
				#if FEATURE_DOF

				uniform PhysicalCamera physicalCamera;

				#endif

				// geometry
				uniform sampler2DArray attributesArray;
				uniform usampler2D materialIndexAttribute;
				uniform sampler2D materials;
				uniform sampler2DArray textures;
				uniform BVH bvh;

				// path tracer
				uniform int bounces;
				uniform int transmissiveBounces;
				uniform float filterGlossyFactor;
				uniform int seed;

				// image
				uniform vec2 resolution;
				uniform float opacity;

				varying vec2 vUv;

				// globals
				mat3 envRotation3x3;
				mat3 invEnvRotation3x3;
				float lightsDenom;

				// sampling
				${gg}
				${pg}
				${mg}

				${Ag}
				${bg}
				${wg}
				${Eg}
				${Tg}
				${Sg}

				float applyFilteredGlossy( float roughness, float accumulatedRoughness ) {

					return clamp(
						max(
							roughness,
							accumulatedRoughness * filterGlossyFactor * 5.0 ),
						0.0,
						1.0
					);

				}

				vec3 sampleBackground( vec3 direction, vec2 uv ) {

					vec3 sampleDir = sampleHemisphere( direction, uv ) * 0.5 * backgroundBlur;

					#if FEATURE_BACKGROUND_MAP

					sampleDir = normalize( mat3( backgroundRotation ) * direction + sampleDir );
					return backgroundIntensity * sampleEquirectColor( backgroundMap, sampleDir );

					#else

					sampleDir = normalize( envRotation3x3 * direction + sampleDir );
					return environmentIntensity * sampleEquirectColor( envMapInfo.map, sampleDir );

					#endif

				}

				${Ig}
				${Cg}
				${Lg}
				${Rg}
				${Pg}
				${Dg}

				void main() {

					// init
					rng_initialize( gl_FragCoord.xy, seed );
					sobolPixelIndex = ( uint( gl_FragCoord.x ) << 16 ) | uint( gl_FragCoord.y );
					sobolPathIndex = uint( seed );

					// get camera ray
					Ray ray = getCameraRay();

					// inverse environment rotation
					envRotation3x3 = mat3( environmentRotation );
					invEnvRotation3x3 = inverse( envRotation3x3 );
					lightsDenom =
						( environmentIntensity == 0.0 || envMapInfo.totalSum == 0.0 ) && lights.count != 0u ?
							float( lights.count ) :
							float( lights.count + 1u );

					// final color
					gl_FragColor = vec4( 0, 0, 0, 1 );

					// surface results
					SurfaceHit surfaceHit;
					ScatterRecord scatterRec;

					// path tracing state
					RenderState state = initRenderState();
					state.transmissiveTraversals = transmissiveBounces;
					#if FEATURE_FOG

					state.fogMaterial.fogVolume = bvhIntersectFogVolumeHit(
						ray.origin, - ray.direction,
						materialIndexAttribute, materials,
						state.fogMaterial
					);

					#endif

					for ( int i = 0; i < bounces; i ++ ) {

						sobolBounceIndex ++;

						state.depth ++;
						state.traversals = bounces - i;
						state.firstRay = i == 0 && state.transmissiveTraversals == transmissiveBounces;

						int hitType = traceScene( ray, state.fogMaterial, surfaceHit );

						// check if we intersect any lights and accumulate the light contribution
						// TODO: we can add support for light surface rendering in the else condition if we
						// add the ability to toggle visibility of the the light
						if ( ! state.firstRay && ! state.transmissiveRay ) {

							LightRecord lightRec;
							float lightDist = hitType == NO_HIT ? INFINITY : surfaceHit.dist;
							for ( uint i = 0u; i < lights.count; i ++ ) {

								if (
									intersectLightAtIndex( lights.tex, ray.origin, ray.direction, i, lightRec ) &&
									lightRec.dist < lightDist
								) {

									#if FEATURE_MIS

									// weight the contribution
									// NOTE: Only area lights are supported for forward sampling and can be hit
									float misWeight = misHeuristic( scatterRec.pdf, lightRec.pdf / lightsDenom );
									gl_FragColor.rgb += lightRec.emission * state.throughputColor * misWeight;

									#else

									gl_FragColor.rgb += lightRec.emission * state.throughputColor;

									#endif

								}

							}

						}

						if ( hitType == NO_HIT ) {

							if ( state.firstRay || state.transmissiveRay ) {

								gl_FragColor.rgb += sampleBackground( ray.direction, rand2( 2 ) ) * state.throughputColor;
								gl_FragColor.a = backgroundAlpha;

							} else {

								#if FEATURE_MIS

								// get the PDF of the hit envmap point
								vec3 envColor;
								float envPdf = sampleEquirect( envRotation3x3 * ray.direction, envColor );
								envPdf /= lightsDenom;

								// and weight the contribution
								float misWeight = misHeuristic( scatterRec.pdf, envPdf );
								gl_FragColor.rgb += environmentIntensity * envColor * state.throughputColor * misWeight;

								#else

								gl_FragColor.rgb +=
									environmentIntensity *
									sampleEquirectColor( envMapInfo.map, envRotation3x3 * ray.direction ) *
									state.throughputColor;

								#endif

							}
							break;

						}

						uint materialIndex = uTexelFetch1D( materialIndexAttribute, surfaceHit.faceIndices.x ).r;
						Material material = readMaterialInfo( materials, materialIndex );

						#if FEATURE_FOG

						if ( hitType == FOG_HIT ) {

							material = state.fogMaterial;
							state.accumulatedRoughness += 0.2;

						} else if ( material.fogVolume ) {

							state.fogMaterial = material;
							state.fogMaterial.fogVolume = surfaceHit.side == 1.0;

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );

							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );
							continue;

						}

						#endif

						// early out if this is a matte material
						if ( material.matte && state.firstRay ) {

							gl_FragColor = vec4( 0.0 );
							break;

						}

						// if we've determined that this is a shadow ray and we've hit an item with no shadow casting
						// then skip it
						if ( ! material.castShadow && state.isShadowRay ) {

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						SurfaceRecord surf;
						if (
							getSurfaceRecord(
								material, surfaceHit, attributesArray, state.accumulatedRoughness,
								surf
							) == SKIP_SURFACE
						) {

							// only allow a limited number of transparency discards otherwise we could
							// crash the context with too long a loop.
							i -= sign( state.transmissiveTraversals );
							state.transmissiveTraversals -= sign( state.transmissiveTraversals );

							ray.origin = stepRayOrigin( ray.origin, ray.direction, - surfaceHit.faceNormal, surfaceHit.dist );
							continue;

						}

						scatterRec = bsdfSample( - ray.direction, surf );
						state.isShadowRay = scatterRec.specularPdf < rand( 4 );

						bool isBelowSurface = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal ) < 0.0;
						vec3 hitPoint = stepRayOrigin( ray.origin, ray.direction, isBelowSurface ? - surf.faceNormal : surf.faceNormal, surfaceHit.dist );

						// next event estimation
						#if FEATURE_MIS

						gl_FragColor.rgb += directLightContribution( - ray.direction, surf, state, hitPoint );

						#endif

						// accumulate a roughness value to offset diffuse, specular, diffuse rays that have high contribution
						// to a single pixel resulting in fireflies
						// TODO: handle transmissive surfaces
						if ( ! surf.volumeParticle && ! isBelowSurface ) {

							// determine if this is a rough normal or not by checking how far off straight up it is
							vec3 halfVector = normalize( - ray.direction + scatterRec.direction );
							state.accumulatedRoughness += max(
								sin( acosApprox( dot( halfVector, surf.normal ) ) ),
								sin( acosApprox( dot( halfVector, surf.clearcoatNormal ) ) )
							);

							state.transmissiveRay = false;

						}

						// accumulate emissive color
						gl_FragColor.rgb += ( surf.emission * state.throughputColor );

						// skip the sample if our PDF or ray is impossible
						if ( scatterRec.pdf <= 0.0 || ! isDirectionValid( scatterRec.direction, surf.normal, surf.faceNormal ) ) {

							break;

						}

						// if we're bouncing around the inside a transmissive material then decrement
						// perform this separate from a bounce
						bool isTransmissiveRay = ! surf.volumeParticle && dot( scatterRec.direction, surf.faceNormal * surfaceHit.side ) < 0.0;
						if ( ( isTransmissiveRay || isBelowSurface ) && state.transmissiveTraversals > 0 ) {

							state.transmissiveTraversals --;
							i --;

						}

						//

						// handle throughput color transformation
						// attenuate the throughput color by the medium color
						if ( ! surf.frontFace ) {

							state.throughputColor *= transmissionAttenuation( surfaceHit.dist, surf.attenuationColor, surf.attenuationDistance );

						}

						#if FEATURE_RUSSIAN_ROULETTE

						// russian roulette path termination
						// https://www.arnoldrenderer.com/research/physically_based_shader_design_in_arnold.pdf
						uint minBounces = 3u;
						float depthProb = float( state.depth < minBounces );

						float rrProb = luminance( state.throughputColor * scatterRec.color / scatterRec.pdf );
						rrProb /= luminance( state.throughputColor );
						rrProb = sqrt( rrProb );
						rrProb = max( rrProb, depthProb );
						rrProb = min( rrProb, 1.0 );
						if ( rand( 8 ) > rrProb ) {

							break;

						}

						// perform sample clamping here to avoid bright pixels
						state.throughputColor *= min( 1.0 / rrProb, 20.0 );

						#endif

						// adjust the throughput and discard and exit if we find discard the sample if there are any NaNs
						state.throughputColor *= scatterRec.color / scatterRec.pdf;
						if ( any( isnan( state.throughputColor ) ) || any( isinf( state.throughputColor ) ) ) {

							break;

						}

						//

						// prepare for next ray
						ray.direction = scatterRec.direction;
						ray.origin = hitPoint;

					}

					gl_FragColor.a *= opacity;

					#if DEBUG_MODE == 1

					// output the number of rays checked in the path and number of
					// transmissive rays encountered.
					gl_FragColor.rgb = vec3(
						float( state.depth ),
						transmissiveBounces - state.transmissiveTraversals,
						0.0
					);
					gl_FragColor.a = 1.0;

					#endif

				}

			`}),this.setValues(t)}}function*Fg(){const{_renderer:i,_fsQuad:t,_blendQuad:e,_primaryTarget:n,_blendTargets:r,_sobolTarget:s,_subframe:a,alpha:o,material:l}=this,u=new Kt,f=new Kt,h=e.material;let[c,m]=r;for(;;){o?(h.opacity=this._opacityFactor/(this.samples+1),l.blending=Ke,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=Jn);const[g,_,d,p]=a,x=n.width,y=n.height;l.resolution.set(x*d,y*p),l.sobolTexture=s.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;const v=this.tiles.x||1,b=this.tiles.y||1,A=v*b,w=Math.ceil(x*d),P=Math.ceil(y*p),S=Math.floor(g*x),M=Math.floor(_*y),C=Math.ceil(w/v),U=Math.ceil(P/b);for(let L=0;L<b;L++)for(let B=0;B<v;B++){const G=i.getRenderTarget(),k=i.autoClear,q=i.getScissorTest();i.getScissor(u),i.getViewport(f);let W=B,tt=L;if(!this.stableTiles){const _t=this._currentTile%(v*b);W=_t%v,tt=~~(_t/v),this._currentTile=_t+1}const ct=b-tt-1;n.scissor.set(S+W*C,M+ct*U,Math.min(C,w-W*C),Math.min(U,P-ct*U)),n.viewport.set(S,M,w,P),i.setRenderTarget(n),i.setScissorTest(!0),i.autoClear=!1,t.render(i),i.setViewport(f),i.setScissor(u),i.setScissorTest(q),i.setRenderTarget(G),i.autoClear=k,o&&(h.target1=c.texture,h.target2=n.texture,i.setRenderTarget(m),e.render(i),i.setRenderTarget(G)),this.samples+=1/A,B===v-1&&L===b-1&&(this.samples=Math.round(this.samples)),yield}[c,m]=[m,c]}}const r0=new Ut;class s0{get material(){return this._fsQuad.material}set material(t){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),t.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=t}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(t){this._alpha!==t&&(t||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=t,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(t){this.camera=null,this.tiles=new ut(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Kt(0,0,1,1),this._opacityFactor=1,this._renderer=t,this._alpha=!1,this._fsQuad=new gr(new Ug),this._blendQuad=new gr(new b3),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new R3().generate(t),this._primaryTarget=new Ze(1,1,{format:Zt,type:ne,magFilter:Bt,minFilter:Bt}),this._blendTargets=[new Ze(1,1,{format:Zt,type:ne,magFilter:Bt,minFilter:Bt}),new Ze(1,1,{format:Zt,type:ne,magFilter:Bt,minFilter:Bt})],this._compileFunction=()=>{const e=this.compileMaterial(this._fsQuad._mesh);e.then(()=>{this._compilePromise===e&&(this._compilePromise=null)}),this._compilePromise=e},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(t){const{material:e}=this;e.cameraWorldMatrix.copy(t.matrixWorld),e.invProjectionMatrix.copy(t.projectionMatrixInverse),e.physicalCamera.updateFrom(t);let n=0;t.projectionMatrix.elements[15]>0&&(n=1),t.isEquirectCamera&&(n=2),e.setDefine("CAMERA_TYPE",n),this.camera=t}setSize(t,e){t=Math.ceil(t),e=Math.ceil(e),!(this._primaryTarget.width===t&&this._primaryTarget.height===e)&&(this._primaryTarget.setSize(t,e),this._blendTargets[0].setSize(t,e),this._blendTargets[1].setSize(t,e),this.reset())}getSize(t){t.x=this._primaryTarget.width,t.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:t,_primaryTarget:e,_blendTargets:n}=this,r=t.getRenderTarget(),s=t.getClearAlpha();t.getClearColor(r0),t.setRenderTarget(e),t.setClearColor(0,0),t.clearColor(),t.setRenderTarget(n[0]),t.setClearColor(0,0),t.clearColor(),t.setRenderTarget(n[1]),t.setClearColor(0,0),t.clearColor(),t.setClearColor(r0,s),t.setRenderTarget(r),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=Fg.call(this)),this._task.next())}}const _i=new ut,a0=new ut,Is=new Wo,Ls=new Ut;class Ng extends ln{constructor(t=512,e=512){super(new Float32Array(t*e*4),t,e,Zt,ne,Br,vn,Fe,fe,fe),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;const{data:t,width:e,height:n}=this.image;for(let r=0;r<e;r++)for(let s=0;s<n;s++){a0.set(e,n),_i.set(r/e,s/n),_i.x-=.5,_i.y=1-_i.y,Is.theta=_i.x*2*Math.PI,Is.phi=_i.y*Math.PI,Is.radius=1,this.generationCallback(Is,_i,a0,Ls);const o=4*(s*e+r);t[o+0]=Ls.r,t[o+1]=Ls.g,t[o+2]=Ls.b,t[o+3]=1}}copy(t){return super.copy(t),this.generationCallback=t.generationCallback,this}}const o0=new D;class lu extends Ng{constructor(t=512){super(t,t),this.topColor=new Ut().set(16777215),this.bottomColor=new Ut().set(0),this.exponent=2,this.generationCallback=(e,n,r,s)=>{o0.setFromSpherical(e);const a=o0.y*.5+.5;s.lerpColors(this.bottomColor,this.topColor,a**this.exponent)}}copy(t){return super.copy(t),this.topColor.copy(t.topColor),this.bottomColor.copy(t.bottomColor),this}}class Og extends un{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}constructor(t){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`
				uniform sampler2D map;
				uniform float opacity;
				varying vec2 vUv;

				vec4 clampedTexelFatch( sampler2D map, ivec2 px, int lod ) {

					vec4 res = texelFetch( map, ivec2( px.x, px.y ), 0 );

					#if defined( TONE_MAPPING )

					res.xyz = toneMapping( res.xyz );

					#endif

			  		return linearToOutputTexel( res );

				}

				void main() {

					vec2 size = vec2( textureSize( map, 0 ) );
					vec2 pxUv = vUv * size;
					vec2 pxCurr = floor( pxUv );
					vec2 pxFrac = fract( pxUv ) - 0.5;
					vec2 pxOffset;
					pxOffset.x = pxFrac.x > 0.0 ? 1.0 : - 1.0;
					pxOffset.y = pxFrac.y > 0.0 ? 1.0 : - 1.0;

					vec2 pxNext = clamp( pxOffset + pxCurr, vec2( 0.0 ), size - 1.0 );
					vec2 alpha = abs( pxFrac );

					vec4 p1 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxCurr.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxCurr.y ), 0 ),
						alpha.x
					);

					vec4 p2 = mix(
						clampedTexelFatch( map, ivec2( pxCurr.x, pxNext.y ), 0 ),
						clampedTexelFatch( map, ivec2( pxNext.x, pxNext.y ), 0 ),
						alpha.x
					);

					gl_FragColor = mix( p1, p2, alpha.y );
					gl_FragColor.a *= opacity;
					#include <premultiplied_alpha_fragment>

				}
			`}),this.setValues(t)}}class Bg extends un{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`
				#define ENVMAP_TYPE_CUBE_UV

				uniform samplerCube envMap;
				uniform float flipEnvMap;
				varying vec2 vUv;

				#include <common>
				#include <cube_uv_reflection_fragment>

				${ou}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}}class l0{constructor(t){this._renderer=t,this._quad=new gr(new Bg)}generate(t,e=null,n=null){if(!t.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");const r=t.images[0],s=this._renderer,a=this._quad;e===null&&(e=4*r.height),n===null&&(n=2*r.height);const o=new Ze(e,n,{type:ne,colorSpace:r.colorSpace}),l=r.height,u=Math.log2(l)-2,f=1/l,h=1/(3*Math.max(Math.pow(2,u),7*16));a.material.defines.CUBEUV_MAX_MIP=`${u}.0`,a.material.defines.CUBEUV_TEXEL_WIDTH=h,a.material.defines.CUBEUV_TEXEL_HEIGHT=f,a.material.uniforms.envMap.value=t,a.material.uniforms.flipEnvMap.value=t.isRenderTargetTexture?1:-1,a.material.needsUpdate=!0;const c=s.getRenderTarget(),m=s.autoClear;s.autoClear=!0,s.setRenderTarget(o),a.render(s),s.setRenderTarget(c),s.autoClear=m;const g=new Uint16Array(e*n*4),_=new Float32Array(e*n*4);s.readRenderTargetPixels(o,0,0,e,n,_),o.dispose();for(let p=0,x=_.length;p<x;p++)g[p]=Fn.toHalfFloat(_[p]);const d=new ln(g,e,n,Zt,Le);return d.minFilter=ju,d.magFilter=fe,d.wrapS=vn,d.wrapT=vn,d.mapping=Br,d.needsUpdate=!0,d}dispose(){this._quad.dispose()}}function zg(i){return i.extensions.get("EXT_float_blend")}const $i=new ut;class Hg{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(t){this._pathTracer.material.setDefine("FEATURE_MIS",t?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(t){this._pathTracer.material.transmissiveBounces=t}get bounces(){return this._pathTracer.material.bounces}set bounces(t){this._pathTracer.material.bounces=t}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(t){this._pathTracer.material.filterGlossyFactor=t}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(t){this._pathTracer.stableNoise=t}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(t){this._renderer=t,this._generator=new y3,this._pathTracer=new s0(t),this._queueReset=!1,this._clock=new jh,this._compilePromise=null,this._lowResPathTracer=new s0(t),this._lowResPathTracer.tiles.set(1,1),this._quad=new gr(new Og({map:null,transparent:!0,blending:Ke,premultipliedAlpha:t.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new ut(1024,1024),this.rasterizeSceneCallback=(e,n)=>{this._renderer.render(e,n)},this.renderToCanvasCallback=(e,n,r)=>{const s=n.autoClear;n.autoClear=!1,r.render(n),n.autoClear=s},this.setScene(new F0,new Ie)}setBVHWorker(t){this._generator.setBVHWorker(t)}setScene(t,e,n={}){t.updateMatrixWorld(!0),e.updateMatrixWorld();const r=this._generator;if(r.setObjects(t),this._buildAsync)return r.generateAsync(n.onProgress).then(s=>this._updateFromResults(t,e,s));{const s=r.generate();return this._updateFromResults(t,e,s)}}setSceneAsync(...t){this._buildAsync=!0;const e=this.setScene(...t);return this._buildAsync=!1,e}setCamera(t){this.camera=t,this.updateCamera()}updateCamera(){const t=this.camera;t.updateMatrixWorld(),this._pathTracer.setCamera(t),this._lowResPathTracer.setCamera(t),this.reset()}updateMaterials(){const t=this._pathTracer.material,e=this._renderer,n=this._materials,r=this.textureSize,s=X3(n);t.textures.setTextures(e,s,r.x,r.y),t.materials.updateFrom(n,s),this.reset()}updateLights(){const t=this.scene,e=this._renderer,n=this._pathTracer.material,r=q3(t),s=W3(r);n.lights.updateFrom(r,s),n.iesProfiles.setTextures(e,s),this.reset()}updateEnvironment(){const t=this.scene,e=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),e.backgroundBlur=t.backgroundBlurriness,e.backgroundIntensity=t.backgroundIntensity??1,e.backgroundRotation.makeRotationFromEuler(t.backgroundRotation).invert(),t.background===null)e.backgroundMap=null,e.backgroundAlpha=0;else if(t.background.isColor){this._colorBackground=this._colorBackground||new lu(16);const n=this._colorBackground;n.topColor.equals(t.background)||(n.topColor.set(t.background),n.bottomColor.set(t.background),n.update()),e.backgroundMap=n,e.backgroundAlpha=1}else if(t.background.isCubeTexture){if(t.background!==this._previousBackground){const n=new l0(this._renderer).generate(t.background);this._internalBackground=n,e.backgroundMap=n,e.backgroundAlpha=1}}else e.backgroundMap=t.background,e.backgroundAlpha=1;if(e.environmentIntensity=t.environmentIntensity??1,e.environmentRotation.makeRotationFromEuler(t.environmentRotation).invert(),this._previousEnvironment!==t.environment)if(t.environment!==null)if(t.environment.isCubeTexture){const n=new l0(this._renderer).generate(t.environment);e.envMapInfo.updateFrom(n)}else e.envMapInfo.updateFrom(t.environment);else e.environmentIntensity=0;this._previousEnvironment=t.environment,this._previousBackground=t.background,this.reset()}_updateFromResults(t,e,n){const{materials:r,geometry:s,bvh:a,bvhChanged:o}=n;this._materials=r;const u=this._pathTracer.material;return o&&(u.bvh.updateFrom(a),u.attributesArray.updateFrom(s.attributes.normal,s.attributes.tangent,s.attributes.uv,s.attributes.color),u.materialIndexAttribute.updateFrom(s.attributes.materialIndex)),this._previousScene=t,this.scene=t,this.camera=e,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),n}renderSample(){const t=this._lowResPathTracer,e=this._pathTracer,n=this._renderer,r=this._clock,s=this._quad;this._updateScale(),this._queueReset&&(e.reset(),t.reset(),this._queueReset=!1,s.material.opacity=0,r.start());const a=r.getDelta()*1e3,o=r.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=o&&!this.isCompiling&&e.update(),e.alpha=e.material.backgroundAlpha!==1||!zg(n),t.alpha=e.alpha,this.renderToCanvas){const l=this._renderer,u=this.minSamples;if(o>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?s.material.opacity=Math.min(s.material.opacity+a/this.fadeDuration,1):s.material.opacity=1),!this.enablePathTracing||this.samples<u||s.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){t.samples<1&&(t.material=e.material,t.update());const f=s.material.opacity;s.material.opacity=1-s.material.opacity,s.material.map=t.target.texture,s.render(l),s.material.opacity=f}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&s.material.opacity>0&&(s.material.opacity<1&&(s.material.blending=this.dynamicLowRes?ro:Jn),s.material.map=e.target.texture,this.renderToCanvasCallback(e.target,l,s),s.material.blending=Ke)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._renderQuad.dispose(),this._renderQuad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize($i);const t=Math.floor(this.renderScale*$i.x),e=Math.floor(this.renderScale*$i.y);if(this._pathTracer.getSize($i),$i.x!==t||$i.y!==e){const n=this.lowResScale;this._pathTracer.setSize(t,e),this._lowResPathTracer.setSize(Math.floor(t*n),Math.floor(e*n))}}}}class kg extends qh{constructor(...t){super(...t),this.iesMap=null,this.radius=0}copy(t,e){return super.copy(t,e),this.iesMap=t.iesMap,this.radius=t.radius,this}}let c0=function(i,t,e){let n=Math.cos(i)*Math.sin(e),r=Math.sin(i)*Math.sin(e),s=Math.cos(t)*Math.cos(e),a=Math.sin(t)*Math.cos(e);return new Kt(n,s,-r,a)},u0=function(i){return new D(i.y,-i.x,i.w).divideScalar(1-i.z)},Us=function(i=glassColor,t=!1){let e={color:i,roughness:.6,metalness:0};return t&&(e.transparent=!0,e.opacity=1,e.transmission=.99,e.ior=1.05,e.thickness=.01),new O0(e)},In={red:13908795,blue:4360181,purple:8210109,glass:13232895};class h0 extends Te{constructor(t=(r,s,a)=>a.set(r,s,Math.cos(r)*Math.sin(s)),e=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};const r=[],s=[],a=[],o=[],l=1e-5,u=new D,f=new D,h=new D,c=new D,m=new D,g=e+1;for(let _=0;_<=n;_++){const d=_/n;for(let p=0;p<=e;p++){const x=p/e;t(x,d,f),s.push(f.x,f.y,f.z),x-l>=0?(t(x-l,d,h),c.subVectors(f,h)):(t(x+l,d,h),c.subVectors(h,f)),d-l>=0?(t(x,d-l,h),m.subVectors(f,h)):(t(x,d+l,h),m.subVectors(h,f)),u.crossVectors(c,m).normalize(),a.push(u.x,u.y,u.z),o.push(x,d)}}for(let _=0;_<n;_++)for(let d=0;d<e;d++){const p=_*g+d,x=_*g+d+1,y=(_+1)*g+d+1,v=(_+1)*g+d;r.push(p,x,v),r.push(x,y,v)}this.setIndex(r),this.setAttribute("position",new ye(s,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const f0=new Go([new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)]);class Vg extends Te{constructor(t=f0,e=f0,n=64,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radii:e,radialSegments:r,closed:s};const a=t.computeFrenetFrames(n,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,u=new ut;let f=new D,h;const c=[],m=[],g=[],_=[];d(),this.setIndex(_),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(g,2));function d(){for(let v=0;v<n;v++)p(v);p(s===!1?n:0),y(),x()}function p(v){f=t.getPointAt(v/n,f),h=e.getPointAt(v/n,h);const b=a.normals[v],A=a.binormals[v];for(let w=0;w<=r;w++){const P=w/r*Math.PI*2,S=Math.sin(P),M=-Math.cos(P);l.x=M*b.x+S*A.x,l.y=M*b.y+S*A.y,l.z=M*b.z+S*A.z,l.normalize(),m.push(l.x,l.y,l.z),o.x=f.x+h.x*l.x,o.y=f.y+h.x*l.y,o.z=f.z+h.x*l.z,c.push(o.x,o.y,o.z)}}function x(){for(let v=1;v<=n;v++)for(let b=1;b<=r;b++){const A=(r+1)*(v-1)+(b-1),w=(r+1)*v+(b-1),P=(r+1)*v+b,S=(r+1)*(v-1)+b;_.push(A,w,S),_.push(w,P,S)}}function y(){for(let v=0;v<=n;v++)for(let b=0;b<=r;b++)u.x=v/n,u.y=b/r,g.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Gg{constructor(t,e){this.coordCurve=t,this.length=e.length,this.area=e.area,this.tau=e.tau,this.fromTauCoords=e.fromTauCoords,this.res=256;let n=function(o){let l=25e-5,u=Math.floor(o/l),f=0,h=0;for(let c=0;c<u;c++){let m=t(h),g=t(h+l),_=Math.sin(m.phi/2),d=g.theta-m.theta;f+=_*_*d,h+=l}return f},r=function(o){let l=0,u=0,f=3e3,h=2*Math.PI/f;for(let c=0;c<f;c++){let m=t(l),g=t(l+h),_=Math.sin(m.phi),d=g.theta-m.theta,p=g.phi-m.phi,x=_*_*d*d+p*p,y=Math.sqrt(x);if(u+=y,u>o)break;l+=h}return l},s=function(o){let l=new ut(e.area/2,e.length/2);for(;o.y>e.length/2;)o=o.sub(l);return o};this.toFundamentalDomain=s;let a=function(o){o=s(o);let l=o.x,u=o.y,f=r(2*u),h=t(f),c=h.phi,m=h.theta,g=n(f),_=c0(m+l-g,l-g,c/2);return u0(_)};this.isometricImage=a}getSurface(t=In.glass,e=!1){let n=this.coordCurve,r=function(o,l,u){let f=2*Math.PI*o,h=2*Math.PI*l,c=n(h),m=c.phi,g=c.theta,_=c0(g+f,f,m/2),d=u0(_);u.set(d.x,d.y,d.z)},s=new h0(r,this.res,this.res),a=Us(t,e);return new Ae(s,a)}getSubSurface(t,e=In.glass,n=!1){let r=this.isometricImage,s=function(l,u,f){let h=t(l,u),c=r(h);f.set(c.x,c.y,c.z)},a=new h0(s,512,512);a.computeVertexNormals();let o=Us(e,n);return o.side=rn,new Ae(a,o)}getLift(t,e=In.red,n=.05,r=!1,s=!1){let a=[],o=[];for(let c=0;c<this.res+1;c++){let m=c/this.res,g=t(m),_=this.isometricImage(g);a.push(_);let d=n*(1+_.lengthSq());o.push(new D(d,d,d))}let l=new Go(a),u=new Go(o),f=new Vg(l,u,2*this.res,16,s),h=Us(e,r);return new Ae(f,h)}getFiberAt(t,e=In.blue,n=.025,r=!1){let a=new ut(this.area/2,this.length/2).multiplyScalar(t),o=new ut(2*Math.PI,0),l=function(u){return a.clone().add(o.clone().multiplyScalar(u))};return this.getLift(l,e,n,r,!0)}getOppEdgeAt(t,e=In.blue,n=.025,r=!1){let s=new ut(-this.area/2,this.length/2),a=new ut(2*Math.PI,0).multiplyScalar(t),o=function(l){return a.clone().add(s.clone().multiplyScalar(l))};return this.getLift(o,e,n,r,!0)}getEdgeAt(t,e=In.blue,n=.025,r=!1){let s=new ut(this.area/2,this.length/2),a=new ut(2*Math.PI,0).multiplyScalar(t),o=function(l){return a.clone().add(s.clone().multiplyScalar(l))};return this.getLift(o,e,n,r,!0)}getGridlines(t,e=In.blue,n=.025,r=!1){let s=new Qi;for(let a=0;a<t+1;a++){let o=this.getFiberAt(a/t,e,n,r),l=this.getEdgeAt(a/t,e,n,r);s.add(o),s.add(l)}return s}getPoint(t,e=In.red,n=.05,r=!1){let s=this.isometricImage(t),a=1+s.lengthSq(),o=new hl(n*a),l=Us(e,r),u=new Ae(o,l);return u.position.set(s.x,s.y,s.z),u}}const Ml=new ut(1/2,Math.sqrt(11)/2);let Wg=4*Math.PI*Ml,Xg=4*Math.PI*Ml.y,qg=function(i){let t=.07,e=5.705,n=11;return{phi:Math.PI/2+t*e*Math.cos(n*i),theta:i+t*Math.sin(2*n*i)}},Yg=function(i){let t=i[0],e=i[1];return new ut(t,e).multiplyScalar(2*Math.PI)},jg={area:Wg,length:Xg,tau:Ml,fromTauCoords:Yg};const d0=[[.10035842,1.50215329],[.65232974,.71865607],[.46236559,1.17038274],[.31899641,1.52268632],[.50896057,1.07095965],[-.2222222,.93803529],[-.3655913,1.29033887],[.18637992,.50684165],[.42114695,1.64102142],[.43189964,.27287317],[.0985663,1.07690342],[.28853046,.62517674],[-.0448028,1.429207],[.50716845,.64570977],[-.0698924,.29989031],[.69713261,.1939831],[.36379928,.99801335],[.9157706,.21451613],[.05734767,1.54754209],[.60931899,.76404487],[.2204301,1.35031693],[.77240143,.56681971],[.4390681,1.37084996],[.46594982,1.11634845],[-.2652329,.98342409],[.32258064,1.46865203],[.14336917,.55223045],[.54121863,1.48918506],[0,.90453403],[.55197132,.12103681],[.24551971,.67056555],[.40860215,.47334039],[.10215053,1.02286913],[.65412186,.2393719],[.32078853,1.04340216],[-.0931899,.50035753],[.51075268,.59167548],[.87275985,.25990494],[.17741935,1.39570574],[.36738351,.94397906],[.7562724,.357707],[.91935483,.16048184],[.72939068,.61220851],[.39605734,1.41623877],[.5860215,.96451209],[.27956989,1.51404083],[.29032258,.14589258],[-.0430107,.94992283],[.50896057,.16642561],[.54480286,1.43515077],[-.1863799,1.30222641],[.36559139,.51872919],[-.3297491,1.65452999],[.22222222,.87103277],[.77419354,.08753555],[.46774193,.63706429],[.1344086,1.44109454],[.32437275,.98936787],[.87634408,.20587064],[.68637992,.65759732],[.29749103,1.24386938],[.18100358,1.34167144],[.73297491,.55817422],[.54301075,1.0099009],[.00179211,.42524987],[.39964157,1.36220447],[-.141577,.77755344],[.24731182,.19128139],[.64516129,1.12823599],[-.4749103,1.5815837],[.50179211,1.48053957],[-.0663082,1.15039005],[-.2293906,1.34761522],[.5125448,.11239132],[.32258064,.56411799],[.17921146,.91642157],[.36917562,.4646949],[.73118279,.13292435],[.03584229,1.26872515],[.58781362,.48522793],[-.1075268,1.62102873],[.44444444,.83753151],[.25448028,1.28925818],[.281362,1.03475667],[.83333333,.25125945],[.11111111,1.64156176],[.66308243,.85806454],[.13799283,1.38706025],[.68996415,.60356303],[-.0412186,.47063867],[.35663082,1.40759328],[.54659498,.95586661],[-.1845878,.82294225],[.36738351,.03944503],[.4032258,1.30817018],[-.3279569,1.17524583],[.22401433,.39174861],[-.1093189,1.19577886],[.46953405,.15778013],[-.2526881,1.54808244],[.29928315,.76458521],[.32616487,.5100837],[-.0071684,1.31411396],[.54480286,.53061673],[.73476702,.07889006],[.21146953,1.33464699],[.40143369,.88292031],[.59139784,.43119364],[.95340501,.09942309],[.25806451,1.23522389],[.81003584,.45172667],[.62007168,.90345334],[.4767025,1.25575692],[.50358422,1.00125541],[-.2275985,.86833105],[.33333333,1.6080605],[.36021505,1.35355899],[.18100358,.43713741],[.57885304,1.37409202],[-.1523297,1.24116766],[.0376344,.78944099],[.58960573,.00594377],[-.2956989,1.59347124],[-.1057347,1.14174457],[.44623655,.35824735],[.2562724,.80997402],[.11290322,1.1622776],[.13978494,.90777609],[.69175627,.12427886],[.66487455,.37878038],[-.0304659,1.51458118],[.52150537,.73108395],[.54838709,.47658244],[.35842293,.92830912],[.91039426,.1448119],[.21505376,1.2806127],[.40501792,.82888602],[.95698924,.0453888],[.76702508,.49711547],[.07168458,1.63291627],[.62365591,.84941905],[.43369175,1.30114573],[.08243727,.26476802],[.29032258,1.6534493],[.3172043,1.39894779],[.48028673,1.20172263],[-.250896,1.06879827],[.32795698,.03079954],[-.0053763,.83482979],[.54659498,.05133257],[.15770609,.63760463],[-.1487455,1.18713337],[.4032258,.40363615],[-.2921146,1.53943695],[.25985663,.75593973],[.06989247,1.2076664],[.62186379,.42416918],[-.0734767,1.55996998],[.11648745,1.10824331],[.50537634,.52197125],[.66845878,.32474608],[.47849462,.77647276],[.33512544,1.12877634],[.36200716,.87427483],[.91397849,.0907776],[.88709677,.34527912],[.58064516,.89480786],[.77060931,.44308118],[.03942652,.31015683],[.43727598,1.24711143],[-.2939068,1.11418708],[-.1039426,.6624604],[.29390681,1.59941501],[-.4372759,1.46649066],[.11469534,.68299344],[-.0286738,1.03529701],[.52329749,.25179979],[-.3351254,1.58482575],[.21684587,.80132853],[.40681003,.34960186],[.7688172,.01783131],[-.1164874,1.60535878],[.0734767,1.15363211],[.62544802,.37013489],[.43548387,.82186156],[.04659498,1.40813362],[-.0698924,1.50593569],[.48207885,.72243847],[.29211469,1.17416514],[.14874551,1.52646872],[.70071684,.7429715],[.72759856,.48846999],[.1594982,.15832047],[-.0035842,.35554563],[.39426523,1.29250024],[.55734767,1.09527508],[-.1469534,.70784921],[.25089605,1.64480382],[-.2903225,1.06015279],[.26164874,.27665557],[.07168458,.72838224],[-.0716845,1.08068582],[.11827956,.62895914],[.48028673,.2971886],[.51612903,1.56591375],[-.2150537,1.4329894],[.33691756,.64949217],[.36379928,.39499066],[.00358422,1.45352243],[.19354838,1.00179575],[.74551971,.21829853],[.2204301,.74729424],[.03046594,1.19902092],[.58243727,.41552369],[-.1129032,1.55132449],[.4390681,.76782727],[.62903225,.3161006],[.10573476,1.57185752],[.29569892,1.12013085],[.84767025,.33663363],[.65770609,.7883603],[.11648745,.20370927],[.15232974,1.47243443],[.70430107,.68893721],[.51433691,1.14066388],[-.0268817,.55601285],[.37096774,1.49296746],[-.3333333,1.10554159],[.38172043,.12481921],[.21863799,.32204437],[.61648745,1.25899898],[.07526881,.67434795],[.47311827,1.61130256],[-.2580645,1.4783782],[-.0681003,1.02665153],[.48387096,.24315431],[.29390681,.69488098],[.15053763,1.04718456],[.70250896,.26368734],[.17741935,.79268305],[.72939068,.00918582],[.34050179,.59545788],[.00716845,1.39948814],[.55913978,.61599091],[.5860215,.3614894],[.25268817,1.16551965],[.80465949,.38202243],[.10931899,1.51782323],[.66129032,.73432601],[-.0698924,.60140166],[.12007168,.14967498],[.32795698,1.53835626],[.51792114,1.08662959],[-.2132616,.95370523],[.33870967,.17020801],[-.3566308,1.30600881],[.1953405,.52251159],[-.1379928,1.32654184],[-.1111111,1.07204033],[.44086021,.28854311],[.27060931,.8953482],[-.2544802,1.42434391],[.29749103,.64084669],[.10752688,1.09257336],[.6594982,.30907614],[-.0358422,1.44487694],[.15412186,.99315027],[.70609318,.20965304],[.51612903,.66137972],[.37275985,1.0136833],[.92473118,.23018608],[.06630824,1.56321204],[.61827956,.77971482],[.22939068,1.36598688],[.781362,.58248965],[.07706093,.19506379],[.47491039,1.13201839],[-.2562724,.99909404],[-.0663082,.54736736],[.29569892,.21559682],[-.0931899,.80186888],[-.3996415,1.35139762],[-.2096774,.89967094],[.3422939,.11617372],[.15232974,.56790039],[.17921146,.31339888],[-.1810035,1.37193065],[.00896057,.92020397],[.56093189,.13670675],[-.297491,1.46973271],[.25448028,.68623549],[-.1344086,1.27250755],[.41756272,.48901033],[.08422939,1.29304058],[.11111111,1.03853907],[.66308243,.25504185],[-.032258,1.39084265],[.51971326,.60734543],[.3297491,1.0590721],[.18637992,1.41137568],[.37634408,.95964901],[.92831541,.17615178],[.73835125,.62787846],[.19713261,.04322743],[.59498207,.98018204],[-.1362007,.84725768],[-.1093189,.59275617],[-.2795698,1.19956126],[-.2526881,.94505975],[.29928315,.16156253],[.27240143,.41606404],[-.0340501,.96559278],[.15591397,.5138661],[.51792114,.18209556],[-.1774193,1.31789636],[.37455197,.53439913],[.56451612,.08267246],[.04121863,1.33842939],[.23118279,.88670271],[.78315412,.10320549],[-.0752688,1.43623145],[.4767025,.65273423],[.33333333,1.00503781],[.88530465,.22154059],[.15412186,.08861623],[.55197132,1.02557084],[.74193548,.57384417],[-.1792114,.89264648],[.01075268,.44091981],[.40860215,1.37787442],[-.3225806,1.24495006],[-.1326164,.79322339],[.41935483,.00972617],[.22939068,.46145284],[-.2956989,.99044855],[-.4659498,1.59725364],[.0860215,.81375642],[.11290322,.55925491],[-.0573476,1.16606],[.54659498,1.25737795],[-.0304659,.91155849],[.52150537,.12806127],[-.2204301,1.36328516],[.33154121,.57978794],[.18817204,.93209152],[.3781362,.48036484],[.74014336,.1485943],[.04480286,1.2843951],[.59677419,.50089787],[-.0985663,1.63669867],[.45340501,.85320145],[.29032258,1.05042661],[.8422939,.26692939],[.69892473,.61923297],[.13082437,.28908345],[.15770609,.03458194],[-.032258,.48630862],[.36559139,1.42326322],[-.1756272,.83861219],[.01433691,.38688552],[.37634408,.05511497],[.04301075,.85914522],[-.3189964,1.19091577],[.23297491,.40741855],[-.1003584,1.2114488],[.08960573,.75972213],[.50358422,1.30276675],[-.0734767,.95694729],[.47849462,.17345007],[-.2437275,1.56375238],[.33512544,.52575365],[.00179211,1.3297839],[.55376344,.54628668],[.74372759,.09456],[.41039426,.89859026],[.26702508,1.25089383],[.81899641,.46739661],[.08781362,.33447226],[.11469534,.07997075],[-.0555555,.68677584],[-.0286738,.43227432],[-.3620071,1.23630458],[-.172043,.7845779],[.37992831,.00108068],[.18996415,.45280735],[-.1433691,1.25683761],[.04659498,.80511093],[.5985663,.02161371],[-.2867383,1.60914119],[-.0967741,1.15741451],[.45519713,.37391729],[.12186379,1.17794754],[.70071684,.13994881],[-.0215053,1.53025112],[.22401433,1.29628264],[.77598566,.51278542],[.04480286,.37986106],[.08064516,1.64858622],[.63261648,.865089],[-.0985663,.73216464],[.09139784,.28043797],[.48924731,1.21739257],[-.2419354,1.08446822],[-.2150537,.82996671],[.33691756,.04646949],[.31003584,.300971],[-.3853046,1.4367718],[.00358422,.85049974],[.19354838,.39877306],[.55555555,.06700252],[.16666666,.65327457],[.77060931,.74459253],[-.1397849,1.20280332],[.41218637,.41930609],[-.2831541,1.55510689],[.2688172,.77160967],[-.0645161,1.57563992],[.12544802,1.12391325],[.67741935,.34041603],[-.0537634,.20749167],[.20071684,1.49674986],[.58960573,.9104778],[.04838709,.32582677],[.44623655,1.26278138],[-.2849462,1.12985702],[-.094982,.67813035],[-.4283154,1.4821606],[-.2383512,1.03043393],[.31362007,.24693671],[.12365591,.69866338],[.72759856,.78998133],[.15053763,.44416187],[-.0197132,1.05096696],[.58422939,1.14228491],[.55913978,.01296822],[-.3261648,1.6004957],[.22580645,.81699848],[.77777777,.03350126],[.08243727,1.16930206],[.6344086,.38580483],[.49103942,.73810841],[.89964157,.30691477],[.16845878,.17399041],[.77240143,.26530836],[-.1379928,.72351915],[-.281362,1.07582273],[.27060931,.29232551],[.08064516,.74405218],[-.4247311,1.42812631],[.12724014,.64462909],[-.062724,1.09635576],[.54121863,1.18767371],[-.2060931,1.44865934],[.20250896,1.0174657],[.03942652,1.21469086],[.44802867,.78349722],[.85663082,.35230357],[.72939068,.31069717],[.12544802,.21937922],[-.0179211,.5716828],[-.1612903,.92398637],[.390681,.14048915],[-.3243727,1.12121154],[.22759856,.33771431],[.08422939,.69001789],[.51792114,1.38814093],[-.0591397,1.04232147],[.49283154,.25882425],[-.2491039,1.49404815],[.3548387,1.5853661],[.1594982,1.0628545],[.34946236,.61112783],[.01612903,1.41515808],[.02688172,.04700983],[.81362007,.39769238],[-.0609318,.6170716],[.12903225,.16534493],[.54301075,.70838955],[-.204301,.96937518],[-.0143369,.5176485],[.34767025,.18587796],[-.3476702,1.32167876],[.20430107,.53818153],[.80824372,.62949949],[.47491039,1.43352974],[.66487455,.98180307],[-.1021505,1.08771028],[.44982078,.30421305],[.30645161,.65651663],[-.0268817,1.46054688],[.71505376,.22532299],[-.016129,.09239863],[.11111111,1.34005042],[.0860215,.21073373],[-.2473118,1.01476398],[-.0573476,.56303731],[.51971326,.90885677],[-.390681,1.36706756],[.16129032,.58357034],[.35125448,.13184367],[.76523297,.67488829],[.43189964,1.47891854],[.01792114,.93587392],[.62186379,1.02719187],[-.125448,1.2881775],[.26344086,.70190544],[.67204301,.27071179],[.06810035,1.38543922],[.20609318,.05889737],[.81003584,.15021532],[.4767025,.95424558],[-.1003584,.60842611],[.06272401,.41120095],[.33333333,1.30654915],[.30824372,.17723247],[-.0250896,.98126272],[.57885304,1.07258067],[-.1684587,1.3335663],[.43548387,1.42488425],[.24014336,.90237266],[-.0304659,1.21306983],[.16308243,.10428618],[.76702508,.19560413],[.01971326,.45658976],[.20967741,.00486308],[.62365591,.54790771],[.29032258,1.35193796],[-.1236559,.80889333],[.42831541,.02539611],[.69892473,.92074432],[.55555555,1.27304789],[-.2114695,1.3789551],[.05376344,1.30006504],[-.0734767,1.25845864],[.33512544,.82726499],[.19175627,1.17956857],[.74372759,.39607135],[.16666666,.05025189],[-.0232974,.50197856],[-.1666666,.85428214],[.26702508,1.55240518],[.65591397,.96613312],[-.3100358,1.20658572],[.24193548,.42308849],[.5125448,1.3184367],[.0985663,.77539207],[.70250896,.86671002],[.37992831,.30259203],[.01075268,1.34545384],[-.2598566,1.65615102],[.29211469,.8726538],[.14874551,1.22495738],[.70071684,.44146015],[.12365591,.09564069],[.00537634,1.57726095],[.55734767,.79376373],[.22401433,1.59779398],[.41397849,1.14606731],[-.3530465,1.25197452],[.19892473,.4684773],[.80286738,.55979525],[.63261648,1.16660034],[.05555555,.82078088],[.6594982,.91209883],[-.0716845,.77917447],[.33691756,.34798083],[.19354838,.70028441],[.84767025,.03512228],[-.0376344,1.62264976],[.51433691,.83915254],[.10035842,.29610791],[.18100358,1.64318279],[.37096774,1.19145611],[-.376344,1.45244174],[.0125448,.86616968],[.22759856,1.54375969],[.58960573,1.21198915],[.44623655,1.56429272],[.47311827,1.30979121],[.15053763,.74567321],[.00716845,1.09797679],[.55913978,.31447957],[.4157706,.66678315],[.08243727,1.4708134],[.05734767,.34149672],[.66129032,.43281467],[.32795698,1.23684492],[-.0860215,.69380029],[.49103942,1.03961976],[.18458781,1.5891485],[.73655913,.80565128],[.32258064,.26260665],[.1953405,.22100025],[.4032258,1.60968153],[.59318996,1.15795485],[.44982078,1.51025843],[-.281362,1.37733408],[-.0358422,1.1433656],[.51612903,.35986837],[.12724014,.94614043],[.37275985,.71217195],[-.0412186,.16912733],[.03942652,1.5162022],[.22939068,1.06447553],[.781362,.28097831],[.44802867,1.08500856],[.63799283,.63328189],[-.1290322,.7391891],[.30465949,1.43731214],[.27956989,.30799545],[.15232974,.26638905],[.55017921,1.20334366],[.74014336,.75161698],[.40681003,1.55564724],[-.3243727,1.42272288],[.41756272,.18749899],[.08422939,.99152924],[-.0591397,1.34383282],[.49283154,.56033559],[.18637992,1.10986434],[.73835125,.32636711],[.04301075,1.46216791],[.59498207,.67867069],[.40501792,1.13039737],[.26164874,1.48270094],[.4516129,1.03097427],[.23655913,.35338426],[.67025089,1.0515073],[.69713261,.79700579],[-.0340501,.66408143],[.52688172,1.40381088],[.36379928,1.60103604],[.37455197,.23288779],[.04121863,1.03691804],[.23118279,.58519137],[-.1021505,1.38922162],[.08781362,.93749495],[.63978494,.15399772],[.44982078,.6057244],[.30645161,.95802798],[.85842293,.17453076],[.16308243,1.31033156],[.71505376,.52683433],[0,1.50755672],[.55197132,.7240595],[.40860215,1.07636307],[-.3387096,1.3373487],[.26523297,1.42866665],[.62724014,1.09689611],[.27598566,.0605184],[.48387096,1.44919968],[.67383512,.99747301],[.51075268,1.19469817],[-.0573476,.86454865],[.35125448,.43335501],[.18817204,.63058017],[.04480286,.98288375],[.59677419,.19938653],[.26344086,1.00341678],[.45340501,.55169011],[.81541218,.21991956],[.12007168,1.35572036],[.31003584,.90399369],[.69892473,.31772163],[.86200716,.12049646],[.67204301,.57222314],[.52867383,.92452672],[.22222222,1.47405546],[.77419354,.69055824],[.23297491,.10590721],[.60394265,1.29736333],[.63082437,1.04286181],[-.1003584,.90993746],[.48745519,1.39516539],[-.2437275,1.26224104],[.30824372,.47874381],[-.3870967,1.61454461],[.16487455,.83104739],[.71684587,.04755017],[-.1684587,1.63507764],[-.141577,1.38057613],[.41039426,.59707891],[.24014336,1.203884],[.26702508,.94938249],[.81899641,.16588527],[.07706093,1.40110916],[.62903225,.61761194],[.12365591,1.30168607],[.67562724,.51818885],[.48566308,.96991552],[-.0555555,.38526449],[.3422939,1.3222191],[-.1989247,.73756807],[.18996415,.15129601],[.58781362,1.08825062],[.04659498,.50359959],[.44444444,1.4405542],[-.2867383,1.30762984],[.26523297,.52413262],[.45519713,.07240595],[.12186379,.8764362],[.31182795,.42470952],[.67383512,.09293898],[-.0215053,1.22873978],[.53046594,.44524255],[-.1648745,1.58104335],[.22401433,.99477129],[.77598566,.21127407],[.38709677,.79754613],[.9390681,.01404891],[.19713261,1.24927281],[.05376344,1.60157638],[.08064516,1.34707487],[.63261648,.56357765],[.60573476,.81807916],[-.0985663,.4306533],[.29928315,1.3676079],[.48924731,.91588123],[.34587813,1.26818481],[.7078853,.93641426],[.16666666,.35176323],[.56451612,1.28871784],[.41218637,.11779475],[-.3100358,1.50809706],[.2688172,.47009833],[-.0645161,1.27412858],[.12544802,.82240191],[.67741935,.03890468],[.48745519,.49063136],[-.2078853,1.62643216],[.34408602,.84293494],[.53405017,.39120826],[.89605734,.05943772],[.15412186,1.29466161],[.01075268,1.64696519],[.20071684,1.19523852],[.75268817,.41174129],[.56272401,.86346797],[.77956989,.15723978],[.41935483,1.21577155],[.44623655,.96127003],[.27598566,1.56807512],[.30286738,1.31357361],[.12365591,.39715203],[.52150537,1.33410664],[.71146953,.88237997],[-.0197132,.74945561],[-.3530465,1.55348587],[-.1630824,1.10175919],[.38888888,.31826197],[.05555555,1.12229222],[.08243727,.86779071],[.6344086,.08429349],[-.0878136,1.4745958],[.4641577,.69109858],[.49103942,.43659707],[.30107526,.88832374],[.85304659,.10482652],[.15770609,1.24062732],[.34767025,.78890065],[.89964157,.00540342],[.70967741,.4571301],[.01433691,1.5929309],[.56630824,.80943368],[.37634408,1.26116035],[.0250896,.22478265],[.23297491,1.61346393],[.42293906,1.16173725],[.25985663,1.35896242],[.81182795,.5754652],[-.3082437,1.0288129],[.66845878,.92776877],[.10035842,.59761926],[-.062724,.79484442],[.48924731,.0113472],[.49820788,1.53457386],[-.2060931,1.147148],[.34587813,.36365077],[-.3494623,1.49945157],[.20250896,.71595435],[.0125448,1.16768103],[-.1308243,1.5199846],[-.1039426,1.26548309],[.44802867,.48198587],[.05913978,1.06825793],[.61111111,.28476071],[.42114695,.73648738],[.27777777,1.08879096],[.30465949,.83428945],[.85663082,.05079223],[-.0286738,1.6383197],[.16129032,1.18659303],[.71326164,.40309581],[.52329749,.85482248],[-.0179211,.27017145],[.37992831,1.20712606],[.56989247,.75539939],[-.1612903,.62247503],[.23655913,1.55942964],[.05734767,.64300806],[.08422939,.38850655],[.45519713,1.57996267],[-.0860215,.99531164],[.46594982,.21181442],[-.3924731,1.54484038],[.1594982,.76134316],[.34946236,.30961648],[-.1738351,1.56537341],[.01612903,1.11364674],[.56810035,.33014951],[.3781362,.78187619],[-.1272401,1.46595031],[.42473118,.68245309],[.23476702,1.13417977],[.09139784,1.48648334],[.11827956,1.23198183],[.67025089,.44848461],[.64336917,.70298612],[-.0609318,.31556026],[.33691756,1.25251486],[.52688172,.80078819],[.5,1.0552897],[.19354838,1.60481844],[.74551971,.82132122],[.01433691,.68839686],[.20430107,.23667019],[.41218637,1.62535147],[.60215053,1.1736248],[-.1290322,1.04070044],[.06093189,.58897377],[.42293906,.25720322],[.45878136,1.52592838],[-.2724014,1.39300402],[.27956989,.6095068],[.30645161,.35500529],[-.0268817,1.15903554],[.16308243,.70730887],[.5250896,.37553832],[.13620071,.96181038],[.68817204,.17831316],[-.1702508,1.51133912],[.38172043,.7278419],[.57168458,.27611522],[.04838709,1.53187215],[.23835125,1.08014547],[.79032258,.29664825],[.60035842,.74837493],[.09498207,1.43244905],[.6469534,.64895183],[.45698924,1.10067851],[.48387096,.84617699],[-.0842293,.51602748],[.31362007,1.45298208],[.32437275,.08483383],[.16129032,.28205899],[.55913978,1.2190136],[.01792114,.63436257],[.4157706,1.57131718],[-.3154121,1.43839283],[-.125448,.98666615],[.42652329,.20316893],[.23655913,.6548956],[.09318996,1.00719918],[.28315412,.55547251],[.64516129,.22370196],[.12007168,.75269767],[-.0501792,1.35950276],[.50179211,.57600554],[.52867383,.32150403],[.1953405,1.12553428],[.74731182,.34203706],[.05197132,1.47783786],[.60394265,.69434064],[-.1272401,.56141628],[.06272401,.10968961],[.27060931,1.49837089],[.46057347,1.04664421],[-.2706093,.91371986],[.281362,.13022264],[.13799283,.48252621],[.53584229,1.41948082],[-.1953405,1.28655647],[-.1684587,1.03205496],[.38351254,.24855773],[-.3387096,1.63886005],[-.3118279,1.38435853],[.24014336,.60086131],[.05017921,1.05258799],[.60215053,.26909076],[-.0931899,1.40489156],[.09677419,.95316489],[.64874551,.16966767],[.45878136,.62139434],[.31541218,.97369792],[.17204301,1.3260015],[.72401433,.54250428],[.00896057,1.52322666],[.56093189,.73972944],[.01971326,.15507841],[.41756272,1.09203302],[-.1236559,.50738199],[.23835125,.17561144],[.27419354,1.4443366],[.09498207,.52791502],[.12186379,.27341351],[.28494623,.07618835],[.49283154,1.46486963],[.68279569,1.01314295],[-.2383512,1.33194527],[-.048387,.8802186],[.50358422,.09672138],[-.1917562,1.23252218],[.36021505,.44902495],[.38709677,.19452344],[-.3548387,1.42974734],[.19713261,.64625012],[.02688172,1.25305521],[.05376344,.9985537],[.60573476,.21505647],[-.0896057,1.35085727],[.46236559,.56736005],[.27240143,1.01908673],[.12903225,1.3713903],[.31899641,.91966363],[.87096774,.13616641],[.68100358,.58789308],[.13978494,.00324205],[.5376344,.94019666],[-.1666666,.55277079],[.23118279,1.4897254],[.78315412,.70622818],[-.3369175,1.15957588],[.24193548,.12157715],[.63978494,1.05853176],[-.0913978,.9256074],[.0985663,.47388073],[.46057347,.14211018],[-.234767,1.27791098],[.3172043,.49441376],[.34408602,.23991225],[.50716845,.04268709],[-.3781362,1.63021456],[.17383512,.84671734],[.72580645,.06322012],[-.1594982,1.65074759],[-.1326164,1.39624608],[.41935483,.61274886],[.0860215,1.41677911],[.27598566,.96505243],[.82795698,.18155521],[.09677419,.04863086],[.49462365,.98558547],[.68458781,.53385879],[-.0465949,.40093444],[.35125448,1.33788904],[-.1899641,.75323801],[.02867383,.77377104],[.05555555,.51926953],[-.2777777,1.32329979],[-.0878136,.87157311],[.4641577,.08807589],[.27419354,.53980256],[-.1146953,1.12607462],[-.2311827,1.22387669],[.32078853,.44037947],[.13082437,.89210614],[.68279569,.10860892],[-.0125448,1.24440972],[.53942652,.4609125],[-.1559139,1.5967133],[.23297491,1.01044124],[.78494623,.22694402],[.39605734,.81321608],[.94802867,.02971886],[.64157706,.5792476],[-.0896057,.44632324],[.0734767,.24909808],[.30824372,1.38327785],[-.2329749,.79862682],[-.0430107,.34690014],[.31899641,.0151296],[-.0143369,.81915985],[.17562724,.36743317],[.5734767,1.30438778],[-.157706,1.17146343],[.03225806,.71973675],[-.1308243,.91696192],[.42114695,.13346469],[.43010752,1.65669136],[-.3010752,1.52376701],[.30286738,1.61508496],[-.2741935,1.26926549],[.27777777,.48576827],[-.0555555,1.28979852],[.1344086,.83807185],[.68637992,.05457463],[.49641577,.5063013],[-.1989247,1.6421021],[.35304659,.85860488],[.54301075,.40687821],[.20967741,1.21090846],[.76164874,.42741124],[.03046594,.29448688],[.05734767,.03998537],[-.1129032,.64679046],[-.0860215,.39228895],[.13261648,.41282198],[.53046594,1.34977659],[-.2007168,1.21685223],[-.0107526,.76512556],[-.344086,1.56915581],[-.1541218,1.11742914],[.39784946,.33393191],[.06451612,1.13796217],[.09139784,.88346066],[.64336917,.09996343],[-.078853,1.49026574],[.5,.45226701],[.16666666,1.25629726],[.71863799,.47280004],[.90860215,.02107337],[-.0125448,.33987569],[.02329749,1.60860084],[.57526881,.82510362],[-.1559139,.69217926],[-.1290322,.43767775],[.03405017,.24045259],[.43189964,1.1774072],[-.2992831,1.04448284],[.25268817,.26098562],[.27956989,.00648411],[.10931899,.6132892],[.71326164,.70460715],[.13620071,.35878769],[-.0537634,.81051436],[.49820788,.02701714],[-.1971326,1.16281794],[.3548387,.37932072],[-.3405017,1.51512152],[.21146953,.7316243],[.48207885,1.6269725],[.06810035,1.08392788],[.45698924,.49765582],[.62007168,.30043065],[-.1218637,1.53565455],[.86559139,.06646217],[-.0197132,1.65398965],[.53225806,.87049243],[-.0089605,.2858414],[.38888888,1.222796],[-.1523297,.63814497],[.06630824,.658678],[.09318996,.40417649],[.2562724,.20695133],[.67025089,.74999596],[-.0770609,1.01098158],[.52688172,1.10229953],[-.3835125,1.56051032],[.16845878,.7770131],[.0250896,1.12931668],[.57706093,.34581946],[-.1182795,1.48162026],[.43369175,.69812304],[.11111111,.13400504],[-.1953405,.68353378],[-.0053763,.2318071],[.02329749,.70406681],[.21326164,.25234013],[-.1200716,1.05637039],[.06989247,.60464371],[.48387096,1.14768834],[-.2634408,1.40867397],[.34050179,1.49999192],[-.0179211,1.17470548],[.14516129,.97748032],[-.1612903,1.52700906],[.390681,.74351184],[.24731182,1.09581542],[.79928315,.3123182],[.06810035,.17939384],[.65591397,.66462178],[-.0752688,.53169742],[.52867383,.62301537],[-.048387,.27719591],[-.2186379,.884001],[.33333333,.10050378],[.93727598,.19182173],[.17025089,.29772894],[.02688172,.65003252],[-.3064516,1.45406277],[-.1164874,1.0023361],[.43548387,.21883887],[.29749103,1.54538072],[.46057347,1.34815556],[.29211469,.57114245],[-.0412186,1.3751727],[.20430107,1.14120422],[.61290322,.71001058],[-.1182795,.57708622],[.48566308,.66840418],[.07168458,.12535955],[-.2616487,.9293898],[-.0716845,.47766313],[.89426523,.23721053],[.1469534,.49819616],[.75089605,.58951411],[.41756272,1.39354436],[.60752688,.94181769],[-.1594982,1.0477249],[.39247311,.26422768],[.24910394,.61653126],[-.0842293,1.42056151],[.51971326,1.51187946],[.65770609,.18533761],[.02867383,.17074836],[-.0896057,1.65236862],[-.1146953,.52305193],[-.2580645,.87535551],[.29390681,.09185829],[.10394265,.54358496],[.7078853,.63490292],[.37455197,1.43893317],[-.0394265,.89588854],[.56451612,.98720649],[-.1827956,1.24819212],[.20609318,.66192006],[.61469534,.23072642],[.48745519,.18912001],[.14874551,.018912],[.75268817,.11022995],[-.157706,.56844074],[.00537634,.37121558],[.27598566,1.26656378],[.25089605,.13724709],[.13261648,1.61886736],[.68458781,.83537014],[.10752688,.48955067],[-.0824372,.94127735],[.52150537,1.0325953],[-.2258064,1.29358092],[.3781362,1.38489888],[.51612903,.05835703],[-.3691756,1.6458845],[.18279569,.86238728],[-.0878136,1.17308446],[.10573476,.0643008],[.70967741,.15561875],[-.0376344,.41660438],[.56630824,.50792233],[.23297491,1.31195258],[-.1810035,.76890796],[.97491039,.07672869],[.64157706,.88075894],[.06451612,.53493948],[.83154121,.42903227],[-.2688172,1.33896973],[.49820788,1.23306252],[.47311827,.10374583],[-.0035842,1.26007966],[-.1308243,1.21847326],[.27777777,.78727962],[.1344086,1.1395832],[-.0806451,.46199318],[.10931899,.01026651],[.68637992,.35608597],[-.2240143,.81429676],[.93189964,.12211749],[.5985663,.92614775],[.18458781,.38310312],[.78853046,.47442107],[.45519713,1.27845132],[.04121863,.7354067],[.64516129,.82672465],[.43010752,.14913464],[.31182795,1.6307549],[-.0465949,1.30546847],[.55734767,1.39678642],[-.3172043,1.61616564],[.23476702,.83266842],[.09139784,1.184972],[.64336917,.40147478],[.06630824,.05565531],[-.0519713,1.53727558],[.5,.75377836],[.35663082,1.10608193],[.14157706,.42849192],[.74551971,.51980988],[-.0017921,.7807955],[.60215053,.87211345],[-.1451612,1.13309908],[.45878136,1.22441703],[.13620071,.66029903],[-.094982,1.58266438],[.45698924,.79916716],[.04301075,.25612254],[.6469534,.34744049],[.31362007,1.15147074],[.86559139,.36797352],[.17025089,1.50377432],[.72222222,.7202771],[-.0448028,.82618431],[.38888888,1.52430735],[-.188172,1.17848788],[.4157706,1.26980584],[.09318996,.70568784],[.49103942,1.64264245],[-.0501792,1.05799142],[.50179211,.27449419],[.35842293,.62679777],[.0250896,1.43082802],[0,.30151134],[.60394265,.39282929],[.43369175,.99963438],[-.1433691,.65381492],[.27060931,1.19685954],[.82258064,.41336232],[.12724014,1.54916312],[.67921146,.7656659],[.26523297,.22262127],[.86917562,.31393923],[.13799283,.18101487],[.34587813,1.56969615],[.53584229,1.11796948],[.39247311,1.47027306],[-.0931899,1.10338022],[.45878136,.319883],[.49462365,1.58860815],[-.2365591,1.4556838],[.31541218,.67218658],[-.0179211,1.47621683],[.17204301,1.02449016],[.72401433,.24099293],[.390681,1.04502319],[-.1863799,.69920372],[.41756272,.79052167],[.96953405,.00702445],[.58064516,.59329651],[.24731182,1.39732676],[.79928315,.61382954],[.22222222,.26801008],[.82616487,.35932803],[.09498207,.22640367],[.49283154,1.16335828],[.68279569,.71163161],[-.048387,.57870725],[.34946236,1.51566186],[.36021505,.14751361],[.4516129,1.63399696],[-.2795698,1.5010726],[-.1164874,1.30384744],[.12903225,1.06987896],[.68100358,.28638174],[-.0143369,1.42218254],[.5376344,.63868532],[.34767025,1.09041199],[.20430107,1.44271557],[.39426523,.99098889],[.7562724,.65921835],[.61290322,1.01152193],[.63978494,.75702041],[-.0913978,.62409606],[.30645161,1.56105067],[.49641577,1.10932399],[.46953405,1.3638255],[.3172043,.19290241],[.17383512,.54520599],[-.1594982,1.34923624],[.03046594,.89750957],[.58243727,.11401235],[.24910394,.9180426],[-.0573476,1.46757134],[.49462365,.68407412],[.68458781,.23234745],[.10573476,1.27034618],[.65770609,.48684896],[.08064516,.14102949],[.35125448,1.0363777],[.9032258,.25288048],[.2078853,1.38868128],[.75985663,.60518406],[.56989247,1.05691073],[.21863799,.02053303],[.42652329,1.40921431],[.61648745,.95748763],[.45340501,1.1547128],[-.1146953,.82456328],[.29390681,.39336963],[.13082437,.5905948],[.52867383,1.52754941],[-.0125448,.94289838],[.53942652,.15940115],[.20609318,.96343141],[.39605734,.51170473],[.06272401,1.31573498],[.61469534,.53223776],[.80465949,.08051109],[.0376344,.1864183],[.64157706,.27773625],[.47132616,.88454134],[.16487455,1.43407008],[.71684587,.65057286],[.90681003,.19884619],[.17562724,.06592183],[.5734767,1.00287644],[.76344086,.55114976],[-.157706,.86995208],[.43010752,1.35518002],[-.3010752,1.22225566],[.25089605,.43875844],[-.4444444,1.57455924],[.10752688,.79106202],[.6594982,.0075648],[-.1989247,1.34059076],[.35304659,.55709354],[.01971326,1.36112379],[.20967741,.90939711],[.76164874,.12589989],[.57168458,.57762657],[.06630824,1.26170069],[.61827956,.47820347],[.42831541,.92993015],[.28494623,1.28223372],[.83691756,.4987365],[.86379928,.24423499],[.13261648,.11131063],[.14157706,1.6345373],[.69354838,.85104008],[.7204301,.59653857],[.53046594,1.04826524],[-.0107526,.46361421],[.36021505,1.65507033],[.38709677,1.40056882],[-.344086,1.26764447],[.2078853,.48414724],[.39784946,.03242057],[-.4874551,1.61994804],[.06451612,.83645082],[.25448028,.38472415],[.61648745,.0529536],[-.078853,1.1887544],[.47311827,.40525718],[-.2222222,1.54105798],[.16666666,.95478592],[.71863799,.1712887],[.3297491,.75756076],[-.0035842,1.56159101],[.02329749,1.3070895],[.57526881,.52359228],[.76523297,.0718656],[.24193548,1.32762253],[.43189964,.87589585],[.79390681,.54412531],[.28853046,1.22819943],[.67741935,.64192737],[.84050179,.44470221],[.65053763,.89642889],[.10931899,.31177785],[.50716845,1.24873246],[.3548387,.07780937],[-.3673835,1.46811169],[.21146953,.43011295],[-.1218637,1.2341432],[.06810035,.78241653],[.43010752,.45064598],[-.2652329,1.58644678],[.28673835,.80294956],[.4767025,.35122289],[.83870967,.01945234],[-.0465949,1.60697981],[.14336917,1.15525314],[.6953405,.37175592],[.72222222,.11725441],[.36200716,1.17578617],[.38888888,.92128466],[.94086021,.13778744],[.21863799,1.52808975],[.24551971,1.27358824],[.79749103,.49009102],[.06630824,.35716666],[.10215053,1.62589182],[.65412186,.84239459],[.4641577,1.29412127],[-.0770609,.70947024],[.32078853,1.64642485],[-.4103942,1.51350049],[-.2204301,1.06177382],[.33154121,.27827659],[-.0017921,1.08230685],[.0250896,.82780534],[.57706093,.04430811],[-.3082437,1.63183559],[-.1182795,1.18010891],[.43369175,.39661169],[.24372759,.84833837],[.79569892,.06484114],[-.1451612,1.43461042],[.40681003,.6511132],[.10035842,1.20064194],[.29032258,.74891527],[.65232974,.41714472],[-.0430107,1.55294552],[.50896057,.7694483],[.31899641,1.22117497],[-.032258,.18479727],[.17562724,1.57347855],[.36559139,1.12175188],[.20250896,1.31897704],[.75448028,.53547982],[.61111111,.8877834],[-.1200716,.75485904],[.06989247,.30313237],[.44086021,1.49458849],[.46774193,1.24008698],[-.2634408,1.10716262],[.28853046,.3236654],[-.40681,1.4594662],[.14516129,.67596898],[-.0448028,1.12769565],[-.188172,1.47999923],[.00179211,1.02827256],[.55376344,.24477533],[.36379928,.69650201],[-.1612903,1.22549772],[.390681,.4420005],[.2204301,1.04880559],[.24731182,.79430407],[.79928315,.01080685],[-.0860215,1.59833433],[.10394265,1.14660765],[.65591397,.36311043],[.46594982,.81483711],[.32258064,1.16714068],[.5125448,.71541401],[.87455197,.38364346],[.17921146,1.51944426],[.73118279,.73594704],[.02688172,.34852117],[.39784946,1.53997729],[.42473118,1.28547578],[-.1433691,.95532626],[-.4498207,1.504855],[.10215053,.72135778],[.29211469,.26963111],[-.2311827,1.52538803],[-.0412186,1.07366136],[.51075268,.29016414],[.32078853,.74189081],[.17741935,1.09419439],[-.1845878,1.42596494],[.36738351,.64246772],[.03405017,1.44649797],[.5860215,.66300075],[.06093189,1.19199646],[.61290322,.40849924],[.44265232,1.01530433],[.46953405,.76080281],[.27956989,1.21252949],[.13620071,1.56483307],[.68817204,.78133584],[.8781362,.32960917],[.1469534,.19668481],[.54480286,1.13363942],[-.1863799,1.00071507],[-.1594982,.74621356],[.00358422,.54898839],[.40143369,1.485943],[-.3297491,1.35301865],[.22222222,.56952142],[.24910394,.31501991],[.07885304,.921825],[.63082437,.13832778],[.10573476,.66732349],[-.0842293,1.11905016],[.46774193,.33555294],[-.2275985,1.47135374],[.32437275,.68785652],[.51433691,.23612985],[-.0089605,1.49188677],[.18100358,1.0401601],[.73297491,.25666288],[.0376344,1.39246368],[.42652329,.80619162],[.97849462,.0226944],[.58960573,.60896646],[-.141577,.4760421],[.39964157,1.06069313],[.2562724,1.41299671],[.83512544,.37499798],[.10394265,.24207362],[.26702508,.04484846],[.50179211,1.17902823],[-.0394265,.5943772],[.35842293,1.53133181],[-.3727598,1.39840745],[-.1827956,.94668078],[.36917562,.16318355],[.17921146,.61491023],[.03584229,.96721381],[.06272401,.7127123],[.22580645,.51548713],[.58781362,.18371658],[-.1075268,1.31951738],[-.0806451,1.06501587],[.47132616,.28151865],[.44444444,.53602016],[.13799283,1.0855489],[.32795698,.63382223],[.68996415,.30205168],[-.0053763,1.43785248],[.54659498,.65435526],[.73655913,.20262859],[.00537634,.06970423],[.21326164,1.45838551],[.4032258,1.00665884],[.22401433,.09023726],[.08064516,.44254084],[.10752688,.18803933],[.47849462,1.37949545],[-.2258064,.99206958],[.32616487,.20857236],[-.3960573,1.59887467],[-.3691756,1.34437316],[.18279569,.56087594],[-.0071684,1.01260261],[.54480286,.22910539],[-.1505376,1.36490619],[.03942652,.91317952],[.59139784,.12968229],[.40143369,.58140897],[.25806451,.93371255],[.28494623,.67921103],[-.048387,1.48324129],[.50358422,.69974407],[.69354838,.24801739],[.11469534,1.28601612],[.66666666,.5025189],[.36021505,1.05204764],[.91218637,.26855042],[.18100358,.13562607],[.21684587,1.40435122],[.7688172,.620854],[.0376344,.48792964],[.22759856,.03620297],[.06451612,.23342813],[.62544802,.97315758],[-.1057347,.84023322],[.44623655,.056736],[-.4390681,1.64426347],[-.2491039,1.1925368],[.30286738,.40903958],[.3297491,.15453807],[-.4121863,1.38976196],[.13978494,.60626474],[-.0035842,.95856832],[.54838709,.1750711],[-.1469534,1.3108719],[.40501792,.52737468],[.21505376,.97910135],[.07168458,1.33140493],[.26164874,.87967825],[.81362007,.09618103],[.65053763,.2934062],[.48028673,.90021129],[.17383512,1.44974003],[.72580645,.6662428],[.18458781,.08159177],[.58243727,1.01854638],[-.1487455,.88562203],[.04121863,.43389535],[.4032258,.10212481],[-.2921146,1.23792561],[.25985663,.45442838],[.28673835,.19992687],[.44982078,.00270171],[-.4354838,1.59022918],[.11648745,.80673196],[.66845878,.02323474],[-.2168458,1.61076221],[-.1899641,1.3562607],[.36200716,.57276348],[.02867383,1.37679373],[.21863799,.92506706],[.77060931,.14156984],[.03942652,.00864548],[.07526881,1.27737064],[.62724014,.49387342],[.43727598,.94560009],[-.1039426,.36094906],[.29390681,1.29790367],[.15053763,1.65020725],[-.0286738,.73378567],[-.0017921,.47928416],[.18817204,.02755748],[-.172043,1.08608925],[-.1451612,.83158774],[.40681003,.04809051],[-.3351254,1.28331441],[.21684587,.49981719],[-.4784946,1.63561799],[-.2885304,1.18389131],[.26344086,.40039409],[.0734767,.85212077],[.62544802,.06862354],[-.0698924,1.20442434],[.48207885,.42092712],[-.2132616,1.55672792],[.17562724,.97045586],[.72759856,.18695864],[.33870967,.7732307],[.03225806,1.32275944],[.58422939,.53926222],[.25089605,1.34329247],[.44086021,.8915658],[.84946236,.46037216],[.11827956,.3274478],[.14516129,.07294629],[.51612903,1.26440241],[-.2150537,1.13147805],[-.188172,.87697654],[.36379928,.09347932],[-.0250896,.67975138],[.37275985,1.61670599],[-.3584229,1.48378163],[-.3315412,1.22928012],[.2204301,.4457829],[.24551971,1.57509958],[-.1129032,1.24981315],[.07706093,.79808648],[.62903225,.01458925],[.4390681,.46631593],[.65412186,1.14390594],[-.2562724,1.60211673],[.29569892,.81861951],[.48566308,.36689283],[.15232974,1.17092308],[.70430107,.38742586],[0,0],[.39784946,.9369546],[.94982078,.15345738],[-.1702508,.60680508],[.80645161,.50576096],[.07526881,.3728366],[-.2580645,1.17686686],[-.0681003,.72514018],[-.4014336,1.52917043],[-.2114695,1.07744376],[.34050179,.29394654],[.20250896,1.62048839],[.61111111,1.18929474],[.03405017,.84347528],[.5860215,.05997806],[-.2992831,1.64750553],[.25268817,.86400831],[.44265232,.41228164],[-.1362007,1.45028037],[.46774193,1.54159832],[.10931899,1.21631189],[-.0340501,1.56861547],[.51792114,.78511825],[-.0232974,.20046722],[.37455197,1.13742182],[.05197132,.57330382],[.07885304,.31880231],[-.1111111,.77052899],[-.2544802,1.12283256],[-.0645161,.67110589],[.29749103,.33933534],[-.3978494,1.47513614],[.15412186,.69163892],[.56810035,1.23468355],[-.1792114,1.49566917],[.01075268,1.0439425],[.56272401,.26044528],[.42473118,1.58698713],[.39964157,.45767044],[.80824372,.0264768],[-.0770609,1.61400427],[.47491039,.83050705],[-.0663082,.24585602],[.33154121,1.18281063],[.18817204,1.53511421],[.00896057,.61869263],[.19892473,.16696595],[.03584229,.36419112],[.59677419,1.10392056],[-.1344086,.97099621],[.46953405,1.06231416],[-.1075268,.7164947],[-.4408602,1.52052495],[.11111111,.73702773],[.30107526,.28530105],[-.032258,1.0893313],[.51971326,.30583408],[-.1756272,1.44163488],[.37634408,.65813766],[.05376344,.09401966],[.14516129,1.58050301],[.15591397,.21235476],[.55376344,1.14930937],[-.1774193,1.01638501],[.0125448,.56465834],[.42652329,1.10770296],[-.3207885,1.36868859],[.28315412,1.46000654],[.25806451,.33068986],[-.0752688,1.13472011],[-.2186379,1.48702369],[.33333333,.70352647],[.18996415,1.05583004],[.74193548,.27233282],[.01075268,.13940847],[.5985663,.6246364],[-.1326164,.49171204],[.47132616,.58303],[.11290322,.25774356],[.87992831,.15183635],[-.0304659,.61004714],[-.3637992,1.41407739],[-.1738351,.96235072],[.3781362,.1788535],[.24014336,1.50539535],[-.3172043,1.3146543],[.23476702,.53115708],[.64874551,1.0742017],[-.0985663,1.33518733],[.50537634,1.42650528],[.1469534,1.10121885],[.55555555,.67002521],[.42831541,.6284188],[.01433691,.08537418],[.28494623,.98072238],[.83691756,.19722516],[.08960573,.45821078],[.69354838,.54952874],[-.2168458,1.00773952],[.33512544,.2242423],[.55017921,.90183231],[-.360215,1.3600431],[.19175627,.57654588],[.46236559,1.47189409],[.04838709,.92884946],[.60035842,.14535224],[-.0286738,.13076298],[-.1469534,1.61238324],[.65053763,.59491754],[.23655913,.05187291],[-.0967741,.85590317],[.50716845,.94722112],[.36379928,1.2995247],[-.2401433,1.20820674],[-.4032258,1.40543191],[.14874551,.62193469],[.58243727,1.32005773],[.00537634,.97423826],[.55734767,.19074104],[.41397849,.54304462],[.82258064,.11185098],[.6953405,.07024457],[-.1899641,1.65777205],[-.0519713,.3312302],[.55197132,.42254815],[.21863799,1.2265784],[.19354838,.09726172],[.07526881,1.57888198],[.62724014,.79538476],[.05017921,.4495653],[-.1397849,.90129197],[.4641577,.99260992],[.32078853,1.3449135],[-.2831541,1.25359555],[.45878136,.01837165],[-.4265232,1.60589913],[.53942652,1.36544653],[.5860215,1.26602344],[.37096774,.58843343],[.04838709,.02431543],[.65232974,.11563338],[-.094982,.376619],[.50896057,.46793696],[.17562724,1.27196721],[.91756272,.03674331],[.03225806,1.62427079],[.58422939,.84077357],[.77419354,.38904689],[.00716845,.4949541],[.44086021,1.19307714],[-.3261648,1.29898435],[.4157706,.06376046],[-.469534,1.65128793],[.68637992,.95910866],[-.0609318,1.22009429],[.54301075,1.31141224],[-.204301,1.57239787],[-.3315412,1.53079146],[.07706093,1.09959782],[.32258064,.86562934],[-.0913978,.32258471],[.87455197,.08213212],[.54121863,.88616237],[.12724014,.34311774],[.73118279,.4344357],[.39784946,1.23846595],[-.016129,.69542132],[.37275985,.10914926],[.58781362,.78673927],[.25448028,1.59076953],[.5,1.35680105],[-.2473118,1.61778667],[-.3745519,1.57618027],[.03405017,1.14498662],[.00896057,.01566994],[-.1093189,1.4972902],[.44265232,.71379298],[.29928315,1.06609656],[.68817204,.4798245],[.85125448,.28259934],[-.0591397,.74081013],[.54480286,.83212808],[.21146953,1.63615833],[-.2025089,1.0931137],[.40143369,1.18443166],[.62007168,1.20496469],[.07885304,.62031366],[.4767025,1.55726827],[-.1523297,1.54267901],[.39964157,.75918179],[-.0143369,.21613716],[.58960573,.30745511],[.2562724,1.11148536],[.80824372,.32798814],[.11290322,1.46378894],[.66487455,.68029172],[-.1021505,.78619893],[.33154121,1.48432197],[-.2455197,1.13850251],[.35842293,1.22982046],[.57706093,1.25035349],[.03584229,.66570246],[.43369175,1.60265707],[.62365591,1.1509304],[-.1075268,1.01800604],[.44444444,.23450882],[-.250896,1.37030962],[.30107526,.5868124],[-.0573476,.26152596],[.54659498,.35284392],[.21326164,1.15687417],[.76523297,.37337695],[.06989247,1.50917775],[.62186379,.72568053],[.2078853,.1826359],[.81182795,.27395385],[.28853046,1.52971078],[.47849462,1.0779841],[-.062724,.49333307],[.33512544,1.43028768],[.17204301,1.62751284],[.72401433,.84401562],[.55376344,1.45082071],[.58064516,1.1963192],[-.1505376,1.06339484],[.40143369,.27989762],[.43727598,1.54862278],[-.2939068,1.41569842],[.25806451,.6322012],[.11469534,.98450478],[.66666666,.20100756],[.52329749,.55331114],[.36021505,.7505363],[.18996415,1.35734139],[.16487455,.2280247],[.7688172,.31934266],[.43548387,1.12337291],[.02150537,.58032828],[.62544802,.67164623],[-.1057347,.53872188],[.29211469,1.47567649],[.48207885,1.02394981],[.30286738,.10752823],[.51075268,1.49620952],[.39426523,1.59401158],[-.1738351,1.26386206],[-.3369175,1.46108723],[.07168458,1.02989358],[.62365591,.24639636],[-.0716845,1.38219716],[.48028673,.59869994],[.1469534,1.40273019],[.33691756,.95100352],[.88888888,.1675063],[.55555555,.97153655],[-.0215053,.62571709],[.58243727,.71703504],[-.1487455,.58411068],[.41218637,1.32384013],[.4390681,1.06933862],[.24910394,1.52106529],[.25985663,.15291704],[.65770609,1.08987165],[.11648745,.50522062],[.51433691,1.44217523],[-.2168458,1.30925087],[-.0268817,.8575242],[.5250896,.07402697],[.19175627,.87805723],[-.1146953,1.42758597],[.43727598,.64408875],[.02329749,.10104412],[.62724014,.19236207],[.04838709,1.2303608],[.60035842,.44686358],[.29390681,.99639232],[.84587813,.2128951],[.15053763,1.3486959],[.70250896,.56519868],[.5125448,1.01692535],[.36917562,1.36922893],[.39605734,1.11472742],[.55913978,.91750226],[.25268817,1.467031],[.0734767,.55060942],[.47132616,1.48756403],[.66129032,1.03583736],[-.0698924,.902913],[.48207885,.11941578],[-.2132616,1.25521658],[.33870967,.47171936],[.14874551,.92344603],[.00537634,1.27574961],[.55734767,.49225239],[.74731182,.04052571],[-.0197132,.14643292],[.58422939,.23775088],[-.1379928,1.62805319],[.41397849,.84455597],[.44086021,.59005445],[.96594982,.06105874],[.10752688,1.39408471],[.6594982,.61058748],[.84946236,.15886081],[.11827956,.02593645],[.32616487,1.41461774],[.51612903,.96289106],[.70609318,.51116439],[-.0250896,.37824003],[.37275985,1.31519464],[.59139784,1.33572767],[.61827956,1.08122616],[.05017921,.75107664],[-.1129032,.9483018],[-.2562724,1.30060538],[.29569892,.51710816],[-.0376344,1.32113841],[.15232974,.86941174],[.70430107,.08591452],[.51433691,.53764119],[.00896057,1.22171532],[.56093189,.4382181],[.37096774,.88994477],[.92293906,.10644755],[.22759856,1.24224835],[.77956989,.45875113],[.80645161,.20424962],[.07526881,.07132526],[.08422939,1.59455193],[.63620071,.81105471],[.66308243,.55655319],[.47311827,1.00827987],[-.0681003,.42362884],[.3297491,1.36058345],[.54838709,1.38111648],[.00716845,.79646545],[.19713261,.34473877],[.59498207,1.28169338],[-.1362007,1.14876902],[.4157706,.3652718],[.27240143,.71757538],[.10931899,.91480054],[.66129032,.13130332],[-.0609318,1.52160563],[-.0340501,1.26710412],[.51792114,.4836069],[.7078853,.03188023],[-.1774193,1.6194077],[.37455197,.83591048],[.92652329,.05241326],[.18458781,1.28763715],[.73655913,.50413993],[.04121863,1.63994073],[.23118279,1.18821406],[.78315412,.40471684],[.59318996,.85644351],[.62007168,.601942],[.05197132,.27179248],[.44982078,1.20874709],[.29749103,.037824],[.6953405,.97477861],[.15412186,.39012758],[.55197132,1.32708219],[-.1792114,1.19415783],[.01075268,.74243116],[.37275985,.41066061],[-.3225806,1.54646141],[.22939068,.76296419],[-.1039426,1.56699444],[.0860215,1.11526776],[.63799283,.33177054],[.66487455,.07726903],[.30465949,1.13580079],[.33154121,.88129928],[.88351254,.09780206],[.16129032,1.48810437],[.18817204,1.23360286],[.74014336,.45010564],[.00896057,.31718128],[.04480286,1.58590644],[.59677419,.80240922],[.40681003,1.25413589],[-.1344086,.66948486],[.26344086,1.60643947],[-.2777777,1.02178844],[.27419354,.23829122],[.50896057,1.37247099],[-.032258,.78781996],[.51971326,.00432274],[-.3655913,1.59185021],[-.1756272,1.14012354],[.37634408,.35662632],[.18637992,.80835299],[.73835125,.02485577],[-.2025089,1.39462505],[.04301075,1.16065657],[.23297491,.70892989],[.59498207,.37715935],[-.1003584,1.51296015],[.4516129,.72946293],[.47849462,.47496141],[.26164874,1.1811896],[.11827956,1.53349318],[.14516129,1.27899167],[.69713261,.49549444],[.88709677,.04376777],[.30824372,1.0817665],[.86021505,.29826928],[.00179211,1.63129524],[.55376344,.84779802],[-.1774193,.71487367],[.0125448,.26314699],[.38351254,1.45460311],[.41039426,1.2001016],[.2204301,1.65182828],[-.3207885,1.06717725],[.23118279,.28368002],[.62903225,1.22063463],[.08781362,.6359836],[.48566308,1.57293821],[-.2455197,1.44001385],[-.2186379,1.18551234],[.33333333,.40201512],[-.0555555,.98828718],[.49641577,.20478996],[.16308243,1.00882021],[.18996415,.7543187],[-.1433691,1.55834895],[.04659498,1.10662228],[.5985663,.32312506],[.40860215,.77485173],[.26523297,1.12715531],[.45519713,.67542863],[.8172043,.34365809],[.84408602,.08915658],[.12186379,1.47945889],[.67383512,.69596166],[-.0304659,.3085358],[.36738351,1.24549041],[-.2007168,.91534089],[.04480286,.68137241],[.23476702,.22964573],[.44265232,1.61832701],[-.2885304,1.48540266],[-.0985663,1.03367598],[.45340501,.25017876],[-.2419354,1.38597956],[.31003584,.60248234],[.12007168,1.05420902],[-.0232974,1.40651259],[.00358422,1.15201108],[.55555555,.36851386],[.22222222,1.17254411],[.38530465,.97531895],[-.1397849,1.50431466],[.41218637,.72081744],[.07885304,1.52484769],[.2688172,1.07312102],[.82078853,.2896238],[.63082437,.74135047],[.08960573,.15669944],[.48745519,1.09365405],[-.2437275,.96072969],[-.0537634,.50900302],[.34408602,1.44595763],[-.3870967,1.31303327],[.16487455,.52953605],[.19175627,.27503454],[.02150537,.88183963],[.5734767,.0983424],[.04838709,.62733812],[-.141577,1.07906479],[.41039426,.29556757],[-.2849462,1.43136837],[-.094982,.97964169],[.45698924,.19614447],[.26702508,.64787115],[-.0663082,1.4519014],[.12365591,1.00017472],[.67562724,.2166775],[-.0197132,1.3524783],[.53225806,.56898108],[.3422939,1.02070775],[-.1827956,1.54970346],[.36917562,.76620624],[.19892473,1.37301133],[.22580645,1.11850982],[.77777777,.3350126],[.04659498,.20208824],[.44444444,1.13904285],[.6344086,.68731618],[-.0967741,.55439182],[.09318996,.10266515],[.30107526,1.49134643],[-.2401433,.9066954],[.31182795,.12319818],[.12186379,.57492485],[-.0215053,.92722843],[.00537634,.67272692],[.16845878,.47550176],[.53046594,.14373121],[.56630824,1.41245637],[-.1648745,1.27953201],[.38709677,.49603479],[-.1379928,1.0250305],[.41397849,.24153328],[.08064516,1.04556353],[.27060931,.59383685],[.63261648,.26206631],[-.062724,1.39786711],[.48924731,.61436989],[.67921146,.16264321],[.15591397,1.41840014],[.34587813,.96667346],[.89784946,.18317624],[.59139784,.73270498],[.02329749,.40255546],[.05017921,.14805395],[.42114695,1.33951007],[-.2831541,.9520842],[.2688172,.16858698],[-.453405,1.55888929],[-.0645161,.97261724],[.12544802,.52089056],[.52329749,1.45784517],[-.2078853,1.32492081],[-.0179211,.87319414],[.53405017,.08969692],[.34408602,.54142359],[.20071684,.89372717],[.22759856,.63922566],[-.1057347,1.44325591],[.44623655,.65975869],[.63620071,.20803202],[.05734767,1.24603075],[.60931899,.46253353],[.30286738,1.01206227],[.8548387,.22856505],[.1594982,1.36436585],[.71146953,.58086862],[-.0197132,.44794427],[.00716845,.19344276],[.56810035,.9331722],[-.1630824,.80024785],[-.1362007,.54574634],[.38888888,.01675063],[-.3064516,1.15255143],[.08243727,.56627937],[.27240143,.11455269],[.24551971,.3690542],[.48028673,1.50323397],[-.0609318,.91858294],[.12903225,.46685627],[.49103942,.13508572],[-.204301,1.27088652],[.34767025,.4873893],[.15770609,.93911598],[-.3476702,1.6231901],[.20430107,.83969288],[.7562724,.05619566],[.01433691,1.29141955],[.59318996,.25342082],[-.1290322,1.64372313],[.42293906,.86022591],[.11648745,1.40975465],[.66845878,.62625743],[.12724014,.0416064],[.5250896,.97856101],[-.2060931,.84563665],[-.016129,.39390998],[.34587813,.06213943],[.38172043,1.33086459],[-.3494623,1.19794023],[.20250896,.41444301],[.22939068,.1599415],[.05913978,.76674659],[.0860215,.51224508],[-.2741935,1.57077684],[-.2473118,1.31627533],[.30465949,.53277811],[.49462365,.08105143],[-.0286738,1.33680836],[.16129032,.88508168],[.71326164,.10158446],[.01792114,1.23738526],[.56989247,.45388804],[.37992831,.90561471],[.23655913,1.25791829],[.09318996,1.61022187],[-.0591397,.43929878],[.33870967,1.37625339],[-.2293906,1.04610387],[-.2025089,.79160236],[.34946236,.00810514],[.1594982,.45983181],[.01612903,.81213539],[.56810035,.02863817],[.20609318,.36040872],[-.1272401,1.16443897],[.42473118,.38094175],[.4516129,.12644024],[-.2706093,1.51674255],[.281362,.73324533],[.11827956,.93047049],[.67025089,.14697327],[-.0250896,1.28277407],[.52688172,.49927685],[.19354838,1.3033071],[.38351254,.85158042],[.93548387,.0680832],[.05017921,1.65561068],[.79211469,.42038678],[.06093189,.28746242],[.08781362,.03296091],[-.2724014,1.09149268],[-.0824372,.639766],[-.2455197,.83699116],[.30645161,.05349394],[.31541218,1.57672061],[-.4157706,1.44379625],[.16308243,.40579752],[-.1702508,1.20982777],[.01971326,.7581011],[.38172043,.42633055],[-.31362,1.56213135],[-.1236559,1.11040468],[.42831541,.32690746],[.23835125,.77863413],[.09498207,1.13093771],[.34050179,.89696923],[.89247311,.11347201],[.74910394,.46577558],[.01792114,.33285123],[-.3154121,1.13688148],[-.125448,.68515481],[.27240143,1.62210942],[-.2688172,1.03745838],[.28315412,.25396116],[-.0232974,.8034899],[.52867383,.01999268],[.41039426,1.50161295],[-.1666666,1.15579348],[.38530465,.37229626],[-.3566308,1.60752016],[.1953405,.82402293],[-.1935483,1.41029499],[.05197132,1.17632651],[.24193548,.72459984],[-.0913978,1.52863009],[.46057347,.74513287],[.3172043,1.09743645],[-.1684587,.73054361],[.02150537,.27881694],[-.0053763,.53331845],[-.3118279,1.08284719],[-.1218637,.63112052],[.24014336,.29934997],[.84408602,.39066792],[.09677419,.65165355],[.36738351,1.54700175],[-.2096774,1.20118229],[.3422939,.41768507],[-.0465949,1.00395712],[.50537634,.2204599],[.19892473,.76998864],[-.1344086,1.5740189],[.60752688,.338795],[.27419354,1.14282525],[.13082437,1.49512883],[.14157706,.12698058],[-.0215053,.32420574],[.53942652,1.06393519],[-.1917562,.93101083],[.41218637,1.02232878],[-.1648745,.67650932],[.05376344,.69704235],[.24372759,.24531568],[.82078853,.59113514],[-.0896057,1.04934593],[.46236559,.26584871],[-.2329749,1.40164951],[.31899641,.61815229],[.56451612,.38418381],[-.0035842,.05403429],[.08781362,1.54051764],[.0985663,.17236938],[-.234767,.97639964],[-.0448028,.52467296],[.36917562,1.06771759],[-.3781362,1.32870321],[.22580645,1.42002117],[.77777777,.63652394],[.20071684,.29070448],[.6344086,.98882752],[-.1326164,1.09473473],[.41935483,.31123751],[-.2759856,1.44703831],[.27598566,.66354109],[.13261648,1.01584467],[-.0107526,1.36814825],[.54121863,.58465103],[.05555555,.21775819],[-.0878136,.57006177],[.10215053,.11833509],[.18279569,1.46540997],[-.2311827,.92236534],[.32078853,.13886812],[.73476702,.68191275],[-.3745519,1.27466892],[.17741935,.4911717],[.59139784,1.03421633],[-.1559139,1.29520195],[.44802867,1.38651991],[.08960573,1.06123347],[-.0537634,1.41353705],[.49820788,.63003983],[.3548387,.98234341],[.22759856,.940737],[.03225806,.41822541],[.05913978,.1637239],[.63620071,.50954336],[-.2741935,.96775415],[.27777777,.18425693],[.88172043,.27557488],[.1344086,.53656051],[.40501792,1.43190871],[-.0089605,.88886408],[.54301075,.10536686],[-.0967741,1.45892586],[.31182795,1.02773221],[.59318996,.55493217],[.17921146,.01188754],[-.1541218,.81591779],[.44982078,.90723574],[-.297491,1.16822137],[.09139784,.58194931],[.30645161,1.25953932],[.5250896,1.28007235],[-.0519713,.93425289],[.5,.15075567],[.38172043,1.63237593],[.35663082,.50305925],[.63799283,.0302592],[.49462365,.38256278],[.13620071,.05727634],[.01792114,1.53889661],[-.1971326,.8613066],[-.0071684,.40957992],[.40681003,.95262455],[-.3405017,1.21361017],[-.1505376,.7618835],[.26344086,1.30492813],[.81541218,.5214309],[.12007168,1.6572317],[.67204301,.87373448],[.48207885,1.32546116],[.52867383,1.22603806],[.31362007,.54844805],[.59498207,.075648],[.4516129,.42795158],[.30824372,.78025516],[-.0250896,1.58428541],[.71684587,.34906152],[-.0501792,.45496873],[.38351254,1.15309177],[-.1935483,.8072723],[.35842293,.02377508],[.96236559,.11509304],[.62903225,.91912329],[.21505376,.37607866],[.48566308,1.27142687],[-.2616487,1.53241249],[.3422939,1.62373044],[-.3888888,1.49080609],[.01971326,1.05961244],[.26523297,.82564396],[.8172043,.04214674],[-.0681003,1.62967422],[.67383512,.39445032],[.34050179,1.19848057],[-.0734767,.65543595],[.53046594,.7467539],[-.2365591,.85266111],[.31541218,.06916389],[.19713261,1.55078415],[.74910394,.76728693],[.17204301,.42146747],[.60573476,1.11959051],[.44265232,1.31681567],[-.3046594,1.5778013],[-.4318996,1.53619489],[-.0232974,1.10500125],[-.1666666,1.45730483],[.38530465,.67380761],[.24193548,1.02611118],[.79390681,.24261396],[.07885304,1.22333635],[.63082437,.43983912],[-.1164874,.70082475],[.48745519,.7921427],[.15412186,1.59617296],[-.2598566,1.05312833],[.34408602,1.14444628],[.70609318,.81267573],[.56272401,1.16497931],[.75268817,.71325264],[.5376344,.03566263],[.41935483,1.51728289],[.26702508,.3463598],[-.2096774,1.50269363],[.3422939,.71919641],[.53225806,.26746974],[.19892473,1.07149999],[.75089605,.28800277],[.05555555,1.42380357],[.60752688,.64030635],[-.3028673,1.09851713],[.30107526,1.18983509],[.85304659,.40633786],[.15770609,1.54213866],[.70967741,.75864144],[.51971326,1.21036812],[.37634408,1.56267169],[-.0376344,1.01962707],[.56630824,1.11094502],[-.1648745,.97802066],[-.3082437,1.33032424],[.24372759,.54682702],[.48924731,.31285854],[.15591397,1.11688879],[.34587813,.66516212],[.7078853,.33339157],[.0125448,1.46919237],[.56451612,.68569515],[.15053763,.14265052],[.75448028,.23396848],[.42114695,1.03799873],[-.1200716,.4533477],[.11469534,1.58752747],[.66666666,.80403025],[.27777777,1.39030231],[.49641577,1.41083534],[.52329749,1.15633383],[-.2078853,1.02340947],[.37992831,1.5086374],[-.3512544,1.37571305],[.20071684,.59221583],[.05734767,.9445194],[.60931899,.16102218],[.46594982,.51332576],[.30286738,.71055092],[.13261648,1.31735601],[.71146953,.27935728],[.3781362,1.08338753],[-.0358422,.54034291],[.56810035,.63166086],[.23476702,1.43569111],[.42473118,.98396444],[.78673835,.65219389],[.24551971,.06754286],[.45340501,1.45622414],[.64336917,1.00449747],[.33691756,1.55402621],[-.3942652,1.42110185],[.01433691,.98990821],[.56630824,.20641099],[-.1290322,1.34221179],[.42293906,.55871457],[.08960573,1.36274482],[.27956989,.91101814],[.83154121,.12752092],[.49820788,.93155117],[-.078853,.58573171],[.5250896,.67704966],[.3548387,1.28385475],[.38172043,1.02935324],[.19175627,1.48107992],[.74372759,.69758269],[.20250896,.11293166],[.23835125,1.38165682],[.79032258,.5981596],[.60035842,1.04988627],[.05913978,.46523524],[.45698924,1.40218985],[-.0842293,.81753882],[.30465949,.23126676],[.46774193,.0340416],[-.4175627,1.62156907],[-.0089605,1.19037543],[-.172043,1.38760059],[.56989247,.1523767],[.37992831,.60410337],[.23655913,.95640695],[.42652329,.50468027],[.78853046,.17290973],[.09318996,1.30871053],[.64516129,.5252133],[.45519713,.97693998],[.31182795,1.32924356],[.33870967,1.07474205],[.890681,.29124482],[.50179211,.87751688],[.7204301,.89804991],[.1953405,1.42704562],[.74731182,.6435484],[.01612903,.51062405],[.41397849,1.44757865],[.60394265,.99585198],[-.1272401,.86292762],[.42473118,.0794304],[-.2706093,1.2152312],[.281362,.43173398],[-.0519713,1.23576423],[.52688172,.1977655],[.68996415,54034e-8],[-.1953405,1.58806781],[.35663082,.80457059],[.38351254,.55006908],[.05017921,1.35409933],[.60215053,.57060211],[.79211469,.11887544],[.2688172,1.37463236],[.45878136,.92290569],[.64874551,.47117901],[-.0824372,.33825466],[.31541218,1.27520927],[.67741935,.94343872],[.53405017,1.2957423],[.56093189,1.04124079],[-.1702508,.90831643],[-.0071684,.71109127],[.390681,1.64804587],[-.31362,1.26062001],[.23835125,.47712279],[-.4569892,1.61292359],[.09498207,.82942636],[.6469534,.04592914],[-.094982,1.28115304],[-.2383512,1.63345662],[-.048387,1.18172994],[.50358422,.39823272],[.31362007,.84995939],[.17025089,1.20226297],[.19713261,.94776146],[.74910394,.16426424],[.72222222,.41876575],[.01792114,.03133988],[.02688172,1.55456655],[.4157706,.96829449],[.60573476,.51656782],[.57885304,.77106933],[.27240143,1.32059807],[.46236559,.8688714],[.82437275,.53710085],[.49103942,1.3411311],[.68100358,.88940443],[-.0501792,.75648007],[.13978494,.3047534],[.5376344,1.24170801],[-.1935483,1.10878365],[.35842293,.32528643],[.38530465,.07078492],[.05197132,.87481517],[.60394265,.09131795],[.21505376,.67759001],[-.0913978,1.22711875],[.46057347,.44362153],[-.234767,1.57942233],[.3172043,.7959251],[.86917562,.01242788],[.12724014,1.24765178],[.67921146,.46415456],[-.016129,1.59995536],[.17383512,1.14822868],[.72580645,.36473146],[.53584229,.81645813],[.56272401,.56195662],[.39247311,1.16876171],[.41935483,.9142602],[.63799283,.93479323],[.82795698,.48306656],[.09677419,.3501422],[.49462365,1.28709681],[-.2365591,1.15417245],[-.0465949,.70244578],[.31541218,.37067523],[.35125448,1.63940039],[-.3799283,1.50647603],[.17204301,.72297881],[.02867383,1.07528239],[.58064516,.29178517],[.60752688,.03728366],[-.2777777,1.62481113],[.27419354,.84131391],[.4641577,.38958723],[.82616487,.05781669],[.10394265,1.448119],[.13082437,1.19361749],[.68279569,.41012026],[-.0591397,1.64534416],[.49283154,.86184694],[-.0125448,1.54592106],[.53942652,.76242384],[.34946236,1.21415052],[.20609318,1.5664541],[.75806451,.78295687],[.78494623,.52845536],[.21684587,.19830584],[.05376344,.39553101],[.61469534,1.13526045],[.4516129,1.33248561],[-.0896057,.74783458],[-.2598566,1.35463967],[-.2329749,1.10013816],[.31899641,.31664094],[-.422939,1.55186484],[.12903225,.76836762],[-.0143369,1.12067119],[.17562724,.66894452],[.5376344,.33717397],[-.157706,1.47297477],[.39426523,.68947755],[.42114695,.43497604],[.06093189,1.4935078],[.25089605,1.04178113],[.80286738,.25828391],[.8297491,.0037824],[.08781362,1.23900629],[.63978494,.45550907],[-.0555555,1.59130987],[.49641577,.80781265],[-.0448028,.22316162],[.16308243,1.6118429],[.35304659,1.16011623],[.71505376,.82834568],[.17383512,.24369465],[.20967741,1.5124198],[.76164874,.72892258],[.57168458,1.18064926],[.03046594,.59599823],[.42831541,1.53295283],[-.3028673,1.40002848],[-.2759856,1.14552697],[.27598566,.36202975],[.4390681,.16480458],[.10573476,.96883484],[-.4193548,1.49783055],[.13261648,.71433332],[-.2007168,1.51836358],[-.0107526,1.0666369],[.54121863,.28313968],[.35125448,.73486635],[.2078853,1.08716993],[.39784946,.63544326],[.78673835,.0491712],[.75985663,.30367271],[.06451612,1.43947351],[.61648745,.65597629],[.31003584,1.20550503],[.86200716,.42200781],[.16666666,1.55780861],[.71863799,.77431139],[-.0125448,.64138703],[.17741935,.18966036],[.38530465,1.57834164],[.57526881,1.12661497],[-.3458781,1.44541728],[-.1559139,.99369061],[.39605734,.21019339],[-.4623655,1.54321935],[-.2992831,1.34599419],[.25268817,.56249697],[.06272401,1.01422364],[-.0806451,1.36652722],[-.0537634,1.11202571],[.49820788,.32852849],[-.1971326,1.46432928],[.3548387,.68083206],[.16487455,1.13255874],[.32795698,.93533357],[.02150537,1.48486232],[.21146953,1.03313564],[.76344086,.24963842],[.5734767,.70136509],[.03225806,.11671406],[.43010752,1.05366867],[-.1111111,.46901764],[.12365591,1.60319741],[.67562724,.81970019],[.28673835,1.40597225],[.1344086,.23504916],[.53225806,1.17200377],[-.1989247,1.03907941],[-.0089605,.58735274],[.35304659,.25558219],[-.0358422,.84185425],[-.3422939,1.39138299],[-.1523297,.93965632],[.39964157,.1561591],[.20967741,.60788577],[-.1236559,1.41191602],[.06630824,.96018935],[.61827956,.17669213],[-.0770609,1.31249293],[.47491039,.52899571],[-.2401433,1.50971809],[.31182795,.72622087],[.14157706,1.33302596],[.16845878,1.07852445],[.7204301,.29502722],[-.0107526,.16210287],[.38709677,1.09905748],[.57706093,.6473308],[-.1541218,.51440645],[.03584229,.06267977],[.24372759,1.45136106],[.79569892,.66786383],[.25448028,.0832128],[.65232974,1.02016741],[-.078853,.88724306],[.11111111,.43551638],[-.0519713,.63274154],[-.2222222,1.23954663],[.3297491,.45604941],[-.1953405,.98504512],[.35663082,.2015479],[.02329749,1.00557815],[.21326164,.55385148],[.57526881,.22208093],[-.1200716,1.35788173],[.43189964,.57438451],[.62186379,.12265784],[.0985663,1.37841476],[.28853046,.92668809],[.84050179,.14319087],[.53405017,.69271961],[-.0340501,.36257009],[-.0071684,.10806858],[.21146953,.12860161],[.60931899,1.06555622],[-.1218637,.93263186],[.06810035,.48090519],[.46594982,1.41785979],[-.2652329,1.28493544],[-.0752688,.83320876],[.4767025,.04971154],[.28673835,.50143822],[-.4086021,1.63723902],[.14336917,.8537418],[-.3817204,1.38273751],[.17025089,.59924028],[0,1.20604537],[.02688172,.95154386],[.57885304,.16804664],[-.1630824,1.40327054],[.38888888,.61977331],[.24551971,.97207689],[.43548387,.52035022],[.79749103,.18857967],[.10215053,1.32438047],[.65412186,.54088325],[-.0770609,.40795889],[.51075268,.89318683],[-.2204301,.76026247],[.0250896,.52629399],[.21505376,.07456732],[.18817204,.32906883],[.42293906,1.4632486],[-.1182795,.87859757],[.07168458,.4268709],[.43369175,.09510035],[-.2616487,1.23090115],[.29032258,.44740393],[.10035842,.8991306],[-.4050179,1.58320473],[-.016129,.99693267],[.53584229,.21343545],[.1469534,.7997075],[.69892473,.01621028],[-.0430107,1.25143418],[.56093189,1.34275213],[-.1863799,1.60373776],[.36559139,.82024053],[.39247311,.56573902],[.05913978,1.36976928],[.61111111,.58627205],[.80107526,.13454538],[.06989247,.00162102],[.46774193,.93857563],[-.0734767,.3539246],[.28853046,.02215405],[.32437275,1.29087921],[.14516129,.37445763],[.17204301,.11995612],[.73297491,.85968557],[.00179211,.72676121],[.02867383,.4722597],[-.3046594,1.27628995],[.24731182,.49279273],[.43727598,.04106606],[-.4480286,1.62859353],[.10394265,.84509631],[.65591397,.06159909],[-.0860215,1.29682298],[-.2293906,1.64912656],[-.0394265,1.19739989],[.5125448,.41390267],[.17921146,1.21793292],[.75806451,.17993418],[.03584229,1.5702365],[-.1164874,.39931341],[.281362,1.33626801],[-.2867383,1.0061185],[.10215053,.41984644],[.68996415,.90507437],[-.0412186,.77215002],[.14874551,.32042334],[-.1845878,1.12445359],[.36738351,.34095637],[.39426523,.08645486],[-.3279569,1.47675717],[.06093189,.89048511],[.61290322,.10698789],[.22401433,.69325995],[-.0824372,1.24278869],[.46953405,.45929147],[-.2258064,1.59509227],[.32616487,.81159505],[.8781362,.02809783],[.13620071,1.26332172],[-.0071684,1.6156253],[.18279569,1.16389863],[.73476702,.3804014],[.00358422,.24747705],[-.1397849,.59978063],[.24910394,.01350857],[.25806451,1.53673524],[.6469534,.95046318],[.10573476,.36581215],[-.2275985,1.1698424],[-.0376344,.71811572],[.32437275,.38634518],[-.3709677,1.52214598],[-.1810035,1.0704193],[.37096774,.28692208],[.18100358,.73864875],[.0376344,1.09095233],[.64157706,1.18227029],[-.2688172,1.64048107],[.28315412,.85698385],[.83512544,.07348663],[.13978494,1.20928743],[.69175627,.42579021],[-.0394265,.29286585],[.54838709,.77809379],[-.1827956,.64516943],[.21505376,1.58212404],[.22580645,.21397579],[.8297491,.30529374],[-.0806451,.76350453],[.35304659,1.46162757],[-.2240143,1.11580811],[.32795698,.33231089],[-.4139784,1.56753478],[.13799283,.78403756],[-.0053763,1.13634114],[.18458781,.68461446],[.5985663,1.22765909],[-.1487455,1.48864472],[.4032258,.70514749],[.25985663,1.05745107],[.09677419,1.25467624],[.50537634,.82348259],[-.0358422,.23883156],[.18279569,.25936459],[.78673835,.35068254],[.03942652,.61166817],[.31003584,1.50701637],[-.267025,1.16119691],[.28494623,.37769969],[-.1039426,.96397175],[.44802867,.18047453],[.14157706,.73000327],[-.1917562,1.53403352],[.55017921,.29880963],[.21684587,1.10283988],[.0734767,1.45514346],[-.078853,.28422037],[.08422939,.0869952],[-.2491039,.89102546],[-.0035842,.65705698],[.18637992,.2053303],[-.1469534,1.00936055],[.04301075,.55763388],[.40501792,.22586333],[-.2903225,1.36166413],[.26164874,.57816691],[.53225806,1.47351511],[.50716845,.34419843],[.03046594,1.50053226],[.04121863,.13238401],[-.1021505,.48468759],[.29569892,1.42164219],[.16845878,1.38003579],[.14336917,.25071911],[-.1899641,1.05474936],[0,.60302268],[.36200716,.27125214],[.57706093,.94884215],[-.3333333,1.40705294],[.21863799,.62355571],[.40860215,.17182904],[.48924731,1.51890392],[.07526881,.97585929],[-.0681003,1.32816287],[.48387096,.54466565],[.21326164,.85536282],[-.0017921,.17777281],[-.1451612,.53007639],[.04480286,.07834972],[.12544802,1.4254246],[.26344086,.09888275],[.86738351,.1902007],[.53405017,.99423095],[.12007168,.45118633],[-.0430107,.64841149],[.390681,1.34653453],[.36559139,.21721785],[.03225806,1.0212481],[.63620071,1.11256605],[-.1111111,1.37355168],[.29749103,.94235803],[.17025089,.90075163],[.57885304,.46955799],[.00179211,.12373852],[.98745519,.03836434],[.2204301,.14427155],[.82437275,.2355895],[.07706093,.49657513],[.34767025,1.39192333],[-.0663082,.84887871],[.48566308,.06538149],[-.3996415,1.65290896],[-.1541218,1.41894048],[.25448028,.98774684],[-.016129,1.29844401],[.53584229,.51494679],[-.2114695,.77593242],[.39247311,.86725037],[.94444444,.08375315],[.24910394,1.21955395],[.80107526,.43605672],[.03405017,.54196394],[-.1093189,.89426751],[.44265232,.11077029],[.32437275,1.59239055],[-.2526881,1.24657109],[.29928315,.46307387],[.56989247,1.35842207],[.15591397,.81537745],[.43727598,.3425774],[.07885304,.01729097],[-.0394265,1.49891123],[.34946236,.91263917],[-.0645161,.36959455],[.90143369,.12914195],[.20609318,1.26494275],[-.2078853,.72189812],[.75806451,.48144553],[.06272401,1.61724633],[.61469534,.83374911],[.281362,1.63777936],[-.2956989,1.2919599],[.2562724,.50846267],[.47132616,1.18605269],[.11290322,.86076625],[.52150537,.42957261],[.39426523,.38796621],[.25089605,.74026978],[-.0824372,1.54430004],[-.1075268,.41498335],[.32616487,1.11310639],[.90501792,.07510766],[.57168458,.87913791],[.15770609,.33609329],[.42831541,1.23144149],[-.3189964,1.49242712],[.06989247,.90615506],[.28494623,1.58374507],[.50358422,1.6042781],[.2078853,.78565859],[.75985663,.00216137],[-.125448,1.58968884],[.61648745,.35446494],[.28315412,1.1584952],[-.1308243,.61545057],[.47311827,.70676852],[.25806451,.02917851],[.13978494,1.51079878],[.69175627,.72730155],[.11469534,.38148209],[.38530465,1.27683029],[.54838709,1.07960513],[-.3620071,1.53781592],[.24193548,1.62913387],[.46057347,1.6496669],[.50716845,1.55024381],[-.2240143,1.41731945],[.18458781,.98612581],[.02150537,1.18335097],[.5734767,.39985375],[-.1738351,.66083938],[.01612903,.2091127],[.43010752,.75215733],[.09677419,1.55618758],[.28673835,1.10446091],[.83870967,.32096368],[.64874551,.77269036],[.14336917,1.45676448],[.6953405,.67326726],[.50537634,1.12499394],[.36200716,1.47729751],[.20967741,.30637443],[.60752688,1.24332903],[.4641577,1.59563261],[-.267025,1.46270826],[.47491039,.22748436],[.14157706,1.03151461],[-.0017921,1.38381819],[.55017921,.60032097],[-.0268817,.25450151],[.24372759,1.14984971],[.79569892,.36635249]];function $g(i,t){i.renderDelay=1/0;let e=!1;function n(u,f){const h=document.createElement("button");return h.textContent=u,h.style.cssText=`
            padding: 10px 20px;
            font-size: 14px;
            font-weight: 500;
            color: white;
            background: rgba(0, 0, 0, 0.7);
            border: 1px solid rgba(255, 255, 255, 0.2);
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s ease;
            backdrop-filter: blur(10px);
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            min-height: 44px;
            white-space: nowrap;
        `,h.addEventListener("mouseenter",()=>{h.style.background="rgba(0, 0, 0, 0.85)",h.style.borderColor="rgba(255, 255, 255, 0.4)"}),h.addEventListener("mouseleave",()=>{h.style.background="rgba(0, 0, 0, 0.7)",h.style.borderColor="rgba(255, 255, 255, 0.2)"}),h.addEventListener("click",f),h}function r(u){const f=new Date,h=f.getDate(),c=f.getMonth()+1,m=f.getHours(),g=f.getMinutes(),_=document.createElement("a");_.download=`pathtrace ${c}-${h}-${m}${g}.png`,_.href=u.toDataURL("image/png"),_.click()}const s=document.createElement("div");s.style.cssText=`
        position: fixed;
        top: 20px;
        right: 20px;
        display: flex;
        gap: 8px;
        z-index: 1000;
    `;const a=document.createElement("style");a.textContent=`
        @media (max-width: 768px) {
            ${s.getAttribute("style")} {
                top: 12px;
                right: 12px;
                gap: 6px;
            }
        }
    `,document.head.appendChild(a);const o=n("Pathtrace",()=>{e?(e=!1,i.renderDelay=1/0,o.textContent="Pathtrace",o.style.background="rgba(0, 0, 0, 0.7)"):(e=!0,i.renderDelay=0,i.reset(),o.textContent="Stop",o.style.background="rgba(220, 38, 38, 0.7)")}),l=n("Download",()=>{r(t.domElement)});s.appendChild(o),s.appendChild(l),document.body.appendChild(s)}let Ln=null,Nr=null,Gs=null;function Kg(i="Loading...",t=!1){Ln=document.createElement("div"),Ln.style.cssText=`
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.8);
        backdrop-filter: blur(10px);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
    `;const e=document.createElement("div");e.style.cssText=`
        width: 50px;
        height: 50px;
        border: 4px solid rgba(255, 255, 255, 0.2);
        border-top-color: white;
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 20px;
    `;const n=document.createElement("style");if(n.textContent=`
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
    `,document.head.appendChild(n),Nr=document.createElement("div"),Nr.textContent=i,Nr.style.cssText=`
        color: white;
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 10px;
    `,Ln.appendChild(e),Ln.appendChild(Nr),t){const r=document.createElement("div");r.style.cssText=`
            width: 300px;
            height: 4px;
            background: rgba(255, 255, 255, 0.2);
            border-radius: 2px;
            overflow: hidden;
            margin-top: 10px;
        `,Gs=document.createElement("div"),Gs.style.cssText=`
            width: 0%;
            height: 100%;
            background: white;
            transition: width 0.3s ease;
        `,r.appendChild(Gs),Ln.appendChild(r)}document.body.appendChild(Ln)}function Zg(){Ln&&(Ln.remove(),Ln=null,Nr=null,Gs=null)}const kn=new F0;let il=new Gg(qg,jg),Jg=il.getSurface();kn.add(Jg);async function Qg(){Kg("Loading geometry...",!0),await new Promise(t=>setTimeout(t,50));let i=new Qi;kn.add(i);for(let t=0;t<d0.length;t++){let e=il.fromTauCoords(d0[t]);i.add(il.getPoint(e,In.purple,.02))}Zg()}let ze=new kg(16777215);ze.position.set(2,6,0);ze.angle=Math.PI/2;ze.decay=0;ze.penumbra=1;ze.distance=0;ze.intensity=5;ze.radius=.5;ze.shadow.mapSize.width=512;ze.shadow.mapSize.height=512;ze.shadow.camera.near=.1;ze.shadow.camera.far=10;ze.shadow.focus=1;ze.castShadow=!0;kn.add(ze);const aa=ze.target;aa.position.x=1;aa.position.y=0;aa.position.z=.05;kn.add(aa);const cu=new Ae(new _r(100,.1,100),new O0({color:16777215,clearcoat:1,roughness:.5,metalness:0}));cu.position.set(-1,-4,-1);kn.add(cu);const Vr=new lu;Vr.bottomColor.set(16777215);Vr.bottomColor.set(6710886);Vr.update();kn.environment=Vr;kn.background=Vr;const Si=new Ie;Si.position.set(.1,10,-.1);Si.lookAt(0,0,0);let Ti=new Lm({preserveDrawingBuffer:!0});Ti.toneMapping=g0;document.body.appendChild(Ti.domElement);let ni=new Hg(Ti);ni.setScene(kn,Si);ni.renderScale=Math.max(1/window.devicePixelRatio,.5);ni.tiles.setScalar(3);ni.bounces=30;$g(ni,Ti);let Sl=new Fm(Si,Ti.domElement);Sl.target.set(0,.33,-.08);Sl.addEventListener("change",()=>ni.updateCamera());Sl.update();window.addEventListener("resize",hu);function uu(){requestAnimationFrame(uu),ni.renderSample()}function hu(){const i=window.innerWidth,t=window.innerHeight;Ti.setSize(i,t),Ti.setPixelRatio(window.devicePixelRatio);const e=i/t;Si.aspect=e,Si.updateProjectionMatrix(),ni.setScene(kn,Si)}Qg().then(()=>{hu(),uu()});
