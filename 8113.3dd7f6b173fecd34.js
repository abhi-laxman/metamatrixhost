"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[8113],{721:(hn,sn,O)=>{function Y(s){return s?{originPosition:"upper-left"===s.originPosition?"upperLeft":"lower-left"===s.originPosition?"lowerLeft":s.originPosition,scale:s.tolerance?[s.tolerance,s.tolerance,1,1]:[1,1,1,1],translate:null!=s.extent?[s.extent.xmin,s.extent.ymax,s.extent.zmin??0,s.extent.mmin??0]:[0,0,0,0]}:null}function w(s){if(function R(s){return"lowerLeft"===s.originPosition&&4===s.scale.length&&4===s.translate.length}(s))return s;const{originPosition:i,scale:a,translate:l}=s,m=a[1]??1;return{originPosition:"lowerLeft",scale:[a[0]??1,"lowerLeft"===i?m:-m,a[2]??1,a[3]??1],translate:[l[0]??0,l[1]??0,l[2]??0,l[3]??0]}}function $({scale:s,translate:i},a){return Math.round((a-i[0])/s[0])}function C({scale:s,translate:i},a){return Math.round((a-i[1])/s[1])}function B({scale:s,translate:i},a){return Math.round(((a??0)-i[2])/s[2])}function J({scale:s,translate:i},a){return a?Math.round((a-i[3])/s[3]):0}function Q(s,i){return s&&i?en:s&&!i?nn:!s&&i?k:on}O.d(sn,{$X:()=>H,B2:()=>C,Gy:()=>I,IE:()=>$,P5:()=>V,Q1:()=>w,QE:()=>U,SW:()=>K,Tr:()=>G,VV:()=>Y,wp:()=>M}),O(61320);const on=(s,i)=>{const a=[];if(!i.length)return null;const l=i[0];let c=$(s,l[0]),m=C(s,l[1]);a.push([c,m]);for(let _=1;_<i.length;_++){const[y,z]=i[_],D=$(s,y),g=C(s,z);D===c&&g===m||a.push([D-c,g-m]),c=D,m=g}return a},nn=(s,i)=>{const a=[];if(!i.length)return null;const l=i[0];let c=$(s,l[0]),m=C(s,l[1]),_=B(s,l[2]);a.push([c,m,_]);for(let y=1;y<i.length;y++){const[z,D,g]=i[y],v=$(s,z),E=C(s,D),F=B(s,g);v===c&&E===m&&F===_||a.push([v-c,E-m,F]),c=v,m=E,_=F}return a},k=(s,i)=>{const a=[];if(!i.length)return null;const l=i[0];let c=$(s,l[0]),m=C(s,l[1]),_=J(s,l[2]);a.push([c,m,_]);for(let y=1;y<i.length;y++){const[z,D,g]=i[y],v=$(s,z),E=C(s,D),F=J(s,g);v===c&&E===m&&F===_||a.push([v-c,E-m,F]),c=v,m=E,_=F}return a},en=(s,i)=>{const a=[];if(!i.length)return null;const l=i[0];let c=$(s,l[0]),m=C(s,l[1]),_=B(s,l[2]),y=J(s,l[3]);a.push([c,m,_,y]);for(let z=1;z<i.length;z++){const[D,g,v,E]=i[z],F=$(s,D),rn=C(s,g),cn=B(s,v),mn=J(s,E);F===c&&rn===m&&cn===_&&mn===y||a.push([F-c,rn-m,cn,mn]),c=F,m=rn,_=cn,y=mn}return a};function P({scale:s,translate:i},a){return a*s[0]+i[0]}function T({scale:s,translate:i},a){return a*s[1]+i[1]}function N({scale:s,translate:i},a){return(a??0)*s[2]+i[2]}function b({scale:s,translate:i},a){return a?a*s[3]+i[3]:0}function j(s,i){return s&&i?ln:s&&!i?q:!s&&i?an:S}const S=(s,i)=>{const a=new Array(i.length);if(!i.length)return a;const l=i[0];let c=P(s,l[0]),m=T(s,l[1]);a[0]=[c,m];const{scale:_,originPosition:y}=s,z=_[0],D="lowerLeft"===y?_[1]:-_[1];for(let g=1;g<i.length;g++){const[v,E]=i[g];c+=z*v,m+=D*E,a[g]=[c,m]}return a},q=(s,i)=>{const a=new Array(i.length);if(!i.length)return a;const l=i[0];let c=P(s,l[0]),m=T(s,l[1]);a[0]=[c,m,N(s,l[2])];const{scale:_,originPosition:y}=s,z=_[0],D="lowerLeft"===y?_[1]:-_[1];for(let g=1;g<i.length;g++){const[v,E,F]=i[g];c+=z*v,m+=D*E,a[g]=[c,m,N(s,F)]}return a},an=(s,i)=>{const a=new Array(i.length);if(!i.length)return a;const l=i[0];let c=P(s,l[0]),m=T(s,l[1]);a[0]=[c,m,b(s,l[2])];const{scale:_,originPosition:y}=s,z=_[0],D="lowerLeft"===y?_[1]:-_[1];for(let g=1;g<i.length;g++){const[v,E,F]=i[g];c+=z*v,m+=D*E,a[g]=[c,m,b(s,F)]}return a},ln=(s,i)=>{const a=new Array(i.length);if(!i.length)return a;const l=i[0];let c=P(s,l[0]),m=T(s,l[1]);a[0]=[c,m,N(s,l[2]),b(s,l[3])];const{scale:_,originPosition:y}=s,z=_[0],D="lowerLeft"===y?_[1]:-_[1];for(let g=1;g<i.length;g++){const[v,E,F,rn]=i[g];c+=z*v,m+=D*E,a[g]=[c,m,N(s,F),b(s,rn)]}return a};function tn(s,i,a){const l=new Array(a.length);for(let c=0;c<a.length;c++)l[c]=i(s,a[c]);return l}function I(s,i,a){const l=w(s);return i.x=$(l,a.x),i.y=C(l,a.y),null!=a.z&&(i.z=B(l,a.z)),null!=a.m&&(i.m=J(l,a.m)),i}function M(s,i,a){const l=function p(s,i,a,l){const c=[],m=Q(a,l);for(let _=0;_<i.length;_++){const y=m(s,i[_]);y&&y.length>=3&&c.push(y)}return c.length?c:null}(w(s),a.rings,a.hasZ,a.hasM);return l?(i.rings=l,i.hasZ=a.hasZ??!1,i.hasM=a.hasM??!1,i):null}function U(s,i,a){const l=function W(s,i,a,l){const c=[],m=Q(a,l);for(let _=0;_<i.length;_++){const y=m(s,i[_]);y&&y.length>=2&&c.push(y)}return c.length?c:null}(w(s),a.paths,a.hasZ,a.hasM);return l?(i.paths=l,i.hasZ=a.hasZ??!1,i.hasM=a.hasM??!1,i):null}function K(s,i,a,l=a?.hasZ??!1,c=a?.hasM??!1){if(null!=a){const m=w(s);i.points=j(l,c)(m,a.points),i.hasZ=l,i.hasM=c}return i}function G(s,i,a,l=null!=a?.z,c=null!=a?.m){if(null==a)return i;const m=w(s);return i.x=P(m,a.x),i.y=T(m,a.y),l&&(i.z=N(m,a.z)),c&&(i.m=b(m,a.m)),i}function H(s,i,a,l=a?.hasZ??!1,c=a?.hasM??!1){if(null!=a){const m=w(s);i.rings=tn(m,j(l,c),a.rings),i.hasZ=l,i.hasM=c}return i}function V(s,i,a,l=a?.hasZ??!1,c=a?.hasM??!1){if(null!=a){const m=w(s);i.paths=tn(m,j(l,c),a.paths),i.hasZ=l,i.hasM=c}return i}},88113:(hn,sn,O)=>{O.r(sn),O.d(sn,{classBreaks:()=>J,heatmapStatistics:()=>k,histogram:()=>on,summaryStatistics:()=>w,uniqueValues:()=>C});var X=O(10467),Y=O(19093),R=O(59377);function w(A){return $.apply(this,arguments)}function $(){return($=(0,X.A)(function*(A){const{attribute:p,features:W}=A,{normalizationType:P,normalizationField:T,minValue:N,maxValue:b,fieldType:j,outStatisticTypes:S}=p,q=yield(0,Y.Jc)({field:p.field,valueExpression:p.valueExpression,normalizationType:P,normalizationField:T,normalizationTotal:p.normalizationTotal,viewInfoParams:p.viewInfoParams,timeZone:p.timeZone,fieldInfos:p.fieldInfos},W),an=(0,R.Vb)({normalizationType:P,normalizationField:T,minValue:N,maxValue:b}),ln={value:.5,fieldType:j},tn="esriFieldTypeString"===j?(0,R.z9)({values:q,supportsNullCount:an,percentileParams:ln,outStatisticTypes:S}):(0,R.G_)({values:q,minValue:N,maxValue:b,useSampleStdDev:!P,supportsNullCount:an,percentileParams:ln,outStatisticTypes:S});return(0,R.oZ)(tn,S,"esriFieldTypeDate"===j)})).apply(this,arguments)}function C(A){return B.apply(this,arguments)}function B(){return(B=(0,X.A)(function*(A){const{attribute:p,features:W}=A,P=yield(0,Y.Jc)({field:p.field,field2:p.field2,field3:p.field3,fieldDelimiter:p.fieldDelimiter,valueExpression:p.valueExpression,viewInfoParams:p.viewInfoParams,timeZone:p.timeZone,fieldInfos:p.fieldInfos},W,!1),T=(0,R.b3)(P);return(0,R.lv)(T,p.domains,p.returnAllCodedValues,p.fieldDelimiter)})).apply(this,arguments)}function J(A){return Q.apply(this,arguments)}function Q(){return(Q=(0,X.A)(function*(A){const{attribute:p,features:W}=A,{field:P,normalizationType:T,normalizationField:N,normalizationTotal:b,classificationMethod:j}=p,S=yield(0,Y.Jc)({field:P,valueExpression:p.valueExpression,normalizationType:T,normalizationField:N,normalizationTotal:b,viewInfoParams:p.viewInfoParams,timeZone:p.timeZone,fieldInfos:p.fieldInfos},W),q=(0,R.Rw)(S,{field:P,normalizationType:T,normalizationField:N,normalizationTotal:b,classificationMethod:j,standardDeviationInterval:p.standardDeviationInterval,numClasses:p.numClasses,minValue:p.minValue,maxValue:p.maxValue});return(0,R.jM)(q,j)})).apply(this,arguments)}function on(A){return nn.apply(this,arguments)}function nn(){return(nn=(0,X.A)(function*(A){const{attribute:p,features:W}=A,{field:P,normalizationType:T,normalizationField:N,normalizationTotal:b,classificationMethod:j}=p,S=yield(0,Y.Jc)({field:P,valueExpression:p.valueExpression,normalizationType:T,normalizationField:N,normalizationTotal:b,viewInfoParams:p.viewInfoParams,timeZone:p.timeZone,fieldInfos:p.fieldInfos},W);return(0,R.$y)(S,{field:P,normalizationType:T,normalizationField:N,normalizationTotal:b,classificationMethod:j,standardDeviationInterval:p.standardDeviationInterval,numBins:p.numBins,minValue:p.minValue,maxValue:p.maxValue})})).apply(this,arguments)}function k(A){return en.apply(this,arguments)}function en(){return(en=(0,X.A)(function*(A){const{attribute:p,features:W}=A,{field:P,radius:T,transform:N,spatialReference:b}=p,j=p.size??[0,0],S=(0,Y.$r)(W??[],N,b,j);return(0,Y.gV)(S,T??void 0,P,j[0],j[1])})).apply(this,arguments)}},19093:(hn,sn,O)=>{O.d(sn,{$r:()=>P,Jc:()=>b,Lc:()=>S,MH:()=>un,Wk:()=>_n,gV:()=>T,lX:()=>q,rb:()=>N,sf:()=>tn});var X=O(10467),Y=O(5922),R=O(67685),w=O(97442),$=O(1749),C=O(32034),B=O(721),J=O(58701),Q=O(86300),on=O(78592),nn=O(43039),k=O(59377),en=O(48218);let A=null;const p=/^(?<hh>([0-1][0-9])|([2][0-3])):(?<mm>[0-5][0-9])(:(?<ss>[0-5][0-9]))?([.](?<ms>\d+))?$/;function P(d,h,x,I){const M=(0,J.d9)(x)?(0,J.Vp)(x):null,U=M?Math.round((M.valid[1]-M.valid[0])/h.scale[0]):null;return d.map(L=>{const Z=new $.A(L.geometry);return(0,B.Gy)(h,Z,Z),L.geometry=M?function W(d,h,x){return d.x<0?d.x+=h:d.x>x&&(d.x-=h),d}(Z,U??0,I[0]):Z,L})}function T(d,h=18,x,I,M){const U=new Float64Array(I*M);h=Math.round((0,R.Lz)(h));let L=Number.POSITIVE_INFINITY,Z=Number.NEGATIVE_INFINITY;const K=(0,on.YW)(x);for(const{geometry:G,attributes:H}of d){const{x:V,y:s}=G,i=Math.max(0,V-h),a=Math.max(0,s-h),l=Math.min(M,s+h),c=Math.min(I,V+h),m=+K(H);for(let _=a;_<l;_++)for(let y=i;y<c;y++){const z=_*I+y,D=(0,on.hv)(y-V,_-s,h)*m,g=U[z]+=D;L=Math.min(L,g),Z=Math.max(Z,g)}}return{min:L,max:Z}}function N(d){const h=p.exec(d);if(!h)return null;const{hh:x,mm:I,ss:M,ms:U}=h.groups;return Number(x)*w.vf.hours+Number(I)*w.vf.minutes+Number(M)*w.vf.seconds+Number(U||0)}function b(d,h){return j.apply(this,arguments)}function j(){return(j=(0,X.A)(function*(d,h,x=!0){if(!h)return[];const{field:I,field2:M,field3:U,fieldDelimiter:L,fieldInfos:Z,timeZone:K}=d,G=I&&Z?.find(g=>g.name.toLowerCase()===I.toLowerCase()),H=!!G&&(0,Q.OH)(G),V=!!G&&(0,nn.fs)(G),s=d.valueExpression,i=d.normalizationType,a=d.normalizationField,l=d.normalizationTotal,c=[],m=d.viewInfoParams;let _=null,y=null;if(s){if(!A){const{arcadeUtils:g}=yield(0,en.lw)();A=g}A.hasGeometryOperations(s)&&(yield A.enableGeometryOperations()),_=A.createFunction(s),y=m?A.getViewInfo({viewingMode:m.viewingMode,scale:m.scale,spatialReference:new C.A(m.spatialReference)}):null}const z=d.fieldInfos,D=h[0]&&"declaredClass"in h[0]&&"esri.Graphic"===h[0].declaredClass||!z?null:{fields:z};return h.forEach(g=>{const v=g.attributes;let E;if(s){const F=D?{...g,layer:D}:g,rn=A.createExecContext(F,y,K);E=A.executeFunction(_,rn)}else v&&(E=v[I],M?(E=`${(0,k.gJ)(E)}${L}${(0,k.gJ)(v[M])}`,U&&(E=`${E}${L}${(0,k.gJ)(v[U])}`)):"string"==typeof E&&x&&(V?E=E?new Date(E).getTime():null:H&&(E=E?N(E):null)));if(i&&"number"==typeof E&&isFinite(E)){const F=v&&parseFloat(v[a]);E=(0,k.zS)(E,i,F,l)}c.push(E)}),c})).apply(this,arguments)}function S(d){const x=d.normalizationType;let M;return"field"===x?M="(NOT "+d.normalizationField+" = 0)":"log"!==x&&"natural-log"!==x&&"square-root"!==x||(M=`(${d.field} > 0)`),M}function q(d,h,x){const I=null!=h?d+" >= "+h:"",M=null!=x?d+" <= "+x:"";let U="";return U=I&&M?tn(I,M):I||M,U?"("+U+")":""}function tn(d,h){let x=d??"";return null!=h&&h&&(x=x?"("+x+") AND ("+h+")":h),x}function _n(d,h){if(d&&"intersects"!==d.spatialRelationship)return new Y.A(h,"Only 'intersects' spatialRelationship is supported for featureFilter")}function un(d,h,x){const I=function fn(d){const h=d.layer;return d.fields.filter(x=>!h.getField(x))}({layer:d,fields:h});if(I.length)return new Y.A(x,"Unknown fields: "+I.join(", ")+". You can only use fields defined in the layer schema");const M=function dn(d){const h=d.layer;return d.fields.filter(x=>{const I=h.getFieldUsageInfo(x);return!I||!I.supportsStatistics})}({layer:d,fields:h});return M.length?new Y.A(x,"Unsupported fields: "+M.join(", ")+". You can only use fields that can be fetched i.e. AdapterFieldUsageInfo.supportsStatistics must be true"):void 0}}}]);