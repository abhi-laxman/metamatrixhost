"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[6141],{86507:(S,C,e)=>{e.d(C,{A:()=>o});var n,a=e(8189),D=e(71065),M=e(77806),m=e(35150),O=e(85211),I=e(48669),P=e(76576),g=e(55739),l=e(14891),E=e(73490),i=e(53823);let c=n=class extends D.A{static from(r){return(0,g.PZ)(n,r)}constructor(r){super(r),this.faces=null,this.material=null,this.name=void 0,this.shading="source",this.trustSourceNormals=!1}castFaces(r){return(0,i.b)(r,Uint32Array,[Uint16Array],{loggerTag:".faces=",stride:3},m.A.getLogger(this))}castMaterial(r){return(0,g.PZ)(r&&"object"==typeof r&&("metallic"in r||"roughness"in r||"metallicRoughnessTexture"in r)?E.A:l.A,r)}clone(){return new n({faces:(0,M.o8)(this.faces),shading:this.shading,material:(0,M.o8)(this.material),trustSourceNormals:this.trustSourceNormals,name:this.name})}cloneWithDeduplication(r,d){const u={faces:(0,M.o8)(this.faces),shading:this.shading,material:this.material?this.material.cloneWithDeduplication(r,d):null,trustSourceNormals:this.trustSourceNormals,name:this.name};return new n(u)}get memoryUsage(){let r=0;return null!=this.faces&&(r+=this.faces.byteLength),null!=this.material&&(r+=this.material.memoryUsage),r}};(0,a._)([(0,O.MZ)({json:{write:i.B}})],c.prototype,"faces",void 0),(0,a._)([(0,I.w)("faces")],c.prototype,"castFaces",null),(0,a._)([(0,O.MZ)({type:l.A,json:{write:!0}})],c.prototype,"material",void 0),(0,a._)([(0,I.w)("material")],c.prototype,"castMaterial",null),(0,a._)([(0,O.MZ)({json:{write:!0}})],c.prototype,"name",void 0),(0,a._)([(0,O.MZ)({type:String,json:{write:!0}})],c.prototype,"shading",void 0),(0,a._)([(0,O.MZ)({type:Boolean})],c.prototype,"trustSourceNormals",void 0),c=n=(0,a._)([(0,P.$)("esri.geometry.support.MeshComponent")],c);const o=c},14891:(S,C,e)=>{e.d(C,{A:()=>c});var i,a=e(8189),D=e(68677),M=e(71065),m=e(85211),g=(e(3248),e(35150),e(40707),e(76576)),l=e(33495),E=e(59723);let n=i=class extends M.A{constructor(o){super(o),this.color=null,this.colorTexture=null,this.colorTextureTransform=null,this.normalTexture=void 0,this.normalTextureTransform=void 0,this.alphaMode="auto",this.alphaCutoff=.5,this.doubleSided=!0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const d=null!=o?o.get(this):null;if(d)return d;const u=new i(this.clonePropertiesWithDeduplication(r));return o?.set(this,u),u}clonePropertiesWithDeduplication(o){return{color:null!=this.color?this.color.clone():null,colorTexture:this.colorTexture?.cloneWithDeduplication(o),normalTexture:this.normalTexture?.cloneWithDeduplication(o),alphaMode:this.alphaMode,alphaCutoff:this.alphaCutoff,doubleSided:this.doubleSided,colorTextureTransform:this.colorTextureTransform?.clone(),normalTextureTransform:this.normalTextureTransform?.clone()}}get memoryUsage(){return this.getMemoryUsage()}getMemoryUsage(){let o=0;return o+=null!=this.color?16:0,null!=this.colorTexture&&(o+=this.colorTexture.memoryUsage),o+=null!=this.colorTextureTransform?20:0,null!=this.normalTexture&&(o+=this.normalTexture.memoryUsage),o+=null!=this.normalTextureTransform?20:0,o}};(0,a._)([(0,m.MZ)({type:D.A,json:{write:!0}})],n.prototype,"color",void 0),(0,a._)([(0,m.MZ)({type:l.A,json:{write:!0}})],n.prototype,"colorTexture",void 0),(0,a._)([(0,m.MZ)({type:E.A,json:{write:!0}})],n.prototype,"colorTextureTransform",void 0),(0,a._)([(0,m.MZ)({type:l.A,json:{write:!0}})],n.prototype,"normalTexture",void 0),(0,a._)([(0,m.MZ)({type:E.A,json:{write:!0}})],n.prototype,"normalTextureTransform",void 0),(0,a._)([(0,m.MZ)({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaMode",void 0),(0,a._)([(0,m.MZ)({nonNullable:!0,json:{write:!0}})],n.prototype,"alphaCutoff",void 0),(0,a._)([(0,m.MZ)({nonNullable:!0,json:{write:!0}})],n.prototype,"doubleSided",void 0),n=i=(0,a._)([(0,g.$)("esri.geometry.support.MeshMaterial")],n);const c=n},73490:(S,C,e)=>{e.d(C,{A:()=>c});var i,a=e(8189),D=e(68677),M=e(85211),P=(e(3248),e(35150),e(40707),e(76576)),g=e(14891),l=e(33495),E=e(59723);let n=i=class extends g.A{constructor(o){super(o),this.emissiveColor=null,this.emissiveTexture=null,this.emissiveTextureTransform=void 0,this.occlusionTexture=null,this.occlusionTextureTransform=void 0,this.metallic=1,this.roughness=1,this.metallicRoughnessTexture=null,this.metallicRoughnessTextureTransform=void 0}clone(){return this.cloneWithDeduplication(null,new Map)}cloneWithDeduplication(o,r){const d=null!=o?o.get(this):null;if(d)return d;const u=new i(this.clonePropertiesWithDeduplication(r));return o?.set(this,u),u}getMemoryUsage(){let o=super.getMemoryUsage();return o+=null!=this.emissiveColor?16:0,null!=this.emissiveTexture&&(o+=this.emissiveTexture.memoryUsage),o+=null!=this.emissiveTextureTransform?20:0,null!=this.occlusionTexture&&(o+=this.occlusionTexture.memoryUsage),o+=null!=this.occlusionTextureTransform?20:0,null!=this.metallicRoughnessTexture&&(o+=this.metallicRoughnessTexture.memoryUsage),o+=null!=this.metallicRoughnessTextureTransform?20:0,o}clonePropertiesWithDeduplication(o){return{...super.clonePropertiesWithDeduplication(o),emissiveColor:this.emissiveColor?.clone(),emissiveTexture:this.emissiveTexture?.cloneWithDeduplication(o),emissiveTextureTransform:this.emissiveTextureTransform?.clone(),occlusionTexture:this.occlusionTexture?.cloneWithDeduplication(o),occlusionTextureTransform:this.occlusionTextureTransform?.clone(),metallic:this.metallic,roughness:this.roughness,metallicRoughnessTexture:this.metallicRoughnessTexture?.cloneWithDeduplication(o),metallicRoughnessTextureTransform:this.metallicRoughnessTextureTransform?.clone()}}};(0,a._)([(0,M.MZ)({type:D.A,json:{write:!0}})],n.prototype,"emissiveColor",void 0),(0,a._)([(0,M.MZ)({type:l.A,json:{write:!0}})],n.prototype,"emissiveTexture",void 0),(0,a._)([(0,M.MZ)({type:E.A,json:{write:!0}})],n.prototype,"emissiveTextureTransform",void 0),(0,a._)([(0,M.MZ)({type:l.A,json:{write:!0}})],n.prototype,"occlusionTexture",void 0),(0,a._)([(0,M.MZ)({type:E.A,json:{write:!0}})],n.prototype,"occlusionTextureTransform",void 0),(0,a._)([(0,M.MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],n.prototype,"metallic",void 0),(0,a._)([(0,M.MZ)({type:Number,nonNullable:!0,json:{write:!0},range:{min:0,max:1}})],n.prototype,"roughness",void 0),(0,a._)([(0,M.MZ)({type:l.A,json:{write:!0}})],n.prototype,"metallicRoughnessTexture",void 0),(0,a._)([(0,M.MZ)({type:E.A,json:{write:!0}})],n.prototype,"metallicRoughnessTextureTransform",void 0),n=i=(0,a._)([(0,P.$)("esri.geometry.support.MeshMaterialMetallicRoughness")],n);const c=n},33495:(S,C,e)=>{e.d(C,{A:()=>f});var n,a=e(8189),M=(e(3248),e(48116)),m=e(71065),O=e(85211),I=e(55739),g=(e(40707),e(17221)),l=e(76576),E=e(50305),i=e(88135);const c=new WeakMap;let o=0,r=n=class extends m.A{constructor(t){super(t),this.wrap="repeat"}get url(){return this._get("url")||null}set url(t){this._set("url",t),t&&this._set("data",null)}get data(){return this._get("data")||null}set data(t){this._set("data",t),t&&this._set("url",null)}writeData(t,s,_,p){if(t instanceof HTMLImageElement){const y={type:"image-element",src:(0,i.t)(t.src,p),crossOrigin:t.crossOrigin};s[_]=y}else if(t instanceof HTMLCanvasElement){const y={type:"canvas-element",imageData:d(t.getContext("2d").getImageData(0,0,t.width,t.height))};s[_]=y}else if(t instanceof HTMLVideoElement){const y={type:"video-element",src:(0,i.t)(t.src,p),autoplay:t.autoplay,loop:t.loop,muted:t.muted,crossOrigin:t.crossOrigin,preload:t.preload};s[_]=y}else if(t instanceof ImageData){const y={type:"image-data",imageData:d(t)};s[_]=y}}readData(t){switch(t.type){case"image-element":{const s=new Image;return s.src=t.src,s.crossOrigin=t.crossOrigin,s}case"canvas-element":{const s=u(t.imageData),_=document.createElement("canvas");return _.width=s.width,_.height=s.height,_.getContext("2d").putImageData(s,0,0),_}case"image-data":return u(t.imageData);case"video-element":{const s=document.createElement("video");return s.src=t.src,s.crossOrigin=t.crossOrigin,s.autoplay=t.autoplay,s.loop=t.loop,s.muted=t.muted,s.preload=t.preload,s}default:return}}get transparent(){const{data:t,url:s}=this;return t instanceof HTMLCanvasElement?T(t.getContext("2d").getImageData(0,0,t.width,t.height)):t instanceof ImageData?T(t):!(!s?.toLowerCase().endsWith(".png")&&!s?.toLocaleLowerCase().startsWith("data:image/png;"))}set transparent(t){this._overrideIfSome("transparent",t)}get contentHash(){const t="string"==typeof this.wrap?this.wrap:"object"==typeof this.wrap?`${this.wrap.horizontal}/${this.wrap.vertical}`:"",s=(_="")=>`d:${_},t:${this.transparent},w:${t}`;return null!=this.url?s(this.url):null!=this.data?this.data instanceof HTMLImageElement||this.data instanceof HTMLVideoElement?s(this.data.src):(c.has(this.data)||c.set(this.data,++o),s(c.get(this.data))):s()}get memoryUsage(){let t=0;if(t+=null!=this.url?this.url.length:0,null!=this.data){const s=this.data;"data"in s?t+=s.data.byteLength:s instanceof HTMLImageElement?t+=s.naturalWidth*s.naturalHeight*3:s instanceof HTMLCanvasElement&&(t+=s.width*s.height*3)}return t}clone(){const t={url:this.url,data:this.data,wrap:this._cloneWrap()};return new n(t)}cloneWithDeduplication(t){const s=t.get(this);if(s)return s;const _=this.clone();return t.set(this,_),_}_cloneWrap(){return"string"==typeof this.wrap?this.wrap:{horizontal:this.wrap.horizontal,vertical:this.wrap.vertical}}static from(t){return"string"==typeof t?new n({url:t}):t instanceof HTMLImageElement||t instanceof HTMLCanvasElement||t instanceof ImageData||t instanceof HTMLVideoElement?new n({data:t}):(0,I.PZ)(n,t)}};function d(t){let s="";for(let _=0;_<t.data.length;_++)s+=String.fromCharCode(t.data[_]);return{data:btoa(s),width:t.width,height:t.height}}function u(t){const s=atob(t.data),_=new Uint8ClampedArray(s.length);for(let p=0;p<s.length;p++)_[p]=s.charCodeAt(p);return(0,M.eV)(_,t.width,t.height)}function T(t){for(let s=3;s<t.data.length;s+=4)if(255!==t.data[s])return!0;return!1}(0,a._)([(0,O.MZ)({type:String,json:{write:i.w}})],r.prototype,"url",null),(0,a._)([(0,O.MZ)({json:{write:{overridePolicy(){return{enabled:!this.url}}}}}),(0,O.MZ)()],r.prototype,"data",null),(0,a._)([(0,E.K)("data")],r.prototype,"writeData",null),(0,a._)([(0,g.w)("data")],r.prototype,"readData",null),(0,a._)([(0,O.MZ)({type:Boolean,json:{write:{overridePolicy(){return{enabled:this._isOverridden("transparent")}}}}})],r.prototype,"transparent",null),(0,a._)([(0,O.MZ)({json:{write:!0}})],r.prototype,"wrap",void 0),(0,a._)([(0,O.MZ)({readOnly:!0})],r.prototype,"contentHash",null),r=n=(0,a._)([(0,l.$)("esri.geometry.support.MeshTexture")],r);const f=r},59723:(S,C,e)=>{e.d(C,{A:()=>E});var a=e(8189),D=e(90660),M=e(71065),m=e(85211),g=(e(3248),e(35150),e(40707),e(76576));let l=class extends(D.A.ClonableMixin(M.A)){constructor(i){super(i),this.offset=[0,0],this.rotation=0,this.scale=[1,1]}};(0,a._)([(0,m.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"offset",void 0),(0,a._)([(0,m.MZ)({type:Number,nonNullable:!0,json:{write:!0}})],l.prototype,"rotation",void 0),(0,a._)([(0,m.MZ)({type:[Number],nonNullable:!0,json:{write:!0}})],l.prototype,"scale",void 0),l=(0,a._)([(0,g.$)("esri.geometry.support.MeshTextureTransform")],l);const E=l},38118:(S,C,e)=>{e.d(C,{b:()=>M});var a=e(69287),D=e(83034);function M(g,l,E){const i=Array.isArray(g),n=i?g.length/l:g.byteLength/(4*l),c=i?g:new Uint32Array(g,0,n*l),o=E?.minReduction??0,r=E?.originalIndices||null,d=r?r.length:0,u=E?.componentOffsets||null;let T=0;if(u)for(let h=0;h<u.length-1;h++){const L=u[h+1]-u[h];L>T&&(T=L)}else T=n;const f=Math.floor(1.1*T)+1;(null==P||P.length<2*f)&&(P=new Uint32Array((0,a.cU)(2*f)));for(let h=0;h<2*f;h++)P[h]=0;let t=0;const s=!!u&&!!r,_=s?d:n;let p=(0,D.my)(n);const y=new Uint32Array(d),B=1.96;let x=0!==o?Math.ceil(4*B*B/(o*o)*o*(1-o)):_,A=1,U=u?u[1]:_;for(let h=0;h<_;h++){if(h===x){const j=1-t/h;if(j+B*Math.sqrt(j*(1-j)/h)<o)return null;x*=2}if(h===U){for(let j=0;j<2*f;j++)P[j]=0;if(r)for(let j=u[A-1];j<u[A];j++)y[j]=p[r[j]];U=u[++A]}const L=s?r[h]:h,K=L*l,R=I(c,K,l);let W=R%f,w=t;for(;0!==P[2*W+1];){if(P[2*W]===R){const j=P[2*W+1]-1;if(m(c,K,j*l,l)){w=p[j];break}}W++,W>=f&&(W-=f)}w===t&&(P[2*W]=R,P[2*W+1]=L+1,t++),p[L]=w}if(0!==o&&1-t/n<o)return null;if(s){for(let h=u[A-1];h<y.length;h++)y[h]=p[r[h]];p=(0,D.Dg)(y)}const v=i?new Array(t):new Uint32Array(t*l);t=0;for(let h=0;h<_;h++)p[h]===t&&(O(c,(s?r[h]:h)*l,v,t*l,l),t++);if(r&&!s){const h=new Uint32Array(d);for(let L=0;L<h.length;L++)h[L]=p[r[L]];p=(0,D.Dg)(h)}return{buffer:Array.isArray(v)?v:v.buffer,indices:p,uniqueCount:t}}function m(g,l,E,i){for(let n=0;n<i;n++)if(g[l+n]!==g[E+n])return!1;return!0}function O(g,l,E,i,n){for(let c=0;c<n;c++)E[i+c]=g[l+c]}function I(g,l,E){let i=0;for(let n=0;n<E;n++)i=g[l+n]+i|0,i=i+(i<<11)+(i>>>2)|0;return i>>>0}let P=null},56548:(S,C,e)=>{e.d(C,{S:()=>I});var a=e(69287),D=e(82663),M=e(28714),m=e(41510),O=e(93617);function I(l,E,i){const n=function P(l,E,i,n){const c=Array.isArray(E[0])?(r,d)=>E[r][d]:(r,d)=>E[3*r+d],o=n?(0,D.GA)(n)/(0,D.G9)(n):1;return(0,O.lU)(l,(r,d)=>(0,M.i)(r,c(d,0)*o,c(d,1)*o,c(d,2)),i)}(g,l,E,i)?(0,O.Qj)(g):[0,0,1];return Math.abs(n[2])>Math.cos((0,a.kU)(80))?m._.Z:Math.abs(n[1])>Math.abs(n[0])?m._.Y:m._.X}const g=(0,O.vt)()},37723:(S,C,e)=>{e.d(C,{Wq:()=>c,lO:()=>g,oR:()=>E});var c,o,a=e(92405),D=e(41510),M=e(15268),m=e(23653),O=e(83034),I=e(56548),P=e(38118);function g(o){const r=E(o.rings,o.hasZ,c.CCW_IS_HOLE,o.spatialReference),d=new Array;let u=0,T=0;for(const s of r.polygons){const p=s.index,y=(0,m.l5)(r.position,3*p,3*s.count),B=s.holeIndices.map(A=>A-p),x=(0,O.Dg)((0,a.e)(y,B,3));d.push({position:y,faces:x}),u+=y.length,T+=x.length}const f=function l(o,r,d){if(1===o.length)return o[0];const u=(0,m.jh)(r),T=new Array(d);let f=0,t=0,s=0;for(const _ of o){for(let p=0;p<_.position.length;p++)u[f++]=_.position[p];for(const p of _.faces)T[t++]=p+s;s=f/3}return{position:u,faces:(0,O.Dg)(T)}}(d,u,T),t=Array.isArray(f.position)?(0,P.b)(f.position,3,{originalIndices:f.faces}):(0,P.b)(f.position.buffer,6,{originalIndices:f.faces});return f.position=(0,m.xm)(new Float64Array(t.buffer)),f.faces=t.indices,f}function E(o,r,d,u){const T=o.length,f=new Array(T),t=new Array(T),s=new Array(T);let _=0;for(let U=0;U<T;++U)_+=o[U].length;let p=0,y=0,B=0;const x=(0,m.jh)(3*_);let A=0;for(let U=T-1;U>=0;U--){const v=o[U],h=d===c.CCW_IS_HOLE&&n(v,r,u);if(h&&1!==T)f[p++]=v;else{let L=v.length;for(let R=0;R<p;++R)L+=f[R].length;const K={index:A,pathLengths:new Array(p+1),count:L,holeIndices:new Array(p)};K.pathLengths[0]=v.length,v.length>0&&(s[B++]={index:A,count:v.length}),A=h?i(v,v.length-1,-1,x,A,v.length,r):i(v,0,1,x,A,v.length,r);for(let R=0;R<p;++R){const W=f[R];K.holeIndices[R]=A,K.pathLengths[R+1]=W.length,W.length>0&&(s[B++]={index:A,count:W.length}),A=i(W,0,1,x,A,W.length,r)}p=0,K.count>0&&(t[y++]=K)}}for(let U=0;U<p;++U){const v=f[U];v.length>0&&(s[B++]={index:A,count:v.length}),A=i(v,0,1,x,A,v.length,r)}return t.length=y,s.length=B,{position:x,polygons:t,outlines:s}}function i(o,r,d,u,T,f,t){T*=3;for(let s=0;s<f;++s){const _=o[r];u[T++]=_[0],u[T++]=_[1],u[T++]=t&&_[2]?_[2]:0,r+=d}return T/3}function n(o,r,d){if(!r)return!(0,M.$3)(o);switch((0,I.S)(o,o.length-1,d)){case D._.X:return!(0,M.$3)(o,D._.Y,D._.Z);case D._.Y:return!(0,M.$3)(o,D._.X,D._.Z);case D._.Z:return!(0,M.$3)(o,D._.X,D._.Y)}}(o=c||(c={}))[o.NONE=0]="NONE",o[o.CCW_IS_HOLE=1]="CCW_IS_HOLE"}}]);