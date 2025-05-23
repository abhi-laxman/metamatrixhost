"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[3325],{39693:(R,g,s)=>{s.d(g,{P:()=>j,L:()=>v});var t=s(8189),c=s(98877),E=s(29529),d=s(77806),p=s(26514);class M{constructor(){this._propertyOriginMap=new Map,this._originStores=new Array(p.AU),this._values=new Map,this.multipleOriginsSupported=!0}clone(n){const e=new M,i=this._originStores[p.Gr.DEFAULTS];i&&i.forEach((r,o)=>{e.set(o,(0,d.o8)(r),p.Gr.DEFAULTS)});for(let r=p.Gr.SERVICE;r<p.AU;r++){const o=this._originStores[r];o&&o.forEach((l,u)=>{n&&n.has(u)||e.set(u,(0,d.o8)(l),r)})}return e}get(n,e){const i=void 0===e?this._values:this._originStores[e];return i?i.get(n):void 0}keys(n){const e=null==n?this._values:this._originStores[n];return e?[...e.keys()]:[]}set(n,e,i=p.Gr.USER){let r=this._originStores[i];if(r||(r=new Map,this._originStores[i]=r),r.set(n,e),!this._values.has(n)||this._propertyOriginMap.get(n)<=i){const o=this._values.get(n);return this._values.set(n,e),this._propertyOriginMap.set(n,i),o!==e}return!1}delete(n,e=p.Gr.USER){const i=this._originStores[e];if(!i)return;const r=i.get(n);if(i.delete(n),this._values.has(n)&&this._propertyOriginMap.get(n)===e){this._values.delete(n);for(let o=e-1;o>=0;o--){const l=this._originStores[o];if(l&&l.has(n)){this._values.set(n,l.get(n)),this._propertyOriginMap.set(n,o);break}}}return r}has(n,e){const i=void 0===e?this._values:this._originStores[e];return!!i&&i.has(n)}revert(n,e){for(;e>0&&!this.has(n,e);)--e;const i=this._originStores[e],r=i?.get(n),o=this._values.get(n);return this._values.set(n,r),this._propertyOriginMap.set(n,e),o!==r}originOf(n){return this._propertyOriginMap.get(n)||p.Gr.DEFAULTS}forEach(n){this._values.forEach(n)}}var y=s(34813),w=s(74220),S=s(76576);const x=m=>{let n=class extends m{constructor(...e){super(...e);const i=(0,w.oY)(this),r=i.store,o=new M;i.store=o,(0,E.k)(i,r,o)}read(e,i){(0,y.L)(this,e,i)}getAtOrigin(e,i){const r=U(this),o=(0,p.aB)(i);if("string"==typeof e)return r.get(e,o);const l={};return e.forEach(u=>{l[u]=r.get(u,o)}),l}originOf(e){return(0,p.OL)(this.originIdOf(e))}originIdOf(e){return U(this).originOf(e)}revert(e,i){const r=U(this),o=(0,p.aB)(i),l=(0,w.oY)(this);let u;u="string"==typeof e?"*"===e?r.keys(o):[e]:e,u.forEach(C=>{l.invalidate(C),r.revert(C,o),l.commit(C)})}};return n=(0,t._)([(0,S.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],n),n};function U(m){return(0,w.oY)(m).store}let b=class extends(x(c.A)){};b=(0,t._)([(0,S.$)("esri.core.ReadOnlyMultiOriginJSONSupport")],b);var T=s(92073),A=s(56558);const h=m=>{let n=class extends m{constructor(...e){super(...e)}clear(e,i="user"){return O(this).delete(e,(0,p.aB)(i))}write(e,i){return(0,A.M)(this,e=e||{},i),e}setAtOrigin(e,i,r){(0,w.oY)(this).setAtOrigin(e,i,(0,p.aB)(r))}removeOrigin(e){const i=O(this),r=(0,p.aB)(e),o=i.keys(r);for(const l of o)i.originOf(l)===r&&i.set(l,i.get(l,r),p.Gr.USER)}updateOrigin(e,i){const r=O(this),o=(0,p.aB)(i),l=(0,T.Jt)(this,e);for(let u=o+1;u<p.AU;++u)r.delete(e,u);r.set(e,l,o)}toJSON(e){return this.write({},e)}};return n=(0,t._)([(0,S.$)("esri.core.MultiOriginJSONSupport.WriteableMultiOriginJSONSupport")],n),n.prototype.toJSON.isDefaultToJSON=!0,n};function O(m){return(0,w.oY)(m).store}const j=m=>{let n=class extends(h(x(m))){constructor(...e){super(...e)}};return n=(0,t._)([(0,S.$)("esri.core.MultiOriginJSONSupport")],n),n};let v=class extends(j(c.A)){};v=(0,t._)([(0,S.$)("esri.core.MultiOriginJSONSupport")],v)},50501:(R,g,s)=>{s.d(g,{K:()=>t});const t=["operational-layers","basemap","ground"]},22329:(R,g,s)=>{s.d(g,{C1:()=>i,Fm:()=>v,Ih:()=>j,M6:()=>S,OZ:()=>U,PY:()=>w,Qo:()=>A,Yj:()=>T,fV:()=>b,hG:()=>e,hn:()=>n,id:()=>m,kF:()=>x,ke:()=>O,zQ:()=>r});var t=s(50501),c=s(28067),E=s(32034),d=s(88135),p=s(88485),M=s(48290),y=s(46873);const w={type:Boolean,value:!0,json:{origins:{service:{read:!1,write:!1},"web-map":{read:!1,write:!1}},name:"screenSizePerspective",write:{enabled:!0,layerContainerTypes:t.K}}},S={type:Boolean,value:!0,json:{name:"disablePopup",read:{reader:(o,l)=>!l.disablePopup},write:{enabled:!0,writer(o,l,u){l[u]=!o}}}},x={type:Boolean,value:!0,nonNullable:!0,json:{name:"showLabels",write:{enabled:!0,layerContainerTypes:t.K}}},U={type:String,json:{origins:{"portal-item":{write:!1}},write:{isRequired:!0,ignoreOrigin:!0,writer:d.w}}},b={type:Boolean,value:!0,nonNullable:!0,json:{origins:{service:{read:{enabled:!1}}},name:"showLegend",write:{enabled:!0,layerContainerTypes:t.K}}},T={value:null,type:p.A,json:{origins:{service:{name:"elevationInfo",write:!0}},name:"layerDefinition.elevationInfo",write:{enabled:!0,layerContainerTypes:t.K}}};function A(o){return{type:o,readOnly:!0,json:{origins:{service:{read:!0}},read:!1}}}const h={write:{enabled:!0,layerContainerTypes:t.K},read:!0},O={type:Number,json:{origins:{"web-document":h,"portal-item":{write:{layerContainerTypes:t.K}}}}},j={...O,json:{...O.json,origins:{"web-document":{...h,write:{enabled:!0,layerContainerTypes:t.K,target:{opacity:{type:Number},"layerDefinition.drawingInfo.transparency":{type:Number}}}}},read:{source:["layerDefinition.drawingInfo.transparency","drawingInfo.transparency"],reader:(o,l,u)=>u&&"service"!==u.origin||!l.drawingInfo||void 0===l.drawingInfo.transparency?l.layerDefinition?.drawingInfo&&void 0!==l.layerDefinition.drawingInfo.transparency?(0,y.D)(l.layerDefinition.drawingInfo.transparency):void 0:(0,y.D)(l.drawingInfo.transparency)}}},v={type:c.A,readOnly:!0,json:{origins:{service:{read:{source:["fullExtent","spatialReference"],reader:(o,l)=>{const u=c.A.fromJSON(o);return null!=l.spatialReference&&"object"==typeof l.spatialReference&&(u.spatialReference=E.A.fromJSON(l.spatialReference)),u}}}},read:!1}},m={type:String,json:{origins:{service:{read:!1},"portal-item":{read:!1}}}},n={type:Number,json:{origins:{service:{write:{enabled:!1}}},name:"layerDefinition.minScale",write:{layerContainerTypes:t.K}}},e={type:Number,json:{origins:{service:{write:{enabled:!1}}},name:"layerDefinition.maxScale",write:{layerContainerTypes:t.K}}},i={json:{write:{ignoreOrigin:!0,layerContainerTypes:t.K},origins:{"web-map":{read:!1,write:!1}}}},r={type:M.A,json:{name:"attributeTableInfo",write:!0,origins:{"web-scene":{read:!1,write:!1}}}}},48716:(R,g,s)=>{s.d(g,{j:()=>E});var t=s(82663),c=s(47258);const E={unknown:1,inches:(0,t.oU)(1,"meters","inches"),feet:(0,t.oU)(1,"meters","feet"),"us-feet":(0,t.oU)(1,"meters","us-feet"),yards:(0,t.oU)(1,"meters","yards"),miles:(0,t.oU)(1,"meters","miles"),"nautical-miles":(0,t.oU)(1,"meters","nautical-miles"),millimeters:(0,t.oU)(1,"meters","millimeters"),centimeters:(0,t.oU)(1,"meters","centimeters"),decimeters:(0,t.oU)(1,"meters","decimeters"),meters:(0,t.oU)(1,"meters","meters"),kilometers:(0,t.oU)(1,"meters","kilometers"),"decimal-degrees":1/(0,t.vl)(1,"meters",c.$O.radius)}},88485:(R,g,s)=>{s.d(g,{A:()=>i});var A,t=s(8189),c=s(49976),E=s(71065),d=s(11432),p=s(85211),S=(s(3248),s(35150),s(40707),s(17221)),x=s(76576),U=s(50305),b=s(10467),T=s(86300);let h=A=class extends E.A{constructor(r){super(r)}collectRequiredFields(r,o){var l=this;return(0,b.A)(function*(){return(0,T.Dx)(r,o,l.expression)})()}clone(){return new A({expression:this.expression,title:this.title})}equals(r){return this.expression===r.expression&&this.title===r.title}};(0,t._)([(0,p.MZ)({type:String,json:{write:{isRequired:!0}}})],h.prototype,"expression",void 0),(0,t._)([(0,p.MZ)({type:String,json:{write:!0}})],h.prototype,"title",void 0),h=A=(0,t._)([(0,x.$)("esri.symbols.support.FeatureExpressionInfo")],h);const O=h;var v,j=s(82575);const m=(0,c.O)()({onTheGround:"on-the-ground",relativeToGround:"relative-to-ground",relativeToScene:"relative-to-scene",absoluteHeight:"absolute-height"}),n=new c.J({foot:"feet",kilometer:"kilometers",meter:"meters",mile:"miles","us-foot":"us-feet",yard:"yards"});let e=v=class extends E.A{constructor(r){super(r),this.featureExpressionInfo=void 0,this.offset=null}readFeatureExpressionInfo(r,o){return r??(o.featureExpression&&0===o.featureExpression.value?{expression:"0"}:void 0)}writeFeatureExpressionInfo(r,o,l,u){o[l]=r.write({},u),"0"===r.expression&&(o.featureExpression={value:0})}get mode(){const{offset:r,featureExpressionInfo:o}=this;return this._isOverridden("mode")?this._get("mode"):null!=r||o?"relative-to-ground":"on-the-ground"}set mode(r){this._override("mode",r)}set unit(r){this._set("unit",r)}write(r,o){return this.offset||this.mode||this.featureExpressionInfo||this.unit?super.write(r,o):null}clone(){return new v({mode:this.mode,offset:this.offset,featureExpressionInfo:this.featureExpressionInfo?this.featureExpressionInfo.clone():void 0,unit:this.unit})}equals(r){return this.mode===r.mode&&this.offset===r.offset&&this.unit===r.unit&&(0,d.CM)(this.featureExpressionInfo,r.featureExpressionInfo)}};(0,t._)([(0,p.MZ)({type:O,json:{write:!0}})],e.prototype,"featureExpressionInfo",void 0),(0,t._)([(0,S.w)("featureExpressionInfo",["featureExpressionInfo","featureExpression"])],e.prototype,"readFeatureExpressionInfo",null),(0,t._)([(0,U.K)("featureExpressionInfo",{featureExpressionInfo:{type:O},"featureExpression.value":{type:[0]}})],e.prototype,"writeFeatureExpressionInfo",null),(0,t._)([(0,p.MZ)({type:m.apiValues,nonNullable:!0,json:{type:m.jsonValues,read:m.read,write:{writer:m.write,isRequired:!0}}})],e.prototype,"mode",null),(0,t._)([(0,p.MZ)({type:Number,json:{write:!0}})],e.prototype,"offset",void 0),(0,t._)([(0,p.MZ)({type:j.KQ,json:{type:String,read:n.read,write:n.write}})],e.prototype,"unit",null),e=v=(0,t._)([(0,x.$)("esri.symbols.support.ElevationInfo")],e);const i=e},82575:(R,g,s)=>{s.d(g,{Ao:()=>d,KQ:()=>M,Tg:()=>E});var t=s(89952),c=s(48716);function E(y){return!!y&&null!=c.j[y]}function d(y){return 1/(c.j[y]||1)}const M=function p(){const y=Object.keys(c.j);return(0,t.TF)(y,"decimal-degrees"),y.sort(),y}()},48290:(R,g,s)=>{s.d(g,{A:()=>Z});var t=s(8189),c=s(71065),E=s(77806),d=s(85211),p=s(48669),M=s(17221),y=s(76576),w=s(50305);s(3248),s(35150),s(40707);let b=class extends c.A{constructor(a){super(a),this.description=null,this.label=null,this.type=null}};(0,t._)([(0,d.MZ)({type:String,json:{write:!0}})],b.prototype,"description",void 0),(0,t._)([(0,d.MZ)({type:String,json:{write:!0}})],b.prototype,"label",void 0),(0,t._)([(0,d.MZ)()],b.prototype,"type",void 0),b=(0,t._)([(0,y.$)("esri.tables.elements.AttributeTableElement")],b);const T=b;var A;let h=A=class extends T{constructor(a){super(a),this.displayType="auto",this.type="attachment"}clone(){return new A({description:this.description,displayType:this.displayType,label:this.label})}};(0,t._)([(0,d.MZ)({type:["auto"],json:{write:!0}})],h.prototype,"displayType",void 0),(0,t._)([(0,d.MZ)({type:["attachment"],readOnly:!0,json:{read:!1,write:!0}})],h.prototype,"type",void 0),h=A=(0,t._)([(0,y.$)("esri.tables.elements.AttributeTableAttachmentElement")],h);const O=h;var j;let v=j=class extends T{constructor(a){super(a),this.fieldName=null,this.type="field"}clone(){return new j({description:this.description,fieldName:this.fieldName,label:this.label})}};(0,t._)([(0,d.MZ)({type:String,json:{write:!0}})],v.prototype,"fieldName",void 0),(0,t._)([(0,d.MZ)({type:String,json:{read:!1,write:!0}})],v.prototype,"type",void 0),v=j=(0,t._)([(0,y.$)("esri.tables.elements.AttributeTableFieldElement")],v);const m=v;var e,n=s(55739);let i=e=class extends T{constructor(a){super(a),this.relationshipId=null,this.type="relationship"}clone(){return new e({description:this.description,label:this.label,relationshipId:this.relationshipId})}};(0,t._)([(0,d.MZ)({type:Number,json:{write:!0}})],i.prototype,"relationshipId",void 0),(0,t._)([(0,d.MZ)({type:["relationship"],json:{read:!1,write:!0}})],i.prototype,"type",void 0),i=e=(0,t._)([(0,y.$)("esri.tables.elements.AttributeTableRelationshipElement")],i);const r=i;function o(a){return{typesWithGroup:{base:T,key:"type",typeMap:{attachment:O,field:m,group:a,relationship:r}},typesWithoutGroup:{base:T,key:"type",typeMap:{attachment:O,field:m,relationship:r}}}}function l(a,f,P=!0){if(!a)return null;const N=P?f.typesWithGroup.typeMap:f.typesWithoutGroup.typeMap;return a.filter(_=>N[_.type]).map(_=>N[_.type].fromJSON(_))}function u(a,f,P=!0){if(!a)return null;const N=P?f.typesWithGroup.typeMap:f.typesWithoutGroup.typeMap;return a.filter(_=>N[_.type]).map(_=>_.toJSON())}function C(a,f,P=!0){return a?a.map(N=>(0,n.aq)(P?f.typesWithGroup:f.typesWithoutGroup,N)):null}var K;let I=K=class extends T{constructor(a){super(a),this.elements=null,this.type="group"}castElements(a){return C(a,B,!1)}readElements(a,f){return l(f.attributeTableElements,B,!1)}writeElements(a,f){f.attributeTableElements=u(a,B,!1)}clone(){return new K({description:this.description,elements:(0,E.o8)(this.elements),label:this.label})}};(0,t._)([(0,d.MZ)({json:{write:!0}})],I.prototype,"elements",void 0),(0,t._)([(0,p.w)("elements")],I.prototype,"castElements",null),(0,t._)([(0,M.w)("elements",["attributeTableElements"])],I.prototype,"readElements",null),(0,t._)([(0,w.K)("elements")],I.prototype,"writeElements",null),(0,t._)([(0,d.MZ)({type:String,json:{read:!1,write:!0}})],I.prototype,"type",void 0),I=K=(0,t._)([(0,y.$)("esri.tables.elements.AttributeTableGroupElement")],I);const B=o(I);var G;const L=o(I);let D=G=class extends c.A{constructor(a){super(a),this.elements=null,this.orderByFields=null}castElements(a){return C(a,L)}readElements(a,f){return l(f.attributeTableElements,L)}writeElements(a,f){f.attributeTableElements=u(a,L)}clone(){return new G({elements:(0,E.o8)(this.elements),orderByFields:this.orderByFields})}};(0,t._)([(0,d.MZ)({json:{write:!0}})],D.prototype,"elements",void 0),(0,t._)([(0,p.w)("elements")],D.prototype,"castElements",null),(0,t._)([(0,M.w)("elements",["attributeTableElements"])],D.prototype,"readElements",null),(0,t._)([(0,w.K)("elements")],D.prototype,"writeElements",null),(0,t._)([(0,d.MZ)({type:[Object],json:{write:!0}})],D.prototype,"orderByFields",void 0),D=G=(0,t._)([(0,y.$)("esri.tables.AttributeTableTemplate")],D);const Z=D}}]);