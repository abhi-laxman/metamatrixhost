"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[8596],{98596:(ue,g,l)=>{l.r(g),l.d(g,{Dictionary:()=>d.A,Voxel:()=>P,arcade:()=>s.h,arcadeFeature:()=>m.A,convertFeatureLayerToFeatureSet:()=>Q,convertJsonToArcade:()=>q,convertMapToFeatureSetCollection:()=>k,convertServiceUrlToWorkspace:()=>H,createExecContext:()=>Z,createFeature:()=>z,createFunction:()=>R,createSyntaxTree:()=>y,dependsOnView:()=>K,enableFeatureSetOperations:()=>te,enableGeometryOperations:()=>ee,evalSyntaxTree:()=>N,executeAsyncFunction:()=>Y,executeFunction:()=>X,extractFieldNames:()=>U,getArcadeType:()=>M,getViewInfo:()=>B,hasGeometryFunctions:()=>ae,hasGeometryOperations:()=>se,hasVariable:()=>W,loadScriptDependencies:()=>_,updateExecContext:()=>G});var s=l(12933),f=l(61299),T=l(48234),d=l(53787),m=l(63145),c=l(42686),u=l(55279),S=l(42970),p=l(68778);const h="Voxel.Position",v="Voxel.LocalTime";class P{constructor(t,n){this._graphic=t,this._timeZone=n,this.arcadeDeclaredClass="esri.arcade.Voxel",this._layer=t.layer}getPosition(){return void 0!==this._position?this._position:this._position=function F(e){const t=e.getAttribute(h);if("string"!=typeof t)throw new u.D$(null,u.TX.InvalidParameter,null);const n=JSON.parse(t);if(!Array.isArray(n)||"number"!=typeof n[0]||"number"!=typeof n[1]||"number"!=typeof n[2])throw new u.D$(null,u.TX.InvalidParameter,null);return new S.A(n)}(this._graphic)}getLocalTime(){return void 0!==this._localTime?this._localTime:this._localTime=function $(e,t){const n=e.getAttribute(v);if(null==n)return null;if(!(0,p.$P)(n))throw new u.D$(null,u.TX.InvalidParameter,null);return f.lY.dateJSAndZoneToArcadeDate(n,t)}(this._graphic,this._timeZone??"system")}keys(){return this._layer.fields.map(t=>t.name).sort()}hasField(t){return this._layer.fieldsIndex.has(t)}field(t){const n=this._layer.fieldsIndex?.get(t)?.name;if(null==n)throw new u.D$(null,u.TX.FieldNotFound,null,{key:t});switch(n){case h:return this.getPosition();case v:return this.getLocalTime()}return this._graphic.attributes[n]??null}castToText(t=!1){const n={...this._graphic.attributes};n[h]=this.getPosition(),v in n&&(n[v]=this.getLocalTime());for(const r of Object.keys(n))this._layer.fieldsIndex?.has(r)||delete n[r];return(0,c.c)(n,{useNumbersForDates:t})}}var C=l(77806),D=l(87257),E=l(29752),I=l(28067),w=l(21870),O=l(1749),V=l(55861),b=l(93615);const L={vars:{$feature:"any",$view:"any"},spatialReference:null};function J(e){return e.replaceAll(/[|\\{}()[\]^$+*?.]/g,"\\$&")}function M(e){return null==e?null:(0,p.cy)(e)||(0,c.m)(e)?"array":(0,c.g)(e)?"date":(0,p.Kg)(e)?"text":(0,p.Lm)(e)?"boolean":(0,p.Et)(e)?"number":e instanceof d.A?"dictionary":(0,c.n)(e)?"feature":e instanceof O.A?"point":e instanceof V.A?"polygon":e instanceof b.A?"polyline":e instanceof w.A?"multipoint":e instanceof I.A?"extent":e instanceof D.n?"dateOnly":e instanceof E.k?"time":(0,c.p)(e)?"featureSet":(0,c.o)(e)?"featureSetCollection":null}function y(e){if(!e)return null;try{return(0,s.p)(e)}catch{}return null}function R(e,t){const n="string"==typeof e?y(e):e;if(!n)return null;try{return t=t||(0,C.o8)(L),(0,s.c)(n,t)}catch{}return null}function Z(e,t,n){return{vars:{$feature:null==e?new m.A:m.A.createFromGraphic(e,n),$view:t?.view},spatialReference:t?.sr,timeZone:n??null}}function z(e,t,n){return m.A.createFromGraphicLikeObject(t,e,n,null)}function G(e,t){null!=e.vars&&(e.vars.$feature=t)}function N(e,t){let n;try{n=(0,s.e)(e,t)}catch{n=null}return n}function X(e,t){let n;try{n=e?e(t):null}catch{n=null}return n}function Y(e,t){try{return e?e(t):Promise.resolve(null)}catch{return Promise.resolve(null)}}const j=new Set(["$feature","$aggregatedFeatures","$voxel"].map(e=>(0,T.X)(e)));function U(e,t){if(!e)return[];const n="string"==typeof e?y(e):e;if(!n)return[];const r=(0,s.a)(n).filter(({varId:i})=>j.has(i)).map(({memberNamePattern:i})=>i).flatMap(i=>{if(i.includes("*")){if(null==t)return[];const a=new RegExp(`^${i.split(/\*+/).map(J).join(".*")}$`,"i");return t.filter(o=>a.test(o))}return i.toLowerCase()});return[...new Set(r.sort())]}function K(e){return(0,s.r)(e,"$view")}function W(e,t){return!!e&&(0,s.r)(e,t)}function B(e){if(!e||null==e.spatialReference&&(null==e.scale||null==e.viewingMode))return;let t,n;const{timeProperties:r,timeZone:i}=e;if(null!=r){const{currentStart:a,currentEnd:o}=r;null!=i?(t=null!=a?f.lY.dateJSAndZoneToArcadeDate(a,i):null,n=null!=o?f.lY.dateJSAndZoneToArcadeDate(o,i):null):(t=null!=a?f.lY.dateJSToArcadeDate(a):null,n=null!=o?f.lY.dateJSToArcadeDate(o):null)}return{view:e.viewingMode&&null!=e.scale?new d.A({viewingMode:e.viewingMode,scale:e.scale,timeProperties:null!=t||null!=n?new d.A({currentStart:t,currentEnd:n,startIncluded:!0,endIncluded:!0}):null}):null,sr:e.spatialReference}}function H({url:e,spatialReference:t,lrucache:n,interceptor:r}){const i=(0,s.f)();return i?i.createFeatureSetCollectionFromService(e,t,n,r):null}function Q({layer:e,spatialReference:t,outFields:n,returnGeometry:r,lrucache:i,interceptor:a}){if(null===e)return null;const o=(0,s.f)();return o?o.constructFeatureSet(e,t,n,r??!0,i,a):null}function k(e){if(null===e?.map)return null;const t=(0,s.f)();return t?t.createFeatureSetCollectionFromMap(e.map,e.spatialReference,e.lrucache,e.interceptor):null}function q(e,t){return d.A.convertJsonToArcade(e,t)}function _(e,t,n=[]){return(0,s.l)(e,t,n)}function ee(){return(0,s.b)()}function te(){return(0,s.d)()}function x(e,t){if(!e)return!1;if("string"==typeof e)return t(e);const n=e;if(function ne(e){return"type"in e&&("class-breaks"===e.type||"dictionary"===e.type||"dot-density"===e.type||"pie-chart"===e.type||"simple"===e.type||"unique-value"===e.type)}(n)){if("dot-density"===n.type){const a=n.attributes?.some(o=>t(o.valueExpression));if(a)return a}const r=n.visualVariables,i=!!r&&r.some(a=>{let o=t(a.valueExpression);return"size"===a.type&&(A(a.minSize)&&(o=o||t(a.minSize.valueExpression)),A(a.maxSize)&&(o=o||t(a.maxSize.valueExpression))),o});return!(!("valueExpression"in n)||!t(n.valueExpression))||i}if(function re(e){return"esri.layers.support.LabelClass"===e.declaredClass}(n)){const r=n.labelExpressionInfo?.expression;return!(!r||!t(r))||!1}return!!function le(e){return"esri.PopupTemplate"===e.declaredClass}(n)&&(!!n.expressionInfos&&n.expressionInfos.some(r=>t(r.expression))||Array.isArray(n.content)&&n.content.some(r=>"expression"===r.type&&t(r.expressionInfo?.expression)))}function ie(e){const t=y(e);return!!t&&(0,s.s)(t)}function ae(e){return x(e,ie)}function oe(e){const t=y(e);return!!t&&(0,s.g)(t)}function se(e){return x(e,oe)}function A(e){return e&&"esri.renderers.visualVariables.SizeVariable"===e.declaredClass}}}]);