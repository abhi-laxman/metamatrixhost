"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3359,5740],{46130:(e,t,r)=>{r.d(t,{v:()=>n});var a=r(76553);function n(e){e?.writtenProperties&&e.writtenProperties.forEach((({target:e,propName:t,newOrigin:r})=>{(0,a.H)(e)&&r&&e.originOf(t)!==r&&e.updateOrigin(t,r)}))}},76553:(e,t,r)=>{function a(e){return e&&"getAtOrigin"in e&&"originOf"in e}r.d(t,{H:()=>a})},33359:(e,t,r)=>{r.d(t,{save:()=>T,saveAs:()=>N});var a=r(4576),n=(r(44208),r(49186),r(71530)),o=r(60694),s=r(23154),i=r(83531),l=r(88788),u=r(10407);const c="Feature Service",y="feature-layer-utils",p=`${y}-save`,d=`${y}-save-as`;function f(e){return{isValid:(0,i.W_)(e)&&(!("dynamicDataSource"in e)||!e.dynamicDataSource),errorMessage:"Feature layer should be a layer or table in a map or feature service"}}function m(e,t){const r=(0,l.m)(e,"portal-item");return t?.isTable&&(r.layerContainerType="tables"),r}function w(e){const t=[],r=[];for(const{layer:a,layerJSON:n}of e)a.isTable?r.push(n):t.push(n);return{layers:t,tables:r}}function h(e){return w([e])}async function b(e,t){return/\/\d+\/?$/.test(e.url)?h(t[0]):async function(e,t){if(e.reverse(),!t)return w(e);const a=await async function(e,t){let a=await e.fetchData("json");if(function(e){return!!(e&&Array.isArray(e.layers)&&Array.isArray(e.tables))}(a))return a;a||={},function(e){e.layers||=[],e.tables||=[]}(a);const{layer:{url:n,customParameters:o,apiKey:i}}=t[0];return await async function(e,t,a){const{url:n,customParameters:o,apiKey:i}=t,{serviceJSON:l,layersJSON:u}=await(0,s.Q)(n,{customParameters:o,apiKey:i}),c=I(e.layers,l.layers,a),y=I(e.tables,l.tables,a);e.layers=c.itemResources,e.tables=y.itemResources;const p=[...c.added,...y.added],d=u?[...u.layers,...u.tables]:[];await async function(e,t,a,n){const o=await async function(e){const t=[];e.forEach((({type:e})=>{switch((0,s.K)(e)){case"CatalogLayer":t.push(Promise.all([r.e(3112),r.e(364),r.e(8628),r.e(2593),r.e(4196)]).then(r.bind(r,79003)).then((e=>e.default)));break;case"FeatureLayer":t.push(Promise.all([r.e(3112),r.e(9953),r.e(3029),r.e(3600),r.e(9340)]).then(r.bind(r,13600)).then((e=>e.default)));break;case"OrientedImageryLayer":t.push(Promise.all([r.e(3112),r.e(9953),r.e(3029),r.e(3600),r.e(8330)]).then(r.bind(r,97927)).then((e=>e.default)))}}));const a=await Promise.all(t),n=new Map;return e.forEach((({type:e},t)=>{n.set(e,a[t])})),n}(t),i=t.map((({id:e,type:t})=>new(o.get(t))({url:a,layerId:e,sourceJSON:n.find((({id:t})=>t===e))})));await Promise.allSettled(i.map((e=>e.load()))),i.forEach((t=>{const{layerId:r,loaded:a,defaultPopupTemplate:n}=t;if(!a||null==n)return;const o={id:r,popupInfo:n.toJSON()};"ArcGISFeatureLayer"!==t.operationalLayerType&&(o.layerType=t.operationalLayerType),g(t,o,e)}))}(e,p,n,d)}(a,{url:n??"",customParameters:o,apiKey:i},t.map((e=>e.layer.layerId))),a}(t,e);for(const t of e)g(t.layer,t.layerJSON,a);return function(e,t){const r=[],a=[];for(const{layer:e}of t){const{isTable:t,layerId:n}=e;t?a.push(n):r.push(n)}v(e.layers,r),v(e.tables,a)}(a,e),a}(t,e)}function v(e,t){if(e.length<2)return;const r=[];for(const{id:t}of e)r.push(t);(0,a.aI)(r.sort(S),t.slice().sort(S))&&e.sort(((e,r)=>{const a=t.indexOf(e.id),n=t.indexOf(r.id);return a<n?-1:a>n?1:0}))}function S(e,t){return e<t?-1:e>t?1:0}function I(e,t,r){const n=(0,a.iv)(e,t,((e,t)=>e.id===t.id));e=e.filter((e=>!n.removed.some((t=>t.id===e.id))));const o=n.added;return o.forEach((({id:t})=>{e.push({id:t})})),{itemResources:e,added:o.filter((({id:e})=>!r.includes(e)))}}function g(e,t,r){e.isTable?P(r.tables,t):P(r.layers,t)}function P(e,t){const r=e.findIndex((({id:e})=>e===t.id));-1===r?e.push(t):e[r]=t}function L(e,t){let r=0,a=0,n=0;for(const{layerType:e}of[...t.layers,...t.tables])switch(e){case"OrientedImageryLayer":r++;break;case"SubtypeGroupLayer":a++;break;case"SubtypeGroupTable":n++}(0,u.Sm)(e,u.mm.ORIENTED_IMAGERY_LAYER,r>0),(0,u.Sm)(e,u.mm.SUBTYPE_GROUP_LAYER,a>0),(0,u.Sm)(e,u.mm.SUBTYPE_GROUP_TABLE,n>0)}async function O(e,t,r){L(t,r)}async function A(e,t,r){const{url:a,layerId:n,title:s,fullExtent:i,isTable:l}=e,c=(0,o.qg)(a);t.url=("FeatureServer"===c?.serverType?a:`${a}/${n}`)??null,t.title||=s,t.extent=null,l||null==i||(t.extent=await(0,u.sQ)(i)),function(e,t,r){(0,u.OM)(t,u.mm.METADATA),(0,u.Sm)(t,u.mm.MULTI_LAYER,e.length>1),(0,u.Sm)(t,u.mm.SINGLE_LAYER,1===e.length),(0,u.Sm)(t,u.mm.TABLE,r.tables.length>0&&0===r.layers.length),L(t,r)}([e],t,r)}async function T(e,t){return(0,n.UN)({layer:e,itemType:c,validateLayer:f,createJSONContext:t=>m(t,e),createItemData:(e,t)=>b(t,[e]),errorNamePrefix:p,setItemProperties:O},t)}async function N(e,t,r){return(0,n.Uh)({layer:e,itemType:c,validateLayer:f,createJSONContext:t=>m(t,e),createItemData:(e,t)=>Promise.resolve(h(e)),errorNamePrefix:d,newItem:t,setItemProperties:A},r)}},71530:(e,t,r)=>{r.d(t,{UN:()=>b,Uh:()=>v});var a=r(49186),n=r(46130),o=r(20655),s=r(80812),i=r(88788),l=r(10407),u=r(26121);async function c(e){const{layer:t,errorNamePrefix:r,validateLayer:n}=e;await t.load(),function(e,t,r){const n=r(e);if(!n.isValid)throw new a.A(`${t}:invalid-parameters`,n.errorMessage,{layer:e})}(t,r,n)}function y(e,t){return`Layer (title: ${e.title}, id: ${e.id}) of type '${e.declaredClass}' ${t}`}function p(e){const{item:t,errorNamePrefix:r,layer:n,validateItem:o}=e;if(function(e){const{item:t,itemType:r,additionalItemType:n,errorNamePrefix:o,layer:s}=e,i=[r];if(n&&i.push(n),!i.includes(t.type)){const e=i.map((e=>`'${e}'`)).join(", ");throw new a.A(`${o}:portal-item-wrong-type`,`Portal item type should be one of: "${e}"`,{item:t,layer:s})}}(e),o){const e=o(t);if(!e.isValid)throw new a.A(`${r}:invalid-parameters`,e.errorMessage,{layer:n})}}function d(e){const{layer:t,errorNamePrefix:r}=e,{portalItem:n}=t;if(!n)throw new a.A(`${r}:portal-item-not-set`,y(t,"requires the portalItem property to be set"));if(!n.loaded)throw new a.A(`${r}:portal-item-not-loaded`,y(t,"cannot be saved to a portal item that does not exist or is inaccessible"));p({...e,item:n})}function f(e){const{newItem:t,itemType:r}=e;let a=s.default.from(t);return a.id&&(a=a.clone(),a.id=null),a.type??=r,a.portal??=o.A.getDefault(),p({...e,item:a}),a}function m(e){return(0,i.m)(e,"portal-item")}async function w(e,t,r){"beforeSave"in e&&"function"==typeof e.beforeSave&&await e.beforeSave();const a=e.write({},t);return await Promise.all(t.resources?.pendingOperations??[]),(0,u.c)(t,{errorName:"layer-write:unsupported"},r),a}function h(e){(0,l.LG)(e,l.mm.JSAPI),e.typeKeywords&&(e.typeKeywords=e.typeKeywords.filter(((e,t,r)=>r.indexOf(e)===t)))}async function b(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:l}=e;await c(e),d(e);const u=r.portalItem,y=o?o(u):m(u),p=await w(r,y,{...t,supplementalUnsupportedErrors:l}),f=await a({layer:r,layerJSON:p},u);return await(s?.(r,u,f)),h(u),await u.update({data:f}),(0,n.v)(y),await(i?.(u,y)),u}async function v(e,t){const{layer:r,createItemData:a,createJSONContext:o,setItemProperties:s,saveResources:i,supplementalUnsupportedErrors:l}=e;await c(e);const u=f(e),y=o?o(u):m(u),p=await w(r,y,{...t,supplementalUnsupportedErrors:l}),d=await a({layer:r,layerJSON:p},u);return await s(r,u,d),h(u),await async function(e,t,r){const a=e.portal;await a.signIn(),await a.user.addItem({item:e,data:t,folder:r?.folder})}(u,d,t),r.portalItem=u,(0,n.v)(y),await(i?.(u,y)),u}},23154:(e,t,r)=>{r.d(t,{K:()=>p,Q:()=>o});var a=r(24183);const n=new Set(["Catalog Layer","Feature Layer","Oriented Imagery Layer"]);async function o(e,t){const{loadContext:r,...n}=t||{},o=r?await r.fetchServiceMetadata(e,n):await(0,a.V)(e,n);y(o),l(o);const s={serviceJSON:o};if((o.currentVersion??0)<10.5)return s;const i=`${e}/layers`,u=r?await r.fetchServiceMetadata(i,n):await(0,a.V)(i,n);return y(u),l(u),s.layersJSON={layers:u.layers,tables:u.tables},s}function s(e){const{type:t}=e;return!!t&&n.has(t)}function i(e){return"Table"===e.type}function l(e){e.layers=e.layers?.filter(s),e.tables=e.tables?.filter(i)}function u(e){e.type||="Feature Layer"}function c(e){e.type||="Table"}function y(e){e.layers?.forEach(u),e.tables?.forEach(c)}function p(e){switch(e){case"Feature Layer":case"Table":return"FeatureLayer";case"Oriented Imagery Layer":return"OrientedImageryLayer";case"Catalog Layer":return"CatalogLayer"}return"FeatureLayer"}},88788:(e,t,r)=>{r.d(t,{m:()=>s,v:()=>o});var a=r(84952),n=r(20655);function o(e,t){return{...i(e,t),readResourcePaths:[]}}function s(e,t,r){const n=(0,a.An)(e.itemUrl);return{...i(e,t),messages:[],writtenProperties:[],blockedRelativeUrls:[],verifyItemRelativeUrls:n?{rootPath:n.path,writtenUrls:[]}:null,resources:r?{toAdd:[],toUpdate:[],toKeep:[],pendingOperations:[]}:null}}function i(e,t){return{origin:t,url:(0,a.An)(e.itemUrl),portal:e.portal||n.A.getDefault(),portalItem:e}}},24183:(e,t,r)=>{r.d(t,{V:()=>n});var a=r(78888);async function n(e,t){const{data:r}=await(0,a.A)(e,{responseType:"json",query:{f:"json",...t?.customParameters,token:t?.apiKey}});return r}},26121:(e,t,r)=>{r.d(t,{c:()=>s,d:()=>n});var a=r(49186);async function n(e){const t=[];for(const r of e.allLayers)if("beforeSave"in r&&"function"==typeof r.beforeSave){const e=r.beforeSave();e&&t.push(e)}await Promise.allSettled(t)}const o=new Set(["layer:unsupported","property:unsupported","symbol:unsupported","symbol-layer:unsupported","url:unsupported"]);function s(e,t,r){let n=(e.messages??[]).filter((({type:e})=>"error"===e)).map((({name:e,message:t,details:r})=>new a.A(e,t,r)));if(e.blockedRelativeUrls&&(n=n.concat(e.blockedRelativeUrls.map((e=>new a.A("url:unsupported",`Relative url '${e}' is not supported`))))),r){const{ignoreUnsupported:e,supplementalUnsupportedErrors:t=[],requiredPropertyChecksDisabled:a}=r;e&&(n=n.filter((({name:e})=>!(o.has(e)||t.includes(e))))),a&&(n=n.filter((e=>"web-document-write:property-required"!==e.name)))}if(n.length>0)throw new a.A(t.errorName,"Failed to save due to unsupported or invalid content. See 'details.errors' for more detailed information",{errors:n})}}}]);