"use strict";(self.webpackChunkRemoteClient=self.webpackChunkRemoteClient||[]).push([[3029],{80200:(e,t,r)=>{r.d(t,{T:()=>i,d:()=>h});const i={Base64:0,Hex:1,String:2,Raw:3},s=8,n=(1<<s)-1;function l(e,t){const r=(65535&e)+(65535&t);return(e>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(e){const t=[];for(let r=0,i=e.length*s;r<i;r+=s)t[r>>5]|=(e.charCodeAt(r/s)&n)<<r%32;return t}function a(e){const t=[];for(let r=0,i=32*e.length;r<i;r+=s)t.push(String.fromCharCode(e[r>>5]>>>r%32&n));return t.join("")}function u(e,t,r,i,s,n){return l(function(e,t){return e<<t|e>>>32-t}(l(l(t,e),l(i,n)),s),r)}function p(e,t,r,i,s,n,l){return u(t&r|~t&i,e,t,s,n,l)}function d(e,t,r,i,s,n,l){return u(t&i|r&~i,e,t,s,n,l)}function c(e,t,r,i,s,n,l){return u(t^r^i,e,t,s,n,l)}function f(e,t,r,i,s,n,l){return u(r^(t|~i),e,t,s,n,l)}function y(e,t){e[t>>5]|=128<<t%32,e[14+(t+64>>>9<<4)]=t;let r=1732584193,i=-271733879,s=-1732584194,n=271733878;for(let t=0;t<e.length;t+=16){const o=r,a=i,u=s,y=n;r=p(r,i,s,n,e[t],7,-680876936),n=p(n,r,i,s,e[t+1],12,-389564586),s=p(s,n,r,i,e[t+2],17,606105819),i=p(i,s,n,r,e[t+3],22,-1044525330),r=p(r,i,s,n,e[t+4],7,-176418897),n=p(n,r,i,s,e[t+5],12,1200080426),s=p(s,n,r,i,e[t+6],17,-1473231341),i=p(i,s,n,r,e[t+7],22,-45705983),r=p(r,i,s,n,e[t+8],7,1770035416),n=p(n,r,i,s,e[t+9],12,-1958414417),s=p(s,n,r,i,e[t+10],17,-42063),i=p(i,s,n,r,e[t+11],22,-1990404162),r=p(r,i,s,n,e[t+12],7,1804603682),n=p(n,r,i,s,e[t+13],12,-40341101),s=p(s,n,r,i,e[t+14],17,-1502002290),i=p(i,s,n,r,e[t+15],22,1236535329),r=d(r,i,s,n,e[t+1],5,-165796510),n=d(n,r,i,s,e[t+6],9,-1069501632),s=d(s,n,r,i,e[t+11],14,643717713),i=d(i,s,n,r,e[t],20,-373897302),r=d(r,i,s,n,e[t+5],5,-701558691),n=d(n,r,i,s,e[t+10],9,38016083),s=d(s,n,r,i,e[t+15],14,-660478335),i=d(i,s,n,r,e[t+4],20,-405537848),r=d(r,i,s,n,e[t+9],5,568446438),n=d(n,r,i,s,e[t+14],9,-1019803690),s=d(s,n,r,i,e[t+3],14,-187363961),i=d(i,s,n,r,e[t+8],20,1163531501),r=d(r,i,s,n,e[t+13],5,-1444681467),n=d(n,r,i,s,e[t+2],9,-51403784),s=d(s,n,r,i,e[t+7],14,1735328473),i=d(i,s,n,r,e[t+12],20,-1926607734),r=c(r,i,s,n,e[t+5],4,-378558),n=c(n,r,i,s,e[t+8],11,-2022574463),s=c(s,n,r,i,e[t+11],16,1839030562),i=c(i,s,n,r,e[t+14],23,-35309556),r=c(r,i,s,n,e[t+1],4,-1530992060),n=c(n,r,i,s,e[t+4],11,1272893353),s=c(s,n,r,i,e[t+7],16,-155497632),i=c(i,s,n,r,e[t+10],23,-1094730640),r=c(r,i,s,n,e[t+13],4,681279174),n=c(n,r,i,s,e[t],11,-358537222),s=c(s,n,r,i,e[t+3],16,-722521979),i=c(i,s,n,r,e[t+6],23,76029189),r=c(r,i,s,n,e[t+9],4,-640364487),n=c(n,r,i,s,e[t+12],11,-421815835),s=c(s,n,r,i,e[t+15],16,530742520),i=c(i,s,n,r,e[t+2],23,-995338651),r=f(r,i,s,n,e[t],6,-198630844),n=f(n,r,i,s,e[t+7],10,1126891415),s=f(s,n,r,i,e[t+14],15,-1416354905),i=f(i,s,n,r,e[t+5],21,-57434055),r=f(r,i,s,n,e[t+12],6,1700485571),n=f(n,r,i,s,e[t+3],10,-1894986606),s=f(s,n,r,i,e[t+10],15,-1051523),i=f(i,s,n,r,e[t+1],21,-2054922799),r=f(r,i,s,n,e[t+8],6,1873313359),n=f(n,r,i,s,e[t+15],10,-30611744),s=f(s,n,r,i,e[t+6],15,-1560198380),i=f(i,s,n,r,e[t+13],21,1309151649),r=f(r,i,s,n,e[t+4],6,-145523070),n=f(n,r,i,s,e[t+11],10,-1120210379),s=f(s,n,r,i,e[t+2],15,718787259),i=f(i,s,n,r,e[t+9],21,-343485551),r=l(r,o),i=l(i,a),s=l(s,u),n=l(n,y)}return[r,i,s,n]}function h(e,t=i.Hex){const r=t||i.Base64,n=y(o(e),e.length*s);switch(r){case i.Raw:return n;case i.Hex:return function(e){const t="0123456789abcdef",r=[];for(let i=0,s=4*e.length;i<s;i++)r.push(t.charAt(e[i>>2]>>i%4*8+4&15)+t.charAt(e[i>>2]>>i%4*8&15));return r.join("")}(n);case i.String:return a(n);case i.Base64:return function(e){const t=[];for(let r=0,i=4*e.length;r<i;r+=3){const i=(e[r>>2]>>r%4*8&255)<<16|(e[r+1>>2]>>(r+1)%4*8&255)<<8|e[r+2>>2]>>(r+2)%4*8&255;for(let s=0;s<4;s++)8*r+6*s>32*e.length?t.push("="):t.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(i>>6*(3-s)&63))}return t.join("")}(n)}}},87718:(e,t,r)=>{r.d(t,{F:()=>E,Y:()=>A});var i,s=r(90237),n=r(10107),l=(r(44208),r(53966),r(87811),r(40608)),o=r(49186),a=r(25482),u=r(93637),p=r(76369),d=r(66552),c=r(4718),f=r(50498),y=r(61956),h=r(79677);const b=new d.J({esriSpatialRelIntersects:"intersects",esriSpatialRelContains:"contains",esriSpatialRelCrosses:"crosses",esriSpatialRelDisjoint:"disjoint",esriSpatialRelEnvelopeIntersects:"envelope-intersects",esriSpatialRelIndexIntersects:"index-intersects",esriSpatialRelOverlaps:"overlaps",esriSpatialRelTouches:"touches",esriSpatialRelWithin:"within",esriSpatialRelRelation:"relation"}),m=new d.J({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});let w=i=class extends a.A{constructor(e){super(e),this.where=null,this.geometry=null,this.spatialRelationship="intersects",this.distance=void 0,this.objectIds=null,this.units=null,this.timeExtent=null}createQuery(e={}){const{where:t,geometry:r,spatialRelationship:i,timeExtent:s,objectIds:n,units:l,distance:o}=this;return new y.A({geometry:(0,c.o8)(r),objectIds:(0,c.o8)(n),spatialRelationship:i,timeExtent:(0,c.o8)(s),where:t,units:l,distance:o,...e})}clone(){const{where:e,geometry:t,spatialRelationship:r,timeExtent:s,objectIds:n,units:l,distance:o}=this;return new i({geometry:(0,c.o8)(t),objectIds:(0,c.o8)(n),spatialRelationship:r,timeExtent:(0,c.o8)(s),where:e,units:l,distance:o})}};(0,s._)([(0,n.MZ)({type:String,json:{write:!0}})],w.prototype,"where",void 0),(0,s._)([(0,n.MZ)({types:f.yR,json:{write:!0}})],w.prototype,"geometry",void 0),(0,s._)([(0,n.MZ)({type:b.apiValues,json:{name:"spatialRel",read:{reader:b.read},write:{allowNull:!1,writer:b.write,overridePolicy(){return{enabled:null!=this.geometry}}}}})],w.prototype,"spatialRelationship",void 0),(0,s._)([(0,n.MZ)({type:Number,json:{write:{overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],w.prototype,"distance",void 0),(0,s._)([(0,n.MZ)({type:[Number],json:{write:!0}})],w.prototype,"objectIds",void 0),(0,s._)([(0,n.MZ)({type:m.apiValues,json:{read:m.read,write:{writer:m.write,overridePolicy(e){return{enabled:null!=e&&null!=this.geometry}}}}})],w.prototype,"units",void 0),(0,s._)([(0,n.MZ)({type:h.A,json:{write:!0}})],w.prototype,"timeExtent",void 0),w=i=(0,s._)([(0,l.$)("esri.layers.support.FeatureFilter")],w);const v=w;var g;const _={read:{reader:p.LF},write:{writer:p.M9,overridePolicy(){return{allowNull:null!=this.excludedEffect,isRequired:null==this.excludedEffect}}}},x={read:{reader:p.LF},write:{writer:p.M9,overridePolicy(){return{allowNull:null!=this.includedEffect,isRequired:null==this.includedEffect}}}},M={name:"showExcludedLabels",default:!0};let S=g=class extends a.A{constructor(e){super(e),this.filter=null,this.includedEffect=null,this.excludedEffect=null,this.excludedLabelsVisible=!1}write(e,t){const r=super.write(e,t);if(t?.origin){if(r.filter){const e=Object.keys(r.filter);if(e.length>1||"where"!==e[0])return t.messages?.push(new o.A("web-document-write:unsupported-feature-effect","Invalid feature effect 'filter'. A filter can only contain a 'where' property",{layer:t.layer,effect:this})),null}if("showExcludedLabels"in r)return t.messages?.push(new o.A("web-document-write:unsupported-feature-effect","Invalid value for property 'excludedLabelsVisible' which should always be 'true'",{layer:t.layer,effect:this})),null}return r}clone(){return new g({filter:null!=this.filter?this.filter.clone():null,includedEffect:this.includedEffect,excludedEffect:this.excludedEffect,excludedLabelsVisible:this.excludedLabelsVisible})}};(0,s._)([(0,n.MZ)({type:v,json:{write:{allowNull:!0,writer(e,t,r,i){const s=e?.write({},i);s&&0!==Object.keys(s).length?(0,u.sM)(r,s,t):(0,u.sM)(r,null,t)}}}})],S.prototype,"filter",void 0),(0,s._)([(0,n.MZ)({json:{read:p.LF,write:{writer:p.M9,allowNull:!0},origins:{"web-map":_,"portal-item":_}}})],S.prototype,"includedEffect",void 0),(0,s._)([(0,n.MZ)({json:{read:p.LF,write:{writer:p.M9,allowNull:!0},origins:{"web-map":x,"portal-item":x}}})],S.prototype,"excludedEffect",void 0),(0,s._)([(0,n.MZ)({type:Boolean,json:{write:!0,name:"showExcludedLabels",origins:{"web-map":M,"portal-item":M}}})],S.prototype,"excludedLabelsVisible",void 0),S=g=(0,s._)([(0,l.$)("esri.layers.support.FeatureEffect")],S);const R={write:{allowNull:!0}},A={type:S,json:{origins:{"web-map":R,"portal-item":R}}},E=e=>{let t=class extends e{constructor(){super(...arguments),this.featureEffect=null}};return(0,s._)([(0,n.MZ)(A)],t.prototype,"featureEffect",void 0),t=(0,s._)([(0,l.$)("esri.layers.mixins.FeatureEffectLayer")],t),t}},76294:(e,t,r)=>{r.d(t,{J:()=>R});var i=r(90237),s=r(36708),n=r(10107),l=r(44208),o=r(53966),a=(r(87811),r(40608)),u=r(50820),p=r(13213),d=r(96576),c=r(48940),f=r(12330),y=r(49186),h=r(80200),b=r(39767),m=r(30943),w=r(53930);l.A.add("esri-cluster-arcade-enabled",!0);const v=(0,l.A)("esri-cluster-arcade-enabled"),g=new Set(["simple-line","simple-fill","picture-fill"]);function _(e,t){let r=t.clone();if(!x(r))return r;if(t.symbols.some((e=>g.has(e.type)))&&(r=new d.A({symbol:new w.A})),r.authoringInfo||(r.authoringInfo=new m.A),r.authoringInfo.isAutoGenerated=!0,"visualVariables"in r){const t=(r.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression));t.forEach((t=>{"rotation"===t.type?t.field?t.field=S(e,t.field,"avg_angle","number"):t.valueExpression&&(t.field=M(e,t.valueExpression,"avg_angle","number"),t.valueExpression=null):t.normalizationField?(t.field=S(e,t.field,"avg_norm","number",t.normalizationField),t.normalizationField=null):t.field?t.field=S(e,t.field,"avg","number"):t.valueExpression&&(t.field=M(e,t.valueExpression,"avg","number"),t.valueExpression=null)})),r.visualVariables=t}switch(r.type){case"simple":break;case"pie-chart":for(const t of r.attributes)t.field?t.field=S(e,t.field,"sum","number"):t.valueExpression&&(t.field=M(e,t.valueExpression,"sum","number"),t.valueExpression=null);break;case"unique-value":r.field?r.field=S(e,r.field,"mode","string"):r.valueExpression&&(r.field=M(e,r.valueExpression,"mode","string"),r.valueExpression=null);break;case"class-breaks":r.normalizationField?(r.field=S(e,r.field,"avg_norm","number",r.normalizationField),r.normalizationField=null):r.field?r.field=S(e,r.field,"avg","number"):r.valueExpression&&(r.field=M(e,r.valueExpression,"avg","number"),r.valueExpression=null)}return r}const x=e=>{const t=t=>o.A.getLogger("esri.views.2d.layers.support.clusterUtils").error(new y.A("Unsupported-renderer",t,{renderer:e}));if(!e)return!1;switch(e.type){case"unique-value":if(e.field2||e.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1;break;case"class-breaks":if(e.normalizationField){const r=e.normalizationType;if("field"!==r)return t(`FeatureReductionCluster does not support a normalizationType of ${r}`),!1}break;case"simple":case"pie-chart":break;default:return t(`FeatureReductionCluster does not support renderers of type ${e.type}`),!1}if(!v){if("valueExpression"in e&&e.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in e&&e.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function M(e,t,r,i){const s=(0,h.d)(t),n="mode"===r?`cluster_type_${s}`:"sum"===r?`cluster_sum_${s}`:`cluster_avg_${s}`;return e.some((e=>e.name===n))||e.push(new u.A({name:n,isAutoGenerated:!0,onStatisticExpression:new b.A({expression:t,returnType:i}),statisticType:r})),n}function S(e,t,r,i,s){if("cluster_count"===t||e.some((e=>e.name===t)))return t;const n=function(e,t,r){switch(e){case"sum":return`cluster_sum_${t}`;case"avg":case"avg_angle":return`cluster_avg_${t}`;case"mode":return`cluster_type_${t}`;case"avg_norm":{const e=r,i="field",s=t.toLowerCase()+",norm:"+i+","+e.toLowerCase();return"cluster_avg_"+(0,h.d)(s)}}}(r,t,s);return e.some((e=>e.name===n))||("avg_norm"===r?e.push(new u.A({name:n,isAutoGenerated:!0,onStatisticExpression:new b.A({expression:`$feature.${t} / $feature.${s}`,returnType:i}),statisticType:"avg"})):e.push(new u.A({name:n,isAutoGenerated:!0,onStatisticField:t,statisticType:r}))),n}const R=e=>{let t=class extends e{constructor(...e){super(...e),this.addHandles((0,s.wB)((()=>this.renderer),(()=>{if(this.featureReduction){const e=this._normalizeFeatureReduction(this.featureReduction);this._set("featureReduction",e)}}),s.OH))}set featureReduction(e){const t=this._normalizeFeatureReduction(e);this._set("featureReduction",t)}set renderer(e){}_withClusterVariable(e,t,r){const i=e.clone();return"visualVariables"in i&&(i.visualVariables||(i.visualVariables=[]),i.visualVariables.some((e=>"size"===e.type))||i.visualVariables.push(new c.A({field:"cluster_count",stops:[new f.A({value:1}),new f.A({useMinValue:!0,size:t}),new f.A({useMaxValue:!0,size:r})]}))),i}_normalizeFeatureReduction(e){if("cluster"!==e?.type)return e;const t=e.clone(),r=[new u.A({name:"cluster_count",alias:"cluster_count",isAutoGenerated:!0,statisticType:"count"})],i=(t.fields??[]).filter((e=>!e.isAutoGenerated)),s=e.renderer&&!e.renderer.authoringInfo?.isAutoGenerated,{clusterMinSize:n,clusterMaxSize:l}=t;if(s){t.fields=[...r,...i];const e=this._withClusterVariable(t.renderer,n,l);return t.effectiveFeatureRenderer=e,t.effectiveClusterRenderer=e,t}if(e.symbol){if(t.fields=[...r,...i],t.renderer=null,!this.renderer)return t.effectiveFeatureRenderer=null,t.effectiveClusterRenderer=null,t;const s=_(r,this.renderer),o=this._withClusterVariable(s,n,l),a="visualVariables"in o&&o.visualVariables?o.visualVariables:[],u=new d.A({symbol:e.symbol,visualVariables:a});return t.fields=[...r,...i],t.effectiveFeatureRenderer=o,t.effectiveClusterRenderer=u,t}if(!this.renderer)return e;const o=_(r,this.renderer);t.fields=[...r,...i],t.renderer=o;const a=this._withClusterVariable(o,n,l);return t.effectiveFeatureRenderer=a,t.effectiveClusterRenderer=a,t}};return(0,i._)([(0,n.MZ)(p.d)],t.prototype,"featureReduction",null),t=(0,i._)([(0,a.$)("esri.layers.mixins.FeatureReductionLayer")],t),t}},50820:(e,t,r)=>{r.d(t,{A:()=>d});var i,s=r(90237),n=r(25482),l=r(4718),o=r(10107),a=(r(44208),r(53966),r(40608)),u=r(39767);let p=i=class extends n.A{constructor(e){super(e),this.isAutoGenerated=!1,this.name=null,this.alias=null,this.onStatisticField=null,this.onStatisticExpression=null,this.statisticType=null}clone(){return new i({name:this.name,alias:this.alias,isAutoGenerated:this.isAutoGenerated,onStatisticExpression:(0,l.o8)(this.onStatisticExpression),onStatisticField:this.onStatisticField,statisticType:this.statisticType})}};(0,s._)([(0,o.MZ)({type:Boolean,json:{write:!0}})],p.prototype,"isAutoGenerated",void 0),(0,s._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"name",void 0),(0,s._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"alias",void 0),(0,s._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"onStatisticField",void 0),(0,s._)([(0,o.MZ)({type:u.A,json:{write:!0}})],p.prototype,"onStatisticExpression",void 0),(0,s._)([(0,o.MZ)({type:String,json:{write:!0}})],p.prototype,"statisticType",void 0),p=i=(0,s._)([(0,a.$)("esri.layers.support.AggregateField")],p);const d=p},39767:(e,t,r)=>{r.d(t,{A:()=>u});var i=r(90237),s=r(69540),n=r(25482),l=r(10107),o=(r(44208),r(53966),r(87811),r(40608));let a=class extends(s.A.ClonableMixin(n.A)){constructor(e){super(e),this.expression=null,this.title=null,this.returnType=null}};(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],a.prototype,"expression",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],a.prototype,"title",void 0),(0,i._)([(0,l.MZ)({type:String,json:{write:!0}})],a.prototype,"returnType",void 0),a=(0,i._)([(0,o.$)("esri.layers.support.ExpressionInfo")],a);const u=a},40530:(e,t,r)=>{r.d(t,{c:()=>o});var i=r(90237),s=r(25482),n=r(10107),l=(r(44208),r(53966),r(87811),r(40608));let o=class extends s.A{constructor(){super(...arguments),this.type=null}};(0,i._)([(0,n.MZ)({type:["selection","cluster","binning"],readOnly:!0,json:{read:!1,write:!0}})],o.prototype,"type",void 0),o=(0,i._)([(0,l.$)("esri.layers.support.FeatureReduction")],o)},67202:(e,t,r)=>{r.d(t,{A:()=>u});var i,s=r(90237),n=r(10107),l=(r(44208),r(53966),r(87811),r(40608)),o=r(40530);let a=i=class extends o.c{constructor(e){super(e),this.type="selection"}clone(){return new i}};(0,s._)([(0,n.MZ)({type:["selection"]})],a.prototype,"type",void 0),a=i=(0,s._)([(0,l.$)("esri.layers.support.FeatureReductionSelection")],a);const u=a},13213:(e,t,r)=>{r.d(t,{d:()=>z});var i,s=r(89317),n=r(40530),l=r(90237),o=r(13874),a=r(4718),u=r(93637),p=r(90629),d=r(10107),c=r(56507),f=r(93223),y=r(36005),h=r(40608),b=r(43937),m=r(50820),w=r(10873),v=r(15426),g=r(46499),_=r(65494),x=r(13112);let M=i=class extends n.c{constructor(e){super(e),this.type="binning",this.binType="geohash",this.fixedBinLevel=null,this.labelingInfo=null,this.labelsVisible=!0,this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.size=(0,p.cr)("12px"),this.fields=[],this.renderer=null}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,u.sM)(r,i,t)}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?(0,_.L)(i,t,r)??void 0:(0,v.PD)(t,r)}clone(){return new i({fields:(0,a.o8)(this.fields),fixedBinLevel:this.fixedBinLevel,labelingInfo:(0,a.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,maxScale:this.maxScale,popupEnabled:this.popupEnabled,popupTemplate:(0,a.o8)(this.popupTemplate),renderer:(0,a.o8)(this.renderer),binType:(0,a.o8)(this.binType),size:this.size})}};(0,l._)([(0,f.e)({binning:"binning"})],M.prototype,"type",void 0),(0,l._)([(0,f.e)({geohash:"geohash",square:"square"}),(0,d.MZ)({type:["geohash","square"]})],M.prototype,"binType",void 0),(0,l._)([(0,d.MZ)({type:Number,json:{write:!0}})],M.prototype,"fixedBinLevel",void 0),(0,l._)([(0,d.MZ)({type:[g.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],M.prototype,"labelingInfo",void 0),(0,l._)([(0,d.MZ)(w.kF)],M.prototype,"labelsVisible",void 0),(0,l._)([(0,d.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],M.prototype,"maxScale",void 0),(0,l._)([(0,d.MZ)(w.M6)],M.prototype,"popupEnabled",void 0),(0,l._)([(0,d.MZ)({type:o.A,json:{name:"popupInfo",write:!0}})],M.prototype,"popupTemplate",void 0),(0,l._)([(0,d.MZ)({cast:e=>"auto"===e?e:(0,c.GB)((0,p.cr)(e))})],M.prototype,"size",void 0),(0,l._)([(0,d.MZ)({type:[m.A],json:{write:!0}})],M.prototype,"fields",void 0),(0,l._)([(0,b.K)("fields")],M.prototype,"writeFields",null),(0,l._)([(0,d.MZ)({types:x.Hg,json:{write:{target:"drawingInfo.renderer"}}})],M.prototype,"renderer",void 0),(0,l._)([(0,y.w)("renderer",["drawingInfo.renderer"])],M.prototype,"readRenderer",null),M=i=(0,l._)([(0,h.$)("esri.layers.support.FeatureReductionBinning")],M);const S=M;var R,A=r(25482),E=r(96576),j=r(33910);function I(e){return"simple"===e.type&&!e.visualVariables?.length}let F=R=class extends A.A{constructor(e){super(e),this.type="cluster",this.clusterRadius=(0,p.cr)("80px"),this.clusterMinSize=(0,p.cr)("12px"),this.clusterMaxSize=(0,p.cr)("50px"),this.maxScale=0,this.popupEnabled=!0,this.popupTemplate=null,this.renderer=null,this.symbol=null,this.labelingInfo=null,this.labelsVisible=!0,this.fields=[]}readRenderer(e,t,r){const i=t.drawingInfo?.renderer;return i?.authoringInfo?.isAutoGenerated?null:i?I(i)?null:(0,_.L)(i,t,r)??void 0:(0,v.PD)(t,r)}readSymbol(e,t,r){const i=t.drawingInfo?.renderer;if(i?.authoringInfo?.isAutoGenerated)return null;if(i&&I(i)){const e=(0,_.L)(i,t,r);return e?.symbol}return null}writeSymbol(e,t,r,i){const s=this.renderer?.authoringInfo?.isAutoGenerated;if(!this.renderer||s){const r=new E.A({symbol:e});t.drawingInfo={renderer:r.write({},i)}}}writeFields(e,t,r){const i=e.filter((e=>"avg_angle"!==e.statisticType)).map((e=>e.toJSON()));(0,u.sM)(r,i,t)}readFields(e,t,r){return e.filter((e=>!e.isAutoGenerated)).map((e=>m.A.fromJSON(e)))}clone(){return new R({clusterRadius:this.clusterRadius,clusterMinSize:this.clusterMinSize,clusterMaxSize:this.clusterMaxSize,labelingInfo:(0,a.o8)(this.labelingInfo),labelsVisible:this.labelsVisible,fields:(0,a.o8)(this.fields),maxScale:this.maxScale,renderer:(0,a.o8)(this.renderer),symbol:(0,a.o8)(this.symbol),popupEnabled:this.popupEnabled,popupTemplate:(0,a.o8)(this.popupTemplate)})}};(0,l._)([(0,d.MZ)({type:["cluster"],readOnly:!0,json:{write:!0}})],F.prototype,"type",void 0),(0,l._)([(0,d.MZ)({cast:e=>"auto"===e?e:(0,c.GB)((0,p.cr)(e)),json:{write:!0}})],F.prototype,"clusterRadius",void 0),(0,l._)([(0,d.MZ)({type:Number,cast:p.cr,json:{write:!0}})],F.prototype,"clusterMinSize",void 0),(0,l._)([(0,d.MZ)({type:Number,cast:p.cr,json:{write:!0}})],F.prototype,"clusterMaxSize",void 0),(0,l._)([(0,d.MZ)({type:Number,json:{default:0,name:"visibilityInfo.maxScale"}})],F.prototype,"maxScale",void 0),(0,l._)([(0,d.MZ)(w.M6)],F.prototype,"popupEnabled",void 0),(0,l._)([(0,d.MZ)({type:o.A,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],F.prototype,"popupTemplate",void 0),(0,l._)([(0,d.MZ)({types:x.Hg,json:{write:{target:"drawingInfo.renderer"}}})],F.prototype,"renderer",void 0),(0,l._)([(0,y.w)("renderer",["drawingInfo.renderer"])],F.prototype,"readRenderer",null),(0,l._)([(0,d.MZ)({types:j.q8})],F.prototype,"symbol",void 0),(0,l._)([(0,y.w)("symbol",["drawingInfo.renderer"])],F.prototype,"readSymbol",null),(0,l._)([(0,b.K)("symbol")],F.prototype,"writeSymbol",null),(0,l._)([(0,d.MZ)({type:[g.A],json:{read:{source:"drawingInfo.labelingInfo"},write:{target:"drawingInfo.labelingInfo"}}})],F.prototype,"labelingInfo",void 0),(0,l._)([(0,d.MZ)(w.kF)],F.prototype,"labelsVisible",void 0),(0,l._)([(0,d.MZ)({type:[m.A],json:{write:!0}})],F.prototype,"fields",void 0),(0,l._)([(0,b.K)("fields")],F.prototype,"writeFields",null),(0,l._)([(0,y.w)("fields")],F.prototype,"readFields",null),F=R=(0,l._)([(0,h.$)("esri.layers.support.FeatureReductionCluster")],F);const Z=F;var V=r(67202);const T={key:"type",base:n.c,typeMap:{cluster:Z,binning:S}},z={types:{key:"type",base:n.c,typeMap:{selection:V.A,cluster:Z,binning:S}},json:{name:"layerDefinition.featureReduction",write:{allowNull:!0},origins:{"web-map":{types:T},"portal-item":{types:T},"web-scene":{types:{key:"type",base:n.c,typeMap:{selection:V.A}},name:"layerDefinition.featureReduction",write:{layerContainerTypes:s.K}}}}}},65494:(e,t,r)=>{r.d(t,{L:()=>a,r:()=>l});var i=r(67076),s=r(90360),n=r(13112);function l(e,t){return a(e,null,t)}const o=(0,s.C)({types:n.Hg});function a(e,t,r){return e?e&&(e.styleName||e.styleUrl)&&"uniqueValue"!==e.type?(r?.messages&&r.messages.push(new i.A("renderer:unsupported","Only UniqueValueRenderer can be referenced from a web style, but found '"+e.type+"'",{definition:e,context:r})),null):o(e,t,r):null}}}]);