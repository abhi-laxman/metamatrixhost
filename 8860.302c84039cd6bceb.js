"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[8860],{33087:(K,L,l)=>{l.d(L,{q:()=>O});var M=l(60611);class O{constructor(s,v){this._storage=new M.F,this.id="",this.name="",this.size=0,this._storage.maxSize=s,this._storage.register(this),v&&this._storage.registerRemoveFunc("",v)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(s,v,C=1){this._storage.put(this,s,v,C,1)}pop(s){return this._storage.pop(this,s)}get(s){return this._storage.get(this,s)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(s){this._storage.maxSize=s}resetHitRate(){}}},60611:(K,L,l)=>{l.d(L,{F:()=>C,Ti:()=>O});var M=l(12438);const O=-3,T=O-1;var s,E;(E=s||(s={}))[E.ALL=0]="ALL",E[E.SOME=1]="SOME";class C{get size(){return this._size}constructor(i=10485760){this._maxSize=i,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new M.A,this._users=new M.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear()}register(i){this._users.push(i)}deregister(i){this._users.removeUnordered(i)}registerRemoveFunc(i,r){this._removeFuncs.push([i,r])}deregisterRemoveFunc(i){this._removeFuncs.filterInPlace(r=>r[0]!==i)}get maxSize(){return this._maxSize}set maxSize(i){this._maxSize=Math.max(i,-1),this._checkSize()}getSize(i,r){return this._db.get(i.id+r)?.size??0}put(i,r,u,n,d){const c=this._db.get(r=i.id+r);if(c&&(this._size-=c.size,i.size-=c.size,this._db.delete(r),c.entry!==u&&this._notifyRemove(r,c.entry,c.size,s.ALL)),n>this._maxSize)return void this._notifyRemove(r,u,n,s.ALL);if(void 0===u)return void console.warn("Refusing to cache undefined entry ");if(!n||n<0)return console.warn(`Refusing to cache entry with size ${n} for key ${r}`),void this._notifyRemove(r,u,0,s.ALL);const S=1+Math.max(d,T)-O;this._db.set(r,new F(u,n,S)),this._size+=n,i.size+=n,this._checkSize()}updateSize(i,r,u,n){const d=this._db.get(r=i.id+r);if(d&&d.entry===u){for(this._size-=d.size,i.size-=d.size;n>this._maxSize;){const c=this._notifyRemove(r,u,n,s.SOME);if(!(null!=c&&c>0))return void this._db.delete(r);n=c}d.size=n,this._size+=n,i.size+=n,this._checkSize()}}pop(i,r){const u=this._db.get(r=i.id+r);if(u)return this._size-=u.size,i.size-=u.size,this._db.delete(r),++this._hit,u.entry;++this._miss}get(i,r){const u=this._db.get(r=i.id+r);if(void 0!==u)return this._db.delete(r),u.lives=u.lifetime,this._db.set(r,u),++this._hit,u.entry;++this._miss}peek(i,r){const u=this._db.get(i.id+r);return u?++this._hit:++this._miss,u?.entry}get performanceInfo(){const i={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},r={},u=new Array;this._db.forEach((c,S)=>{const z=c.lifetime;u[z]=(u[z]||0)+c.size,this._users.forAll(w=>{const{id:P,name:h}=w;S.startsWith(P)&&(r[h]=(r[h]||0)+c.size)})});const n={};this._users.forAll(c=>{const S=c.name;"hitRate"in c&&"number"==typeof c.hitRate&&!isNaN(c.hitRate)&&c.hitRate>0?(r[S]=r[S]||0,n[S]=Math.round(100*c.hitRate)+"%"):n[S]="0%"});const d=Object.keys(r);d.sort((c,S)=>r[S]-r[c]),d.forEach(c=>i[c]=Math.round(r[c]/2**20)+"MB / "+n[c]);for(let c=u.length-1;c>=0;--c){const S=u[c];S&&(i["Priority "+(c+O-1)]=Math.round(S/this._size*100)+"%")}return i}resetStats(){this._hit=this._miss=0,this._users.forAll(i=>i.resetHitRate())}clear(i){const r=i.id;this._db.forEach((u,n)=>{n.startsWith(r)&&(this._size-=u.size,this._db.delete(n),this._notifyRemove(n,u.entry,u.size,s.ALL))}),i.size=0}clearAll(){this._db.forEach((i,r)=>this._notifyRemove(r,i.entry,i.size,s.ALL)),this._users.forAll(i=>i.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(i,r,u,n){let d;return this._removeFuncs.some(c=>{if(i.startsWith(c[0])){const S=c[1](r,n,u);return"number"==typeof S&&(d=S),!0}return!1}),d}_checkSize(){this._users.forAll(i=>this._checkSizeLimits(i)),this._checkSizeLimits()}_checkSizeLimits(i){const r=i??this;if(r.maxSize<0||r.size<=r.maxSize)return;const u=i?.id;let n=!0;for(;n;){n=!1;for(const[d,c]of this._db)if(0===c.lifetime&&(!u||d.startsWith(u))){if(this._purgeItem(d,c,i),r.size<=.9*r.maxSize)return;n||=this._db.has(d)}}for(const[d,c]of this._db)if((!u||d.startsWith(u))&&(this._purgeItem(d,c,i),r.size<=.9*r.maxSize))return}_purgeItem(i,r,u=this._users.find(n=>i.startsWith(n.id))){if(this._db.delete(i),r.lives<=1){this._size-=r.size,u&&(u.size-=r.size);const n=this._notifyRemove(i,r.entry,r.size,s.SOME);null!=n&&n>0&&(this._size+=n,u&&(u.size+=n),r.lives=r.lifetime,r.size=n,this._db.set(i,r))}else--r.lives,this._db.set(i,r)}}class F{constructor(i,r,u){this.entry=i,this.size=r,this.lifetime=u,this.lives=u}}},94376:(K,L,l)=>{l.d(L,{p:()=>F});var M=l(8189),O=l(85211),C=(l(3248),l(35150),l(40707),l(76576));const F=E=>{let i=class extends E{get apiKey(){return this._isOverridden("apiKey")?this._get("apiKey"):function D(E){return"portalItem"in E}(this)?this.portalItem?.apiKey:null}set apiKey(r){null!=r?this._override("apiKey",r):(this._clearOverride("apiKey"),this.clear("apiKey","user"))}};return(0,M._)([(0,O.MZ)({type:String})],i.prototype,"apiKey",null),i=(0,M._)([(0,C.$)("esri.layers.mixins.APIKeyMixin")],i),i}},73258:(K,L,l)=>{l.d(L,{A:()=>d});var M=l(5922),O=l(71065),T=l(35150),s=l(60797),v=l(24098),C=l(86300),D=l(20543),F=l(22639),E=l(44549);const n=new Map;class d{static fromJSON(h){return new d(h.fields,h.timeZoneByFieldName)}static fromLayer(h){return new d(h.fields??[],w(h))}static fromLayerJSON(h){return new d(h.fields??[],w(h))}constructor(h=[],I){this._fieldsMap=new Map,this._normalizedFieldsMap=new Map,this._dateFieldsSet=new Set,this._numericFieldsSet=new Set,this._requiredFields=null,this.dateFields=[],this.numericFields=[],this.fields=h||[],this._timeZoneByFieldName=I?new Map(I):null;const b=[];for(const f of this.fields){const t=f?.name,p=S(t);if(t&&p){const o=c(t);this._fieldsMap.set(t,f),this._fieldsMap.set(o,f),this._normalizedFieldsMap.set(p,f),b.push(`${o}:${f.type}:${this._timeZoneByFieldName?.get(t)}`),(0,C.vE)(f)?(this.dateFields.push(f),this._dateFieldsSet.add(f)):(0,C.WA)(f)&&(this._numericFieldsSet.add(f),this.numericFields.push(f)),(0,C.te)(f)||(0,C.Xz)(f)||(f.editable=null==f.editable||!!f.editable,f.nullable=null==f.nullable||!!f.nullable)}}b.sort(),this.uid=b.join()}get requiredFields(){if(!this._requiredFields){this._requiredFields=[];for(const h of this.fields)(0,C.te)(h)||(0,C.Xz)(h)||h.nullable||void 0!==(0,C.lD)(h)||this._requiredFields.push(h)}return this._requiredFields}equals(h){return this.uid===h?.uid}has(h){return null!=this.get(h)}get(h){if(!h)return;let I=this._fieldsMap.get(h);return I||(I=this._fieldsMap.get(c(h))??this._normalizedFieldsMap.get(S(h)),I&&this._fieldsMap.set(h,I),I)}getTimeZone(h){const I=this.get(h&&"string"!=typeof h?h.name:h);return I?this._timeZoneByFieldName?this._timeZoneByFieldName.get(I.name):"date"===I.type||"esriFieldTypeDate"===I.type?(T.A.getLogger("esri.layers.support.FieldsIndex").errorOnce(new M.A("getTimeZone:no-timezone-information",`no time zone information for field '${I.name}'`)),D.n$):z.has(I.type)?D.L5:null:null}getLuxonTimeZone(h){const I=this.getTimeZone(h);return I?I===D.L5?v.GB.instance:I===D.n$?E.mQ.utcInstance:(0,s.tE)(n,I,()=>E.oh.create(I)):null}isDateField(h){return this._dateFieldsSet.has(this.get(h))}isTimeOnlyField(h){return(0,C.OH)(this.get(h))}isNumericField(h){return this._numericFieldsSet.has(this.get(h))}normalizeFieldName(h){return this.get(h)?.name??void 0}toJSON(){return{fields:this.fields.map(h=>O.A.isSerializable(h)?h.toJSON():h),timeZoneByFieldName:this._timeZoneByFieldName?Array.from(this._timeZoneByFieldName.entries()):null}}}function c(P){return P.trim().toLowerCase()}function S(P){return(0,C.rS)(P)?.toLowerCase()??""}const z=new Set(["time-only","date-only","timestamp-offset","esriFieldTypeDateOnly","esriFieldTypeTimeOnly","esriFieldTypeTimestampOffset"]);function w(P){const h=new Map;if(!P.fields)return h;const I=!0===P.datesInUnknownTimezone,{timeInfo:b,editFieldsInfo:f}=P,t=(b?"startField"in b?b.startField:b.startTimeField:"")??"",p=(b?"endField"in b?b.endField:b.endTimeField:"")??"",o=function u(P){return"dateFieldsTimeZone"in P}(P)?P.dateFieldsTimeZone??null:P.dateFieldsTimeReference?(0,F.ZS)(P.dateFieldsTimeReference):null,g=f?function i(P){return"timeZone"in P}(f)?f.timeZone??o:f.dateFieldsTimeReference?(0,F.ZS)(f.dateFieldsTimeReference):o??D.n$:null,R=b?function r(P){return"timeZone"in P}(b)?b.timeZone??o:b.timeReference?(0,F.ZS)(b.timeReference):o:null,B=new Map([[c(f?.creationDateField??""),g],[c(f?.editDateField??""),g],[c(t),R],[c(p),R]]);for(const{name:x,type:W}of P.fields)if(z.has(W))h.set(x,D.L5);else if("date"!==W&&"esriFieldTypeDate"!==W)h.set(x,null);else if(I)h.set(x,D.L5);else{const Q=B.get(c(x??""))??o;h.set(x,Q)}return h}},64584:(K,L,l)=>{l.d(L,{A:()=>r});var E,M=l(8189),O=l(31178),T=l(71065),s=l(85211),F=(l(3248),l(35150),l(40707),l(76576));let i=E=class extends T.A{constructor(u){super(u),this.floorField=null,this.viewAllMode=!1,this.viewAllLevelIds=new O.A}clone(){return new E({floorField:this.floorField,viewAllMode:this.viewAllMode,viewAllLevelIds:this.viewAllLevelIds})}};(0,M._)([(0,s.MZ)({type:String,json:{write:{isRequired:!0}}})],i.prototype,"floorField",void 0),(0,M._)([(0,s.MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllMode",void 0),(0,M._)([(0,s.MZ)({json:{read:!1,write:!1}})],i.prototype,"viewAllLevelIds",void 0),i=E=(0,M._)([(0,F.$)("esri.layers.support.LayerFloorInfo")],i);const r=i},36267:(K,L,l)=>{l.d(L,{A:()=>n});var M=l(8189),O=l(90660),T=l(49976),s=l(71065),v=l(85211),E=(l(3248),l(35150),l(40707),l(76576));const i=new T.J({esriRelCardinalityOneToOne:"one-to-one",esriRelCardinalityOneToMany:"one-to-many",esriRelCardinalityManyToMany:"many-to-many"}),r=new T.J({esriRelRoleOrigin:"origin",esriRelRoleDestination:"destination"});let u=class extends(O.A.ClonableMixin(s.A)){constructor(d){super(d),this.cardinality=null,this.catalogId=null,this.composite=null,this.id=null,this.keyField=null,this.keyFieldInRelationshipTable=null,this.name=null,this.relatedTableId=null,this.relationshipTableId=null,this.role=null}};(0,M._)([(0,v.MZ)({json:{read:i.read,write:i.write}})],u.prototype,"cardinality",void 0),(0,M._)([(0,v.MZ)({json:{name:"catalogID"}})],u.prototype,"catalogId",void 0),(0,M._)([(0,v.MZ)({json:{read:!0,write:!0}})],u.prototype,"composite",void 0),(0,M._)([(0,v.MZ)({json:{read:!0,write:!0}})],u.prototype,"id",void 0),(0,M._)([(0,v.MZ)({json:{read:!0,write:!0}})],u.prototype,"keyField",void 0),(0,M._)([(0,v.MZ)({json:{read:!0,write:!0}})],u.prototype,"keyFieldInRelationshipTable",void 0),(0,M._)([(0,v.MZ)({json:{read:!0,write:!0}})],u.prototype,"name",void 0),(0,M._)([(0,v.MZ)({json:{read:!0,write:!0}})],u.prototype,"relatedTableId",void 0),(0,M._)([(0,v.MZ)({json:{read:!0,write:!0}})],u.prototype,"relationshipTableId",void 0),(0,M._)([(0,v.MZ)({json:{read:r.read,write:r.write}})],u.prototype,"role",void 0),u=(0,M._)([(0,E.$)("esri.layers.support.Relationship")],u);const n=u},27960:(K,L,l)=>{l.d(L,{Ch:()=>v,mW:()=>T,u2:()=>s});var M=l(69287),O=l(63484);function T(n,d){return{...d,filterMode:n.mode}}function s(n,d){return D(n,d).next().value??null}function v(n,d,c){const S=function C(n){if("manual"===i(n))return null;const d=[Number.NEGATIVE_INFINITY,Number.POSITIVE_INFINITY];for(const{minScale:c,maxScale:S}of n.filters)d[0]=Math.max(d[0],r(c)),d[1]=Math.min(d[1],u(S));return d}(n);if(S&&((0,M.gg)(d,S[0])||(0,M.ZH)(c,S[1])))return"";const z=Array.from(D(n,d,c)),w=function F(n,d,c){if(0===n.length)return!0;const S=r(n.at(0)?.minScale),z=u(n.at(-1)?.maxScale);if((0,M.ZH)(S,d)||(0,M.gg)(z,c))return!0;for(let w=0;w<n.length-1;w++){const P=n[w];if((0,M.ZH)(r(n[w+1].minScale),u(P.maxScale)))return!0}return!1}(z,d,c)?"1=1":z.map(P=>P.where||"1=1").reduce((P,h)=>(0,O.IW)(P,h),"");return w&&"1=1"!==w?w:""}function*D(n,d,c){if("manual"===i(n)){const S=n.filters.find(z=>z.id===n.activeFilterId);S&&(yield S)}else{"object"==typeof d&&(d=d.scale);for(const S of n.filters)E(S.minScale,S.maxScale,d,c)&&(yield S)}}function E(n,d,c,S){return n=r(n),c=r(c),d=u(d),!(!(0,M.Sp)(c,n)&&(S??c)>n||(0,M.Hx)(d,c)||void 0!==S&&(0,M.Sp)(S,n))}function i(n){return"mode"in n?n.mode:n.filterMode}function r(n){return n||Number.POSITIVE_INFINITY}function u(n){return n||0}},6829:(K,L,l)=>{l.d(L,{CW:()=>n,Fm:()=>F,Hz:()=>d,JQ:()=>u,JZ:()=>p,ND:()=>S,R_:()=>C,U9:()=>r,fu:()=>O,nr:()=>c,oF:()=>T,rq:()=>E,z$:()=>i});const M=[["binary","application/octet-stream","bin",""]];function O(o,g){return null!=h(g.name,o?.supportedFormats??[])}function T(o,g){if(!o)return!1;const R=E(g,o.supportedFormats??[]);return null!=R&&o.editFormats.includes(R)}function C(o,g){return I(function P(o,g){const R=o.toLowerCase();return z(g).find(B=>b(B)===R)}(o,g))}function D(o,g){return I(h(o,g))}function F(o,g){return b(function w(o,g){return z(g).find(R=>I(R)===o)}(o,g))}function E(o,g){return D(o.name,g)??C(o.type,g)}function i(o,g,R){return C(o,R)??D(g,R)}function r({supportedFormats:o}){return i("model/gltf-binary","glb",o)}function u(o){const g=r(o);return null!=g&&o.editFormats.includes(g)}function n({supportedFormats:o}){return i("model/gltf+json","gltf",o)}function d(o){if(!o)return null;const g=r(o),R=n(o);let B=null;for(const x of o.queryFormats){if(x===g)return x;x===R&&(B=x)}return B}function c({supportedFormats:o}){return i("application/esri3do-SR_world","wld",o)}function S({supportedFormats:o}){return i("application/esri3do-SR_prj","prj",o)}function z(o){return[...M,...o]}function h(o,g){const R=o.toLowerCase();return z(g).find(B=>function f(o){return o?.[2].split(",").map(g=>g.toLowerCase())??[]}(B).some(x=>R.endsWith(x)))}function I(o){return o?.[0]}function b(o){return o?.[1].toLowerCase()}function p(o){return o.tables?.find(g=>"assetMaps"===g.role)}},4858:(K,L,l)=>{l.d(L,{BI:()=>d,D3:()=>u,XJ:()=>n,lc:()=>r,mX:()=>S,rU:()=>c,tH:()=>b});var M=l(1119);const O="__begin__",T="__end__",s=new RegExp(O,"ig"),v=new RegExp(T,"ig"),C=new RegExp("^"+O,"i"),D=new RegExp(T+"$","i"),F='"',E=F+" + ",i=" + "+F;function r(f){return f.replaceAll(new RegExp("\\[","g"),"{").replaceAll(new RegExp("\\]","g"),"}")}function u(f){return f.replaceAll(new RegExp("\\{","g"),"[").replaceAll(new RegExp("\\}","g"),"]")}function n(f){const t={expression:"",type:"none"};return f.labelExpressionInfo?f.labelExpressionInfo.value?(t.expression=f.labelExpressionInfo.value,t.type="conventional"):f.labelExpressionInfo.expression&&(t.expression=f.labelExpressionInfo.expression,t.type="arcade"):null!=f.labelExpression&&(t.expression=r(f.labelExpression),t.type="conventional"),t}function d(f){const t=n(f);switch(t.type){case"conventional":return S(t.expression);case"arcade":return t.expression}return null}function c(f){const t=n(f);switch(t.type){case"conventional":return function w(f){return f?.match(z)?.[1].trim()||null}(t.expression);case"arcade":return b(t.expression)}return null}function S(f){let t;return f?(t=(0,M.HC)(f,p=>O+'$feature["'+p+'"]'+T),t=C.test(t)?t.replace(C,""):F+t,t=D.test(t)?t.replace(D,""):t+F,t=t.replaceAll(s,E).replaceAll(v,i)):t='""',t}const z=/^\s*\{([^}]+)\}\s*$/i,P=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*$/i,h=/^\s*(?:(?:\$feature\.(\w+))|(?:\$feature\[(["'])(.+)(\2)\]));?\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(\1|\3)(\5)\s*\));?\s*$/i,I=/^\s*(?:DomainName\(\s*\$feature\s*,\s*(["'])(.+)(\1)\s*\));?\s*$/i;function b(f){if(!f)return null;let t=P.exec(f)||h.exec(f);return t?t[1]||t[3]:(t=I.exec(f),t?t[2]:null)}},90543:(K,L,l)=>{l.d(L,{S:()=>u,d:()=>f});var M=l(3248),O=l(68438),T=l(6829);function s(t,p,o){return!!C(t,p,o)}function v(t,p,o){return C(t,p,o)}function C(t,p,o){return t&&t.hasOwnProperty(p)?t[p]:o}const D={name:"supportsName",size:"supportsSize",contentType:"supportsContentType",keywords:"supportsKeywords",exifInfo:"supportsExifInfo"};function F(t){const p=t?.supportedSpatialAggregationStatistics?.map(o=>o.toLowerCase());return{envelope:!!p?.includes("envelopeaggregate"),centroid:!!p?.includes("centroidaggregate"),convexHull:!!p?.includes("convexhullaggregate")}}function E(t,p){return!!t?.supportedOperationsWithCacheHint?.map(g=>g.toLowerCase())?.includes(p.toLowerCase())}function i(t){const p=t?.supportedStatisticTypes?.map(o=>o.toLowerCase());return{count:!!p?.includes("count"),sum:!!p?.includes("sum"),min:!!p?.includes("min"),max:!!p?.includes("max"),avg:!!p?.includes("avg"),var:!!p?.includes("var"),stddev:!!p?.includes("stddev"),percentileContinuous:!!p?.includes("percentile_continuous"),percentileDiscrete:!!p?.includes("percentile_discrete"),envelope:!!p?.includes("envelopeaggregate"),centroid:!!p?.includes("centroidaggregate"),convexHull:!!p?.includes("convexhullaggregate")}}function r(t){const p=t?.supportedNormalizationTypes?.map(o=>o.toLowerCase());return{field:!!p?.includes("field"),log:!!p?.includes("log"),naturalLog:!!p?.includes("naturallog"),percentOfTotal:!!p?.includes("percentoftotal"),squareRoot:!!p?.includes("squareroot")}}function u(t,p){return{analytics:n(t),attachment:d(t),data:c(t),metadata:S(t),operations:z(t.capabilities,t,p),query:w(t,p),queryAttributeBins:I(t),queryRelated:P(t),queryTopFeatures:h(t),editing:b(t)}}function n(t){return{supportsCacheHint:E(t.advancedQueryCapabilities,"queryAnalytics")}}function d(t){const p=t.attachmentProperties,o={supportsName:!1,supportsSize:!1,supportsContentType:!1,supportsKeywords:!1,supportsExifInfo:!1,supportsCacheHint:E(t.advancedQueryCapabilities,"queryAttachments"),supportsOrderByFields:s(t.advancedQueryCapabilities,"supportsQueryAttachmentOrderByFields",!1),supportsResize:s(t,"supportsAttachmentsResizing",!1)};return p&&Array.isArray(p)&&p.forEach(g=>{const R=D[g.name];R&&(o[R]=!!g.isEnabled)}),o}function c(t){return{isVersioned:s(t,"isDataVersioned",!1),isBranchVersioned:s(t,"isDataBranchVersioned",!1),supportsAttachment:s(t,"hasAttachments",!1),supportsM:s(t,"hasM",!1),supportsZ:s(t,"hasZ",!1)}}function S(t){return{supportsAdvancedFieldProperties:s(t,"supportsFieldDescriptionProperty",!1)}}function z(t,p,o){const g=t?t.toLowerCase().split(",").map(ue=>ue.trim()):[],R=o?(0,O.qg)(o):null,B=g.includes(null!=R&&"MapServer"===R.serverType?"data":"query"),x=g.includes("editing")&&!p.datesInUnknownTimezone;let W=x&&g.includes("create"),Q=x&&g.includes("delete"),G=x&&g.includes("update");const se=g.includes("changetracking"),V=p.advancedQueryCapabilities;return x&&!(W||Q||G)&&(W=Q=G=!0),{supportsCalculate:s(p,"supportsCalculate",!1),supportsTruncate:s(p,"supportsTruncate",!1),supportsValidateSql:s(p,"supportsValidateSql",!1),supportsAdd:W,supportsDelete:Q,supportsEditing:x,supportsChangeTracking:se,supportsQuery:B,supportsQueryAnalytics:s(V,"supportsQueryAnalytic",!1),supportsQueryAttachments:s(V,"supportsQueryAttachments",!1),supportsQueryBins:s(V,"supportsQueryBins",!1),supportsQueryTopFeatures:s(V,"supportsTopFeaturesQuery",!1),supportsResizeAttachments:s(p,"supportsAttachmentsResizing",!1),supportsSync:g.includes("sync"),supportsUpdate:G,supportsExceedsLimitStatistics:s(p,"supportsExceedsLimitStatistics",!1),supportsAsyncConvert3D:s(p,"supportsAsyncConvert3D",!1)}}function w(t,p){const o=t.advancedQueryCapabilities,g=t.ownershipBasedAccessControlForFeatures,R=t.archivingInfo,B=t.currentVersion,x=p?.includes("MapServer"),W=!x||B>=(0,M.A)("mapserver-pbf-version-support"),Q=(0,O.Wo)(p),G=new Set((t.supportedQueryFormats??"").split(",").map(se=>se.toLowerCase().trim()));return{maxRecordCount:v(t,"maxRecordCount",void 0),maxRecordCountFactor:v(t,"maxRecordCountFactor",void 0),standardMaxRecordCount:v(t,"standardMaxRecordCount",void 0),supportedSpatialAggregationStatistics:F(o),supportsCacheHint:s(o,"supportsQueryWithCacheHint",!1)||E(o,"query"),supportsCentroid:s(o,"supportsReturningGeometryCentroid",!1),supportsCompactGeometry:Q,supportsCurrentUser:s(o,"supportsCurrentUserQueries",!1),supportsDefaultSpatialReference:s(o,"supportsDefaultSR",!1),supportsDisjointSpatialRelationship:s(o,"supportsDisjointSpatialRel",!1),supportsDistance:s(o,"supportsQueryWithDistance",!1),supportsDistinct:s(o,"supportsDistinct",t.supportsAdvancedQueries),supportsExtent:s(o,"supportsReturningQueryExtent",!1),supportsFormatPBF:W&&G.has("pbf"),supportsFullTextSearch:s(o,"supportsFullTextSearch",!1),supportsGeometryProperties:s(o,"supportsReturningGeometryProperties",!1),supportsHavingClause:s(o,"supportsHavingClause",!1),supportsHistoricMoment:s(R,"supportsQueryWithHistoricMoment",!1),supportsMaxRecordCountFactor:s(o,"supportsMaxRecordCountFactor",!1),supportsOrderBy:s(o,"supportsOrderBy",t.supportsAdvancedQueries),supportsPagination:s(o,"supportsPagination",!1),supportsPercentileStatistics:s(o,"supportsPercentileStatistics",!1),supportsQuantization:s(t,"supportsCoordinatesQuantization",!1),supportsQuantizationEditMode:s(t,"supportsQuantizationEditMode",!1),supportsQueryByAnonymous:s(g,"allowAnonymousToQuery",!0),supportsQueryByOthers:s(g,"allowOthersToQuery",!0),supportsQueryGeometry:s(t,"supportsReturningQueryGeometry",!1),supportsResultType:s(o,"supportsQueryWithResultType",!1),supportsReturnMesh:!!(0,T.Hz)(t.infoFor3D),supportsSpatialAggregationStatistics:s(o,"supportsSpatialAggregationStatistics",!1),supportsSqlExpression:s(o,"supportsSqlExpression",!1),supportsStandardizedQueriesOnly:s(t,"useStandardizedQueries",!1),supportsStatistics:s(o,"supportsStatistics",t.supportsStatistics),supportsTopFeaturesQuery:s(o,"supportsTopFeaturesQuery",!1),supportsTrueCurve:s(o,"supportsTrueCurve",!1),tileMaxRecordCount:v(t,"tileMaxRecordCount",void 0)}}function P(t){const p=t.advancedQueryCapabilities,o=s(p,"supportsAdvancedQueryRelated",!1);return{supportsPagination:s(p,"supportsQueryRelatedPagination",!1),supportsCount:o,supportsOrderBy:o,supportsCacheHint:E(p,"queryRelated")}}function h(t){return{supportsCacheHint:E(t.advancedQueryCapabilities,"queryTopFilter")}}function I(t){const p=t?t.queryBinsCapabilities:void 0;return{supportsDate:s(p,"supportsDateBin",!1),supportsFixedInterval:s(p,"supportsFixedIntervalBin",!1),supportsAutoInterval:s(p,"supportsAutoIntervalBin",!1),supportsFixedBoundaries:s(p,"supportsFixedBoundariesBin",!1),supportsStackBy:s(p,"supportsStackBy",!1),supportsSplitBy:s(p,"supportsSplitBy",!1),supportsSnapToData:s(p,"supportsSnapToData",!1),supportsReturnFullIntervalBin:s(p,"supportsReturnFullIntervalBin",!1),supportsFirstDayOfWeek:s(p,"supportsFirstDayOfWeek",!1),supportsNormalization:s(p,"supportsNormalization",!1),supportedStatistics:i(p),supportedNormalizationTypes:r(p)}}function b(t){const p=t.ownershipBasedAccessControlForFeatures,o=t?t.advancedEditingCapabilities:void 0;return{supportsGeometryUpdate:s(t,"allowGeometryUpdates",!0),supportsGlobalId:s(t,"supportsApplyEditsWithGlobalIds",!1),supportsReturnServiceEditsInSourceSpatialReference:s(t,"supportsReturnServiceEditsInSourceSR",!1),supportsRollbackOnFailure:s(t,"supportsRollbackOnFailureParameter",!1),supportsUpdateWithoutM:s(t,"allowUpdateWithoutMValues",!1),supportsUploadWithItemId:s(t,"supportsAttachmentsByUploadId",!1),supportsDeleteByAnonymous:s(p,"allowAnonymousToDelete",!0),supportsDeleteByOthers:s(p,"allowOthersToDelete",!0),supportsUpdateByAnonymous:s(p,"allowAnonymousToUpdate",!0),supportsUpdateByOthers:s(p,"allowOthersToUpdate",!0),supportsAsyncApplyEdits:s(o,"supportsAsyncApplyEdits",!1),zDefault:v(t,"zDefault",void 0)}}function f(t){return{operations:{supportsAppend:s(t,"supportsAppend",!1),supportsCoverageQuery:t?.playbackInfo?.klv["0601"]??!1,supportsExportClip:s(t,"supportsExportClip",!1),supportsExportFrameset:s(t,"supportsExportFrameset",!1),supportsMensuration:s(t,"supportsMensuration",!1),supportsUpdate:s(t,"supportsUpdate",!1)}}}},68470:(K,L,l)=>{l.d(L,{K:()=>u,Q:()=>E});var M=l(8189),O=l(49976),T=l(35150),s=l(85211),D=(l(3248),l(40707),l(15463)),F=l(76576);const E=(0,O.O)()({naturalLog:"natural-log",squareRoot:"square-root",percentOfTotal:"percent-of-total",log:"log",field:"field"}),i="percent-of-total",r="field",u=n=>{let d=class extends n{constructor(){super(...arguments),this.normalizationField=null,this.normalizationMaxValue=null,this.normalizationMinValue=null,this.normalizationTotal=null}get normalizationType(){let c=this._get("normalizationType");const S=!!this.normalizationField,z=null!=this.normalizationTotal;return S||z?(c=S&&r||z&&i||null,S&&z&&T.A.getLogger(this).warn("warning: both normalizationField and normalizationTotal are set!")):c!==r&&c!==i||(c=null),c}set normalizationType(c){this._set("normalizationType",c)}};return(0,M._)([(0,s.MZ)({type:String,json:{name:"parameters.normalizationField",write:!0}})],d.prototype,"normalizationField",void 0),(0,M._)([(0,s.MZ)({type:Number,json:{name:"parameters.normalizationMaxValue",write:!0}})],d.prototype,"normalizationMaxValue",void 0),(0,M._)([(0,s.MZ)({type:Number,json:{name:"parameters.normalizationMinValue",write:!0}})],d.prototype,"normalizationMinValue",void 0),(0,M._)([(0,s.MZ)({type:Number,json:{name:"parameters.normalizationTotal",write:!0}})],d.prototype,"normalizationTotal",void 0),(0,M._)([(0,D.e)(E,{name:"parameters.normalizationType"})],d.prototype,"normalizationType",null),d=(0,M._)([(0,F.$)("esri.rest.support.NormalizationBinParametersMixin")],d),d}},32117:(K,L,l)=>{l.d(L,{$w:()=>z,Bu:()=>x,DW:()=>o,FH:()=>Ce,FM:()=>F,G9:()=>s,GV:()=>P,Go:()=>i,K3:()=>he,Kn:()=>t,MM:()=>n,MO:()=>me,Nl:()=>W,Ny:()=>h,O2:()=>Q,UE:()=>G,YC:()=>Ee,YF:()=>V,ZO:()=>de,_1:()=>R,_H:()=>b,_W:()=>w,_d:()=>p,bs:()=>ce,dI:()=>Ae,e6:()=>r,gQ:()=>D,iA:()=>_e,jn:()=>c,lW:()=>u,mA:()=>d,n5:()=>se,pM:()=>g,pV:()=>f,pk:()=>ve,rB:()=>Ie,s4:()=>T,xo:()=>B,yH:()=>I,yX:()=>Oe,zb:()=>ue,zr:()=>S});var M=l(46988);function T(e,a,_,y){return function O(e){return"function"==typeof e}(e)?e(a,_,y):e}function s(e){return[e.r,e.g,e.b,e.a]}const v=" /-,\n";function C(e){let a=e.length;for(;a--;)if(!v.includes(e.charAt(a)))return!1;return!0}function D(e,a){const _=[];let y=0,A=-1;do{if(A=e.indexOf("[",y),A>=y){if(A>y){const m=e.slice(y,A);_.push([m,null,C(m)])}if(y=A+1,A=e.indexOf("]",y),A>=y){if(A>y){const m=a[e.slice(y,A)];m&&_.push([null,m,!1])}y=A+1}}}while(-1!==A);if(y<e.length){const m=e.slice(y);_.push([m,null,C(m)])}return _}function F(e,a,_,y){let A="",m=null;for(const $ of a){const[j,Z,H]=$;if(j)H?m=j:(m&&(A+=m,m=null),A+=j);else{let X=Z;null!=_&&(X=me(Z,_));const U=e.attributes[X];U&&(m&&(A+=m,m=null),A+=U)}}return function E(e,a){switch("string"!=typeof e&&(e=String(e)),a){case"LowerCase":return e.toLowerCase();case"Allcaps":return e.toUpperCase();default:return e}}(A,y)}function i(e,a,_,y,A,m,$=!0){const j=a/A,Z=_/m,H=Math.ceil(j/2),X=Math.ceil(Z/2);for(let U=0;U<m;U++)for(let N=0;N<A;N++){const q=4*(N+($?m-U-1:U)*A);let k=0,ee=0,re=0,oe=0,ne=0,ae=0,ie=0;const pe=(U+.5)*Z;for(let te=Math.floor(U*Z);te<(U+1)*Z;te++){const ge=Math.abs(pe-(te+.5))/X,Pe=(N+.5)*j,De=ge*ge;for(let le=Math.floor(N*j);le<(N+1)*j;le++){let J=Math.abs(Pe-(le+.5))/H;const Y=Math.sqrt(De+J*J);Y>=-1&&Y<=1&&(k=2*Y*Y*Y-3*Y*Y+1,k>0&&(J=4*(le+te*a),ie+=k*e[J+3],re+=k,e[J+3]<255&&(k=k*e[J+3]/250),oe+=k*e[J],ne+=k*e[J+1],ae+=k*e[J+2],ee+=k))}}y[q]=oe/ee,y[q+1]=ne/ee,y[q+2]=ae/ee,y[q+3]=ie/re}}function r(e){return e?[e[0],e[1],e[2],e[3]/255]:[0,0,0,0]}function u(e){return e.data?.symbol??null}function n(e){return"CIMVectorMarker"===e.type||"CIMPictureMarker"===e.type||"CIMBarChartMarker"===e.type||"CIMCharacterMarker"===e.type||"CIMPieChartMarker"===e.type||"CIMStackedBarChartMarker"===e.type}function d(e){return"CIMGradientStroke"===e.type||"CIMPictureStroke"===e.type||"CIMSolidStroke"===e.type}function c(e){return null!=e&&("CIMGradientFill"===e.type||"CIMHatchFill"===e.type||"CIMPictureFill"===e.type||"CIMSolidFill"===e.type||"CIMWaterFill"===e.type)}function S(e){return null!=e&&("CIMMarkerPlacementAlongLineRandomSize"===e.type||"CIMMarkerPlacementAlongLineSameSize"===e.type||"CIMMarkerPlacementAlongLineVariableSize"===e.type||"CIMMarkerPlacementAtExtremities"===e.type||"CIMMarkerPlacementAtMeasuredUnits"===e.type||"CIMMarkerPlacementAtRatioPositions"===e.type||"CIMMarkerPlacementOnLine"===e.type||"CIMMarkerPlacementOnVertices"===e.type)}const z=(e,a=0)=>null==e||isNaN(e)?a:e,w=(e,a)=>e??a,P=(e,a)=>e??a,h=e=>e.tintColor?r(e.tintColor):[255,255,255,1],I=e=>{if(!e)return!1;for(const a of e)switch(a.type){case"CIMGeometricEffectBuffer":case"CIMGeometricEffectOffset":case"CIMGeometricEffectDonut":return!0}return!1};function b(){return Promise.all([l.e(3930),l.e(2076),l.e(4108)]).then(l.bind(l,27815))}function f(e){if(!e)return"normal";switch(e.toLowerCase()){case"italic":return"italic";case"oblique":return"oblique";default:return"normal"}}function t(e){if(!e)return"normal";switch(e.toLowerCase()){case"bold":return"bold";case"bolder":return"bolder";case"lighter":return"lighter";default:return"normal"}}function p(e){let a="normal",_="normal";if(e){const y=e.toLowerCase();y.includes("italic")?a="italic":y.includes("oblique")&&(a="oblique"),y.includes("bold")?_="bold":y.includes("light")&&(_="lighter")}return{style:a,weight:_}}function o(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function g(e){if(!e)return null;switch(e.type){case"CIMPolygonSymbol":if(e.symbolLayers)for(const a of e.symbolLayers){const _=g(a);if(null!=_)return _}break;case"CIMTextSymbol":return g(e.symbol);case"CIMSolidFill":return e.color}return null}function R(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":{const a=e.symbolLayers;if(a)for(const _ of a){const y=R(_);if(null!=y)return y}break}case"CIMTextSymbol":return R(e.symbol);case"CIMSolidStroke":return e.color}}function B(e){if(e)switch(e.type){case"CIMPolygonSymbol":case"CIMLineSymbol":if(e.symbolLayers)for(const a of e.symbolLayers){const _=B(a);if(void 0!==_)return _}break;case"CIMTextSymbol":return B(e.symbol);case"CIMSolidStroke":case"CIMGradientStroke":case"CIMPictureStroke":return e.width}}function x(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":case"Justify":return"center"}}function W(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function Q(e){return(e?Object.keys(e):[]).map(a=>({name:a,alias:a,type:"string"==typeof e[a]?"esriFieldTypeString":"esriFieldTypeDouble"}))}const G=e=>e.includes("data:image/svg+xml");function se(e){if(!e)return null;switch(e.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function V(e){return e&&e.charAt(0).toLowerCase()+e.slice(1)}function ue(e,a,_,y,A,m,$=!0){const{infos:j}=m;let Z=1,H=0,X=0,U=0,N=1;for(const{absoluteAnchorPoint:ee,offsetX:re,offsetY:oe,rotation:ne,size:ae,frameHeight:ie,rotateClockWise:pe,scaleSymbolsProportionally:te}of j)N=ee?1:Z,X=ye(re,oe,H,N,X),U=fe(re,oe,H,N,U),ie&&(te||$)&&(Z*=ae/ie),H=Me(ne,pe,H);const q=ye(y,A,H,N,X),k=fe(y,A,H,N,U);return{size:e*Z,rotation:Me(a,_,H),offsetX:q,offsetY:k}}function de(e){if(null==e)return!1;if(Array.isArray(e))return e.every(a=>de(a));switch(typeof e){case"string":return!!e;case"number":return!isNaN(e)}}function _e(e,a){if("color"===a||"outlinecolor"===a||"backgroundcolor"===a||"borderlinecolor"===a||"tintcolor"===a)return[...M.K[a]];const _=M.D[e];if(!_)throw new Error(`InternalError: default value for type ${e}.`);return _[a]}function he(e){return"string"==typeof e?function Se(e){return e.split(" ").map(a=>Number(a))}(e):e}function Ce(e){return e?.dashTemplate&&(e.dashTemplate=he(e.dashTemplate)),e}function ce(e){if(null==e)return"Normal";switch(e.type){case"CIMTextSymbol":return e.textCase??"Normal";case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const a=e.symbolLayers;if(!a)return"Normal";for(const _ of a)if("CIMVectorMarker"===_.type)return ce(_)}break;case"CIMVectorMarker":{const a=e.markerGraphics;if(!a)return"Normal";for(const _ of a)if(_.symbol)return ce(_.symbol)}}return"Normal"}function Ee(e){if(e)switch(e.type){case"CIMTextSymbol":return e.height;case"CIMPointSymbol":{let a=0;if(e.symbolLayers)for(const _ of e.symbolLayers)if(_)switch(_.type){case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":{const y=_.size??M.D.CIMVectorMarker.size;y>a&&(a=y);break}}return a}case"CIMLineSymbol":case"CIMPolygonSymbol":{let a=0;if(e.symbolLayers)for(const _ of e.symbolLayers)if(_)switch(_.type){case"CIMSolidStroke":case"CIMPictureStroke":case"CIMGradientStroke":{const y=_.width;null!=y&&y>a&&(a=y);break}case"CIMCharacterMarker":case"CIMPictureMarker":case"CIMVectorMarker":case"CIMObjectMarker3D":case"CIMglTFMarker3D":if(_.markerPlacement&&S(_.markerPlacement)){const y=_.size??M.D.CIMVectorMarker.size;y>a&&(a=y)}break;case"CIMPictureFill":{const y=_.height;null!=y&&y>a&&(a=y)}}return a}}}function me(e,a){if(null!==a){const _=a.get(e);return _?_.name:e}return e}function ve(e){return e.map(a=>({...a,propertyName:V(a.propertyName)}))}function Ie(e){const a={};for(const _ in e){const y=e[_];a[V(_)]=y}return a}function fe(e,a,_,y,A){const m=_*Math.PI/180;if(m){const $=Math.cos(m);return(Math.sin(m)*e+$*a)*y+A}return a*y+A}function ye(e,a,_,y,A){const m=_*Math.PI/180;return m?(Math.cos(m)*e-Math.sin(m)*a)*y+A:e*y+A}function Me(e,a,_){return a?_-e:_+e}function Ae(e,a,_){const y="Color"===_||"TintColor"===_||"ToColor"===_,A="Rotation"===_||"Angle"===_||"ToRotation"===_;let m=a[V(_)];if(null!=m&&(y?m=[m[0]/255,m[1]/255,m[2]/255,m[3]/255]:A&&(m*=Math.PI/180)),null==m&&(m=_e(a.type,_.toLowerCase()),null!=m&&(y?m=[m[0]/255,m[1]/255,m[2]/255,m[3]]:A&&(m*=Math.PI/180))),null!=a.primitiveName){const $=e[a.primitiveName];if(null!=$){const j=$[_];null==j||("string"==typeof j||"number"==typeof j||Array.isArray(j)?(m=j,null!=m&&(y?m=[m[0]/255,m[1]/255,m[2]/255,m[3]/255]:A&&(m*=Math.PI/180))):(m={valueExpressionInfo:j,defaultValue:m},null!=m&&(y?m={type:"Process",op:"ArcadeColor",value:m}:A&&(m={type:"Process",op:"Divide",left:m,right:180/Math.PI}))))}}if(null==m)throw new Error(`Failed to derive a value or an expression for "${_}".`);return m}function Oe(e,a){return Math.max(Math.min((e??a)/100,1),0)}},91644:(K,L,l)=>{l.d(L,{A7:()=>F,Cx:()=>E,Hk:()=>i,JJ:()=>d,SF:()=>r,UK:()=>D,jM:()=>u,x3:()=>n}),l(3248);var O=l(88521),T=l(55417),s=l(46602),v=l(47705),C=l(48254);const D=s.A.fromJSON(C.Cb),F=T.A.fromJSON(C.yM),E=O.A.fromJSON(C.WR),i=v.A.fromJSON(C.JZ);function r(c){if(null==c)return null;switch(c.type){case"mesh":return null;case"point":case"multipoint":return D;case"polyline":return F;case"polygon":case"extent":return E}return null}const u=s.A.fromJSON(C.nC),n=T.A.fromJSON(C.HW),d=O.A.fromJSON(C.b6)},48254:(K,L,l)=>{l.d(L,{Cb:()=>T,HW:()=>F,JR:()=>O,JZ:()=>C,WR:()=>v,b6:()=>E,fT:()=>M,nC:()=>D,yM:()=>s});const M=[252,146,31,255],O=[153,153,153,255],T={type:"esriSMS",style:"esriSMSCircle",size:6,color:M,outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[153,153,153,255]}},s={type:"esriSLS",style:"esriSLSSolid",width:.75,color:M},v={type:"esriSFS",style:"esriSFSSolid",color:[252,146,31,196],outline:{type:"esriSLS",style:"esriSLSSolid",width:.75,color:[255,255,255,191]}},C={type:"esriTS",color:[255,255,255,255],font:{family:"arial-unicode-ms",size:10,weight:"bold"},horizontalAlignment:"center",kerning:!0,haloColor:[0,0,0,255],haloSize:1,rotated:!1,text:"",xoffset:0,yoffset:0,angle:0},D={type:"esriSMS",style:"esriSMSCircle",color:[0,0,0,255],outline:null,size:10.5},F={type:"esriSLS",style:"esriSLSSolid",color:[0,0,0,255],width:1.5},E={type:"esriSFS",style:"esriSFSSolid",color:[0,0,0,255],outline:null}}}]);