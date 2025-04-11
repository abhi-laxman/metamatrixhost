"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[6097,9361,669,1469,1742],{89675:(U,D,r)=>{r.d(D,{O:()=>K});var p=r(8189),L=r(1469),u=r(62257),f=r(95944),m=r(7085),x=r(33165),W=r(9279);class K{getOperatorType(){return 10204}supportsCurves(){return!0}accelerateGeometry(e,i,o){return!1}canAccelerateGeometry(e){return!1}executeMany(e,i,o,n){return new T(e,i,o,n)}execute(e,i,o,n){return e||(0,u.t)("null param is not allowed."),new T(null,i,o,n).generalize(e)}}class T extends L.G{constructor(e,i,o,n){super(),this.m_pline=null,this.m_point=new m.P,this.m_stack=[],this.m_resultstack=[],this.m_callCount=0,this.m_progressTracker=n,this.m_geoms=e,this.m_maxDeviation=i,this.m_bRemoveDegenerateParts=o}tock(){return!0}getRank(){return 1}next(){const e=this.m_geoms.next();return null===e?null:((0,u.d)(e),this.generalize(e))}getGeometryID(){return this.m_geoms.getGeometryID()}generalize(e){const i=e.getGeometryType();if((0,u.e)(i))return e;if(i===u.G.enumEnvelope){const l=new f.a({vd:e.getDescription()});return l.addEnvelope(e,!1),this.generalize(l)}if((0,u.f)(i)){const l=new f.P({vd:e.getDescription()});return l.addSegment(e,!0),this.generalize(l)}if((0,u.h)(i)||(0,u.b)(""),e.isEmpty()||this.m_maxDeviation<=0)return e;const o=(new W.O).execute(e,0,.05*this.m_maxDeviation,0,this.m_progressTracker);e.hasNonLinearSegments()&&(this.m_maxDeviation*=.95);const n=o,E=e.createInstance();E.getGeometryType()===u.G.enumPolygon&&E.setFillRule(e.getFillRule()),this.m_xy=n.getAttributeStreamRef(0);{const l={stack:[],error:void 0,hasError:!1};try{const M=new f.L;this.m_pline=M,(0,p.b)(l,(0,x.h)(()=>{this.m_pline=null},!1),!1);for(let h=0,g=n.getPathCount();h<g;h++)this.generalizePath(n.getImpl(),h,E.getImpl())}catch(M){l.error=M,l.hasError=!0}finally{(0,p.c)(l)}}return this.m_resultstack.length=0,this.m_stack.length=0,E}generalizePath(e,i,o){if(e.getPathSize(i)<2)return;this.m_resultstack.length=0,this.m_stack.length=0;const n=e.getPathStart(i),E=e.getPathEnd(i)-1,l=e.isClosedPath(i),M=e.isClosedPathInXYPlane(i);let h=0,g=-1;this.m_stack.push(l?n:E),this.m_stack.push(n);let C=!1,v=!1;for(!this.m_bRemoveDegenerateParts&&M&&(C=!0,v=!0);this.m_stack.length>1;){const _=this.m_stack.at(-1);this.m_stack.pop();const k=this.m_stack.at(-1);let B=e.getXY(_);this.m_pline.setStartXY(B),B=e.getXY(k),this.m_pline.setEndXY(B);const R=[Number.NaN];let O=this.findGreatestDistance(_,k,E,R);O>=0&&(C?C=!1:(v&&R[0]>h&&(h=R[0],g=O),R[0]<=this.m_maxDeviation&&(O=-1))),O>=0?(this.m_stack.push(O),this.m_stack.push(_)):this.m_resultstack.push(_)}l||this.m_resultstack.push(this.m_stack[0]);const d=this.m_resultstack.length;if(d===e.getPathSize(i)&&d===this.m_stack.length)o.addPath(e,i,!0);else if(this.m_resultstack.length>0){if(this.m_bRemoveDegenerateParts&&this.m_resultstack.length<=2&&(l||1===this.m_resultstack.length||x.P.distance(e.getXY(this.m_resultstack[0]),e.getXY(this.m_resultstack[1]))<=this.m_maxDeviation))return;if(v&&g>=0&&h<=this.m_maxDeviation){const _=this.m_resultstack.at(-1)>g;this.m_resultstack.push(g),_&&(this.m_resultstack[this.m_resultstack.length-2]=(0,x.b)(this.m_resultstack[this.m_resultstack.length-1],this.m_resultstack[this.m_resultstack.length-1]=this.m_resultstack[this.m_resultstack.length-2]))}for(let _=0,k=this.m_resultstack.length;_<k;_++)e.getPointByVal(this.m_resultstack[_],this.m_point),0===_?o.startPathPoint(this.m_point):o.lineToPoint(this.m_point);if(l){for(let _=this.m_resultstack.length;_<3;_++)o.lineToPoint(this.m_point);o.closePathWithLine()}}}findGreatestDistance(e,i,o,n){let E=i-1;i<=e&&(E=o);let l=-1,M=0;const h=new x.P;for(let g=e+1;g<=E;g++){this.m_xy.queryPoint2D(2*g,h);const C=h.x,v=h.y,d=this.m_pline.getClosestCoordinate(h,!1);h.assign(this.m_pline.getCoord2D(d)),h.x-=C,h.y-=v;const _=h.length();_>M&&(l=g,M=_),this.m_callCount++}return n[0]=M,l}}},1469:(U,D,r)=>{r.d(D,{G:()=>p,S:()=>u});class p{*[Symbol.iterator](){let m=this.next();for(;m;)yield m,m=this.next()}}class u extends p{constructor(m){super(),this.m_iGeom=-1,this.m_aGeoms=m?m.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const m=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,m}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},94319:(U,D,r)=>{r.r(D),r.d(D,{execute:()=>m.e,executeMany:()=>m.a,supportsCurves:()=>m.s}),r(89952),r(82663),r(5635),r(90669);var m=r(1163)},90669:(U,D,r)=>{r.r(D),r.d(D,{fromExtent:()=>g,fromGeometry:()=>h,fromMultipoint:()=>C,fromPoint:()=>v,fromPolygon:()=>d,fromPolyline:()=>_,fromSpatialReference:()=>k,getSpatialReference:()=>M,toExtent:()=>R,toGeometry:()=>B,toMultipoint:()=>O,toPoint:()=>Z,toPolygon:()=>X,toPolyline:()=>S});var p=r(33165),u=(r(87571),r(62257)),f=r(7085),m=r(95944),x=r(3037),W=r(28067),K=r(21870),T=r(1749),V=r(55861),e=r(93615),o=(r(51509),r(27312));const n="_gxVersion",E=2,l=1;function M(t){return Array.isArray(t)?t[0].spatialReference:t.spatialReference}function h(t){switch(t.type){case"point":return v(t);case"multipoint":return C(t);case"polyline":return _(t);case"polygon":return d(t);case"extent":return g(t);default:throw new Error(`Unsupported geometry type: ${t.type}`)}}function g(t){if(!t.getCacheValue(n)){const s=new f.E;s.setCoords(t.xmin,t.ymin,t.xmax,t.ymax),t.hasM&&s.setInterval(E,0,t.mmin,t.mmax),t.hasZ&&s.setInterval(l,0,t.zmin,t.zmax),t.setCacheValue(n,s)}return t.getCacheValue(n)}function C(t){if(!t.getCacheValue(n)){const s=new m.M,a=new f.P,c=t.points,P=t.hasM,y=t.hasZ,G=y?3:2;for(let A=0,j=c.length;A<j;A++){const I=c[A];a.setXYCoords(I[0],I[1]),y&&a.setZ(I[2]??0),P&&a.setM(I[G]??NaN),s.add(a)}t.setCacheValue(n,s)}return t.getCacheValue(n)}function v(t){if(!t.getCacheValue(n)){const s=new f.P;s.setXYCoords(t.x,t.y),t.hasM&&s.setM(t.m),t.hasZ&&s.setZ(t.z),t.setCacheValue(n,s)}return t.getCacheValue(n)}function d(t){if(!t.getCacheValue(n)){const{curveRings:s,hasM:a,hasZ:c,rings:P}=t,y=(0,o.fromGeometryToGXGeometry)({curveRings:s,hasM:a,hasZ:c,rings:P});t.setCacheValue(n,y)}return t.getCacheValue(n)}function _(t){if(!t.getCacheValue(n)){const{curvePaths:s,hasM:a,hasZ:c,paths:P}=t,y=(0,o.fromGeometryToGXGeometry)({curvePaths:s,hasM:a,hasZ:c,paths:P});t.setCacheValue(n,y)}return t.getCacheValue(n)}function k(t){if(t.wkid)return(0,x.c)(t.wkid);const s=t.wkt2||t.wkt;return s?(0,x.b)(s):null}function B(t,s){if(t)switch(t.getGeometryType()){case u.G.enumPoint:return Z(t,s);case u.G.enumEnvelope:return R(t,s);case u.G.enumMultiPoint:return O(t,s);case u.G.enumPolyline:return S(t,s);case u.G.enumPolygon:return X(t,s)}return null}function R(t,s){if(t.isEmpty())return null;const a=new W.A({xmin:t.getXMin(),ymin:t.getYMin(),xmax:t.getXMax(),ymax:t.getYMax(),spatialReference:s}),c=t.getDescription();if(c.hasM()){const P=t.queryInterval(E,0);a.mmin=P.vmin,a.mmax=P.vmax}if(c.hasZ()){const P=t.queryInterval(l,0);a.zmin=P.vmin,a.zmax=P.vmax}return a.setCacheValue(n,t),a}function O(t,s){if(t.isEmpty())return null;const a=t.getDescription(),c=a.hasM(),P=a.hasZ(),y=[],G=new f.P;for(let j=0,I=t.getPointCount();j<I;j++){t.getPointByVal(j,G);const z=[G.getX(),G.getY()];P&&z.push(G.getZ()),c&&z.push(G.getM()),y.push(z)}const A=new K.A({hasM:c,hasZ:P,points:y,spatialReference:s});return A.setCacheValue(n,t),A}function Z(t,s){if(t instanceof p.P)return new T.A({x:t.x,y:t.y,spatialReference:s});if(t.isEmpty())return null;const a=new T.A({x:t.getX(),y:t.getY(),spatialReference:s}),c=t.getDescription();return c.hasM()&&(a.m=t.getM()),c.hasZ()&&(a.z=t.getZ()),a.setCacheValue(n,t),a}function X(t,s){if(t.isEmpty())return null;const a=V.A.fromJSON({spatialReference:s,...(0,o.toGeometry)(t,null)});return a.setCacheValue(n,t),a}function S(t,s){if(t.isEmpty())return null;const a=e.A.fromJSON({spatialReference:s,...(0,o.toGeometry)(t,null)});return a.setCacheValue(n,t),a}}}]);