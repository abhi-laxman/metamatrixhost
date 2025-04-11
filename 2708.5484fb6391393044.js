"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[2708],{52708:(xe,B,g)=>{g.r(B),g.d(B,{registerFunctions:()=>Be});var pe,n,S=g(10467),q=g(81098),Q=g(61299),_=g(45369),P=g(53787),l=g(55279),be=g(63145),M=g(99893),Ne=g(42970),a=g(42686),Ee=g(32832),D=g(36455),ee=g(888),Se=g(93571),$e=g(53437),Ce=g(62138),je=g(6491),Ze=g(58314),K=g(7981),fe=g(97089),te=g(59118),Le=g(56492),E=g(1329),me=g(35940),L=g(29141),ye=g(73874),Pe=g(89563),Me=g(23159),ke=g(35150),ne=g(49976);(n=pe||(pe={}))[n.RTJunctionJunctionConnectivity=1]="RTJunctionJunctionConnectivity",n[n.RTContainment=2]="RTContainment",n[n.RTAttachment=3]="RTAttachment",n[n.RTJunctionEdgeConnectivity=4]="RTJunctionEdgeConnectivity",n[n.RTEdgeJunctionEdgeConnectivity=5]="RTEdgeJunctionEdgeConnectivity",new ne.J({connected:"connected",upstream:"upstream",downstream:"downstream",shortestPath:"shortest-path",subnetwork:"subnetwork",subnetworkController:"subnetwork-controller",loops:"loops",isolation:"isolation"});const R=new ne.J({junctionJunctionConnectivity:"junction-junction-connectivity",connectivity:"connectivity",attachment:"attachment",containment:"containment",junctionEdgeFromConnectivity:"junction-edge-from-connectivity",junctionEdgeMidspanConnectivity:"junction-edge-midspan-connectivity",junctionEdgeToConnectivity:"junction-edge-to-connectivity"});new ne.J({normal:"normal",rebuild:"rebuild",forceRebuild:"force-rebuild"});var ie=g(68800),b=g(8189),re=g(71065),C=g(85211),ae=(g(3248),g(40707),g(76576)),ge=g(17221),he=g(50305),Re=g(93615),G=g(92323);let $=class extends re.A{constructor(n){super(n),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(n,t){return new G.A({globalId:t.fromGlobalId,networkSourceId:t.fromNetworkSourceId,terminalId:t.fromTerminalId})}writeFromNetworkElement(n,t){n&&(t.fromGlobalId=n.globalId,t.fromNetworkSourceId=n.networkSourceId,t.fromTerminalId=n.terminalId)}readToNetworkElement(n,t){return new G.A({globalId:t.toGlobalId,networkSourceId:t.toNetworkSourceId,terminalId:t.toTerminalId})}writeToNetworkElement(n,t){n&&(t.toGlobalId=n.globalId,t.toNetworkSourceId=n.networkSourceId,t.toTerminalId=n.terminalId)}};(0,b._)([(0,C.MZ)({type:String,json:{write:!0}})],$.prototype,"globalId",void 0),(0,b._)([(0,C.MZ)({type:R.apiValues,json:{type:R.jsonValues,read:R.read,write:R.write}})],$.prototype,"associationType",void 0),(0,b._)([(0,C.MZ)({type:G.A,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],$.prototype,"fromNetworkElement",void 0),(0,b._)([(0,ge.w)("fromNetworkElement")],$.prototype,"readFromNetworkElement",null),(0,b._)([(0,he.K)("fromNetworkElement")],$.prototype,"writeFromNetworkElement",null),(0,b._)([(0,C.MZ)({type:G.A,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],$.prototype,"toNetworkElement",void 0),(0,b._)([(0,ge.w)("toNetworkElement")],$.prototype,"readToNetworkElement",null),(0,b._)([(0,he.K)("toNetworkElement")],$.prototype,"writeToNetworkElement",null),(0,b._)([(0,C.MZ)({type:Re.A,json:{write:!0}})],$.prototype,"geometry",void 0),(0,b._)([(0,C.MZ)({type:String,json:{write:!0}})],$.prototype,"errorMessage",void 0),(0,b._)([(0,C.MZ)({type:Number,json:{write:!0}})],$.prototype,"percentAlong",void 0),(0,b._)([(0,C.MZ)({type:Number,json:{write:!0}})],$.prototype,"errorCode",void 0),(0,b._)([(0,C.MZ)({type:Boolean,json:{write:!0}})],$.prototype,"isContentVisible",void 0),(0,b._)([(0,C.MZ)({type:Number,json:{write:!0}})],$.prototype,"status",void 0),$=(0,b._)([(0,ae.$)("esri.rest.networks.support.Association")],$);const Ue=$;let Y=class extends re.A{constructor(n){super(n),this.associations=[]}};(0,b._)([(0,C.MZ)({type:[Ue],json:{write:!0}})],Y.prototype,"associations",void 0),Y=(0,b._)([(0,ae.$)("esri.rest.networks.support.QueryAssociationsResult")],Y);const Xe=Y;function Oe(n){const{returnDeletes:t,elements:r,gdbVersion:y,moment:h}=n.toJSON();return{returnDeletes:t,elements:JSON.stringify(r.map(u=>({globalId:u.globalId,networkSourceId:u.networkSourceId,terminalId:u.terminalId}))),types:JSON.stringify(n.types.map(u=>R.toJSON(u))).replaceAll('"connectivity"','"junctionJunctionConnectivity"'),gdbVersion:y,moment:h}}function oe(){return oe=(0,S.A)(function*(n,t,r){const y=(0,ie.Dl)(n),h={...Oe(t),f:"json"},u=(0,ie.lF)({...y.query,...h}),e=(0,ie.jV)(u,{...r,method:"post"}),i=`${y.path}/associations/query`,{data:d}=yield(0,Pe.A)(i,e),f=Xe.fromJSON(d);return t.types.includes("connectivity")&&(0,Me.Lx)(ke.A.getLogger("esri/rest/networks/support/QueryAssociationsParameters"),"types",{replacement:"Please use 'junction-junction-connectivity' instead of 'connectivity'.",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-rest-networks-support-QueryAssociationsParameters.html#types",version:"4.29",warnOnce:!0}),f}),oe.apply(this,arguments)}var le,Ge=g(55739);let U=le=class extends re.A{static from(n){return(0,Ge.PZ)(le,n)}constructor(n){super(n),this.returnDeletes=!1,this.elements=[],this.types=[],this.gdbVersion=null,this.moment=null}};(0,b._)([(0,C.MZ)({type:Boolean,json:{write:!0}})],U.prototype,"returnDeletes",void 0),(0,b._)([(0,C.MZ)({type:[G.A],json:{write:!0}})],U.prototype,"elements",void 0),(0,b._)([(0,C.MZ)({type:[R.apiValues],json:{type:R.jsonValues,read:R.read,write:R.write}})],U.prototype,"types",void 0),(0,b._)([(0,C.MZ)({type:String,json:{write:!0}})],U.prototype,"gdbVersion",void 0),(0,b._)([(0,C.MZ)({type:Date,json:{type:Number,write:{writer:(n,t)=>{t.moment=n?.getTime()}}}})],U.prototype,"moment",void 0),U=le=(0,b._)([(0,ae.$)("esri.rest.networks.support.QueryAssociationsParameters")],U);const Ve=U;var v=g(68778);function se(n,t,r){const y=n.getVariables();if(y.length>0){const h={};for(const u of y)h[u]=t.evaluateIdentifier(r,{name:u});n.parameters=h}return n}function m(n,t,r=null){for(const y in n)if(y.toLowerCase()===t.toLowerCase())return n[y];return r}function Ie(n){if(null===n)return null;const t={type:m(n,"type",""),name:m(n,"name","")};if("range"===t.type)t.range=m(n,"range",[]);else{t.codedValues=[];for(const r of m(n,"codedValues",[]))t.codedValues.push({name:m(r,"name",""),code:m(r,"code",null)})}return t}function ue(n){if(null===n)return null;const t={},r=m(n,"wkt");null!==r&&(t.wkt=r);const y=m(n,"wkid");return null!==y&&(t.wkid=y),t}function we(n){if(null===n)return null;const t={hasZ:m(n,"hasz",!1),hasM:m(n,"hasm",!1)},r=m(n,"spatialreference");null!=r&&(t.spatialReference=ue(r));const y=m(n,"x",null);if(null!==y)return t.x=y,t.y=m(n,"y",null),t.hasZ&&(t.z=m(n,"z",null)),t.hasM&&(t.m=m(n,"m",null)),t;const h=m(n,"rings",null);if(null!==h)return t.rings=h,t;const u=m(n,"paths",null);if(null!==u)return t.paths=u,t;const e=m(n,"points",null);if(null!==e)return t.points=e,t;for(const i of["xmin","xmax","ymin","ymax","zmin","zmax","mmin","mmax"]){const d=m(n,i,null);null!==d&&(t[i]=d)}return t}function V(n){return"utc"===n?.toLowerCase()?"UTC":"unknown"===n?.toLowerCase()?"Unknown":n}function de(){return de=(0,S.A)(function*(n,t,r,y,h,u,e){const i=yield n.getFeatureSetInfo();if(null===(i?.layerId??null)||!h.layerIdLookup.get(i.layerId))return null;const d=n.serviceUrl().replace(/\/FeatureServer/i,"/UtilityNetworkServer"),f=[];switch(r){case"connected":f.push("connectivity"),f.push("junction-edge-from-connectivity"),f.push("junction-edge-to-connectivity"),f.push("junction-edge-midspan-connectivity"),f.push("junction-junction-connectivity");break;case"container":case"content":f.push("containment");break;case"structure":case"attached":f.push("attachment");break;case"junctionedge":f.push("junction-edge-from-connectivity"),f.push("junction-edge-to-connectivity");break;case"midspan":f.push("junction-edge-midspan-connectivity");break;default:throw new l.D$(u,l.TX.InvalidParameter,e)}let I=null,p=!1;if(null!==y&&""!==y&&void 0!==y){for(const c of h.terminals)c.terminalName===y&&(I=c.terminalId);null===I&&(p=!0)}const s=[];if(!p){const c=new G.A({globalId:t.field(n.globalIdField),networkSourceId:h.layerIdLookup.get(i.layerId).sourceId,...I?{terminalId:I}:""}),w=yield function Je(n,t,r){return oe.apply(this,arguments)}(d,new Ve({types:f,elements:[c]}));let j=0;for(const T of w.associations){let A=null,N="",k="";if(T.fromNetworkElement?.globalId===c.globalId?(A=T.toNetworkElement,k="to"):T.toNetworkElement?.globalId===c.globalId&&(A=T.fromNetworkElement,k="from"),!A)continue;switch(r){case"attached":if("attachment"!==T.associationType||"to"!==k)continue;break;case"structure":if("attachment"!==T.associationType||"from"!==k)continue;break;case"container":if("containment"!==T.associationType||"from"!==k)continue;break;case"content":if("containment"!==T.associationType||"to"!==k)continue;break;case"connected":break;case"junctionedge":"junction-edge-to-connectivity"===T.associationType?N="to":"junction-edge-from-connectivity"===T.associationType&&(N="from");break;case"midspan":if("junction-edge-midspan-connectivity"!==T.associationType)continue}const W=h.sourceIdLookup.get(A.networkSourceId)?.className??"";s.push(new q.A({geometry:null,attributes:{objectId:j++,globalId:A.globalId,percentAlong:T.percentAlong??0,isContentVisible:T.isContentVisible?0:1,className:W,side:N}}))}}const o=new me.default({source:s,geometryType:null,objectIdField:"objectId",globalIdField:"globalId",fields:[new L.A({name:"objectId",alias:"objectId",type:"oid"}),new L.A({name:"globalId",alias:"globalId",type:"global-id"}),new L.A({name:"percentAlong",alias:"percentAlong",type:"double"}),new L.A({name:"side",alias:"side",type:"string"}),new L.A({name:"isContentVisible",alias:"isContentVisible",type:"integer"}),new L.A({name:"className",alias:"className",type:"string"})]});return(0,M.constructFeatureSet)(o)}),de.apply(this,arguments)}function Be(n){"async"===n.mode&&(n.functions.timezone=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,1,2,t,r),(0,a.k)(e[0])||(0,a.j)(e[0]))return"Unknown";if((0,a.p)(e[0])){if(yield e[0].load(),1===e.length||null===e[1])return V(e[0].datesInUnknownTimezone?"unknown":e[0].dateFieldsTimeZone);if(!(e[1]instanceof P.A)||!1===e[1].hasField("type"))throw new l.D$(t,l.TX.InvalidParameter,r);const f=e[1].field("type");if(!1===(0,v.Kg)(f))throw new l.D$(t,l.TX.InvalidParameter,r);switch((0,a.f)(f).toLowerCase()){case"preferredtimezone":return V(e[0].preferredTimeZone);case"editfieldsinfo":return V(e[0].editFieldsInfo?.timeZone??null);case"timeinfo":return V(e[0].timeInfo?.timeZone??null);case"field":if(e[1].hasField("fieldname")&&(0,v.Kg)(e[1].field("fieldname")))return V(e[0].fieldTimeZone((0,a.f)(e[1].field("fieldname"))))}throw new l.D$(t,l.TX.InvalidParameter,r)}const i=(0,a.h)(e[0],(0,a.K)(t));if(null===i)return null;const d=i.timeZone;return"system"===d?Q.lY.systemTimeZoneCanonicalName:"utc"===d.toLowerCase()?"UTC":"unknown"===d.toLowerCase()?"Unknown":d});return function(h,u,e){return y.apply(this,arguments)}}())},n.functions.sqltimestamp=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){(0,a.D)(e,1,3,t,r);const i=e[0];if((0,a.g)(i)){if(1===e.length)return i.toSQLWithKeyword();if(2===e.length)return i.changeTimeZone((0,a.f)(e[1])).toSQLWithKeyword();throw new l.D$(t,l.TX.InvalidParameter,r)}if((0,a.j)(i))return i.toSQLWithKeyword();if((0,a.p)(i)){if(3!==e.length)throw new l.D$(t,l.TX.InvalidParameter,r);yield i.load();const d=(0,a.f)(e[1]);if((0,a.j)(e[2]))return e[2].toSQLWithKeyword();if(!1===(0,a.g)(e[2]))throw new l.D$(t,l.TX.InvalidParameter,r);const f=i.fieldTimeZone(d);return null==f?e[2].toSQLWithKeyword():e[2].changeTimeZone(f).toSQLWithKeyword()}throw new l.D$(t,l.TX.InvalidParameter,r)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"sqltimestamp",min:2,max:4}),n.functions.featuresetbyid=function(t,r){return n.standardFunctionAsync(t,r,(y,h,u)=>{if((0,a.D)(u,2,4,t,r),(0,a.o)(u[0])){const e=(0,a.f)(u[1]);let i=(0,a.J)(u[2],null);const d=(0,a.e)((0,a.J)(u[3],!0));if(null===i&&(i=["*"]),!1===(0,v.cy)(i))throw new l.D$(t,l.TX.InvalidParameter,r);return u[0].featureSetById(e,d,i)}throw new l.D$(t,l.TX.InvalidParameter,r)})},n.signatures.push({name:"featuresetbyid",min:2,max:4}),n.functions.getfeatureset=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,1,2,t,r),(0,a.n)(e[0])){let i=(0,a.J)(e[1],"datasource");return null===i&&(i="datasource"),i=(0,a.f)(i).toLowerCase(),(0,M.convertToFeatureSet)(e[0].fullSchema(),i,t.lrucache,t.interceptor,t.spatialReference??null)}throw new l.D$(t,l.TX.InvalidParameter,r)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"getfeatureset",min:1,max:2}),n.functions.featuresetbyportalitem=function(t,r){return n.standardFunctionAsync(t,r,(y,h,u)=>{if((0,a.D)(u,2,5,t,r),null===u[0])throw new l.D$(t,l.TX.PortalRequired,r);if(u[0]instanceof _.A){const I=(0,a.f)(u[1]),p=(0,a.f)(u[2]);let s=(0,a.J)(u[3],null);const o=(0,a.e)((0,a.J)(u[4],!0));if(null===s&&(s=["*"]),!1===(0,v.cy)(s))throw new l.D$(t,l.TX.InvalidParameter,r);let c;return c=t.services?.portal?t.services.portal:ye.A.getDefault(),c=(0,Ee.R)(u[0],c),(0,M.constructFeatureSetFromPortalItem)(I,p,t.spatialReference??null,s,o,c,t.lrucache,t.interceptor)}if(!1===(0,v.Kg)(u[0]))throw new l.D$(t,l.TX.PortalRequired,r);const e=(0,a.f)(u[0]),i=(0,a.f)(u[1]);let d=(0,a.J)(u[2],null);const f=(0,a.e)((0,a.J)(u[3],!0));if(null===d&&(d=["*"]),!1===(0,v.cy)(d))throw new l.D$(t,l.TX.InvalidParameter,r);return(0,M.constructFeatureSetFromPortalItem)(e,i,t.spatialReference??null,d,f,t.services?.portal??ye.A.getDefault(),t.lrucache,t.interceptor)})},n.signatures.push({name:"featuresetbyportalitem",min:2,max:5}),n.functions.featuresetbyname=function(t,r){return n.standardFunctionAsync(t,r,(y,h,u)=>{if((0,a.D)(u,2,4,t,r),(0,a.o)(u[0])){const e=(0,a.f)(u[1]);let i=(0,a.J)(u[2],null);const d=(0,a.e)((0,a.J)(u[3],!0));if(null===i&&(i=["*"]),!1===(0,v.cy)(i))throw new l.D$(t,l.TX.InvalidParameter,r);return u[0].featureSetByName(e,d,i)}throw new l.D$(t,l.TX.InvalidParameter,r)})},n.signatures.push({name:"featuresetbyname",min:2,max:4}),n.functions.featureset=function(t,r){return n.standardFunction(t,r,(y,h,u)=>{(0,a.D)(u,1,1,t,r);const e={layerDefinition:{geometryType:"",objectIdField:"",globalIdField:"",typeIdField:"",hasM:!1,hasZ:!1,fields:[]},featureSet:{geometryType:"",features:[]}};if((0,v.Kg)(u[0])){const i=JSON.parse(u[0]);void 0!==i.layerDefinition?(e.layerDefinition=i.layerDefinition,e.featureSet=i.featureSet,i.layerDefinition.spatialReference&&(e.layerDefinition.spatialReference=i.layerDefinition.spatialReference)):(e.featureSet.features=i.features,e.featureSet.geometryType=i.geometryType,e.layerDefinition.geometryType=e.featureSet.geometryType,e.layerDefinition.objectIdField=i.objectIdFieldName??"",e.layerDefinition.typeIdField=i.typeIdFieldName,e.layerDefinition.globalIdField=i.globalIdFieldName,e.layerDefinition.fields=i.fields,i.spatialReference&&(e.layerDefinition.spatialReference=i.spatialReference))}else{if(!(u[0]instanceof P.A))throw new l.D$(t,l.TX.InvalidParameter,r);{const i=JSON.parse(u[0].castToText(!0)),d=m(i,"layerdefinition");if(null!==d){e.layerDefinition.geometryType=m(d,"geometrytype",""),e.featureSet.geometryType=e.layerDefinition.geometryType,e.layerDefinition.globalIdField=m(d,"globalidfield",""),e.layerDefinition.objectIdField=m(d,"objectidfield",""),e.layerDefinition.typeIdField=m(d,"typeidfield",""),e.layerDefinition.hasZ=!0===m(d,"hasz",!1),e.layerDefinition.hasM=!0===m(d,"hasm",!1);const f=m(d,"spatialreference");f&&(e.layerDefinition.spatialReference=ue(f));const I=[];for(const s of m(d,"fields",[])){const o={name:m(s,"name",""),alias:m(s,"alias",""),type:m(s,"type",""),nullable:m(s,"nullable",!0),editable:m(s,"editable",!0),length:m(s,"length",null),domain:Ie(m(s,"domain"))};I.push(o)}e.layerDefinition.fields=I;const p=m(i,"featureset");if(p){const s={};for(const o of I)s[o.name.toLowerCase()]=o.name;for(const o of m(p,"features",[])){const c={},w=m(o,"attributes",{});for(const j in w)c[s[j.toLowerCase()]]=w[j];e.featureSet.features.push({attributes:c,geometry:we(m(o,"geometry"))})}}}else{e.layerDefinition.hasZ=!0===m(i,"hasz",!1),e.layerDefinition.hasM=!0===m(i,"hasm",!1),e.layerDefinition.geometryType=m(i,"geometrytype",""),e.featureSet.geometryType=e.layerDefinition.geometryType,e.layerDefinition.objectIdField=m(i,"objectidfieldname",""),e.layerDefinition.typeIdField=m(i,"typeidfieldname","");const f=m(i,"spatialreference");f&&(e.layerDefinition.spatialReference=ue(f));const I=[],p=m(i,"fields",null);if(!(0,v.cy)(p))throw new l.D$(t,l.TX.InvalidParameter,r);for(const c of p){const w={name:m(c,"name",""),alias:m(c,"alias",""),type:m(c,"type",""),nullable:m(c,"nullable",!0),editable:m(c,"editable",!0),length:m(c,"length",null),domain:Ie(m(c,"domain"))};I.push(w)}e.layerDefinition.fields=I;const s={};for(const c of I)s[c.name.toLowerCase()]=c.name;let o=m(i,"features",null);if((0,v.cy)(o))for(const c of o){const w={},j=m(c,"attributes",{});for(const T in j)w[s[T.toLowerCase()]]=j[T];e.featureSet.features.push({attributes:w,geometry:we(m(c,"geometry",null))})}else o=null,e.featureSet.features=o}}}if(!1===function ze(n){return!!n.layerDefinition&&!!n.featureSet&&!1!==function We(n,t){for(const r of t)if(r===n)return!0;return!1}(n.layerDefinition.geometryType,["",null,"esriGeometryNull","esriGeometryPoint","esriGeometryPolyline","esriGeometryPolygon","esriGeometryMultipoint","esriGeometryEnvelope"])&&!1!==(0,v.cy)(n.layerDefinition.fields)&&!1!==(0,v.cy)(n.featureSet.features)}(e))throw new l.D$(t,l.TX.InvalidParameter,r);return e.layerDefinition.geometryType||(e.layerDefinition.geometryType="esriGeometryNull"),je.A.create(e,t.spatialReference)})},n.signatures.push({name:"featureset",min:1,max:1}),n.functions.filter=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,2,2,t,r),(0,v.cy)(e[0])||(0,a.m)(e[0])){const i=[];let d,f=e[0];if(f instanceof Ne.A&&(f=f.toArray()),!(0,a.i)(e[1]))throw new l.D$(t,l.TX.InvalidParameter,r);d=e[1].createFunction(t);for(const I of f){const p=d(I);(0,Le.$X)(p)?!0===(yield p)&&i.push(I):!0===p&&i.push(I)}return i}if((0,a.p)(e[0])){const i=yield e[0].load(),d=E.default.create(e[1],{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}),f=d.getVariables();if(f.length>0){const I={};for(const p of f)I[p]=n.evaluateIdentifier(t,{name:p});d.parameters=I}return new ee.A({parentfeatureset:e[0],whereclause:d})}throw new l.D$(t,l.TX.InvalidParameter,r)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"filter",min:2,max:2}),n.functions.orderby=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,2,2,t,r),(0,a.p)(e[0])){const i=new Ze.A(e[1]);return new Se.A({parentfeatureset:e[0],orderbyclause:i})}throw new l.D$(t,l.TX.InvalidParameter,r)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"orderby",min:2,max:2}),n.functions.top=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,2,2,t,r),(0,a.p)(e[0]))return new $e.A({parentfeatureset:e[0],topnum:e[1]});if((0,v.cy)(e[0]))return(0,a.t)(e[1])>=e[0].length?e[0].slice():e[0].slice(0,(0,a.t)(e[1]));if((0,a.m)(e[0]))return(0,a.t)(e[1])>=e[0].length()?e[0].slice():e[0].slice(0,(0,a.t)(e[1]));throw new l.D$(t,l.TX.InvalidParameter,r)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"top",min:2,max:2}),n.functions.first=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,1,1,t,r),(0,a.p)(e[0])){const i=yield e[0].first(h.abortSignal);if(null!==i){const d=be.A.createFromGraphicLikeObject(i.geometry,i.attributes,e[0],t.timeZone);return d._underlyingGraphic=i,d}return i}return(0,v.cy)(e[0])?0===e[0].length?null:e[0][0]:(0,a.m)(e[0])?0===e[0].length()?null:e[0].get(0):null});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"first",min:1,max:1}),n.functions.attachments=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){(0,a.D)(e,1,2,t,r);const i={minsize:-1,maxsize:-1,types:null,returnMetadata:!1};if(e.length>1)if(e[1]instanceof P.A){if(e[1].hasField("minsize")&&(i.minsize=(0,a.t)(e[1].field("minsize"))),e[1].hasField("metadata")&&(i.returnMetadata=(0,a.e)(e[1].field("metadata"))),e[1].hasField("maxsize")&&(i.maxsize=(0,a.t)(e[1].field("maxsize"))),e[1].hasField("types")){const d=(0,a.$)(e[1].field("types"),!1);d.length>0&&(i.types=d)}}else if(null!==e[1])throw new l.D$(t,l.TX.InvalidParameter,r);if((0,a.n)(e[0])){const d=e[0]._layer;let f;if((0,a.p)(d))f=d;else{if(null==d||!(0,K.eB)(d))return[];f=(0,M.constructFeatureSet)(d,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)}return yield f.load(),f.queryAttachments(e[0].field(f.objectIdField),i.minsize,i.maxsize,i.types,i.returnMetadata)}if(null===e[0])return[];throw new l.D$(t,l.TX.InvalidParameter,r)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"attachments",min:1,max:2}),n.functions.featuresetbyrelationshipname=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){(0,a.D)(e,2,4,t,r);const i=e[0],d=(0,a.f)(e[1]);let f=(0,a.J)(e[2],null);const I=(0,a.e)((0,a.J)(e[3],!0));if(null===f&&(f=["*"]),!1===(0,v.cy)(f))throw new l.D$(t,l.TX.InvalidParameter,r);if(null===e[0])return null;if(!(0,a.n)(e[0]))throw new l.D$(t,l.TX.InvalidParameter,r);const p=i._layer;let s;if((0,a.p)(p))s=p;else{if(null==p||!(0,K.eB)(p))return null;s=(0,M.constructFeatureSet)(p,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)}s=yield s.load();const o=s.relationshipMetaData().filter(A=>A.name===d);if(0===o.length)return null;if(null!=o[0].relationshipTableId&&o[0].relationshipTableId>-1)return(0,M.constructFeatureSetFromRelationship)(s,o[0],i.field(s.objectIdField),s.spatialReference,f,I,t.lrucache,t.interceptor);let c=s.serviceUrl();if(!c)return null;c="/"===c.charAt(c.length-1)?c+o[0].relatedTableId.toString():c+"/"+o[0].relatedTableId.toString();const w=yield(0,M.constructFeatureSetFromUrl)(c,s.spatialReference,f,I,t.lrucache,t.interceptor);yield w.load();let j=w.relationshipMetaData();if(j=j.filter(A=>A.id===o[0].id),!1===i.hasField(o[0].keyField)||null===i.field(o[0].keyField)){const A=yield s.getFeatureByObjectId(i.field(s.objectIdField),[o[0].keyField]);if(A){const N=E.default.create(j[0].keyField+"= @id",{fieldsIndex:w.getFieldsIndex(),timeZone:w.dateFieldsTimeZoneDefaultUTC});return N.parameters={id:A.attributes[o[0].keyField]},w.filter(N)}return new Ce.A({parentfeatureset:w})}const T=E.default.create(j[0].keyField+"= @id",{fieldsIndex:w.getFieldsIndex(),timeZone:w.dateFieldsTimeZoneDefaultUTC});return T.parameters={id:i.field(o[0].keyField)},w.filter(T)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"featuresetbyrelationshipname",min:2,max:4}),n.functions.featuresetbyassociation=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){(0,a.D)(e,2,3,t,r);const i=e[0],d=(0,a.f)((0,a.J)(e[1],"")).toLowerCase(),f=(0,v.Kg)(e[2])?(0,a.f)(e[2]):null;if(null===e[0])return null;if(!(0,a.n)(e[0]))throw new l.D$(t,l.TX.InvalidParameter,r);let I=i._layer;if(I instanceof me.default&&(I=(0,M.constructFeatureSet)(I,t.spatialReference,["*"],!0,t.lrucache,t.interceptor)),null===I||!1===(0,a.p)(I))return null;yield I.load();const p=I.serviceUrl(),s=yield(0,M.constructAssociationMetaDataFeatureSetFromUrl)(p,t.spatialReference,!0);if(s.unVersion>=8)return yield function He(n,t,r,y,h,u,e){return de.apply(this,arguments)}(I,i,d,f,s,t,r);const o=s.associations;let c=null,w=null,j=!1;if(null!==f&&""!==f&&void 0!==f){for(const x of s.terminals)x.terminalName===f&&(w=x.terminalId);null===w&&(j=!0)}const T=o.getFieldsIndex(),A=T.get("TOGLOBALID").name,N=T.get("FROMGLOBALID").name,k=T.get("TOTERMINALID").name,W=T.get("FROMTERMINALID").name,z=T.get("FROMNETWORKSOURCEID").name,H=T.get("TONETWORKSOURCEID").name,J=T.get("ASSOCIATIONTYPE").name,Qe=T.get("ISCONTENTVISIBLE").name,Ye=T.get("OBJECTID").name;for(const x of I.fields)if("global-id"===x.type){c=i.field(x.name);break}let X=null,Te=new D.Gr(new L.A({name:"percentalong",alias:"percentalong",type:"double"}),E.default.create("0",{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC})),ve=new D.Gr(new L.A({name:"side",alias:"side",type:"string"}),E.default.create("''",{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC}));const Z="globalid",De="globalId",Fe={};for(const x in s.lkp)Fe[x]=s.lkp[x].sourceId;const O=new D.bV(new L.A({name:"classname",alias:"classname",type:"string"}),null,Fe);let F="";switch(d){case"midspan":{F=`((${A}='${c}') OR ( ${N}='${c}')) AND (${J} IN (5))`,O.codefield=E.default.create(`CASE WHEN (${A}='${c}') THEN ${z} ELSE ${H} END`,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC});const x=(0,K.ke)(D.a.findField(o.fields,N));x.name=Z,x.alias=Z,X=new D.Gr(x,E.default.create(`CASE WHEN (${N}='${c}') THEN ${A} ELSE ${N} END`,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC})),Te=s.unVersion>=4?new D.IO(D.a.findField(o.fields,T.get("PERCENTALONG").name)):new D.Gr(new L.A({name:"percentalong",alias:"percentalong",type:"double"}),E.default.create("0",{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC}));break}case"junctionedge":{F=`((${A}='${c}') OR ( ${N}='${c}')) AND (${J} IN (4,6))`,O.codefield=E.default.create(`CASE WHEN (${A}='${c}') THEN ${z} ELSE ${H} END`,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC});const x=(0,K.ke)(D.a.findField(o.fields,N));x.name=Z,x.alias=Z,X=new D.Gr(x,E.default.create(`CASE WHEN (${N}='${c}') THEN ${A} ELSE ${N} END`,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC})),ve=new D.Gr(new L.A({name:"side",alias:"side",type:"string"}),E.default.create(`CASE WHEN (${J}=4) THEN 'from' ELSE 'to' END`,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC}));break}case"connected":{let x=`${A}='@T'`,Ae=`${N}='@T'`;null!==w&&(x+=` AND ${k}=@A`,Ae+=` AND ${W}=@A`),F="(("+x+") OR ("+Ae+"))",F=(0,a.W)(F,"@T",c??""),x=(0,a.W)(x,"@T",c??""),null!==w&&(x=(0,a.W)(x,"@A",w.toString()),F=(0,a.W)(F,"@A",w.toString())),O.codefield=E.default.create("CASE WHEN "+x+` THEN ${z} ELSE ${H} END`,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC});const ce=(0,K.ke)(D.a.findField(o.fields,N));ce.name=Z,ce.alias=Z,X=new D.Gr(ce,E.default.create("CASE WHEN "+x+` THEN ${N} ELSE ${A} END`,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC}));break}case"container":F=`${A}='${c}' AND ${J} = 2`,null!==w&&(F+=` AND ${k} = `+w.toString()),O.codefield=z,F="( "+F+" )",X=new D.p8(D.a.findField(o.fields,N),Z,Z);break;case"content":F=`(${N}='${c}' AND ${J} = 2)`,null!==w&&(F+=` AND ${W} = `+w.toString()),O.codefield=H,F="( "+F+" )",X=new D.p8(D.a.findField(o.fields,A),Z,Z);break;case"structure":F=`(${A}='${c}' AND ${J} = 3)`,null!==w&&(F+=` AND ${k} = `+w.toString()),O.codefield=z,F="( "+F+" )",X=new D.p8(D.a.findField(o.fields,N),Z,De);break;case"attached":F=`(${N}='${c}' AND ${J} = 3)`,null!==w&&(F+=` AND ${W} = `+w.toString()),O.codefield=H,F="( "+F+" )",X=new D.p8(D.a.findField(o.fields,A),Z,De);break;default:throw new l.D$(t,l.TX.InvalidParameter,r)}return j&&(F="1 <> 1"),new D.a({parentfeatureset:o,adaptedFields:[new D.IO(D.a.findField(o.fields,Ye)),new D.IO(D.a.findField(o.fields,Qe)),X,ve,O,Te],extraFilter:F?E.default.create(F,{fieldsIndex:o.getFieldsIndex(),timeZone:o.dateFieldsTimeZoneDefaultUTC}):null})});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"featuresetbyassociation",min:2,max:6}),n.functions.groupby=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,3,3,t,r),!(0,a.p)(e[0]))throw new l.D$(t,l.TX.InvalidParameter,r);const i=yield e[0].load(),d=[],f=[];let I=!1,p=[];if((0,v.Kg)(e[1]))p.push(e[1]);else if(e[1]instanceof P.A)p.push(e[1]);else if((0,v.cy)(e[1]))p=e[1];else{if(!(0,a.m)(e[1]))throw new l.D$(t,l.TX.InvalidParameter,r);p=e[1].toArray()}for(const s of p)if((0,v.Kg)(s)){const o=E.default.create((0,a.f)(s),{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}),c=!0===(0,fe.DA)(o)?(0,a.f)(s):"%%%%FIELDNAME";d.push({name:c,expression:o}),"%%%%FIELDNAME"===c&&(I=!0)}else{if(!(s instanceof P.A))throw new l.D$(t,l.TX.InvalidParameter,r);{const o=s.hasField("name")?s.field("name"):"%%%%FIELDNAME",c=s.hasField("expression")?s.field("expression"):"";if("%%%%FIELDNAME"===o&&(I=!0),!o)throw new l.D$(t,l.TX.InvalidParameter,r);d.push({name:o,expression:E.default.create(c||o,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC})})}}if(p=[],(0,v.Kg)(e[2]))p.push(e[2]);else if((0,v.cy)(e[2]))p=e[2];else if((0,a.m)(e[2]))p=e[2].toArray();else{if(!(e[2]instanceof P.A))throw new l.D$(t,l.TX.InvalidParameter,r);p.push(e[2])}for(const s of p){if(!(s instanceof P.A))throw new l.D$(t,l.TX.InvalidParameter,r);{const o=s.hasField("name")?s.field("name"):"",c=s.hasField("statistic")?s.field("statistic"):"",w=s.hasField("expression")?s.field("expression"):"";if(!o||!c||!w)throw new l.D$(t,l.TX.InvalidParameter,r);f.push({name:o,statistic:c.toLowerCase(),expression:E.default.create(w,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC})})}}if(I){const s={};for(const c of i.fields)s[c.name.toLowerCase()]=1;for(const c of d)"%%%%FIELDNAME"!==c.name&&(s[c.name.toLowerCase()]=1);for(const c of f)"%%%%FIELDNAME"!==c.name&&(s[c.name.toLowerCase()]=1);let o=0;for(const c of d)if("%%%%FIELDNAME"===c.name){for(;1===s["field_"+o.toString()];)o++;s["field_"+o.toString()]=1,c.name="FIELD_"+o.toString()}}for(const s of d)se(s.expression,n,t);for(const s of f)se(s.expression,n,t);return e[0].groupby(d,f)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"groupby",min:3,max:3}),n.functions.distinct=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.p)(e[0])){(0,a.D)(e,2,2,t,r);const i=yield e[0].load(),d=[];let f=[];if((0,v.Kg)(e[1]))f.push(e[1]);else if(e[1]instanceof P.A)f.push(e[1]);else if((0,v.cy)(e[1]))f=e[1];else{if(!(0,a.m)(e[1]))throw new l.D$(t,l.TX.InvalidParameter,r);f=e[1].toArray()}let I=!1;for(const p of f)if((0,v.Kg)(p)){const s=E.default.create((0,a.f)(p),{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC}),o=!0===(0,fe.DA)(s)?(0,a.f)(p):"%%%%FIELDNAME";d.push({name:o,expression:s}),"%%%%FIELDNAME"===o&&(I=!0)}else{if(!(p instanceof P.A))throw new l.D$(t,l.TX.InvalidParameter,r);{const s=p.hasField("name")?p.field("name"):"%%%%FIELDNAME",o=p.hasField("expression")?p.field("expression"):"";if("%%%%FIELDNAME"===s&&(I=!0),!s)throw new l.D$(t,l.TX.InvalidParameter,r);d.push({name:s,expression:E.default.create(o||s,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC})})}}if(I){const p={};for(const o of i.fields)p[o.name.toLowerCase()]=1;for(const o of d)"%%%%FIELDNAME"!==o.name&&(p[o.name.toLowerCase()]=1);let s=0;for(const o of d)if("%%%%FIELDNAME"===o.name){for(;1===p["field_"+s.toString()];)s++;p["field_"+s.toString()]=1,o.name="FIELD_"+s.toString()}}for(const p of d)se(p.expression,n,t);return e[0].groupby(d,[])}return function Ke(n){if(1===n.length){if((0,v.cy)(n[0]))return(0,te.t)("distinct",n[0],-1);if((0,a.m)(n[0]))return(0,te.t)("distinct",n[0].toArray(),-1)}return(0,te.t)("distinct",n,-1)}(e)});return function(h,u,e){return y.apply(this,arguments)}}())},n.functions.getfeaturesetinfo=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,1,1,t,r),!(0,a.p)(e[0]))return null;const i=yield e[0].getFeatureSetInfo();return i?P.A.convertObjectToArcadeDictionary({layerId:i.layerId,layerName:i.layerName,itemId:i.itemId,serviceLayerUrl:i.serviceLayerUrl,webMapLayerId:i.webMapLayerId??null,webMapLayerTitle:i.webMapLayerTitle??null,className:null,objectClassId:null},(0,a.K)(t),!1,!1):null});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"getfeaturesetinfo",min:1,max:1}),n.functions.filterbysubtypecode=function(t,r){return n.standardFunctionAsync(t,r,function(){var y=(0,S.A)(function*(h,u,e){if((0,a.D)(e,2,2,t,r),(0,a.p)(e[0])){const i=yield e[0].load();if(!(0,v.Fq)(e[1]))throw new l.D$(t,l.TX.InvalidParameter,r);if(i.subtypeField){const I=E.default.create(`${i.subtypeField}= ${e[1]}`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC});return new ee.A({parentfeatureset:e[0],whereclause:I})}if(null===i.typeIdField||""===i.typeIdField)throw new l.D$(t,l.TX.FeatureSetDoesNotHaveSubtypes,r);const f=E.default.create(`${i.typeIdField}= ${e[1]}`,{fieldsIndex:i.getFieldsIndex(),timeZone:i.dateFieldsTimeZoneDefaultUTC});return new ee.A({parentfeatureset:e[0],whereclause:f})}throw new l.D$(t,l.TX.InvalidParameter,r)});return function(h,u,e){return y.apply(this,arguments)}}())},n.signatures.push({name:"filterbysubtypecode",min:2,max:2}))}},32832:(xe,B,g)=>{g.d(B,{R:()=>q});var S=g(73874);function q(Q,_){return null===Q?_:new S.A({url:Q.field("url")})}}}]);