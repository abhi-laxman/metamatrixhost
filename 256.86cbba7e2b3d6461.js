"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[256,9361,669,1469,1742],{1469:(g,c,s)=>{s.d(c,{G:()=>i,S:()=>_});class i{*[Symbol.iterator](){let u=this.next();for(;u;)yield u,u=this.next()}}class _ extends i{constructor(u){super(),this.m_iGeom=-1,this.m_aGeoms=u?u.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const u=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,u}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},7852:(g,c,s)=>{s.r(c),s.d(c,{accelerateGeometry:()=>i.a,execute:()=>i.e,isValidDE9IM:()=>i.i,supportsCurves:()=>i.s});var i=s(38408);s(90669)},90669:(g,c,s)=>{s.r(c),s.d(c,{fromExtent:()=>x,fromGeometry:()=>z,fromMultipoint:()=>G,fromPoint:()=>R,fromPolygon:()=>A,fromPolyline:()=>d,fromSpatialReference:()=>X,getSpatialReference:()=>W,toExtent:()=>V,toGeometry:()=>w,toMultipoint:()=>I,toPoint:()=>T,toPolygon:()=>j,toPolyline:()=>B});var i=s(33165),_=(s(87571),s(62257)),m=s(7085),u=s(95944),p=s(3037),U=s(28067),Z=s(21870),D=s(1749),K=s(55861),L=s(93615),P=(s(51509),s(27312));const a="_gxVersion",v=2,O=1;function W(t){return Array.isArray(t)?t[0].spatialReference:t.spatialReference}function z(t){switch(t.type){case"point":return R(t);case"multipoint":return G(t);case"polyline":return d(t);case"polygon":return A(t);case"extent":return x(t);default:throw new Error(`Unsupported geometry type: ${t.type}`)}}function x(t){if(!t.getCacheValue(a)){const n=new m.E;n.setCoords(t.xmin,t.ymin,t.xmax,t.ymax),t.hasM&&n.setInterval(v,0,t.mmin,t.mmax),t.hasZ&&n.setInterval(O,0,t.zmin,t.zmax),t.setCacheValue(a,n)}return t.getCacheValue(a)}function G(t){if(!t.getCacheValue(a)){const n=new u.M,e=new m.P,r=t.points,o=t.hasM,l=t.hasZ,h=l?3:2;for(let E=0,M=r.length;E<M;E++){const f=r[E];e.setXYCoords(f[0],f[1]),l&&e.setZ(f[2]??0),o&&e.setM(f[h]??NaN),n.add(e)}t.setCacheValue(a,n)}return t.getCacheValue(a)}function R(t){if(!t.getCacheValue(a)){const n=new m.P;n.setXYCoords(t.x,t.y),t.hasM&&n.setM(t.m),t.hasZ&&n.setZ(t.z),t.setCacheValue(a,n)}return t.getCacheValue(a)}function A(t){if(!t.getCacheValue(a)){const{curveRings:n,hasM:e,hasZ:r,rings:o}=t,l=(0,P.fromGeometryToGXGeometry)({curveRings:n,hasM:e,hasZ:r,rings:o});t.setCacheValue(a,l)}return t.getCacheValue(a)}function d(t){if(!t.getCacheValue(a)){const{curvePaths:n,hasM:e,hasZ:r,paths:o}=t,l=(0,P.fromGeometryToGXGeometry)({curvePaths:n,hasM:e,hasZ:r,paths:o});t.setCacheValue(a,l)}return t.getCacheValue(a)}function X(t){if(t.wkid)return(0,p.c)(t.wkid);const n=t.wkt2||t.wkt;return n?(0,p.b)(n):null}function w(t,n){if(t)switch(t.getGeometryType()){case _.G.enumPoint:return T(t,n);case _.G.enumEnvelope:return V(t,n);case _.G.enumMultiPoint:return I(t,n);case _.G.enumPolyline:return B(t,n);case _.G.enumPolygon:return j(t,n)}return null}function V(t,n){if(t.isEmpty())return null;const e=new U.A({xmin:t.getXMin(),ymin:t.getYMin(),xmax:t.getXMax(),ymax:t.getYMax(),spatialReference:n}),r=t.getDescription();if(r.hasM()){const o=t.queryInterval(v,0);e.mmin=o.vmin,e.mmax=o.vmax}if(r.hasZ()){const o=t.queryInterval(O,0);e.zmin=o.vmin,e.zmax=o.vmax}return e.setCacheValue(a,t),e}function I(t,n){if(t.isEmpty())return null;const e=t.getDescription(),r=e.hasM(),o=e.hasZ(),l=[],h=new m.P;for(let M=0,f=t.getPointCount();M<f;M++){t.getPointByVal(M,h);const y=[h.getX(),h.getY()];o&&y.push(h.getZ()),r&&y.push(h.getM()),l.push(y)}const E=new Z.A({hasM:r,hasZ:o,points:l,spatialReference:n});return E.setCacheValue(a,t),E}function T(t,n){if(t instanceof i.P)return new D.A({x:t.x,y:t.y,spatialReference:n});if(t.isEmpty())return null;const e=new D.A({x:t.getX(),y:t.getY(),spatialReference:n}),r=t.getDescription();return r.hasM()&&(e.m=t.getM()),r.hasZ()&&(e.z=t.getZ()),e.setCacheValue(a,t),e}function j(t,n){if(t.isEmpty())return null;const e=K.A.fromJSON({spatialReference:n,...(0,P.toGeometry)(t,null)});return e.setCacheValue(a,t),e}function B(t,n){if(t.isEmpty())return null;const e=L.A.fromJSON({spatialReference:n,...(0,P.toGeometry)(t,null)});return e.setCacheValue(a,t),e}}}]);