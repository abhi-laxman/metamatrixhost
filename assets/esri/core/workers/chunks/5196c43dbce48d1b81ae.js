"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[1882],{48526:(t,n,e)=>{e.d(n,{A:()=>g});var i,s=e(90237),r=e(4718),a=e(10107),o=(e(44208),e(53966),e(40608)),h=e(43937),l=e(5443),u=e(91075),c=e(86738),p=e(56993);function f(t){return(n,e)=>null==n?e:null==e?n:t(n,e)}let m=i=class extends u.A{constructor(...t){super(...t),this.points=[],this.type="multipoint"}normalizeCtorArgs(t,n){if(!t&&!n)return{};const e={};Array.isArray(t)?(e.points=t,e.spatialReference=n):function(t){return t&&("esri.geometry.SpatialReference"===t.declaredClass||null!=t.wkid)}(t)?e.spatialReference=t:(t.points&&(e.points=t.points),t.spatialReference&&(e.spatialReference=t.spatialReference),t.hasZ&&(e.hasZ=t.hasZ),t.hasM&&(e.hasM=t.hasM));const i=e.points?.[0];return i&&(void 0===e.hasZ&&void 0===e.hasM?(e.hasZ=i.length>2,e.hasM=!1):void 0===e.hasZ?e.hasZ=i.length>3:void 0===e.hasM&&(e.hasM=i.length>3)),e}get cache(){return this.commitProperty("points"),this.commitProperty("hasZ"),this.commitProperty("hasM"),this.commitProperty("spatialReference"),{}}get extent(){const t=this.points;if(!t.length)return null;const n=new l.A,e=this.hasZ,i=this.hasM,s=e?3:2,r=t[0],a=f(Math.min),o=f(Math.max);let h,u,c,p,[m,g]=r,[y,x]=r;for(let n=0,r=t.length;n<r;n++){const r=t[n],[l,f]=r;if(m=a(m,l),g=a(g,f),y=o(y,l),x=o(x,f),e&&r.length>2){const t=r[2];h=a(h,t),c=o(c,t)}if(i&&r.length>s){const t=r[s];u=a(u,t),p=o(p,t)}}return n.xmin=m,n.ymin=g,n.xmax=y,n.ymax=x,n.spatialReference=this.spatialReference,e?(n.zmin=h,n.zmax=c):(n.zmin=void 0,n.zmax=void 0),i?(n.mmin=u,n.mmax=p):(n.mmin=void 0,n.mmax=void 0),n}writePoints(t,n){n.points=(0,r.o8)(this.points)}addPoint(t){return(0,p.h)(this,t),Array.isArray(t)?this.points.push(t):this.points.push(t.toArray()),this.notifyChange("points"),this}clone(){const t={points:(0,r.o8)(this.points),spatialReference:this.spatialReference};return this.hasZ&&(t.hasZ=!0),this.hasM&&(t.hasM=!0),new i(t)}getPoint(t){if(!this._validateInputs(t))return null;const n=this.points[t],e={x:n[0],y:n[1],spatialReference:this.spatialReference};let i=2;return this.hasZ&&(e.z=n[2],i=3),this.hasM&&(e.m=n[i]),new c.A(e)}removePoint(t){if(!this._validateInputs(t))return null;const n=new c.A(this.points.splice(t,1)[0],this.spatialReference);return this.notifyChange("points"),n}setPoint(t,n){return this._validateInputs(t)?((0,p.h)(this,n),Array.isArray(n)||(n=n.toArray()),this.points[t]=n,this.notifyChange("points"),this):this}toJSON(t){return this.write({},t)}_validateInputs(t){return null!=t&&t>=0&&t<this.points.length}};(0,s._)([(0,a.MZ)({readOnly:!0})],m.prototype,"cache",null),(0,s._)([(0,a.MZ)()],m.prototype,"extent",null),(0,s._)([(0,a.MZ)({type:[[Number]],json:{write:{isRequired:!0}}})],m.prototype,"points",void 0),(0,s._)([(0,h.K)("points")],m.prototype,"writePoints",null),m=i=(0,s._)([(0,o.$)("esri.geometry.Multipoint")],m),m.prototype.toJSON.isDefaultToJSON=!0;const g=m},39829:(t,n,e)=>{e.d(n,{A:()=>I});var i,s=e(90237),r=e(4576),a=e(4718),o=e(10107),h=(e(44208),e(53966),e(40608)),l=e(43937),u=e(5443),c=e(91075),p=e(86738),f=e(16930),m=e(12359),g=e(94078),y=e(95108),x=e(90634),d=e(12176),v=e(28735),P=e(56993);function R(t){return!Array.isArray(t[0])}let A=i=class extends c.A{static fromExtent(t){const n=t.clone().normalize(),{spatialReference:e}=t;let s=!1,r=!1;for(const t of n)t.hasZ&&(s=!0),t.hasM&&(r=!0);const a={rings:n.map((t=>{const n=[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]];if(s&&t.hasZ){const e=t.zmin+.5*(t.zmax-t.zmin);for(let t=0;t<n.length;t++)n[t].push(e)}if(r&&t.hasM){const e=t.mmin+.5*(t.mmax-t.mmin);for(let t=0;t<n.length;t++)n[t].push(e)}return n})),spatialReference:e};return s&&(a.hasZ=!0),r&&(a.hasM=!0),new i(a)}constructor(t){super(function(t){if(!t)return;let{rings:n,hasM:e,hasZ:i,spatialReference:s}=t;switch(n??=[],function(t){return"number"==typeof t[0]?.[0]}(n)&&(n=[n]),n[0]?.[0]?.length){case 4:i??=!0,e??=!0;break;case 3:i??=!0!==e,e??=!i;break;default:i??=!1,e??=!1}return s??=f.A.WGS84,{...t,hasM:e,hasZ:i,rings:n,spatialReference:s}}(t)),this.curveRings=void 0,this.rings=[],this.type="polygon"}get cache(){return this.commitProperty("curveRings"),this.commitProperty("hasM"),this.commitProperty("hasZ"),this.commitProperty("rings"),this.commitProperty("spatialReference"),{}}get centroid(){const t=(0,m.l8)(this);if(!t||isNaN(t[0])||isNaN(t[1])||this.hasZ&&isNaN(t[2]))return null;const n=new p.A;return n.x=t[0],n.y=t[1],n.spatialReference=this.spatialReference,this.hasZ&&(n.z=t[2]),n}writeCurveRings(t,n){n.curveRings=(0,a.o8)(t)}get extent(){const t=(0,x.v)(this),{spatialReference:n}=this;return t?new u.A({...t,spatialReference:n}):null}get isSelfIntersecting(){return(0,d.A3)(this.rings)}writeRings(t,n){n.rings=(0,a.o8)(this.rings)}addRing(t){if(!t)return;const n=this.rings,e=n.length;if(R(t)){const i=[];for(let n=0,e=t.length;n<e;n++)i[n]=t[n].toArray();n[e]=i}else n[e]=t.slice();return this.notifyChange("rings"),this}clone(){const t=new i;return t.spatialReference=this.spatialReference,t.rings=(0,a.o8)(this.rings),t.curveRings=(0,a.o8)(this.curveRings),t.hasZ=this.hasZ,t.hasM=this.hasM,t}equals(t){if(this===t)return!0;if(null==t)return!1;const n=this.spatialReference,e=t.spatialReference;if(null!=n!=(null!=e))return!1;if(null!=n&&null!=e&&!n.equals(e))return!1;if(this.rings.length!==t.rings.length)return!1;const i=([t,n,e,i],[s,r,a,o])=>t===s&&n===r&&(null==e&&null==a||e===a)&&(null==i&&null==o||i===o);for(let n=0;n<this.rings.length;n++){const e=this.rings[n],s=t.rings[n];if(!(0,r.aI)(e,s,i))return!1}return!0}contains(t){if(!t)return!1;const n=(0,v.Cv)(t,this.spatialReference);return(0,g.m3)(this,null!=n?n:t)}isClockwise(t){const n=R(t)?t.map((t=>this.hasZ?this.hasM?[t.x,t.y,t.z,t.m]:[t.x,t.y,t.z]:[t.x,t.y])):t;return(0,y.$3)(n)}getPoint(t,n){if(!this._validateInputs(t,n))return null;const e=this.rings[t][n],i=this.hasZ,s=this.hasM;return i&&!s?new p.A(e[0],e[1],e[2],void 0,this.spatialReference):s&&!i?new p.A(e[0],e[1],void 0,e[2],this.spatialReference):i&&s?new p.A(e[0],e[1],e[2],e[3],this.spatialReference):new p.A(e[0],e[1],this.spatialReference)}insertPoint(t,n,e){return this._validateInputs(t,n,!0)?((0,P.h)(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t].splice(n,0,e),this.notifyChange("rings"),this):this}removePoint(t,n){if(!this._validateInputs(t,n))return null;const e=new p.A(this.rings[t].splice(n,1)[0],this.spatialReference);return this.notifyChange("rings"),e}removeRing(t){if(!this._validateInputs(t,null))return null;const n=this.rings.splice(t,1)[0],e=this.spatialReference,i=n.map((t=>new p.A(t,e)));return this.notifyChange("rings"),i}setPoint(t,n,e){return this._validateInputs(t,n)?((0,P.h)(this,e),Array.isArray(e)||(e=e.toArray()),this.rings[t][n]=e,this.notifyChange("rings"),this):this}_validateInputs(t,n,e=!1){if(null==t||t<0||t>=this.rings.length)return!1;if(null!=n){const i=this.rings[t];if(e&&(n<0||n>i.length))return!1;if(!e&&(n<0||n>=i.length))return!1}return!0}toJSON(t){return this.write({},t)}};(0,s._)([(0,o.MZ)({readOnly:!0})],A.prototype,"cache",null),(0,s._)([(0,o.MZ)({readOnly:!0})],A.prototype,"centroid",null),(0,s._)([(0,o.MZ)({json:{write:!0,origins:{"portal-item":{write:!1},"web-map":{write:!1},"web-scene":{write:!1}}}})],A.prototype,"curveRings",void 0),(0,s._)([(0,l.K)("curveRings")],A.prototype,"writeCurveRings",null),(0,s._)([(0,o.MZ)({readOnly:!0})],A.prototype,"extent",null),(0,s._)([(0,o.MZ)({readOnly:!0})],A.prototype,"isSelfIntersecting",null),(0,s._)([(0,o.MZ)({type:[[[Number]]],json:{write:{isRequired:!0}}})],A.prototype,"rings",void 0),(0,s._)([(0,l.K)("rings")],A.prototype,"writeRings",null),A=i=(0,s._)([(0,h.$)("esri.geometry.Polygon")],A);const I=A;A.prototype.toJSON.isDefaultToJSON=!0},82799:(t,n,e)=>{e.d(n,{A:()=>y});var i,s=e(90237),r=e(4718),a=e(10107),o=(e(44208),e(53966),e(40608)),h=e(43937),l=e(5443),u=e(91075),c=e(86738),p=e(16930),f=e(90634),m=e(56993);let g=i=class extends u.A{constructor(t){super(function(t){if(!t)return;let{paths:n,hasM:e,hasZ:i,spatialReference:s}=t;switch(n??=[],function(t){return"number"==typeof t[0]?.[0]}(n)&&(n=[n]),n[0]?.[0]?.length){case 4:i??=!0,e??=!0;break;case 3:i??=!0!==e,e??=!i;break;default:i??=!1,e??=!1}return s??=p.A.WGS84,{...t,hasM:e,hasZ:i,paths:n,spatialReference:s}}(t)),this.curvePaths=void 0,this.paths=[],this.type="polyline"}get cache(){return this.commitProperty("curvePaths"),this.commitProperty("hasM"),this.commitProperty("hasZ"),this.commitProperty("paths"),this.commitProperty("spatialReference"),{}}writeCurvePaths(t,n){n.curvePaths=(0,r.o8)(t)}get extent(){const t=(0,f.Z3)(this),{spatialReference:n}=this;return t?new l.A({...t,spatialReference:n}):null}writePaths(t,n){n.paths=(0,r.o8)(this.paths)}addPath(t){if(!t)return;const n=this.paths,e=n.length;if(function(t){return!Array.isArray(t[0])}(t)){const i=[];for(let n=0,e=t.length;n<e;n++)i[n]=t[n].toArray();n[e]=i}else n[e]=t.slice();return this.notifyChange("paths"),this}clone(){const t=new i;return t.spatialReference=this.spatialReference,t.paths=(0,r.o8)(this.paths),t.curvePaths=(0,r.o8)(this.curvePaths),t.hasZ=this.hasZ,t.hasM=this.hasM,t}getPoint(t,n){if(!this._validateInputs(t,n))return null;const e=this.paths[t][n],i=this.hasZ,s=this.hasM;return i&&!s?new c.A(e[0],e[1],e[2],void 0,this.spatialReference):s&&!i?new c.A(e[0],e[1],void 0,e[2],this.spatialReference):i&&s?new c.A(e[0],e[1],e[2],e[3],this.spatialReference):new c.A(e[0],e[1],this.spatialReference)}insertPoint(t,n,e){return this._validateInputs(t,n,!0)?((0,m.h)(this,e),Array.isArray(e)||(e=e.toArray()),this.paths[t].splice(n,0,e),this.notifyChange("paths"),this):this}removePath(t){if(!this._validateInputs(t,null))return null;const n=this.paths.splice(t,1)[0],e=this.spatialReference,i=n.map((t=>new c.A(t,e)));return this.notifyChange("paths"),i}removePoint(t,n){if(!this._validateInputs(t,n))return null;const e=new c.A(this.paths[t].splice(n,1)[0],this.spatialReference);return this.notifyChange("paths"),e}setPoint(t,n,e){return this._validateInputs(t,n)?((0,m.h)(this,e),Array.isArray(e)||(e=e.toArray()),this.paths[t][n]=e,this.notifyChange("paths"),this):this}_validateInputs(t,n,e=!1){if(null==t||t<0||t>=this.paths.length)return!1;if(null!=n){const i=this.paths[t];if(e&&(n<0||n>i.length))return!1;if(!e&&(n<0||n>=i.length))return!1}return!0}toJSON(t){return this.write({},t)}};(0,s._)([(0,a.MZ)({readOnly:!0})],g.prototype,"cache",null),(0,s._)([(0,a.MZ)({json:{write:!0,origins:{"portal-item":{write:!1},"web-map":{write:!1},"web-scene":{write:!1}}}})],g.prototype,"curvePaths",void 0),(0,s._)([(0,h.K)("curvePaths")],g.prototype,"writeCurvePaths",null),(0,s._)([(0,a.MZ)({readOnly:!0})],g.prototype,"extent",null),(0,s._)([(0,a.MZ)({type:[[[Number]]],json:{write:{isRequired:!0}}})],g.prototype,"paths",void 0),(0,s._)([(0,h.K)("paths")],g.prototype,"writePaths",null),g=i=(0,s._)([(0,o.$)("esri.geometry.Polyline")],g);const y=g;g.prototype.toJSON.isDefaultToJSON=!0},51118:(t,n,e)=>{function i(t){const n=[];for(t.reset();t.nextPath();){const e=[];for(;t.nextPoint();)e.push([t.x,t.y]);n.push(e)}return t.reset(),n}function s(t){const n=[];for(;t.nextPoint();)n.push([t.x,t.y]);return t.seekPathStart(),n}e.d(n,{A:()=>s,x:()=>i})},537:(t,n,e)=>{e.d(n,{B$:()=>m,LJ:()=>g,Pj:()=>d,Rg:()=>p,Yz:()=>y,z8:()=>f});var i=e(19419);function s(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}function r(t){return void 0!==t.points}function a(t){return void 0!==t.x&&void 0!==t.y}function o(t){return void 0!==t.paths}function h(t){return void 0!==t.rings}function l(t){return function(n,e){return null==n?e:null==e?n:t(n,e)}}const u=l(Math.min),c=l(Math.max);function p(t,n){return o(n)?y(t,n.paths,!1,!1):h(n)?y(t,n.rings,!1,!1):r(n)?d(t,n.points,!1,!1,!1,!1):s(n)?x(t,n):(a(n)&&(t[0]=n.x,t[1]=n.y,t[2]=n.x,t[3]=n.y),t)}function f(t){let n,e,s,r;for(t.reset(),n=s=1/0,e=r=-1/0;t.nextPath();){const i=m(t);n=Math.min(i[0],n),s=Math.min(i[1],s),e=Math.max(i[2],e),r=Math.max(i[3],r)}return(0,i.vt)([n,s,e,r])}function m(t){let n,e,s,r;for(n=s=1/0,e=r=-1/0;t.nextPoint();)n=Math.min(t.x,n),s=Math.min(t.y,s),e=Math.max(t.x,e),r=Math.max(t.y,r);return(0,i.vt)([n,s,e,r])}function g(t,n){return o(n)?y(t,n.paths,!0,!1):h(n)?y(t,n.rings,!0,!1):r(n)?d(t,n.points,!0,!1,!0,!1):s(n)?x(t,n,0,0,!0,!1):(a(n)&&(t[0]=n.x,t[1]=n.y,t[2]=n.z,t[3]=n.x,t[4]=n.y,t[5]=n.z),t)}function y(t,n,e,i){const s=e?3:2;if(!n.length||!n[0].length)return null;let r,a,o,h,[l,p]=n[0][0],[f,m]=n[0][0];for(let t=0;t<n.length;t++){const g=n[t];for(let t=0;t<g.length;t++){const n=g[t],[y,x]=n;if(l=u(l,y),p=u(p,x),f=c(f,y),m=c(m,x),e&&n.length>2){const t=n[2];r=u(r,t),a=c(a,t)}if(i&&n.length>s){const t=n[s];o=u(r,t),h=c(a,t)}}}return e?i?(t[0]=l,t[1]=p,t[2]=r,t[3]=o,t[4]=f,t[5]=m,t[6]=a,t[7]=h,t.length=8,t):(t[0]=l,t[1]=p,t[2]=r,t[3]=f,t[4]=m,t[5]=a,t.length=6,t):i?(t[0]=l,t[1]=p,t[2]=o,t[3]=f,t[4]=m,t[5]=h,t.length=6,t):(t[0]=l,t[1]=p,t[2]=f,t[3]=m,t.length=4,t)}function x(t,n,e,i,s,r){const a=n.xmin,o=n.xmax,h=n.ymin,l=n.ymax;let u=n.zmin,c=n.zmax,p=n.mmin,f=n.mmax;return s?(u=u||0,c=c||0,r?(p=p||0,f=f||0,t[0]=a,t[1]=h,t[2]=u,t[3]=p,t[4]=o,t[5]=l,t[6]=c,t[7]=f,t):(t[0]=a,t[1]=h,t[2]=u,t[3]=o,t[4]=l,t[5]=c,t)):r?(p=p||0,f=f||0,t[0]=a,t[1]=h,t[2]=p,t[3]=o,t[4]=l,t[5]=f,t):(t[0]=a,t[1]=h,t[2]=o,t[3]=l,t)}function d(t,n,e,i,s,r){const a=e?3:2,o=i&&r,h=e&&s;if(!n.length||!n[0].length)return null;let l,p,f,m,[g,y]=n[0],[x,d]=n[0];for(let t=0;t<n.length;t++){const e=n[t],[i,s]=e;if(g=u(g,i),y=u(y,s),x=c(x,i),d=c(d,s),h&&e.length>2){const t=e[2];l=u(l,t),p=c(p,t)}if(o&&e.length>a){const t=e[a];f=u(l,t),m=c(p,t)}}return s?(l=l||0,p=p||0,r?(f=f||0,m=m||0,t[0]=g,t[1]=y,t[2]=l,t[3]=f,t[4]=x,t[5]=d,t[6]=p,t[7]=m,t):(t[0]=g,t[1]=y,t[2]=l,t[3]=x,t[4]=d,t[5]=p,t)):r?(f=f||0,m=m||0,t[0]=g,t[1]=y,t[2]=f,t[3]=x,t[4]=d,t[5]=m,t):(t[0]=g,t[1]=y,t[2]=x,t[3]=d,t)}},12359:(t,n,e)=>{e.d(n,{TP:()=>u,Z4:()=>r,l8:()=>a,w2:()=>h});var i=e(51118),s=e(95108);function r(t){return t?t.hasZ?[t.xmax-t.xmin/2,t.ymax-t.ymin/2,t.zmax-t.zmin/2]:[t.xmax-t.xmin/2,t.ymax-t.ymin/2]:null}function a(t){return t?function(t,n){if(!t?.length)return null;const e=[],i=[],r=n?[1/0,-1/0,1/0,-1/0,1/0,-1/0]:[1/0,-1/0,1/0,-1/0];for(let e=0,s=t.length;e<s;e++){const s=o(t[e],n,r);s&&i.push(s)}if(i.sort(((t,e)=>{let i=t[2]-e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),i.length&&(e[0]=i[0][0],e[1]=i[0][1],n&&(e[2]=i[0][3]),(e[0]<r[0]||e[0]>r[1]||e[1]<r[2]||e[1]>r[3]||n&&(e[2]<r[4]||e[2]>r[5]))&&(e.length=0)),!e.length){const i=t[0]&&t[0].length?function(t,n){const e=n?[0,0,0]:[0,0],i=n?[0,0,0]:[0,0];let r=0,a=0,o=0,h=0;for(let l=0,u=t.length;l<u-1;l++){const u=t[l],c=t[l+1];if(u&&c){e[0]=u[0],e[1]=u[1],i[0]=c[0],i[1]=c[1],n&&u.length>2&&c.length>2&&(e[2]=u[2],i[2]=c[2]);const t=(0,s.R3)(e,i);if(t){r+=t;const e=(0,s.t9)(u,c);a+=t*e[0],o+=t*e[1],n&&e.length>2&&(h+=t*e[2])}}}return r>0?n?[a/r,o/r,h/r]:[a/r,o/r]:t.length?t[0]:null}(t[0],n):null;if(!i)return null;e[0]=i[0],e[1]=i[1],n&&i.length>2&&(e[2]=i[2])}return e}(t.rings,t.hasZ??!1):null}function o(t,n,e){let i=0,s=0,r=0,a=0,o=0;const h=t.length?t[0][0]:0,l=t.length?t[0][1]:0,u=t.length&&n?t[0][2]:0;for(let c=0;c<t.length;c++){const p=t[c],f=t[(c+1)%t.length],[m,g,y]=p,x=m-h,d=g-l,[v,P,R]=f,A=v-h,I=P-l,M=x*I-A*d;if(a+=M,i+=(x+A)*M,s+=(d+I)*M,n&&p.length>2&&f.length>2){const t=y-u,n=R-u,e=x*n-A*t;r+=(t+n)*e,o+=e}m<e[0]&&(e[0]=m),m>e[1]&&(e[1]=m),g<e[2]&&(e[2]=g),g>e[3]&&(e[3]=g),n&&(y<e[4]&&(e[4]=y),y>e[5]&&(e[5]=y))}if(a>0&&(a*=-1),o>0&&(o*=-1),!a)return null;a*=.5,o*=.5;const c=[i/(6*a)+h,s/(6*a)+l,a];return n&&(e[4]===e[5]||0===o?(c[3]=(e[4]+e[5])/2,c[4]=0):(c[3]=r/(6*o)+u,c[4]=o)),c}function h(t,n){let e=0,i=0,s=0;t.nextPoint();const r=t.pathSize?t.x:0,a=t.pathSize?t.y:0;for(let o=0;o<t.pathSize;o++){t.seekInPath(o);const h=[t.x,t.y];t.seekInPath((o+1)%t.pathSize);const l=[t.x,t.y],[u,c]=h,p=u-r,f=c-a,[m,g]=l,y=m-r,x=g-a,d=p*x-y*f;s+=d,e+=(p+y)*d,i+=(f+x)*d,u<n[0]&&(n[0]=u),u>n[1]&&(n[1]=u),c<n[2]&&(n[2]=c),c>n[3]&&(n[3]=c)}return s>0&&(s*=-1),s?(s*=.5,[e/(6*s)+r,i/(6*s)+a,s]):null}const l=1e-6;function u(t){let n=0;for(t.reset();t.nextPath();)n+=t.getCurrentRingArea();if(n<l){const n=function(t){const{hasZ:n,totalSize:e}=t;if(0===e)return null;const r=[],a=[],h=n?[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY]:[Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY];for(t.reset();t.nextPath();){const n=o((0,i.A)(t),t.hasZ,h);n&&a.push(n)}if(a.sort(((t,e)=>{let i=t[2]-e[2];return 0===i&&n&&(i=t[4]-e[4]),i})),a.length&&(r[0]=a[0][0],r[1]=a[0][1],n&&(r[2]=a[0][3]),(r[0]<h[0]||r[0]>h[1]||r[1]<h[2]||r[1]>h[3]||n&&(r[2]<h[4]||r[2]>h[5]))&&(r.length=0)),!r.length){t.reset(),t.nextPath();const e=t.pathSize?function(t){const{hasZ:n}=t,e=n?[0,0,0]:[0,0],i=n?[0,0,0]:[0,0];let r=0,a=0,o=0,h=0;if(t.nextPoint()){let l=t.x,u=t.y,c=t.z;for(;t.nextPoint();){const p=t.x,f=t.y,m=t.z;e[0]=l,e[1]=u,i[0]=p,i[1]=f,n&&(e[2]=c,i[2]=m);const g=(0,s.R3)(e,i);if(g){r+=g;const t=(0,s.t9)(e,i);a+=g*t[0],o+=g*t[1],n&&t.length>2&&(h+=g*t[2])}l=p,u=f,c=m}}return r>0?n?[a/r,o/r,h/r]:[a/r,o/r]:t.pathSize?(t.seekPathStart(),t.nextPoint(),[t.x,t.y]):null}(t):null;if(!e)return null;r[0]=e[0],r[1]=e[1],n&&e.length>2&&(r[2]=e[2])}return r}(t);return n?[n[0],n[1]]:null}const e=[0,0];if(t.reset(),!t.nextPath()||!t.nextPoint())return null;const r=[t.x,t.y];for(t.reset();t.nextPath();)p(e,r,t);return e[0]*=1/n,e[1]*=1/n,e[0]+=r[0],e[1]+=r[1],e}const c=1/3;function p(t,n,e){if(!e||e.pathSize<3)return null;e.nextPoint();const i=e.x,s=e.y;e.nextPoint();let r,a=e.x-i,o=e.y-s,h=0,l=0;for(;e.nextPoint();)h=e.x-i,l=e.y-s,r=.5*c*(h*o-l*a),t[0]+=r*(a+h),t[1]+=r*(o+l),a=h,o=l;const u=e.getCurrentRingArea(),p=[i,s];return p[0]-=n[0],p[1]-=n[1],p[0]*=u,p[1]*=u,t[0]+=p[0],t[1]+=p[1],t}},90634:(t,n,e)=>{e.d(n,{HA:()=>u,Z3:()=>p,v:()=>c});var i=e(537);const s=[];function r(t,n,e,i){return{xmin:t,ymin:n,xmax:e,ymax:i}}function a(t,n,e,i,s,r){return{xmin:t,ymin:n,zmin:e,xmax:i,ymax:s,zmax:r}}function o(t,n,e,i,s,r){return{xmin:t,ymin:n,mmin:e,xmax:i,ymax:s,mmax:r}}function h(t,n,e,i,s,r,a,o){return{xmin:t,ymin:n,zmin:e,mmin:i,xmax:s,ymax:r,zmax:a,mmax:o}}function l(t,n=!1,e=!1){return n?e?h(t[0],t[1],t[2],t[3],t[4],t[5],t[6],t[7]):a(t[0],t[1],t[2],t[3],t[4],t[5]):e?o(t[0],t[1],t[2],t[3],t[4],t[5]):r(t[0],t[1],t[2],t[3])}function u(t){return t?function(t){return void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax}(t)?t:function(t){return void 0!==t.x&&void 0!==t.y}(t)?function(t){const{x:n,y:e,z:i,m:s}=t,l=null!=s;return null!=i?l?h(n,e,i,s,n,e,i,s):a(n,e,i,n,e,i):l?o(n,e,s,n,e,s):r(n,e,n,e)}(t):function(t){return void 0!==t.rings}(t)?c(t):function(t){return void 0!==t.paths}(t)?p(t):function(t){return void 0!==t.points}(t)?function(t){const{hasZ:n,hasM:e,points:r}=t;return l((0,i.Pj)(s,r,n??!1,e??!1),n,e)}(t):null:null}function c(t){const{hasZ:n,hasM:e,rings:r}=t,a=(0,i.Yz)(s,r,n??!1,e??!1);return a?l(a,n,e):null}function p(t){const{hasZ:n,hasM:e,paths:r}=t,a=(0,i.Yz)(s,r,n??!1,e??!1);return a?l(a,n,e):null}},56993:(t,n,e)=>{function i(t,n,e=!1){let{hasM:i,hasZ:s}=t;Array.isArray(n)?4!==n.length||i||s?3===n.length&&e&&!i?(s=!0,i=!1):3===n.length&&i&&s&&(i=!1,s=!1):(i=!0,s=!0):(s=!s&&n.hasZ&&(!i||n.hasM),i=!i&&n.hasM&&(!s||n.hasZ)),t.hasZ=s,t.hasM=i}e.d(n,{h:()=>i})}}]);