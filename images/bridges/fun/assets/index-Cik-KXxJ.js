(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Zr="172",is={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Qi={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},T0=0,Ll=1,E0=2,xu=1,w0=2,Dn=3,xn=0,Re=1,sn=2,Ke=0,Jn=1,ro=2,Fl=3,Ul=4,A0=5,vi=100,R0=101,C0=102,P0=103,D0=104,I0=200,L0=201,F0=202,U0=203,ao=204,oo=205,N0=206,O0=207,B0=208,z0=209,k0=210,H0=211,V0=212,G0=213,W0=214,lo=0,co=1,uo=2,os=3,ho=4,fo=5,po=6,mo=7,yu=0,X0=1,q0=2,Nn=0,Y0=1,$0=2,j0=3,Mu=4,K0=5,Z0=6,J0=7,bu=300,ls=301,cs=302,Hs=303,go=304,Jr=306,vn=1e3,Ne=1001,_o=1002,Bt=1003,Q0=1004,$s=1005,fe=1006,ua=1007,yi=1008,th=1008,cn=1009,Xr=1010,rl=1011,us=1012,ss=1013,on=1014,ne=1015,Fe=1016,al=1017,ol=1018,hs=1020,Su=35902,Tu=1021,Eu=1022,Zt=1023,wu=1024,Au=1025,rs=1026,fs=1027,ds=1028,Qr=1029,ta=1030,Gs=1031,ps=1033,Br=33776,zr=33777,kr=33778,Hr=33779,vo=35840,xo=35841,yo=35842,Mo=35843,bo=36196,So=37492,To=37496,Eo=37808,wo=37809,Ao=37810,Ro=37811,Co=37812,Po=37813,Do=37814,Io=37815,Lo=37816,Fo=37817,Uo=37818,No=37819,Oo=37820,Bo=37821,Vr=36492,zo=36494,ko=36495,Ru=36283,Ho=36284,Vo=36285,Go=36286,eh=3200,nh=3201,Cu=0,ih=1,Kn="",nn="srgb",ms="srgb-linear",qr="linear",Jt="srgb",wi=7680,Nl=519,sh=512,rh=513,ah=514,Pu=515,oh=516,lh=517,ch=518,uh=519,Ol=35044,Bl="300 es",Un=2e3,Yr=2001;class Si{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Ee=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zl=1234567;const Bs=Math.PI/180,gs=180/Math.PI;function xs(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ee[i&255]+Ee[i>>8&255]+Ee[i>>16&255]+Ee[i>>24&255]+"-"+Ee[t&255]+Ee[t>>8&255]+"-"+Ee[t>>16&15|64]+Ee[t>>24&255]+"-"+Ee[e&63|128]+Ee[e>>8&255]+"-"+Ee[e>>16&255]+Ee[e>>24&255]+Ee[n&255]+Ee[n>>8&255]+Ee[n>>16&255]+Ee[n>>24&255]).toLowerCase()}function Ct(i,t,e){return Math.max(t,Math.min(e,i))}function ll(i,t){return(i%t+t)%t}function hh(i,t,e,n,s){return n+(i-t)*(s-n)/(e-t)}function fh(i,t,e){return i!==t?(e-i)/(t-i):0}function zs(i,t,e){return(1-e)*i+e*t}function dh(i,t,e,n){return zs(i,t,1-Math.exp(-e*n))}function ph(i,t=1){return t-Math.abs(ll(i,t*2)-t)}function mh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*(3-2*i))}function gh(i,t,e){return i<=t?0:i>=e?1:(i=(i-t)/(e-t),i*i*i*(i*(i*6-15)+10))}function _h(i,t){return i+Math.floor(Math.random()*(t-i+1))}function vh(i,t){return i+Math.random()*(t-i)}function xh(i){return i*(.5-Math.random())}function yh(i){i!==void 0&&(zl=i);let t=zl+=1831565813;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}function Mh(i){return i*Bs}function bh(i){return i*gs}function Sh(i){return(i&i-1)===0&&i!==0}function Th(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Eh(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function wh(i,t,e,n,s){const r=Math.cos,a=Math.sin,o=r(e/2),l=a(e/2),u=r((t+n)/2),h=a((t+n)/2),f=r((t-n)/2),c=a((t-n)/2),m=r((n-t)/2),g=a((n-t)/2);switch(s){case"XYX":i.set(o*h,l*f,l*c,o*u);break;case"YZY":i.set(l*c,o*h,l*f,o*u);break;case"ZXZ":i.set(l*f,l*c,o*h,o*u);break;case"XZX":i.set(o*h,l*g,l*m,o*u);break;case"YXY":i.set(l*m,o*h,l*g,o*u);break;case"ZYZ":i.set(l*g,l*m,o*h,o*u);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Ki(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function De(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Ah={DEG2RAD:Bs,RAD2DEG:gs,generateUUID:xs,clamp:Ct,euclideanModulo:ll,mapLinear:hh,inverseLerp:fh,lerp:zs,damp:dh,pingpong:ph,smoothstep:mh,smootherstep:gh,randInt:_h,randFloat:vh,randFloatSpread:xh,seededRandom:yh,degToRad:Mh,radToDeg:bh,isPowerOfTwo:Sh,ceilPowerOfTwo:Th,floorPowerOfTwo:Eh,setQuaternionFromProperEuler:wh,normalize:De,denormalize:Ki};class ut{constructor(t=0,e=0){ut.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ct(this.x,t.x,e.x),this.y=Ct(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ct(this.x,t,e),this.y=Ct(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ct(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pt{constructor(t,e,n,s,r,a,o,l,u){Pt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u)}set(t,e,n,s,r,a,o,l,u){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],u=n[1],h=n[4],f=n[7],c=n[2],m=n[5],g=n[8],_=s[0],d=s[3],p=s[6],x=s[1],y=s[4],v=s[7],T=s[2],A=s[5],w=s[8];return r[0]=a*_+o*x+l*T,r[3]=a*d+o*y+l*A,r[6]=a*p+o*v+l*w,r[1]=u*_+h*x+f*T,r[4]=u*d+h*y+f*A,r[7]=u*p+h*v+f*w,r[2]=c*_+m*x+g*T,r[5]=c*d+m*y+g*A,r[8]=c*p+m*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8];return e*a*h-e*o*u-n*r*h+n*o*l+s*r*u-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],f=h*a-o*u,c=o*l-h*r,m=u*r-a*l,g=e*f+n*c+s*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=f*_,t[1]=(s*u-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=c*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=m*_,t[7]=(n*l-u*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),u=Math.sin(r);return this.set(n*l,n*u,-n*(l*a+u*o)+a+t,-s*u,s*l,-s*(-u*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(ha.makeScale(t,e)),this}rotate(t){return this.premultiply(ha.makeRotation(-t)),this}translate(t,e){return this.premultiply(ha.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ha=new Pt;function Du(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function $r(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rh(){const i=$r("canvas");return i.style.display="block",i}const kl={};function Zi(i){i in kl||(kl[i]=!0,console.warn(i))}function Ch(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ph(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Dh(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Hl=new Pt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Vl=new Pt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ih(){const i={enabled:!0,workingColorSpace:ms,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===Jt&&(s.r=On(s.r),s.g=On(s.g),s.b=On(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===Jt&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},fromWorkingColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},toWorkingColorSpace:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Kn?qr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[ms]:{primaries:t,whitePoint:n,transfer:qr,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:t,whitePoint:n,transfer:Jt,toXYZ:Hl,fromXYZ:Vl,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}}),i}const qt=Ih();function On(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Ai;class Lh{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Ai===void 0&&(Ai=$r("canvas")),Ai.width=t.width,Ai.height=t.height;const n=Ai.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=Ai}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=$r("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=On(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(On(e[n]/255)*255):e[n]=On(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Fh=0;class cl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Fh++}),this.uuid=xs(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(fa(s[a].image)):r.push(fa(s[a]))}else r=fa(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Lh.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Uh=0;class Oe extends Si{constructor(t=Oe.DEFAULT_IMAGE,e=Oe.DEFAULT_MAPPING,n=Ne,s=Ne,r=fe,a=yi,o=Zt,l=cn,u=Oe.DEFAULT_ANISOTROPY,h=Kn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Uh++}),this.uuid=xs(),this.name="",this.source=new cl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=u,this.format=o,this.internalFormat=null,this.type=l,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==bu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case vn:t.x=t.x-Math.floor(t.x);break;case Ne:t.x=t.x<0?0:1;break;case _o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case vn:t.y=t.y-Math.floor(t.y);break;case Ne:t.y=t.y<0?0:1;break;case _o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Oe.DEFAULT_IMAGE=null;Oe.DEFAULT_MAPPING=bu;Oe.DEFAULT_ANISOTROPY=1;class Kt{constructor(t=0,e=0,n=0,s=1){Kt.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,u=l[0],h=l[4],f=l[8],c=l[1],m=l[5],g=l[9],_=l[2],d=l[6],p=l[10];if(Math.abs(h-c)<.01&&Math.abs(f-_)<.01&&Math.abs(g-d)<.01){if(Math.abs(h+c)<.1&&Math.abs(f+_)<.1&&Math.abs(g+d)<.1&&Math.abs(u+m+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(u+1)/2,v=(m+1)/2,T=(p+1)/2,A=(h+c)/4,w=(f+_)/4,P=(g+d)/4;return y>v&&y>T?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=A/n,r=w/n):v>T?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=A/s,r=P/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=w/r,s=P/r),this.set(n,s,r,e),this}let x=Math.sqrt((d-g)*(d-g)+(f-_)*(f-_)+(c-h)*(c-h));return Math.abs(x)<.001&&(x=1),this.x=(d-g)/x,this.y=(f-_)/x,this.z=(c-h)/x,this.w=Math.acos((u+m+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ct(this.x,t.x,e.x),this.y=Ct(this.y,t.y,e.y),this.z=Ct(this.z,t.z,e.z),this.w=Ct(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ct(this.x,t,e),this.y=Ct(this.y,t,e),this.z=Ct(this.z,t,e),this.w=Ct(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Nh extends Si{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Kt(0,0,t,e),this.scissorTest=!1,this.viewport=new Kt(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fe,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new Oe(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const e=Object.assign({},t.texture.image);return this.texture.source=new cl(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ze extends Nh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ea extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Oh extends Ze{constructor(t=1,e=1,n=1,s={}){super(t,e,s),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new ea(null,t,e,n),this.texture.isRenderTargetTexture=!0}}class Bh extends Oe{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Ne,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ti{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],u=n[s+1],h=n[s+2],f=n[s+3];const c=r[a+0],m=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=u,t[e+2]=h,t[e+3]=f;return}if(o===1){t[e+0]=c,t[e+1]=m,t[e+2]=g,t[e+3]=_;return}if(f!==_||l!==c||u!==m||h!==g){let d=1-o;const p=l*c+u*m+h*g+f*_,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const T=Math.sqrt(y),A=Math.atan2(T,p*x);d=Math.sin(d*A)/T,o=Math.sin(o*A)/T}const v=o*x;if(l=l*d+c*v,u=u*d+m*v,h=h*d+g*v,f=f*d+_*v,d===1-o){const T=1/Math.sqrt(l*l+u*u+h*h+f*f);l*=T,u*=T,h*=T,f*=T}}t[e]=l,t[e+1]=u,t[e+2]=h,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],u=n[s+2],h=n[s+3],f=r[a],c=r[a+1],m=r[a+2],g=r[a+3];return t[e]=o*g+h*f+l*m-u*c,t[e+1]=l*g+h*c+u*f-o*m,t[e+2]=u*g+h*m+o*c-l*f,t[e+3]=h*g-o*f-l*c-u*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,u=o(n/2),h=o(s/2),f=o(r/2),c=l(n/2),m=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=c*h*f+u*m*g,this._y=u*m*f-c*h*g,this._z=u*h*g+c*m*f,this._w=u*h*f-c*m*g;break;case"YXZ":this._x=c*h*f+u*m*g,this._y=u*m*f-c*h*g,this._z=u*h*g-c*m*f,this._w=u*h*f+c*m*g;break;case"ZXY":this._x=c*h*f-u*m*g,this._y=u*m*f+c*h*g,this._z=u*h*g+c*m*f,this._w=u*h*f-c*m*g;break;case"ZYX":this._x=c*h*f-u*m*g,this._y=u*m*f+c*h*g,this._z=u*h*g-c*m*f,this._w=u*h*f+c*m*g;break;case"YZX":this._x=c*h*f+u*m*g,this._y=u*m*f+c*h*g,this._z=u*h*g-c*m*f,this._w=u*h*f-c*m*g;break;case"XZY":this._x=c*h*f-u*m*g,this._y=u*m*f-c*h*g,this._z=u*h*g+c*m*f,this._w=u*h*f+c*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],u=e[2],h=e[6],f=e[10],c=n+o+f;if(c>0){const m=.5/Math.sqrt(c+1);this._w=.25/m,this._x=(h-l)*m,this._y=(r-u)*m,this._z=(a-s)*m}else if(n>o&&n>f){const m=2*Math.sqrt(1+n-o-f);this._w=(h-l)/m,this._x=.25*m,this._y=(s+a)/m,this._z=(r+u)/m}else if(o>f){const m=2*Math.sqrt(1+o-n-f);this._w=(r-u)/m,this._x=(s+a)/m,this._y=.25*m,this._z=(l+h)/m}else{const m=2*Math.sqrt(1+f-n-o);this._w=(a-s)/m,this._x=(r+u)/m,this._y=(l+h)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ct(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,u=e._z,h=e._w;return this._x=n*h+a*o+s*u-r*l,this._y=s*h+a*l+r*o-n*u,this._z=r*h+a*u+n*l-s*o,this._w=a*h-n*o-s*l-r*u,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const m=1-e;return this._w=m*a+e*this._w,this._x=m*n+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const u=Math.sqrt(l),h=Math.atan2(u,o),f=Math.sin((1-e)*h)/u,c=Math.sin(e*h)/u;return this._w=a*f+this._w*c,this._x=n*f+this._x*c,this._y=s*f+this._y*c,this._z=r*f+this._z*c,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(t=0,e=0,n=0){D.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Gl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Gl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,u=2*(a*s-o*n),h=2*(o*e-r*s),f=2*(r*n-a*e);return this.x=e+l*u+a*f-o*h,this.y=n+l*h+o*u-r*f,this.z=s+l*f+r*h-a*u,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ct(this.x,t.x,e.x),this.y=Ct(this.y,t.y,e.y),this.z=Ct(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ct(this.x,t,e),this.y=Ct(this.y,t,e),this.z=Ct(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Ct(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return da.copy(this).projectOnVector(t),this.sub(da)}reflect(t){return this.sub(da.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Ct(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const da=new D,Gl=new ti;class Be{constructor(t=new D(1/0,1/0,1/0),e=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(dn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(dn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=dn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,dn):dn.fromBufferAttribute(r,a),dn.applyMatrix4(t.matrixWorld),this.expandByPoint(dn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),js.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),js.copy(n.boundingBox)),js.applyMatrix4(t.matrixWorld),this.union(js)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,dn),dn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ts),Ks.subVectors(this.max,Ts),Ri.subVectors(t.a,Ts),Ci.subVectors(t.b,Ts),Pi.subVectors(t.c,Ts),Hn.subVectors(Ci,Ri),Vn.subVectors(Pi,Ci),si.subVectors(Ri,Pi);let e=[0,-Hn.z,Hn.y,0,-Vn.z,Vn.y,0,-si.z,si.y,Hn.z,0,-Hn.x,Vn.z,0,-Vn.x,si.z,0,-si.x,-Hn.y,Hn.x,0,-Vn.y,Vn.x,0,-si.y,si.x,0];return!pa(e,Ri,Ci,Pi,Ks)||(e=[1,0,0,0,1,0,0,0,1],!pa(e,Ri,Ci,Pi,Ks))?!1:(Zs.crossVectors(Hn,Vn),e=[Zs.x,Zs.y,Zs.z],pa(e,Ri,Ci,Pi,Ks))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,dn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(dn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(wn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),wn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),wn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),wn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),wn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),wn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),wn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),wn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(wn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const wn=[new D,new D,new D,new D,new D,new D,new D,new D],dn=new D,js=new Be,Ri=new D,Ci=new D,Pi=new D,Hn=new D,Vn=new D,si=new D,Ts=new D,Ks=new D,Zs=new D,ri=new D;function pa(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){ri.fromArray(i,r);const o=s.x*Math.abs(ri.x)+s.y*Math.abs(ri.y)+s.z*Math.abs(ri.z),l=t.dot(ri),u=e.dot(ri),h=n.dot(ri);if(Math.max(-Math.max(l,u,h),Math.min(l,u,h))>o)return!1}return!0}const zh=new Be,Es=new D,ma=new D;class na{constructor(t=new D,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):zh.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Es.subVectors(t,this.center);const e=Es.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Es,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ma.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Es.copy(t.center).add(ma)),this.expandByPoint(Es.copy(t.center).sub(ma))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const An=new D,ga=new D,Js=new D,Gn=new D,_a=new D,Qs=new D,va=new D;class Iu{constructor(t=new D,e=new D(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,An)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=An.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(An.copy(this.origin).addScaledVector(this.direction,e),An.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){ga.copy(t).add(e).multiplyScalar(.5),Js.copy(e).sub(t).normalize(),Gn.copy(this.origin).sub(ga);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Js),o=Gn.dot(this.direction),l=-Gn.dot(Js),u=Gn.lengthSq(),h=Math.abs(1-a*a);let f,c,m,g;if(h>0)if(f=a*l-o,c=a*o-l,g=r*h,f>=0)if(c>=-g)if(c<=g){const _=1/h;f*=_,c*=_,m=f*(f+a*c+2*o)+c*(a*f+c+2*l)+u}else c=r,f=Math.max(0,-(a*c+o)),m=-f*f+c*(c+2*l)+u;else c=-r,f=Math.max(0,-(a*c+o)),m=-f*f+c*(c+2*l)+u;else c<=-g?(f=Math.max(0,-(-a*r+o)),c=f>0?-r:Math.min(Math.max(-r,-l),r),m=-f*f+c*(c+2*l)+u):c<=g?(f=0,c=Math.min(Math.max(-r,-l),r),m=c*(c+2*l)+u):(f=Math.max(0,-(a*r+o)),c=f>0?r:Math.min(Math.max(-r,-l),r),m=-f*f+c*(c+2*l)+u);else c=a>0?-r:r,f=Math.max(0,-(a*c+o)),m=-f*f+c*(c+2*l)+u;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(ga).addScaledVector(Js,c),m}intersectSphere(t,e){An.subVectors(t.center,this.origin);const n=An.dot(this.direction),s=An.dot(An)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const u=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,c=this.origin;return u>=0?(n=(t.min.x-c.x)*u,s=(t.max.x-c.x)*u):(n=(t.max.x-c.x)*u,s=(t.min.x-c.x)*u),h>=0?(r=(t.min.y-c.y)*h,a=(t.max.y-c.y)*h):(r=(t.max.y-c.y)*h,a=(t.min.y-c.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),f>=0?(o=(t.min.z-c.z)*f,l=(t.max.z-c.z)*f):(o=(t.max.z-c.z)*f,l=(t.min.z-c.z)*f),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,An)!==null}intersectTriangle(t,e,n,s,r){_a.subVectors(e,t),Qs.subVectors(n,t),va.crossVectors(_a,Qs);let a=this.direction.dot(va),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Gn.subVectors(this.origin,t);const l=o*this.direction.dot(Qs.crossVectors(Gn,Qs));if(l<0)return null;const u=o*this.direction.dot(_a.cross(Gn));if(u<0||l+u>a)return null;const h=-o*Gn.dot(va);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ut{constructor(t,e,n,s,r,a,o,l,u,h,f,c,m,g,_,d){Ut.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,u,h,f,c,m,g,_,d)}set(t,e,n,s,r,a,o,l,u,h,f,c,m,g,_,d){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=u,p[6]=h,p[10]=f,p[14]=c,p[3]=m,p[7]=g,p[11]=_,p[15]=d,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ut().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/Di.setFromMatrixColumn(t,0).length(),r=1/Di.setFromMatrixColumn(t,1).length(),a=1/Di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),u=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const c=a*h,m=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=-l*f,e[8]=u,e[1]=m+g*u,e[5]=c-_*u,e[9]=-o*l,e[2]=_-c*u,e[6]=g+m*u,e[10]=a*l}else if(t.order==="YXZ"){const c=l*h,m=l*f,g=u*h,_=u*f;e[0]=c+_*o,e[4]=g*o-m,e[8]=a*u,e[1]=a*f,e[5]=a*h,e[9]=-o,e[2]=m*o-g,e[6]=_+c*o,e[10]=a*l}else if(t.order==="ZXY"){const c=l*h,m=l*f,g=u*h,_=u*f;e[0]=c-_*o,e[4]=-a*f,e[8]=g+m*o,e[1]=m+g*o,e[5]=a*h,e[9]=_-c*o,e[2]=-a*u,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const c=a*h,m=a*f,g=o*h,_=o*f;e[0]=l*h,e[4]=g*u-m,e[8]=c*u+_,e[1]=l*f,e[5]=_*u+c,e[9]=m*u-g,e[2]=-u,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const c=a*l,m=a*u,g=o*l,_=o*u;e[0]=l*h,e[4]=_-c*f,e[8]=g*f+m,e[1]=f,e[5]=a*h,e[9]=-o*h,e[2]=-u*h,e[6]=m*f+g,e[10]=c-_*f}else if(t.order==="XZY"){const c=a*l,m=a*u,g=o*l,_=o*u;e[0]=l*h,e[4]=-f,e[8]=u*h,e[1]=c*f+_,e[5]=a*h,e[9]=m*f-g,e[2]=g*f-m,e[6]=o*h,e[10]=_*f+c}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(kh,t,Hh)}lookAt(t,e,n){const s=this.elements;return qe.subVectors(t,e),qe.lengthSq()===0&&(qe.z=1),qe.normalize(),Wn.crossVectors(n,qe),Wn.lengthSq()===0&&(Math.abs(n.z)===1?qe.x+=1e-4:qe.z+=1e-4,qe.normalize(),Wn.crossVectors(n,qe)),Wn.normalize(),tr.crossVectors(qe,Wn),s[0]=Wn.x,s[4]=tr.x,s[8]=qe.x,s[1]=Wn.y,s[5]=tr.y,s[9]=qe.y,s[2]=Wn.z,s[6]=tr.z,s[10]=qe.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],u=n[12],h=n[1],f=n[5],c=n[9],m=n[13],g=n[2],_=n[6],d=n[10],p=n[14],x=n[3],y=n[7],v=n[11],T=n[15],A=s[0],w=s[4],P=s[8],b=s[12],M=s[1],C=s[5],F=s[9],L=s[13],B=s[2],G=s[6],H=s[10],q=s[14],W=s[3],tt=s[7],ct=s[11],_t=s[15];return r[0]=a*A+o*M+l*B+u*W,r[4]=a*w+o*C+l*G+u*tt,r[8]=a*P+o*F+l*H+u*ct,r[12]=a*b+o*L+l*q+u*_t,r[1]=h*A+f*M+c*B+m*W,r[5]=h*w+f*C+c*G+m*tt,r[9]=h*P+f*F+c*H+m*ct,r[13]=h*b+f*L+c*q+m*_t,r[2]=g*A+_*M+d*B+p*W,r[6]=g*w+_*C+d*G+p*tt,r[10]=g*P+_*F+d*H+p*ct,r[14]=g*b+_*L+d*q+p*_t,r[3]=x*A+y*M+v*B+T*W,r[7]=x*w+y*C+v*G+T*tt,r[11]=x*P+y*F+v*H+T*ct,r[15]=x*b+y*L+v*q+T*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],u=t[13],h=t[2],f=t[6],c=t[10],m=t[14],g=t[3],_=t[7],d=t[11],p=t[15];return g*(+r*l*f-s*u*f-r*o*c+n*u*c+s*o*m-n*l*m)+_*(+e*l*m-e*u*c+r*a*c-s*a*m+s*u*h-r*l*h)+d*(+e*u*f-e*o*m-r*a*f+n*a*m+r*o*h-n*u*h)+p*(-s*o*h-e*l*f+e*o*c+s*a*f-n*a*c+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],u=t[7],h=t[8],f=t[9],c=t[10],m=t[11],g=t[12],_=t[13],d=t[14],p=t[15],x=f*d*u-_*c*u+_*l*m-o*d*m-f*l*p+o*c*p,y=g*c*u-h*d*u-g*l*m+a*d*m+h*l*p-a*c*p,v=h*_*u-g*f*u+g*o*m-a*_*m-h*o*p+a*f*p,T=g*f*l-h*_*l-g*o*c+a*_*c+h*o*d-a*f*d,A=e*x+n*y+s*v+r*T;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/A;return t[0]=x*w,t[1]=(_*c*r-f*d*r-_*s*m+n*d*m+f*s*p-n*c*p)*w,t[2]=(o*d*r-_*l*r+_*s*u-n*d*u-o*s*p+n*l*p)*w,t[3]=(f*l*r-o*c*r-f*s*u+n*c*u+o*s*m-n*l*m)*w,t[4]=y*w,t[5]=(h*d*r-g*c*r+g*s*m-e*d*m-h*s*p+e*c*p)*w,t[6]=(g*l*r-a*d*r-g*s*u+e*d*u+a*s*p-e*l*p)*w,t[7]=(a*c*r-h*l*r+h*s*u-e*c*u-a*s*m+e*l*m)*w,t[8]=v*w,t[9]=(g*f*r-h*_*r-g*n*m+e*_*m+h*n*p-e*f*p)*w,t[10]=(a*_*r-g*o*r+g*n*u-e*_*u-a*n*p+e*o*p)*w,t[11]=(h*o*r-a*f*r-h*n*u+e*f*u+a*n*m-e*o*m)*w,t[12]=T*w,t[13]=(h*_*s-g*f*s+g*n*c-e*_*c-h*n*d+e*f*d)*w,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*d-e*o*d)*w,t[15]=(a*f*s-h*o*s+h*n*l-e*f*l-a*n*c+e*o*c)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,u=r*a,h=r*o;return this.set(u*a+n,u*o-s*l,u*l+s*o,0,u*o+s*l,h*o+n,h*l-s*a,0,u*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,u=r+r,h=a+a,f=o+o,c=r*u,m=r*h,g=r*f,_=a*h,d=a*f,p=o*f,x=l*u,y=l*h,v=l*f,T=n.x,A=n.y,w=n.z;return s[0]=(1-(_+p))*T,s[1]=(m+v)*T,s[2]=(g-y)*T,s[3]=0,s[4]=(m-v)*A,s[5]=(1-(c+p))*A,s[6]=(d+x)*A,s[7]=0,s[8]=(g+y)*w,s[9]=(d-x)*w,s[10]=(1-(c+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=Di.set(s[0],s[1],s[2]).length();const a=Di.set(s[4],s[5],s[6]).length(),o=Di.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],pn.copy(this);const u=1/r,h=1/a,f=1/o;return pn.elements[0]*=u,pn.elements[1]*=u,pn.elements[2]*=u,pn.elements[4]*=h,pn.elements[5]*=h,pn.elements[6]*=h,pn.elements[8]*=f,pn.elements[9]*=f,pn.elements[10]*=f,e.setFromRotationMatrix(pn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=Un){const l=this.elements,u=2*r/(e-t),h=2*r/(n-s),f=(e+t)/(e-t),c=(n+s)/(n-s);let m,g;if(o===Un)m=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Yr)m=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=u,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=h,l[9]=c,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=Un){const l=this.elements,u=1/(e-t),h=1/(n-s),f=1/(a-r),c=(e+t)*u,m=(n+s)*h;let g,_;if(o===Un)g=(a+r)*f,_=-2*f;else if(o===Yr)g=r*f,_=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-c,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Di=new D,pn=new Ut,kh=new D(0,0,0),Hh=new D(1,1,1),Wn=new D,tr=new D,qe=new D,Wl=new Ut,Xl=new ti;class Tn{constructor(t=0,e=0,n=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],u=s[5],h=s[9],f=s[2],c=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,m),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(c,u),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,m),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(-f,m),this._z=Math.atan2(-a,u)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(c,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,u));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,u),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(o,m));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(c,u),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Wl.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Wl,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Xl.setFromEuler(this),this.setFromQuaternion(Xl,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class Lu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vh=0;const ql=new D,Ii=new ti,Rn=new Ut,er=new D,ws=new D,Gh=new D,Wh=new ti,Yl=new D(1,0,0),$l=new D(0,1,0),jl=new D(0,0,1),Kl={type:"added"},Xh={type:"removed"},Li={type:"childadded",child:null},xa={type:"childremoved",child:null};class Ce extends Si{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vh++}),this.uuid=xs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ce.DEFAULT_UP.clone();const t=new D,e=new Tn,n=new ti,s=new D(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ut},normalMatrix:{value:new Pt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=Ce.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Lu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.multiply(Ii),this}rotateOnWorldAxis(t,e){return Ii.setFromAxisAngle(t,e),this.quaternion.premultiply(Ii),this}rotateX(t){return this.rotateOnAxis(Yl,t)}rotateY(t){return this.rotateOnAxis($l,t)}rotateZ(t){return this.rotateOnAxis(jl,t)}translateOnAxis(t,e){return ql.copy(t).applyQuaternion(this.quaternion),this.position.add(ql.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Yl,t)}translateY(t){return this.translateOnAxis($l,t)}translateZ(t){return this.translateOnAxis(jl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?er.copy(t):er.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),ws.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(ws,er,this.up):Rn.lookAt(er,ws,this.up),this.quaternion.setFromRotationMatrix(Rn),s&&(Rn.extractRotation(s.matrixWorld),Ii.setFromRotationMatrix(Rn),this.quaternion.premultiply(Ii.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Kl),Li.child=t,this.dispatchEvent(Li),Li.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Xh),xa.child=t,this.dispatchEvent(xa),xa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Rn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Rn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Kl),Li.child=t,this.dispatchEvent(Li),Li.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,t,Gh),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ws,Wh,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let u=0,h=l.length;u<h;u++){const f=l[u];r(t.shapes,f)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,u=this.material.length;l<u;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),u=a(t.textures),h=a(t.images),f=a(t.shapes),c=a(t.skeletons),m=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),u.length>0&&(n.textures=u),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),c.length>0&&(n.skeletons=c),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const u in o){const h=o[u];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ce.DEFAULT_UP=new D(0,1,0);Ce.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ce.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const mn=new D,Cn=new D,ya=new D,Pn=new D,Fi=new D,Ui=new D,Zl=new D,Ma=new D,ba=new D,Sa=new D,Ta=new Kt,Ea=new Kt,wa=new Kt;class be{constructor(t=new D,e=new D,n=new D){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),mn.subVectors(t,e),s.cross(mn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){mn.subVectors(s,e),Cn.subVectors(n,e),ya.subVectors(t,e);const a=mn.dot(mn),o=mn.dot(Cn),l=mn.dot(ya),u=Cn.dot(Cn),h=Cn.dot(ya),f=a*u-o*o;if(f===0)return r.set(0,0,0),null;const c=1/f,m=(u*l-o*h)*c,g=(a*h-o*l)*c;return r.set(1-m-g,g,m)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Pn)===null?!1:Pn.x>=0&&Pn.y>=0&&Pn.x+Pn.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,Pn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Pn.x),l.addScaledVector(a,Pn.y),l.addScaledVector(o,Pn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return Ta.setScalar(0),Ea.setScalar(0),wa.setScalar(0),Ta.fromBufferAttribute(t,e),Ea.fromBufferAttribute(t,n),wa.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Ta,r.x),a.addScaledVector(Ea,r.y),a.addScaledVector(wa,r.z),a}static isFrontFacing(t,e,n,s){return mn.subVectors(n,e),Cn.subVectors(t,e),mn.cross(Cn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return mn.subVectors(this.c,this.b),Cn.subVectors(this.a,this.b),mn.cross(Cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return be.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;Fi.subVectors(s,n),Ui.subVectors(r,n),Ma.subVectors(t,n);const l=Fi.dot(Ma),u=Ui.dot(Ma);if(l<=0&&u<=0)return e.copy(n);ba.subVectors(t,s);const h=Fi.dot(ba),f=Ui.dot(ba);if(h>=0&&f<=h)return e.copy(s);const c=l*f-h*u;if(c<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(Fi,a);Sa.subVectors(t,r);const m=Fi.dot(Sa),g=Ui.dot(Sa);if(g>=0&&m<=g)return e.copy(r);const _=m*u-l*g;if(_<=0&&u>=0&&g<=0)return o=u/(u-g),e.copy(n).addScaledVector(Ui,o);const d=h*g-m*f;if(d<=0&&f-h>=0&&m-g>=0)return Zl.subVectors(r,s),o=(f-h)/(f-h+(m-g)),e.copy(s).addScaledVector(Zl,o);const p=1/(d+_+c);return a=_*p,o=c*p,e.copy(n).addScaledVector(Fi,a).addScaledVector(Ui,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Fu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Xn={h:0,s:0,l:0},nr={h:0,s:0,l:0};function Aa(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Ft{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=qt.workingColorSpace){if(t=ll(t,1),e=Ct(e,0,1),n=Ct(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Aa(a,r,t+1/3),this.g=Aa(a,r,t),this.b=Aa(a,r,t-1/3)}return qt.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=Fu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=On(t.r),this.g=On(t.g),this.b=On(t.b),this}copyLinearToSRGB(t){return this.r=as(t.r),this.g=as(t.g),this.b=as(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return qt.fromWorkingColorSpace(we.copy(this),t),Math.round(Ct(we.r*255,0,255))*65536+Math.round(Ct(we.g*255,0,255))*256+Math.round(Ct(we.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=qt.workingColorSpace){qt.fromWorkingColorSpace(we.copy(this),e);const n=we.r,s=we.g,r=we.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,u;const h=(o+a)/2;if(o===a)l=0,u=0;else{const f=a-o;switch(u=h<=.5?f/(a+o):f/(2-a-o),a){case n:l=(s-r)/f+(s<r?6:0);break;case s:l=(r-n)/f+2;break;case r:l=(n-s)/f+4;break}l/=6}return t.h=l,t.s=u,t.l=h,t}getRGB(t,e=qt.workingColorSpace){return qt.fromWorkingColorSpace(we.copy(this),e),t.r=we.r,t.g=we.g,t.b=we.b,t}getStyle(t=nn){qt.fromWorkingColorSpace(we.copy(this),t);const e=we.r,n=we.g,s=we.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Xn),this.setHSL(Xn.h+t,Xn.s+e,Xn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Xn),t.getHSL(nr);const n=zs(Xn.h,nr.h,e),s=zs(Xn.s,nr.s,e),r=zs(Xn.l,nr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const we=new Ft;Ft.NAMES=Fu;let qh=0;class Ws extends Si{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qh++}),this.uuid=xs(),this.name="",this.type="Material",this.blending=Jn,this.side=xn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ao,this.blendDst=oo,this.blendEquation=vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ft(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Nl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=wi,this.stencilZFail=wi,this.stencilZPass=wi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Jn&&(n.blending=this.blending),this.side!==xn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ao&&(n.blendSrc=this.blendSrc),this.blendDst!==oo&&(n.blendDst=this.blendDst),this.blendEquation!==vi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Nl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==wi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==wi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==wi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ul extends Ws{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ft(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=yu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ln=Yh();function Yh(){const i=new ArrayBuffer(4),t=new Float32Array(i),e=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const u=l-127;u<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):u<-14?(n[l]=1024>>-u-14,n[l|256]=1024>>-u-14|32768,s[l]=-u-1,s[l|256]=-u-1):u<=15?(n[l]=u+15<<10,n[l|256]=u+15<<10|32768,s[l]=13,s[l|256]=13):u<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let u=l<<13,h=0;for(;!(u&8388608);)u<<=1,h-=8388608;u&=-8388609,h+=947912704,r[l]=u|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:t,uint32View:e,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function $h(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Ct(i,-65504,65504),Ln.floatView[0]=i;const t=Ln.uint32View[0],e=t>>23&511;return Ln.baseTable[e]+((t&8388607)>>Ln.shiftTable[e])}function jh(i){const t=i>>10;return Ln.uint32View[0]=Ln.mantissaTable[Ln.offsetTable[t]+(i&1023)]+Ln.exponentTable[t],Ln.floatView[0]}const Fn={toHalfFloat:$h,fromHalfFloat:jh},pe=new D,ir=new ut;class ue{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Ol,this.updateRanges=[],this.gpuType=ne,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)ir.fromBufferAttribute(this,e),ir.applyMatrix3(t),this.setXY(e,ir.x,ir.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix3(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyMatrix4(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.applyNormalMatrix(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)pe.fromBufferAttribute(this,e),pe.transformDirection(t),this.setXYZ(e,pe.x,pe.y,pe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=De(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ki(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ki(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ki(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ki(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),n=De(n,this.array),s=De(s,this.array),r=De(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Ol&&(t.usage=this.usage),t}}class Uu extends ue{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Nu extends ue{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class ye extends ue{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kh=0;const en=new Ut,Ra=new Ce,Ni=new D,Ye=new Be,As=new Be,xe=new D;class Se extends Si{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kh++}),this.uuid=xs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Du(t)?Nu:Uu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return en.makeRotationFromQuaternion(t),this.applyMatrix4(en),this}rotateX(t){return en.makeRotationX(t),this.applyMatrix4(en),this}rotateY(t){return en.makeRotationY(t),this.applyMatrix4(en),this}rotateZ(t){return en.makeRotationZ(t),this.applyMatrix4(en),this}translate(t,e,n){return en.makeTranslation(t,e,n),this.applyMatrix4(en),this}scale(t,e,n){return en.makeScale(t,e,n),this.applyMatrix4(en),this}lookAt(t){return Ra.lookAt(t),Ra.updateMatrix(),this.applyMatrix4(Ra.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ni).negate(),this.translate(Ni.x,Ni.y,Ni.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ye(n,3))}else{const n=Math.min(t.length,e.count);for(let s=0;s<n;s++){const r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Be);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Ye.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ye.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ye.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ye.min),this.boundingBox.expandByPoint(Ye.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new na);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new D,1/0);return}if(t){const n=this.boundingSphere.center;if(Ye.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];As.setFromBufferAttribute(o),this.morphTargetsRelative?(xe.addVectors(Ye.min,As.min),Ye.expandByPoint(xe),xe.addVectors(Ye.max,As.max),Ye.expandByPoint(xe)):(Ye.expandByPoint(As.min),Ye.expandByPoint(As.max))}Ye.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(xe));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let u=0,h=o.count;u<h;u++)xe.fromBufferAttribute(o,u),l&&(Ni.fromBufferAttribute(t,u),xe.add(Ni)),s=Math.max(s,n.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ue(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let P=0;P<n.count;P++)o[P]=new D,l[P]=new D;const u=new D,h=new D,f=new D,c=new ut,m=new ut,g=new ut,_=new D,d=new D;function p(P,b,M){u.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),f.fromBufferAttribute(n,M),c.fromBufferAttribute(r,P),m.fromBufferAttribute(r,b),g.fromBufferAttribute(r,M),h.sub(u),f.sub(u),m.sub(c),g.sub(c);const C=1/(m.x*g.y-g.x*m.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(f,-m.y).multiplyScalar(C),d.copy(f).multiplyScalar(m.x).addScaledVector(h,-g.x).multiplyScalar(C),o[P].add(_),o[b].add(_),o[M].add(_),l[P].add(d),l[b].add(d),l[M].add(d))}let x=this.groups;x.length===0&&(x=[{start:0,count:t.count}]);for(let P=0,b=x.length;P<b;++P){const M=x[P],C=M.start,F=M.count;for(let L=C,B=C+F;L<B;L+=3)p(t.getX(L+0),t.getX(L+1),t.getX(L+2))}const y=new D,v=new D,T=new D,A=new D;function w(P){T.fromBufferAttribute(s,P),A.copy(T);const b=o[P];y.copy(b),y.sub(T.multiplyScalar(T.dot(b))).normalize(),v.crossVectors(A,b);const C=v.dot(l[P])<0?-1:1;a.setXYZW(P,y.x,y.y,y.z,C)}for(let P=0,b=x.length;P<b;++P){const M=x[P],C=M.start,F=M.count;for(let L=C,B=C+F;L<B;L+=3)w(t.getX(L+0)),w(t.getX(L+1)),w(t.getX(L+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ue(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let c=0,m=n.count;c<m;c++)n.setXYZ(c,0,0,0);const s=new D,r=new D,a=new D,o=new D,l=new D,u=new D,h=new D,f=new D;if(t)for(let c=0,m=t.count;c<m;c+=3){const g=t.getX(c+0),_=t.getX(c+1),d=t.getX(c+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,d),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),u.fromBufferAttribute(n,d),o.add(h),l.add(h),u.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(d,u.x,u.y,u.z)}else for(let c=0,m=e.count;c<m;c+=3)s.fromBufferAttribute(e,c+0),r.fromBufferAttribute(e,c+1),a.fromBufferAttribute(e,c+2),h.subVectors(a,r),f.subVectors(s,r),h.cross(f),n.setXYZ(c+0,h.x,h.y,h.z),n.setXYZ(c+1,h.x,h.y,h.z),n.setXYZ(c+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(o,l){const u=o.array,h=o.itemSize,f=o.normalized,c=new u.constructor(l.length*h);let m=0,g=0;for(let _=0,d=l.length;_<d;_++){o.isInterleavedBufferAttribute?m=l[_]*o.data.stride+o.offset:m=l[_]*h;for(let p=0;p<h;p++)c[g++]=u[m++]}return new ue(c,h,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Se,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],u=t(l,n);e.setAttribute(o,u)}const r=this.morphAttributes;for(const o in r){const l=[],u=r[o];for(let h=0,f=u.length;h<f;h++){const c=u[h],m=t(c,n);l.push(m)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const u=a[o];e.addGroup(u.start,u.count,u.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(t[u]=l[u]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const u=n[l];t.data.attributes[l]=u.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],h=[];for(let f=0,c=u.length;f<c;f++){const m=u[f];h.push(m.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const u in s){const h=s[u];this.setAttribute(u,h.clone(e))}const r=t.morphAttributes;for(const u in r){const h=[],f=r[u];for(let c=0,m=f.length;c<m;c++)h.push(f[c].clone(e));this.morphAttributes[u]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let u=0,h=a.length;u<h;u++){const f=a[u];this.addGroup(f.start,f.count,f.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Jl=new Ut,ai=new Iu,sr=new na,Ql=new D,rr=new D,ar=new D,or=new D,Ca=new D,lr=new D,tc=new D,cr=new D;class Ae extends Ce{constructor(t=new Se,e=new ul){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){lr.set(0,0,0);for(let l=0,u=r.length;l<u;l++){const h=o[l],f=r[l];h!==0&&(Ca.fromBufferAttribute(f,t),a?lr.addScaledVector(Ca,h):lr.addScaledVector(Ca.sub(e),h))}e.add(lr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),sr.copy(n.boundingSphere),sr.applyMatrix4(r),ai.copy(t.ray).recast(t.near),!(sr.containsPoint(ai.origin)===!1&&(ai.intersectSphere(sr,Ql)===null||ai.origin.distanceToSquared(Ql)>(t.far-t.near)**2))&&(Jl.copy(r).invert(),ai.copy(t.ray).applyMatrix4(Jl),!(n.boundingBox!==null&&ai.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,ai)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,u=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,c=r.groups,m=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const d=c[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),y=Math.min(o.count,Math.min(d.start+d.count,m.start+m.count));for(let v=x,T=y;v<T;v+=3){const A=o.getX(v),w=o.getX(v+1),P=o.getX(v+2);s=ur(this,p,t,n,u,h,f,A,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(o.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const x=o.getX(d),y=o.getX(d+1),v=o.getX(d+2);s=ur(this,a,t,n,u,h,f,x,y,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=c.length;g<_;g++){const d=c[g],p=a[d.materialIndex],x=Math.max(d.start,m.start),y=Math.min(l.count,Math.min(d.start+d.count,m.start+m.count));for(let v=x,T=y;v<T;v+=3){const A=v,w=v+1,P=v+2;s=ur(this,p,t,n,u,h,f,A,w,P),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=d.materialIndex,e.push(s))}}else{const g=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let d=g,p=_;d<p;d+=3){const x=d,y=d+1,v=d+2;s=ur(this,a,t,n,u,h,f,x,y,v),s&&(s.faceIndex=Math.floor(d/3),e.push(s))}}}}function Zh(i,t,e,n,s,r,a,o){let l;if(t.side===Re?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===xn,o),l===null)return null;cr.copy(o),cr.applyMatrix4(i.matrixWorld);const u=e.ray.origin.distanceTo(cr);return u<e.near||u>e.far?null:{distance:u,point:cr.clone(),object:i}}function ur(i,t,e,n,s,r,a,o,l,u){i.getVertexPosition(o,rr),i.getVertexPosition(l,ar),i.getVertexPosition(u,or);const h=Zh(i,t,e,n,rr,ar,or,tc);if(h){const f=new D;be.getBarycoord(tc,rr,ar,or,f),s&&(h.uv=be.getInterpolatedAttribute(s,o,l,u,f,new ut)),r&&(h.uv1=be.getInterpolatedAttribute(r,o,l,u,f,new ut)),a&&(h.normal=be.getInterpolatedAttribute(a,o,l,u,f,new D),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const c={a:o,b:l,c:u,normal:new D,materialIndex:0};be.getNormal(rr,ar,or,c.normal),h.face=c,h.barycoord=f}return h}class ys extends Se{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],u=[],h=[],f=[];let c=0,m=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new ye(u,3)),this.setAttribute("normal",new ye(h,3)),this.setAttribute("uv",new ye(f,2));function g(_,d,p,x,y,v,T,A,w,P,b){const M=v/w,C=T/P,F=v/2,L=T/2,B=A/2,G=w+1,H=P+1;let q=0,W=0;const tt=new D;for(let ct=0;ct<H;ct++){const _t=ct*C-L;for(let Nt=0;Nt<G;Nt++){const te=Nt*M-F;tt[_]=te*x,tt[d]=_t*y,tt[p]=B,u.push(tt.x,tt.y,tt.z),tt[_]=0,tt[d]=0,tt[p]=A>0?1:-1,h.push(tt.x,tt.y,tt.z),f.push(Nt/w),f.push(1-ct/P),q+=1}}for(let ct=0;ct<P;ct++)for(let _t=0;_t<w;_t++){const Nt=c+_t+G*ct,te=c+_t+G*(ct+1),$=c+(_t+1)+G*(ct+1),et=c+(_t+1)+G*ct;l.push(Nt,te,et),l.push(te,$,et),W+=6}o.addGroup(m,W,b),m+=W,c+=q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function _s(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function Ie(i){const t={};for(let e=0;e<i.length;e++){const n=_s(i[e]);for(const s in n)t[s]=n[s]}return t}function Jh(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Ou(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:qt.workingColorSpace}const Qh={clone:_s,merge:Ie};var tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ef=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Ws{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=tf,this.fragmentShader=ef,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=_s(t.uniforms),this.uniformsGroups=Jh(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Bu extends Ce{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=Un}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const qn=new D,ec=new ut,nc=new ut;class Le extends Bu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=gs*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Bs*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return gs*2*Math.atan(Math.tan(Bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){qn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(qn.x,qn.y).multiplyScalar(-t/qn.z),qn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(qn.x,qn.y).multiplyScalar(-t/qn.z)}getViewSize(t,e){return this.getViewBounds(t,ec,nc),e.subVectors(nc,ec)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Bs*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,u=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/u,s*=a.width/l,n*=a.height/u}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Oi=-90,Bi=1;class nf extends Ce{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Le(Oi,Bi,t,e);s.layers=this.layers,this.add(s);const r=new Le(Oi,Bi,t,e);r.layers=this.layers,this.add(r);const a=new Le(Oi,Bi,t,e);a.layers=this.layers,this.add(a);const o=new Le(Oi,Bi,t,e);o.layers=this.layers,this.add(o);const l=new Le(Oi,Bi,t,e);l.layers=this.layers,this.add(l);const u=new Le(Oi,Bi,t,e);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const u of e)this.remove(u);if(t===Un)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const u of e)this.add(u),u.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,u,h]=this.children,f=t.getRenderTarget(),c=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,u),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(f,c,m),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class zu extends Oe{constructor(t,e,n,s,r,a,o,l,u,h){t=t!==void 0?t:[],e=e!==void 0?e:ls,super(t,e,n,s,r,a,o,l,u,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class sf extends Ze{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new zu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:fe}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ys(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:_s(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Ke});r.uniforms.tEquirect.value=e;const a=new Ae(s,r),o=e.minFilter;return e.minFilter===yi&&(e.minFilter=fe),new nf(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}class ku extends Ce{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class ln extends Oe{constructor(t=null,e=1,n=1,s,r,a,o,l,u=Bt,h=Bt,f,c){super(null,a,o,l,u,h,s,r,f,c),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new D,rf=new D,af=new Pt;class Mn{constructor(t=new D(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Pa.subVectors(n,e).cross(rf.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Pa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||af.getNormalMatrix(t),s=this.coplanarPoint(Pa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const oi=new na,hr=new D;class hl{constructor(t=new Mn,e=new Mn,n=new Mn,s=new Mn,r=new Mn,a=new Mn){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Un){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],u=s[4],h=s[5],f=s[6],c=s[7],m=s[8],g=s[9],_=s[10],d=s[11],p=s[12],x=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,c-u,d-m,v-p).normalize(),n[1].setComponents(l+r,c+u,d+m,v+p).normalize(),n[2].setComponents(l+a,c+h,d+g,v+x).normalize(),n[3].setComponents(l-a,c-h,d-g,v-x).normalize(),n[4].setComponents(l-o,c-f,d-_,v-y).normalize(),e===Un)n[5].setComponents(l+o,c+f,d+_,v+y).normalize();else if(e===Yr)n[5].setComponents(o,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),oi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),oi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(oi)}intersectsSprite(t){return oi.center.set(0,0,0),oi.radius=.7071067811865476,oi.applyMatrix4(t.matrixWorld),this.intersectsSphere(oi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(hr.x=s.normal.x>0?t.max.x:t.min.x,hr.y=s.normal.y>0?t.max.y:t.min.y,hr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(hr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class ts extends Ce{constructor(){super(),this.isGroup=!0,this.type="Group"}}class Hu extends Oe{constructor(t,e,n,s,r,a,o,l,u,h=rs){if(h!==rs&&h!==fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===rs&&(n=on),n===void 0&&h===fs&&(n=hs),super(null,s,r,a,o,l,h,n,u),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:Bt,this.minFilter=l!==void 0?l:Bt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class of{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(t,e){const n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){const e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){const t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const e=[];let n,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)n=this.getPoint(a/t),r+=n.distanceTo(s),e.push(r),s=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e){const n=this.getLengths();let s=0;const r=n.length;let a;e?a=e:a=t*n[r-1];let o=0,l=r-1,u;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),u=n[s]-a,u<0)o=s+1;else if(u>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);const h=n[s],c=n[s+1]-h,m=(a-h)/c;return(s+m)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);const a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new ut:new D);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){const n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e){const n=new D,s=[],r=[],a=[],o=new D,l=new Ut;for(let m=0;m<=t;m++){const g=m/t;s[m]=this.getTangentAt(g,new D)}r[0]=new D,a[0]=new D;let u=Number.MAX_VALUE;const h=Math.abs(s[0].x),f=Math.abs(s[0].y),c=Math.abs(s[0].z);h<=u&&(u=h,n.set(1,0,0)),f<=u&&(u=f,n.set(0,1,0)),c<=u&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let m=1;m<=t;m++){if(r[m]=r[m-1].clone(),a[m]=a[m-1].clone(),o.crossVectors(s[m-1],s[m]),o.length()>Number.EPSILON){o.normalize();const g=Math.acos(Ct(s[m-1].dot(s[m]),-1,1));r[m].applyMatrix4(l.makeRotationAxis(o,g))}a[m].crossVectors(s[m],r[m])}if(e===!0){let m=Math.acos(Ct(r[0].dot(r[t]),-1,1));m/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(m=-m);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],m*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){const t={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}}function fl(){let i=0,t=0,e=0,n=0;function s(r,a,o,l){i=r,t=o,e=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,u){s(a,o,u*(o-r),u*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,u,h,f){let c=(a-r)/u-(o-r)/(u+h)+(o-a)/h,m=(o-a)/h-(l-a)/(h+f)+(l-o)/f;c*=h,m*=h,s(a,o,c,m)},calc:function(r){const a=r*r,o=a*r;return i+t*r+e*a+n*o}}}const fr=new D,Da=new fl,Ia=new fl,La=new fl;class Wo extends of{constructor(t=[],e=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=s}getPoint(t,e=new D){const n=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let u,h;this.closed||o>0?u=s[(o-1)%r]:(fr.subVectors(s[0],s[1]).add(s[0]),u=fr);const f=s[o%r],c=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){const m=this.curveType==="chordal"?.5:.25;let g=Math.pow(u.distanceToSquared(f),m),_=Math.pow(f.distanceToSquared(c),m),d=Math.pow(c.distanceToSquared(h),m);_<1e-4&&(_=1),g<1e-4&&(g=_),d<1e-4&&(d=_),Da.initNonuniformCatmullRom(u.x,f.x,c.x,h.x,g,_,d),Ia.initNonuniformCatmullRom(u.y,f.y,c.y,h.y,g,_,d),La.initNonuniformCatmullRom(u.z,f.z,c.z,h.z,g,_,d)}else this.curveType==="catmullrom"&&(Da.initCatmullRom(u.x,f.x,c.x,h.x,this.tension),Ia.initCatmullRom(u.y,f.y,c.y,h.y,this.tension),La.initCatmullRom(u.z,f.z,c.z,h.z,this.tension));return n.set(Da.calc(l),Ia.calc(l),La.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){const t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){const s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){const s=t.points[e];this.points.push(new D().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}}class ia extends Se{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),u=o+1,h=l+1,f=t/o,c=e/l,m=[],g=[],_=[],d=[];for(let p=0;p<h;p++){const x=p*c-a;for(let y=0;y<u;y++){const v=y*f-r;g.push(v,-x,0),_.push(0,0,1),d.push(y/o),d.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<o;x++){const y=x+u*p,v=x+u*(p+1),T=x+1+u*(p+1),A=x+1+u*p;m.push(y,v,A),m.push(v,T,A)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ia(t.width,t.height,t.widthSegments,t.heightSegments)}}class dl extends Se{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let u=0;const h=[],f=new D,c=new D,m=[],g=[],_=[],d=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&l===Math.PI&&(v=-.5/e);for(let T=0;T<=e;T++){const A=T/e;f.x=-t*Math.cos(s+A*r)*Math.sin(a+y*o),f.y=t*Math.cos(a+y*o),f.z=t*Math.sin(s+A*r)*Math.sin(a+y*o),g.push(f.x,f.y,f.z),c.copy(f).normalize(),_.push(c.x,c.y,c.z),d.push(A+v,1-y),x.push(u++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<e;x++){const y=h[p][x+1],v=h[p][x],T=h[p+1][x],A=h[p+1][x+1];(p!==0||a>0)&&m.push(y,v,A),(p!==n-1||l<Math.PI)&&m.push(v,T,A)}this.setIndex(m),this.setAttribute("position",new ye(g,3)),this.setAttribute("normal",new ye(_,3)),this.setAttribute("uv",new ye(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new dl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class lf extends Ws{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ft(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ft(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Cu,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vu extends lf{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ut(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Ft(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Ft(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Ft(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}}class cf extends Ws{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=eh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class uf extends Ws{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class hf extends Ce{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Ft(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const Fa=new Ut,ic=new D,sc=new D;class ff{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hl,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new Kt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ic.setFromMatrixPosition(t.matrixWorld),e.position.copy(ic),sc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(sc),e.updateMatrixWorld(),Fa.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Fa),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Fa)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class df extends ff{constructor(){super(new Le(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(t){const e=this.camera,n=gs*2*t.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=t.distance||e.far;(n!==e.fov||s!==e.aspect||r!==e.far)&&(e.fov=n,e.aspect=s,e.far=r,e.updateProjectionMatrix()),super.updateMatrices(t)}copy(t){return super.copy(t),this.focus=t.focus,this}}class pf extends hf{constructor(t,e,n=0,s=Math.PI/3,r=0,a=2){super(t,e),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ce.DEFAULT_UP),this.updateMatrix(),this.target=new Ce,this.distance=n,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new df}get power(){return this.intensity*Math.PI}set power(t){this.intensity=t/Math.PI}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.angle=t.angle,this.penumbra=t.penumbra,this.decay=t.decay,this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gu extends Bu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=u*this.view.offsetX,a=r+u*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class mf extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class gf{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rc(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=rc();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function rc(){return performance.now()}class Xo{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Ct(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Ct(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const ac=new D,dr=new D;class Bn{constructor(t=new D,e=new D){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){ac.subVectors(t,this.start),dr.subVectors(this.end,this.start);const n=dr.dot(dr);let r=dr.dot(ac)/n;return e&&(r=Ct(r,0,1)),r}closestPointToPoint(t,e,n){const s=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(s).add(this.start)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class _f extends Si{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}function oc(i,t,e,n){const s=vf(n);switch(e){case Tu:return i*t;case wu:return i*t;case Au:return i*t*2;case ds:return i*t/s.components*s.byteLength;case Qr:return i*t/s.components*s.byteLength;case ta:return i*t*2/s.components*s.byteLength;case Gs:return i*t*2/s.components*s.byteLength;case Eu:return i*t*3/s.components*s.byteLength;case Zt:return i*t*4/s.components*s.byteLength;case ps:return i*t*4/s.components*s.byteLength;case Br:case zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case kr:case Hr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xo:case Mo:return Math.max(i,16)*Math.max(t,8)/4;case vo:case yo:return Math.max(i,8)*Math.max(t,8)/2;case bo:case So:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case To:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wo:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Ao:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ro:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Co:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Po:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Do:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case Io:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Lo:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Fo:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Uo:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case No:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Oo:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Bo:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Vr:case zo:case ko:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ru:case Ho:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Vo:case Go:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function vf(i){switch(i){case cn:case Xr:return{byteLength:1,components:1};case us:case rl:case Fe:return{byteLength:2,components:1};case al:case ol:return{byteLength:2,components:4};case on:case ss:case ne:return{byteLength:4,components:1};case Su:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Zr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Zr);/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wu(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function xf(i){const t=new WeakMap;function e(o,l){const u=o.array,h=o.usage,f=u.byteLength,c=i.createBuffer();i.bindBuffer(l,c),i.bufferData(l,u,h),o.onUploadCallback();let m;if(u instanceof Float32Array)m=i.FLOAT;else if(u instanceof Uint16Array)o.isFloat16BufferAttribute?m=i.HALF_FLOAT:m=i.UNSIGNED_SHORT;else if(u instanceof Int16Array)m=i.SHORT;else if(u instanceof Uint32Array)m=i.UNSIGNED_INT;else if(u instanceof Int32Array)m=i.INT;else if(u instanceof Int8Array)m=i.BYTE;else if(u instanceof Uint8Array)m=i.UNSIGNED_BYTE;else if(u instanceof Uint8ClampedArray)m=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+u);return{buffer:c,type:m,bytesPerElement:u.BYTES_PER_ELEMENT,version:o.version,size:f}}function n(o,l,u){const h=l.array,f=l.updateRanges;if(i.bindBuffer(u,o),f.length===0)i.bufferSubData(u,0,h);else{f.sort((m,g)=>m.start-g.start);let c=0;for(let m=1;m<f.length;m++){const g=f[c],_=f[m];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++c,f[c]=_)}f.length=c+1;for(let m=0,g=f.length;m<g;m++){const _=f[m];i.bufferSubData(u,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const u=t.get(o);if(u===void 0)t.set(o,e(o,l));else if(u.version<o.version){if(u.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(u.buffer,o,l),u.version=o.version}}return{get:s,remove:r,update:a}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mf=`#ifdef USE_ALPHAHASH
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
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Tf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ef=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wf=`#ifdef USE_AOMAP
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
#endif`,Af=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Rf=`#ifdef USE_BATCHING
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
#endif`,Cf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Df=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Ff=`#ifdef USE_BUMPMAP
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Vf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gf=`#define PI 3.141592653589793
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
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Xf=`vec3 transformedNormal = objectNormal;
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
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Zf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Jf=`#ifdef USE_ENVMAP
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
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,td=`#ifdef USE_ENVMAP
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
#endif`,ed=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,nd=`#ifdef USE_ENVMAP
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
#endif`,id=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,sd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,rd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ad=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,od=`#ifdef USE_GRADIENTMAP
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
}`,ld=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ud=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hd=`uniform bool receiveShadow;
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
#endif`,fd=`#ifdef USE_ENVMAP
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
#endif`,dd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,md=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gd=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_d=`PhysicalMaterial material;
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
#endif`,vd=`struct PhysicalMaterial {
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
}`,xd=`
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
#endif`,yd=`#if defined( RE_IndirectDiffuse )
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
#endif`,Md=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bd=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sd=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Td=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ed=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ad=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Cd=`#if defined( USE_POINTS_UV )
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
#endif`,Pd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Id=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ld=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ud=`#ifdef USE_MORPHTARGETS
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
#endif`,Nd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Od=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Bd=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,zd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Hd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vd=`#ifdef USE_NORMALMAP
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
#endif`,Gd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Wd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Xd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Yd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$d=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,jd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Kd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Zd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Qd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ep=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,np=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ip=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,sp=`float getShadowMask() {
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
}`,rp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ap=`#ifdef USE_SKINNING
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
#endif`,op=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,lp=`#ifdef USE_SKINNING
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
#endif`,cp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,up=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fp=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dp=`#ifdef USE_TRANSMISSION
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
#endif`,pp=`#ifdef USE_TRANSMISSION
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
#endif`,mp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,_p=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,vp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const xp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,yp=`uniform sampler2D t2D;
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
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bp=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ep=`#include <common>
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
}`,wp=`#if DEPTH_PACKING == 3200
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
}`,Ap=`#define DISTANCE
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
}`,Rp=`#define DISTANCE
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
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Pp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dp=`uniform float scale;
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
}`,Ip=`uniform vec3 diffuse;
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
}`,Lp=`#include <common>
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
}`,Fp=`uniform vec3 diffuse;
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
}`,Up=`#define LAMBERT
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
}`,Np=`#define LAMBERT
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
}`,Op=`#define MATCAP
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
}`,Bp=`#define MATCAP
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
}`,zp=`#define NORMAL
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
}`,kp=`#define NORMAL
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
}`,Hp=`#define PHONG
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
}`,Vp=`#define PHONG
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
}`,Gp=`#define STANDARD
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
}`,Wp=`#define STANDARD
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
}`,Xp=`#define TOON
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
}`,qp=`#define TOON
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
}`,Yp=`uniform float size;
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
}`,$p=`uniform vec3 diffuse;
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
}`,jp=`#include <common>
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
}`,Kp=`uniform vec3 color;
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
}`,Zp=`uniform float rotation;
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
}`,Jp=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:yf,alphahash_pars_fragment:Mf,alphamap_fragment:bf,alphamap_pars_fragment:Sf,alphatest_fragment:Tf,alphatest_pars_fragment:Ef,aomap_fragment:wf,aomap_pars_fragment:Af,batching_pars_vertex:Rf,batching_vertex:Cf,begin_vertex:Pf,beginnormal_vertex:Df,bsdfs:If,iridescence_fragment:Lf,bumpmap_pars_fragment:Ff,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:zf,color_pars_fragment:kf,color_pars_vertex:Hf,color_vertex:Vf,common:Gf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:qf,displacementmap_vertex:Yf,emissivemap_fragment:$f,emissivemap_pars_fragment:jf,colorspace_fragment:Kf,colorspace_pars_fragment:Zf,envmap_fragment:Jf,envmap_common_pars_fragment:Qf,envmap_pars_fragment:td,envmap_pars_vertex:ed,envmap_physical_pars_fragment:fd,envmap_vertex:nd,fog_vertex:id,fog_pars_vertex:sd,fog_fragment:rd,fog_pars_fragment:ad,gradientmap_pars_fragment:od,lightmap_pars_fragment:ld,lights_lambert_fragment:cd,lights_lambert_pars_fragment:ud,lights_pars_begin:hd,lights_toon_fragment:dd,lights_toon_pars_fragment:pd,lights_phong_fragment:md,lights_phong_pars_fragment:gd,lights_physical_fragment:_d,lights_physical_pars_fragment:vd,lights_fragment_begin:xd,lights_fragment_maps:yd,lights_fragment_end:Md,logdepthbuf_fragment:bd,logdepthbuf_pars_fragment:Sd,logdepthbuf_pars_vertex:Td,logdepthbuf_vertex:Ed,map_fragment:wd,map_pars_fragment:Ad,map_particle_fragment:Rd,map_particle_pars_fragment:Cd,metalnessmap_fragment:Pd,metalnessmap_pars_fragment:Dd,morphinstance_vertex:Id,morphcolor_vertex:Ld,morphnormal_vertex:Fd,morphtarget_pars_vertex:Ud,morphtarget_vertex:Nd,normal_fragment_begin:Od,normal_fragment_maps:Bd,normal_pars_fragment:zd,normal_pars_vertex:kd,normal_vertex:Hd,normalmap_pars_fragment:Vd,clearcoat_normal_fragment_begin:Gd,clearcoat_normal_fragment_maps:Wd,clearcoat_pars_fragment:Xd,iridescence_pars_fragment:qd,opaque_fragment:Yd,packing:$d,premultiplied_alpha_fragment:jd,project_vertex:Kd,dithering_fragment:Zd,dithering_pars_fragment:Jd,roughnessmap_fragment:Qd,roughnessmap_pars_fragment:tp,shadowmap_pars_fragment:ep,shadowmap_pars_vertex:np,shadowmap_vertex:ip,shadowmask_pars_fragment:sp,skinbase_vertex:rp,skinning_pars_vertex:ap,skinning_vertex:op,skinnormal_vertex:lp,specularmap_fragment:cp,specularmap_pars_fragment:up,tonemapping_fragment:hp,tonemapping_pars_fragment:fp,transmission_fragment:dp,transmission_pars_fragment:pp,uv_pars_fragment:mp,uv_pars_vertex:gp,uv_vertex:_p,worldpos_vertex:vp,background_vert:xp,background_frag:yp,backgroundCube_vert:Mp,backgroundCube_frag:bp,cube_vert:Sp,cube_frag:Tp,depth_vert:Ep,depth_frag:wp,distanceRGBA_vert:Ap,distanceRGBA_frag:Rp,equirect_vert:Cp,equirect_frag:Pp,linedashed_vert:Dp,linedashed_frag:Ip,meshbasic_vert:Lp,meshbasic_frag:Fp,meshlambert_vert:Up,meshlambert_frag:Np,meshmatcap_vert:Op,meshmatcap_frag:Bp,meshnormal_vert:zp,meshnormal_frag:kp,meshphong_vert:Hp,meshphong_frag:Vp,meshphysical_vert:Gp,meshphysical_frag:Wp,meshtoon_vert:Xp,meshtoon_frag:qp,points_vert:Yp,points_frag:$p,shadow_vert:jp,shadow_frag:Kp,sprite_vert:Zp,sprite_frag:Jp},nt={common:{diffuse:{value:new Ft(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Pt}},envmap:{envMap:{value:null},envMapRotation:{value:new Pt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Pt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Pt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Pt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Pt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Pt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Pt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Pt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Pt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ft(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ft(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0},uvTransform:{value:new Pt}},sprite:{diffuse:{value:new Ft(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Pt},alphaMap:{value:null},alphaMapTransform:{value:new Pt},alphaTest:{value:0}}},bn={basic:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:Ie([nt.common,nt.specularmap,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},specular:{value:new Ft(1118481)},shininess:{value:30}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:Ie([nt.common,nt.envmap,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.roughnessmap,nt.metalnessmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:Ie([nt.common,nt.aomap,nt.lightmap,nt.emissivemap,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.gradientmap,nt.fog,nt.lights,{emissive:{value:new Ft(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,nt.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:Ie([nt.points,nt.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:Ie([nt.common,nt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:Ie([nt.common,nt.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:Ie([nt.common,nt.bumpmap,nt.normalmap,nt.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:Ie([nt.sprite,nt.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new Pt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Pt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distanceRGBA:{uniforms:Ie([nt.common,nt.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distanceRGBA_vert,fragmentShader:Lt.distanceRGBA_frag},shadow:{uniforms:Ie([nt.lights,nt.fog,{color:{value:new Ft(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};bn.physical={uniforms:Ie([bn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Pt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Pt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Pt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Pt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Pt},sheen:{value:0},sheenColor:{value:new Ft(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Pt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Pt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Pt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Pt},attenuationDistance:{value:0},attenuationColor:{value:new Ft(0)},specularColor:{value:new Ft(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Pt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Pt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Pt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const pr={r:0,b:0,g:0},li=new Tn,Qp=new Ut;function tm(i,t,e,n,s,r,a){const o=new Ft(0);let l=r===!0?0:1,u,h,f=null,c=0,m=null;function g(y){let v=y.isScene===!0?y.background:null;return v&&v.isTexture&&(v=(y.backgroundBlurriness>0?e:t).get(v)),v}function _(y){let v=!1;const T=g(y);T===null?p(o,l):T&&T.isColor&&(p(T,1),v=!0);const A=i.xr.getEnvironmentBlendMode();A==="additive"?n.buffers.color.setClear(0,0,0,1,a):A==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function d(y,v){const T=g(v);T&&(T.isCubeTexture||T.mapping===Jr)?(h===void 0&&(h=new Ae(new ys(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:_s(bn.backgroundCube.uniforms),vertexShader:bn.backgroundCube.vertexShader,fragmentShader:bn.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(A,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),li.copy(v.backgroundRotation),li.x*=-1,li.y*=-1,li.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(li.y*=-1,li.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Qp.makeRotationFromEuler(li)),h.material.toneMapped=qt.getTransfer(T.colorSpace)!==Jt,(f!==T||c!==T.version||m!==i.toneMapping)&&(h.material.needsUpdate=!0,f=T,c=T.version,m=i.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(u===void 0&&(u=new Ae(new ia(2,2),new un({name:"BackgroundMaterial",uniforms:_s(bn.background.uniforms),vertexShader:bn.background.vertexShader,fragmentShader:bn.background.fragmentShader,side:xn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(u)),u.material.uniforms.t2D.value=T,u.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,u.material.toneMapped=qt.getTransfer(T.colorSpace)!==Jt,T.matrixAutoUpdate===!0&&T.updateMatrix(),u.material.uniforms.uvTransform.value.copy(T.matrix),(f!==T||c!==T.version||m!==i.toneMapping)&&(u.material.needsUpdate=!0,f=T,c=T.version,m=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null))}function p(y,v){y.getRGB(pr,Ou(i)),n.buffers.color.setClear(pr.r,pr.g,pr.b,v,a)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose()),u!==void 0&&(u.geometry.dispose(),u.material.dispose())}return{getClearColor:function(){return o},setClearColor:function(y,v=1){o.set(y),l=v,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,p(o,l)},render:_,addToRenderList:d,dispose:x}}function em(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=c(null);let r=s,a=!1;function o(M,C,F,L,B){let G=!1;const H=f(L,F,C);r!==H&&(r=H,u(r.object)),G=m(M,L,F,B),G&&g(M,L,F,B),B!==null&&t.update(B,i.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,v(M,C,F,L),B!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(B).buffer))}function l(){return i.createVertexArray()}function u(M){return i.bindVertexArray(M)}function h(M){return i.deleteVertexArray(M)}function f(M,C,F){const L=F.wireframe===!0;let B=n[M.id];B===void 0&&(B={},n[M.id]=B);let G=B[C.id];G===void 0&&(G={},B[C.id]=G);let H=G[L];return H===void 0&&(H=c(l()),G[L]=H),H}function c(M){const C=[],F=[],L=[];for(let B=0;B<e;B++)C[B]=0,F[B]=0,L[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:F,attributeDivisors:L,object:M,attributes:{},index:null}}function m(M,C,F,L){const B=r.attributes,G=C.attributes;let H=0;const q=F.getAttributes();for(const W in q)if(q[W].location>=0){const ct=B[W];let _t=G[W];if(_t===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(_t=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(_t=M.instanceColor)),ct===void 0||ct.attribute!==_t||_t&&ct.data!==_t.data)return!0;H++}return r.attributesNum!==H||r.index!==L}function g(M,C,F,L){const B={},G=C.attributes;let H=0;const q=F.getAttributes();for(const W in q)if(q[W].location>=0){let ct=G[W];ct===void 0&&(W==="instanceMatrix"&&M.instanceMatrix&&(ct=M.instanceMatrix),W==="instanceColor"&&M.instanceColor&&(ct=M.instanceColor));const _t={};_t.attribute=ct,ct&&ct.data&&(_t.data=ct.data),B[W]=_t,H++}r.attributes=B,r.attributesNum=H,r.index=L}function _(){const M=r.newAttributes;for(let C=0,F=M.length;C<F;C++)M[C]=0}function d(M){p(M,0)}function p(M,C){const F=r.newAttributes,L=r.enabledAttributes,B=r.attributeDivisors;F[M]=1,L[M]===0&&(i.enableVertexAttribArray(M),L[M]=1),B[M]!==C&&(i.vertexAttribDivisor(M,C),B[M]=C)}function x(){const M=r.newAttributes,C=r.enabledAttributes;for(let F=0,L=C.length;F<L;F++)C[F]!==M[F]&&(i.disableVertexAttribArray(F),C[F]=0)}function y(M,C,F,L,B,G,H){H===!0?i.vertexAttribIPointer(M,C,F,B,G):i.vertexAttribPointer(M,C,F,L,B,G)}function v(M,C,F,L){_();const B=L.attributes,G=F.getAttributes(),H=C.defaultAttributeValues;for(const q in G){const W=G[q];if(W.location>=0){let tt=B[q];if(tt===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(tt=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(tt=M.instanceColor)),tt!==void 0){const ct=tt.normalized,_t=tt.itemSize,Nt=t.get(tt);if(Nt===void 0)continue;const te=Nt.buffer,$=Nt.type,et=Nt.bytesPerElement,gt=$===i.INT||$===i.UNSIGNED_INT||tt.gpuType===ss;if(tt.isInterleavedBufferAttribute){const rt=tt.data,Tt=rt.stride,At=tt.offset;if(rt.isInstancedInterleavedBuffer){for(let Ot=0;Ot<W.locationSize;Ot++)p(W.location+Ot,rt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let Ot=0;Ot<W.locationSize;Ot++)d(W.location+Ot);i.bindBuffer(i.ARRAY_BUFFER,te);for(let Ot=0;Ot<W.locationSize;Ot++)y(W.location+Ot,_t/W.locationSize,$,ct,Tt*et,(At+_t/W.locationSize*Ot)*et,gt)}else{if(tt.isInstancedBufferAttribute){for(let rt=0;rt<W.locationSize;rt++)p(W.location+rt,tt.meshPerAttribute);M.isInstancedMesh!==!0&&L._maxInstanceCount===void 0&&(L._maxInstanceCount=tt.meshPerAttribute*tt.count)}else for(let rt=0;rt<W.locationSize;rt++)d(W.location+rt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let rt=0;rt<W.locationSize;rt++)y(W.location+rt,_t/W.locationSize,$,ct,_t*et,_t/W.locationSize*rt*et,gt)}}else if(H!==void 0){const ct=H[q];if(ct!==void 0)switch(ct.length){case 2:i.vertexAttrib2fv(W.location,ct);break;case 3:i.vertexAttrib3fv(W.location,ct);break;case 4:i.vertexAttrib4fv(W.location,ct);break;default:i.vertexAttrib1fv(W.location,ct)}}}}x()}function T(){P();for(const M in n){const C=n[M];for(const F in C){const L=C[F];for(const B in L)h(L[B].object),delete L[B];delete C[F]}delete n[M]}}function A(M){if(n[M.id]===void 0)return;const C=n[M.id];for(const F in C){const L=C[F];for(const B in L)h(L[B].object),delete L[B];delete C[F]}delete n[M.id]}function w(M){for(const C in n){const F=n[C];if(F[M.id]===void 0)continue;const L=F[M.id];for(const B in L)h(L[B].object),delete L[B];delete F[M.id]}}function P(){b(),a=!0,r!==s&&(r=s,u(r.object))}function b(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:P,resetDefaultState:b,dispose:T,releaseStatesOfGeometry:A,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:d,disableUnusedAttributes:x}}function nm(i,t,e){let n;function s(u){n=u}function r(u,h){i.drawArrays(n,u,h),e.update(h,n,1)}function a(u,h,f){f!==0&&(i.drawArraysInstanced(n,u,h,f),e.update(h,n,f))}function o(u,h,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,u,0,h,0,f);let m=0;for(let g=0;g<f;g++)m+=h[g];e.update(m,n,1)}function l(u,h,f,c){if(f===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<u.length;g++)a(u[g],h[g],c[g]);else{m.multiDrawArraysInstancedWEBGL(n,u,0,h,0,c,0,f);let g=0;for(let _=0;_<f;_++)g+=h[_]*c[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function im(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Zt&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(w){const P=w===Fe&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==cn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ne&&!P)}function l(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let u=e.precision!==void 0?e.precision:"highp";const h=l(u);h!==u&&(console.warn("THREE.WebGLRenderer:",u,"not supported, using",h,"instead."),u=h);const f=e.logarithmicDepthBuffer===!0,c=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),d=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),x=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:u,logarithmicDepthBuffer:f,reverseDepthBuffer:c,maxTextures:m,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:d,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:T,maxSamples:A}}function sm(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new Mn,o=new Pt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,c){const m=f.length!==0||c||n!==0||s;return s=c,n=f.length,m},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,c){e=h(f,c,0)},this.setState=function(f,c,m){const g=f.clippingPlanes,_=f.clipIntersection,d=f.clipShadows,p=i.get(f);if(!s||g===null||g.length===0||r&&!d)r?h(null):u();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(g,c,y,m);for(let T=0;T!==y;++T)v[T]=e[T];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=x}};function u(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(f,c,m,g){const _=f!==null?f.length:0;let d=null;if(_!==0){if(d=l.value,g!==!0||d===null){const p=m+_*4,x=c.matrixWorldInverse;o.getNormalMatrix(x),(d===null||d.length<p)&&(d=new Float32Array(p));for(let y=0,v=m;y!==_;++y,v+=4)a.copy(f[y]).applyMatrix4(x,o),a.normal.toArray(d,v),d[v+3]=a.constant}l.value=d,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,d}}function rm(i){let t=new WeakMap;function e(a,o){return o===Hs?a.mapping=ls:o===go&&(a.mapping=cs),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Hs||o===go)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const u=new sf(l.height);return u.fromEquirectangularTexture(i,a),t.set(a,u),a.addEventListener("dispose",s),e(u.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}const es=4,lc=[.125,.215,.35,.446,.526,.582],xi=20,Ua=new Gu,cc=new Ft;let Na=null,Oa=0,Ba=0,za=!1;const _i=(1+Math.sqrt(5))/2,zi=1/_i,uc=[new D(-_i,zi,0),new D(_i,zi,0),new D(-zi,0,_i),new D(zi,0,_i),new D(0,_i,-zi),new D(0,_i,zi),new D(-1,1,-1),new D(1,1,-1),new D(-1,1,1),new D(1,1,1)];class hc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=dc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Na,Oa,Ba),this._renderer.xr.enabled=za,t.scissorTest=!1,mr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ls||t.mapping===cs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Na=this._renderer.getRenderTarget(),Oa=this._renderer.getActiveCubeFace(),Ba=this._renderer.getActiveMipmapLevel(),za=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:fe,minFilter:fe,generateMipmaps:!1,type:Fe,format:Zt,colorSpace:ms,depthBuffer:!1},s=fc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=am(r)),this._blurMaterial=om(r,t,e)}return s}_compileMaterial(t){const e=new Ae(this._lodPlanes[0],t);this._renderer.compile(e,Ua)}_sceneToCubeUV(t,e,n,s){const o=new Le(90,1,e,n),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,c=h.toneMapping;h.getClearColor(cc),h.toneMapping=Nn,h.autoClear=!1;const m=new ul({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new Ae(new ys,m);let _=!1;const d=t.background;d?d.isColor&&(m.color.copy(d),t.background=null,_=!0):(m.color.copy(cc),_=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(o.up.set(0,l[p],0),o.lookAt(u[p],0,0)):x===1?(o.up.set(0,0,l[p]),o.lookAt(0,u[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,u[p]));const y=this._cubeSize;mr(s,x*y,p>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=c,h.autoClear=f,t.background=d}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ls||t.mapping===cs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=dc());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ae(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;mr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Ua)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=uc[(s-r-1)%uc.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,u=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,f=new Ae(this._lodPlanes[s],u),c=u.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*xi-1),_=r/g,d=isFinite(r)?1+Math.floor(h*_):xi;d>xi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${d} samples when the maximum is set to ${xi}`);const p=[];let x=0;for(let w=0;w<xi;++w){const P=w/_,b=Math.exp(-P*P/2);p.push(b),w===0?x+=b:w<d&&(x+=2*b)}for(let w=0;w<p.length;w++)p[w]=p[w]/x;c.envMap.value=t.texture,c.samples.value=d,c.weights.value=p,c.latitudinal.value=a==="latitudinal",o&&(c.poleAxis.value=o);const{_lodMax:y}=this;c.dTheta.value=g,c.mipInt.value=y-n;const v=this._sizeLods[s],T=3*v*(s>y-es?s-y+es:0),A=4*(this._cubeSize-v);mr(e,T,A,3*v,2*v),l.setRenderTarget(e),l.render(f,Ua)}}function am(i){const t=[],e=[],n=[];let s=i;const r=i-es+1+lc.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-es?l=lc[a-i+es-1]:a===0&&(l=0),n.push(l);const u=1/(o-2),h=-u,f=1+u,c=[h,h,f,h,f,f,h,h,f,f,h,f],m=6,g=6,_=3,d=2,p=1,x=new Float32Array(_*g*m),y=new Float32Array(d*g*m),v=new Float32Array(p*g*m);for(let A=0;A<m;A++){const w=A%3*2/3-1,P=A>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(b,_*g*A),y.set(c,d*g*A);const M=[A,A,A,A,A,A];v.set(M,p*g*A)}const T=new Se;T.setAttribute("position",new ue(x,_)),T.setAttribute("uv",new ue(y,d)),T.setAttribute("faceIndex",new ue(v,p)),t.push(T),s>es&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function fc(i,t,e){const n=new Ze(i,t,e);return n.texture.mapping=Jr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function mr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function om(i,t,e){const n=new Float32Array(xi),s=new D(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:xi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function dc(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:pl(),fragmentShader:`

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
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function pc(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ke,depthTest:!1,depthWrite:!1})}function pl(){return`

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
	`}function lm(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,u=l===Hs||l===go,h=l===ls||l===cs;if(u||h){let f=t.get(o);const c=f!==void 0?f.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==c)return e===null&&(e=new hc(i)),f=u?e.fromEquirectangular(o,f):e.fromCubemap(o,f),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),f.texture;if(f!==void 0)return f.texture;{const m=o.image;return u&&m&&m.height>0||h&&m&&s(m)?(e===null&&(e=new hc(i)),f=u?e.fromEquirectangular(o):e.fromCubemap(o),f.texture.pmremVersion=o.pmremVersion,t.set(o,f),o.addEventListener("dispose",r),f.texture):null}}}return o}function s(o){let l=0;const u=6;for(let h=0;h<u;h++)o[h]!==void 0&&l++;return l===u}function r(o){const l=o.target;l.removeEventListener("dispose",r);const u=t.get(l);u!==void 0&&(t.delete(l),u.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function cm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Zi("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function um(i,t,e,n){const s={},r=new WeakMap;function a(f){const c=f.target;c.index!==null&&t.remove(c.index);for(const g in c.attributes)t.remove(c.attributes[g]);c.removeEventListener("dispose",a),delete s[c.id];const m=r.get(c);m&&(t.remove(m),r.delete(c)),n.releaseStatesOfGeometry(c),c.isInstancedBufferGeometry===!0&&delete c._maxInstanceCount,e.memory.geometries--}function o(f,c){return s[c.id]===!0||(c.addEventListener("dispose",a),s[c.id]=!0,e.memory.geometries++),c}function l(f){const c=f.attributes;for(const m in c)t.update(c[m],i.ARRAY_BUFFER)}function u(f){const c=[],m=f.index,g=f.attributes.position;let _=0;if(m!==null){const x=m.array;_=m.version;for(let y=0,v=x.length;y<v;y+=3){const T=x[y+0],A=x[y+1],w=x[y+2];c.push(T,A,A,w,w,T)}}else if(g!==void 0){const x=g.array;_=g.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const T=y+0,A=y+1,w=y+2;c.push(T,A,A,w,w,T)}}else return;const d=new(Du(c)?Nu:Uu)(c,1);d.version=_;const p=r.get(f);p&&t.remove(p),r.set(f,d)}function h(f){const c=r.get(f);if(c){const m=f.index;m!==null&&c.version<m.version&&u(f)}else u(f);return r.get(f)}return{get:o,update:l,getWireframeAttribute:h}}function hm(i,t,e){let n;function s(c){n=c}let r,a;function o(c){r=c.type,a=c.bytesPerElement}function l(c,m){i.drawElements(n,m,r,c*a),e.update(m,n,1)}function u(c,m,g){g!==0&&(i.drawElementsInstanced(n,m,r,c*a,g),e.update(m,n,g))}function h(c,m,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,c,0,g);let d=0;for(let p=0;p<g;p++)d+=m[p];e.update(d,n,1)}function f(c,m,g,_){if(g===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<c.length;p++)u(c[p]/a,m[p],_[p]);else{d.multiDrawElementsInstancedWEBGL(n,m,0,r,c,0,_,0,g);let p=0;for(let x=0;x<g;x++)p+=m[x]*_[x];e.update(p,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=h,this.renderMultiDrawInstances=f}function fm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function dm(i,t,e){const n=new WeakMap,s=new Kt;function r(a,o,l){const u=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,f=h!==void 0?h.length:0;let c=n.get(o);if(c===void 0||c.count!==f){let M=function(){P.dispose(),n.delete(o),o.removeEventListener("dispose",M)};var m=M;c!==void 0&&c.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,d=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],x=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),d===!0&&(v=3);let T=o.attributes.position.count*v,A=1;T>t.maxTextureSize&&(A=Math.ceil(T/t.maxTextureSize),T=t.maxTextureSize);const w=new Float32Array(T*A*4*f),P=new ea(w,T,A,f);P.type=ne,P.needsUpdate=!0;const b=v*4;for(let C=0;C<f;C++){const F=p[C],L=x[C],B=y[C],G=T*A*4*C;for(let H=0;H<F.count;H++){const q=H*b;g===!0&&(s.fromBufferAttribute(F,H),w[G+q+0]=s.x,w[G+q+1]=s.y,w[G+q+2]=s.z,w[G+q+3]=0),_===!0&&(s.fromBufferAttribute(L,H),w[G+q+4]=s.x,w[G+q+5]=s.y,w[G+q+6]=s.z,w[G+q+7]=0),d===!0&&(s.fromBufferAttribute(B,H),w[G+q+8]=s.x,w[G+q+9]=s.y,w[G+q+10]=s.z,w[G+q+11]=B.itemSize===4?s.w:1)}}c={count:f,texture:P,size:new ut(T,A)},n.set(o,c),o.addEventListener("dispose",M)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let d=0;d<u.length;d++)g+=u[d];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",u)}l.getUniforms().setValue(i,"morphTargetsTexture",c.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",c.size)}return{update:r}}function pm(i,t,e,n){let s=new WeakMap;function r(l){const u=n.render.frame,h=l.geometry,f=t.get(l,h);if(s.get(f)!==u&&(t.update(f),s.set(f,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==u&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,u))),l.isSkinnedMesh){const c=l.skeleton;s.get(c)!==u&&(c.update(),s.set(c,u))}return f}function a(){s=new WeakMap}function o(l){const u=l.target;u.removeEventListener("dispose",o),e.remove(u.instanceMatrix),u.instanceColor!==null&&e.remove(u.instanceColor)}return{update:r,dispose:a}}const Xu=new Oe,mc=new Hu(1,1),qu=new ea,Yu=new Bh,$u=new zu,gc=[],_c=[],vc=new Float32Array(16),xc=new Float32Array(9),yc=new Float32Array(4);function Ms(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=gc[s];if(r===void 0&&(r=new Float32Array(s),gc[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function _e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function ve(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function sa(i,t){let e=_c[t];e===void 0&&(e=new Int32Array(t),_c[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function mm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function gm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2fv(this.addr,t),ve(e,t)}}function _m(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(_e(e,t))return;i.uniform3fv(this.addr,t),ve(e,t)}}function vm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4fv(this.addr,t),ve(e,t)}}function xm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;yc.set(n),i.uniformMatrix2fv(this.addr,!1,yc),ve(e,n)}}function ym(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;xc.set(n),i.uniformMatrix3fv(this.addr,!1,xc),ve(e,n)}}function Mm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(_e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(_e(e,n))return;vc.set(n),i.uniformMatrix4fv(this.addr,!1,vc),ve(e,n)}}function bm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Sm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2iv(this.addr,t),ve(e,t)}}function Tm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3iv(this.addr,t),ve(e,t)}}function Em(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4iv(this.addr,t),ve(e,t)}}function wm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(_e(e,t))return;i.uniform2uiv(this.addr,t),ve(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(_e(e,t))return;i.uniform3uiv(this.addr,t),ve(e,t)}}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(_e(e,t))return;i.uniform4uiv(this.addr,t),ve(e,t)}}function Pm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(mc.compareFunction=Pu,r=mc):r=Xu,e.setTexture2D(t||r,s)}function Dm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Yu,s)}function Im(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||$u,s)}function Lm(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||qu,s)}function Fm(i){switch(i){case 5126:return mm;case 35664:return gm;case 35665:return _m;case 35666:return vm;case 35674:return xm;case 35675:return ym;case 35676:return Mm;case 5124:case 35670:return bm;case 35667:case 35671:return Sm;case 35668:case 35672:return Tm;case 35669:case 35673:return Em;case 5125:return wm;case 36294:return Am;case 36295:return Rm;case 36296:return Cm;case 35678:case 36198:case 36298:case 36306:case 35682:return Pm;case 35679:case 36299:case 36307:return Dm;case 35680:case 36300:case 36308:case 36293:return Im;case 36289:case 36303:case 36311:case 36292:return Lm}}function Um(i,t){i.uniform1fv(this.addr,t)}function Nm(i,t){const e=Ms(t,this.size,2);i.uniform2fv(this.addr,e)}function Om(i,t){const e=Ms(t,this.size,3);i.uniform3fv(this.addr,e)}function Bm(i,t){const e=Ms(t,this.size,4);i.uniform4fv(this.addr,e)}function zm(i,t){const e=Ms(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function km(i,t){const e=Ms(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Hm(i,t){const e=Ms(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Vm(i,t){i.uniform1iv(this.addr,t)}function Gm(i,t){i.uniform2iv(this.addr,t)}function Wm(i,t){i.uniform3iv(this.addr,t)}function Xm(i,t){i.uniform4iv(this.addr,t)}function qm(i,t){i.uniform1uiv(this.addr,t)}function Ym(i,t){i.uniform2uiv(this.addr,t)}function $m(i,t){i.uniform3uiv(this.addr,t)}function jm(i,t){i.uniform4uiv(this.addr,t)}function Km(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Xu,r[a])}function Zm(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Yu,r[a])}function Jm(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||$u,r[a])}function Qm(i,t,e){const n=this.cache,s=t.length,r=sa(e,s);_e(n,r)||(i.uniform1iv(this.addr,r),ve(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||qu,r[a])}function tg(i){switch(i){case 5126:return Um;case 35664:return Nm;case 35665:return Om;case 35666:return Bm;case 35674:return zm;case 35675:return km;case 35676:return Hm;case 5124:case 35670:return Vm;case 35667:case 35671:return Gm;case 35668:case 35672:return Wm;case 35669:case 35673:return Xm;case 5125:return qm;case 36294:return Ym;case 36295:return $m;case 36296:return jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Km;case 35679:case 36299:case 36307:return Zm;case 35680:case 36300:case 36308:case 36293:return Jm;case 36289:case 36303:case 36311:case 36292:return Qm}}class eg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Fm(e.type)}}class ng{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=tg(e.type)}}class ig{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const ka=/(\w+)(\])?(\[|\.)?/g;function Mc(i,t){i.seq.push(t),i.map[t.id]=t}function sg(i,t,e){const n=i.name,s=n.length;for(ka.lastIndex=0;;){const r=ka.exec(n),a=ka.lastIndex;let o=r[1];const l=r[2]==="]",u=r[3];if(l&&(o=o|0),u===void 0||u==="["&&a+2===s){Mc(e,u===void 0?new eg(o,i,t):new ng(o,i,t));break}else{let f=e.map[o];f===void 0&&(f=new ig(o),Mc(e,f)),e=f}}}class Gr{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);sg(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function bc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const rg=37297;let ag=0;function og(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Sc=new Pt;function lg(i){qt._getMatrix(Sc,qt.workingColorSpace,i);const t=`mat3( ${Sc.elements.map(e=>e.toFixed(4))} )`;switch(qt.getTransfer(i)){case qr:return[t,"LinearTransferOETF"];case Jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Tc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+og(i.getShaderSource(t),a)}else return s}function cg(i,t){const e=lg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ug(i,t){let e;switch(t){case Y0:e="Linear";break;case $0:e="Reinhard";break;case j0:e="Cineon";break;case Mu:e="ACESFilmic";break;case Z0:e="AgX";break;case J0:e="Neutral";break;case K0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const gr=new D;function hg(){qt.getLuminanceCoefficients(gr);const i=gr.x.toFixed(4),t=gr.y.toFixed(4),e=gr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Us).join(`
`)}function dg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function pg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function Us(i){return i!==""}function Ec(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function wc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const mg=/^[ \t]*#include +<([\w\d./]+)>/gm;function qo(i){return i.replace(mg,_g)}const gg=new Map;function _g(i,t){let e=Lt[t];if(e===void 0){const n=gg.get(t);if(n!==void 0)e=Lt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return qo(e)}const vg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ac(i){return i.replace(vg,xg)}function xg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Rc(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function yg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===w0?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Dn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ls:case cs:t="ENVMAP_TYPE_CUBE";break;case Jr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function bg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case cs:t="ENVMAP_MODE_REFRACTION";break}return t}function Sg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case yu:t="ENVMAP_BLENDING_MULTIPLY";break;case X0:t="ENVMAP_BLENDING_MIX";break;case q0:t="ENVMAP_BLENDING_ADD";break}return t}function Tg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Eg(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=yg(e),u=Mg(e),h=bg(e),f=Sg(e),c=Tg(e),m=fg(e),g=dg(r),_=s.createProgram();let d,p,x=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),d.length>0&&(d+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Us).join(`
`),p.length>0&&(p+=`
`)):(d=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Us).join(`
`),p=[Rc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",c?"#define CUBEUV_TEXEL_WIDTH "+c.texelWidth:"",c?"#define CUBEUV_TEXEL_HEIGHT "+c.texelHeight:"",c?"#define CUBEUV_MAX_MIP "+c.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Nn?"#define TONE_MAPPING":"",e.toneMapping!==Nn?Lt.tonemapping_pars_fragment:"",e.toneMapping!==Nn?ug("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,cg("linearToOutputTexel",e.outputColorSpace),hg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Us).join(`
`)),a=qo(a),a=Ec(a,e),a=wc(a,e),o=qo(o),o=Ec(o,e),o=wc(o,e),a=Ac(a),o=Ac(o),e.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,d=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+d,p=["#define varying in",e.glslVersion===Bl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Bl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+d+a,v=x+p+o,T=bc(s,s.VERTEX_SHADER,y),A=bc(s,s.FRAGMENT_SHADER,v);s.attachShader(_,T),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(C){if(i.debug.checkShaderErrors){const F=s.getProgramInfoLog(_).trim(),L=s.getShaderInfoLog(T).trim(),B=s.getShaderInfoLog(A).trim();let G=!0,H=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(G=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,T,A);else{const q=Tc(s,T,"vertex"),W=Tc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+F+`
`+q+`
`+W)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(L===""||B==="")&&(H=!1);H&&(C.diagnostics={runnable:G,programLog:F,vertexShader:{log:L,prefix:d},fragmentShader:{log:B,prefix:p}})}s.deleteShader(T),s.deleteShader(A),P=new Gr(s,_),b=pg(s,_)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let M=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=s.getProgramParameter(_,rg)),M},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ag++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=T,this.fragmentShader=A,this}let wg=0;class Ag{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Rg(t),e.set(t,n)),n}}class Rg{constructor(t){this.id=wg++,this.code=t,this.usedTimes=0}}function Cg(i,t,e,n,s,r,a){const o=new Lu,l=new Ag,u=new Set,h=[],f=s.logarithmicDepthBuffer,c=s.vertexTextures;let m=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(b){return u.add(b),b===0?"uv":`uv${b}`}function d(b,M,C,F,L){const B=F.fog,G=L.geometry,H=b.isMeshStandardMaterial?F.environment:null,q=(b.isMeshStandardMaterial?e:t).get(b.envMap||H),W=q&&q.mapping===Jr?q.image.height:null,tt=g[b.type];b.precision!==null&&(m=s.getMaxPrecision(b.precision),m!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",m,"instead."));const ct=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_t=ct!==void 0?ct.length:0;let Nt=0;G.morphAttributes.position!==void 0&&(Nt=1),G.morphAttributes.normal!==void 0&&(Nt=2),G.morphAttributes.color!==void 0&&(Nt=3);let te,$,et,gt;if(tt){const jt=bn[tt];te=jt.vertexShader,$=jt.fragmentShader}else te=b.vertexShader,$=b.fragmentShader,l.update(b),et=l.getVertexShaderID(b),gt=l.getFragmentShaderID(b);const rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),At=L.isInstancedMesh===!0,Ot=L.isBatchedMesh===!0,ae=!!b.map,Vt=!!b.matcap,he=!!q,I=!!b.aoMap,Je=!!b.lightMap,zt=!!b.bumpMap,kt=!!b.normalMap,yt=!!b.displacementMap,ie=!!b.emissiveMap,xt=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,z=b.clearcoat>0,j=b.dispersion>0,Z=b.iridescence>0,Y=b.sheen>0,vt=b.transmission>0,at=S&&!!b.anisotropyMap,ft=z&&!!b.clearcoatMap,Gt=z&&!!b.clearcoatNormalMap,Q=z&&!!b.clearcoatRoughnessMap,dt=Z&&!!b.iridescenceMap,St=Z&&!!b.iridescenceThicknessMap,Et=Y&&!!b.sheenColorMap,pt=Y&&!!b.sheenRoughnessMap,Ht=!!b.specularMap,It=!!b.specularColorMap,ee=!!b.specularIntensityMap,U=vt&&!!b.transmissionMap,it=vt&&!!b.thicknessMap,X=!!b.gradientMap,K=!!b.alphaMap,lt=b.alphaTest>0,ot=!!b.alphaHash,Dt=!!b.extensions;let oe=Nn;b.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(oe=i.toneMapping);const Te={shaderID:tt,shaderType:b.type,shaderName:b.name,vertexShader:te,fragmentShader:$,defines:b.defines,customVertexShaderID:et,customFragmentShaderID:gt,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:m,batching:Ot,batchingColor:Ot&&L._colorsTexture!==null,instancing:At,instancingColor:At&&L.instanceColor!==null,instancingMorph:At&&L.morphTexture!==null,supportsVertexTextures:c,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:ms,alphaToCoverage:!!b.alphaToCoverage,map:ae,matcap:Vt,envMap:he,envMapMode:he&&q.mapping,envMapCubeUVHeight:W,aoMap:I,lightMap:Je,bumpMap:zt,normalMap:kt,displacementMap:c&&yt,emissiveMap:ie,normalMapObjectSpace:kt&&b.normalMapType===ih,normalMapTangentSpace:kt&&b.normalMapType===Cu,metalnessMap:xt,roughnessMap:R,anisotropy:S,anisotropyMap:at,clearcoat:z,clearcoatMap:ft,clearcoatNormalMap:Gt,clearcoatRoughnessMap:Q,dispersion:j,iridescence:Z,iridescenceMap:dt,iridescenceThicknessMap:St,sheen:Y,sheenColorMap:Et,sheenRoughnessMap:pt,specularMap:Ht,specularColorMap:It,specularIntensityMap:ee,transmission:vt,transmissionMap:U,thicknessMap:it,gradientMap:X,opaque:b.transparent===!1&&b.blending===Jn&&b.alphaToCoverage===!1,alphaMap:K,alphaTest:lt,alphaHash:ot,combine:b.combine,mapUv:ae&&_(b.map.channel),aoMapUv:I&&_(b.aoMap.channel),lightMapUv:Je&&_(b.lightMap.channel),bumpMapUv:zt&&_(b.bumpMap.channel),normalMapUv:kt&&_(b.normalMap.channel),displacementMapUv:yt&&_(b.displacementMap.channel),emissiveMapUv:ie&&_(b.emissiveMap.channel),metalnessMapUv:xt&&_(b.metalnessMap.channel),roughnessMapUv:R&&_(b.roughnessMap.channel),anisotropyMapUv:at&&_(b.anisotropyMap.channel),clearcoatMapUv:ft&&_(b.clearcoatMap.channel),clearcoatNormalMapUv:Gt&&_(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&_(b.clearcoatRoughnessMap.channel),iridescenceMapUv:dt&&_(b.iridescenceMap.channel),iridescenceThicknessMapUv:St&&_(b.iridescenceThicknessMap.channel),sheenColorMapUv:Et&&_(b.sheenColorMap.channel),sheenRoughnessMapUv:pt&&_(b.sheenRoughnessMap.channel),specularMapUv:Ht&&_(b.specularMap.channel),specularColorMapUv:It&&_(b.specularColorMap.channel),specularIntensityMapUv:ee&&_(b.specularIntensityMap.channel),transmissionMapUv:U&&_(b.transmissionMap.channel),thicknessMapUv:it&&_(b.thicknessMap.channel),alphaMapUv:K&&_(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(kt||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!G.attributes.uv&&(ae||K),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:Tt,skinning:L.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:Nt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:oe,decodeVideoTexture:ae&&b.map.isVideoTexture===!0&&qt.getTransfer(b.map.colorSpace)===Jt,decodeVideoTextureEmissive:ie&&b.emissiveMap.isVideoTexture===!0&&qt.getTransfer(b.emissiveMap.colorSpace)===Jt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===sn,flipSided:b.side===Re,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Dt&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&b.extensions.multiDraw===!0||Ot)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Te.vertexUv1s=u.has(1),Te.vertexUv2s=u.has(2),Te.vertexUv3s=u.has(3),u.clear(),Te}function p(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const C in b.defines)M.push(C),M.push(b.defines[C]);return b.isRawShaderMaterial===!1&&(x(M,b),y(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function x(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function y(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.decodeVideoTextureEmissive&&o.enable(20),M.alphaToCoverage&&o.enable(21),b.push(o.mask)}function v(b){const M=g[b.type];let C;if(M){const F=bn[M];C=Qh.clone(F.uniforms)}else C=b.uniforms;return C}function T(b,M){let C;for(let F=0,L=h.length;F<L;F++){const B=h[F];if(B.cacheKey===M){C=B,++C.usedTimes;break}}return C===void 0&&(C=new Eg(i,M,b,r),h.push(C)),C}function A(b){if(--b.usedTimes===0){const M=h.indexOf(b);h[M]=h[h.length-1],h.pop(),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:d,getProgramCacheKey:p,getUniforms:v,acquireProgram:T,releaseProgram:A,releaseShaderCache:w,programs:h,dispose:P}}function Pg(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function Dg(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Cc(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Pc(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(f,c,m,g,_,d){let p=i[t];return p===void 0?(p={id:f.id,object:f,geometry:c,material:m,groupOrder:g,renderOrder:f.renderOrder,z:_,group:d},i[t]=p):(p.id=f.id,p.object=f,p.geometry=c,p.material=m,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=_,p.group=d),t++,p}function o(f,c,m,g,_,d){const p=a(f,c,m,g,_,d);m.transmission>0?n.push(p):m.transparent===!0?s.push(p):e.push(p)}function l(f,c,m,g,_,d){const p=a(f,c,m,g,_,d);m.transmission>0?n.unshift(p):m.transparent===!0?s.unshift(p):e.unshift(p)}function u(f,c){e.length>1&&e.sort(f||Dg),n.length>1&&n.sort(c||Cc),s.length>1&&s.sort(c||Cc)}function h(){for(let f=t,c=i.length;f<c;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:u}}function Ig(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Pc,i.set(n,[a])):s>=r.length?(a=new Pc,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function Lg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new D,color:new Ft};break;case"SpotLight":e={position:new D,direction:new D,color:new Ft,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new D,color:new Ft,distance:0,decay:0};break;case"HemisphereLight":e={direction:new D,skyColor:new Ft,groundColor:new Ft};break;case"RectAreaLight":e={color:new Ft,position:new D,halfWidth:new D,halfHeight:new D};break}return i[t.id]=e,e}}}function Fg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ug=0;function Ng(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Og(i){const t=new Lg,e=Fg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let u=0;u<9;u++)n.probe.push(new D);const s=new D,r=new Ut,a=new Ut;function o(u){let h=0,f=0,c=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let m=0,g=0,_=0,d=0,p=0,x=0,y=0,v=0,T=0,A=0,w=0;u.sort(Ng);for(let b=0,M=u.length;b<M;b++){const C=u[b],F=C.color,L=C.intensity,B=C.distance,G=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=F.r*L,f+=F.g*L,c+=F.b*L;else if(C.isLightProbe){for(let H=0;H<9;H++)n.probe[H].addScaledVector(C.sh.coefficients[H],L);w++}else if(C.isDirectionalLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const q=C.shadow,W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.directionalShadow[m]=W,n.directionalShadowMap[m]=G,n.directionalShadowMatrix[m]=C.shadow.matrix,x++}n.directional[m]=H,m++}else if(C.isSpotLight){const H=t.get(C);H.position.setFromMatrixPosition(C.matrixWorld),H.color.copy(F).multiplyScalar(L),H.distance=B,H.coneCos=Math.cos(C.angle),H.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),H.decay=C.decay,n.spot[_]=H;const q=C.shadow;if(C.map&&(n.spotLightMap[T]=C.map,T++,q.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=q.matrix,C.castShadow){const W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,n.spotShadow[_]=W,n.spotShadowMap[_]=G,v++}_++}else if(C.isRectAreaLight){const H=t.get(C);H.color.copy(F).multiplyScalar(L),H.halfWidth.set(C.width*.5,0,0),H.halfHeight.set(0,C.height*.5,0),n.rectArea[d]=H,d++}else if(C.isPointLight){const H=t.get(C);if(H.color.copy(C.color).multiplyScalar(C.intensity),H.distance=C.distance,H.decay=C.decay,C.castShadow){const q=C.shadow,W=e.get(C);W.shadowIntensity=q.intensity,W.shadowBias=q.bias,W.shadowNormalBias=q.normalBias,W.shadowRadius=q.radius,W.shadowMapSize=q.mapSize,W.shadowCameraNear=q.camera.near,W.shadowCameraFar=q.camera.far,n.pointShadow[g]=W,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=C.shadow.matrix,y++}n.point[g]=H,g++}else if(C.isHemisphereLight){const H=t.get(C);H.skyColor.copy(C.color).multiplyScalar(L),H.groundColor.copy(C.groundColor).multiplyScalar(L),n.hemi[p]=H,p++}}d>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=nt.LTC_FLOAT_1,n.rectAreaLTC2=nt.LTC_FLOAT_2):(n.rectAreaLTC1=nt.LTC_HALF_1,n.rectAreaLTC2=nt.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=c;const P=n.hash;(P.directionalLength!==m||P.pointLength!==g||P.spotLength!==_||P.rectAreaLength!==d||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==T||P.numLightProbes!==w)&&(n.directional.length=m,n.spot.length=_,n.rectArea.length=d,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+T-A,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=w,P.directionalLength=m,P.pointLength=g,P.spotLength=_,P.rectAreaLength=d,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=T,P.numLightProbes=w,n.version=Ug++)}function l(u,h){let f=0,c=0,m=0,g=0,_=0;const d=h.matrixWorldInverse;for(let p=0,x=u.length;p<x;p++){const y=u[p];if(y.isDirectionalLight){const v=n.directional[f];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),f++}else if(y.isSpotLight){const v=n.spot[m];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(d),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(d),m++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(d),a.identity(),r.copy(y.matrixWorld),r.premultiply(d),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[c];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(d),c++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(d),_++}}}return{setup:o,setupView:l,state:n}}function Dc(i){const t=new Og(i),e=[],n=[];function s(h){u.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const u={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:u,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function Bg(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Dc(i),t.set(s,[o])):r>=a.length?(o=new Dc(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}const zg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,kg=`uniform sampler2D shadow_pass;
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
}`;function Hg(i,t,e){let n=new hl;const s=new ut,r=new ut,a=new Kt,o=new cf({depthPacking:nh}),l=new uf,u={},h=e.maxTextureSize,f={[xn]:Re,[Re]:xn,[sn]:sn},c=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:zg,fragmentShader:kg}),m=c.clone();m.defines.HORIZONTAL_PASS=1;const g=new Se;g.setAttribute("position",new ue(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,c),d=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let p=this.type;this.render=function(A,w,P){if(d.enabled===!1||d.autoUpdate===!1&&d.needsUpdate===!1||A.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),F=i.state;F.setBlending(Ke),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const L=p!==Dn&&this.type===Dn,B=p===Dn&&this.type!==Dn;for(let G=0,H=A.length;G<H;G++){const q=A[G],W=q.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",q,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const tt=W.getFrameExtents();if(s.multiply(tt),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/tt.x),s.x=r.x*tt.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/tt.y),s.y=r.y*tt.y,W.mapSize.y=r.y)),W.map===null||L===!0||B===!0){const _t=this.type!==Dn?{minFilter:Bt,magFilter:Bt}:{};W.map!==null&&W.map.dispose(),W.map=new Ze(s.x,s.y,_t),W.map.texture.name=q.name+".shadowMap",W.camera.updateProjectionMatrix()}i.setRenderTarget(W.map),i.clear();const ct=W.getViewportCount();for(let _t=0;_t<ct;_t++){const Nt=W.getViewport(_t);a.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),F.viewport(a),W.updateMatrices(q,_t),n=W.getFrustum(),v(w,P,W.camera,q,this.type)}W.isPointLightShadow!==!0&&this.type===Dn&&x(W,P),W.needsUpdate=!1}p=this.type,d.needsUpdate=!1,i.setRenderTarget(b,M,C)};function x(A,w){const P=t.update(_);c.defines.VSM_SAMPLES!==A.blurSamples&&(c.defines.VSM_SAMPLES=A.blurSamples,m.defines.VSM_SAMPLES=A.blurSamples,c.needsUpdate=!0,m.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Ze(s.x,s.y)),c.uniforms.shadow_pass.value=A.map.texture,c.uniforms.resolution.value=A.mapSize,c.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(w,null,P,c,_,null),m.uniforms.shadow_pass.value=A.mapPass.texture,m.uniforms.resolution.value=A.mapSize,m.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(w,null,P,m,_,null)}function y(A,w,P,b){let M=null;const C=P.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)M=C;else if(M=P.isPointLight===!0?l:o,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=M.uuid,L=w.uuid;let B=u[F];B===void 0&&(B={},u[F]=B);let G=B[L];G===void 0&&(G=M.clone(),B[L]=G,w.addEventListener("dispose",T)),M=G}if(M.visible=w.visible,M.wireframe=w.wireframe,b===Dn?M.side=w.shadowSide!==null?w.shadowSide:w.side:M.side=w.shadowSide!==null?w.shadowSide:f[w.side],M.alphaMap=w.alphaMap,M.alphaTest=w.alphaTest,M.map=w.map,M.clipShadows=w.clipShadows,M.clippingPlanes=w.clippingPlanes,M.clipIntersection=w.clipIntersection,M.displacementMap=w.displacementMap,M.displacementScale=w.displacementScale,M.displacementBias=w.displacementBias,M.wireframeLinewidth=w.wireframeLinewidth,M.linewidth=w.linewidth,P.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const F=i.properties.get(M);F.light=P}return M}function v(A,w,P,b,M){if(A.visible===!1)return;if(A.layers.test(w.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&M===Dn)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,A.matrixWorld);const L=t.update(A),B=A.material;if(Array.isArray(B)){const G=L.groups;for(let H=0,q=G.length;H<q;H++){const W=G[H],tt=B[W.materialIndex];if(tt&&tt.visible){const ct=y(A,tt,b,M);A.onBeforeShadow(i,A,w,P,L,ct,W),i.renderBufferDirect(P,null,L,ct,A,W),A.onAfterShadow(i,A,w,P,L,ct,W)}}}else if(B.visible){const G=y(A,B,b,M);A.onBeforeShadow(i,A,w,P,L,G,null),i.renderBufferDirect(P,null,L,G,A,null),A.onAfterShadow(i,A,w,P,L,G,null)}}const F=A.children;for(let L=0,B=F.length;L<B;L++)v(F[L],w,P,b,M)}function T(A){A.target.removeEventListener("dispose",T);for(const P in u){const b=u[P],M=A.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}const Vg={[lo]:co,[uo]:po,[ho]:mo,[os]:fo,[co]:lo,[po]:uo,[mo]:ho,[fo]:os};function Gg(i,t){function e(){let U=!1;const it=new Kt;let X=null;const K=new Kt(0,0,0,0);return{setMask:function(lt){X!==lt&&!U&&(i.colorMask(lt,lt,lt,lt),X=lt)},setLocked:function(lt){U=lt},setClear:function(lt,ot,Dt,oe,Te){Te===!0&&(lt*=oe,ot*=oe,Dt*=oe),it.set(lt,ot,Dt,oe),K.equals(it)===!1&&(i.clearColor(lt,ot,Dt,oe),K.copy(it))},reset:function(){U=!1,X=null,K.set(-1,0,0,0)}}}function n(){let U=!1,it=!1,X=null,K=null,lt=null;return{setReversed:function(ot){if(it!==ot){const Dt=t.get("EXT_clip_control");it?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT);const oe=lt;lt=null,this.setClear(oe)}it=ot},getReversed:function(){return it},setTest:function(ot){ot?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ot){X!==ot&&!U&&(i.depthMask(ot),X=ot)},setFunc:function(ot){if(it&&(ot=Vg[ot]),K!==ot){switch(ot){case lo:i.depthFunc(i.NEVER);break;case co:i.depthFunc(i.ALWAYS);break;case uo:i.depthFunc(i.LESS);break;case os:i.depthFunc(i.LEQUAL);break;case ho:i.depthFunc(i.EQUAL);break;case fo:i.depthFunc(i.GEQUAL);break;case po:i.depthFunc(i.GREATER);break;case mo:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}K=ot}},setLocked:function(ot){U=ot},setClear:function(ot){lt!==ot&&(it&&(ot=1-ot),i.clearDepth(ot),lt=ot)},reset:function(){U=!1,X=null,K=null,lt=null,it=!1}}}function s(){let U=!1,it=null,X=null,K=null,lt=null,ot=null,Dt=null,oe=null,Te=null;return{setTest:function(jt){U||(jt?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(jt){it!==jt&&!U&&(i.stencilMask(jt),it=jt)},setFunc:function(jt,hn,En){(X!==jt||K!==hn||lt!==En)&&(i.stencilFunc(jt,hn,En),X=jt,K=hn,lt=En)},setOp:function(jt,hn,En){(ot!==jt||Dt!==hn||oe!==En)&&(i.stencilOp(jt,hn,En),ot=jt,Dt=hn,oe=En)},setLocked:function(jt){U=jt},setClear:function(jt){Te!==jt&&(i.clearStencil(jt),Te=jt)},reset:function(){U=!1,it=null,X=null,K=null,lt=null,ot=null,Dt=null,oe=null,Te=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,u=new WeakMap;let h={},f={},c=new WeakMap,m=[],g=null,_=!1,d=null,p=null,x=null,y=null,v=null,T=null,A=null,w=new Ft(0,0,0),P=0,b=!1,M=null,C=null,F=null,L=null,B=null;const G=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let H=!1,q=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),H=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),H=q>=2);let tt=null,ct={};const _t=i.getParameter(i.SCISSOR_BOX),Nt=i.getParameter(i.VIEWPORT),te=new Kt().fromArray(_t),$=new Kt().fromArray(Nt);function et(U,it,X,K){const lt=new Uint8Array(4),ot=i.createTexture();i.bindTexture(U,ot),i.texParameteri(U,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(U,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<X;Dt++)U===i.TEXTURE_3D||U===i.TEXTURE_2D_ARRAY?i.texImage3D(it,0,i.RGBA,1,1,K,0,i.RGBA,i.UNSIGNED_BYTE,lt):i.texImage2D(it+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,lt);return ot}const gt={};gt[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),gt[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),gt[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),gt[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),rt(i.DEPTH_TEST),a.setFunc(os),zt(!1),kt(Ll),rt(i.CULL_FACE),I(Ke);function rt(U){h[U]!==!0&&(i.enable(U),h[U]=!0)}function Tt(U){h[U]!==!1&&(i.disable(U),h[U]=!1)}function At(U,it){return f[U]!==it?(i.bindFramebuffer(U,it),f[U]=it,U===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=it),U===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=it),!0):!1}function Ot(U,it){let X=m,K=!1;if(U){X=c.get(it),X===void 0&&(X=[],c.set(it,X));const lt=U.textures;if(X.length!==lt.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ot=0,Dt=lt.length;ot<Dt;ot++)X[ot]=i.COLOR_ATTACHMENT0+ot;X.length=lt.length,K=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,K=!0);K&&i.drawBuffers(X)}function ae(U){return g!==U?(i.useProgram(U),g=U,!0):!1}const Vt={[vi]:i.FUNC_ADD,[R0]:i.FUNC_SUBTRACT,[C0]:i.FUNC_REVERSE_SUBTRACT};Vt[P0]=i.MIN,Vt[D0]=i.MAX;const he={[I0]:i.ZERO,[L0]:i.ONE,[F0]:i.SRC_COLOR,[ao]:i.SRC_ALPHA,[k0]:i.SRC_ALPHA_SATURATE,[B0]:i.DST_COLOR,[N0]:i.DST_ALPHA,[U0]:i.ONE_MINUS_SRC_COLOR,[oo]:i.ONE_MINUS_SRC_ALPHA,[z0]:i.ONE_MINUS_DST_COLOR,[O0]:i.ONE_MINUS_DST_ALPHA,[H0]:i.CONSTANT_COLOR,[V0]:i.ONE_MINUS_CONSTANT_COLOR,[G0]:i.CONSTANT_ALPHA,[W0]:i.ONE_MINUS_CONSTANT_ALPHA};function I(U,it,X,K,lt,ot,Dt,oe,Te,jt){if(U===Ke){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),U!==A0){if(U!==d||jt!==b){if((p!==vi||v!==vi)&&(i.blendEquation(i.FUNC_ADD),p=vi,v=vi),jt)switch(U){case Jn:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFunc(i.ONE,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Jn:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ro:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Fl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ul:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}x=null,y=null,T=null,A=null,w.set(0,0,0),P=0,d=U,b=jt}return}lt=lt||it,ot=ot||X,Dt=Dt||K,(it!==p||lt!==v)&&(i.blendEquationSeparate(Vt[it],Vt[lt]),p=it,v=lt),(X!==x||K!==y||ot!==T||Dt!==A)&&(i.blendFuncSeparate(he[X],he[K],he[ot],he[Dt]),x=X,y=K,T=ot,A=Dt),(oe.equals(w)===!1||Te!==P)&&(i.blendColor(oe.r,oe.g,oe.b,Te),w.copy(oe),P=Te),d=U,b=!1}function Je(U,it){U.side===sn?Tt(i.CULL_FACE):rt(i.CULL_FACE);let X=U.side===Re;it&&(X=!X),zt(X),U.blending===Jn&&U.transparent===!1?I(Ke):I(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.blendColor,U.blendAlpha,U.premultipliedAlpha),a.setFunc(U.depthFunc),a.setTest(U.depthTest),a.setMask(U.depthWrite),r.setMask(U.colorWrite);const K=U.stencilWrite;o.setTest(K),K&&(o.setMask(U.stencilWriteMask),o.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),o.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),ie(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function zt(U){M!==U&&(U?i.frontFace(i.CW):i.frontFace(i.CCW),M=U)}function kt(U){U!==T0?(rt(i.CULL_FACE),U!==C&&(U===Ll?i.cullFace(i.BACK):U===E0?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),C=U}function yt(U){U!==F&&(H&&i.lineWidth(U),F=U)}function ie(U,it,X){U?(rt(i.POLYGON_OFFSET_FILL),(L!==it||B!==X)&&(i.polygonOffset(it,X),L=it,B=X)):Tt(i.POLYGON_OFFSET_FILL)}function xt(U){U?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function R(U){U===void 0&&(U=i.TEXTURE0+G-1),tt!==U&&(i.activeTexture(U),tt=U)}function S(U,it,X){X===void 0&&(tt===null?X=i.TEXTURE0+G-1:X=tt);let K=ct[X];K===void 0&&(K={type:void 0,texture:void 0},ct[X]=K),(K.type!==U||K.texture!==it)&&(tt!==X&&(i.activeTexture(X),tt=X),i.bindTexture(U,it||gt[U]),K.type=U,K.texture=it)}function z(){const U=ct[tt];U!==void 0&&U.type!==void 0&&(i.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function j(){try{i.compressedTexImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Z(){try{i.compressedTexImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Y(){try{i.texSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function vt(){try{i.texSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function at(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ft(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Gt(){try{i.texStorage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Q(){try{i.texStorage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function dt(){try{i.texImage2D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function St(){try{i.texImage3D.apply(i,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Et(U){te.equals(U)===!1&&(i.scissor(U.x,U.y,U.z,U.w),te.copy(U))}function pt(U){$.equals(U)===!1&&(i.viewport(U.x,U.y,U.z,U.w),$.copy(U))}function Ht(U,it){let X=u.get(it);X===void 0&&(X=new WeakMap,u.set(it,X));let K=X.get(U);K===void 0&&(K=i.getUniformBlockIndex(it,U.name),X.set(U,K))}function It(U,it){const K=u.get(it).get(U);l.get(it)!==K&&(i.uniformBlockBinding(it,K,U.__bindingPointIndex),l.set(it,K))}function ee(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},tt=null,ct={},f={},c=new WeakMap,m=[],g=null,_=!1,d=null,p=null,x=null,y=null,v=null,T=null,A=null,w=new Ft(0,0,0),P=0,b=!1,M=null,C=null,F=null,L=null,B=null,te.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:rt,disable:Tt,bindFramebuffer:At,drawBuffers:Ot,useProgram:ae,setBlending:I,setMaterial:Je,setFlipSided:zt,setCullFace:kt,setLineWidth:yt,setPolygonOffset:ie,setScissorTest:xt,activeTexture:R,bindTexture:S,unbindTexture:z,compressedTexImage2D:j,compressedTexImage3D:Z,texImage2D:dt,texImage3D:St,updateUBOMapping:Ht,uniformBlockBinding:It,texStorage2D:Gt,texStorage3D:Q,texSubImage2D:Y,texSubImage3D:vt,compressedTexSubImage2D:at,compressedTexSubImage3D:ft,scissor:Et,viewport:pt,reset:ee}}function Wg(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),u=new ut,h=new WeakMap;let f;const c=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,S){return m?new OffscreenCanvas(R,S):$r("canvas")}function _(R,S,z){let j=1;const Z=xt(R);if((Z.width>z||Z.height>z)&&(j=z/Math.max(Z.width,Z.height)),j<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const Y=Math.floor(j*Z.width),vt=Math.floor(j*Z.height);f===void 0&&(f=g(Y,vt));const at=S?g(Y,vt):f;return at.width=Y,at.height=vt,at.getContext("2d").drawImage(R,0,0,Y,vt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+Y+"x"+vt+")."),at}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),R;return R}function d(R){return R.generateMipmaps}function p(R){i.generateMipmap(R)}function x(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(R,S,z,j,Z=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=S;if(S===i.RED&&(z===i.FLOAT&&(Y=i.R32F),z===i.HALF_FLOAT&&(Y=i.R16F),z===i.UNSIGNED_BYTE&&(Y=i.R8)),S===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.R8UI),z===i.UNSIGNED_SHORT&&(Y=i.R16UI),z===i.UNSIGNED_INT&&(Y=i.R32UI),z===i.BYTE&&(Y=i.R8I),z===i.SHORT&&(Y=i.R16I),z===i.INT&&(Y=i.R32I)),S===i.RG&&(z===i.FLOAT&&(Y=i.RG32F),z===i.HALF_FLOAT&&(Y=i.RG16F),z===i.UNSIGNED_BYTE&&(Y=i.RG8)),S===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RG8UI),z===i.UNSIGNED_SHORT&&(Y=i.RG16UI),z===i.UNSIGNED_INT&&(Y=i.RG32UI),z===i.BYTE&&(Y=i.RG8I),z===i.SHORT&&(Y=i.RG16I),z===i.INT&&(Y=i.RG32I)),S===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGB8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGB16UI),z===i.UNSIGNED_INT&&(Y=i.RGB32UI),z===i.BYTE&&(Y=i.RGB8I),z===i.SHORT&&(Y=i.RGB16I),z===i.INT&&(Y=i.RGB32I)),S===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(Y=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(Y=i.RGBA16UI),z===i.UNSIGNED_INT&&(Y=i.RGBA32UI),z===i.BYTE&&(Y=i.RGBA8I),z===i.SHORT&&(Y=i.RGBA16I),z===i.INT&&(Y=i.RGBA32I)),S===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(Y=i.RGB9_E5),S===i.RGBA){const vt=Z?qr:qt.getTransfer(j);z===i.FLOAT&&(Y=i.RGBA32F),z===i.HALF_FLOAT&&(Y=i.RGBA16F),z===i.UNSIGNED_BYTE&&(Y=vt===Jt?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(Y=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(Y=i.RGB5_A1)}return(Y===i.R16F||Y===i.R32F||Y===i.RG16F||Y===i.RG32F||Y===i.RGBA16F||Y===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Y}function v(R,S){let z;return R?S===null||S===on||S===hs?z=i.DEPTH24_STENCIL8:S===ne?z=i.DEPTH32F_STENCIL8:S===us&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===on||S===hs?z=i.DEPTH_COMPONENT24:S===ne?z=i.DEPTH_COMPONENT32F:S===us&&(z=i.DEPTH_COMPONENT16),z}function T(R,S){return d(R)===!0||R.isFramebufferTexture&&R.minFilter!==Bt&&R.minFilter!==fe?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function A(R){const S=R.target;S.removeEventListener("dispose",A),P(S),S.isVideoTexture&&h.delete(S)}function w(R){const S=R.target;S.removeEventListener("dispose",w),M(S)}function P(R){const S=n.get(R);if(S.__webglInit===void 0)return;const z=R.source,j=c.get(z);if(j){const Z=j[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&b(R),Object.keys(j).length===0&&c.delete(z)}n.remove(R)}function b(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const z=R.source,j=c.get(z);delete j[S.__cacheKey],a.memory.textures--}function M(R){const S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let j=0;j<6;j++){if(Array.isArray(S.__webglFramebuffer[j]))for(let Z=0;Z<S.__webglFramebuffer[j].length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[j][Z]);else i.deleteFramebuffer(S.__webglFramebuffer[j]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[j])}else{if(Array.isArray(S.__webglFramebuffer))for(let j=0;j<S.__webglFramebuffer.length;j++)i.deleteFramebuffer(S.__webglFramebuffer[j]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let j=0;j<S.__webglColorRenderbuffer.length;j++)S.__webglColorRenderbuffer[j]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[j]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const z=R.textures;for(let j=0,Z=z.length;j<Z;j++){const Y=n.get(z[j]);Y.__webglTexture&&(i.deleteTexture(Y.__webglTexture),a.memory.textures--),n.remove(z[j])}n.remove(R)}let C=0;function F(){C=0}function L(){const R=C;return R>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+s.maxTextures),C+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function G(R,S){const z=n.get(R);if(R.isVideoTexture&&yt(R),R.isRenderTargetTexture===!1&&R.version>0&&z.__version!==R.version){const j=R.image;if(j===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(j.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(z,R,S);return}}e.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+S)}function H(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+S)}function q(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){$(z,R,S);return}e.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+S)}function W(R,S){const z=n.get(R);if(R.version>0&&z.__version!==R.version){et(z,R,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+S)}const tt={[vn]:i.REPEAT,[Ne]:i.CLAMP_TO_EDGE,[_o]:i.MIRRORED_REPEAT},ct={[Bt]:i.NEAREST,[Q0]:i.NEAREST_MIPMAP_NEAREST,[$s]:i.NEAREST_MIPMAP_LINEAR,[fe]:i.LINEAR,[ua]:i.LINEAR_MIPMAP_NEAREST,[yi]:i.LINEAR_MIPMAP_LINEAR},_t={[sh]:i.NEVER,[uh]:i.ALWAYS,[rh]:i.LESS,[Pu]:i.LEQUAL,[ah]:i.EQUAL,[ch]:i.GEQUAL,[oh]:i.GREATER,[lh]:i.NOTEQUAL};function Nt(R,S){if(S.type===ne&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===fe||S.magFilter===ua||S.magFilter===$s||S.magFilter===yi||S.minFilter===fe||S.minFilter===ua||S.minFilter===$s||S.minFilter===yi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,tt[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,tt[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,tt[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,ct[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,ct[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,_t[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Bt||S.minFilter!==$s&&S.minFilter!==yi||S.type===ne&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const z=t.get("EXT_texture_filter_anisotropic");i.texParameterf(R,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function te(R,S){let z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",A));const j=S.source;let Z=c.get(j);Z===void 0&&(Z={},c.set(j,Z));const Y=B(S);if(Y!==R.__cacheKey){Z[Y]===void 0&&(Z[Y]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),Z[Y].usedTimes++;const vt=Z[R.__cacheKey];vt!==void 0&&(Z[R.__cacheKey].usedTimes--,vt.usedTimes===0&&b(S)),R.__cacheKey=Y,R.__webglTexture=Z[Y].texture}return z}function $(R,S,z){let j=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(j=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(j=i.TEXTURE_3D);const Z=te(R,S),Y=S.source;e.bindTexture(j,R.__webglTexture,i.TEXTURE0+z);const vt=n.get(Y);if(Y.version!==vt.__version||Z===!0){e.activeTexture(i.TEXTURE0+z);const at=qt.getPrimaries(qt.workingColorSpace),ft=S.colorSpace===Kn?null:qt.getPrimaries(S.colorSpace),Gt=S.colorSpace===Kn||at===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Gt);let Q=_(S.image,!1,s.maxTextureSize);Q=ie(S,Q);const dt=r.convert(S.format,S.colorSpace),St=r.convert(S.type);let Et=y(S.internalFormat,dt,St,S.colorSpace,S.isVideoTexture);Nt(j,S);let pt;const Ht=S.mipmaps,It=S.isVideoTexture!==!0,ee=vt.__version===void 0||Z===!0,U=Y.dataReady,it=T(S,Q);if(S.isDepthTexture)Et=v(S.format===fs,S.type),ee&&(It?e.texStorage2D(i.TEXTURE_2D,1,Et,Q.width,Q.height):e.texImage2D(i.TEXTURE_2D,0,Et,Q.width,Q.height,0,dt,St,null));else if(S.isDataTexture)if(Ht.length>0){It&&ee&&e.texStorage2D(i.TEXTURE_2D,it,Et,Ht[0].width,Ht[0].height);for(let X=0,K=Ht.length;X<K;X++)pt=Ht[X],It?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,St,pt.data):e.texImage2D(i.TEXTURE_2D,X,Et,pt.width,pt.height,0,dt,St,pt.data);S.generateMipmaps=!1}else It?(ee&&e.texStorage2D(i.TEXTURE_2D,it,Et,Q.width,Q.height),U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,Q.width,Q.height,dt,St,Q.data)):e.texImage2D(i.TEXTURE_2D,0,Et,Q.width,Q.height,0,dt,St,Q.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){It&&ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,Ht[0].width,Ht[0].height,Q.depth);for(let X=0,K=Ht.length;X<K;X++)if(pt=Ht[X],S.format!==Zt)if(dt!==null)if(It){if(U)if(S.layerUpdates.size>0){const lt=oc(pt.width,pt.height,S.format,S.type);for(const ot of S.layerUpdates){const Dt=pt.data.subarray(ot*lt/pt.data.BYTES_PER_ELEMENT,(ot+1)*lt/pt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ot,pt.width,pt.height,1,dt,Dt)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,pt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Et,pt.width,pt.height,Q.depth,0,pt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else It?U&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,pt.width,pt.height,Q.depth,dt,St,pt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Et,pt.width,pt.height,Q.depth,0,dt,St,pt.data)}else{It&&ee&&e.texStorage2D(i.TEXTURE_2D,it,Et,Ht[0].width,Ht[0].height);for(let X=0,K=Ht.length;X<K;X++)pt=Ht[X],S.format!==Zt?dt!==null?It?U&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,pt.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Et,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):It?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,pt.width,pt.height,dt,St,pt.data):e.texImage2D(i.TEXTURE_2D,X,Et,pt.width,pt.height,0,dt,St,pt.data)}else if(S.isDataArrayTexture)if(It){if(ee&&e.texStorage3D(i.TEXTURE_2D_ARRAY,it,Et,Q.width,Q.height,Q.depth),U)if(S.layerUpdates.size>0){const X=oc(Q.width,Q.height,S.format,S.type);for(const K of S.layerUpdates){const lt=Q.data.subarray(K*X/Q.data.BYTES_PER_ELEMENT,(K+1)*X/Q.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,K,Q.width,Q.height,1,dt,St,lt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Et,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(S.isData3DTexture)It?(ee&&e.texStorage3D(i.TEXTURE_3D,it,Et,Q.width,Q.height,Q.depth),U&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,dt,St,Q.data)):e.texImage3D(i.TEXTURE_3D,0,Et,Q.width,Q.height,Q.depth,0,dt,St,Q.data);else if(S.isFramebufferTexture){if(ee)if(It)e.texStorage2D(i.TEXTURE_2D,it,Et,Q.width,Q.height);else{let X=Q.width,K=Q.height;for(let lt=0;lt<it;lt++)e.texImage2D(i.TEXTURE_2D,lt,Et,X,K,0,dt,St,null),X>>=1,K>>=1}}else if(Ht.length>0){if(It&&ee){const X=xt(Ht[0]);e.texStorage2D(i.TEXTURE_2D,it,Et,X.width,X.height)}for(let X=0,K=Ht.length;X<K;X++)pt=Ht[X],It?U&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,dt,St,pt):e.texImage2D(i.TEXTURE_2D,X,Et,dt,St,pt);S.generateMipmaps=!1}else if(It){if(ee){const X=xt(Q);e.texStorage2D(i.TEXTURE_2D,it,Et,X.width,X.height)}U&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,dt,St,Q)}else e.texImage2D(i.TEXTURE_2D,0,Et,dt,St,Q);d(S)&&p(j),vt.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function et(R,S,z){if(S.image.length!==6)return;const j=te(R,S),Z=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+z);const Y=n.get(Z);if(Z.version!==Y.__version||j===!0){e.activeTexture(i.TEXTURE0+z);const vt=qt.getPrimaries(qt.workingColorSpace),at=S.colorSpace===Kn?null:qt.getPrimaries(S.colorSpace),ft=S.colorSpace===Kn||vt===at?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);const Gt=S.isCompressedTexture||S.image[0].isCompressedTexture,Q=S.image[0]&&S.image[0].isDataTexture,dt=[];for(let K=0;K<6;K++)!Gt&&!Q?dt[K]=_(S.image[K],!0,s.maxCubemapSize):dt[K]=Q?S.image[K].image:S.image[K],dt[K]=ie(S,dt[K]);const St=dt[0],Et=r.convert(S.format,S.colorSpace),pt=r.convert(S.type),Ht=y(S.internalFormat,Et,pt,S.colorSpace),It=S.isVideoTexture!==!0,ee=Y.__version===void 0||j===!0,U=Z.dataReady;let it=T(S,St);Nt(i.TEXTURE_CUBE_MAP,S);let X;if(Gt){It&&ee&&e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,St.width,St.height);for(let K=0;K<6;K++){X=dt[K].mipmaps;for(let lt=0;lt<X.length;lt++){const ot=X[lt];S.format!==Zt?Et!==null?It?U&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ot.width,ot.height,Et,ot.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ht,ot.width,ot.height,0,ot.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):It?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,0,0,ot.width,ot.height,Et,pt,ot.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt,Ht,ot.width,ot.height,0,Et,pt,ot.data)}}}else{if(X=S.mipmaps,It&&ee){X.length>0&&it++;const K=xt(dt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,it,Ht,K.width,K.height)}for(let K=0;K<6;K++)if(Q){It?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,dt[K].width,dt[K].height,Et,pt,dt[K].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,dt[K].width,dt[K].height,0,Et,pt,dt[K].data);for(let lt=0;lt<X.length;lt++){const Dt=X[lt].image[K].image;It?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Dt.width,Dt.height,Et,pt,Dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ht,Dt.width,Dt.height,0,Et,pt,Dt.data)}}else{It?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,0,0,Et,pt,dt[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,0,Ht,Et,pt,dt[K]);for(let lt=0;lt<X.length;lt++){const ot=X[lt];It?U&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,0,0,Et,pt,ot.image[K]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+K,lt+1,Ht,Et,pt,ot.image[K])}}}d(S)&&p(i.TEXTURE_CUBE_MAP),Y.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function gt(R,S,z,j,Z,Y){const vt=r.convert(z.format,z.colorSpace),at=r.convert(z.type),ft=y(z.internalFormat,vt,at,z.colorSpace),Gt=n.get(S),Q=n.get(z);if(Q.__renderTarget=S,!Gt.__hasExternalTextures){const dt=Math.max(1,S.width>>Y),St=Math.max(1,S.height>>Y);Z===i.TEXTURE_3D||Z===i.TEXTURE_2D_ARRAY?e.texImage3D(Z,Y,ft,dt,St,S.depth,0,vt,at,null):e.texImage2D(Z,Y,ft,dt,St,0,vt,at,null)}e.bindFramebuffer(i.FRAMEBUFFER,R),kt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,j,Z,Q.__webglTexture,0,zt(S)):(Z===i.TEXTURE_2D||Z>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,j,Z,Q.__webglTexture,Y),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(R,S,z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const j=S.depthTexture,Z=j&&j.isDepthTexture?j.type:null,Y=v(S.stencilBuffer,Z),vt=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,at=zt(S);kt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at,Y,S.width,S.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at,Y,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Y,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,vt,i.RENDERBUFFER,R)}else{const j=S.textures;for(let Z=0;Z<j.length;Z++){const Y=j[Z],vt=r.convert(Y.format,Y.colorSpace),at=r.convert(Y.type),ft=y(Y.internalFormat,vt,at,Y.colorSpace),Gt=zt(S);z&&kt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Gt,ft,S.width,S.height):kt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Gt,ft,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ft,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const j=n.get(S.depthTexture);j.__renderTarget=S,(!j.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),G(S.depthTexture,0);const Z=j.__webglTexture,Y=zt(S);if(S.depthTexture.format===rs)kt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,Z,0);else if(S.depthTexture.format===fs)kt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0,Y):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function At(R){const S=n.get(R),z=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){const j=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),j){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,j.removeEventListener("dispose",Z)};j.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=j}if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");Tt(S.__webglFramebuffer,R)}else if(z){S.__webglDepthbuffer=[];for(let j=0;j<6;j++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[j]),S.__webglDepthbuffer[j]===void 0)S.__webglDepthbuffer[j]=i.createRenderbuffer(),rt(S.__webglDepthbuffer[j],R,!1);else{const Z=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[j];i.bindRenderbuffer(i.RENDERBUFFER,Y),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,Y)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),rt(S.__webglDepthbuffer,R,!1);else{const j=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,j,i.RENDERBUFFER,Z)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(R,S,z){const j=n.get(R);S!==void 0&&gt(j.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&At(R)}function ae(R){const S=R.texture,z=n.get(R),j=n.get(S);R.addEventListener("dispose",w);const Z=R.textures,Y=R.isWebGLCubeRenderTarget===!0,vt=Z.length>1;if(vt||(j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture()),j.__version=S.version,a.memory.textures++),Y){z.__webglFramebuffer=[];for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer[at]=[];for(let ft=0;ft<S.mipmaps.length;ft++)z.__webglFramebuffer[at][ft]=i.createFramebuffer()}else z.__webglFramebuffer[at]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){z.__webglFramebuffer=[];for(let at=0;at<S.mipmaps.length;at++)z.__webglFramebuffer[at]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(vt)for(let at=0,ft=Z.length;at<ft;at++){const Gt=n.get(Z[at]);Gt.__webglTexture===void 0&&(Gt.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&kt(R)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let at=0;at<Z.length;at++){const ft=Z[at];z.__webglColorRenderbuffer[at]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[at]);const Gt=r.convert(ft.format,ft.colorSpace),Q=r.convert(ft.type),dt=y(ft.internalFormat,Gt,Q,ft.colorSpace,R.isXRRenderTarget===!0),St=zt(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,St,dt,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+at,i.RENDERBUFFER,z.__webglColorRenderbuffer[at])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(z.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Y){e.bindTexture(i.TEXTURE_CUBE_MAP,j.__webglTexture),Nt(i.TEXTURE_CUBE_MAP,S);for(let at=0;at<6;at++)if(S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)gt(z.__webglFramebuffer[at][ft],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,ft);else gt(z.__webglFramebuffer[at],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+at,0);d(S)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(vt){for(let at=0,ft=Z.length;at<ft;at++){const Gt=Z[at],Q=n.get(Gt);e.bindTexture(i.TEXTURE_2D,Q.__webglTexture),Nt(i.TEXTURE_2D,Gt),gt(z.__webglFramebuffer,R,Gt,i.COLOR_ATTACHMENT0+at,i.TEXTURE_2D,0),d(Gt)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let at=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(at,j.__webglTexture),Nt(at,S),S.mipmaps&&S.mipmaps.length>0)for(let ft=0;ft<S.mipmaps.length;ft++)gt(z.__webglFramebuffer[ft],R,S,i.COLOR_ATTACHMENT0,at,ft);else gt(z.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,at,0);d(S)&&p(at),e.unbindTexture()}R.depthBuffer&&At(R)}function Vt(R){const S=R.textures;for(let z=0,j=S.length;z<j;z++){const Z=S[z];if(d(Z)){const Y=x(R),vt=n.get(Z).__webglTexture;e.bindTexture(Y,vt),p(Y),e.unbindTexture()}}}const he=[],I=[];function Je(R){if(R.samples>0){if(kt(R)===!1){const S=R.textures,z=R.width,j=R.height;let Z=i.COLOR_BUFFER_BIT;const Y=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,vt=n.get(R),at=S.length>1;if(at)for(let ft=0;ft<S.length;ft++)e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,vt.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglFramebuffer);for(let ft=0;ft<S.length;ft++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(Z|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(Z|=i.STENCIL_BUFFER_BIT)),at){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Gt=n.get(S[ft]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Gt,0)}i.blitFramebuffer(0,0,z,j,0,0,z,j,Z,i.NEAREST),l===!0&&(he.length=0,I.length=0,he.push(i.COLOR_ATTACHMENT0+ft),R.depthBuffer&&R.resolveDepthBuffer===!1&&(he.push(Y),I.push(Y),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,I)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,he))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),at)for(let ft=0;ft<S.length;ft++){e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,vt.__webglColorRenderbuffer[ft]);const Gt=n.get(S[ft]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,vt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,Gt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,vt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function zt(R){return Math.min(s.maxSamples,R.samples)}function kt(R){const S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function yt(R){const S=a.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function ie(R,S){const z=R.colorSpace,j=R.format,Z=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||z!==ms&&z!==Kn&&(qt.getTransfer(z)===Jt?(j!==Zt||Z!==cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),S}function xt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(u.width=R.naturalWidth||R.width,u.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(u.width=R.displayWidth,u.height=R.displayHeight):(u.width=R.width,u.height=R.height),u}this.allocateTextureUnit=L,this.resetTextureUnits=F,this.setTexture2D=G,this.setTexture2DArray=H,this.setTexture3D=q,this.setTextureCube=W,this.rebindTextures=Ot,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Je,this.setupDepthRenderbuffer=At,this.setupFrameBufferTexture=gt,this.useMultisampledRTT=kt}function Xg(i,t){function e(n,s=Kn){let r;const a=qt.getTransfer(s);if(n===cn)return i.UNSIGNED_BYTE;if(n===al)return i.UNSIGNED_SHORT_4_4_4_4;if(n===ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Su)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Xr)return i.BYTE;if(n===rl)return i.SHORT;if(n===us)return i.UNSIGNED_SHORT;if(n===ss)return i.INT;if(n===on)return i.UNSIGNED_INT;if(n===ne)return i.FLOAT;if(n===Fe)return i.HALF_FLOAT;if(n===Tu)return i.ALPHA;if(n===Eu)return i.RGB;if(n===Zt)return i.RGBA;if(n===wu)return i.LUMINANCE;if(n===Au)return i.LUMINANCE_ALPHA;if(n===rs)return i.DEPTH_COMPONENT;if(n===fs)return i.DEPTH_STENCIL;if(n===ds)return i.RED;if(n===Qr)return i.RED_INTEGER;if(n===ta)return i.RG;if(n===Gs)return i.RG_INTEGER;if(n===ps)return i.RGBA_INTEGER;if(n===Br||n===zr||n===kr||n===Hr)if(a===Jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Br)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Br)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===vo||n===xo||n===yo||n===Mo)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===vo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Mo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===bo||n===So||n===To)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===bo||n===So)return a===Jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===To)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Eo||n===wo||n===Ao||n===Ro||n===Co||n===Po||n===Do||n===Io||n===Lo||n===Fo||n===Uo||n===No||n===Oo||n===Bo)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Eo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===wo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ao)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ro)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Co)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Po)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Do)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Io)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Lo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Fo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Uo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===No)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Oo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Bo)return a===Jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Vr||n===zo||n===ko)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Vr)return a===Jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===zo)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ko)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ru||n===Ho||n===Vo||n===Go)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Vr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ho)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Vo)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Go)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===hs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}const qg={type:"move"};class Ha{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ts,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ts,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ts,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,u=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(u&&t.hand){a=!0;for(const _ of t.hand.values()){const d=e.getJointPose(_,n),p=this._getHandJoint(u,_);d!==null&&(p.matrix.fromArray(d.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=d.radius),p.visible=d!==null}const h=u.joints["index-finger-tip"],f=u.joints["thumb-tip"],c=h.position.distanceTo(f.position),m=.02,g=.005;u.inputState.pinching&&c>m+g?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!u.inputState.pinching&&c<=m-g&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(qg)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),u!==null&&(u.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new ts;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Yg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$g=`
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

}`;class jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new Oe,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:Yg,fragmentShader:$g,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ae(new ia(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Kg extends Si{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,u=null,h=null,f=null,c=null,m=null,g=null;const _=new jg,d=e.getContextAttributes();let p=null,x=null;const y=[],v=[],T=new ut;let A=null;const w=new Le;w.viewport=new Kt;const P=new Le;P.viewport=new Kt;const b=[w,P],M=new mf;let C=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=y[$];return et===void 0&&(et=new Ha,y[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=y[$];return et===void 0&&(et=new Ha,y[$]=et),et.getGripSpace()},this.getHand=function($){let et=y[$];return et===void 0&&(et=new Ha,y[$]=et),et.getHandSpace()};function L($){const et=v.indexOf($.inputSource);if(et===-1)return;const gt=y[et];gt!==void 0&&(gt.update($.inputSource,$.frame,u||a),gt.dispatchEvent({type:$.type,data:$.inputSource}))}function B(){s.removeEventListener("select",L),s.removeEventListener("selectstart",L),s.removeEventListener("selectend",L),s.removeEventListener("squeeze",L),s.removeEventListener("squeezestart",L),s.removeEventListener("squeezeend",L),s.removeEventListener("end",B),s.removeEventListener("inputsourceschange",G);for(let $=0;$<y.length;$++){const et=v[$];et!==null&&(v[$]=null,y[$].disconnect(et))}C=null,F=null,_.reset(),t.setRenderTarget(p),m=null,c=null,f=null,s=null,x=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(T.width,T.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||a},this.setReferenceSpace=function($){u=$},this.getBaseLayer=function(){return c!==null?c:m},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",L),s.addEventListener("selectstart",L),s.addEventListener("selectend",L),s.addEventListener("squeeze",L),s.addEventListener("squeezestart",L),s.addEventListener("squeezeend",L),s.addEventListener("end",B),s.addEventListener("inputsourceschange",G),d.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(T),s.enabledFeatures!==void 0&&s.enabledFeatures.includes("layers")){let gt=null,rt=null,Tt=null;d.depth&&(Tt=d.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,gt=d.stencil?fs:rs,rt=d.stencil?hs:on);const At={colorFormat:e.RGBA8,depthFormat:Tt,scaleFactor:r};f=new XRWebGLBinding(s,e),c=f.createProjectionLayer(At),s.updateRenderState({layers:[c]}),t.setPixelRatio(1),t.setSize(c.textureWidth,c.textureHeight,!1),x=new Ze(c.textureWidth,c.textureHeight,{format:Zt,type:cn,depthTexture:new Hu(c.textureWidth,c.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,gt),stencilBuffer:d.stencil,colorSpace:t.outputColorSpace,samples:d.antialias?4:0,resolveDepthBuffer:c.ignoreDepthValues===!1})}else{const gt={antialias:d.antialias,alpha:!0,depth:d.depth,stencil:d.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,gt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),x=new Ze(m.framebufferWidth,m.framebufferHeight,{format:Zt,type:cn,colorSpace:t.outputColorSpace,stencilBuffer:d.stencil})}x.isXRRenderTarget=!0,this.setFoveation(l),u=null,a=await s.requestReferenceSpace(o),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G($){for(let et=0;et<$.removed.length;et++){const gt=$.removed[et],rt=v.indexOf(gt);rt>=0&&(v[rt]=null,y[rt].disconnect(gt))}for(let et=0;et<$.added.length;et++){const gt=$.added[et];let rt=v.indexOf(gt);if(rt===-1){for(let At=0;At<y.length;At++)if(At>=v.length){v.push(gt),rt=At;break}else if(v[At]===null){v[At]=gt,rt=At;break}if(rt===-1)break}const Tt=y[rt];Tt&&Tt.connect(gt)}}const H=new D,q=new D;function W($,et,gt){H.setFromMatrixPosition(et.matrixWorld),q.setFromMatrixPosition(gt.matrixWorld);const rt=H.distanceTo(q),Tt=et.projectionMatrix.elements,At=gt.projectionMatrix.elements,Ot=Tt[14]/(Tt[10]-1),ae=Tt[14]/(Tt[10]+1),Vt=(Tt[9]+1)/Tt[5],he=(Tt[9]-1)/Tt[5],I=(Tt[8]-1)/Tt[0],Je=(At[8]+1)/At[0],zt=Ot*I,kt=Ot*Je,yt=rt/(-I+Je),ie=yt*-I;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ie),$.translateZ(yt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const xt=Ot+yt,R=ae+yt,S=zt-ie,z=kt+(rt-ie),j=Vt*ae/R*xt,Z=he*ae/R*xt;$.projectionMatrix.makePerspective(S,z,j,Z,xt,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function tt($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,gt=$.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(gt=_.depthFar)),M.near=P.near=w.near=et,M.far=P.far=w.far=gt,(C!==M.near||F!==M.far)&&(s.updateRenderState({depthNear:M.near,depthFar:M.far}),C=M.near,F=M.far),w.layers.mask=$.layers.mask|2,P.layers.mask=$.layers.mask|4,M.layers.mask=w.layers.mask|P.layers.mask;const rt=$.parent,Tt=M.cameras;tt(M,rt);for(let At=0;At<Tt.length;At++)tt(Tt[At],rt);Tt.length===2?W(M,w,P):M.projectionMatrix.copy(w.projectionMatrix),ct($,M,rt)};function ct($,et,gt){gt===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(gt.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=gs*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(c===null&&m===null))return l},this.setFoveation=function($){l=$,c!==null&&(c.fixedFoveation=$),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(M)};let _t=null;function Nt($,et){if(h=et.getViewerPose(u||a),g=et,h!==null){const gt=h.views;m!==null&&(t.setRenderTargetFramebuffer(x,m.framebuffer),t.setRenderTarget(x));let rt=!1;gt.length!==M.cameras.length&&(M.cameras.length=0,rt=!0);for(let At=0;At<gt.length;At++){const Ot=gt[At];let ae=null;if(m!==null)ae=m.getViewport(Ot);else{const he=f.getViewSubImage(c,Ot);ae=he.viewport,At===0&&(t.setRenderTargetTextures(x,he.colorTexture,c.ignoreDepthValues?void 0:he.depthStencilTexture),t.setRenderTarget(x))}let Vt=b[At];Vt===void 0&&(Vt=new Le,Vt.layers.enable(At),Vt.viewport=new Kt,b[At]=Vt),Vt.matrix.fromArray(Ot.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ot.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(ae.x,ae.y,ae.width,ae.height),At===0&&(M.matrix.copy(Vt.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),rt===!0&&M.cameras.push(Vt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const At=f.getDepthInformation(gt[0]);At&&At.isValid&&At.texture&&_.init(t,At,s.renderState)}}for(let gt=0;gt<y.length;gt++){const rt=v[gt],Tt=y[gt];rt!==null&&Tt!==void 0&&Tt.update(rt,et,u||a)}_t&&_t($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const te=new Wu;te.setAnimationLoop(Nt),this.setAnimationLoop=function($){_t=$},this.dispose=function(){}}}const ci=new Tn,Zg=new Ut;function Jg(i,t){function e(d,p){d.matrixAutoUpdate===!0&&d.updateMatrix(),p.value.copy(d.matrix)}function n(d,p){p.color.getRGB(d.fogColor.value,Ou(i)),p.isFog?(d.fogNear.value=p.near,d.fogFar.value=p.far):p.isFogExp2&&(d.fogDensity.value=p.density)}function s(d,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(d,p):p.isMeshToonMaterial?(r(d,p),f(d,p)):p.isMeshPhongMaterial?(r(d,p),h(d,p)):p.isMeshStandardMaterial?(r(d,p),c(d,p),p.isMeshPhysicalMaterial&&m(d,p,v)):p.isMeshMatcapMaterial?(r(d,p),g(d,p)):p.isMeshDepthMaterial?r(d,p):p.isMeshDistanceMaterial?(r(d,p),_(d,p)):p.isMeshNormalMaterial?r(d,p):p.isLineBasicMaterial?(a(d,p),p.isLineDashedMaterial&&o(d,p)):p.isPointsMaterial?l(d,p,x,y):p.isSpriteMaterial?u(d,p):p.isShadowMaterial?(d.color.value.copy(p.color),d.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(d,p){d.opacity.value=p.opacity,p.color&&d.diffuse.value.copy(p.color),p.emissive&&d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.bumpMap&&(d.bumpMap.value=p.bumpMap,e(p.bumpMap,d.bumpMapTransform),d.bumpScale.value=p.bumpScale,p.side===Re&&(d.bumpScale.value*=-1)),p.normalMap&&(d.normalMap.value=p.normalMap,e(p.normalMap,d.normalMapTransform),d.normalScale.value.copy(p.normalScale),p.side===Re&&d.normalScale.value.negate()),p.displacementMap&&(d.displacementMap.value=p.displacementMap,e(p.displacementMap,d.displacementMapTransform),d.displacementScale.value=p.displacementScale,d.displacementBias.value=p.displacementBias),p.emissiveMap&&(d.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,d.emissiveMapTransform)),p.specularMap&&(d.specularMap.value=p.specularMap,e(p.specularMap,d.specularMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest);const x=t.get(p),y=x.envMap,v=x.envMapRotation;y&&(d.envMap.value=y,ci.copy(v),ci.x*=-1,ci.y*=-1,ci.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(ci.y*=-1,ci.z*=-1),d.envMapRotation.value.setFromMatrix4(Zg.makeRotationFromEuler(ci)),d.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,d.reflectivity.value=p.reflectivity,d.ior.value=p.ior,d.refractionRatio.value=p.refractionRatio),p.lightMap&&(d.lightMap.value=p.lightMap,d.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,d.lightMapTransform)),p.aoMap&&(d.aoMap.value=p.aoMap,d.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,d.aoMapTransform))}function a(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform))}function o(d,p){d.dashSize.value=p.dashSize,d.totalSize.value=p.dashSize+p.gapSize,d.scale.value=p.scale}function l(d,p,x,y){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.size.value=p.size*x,d.scale.value=y*.5,p.map&&(d.map.value=p.map,e(p.map,d.uvTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function u(d,p){d.diffuse.value.copy(p.color),d.opacity.value=p.opacity,d.rotation.value=p.rotation,p.map&&(d.map.value=p.map,e(p.map,d.mapTransform)),p.alphaMap&&(d.alphaMap.value=p.alphaMap,e(p.alphaMap,d.alphaMapTransform)),p.alphaTest>0&&(d.alphaTest.value=p.alphaTest)}function h(d,p){d.specular.value.copy(p.specular),d.shininess.value=Math.max(p.shininess,1e-4)}function f(d,p){p.gradientMap&&(d.gradientMap.value=p.gradientMap)}function c(d,p){d.metalness.value=p.metalness,p.metalnessMap&&(d.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,d.metalnessMapTransform)),d.roughness.value=p.roughness,p.roughnessMap&&(d.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,d.roughnessMapTransform)),p.envMap&&(d.envMapIntensity.value=p.envMapIntensity)}function m(d,p,x){d.ior.value=p.ior,p.sheen>0&&(d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),d.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(d.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,d.sheenColorMapTransform)),p.sheenRoughnessMap&&(d.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,d.sheenRoughnessMapTransform))),p.clearcoat>0&&(d.clearcoat.value=p.clearcoat,d.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(d.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,d.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(d.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,d.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(d.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,d.clearcoatNormalMapTransform),d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Re&&d.clearcoatNormalScale.value.negate())),p.dispersion>0&&(d.dispersion.value=p.dispersion),p.iridescence>0&&(d.iridescence.value=p.iridescence,d.iridescenceIOR.value=p.iridescenceIOR,d.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],d.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(d.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,d.iridescenceMapTransform)),p.iridescenceThicknessMap&&(d.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,d.iridescenceThicknessMapTransform))),p.transmission>0&&(d.transmission.value=p.transmission,d.transmissionSamplerMap.value=x.texture,d.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(d.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,d.transmissionMapTransform)),d.thickness.value=p.thickness,p.thicknessMap&&(d.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,d.thicknessMapTransform)),d.attenuationDistance.value=p.attenuationDistance,d.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(d.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(d.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,d.anisotropyMapTransform))),d.specularIntensity.value=p.specularIntensity,d.specularColor.value.copy(p.specularColor),p.specularColorMap&&(d.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,d.specularColorMapTransform)),p.specularIntensityMap&&(d.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,d.specularIntensityMapTransform))}function g(d,p){p.matcap&&(d.matcap.value=p.matcap)}function _(d,p){const x=t.get(p).light;d.referencePosition.value.setFromMatrixPosition(x.matrixWorld),d.nearDistance.value=x.shadow.camera.near,d.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Qg(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function u(x,y){let v=s[x.id];v===void 0&&(g(x),v=h(x),s[x.id]=v,x.addEventListener("dispose",d));const T=y.program;n.updateUBOMapping(x,T);const A=t.render.frame;r[x.id]!==A&&(c(x),r[x.id]=A)}function h(x){const y=f();x.__bindingPointIndex=y;const v=i.createBuffer(),T=x.__size,A=x.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,T,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function f(){for(let x=0;x<o;x++)if(a.indexOf(x)===-1)return a.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function c(x){const y=s[x.id],v=x.uniforms,T=x.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let A=0,w=v.length;A<w;A++){const P=Array.isArray(v[A])?v[A]:[v[A]];for(let b=0,M=P.length;b<M;b++){const C=P[b];if(m(C,A,b,T)===!0){const F=C.__offset,L=Array.isArray(C.value)?C.value:[C.value];let B=0;for(let G=0;G<L.length;G++){const H=L[G],q=_(H);typeof H=="number"||typeof H=="boolean"?(C.__data[0]=H,i.bufferSubData(i.UNIFORM_BUFFER,F+B,C.__data)):H.isMatrix3?(C.__data[0]=H.elements[0],C.__data[1]=H.elements[1],C.__data[2]=H.elements[2],C.__data[3]=0,C.__data[4]=H.elements[3],C.__data[5]=H.elements[4],C.__data[6]=H.elements[5],C.__data[7]=0,C.__data[8]=H.elements[6],C.__data[9]=H.elements[7],C.__data[10]=H.elements[8],C.__data[11]=0):(H.toArray(C.__data,B),B+=q.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,F,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function m(x,y,v,T){const A=x.value,w=y+"_"+v;if(T[w]===void 0)return typeof A=="number"||typeof A=="boolean"?T[w]=A:T[w]=A.clone(),!0;{const P=T[w];if(typeof A=="number"||typeof A=="boolean"){if(P!==A)return T[w]=A,!0}else if(P.equals(A)===!1)return P.copy(A),!0}return!1}function g(x){const y=x.uniforms;let v=0;const T=16;for(let w=0,P=y.length;w<P;w++){const b=Array.isArray(y[w])?y[w]:[y[w]];for(let M=0,C=b.length;M<C;M++){const F=b[M],L=Array.isArray(F.value)?F.value:[F.value];for(let B=0,G=L.length;B<G;B++){const H=L[B],q=_(H),W=v%T,tt=W%q.boundary,ct=W+tt;v+=tt,ct!==0&&T-ct<q.storage&&(v+=T-ct),F.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=q.storage}}}const A=v%T;return A>0&&(v+=T-A),x.__size=v,x.__cache={},this}function _(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function d(x){const y=x.target;y.removeEventListener("dispose",d);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const x in s)i.deleteBuffer(s[x]);a=[],s={},r={}}return{bind:l,update:u,dispose:p}}class t1{constructor(t={}){const{canvas:e=Rh(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reverseDepthBuffer:c=!1}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const g=new Uint32Array(4),_=new Int32Array(4);let d=null,p=null;const x=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Nn,this.toneMappingExposure=1;const v=this;let T=!1,A=0,w=0,P=null,b=-1,M=null;const C=new Kt,F=new Kt;let L=null;const B=new Ft(0);let G=0,H=e.width,q=e.height,W=1,tt=null,ct=null;const _t=new Kt(0,0,H,q),Nt=new Kt(0,0,H,q);let te=!1;const $=new hl;let et=!1,gt=!1;this.transmissionResolutionScale=1;const rt=new Ut,Tt=new Ut,At=new D,Ot=new Kt,ae={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function he(){return P===null?W:1}let I=n;function Je(E,N){return e.getContext(E,N)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Zr}`),e.addEventListener("webglcontextlost",K,!1),e.addEventListener("webglcontextrestored",lt,!1),e.addEventListener("webglcontextcreationerror",ot,!1),I===null){const N="webgl2";if(I=Je(N,E),I===null)throw Je(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let zt,kt,yt,ie,xt,R,S,z,j,Z,Y,vt,at,ft,Gt,Q,dt,St,Et,pt,Ht,It,ee,U;function it(){zt=new cm(I),zt.init(),It=new Xg(I,zt),kt=new im(I,zt,t,It),yt=new Gg(I,zt),kt.reverseDepthBuffer&&c&&yt.buffers.depth.setReversed(!0),ie=new fm(I),xt=new Pg,R=new Wg(I,zt,yt,xt,kt,It,ie),S=new rm(v),z=new lm(v),j=new xf(I),ee=new em(I,j),Z=new um(I,j,ie,ee),Y=new pm(I,Z,j,ie),Et=new dm(I,kt,R),Q=new sm(xt),vt=new Cg(v,S,z,zt,kt,ee,Q),at=new Jg(v,xt),ft=new Ig,Gt=new Bg(zt),St=new tm(v,S,z,yt,Y,m,l),dt=new Hg(v,Y,kt),U=new Qg(I,ie,kt,yt),pt=new nm(I,zt,ie),Ht=new hm(I,zt,ie),ie.programs=vt.programs,v.capabilities=kt,v.extensions=zt,v.properties=xt,v.renderLists=ft,v.shadowMap=dt,v.state=yt,v.info=ie}it();const X=new Kg(v,I);this.xr=X,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const E=zt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=zt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(H,q,!1))},this.getSize=function(E){return E.set(H,q)},this.setSize=function(E,N,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}H=E,q=N,e.width=Math.floor(E*W),e.height=Math.floor(N*W),k===!0&&(e.style.width=E+"px",e.style.height=N+"px"),this.setViewport(0,0,E,N)},this.getDrawingBufferSize=function(E){return E.set(H*W,q*W).floor()},this.setDrawingBufferSize=function(E,N,k){H=E,q=N,W=k,e.width=Math.floor(E*k),e.height=Math.floor(N*k),this.setViewport(0,0,E,N)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(_t)},this.setViewport=function(E,N,k,V){E.isVector4?_t.set(E.x,E.y,E.z,E.w):_t.set(E,N,k,V),yt.viewport(C.copy(_t).multiplyScalar(W).round())},this.getScissor=function(E){return E.copy(Nt)},this.setScissor=function(E,N,k,V){E.isVector4?Nt.set(E.x,E.y,E.z,E.w):Nt.set(E,N,k,V),yt.scissor(F.copy(Nt).multiplyScalar(W).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(E){yt.setScissorTest(te=E)},this.setOpaqueSort=function(E){tt=E},this.setTransparentSort=function(E){ct=E},this.getClearColor=function(E){return E.copy(St.getClearColor())},this.setClearColor=function(){St.setClearColor.apply(St,arguments)},this.getClearAlpha=function(){return St.getClearAlpha()},this.setClearAlpha=function(){St.setClearAlpha.apply(St,arguments)},this.clear=function(E=!0,N=!0,k=!0){let V=0;if(E){let O=!1;if(P!==null){const J=P.texture.format;O=J===ps||J===Gs||J===Qr}if(O){const J=P.texture.type,st=J===cn||J===on||J===us||J===hs||J===al||J===ol,ht=St.getClearColor(),mt=St.getClearAlpha(),wt=ht.r,Rt=ht.g,Mt=ht.b;st?(g[0]=wt,g[1]=Rt,g[2]=Mt,g[3]=mt,I.clearBufferuiv(I.COLOR,0,g)):(_[0]=wt,_[1]=Rt,_[2]=Mt,_[3]=mt,I.clearBufferiv(I.COLOR,0,_))}else V|=I.COLOR_BUFFER_BIT}N&&(V|=I.DEPTH_BUFFER_BIT),k&&(V|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",K,!1),e.removeEventListener("webglcontextrestored",lt,!1),e.removeEventListener("webglcontextcreationerror",ot,!1),St.dispose(),ft.dispose(),Gt.dispose(),xt.dispose(),S.dispose(),z.dispose(),Y.dispose(),ee.dispose(),U.dispose(),vt.dispose(),X.dispose(),X.removeEventListener("sessionstart",wl),X.removeEventListener("sessionend",Al),ni.stop()};function K(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),T=!0}function lt(){console.log("THREE.WebGLRenderer: Context Restored."),T=!1;const E=ie.autoReset,N=dt.enabled,k=dt.autoUpdate,V=dt.needsUpdate,O=dt.type;it(),ie.autoReset=E,dt.enabled=N,dt.autoUpdate=k,dt.needsUpdate=V,dt.type=O}function ot(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Dt(E){const N=E.target;N.removeEventListener("dispose",Dt),oe(N)}function oe(E){Te(E),xt.remove(E)}function Te(E){const N=xt.get(E).programs;N!==void 0&&(N.forEach(function(k){vt.releaseProgram(k)}),E.isShaderMaterial&&vt.releaseShaderCache(E))}this.renderBufferDirect=function(E,N,k,V,O,J){N===null&&(N=ae);const st=O.isMesh&&O.matrixWorld.determinant()<0,ht=v0(E,N,k,V,O);yt.setMaterial(V,st);let mt=k.index,wt=1;if(V.wireframe===!0){if(mt=Z.getWireframeAttribute(k),mt===void 0)return;wt=2}const Rt=k.drawRange,Mt=k.attributes.position;let Wt=Rt.start*wt,Yt=(Rt.start+Rt.count)*wt;J!==null&&(Wt=Math.max(Wt,J.start*wt),Yt=Math.min(Yt,(J.start+J.count)*wt)),mt!==null?(Wt=Math.max(Wt,0),Yt=Math.min(Yt,mt.count)):Mt!=null&&(Wt=Math.max(Wt,0),Yt=Math.min(Yt,Mt.count));const de=Yt-Wt;if(de<0||de===1/0)return;ee.setup(O,V,ht,k,mt);let le,Xt=pt;if(mt!==null&&(le=j.get(mt),Xt=Ht,Xt.setIndex(le)),O.isMesh)V.wireframe===!0?(yt.setLineWidth(V.wireframeLinewidth*he()),Xt.setMode(I.LINES)):Xt.setMode(I.TRIANGLES);else if(O.isLine){let bt=V.linewidth;bt===void 0&&(bt=1),yt.setLineWidth(bt*he()),O.isLineSegments?Xt.setMode(I.LINES):O.isLineLoop?Xt.setMode(I.LINE_LOOP):Xt.setMode(I.LINE_STRIP)}else O.isPoints?Xt.setMode(I.POINTS):O.isSprite&&Xt.setMode(I.TRIANGLES);if(O.isBatchedMesh)if(O._multiDrawInstances!==null)Xt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances);else if(zt.get("WEBGL_multi_draw"))Xt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else{const bt=O._multiDrawStarts,Me=O._multiDrawCounts,$t=O._multiDrawCount,fn=mt?j.get(mt).bytesPerElement:1,Ei=xt.get(V).currentProgram.getUniforms();for(let Xe=0;Xe<$t;Xe++)Ei.setValue(I,"_gl_DrawID",Xe),Xt.render(bt[Xe]/fn,Me[Xe])}else if(O.isInstancedMesh)Xt.renderInstances(Wt,de,O.count);else if(k.isInstancedBufferGeometry){const bt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Me=Math.min(k.instanceCount,bt);Xt.renderInstances(Wt,de,Me)}else Xt.render(Wt,de)};function jt(E,N,k){E.transparent===!0&&E.side===sn&&E.forceSinglePass===!1?(E.side=Re,E.needsUpdate=!0,Ys(E,N,k),E.side=xn,E.needsUpdate=!0,Ys(E,N,k),E.side=sn):Ys(E,N,k)}this.compile=function(E,N,k=null){k===null&&(k=E),p=Gt.get(k),p.init(N),y.push(p),k.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),E!==k&&E.traverseVisible(function(O){O.isLight&&O.layers.test(N.layers)&&(p.pushLight(O),O.castShadow&&p.pushShadow(O))}),p.setupLights();const V=new Set;return E.traverse(function(O){if(!(O.isMesh||O.isPoints||O.isLine||O.isSprite))return;const J=O.material;if(J)if(Array.isArray(J))for(let st=0;st<J.length;st++){const ht=J[st];jt(ht,k,O),V.add(ht)}else jt(J,k,O),V.add(J)}),y.pop(),p=null,V},this.compileAsync=function(E,N,k=null){const V=this.compile(E,N,k);return new Promise(O=>{function J(){if(V.forEach(function(st){xt.get(st).currentProgram.isReady()&&V.delete(st)}),V.size===0){O(E);return}setTimeout(J,10)}zt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let hn=null;function En(E){hn&&hn(E)}function wl(){ni.stop()}function Al(){ni.start()}const ni=new Wu;ni.setAnimationLoop(En),typeof self<"u"&&ni.setContext(self),this.setAnimationLoop=function(E){hn=E,X.setAnimationLoop(E),E===null?ni.stop():ni.start()},X.addEventListener("sessionstart",wl),X.addEventListener("sessionend",Al),this.render=function(E,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(N),N=X.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,N,P),p=Gt.get(E,y.length),p.init(N),y.push(p),Tt.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),$.setFromProjectionMatrix(Tt),gt=this.localClippingEnabled,et=Q.init(this.clippingPlanes,gt),d=ft.get(E,x.length),d.init(),x.push(d),X.enabled===!0&&X.isPresenting===!0){const J=v.xr.getDepthSensingMesh();J!==null&&la(J,N,-1/0,v.sortObjects)}la(E,N,0,v.sortObjects),d.finish(),v.sortObjects===!0&&d.sort(tt,ct),Vt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Vt&&St.addToRenderList(d,E),this.info.render.frame++,et===!0&&Q.beginShadows();const k=p.state.shadowsArray;dt.render(k,E,N),et===!0&&Q.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=d.opaque,O=d.transmissive;if(p.setupLights(),N.isArrayCamera){const J=N.cameras;if(O.length>0)for(let st=0,ht=J.length;st<ht;st++){const mt=J[st];Cl(V,O,E,mt)}Vt&&St.render(E);for(let st=0,ht=J.length;st<ht;st++){const mt=J[st];Rl(d,E,mt,mt.viewport)}}else O.length>0&&Cl(V,O,E,N),Vt&&St.render(E),Rl(d,E,N);P!==null&&w===0&&(R.updateMultisampleRenderTarget(P),R.updateRenderTargetMipmap(P)),E.isScene===!0&&E.onAfterRender(v,E,N),ee.resetDefaultState(),b=-1,M=null,y.pop(),y.length>0?(p=y[y.length-1],et===!0&&Q.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?d=x[x.length-1]:d=null};function la(E,N,k,V){if(E.visible===!1)return;if(E.layers.test(N.layers)){if(E.isGroup)k=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(N);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||$.intersectsSprite(E)){V&&Ot.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Tt);const st=Y.update(E),ht=E.material;ht.visible&&d.push(E,st,ht,k,Ot.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||$.intersectsObject(E))){const st=Y.update(E),ht=E.material;if(V&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ot.copy(E.boundingSphere.center)):(st.boundingSphere===null&&st.computeBoundingSphere(),Ot.copy(st.boundingSphere.center)),Ot.applyMatrix4(E.matrixWorld).applyMatrix4(Tt)),Array.isArray(ht)){const mt=st.groups;for(let wt=0,Rt=mt.length;wt<Rt;wt++){const Mt=mt[wt],Wt=ht[Mt.materialIndex];Wt&&Wt.visible&&d.push(E,st,Wt,k,Ot.z,Mt)}}else ht.visible&&d.push(E,st,ht,k,Ot.z,null)}}const J=E.children;for(let st=0,ht=J.length;st<ht;st++)la(J[st],N,k,V)}function Rl(E,N,k,V){const O=E.opaque,J=E.transmissive,st=E.transparent;p.setupLightsView(k),et===!0&&Q.setGlobalState(v.clippingPlanes,k),V&&yt.viewport(C.copy(V)),O.length>0&&qs(O,N,k),J.length>0&&qs(J,N,k),st.length>0&&qs(st,N,k),yt.buffers.depth.setTest(!0),yt.buffers.depth.setMask(!0),yt.buffers.color.setMask(!0),yt.setPolygonOffset(!1)}function Cl(E,N,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[V.id]===void 0&&(p.state.transmissionRenderTarget[V.id]=new Ze(1,1,{generateMipmaps:!0,type:zt.has("EXT_color_buffer_half_float")||zt.has("EXT_color_buffer_float")?Fe:cn,minFilter:yi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:qt.workingColorSpace}));const J=p.state.transmissionRenderTarget[V.id],st=V.viewport||C;J.setSize(st.z*v.transmissionResolutionScale,st.w*v.transmissionResolutionScale);const ht=v.getRenderTarget();v.setRenderTarget(J),v.getClearColor(B),G=v.getClearAlpha(),G<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&St.render(k);const mt=v.toneMapping;v.toneMapping=Nn;const wt=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),p.setupLightsView(V),et===!0&&Q.setGlobalState(v.clippingPlanes,V),qs(E,k,V),R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J),zt.has("WEBGL_multisampled_render_to_texture")===!1){let Rt=!1;for(let Mt=0,Wt=N.length;Mt<Wt;Mt++){const Yt=N[Mt],de=Yt.object,le=Yt.geometry,Xt=Yt.material,bt=Yt.group;if(Xt.side===sn&&de.layers.test(V.layers)){const Me=Xt.side;Xt.side=Re,Xt.needsUpdate=!0,Pl(de,k,V,le,Xt,bt),Xt.side=Me,Xt.needsUpdate=!0,Rt=!0}}Rt===!0&&(R.updateMultisampleRenderTarget(J),R.updateRenderTargetMipmap(J))}v.setRenderTarget(ht),v.setClearColor(B,G),wt!==void 0&&(V.viewport=wt),v.toneMapping=mt}function qs(E,N,k){const V=N.isScene===!0?N.overrideMaterial:null;for(let O=0,J=E.length;O<J;O++){const st=E[O],ht=st.object,mt=st.geometry,wt=V===null?st.material:V,Rt=st.group;ht.layers.test(k.layers)&&Pl(ht,N,k,mt,wt,Rt)}}function Pl(E,N,k,V,O,J){E.onBeforeRender(v,N,k,V,O,J),E.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),O.onBeforeRender(v,N,k,V,E,J),O.transparent===!0&&O.side===sn&&O.forceSinglePass===!1?(O.side=Re,O.needsUpdate=!0,v.renderBufferDirect(k,N,V,O,E,J),O.side=xn,O.needsUpdate=!0,v.renderBufferDirect(k,N,V,O,E,J),O.side=sn):v.renderBufferDirect(k,N,V,O,E,J),E.onAfterRender(v,N,k,V,O,J)}function Ys(E,N,k){N.isScene!==!0&&(N=ae);const V=xt.get(E),O=p.state.lights,J=p.state.shadowsArray,st=O.state.version,ht=vt.getParameters(E,O.state,J,N,k),mt=vt.getProgramCacheKey(ht);let wt=V.programs;V.environment=E.isMeshStandardMaterial?N.environment:null,V.fog=N.fog,V.envMap=(E.isMeshStandardMaterial?z:S).get(E.envMap||V.environment),V.envMapRotation=V.environment!==null&&E.envMap===null?N.environmentRotation:E.envMapRotation,wt===void 0&&(E.addEventListener("dispose",Dt),wt=new Map,V.programs=wt);let Rt=wt.get(mt);if(Rt!==void 0){if(V.currentProgram===Rt&&V.lightsStateVersion===st)return Il(E,ht),Rt}else ht.uniforms=vt.getUniforms(E),E.onBeforeCompile(ht,v),Rt=vt.acquireProgram(ht,mt),wt.set(mt,Rt),V.uniforms=ht.uniforms;const Mt=V.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Mt.clippingPlanes=Q.uniform),Il(E,ht),V.needsLights=y0(E),V.lightsStateVersion=st,V.needsLights&&(Mt.ambientLightColor.value=O.state.ambient,Mt.lightProbe.value=O.state.probe,Mt.directionalLights.value=O.state.directional,Mt.directionalLightShadows.value=O.state.directionalShadow,Mt.spotLights.value=O.state.spot,Mt.spotLightShadows.value=O.state.spotShadow,Mt.rectAreaLights.value=O.state.rectArea,Mt.ltc_1.value=O.state.rectAreaLTC1,Mt.ltc_2.value=O.state.rectAreaLTC2,Mt.pointLights.value=O.state.point,Mt.pointLightShadows.value=O.state.pointShadow,Mt.hemisphereLights.value=O.state.hemi,Mt.directionalShadowMap.value=O.state.directionalShadowMap,Mt.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Mt.spotShadowMap.value=O.state.spotShadowMap,Mt.spotLightMatrix.value=O.state.spotLightMatrix,Mt.spotLightMap.value=O.state.spotLightMap,Mt.pointShadowMap.value=O.state.pointShadowMap,Mt.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Rt,V.uniformsList=null,Rt}function Dl(E){if(E.uniformsList===null){const N=E.currentProgram.getUniforms();E.uniformsList=Gr.seqWithValue(N.seq,E.uniforms)}return E.uniformsList}function Il(E,N){const k=xt.get(E);k.outputColorSpace=N.outputColorSpace,k.batching=N.batching,k.batchingColor=N.batchingColor,k.instancing=N.instancing,k.instancingColor=N.instancingColor,k.instancingMorph=N.instancingMorph,k.skinning=N.skinning,k.morphTargets=N.morphTargets,k.morphNormals=N.morphNormals,k.morphColors=N.morphColors,k.morphTargetsCount=N.morphTargetsCount,k.numClippingPlanes=N.numClippingPlanes,k.numIntersection=N.numClipIntersection,k.vertexAlphas=N.vertexAlphas,k.vertexTangents=N.vertexTangents,k.toneMapping=N.toneMapping}function v0(E,N,k,V,O){N.isScene!==!0&&(N=ae),R.resetTextureUnits();const J=N.fog,st=V.isMeshStandardMaterial?N.environment:null,ht=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:ms,mt=(V.isMeshStandardMaterial?z:S).get(V.envMap||st),wt=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Rt=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Mt=!!k.morphAttributes.position,Wt=!!k.morphAttributes.normal,Yt=!!k.morphAttributes.color;let de=Nn;V.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(de=v.toneMapping);const le=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,Xt=le!==void 0?le.length:0,bt=xt.get(V),Me=p.state.lights;if(et===!0&&(gt===!0||E!==M)){const Pe=E===M&&V.id===b;Q.setState(V,E,Pe)}let $t=!1;V.version===bt.__version?(bt.needsLights&&bt.lightsStateVersion!==Me.state.version||bt.outputColorSpace!==ht||O.isBatchedMesh&&bt.batching===!1||!O.isBatchedMesh&&bt.batching===!0||O.isBatchedMesh&&bt.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&bt.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&bt.instancing===!1||!O.isInstancedMesh&&bt.instancing===!0||O.isSkinnedMesh&&bt.skinning===!1||!O.isSkinnedMesh&&bt.skinning===!0||O.isInstancedMesh&&bt.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&bt.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&bt.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&bt.instancingMorph===!1&&O.morphTexture!==null||bt.envMap!==mt||V.fog===!0&&bt.fog!==J||bt.numClippingPlanes!==void 0&&(bt.numClippingPlanes!==Q.numPlanes||bt.numIntersection!==Q.numIntersection)||bt.vertexAlphas!==wt||bt.vertexTangents!==Rt||bt.morphTargets!==Mt||bt.morphNormals!==Wt||bt.morphColors!==Yt||bt.toneMapping!==de||bt.morphTargetsCount!==Xt)&&($t=!0):($t=!0,bt.__version=V.version);let fn=bt.currentProgram;$t===!0&&(fn=Ys(V,N,O));let Ei=!1,Xe=!1,Ss=!1;const re=fn.getUniforms(),Qe=bt.uniforms;if(yt.useProgram(fn.program)&&(Ei=!0,Xe=!0,Ss=!0),V.id!==b&&(b=V.id,Xe=!0),Ei||M!==E){yt.buffers.depth.getReversed()?(rt.copy(E.projectionMatrix),Ph(rt),Dh(rt),re.setValue(I,"projectionMatrix",rt)):re.setValue(I,"projectionMatrix",E.projectionMatrix),re.setValue(I,"viewMatrix",E.matrixWorldInverse);const He=re.map.cameraPosition;He!==void 0&&He.setValue(I,At.setFromMatrixPosition(E.matrixWorld)),kt.logarithmicDepthBuffer&&re.setValue(I,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&re.setValue(I,"isOrthographic",E.isOrthographicCamera===!0),M!==E&&(M=E,Xe=!0,Ss=!0)}if(O.isSkinnedMesh){re.setOptional(I,O,"bindMatrix"),re.setOptional(I,O,"bindMatrixInverse");const Pe=O.skeleton;Pe&&(Pe.boneTexture===null&&Pe.computeBoneTexture(),re.setValue(I,"boneTexture",Pe.boneTexture,R))}O.isBatchedMesh&&(re.setOptional(I,O,"batchingTexture"),re.setValue(I,"batchingTexture",O._matricesTexture,R),re.setOptional(I,O,"batchingIdTexture"),re.setValue(I,"batchingIdTexture",O._indirectTexture,R),re.setOptional(I,O,"batchingColorTexture"),O._colorsTexture!==null&&re.setValue(I,"batchingColorTexture",O._colorsTexture,R));const tn=k.morphAttributes;if((tn.position!==void 0||tn.normal!==void 0||tn.color!==void 0)&&Et.update(O,k,fn),(Xe||bt.receiveShadow!==O.receiveShadow)&&(bt.receiveShadow=O.receiveShadow,re.setValue(I,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(Qe.envMap.value=mt,Qe.flipEnvMap.value=mt.isCubeTexture&&mt.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&N.environment!==null&&(Qe.envMapIntensity.value=N.environmentIntensity),Xe&&(re.setValue(I,"toneMappingExposure",v.toneMappingExposure),bt.needsLights&&x0(Qe,Ss),J&&V.fog===!0&&at.refreshFogUniforms(Qe,J),at.refreshMaterialUniforms(Qe,V,W,q,p.state.transmissionRenderTarget[E.id]),Gr.upload(I,Dl(bt),Qe,R)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(Gr.upload(I,Dl(bt),Qe,R),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&re.setValue(I,"center",O.center),re.setValue(I,"modelViewMatrix",O.modelViewMatrix),re.setValue(I,"normalMatrix",O.normalMatrix),re.setValue(I,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Pe=V.uniformsGroups;for(let He=0,ca=Pe.length;He<ca;He++){const ii=Pe[He];U.update(ii,fn),U.bind(ii,fn)}}return fn}function x0(E,N){E.ambientLightColor.needsUpdate=N,E.lightProbe.needsUpdate=N,E.directionalLights.needsUpdate=N,E.directionalLightShadows.needsUpdate=N,E.pointLights.needsUpdate=N,E.pointLightShadows.needsUpdate=N,E.spotLights.needsUpdate=N,E.spotLightShadows.needsUpdate=N,E.rectAreaLights.needsUpdate=N,E.hemisphereLights.needsUpdate=N}function y0(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(E,N,k){xt.get(E.texture).__webglTexture=N,xt.get(E.depthTexture).__webglTexture=k;const V=xt.get(E);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||zt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,N){const k=xt.get(E);k.__webglFramebuffer=N,k.__useDefaultFramebuffer=N===void 0};const M0=I.createFramebuffer();this.setRenderTarget=function(E,N=0,k=0){P=E,A=N,w=k;let V=!0,O=null,J=!1,st=!1;if(E){const mt=xt.get(E);if(mt.__useDefaultFramebuffer!==void 0)yt.bindFramebuffer(I.FRAMEBUFFER,null),V=!1;else if(mt.__webglFramebuffer===void 0)R.setupRenderTarget(E);else if(mt.__hasExternalTextures)R.rebindTextures(E,xt.get(E.texture).__webglTexture,xt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Mt=E.depthTexture;if(mt.__boundDepthTexture!==Mt){if(Mt!==null&&xt.has(Mt)&&(E.width!==Mt.image.width||E.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(E)}}const wt=E.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(st=!0);const Rt=xt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Rt[N])?O=Rt[N][k]:O=Rt[N],J=!0):E.samples>0&&R.useMultisampledRTT(E)===!1?O=xt.get(E).__webglMultisampledFramebuffer:Array.isArray(Rt)?O=Rt[k]:O=Rt,C.copy(E.viewport),F.copy(E.scissor),L=E.scissorTest}else C.copy(_t).multiplyScalar(W).floor(),F.copy(Nt).multiplyScalar(W).floor(),L=te;if(k!==0&&(O=M0),yt.bindFramebuffer(I.FRAMEBUFFER,O)&&V&&yt.drawBuffers(E,O),yt.viewport(C),yt.scissor(F),yt.setScissorTest(L),J){const mt=xt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+N,mt.__webglTexture,k)}else if(st){const mt=xt.get(E.texture),wt=N;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,mt.__webglTexture,k,wt)}else if(E!==null&&k!==0){const mt=xt.get(E.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,mt.__webglTexture,k)}b=-1},this.readRenderTargetPixels=function(E,N,k,V,O,J,st){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ht=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){yt.bindFramebuffer(I.FRAMEBUFFER,ht);try{const mt=E.texture,wt=mt.format,Rt=mt.type;if(!kt.textureFormatReadable(wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!kt.textureTypeReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=E.width-V&&k>=0&&k<=E.height-O&&I.readPixels(N,k,V,O,It.convert(wt),It.convert(Rt),J)}finally{const mt=P!==null?xt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,mt)}}},this.readRenderTargetPixelsAsync=async function(E,N,k,V,O,J,st){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ht=xt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&st!==void 0&&(ht=ht[st]),ht){const mt=E.texture,wt=mt.format,Rt=mt.type;if(!kt.textureFormatReadable(wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!kt.textureTypeReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=E.width-V&&k>=0&&k<=E.height-O){yt.bindFramebuffer(I.FRAMEBUFFER,ht);const Mt=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.bufferData(I.PIXEL_PACK_BUFFER,J.byteLength,I.STREAM_READ),I.readPixels(N,k,V,O,It.convert(wt),It.convert(Rt),0);const Wt=P!==null?xt.get(P).__webglFramebuffer:null;yt.bindFramebuffer(I.FRAMEBUFFER,Wt);const Yt=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Ch(I,Yt,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,Mt),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,J),I.deleteBuffer(Mt),I.deleteSync(Yt),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,N=null,k=0){E.isTexture!==!0&&(Zi("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,E=arguments[1]);const V=Math.pow(2,-k),O=Math.floor(E.image.width*V),J=Math.floor(E.image.height*V),st=N!==null?N.x:0,ht=N!==null?N.y:0;R.setTexture2D(E,0),I.copyTexSubImage2D(I.TEXTURE_2D,k,0,0,st,ht,O,J),yt.unbindTexture()};const b0=I.createFramebuffer(),S0=I.createFramebuffer();this.copyTextureToTexture=function(E,N,k=null,V=null,O=0,J=null){E.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,E=arguments[1],N=arguments[2],J=arguments[3]||0,k=null),J===null&&(O!==0?(Zi("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=O,O=0):J=0);let st,ht,mt,wt,Rt,Mt,Wt,Yt,de;const le=E.isCompressedTexture?E.mipmaps[J]:E.image;if(k!==null)st=k.max.x-k.min.x,ht=k.max.y-k.min.y,mt=k.isBox3?k.max.z-k.min.z:1,wt=k.min.x,Rt=k.min.y,Mt=k.isBox3?k.min.z:0;else{const tn=Math.pow(2,-O);st=Math.floor(le.width*tn),ht=Math.floor(le.height*tn),E.isDataArrayTexture?mt=le.depth:E.isData3DTexture?mt=Math.floor(le.depth*tn):mt=1,wt=0,Rt=0,Mt=0}V!==null?(Wt=V.x,Yt=V.y,de=V.z):(Wt=0,Yt=0,de=0);const Xt=It.convert(N.format),bt=It.convert(N.type);let Me;N.isData3DTexture?(R.setTexture3D(N,0),Me=I.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(R.setTexture2DArray(N,0),Me=I.TEXTURE_2D_ARRAY):(R.setTexture2D(N,0),Me=I.TEXTURE_2D),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,N.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,N.unpackAlignment);const $t=I.getParameter(I.UNPACK_ROW_LENGTH),fn=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ei=I.getParameter(I.UNPACK_SKIP_PIXELS),Xe=I.getParameter(I.UNPACK_SKIP_ROWS),Ss=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,le.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,le.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,wt),I.pixelStorei(I.UNPACK_SKIP_ROWS,Rt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Mt);const re=E.isDataArrayTexture||E.isData3DTexture,Qe=N.isDataArrayTexture||N.isData3DTexture;if(E.isDepthTexture){const tn=xt.get(E),Pe=xt.get(N),He=xt.get(tn.__renderTarget),ca=xt.get(Pe.__renderTarget);yt.bindFramebuffer(I.READ_FRAMEBUFFER,He.__webglFramebuffer),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,ca.__webglFramebuffer);for(let ii=0;ii<mt;ii++)re&&(I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(E).__webglTexture,O,Mt+ii),I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,xt.get(N).__webglTexture,J,de+ii)),I.blitFramebuffer(wt,Rt,st,ht,Wt,Yt,st,ht,I.DEPTH_BUFFER_BIT,I.NEAREST);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else if(O!==0||E.isRenderTargetTexture||xt.has(E)){const tn=xt.get(E),Pe=xt.get(N);yt.bindFramebuffer(I.READ_FRAMEBUFFER,b0),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,S0);for(let He=0;He<mt;He++)re?I.framebufferTextureLayer(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,tn.__webglTexture,O,Mt+He):I.framebufferTexture2D(I.READ_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,tn.__webglTexture,O),Qe?I.framebufferTextureLayer(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,Pe.__webglTexture,J,de+He):I.framebufferTexture2D(I.DRAW_FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_2D,Pe.__webglTexture,J),O!==0?I.blitFramebuffer(wt,Rt,st,ht,Wt,Yt,st,ht,I.COLOR_BUFFER_BIT,I.NEAREST):Qe?I.copyTexSubImage3D(Me,J,Wt,Yt,de+He,wt,Rt,st,ht):I.copyTexSubImage2D(Me,J,Wt,Yt,wt,Rt,st,ht);yt.bindFramebuffer(I.READ_FRAMEBUFFER,null),yt.bindFramebuffer(I.DRAW_FRAMEBUFFER,null)}else Qe?E.isDataTexture||E.isData3DTexture?I.texSubImage3D(Me,J,Wt,Yt,de,st,ht,mt,Xt,bt,le.data):N.isCompressedArrayTexture?I.compressedTexSubImage3D(Me,J,Wt,Yt,de,st,ht,mt,Xt,le.data):I.texSubImage3D(Me,J,Wt,Yt,de,st,ht,mt,Xt,bt,le):E.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,J,Wt,Yt,st,ht,Xt,bt,le.data):E.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,J,Wt,Yt,le.width,le.height,Xt,le.data):I.texSubImage2D(I.TEXTURE_2D,J,Wt,Yt,st,ht,Xt,bt,le);I.pixelStorei(I.UNPACK_ROW_LENGTH,$t),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,fn),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ei),I.pixelStorei(I.UNPACK_SKIP_ROWS,Xe),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ss),J===0&&N.generateMipmaps&&I.generateMipmap(Me),yt.unbindTexture()},this.copyTextureToTexture3D=function(E,N,k=null,V=null,O=0){return E.isTexture!==!0&&(Zi("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,E=arguments[2],N=arguments[3],O=arguments[4]||0),Zi('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,N,k,V,O)},this.initRenderTarget=function(E){xt.get(E).__webglFramebuffer===void 0&&R.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?R.setTextureCube(E,0):E.isData3DTexture?R.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?R.setTexture2DArray(E,0):R.setTexture2D(E,0),yt.unbindTexture()},this.resetState=function(){A=0,w=0,P=null,yt.reset(),ee.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Un}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=qt._getUnpackColorSpace()}}const Ic={type:"change"},ml={type:"start"},ju={type:"end"},_r=new Iu,Lc=new Mn,e1=Math.cos(70*Ah.DEG2RAD),ge=new D,Ve=2*Math.PI,Qt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Va=1e-6;class n1 extends _f{constructor(t,e=null){super(t,e),this.state=Qt.NONE,this.enabled=!0,this.target=new D,this.cursor=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:is.ROTATE,MIDDLE:is.DOLLY,RIGHT:is.PAN},this.touches={ONE:Qi.ROTATE,TWO:Qi.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new D,this._lastQuaternion=new ti,this._lastTargetPosition=new D,this._quat=new ti().setFromUnitVectors(t.up,new D(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Xo,this._sphericalDelta=new Xo,this._scale=1,this._panOffset=new D,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new D,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=s1.bind(this),this._onPointerDown=i1.bind(this),this._onPointerUp=r1.bind(this),this._onContextMenu=f1.bind(this),this._onMouseWheel=l1.bind(this),this._onKeyDown=c1.bind(this),this._onTouchStart=u1.bind(this),this._onTouchMove=h1.bind(this),this._onMouseDown=a1.bind(this),this._onMouseMove=o1.bind(this),this._interceptControlDown=d1.bind(this),this._interceptControlUp=p1.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Ic),this.update(),this.state=Qt.NONE}update(t=null){const e=this.object.position;ge.copy(e).sub(this.target),ge.applyQuaternion(this._quat),this._spherical.setFromVector3(ge),this.autoRotate&&this.state===Qt.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(n)&&isFinite(s)&&(n<-Math.PI?n+=Ve:n>Math.PI&&(n-=Ve),s<-Math.PI?s+=Ve:s>Math.PI&&(s-=Ve),n<=s?this._spherical.theta=Math.max(n,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+s)/2?Math.max(n,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const a=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=a!=this._spherical.radius}if(ge.setFromSpherical(this._spherical),ge.applyQuaternion(this._quatInverse),e.copy(this.target).add(ge),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let a=null;if(this.object.isPerspectiveCamera){const o=ge.length();a=this._clampDistance(o*this._scale);const l=o-a;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const o=new D(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const u=new D(this._mouse.x,this._mouse.y,0);u.unproject(this.object),this.object.position.sub(u).add(o),this.object.updateMatrixWorld(),a=ge.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;a!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(a).add(this.object.position):(_r.origin.copy(this.object.position),_r.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(_r.direction))<e1?this.object.lookAt(this.target):(Lc.setFromNormalAndCoplanarPoint(this.object.up,this.target),_r.intersectPlane(Lc,this.target))))}else if(this.object.isOrthographicCamera){const a=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),a!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>Va||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Va||this._lastTargetPosition.distanceToSquared(this.target)>Va?(this.dispatchEvent(Ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ve/60*this.autoRotateSpeed*t:Ve/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){ge.setFromMatrixColumn(e,0),ge.multiplyScalar(-t),this._panOffset.add(ge)}_panUp(t,e){this.screenSpacePanning===!0?ge.setFromMatrixColumn(e,1):(ge.setFromMatrixColumn(e,0),ge.crossVectors(this.object.up,ge)),ge.multiplyScalar(t),this._panOffset.add(ge)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;ge.copy(s).sub(this.target);let r=ge.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/n.clientHeight,this.object.matrix),this._panUp(2*e*r/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),s=t-n.left,r=e-n.top,a=n.width,o=n.height;this._mouse.x=s/a*2-1,this._mouse.y=-(r/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-Ve*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(n,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(n,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),s=.5*(t.pageX+n.x),r=.5*(t.pageY+n.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ve*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ve*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(n,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(n*n+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const a=(t.pageX+e.x)*.5,o=(t.pageY+e.y)*.5;this._updateZoomParameters(a,o)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new ut,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function i1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function s1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function r1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(ju),this.state=Qt.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function a1(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case is.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Qt.DOLLY;break;case is.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}break;case is.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Qt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Qt.PAN}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(ml)}function o1(i){switch(this.state){case Qt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Qt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Qt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function l1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Qt.NONE||(i.preventDefault(),this.dispatchEvent(ml),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(ju))}function c1(i){this.enabled!==!1&&this._handleKeyDown(i)}function u1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Qi.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Qt.TOUCH_ROTATE;break;case Qi.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Qt.TOUCH_PAN;break;default:this.state=Qt.NONE}break;case 2:switch(this.touches.TWO){case Qi.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Qt.TOUCH_DOLLY_PAN;break;case Qi.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Qt.TOUCH_DOLLY_ROTATE;break;default:this.state=Qt.NONE}break;default:this.state=Qt.NONE}this.state!==Qt.NONE&&this.dispatchEvent(ml)}function h1(i){switch(this._trackPointer(i),this.state){case Qt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Qt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Qt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Qt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Qt.NONE}}function f1(i){this.enabled!==!1&&i.preventDefault()}function d1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function p1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Ku=0,m1=1,Zu=2,Fc=2,Ga=1.25,Uc=1,Qn=6*4+4+4,ra=65535,g1=Math.pow(2,-24),Wa=Symbol("SKIP_GENERATION");function Ju(i){return i.index?i.index.count:i.attributes.position.count}function bs(i){return Ju(i)/3}function Qu(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function _1(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=Qu(e,n);i.setIndex(new ue(s,1));for(let r=0;r<e;r++)s[r]=r}}function t0(i,t){const e=bs(i),n=t||i.drawRange,s=n.start/3,r=(n.start+n.count)/3,a=Math.max(0,s),o=Math.min(e,r)-a;return[{offset:Math.floor(a),count:Math.floor(o)}]}function e0(i,t){if(!i.groups||!i.groups.length)return t0(i,t);const e=[],n=new Set,s=t||i.drawRange,r=s.start/3,a=(s.start+s.count)/3;for(const l of i.groups){const u=l.start/3,h=(l.start+l.count)/3;n.add(Math.max(r,u)),n.add(Math.min(a,h))}const o=Array.from(n.values()).sort((l,u)=>l-u);for(let l=0;l<o.length-1;l++){const u=o[l],h=o[l+1];e.push({offset:Math.floor(u),count:Math.floor(h-u)})}return e}function v1(i,t){const e=bs(i),n=e0(i,t).sort((a,o)=>a.offset-o.offset),s=n[n.length-1];s.count=Math.min(e-s.offset,s.count);let r=0;return n.forEach(({count:a})=>r+=a),e!==r}function Xa(i,t,e,n,s){let r=1/0,a=1/0,o=1/0,l=-1/0,u=-1/0,h=-1/0,f=1/0,c=1/0,m=1/0,g=-1/0,_=-1/0,d=-1/0;for(let p=t*6,x=(t+e)*6;p<x;p+=6){const y=i[p+0],v=i[p+1],T=y-v,A=y+v;T<r&&(r=T),A>l&&(l=A),y<f&&(f=y),y>g&&(g=y);const w=i[p+2],P=i[p+3],b=w-P,M=w+P;b<a&&(a=b),M>u&&(u=M),w<c&&(c=w),w>_&&(_=w);const C=i[p+4],F=i[p+5],L=C-F,B=C+F;L<o&&(o=L),B>h&&(h=B),C<m&&(m=C),C>d&&(d=C)}n[0]=r,n[1]=a,n[2]=o,n[3]=l,n[4]=u,n[5]=h,s[0]=f,s[1]=c,s[2]=m,s[3]=g,s[4]=_,s[5]=d}function x1(i,t=null,e=null,n=null){const s=i.attributes.position,r=i.index?i.index.array:null,a=bs(i),o=s.normalized;let l;t===null?(l=new Float32Array(a*6),e=0,n=a):(l=t,e=e||0,n=n||a);const u=s.array,h=s.offset||0;let f=3;s.isInterleavedBufferAttribute&&(f=s.data.stride);const c=["getX","getY","getZ"];for(let m=e;m<e+n;m++){const g=m*3,_=m*6;let d=g+0,p=g+1,x=g+2;r&&(d=r[d],p=r[p],x=r[x]),o||(d=d*f+h,p=p*f+h,x=x*f+h);for(let y=0;y<3;y++){let v,T,A;o?(v=s[c[y]](d),T=s[c[y]](p),A=s[c[y]](x)):(v=u[d+y],T=u[p+y],A=u[x+y]);let w=v;T<w&&(w=T),A<w&&(w=A);let P=v;T>P&&(P=T),A>P&&(P=A);const b=(P-w)/2,M=y*2;l[_+M+0]=w+b,l[_+M+1]=b+(Math.abs(w)+b)*g1}}return l}function ce(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Nc(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const s=i[n+3]-i[n];s>e&&(e=s,t=n)}return t}function Oc(i,t){t.set(i)}function Bc(i,t,e){let n,s;for(let r=0;r<3;r++){const a=r+3;n=i[r],s=t[r],e[r]=n<s?n:s,n=i[a],s=t[a],e[a]=n>s?n:s}}function vr(i,t,e){for(let n=0;n<3;n++){const s=t[i+2*n],r=t[i+2*n+1],a=s-r,o=s+r;a<e[n]&&(e[n]=a),o>e[n+3]&&(e[n+3]=o)}}function Rs(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}const In=32,y1=(i,t)=>i.candidate-t.candidate,Yn=new Array(In).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),xr=new Float32Array(6);function M1(i,t,e,n,s,r){let a=-1,o=0;if(r===Ku)a=Nc(t),a!==-1&&(o=(t[a]+t[a+3])/2);else if(r===m1)a=Nc(i),a!==-1&&(o=b1(e,n,s,a));else if(r===Zu){const l=Rs(i);let u=Ga*s;const h=n*6,f=(n+s)*6;for(let c=0;c<3;c++){const m=t[c],d=(t[c+3]-m)/In;if(s<In/4){const p=[...Yn];p.length=s;let x=0;for(let v=h;v<f;v+=6,x++){const T=p[x];T.candidate=e[v+2*c],T.count=0;const{bounds:A,leftCacheBounds:w,rightCacheBounds:P}=T;for(let b=0;b<3;b++)P[b]=1/0,P[b+3]=-1/0,w[b]=1/0,w[b+3]=-1/0,A[b]=1/0,A[b+3]=-1/0;vr(v,e,A)}p.sort(y1);let y=s;for(let v=0;v<y;v++){const T=p[v];for(;v+1<y&&p[v+1].candidate===T.candidate;)p.splice(v+1,1),y--}for(let v=h;v<f;v+=6){const T=e[v+2*c];for(let A=0;A<y;A++){const w=p[A];T>=w.candidate?vr(v,e,w.rightCacheBounds):(vr(v,e,w.leftCacheBounds),w.count++)}}for(let v=0;v<y;v++){const T=p[v],A=T.count,w=s-T.count,P=T.leftCacheBounds,b=T.rightCacheBounds;let M=0;A!==0&&(M=Rs(P)/l);let C=0;w!==0&&(C=Rs(b)/l);const F=Uc+Ga*(M*A+C*w);F<u&&(a=c,u=F,o=T.candidate)}}else{for(let y=0;y<In;y++){const v=Yn[y];v.count=0,v.candidate=m+d+y*d;const T=v.bounds;for(let A=0;A<3;A++)T[A]=1/0,T[A+3]=-1/0}for(let y=h;y<f;y+=6){let A=~~((e[y+2*c]-m)/d);A>=In&&(A=In-1);const w=Yn[A];w.count++,vr(y,e,w.bounds)}const p=Yn[In-1];Oc(p.bounds,p.rightCacheBounds);for(let y=In-2;y>=0;y--){const v=Yn[y],T=Yn[y+1];Bc(v.bounds,T.rightCacheBounds,v.rightCacheBounds)}let x=0;for(let y=0;y<In-1;y++){const v=Yn[y],T=v.count,A=v.bounds,P=Yn[y+1].rightCacheBounds;T!==0&&(x===0?Oc(A,xr):Bc(A,xr,xr)),x+=T;let b=0,M=0;x!==0&&(b=Rs(xr)/l);const C=s-x;C!==0&&(M=Rs(P)/l);const F=Uc+Ga*(b*x+M*C);F<u&&(a=c,u=F,o=v.candidate)}}}}else console.warn(`MeshBVH: Invalid build strategy value ${r} used.`);return{axis:a,pos:o}}function b1(i,t,e,n){let s=0;for(let r=t,a=t+e;r<a;r++)s+=i[r*6+n*2];return s/e}class qa{constructor(){this.boundingData=new Float32Array(6)}}function S1(i,t,e,n,s,r){let a=n,o=n+s-1;const l=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){for(let h=0;h<3;h++){let f=t[a*3+h];t[a*3+h]=t[o*3+h],t[o*3+h]=f}for(let h=0;h<6;h++){let f=e[a*6+h];e[a*6+h]=e[o*6+h],e[o*6+h]=f}a++,o--}else return a}}function T1(i,t,e,n,s,r){let a=n,o=n+s-1;const l=r.pos,u=r.axis*2;for(;;){for(;a<=o&&e[a*6+u]<l;)a++;for(;a<=o&&e[o*6+u]>=l;)o--;if(a<o){let h=i[a];i[a]=i[o],i[o]=h;for(let f=0;f<6;f++){let c=e[a*6+f];e[a*6+f]=e[o*6+f],e[o*6+f]=c}a++,o--}else return a}}function Ue(i,t){return t[i+15]===65535}function We(i,t){return t[i+6]}function $e(i,t){return t[i+14]}function rn(i){return i+8}function je(i,t){return t[i+6]}function gl(i,t){return t[i+7]}let n0,Ns,Wr,i0;const E1=Math.pow(2,32);function Yo(i){return"count"in i?1:1+Yo(i.left)+Yo(i.right)}function w1(i,t,e){return n0=new Float32Array(e),Ns=new Uint32Array(e),Wr=new Uint16Array(e),i0=new Uint8Array(e),$o(i,t)}function $o(i,t){const e=i/4,n=i/2,s="count"in t,r=t.boundingData;for(let a=0;a<6;a++)n0[e+a]=r[a];if(s)if(t.buffer){const a=t.buffer;i0.set(new Uint8Array(a),i);for(let o=i,l=i+a.byteLength;o<l;o+=Qn){const u=o/2;Ue(u,Wr)||(Ns[o/4+6]+=e)}return i+a.byteLength}else{const a=t.offset,o=t.count;return Ns[e+6]=a,Wr[n+14]=o,Wr[n+15]=ra,i+Qn}else{const a=t.left,o=t.right,l=t.splitAxis;let u;if(u=$o(i+Qn,a),u/4>E1)throw new Error("MeshBVH: Cannot store child pointer greater than 32 bits.");return Ns[e+6]=u/4,u=$o(u,o),Ns[e+7]=l,u}}function A1(i,t){const e=(i.index?i.index.count:i.attributes.position.count)/3,n=e>2**16,s=n?4:2,r=t?new SharedArrayBuffer(e*s):new ArrayBuffer(e*s),a=n?new Uint32Array(r):new Uint16Array(r);for(let o=0,l=a.length;o<l;o++)a[o]=o;return a}function R1(i,t,e,n,s){const{maxDepth:r,verbose:a,maxLeafTris:o,strategy:l,onProgress:u,indirect:h}=s,f=i._indirectBuffer,c=i.geometry,m=c.index?c.index.array:null,g=h?T1:S1,_=bs(c),d=new Float32Array(6);let p=!1;const x=new qa;return Xa(t,e,n,x.boundingData,d),v(x,e,n,d),x;function y(T){u&&u(T/_)}function v(T,A,w,P=null,b=0){if(!p&&b>=r&&(p=!0,a&&(console.warn(`MeshBVH: Max depth of ${r} reached when generating BVH. Consider increasing maxDepth.`),console.warn(c))),w<=o||b>=r)return y(A+w),T.offset=A,T.count=w,T;const M=M1(T.boundingData,P,t,A,w,l);if(M.axis===-1)return y(A+w),T.offset=A,T.count=w,T;const C=g(f,m,t,A,w,M);if(C===A||C===A+w)y(A+w),T.offset=A,T.count=w;else{T.splitAxis=M.axis;const F=new qa,L=A,B=C-A;T.left=F,Xa(t,L,B,F.boundingData,d),v(F,L,B,d,b+1);const G=new qa,H=C,q=w-B;T.right=G,Xa(t,H,q,G.boundingData,d),v(G,H,q,d,b+1)}return T}}function C1(i,t){const e=i.geometry;t.indirect&&(i._indirectBuffer=A1(e,t.useSharedArrayBuffer),v1(e,t.range)&&!t.verbose&&console.warn('MeshBVH: Provided geometry contains groups or a range that do not fully span the vertex contents while using the "indirect" option. BVH may incorrectly report intersections on unrendered portions of the geometry.')),i._indirectBuffer||_1(e,t);const n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,s=x1(e),r=t.indirect?t0(e,t.range):e0(e,t.range);i._roots=r.map(a=>{const o=R1(i,s,a.offset,a.count,t),l=Yo(o),u=new n(Qn*l);return w1(0,o,u),u})}class zn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,s=-1/0;for(let r=0,a=t.length;r<a;r++){const l=t[r][e];n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}setFromPoints(t,e){let n=1/0,s=-1/0;for(let r=0,a=e.length;r<a;r++){const o=e[r],l=t.dot(o);n=l<n?l:n,s=l>s?l:s}this.min=n,this.max=s}isSeparated(t){return this.min>t.max||t.min>this.max}}zn.prototype.setFromBox=function(){const i=new D;return function(e,n){const s=n.min,r=n.max;let a=1/0,o=-1/0;for(let l=0;l<=1;l++)for(let u=0;u<=1;u++)for(let h=0;h<=1;h++){i.x=s.x*l+r.x*(1-l),i.y=s.y*u+r.y*(1-u),i.z=s.z*h+r.z*(1-h);const f=e.dot(i);a=Math.min(f,a),o=Math.max(f,o)}this.min=a,this.max=o}}();const P1=function(){const i=new D,t=new D,e=new D;return function(s,r,a){const o=s.start,l=i,u=r.start,h=t;e.subVectors(o,u),i.subVectors(s.end,s.start),t.subVectors(r.end,r.start);const f=e.dot(h),c=h.dot(l),m=h.dot(h),g=e.dot(l),d=l.dot(l)*m-c*c;let p,x;d!==0?p=(f*c-g*m)/d:p=0,x=(f+p*c)/m,a.x=p,a.y=x}}(),_l=function(){const i=new ut,t=new D,e=new D;return function(s,r,a,o){P1(s,r,i);let l=i.x,u=i.y;if(l>=0&&l<=1&&u>=0&&u<=1){s.at(l,a),r.at(u,o);return}else if(l>=0&&l<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else if(u>=0&&u<=1){l<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else{let h;l<0?h=s.start:h=s.end;let f;u<0?f=r.start:f=r.end;const c=t,m=e;if(s.closestPointToPoint(f,!0,t),r.closestPointToPoint(h,!0,e),c.distanceToSquared(f)<=m.distanceToSquared(h)){a.copy(c),o.copy(f);return}else{a.copy(h),o.copy(m);return}}}}(),D1=function(){const i=new D,t=new D,e=new Mn,n=new Bn;return function(r,a){const{radius:o,center:l}=r,{a:u,b:h,c:f}=a;if(n.start=u,n.end=h,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o||(n.start=u,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o)||(n.start=h,n.end=f,n.closestPointToPoint(l,!0,i).distanceTo(l)<=o))return!0;const _=a.getPlane(e);if(Math.abs(_.distanceToPoint(l))<=o){const p=_.projectPoint(l,t);if(a.containsPoint(p))return!0}return!1}}(),I1=1e-15;function Ya(i){return Math.abs(i)<I1}class yn extends be{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new D),this.satBounds=new Array(4).fill().map(()=>new zn),this.points=[this.a,this.b,this.c],this.sphere=new na,this.plane=new Mn,this.needsUpdate=!0}intersectsSphere(t){return D1(t,this)}update(){const t=this.a,e=this.b,n=this.c,s=this.points,r=this.satAxes,a=this.satBounds,o=r[0],l=a[0];this.getNormal(o),l.setFromPoints(o,s);const u=r[1],h=a[1];u.subVectors(t,e),h.setFromPoints(u,s);const f=r[2],c=a[2];f.subVectors(e,n),c.setFromPoints(f,s);const m=r[3],g=a[3];m.subVectors(n,t),g.setFromPoints(m,s),this.sphere.setFromPoints(this.points),this.plane.setFromNormalAndCoplanarPoint(o,t),this.needsUpdate=!1}}yn.prototype.closestPointToSegment=function(){const i=new D,t=new D,e=new Bn;return function(s,r=null,a=null){const{start:o,end:l}=s,u=this.points;let h,f=1/0;for(let c=0;c<3;c++){const m=(c+1)%3;e.start.copy(u[c]),e.end.copy(u[m]),_l(e,s,i,t),h=i.distanceToSquared(t),h<f&&(f=h,r&&r.copy(i),a&&a.copy(t))}return this.closestPointToPoint(o,i),h=o.distanceToSquared(i),h<f&&(f=h,r&&r.copy(i),a&&a.copy(o)),this.closestPointToPoint(l,i),h=l.distanceToSquared(i),h<f&&(f=h,r&&r.copy(i),a&&a.copy(l)),Math.sqrt(f)}}();yn.prototype.intersectsTriangle=function(){const i=new yn,t=new Array(3),e=new Array(3),n=new zn,s=new zn,r=new D,a=new D,o=new D,l=new D,u=new D,h=new Bn,f=new Bn,c=new Bn,m=new D;function g(_,d,p){const x=_.points;let y=0,v=-1;for(let T=0;T<3;T++){const{start:A,end:w}=h;A.copy(x[T]),w.copy(x[(T+1)%3]),h.delta(a);const P=Ya(d.distanceToPoint(A));if(Ya(d.normal.dot(a))&&P){p.copy(h),y=2;break}const b=d.intersectLine(h,m);if(!b&&P&&m.copy(A),(b||P)&&!Ya(m.distanceTo(w))){if(y<=1)(y===1?p.start:p.end).copy(m),P&&(v=y);else if(y>=2){(v===1?p.start:p.end).copy(m),y=2;break}if(y++,y===2&&v===-1)break}}return y}return function(d,p=null,x=!1){this.needsUpdate&&this.update(),d.isExtendedTriangle?d.needsUpdate&&d.update():(i.copy(d),i.update(),d=i);const y=this.plane,v=d.plane;if(Math.abs(y.normal.dot(v.normal))>1-1e-10){const T=this.satBounds,A=this.satAxes;e[0]=d.a,e[1]=d.b,e[2]=d.c;for(let b=0;b<4;b++){const M=T[b],C=A[b];if(n.setFromPoints(C,e),M.isSeparated(n))return!1}const w=d.satBounds,P=d.satAxes;t[0]=this.a,t[1]=this.b,t[2]=this.c;for(let b=0;b<4;b++){const M=w[b],C=P[b];if(n.setFromPoints(C,t),M.isSeparated(n))return!1}for(let b=0;b<4;b++){const M=A[b];for(let C=0;C<4;C++){const F=P[C];if(r.crossVectors(M,F),n.setFromPoints(r,t),s.setFromPoints(r,e),n.isSeparated(s))return!1}}return p&&(x||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),p.start.set(0,0,0),p.end.set(0,0,0)),!0}else{const T=g(this,v,f);if(T===1&&d.containsPoint(f.end))return p&&(p.start.copy(f.end),p.end.copy(f.end)),!0;if(T!==2)return!1;const A=g(d,y,c);if(A===1&&this.containsPoint(c.end))return p&&(p.start.copy(c.end),p.end.copy(c.end)),!0;if(A!==2)return!1;if(f.delta(o),c.delta(l),o.dot(l)<0){let L=c.start;c.start=c.end,c.end=L}const w=f.start.dot(o),P=f.end.dot(o),b=c.start.dot(o),M=c.end.dot(o),C=P<b,F=w<M;return w!==M&&b!==P&&C===F?!1:(p&&(u.subVectors(f.start,c.start),u.dot(o)>0?p.start.copy(f.start):p.start.copy(c.start),u.subVectors(f.end,c.end),u.dot(o)<0?p.end.copy(f.end):p.end.copy(c.end)),!0)}}}();yn.prototype.distanceToPoint=function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();yn.prototype.distanceToTriangle=function(){const i=new D,t=new D,e=["a","b","c"],n=new Bn,s=new Bn;return function(a,o=null,l=null){const u=o||l?n:null;if(this.intersectsTriangle(a,u))return(o||l)&&(o&&u.getCenter(o),l&&u.getCenter(l)),0;let h=1/0;for(let f=0;f<3;f++){let c;const m=e[f],g=a[m];this.closestPointToPoint(g,i),c=g.distanceToSquared(i),c<h&&(h=c,o&&o.copy(i),l&&l.copy(g));const _=this[m];a.closestPointToPoint(_,i),c=_.distanceToSquared(i),c<h&&(h=c,o&&o.copy(_),l&&l.copy(i))}for(let f=0;f<3;f++){const c=e[f],m=e[(f+1)%3];n.set(this[c],this[m]);for(let g=0;g<3;g++){const _=e[g],d=e[(g+1)%3];s.set(a[_],a[d]),_l(n,s,i,t);const p=i.distanceToSquared(t);p<h&&(h=p,o&&o.copy(i),l&&l.copy(t))}}return Math.sqrt(h)}}();class ze{constructor(t,e,n){this.isOrientedBox=!0,this.min=new D,this.max=new D,this.matrix=new Ut,this.invMatrix=new Ut,this.points=new Array(8).fill().map(()=>new D),this.satAxes=new Array(3).fill().map(()=>new D),this.satBounds=new Array(3).fill().map(()=>new zn),this.alignedSatBounds=new Array(3).fill().map(()=>new zn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}ze.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,s=this.points;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let f=0;f<=1;f++){const c=1*u|2*h|4*f,m=s[c];m.x=u?n.x:e.x,m.y=h?n.y:e.y,m.z=f?n.z:e.z,m.applyMatrix4(t)}const r=this.satBounds,a=this.satAxes,o=s[0];for(let u=0;u<3;u++){const h=a[u],f=r[u],c=1<<u,m=s[c];h.subVectors(o,m),f.setFromPoints(h,s)}const l=this.alignedSatBounds;l[0].setFromPointsField(s,"x"),l[1].setFromPointsField(s,"y"),l[2].setFromPointsField(s,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();ze.prototype.intersectsBox=function(){const i=new zn;return function(e){this.needsUpdate&&this.update();const n=e.min,s=e.max,r=this.satBounds,a=this.satAxes,o=this.alignedSatBounds;if(i.min=n.x,i.max=s.x,o[0].isSeparated(i)||(i.min=n.y,i.max=s.y,o[1].isSeparated(i))||(i.min=n.z,i.max=s.z,o[2].isSeparated(i)))return!1;for(let l=0;l<3;l++){const u=a[l],h=r[l];if(i.setFromBox(u,e),h.isSeparated(i))return!1}return!0}}();ze.prototype.intersectsTriangle=function(){const i=new yn,t=new Array(3),e=new zn,n=new zn,s=new D;return function(a){this.needsUpdate&&this.update(),a.isExtendedTriangle?a.needsUpdate&&a.update():(i.copy(a),i.update(),a=i);const o=this.satBounds,l=this.satAxes;t[0]=a.a,t[1]=a.b,t[2]=a.c;for(let c=0;c<3;c++){const m=o[c],g=l[c];if(e.setFromPoints(g,t),m.isSeparated(e))return!1}const u=a.satBounds,h=a.satAxes,f=this.points;for(let c=0;c<3;c++){const m=u[c],g=h[c];if(e.setFromPoints(g,f),m.isSeparated(e))return!1}for(let c=0;c<3;c++){const m=l[c];for(let g=0;g<4;g++){const _=h[g];if(s.crossVectors(m,_),e.setFromPoints(s,t),n.setFromPoints(s,f),e.isSeparated(n))return!1}}return!0}}();ze.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();ze.prototype.distanceToPoint=function(){const i=new D;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();ze.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Bn),e=new Array(12).fill().map(()=>new Bn),n=new D,s=new D;return function(a,o=0,l=null,u=null){if(this.needsUpdate&&this.update(),this.intersectsBox(a))return(l||u)&&(a.getCenter(s),this.closestPointToPoint(s,n),a.closestPointToPoint(n,s),l&&l.copy(n),u&&u.copy(s)),0;const h=o*o,f=a.min,c=a.max,m=this.points;let g=1/0;for(let d=0;d<8;d++){const p=m[d];s.copy(p).clamp(f,c);const x=p.distanceToSquared(s);if(x<g&&(g=x,l&&l.copy(p),u&&u.copy(s),x<h))return Math.sqrt(x)}let _=0;for(let d=0;d<3;d++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){const y=(d+1)%3,v=(d+2)%3,T=p<<y|x<<v,A=1<<d|p<<y|x<<v,w=m[T],P=m[A];t[_].set(w,P);const M=i[d],C=i[y],F=i[v],L=e[_],B=L.start,G=L.end;B[M]=f[M],B[C]=p?f[C]:c[C],B[F]=x?f[F]:c[C],G[M]=c[M],G[C]=p?f[C]:c[C],G[F]=x?f[F]:c[C],_++}for(let d=0;d<=1;d++)for(let p=0;p<=1;p++)for(let x=0;x<=1;x++){s.x=d?c.x:f.x,s.y=p?c.y:f.y,s.z=x?c.z:f.z,this.closestPointToPoint(s,n);const y=s.distanceToSquared(n);if(y<g&&(g=y,l&&l.copy(n),u&&u.copy(s),y<h))return Math.sqrt(y)}for(let d=0;d<12;d++){const p=t[d];for(let x=0;x<12;x++){const y=e[x];_l(p,y,n,s);const v=n.distanceToSquared(s);if(v<g&&(g=v,l&&l.copy(n),u&&u.copy(s),v<h))return Math.sqrt(v)}}return Math.sqrt(g)}}();class vl{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class L1 extends vl{constructor(){super(()=>new yn)}}const an=new L1;class F1{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const se=new F1;let Zn,ns;const ki=[],yr=new vl(()=>new Be);function U1(i,t,e,n,s,r){Zn=yr.getPrimitive(),ns=yr.getPrimitive(),ki.push(Zn,ns),se.setBuffer(i._roots[t]);const a=jo(0,i.geometry,e,n,s,r);se.clearBuffer(),yr.releasePrimitive(Zn),yr.releasePrimitive(ns),ki.pop(),ki.pop();const o=ki.length;return o>0&&(ns=ki[o-1],Zn=ki[o-2]),a}function jo(i,t,e,n,s=null,r=0,a=0){const{float32Array:o,uint16Array:l,uint32Array:u}=se;let h=i*2;if(Ue(h,l)){const g=We(i,u),_=$e(h,l);return ce(i,o,Zn),n(g,_,!1,a,r+i,Zn)}else{let F=function(B){const{uint16Array:G,uint32Array:H}=se;let q=B*2;for(;!Ue(q,G);)B=rn(B),q=B*2;return We(B,H)},L=function(B){const{uint16Array:G,uint32Array:H}=se;let q=B*2;for(;!Ue(q,G);)B=je(B,H),q=B*2;return We(B,H)+$e(q,G)};var c=F,m=L;const g=rn(i),_=je(i,u);let d=g,p=_,x,y,v,T;if(s&&(v=Zn,T=ns,ce(d,o,v),ce(p,o,T),x=s(v),y=s(T),y<x)){d=_,p=g;const B=x;x=y,y=B,v=T}v||(v=Zn,ce(d,o,v));const A=Ue(d*2,l),w=e(v,A,x,a+1,r+d);let P;if(w===Fc){const B=F(d),H=L(d)-B;P=n(B,H,!0,a+1,r+d,v)}else P=w&&jo(d,t,e,n,s,r,a+1);if(P)return!0;T=ns,ce(p,o,T);const b=Ue(p*2,l),M=e(T,b,y,a+1,r+p);let C;if(M===Fc){const B=F(p),H=L(p)-B;C=n(B,H,!0,a+1,r+p,T)}else C=M&&jo(p,t,e,n,s,r,a+1);return!!C}}const Cs=new D,$a=new D;function N1(i,t,e={},n=0,s=1/0){const r=n*n,a=s*s;let o=1/0,l=null;if(i.shapecast({boundsTraverseOrder:h=>(Cs.copy(t).clamp(h.min,h.max),Cs.distanceToSquared(t)),intersectsBounds:(h,f,c)=>c<o&&c<a,intersectsTriangle:(h,f)=>{h.closestPointToPoint(t,Cs);const c=t.distanceToSquared(Cs);return c<o&&($a.copy(Cs),o=c,l=f),c<r}}),o===1/0)return null;const u=Math.sqrt(o);return e.point?e.point.copy($a):e.point=$a.clone(),e.distance=u,e.faceIndex=l,e}const O1=parseInt(Zr)>=169,ui=new D,hi=new D,fi=new D,Mr=new ut,br=new ut,Sr=new ut,zc=new D,kc=new D,Hc=new D,Ps=new D;function B1(i,t,e,n,s,r,a,o){let l;if(r===Re?l=i.intersectTriangle(n,e,t,!0,s):l=i.intersectTriangle(t,e,n,r!==sn,s),l===null)return null;const u=i.origin.distanceTo(s);return u<a||u>o?null:{distance:u,point:s.clone()}}function z1(i,t,e,n,s,r,a,o,l,u,h){ui.fromBufferAttribute(t,r),hi.fromBufferAttribute(t,a),fi.fromBufferAttribute(t,o);const f=B1(i,ui,hi,fi,Ps,l,u,h);if(f){const c=new D;be.getBarycoord(Ps,ui,hi,fi,c),n&&(Mr.fromBufferAttribute(n,r),br.fromBufferAttribute(n,a),Sr.fromBufferAttribute(n,o),f.uv=be.getInterpolation(Ps,ui,hi,fi,Mr,br,Sr,new ut)),s&&(Mr.fromBufferAttribute(s,r),br.fromBufferAttribute(s,a),Sr.fromBufferAttribute(s,o),f.uv1=be.getInterpolation(Ps,ui,hi,fi,Mr,br,Sr,new ut)),e&&(zc.fromBufferAttribute(e,r),kc.fromBufferAttribute(e,a),Hc.fromBufferAttribute(e,o),f.normal=be.getInterpolation(Ps,ui,hi,fi,zc,kc,Hc,new D),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const m={a:r,b:a,c:o,normal:new D,materialIndex:0};be.getNormal(ui,hi,fi,m.normal),f.face=m,f.faceIndex=r,O1&&(f.barycoord=c)}return f}function aa(i,t,e,n,s,r,a){const o=n*3;let l=o+0,u=o+1,h=o+2;const f=i.index;i.index&&(l=f.getX(l),u=f.getX(u),h=f.getX(h));const{position:c,normal:m,uv:g,uv1:_}=i.attributes,d=z1(e,c,m,g,_,l,u,h,t,r,a);return d?(d.faceIndex=n,s&&s.push(d),d):null}function me(i,t,e,n){const s=i.a,r=i.b,a=i.c;let o=t,l=t+1,u=t+2;e&&(o=e.getX(o),l=e.getX(l),u=e.getX(u)),s.x=n.getX(o),s.y=n.getY(o),s.z=n.getZ(o),r.x=n.getX(l),r.y=n.getY(l),r.z=n.getZ(l),a.x=n.getX(u),a.y=n.getY(u),a.z=n.getZ(u)}function k1(i,t,e,n,s,r,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let h=n,f=n+s;h<f;h++)aa(l,t,e,h,r,a,o)}function H1(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,h=null;for(let f=n,c=n+s;f<c;f++){let m;m=aa(o,t,e,f,null,r,a),m&&m.distance<u&&(h=m,u=m.distance)}return h}function V1(i,t,e,n,s,r,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let h=i,f=t+i;h<f;h++){let c;if(c=h,me(a,c*3,l,u),a.needsUpdate=!0,n(a,c,s,r))return!0}return!1}function G1(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,l,u=0;const h=i._roots;for(let c=0,m=h.length;c<m;c++)r=h[c],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(c,m,g=!1){const _=c*2;if(o[_+15]===ra){const p=a[c+6],x=o[_+14];let y=1/0,v=1/0,T=1/0,A=-1/0,w=-1/0,P=-1/0;for(let b=3*p,M=3*(p+x);b<M;b++){let C=n[b];const F=s.getX(C),L=s.getY(C),B=s.getZ(C);F<y&&(y=F),F>A&&(A=F),L<v&&(v=L),L>w&&(w=L),B<T&&(T=B),B>P&&(P=B)}return l[c+0]!==y||l[c+1]!==v||l[c+2]!==T||l[c+3]!==A||l[c+4]!==w||l[c+5]!==P?(l[c+0]=y,l[c+1]=v,l[c+2]=T,l[c+3]=A,l[c+4]=w,l[c+5]=P,!0):!1}else{const p=c+8,x=a[c+6],y=p+m,v=x+m;let T=g,A=!1,w=!1;t?T||(A=t.has(y),w=t.has(v),T=!A&&!w):(A=!0,w=!0);const P=T||A,b=T||w;let M=!1;P&&(M=f(p,m,T));let C=!1;b&&(C=f(x,m,T));const F=M||C;if(F)for(let L=0;L<3;L++){const B=p+L,G=x+L,H=l[B],q=l[B+3],W=l[G],tt=l[G+3];l[c+L]=H<W?H:W,l[c+L+3]=q>tt?q:tt}return F}}}function ei(i,t,e,n,s){let r,a,o,l,u,h;const f=1/e.direction.x,c=1/e.direction.y,m=1/e.direction.z,g=e.origin.x,_=e.origin.y,d=e.origin.z;let p=t[i],x=t[i+3],y=t[i+1],v=t[i+3+1],T=t[i+2],A=t[i+3+2];return f>=0?(r=(p-g)*f,a=(x-g)*f):(r=(x-g)*f,a=(p-g)*f),c>=0?(o=(y-_)*c,l=(v-_)*c):(o=(v-_)*c,l=(y-_)*c),r>l||o>a||((o>r||isNaN(r))&&(r=o),(l<a||isNaN(a))&&(a=l),m>=0?(u=(T-d)*m,h=(A-d)*m):(u=(A-d)*m,h=(T-d)*m),r>h||u>a)?!1:((u>r||r!==r)&&(r=u),(h<a||a!==a)&&(a=h),r<=s&&a>=n)}function W1(i,t,e,n,s,r,a,o){const{geometry:l,_indirectBuffer:u}=i;for(let h=n,f=n+s;h<f;h++){let c=u?u[h]:h;aa(l,t,e,c,r,a,o)}}function X1(i,t,e,n,s,r,a){const{geometry:o,_indirectBuffer:l}=i;let u=1/0,h=null;for(let f=n,c=n+s;f<c;f++){let m;m=aa(o,t,e,l?l[f]:f,null,r,a),m&&m.distance<u&&(h=m,u=m.distance)}return h}function q1(i,t,e,n,s,r,a){const{geometry:o}=e,{index:l}=o,u=o.attributes.position;for(let h=i,f=t+i;h<f;h++){let c;if(c=e.resolveTriangleIndex(h),me(a,c*3,l,u),a.needsUpdate=!0,n(a,c,s,r))return!0}return!1}function Y1(i,t,e,n,s,r,a){se.setBuffer(i._roots[t]),Ko(0,i,e,n,s,r,a),se.clearBuffer()}function Ko(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:u}=se,h=i*2;if(Ue(h,l)){const c=We(i,u),m=$e(h,l);k1(t,e,n,c,m,s,r,a)}else{const c=rn(i);ei(c,o,n,r,a)&&Ko(c,t,e,n,s,r,a);const m=je(i,u);ei(m,o,n,r,a)&&Ko(m,t,e,n,s,r,a)}}const $1=["x","y","z"];function j1(i,t,e,n,s,r){se.setBuffer(i._roots[t]);const a=Zo(0,i,e,n,s,r);return se.clearBuffer(),a}function Zo(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=se;let u=i*2;if(Ue(u,o)){const f=We(i,l),c=$e(u,o);return H1(t,e,n,f,c,s,r)}else{const f=gl(i,l),c=$1[f],g=n.direction[c]>=0;let _,d;g?(_=rn(i),d=je(i,l)):(_=je(i,l),d=rn(i));const x=ei(_,a,n,s,r)?Zo(_,t,e,n,s,r):null;if(x){const T=x.point[c];if(g?T<=a[d+f]:T>=a[d+f+3])return x}const v=ei(d,a,n,s,r)?Zo(d,t,e,n,s,r):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const Tr=new Be,Hi=new yn,Vi=new yn,Ds=new Ut,Vc=new ze,Er=new ze;function K1(i,t,e,n){se.setBuffer(i._roots[t]);const s=Jo(0,i,e,n);return se.clearBuffer(),s}function Jo(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=se;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Vc.set(e.boundingBox.min,e.boundingBox.max,n),s=Vc),Ue(l,a)){const h=t.geometry,f=h.index,c=h.attributes.position,m=e.index,g=e.attributes.position,_=We(i,o),d=$e(l,a);if(Ds.copy(n).invert(),e.boundsTree)return ce(i,r,Er),Er.matrix.copy(Ds),Er.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Er.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_*3,v=(d+_)*3;y<v;y+=3)if(me(Vi,y,f,c),Vi.needsUpdate=!0,x.intersectsTriangle(Vi))return!0;return!1}});for(let p=_*3,x=(d+_)*3;p<x;p+=3){me(Hi,p,f,c),Hi.a.applyMatrix4(Ds),Hi.b.applyMatrix4(Ds),Hi.c.applyMatrix4(Ds),Hi.needsUpdate=!0;for(let y=0,v=m.count;y<v;y+=3)if(me(Vi,y,m,g),Vi.needsUpdate=!0,Hi.intersectsTriangle(Vi))return!0}}else{const h=i+8,f=o[i+6];return ce(h,r,Tr),!!(s.intersectsBox(Tr)&&Jo(h,t,e,n,s)||(ce(f,r,Tr),s.intersectsBox(Tr)&&Jo(f,t,e,n,s)))}}const wr=new Ut,ja=new ze,Is=new ze,Z1=new D,J1=new D,Q1=new D,t2=new D;function e2(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),ja.set(t.boundingBox.min,t.boundingBox.max,e),ja.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,h=t.attributes.position,f=t.index,c=an.getPrimitive(),m=an.getPrimitive();let g=Z1,_=J1,d=null,p=null;s&&(d=Q1,p=t2);let x=1/0,y=null,v=null;return wr.copy(e).invert(),Is.matrix.copy(wr),i.shapecast({boundsTraverseOrder:T=>ja.distanceToBox(T),intersectsBounds:(T,A,w)=>w<x&&w<a?(A&&(Is.min.copy(T.min),Is.max.copy(T.max),Is.needsUpdate=!0),!0):!1,intersectsRange:(T,A)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:P=>Is.distanceToBox(P),intersectsBounds:(P,b,M)=>M<x&&M<a,intersectsRange:(P,b)=>{for(let M=P,C=P+b;M<C;M++){me(m,3*M,f,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let F=T,L=T+A;F<L;F++){me(c,3*F,u,l),c.needsUpdate=!0;const B=c.distanceToTriangle(m,g,d);if(B<x&&(_.copy(g),p&&p.copy(d),x=B,y=F,v=M),B<r)return!0}}}});{const w=bs(t);for(let P=0,b=w;P<b;P++){me(m,3*P,f,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let M=T,C=T+A;M<C;M++){me(c,3*M,u,l),c.needsUpdate=!0;const F=c.distanceToTriangle(m,g,d);if(F<x&&(_.copy(g),p&&p.copy(d),x=F,y=M,v=P),F<r)return!0}}}}}),an.releasePrimitive(c),an.releasePrimitive(m),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(wr),_.applyMatrix4(wr),s.distance=_.sub(s.point).length(),s.faceIndex=v),n)}function n2(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,s=e.attributes.position;let r,a,o,l,u=0;const h=i._roots;for(let c=0,m=h.length;c<m;c++)r=h[c],a=new Uint32Array(r),o=new Uint16Array(r),l=new Float32Array(r),f(0,u),u+=r.byteLength;function f(c,m,g=!1){const _=c*2;if(o[_+15]===ra){const p=a[c+6],x=o[_+14];let y=1/0,v=1/0,T=1/0,A=-1/0,w=-1/0,P=-1/0;for(let b=p,M=p+x;b<M;b++){const C=3*i.resolveTriangleIndex(b);for(let F=0;F<3;F++){let L=C+F;L=n?n[L]:L;const B=s.getX(L),G=s.getY(L),H=s.getZ(L);B<y&&(y=B),B>A&&(A=B),G<v&&(v=G),G>w&&(w=G),H<T&&(T=H),H>P&&(P=H)}}return l[c+0]!==y||l[c+1]!==v||l[c+2]!==T||l[c+3]!==A||l[c+4]!==w||l[c+5]!==P?(l[c+0]=y,l[c+1]=v,l[c+2]=T,l[c+3]=A,l[c+4]=w,l[c+5]=P,!0):!1}else{const p=c+8,x=a[c+6],y=p+m,v=x+m;let T=g,A=!1,w=!1;t?T||(A=t.has(y),w=t.has(v),T=!A&&!w):(A=!0,w=!0);const P=T||A,b=T||w;let M=!1;P&&(M=f(p,m,T));let C=!1;b&&(C=f(x,m,T));const F=M||C;if(F)for(let L=0;L<3;L++){const B=p+L,G=x+L,H=l[B],q=l[B+3],W=l[G],tt=l[G+3];l[c+L]=H<W?H:W,l[c+L+3]=q>tt?q:tt}return F}}}function i2(i,t,e,n,s,r,a){se.setBuffer(i._roots[t]),Qo(0,i,e,n,s,r,a),se.clearBuffer()}function Qo(i,t,e,n,s,r,a){const{float32Array:o,uint16Array:l,uint32Array:u}=se,h=i*2;if(Ue(h,l)){const c=We(i,u),m=$e(h,l);W1(t,e,n,c,m,s,r,a)}else{const c=rn(i);ei(c,o,n,r,a)&&Qo(c,t,e,n,s,r,a);const m=je(i,u);ei(m,o,n,r,a)&&Qo(m,t,e,n,s,r,a)}}const s2=["x","y","z"];function r2(i,t,e,n,s,r){se.setBuffer(i._roots[t]);const a=tl(0,i,e,n,s,r);return se.clearBuffer(),a}function tl(i,t,e,n,s,r){const{float32Array:a,uint16Array:o,uint32Array:l}=se;let u=i*2;if(Ue(u,o)){const f=We(i,l),c=$e(u,o);return X1(t,e,n,f,c,s,r)}else{const f=gl(i,l),c=s2[f],g=n.direction[c]>=0;let _,d;g?(_=rn(i),d=je(i,l)):(_=je(i,l),d=rn(i));const x=ei(_,a,n,s,r)?tl(_,t,e,n,s,r):null;if(x){const T=x.point[c];if(g?T<=a[d+f]:T>=a[d+f+3])return x}const v=ei(d,a,n,s,r)?tl(d,t,e,n,s,r):null;return x&&v?x.distance<=v.distance?x:v:x||v||null}}const Ar=new Be,Gi=new yn,Wi=new yn,Ls=new Ut,Gc=new ze,Rr=new ze;function a2(i,t,e,n){se.setBuffer(i._roots[t]);const s=el(0,i,e,n);return se.clearBuffer(),s}function el(i,t,e,n,s=null){const{float32Array:r,uint16Array:a,uint32Array:o}=se;let l=i*2;if(s===null&&(e.boundingBox||e.computeBoundingBox(),Gc.set(e.boundingBox.min,e.boundingBox.max,n),s=Gc),Ue(l,a)){const h=t.geometry,f=h.index,c=h.attributes.position,m=e.index,g=e.attributes.position,_=We(i,o),d=$e(l,a);if(Ls.copy(n).invert(),e.boundsTree)return ce(i,r,Rr),Rr.matrix.copy(Ls),Rr.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:x=>Rr.intersectsBox(x),intersectsTriangle:x=>{x.a.applyMatrix4(n),x.b.applyMatrix4(n),x.c.applyMatrix4(n),x.needsUpdate=!0;for(let y=_,v=d+_;y<v;y++)if(me(Wi,3*t.resolveTriangleIndex(y),f,c),Wi.needsUpdate=!0,x.intersectsTriangle(Wi))return!0;return!1}});for(let p=_,x=d+_;p<x;p++){const y=t.resolveTriangleIndex(p);me(Gi,3*y,f,c),Gi.a.applyMatrix4(Ls),Gi.b.applyMatrix4(Ls),Gi.c.applyMatrix4(Ls),Gi.needsUpdate=!0;for(let v=0,T=m.count;v<T;v+=3)if(me(Wi,v,m,g),Wi.needsUpdate=!0,Gi.intersectsTriangle(Wi))return!0}}else{const h=i+8,f=o[i+6];return ce(h,r,Ar),!!(s.intersectsBox(Ar)&&el(h,t,e,n,s)||(ce(f,r,Ar),s.intersectsBox(Ar)&&el(f,t,e,n,s)))}}const Cr=new Ut,Ka=new ze,Fs=new ze,o2=new D,l2=new D,c2=new D,u2=new D;function h2(i,t,e,n={},s={},r=0,a=1/0){t.boundingBox||t.computeBoundingBox(),Ka.set(t.boundingBox.min,t.boundingBox.max,e),Ka.needsUpdate=!0;const o=i.geometry,l=o.attributes.position,u=o.index,h=t.attributes.position,f=t.index,c=an.getPrimitive(),m=an.getPrimitive();let g=o2,_=l2,d=null,p=null;s&&(d=c2,p=u2);let x=1/0,y=null,v=null;return Cr.copy(e).invert(),Fs.matrix.copy(Cr),i.shapecast({boundsTraverseOrder:T=>Ka.distanceToBox(T),intersectsBounds:(T,A,w)=>w<x&&w<a?(A&&(Fs.min.copy(T.min),Fs.max.copy(T.max),Fs.needsUpdate=!0),!0):!1,intersectsRange:(T,A)=>{if(t.boundsTree){const w=t.boundsTree;return w.shapecast({boundsTraverseOrder:P=>Fs.distanceToBox(P),intersectsBounds:(P,b,M)=>M<x&&M<a,intersectsRange:(P,b)=>{for(let M=P,C=P+b;M<C;M++){const F=w.resolveTriangleIndex(M);me(m,3*F,f,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let L=T,B=T+A;L<B;L++){const G=i.resolveTriangleIndex(L);me(c,3*G,u,l),c.needsUpdate=!0;const H=c.distanceToTriangle(m,g,d);if(H<x&&(_.copy(g),p&&p.copy(d),x=H,y=L,v=M),H<r)return!0}}}})}else{const w=bs(t);for(let P=0,b=w;P<b;P++){me(m,3*P,f,h),m.a.applyMatrix4(e),m.b.applyMatrix4(e),m.c.applyMatrix4(e),m.needsUpdate=!0;for(let M=T,C=T+A;M<C;M++){const F=i.resolveTriangleIndex(M);me(c,3*F,u,l),c.needsUpdate=!0;const L=c.distanceToTriangle(m,g,d);if(L<x&&(_.copy(g),p&&p.copy(d),x=L,y=M,v=P),L<r)return!0}}}}}),an.releasePrimitive(c),an.releasePrimitive(m),x===1/0?null:(n.point?n.point.copy(_):n.point=_.clone(),n.distance=x,n.faceIndex=y,s&&(s.point?s.point.copy(p):s.point=p.clone(),s.point.applyMatrix4(Cr),_.applyMatrix4(Cr),s.distance=_.sub(s.point).length(),s.faceIndex=v),n)}function f2(){return typeof SharedArrayBuffer<"u"}const ks=new se.constructor,jr=new se.constructor,jn=new vl(()=>new Be),Xi=new Be,qi=new Be,Za=new Be,Ja=new Be;let Qa=!1;function d2(i,t,e,n){if(Qa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Qa=!0;const s=i._roots,r=t._roots;let a,o=0,l=0;const u=new Ut().copy(e).invert();for(let h=0,f=s.length;h<f;h++){ks.setBuffer(s[h]),l=0;const c=jn.getPrimitive();ce(0,ks.float32Array,c),c.applyMatrix4(u);for(let m=0,g=r.length;m<g&&(jr.setBuffer(r[m]),a=_n(0,0,e,u,n,o,l,0,0,c),jr.clearBuffer(),l+=r[m].length,!a);m++);if(jn.releasePrimitive(c),ks.clearBuffer(),o+=s[h].length,a)break}return Qa=!1,a}function _n(i,t,e,n,s,r=0,a=0,o=0,l=0,u=null,h=!1){let f,c;h?(f=jr,c=ks):(f=ks,c=jr);const m=f.float32Array,g=f.uint32Array,_=f.uint16Array,d=c.float32Array,p=c.uint32Array,x=c.uint16Array,y=i*2,v=t*2,T=Ue(y,_),A=Ue(v,x);let w=!1;if(A&&T)h?w=s(We(t,p),$e(t*2,x),We(i,g),$e(i*2,_),l,a+t,o,r+i):w=s(We(i,g),$e(i*2,_),We(t,p),$e(t*2,x),o,r+i,l,a+t);else if(A){const P=jn.getPrimitive();ce(t,d,P),P.applyMatrix4(e);const b=rn(i),M=je(i,g);ce(b,m,Xi),ce(M,m,qi);const C=P.intersectsBox(Xi),F=P.intersectsBox(qi);w=C&&_n(t,b,n,e,s,a,r,l,o+1,P,!h)||F&&_n(t,M,n,e,s,a,r,l,o+1,P,!h),jn.releasePrimitive(P)}else{const P=rn(t),b=je(t,p);ce(P,d,Za),ce(b,d,Ja);const M=u.intersectsBox(Za),C=u.intersectsBox(Ja);if(M&&C)w=_n(i,P,e,n,s,r,a,o,l+1,u,h)||_n(i,b,e,n,s,r,a,o,l+1,u,h);else if(M)if(T)w=_n(i,P,e,n,s,r,a,o,l+1,u,h);else{const F=jn.getPrimitive();F.copy(Za).applyMatrix4(e);const L=rn(i),B=je(i,g);ce(L,m,Xi),ce(B,m,qi);const G=F.intersectsBox(Xi),H=F.intersectsBox(qi);w=G&&_n(P,L,n,e,s,a,r,l,o+1,F,!h)||H&&_n(P,B,n,e,s,a,r,l,o+1,F,!h),jn.releasePrimitive(F)}else if(C)if(T)w=_n(i,b,e,n,s,r,a,o,l+1,u,h);else{const F=jn.getPrimitive();F.copy(Ja).applyMatrix4(e);const L=rn(i),B=je(i,g);ce(L,m,Xi),ce(B,m,qi);const G=F.intersectsBox(Xi),H=F.intersectsBox(qi);w=G&&_n(b,L,n,e,s,a,r,l,o+1,F,!h)||H&&_n(b,B,n,e,s,a,r,l,o+1,F,!h),jn.releasePrimitive(F)}}return w}const Pr=new ze,Wc=new Be,p2={strategy:Ku,maxDepth:40,maxLeafTris:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null};class xl{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,s=t._roots,r=t._indirectBuffer,a=n.getIndex();let o;return e.cloneBuffers?o={roots:s.map(l=>l.slice()),index:a?a.array.slice():null,indirectBuffer:r?r.slice():null}:o={roots:s,index:a?a.array:null,indirectBuffer:r},o}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:s,roots:r,indirectBuffer:a}=t,o=new xl(e,{...n,[Wa]:!0});if(o._roots=r,o._indirectBuffer=a||null,n.setIndex){const l=e.getIndex();if(l===null){const u=new ue(t.index,1,!1);e.setIndex(u)}else l.array!==s&&(l.array.set(s),l.needsUpdate=!0)}return o}get indirect(){return!!this._indirectBuffer}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("MeshBVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("MeshBVH: Only BufferGeometries are supported.");if(e=Object.assign({...p2,[Wa]:!1},e),e.useSharedArrayBuffer&&!f2())throw new Error("MeshBVH: SharedArrayBuffer is not available.");this.geometry=t,this._roots=null,this._indirectBuffer=null,e[Wa]||(C1(this,e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Be))),this.resolveTriangleIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n}refit(t=null){return(this.indirect?n2:G1)(this,t)}traverse(t,e=0){const n=this._roots[e],s=new Uint32Array(n),r=new Uint16Array(n);a(0);function a(o,l=0){const u=o*2,h=r[u+15]===ra;if(h){const f=s[o+6],c=r[u+14];t(l,h,new Float32Array(n,o*4,6),f,c)}else{const f=o+Qn/4,c=s[o+6],m=s[o+7];t(l,h,new Float32Array(n,o*4,6),m)||(a(f,l+1),a(c,l+1))}}}raycast(t,e=xn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=[],l=e.isMaterial,u=Array.isArray(e),h=a.groups,f=l?e.side:e,c=this.indirect?i2:Y1;for(let m=0,g=r.length;m<g;m++){const _=u?e[h[m].materialIndex].side:f,d=o.length;if(c(this,m,_,t,o,n,s),u){const p=h[m].materialIndex;for(let x=d,y=o.length;x<y;x++)o[x].face.materialIndex=p}}return o}raycastFirst(t,e=xn,n=0,s=1/0){const r=this._roots,a=this.geometry,o=e.isMaterial,l=Array.isArray(e);let u=null;const h=a.groups,f=o?e.side:e,c=this.indirect?r2:j1;for(let m=0,g=r.length;m<g;m++){const _=l?e[h[m].materialIndex].side:f,d=c(this,m,_,t,n,s);d!=null&&(u==null||d.distance<u.distance)&&(u=d,l&&(d.face.materialIndex=h[m].materialIndex))}return u}intersectsGeometry(t,e){let n=!1;const s=this._roots,r=this.indirect?a2:K1;for(let a=0,o=s.length;a<o&&(n=r(this,a,t,e),!n);a++);return n}shapecast(t){const e=an.getPrimitive(),n=this.indirect?q1:V1;let{boundsTraverseOrder:s,intersectsBounds:r,intersectsRange:a,intersectsTriangle:o}=t;if(a&&o){const f=a;a=(c,m,g,_,d)=>f(c,m,g,_,d)?!0:n(c,m,this,o,g,_,e)}else a||(o?a=(f,c,m,g)=>n(f,c,this,o,m,g,e):a=(f,c,m)=>m);let l=!1,u=0;const h=this._roots;for(let f=0,c=h.length;f<c;f++){const m=h[f];if(l=U1(this,f,r,a,s,u),l)break;u+=m.byteLength}return an.releasePrimitive(e),l}bvhcast(t,e,n){let{intersectsRanges:s,intersectsTriangles:r}=n;const a=an.getPrimitive(),o=this.geometry.index,l=this.geometry.attributes.position,u=this.indirect?g=>{const _=this.resolveTriangleIndex(g);me(a,_*3,o,l)}:g=>{me(a,g*3,o,l)},h=an.getPrimitive(),f=t.geometry.index,c=t.geometry.attributes.position,m=t.indirect?g=>{const _=t.resolveTriangleIndex(g);me(h,_*3,f,c)}:g=>{me(h,g*3,f,c)};if(r){const g=(_,d,p,x,y,v,T,A)=>{for(let w=p,P=p+x;w<P;w++){m(w),h.a.applyMatrix4(e),h.b.applyMatrix4(e),h.c.applyMatrix4(e),h.needsUpdate=!0;for(let b=_,M=_+d;b<M;b++)if(u(b),a.needsUpdate=!0,r(a,h,b,w,y,v,T,A))return!0}return!1};if(s){const _=s;s=function(d,p,x,y,v,T,A,w){return _(d,p,x,y,v,T,A,w)?!0:g(d,p,x,y,v,T,A,w)}}else s=g}return d2(this,t,e,s)}intersectsBox(t,e){return Pr.set(t.min,t.max,e),Pr.needsUpdate=!0,this.shapecast({intersectsBounds:n=>Pr.intersectsBox(n),intersectsTriangle:n=>Pr.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},s={},r=0,a=1/0){return(this.indirect?h2:e2)(this,t,e,n,s,r,a)}closestPointToPoint(t,e={},n=0,s=1/0){return N1(this,t,e,n,s)}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ce(0,new Float32Array(n),Wc),t.union(Wc)}),t}}function m2(i){switch(i){case 1:return"R";case 2:return"RG";case 3:return"RGBA";case 4:return"RGBA"}throw new Error}function g2(i){switch(i){case 1:return ds;case 2:return ta;case 3:return Zt;case 4:return Zt}}function Xc(i){switch(i){case 1:return Qr;case 2:return Gs;case 3:return ps;case 4:return ps}}class s0 extends ln{constructor(){super(),this.minFilter=Bt,this.magFilter=Bt,this.generateMipmaps=!1,this.overrideItemSize=null,this._forcedType=null}updateFrom(t){const e=this.overrideItemSize,n=t.itemSize,s=t.count;if(e!==null){if(n*s%e!==0)throw new Error("VertexAttributeTexture: overrideItemSize must divide evenly into buffer length.");t.itemSize=e,t.count=s*n/e}const r=t.itemSize,a=t.count,o=t.normalized,l=t.array.constructor,u=l.BYTES_PER_ELEMENT;let h=this._forcedType,f=r;if(h===null)switch(l){case Float32Array:h=ne;break;case Uint8Array:case Uint16Array:case Uint32Array:h=on;break;case Int8Array:case Int16Array:case Int32Array:h=ss;break}let c,m,g,_,d=m2(r);switch(h){case ne:g=1,m=g2(r),o&&u===1?(_=l,d+="8",l===Uint8Array?c=cn:(c=Xr,d+="_SNORM")):(_=Float32Array,d+="32F",c=ne);break;case ss:d+=u*8+"I",g=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Xc(r),u===1?(_=Int8Array,c=Xr):u===2?(_=Int16Array,c=rl):(_=Int32Array,c=ss);break;case on:d+=u*8+"UI",g=o?Math.pow(2,l.BYTES_PER_ELEMENT*8-1):1,m=Xc(r),u===1?(_=Uint8Array,c=cn):u===2?(_=Uint16Array,c=us):(_=Uint32Array,c=on);break}f===3&&(m===Zt||m===ps)&&(f=4);const p=Math.ceil(Math.sqrt(a))||1,x=f*p*p,y=new _(x),v=t.normalized;t.normalized=!1;for(let T=0;T<a;T++){const A=f*T;y[A]=t.getX(T)/g,r>=2&&(y[A+1]=t.getY(T)/g),r>=3&&(y[A+2]=t.getZ(T)/g,f===4&&(y[A+3]=1)),r>=4&&(y[A+3]=t.getW(T)/g)}t.normalized=v,this.internalFormat=d,this.format=m,this.type=c,this.image.width=p,this.image.height=p,this.image.data=y,this.needsUpdate=!0,this.dispose(),t.itemSize=n,t.count=s}}class r0 extends s0{constructor(){super(),this._forcedType=on}}class a0 extends s0{constructor(){super(),this._forcedType=ne}}class _2{constructor(){this.index=new r0,this.position=new a0,this.bvhBounds=new ln,this.bvhContents=new ln,this._cachedIndexAttr=null,this.index.overrideItemSize=3}updateFrom(t){const{geometry:e}=t;if(x2(t,this.bvhBounds,this.bvhContents),this.position.updateFrom(e.attributes.position),t.indirect){const n=t._indirectBuffer;if(this._cachedIndexAttr===null||this._cachedIndexAttr.count!==n.length)if(e.index)this._cachedIndexAttr=e.index.clone();else{const s=Qu(Ju(e));this._cachedIndexAttr=new ue(s,1,!1)}v2(e,n,this._cachedIndexAttr),this.index.updateFrom(this._cachedIndexAttr)}else this.index.updateFrom(e.index)}dispose(){const{index:t,position:e,bvhBounds:n,bvhContents:s}=this;t&&t.dispose(),e&&e.dispose(),n&&n.dispose(),s&&s.dispose()}}function v2(i,t,e){const n=e.array,s=i.index?i.index.array:null;for(let r=0,a=t.length;r<a;r++){const o=3*r,l=3*t[r];for(let u=0;u<3;u++)n[o+u]=s?s[l+u]:l+u}}function x2(i,t,e){const n=i._roots;if(n.length!==1)throw new Error("MeshBVHUniformStruct: Multi-root BVHs not supported.");const s=n[0],r=new Uint16Array(s),a=new Uint32Array(s),o=new Float32Array(s),l=s.byteLength/Qn,u=2*Math.ceil(Math.sqrt(l/2)),h=new Float32Array(4*u*u),f=Math.ceil(Math.sqrt(l)),c=new Uint32Array(2*f*f);for(let m=0;m<l;m++){const g=m*Qn/4,_=g*2,d=g;for(let p=0;p<3;p++)h[8*m+0+p]=o[d+0+p],h[8*m+4+p]=o[d+3+p];if(Ue(_,r)){const p=$e(_,r),x=We(g,a),y=4294901760|p;c[m*2+0]=y,c[m*2+1]=x}else{const p=4*je(g,a)/Qn,x=gl(g,a);c[m*2+0]=x,c[m*2+1]=p}}t.image.data=h,t.image.width=u,t.image.height=u,t.format=Zt,t.type=ne,t.internalFormat="RGBA32F",t.minFilter=Bt,t.magFilter=Bt,t.generateMipmaps=!1,t.needsUpdate=!0,t.dispose(),e.image.data=c,e.image.width=f,e.image.height=f,e.format=Gs,e.type=on,e.internalFormat="RG32UI",e.minFilter=Bt,e.magFilter=Bt,e.generateMipmaps=!1,e.needsUpdate=!0,e.dispose()}const y2=`

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
`,M2=`

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
`,b2=`
struct BVH {

	usampler2D index;
	sampler2D position;

	sampler2D bvhBounds;
	usampler2D bvhContents;

};
`;function o0(i,t,e=0){if(i.isInterleavedBufferAttribute){const n=i.itemSize;for(let s=0,r=i.count;s<r;s++){const a=s+e;t.setX(a,i.getX(s)),n>=2&&t.setY(a,i.getY(s)),n>=3&&t.setZ(a,i.getZ(s)),n>=4&&t.setW(a,i.getW(s))}}else{const n=t.array,s=n.constructor,r=n.BYTES_PER_ELEMENT*i.itemSize*e;new s(n.buffer,r,i.array.length).set(i.array)}}function Os(i,t=null){const e=i.array.constructor,n=i.normalized,s=i.itemSize,r=t===null?i.count:t;return new ue(new e(s*r),s,n)}function Ji(i,t){if(!i&&!t)return!0;if(!!i!=!!t)return!1;const e=i.count===t.count,n=i.normalized===t.normalized,s=i.array.constructor===t.array.constructor,r=i.itemSize===t.itemSize;return!(!e||!n||!s||!r)}function S2(i){const t=i[0].index!==null,e=new Set(Object.keys(i[0].attributes));if(!i[0].getAttribute("position"))throw new Error("StaticGeometryGenerator: position attribute is required.");for(let n=0;n<i.length;++n){const s=i[n];let r=0;if(t!==(s.index!==null))throw new Error("StaticGeometryGenerator: All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them.");for(const a in s.attributes){if(!e.has(a))throw new Error('StaticGeometryGenerator: All geometries must have compatible attributes; make sure "'+a+'" attribute exists among all geometries, or in none of them.');r++}if(r!==e.size)throw new Error("StaticGeometryGenerator: All geometries must have the same number of attributes.")}}function T2(i){let t=0;for(let e=0,n=i.length;e<n;e++)t+=i[e].getIndex().count;return t}function E2(i){let t=0;for(let e=0,n=i.length;e<n;e++)t+=i[e].getAttribute("position").count;return t}function w2(i,t,e){i.index&&i.index.count!==t&&i.setIndex(null);const n=i.attributes;for(const s in n)n[s].count!==e&&i.deleteAttribute(s)}function A2(i,t={},e=new Se){const{useGroups:n=!1,forceUpdate:s=!1,skipAssigningAttributes:r=[],overwriteIndex:a=!0}=t;S2(i);const o=i[0].index!==null,l=o?T2(i):-1,u=E2(i);if(w2(e,l,u),n){let f=0;for(let c=0,m=i.length;c<m;c++){const g=i[c];let _;o?_=g.getIndex().count:_=g.getAttribute("position").count,e.addGroup(f,_,c),f+=_}}if(o){let f=!1;if(e.index||(e.setIndex(new ue(new Uint32Array(l),1,!1)),f=!0),f||a){let c=0,m=0;const g=e.getIndex();for(let _=0,d=i.length;_<d;_++){const p=i[_],x=p.getIndex();if(!(!s&&!f&&r[_]))for(let v=0;v<x.count;++v)g.setX(c+v,x.getX(v)+m);c+=x.count,m+=p.getAttribute("position").count}}}const h=Object.keys(i[0].attributes);for(let f=0,c=h.length;f<c;f++){let m=!1;const g=h[f];if(!e.getAttribute(g)){const p=i[0].getAttribute(g);e.setAttribute(g,Os(p,u)),m=!0}let _=0;const d=e.getAttribute(g);for(let p=0,x=i.length;p<x;p++){const y=i[p],v=!s&&!m&&r[p],T=y.getAttribute(g);v||o0(T,d,_),_+=T.count}}}function R2(i,t,e){const n=i.index,r=i.attributes.position.count,a=n?n.count:r;let o=i.groups;o.length===0&&(o=[{count:a,start:0,materialIndex:0}]);let l=i.getAttribute("materialIndex");if(!l||l.count!==r){let h;e.length<=255?h=new Uint8Array(r):h=new Uint16Array(r),l=new ue(h,1,!1),i.deleteAttribute("materialIndex"),i.setAttribute("materialIndex",l)}const u=l.array;for(let h=0;h<o.length;h++){const f=o[h],c=f.start,m=f.count,g=Math.min(m,a-c),_=Array.isArray(t)?t[f.materialIndex]:t,d=e.indexOf(_);for(let p=0;p<g;p++){let x=c+p;n&&(x=n.getX(x)),u[x]=d}}}function C2(i,t){if(!i.index){const e=i.attributes.position.count,n=new Array(e);for(let s=0;s<e;s++)n[s]=s;i.setIndex(n)}if(!i.attributes.normal&&t&&t.includes("normal")&&i.computeVertexNormals(),!i.attributes.uv&&t&&t.includes("uv")){const e=i.attributes.position.count;i.setAttribute("uv",new ue(new Float32Array(e*2),2,!1))}if(!i.attributes.uv2&&t&&t.includes("uv2")){const e=i.attributes.position.count;i.setAttribute("uv2",new ue(new Float32Array(e*2),2,!1))}if(!i.attributes.tangent&&t&&t.includes("tangent"))if(i.attributes.uv&&i.attributes.normal)i.computeTangents();else{const e=i.attributes.position.count;i.setAttribute("tangent",new ue(new Float32Array(e*4),4,!1))}if(!i.attributes.color&&t&&t.includes("color")){const e=i.attributes.position.count,n=new Float32Array(e*4);n.fill(1),i.setAttribute("color",new ue(n,4))}}function yl(i){let t=0;if(i.byteLength!==0){const e=new Uint8Array(i);for(let n=0;n<i.byteLength;n++){const s=e[n];t=(t<<5)-t+s,t|=0}}return t}function qc(i){let t=i.uuid;const e=Object.values(i.attributes);i.index&&(e.push(i.index),t+=`index|${i.index.version}`);const n=Object.keys(e).sort();for(const s of n){const r=e[s];t+=`${s}_${r.version}|`}return t}function Yc(i){const t=i.skeleton;return t?(t.boneTexture||t.computeBoneTexture(),`${yl(t.boneTexture.image.data.buffer)}_${t.boneTexture.uuid}`):null}class P2{constructor(t=null){this.matrixWorld=new Ut,this.geometryHash=null,this.skeletonHash=null,this.primitiveCount=-1,t!==null&&this.updateFrom(t)}updateFrom(t){const e=t.geometry,n=(e.index?e.index.count:e.attributes.position.count)/3;this.matrixWorld.copy(t.matrixWorld),this.geometryHash=qc(e),this.primitiveCount=n,this.skeletonHash=Yc(t)}didChange(t){const e=t.geometry,n=(e.index?e.index.count:e.attributes.position.count)/3;return!(this.matrixWorld.equals(t.matrixWorld)&&this.geometryHash===qc(e)&&this.skeletonHash===Yc(t)&&this.primitiveCount===n)}}const di=new D,pi=new D,mi=new D,$c=new Kt,Dr=new D,to=new D,jc=new Kt,Kc=new Kt,Ir=new Ut,Zc=new Ut;function Jc(i,t,e){const n=i.skeleton,s=i.geometry,r=n.bones,a=n.boneInverses;jc.fromBufferAttribute(s.attributes.skinIndex,t),Kc.fromBufferAttribute(s.attributes.skinWeight,t),Ir.elements.fill(0);for(let o=0;o<4;o++){const l=Kc.getComponent(o);if(l!==0){const u=jc.getComponent(o);Zc.multiplyMatrices(r[u].matrixWorld,a[u]),D2(Ir,Zc,l)}}return Ir.multiply(i.bindMatrix).premultiply(i.bindMatrixInverse),e.transformDirection(Ir),e}function eo(i,t,e,n,s){Dr.set(0,0,0);for(let r=0,a=i.length;r<a;r++){const o=t[r],l=i[r];o!==0&&(to.fromBufferAttribute(l,n),e?Dr.addScaledVector(to,o):Dr.addScaledVector(to.sub(s),o))}s.add(Dr)}function D2(i,t,e){const n=i.elements,s=t.elements;for(let r=0,a=s.length;r<a;r++)n[r]+=s[r]*e}function I2(i){const{index:t,attributes:e}=i;if(t)for(let n=0,s=t.count;n<s;n+=3){const r=t.getX(n),a=t.getX(n+2);t.setX(n,a),t.setX(n+2,r)}else for(const n in e){const s=e[n],r=s.itemSize;for(let a=0,o=s.count;a<o;a+=3)for(let l=0;l<r;l++){const u=s.getComponent(a,l),h=s.getComponent(a+2,l);s.setComponent(a,l,h),s.setComponent(a+2,l,u)}}return i}function L2(i,t={},e=new Se){t={applyWorldTransforms:!0,attributes:[],...t};const n=i.geometry,s=t.applyWorldTransforms,r=t.attributes.includes("normal"),a=t.attributes.includes("tangent"),o=n.attributes,l=e.attributes;for(const x in e.attributes)(!t.attributes.includes(x)||!(x in n.attributes))&&e.deleteAttribute(x);!e.index&&n.index&&(e.index=n.index.clone()),l.position||e.setAttribute("position",Os(o.position)),r&&!l.normal&&o.normal&&e.setAttribute("normal",Os(o.normal)),a&&!l.tangent&&o.tangent&&e.setAttribute("tangent",Os(o.tangent)),Ji(n.index,e.index),Ji(o.position,l.position),r&&Ji(o.normal,l.normal),a&&Ji(o.tangent,l.tangent);const u=o.position,h=r?o.normal:null,f=a?o.tangent:null,c=n.morphAttributes.position,m=n.morphAttributes.normal,g=n.morphAttributes.tangent,_=n.morphTargetsRelative,d=i.morphTargetInfluences,p=new Pt;p.getNormalMatrix(i.matrixWorld),n.index&&e.index.array.set(n.index.array);for(let x=0,y=o.position.count;x<y;x++)di.fromBufferAttribute(u,x),h&&pi.fromBufferAttribute(h,x),f&&($c.fromBufferAttribute(f,x),mi.fromBufferAttribute(f,x)),d&&(c&&eo(c,d,_,x,di),m&&eo(m,d,_,x,pi),g&&eo(g,d,_,x,mi)),i.isSkinnedMesh&&(i.applyBoneTransform(x,di),h&&Jc(i,x,pi),f&&Jc(i,x,mi)),s&&di.applyMatrix4(i.matrixWorld),l.position.setXYZ(x,di.x,di.y,di.z),h&&(s&&pi.applyNormalMatrix(p),l.normal.setXYZ(x,pi.x,pi.y,pi.z)),f&&(s&&mi.transformDirection(i.matrixWorld),l.tangent.setXYZW(x,mi.x,mi.y,mi.z,$c.w));for(const x in t.attributes){const y=t.attributes[x];y==="position"||y==="tangent"||y==="normal"||!(y in o)||(l[y]||e.setAttribute(y,Os(o[y])),Ji(o[y],l[y]),o0(o[y],l[y]))}return i.matrixWorld.determinant()<0&&I2(e),e}class F2 extends Se{constructor(){super(),this.version=0,this.hash=null,this._diff=new P2}isCompatible(t,e){const n=t.geometry;for(let s=0;s<e.length;s++){const r=e[s],a=n.attributes[r],o=this.attributes[r];if(a&&!Ji(a,o))return!1}return!0}updateFrom(t,e){const n=this._diff;return n.didChange(t)?(L2(t,e,this),n.updateFrom(t),this.version++,this.hash=`${this.uuid}_${this.version}`,!0):!1}}const nl=0,l0=1,c0=2;function U2(i,t){for(let e=0,n=i.length;e<n;e++)i[e].traverseVisible(r=>{r.isMesh&&t(r)})}function N2(i){const t=[];for(let e=0,n=i.length;e<n;e++){const s=i[e];Array.isArray(s.material)?t.push(...s.material):t.push(s.material)}return t}function O2(i,t,e){if(i.length===0){t.setIndex(null);const n=t.attributes;for(const s in n)t.deleteAttribute(s);for(const s in e.attributes)t.setAttribute(e.attributes[s],new ue(new Float32Array(0),4,!1))}else A2(i,e,t);for(const n in t.attributes)t.attributes[n].needsUpdate=!0}class B2{constructor(t){this.objects=null,this.useGroups=!0,this.applyWorldTransforms=!0,this.generateMissingAttributes=!0,this.overwriteIndex=!0,this.attributes=["position","normal","color","tangent","uv","uv2"],this._intermediateGeometry=new Map,this._geometryMergeSets=new WeakMap,this._mergeOrder=[],this._dummyMesh=null,this.setObjects(t||[])}_getDummyMesh(){if(!this._dummyMesh){const t=new ul,e=new Se;e.setAttribute("position",new ue(new Float32Array(9),3)),this._dummyMesh=new Ae(e,t)}return this._dummyMesh}_getMeshes(){const t=[];return U2(this.objects,e=>{t.push(e)}),t.sort((e,n)=>e.uuid>n.uuid?1:e.uuid<n.uuid?-1:0),t.length===0&&t.push(this._getDummyMesh()),t}_updateIntermediateGeometries(){const{_intermediateGeometry:t}=this,e=this._getMeshes(),n=new Set(t.keys()),s={attributes:this.attributes,applyWorldTransforms:this.applyWorldTransforms};for(let r=0,a=e.length;r<a;r++){const o=e[r],l=o.uuid;n.delete(l);let u=t.get(l);(!u||!u.isCompatible(o,this.attributes))&&(u&&u.dispose(),u=new F2,t.set(l,u)),u.updateFrom(o,s)&&this.generateMissingAttributes&&C2(u,this.attributes)}n.forEach(r=>{t.delete(r)})}setObjects(t){Array.isArray(t)?this.objects=[...t]:this.objects=[t]}generate(t=new Se){const{useGroups:e,overwriteIndex:n,_intermediateGeometry:s,_geometryMergeSets:r}=this,a=this._getMeshes(),o=[],l=[],u=r.get(t)||[];this._updateIntermediateGeometries();let h=!1;a.length!==u.length&&(h=!0);for(let c=0,m=a.length;c<m;c++){const g=a[c],_=s.get(g.uuid);l.push(_);const d=u[c];!d||d.uuid!==_.uuid?(o.push(!1),h=!0):d.version!==_.version?o.push(!1):o.push(!0)}O2(l,t,{useGroups:e,forceUpdate:h,skipAssigningAttributes:o,overwriteIndex:n}),h&&t.dispose(),r.set(t,l.map(c=>({version:c.version,uuid:c.uuid})));let f=nl;return h?f=c0:o.includes(!1)&&(f=l0),{changeType:f,materials:N2(a),geometry:t}}}function z2(i){const t=new Set;for(let e=0,n=i.length;e<n;e++){const s=i[e];for(const r in s){const a=s[r];a&&a.isTexture&&t.add(a)}}return Array.from(t)}function k2(i){const t=[],e=new Set;for(let s=0,r=i.length;s<r;s++)i[s].traverse(a=>{a.visible&&(a.isRectAreaLight||a.isSpotLight||a.isPointLight||a.isDirectionalLight)&&(t.push(a),a.iesMap&&e.add(a.iesMap))});const n=Array.from(e).sort((s,r)=>s.uuid<r.uuid?1:s.uuid>r.uuid?-1:0);return{lights:t,iesTextures:n}}class H2{get initialized(){return!!this.bvh}constructor(t){this.bvhOptions={},this.attributes=["position","normal","tangent","color","uv","uv2"],this.generateBVH=!0,this.bvh=null,this.geometry=new Se,this.staticGeometryGenerator=new B2(t),this._bvhWorker=null,this._pendingGenerate=null,this._buildAsync=!1}setObjects(t){this.staticGeometryGenerator.setObjects(t)}setBVHWorker(t){this._bvhWorker=t}async generateAsync(t=null){if(!this._bvhWorker)throw new Error('PathTracingSceneGenerator: "setBVHWorker" must be called before "generateAsync" can be called.');if(this.bvh instanceof Promise)return this._pendingGenerate||(this._pendingGenerate=new Promise(async()=>(await this.bvh,this._pendingGenerate=null,this.generateAsync(t)))),this._pendingGenerate;{this._buildAsync=!0;const e=this.generate(t);return this._buildAsync=!1,e.bvh=this.bvh=await e.bvh,e}}generate(t=null){const{staticGeometryGenerator:e,geometry:n,attributes:s}=this,r=e.objects;e.attributes=s,r.forEach(f=>{f.traverse(c=>{c.isSkinnedMesh&&c.skeleton&&c.skeleton.update()})});const a=e.generate(n),o=a.materials,l=z2(o),{lights:u,iesTextures:h}=k2(r);if(a.changeType!==nl&&R2(n,o,o),this.generateBVH){if(this.bvh instanceof Promise)throw new Error("PathTracingSceneGenerator: BVH is already building asynchronously.");if(a.changeType===c0){const f={strategy:Zu,maxLeafTris:1,indirect:!0,onProgress:t,...this.bvhOptions};this._buildAsync?this.bvh=this._bvhWorker.generate(n,f):this.bvh=new xl(n,f)}else a.changeType===l0&&this.bvh.refit()}return{bvhChanged:a.changeType!==nl,bvh:this.bvh,lights:u,iesTextures:h,geometry:n,materials:o,textures:l,objects:r}}}const V2=new Gu(-1,1,1,-1,0,1);class G2 extends Se{constructor(){super(),this.setAttribute("position",new ye([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new ye([0,2,0,0,2,0],2))}}const W2=new G2;class vs{constructor(t){this._mesh=new Ae(W2,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,V2)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Ml extends un{set needsUpdate(t){super.needsUpdate=!0,this.dispatchEvent({type:"recompilation"})}constructor(t){super(t);for(const e in this.uniforms)Object.defineProperty(this,e,{get(){return this.uniforms[e].value},set(n){this.uniforms[e].value=n}})}setDefine(t,e=void 0){if(e==null){if(t in this.defines)return delete this.defines[t],this.needsUpdate=!0,!0}else if(this.defines[t]!==e)return this.defines[t]=e,this.needsUpdate=!0,!0;return!1}}class X2 extends Ml{constructor(t){super({blending:Ke,uniforms:{target1:{value:null},target2:{value:null},opacity:{value:1}},vertexShader:`

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

				}`}),this.setValues(t)}}function Lr(i=1){let t="uint";return i>1&&(t="uvec"+i),`
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
	`}function Fr(i=1){let t="uint",e="float",n="",s=".r",r="1u";return i>1&&(t="uvec"+i,e="vec"+i,n=i+"",i===2?(s=".rg",r="uvec2( 1u, 2u )"):i===3?(s=".rgb",r="uvec3( 1u, 2u, 3u )"):(s="",r="uvec4( 1u, 2u, 3u, 4u )")),`

		${e} sobol${n}( int effect ) {

			uint seed = sobolGetSeed( sobolBounceIndex, uint( effect ) );
			uint index = sobolPathIndex;

			uint shuffle_seed = sobolHashCombine( seed, 0u );
			uint shuffled_index = nestedUniformScrambleBase2( sobolReverseBits( index ), shuffle_seed );
			${e} sobol_pt = sobolGetTexturePoint( shuffled_index )${s};
			${t} result = ${t}( sobol_pt * 16777216.0 );

			${t} seed2 = sobolHashCombine( seed, ${r} );
			result = nestedUniformScrambleBase2( result, seed2 );

			return SOBOL_FACTOR * ${e}( result >> 8 );

		}
	`}const u0=`

	// Utils
	const float SOBOL_FACTOR = 1.0 / 16777216.0;
	const uint SOBOL_MAX_POINTS = 256u * 256u;

	${Lr(1)}
	${Lr(2)}
	${Lr(3)}
	${Lr(4)}

	uint sobolHash( uint x ) {

		// finalizer from murmurhash3
		x ^= x >> 16;
		x *= 0x85ebca6bu;
		x ^= x >> 13;
		x *= 0xc2b2ae35u;
		x ^= x >> 16;
		return x;

	}

`,q2=`

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

`,Y2=`

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

	${Fr(1)}
	${Fr(2)}
	${Fr(3)}
	${Fr(4)}

`;class $2 extends Ml{constructor(){super({blending:Ke,uniforms:{resolution:{value:new ut}},vertexShader:`

				varying vec2 vUv;
				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}
			`,fragmentShader:`

				${u0}
				${q2}

				varying vec2 vUv;
				uniform vec2 resolution;
				void main() {

					uint index = uint( gl_FragCoord.y ) * uint( resolution.x ) + uint( gl_FragCoord.x );
					gl_FragColor = generateSobolPoint( index );

				}
			`})}}class j2{generate(t,e=256){const n=new Ze(e,e,{type:ne,format:Zt,minFilter:Bt,magFilter:Bt,generateMipmaps:!1}),s=t.getRenderTarget();t.setRenderTarget(n);const r=new vs(new $2);return r.material.resolution.set(e,e),r.render(t),t.setRenderTarget(s),r.dispose(),n}}class K2 extends Le{set bokehSize(t){this.fStop=this.getFocalLength()/t}get bokehSize(){return this.getFocalLength()/this.fStop}constructor(...t){super(...t),this.fStop=1.4,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=25,this.anamorphicRatio=1}copy(t,e){return super.copy(t,e),this.fStop=t.fStop,this.apertureBlades=t.apertureBlades,this.apertureRotation=t.apertureRotation,this.focusDistance=t.focusDistance,this.anamorphicRatio=t.anamorphicRatio,this}}class Z2{constructor(){this.bokehSize=0,this.apertureBlades=0,this.apertureRotation=0,this.focusDistance=10,this.anamorphicRatio=1}updateFrom(t){t instanceof K2?(this.bokehSize=t.bokehSize,this.apertureBlades=t.apertureBlades,this.apertureRotation=t.apertureRotation,this.focusDistance=t.focusDistance,this.anamorphicRatio=t.anamorphicRatio):(this.bokehSize=0,this.apertureRotation=0,this.apertureBlades=0,this.focusDistance=10,this.anamorphicRatio=1)}}function no(i){const t=new Uint16Array(i.length);for(let e=0,n=i.length;e<n;++e)t[e]=Fn.toHalfFloat(i[e]);return t}function Qc(i,t,e=0,n=i.length){let s=e,r=e+n-1;for(;s<r;){const a=s+r>>1;i[a]<t?s=a+1:r=a}return s-e}function J2(i,t,e){return .2126*i+.7152*t+.0722*e}function Q2(i,t=Fe){const e=i.clone();e.source=new cl({...e.image});const{width:n,height:s,data:r}=e.image;let a=r;if(e.type!==t){t===Fe?a=new Uint16Array(r.length):a=new Float32Array(r.length);let o;r instanceof Int8Array||r instanceof Int16Array||r instanceof Int32Array?o=2**(8*r.BYTES_PER_ELEMENT-1)-1:o=2**(8*r.BYTES_PER_ELEMENT)-1;for(let l=0,u=r.length;l<u;l++){let h=r[l];e.type===Fe&&(h=Fn.fromHalfFloat(r[l])),e.type!==ne&&e.type!==Fe&&(h/=o),t===Fe&&(a[l]=Fn.toHalfFloat(h))}e.image.data=a,e.type=t}if(e.flipY){const o=a;a=a.slice();for(let l=0;l<s;l++)for(let u=0;u<n;u++){const h=s-l-1,f=4*(l*n+u),c=4*(h*n+u);a[c+0]=o[f+0],a[c+1]=o[f+1],a[c+2]=o[f+2],a[c+3]=o[f+3]}e.flipY=!1,e.image.data=a}return e}class t3{constructor(){const t=new ln(no(new Float32Array([0,0,0,0])),1,1);t.type=Fe,t.format=Zt,t.minFilter=fe,t.magFilter=fe,t.wrapS=vn,t.wrapT=vn,t.generateMipmaps=!1,t.needsUpdate=!0;const e=new ln(no(new Float32Array([0,1])),1,2);e.type=Fe,e.format=ds,e.minFilter=fe,e.magFilter=fe,e.generateMipmaps=!1,e.needsUpdate=!0;const n=new ln(no(new Float32Array([0,0,1,1])),2,2);n.type=Fe,n.format=ds,n.minFilter=fe,n.magFilter=fe,n.generateMipmaps=!1,n.needsUpdate=!0,this.map=t,this.marginalWeights=e,this.conditionalWeights=n,this.totalSum=0}dispose(){this.marginalWeights.dispose(),this.conditionalWeights.dispose(),this.map.dispose()}updateFrom(t){const e=Q2(t);e.wrapS=vn,e.wrapT=Ne;const{width:n,height:s,data:r}=e.image,a=new Float32Array(n*s),o=new Float32Array(n*s),l=new Float32Array(s),u=new Float32Array(s);let h=0,f=0;for(let d=0;d<s;d++){let p=0;for(let x=0;x<n;x++){const y=d*n+x,v=Fn.fromHalfFloat(r[4*y+0]),T=Fn.fromHalfFloat(r[4*y+1]),A=Fn.fromHalfFloat(r[4*y+2]),w=J2(v,T,A);p+=w,h+=w,a[y]=w,o[y]=p}if(p!==0)for(let x=d*n,y=d*n+n;x<y;x++)a[x]/=p,o[x]/=p;f+=p,l[d]=p,u[d]=f}if(f!==0)for(let d=0,p=l.length;d<p;d++)l[d]/=f,u[d]/=f;const c=new Uint16Array(s),m=new Uint16Array(n*s);for(let d=0;d<s;d++){const p=(d+1)/s,x=Qc(u,p);c[d]=Fn.toHalfFloat((x+.5)/s)}for(let d=0;d<s;d++)for(let p=0;p<n;p++){const x=d*n+p,y=(p+1)/n,v=Qc(o,y,d*n,n);m[x]=Fn.toHalfFloat((v+.5)/n)}this.dispose();const{marginalWeights:g,conditionalWeights:_}=this;g.image={width:s,height:1,data:c},g.needsUpdate=!0,_.image={width:n,height:s,data:m},_.needsUpdate=!0,this.totalSum=h,this.map=e}}const io=6,e3=0,n3=1,i3=2,s3=3,r3=4,gn=new D,Ge=new D,tu=new Ut,Yi=new ti,eu=new D,$i=new D,a3=new D(0,1,0);class o3{constructor(){const t=new ln(new Float32Array(4),1,1);t.format=Zt,t.type=ne,t.wrapS=Ne,t.wrapT=Ne,t.generateMipmaps=!1,t.minFilter=Bt,t.magFilter=Bt,this.tex=t,this.count=0}updateFrom(t,e=[]){const n=this.tex,s=Math.max(t.length*io,1),r=Math.ceil(Math.sqrt(s));n.image.width!==r&&(n.dispose(),n.image.data=new Float32Array(r*r*4),n.image.width=r,n.image.height=r);const a=n.image.data;for(let l=0,u=t.length;l<u;l++){const h=t[l],f=l*io*4;let c=0;for(let g=0;g<io*4;g++)a[f+g]=0;h.getWorldPosition(Ge),a[f+c++]=Ge.x,a[f+c++]=Ge.y,a[f+c++]=Ge.z;let m=e3;if(h.isRectAreaLight&&h.isCircular?m=n3:h.isSpotLight?m=i3:h.isDirectionalLight?m=s3:h.isPointLight&&(m=r3),a[f+c++]=m,a[f+c++]=h.color.r,a[f+c++]=h.color.g,a[f+c++]=h.color.b,a[f+c++]=h.intensity,h.getWorldQuaternion(Yi),h.isRectAreaLight)gn.set(h.width,0,0).applyQuaternion(Yi),a[f+c++]=gn.x,a[f+c++]=gn.y,a[f+c++]=gn.z,c++,Ge.set(0,h.height,0).applyQuaternion(Yi),a[f+c++]=Ge.x,a[f+c++]=Ge.y,a[f+c++]=Ge.z,a[f+c++]=gn.cross(Ge).length()*(h.isCircular?Math.PI/4:1);else if(h.isSpotLight){const g=h.radius||0;eu.setFromMatrixPosition(h.matrixWorld),$i.setFromMatrixPosition(h.target.matrixWorld),tu.lookAt(eu,$i,a3),Yi.setFromRotationMatrix(tu),gn.set(1,0,0).applyQuaternion(Yi),a[f+c++]=gn.x,a[f+c++]=gn.y,a[f+c++]=gn.z,c++,Ge.set(0,1,0).applyQuaternion(Yi),a[f+c++]=Ge.x,a[f+c++]=Ge.y,a[f+c++]=Ge.z,a[f+c++]=Math.PI*g*g,a[f+c++]=g,a[f+c++]=h.decay,a[f+c++]=h.distance,a[f+c++]=Math.cos(h.angle),a[f+c++]=Math.cos(h.angle*(1-h.penumbra)),a[f+c++]=h.iesMap?e.indexOf(h.iesMap):-1}else if(h.isPointLight){const g=gn.setFromMatrixPosition(h.matrixWorld);a[f+c++]=g.x,a[f+c++]=g.y,a[f+c++]=g.z,c++,c+=4,c+=1,a[f+c++]=h.decay,a[f+c++]=h.distance}else if(h.isDirectionalLight){const g=gn.setFromMatrixPosition(h.matrixWorld),_=Ge.setFromMatrixPosition(h.target.matrixWorld);$i.subVectors(g,_).normalize(),a[f+c++]=$i.x,a[f+c++]=$i.y,a[f+c++]=$i.z}}this.count=t.length;const o=yl(a.buffer);return this.hash!==o?(this.hash=o,n.needsUpdate=!0,!0):!1}}function nu(i,t,e,n,s){if(t>n)throw new Error;const r=i.length/t,a=i.constructor.BYTES_PER_ELEMENT*8;let o=1;switch(i.constructor){case Uint8Array:case Uint16Array:case Uint32Array:o=2**a-1;break;case Int8Array:case Int16Array:case Int32Array:o=2**(a-1)-1;break}for(let l=0;l<r;l++){const u=4*l,h=t*l;for(let f=0;f<n;f++)e[s+u+f]=t>=f+1?i[h+f]/o:0}}class l3 extends ea{constructor(){super(),this._textures=[],this.type=ne,this.format=Zt,this.internalFormat="RGBA32F"}updateAttribute(t,e){const n=this._textures[t];n.updateFrom(e);const s=n.image,r=this.image;if(s.width!==r.width||s.height!==r.height)throw new Error("FloatAttributeTextureArray: Attribute must be the same dimensions when updating single layer.");const{width:a,height:o,data:l}=r,h=a*o*4*t;let f=e.itemSize;f===3&&(f=4),nu(n.image.data,f,l,4,h),this.dispose(),this.needsUpdate=!0}setAttributes(t){const e=t[0].count,n=t.length;for(let f=0,c=n;f<c;f++)if(t[f].count!==e)throw new Error("FloatAttributeTextureArray: All attributes must have the same item count.");const s=this._textures;for(;s.length<n;){const f=new a0;s.push(f)}for(;s.length>n;)s.pop();for(let f=0,c=n;f<c;f++)s[f].updateFrom(t[f]);const a=s[0].image,o=this.image;(a.width!==o.width||a.height!==o.height||a.depth!==n)&&(o.width=a.width,o.height=a.height,o.depth=n,o.data=new Float32Array(o.width*o.height*o.depth*4));const{data:l,width:u,height:h}=o;for(let f=0,c=n;f<c;f++){const m=s[f],_=u*h*4*f;let d=t[f].itemSize;d===3&&(d=4),nu(m.image.data,d,l,4,_)}this.dispose(),this.needsUpdate=!0}}class c3 extends l3{updateNormalAttribute(t){this.updateAttribute(0,t)}updateTangentAttribute(t){this.updateAttribute(1,t)}updateUvAttribute(t){this.updateAttribute(2,t)}updateColorAttribute(t){this.updateAttribute(3,t)}updateFrom(t,e,n,s){this.setAttributes([t,e,n,s])}}function bl(i,t){return i.uuid<t.uuid?1:i.uuid>t.uuid?-1:0}function il(i){return`${i.source.uuid}:${i.colorSpace}`}function u3(i){const t=new Set,e=[];for(let n=0,s=i.length;n<s;n++){const r=i[n],a=il(r);t.has(a)||(t.add(a),e.push(r))}return e}function h3(i){const t=i.map(n=>n.iesMap||null).filter(n=>n),e=new Set(t);return Array.from(e).sort(bl)}function f3(i){const t=new Set;for(let n=0,s=i.length;n<s;n++){const r=i[n];for(const a in r){const o=r[a];o&&o.isTexture&&t.add(o)}}const e=Array.from(t);return u3(e).sort(bl)}function d3(i){const t=[];return i.traverse(e=>{e.visible&&(e.isRectAreaLight||e.isSpotLight||e.isPointLight||e.isDirectionalLight)&&t.push(e)}),t.sort(bl)}const h0=45,iu=h0*4;class p3{constructor(){this._features={}}isUsed(t){return t in this._features}setUsed(t,e=!0){e===!1?delete this._features[t]:this._features[t]=!0}reset(){this._features={}}}class m3 extends ln{constructor(){super(new Float32Array(4),1,1),this.format=Zt,this.type=ne,this.wrapS=Ne,this.wrapT=Ne,this.minFilter=Bt,this.magFilter=Bt,this.generateMipmaps=!1,this.features=new p3}updateFrom(t,e){function n(g,_,d=-1){if(_ in g&&g[_]){const p=il(g[_]);return f[p]}else return d}function s(g,_,d){return _ in g?g[_]:d}function r(g,_,d,p){const x=g[_]&&g[_].isTexture?g[_]:null;if(x){x.matrixAutoUpdate&&x.updateMatrix();const y=x.matrix.elements;let v=0;d[p+v++]=y[0],d[p+v++]=y[3],d[p+v++]=y[6],v++,d[p+v++]=y[1],d[p+v++]=y[4],d[p+v++]=y[7],v++}return 8}let a=0;const o=t.length*h0,l=Math.ceil(Math.sqrt(o))||1,{image:u,features:h}=this,f={};for(let g=0,_=e.length;g<_;g++)f[il(e[g])]=g;u.width!==l&&(this.dispose(),u.data=new Float32Array(l*l*4),u.width=l,u.height=l);const c=u.data;h.reset();for(let g=0,_=t.length;g<_;g++){const d=t[g];if(d.isFogVolumeMaterial){h.setUsed("FOG");for(let y=0;y<iu;y++)c[a+y]=0;c[a+0*4+0]=d.color.r,c[a+0*4+1]=d.color.g,c[a+0*4+2]=d.color.b,c[a+2*4+3]=s(d,"emissiveIntensity",0),c[a+3*4+0]=d.emissive.r,c[a+3*4+1]=d.emissive.g,c[a+3*4+2]=d.emissive.b,c[a+13*4+1]=d.density,c[a+13*4+3]=0,c[a+14*4+2]=4,a+=iu;continue}c[a++]=d.color.r,c[a++]=d.color.g,c[a++]=d.color.b,c[a++]=n(d,"map"),c[a++]=s(d,"metalness",0),c[a++]=n(d,"metalnessMap"),c[a++]=s(d,"roughness",0),c[a++]=n(d,"roughnessMap"),c[a++]=s(d,"ior",1.5),c[a++]=s(d,"transmission",0),c[a++]=n(d,"transmissionMap"),c[a++]=s(d,"emissiveIntensity",0),"emissive"in d?(c[a++]=d.emissive.r,c[a++]=d.emissive.g,c[a++]=d.emissive.b):(c[a++]=0,c[a++]=0,c[a++]=0),c[a++]=n(d,"emissiveMap"),c[a++]=n(d,"normalMap"),"normalScale"in d?(c[a++]=d.normalScale.x,c[a++]=d.normalScale.y):(c[a++]=1,c[a++]=1),c[a++]=s(d,"clearcoat",0),c[a++]=n(d,"clearcoatMap"),c[a++]=s(d,"clearcoatRoughness",0),c[a++]=n(d,"clearcoatRoughnessMap"),c[a++]=n(d,"clearcoatNormalMap"),"clearcoatNormalScale"in d?(c[a++]=d.clearcoatNormalScale.x,c[a++]=d.clearcoatNormalScale.y):(c[a++]=1,c[a++]=1),a++,c[a++]=s(d,"sheen",0),"sheenColor"in d?(c[a++]=d.sheenColor.r,c[a++]=d.sheenColor.g,c[a++]=d.sheenColor.b):(c[a++]=0,c[a++]=0,c[a++]=0),c[a++]=n(d,"sheenColorMap"),c[a++]=s(d,"sheenRoughness",0),c[a++]=n(d,"sheenRoughnessMap"),c[a++]=n(d,"iridescenceMap"),c[a++]=n(d,"iridescenceThicknessMap"),c[a++]=s(d,"iridescence",0),c[a++]=s(d,"iridescenceIOR",1.3);const p=s(d,"iridescenceThicknessRange",[100,400]);c[a++]=p[0],c[a++]=p[1],"specularColor"in d?(c[a++]=d.specularColor.r,c[a++]=d.specularColor.g,c[a++]=d.specularColor.b):(c[a++]=1,c[a++]=1,c[a++]=1),c[a++]=n(d,"specularColorMap"),c[a++]=s(d,"specularIntensity",1),c[a++]=n(d,"specularIntensityMap");const x=s(d,"thickness",0)===0&&s(d,"attenuationDistance",1/0)===1/0;if(c[a++]=Number(x),a++,"attenuationColor"in d?(c[a++]=d.attenuationColor.r,c[a++]=d.attenuationColor.g,c[a++]=d.attenuationColor.b):(c[a++]=1,c[a++]=1,c[a++]=1),c[a++]=s(d,"attenuationDistance",1/0),c[a++]=n(d,"alphaMap"),c[a++]=d.opacity,c[a++]=d.alphaTest,!x&&d.transmission>0)c[a++]=0;else switch(d.side){case xn:c[a++]=1;break;case Re:c[a++]=-1;break;case sn:c[a++]=0;break}c[a++]=Number(s(d,"matte",!1)),c[a++]=Number(s(d,"castShadow",!0)),c[a++]=Number(d.vertexColors)|Number(d.flatShading)<<1,c[a++]=Number(d.transparent),a+=r(d,"map",c,a),a+=r(d,"metalnessMap",c,a),a+=r(d,"roughnessMap",c,a),a+=r(d,"transmissionMap",c,a),a+=r(d,"emissiveMap",c,a),a+=r(d,"normalMap",c,a),a+=r(d,"clearcoatMap",c,a),a+=r(d,"clearcoatNormalMap",c,a),a+=r(d,"clearcoatRoughnessMap",c,a),a+=r(d,"sheenColorMap",c,a),a+=r(d,"sheenRoughnessMap",c,a),a+=r(d,"iridescenceMap",c,a),a+=r(d,"iridescenceThicknessMap",c,a),a+=r(d,"specularColorMap",c,a),a+=r(d,"specularIntensityMap",c,a)}const m=yl(c.buffer);return this.hash!==m?(this.hash=m,this.needsUpdate=!0,!0):!1}}const su=new Ft;function g3(i){return i?`${i.uuid}:${i.version}`:null}function _3(i,t){for(const e in t)e in i&&(i[e]=t[e])}class ru extends Oh{constructor(t,e,n){const s={format:Zt,type:cn,minFilter:fe,magFilter:fe,wrapS:vn,wrapT:vn,generateMipmaps:!1,...n};super(t,e,1,s),_3(this.texture,s),this.texture.setTextures=(...a)=>{this.setTextures(...a)},this.hashes=[null];const r=new vs(new v3);this.fsQuad=r}setTextures(t,e,n=this.width,s=this.height){const r=t.getRenderTarget(),a=t.toneMapping,o=t.getClearAlpha();t.getClearColor(su);const l=e.length||1;(n!==this.width||s!==this.height||this.depth!==l)&&(this.setSize(n,s,l),this.hashes=new Array(l).fill(null)),t.setClearColor(0,0),t.toneMapping=Nn;const u=this.fsQuad,h=this.hashes;let f=!1;for(let c=0,m=l;c<m;c++){const g=e[c],_=g3(g);g&&(h[c]!==_||g.isWebGLRenderTarget)&&(g.matrixAutoUpdate=!1,g.matrix.identity(),u.material.map=g,t.setRenderTarget(this,c),u.render(t),g.updateMatrix(),g.matrixAutoUpdate=!0,h[c]=_,f=!0)}return u.material.map=null,t.setClearColor(su,o),t.setRenderTarget(r),t.toneMapping=a,f}dispose(){super.dispose(),this.fsQuad.dispose()}}class v3 extends un{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}constructor(){super({uniforms:{map:{value:null}},vertexShader:`
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
			`})}}function x3(i,t=Math.random()){for(let e=i.length-1;e>0;e--){const n=Math.floor(t()*(e+1)),s=i[e];i[e]=i[n],i[n]=s}return i}class y3{constructor(t,e,n=Math.random){const s=t**e,r=new Uint16Array(s);let a=s;for(let o=0;o<s;o++)r[o]=o;this.samples=new Float32Array(e),this.strataCount=t,this.reset=function(){for(let o=0;o<s;o++)r[o]=o;a=0},this.reshuffle=function(){a=0},this.next=function(){const{samples:o}=this;a>=r.length&&(x3(r,n),this.reshuffle());let l=r[a++];for(let u=0;u<e;u++)o[u]=(l%t+n())/t,l=Math.floor(l/t);return o}}}class M3{constructor(t,e,n=Math.random){let s=0;for(const l of e)s+=l;const r=new Float32Array(s),a=[];let o=0;for(const l of e){const u=new y3(t,l,n);u.samples=new Float32Array(r.buffer,o,u.samples.length),o+=u.samples.length*4,a.push(u)}this.samples=r,this.strataCount=t,this.next=function(){for(const l of a)l.next();return r},this.reshuffle=function(){for(const l of a)l.reshuffle()},this.reset=function(){for(const l of a)l.reset()}}}class b3{constructor(t=0){this.m=2147483648,this.a=1103515245,this.c=12345,this.seed=t}nextInt(){return this.seed=(this.a*this.seed+this.c)%this.m,this.seed}nextFloat(){return this.nextInt()/(this.m-1)}}class S3 extends ln{constructor(t=1,e=1,n=8){super(new Float32Array(1),1,1,Zt,ne),this.minFilter=Bt,this.magFilter=Bt,this.strata=n,this.sampler=null,this.generator=new b3,this.stableNoise=!1,this.random=()=>this.stableNoise?this.generator.nextFloat():Math.random(),this.init(t,e,n)}init(t=this.image.height,e=this.image.width,n=this.strata){const{image:s}=this;if(s.width===e&&s.height===t&&this.sampler!==null)return;const r=new Array(t*e).fill(4),a=new M3(n,r,this.random);s.width=e,s.height=t,s.data=a.samples,this.sampler=a,this.dispose(),this.next()}next(){this.sampler.next(),this.needsUpdate=!0}reset(){this.sampler.reset(),this.generator.seed=0}}function T3(i,t=Math.random){for(let e=i.length-1;e>0;e--){const n=~~((t()-1e-6)*e),s=i[e];i[e]=i[n],i[n]=s}}function E3(i,t){i.fill(0);for(let e=0;e<t;e++)i[e]=1}class au{constructor(t){this.count=0,this.size=-1,this.sigma=-1,this.radius=-1,this.lookupTable=null,this.score=null,this.binaryPattern=null,this.resize(t),this.setSigma(1.5)}findVoid(){const{score:t,binaryPattern:e}=this;let n=1/0,s=-1;for(let r=0,a=e.length;r<a;r++){if(e[r]!==0)continue;const o=t[r];o<n&&(n=o,s=r)}return s}findCluster(){const{score:t,binaryPattern:e}=this;let n=-1/0,s=-1;for(let r=0,a=e.length;r<a;r++){if(e[r]!==1)continue;const o=t[r];o>n&&(n=o,s=r)}return s}setSigma(t){if(t===this.sigma)return;const e=~~(Math.sqrt(10*2*t**2)+1),n=2*e+1,s=new Float32Array(n*n),r=t*t;for(let a=-e;a<=e;a++)for(let o=-e;o<=e;o++){const l=(e+o)*n+a+e,u=a*a+o*o;s[l]=Math.E**(-u/(2*r))}this.lookupTable=s,this.sigma=t,this.radius=e}resize(t){this.size!==t&&(this.size=t,this.score=new Float32Array(t*t),this.binaryPattern=new Uint8Array(t*t))}invert(){const{binaryPattern:t,score:e,size:n}=this;e.fill(0);for(let s=0,r=t.length;s<r;s++)if(t[s]===0){const a=~~(s/n),o=s-a*n;this.updateScore(o,a,1),t[s]=1}else t[s]=0}updateScore(t,e,n){const{size:s,score:r,lookupTable:a}=this,o=this.radius,l=2*o+1;for(let u=-o;u<=o;u++)for(let h=-o;h<=o;h++){const f=(o+h)*l+u+o,c=a[f];let m=t+u;m=m<0?s+m:m%s;let g=e+h;g=g<0?s+g:g%s;const _=g*s+m;r[_]+=n*c}}addPointIndex(t){this.binaryPattern[t]=1;const e=this.size,n=~~(t/e),s=t-n*e;this.updateScore(s,n,1),this.count++}removePointIndex(t){this.binaryPattern[t]=0;const e=this.size,n=~~(t/e),s=t-n*e;this.updateScore(s,n,-1),this.count--}copy(t){this.resize(t.size),this.score.set(t.score),this.binaryPattern.set(t.binaryPattern),this.setSigma(t.sigma),this.count=t.count}}class w3{constructor(){this.random=Math.random,this.sigma=1.5,this.size=64,this.majorityPointsRatio=.1,this.samples=new au(1),this.savedSamples=new au(1)}generate(){const{samples:t,savedSamples:e,sigma:n,majorityPointsRatio:s,size:r}=this;t.resize(r),t.setSigma(n);const a=Math.floor(r*r*s),o=t.binaryPattern;E3(o,a),T3(o,this.random);for(let f=0,c=o.length;f<c;f++)o[f]===1&&t.addPointIndex(f);for(;;){const f=t.findCluster();t.removePointIndex(f);const c=t.findVoid();if(f===c){t.addPointIndex(f);break}t.addPointIndex(c)}const l=new Uint32Array(r*r);e.copy(t);let u;for(u=t.count-1;u>=0;){const f=t.findCluster();t.removePointIndex(f),l[f]=u,u--}const h=r*r;for(u=e.count;u<h/2;){const f=e.findVoid();e.addPointIndex(f),l[f]=u,u++}for(e.invert();u<h;){const f=e.findCluster();e.removePointIndex(f),l[f]=u,u++}return{data:l,maxValue:h}}}function A3(i){return i>=3?4:i}function R3(i){switch(i){case 1:return ds;case 2:return ta;default:return Zt}}class C3 extends ln{constructor(t=64,e=1){super(new Float32Array(4),1,1,Zt,ne),this.minFilter=Bt,this.magFilter=Bt,this.size=t,this.channels=e,this.update()}update(){const t=this.channels,e=this.size,n=new w3;n.channels=t,n.size=e;const s=A3(t),r=R3(s);(this.image.width!==e||r!==this.format)&&(this.image.width=e,this.image.height=e,this.image.data=new Float32Array(e**2*s),this.format=r,this.dispose());const a=this.image.data;for(let o=0,l=t;o<l;o++){const u=n.generate(),h=u.data,f=u.maxValue;for(let c=0,m=h.length;c<m;c++){const g=h[c]/f;a[c*s+o]=g}}this.needsUpdate=!0}}const P3=`

	struct PhysicalCamera {

		float focusDistance;
		float anamorphicRatio;
		float bokehSize;
		int apertureBlades;
		float apertureRotation;

	};

`,D3=`

	struct EquirectHdrInfo {

		sampler2D marginalWeights;
		sampler2D conditionalWeights;
		sampler2D map;

		float totalSum;

	};

`,I3=`

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

`,L3=`

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

`,F3=`

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

`,U3=`

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
`,N3=`

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

`,O3=`

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


`,B3=`

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

`,z3=`

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

`,k3=`

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

`,H3=`

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

`,f0=`

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
`,ou=`

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
`,V3=`

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

`,G3=`

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

`,W3=`

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

`,X3=`

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

`,q3=`

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

`,Y3=`

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

`,$3=`

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

`,j3=`

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

`,K3=`

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

`,Z3=`

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

`,J3=`

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
`,Q3=`

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

`,t_=`

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

`;class e_ extends Ml{onBeforeRender(){this.setDefine("FEATURE_DOF",this.physicalCamera.bokehSize===0?0:1),this.setDefine("FEATURE_BACKGROUND_MAP",this.backgroundMap?1:0),this.setDefine("FEATURE_FOG",this.materials.features.isUsed("FOG")?1:0)}constructor(t){super({transparent:!0,depthWrite:!1,defines:{FEATURE_MIS:1,FEATURE_RUSSIAN_ROULETTE:1,FEATURE_DOF:1,FEATURE_BACKGROUND_MAP:0,FEATURE_FOG:1,RANDOM_TYPE:2,CAMERA_TYPE:0,DEBUG_MODE:0,ATTR_NORMAL:0,ATTR_TANGENT:1,ATTR_UV:2,ATTR_COLOR:3},uniforms:{resolution:{value:new ut},opacity:{value:1},bounces:{value:10},transmissiveBounces:{value:10},filterGlossyFactor:{value:0},physicalCamera:{value:new Z2},cameraWorldMatrix:{value:new Ut},invProjectionMatrix:{value:new Ut},bvh:{value:new _2},attributesArray:{value:new c3},materialIndexAttribute:{value:new r0},materials:{value:new m3},textures:{value:new ru().texture},lights:{value:new o3},iesProfiles:{value:new ru(360,180,{type:Fe,wrapS:Ne,wrapT:Ne}).texture},environmentIntensity:{value:1},environmentRotation:{value:new Ut},envMapInfo:{value:new t3},backgroundBlur:{value:0},backgroundMap:{value:null},backgroundAlpha:{value:1},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut},seed:{value:0},sobolTexture:{value:null},stratifiedTexture:{value:new S3},stratifiedOffsetTexture:{value:new C3(64,1)}},vertexShader:`

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
				${y2}
				${b2}
				${M2}

				// uniform structs
				${P3}
				${I3}
				${D3}
				${L3}
				${F3}

				// random
				#if RANDOM_TYPE == 2 	// Stratified List

					${V3}

				#elif RANDOM_TYPE == 1 	// Sobol

					${ou}
					${u0}
					${Y2}

					#define rand(v) sobol(v)
					#define rand2(v) sobol2(v)
					#define rand3(v) sobol3(v)
					#define rand4(v) sobol4(v)

				#else 					// PCG

				${ou}

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
				${H3}
				${B3}
				${f0}
				${z3}
				${k3}

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
				${O3}
				${U3}
				${N3}

				${$3}
				${X3}
				${Y3}
				${q3}
				${W3}
				${G3}

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

				${Q3}
				${K3}
				${t_}
				${j3}
				${Z3}
				${J3}

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

			`}),this.setValues(t)}}function*n_(){const{_renderer:i,_fsQuad:t,_blendQuad:e,_primaryTarget:n,_blendTargets:s,_sobolTarget:r,_subframe:a,alpha:o,material:l}=this,u=new Kt,h=new Kt,f=e.material;let[c,m]=s;for(;;){o?(f.opacity=this._opacityFactor/(this.samples+1),l.blending=Ke,l.opacity=1):(l.opacity=this._opacityFactor/(this.samples+1),l.blending=Jn);const[g,_,d,p]=a,x=n.width,y=n.height;l.resolution.set(x*d,y*p),l.sobolTexture=r.texture,l.stratifiedTexture.init(20,l.bounces+l.transmissiveBounces+5),l.stratifiedTexture.next(),l.seed++;const v=this.tiles.x||1,T=this.tiles.y||1,A=v*T,w=Math.ceil(x*d),P=Math.ceil(y*p),b=Math.floor(g*x),M=Math.floor(_*y),C=Math.ceil(w/v),F=Math.ceil(P/T);for(let L=0;L<T;L++)for(let B=0;B<v;B++){const G=i.getRenderTarget(),H=i.autoClear,q=i.getScissorTest();i.getScissor(u),i.getViewport(h);let W=B,tt=L;if(!this.stableTiles){const _t=this._currentTile%(v*T);W=_t%v,tt=~~(_t/v),this._currentTile=_t+1}const ct=T-tt-1;n.scissor.set(b+W*C,M+ct*F,Math.min(C,w-W*C),Math.min(F,P-ct*F)),n.viewport.set(b,M,w,P),i.setRenderTarget(n),i.setScissorTest(!0),i.autoClear=!1,t.render(i),i.setViewport(h),i.setScissor(u),i.setScissorTest(q),i.setRenderTarget(G),i.autoClear=H,o&&(f.target1=c.texture,f.target2=n.texture,i.setRenderTarget(m),e.render(i),i.setRenderTarget(G)),this.samples+=1/A,B===v-1&&L===T-1&&(this.samples=Math.round(this.samples)),yield}[c,m]=[m,c]}}const lu=new Ft;class cu{get material(){return this._fsQuad.material}set material(t){this._fsQuad.material.removeEventListener("recompilation",this._compileFunction),t.addEventListener("recompilation",this._compileFunction),this._fsQuad.material=t}get target(){return this._alpha?this._blendTargets[1]:this._primaryTarget}set alpha(t){this._alpha!==t&&(t||(this._blendTargets[0].dispose(),this._blendTargets[1].dispose()),this._alpha=t,this.reset())}get alpha(){return this._alpha}get isCompiling(){return!!this._compilePromise}constructor(t){this.camera=null,this.tiles=new ut(3,3),this.stableNoise=!1,this.stableTiles=!0,this.samples=0,this._subframe=new Kt(0,0,1,1),this._opacityFactor=1,this._renderer=t,this._alpha=!1,this._fsQuad=new vs(new e_),this._blendQuad=new vs(new X2),this._task=null,this._currentTile=0,this._compilePromise=null,this._sobolTarget=new j2().generate(t),this._primaryTarget=new Ze(1,1,{format:Zt,type:ne,magFilter:Bt,minFilter:Bt}),this._blendTargets=[new Ze(1,1,{format:Zt,type:ne,magFilter:Bt,minFilter:Bt}),new Ze(1,1,{format:Zt,type:ne,magFilter:Bt,minFilter:Bt})],this._compileFunction=()=>{const e=this.compileMaterial(this._fsQuad._mesh);e.then(()=>{this._compilePromise===e&&(this._compilePromise=null)}),this._compilePromise=e},this.material.addEventListener("recompilation",this._compileFunction)}compileMaterial(){return this._renderer.compileAsync(this._fsQuad._mesh)}setCamera(t){const{material:e}=this;e.cameraWorldMatrix.copy(t.matrixWorld),e.invProjectionMatrix.copy(t.projectionMatrixInverse),e.physicalCamera.updateFrom(t);let n=0;t.projectionMatrix.elements[15]>0&&(n=1),t.isEquirectCamera&&(n=2),e.setDefine("CAMERA_TYPE",n),this.camera=t}setSize(t,e){t=Math.ceil(t),e=Math.ceil(e),!(this._primaryTarget.width===t&&this._primaryTarget.height===e)&&(this._primaryTarget.setSize(t,e),this._blendTargets[0].setSize(t,e),this._blendTargets[1].setSize(t,e),this.reset())}getSize(t){t.x=this._primaryTarget.width,t.y=this._primaryTarget.height}dispose(){this._primaryTarget.dispose(),this._blendTargets[0].dispose(),this._blendTargets[1].dispose(),this._sobolTarget.dispose(),this._fsQuad.dispose(),this._blendQuad.dispose(),this._task=null}reset(){const{_renderer:t,_primaryTarget:e,_blendTargets:n}=this,s=t.getRenderTarget(),r=t.getClearAlpha();t.getClearColor(lu),t.setRenderTarget(e),t.setClearColor(0,0),t.clearColor(),t.setRenderTarget(n[0]),t.setClearColor(0,0),t.clearColor(),t.setRenderTarget(n[1]),t.setClearColor(0,0),t.clearColor(),t.setClearColor(lu,r),t.setRenderTarget(s),this.samples=0,this._task=null,this.material.stratifiedTexture.stableNoise=this.stableNoise,this.stableNoise&&(this.material.seed=0,this.material.stratifiedTexture.reset())}update(){this.material.onBeforeRender(),!this.isCompiling&&(this._task||(this._task=n_.call(this)),this._task.next())}}const gi=new ut,uu=new ut,Ur=new Xo,Nr=new Ft;class i_ extends ln{constructor(t=512,e=512){super(new Float32Array(t*e*4),t,e,Zt,ne,Hs,vn,Ne,fe,fe),this.generationCallback=null}update(){this.dispose(),this.needsUpdate=!0;const{data:t,width:e,height:n}=this.image;for(let s=0;s<e;s++)for(let r=0;r<n;r++){uu.set(e,n),gi.set(s/e,r/n),gi.x-=.5,gi.y=1-gi.y,Ur.theta=gi.x*2*Math.PI,Ur.phi=gi.y*Math.PI,Ur.radius=1,this.generationCallback(Ur,gi,uu,Nr);const o=4*(r*e+s);t[o+0]=Nr.r,t[o+1]=Nr.g,t[o+2]=Nr.b,t[o+3]=1}}copy(t){return super.copy(t),this.generationCallback=t.generationCallback,this}}const hu=new D;class d0 extends i_{constructor(t=512){super(t,t),this.topColor=new Ft().set(16777215),this.bottomColor=new Ft().set(0),this.exponent=2,this.generationCallback=(e,n,s,r)=>{hu.setFromSpherical(e);const a=hu.y*.5+.5;r.lerpColors(this.bottomColor,this.topColor,a**this.exponent)}}copy(t){return super.copy(t),this.topColor.copy(t.topColor),this.bottomColor.copy(t.bottomColor),this}}class s_ extends un{get map(){return this.uniforms.map.value}set map(t){this.uniforms.map.value=t}get opacity(){return this.uniforms.opacity.value}set opacity(t){this.uniforms&&(this.uniforms.opacity.value=t)}constructor(t){super({uniforms:{map:{value:null},opacity:{value:1}},vertexShader:`
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
			`}),this.setValues(t)}}class r_ extends un{constructor(){super({uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:`
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

				${f0}

				void main() {

					vec3 rayDirection = equirectUvToDirection( vUv );
					rayDirection.x *= flipEnvMap;
					gl_FragColor = textureCube( envMap, rayDirection );

				}`}),this.depthWrite=!1,this.depthTest=!1}}class fu{constructor(t){this._renderer=t,this._quad=new vs(new r_)}generate(t,e=null,n=null){if(!t.isCubeTexture)throw new Error("CubeToEquirectMaterial: Source can only be cube textures.");const s=t.images[0],r=this._renderer,a=this._quad;e===null&&(e=4*s.height),n===null&&(n=2*s.height);const o=new Ze(e,n,{type:ne,colorSpace:s.colorSpace}),l=s.height,u=Math.log2(l)-2,h=1/l,f=1/(3*Math.max(Math.pow(2,u),7*16));a.material.defines.CUBEUV_MAX_MIP=`${u}.0`,a.material.defines.CUBEUV_TEXEL_WIDTH=f,a.material.defines.CUBEUV_TEXEL_HEIGHT=h,a.material.uniforms.envMap.value=t,a.material.uniforms.flipEnvMap.value=t.isRenderTargetTexture?1:-1,a.material.needsUpdate=!0;const c=r.getRenderTarget(),m=r.autoClear;r.autoClear=!0,r.setRenderTarget(o),a.render(r),r.setRenderTarget(c),r.autoClear=m;const g=new Uint16Array(e*n*4),_=new Float32Array(e*n*4);r.readRenderTargetPixels(o,0,0,e,n,_),o.dispose();for(let p=0,x=_.length;p<x;p++)g[p]=Fn.toHalfFloat(_[p]);const d=new ln(g,e,n,Zt,Fe);return d.minFilter=th,d.magFilter=fe,d.wrapS=vn,d.wrapT=vn,d.mapping=Hs,d.needsUpdate=!0,d}dispose(){this._quad.dispose()}}function a_(i){return i.extensions.get("EXT_float_blend")}const ji=new ut;class o_{get multipleImportanceSampling(){return!!this._pathTracer.material.defines.FEATURE_MIS}set multipleImportanceSampling(t){this._pathTracer.material.setDefine("FEATURE_MIS",t?1:0)}get transmissiveBounces(){return this._pathTracer.material.transmissiveBounces}set transmissiveBounces(t){this._pathTracer.material.transmissiveBounces=t}get bounces(){return this._pathTracer.material.bounces}set bounces(t){this._pathTracer.material.bounces=t}get filterGlossyFactor(){return this._pathTracer.material.filterGlossyFactor}set filterGlossyFactor(t){this._pathTracer.material.filterGlossyFactor=t}get samples(){return this._pathTracer.samples}get target(){return this._pathTracer.target}get tiles(){return this._pathTracer.tiles}get stableNoise(){return this._pathTracer.stableNoise}set stableNoise(t){this._pathTracer.stableNoise=t}get isCompiling(){return!!this._pathTracer.isCompiling}constructor(t){this._renderer=t,this._generator=new H2,this._pathTracer=new cu(t),this._queueReset=!1,this._clock=new gf,this._compilePromise=null,this._lowResPathTracer=new cu(t),this._lowResPathTracer.tiles.set(1,1),this._quad=new vs(new s_({map:null,transparent:!0,blending:Ke,premultipliedAlpha:t.getContextAttributes().premultipliedAlpha})),this._materials=null,this._previousEnvironment=null,this._previousBackground=null,this._internalBackground=null,this.renderDelay=100,this.minSamples=5,this.fadeDuration=500,this.enablePathTracing=!0,this.pausePathTracing=!1,this.dynamicLowRes=!1,this.lowResScale=.25,this.renderScale=1,this.synchronizeRenderSize=!0,this.rasterizeScene=!0,this.renderToCanvas=!0,this.textureSize=new ut(1024,1024),this.rasterizeSceneCallback=(e,n)=>{this._renderer.render(e,n)},this.renderToCanvasCallback=(e,n,s)=>{const r=n.autoClear;n.autoClear=!1,s.render(n),n.autoClear=r},this.setScene(new ku,new Le)}setBVHWorker(t){this._generator.setBVHWorker(t)}setScene(t,e,n={}){t.updateMatrixWorld(!0),e.updateMatrixWorld();const s=this._generator;if(s.setObjects(t),this._buildAsync)return s.generateAsync(n.onProgress).then(r=>this._updateFromResults(t,e,r));{const r=s.generate();return this._updateFromResults(t,e,r)}}setSceneAsync(...t){this._buildAsync=!0;const e=this.setScene(...t);return this._buildAsync=!1,e}setCamera(t){this.camera=t,this.updateCamera()}updateCamera(){const t=this.camera;t.updateMatrixWorld(),this._pathTracer.setCamera(t),this._lowResPathTracer.setCamera(t),this.reset()}updateMaterials(){const t=this._pathTracer.material,e=this._renderer,n=this._materials,s=this.textureSize,r=f3(n);t.textures.setTextures(e,r,s.x,s.y),t.materials.updateFrom(n,r),this.reset()}updateLights(){const t=this.scene,e=this._renderer,n=this._pathTracer.material,s=d3(t),r=h3(s);n.lights.updateFrom(s,r),n.iesProfiles.setTextures(e,r),this.reset()}updateEnvironment(){const t=this.scene,e=this._pathTracer.material;if(this._internalBackground&&(this._internalBackground.dispose(),this._internalBackground=null),e.backgroundBlur=t.backgroundBlurriness,e.backgroundIntensity=t.backgroundIntensity??1,e.backgroundRotation.makeRotationFromEuler(t.backgroundRotation).invert(),t.background===null)e.backgroundMap=null,e.backgroundAlpha=0;else if(t.background.isColor){this._colorBackground=this._colorBackground||new d0(16);const n=this._colorBackground;n.topColor.equals(t.background)||(n.topColor.set(t.background),n.bottomColor.set(t.background),n.update()),e.backgroundMap=n,e.backgroundAlpha=1}else if(t.background.isCubeTexture){if(t.background!==this._previousBackground){const n=new fu(this._renderer).generate(t.background);this._internalBackground=n,e.backgroundMap=n,e.backgroundAlpha=1}}else e.backgroundMap=t.background,e.backgroundAlpha=1;if(e.environmentIntensity=t.environmentIntensity??1,e.environmentRotation.makeRotationFromEuler(t.environmentRotation).invert(),this._previousEnvironment!==t.environment)if(t.environment!==null)if(t.environment.isCubeTexture){const n=new fu(this._renderer).generate(t.environment);e.envMapInfo.updateFrom(n)}else e.envMapInfo.updateFrom(t.environment);else e.environmentIntensity=0;this._previousEnvironment=t.environment,this._previousBackground=t.background,this.reset()}_updateFromResults(t,e,n){const{materials:s,geometry:r,bvh:a,bvhChanged:o}=n;this._materials=s;const u=this._pathTracer.material;return o&&(u.bvh.updateFrom(a),u.attributesArray.updateFrom(r.attributes.normal,r.attributes.tangent,r.attributes.uv,r.attributes.color),u.materialIndexAttribute.updateFrom(r.attributes.materialIndex)),this._previousScene=t,this.scene=t,this.camera=e,this.updateCamera(),this.updateMaterials(),this.updateEnvironment(),this.updateLights(),n}renderSample(){const t=this._lowResPathTracer,e=this._pathTracer,n=this._renderer,s=this._clock,r=this._quad;this._updateScale(),this._queueReset&&(e.reset(),t.reset(),this._queueReset=!1,r.material.opacity=0,s.start());const a=s.getDelta()*1e3,o=s.getElapsedTime()*1e3;if(!this.pausePathTracing&&this.enablePathTracing&&this.renderDelay<=o&&!this.isCompiling&&e.update(),e.alpha=e.material.backgroundAlpha!==1||!a_(n),t.alpha=e.alpha,this.renderToCanvas){const l=this._renderer,u=this.minSamples;if(o>=this.renderDelay&&this.samples>=this.minSamples&&(this.fadeDuration!==0?r.material.opacity=Math.min(r.material.opacity+a/this.fadeDuration,1):r.material.opacity=1),!this.enablePathTracing||this.samples<u||r.material.opacity<1){if(this.dynamicLowRes&&!this.isCompiling){t.samples<1&&(t.material=e.material,t.update());const h=r.material.opacity;r.material.opacity=1-r.material.opacity,r.material.map=t.target.texture,r.render(l),r.material.opacity=h}(!this.dynamicLowRes&&this.rasterizeScene||this.dynamicLowRes&&this.isCompiling)&&this.rasterizeSceneCallback(this.scene,this.camera)}this.enablePathTracing&&r.material.opacity>0&&(r.material.opacity<1&&(r.material.blending=this.dynamicLowRes?ro:Jn),r.material.map=e.target.texture,this.renderToCanvasCallback(e.target,l,r),r.material.blending=Ke)}}reset(){this._queueReset=!0,this._pathTracer.samples=0}dispose(){this._renderQuad.dispose(),this._renderQuad.material.dispose(),this._pathTracer.dispose()}_updateScale(){if(this.synchronizeRenderSize){this._renderer.getDrawingBufferSize(ji);const t=Math.floor(this.renderScale*ji.x),e=Math.floor(this.renderScale*ji.y);if(this._pathTracer.getSize(ji),ji.x!==t||ji.y!==e){const n=this.lowResScale;this._pathTracer.setSize(t,e),this._lowResPathTracer.setSize(Math.floor(t*n),Math.floor(e*n))}}}}class l_ extends pf{constructor(...t){super(...t),this.iesMap=null,this.radius=0}copy(t,e){return super.copy(t,e),this.iesMap=t.iesMap,this.radius=t.radius,this}}/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.17.0
 * @author George Michael Brower
 * @license MIT
 */class Sn{constructor(t,e,n,s,r="div"){this.parent=t,this.object=e,this.property=n,this._disabled=!1,this._hidden=!1,this.initialValue=this.getValue(),this.domElement=document.createElement("div"),this.domElement.classList.add("controller"),this.domElement.classList.add(s),this.$name=document.createElement("div"),this.$name.classList.add("name"),Sn.nextNameID=Sn.nextNameID||0,this.$name.id="lil-gui-name-"+ ++Sn.nextNameID,this.$widget=document.createElement(r),this.$widget.classList.add("widget"),this.$disable=this.$widget,this.domElement.appendChild(this.$name),this.domElement.appendChild(this.$widget),this.parent.children.push(this),this.parent.controllers.push(this),this.parent.$children.appendChild(this.domElement),this._listenCallback=this._listenCallback.bind(this),this.name(n)}name(t){return this._name=t,this.$name.innerHTML=t,this}onChange(t){return this._onChange=t,this}_callOnChange(){this.parent._callOnChange(this),this._onChange!==void 0&&this._onChange.call(this,this.getValue()),this._changed=!0}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(){this._changed&&(this.parent._callOnFinishChange(this),this._onFinishChange!==void 0&&this._onFinishChange.call(this,this.getValue())),this._changed=!1}reset(){return this.setValue(this.initialValue),this._callOnFinishChange(),this}enable(t=!0){return this.disable(!t)}disable(t=!0){return t===this._disabled||(this._disabled=t,this.domElement.classList.toggle("disabled",t),this.$disable.toggleAttribute("disabled",t)),this}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}options(t){const e=this.parent.add(this.object,this.property,t);return e.name(this._name),this.destroy(),e}min(t){return this}max(t){return this}step(t){return this}decimals(t){return this}listen(t=!0){return this._listening=t,this._listenCallbackID!==void 0&&(cancelAnimationFrame(this._listenCallbackID),this._listenCallbackID=void 0),this._listening&&this._listenCallback(),this}_listenCallback(){this._listenCallbackID=requestAnimationFrame(this._listenCallback);const t=this.save();t!==this._listenPrevValue&&this.updateDisplay(),this._listenPrevValue=t}getValue(){return this.object[this.property]}setValue(t){return this.object[this.property]=t,this._callOnChange(),this.updateDisplay(),this}updateDisplay(){return this}load(t){return this.setValue(t),this._callOnFinishChange(),this}save(){return this.getValue()}destroy(){this.listen(!1),this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.controllers.splice(this.parent.controllers.indexOf(this),1),this.parent.$children.removeChild(this.domElement)}}class c_ extends Sn{constructor(t,e,n){super(t,e,n,"boolean","label"),this.$input=document.createElement("input"),this.$input.setAttribute("type","checkbox"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$input.addEventListener("change",()=>{this.setValue(this.$input.checked),this._callOnFinishChange()}),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.checked=this.getValue(),this}}function sl(i){let t,e;return(t=i.match(/(#|0x)?([a-f0-9]{6})/i))?e=t[2]:(t=i.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))?e=parseInt(t[1]).toString(16).padStart(2,0)+parseInt(t[2]).toString(16).padStart(2,0)+parseInt(t[3]).toString(16).padStart(2,0):(t=i.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i))&&(e=t[1]+t[1]+t[2]+t[2]+t[3]+t[3]),!!e&&"#"+e}const u_={isPrimitive:!0,match:i=>typeof i=="string",fromHexString:sl,toHexString:sl},Vs={isPrimitive:!0,match:i=>typeof i=="number",fromHexString:i=>parseInt(i.substring(1),16),toHexString:i=>"#"+i.toString(16).padStart(6,0)},h_={isPrimitive:!1,match:Array.isArray,fromHexString(i,t,e=1){const n=Vs.fromHexString(i);t[0]=(n>>16&255)/255*e,t[1]=(n>>8&255)/255*e,t[2]=(255&n)/255*e},toHexString:([i,t,e],n=1)=>Vs.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},f_={isPrimitive:!1,match:i=>Object(i)===i,fromHexString(i,t,e=1){const n=Vs.fromHexString(i);t.r=(n>>16&255)/255*e,t.g=(n>>8&255)/255*e,t.b=(255&n)/255*e},toHexString:({r:i,g:t,b:e},n=1)=>Vs.toHexString(i*(n=255/n)<<16^t*n<<8^e*n<<0)},d_=[u_,Vs,h_,f_];class p_ extends Sn{constructor(t,e,n,s){var r;super(t,e,n,"color"),this.$input=document.createElement("input"),this.$input.setAttribute("type","color"),this.$input.setAttribute("tabindex",-1),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$text=document.createElement("input"),this.$text.setAttribute("type","text"),this.$text.setAttribute("spellcheck","false"),this.$text.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this.$display.appendChild(this.$input),this.$widget.appendChild(this.$display),this.$widget.appendChild(this.$text),this._format=(r=this.initialValue,d_.find(a=>a.match(r))),this._rgbScale=s,this._initialValueHexString=this.save(),this._textFocused=!1,this.$input.addEventListener("input",()=>{this._setValueFromHexString(this.$input.value)}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$text.addEventListener("input",()=>{const a=sl(this.$text.value);a&&this._setValueFromHexString(a)}),this.$text.addEventListener("focus",()=>{this._textFocused=!0,this.$text.select()}),this.$text.addEventListener("blur",()=>{this._textFocused=!1,this.updateDisplay(),this._callOnFinishChange()}),this.$disable=this.$text,this.updateDisplay()}reset(){return this._setValueFromHexString(this._initialValueHexString),this}_setValueFromHexString(t){if(this._format.isPrimitive){const e=this._format.fromHexString(t);this.setValue(e)}else this._format.fromHexString(t,this.getValue(),this._rgbScale),this._callOnChange(),this.updateDisplay()}save(){return this._format.toHexString(this.getValue(),this._rgbScale)}load(t){return this._setValueFromHexString(t),this._callOnFinishChange(),this}updateDisplay(){return this.$input.value=this._format.toHexString(this.getValue(),this._rgbScale),this._textFocused||(this.$text.value=this.$input.value.substring(1)),this.$display.style.backgroundColor=this.$input.value,this}}class so extends Sn{constructor(t,e,n){super(t,e,n,"function"),this.$button=document.createElement("button"),this.$button.appendChild(this.$name),this.$widget.appendChild(this.$button),this.$button.addEventListener("click",s=>{s.preventDefault(),this.getValue().call(this.object)}),this.$button.addEventListener("touchstart",()=>{},{passive:!0}),this.$disable=this.$button}}class m_ extends Sn{constructor(t,e,n,s,r,a){super(t,e,n,"number"),this._initInput(),this.min(s),this.max(r);const o=a!==void 0;this.step(o?a:this._getImplicitStep(),o),this.updateDisplay()}decimals(t){return this._decimals=t,this.updateDisplay(),this}min(t){return this._min=t,this._onUpdateMinMax(),this}max(t){return this._max=t,this._onUpdateMinMax(),this}step(t,e=!0){return this._step=t,this._stepExplicit=e,this}updateDisplay(){const t=this.getValue();if(this._hasSlider){let e=(t-this._min)/(this._max-this._min);e=Math.max(0,Math.min(e,1)),this.$fill.style.width=100*e+"%"}return this._inputFocused||(this.$input.value=this._decimals===void 0?t:t.toFixed(this._decimals)),this}_initInput(){this.$input=document.createElement("input"),this.$input.setAttribute("type","number"),this.$input.setAttribute("step","any"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$widget.appendChild(this.$input),this.$disable=this.$input;const t=h=>{const f=parseFloat(this.$input.value);isNaN(f)||(this._snapClampSetValue(f+h),this.$input.value=this.getValue())};let e,n,s,r,a,o=!1;const l=h=>{if(o){const f=h.clientX-e,c=h.clientY-n;Math.abs(c)>5?(h.preventDefault(),this.$input.blur(),o=!1,this._setDraggingStyle(!0,"vertical")):Math.abs(f)>5&&u()}if(!o){const f=h.clientY-s;a-=f*this._step*this._arrowKeyMultiplier(h),r+a>this._max?a=this._max-r:r+a<this._min&&(a=this._min-r),this._snapClampSetValue(r+a)}s=h.clientY},u=()=>{this._setDraggingStyle(!1,"vertical"),this._callOnFinishChange(),window.removeEventListener("mousemove",l),window.removeEventListener("mouseup",u)};this.$input.addEventListener("input",()=>{let h=parseFloat(this.$input.value);isNaN(h)||(this._stepExplicit&&(h=this._snap(h)),this.setValue(this._clamp(h)))}),this.$input.addEventListener("keydown",h=>{h.code==="Enter"&&this.$input.blur(),h.code==="ArrowUp"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h))),h.code==="ArrowDown"&&(h.preventDefault(),t(this._step*this._arrowKeyMultiplier(h)*-1))}),this.$input.addEventListener("wheel",h=>{this._inputFocused&&(h.preventDefault(),t(this._step*this._normalizeMouseWheel(h)))},{passive:!1}),this.$input.addEventListener("mousedown",h=>{e=h.clientX,n=s=h.clientY,o=!0,r=this.getValue(),a=0,window.addEventListener("mousemove",l),window.addEventListener("mouseup",u)}),this.$input.addEventListener("focus",()=>{this._inputFocused=!0}),this.$input.addEventListener("blur",()=>{this._inputFocused=!1,this.updateDisplay(),this._callOnFinishChange()})}_initSlider(){this._hasSlider=!0,this.$slider=document.createElement("div"),this.$slider.classList.add("slider"),this.$fill=document.createElement("div"),this.$fill.classList.add("fill"),this.$slider.appendChild(this.$fill),this.$widget.insertBefore(this.$slider,this.$input),this.domElement.classList.add("hasSlider");const t=c=>{const m=this.$slider.getBoundingClientRect();let g=(_=c,d=m.left,p=m.right,x=this._min,y=this._max,(_-d)/(p-d)*(y-x)+x);var _,d,p,x,y;this._snapClampSetValue(g)},e=c=>{t(c.clientX)},n=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("mousemove",e),window.removeEventListener("mouseup",n)};let s,r,a=!1;const o=c=>{c.preventDefault(),this._setDraggingStyle(!0),t(c.touches[0].clientX),a=!1},l=c=>{if(a){const m=c.touches[0].clientX-s,g=c.touches[0].clientY-r;Math.abs(m)>Math.abs(g)?o(c):(window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u))}else c.preventDefault(),t(c.touches[0].clientX)},u=()=>{this._callOnFinishChange(),this._setDraggingStyle(!1),window.removeEventListener("touchmove",l),window.removeEventListener("touchend",u)},h=this._callOnFinishChange.bind(this);let f;this.$slider.addEventListener("mousedown",c=>{this._setDraggingStyle(!0),t(c.clientX),window.addEventListener("mousemove",e),window.addEventListener("mouseup",n)}),this.$slider.addEventListener("touchstart",c=>{c.touches.length>1||(this._hasScrollBar?(s=c.touches[0].clientX,r=c.touches[0].clientY,a=!0):o(c),window.addEventListener("touchmove",l,{passive:!1}),window.addEventListener("touchend",u))},{passive:!1}),this.$slider.addEventListener("wheel",c=>{if(Math.abs(c.deltaX)<Math.abs(c.deltaY)&&this._hasScrollBar)return;c.preventDefault();const m=this._normalizeMouseWheel(c)*this._step;this._snapClampSetValue(this.getValue()+m),this.$input.value=this.getValue(),clearTimeout(f),f=setTimeout(h,400)},{passive:!1})}_setDraggingStyle(t,e="horizontal"){this.$slider&&this.$slider.classList.toggle("active",t),document.body.classList.toggle("lil-gui-dragging",t),document.body.classList.toggle("lil-gui-"+e,t)}_getImplicitStep(){return this._hasMin&&this._hasMax?(this._max-this._min)/1e3:.1}_onUpdateMinMax(){!this._hasSlider&&this._hasMin&&this._hasMax&&(this._stepExplicit||this.step(this._getImplicitStep(),!1),this._initSlider(),this.updateDisplay())}_normalizeMouseWheel(t){let{deltaX:e,deltaY:n}=t;return Math.floor(t.deltaY)!==t.deltaY&&t.wheelDelta&&(e=0,n=-t.wheelDelta/120,n*=this._stepExplicit?1:10),e+-n}_arrowKeyMultiplier(t){let e=this._stepExplicit?1:10;return t.shiftKey?e*=10:t.altKey&&(e/=10),e}_snap(t){const e=Math.round(t/this._step)*this._step;return parseFloat(e.toPrecision(15))}_clamp(t){return t<this._min&&(t=this._min),t>this._max&&(t=this._max),t}_snapClampSetValue(t){this.setValue(this._clamp(this._snap(t)))}get _hasScrollBar(){const t=this.parent.root.$children;return t.scrollHeight>t.clientHeight}get _hasMin(){return this._min!==void 0}get _hasMax(){return this._max!==void 0}}class g_ extends Sn{constructor(t,e,n,s){super(t,e,n,"option"),this.$select=document.createElement("select"),this.$select.setAttribute("aria-labelledby",this.$name.id),this.$display=document.createElement("div"),this.$display.classList.add("display"),this._values=Array.isArray(s)?s:Object.values(s),this._names=Array.isArray(s)?s:Object.keys(s),this._names.forEach(r=>{const a=document.createElement("option");a.innerHTML=r,this.$select.appendChild(a)}),this.$select.addEventListener("change",()=>{this.setValue(this._values[this.$select.selectedIndex]),this._callOnFinishChange()}),this.$select.addEventListener("focus",()=>{this.$display.classList.add("focus")}),this.$select.addEventListener("blur",()=>{this.$display.classList.remove("focus")}),this.$widget.appendChild(this.$select),this.$widget.appendChild(this.$display),this.$disable=this.$select,this.updateDisplay()}updateDisplay(){const t=this.getValue(),e=this._values.indexOf(t);return this.$select.selectedIndex=e,this.$display.innerHTML=e===-1?t:this._names[e],this}}class __ extends Sn{constructor(t,e,n){super(t,e,n,"string"),this.$input=document.createElement("input"),this.$input.setAttribute("type","text"),this.$input.setAttribute("aria-labelledby",this.$name.id),this.$input.addEventListener("input",()=>{this.setValue(this.$input.value)}),this.$input.addEventListener("keydown",s=>{s.code==="Enter"&&this.$input.blur()}),this.$input.addEventListener("blur",()=>{this._callOnFinishChange()}),this.$widget.appendChild(this.$input),this.$disable=this.$input,this.updateDisplay()}updateDisplay(){return this.$input.value=this.getValue(),this}}let du=!1;class Sl{constructor({parent:t,autoPlace:e=t===void 0,container:n,width:s,title:r="Controls",injectStyles:a=!0,touchStyles:o=!0}={}){if(this.parent=t,this.root=t?t.root:this,this.children=[],this.controllers=[],this.folders=[],this._closed=!1,this._hidden=!1,this.domElement=document.createElement("div"),this.domElement.classList.add("lil-gui"),this.$title=document.createElement("div"),this.$title.classList.add("title"),this.$title.setAttribute("role","button"),this.$title.setAttribute("aria-expanded",!0),this.$title.setAttribute("tabindex",0),this.$title.addEventListener("click",()=>this.openAnimated(this._closed)),this.$title.addEventListener("keydown",l=>{l.code!=="Enter"&&l.code!=="Space"||(l.preventDefault(),this.$title.click())}),this.$title.addEventListener("touchstart",()=>{},{passive:!0}),this.$children=document.createElement("div"),this.$children.classList.add("children"),this.domElement.appendChild(this.$title),this.domElement.appendChild(this.$children),this.title(r),o&&this.domElement.classList.add("allow-touch-styles"),this.parent)return this.parent.children.push(this),this.parent.folders.push(this),void this.parent.$children.appendChild(this.domElement);this.domElement.classList.add("root"),!du&&a&&(function(l){const u=document.createElement("style");u.innerHTML=l;const h=document.querySelector("head link[rel=stylesheet], head style");h?document.head.insertBefore(u,h):document.head.appendChild(u)}('.lil-gui{--background-color:#1f1f1f;--text-color:#ebebeb;--title-background-color:#111;--title-text-color:#ebebeb;--widget-color:#424242;--hover-color:#4f4f4f;--focus-color:#595959;--number-color:#2cc9ff;--string-color:#a2db3c;--font-size:11px;--input-font-size:11px;--font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Arial,sans-serif;--font-family-mono:Menlo,Monaco,Consolas,"Droid Sans Mono",monospace;--padding:4px;--spacing:4px;--widget-height:20px;--name-width:45%;--slider-knob-width:2px;--slider-input-width:27%;--color-input-width:27%;--slider-input-min-width:45px;--color-input-min-width:45px;--folder-indent:7px;--widget-padding:0 0 0 3px;--widget-border-radius:2px;--checkbox-size:calc(var(--widget-height)*0.75);--scrollbar-width:5px;background-color:var(--background-color);color:var(--text-color);font-family:var(--font-family);font-size:var(--font-size);font-style:normal;font-weight:400;line-height:1;text-align:left;touch-action:manipulation;user-select:none;-webkit-user-select:none}.lil-gui,.lil-gui *{box-sizing:border-box;margin:0;padding:0}.lil-gui.root{display:flex;flex-direction:column;width:var(--width,245px)}.lil-gui.root>.title{background:var(--title-background-color);color:var(--title-text-color)}.lil-gui.root>.children{overflow-x:hidden;overflow-y:auto}.lil-gui.root>.children::-webkit-scrollbar{background:var(--background-color);height:var(--scrollbar-width);width:var(--scrollbar-width)}.lil-gui.root>.children::-webkit-scrollbar-thumb{background:var(--focus-color);border-radius:var(--scrollbar-width)}.lil-gui.force-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}.lil-gui.autoPlace{max-height:100%;position:fixed;right:15px;top:0;z-index:1001}.lil-gui .controller{align-items:center;display:flex;margin:var(--spacing) 0;padding:0 var(--padding)}.lil-gui .controller.disabled{opacity:.5}.lil-gui .controller.disabled,.lil-gui .controller.disabled *{pointer-events:none!important}.lil-gui .controller>.name{flex-shrink:0;line-height:var(--widget-height);min-width:var(--name-width);padding-right:var(--spacing);white-space:pre}.lil-gui .controller .widget{align-items:center;display:flex;min-height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.string input{color:var(--string-color)}.lil-gui .controller.boolean .widget{cursor:pointer}.lil-gui .controller.color .display{border-radius:var(--widget-border-radius);height:var(--widget-height);position:relative;width:100%}.lil-gui .controller.color input[type=color]{cursor:pointer;height:100%;opacity:0;width:100%}.lil-gui .controller.color input[type=text]{flex-shrink:0;font-family:var(--font-family-mono);margin-left:var(--spacing);min-width:var(--color-input-min-width);width:var(--color-input-width)}.lil-gui .controller.option select{max-width:100%;opacity:0;position:absolute;width:100%}.lil-gui .controller.option .display{background:var(--widget-color);border-radius:var(--widget-border-radius);height:var(--widget-height);line-height:var(--widget-height);max-width:100%;overflow:hidden;padding-left:.55em;padding-right:1.75em;pointer-events:none;position:relative;word-break:break-all}.lil-gui .controller.option .display.active{background:var(--focus-color)}.lil-gui .controller.option .display:after{bottom:0;content:"↕";font-family:lil-gui;padding-right:.375em;position:absolute;right:0;top:0}.lil-gui .controller.option .widget,.lil-gui .controller.option select{cursor:pointer}.lil-gui .controller.number input{color:var(--number-color)}.lil-gui .controller.number.hasSlider input{flex-shrink:0;margin-left:var(--spacing);min-width:var(--slider-input-min-width);width:var(--slider-input-width)}.lil-gui .controller.number .slider{background-color:var(--widget-color);border-radius:var(--widget-border-radius);cursor:ew-resize;height:var(--widget-height);overflow:hidden;padding-right:var(--slider-knob-width);touch-action:pan-y;width:100%}.lil-gui .controller.number .slider.active{background-color:var(--focus-color)}.lil-gui .controller.number .slider.active .fill{opacity:.95}.lil-gui .controller.number .fill{border-right:var(--slider-knob-width) solid var(--number-color);box-sizing:content-box;height:100%}.lil-gui-dragging .lil-gui{--hover-color:var(--widget-color)}.lil-gui-dragging *{cursor:ew-resize!important}.lil-gui-dragging.lil-gui-vertical *{cursor:ns-resize!important}.lil-gui .title{--title-height:calc(var(--widget-height) + var(--spacing)*1.25);-webkit-tap-highlight-color:transparent;text-decoration-skip:objects;cursor:pointer;font-weight:600;height:var(--title-height);line-height:calc(var(--title-height) - 4px);outline:none;padding:0 var(--padding)}.lil-gui .title:before{content:"▾";display:inline-block;font-family:lil-gui;padding-right:2px}.lil-gui .title:active{background:var(--title-background-color);opacity:.75}.lil-gui.root>.title:focus{text-decoration:none!important}.lil-gui.closed>.title:before{content:"▸"}.lil-gui.closed>.children{opacity:0;transform:translateY(-7px)}.lil-gui.closed:not(.transition)>.children{display:none}.lil-gui.transition>.children{overflow:hidden;pointer-events:none;transition-duration:.3s;transition-property:height,opacity,transform;transition-timing-function:cubic-bezier(.2,.6,.35,1)}.lil-gui .children:empty:before{content:"Empty";display:block;font-style:italic;height:var(--widget-height);line-height:var(--widget-height);margin:var(--spacing) 0;opacity:.5;padding:0 var(--padding)}.lil-gui.root>.children>.lil-gui>.title{border-width:0;border-bottom:1px solid var(--widget-color);border-left:0 solid var(--widget-color);border-right:0 solid var(--widget-color);border-top:1px solid var(--widget-color);transition:border-color .3s}.lil-gui.root>.children>.lil-gui.closed>.title{border-bottom-color:transparent}.lil-gui+.controller{border-top:1px solid var(--widget-color);margin-top:0;padding-top:var(--spacing)}.lil-gui .lil-gui .lil-gui>.title{border:none}.lil-gui .lil-gui .lil-gui>.children{border:none;border-left:2px solid var(--widget-color);margin-left:var(--folder-indent)}.lil-gui .lil-gui .controller{border:none}.lil-gui input{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:0;border-radius:var(--widget-border-radius);color:var(--text-color);font-family:var(--font-family);font-size:var(--input-font-size);height:var(--widget-height);outline:none;width:100%}.lil-gui input:disabled{opacity:1}.lil-gui input[type=number],.lil-gui input[type=text]{padding:var(--widget-padding)}.lil-gui input[type=number]:focus,.lil-gui input[type=text]:focus{background:var(--focus-color)}.lil-gui input::-webkit-inner-spin-button,.lil-gui input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.lil-gui input[type=number]{-moz-appearance:textfield}.lil-gui input[type=checkbox]{appearance:none;-webkit-appearance:none;border-radius:var(--widget-border-radius);cursor:pointer;height:var(--checkbox-size);text-align:center;width:var(--checkbox-size)}.lil-gui input[type=checkbox]:checked:before{content:"✓";font-family:lil-gui;font-size:var(--checkbox-size);line-height:var(--checkbox-size)}.lil-gui button{-webkit-tap-highlight-color:transparent;background:var(--widget-color);border:1px solid var(--widget-color);border-radius:var(--widget-border-radius);color:var(--text-color);cursor:pointer;font-family:var(--font-family);font-size:var(--font-size);height:var(--widget-height);line-height:calc(var(--widget-height) - 4px);outline:none;text-align:center;text-transform:none;width:100%}.lil-gui button:active{background:var(--focus-color)}@font-face{font-family:lil-gui;src:url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff")}@media (pointer:coarse){.lil-gui.allow-touch-styles{--widget-height:28px;--padding:6px;--spacing:6px;--font-size:13px;--input-font-size:16px;--folder-indent:10px;--scrollbar-width:7px;--slider-input-min-width:50px;--color-input-min-width:65px}}@media (hover:hover){.lil-gui .controller.color .display:hover:before{border:1px solid #fff9;border-radius:var(--widget-border-radius);bottom:0;content:" ";display:block;left:0;position:absolute;right:0;top:0}.lil-gui .controller.option .display.focus{background:var(--focus-color)}.lil-gui .controller.option .widget:hover .display{background:var(--hover-color)}.lil-gui .controller.number .slider:hover{background-color:var(--hover-color)}body:not(.lil-gui-dragging) .lil-gui .title:hover{background:var(--title-background-color);opacity:.85}.lil-gui .title:focus{text-decoration:underline var(--focus-color)}.lil-gui input:hover{background:var(--hover-color)}.lil-gui input:active{background:var(--focus-color)}.lil-gui input[type=checkbox]:focus{box-shadow:inset 0 0 0 1px var(--focus-color)}.lil-gui button:hover{background:var(--hover-color);border-color:var(--hover-color)}.lil-gui button:focus{border-color:var(--focus-color)}}'),du=!0),n?n.appendChild(this.domElement):e&&(this.domElement.classList.add("autoPlace"),document.body.appendChild(this.domElement)),s&&this.domElement.style.setProperty("--width",s+"px"),this.domElement.addEventListener("keydown",l=>l.stopPropagation()),this.domElement.addEventListener("keyup",l=>l.stopPropagation())}add(t,e,n,s,r){if(Object(n)===n)return new g_(this,t,e,n);const a=t[e];switch(typeof a){case"number":return new m_(this,t,e,n,s,r);case"boolean":return new c_(this,t,e);case"string":return new __(this,t,e);case"function":return new so(this,t,e)}console.error(`gui.add failed
	property:`,e,`
	object:`,t,`
	value:`,a)}addColor(t,e,n=1){return new p_(this,t,e,n)}addFolder(t){return new Sl({parent:this,title:t})}load(t,e=!0){return t.controllers&&this.controllers.forEach(n=>{n instanceof so||n._name in t.controllers&&n.load(t.controllers[n._name])}),e&&t.folders&&this.folders.forEach(n=>{n._title in t.folders&&n.load(t.folders[n._title])}),this}save(t=!0){const e={controllers:{},folders:{}};return this.controllers.forEach(n=>{if(!(n instanceof so)){if(n._name in e.controllers)throw new Error(`Cannot save GUI with duplicate property "${n._name}"`);e.controllers[n._name]=n.save()}}),t&&this.folders.forEach(n=>{if(n._title in e.folders)throw new Error(`Cannot save GUI with duplicate folder "${n._title}"`);e.folders[n._title]=n.save()}),e}open(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),this.domElement.classList.toggle("closed",this._closed),this}close(){return this.open(!1)}show(t=!0){return this._hidden=!t,this.domElement.style.display=this._hidden?"none":"",this}hide(){return this.show(!1)}openAnimated(t=!0){return this._closed=!t,this.$title.setAttribute("aria-expanded",!this._closed),requestAnimationFrame(()=>{const e=this.$children.clientHeight;this.$children.style.height=e+"px",this.domElement.classList.add("transition");const n=r=>{r.target===this.$children&&(this.$children.style.height="",this.domElement.classList.remove("transition"),this.$children.removeEventListener("transitionend",n))};this.$children.addEventListener("transitionend",n);const s=t?this.$children.scrollHeight:0;this.domElement.classList.toggle("closed",!t),requestAnimationFrame(()=>{this.$children.style.height=s+"px"})}),this}title(t){return this._title=t,this.$title.innerHTML=t,this}reset(t=!0){return(t?this.controllersRecursive():this.controllers).forEach(e=>e.reset()),this}onChange(t){return this._onChange=t,this}_callOnChange(t){this.parent&&this.parent._callOnChange(t),this._onChange!==void 0&&this._onChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}onFinishChange(t){return this._onFinishChange=t,this}_callOnFinishChange(t){this.parent&&this.parent._callOnFinishChange(t),this._onFinishChange!==void 0&&this._onFinishChange.call(this,{object:t.object,property:t.property,value:t.getValue(),controller:t})}destroy(){this.parent&&(this.parent.children.splice(this.parent.children.indexOf(this),1),this.parent.folders.splice(this.parent.folders.indexOf(this),1)),this.domElement.parentElement&&this.domElement.parentElement.removeChild(this.domElement),Array.from(this.children).forEach(t=>t.destroy())}controllersRecursive(){let t=Array.from(this.controllers);return this.folders.forEach(e=>{t=t.concat(e.controllersRecursive())}),t}foldersRecursive(){let t=Array.from(this.folders);return this.folders.forEach(e=>{t=t.concat(e.foldersRecursive())}),t}}let pu=function(i,t,e){let n=Math.cos(i)*Math.sin(e),s=Math.sin(i)*Math.sin(e),r=Math.cos(t)*Math.cos(e),a=Math.sin(t)*Math.cos(e);return new Kt(n,r,-s,a)},mu=function(i){return new D(i.y,-i.x,i.w).divideScalar(1-i.z)},Or=function(i=glassColor,t=!1){let e={color:i,clearcoat:1,roughness:.1,metalness:0};return t&&(e.transparent=!0,e.opacity=1,e.transmission=.95,e.ior=1.5,e.thickness=.1),new Vu(e)},$n={red:13908795,orange:12737323,yellow:15248426,green:4432699,blue:4360181,purple:8210109,pink:13584575,glass:13232895};class gu extends Se{constructor(t=(s,r,a)=>a.set(s,r,Math.cos(s)*Math.sin(r)),e=8,n=8){super(),this.type="ParametricGeometry",this.parameters={func:t,slices:e,stacks:n};const s=[],r=[],a=[],o=[],l=1e-5,u=new D,h=new D,f=new D,c=new D,m=new D,g=e+1;for(let _=0;_<=n;_++){const d=_/n;for(let p=0;p<=e;p++){const x=p/e;t(x,d,h),r.push(h.x,h.y,h.z),x-l>=0?(t(x-l,d,f),c.subVectors(h,f)):(t(x+l,d,f),c.subVectors(f,h)),d-l>=0?(t(x,d-l,f),m.subVectors(h,f)):(t(x,d+l,f),m.subVectors(f,h)),u.crossVectors(c,m).normalize(),a.push(u.x,u.y,u.z),o.push(x,d)}}for(let _=0;_<n;_++)for(let d=0;d<e;d++){const p=_*g+d,x=_*g+d+1,y=(_+1)*g+d+1,v=(_+1)*g+d;s.push(p,x,v),s.push(x,y,v)}this.setIndex(s),this.setAttribute("position",new ye(r,3)),this.setAttribute("normal",new ye(a,3)),this.setAttribute("uv",new ye(o,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}const _u=new Wo([new D(-1,-1,0),new D(-1,1,0),new D(1,1,0)]);class v_ extends Se{constructor(t=_u,e=_u,n=64,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:n,radii:e,radialSegments:s,closed:r};const a=t.computeFrenetFrames(n,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new D,l=new D,u=new ut;let h=new D,f;const c=[],m=[],g=[],_=[];d(),this.setIndex(_),this.setAttribute("position",new ye(c,3)),this.setAttribute("normal",new ye(m,3)),this.setAttribute("uv",new ye(g,2));function d(){for(let v=0;v<n;v++)p(v);p(r===!1?n:0),y(),x()}function p(v){h=t.getPointAt(v/n,h),f=e.getPointAt(v/n,f);const T=a.normals[v],A=a.binormals[v];for(let w=0;w<=s;w++){const P=w/s*Math.PI*2,b=Math.sin(P),M=-Math.cos(P);l.x=M*T.x+b*A.x,l.y=M*T.y+b*A.y,l.z=M*T.z+b*A.z,l.normalize(),m.push(l.x,l.y,l.z),o.x=h.x+f.x*l.x,o.y=h.y+f.x*l.y,o.z=h.z+f.x*l.z,c.push(o.x,o.y,o.z)}}function x(){for(let v=1;v<=n;v++)for(let T=1;T<=s;T++){const A=(s+1)*(v-1)+(T-1),w=(s+1)*v+(T-1),P=(s+1)*v+T,b=(s+1)*(v-1)+T;_.push(A,w,b),_.push(w,P,b)}}function y(){for(let v=0;v<=n;v++)for(let T=0;T<=s;T++)u.x=v/n,u.y=T/s,g.push(u.x,u.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class x_{constructor(t,e){this.coordCurve=t,this.length=e.length,this.area=e.area,this.tau=e.tau,this.fromTauCoords=e.fromTauCoords,this.res=256;let n=function(o){let l=25e-5,u=Math.floor(o/l),h=0,f=0;for(let c=0;c<u;c++){let m=t(f),g=t(f+l),_=Math.sin(m.phi/2),d=g.theta-m.theta;h+=_*_*d,f+=l}return h},s=function(o){let l=0,u=0,h=3e3,f=2*Math.PI/h;for(let c=0;c<h;c++){let m=t(l),g=t(l+f),_=Math.sin(m.phi),d=g.theta-m.theta,p=g.phi-m.phi,x=_*_*d*d+p*p,y=Math.sqrt(x);if(u+=y,u>o)break;l+=f}return l},r=function(o){let l=new ut(e.area/2,e.length/2);for(;o.y>e.length/2;)o=o.sub(l);return o};this.toFundamentalDomain=r;let a=function(o){o=r(o);let l=o.x,u=o.y,h=s(2*u),f=t(h),c=f.phi,m=f.theta,g=n(h),_=pu(m+l-g,l-g,c/2);return mu(_)};this.isometricImage=a}getSurface(t=$n.glass,e=!1){let n=this.coordCurve,s=function(o,l,u){let h=2*Math.PI*o,f=2*Math.PI*l,c=n(f),m=c.phi,g=c.theta,_=pu(g+h,h,m/2),d=mu(_);u.set(d.x,d.y,d.z)},r=new gu(s,this.res,this.res),a=Or(t,e);return new Ae(r,a)}getSubSurface(t,e=$n.glass,n=!1){let s=this.isometricImage,r=function(l,u,h){let f=t(l,u),c=s(f);h.set(c.x,c.y,c.z)},a=new gu(r,512,512);a.computeVertexNormals();let o=Or(e,n);return o.side=sn,new Ae(a,o)}getLift(t,e=$n.red,n=.05,s=!1,r=!1){let a=[],o=[];for(let c=0;c<this.res+1;c++){let m=c/this.res,g=t(m),_=this.isometricImage(g);a.push(_);let d=n*(1+_.lengthSq());o.push(new D(d,d,d))}let l=new Wo(a),u=new Wo(o),h=new v_(l,u,2*this.res,16,r),f=Or(e,s);return new Ae(h,f)}getFiberAt(t,e=$n.blue,n=.025,s=!1){let a=new ut(this.area/2,this.length/2).multiplyScalar(t),o=new ut(2*Math.PI,0),l=function(u){return a.clone().add(o.clone().multiplyScalar(u))};return this.getLift(l,e,n,s)}getOppEdgeAt(t,e=$n.blue,n=.025,s=!1){let r=new ut(-this.area/2,this.length/2),a=new ut(2*Math.PI,0).multiplyScalar(t),o=function(l){return a.clone().add(r.clone().multiplyScalar(l))};return this.getLift(o,e,n,s)}getEdgeAt(t,e=$n.blue,n=.025,s=!1){let r=new ut(this.area/2,this.length/2),a=new ut(2*Math.PI,0).multiplyScalar(t),o=function(l){return a.clone().add(r.clone().multiplyScalar(l))};return this.getLift(o,e,n,s)}getGridlines(t,e=$n.blue,n=.025,s=!1){let r=new ts;for(let a=0;a<t+1;a++){let o=this.getFiberAt(a/t,e,n,s),l=this.getEdgeAt(a/t,e,n,s);r.add(o),r.add(l)}return r}getPoint(t,e=$n.red,n=.05,s=!1){let r=this.isometricImage(t),a=1+r.lengthSq(),o=new dl(n*a),l=Or(e,s),u=new Ae(o,l);return u.position.set(r.x,r.y,r.z),u}}const Tl=new ut(-1/2,Math.sqrt(3)/2);let y_=4*Math.PI*Tl.x,M_=4*Math.PI*Tl.y,b_=function(i){let t=.276,e=1.9,n=3;return{phi:Math.PI/2+t*e*Math.cos(n*i),theta:i+t*Math.sin(2*n*i)}},S_=function(i){let t=i[0],e=i[1];return new ut(t,e).multiplyScalar(2*Math.PI)},T_={area:y_,length:M_,tau:Tl,fromTauCoords:S_};const vu=[[.76481715,.33527086],[.04224464,.85146423],[-.0018915,.65124819],[.26923076,.06661733],[.38713745,.84891603],[.3001261,.20676857],[.34300126,.64869998],[.64501891,.20422036],[.34300126,.07134971],[.68789407,.06880151],[-.0346784,.58499488],[-.0788146,.38477883],[.31021437,.58244667],[.26607818,.38223063],[.76166456,.07353389],[.00819672,.44957602],[.31021437,.0050964],[.35308953,.44702782],[.38398486,.58717905],[.33984867,.38696301],[-.4136191,.76300514],[.68474148,.3844148],[.08196721,.4543084],[.38398486,.00982878],[.72887767,.00728058],[-.3398486,.76773752],[-.037831,.3232579],[.00504413,.76518932],[.30706179,.3207097],[.34993694,.76264111],[.26292559,.12049365],[.00504413,.18783905],[.07881462,.7699217],[.34993694,.18529084],[.38083228,.32544208],[.42370744,.76737349],[.33669609,.12522603],[-.3726355,.70148421],[.72572509,.32289387],[.6815889,.12267783],[.42370744,.19002322],[.76860025,.18747502],[-.298865,.70621659],[.04602774,.70366839],[.00189155,.50345234],[.39092055,.70112018],[.34678436,.50090414],[.3039092,.05897272],[.42181588,.84127141],[.64880201,.05642452],[.84237074,.1922074],[.46469104,.70585256],[.42055485,.50563652],[.37767969,.0637051],[.7225725,.0611569],[-.0308953,.43719903],[-.0750315,.23698299],[.04287515,.44193141],[-.001261,.24171537],[.38776796,.43938321],[.34363177,.23916716],[.08575031,.30651256],[.43064312,.30396435],[.46153846,.44411559],[.41740226,.24389954],[-.2919293,.82015772],[-.3360655,.61994168],[.76229508,.24135134],[.03972257,.75754471],[.38461538,.7549965],[-.2181588,.8248901],[-.262295,.62467406],[.00882723,.0400432],[.12673392,.8223419],[.08259773,.62212585],[.03972257,.18019444],[.47162673,.81979369],[.38461538,.17764623],[.42749054,.61957765],[.45838587,.75972888],[.72950819,.17509803],[.08259773,.04477558],[.42749054,.04222738],[.45838587,.18237861],[-.2950819,.55842075],[.80327868,.17983041],[.04981084,.55587254],[.00567465,.3556565],[.50126103,.04695976],[.84615384,.04441155],[-.2213114,.56315313],[.12358133,.56060492],[.07944514,.36038888],[.46847414,.55805672],[.42433795,.35784067],[.49936948,.69820795],[.54224464,.5627891],[.49810844,.36257305],[-.2553593,.73861519],[.04665825,.29413557],[.00252206,.09391952],[-.1815889,.74334757],[.08953341,.15871671],[.12042875,.29886795],[.1633039,.74079936],[.07629255,.0986519],[.46532156,.29631974],[.50819672,.73825116],[.42118537,.0961037],[.81021437,.29377154],[.76607818,.09355549],[.1633039,.16344909],[.50819672,.16090089],[.58322824,.50126817],[.53909205,.30105212],[.49495586,.10083608],[-.2143757,.67709426],[-.2585119,.47687821],[.83984867,.09828787],[.13051702,.67454605],[.04350567,.03239859],[.08638083,.47433001],[.11727616,.61448124],[.50630517,.81214908],[.46216897,.61193304],[-.1406052,.68182664],[.20428751,.67927843],[.11727616,.03713097],[.16015132,.47906239],[.54918032,.67673023],[.50504413,.47651418],[.46216897,.03458277],[.53593947,.61666541],[.80706179,.03203456],[.83795712,.17218579],[-.1746532,.8572887],[.88083228,.03676694],[-.2175283,.41535728],[.12736443,.41280908],[.08322824,.21259303],[-.1008827,.86202108],[.20113493,.41754146],[.15699873,.21732541],[.54602774,.41499325],[.50189155,.21477721],[.84678436,.212229],[-.2206809,.73097058],[.12421185,.72842237],[.61979823,.41972563],[-.1336696,.79576777],[-.1778058,.59555172],[.2112232,.79321956],[.12421185,.1510721],[.16708701,.59300352],[.19798234,.73315475],[.54287515,.73060655],[.16708701,.01565325],[.28499369,.79795194],[.19798234,.15580448],[.2408575,.5977359],[.54287515,.15325628],[.88776796,.15070807],[.2408575,.02038563],[-.1368221,.53403079],[-.1809583,.33381475],[.20807061,.53148259],[.16393442,.33126654],[.23896595,.67163382],[.19482976,.47141777],[.58385876,.66908562],[.53972257,.46886957],[.2818411,.53621497],[.23770491,.33599892],[.62673392,.53366676],[-.4848675,.85219229],[-.1399747,.84964409],[.91551071,.02912233],[.20491803,.84709588],[-.1399747,.27229382],[-.0970996,.71422523],[.24779319,.71167703],[.20491803,.26974561],[.16078184,.06952957],[.27868852,.85182826],[.58070617,.40734864],[-.2168978,.58317473],[.27868852,.27447799],[.23455233,.07426195],[.62358133,.27192979],[.57944514,.07171374],[-.1431273,.58790711],[.20176544,.58535891],[-.056116,.6527043],[-.1002522,.45248826],[.28877679,.6501561],[.20176544,.00800864],[.2446406,.44994005],[.31967213,.79030733],[.27553593,.59009129],[.54665825,.00546043],[.62042875,.58754308],[.36254728,.65488848],[.66456494,.21040886],[-.4350567,.83071457],[.62042875,.01019281],[-.133039,.38623495],[.96532156,.00764461],[-.1034047,.76810155],[.19861286,.32362193],[.58764186,.52128977],[-.3612862,.83544695],[.54350567,.32107373],[-.0592686,.39096733],[-.1034047,.19075128],[.28562421,.38841912],[.24148802,.18820308],[.66141235,.52602215],[.61727616,.32580611],[-.1361916,.70184824],[.3593947,.3931515],[-.3940731,.76919364],[.70428751,.3906033],[-.0624211,.70658062],[.28247162,.70403242],[-.019546,.57116177],[-.0624211,.12923035],[.28247162,.12668215],[.35624211,.7087648],[.62736443,.12413394],[.65825977,.26428517],[-.1393442,.44011127],[.70113493,.12886632],[-.0523329,.50490846],[-.0964691,.30469241],[-.0214375,.64505969],[-.0655737,.44484365],[.32345523,.64251149],[.27931904,.44229544],[.62421185,.43974724],[.02143757,.50964084],[-.0226986,.30942479],[.36633039,.50709263],[.32219419,.30687659],[-.4003783,.82306996],[.65510718,.0025482],[.69798234,.44447962],[-.0554854,.82052175],[-.0996216,.62030571],[.44010088,.51182501],[.74211853,.06734539],[-.3575031,.6876511],[-.0554854,.24317148],[.01828499,.82525413],[-.0687263,.18310667],[.32030264,.38077451],[.3631778,.82270593],[.27616645,.18055847],[.66519546,.37822631],[.62105926,.17801026],[.01828499,.24790386],[-.0258511,.04768782],[.3631778,.24535566],[.31904161,.04513961],[.43694829,.82743831],[.70807061,.24280745],[.66393442,.04259141],[.73896595,.38295869],[.69482976,.18274264],[-.058638,.55878478],[-.3165195,.62613017],[.7818411,.24753983],[-.0157629,.42336592],[.0592686,.7637332],[.0151324,.56351716],[.40416141,.761185],[.36002522,.56096895],[.66204287,.11648933],[.73581336,.12122171],[-.3638083,.74152742],[-.0617906,.2970478],[-.2767969,.80632461],[.02522068,.36184499],[-.0189155,.16162895],[.05611601,.50199623],[.01197982,.30178018],[.40100882,.49944802],[.35687263,.29923198],[.70176544,.29668377],[.09899117,.36657737],[.05485498,.16636133],[.44388398,.36402917],[.78877679,.36148096],[-.3228247,.68000649],[.77553593,.30141615],[.02206809,.67745829],[-.022068,.47724224],[.39785624,.81506131],[-.2799495,.54458764],[.06494325,.54203943],[.02206809,.10010802],[.09583858,.68219067],[.39785624,.23771105],[.44073139,.67964246],[.35372005,.037495],[.74274905,.23516284],[.69861286,.0349468],[.09583858,.1048404],[.44073139,.10229219],[.78562421,.09974399],[.81651954,.23989522],[.77238335,.03967917],[.0630517,.61593736],[.01891551,.41572131],[.8593947,.10447637],[.06179066,.28030246],[.13682219,.62066974],[.092686,.42045369],[.481715,.61812153],[.43757881,.41790549],[-.315889,.79394762],[-.2421185,.79868],[.10277427,.7961318],[.01576292,.15398434],[.40479192,.35165218],[.36065573,.15143613],[.10277427,.21878153],[.05863808,.01856548],[.17654476,.80086418],[.47856242,.35638456],[.52143757,.79831597],[.43442622,.15616851],[.77931904,.15362031],[.17654476,.22351391],[.52143757,.2209657],[.86633039,.2184175],[-.2011349,.73715907],[-.2452711,.53694303],[.85308953,.15835269],[.14375788,.73461087],[.09962168,.53439482],[.4445145,.53184662],[.47540983,.67199785],[-.2023959,.40152417],[.21752837,.73934325],[.17339218,.5391272],[.56242118,.73679504],[.51828499,.536579],[.47540983,.09464758],[.82030264,.09209938],[-.279319,.71240509],[-.2042875,.4754221],[.14060529,.47287389],[.0964691,.27265785],[.4854981,.47032569],[.44136191,.27010964],[-.2812105,.78630301],[.13934426,.13723899],[.5592686,.47505807],[.5151324,.27484202],[-.1941992,.8511002],[-.2383354,.65088416],[-.2074401,.79103539],[.01954602,.00618849],[.13745271,.78848718],[.48234552,.78593898],[-.1954602,.5154653],[-.1204287,.85583258],[-.1645649,.65561654],[.22446406,.85328438],[.13745271,.21113692],[.18032786,.65306833],[.09331651,.01092087],[.48234552,.20858871],[.52522068,.65052013],[.43820933,.00837267],[.18032786,.07571806],[.29823455,.85801676],[.25409836,.65780071],[.52522068,.07316986],[.55611601,.21332109],[.59899117,.65525251],[.51197982,.01310505],[.85687263,.01055684],[.59899117,.07790224],[-.1235813,.59409561],[-.1677175,.39387956],[.22131147,.5915474],[.17717528,.39133136],[.56620428,.5889992],[.52206809,.38878315],[.55296343,.52893438],[.63997477,.59373158],[.59583858,.39351553],[-.1576292,.76955767],[.14438839,.32507805],[.1002522,.124862],[-.1267339,.33235863],[-.0838587,.77429005],[.26103404,.77174184],[.21815889,.32981043],[.17402269,.12959438],[.5630517,.32726222],[.51891551,.12704618],[-.2036569,.64323954],[.33480453,.77647422],[.14123581,.64069134],[.63682219,.3319946],[.592686,.13177856],[-.1166456,.70803674],[-.1607818,.50782069],[-.1298865,.64797192],[.2150063,.64542372],[.55989911,.64287552],[-.0428751,.71276912],[-.0870113,.51255307],[.30201765,.71022091],[.2150063,.06807345],[.25788146,.51000487],[.55989911,.06552525],[.60277427,.50745666],[.6336696,.07025763],[.67654476,.51218904],[-.1197982,.44629976],[.22509457,.44375156],[-.0901639,.82816636],[.18095838,.24353551],[.13682219,.04331947],[.25472887,.82561816],[-.0460277,.45103214],[-.0901639,.2508161],[.29886506,.44848394],[.25472887,.24826789],[-.4546027,.82452607],[.64375788,.44593573],[.59962168,.24571969],[.63051702,.38587092],[-.1229508,.76191306],[.22194199,.75936485],[-.3808322,.82925845],[.71752837,.45066811],[.67339218,.25045207],[-.0359394,.82671025],[-.0800756,.6264942],[-.0491803,.76664543],[.22194199,.18201458],[.29571248,.76409723],[-.0063051,.63122658],[.29571248,.18674696],[.33858764,.62867838],[.64060529,.18419876],[-.1261034,.50017608],[.2187894,.49762788],[.71437578,.18893114],[-.039092,.56497327],[-.0832282,.36475723],[.30580075,.56242507],[.26166456,.36220902],[.29255989,.50236025],[.63745271,.49981205],[.03467843,.56970565],[-.0094577,.36948961],[.37957124,.56715745],[.33543505,.3669414],[-.4180327,.74298354],[.68032786,.3643932],[.25851197,.67782232],[-.3442622,.74771592],[-.0422446,.3032363],[63051e-8,.74516771],[.30264817,.30068809],[-.0126103,.6851029],[.25851197,.10047205],[.33228247,.6825547],[.63430012,.23807507],[.074401,.74990009],[.37641866,.30542047],[.33228247,.10520443],[-.3770491,.68146261],[.72131147,.30287227],[.67717528,.10265622],[-.0453972,.61884959],[.29949558,.61630139],[-.3032786,.68619499],[.79508196,.30760465],[.04161412,.68364678],[-.002522,.48343074],[.34237074,.48088253],[.29949558,.03895112],[.41740226,.82124981],[.37326607,.62103377],[-.4243379,.79685986],[-.1223203,.35238023],[.07124842,.48816312],[.41614123,.48561491],[.37326607,.0436835],[-.3373266,.86165705],[.71815889,.04113529],[-.3505674,.80159224],[-.0485498,.35711261],[-.0056746,.79904403],[.33921815,.79649583],[.296343,.35456441],[.03846153,.42190981],[.08133669,.86384122],[-.0056746,.22169376],[.38335435,.4193616],[.33921815,.21914556],[.37011349,.35929679],[-.3833543,.73533893],[.7150063,.35674859],[.45712484,.42409398],[.41298865,.22387794],[-.3404791,.59992007],[.75788146,.22132973],[-.3095838,.7400713],[-.0384615,.15544045],[.03530895,.7375231],[-.0088272,.53730706],[.38020176,.7349749],[.33606557,.53475885],[-.2667087,.60465245],[.07818411,.60210425],[.03530895,.16017283],[.38020176,.15762463],[.42307692,.59955604],[.45397225,.73970728],[.3669609,.09755981],[.75598991,.29522765],[.71185372,.09501161],[-.0416141,.47105375],[.45397225,.16235701],[-.2994955,.53839914],[.79886506,.1598088],[.03215636,.47578612],[.37704918,.47323792],[-.225725,.54313152],[.07503152,.34036727],[.41992433,.33781907],[.49495586,.67818635],[.45081967,.4779703],[-.3026481,.85401244],[-.3467843,.65379639],[-.0447667,.20931677],[-.259773,.71859358],[-.2288776,.85874482],[.04224464,.27411396],[-.2730138,.65852877],[-.0018915,.07389792],[.11601513,.85619661],[.07187894,.65598057],[.02900378,.21404915],[.46090794,.85364841],[.37389659,.21150094],[-.1860025,.72332596],[.7187894,.20895274],[.11601513,.27884634],[.15889029,.72077776],[.07187894,.0786303],[.46090794,.27629814],[.41677175,.07608209],[.49180327,.41644937],[.44766708,.21623332],[-.3058007,.59227546],[.79255989,.21368512],[.03909205,.58972726],[.53467843,.28103052],[.49054224,.08081447],[-.2629255,.45685661],[.03909205,.01237699],[.15699873,.79467568],[.11286254,.59445964],[.06872635,.39424359],[.50189155,.79212748],[.45775535,.59191143],[.41361916,.39169539],[.48865069,.73206266],[-.1891551,.46158899],[.11286254,.01710937],[.1557377,.45904078],[.50063051,.45649258],[.45775535,.01456116],[.53152585,.59664381],[.80264817,.01201296],[.8335435,.15216419],[-.2660781,.7724699],[.03593947,.32799028],[.53152585,.01929354],[-.2219419,.39533568],[.87641866,.01674534],[.12295081,.39278747],[-.1923076,.77720228],[.07881462,.19257143],[.10970996,.33272266],[.49873896,.5303905],[.45460277,.33017446],[.79949558,.32762625],[.15258511,.19730381],[.49747793,.1947556],[.57250945,.53512288],[.52837326,.33490683],[-.2250945,.71094897],[-.2692307,.51073293],[.11979823,.70840077],[.03278688,.0662533],[.07566204,.50818472],[.15069356,.848552],[.49558638,.84600379],[-.1822194,.57553012],[.11979823,.1310505],[.19356872,.71313315],[.10655737,.07098568],[.53846153,.71058494],[.45145018,.06843748],[.84047919,.26610532],[-.1084489,.5802625],[.796343,.06588928],[.19356872,.13578288],[.53846153,.13323467],[.88335435,.13068647],[-.2282471,.449212],[.87011349,.07062165],[.11664564,.44666379],[.61223203,.13796705],[.1595208,.31124494],[.23455233,.65161222],[.19041614,.45139617],[.14627994,.25118012],[.57944514,.64906401],[.53530895,.44884797],[.23329129,.31597732],[-.1443883,.82962248],[.91109709,.00910072],[-.1885245,.62940644],[.20050441,.82707428],[.15636822,.62685823],[.11349306,.18492682],[-.1443883,.25227221],[.20050441,.24972401],[.15636822,.04950796],[.2742749,.83180666],[.23139974,.38987524],[.18726355,.18965919],[.57629255,.38732704],[.53215636,.18711099],[.87704918,.18456279],[.23013871,.05424034],[.15447667,.70075615],[.57503152,.05169214],[-.1475409,.56788551],[-.1916771,.36766946],[.24148802,.76555335],[.19735182,.5653373],[.15321563,.36512126],[.22824716,.70548853],[.57313997,.70294033],[-.1046658,.43246665],[.24022698,.42991845],[.31525851,.77028573],[.27112232,.57006968],[.57313997,.12559006],[.61601513,.56752148],[.91803278,.12304186],[-.1506935,.30614853],[.19419924,.30360033],[.2370744,.16818147],[.31210592,.50854875],[.26796973,.3083327],[.65699873,.50600055],[.61286254,.3057845],[-.1847414,.48161059],[-.1097099,.82197787],[.23518284,.81942966],[-.0668348,.68655902],[-.1109709,.48634297],[.278058,.68401081],[.19104665,.04186335],[.30895334,.82416204],[.53593947,.03931515],[.278058,.10666054],[.35182849,.68874319],[.65384615,.24426357],[-.4457755,.86456928],[.60970996,.04404752],[-.1437578,.42008966],[.95460277,.04149932],[-.1128625,.56024089],[.23203026,.55769269],[.57692307,.55514448],[-.1008827,.28467081],[-.0258511,.62503809],[-.0699873,.42482204],[-.1141235,.224606],[.31904161,.62248988],[.27490542,.42227384],[.23076923,.22205779],[.65069356,.55987686],[-.0271122,.28940319],[.3928121,.62722226],[.34867591,.42700622],[-.4047919,.80304835],[.69356872,.42445801],[-.0598991,.80050015],[-.1040353,.6002841],[-.3310214,.80778073],[.01387137,.80523253],[-.0731399,.16308506],[.31588902,.36075291],[.35876418,.80268432],[.27175283,.16053686],[.66078184,.3582047],[.34552332,.74261951],[.61664564,.15798866],[.31462799,.02511801],[.43253467,.8074167],[.73455233,.36293708],[.69041614,.16272104],[-.0189155,.73897922],[-.0630517,.53876317],[-.1071878,.33854713],[-.0321563,.6789144],[.31273644,.6763662],[.05485498,.7437116],[.01071878,.54349555],[.39974779,.74116339],[.3556116,.54094735],[.31273644,.09901593],[.65762925,.09646773],[-.411097,.85692467],[-.0662042,.85437647],[.42938209,.54567973],[.73139974,.10120011],[-.3682219,.72150582],[-.0662042,.2770262],[-.0353089,.41717743],[.0075662,.85910884],[.35245901,.85656064],[.30958385,.41462922],[.65447667,.41208102],[-.0233291,.14160734],[.05170239,.48197462],[.0075662,.28175858],[-.0365699,.08154253],[.3965952,.47942642],[.35245901,.27921037],[.4262295,.86129302],[.69735182,.27666217],[-.3701134,.79540374],[.72824716,.4168134],[-.0252206,.79285553],[-.3272383,.65998489],[.77112232,.28139455],[.01765447,.65743668],[-.0264817,.45722064],[.04854981,.79758791],[.27553593,.01274102],[.39344262,.79503971],[.09142496,.66216906],[.04854981,.22023764],[.00441361,.0200216],[.39344262,.21768944],[.43631778,.65962086],[.34930643,.0174734],[.73833543,.21514124],[.69419924,.01492519],[.72509457,.15507642],[-.0283732,.53111856],[.31651954,.52857035],[.51008827,.66435324],[-.2862547,.59846396],[.81210592,.21987362],[.76796973,.01965757],[.05863808,.59591575],[.01450189,.39569971],[-.0296343,.19548366],[.04539722,.53585094],[.39029003,.53330273],[-.4073139,.70912883],[.13240857,.60064813],[.08827238,.40043209],[.43316519,.39788388],[-.3335435,.7138612],[.0113493,.711313],[.31336696,.26683338],[-.2465321,.7786584],[.09836065,.77611019],[.05548549,.33417878],[.0113493,.13396273],[.40037831,.33163057],[.08511979,.71604538],[.35624211,.13141453],[.38713745,.27156576],[.43001261,.71349718],[.73203026,.26901755],[.12925598,.33891116],[.17213114,.78084257],[.08511979,.13869511],[.4741488,.33636295],[.51702395,.77829437],[.43001261,.13614691],[.77490542,.1335987],[-.2925598,.65234027],[.80580075,.27374993],[.05233291,.64979207],[.39722572,.64724387],[-.2496847,.51692142],[.84867591,.13833108],[.09520807,.51437322],[.1261034,.65452445],[.39722572,.0698936],[.47099621,.65197624],[.42686002,.4517602],[-.3266078,.82780234],[.16897856,.5191056],[.51387137,.51655739],[.47099621,.07462598],[.81588902,.07207777],[-.2528373,.83253471],[.04918032,.38805509],[.09205548,.82998651],[.39407313,.38550689],[-.2087011,.45540049],[.88965952,.07681015],[.13619167,.45285229],[.09205548,.25263624],[.48108448,.45030408],[.16582597,.83471889],[.43694829,.25008804],[.51071878,.83217069],[.46784363,.39023927],[-.2856242,.76628141],[.16582597,.25736862],[.51071878,.25482042],[-.242749,.63086255],[-.2118537,.77101378],[-.2559899,.57079774],[.13303909,.76846558],[.04602774,.12631812],[.0889029,.56824953],[.4779319,.76591738],[.43379571,.56570133],[.39092055,.12376991],[-.1689785,.63559493],[.13303909,.19111531],[.17591424,.63304673],[.20680958,.77319796],[.4779319,.18856711],[.16267339,.57298191],[.55170239,.77064976],[.46469104,.12850229],[.5075662,.57043371],[-.2887767,.50454443],[.80958385,.12595409],[.24968474,.63777911],[.55170239,.19329949],[.59457755,.6352309],[-.2150063,.50927681],[.1298865,.5067286],[.47477931,.5041804],[-.1721311,.37385796],[.17276166,.37130975],[.51765447,.36876155],[.54854981,.50891278],[.50441361,.30869673],[-.2490542,.68473887],[.24653215,.37604213],[.05296343,.24025925],[.59142496,.37349393],[-.1620428,.74953606],[-.1752837,.68947125],[.16960907,.68692305],[.12673392,.24499163],[-.4331651,.75681665],[.47162673,.24244342],[.51450189,.68437484],[-.1311475,.31233703],[.21374527,.30978882],[.16960907,.10957278],[.55863808,.30724062],[.24337957,.69165542],[.51450189,.10702457],[.54539722,.2471758],[-.2080706,.62321794],[.58827238,.11175695],[-.1651954,.48779909],[.93316519,.10920875],[-.1343001,.62795032],[-.1784363,.42773427],[.21059268,.62540212],[.16645649,.42518607],[.55548549,.62285391],[.5113493,.42263787],[-.0914249,.49253147],[.21059268,.04805185],[.25346784,.48998326],[.55548549,.04550364],[.59836065,.48743506],[.62925598,.62758629],[-.168348,.80341238],[.1336696,.35893276],[.32723833,.49471564],[.62925598,.05023602],[-.1374527,.36621334],[-.0945775,.80814476],[.2074401,.36366514],[.25031525,.80559656],[.55233291,.36111694],[-.0945775,.23079449],[.25031525,.22824629],[.59520807,.22569808],[.67023959,.56606536],[.6261034,.36584931],[.58196721,.16563327],[-.1273644,.74189145],[-.1715006,.54167541],[.13051702,.09719578],[.66897856,.23043046],[-.0844892,.6064726],[-.0535939,.74662383],[.21752837,.16199298],[-.0977301,.54640778],[.29129886,.74407563],[.20428751,.10192816],[.24716267,.54385958],[.59205548,.54131138],[.54918032,.09937996],[-.0535939,.16927356],[.89407313,.09683176],[.29129886,.16672536],[.63619167,.16417715],[.66708701,.30432838],[.62295081,.10411234],[-.130517,.48015447],[.21437578,.47760627],[.17023959,.27739023],[.59016393,.6152093],[-.0876418,.34473562],[-.0567465,.48488685],[.28814627,.48233865],[.24401008,.2821226],[-.4653215,.85838079],[.63303909,.47979045],[.5889029,.2795744],[-.0138713,.349468],[.33102143,.3469198],[.67591424,.34437159],[-.391551,.86311317],[.70680958,.48452282],[-.0466582,.86056496],[-.0907944,.66034892],[.2112232,.21586929],[.02711223,.86529734],[-.0170239,.6650813],[.25409836,.08045044],[.37200504,.86274914],[.28499369,.22060167],[.6298865,.21805347],[.58575031,.01783742],[.93064312,.01528922],[.32786885,.08518282],[.67276166,.08263462],[.74779319,.42300189],[.70365699,.22278585],[-.0498108,.59882799],[-.093947,.39861194],[.29508196,.59627978],[.25094577,.39606374],[.3259773,.73643101],[-.0069356,.46340913],[.29508196,.01892951],[.41298865,.80122821],[.36885245,.60101216],[.32471626,.40079612],[-.4287515,.77683825],[.36885245,.02366189],[-.354981,.78157063],[-.0529634,.33709101],[-.0100882,.77902243],[.29192938,.33454281],[.24779319,.13432676],[.32282471,.47469404],[.66771752,.47214583],[-.0100882,.20167216],[.33480453,.19912395],[.40983606,.53949123],[.36569987,.33927518],[.32156368,.13905914],[-.3877679,.71531732],[.71059268,.33672698],[.66645649,.13651094],[.40857503,.20385633],[.33291298,.85037214],[-.3139974,.7200497],[.78436317,.34145936],[.03089533,.7175015],[-.0132408,.51728545],[.37578814,.71495329],[.28877679,.07280583],[.33165195,.51473725],[.40668348,.85510452],[.44955863,.71968567],[.36254728,.07753821],[.75157629,.27520605],[.7074401,.07499],[.02774274,.45576452],[-.0163934,.25554847],[.41677175,.65343236],[.37263556,.45321632],[.32849936,.25300027],[.40353089,.59336755],[.0706179,.32034567],[.49054224,.65816474],[.44640605,.4579487],[-.3070617,.83399083],[-.3511979,.63377479],[-.3203026,.77392602],[-.0491803,.18929517],[.02459016,.77137781],[.36948297,.76882961],[-.2332912,.83872321],[-.2774274,.63850717],[.11160151,.83617501],[.06746532,.63595896],[.02459016,.19402754],[.45649432,.8336268],[.36948297,.19147934],[.44325346,.77356199],[.74527112,.32908237],[.06746532,.05860869],[.41235813,.05606049],[.48738965,.39642776],[.44325346,.19621172],[-.3102143,.57225386],[.78814627,.19366352],[.06557377,.70985688],[.41046658,.70730868],[-.2364438,.57698624],[.10844892,.57443803],[.06431273,.37422199],[.45334174,.57188983],[.40920554,.37167378],[.48423707,.71204106],[.52711223,.57662221],[.82912988,.13214258],[-.2704918,.7524483],[.03152585,.30796868],[-.0126103,.10775263],[.40731399,.4455717],[.14943253,.5129171],[.10529634,.31270106],[.06116015,.11248501],[.49432534,.5103689],[.45018915,.31015285],[.40605296,.10993681],[.02837326,.62358197],[.52395964,.31488523],[-.2295081,.69092737],[-.2736443,.49071132],[.02837326,.0462317],[.14627994,.82853039],[.10214375,.62831435],[.49117276,.82598219],[.44703656,.62576614],[-.1557377,.69565975],[.74905422,.18128652],[-.1998738,.4954437],[.1891551,.69311154],[.10214375,.05096408],[.49117276,.24863192],[.53404791,.69056334],[.44703656,.04841588],[.83606557,.24608372],[.52080706,.63049852],[.79192938,.04586767],[.82282471,.1860189],[-.2326607,.42919039],[.86569987,.05060005],[.11223203,.42664219],[.06809583,.22642614],[.14312736,.56679342],[.48802017,.56424521],[.18600252,.43137457],[.53089533,.42882636],[-.2358133,.74480368],[.10907944,.74225548],[.60466582,.43355874],[-.148802,.80960088],[-.1929382,.60938483],[.10907944,.16490521],[.18284993,.74698786],[.13997477,.30505644],[.48486759,.30250824],[.52774274,.74443965],[-.0750315,.81433326],[.1519546,.02948636],[.22698612,.36985364],[.18284993,.16963759],[.57187894,.36730543],[.52774274,.16708939],[.87263556,.16454118],[-.2389659,.48306671],[.15006305,.68073455],[.10592686,.4805185],[-.1519546,.5478639],[-.1960907,.34764786],[.1929382,.5453157],[.14880201,.34509965],[.22383354,.68546693],[.17969735,.48525088],[.56872635,.68291872],[.481715,.04077126],[.52459016,.48270268],[.82660781,.03822306],[.22383354,.10811666],[.2667087,.55004808],[.56872635,.10556846],[.61160151,.54749987],[.91361916,.10302025],[-.1551071,.86347719],[.90037831,.04295544],[.14691046,.41899757],[.18978562,.86092899],[-.1551071,.28612693],[.18978562,.28357872],[.14564943,.08336268],[.22068095,.42372995],[.26355611,.86566137],[.56557377,.42118175],[-.2320302,.59700784],[.26355611,.2883111],[.60844892,.2857629],[-.4590163,.80450447],[-.1141235,.80195626],[-.1582597,.60174022],[.23076923,.79940806],[.18663303,.59919201],[.48865069,.15471239],[-.0712484,.66653741],[.27364438,.66398921],[.18663303,.02184175],[.30453972,.80414044],[.26040353,.60392439],[.60529634,.60137619],[.56242118,.15944477],[.90731399,.15689657],[.30453972,.22679017],[.26040353,.02657412],[.64943253,.22424197],[-.4501891,.84454768],[.60529634,.02402592],[-.1481715,.40006806],[.95018915,.02147772],[-.1172761,.54021929],[-.1614123,.34000324],[.22761664,.53767108],[.18348045,.33745504],[-.074401,.40480044],[.2704918,.40225223],[.30138713,.54240346],[.25725094,.34218742],[.64627994,.53985526],[.60214375,.33963921],[-.151324,.71568135],[.34426229,.40698461],[.6891551,.40443641],[-.1204287,.27848231],[-.0775535,.72041373],[.22446406,.27593411],[.26733921,.71786553],[.56935687,.2733859],[-.0775535,.14306346],[.26733921,.14051526],[.3411097,.7225979],[.64312736,.27811828],[-.1103404,.65416042],[-.1544766,.45394437],[.94388398,.07535403],[.3411097,.14524764],[.68600252,.14269943],[-.0674653,.51874157],[-.1116015,.31852552],[-.0365699,.6588928],[-.0807061,.45867675],[.30832282,.65634459],[.26418663,.45612855],[.22131147,.01419713],[.56620428,.01164893],[.60907944,.45358035],[.00630517,.52347395],[.35119798,.52092574],[.30832282,.07899433],[.38209331,.66107697],[.65321563,.07644612],[.33795712,.46086093],[-.4155107,.83690306],[.63997477,.01638131],[.68284993,.45831272],[-.0706179,.83435486],[.98486759,.0138331],[.72698612,.0811785],[-.3417402,.84163544],[-.0706179,.25700459],[-.0397225,.39715582],[.00315258,.83908724],[-.0838587,.19693978],[.34804539,.83653904],[.30517023,.39460762],[.26103404,.19439157],[.65006305,.39205941],[.60592686,.19184337],[.00315258,.26173697],[.34804539,.25918877],[.6929382,.25664056],[-.3745271,.77538213],[.72383354,.39679179],[.67969735,.19657575],[-.0296343,.77283393],[-.0737704,.57261788],[.42181588,.26392115],[.7667087,.26137294],[.04413619,.77756631],[-.0428751,.13541885],[4.77876577,.57735026],[.389029,.77501811],[.30201765,.13287064],[.34489281,.57480206],[.64691046,.13032244],[0,0],[.46279949,.77975048],[.4186633,.57953444],[.72068095,.13505482],[-.0327868,.51109695],[-.076923,.31088091],[.01008827,.3756781],[-.0340479,.17546206],[.0409836,.51582933],[-.0031525,.31561329],[.38587641,.51328113],[.34174022,.31306508],[.68663303,.31051688],[.08385876,.38041048],[.42875157,.37786228],[-.3379571,.6938396],[.76040353,.31524926],[.00693568,.6912914],[-.0359394,.24935998],[.03783102,.83144263],[.30895334,.24681177],[.26481715,.04659573],[.38272383,.82889442],[.00693568,.11394113],[.08070617,.69602377],[.03783102,.25409236],[-.0063051,.05387631],[.38272383,.25154415],[.42559899,.69347557],[.33858764,.05132811],[.72761664,.24899595],[.68348045,.0487799],[.75851197,.38914718],[.08070617,.11867351],[.42559899,.1161253],[.7704918,.1135771],[-.2969735,.63231867],[.80138713,.25372833],[.75725094,.05351228],[.04791929,.62977047],[.0037831,.42955442],[.84426229,.11830948],[.12168978,.63450284],[.07755359,.4342868],[.46658259,.63195464],[.4224464,.43173859],[-.2572509,.81251311],[.0447667,.36803349],[.08764186,.80996491],[63051e-8,.16781744],[.38965952,.36548529],[.34552332,.16526924],[.08764186,.23261464],[.1185372,.37276587],[.16141235,.81469729],[.074401,.17254982],[.46343001,.37021766],[.41929382,.17000162],[-.2900378,.7462598],[.76418663,.16745341],[.16141235,.23734702],[.38650693,.68109858],[-.2162673,.75099218],[-.2604035,.55077613],[.12862547,.74844398],[.04161412,.10629651],[.08448928,.54822793],[.11538461,.68837916],[.38650693,.10374831],[.46027742,.68583096],[.20239596,.75317635],[.15825977,.55296031],[.54728877,.75062815],[.46027742,.10848069],[.50315258,.55041211],[.80517023,.10593248],[-.2194199,.4892552],[.87894073,.11066486],[.12547288,.486707],[.08133669,.28649095],[.47036569,.4841588],[.4262295,.28394275],[.50126103,.62431003],[-.296343,.80013612],[.19924337,.49143938],[.15510718,.29122333],[.54413619,.48889118],[.5,.28867513],[-.2093316,.86493331],[-.2534678,.66471727],[-.2225725,.8048685],[.1223203,.80232029],[.46721311,.79977209],[-.1796973,.66944965],[.16519546,.66690144],[.1223203,.22497002],[.07818411,.02475398],[.19609079,.80705267],[.46721311,.22242182],[.42307692,.02220577],[.16519546,.08955117],[.51008827,.08700297],[.58511979,.42737024],[.5409836,.2271542],[.49684741,.02693815],[-.2124842,.60319634],[.84174022,.02438995],[.11916771,.54058332],[.46406052,.53803511],[-.1387137,.60792871],[-.1828499,.40771267],[.20617906,.60538051],[.16204287,.40516447],[.55107187,.60283231],[.50693568,.40261626],[.53783102,.54276749],[.27994955,.61011289],[.23581336,.40989684],[.62484237,.60756469],[-.1727616,.78339078],[-.1418663,.34619174],[-.0989911,.78812316],[.20302648,.34364353],[.24590163,.78557495],[.15889029,.14342749],[.54791929,.34109533],[.5037831,.14087929],[.57881462,.48124656],[-.2187894,.65707265],[.62168978,.34582771],[.57755359,.14561166],[-.131778,.72186985],[-.1759142,.5216538],[-.1450189,.66180503],[.1261034,.07717418],[.24401008,.85947287],[.19987389,.65925683],[.5447667,.65670862],[-.0580075,.72660223],[-.1021437,.52638618],[.28688524,.72405402],[.19987389,.08190656],[.24274905,.52383798],[.5447667,.07935835],[.57566204,.21950959],[-.1790668,.83726709],[.66267339,.28430678],[.6185372,.08409073],[-.1349306,.46013287],[.19672131,.39751985],[.58575031,.59518769],[.54161412,.39497165],[-.0611601,.46486525],[-.1052963,.2646492],[.28373266,.46231705],[.23959646,.262101],[.62862547,.45976884],[.58448928,.2595528],[.61538461,.39970403],[-.1380832,.77574616],[.6595208,.0225698],[.70239596,.46450122],[-.095208,.64032731],[-.0643127,.78047854],[.20680958,.19584769],[.28058007,.77793034],[.58259773,.33345072],[.28058007,.20058007],[.23644388,36402e-8],[.62547288,.19803187],[.65636822,.3381831],[-.1412358,.51400919],[.20365699,.51146098],[.69924337,.20276424],[-.0542244,.57880638],[-.0983606,.37859034],[.32156368,.71640941],[.27742749,.51619336],[.6223203,.51364516],[.01954602,.58353876],[.92433795,.06916554],[-.0245901,.38332271],[.36443883,.58099056],[.69609079,.51837754],[-.1015132,.69420363],[.74022698,.14124331],[-.3593947,.76154903],[-.057377,.31706941],[-.0145018,.75900082],[.28751576,.3145212],[.24337957,.11430516],[.31841109,.45467243],[.2742749,.25445639],[.6633039,.45212423],[.61916771,.25190818],[.36128625,.31925358],[.31715006,.11903753],[-.3921815,.69529572],[.70617906,.31670538],[-.0163934,.83289874],[-.0605296,.6326827],[.32849936,.83035054],[.28436317,.63013449],[.77994955,.32143776],[-.0176544,.49726385],[.28436317,.05278423],[.40226986,.83508292],[.31525851,.19293546],[.35813366,.63486687],[.66015132,.19038725],[-.4394703,.81069296],[.35813366,.0575166],[.70302648,.0549684],[-.3656998,.81542534],[-.0636822,.37094572],[.32534678,.56861356],[.28121059,.36839752],[.02332912,.43574292],[-.020807,.23552687],[.36822194,.43319471],[.32408575,.23297867],[.39911727,.57334594],[.35498108,.3731299],[-.3984867,.74917203],[.69987389,.37058169],[.44199243,.43792709],[-.3247162,.75390441],[.02017654,.75135621],[.36506935,.748808],[-.2818411,.61848556],[.02017654,.17400594],[.36506935,.17145774],[.39596469,.31160897],[.43883984,.75354038],[.35182849,.11139292],[.7408575,.30906076],[.69672131,.10884472],[.43883984,.17619011],[-.3146279,.55223225],[.78373266,.17364191],[-.2837326,.69238348],[.06116015,.68983528],[.01702395,.48961923],[.40605296,.68728707],[.36191677,.48707103],[.05989911,.35420038],[.47982345,.69201945],[.43568726,.49180341],[.73770491,.04732379],[-.3619167,.6676295],[-.0598991,.22314988],[-.2749054,.73242669],[-.0170239,.08773103],[.05800756,.4280983],[.01387137,.22788226],[.40290037,.4255501],[.35876418,.22533405],[.10088272,.29267945],[.05674653,.09246341],[.44577553,.29013125],[.40163934,.0899152],[.47667087,.43028248],[.43253467,.23006643],[-.3209331,.60610857],[.77742749,.22751823],[.06809583,.80377641],[.02395964,.60356036],[-.0201765,.40334432],[.51954602,.29486363],[-.2030264,.81105699],[-.2471626,.61084095],[.02395964,.0262101],[.14186633,.80850879],[.09773013,.60829274],[.48675914,.80596059],[.44262295,.60574454],[.39974779,.16381312],[.47351828,.74589577],[.7446406,.16126492],[.09773013,.03094247],[.44262295,.02839427],[.51639344,.61047692],[.81841109,.1659973],[.02080706,.34182339],[.51639344,.03312665],[.86128625,.03057845],[.06368221,.20640454],[.13871374,.54677181],[.09457755,.34655577],[.48360655,.54422361],[.43947036,.34400756],[-.2831021,.86020093],[.06179066,.85765273],[.55737704,.54895599],[.51324085,.34873994],[-.2402269,.72478208],[-.2843631,.52456603],[.10466582,.72223388],[.01765447,.08008641],[.13556116,.86238511],[.48045397,.8598369],[-.1973518,.58936323],[-.1664564,.72951446],[.10466582,.14488361],[.17843631,.72696625],[.13556116,.28503484],[.09142496,.08481879],[.48045397,.28248663],[.52332912,.72441805],[.43631778,.08227059],[.82534678,.27993843],[.78121059,.07972238],[.17843631,.14961599],[.52332912,.14706778],[-.1992433,.66326115],[-.2433795,.4630451],[.85498108,.08445476],[.14564943,.66071294],[.10151324,.4604969],[.05737704,.26028085],[.47730138,.59809993],[.21941992,.66544532],[.13240857,.02329786],[.17528373,.46522928],[.56431273,.66289712],[.47730138,.02074966],[.52017654,.46268107],[.82219419,.01820145],[.59394703,.46741345],[-.1595208,.84345559],[.89596469,.02293383],[.14249684,.39897597],[.185372,.84090739],[.09836065,.19875992],[-.0857503,.84818797],[.14123581,.06334107],[.21626733,.40370835],[.25914249,.84563977],[.17213114,.2034923],[.56116015,.40116014],[.51702395,.2009441],[.86191677,.19839589],[-.2055485,.71713747],[.13934426,.71458926],[-.1185372,.78193466],[-.1626733,.58171861],[.22635561,.77938646],[.18221941,.57917041],[.21311475,.71932164],[.48423707,.13469079],[.55800756,.71677344],[.18221941,.00182014],[.3001261,.78411883],[.21311475,.14197137],[.25598991,.58390279],[.60088272,.58135459],[.55800756,.13942317],[.90290037,.13687496],[.25598991,.00655252],[.60088272,.00400432],[.94577553,.00145611],[-.1216897,.52019768],[-.1658259,.31998164],[.22320302,.51764948],[.17906683,.31743343],[.20996216,.45758467],[.55485498,.45503646],[-.1986128,.8310786],[.29697351,.52238186],[.25283732,.32216581],[.64186633,.51983365],[.59773013,.31961761],[-.4697351,.83835918],[-.1248423,.83581098],[.22005044,.83326277],[-.1248423,.25846071],[-.0819672,.70039212],[.22005044,.2559125],[.26292559,.69784392],[.17591424,.05569646],[.29382093,.83799515],[.56494325,.2533643],[.52080706,.05314825],[-.2017654,.56934162],[.29382093,.26064488],[.33669609,.7025763],[.24968474,.06042884],[.63871374,.25809668],[.59457755,.05788063],[-.114754,.63413882],[-.1588902,.43392277],[.93947036,.05533243],[.26923076,.6439676],[-.1279949,.574074],[.21689785,.5715258],[.56179066,.56897759],[-.0409836,.63887119],[-.0851197,.43865515],[.3039092,.63632299],[.25977301,.43610694],[.29066834,.57625818],[.63556116,.57370997],[.37767969,.64105537],[.3335435,.44083932],[-.4199243,.81688146],[.67843631,.43829112],[-.1179066,.37240184],[-.0882723,.75426844],[.25662042,.75172024],[-.3461538,.82161384],[-.0441361,.37713422],[-.001261,.81906564],[-.0882723,.17691817],[.34363177,.81651743],[.30075662,.37458601],[.25662042,.17436997],[.64564943,.37203781],[.60151324,.17182176],[.63240857,.311973],[-.1210592,.68801513],[.37452711,.37931839],[.33039092,.17910235],[-.3789407,.75536053],[.71941992,.37677019],[.67528373,.17655414],[-.0340479,.75281233],[-.0781841,.55259628],[-.0472887,.69274751],[.29760403,.69019931],[-.3051702,.76009291],[-.0472887,.11539724],[-.0044136,.55732866],[.29760403,.11284904],[.34047919,.55478046],[.37137452,.69493169],[.64249684,.11030083],[-.1242118,.42627816],[.41424968,.55951283],[.71626733,.11503321],[-.0372005,.49107535],[-.0813366,.2908593],[-.0504413,.43101054],[.29445145,.42846233],[.63934426,.42591413],[.03656998,.49580773],[-.0075662,.29559168],[.38146279,.49325953],[.3373266,.29304348],[.68221941,.29049528],[-.3852459,.80923685],[.71311475,.43064651],[-.040353,.80668864],[.45523329,.4979919],[.41109709,.29777586],[-.3423707,.673818],[.00252206,.67126979],[-.040353,.22933837],[.0334174,.81142102],[-.0107187,.61120498],[.37831021,.80887282],[.33417402,.60865677],[.07629255,.67600217],[.0334174,.23407075],[-.0107187,.03385471],[.37831021,.23152255],[.42118537,.67345397],[.33417402,.0313065],[.4520807,.8136052],[.72320302,.22897435],[.67906683,.0287583],[.75409836,.36912558],[.70996216,.16890953],[-.0435056,.54495167],[-.3013871,.61229706],[.79697351,.23370672],[.75283732,.03349068],[.04350567,.60974886],[-6305e-7,.40953282],[.03026481,.54968405],[.41929382,.74735189],[.37515762,.54713584],[.07313997,.41426519],[.41803278,.41171699],[.76292559,.40916879],[.75094577,.1073886],[-.3486759,.72769431],[-.0466582,.28321469],[-.0037831,.72514611],[.29823455,.28066649],[-.2616645,.79249151],[.04035308,.34801188],[.08322824,.7899433],[-.0037831,.14779584],[.02711223,.28794707],[.06998738,.72987849],[.37200504,.28539887],[-.3814627,.661441],[.71689785,.28285066],[.11412358,.35274426],[.06998738,.15252822],[.45901639,.35019606],[.4148802,.14998001],[.75977301,.14743181],[-.3076923,.66617338],[.79066834,.28758304],[.0372005,.66362518],[-.2648171,.53075453],[.0372005,.08627491],[.08007566,.52820633],[.11097099,.66835756],[.38209331,.0837267],[.0668348,.46814151],[.4558638,.66580935],[.41172761,.46559331],[.71374527,.02111369],[.11097099,.09100729],[.15384615,.53293871],[.4558638,.08845908],[.80075662,.08591088],[.83165195,.22606211],[-.2679697,.84636782],[.78751576,.02584607],[.03404791,.4018882],[.07692307,.84381962],[.37894073,.39934],[-.2238335,.4692336],[.87452711,.09064326],[.12105926,.4666854],[.07692307,.26646935],[.49684741,.60428842],[.45271122,.40407238],[-.3007566,.78011451],[.15069356,.27120173],[.49558638,.26865353],[-.2269861,.78484689],[-.2711223,.58463085],[.11790668,.78229869],[.07377049,.58208264],[.03089533,.14015123],[.37578814,.13760302],[-.1841109,.64942804],[.16078184,.64687984],[.11790668,.20494842],[.07377049,.00473237],[.19167717,.78703107],[.46279949,.20240022],[.4186633,.00218417],[.49369482,.34255145],[.53656998,.78448286],[.44955863,.1423354],[.79445145,.1397872],[.53656998,.20713259],[.49243379,.00691655],[.88146279,.20458439],[.8373266,.00436835],[-.2301387,.52310992],[.86822194,.14451958],[.11475409,.52056171],[.5037831,.71822955],[.45964691,.51801351],[.41551071,.31779746],[-.1872635,.38769106],[.15762925,.38514286],[.57755359,.72296193],[.5334174,.52274589],[.83543505,.07826627],[-.2641866,.69857198],[-.1904161,.70330436],[.11160151,.25882474],[.45649432,.25627653],[-.1462799,.32617013],[.15447667,.12340588],[.49936948,.12085768],[.574401,.46122496],[.53026481,.26100891],[-.223203,.63705105],[.15258511,.77465408],[.49747793,.77210587],[-.1803278,.5016322],[-.1052963,.84199947],[-.1494325,.64178343],[-.1935687,.44156738],[.23959646,.83945127],[.19546027,.63923522],[.15132408,.43901918],[.54035308,.63668702],[-.1065573,.50636458],[.19546027,.06188495],[.23833543,.50381637],[.54035308,.05933675],[.61412358,.6414194],[.57124842,.19948798],[-.1834804,.81724549],[.61412358,.06406913],[.95901639,.06152093],[-.1525851,.38004645],[.23644388,.57771429],[.19230769,.37749825],[.1481715,.1772822],[.58133669,.57516609],[.5372005,.37495004],[.49306431,.174734],[.56809583,.51510128],[-.1097099,.2446276],[.23518284,.2420794],[.58007566,.23953119],[.65510718,.57989847],[.61097099,.37968242],[-.1424968,.75572456],[-.186633,.55550851],[.11538461,.11102889],[-.0687263,.76045694],[.27616645,.75790873],[.1891551,.11576127],[.57818411,.31342911],[.53404791,.11321307],[.6519546,.31816149],[.60781841,.11794545],[-.1456494,.49398758],[.23013871,.63159061],[.57503152,.62904241],[-.1027742,.35856873],[-.0277427,.69893601],[-.0718789,.49871996],[-.1160151,.29850392],[.31715006,.6963878],[.27301387,.49617176],[.61790668,.49362355],[.91992433,.04914393],[-.0290037,.36330111],[.69167717,.49835593],[-.1059268,.67418202],[.19609079,.2297024],[.26986128,.81178505],[.31399747,.43465083],[.26986128,.23443478],[.22572509,.03421874],[.65889029,.43210262],[.61475409,.23188658],[-.0321563,.10156413],[-.1078184,.74807995],[.2370744,.74553174],[.73266078,.436835],[.68852459,.23661896],[-.020807,.81287714],[-.0649432,.61266109],[-.1090794,.41244505],[.31084489,.75026412],[.05296343,.81760952],[.00882723,.61739347],[.27994955,.03276262],[.31084489,.17291385],[.35372005,.61484527],[.6557377,.17036565],[-.4438839,.79067136],[.23392181,.48379477],[-.0239596,.55114016],[-.0680958,.35092412],[.32093316,.54859196],[.27679697,.34837591],[.23266078,.14815987],[.3076923,.48852715],[.65258511,.48597894],[-.0252206,.21550527],[.39470365,.55332434],[.35056746,.35310829],[-.4029003,.72915043],[.69546027,.35056009],[.31778058,.86420525],[-.3291298,.73388281],[.76923076,.35529247],[.01576292,.7313346],[.31778058,.28685498],[.36065573,.7287864],[.27364438,.08663894],[.34741488,.66872159],[.08953341,.73606698],[.39155107,.29158736],[.43442622,.73351878],[.34741488,.09137132],[.73644388,.28903916],[.69230769,.08882311],[-.0302648,.60501648],[.31462799,.60246828],[-.2881462,.67236188],[.05674653,.66981367],[.01261034,.46959763],[-.0315258,.26938158],[.40163934,.66726547],[.35750315,.46704942],[.38839848,.60720066],[-.4092055,.78302675],[.43127364,.4717818],[.38839848,.02985039],[-.3221941,.84782394],[.73329129,.02730218],[-.3663303,.64760789],[-.335435,.78775913],[-.0643127,.20312827],[-.0334174,.34327951],[.00945775,.78521092],[.3114754,.3407313],[.35435056,.78266272],[-.2484237,.85255632],[.05359394,.4080767],[.0964691,.85000812],[.00945775,.20786065],[.39848675,.40552849],[.44136191,.84745991],[.35435056,.20531245],[.3852459,.34546368],[.42812105,.7873951],[.73013871,.34291548],[.05233291,.0724418],[-.0233291,.71895761],[.17023959,.85474049],[.47225725,.41026087],[.42812105,.21004483],[-.3253467,.58608696],[.77301387,.20749662],[-.2944514,.7262382],[.05044136,.72368999],[.39533417,.72114179],[-.2515762,.59081934],[.05044136,.14633972],[.09331651,.58827114],[.43820933,.58572294],[.39533417,.14379152],[.46910466,.72587417],[.42496847,.52565812],[.46910466,.1485239],[.51197982,.59045531],[.81399747,.14597569],[.06052963,.52201783],[.01639344,.32180178],[-.0277427,.12158574],[.04728877,.46195302],[.39218158,.45940481],[-.2105926,.52929841],[.13430012,.52675021],[.09016393,.32653416],[.47919293,.524202],[.43505674,.32398596],[.46595208,.46413719],[-.2875157,.84017933],[-.3316519,.63996328],[.05737704,.83763112],[.01324085,.63741508],[.50882723,.32871834],[-.2446406,.70476047],[-.2137452,.84491171],[-.2578814,.64469566],[.01324085,.06006481],[.13114754,.8423635],[.08701134,.64214746],[.04413619,.20021604],[.47604035,.8398153],[.389029,.19766784],[.43190416,.63959925],[-.1708701,.70949285],[.73392181,.19511963],[.17402269,.70694465],[.13114754,.26501323],[.08701134,.06479719],[.47604035,.26246503],[.51891551,.70439645],[.43190416,.06224898],[.50567465,.64433163],[.77679697,.05970078],[-.2906683,.57844235],[.8076923,.19985201],[.05422446,.57589415],[.54981084,.26719741],[.50567465,.06698136],[-.2477931,.4430235],[.85056746,.06443316],[.09709962,.44047529],[.12799495,.58062653],[.47288776,.57807832],[-.1740226,.44775588],[.77364438,.37531407],[.12799495,.00327626],[.17087011,.44520767],[.47288776,72805e-8],[.51576292,.44265947],[.54665825,.5828107],[.50252206,.38259466],[-.2509457,.75863679],[.09394703,.75608859],[.05107187,.31415717],[.58953341,.44739185],[-.2068095,.38150257],[-.1639344,.82343399],[.89155107,.00291223],[.13808322,.37895436],[-.1771752,.76336917],[.09394703,.17873832],[.12484237,.31888955],[.16771752,.76082097],[.46973518,.31634135],[.51261034,.75827276],[.81462799,.31379314],[.21185372,.38368674],[.16771752,.1834707],[.55674653,.38113854],[.51261034,.18092249],[.85750315,.17837429],[-.2099621,.69711586],[-.2540983,.49689982],[.13493064,.69456766],[.04791929,.0524202],[.09079445,.49435161],[.58638083,.18565487],[.3928121,.04987199],[-.167087,.56169701],[.13493064,.11721739],[.1778058,.55914881],[.20870113,.69930004],[.12168978,.05715258],[.16456494,.49908399],[.55359394,.69675183],[.50945775,.49653579],[.46658259,.05460437],[-.0933165,.56642939],[.8114754,.05205617],[.20870113,.12194977],[.25157629,.56388118],[.5964691,.56133298],[.55359394,.11940156],[.89848675,.11685336],[-.2131147,.43537889],[.8852459,.05678855],[.13177805,.43283068],[-.1702395,.29996003],[.17465321,.29741183],[.20554854,.43756306],[.55044136,.43501486],[.50630517,.23479881],[.85119798,.23225061],[.2484237,.30214421],[.59331651,.299596],[-.1292559,.81578937],[-.1733921,.61557333],[.21563682,.81324117],[.12862547,.17109371],[.17150063,.61302512],[.47351828,.1685455],[-.1292559,.2384391],[-.0863808,.68037052],[.21563682,.2358909],[.17150063,.03567485],[.28940731,.81797355],[.20239596,.17582609],[.24527112,.6177575],[.54728877,.17327788],[-.206179,.54932002],[.89218158,.17072968],[.28940731,.24062328],[.24527112,.04040723],[.59016393,.03785903],[.93505674,.03531082],[-.1324085,.5540524],[-.1765447,.35383635],[.21248423,.55150419],[.16834804,.35128815],[.58827238,.68910722],[-.0895334,.41863354],[.25535939,.41608534],[.33039092,.75645262],[.28625472,.55623657],[.24211853,.35602053],[.63114754,.55368837],[.58701134,.35347232],[.32912988,.42081772],[.67402269,.41826952],[-.1355611,.29231542],[-.092686,.73424684],[.2522068,.73169863],[.20933165,.28976722],[.55422446,.28721901],[.2522068,.15434836],[.28310214,.2944996],[.23896595,.09428355],[.67213114,.49216744],[.62799495,.29195139],[.58385876,.09173535],[-.1254728,.66799353],[-.169609,.46777748],[.92875157,.08918714],[.3259773,.15908074],[.67087011,.15653254],[-.0517023,.67272591],[-.0958385,.47250986],[.29319041,.6701777],[.20617906,.02803024],[.24905422,.46996166],[.32408575,.81032894],[.55107187,.02548204],[-.0517023,.09537564],[.29319041,.09282743],[.3669609,.67491008],[.63808322,.09027923],[-.4306431,.85073617],[.62484237,.03021442],[-.1286254,.40625655],[.96973518,.02766621],[-.3568726,.85546855],[-.0857503,.2708377],[-.0548549,.41098893],[-.0119798,.85292035],[-.0989911,.21077289],[.29003783,.40844073],[.24590163,.20822468],[.63493064,.40589252],[.59079445,.20567648],[.66582597,.54604376],[-.0119798,.27557008],[.33291298,.27302188],[.40794451,.61338915],[.36380832,.41317311],[.31967213,.21295706],[-.3896595,.78921524],[.70870113,.4106249],[-.0447667,.78666704],[-.0889029,.58645099],[.40668348,.27775425],[.02900378,.79139942],[-.0151324,.59118337],[-.0580075,.14925196],[.37389659,.78885121],[.28688524,.14670375],[.3297604,.58863517],[.63177805,.14415555],[.3297604,.0112849],[.44766708,.79358359],[.67465321,.0087367],[.74968474,.34910397],[.70554854,.14888793],[-.0479192,.52493006],[-.0920554,.32471402],[.40353089,.01601728],[.32786885,.66253309],[.7484237,.01346907],[-.0050441,.38951121],[.02585119,.52966244],[-.0182849,.3294464],[.4148802,.72733028],[.37074401,.52711424],[.32660781,.32689819],[.67150063,.32434999],[-.3959646,.84309156],[-.0510718,.84054336],[.74653215,.087367],[-.3530895,.70767271],[-.0510718,.26319309],[-.0081967,.7051245],[.02269861,.84527574],[.36759142,.84272753],[.66960907,.39824791],[-.0081967,.12777423],[.02269861,.26792547],[-.0214375,.06770942],[.36759142,.26537726],[.32345523,.06516122],[.71248423,.26282906],[.66834804,.06261301],[.74337957,.40298029],[.06557377,.13250661],[.41046658,.12995841],[.75535939,.12741021],[-.3121059,.64615178],[.78625472,.26756144],[.03278688,.64360357],[-.0113493,.44338753],[.06368221,.78375481],[.40857503,.7812066],[.10655737,.64833595],[.06242118,.44811991],[.45145018,.64578775],[.36443883,.00364029],[.75346784,.20130813],[.70933165,.00109208],[.82723833,.20604051],[-.2723833,.82634622],[.78310214,.00582446],[.0296343,.3818666],[.07250945,.82379801],[-.0145018,.18165055],[.40542244,.51946963],[.07250945,.24644775],[.14754098,.58681502],[.10340479,.38659898],[.0592686,.18638293],[.49243379,.58426682],[.4482976,.38405077],[.40416141,.18383473],[-.318411,.7000281],[.02648171,.69747989],[-.2313997,.76482529],[-.2755359,.56460924],[.11349306,.76227708],[.06935687,.56206104],[.02648171,.12012962],[.1002522,.70221227],[.37137452,.11758142],[.40226986,.25773265],[.44514501,.69966407],[.74716267,.25518445],[.18726355,.76700946],[.48928121,.32252984],[.53215636,.76446126],[.44514501,.1223138],[.79003783,.11976559],[.82093316,.25991682],[.41235813,.63341076],[-.2345523,.50308831],[.86380832,.12449797],[.11034047,.50054011],[.06620428,.30032406],[.48612862,.63814314],[-.3114754,.81396923],[.18411097,.50527249],[.48612862,.06079287],[.52900378,.50272428],[.83102143,.05824466],[-.2686002,.67855037],[-.2377049,.81870161],[.10718789,.8161534],[.90479192,.06297704],[-.1948297,.68328275],[.10718789,.23880313],[.0630517,.03858709],[.49621689,.43647097],[.18095838,.82088578],[.4520807,.23625493],[.40794451,.03603888],[.48297604,.37640616],[.52585119,.81833758],[.15006305,.10338428],[.56998738,.44120335],[.52585119,.24098731],[-.2276166,.61702944],[-.1967213,.75718068],[-.2408575,.55696463],[.1481715,.75463247],[.1040353,.55441643],[.49306431,.75208427],[.44892812,.55186822],[-.1538461,.62176182],[-.1979823,.42154578],[.19104665,.61921362],[.52269861,.5566006],[.47982345,.11466918],[.82471626,.11212098],[.26481715,.623946],[.60970996,.62139779],[.5668348,.17946638],[-.187894,.79722388],[.14501891,.4928955],[.48991172,.49034729],[-.1569987,.36002485],[.18789407,.35747664],[.14375788,.1572606],[.53278688,.35492844],[.56368221,.49507967],[-.2339218,.67090576],[.60655737,.35966082],[-.1469104,.73570295],[-.1910466,.53548691],[-.1601513,.67563814],[.14186633,.23115852],[.18474148,.67308994],[.48675914,.22861032],[.5296343,.67054173],[-.0731399,.74043533],[.22887767,.29595571],[.27175283,.73788713],[.18474148,.09573967],[.57377049,.29340751],[.5296343,.09319146],[.56052963,.2333427],[.60340479,.67527411],[.1519546,.60683663],[.10781841,.40662058],[.64754098,.29813989],[.60340479,.09792384],[-.150063,.47396598],[-.1191677,.61411721],[-.1633039,.41390117],[.22572509,.61156901],[.1815889,.41135296],[.5706179,.6090208],[.52648171,.40880476],[-.0762925,.47869836],[.26860025,.47615015],[.5706179,.03167053],[.61349306,.47360195],[.64438839,.61375318],[.6002522,.41353714],[-.1532156,.78957927],[.64438839,.03640291],[.68726355,.47833433],[-.0794451,.79431165],[.19167717,.2096808],[.14754098,.00946475],[.26544766,.79176345],[.2225725,.34983203],[.56746532,.34728383],[-.0794451,.21696138],[.26544766,.21441318],[.61034047,.21186497],[.64123581,.35201621],[.59709962,.15180016],[-.112232,.72805834],[-.1563682,.5278423],[.23266078,.72551014],[.18852459,.52529409],[.68411097,.21659735],[-.0693568,.59263949],[-.113493,.39242344],[-.0384615,.73279072],[-.0825977,.53257468],[.30643127,.73024252],[.21941992,.08809505],[.26229508,.53002647],[.56431273,.08554685],[.60718789,.52747827],[.00441361,.59737187],[.90920554,.08299865],[.30643127,.15289225],[.34930643,.59482366],[.65132408,.15034404],[.68095838,.53221065],[-.1153846,.46632137],[.22950819,.46377316],[.185372,.26355712],[-.0725094,.33090251],[.27238335,.32835431],[.22824716,.12813826],[.30327868,.46850554],[.25914249,.2682895],[.6481715,.46595734],[.6040353,.26574129],[.00126103,.33563489],[.34615384,.33308669],[.69104665,.33053848],[-.3764186,.84928006],[.72194199,.47068972],[.6778058,.27047367],[-.0315258,.84673185],[-.075662,.64651581],[.31336696,.84418365],[.22635561,.20203619]],kn=new ku;let Kr=new x_(b_,T_),p0=new ts;kn.add(p0);for(let i=0;i<vu.length;i++){let t=Kr.fromTauCoords(vu[i]);p0.add(Kr.getPoint(t,3492318,.03,!0))}let E_=Kr.fromTauCoords([.63997477,.01638131]);kn.add(Kr.getPoint(E_,2070787,.035));let ke=new l_(16777215);ke.position.set(2,6,0);ke.angle=Math.PI/2;ke.decay=0;ke.penumbra=1;ke.distance=0;ke.intensity=5;ke.radius=.5;ke.shadow.mapSize.width=512;ke.shadow.mapSize.height=512;ke.shadow.camera.near=.1;ke.shadow.camera.far=10;ke.shadow.focus=1;ke.castShadow=!0;kn.add(ke);const oa=ke.target;oa.position.x=1;oa.position.y=0;oa.position.z=.05;kn.add(oa);const m0=new Ae(new ys(100,.1,100),new Vu({color:16777215,clearcoat:1,roughness:.5,metalness:0}));m0.position.set(-1,-2,-1);kn.add(m0);const Xs=new d0;Xs.bottomColor.set(16777215);Xs.bottomColor.set(6710886);Xs.update();kn.environment=Xs;kn.background=Xs;const Mi=new Le;Mi.position.set(.1,10,-.1);Mi.lookAt(0,0,0);let bi=new t1({preserveDrawingBuffer:!0});bi.toneMapping=Mu;document.body.appendChild(bi.domElement);let Ti=new o_(bi);Ti.setScene(kn,Mi);Ti.renderScale=Math.max(1/window.devicePixelRatio,.5);Ti.tiles.setScalar(3);Ti.bounces=100;function w_(i){const t=new Date;let e=t.getDate(),n=t.getMonth()+1,s=t.getHours(),r=t.getMinutes(),a=document.createElement("a");a.download=`pathtrace ${n}-${e}-${s}${r}.png`,a.href=i.toDataURL("image/png"),a.click()}const A_=new Sl().close();let R_={saveit:()=>w_(bi.domElement)};A_.add(R_,"saveit");let El=new n1(Mi,bi.domElement);El.target.set(0,.33,-.08);El.addEventListener("change",()=>Ti.updateCamera());El.update();_0();g0();window.addEventListener("resize",_0);function g0(){requestAnimationFrame(g0),Ti.renderSample()}function _0(){const i=window.innerWidth,t=window.innerHeight;bi.setSize(i,t),bi.setPixelRatio(window.devicePixelRatio);const e=i/t;Mi.aspect=e,Mi.updateProjectionMatrix(),Ti.setScene(kn,Mi)}
