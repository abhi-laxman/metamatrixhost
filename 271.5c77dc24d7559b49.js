"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[271],{16949:(ce,w,s)=>{s.d(w,{R:()=>O,b:()=>a,r:()=>X});var D=s(74567),M=s(29359),U=s(70094),p=s(33836),h=s(86270),f=s(1012),S=s(64570),I=s(51734),R=s(71781),l=s(7741),_=s(94804),u=s(21130),E=s(18356),y=s(82374),A=s(65840),T=s(24493),B=s(50765),g=s(40972),j=s(65207),x=s(18597),N=s(18501),oe=s(43713),Q=s(28700);const X=1;function a(L){const c=new oe.N5,{attributes:d,varyings:v,vertex:m,fragment:C}=c,{applyMarkerOffset:k,draped:V,output:z,capType:se,stippleEnabled:ee,falloffEnabled:re,roundJoins:ue,wireframe:ae,innerColorEnabled:_e}=L;c.include(S.p),c.include(p.s,L),c.include(h.q,L),c.include(U.g,L),c.include(I.Z,L);const Oe=k&&!V;Oe&&(m.uniforms.add(new A.m("markerScale",$=>$.markerScale)),c.include(f.r,{space:j.lM.World})),(0,l.NB)(m,L),m.uniforms.add(new B.F("inverseProjectionMatrix",$=>$.camera.inverseProjectionMatrix),new _.E("nearFar",$=>$.camera.nearFar),new A.m("miterLimit",$=>"miter"!==$.join?0:$.miterLimit),new u.I("viewport",$=>$.camera.fullViewport)),m.constants.add("LARGE_HALF_FLOAT","float",65500),d.add(g.r.POSITION,"vec3"),d.add(g.r.PREVPOSITION,"vec3"),d.add(g.r.NEXTPOSITION,"vec3"),d.add(g.r.SUBDIVISIONFACTOR,"float"),d.add(g.r.UV0,"vec2"),v.add("vColor","vec4"),v.add("vpos","vec3"),v.add("vLineDistance","float"),v.add("vLineWidth","float");const ie=ee;ie&&v.add("vLineSizeInv","float");const Z=se===N.x.ROUND,Te=ee&&Z,Ae=re||Te;return Ae&&v.add("vLineDistanceNorm","float"),Z&&(v.add("vSegmentSDF","float"),v.add("vReverseSegmentSDF","float")),m.code.add(T.H`vec2 perpendicular(vec2 v) {
return vec2(v.y, -v.x);
}
float interp(float ncp, vec4 a, vec4 b) {
return (-ncp - a.z) / (b.z - a.z);
}
vec2 rotate(vec2 v, float a) {
float s = sin(a);
float c = cos(a);
mat2 m = mat2(c, -s, s, c);
return m * v;
}`),m.code.add(T.H`vec4 projectAndScale(vec4 pos) {
vec4 posNdc = proj * pos;
posNdc.xy *= viewport.zw / posNdc.w;
return posNdc;
}`),m.code.add(T.H`void clipAndTransform(inout vec4 pos, inout vec4 prev, inout vec4 next, in bool isStartVertex) {
float vnp = nearFar[0] * 0.99;
if(pos.z > -nearFar[0]) {
if (!isStartVertex) {
if(prev.z < -nearFar[0]) {
pos = mix(prev, pos, interp(vnp, prev, pos));
next = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
} else {
if(next.z < -nearFar[0]) {
pos = mix(pos, next, interp(vnp, pos, next));
prev = pos;
} else {
pos = vec4(0.0, 0.0, 0.0, 1.0);
}
}
} else {
if (prev.z > -nearFar[0]) {
prev = mix(pos, prev, interp(vnp, pos, prev));
}
if (next.z > -nearFar[0]) {
next = mix(next, pos, interp(vnp, next, pos));
}
}
forwardViewPosDepth(pos.xyz);
pos = projectAndScale(pos);
next = projectAndScale(next);
prev = projectAndScale(prev);
}`),(0,l.Nz)(m),m.constants.add("aaWidth","float",ee?0:1).main.add(T.H`
    // unpack values from uv0.y
    bool isStartVertex = abs(abs(uv0.y)-3.0) == 1.0;

    float coverage = 1.0;

    // Check for special value of uv0.y which is used by the Renderer when graphics
    // are removed before the VBO is recompacted. If this is the case, then we just
    // project outside of clip space.
    if (uv0.y == 0.0) {
      // Project out of clip space
      gl_Position = vec4(1e038, 1e038, 1e038, 1.0);
    }
    else {
      bool isJoin = abs(uv0.y) < 3.0;
      float lineSize = getSize();

      if (lineSize < 1.0) {
        coverage = lineSize; // convert sub-pixel coverage to alpha
        lineSize = 1.0;
      }
      lineSize += aaWidth;

      float lineWidth = lineSize * pixelRatio;
      vLineWidth = lineWidth;
      ${ie?T.H`vLineSizeInv = 1.0 / lineSize;`:""}

      vec4 pos  = view * vec4(position, 1.0);
      vec4 prev = view * vec4(prevPosition, 1.0);
      vec4 next = view * vec4(nextPosition, 1.0);
  `),Oe&&m.main.add(T.H`vec4 other = isStartVertex ? next : prev;
bool markersHidden = areWorldMarkersHidden(pos, other);
if(!isJoin && !markersHidden) {
pos.xyz += normalize(other.xyz - pos.xyz) * getWorldMarkerSize(pos) * 0.5;
}`),m.main.add(T.H`clipAndTransform(pos, prev, next, isStartVertex);
vec2 left = (pos.xy - prev.xy);
vec2 right = (next.xy - pos.xy);
float leftLen = length(left);
float rightLen = length(right);`),(ee||Z)&&m.main.add(T.H`
      float isEndVertex = float(!isStartVertex);
      vec2 segmentOrigin = mix(pos.xy, prev.xy, isEndVertex);
      vec2 segment = mix(right, left, isEndVertex);
      ${Z?T.H`vec2 segmentEnd = mix(next.xy, pos.xy, isEndVertex);`:""}
    `),m.main.add(T.H`left = (leftLen > 0.001) ? left/leftLen : vec2(0.0, 0.0);
right = (rightLen > 0.001) ? right/rightLen : vec2(0.0, 0.0);
vec2 capDisplacementDir = vec2(0, 0);
vec2 joinDisplacementDir = vec2(0, 0);
float displacementLen = lineWidth;
if (isJoin) {
bool isOutside = (left.x * right.y - left.y * right.x) * uv0.y > 0.0;
joinDisplacementDir = normalize(left + right);
joinDisplacementDir = perpendicular(joinDisplacementDir);
if (leftLen > 0.001 && rightLen > 0.001) {
float nDotSeg = dot(joinDisplacementDir, left);
displacementLen /= length(nDotSeg * left - joinDisplacementDir);
if (!isOutside) {
displacementLen = min(displacementLen, min(leftLen, rightLen)/abs(nDotSeg));
}
}
if (isOutside && (displacementLen > miterLimit * lineWidth)) {`),m.main.add(ue?T.H`
        vec2 startDir = leftLen < 0.001 ? right : left;
        startDir = perpendicular(startDir);

        vec2 endDir = rightLen < 0.001 ? left : right;
        endDir = perpendicular(endDir);

        float factor = ${ee?T.H`min(1.0, subdivisionFactor * ${T.H.float((X+2)/(X+1))})`:T.H`subdivisionFactor`};

        float rotationAngle = acos(clamp(dot(startDir, endDir), -1.0, 1.0));
        joinDisplacementDir = rotate(startDir, -sign(uv0.y) * factor * rotationAngle);
      `:T.H`if (leftLen < 0.001) {
joinDisplacementDir = right;
}
else if (rightLen < 0.001) {
joinDisplacementDir = left;
}
else {
joinDisplacementDir = (isStartVertex || subdivisionFactor > 0.0) ? right : left;
}
joinDisplacementDir = perpendicular(joinDisplacementDir);`),m.main.add(T.H`
        displacementLen = lineWidth;
      }
    } else {
      // CAP handling ---------------------------------------------------
      joinDisplacementDir = isStartVertex ? right : left;
      joinDisplacementDir = perpendicular(joinDisplacementDir);

      ${se!==N.x.BUTT?T.H`capDisplacementDir = isStartVertex ? -right : left;`:""}
    }
  `),m.main.add(T.H`
    // Displacement (in pixels) caused by join/or cap
    vec2 dpos = joinDisplacementDir * sign(uv0.y) * displacementLen + capDisplacementDir * displacementLen;
    float lineDistNorm = sign(uv0.y) * pos.w;

    vLineDistance =  lineWidth * lineDistNorm;
    ${Ae?T.H`vLineDistanceNorm = lineDistNorm;`:""}

    pos.xy += dpos;
  `),Z&&m.main.add(T.H`vec2 segmentDir = normalize(segment);
vSegmentSDF = (isJoin && isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentOrigin, segmentDir) * pos.w) ;
vReverseSegmentSDF = (isJoin && !isStartVertex) ? LARGE_HALF_FLOAT : (dot(pos.xy - segmentEnd, -segmentDir) * pos.w);`),ee&&(V?m.uniforms.add(new y.U("worldToScreenRatio",$=>1/$.screenToPCSRatio)):m.main.add(T.H`vec3 segmentCenter = mix((nextPosition + position) * 0.5, (position + prevPosition) * 0.5, isEndVertex);
float worldToScreenRatio = computeWorldToScreenRatio(segmentCenter);`),m.main.add(T.H`float segmentLengthScreenDouble = length(segment);
float segmentLengthScreen = segmentLengthScreenDouble * 0.5;
float discreteWorldToScreenRatio = discretizeWorldToScreenRatio(worldToScreenRatio);
float segmentLengthRender = length(mix(nextPosition - position, position - prevPosition, isEndVertex));
vStipplePatternStretch = worldToScreenRatio / discreteWorldToScreenRatio;`),m.main.add(V?T.H`float segmentLengthPseudoScreen = segmentLengthScreen / pixelRatio * discreteWorldToScreenRatio / worldToScreenRatio;
float startPseudoScreen = uv0.x * discreteWorldToScreenRatio - mix(0.0, segmentLengthPseudoScreen, isEndVertex);`:T.H`float startPseudoScreen = mix(uv0.x, uv0.x - segmentLengthRender, isEndVertex) * discreteWorldToScreenRatio;
float segmentLengthPseudoScreen = segmentLengthRender * discreteWorldToScreenRatio;`),m.uniforms.add(new A.m("stipplePatternPixelSize",$=>(0,h.h)($))),m.main.add(T.H`float patternLength = lineSize * stipplePatternPixelSize;
vStippleDistanceLimits = computeStippleDistanceLimits(startPseudoScreen, segmentLengthPseudoScreen, segmentLengthScreen, patternLength);
vStippleDistance = mix(vStippleDistanceLimits.x, vStippleDistanceLimits.y, isEndVertex);
if (segmentLengthScreenDouble >= 0.001) {
vec2 stippleDisplacement = pos.xy - segmentOrigin;
float stippleDisplacementFactor = dot(segment, stippleDisplacement) / (segmentLengthScreenDouble * segmentLengthScreenDouble);
vStippleDistance += (stippleDisplacementFactor - isEndVertex) * (vStippleDistanceLimits.y - vStippleDistanceLimits.x);
}
vStippleDistanceLimits *= pos.w;
vStippleDistance *= pos.w;
vStippleDistanceLimits = isJoin ?
vStippleDistanceLimits :
isStartVertex ?
vec2(-1e34, vStippleDistanceLimits.y) :
vec2(vStippleDistanceLimits.x, 1e34);`)),m.main.add(T.H`
      // Convert back into NDC
      pos.xy = (pos.xy / viewport.zw) * pos.w;

      vColor = getColor();
      vColor.a *= coverage;

      ${ae&&!V?"pos.z -= 0.001 * pos.w;":""}

      // transform final position to camera space for slicing
      vpos = (inverseProjectionMatrix * pos).xyz;
      gl_Position = pos;
      forwardObjectAndLayerIdColor();
    }`),c.fragment.include(M.HQ,L),c.include(x.z,L),C.include(R.a),C.main.add(T.H`discardBySlice(vpos);
discardByTerrainDepth();`),ae?C.main.add(T.H`vec4 finalColor = vec4(1.0, 0.0, 1.0, 1.0);`):(Z&&C.main.add(T.H`
        float sdf = min(vSegmentSDF, vReverseSegmentSDF);
        vec2 fragmentPosition = vec2(
          min(sdf, 0.0),
          vLineDistance
        ) * gl_FragCoord.w;

        float fragmentRadius = length(fragmentPosition);
        float fragmentCapSDF = (fragmentRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
        float capCoverage = clamp(0.5 - fragmentCapSDF, 0.0, 1.0);

        if (capCoverage < ${T.H.float(Q.Q)}) {
          discard;
        }
      `),C.main.add(Te?T.H`
      vec2 stipplePosition = vec2(
        min(getStippleSDF() * 2.0 - 1.0, 0.0),
        vLineDistanceNorm * gl_FragCoord.w
      );
      float stippleRadius = length(stipplePosition * vLineWidth);
      float stippleCapSDF = (stippleRadius - vLineWidth) * 0.5; // Divide by 2 to transform from double pixel scale
      float stippleCoverage = clamp(0.5 - stippleCapSDF, 0.0, 1.0);
      float stippleAlpha = step(${T.H.float(Q.Q)}, stippleCoverage);
      `:T.H`float stippleAlpha = getStippleAlpha();`),z!==D.V.ObjectAndLayerIdColor&&C.main.add(T.H`discardByStippleAlpha(stippleAlpha, ${T.H.float(Q.Q)});`),C.uniforms.add(new E.E("intrinsicColor",$=>$.color)),C.main.add(T.H`vec4 color = intrinsicColor * vColor;`),_e&&(C.uniforms.add(new E.E("innerColor",$=>$.innerColor??$.color),new A.m("innerWidth",($,Le)=>$.innerWidth*Le.camera.pixelRatio)),C.main.add(T.H`float distToInner = abs(vLineDistance * gl_FragCoord.w) - innerWidth;
float innerAA = clamp(0.5 - distToInner, 0.0, 1.0);
float innerAlpha = innerColor.a + color.a * (1.0 - innerColor.a);
color = mix(color, vec4(innerColor.rgb, innerAlpha), innerAA);`)),C.main.add(T.H`vec4 finalColor = blendStipple(color, stippleAlpha);`),re&&(C.uniforms.add(new A.m("falloff",$=>$.falloff)),C.main.add(T.H`finalColor.a *= pow(max(0.0, 1.0 - abs(vLineDistanceNorm * gl_FragCoord.w)), falloff);`)),ee||C.main.add(T.H`float featherStartDistance = max(vLineWidth - 2.0, 0.0);
float value = abs(vLineDistance) * gl_FragCoord.w;
float feather = (value - featherStartDistance) / (vLineWidth - featherStartDistance);
finalColor.a *= 1.0 - clamp(feather, 0.0, 1.0);`)),C.main.add(T.H`outputColorHighlightOID(finalColor, vpos);`),c}const O=Object.freeze(Object.defineProperty({__proto__:null,build:a,ribbonlineNumRoundJoinSubdivisions:X},Symbol.toStringTag,{value:"Module"}))},60611:(ce,w,s)=>{s.d(w,{F:()=>f,Ti:()=>M});var D=s(12438);const M=-3,U=M-1;var p,R;(R=p||(p={}))[R.ALL=0]="ALL",R[R.SOME=1]="SOME";class f{get size(){return this._size}constructor(l=10485760){this._maxSize=l,this._db=new Map,this._size=0,this._hit=0,this._miss=0,this._removeFuncs=new D.A,this._users=new D.A}destroy(){this.clearAll(),this._removeFuncs.clear(),this._users.clear()}register(l){this._users.push(l)}deregister(l){this._users.removeUnordered(l)}registerRemoveFunc(l,_){this._removeFuncs.push([l,_])}deregisterRemoveFunc(l){this._removeFuncs.filterInPlace(_=>_[0]!==l)}get maxSize(){return this._maxSize}set maxSize(l){this._maxSize=Math.max(l,-1),this._checkSize()}getSize(l,_){return this._db.get(l.id+_)?.size??0}put(l,_,u,E,y){const A=this._db.get(_=l.id+_);if(A&&(this._size-=A.size,l.size-=A.size,this._db.delete(_),A.entry!==u&&this._notifyRemove(_,A.entry,A.size,p.ALL)),E>this._maxSize)return void this._notifyRemove(_,u,E,p.ALL);if(void 0===u)return void console.warn("Refusing to cache undefined entry ");if(!E||E<0)return console.warn(`Refusing to cache entry with size ${E} for key ${_}`),void this._notifyRemove(_,u,0,p.ALL);const T=1+Math.max(y,U)-M;this._db.set(_,new I(u,E,T)),this._size+=E,l.size+=E,this._checkSize()}updateSize(l,_,u,E){const y=this._db.get(_=l.id+_);if(y&&y.entry===u){for(this._size-=y.size,l.size-=y.size;E>this._maxSize;){const A=this._notifyRemove(_,u,E,p.SOME);if(!(null!=A&&A>0))return void this._db.delete(_);E=A}y.size=E,this._size+=E,l.size+=E,this._checkSize()}}pop(l,_){const u=this._db.get(_=l.id+_);if(u)return this._size-=u.size,l.size-=u.size,this._db.delete(_),++this._hit,u.entry;++this._miss}get(l,_){const u=this._db.get(_=l.id+_);if(void 0!==u)return this._db.delete(_),u.lives=u.lifetime,this._db.set(_,u),++this._hit,u.entry;++this._miss}peek(l,_){const u=this._db.get(l.id+_);return u?++this._hit:++this._miss,u?.entry}get performanceInfo(){const l={Size:Math.round(this._size/1048576)+"/"+Math.round(this._maxSize/1048576)+"MB","Hit rate":Math.round(100*this._getHitRate())+"%",Entries:this._db.size.toString()},_={},u=new Array;this._db.forEach((A,T)=>{const B=A.lifetime;u[B]=(u[B]||0)+A.size,this._users.forAll(g=>{const{id:j,name:x}=g;T.startsWith(j)&&(_[x]=(_[x]||0)+A.size)})});const E={};this._users.forAll(A=>{const T=A.name;"hitRate"in A&&"number"==typeof A.hitRate&&!isNaN(A.hitRate)&&A.hitRate>0?(_[T]=_[T]||0,E[T]=Math.round(100*A.hitRate)+"%"):E[T]="0%"});const y=Object.keys(_);y.sort((A,T)=>_[T]-_[A]),y.forEach(A=>l[A]=Math.round(_[A]/2**20)+"MB / "+E[A]);for(let A=u.length-1;A>=0;--A){const T=u[A];T&&(l["Priority "+(A+M-1)]=Math.round(T/this._size*100)+"%")}return l}resetStats(){this._hit=this._miss=0,this._users.forAll(l=>l.resetHitRate())}clear(l){const _=l.id;this._db.forEach((u,E)=>{E.startsWith(_)&&(this._size-=u.size,this._db.delete(E),this._notifyRemove(E,u.entry,u.size,p.ALL))}),l.size=0}clearAll(){this._db.forEach((l,_)=>this._notifyRemove(_,l.entry,l.size,p.ALL)),this._users.forAll(l=>l.size=0),this._size=0,this._db.clear()}_getHitRate(){return this._hit/(this._hit+this._miss)}_notifyRemove(l,_,u,E){let y;return this._removeFuncs.some(A=>{if(l.startsWith(A[0])){const T=A[1](_,E,u);return"number"==typeof T&&(y=T),!0}return!1}),y}_checkSize(){this._users.forAll(l=>this._checkSizeLimits(l)),this._checkSizeLimits()}_checkSizeLimits(l){const _=l??this;if(_.maxSize<0||_.size<=_.maxSize)return;const u=l?.id;let E=!0;for(;E;){E=!1;for(const[y,A]of this._db)if(0===A.lifetime&&(!u||y.startsWith(u))){if(this._purgeItem(y,A,l),_.size<=.9*_.maxSize)return;E||=this._db.has(y)}}for(const[y,A]of this._db)if((!u||y.startsWith(u))&&(this._purgeItem(y,A,l),_.size<=.9*_.maxSize))return}_purgeItem(l,_,u=this._users.find(E=>l.startsWith(E.id))){if(this._db.delete(l),_.lives<=1){this._size-=_.size,u&&(u.size-=_.size);const E=this._notifyRemove(l,_.entry,_.size,p.SOME);null!=E&&E>0&&(this._size+=E,u&&(u.size+=E),_.lives=_.lifetime,_.size=E,this._db.set(l,_))}else--_.lives,this._db.set(l,_)}}class I{constructor(l,_,u){this.entry=l,this.size=_,this.lifetime=u,this.lives=u}}},89082:(ce,w,s)=>{s.d(w,{F:()=>U});var D=s(82575),M=s(23393);class U{constructor(){this._meterUnitOffset=0,this._renderUnitOffset=0,this._unit="meters",this._metersPerElevationInfoUnit=1,this._featureExpressionInfoContext=null,this.centerPointInElevationSR=null,this.mode=null}get featureExpressionInfoContext(){return this._featureExpressionInfoContext}get meterUnitOffset(){return this._meterUnitOffset}get unit(){return this._unit}set unit(h){this._unit=h,this._metersPerElevationInfoUnit=(0,D.Ao)(h)}get requiresSampledElevationInfo(){return"absolute-height"!==this.mode}reset(){this.mode=null,this._meterUnitOffset=0,this._renderUnitOffset=0,this._featureExpressionInfoContext=null,this.unit="meters"}set offsetMeters(h){this._meterUnitOffset=h,this._renderUnitOffset=0}set offsetElevationInfoUnits(h){this._meterUnitOffset=h*this._metersPerElevationInfoUnit,this._renderUnitOffset=0}addOffsetRenderUnits(h){this._renderUnitOffset+=h}geometryZWithOffset(h,f){const S=this.calculateOffsetRenderUnits(f);return null!=this.featureExpressionInfoContext?S:h+S}calculateOffsetRenderUnits(h){let f=this._meterUnitOffset;const S=this.featureExpressionInfoContext;return null!=S&&(f+=(0,M.g7)(S)*this._metersPerElevationInfoUnit),f/h.unitInMeters+this._renderUnitOffset}setFromElevationInfo(h){this.mode=h.mode,this.unit=(0,D.Tg)(h.unit)?h.unit:"meters",this.offsetElevationInfoUnits=h.offset??0}updateFeatureExpressionInfoContext(h,f,S){if(null==h)return void(this._featureExpressionInfoContext=null);const I=h?.arcade;I&&null!=f&&null!=S?(this._featureExpressionInfoContext=(0,M.o8)(h),(0,M.gf)(this._featureExpressionInfoContext,(0,M.VG)(I.modules,f,S))):this._featureExpressionInfoContext=h}static fromElevationInfo(h){const f=new U;return null!=h&&f.setFromElevationInfo(h),f}}},69307:(ce,w,s)=>{s.d(w,{I2:()=>u,Kf:()=>y,Uk:()=>oe,ai:()=>T,au:()=>R,fe:()=>A,nG:()=>_,nu:()=>E,sE:()=>l,uw:()=>Q});var Q,c,D=s(92771),M=s(62789),U=s(25866),p=s(83675),h=s(23234),f=s(73186),S=s(28377),I=s(40972);function R(c,d,v,m,C,k,V,z,se,ee,re){const ue=X[re.mode];let ae,_e,Oe=0;if((0,h.projectBuffer)(c,d,v,m,se.spatialReference,C,z))return ue?.requiresAlignment(re)?(Oe=ue.applyElevationAlignmentBuffer(m,C,k,V,z,se,ee,re),ae=k,_e=V):(ae=m,_e=C),(0,h.projectBuffer)(ae,se.spatialReference,_e,k,ee.spatialReference,V,z)?Oe:void 0}function l(c,d,v,m,C){const k=((0,f.v)(c)?c.z:(0,S.cN)(c)?c.array[c.offset+2]:c[2])||0;switch(v.mode){case"on-the-ground":{const V=(0,S.R1)(d,c,"ground")??0;return C.verticalDistanceToGround=0,C.sampledElevation=V,void(C.z=V)}case"relative-to-ground":{const V=(0,S.R1)(d,c,"ground")??0,z=v.geometryZWithOffset(k,m);return C.verticalDistanceToGround=z,C.sampledElevation=V,void(C.z=z+V)}case"relative-to-scene":{const V=(0,S.R1)(d,c,"scene")??0,z=v.geometryZWithOffset(k,m);return C.verticalDistanceToGround=z,C.sampledElevation=V,void(C.z=z+V)}case"absolute-height":{const V=v.geometryZWithOffset(k,m),z=(0,S.R1)(d,c,"ground")??0;return C.verticalDistanceToGround=V-z,C.sampledElevation=z,void(C.z=V)}default:return void(C.z=0)}}function _(c,d,v,m){return l(c,d,v,m,O),O.z}function u(c,d,v){return"on-the-ground"===d&&"on-the-ground"===v?c.staysOnTheGround:d===v||"on-the-ground"!==d&&"on-the-ground"!==v?null==d||null==v?c.definedChanged:Q.UPDATE:c.onTheGroundChanged}function E(c){return"relative-to-ground"===c||"relative-to-scene"===c}function y(c){return"absolute-height"!==c}function A(c,d,v,m,C){l(d,v,C,m,O),T(c,O.verticalDistanceToGround);const k=O.sampledElevation,V=(0,D.C)(a,c.transformation);return L[0]=d.x,L[1]=d.y,L[2]=O.z,(0,p.l)(d.spatialReference,L,V,m.spatialReference)?c.transformation=V:console.warn("Could not locate symbol object properly, it might be misplaced"),k}function T(c,d){for(let v=0;v<c.geometries.length;++v){const m=c.geometries[v].getMutableAttribute(I.r.CENTEROFFSETANDDISTANCE);m&&m.data[3]!==d&&(m.data[3]=d,c.geometryVertexAttributeUpdated(c.geometries[v],I.r.CENTEROFFSETANDDISTANCE))}}class oe{constructor(){this.verticalDistanceToGround=0,this.sampledElevation=0,this.z=0}}(c=Q||(Q={}))[c.NONE=0]="NONE",c[c.UPDATE=1]="UPDATE",c[c.RECREATE=2]="RECREATE";const X={"absolute-height":{applyElevationAlignmentBuffer:function N(c,d,v,m,C,k,V,z){const se=z.calculateOffsetRenderUnits(V),ee=z.featureExpressionInfoContext;d*=3,m*=3;for(let re=0;re<C;++re){const ae=c[d+1],_e=c[d+2];v[m]=c[d],v[m+1]=ae,v[m+2]=null==ee?_e+se:se,d+=3,m+=3}return 0},requiresAlignment:function x(c){return 0!==c.meterUnitOffset||null!=c.featureExpressionInfoContext}},"on-the-ground":{applyElevationAlignmentBuffer:function B(c,d,v,m,C,k){let V=0;const z=k.spatialReference;d*=3,m*=3;for(let se=0;se<C;++se){const ee=c[d],re=c[d+1],ae=k.getElevation(ee,re,c[d+2],z,"ground")??0;V+=ae,v[m]=ee,v[m+1]=re,v[m+2]=ae,d+=3,m+=3}return V/C},requiresAlignment:()=>!0},"relative-to-ground":{applyElevationAlignmentBuffer:function g(c,d,v,m,C,k,V,z){let se=0;const ee=z.calculateOffsetRenderUnits(V),re=z.featureExpressionInfoContext,ue=k.spatialReference;d*=3,m*=3;for(let ae=0;ae<C;++ae){const _e=c[d],Oe=c[d+1],ie=c[d+2],Z=k.getElevation(_e,Oe,ie,ue,"ground")??0;se+=Z,v[m]=_e,v[m+1]=Oe,v[m+2]=null==re?ie+Z+ee:Z+ee,d+=3,m+=3}return se/C},requiresAlignment:()=>!0},"relative-to-scene":{applyElevationAlignmentBuffer:function j(c,d,v,m,C,k,V,z){let se=0;const ee=z.calculateOffsetRenderUnits(V),re=z.featureExpressionInfoContext,ue=k.spatialReference;d*=3,m*=3;for(let ae=0;ae<C;++ae){const _e=c[d],Oe=c[d+1],ie=c[d+2],Z=k.getElevation(_e,Oe,ie,ue,"scene")??0;se+=Z,v[m]=_e,v[m+1]=Oe,v[m+2]=null==re?ie+Z+ee:Z+ee,d+=3,m+=3}return se/C},requiresAlignment:()=>!0}},a=(0,M.vt)(),O=new oe,L=(0,U.vt)()},23393:(ce,w,s)=>{s.d(w,{KF:()=>A,MF:()=>y,VG:()=>_,g7:()=>E,gf:()=>u,o8:()=>S,q6:()=>R});var D=s(10467),M=s(35150),U=s(56492),p=s(97669),h=s(48218);const f=()=>M.A.getLogger("esri.views.3d.layers.graphics.featureExpressionInfoUtils");function S(g){return{cachedResult:g.cachedResult,arcade:g.arcade?{func:g.arcade.func,context:g.arcade.modules.arcadeUtils.createExecContext(null,{sr:g.arcade.context.spatialReference}),modules:g.arcade.modules}:null}}function R(g,j,x,N){return l.apply(this,arguments)}function l(){return(l=(0,D.A)(function*(g,j,x,N){const oe=g?.expression;if("string"!=typeof oe)return null;const Q=function B(g){return"0"===g?0:null}(oe);if(null!=Q)return{cachedResult:Q};const X=yield(0,h.lw)();(0,U.Te)(x);const a=X.arcadeUtils,O=a.createSyntaxTree(oe);return a.dependsOnView(O)?(N?.error("Expressions containing '$view' are not supported on ElevationInfo"),{cachedResult:0}):{arcade:{func:a.createFunction(O),context:a.createExecContext(null,{sr:j}),modules:X}}})).apply(this,arguments)}function _(g,j,x){return g.arcadeUtils.createFeature(j.attributes,j.geometry,x)}function u(g,j){if(null!=g&&!T(g)){if(!j||!g.arcade)return void f().errorOncePerTick("Arcade support required but not provided");j._geometry&&(j._geometry=(0,p.wZ)(j._geometry)),g.arcade.modules.arcadeUtils.updateExecContext(g.arcade.context,j)}}function E(g){if(null!=g){if(T(g))return g.cachedResult;const j=g.arcade;let x=j?.modules.arcadeUtils.executeFunction(j.func,j.context);return"number"!=typeof x&&(g.cachedResult=0,x=0),x}return 0}function y(g,j=!1){let x=g?.featureExpressionInfo;const N=x?.expression;return j||"0"===N||(x=null),x??null}const A={cachedResult:0};function T(g){return null!=g.cachedResult}},88372:(ce,w,s)=>{var D,M,U,p;s.d(w,{O7:()=>M,Om:()=>D,sv:()=>U}),(p=D||(D={}))[p.RasterImage=0]="RasterImage",p[p.Features=1]="Features",function(p){p[p.MapLayer=0]="MapLayer",p[p.ViewLayer=1]="ViewLayer",p[p.Outline=2]="Outline",p[p.SnappingHint=3]="SnappingHint"}(M||(M={})),function(p){p[p.WithRasterImage=0]="WithRasterImage",p[p.WithoutRasterImage=1]="WithoutRasterImage"}(U||(U={}))},28377:(ce,w,s)=>{s.d(w,{R1:()=>p,aY:()=>M,cN:()=>U});var D=s(73186);class M{constructor(f,S=null,I=0){this.array=f,this.spatialReference=S,this.offset=I}}function U(h){return"array"in h}function p(h,f,S="ground"){if((0,D.v)(f))return h.getElevation(f.x,f.y,f.z||0,f.spatialReference,S);if(U(f)){let I=f.offset;return h.getElevation(f.array[I++],f.array[I++],f.array[I]||0,f.spatialReference??h.spatialReference,S)}return h.getElevation(f[0],f[1],f[2]||0,h.spatialReference,S)}},68681:(ce,w,s)=>{s.d(w,{Cz:()=>f,DZ:()=>R,PV:()=>I,vO:()=>h}),s(94302),s(50915),s(76169),s(4931);const h=64,f=h/2,I=h/(f/5),R=.25},33836:(ce,w,s)=>{s.d(w,{s:()=>I});var D=s(33605),M=s(88791),U=s(65840),p=s(60631),h=s(24493),f=s(40972);const S=8;function I(R,l){const _=R.vertex;_.uniforms.add(new U.m("intrinsicWidth",u=>u.width)),l.vvSize?(R.attributes.add(f.r.SIZEFEATUREATTRIBUTE,"float"),_.uniforms.add(new M.t("vvSizeMinSize",u=>u.vvSize.minSize),new M.t("vvSizeMaxSize",u=>u.vvSize.maxSize),new M.t("vvSizeOffset",u=>u.vvSize.offset),new M.t("vvSizeFactor",u=>u.vvSize.factor)),_.code.add(h.H`float getSize() {
return intrinsicWidth * clamp(vvSizeOffset + sizeFeatureAttribute * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize).x;
}`)):(R.attributes.add(f.r.SIZE,"float"),_.code.add(h.H`float getSize(){
return intrinsicWidth * size;
}`)),l.vvOpacity?(R.attributes.add(f.r.OPACITYFEATUREATTRIBUTE,"float"),_.constants.add("vvOpacityNumber","int",8),_.uniforms.add(new p.x("vvOpacityValues",u=>u.vvOpacity.values,S),new p.x("vvOpacityOpacities",u=>u.vvOpacity.opacityValues,S)),_.code.add(h.H`float interpolateOpacity( float value ){
if (value <= vvOpacityValues[0]) {
return vvOpacityOpacities[0];
}
for (int i = 1; i < vvOpacityNumber; ++i) {
if (vvOpacityValues[i] >= value) {
float f = (value - vvOpacityValues[i-1]) / (vvOpacityValues[i] - vvOpacityValues[i-1]);
return mix(vvOpacityOpacities[i-1], vvOpacityOpacities[i], f);
}
}
return vvOpacityOpacities[vvOpacityNumber - 1];
}
vec4 applyOpacity( vec4 color ){
return vec4(color.xyz, interpolateOpacity(opacityFeatureAttribute));
}`)):_.code.add(h.H`vec4 applyOpacity( vec4 color ){
return color;
}`),l.vvColor?(R.include(D.A,l),R.attributes.add(f.r.COLORFEATUREATTRIBUTE,"float"),_.code.add(h.H`vec4 getColor(){
return applyOpacity(interpolateVVColor(colorFeatureAttribute));
}`)):(R.attributes.add(f.r.COLOR,"vec4"),_.code.add(h.H`vec4 getColor(){
return applyOpacity(color);
}`))}},86270:(ce,w,s)=>{s.d(w,{q:()=>N,h:()=>Q});var D=s(35955),M=s(7741),U=s(18356),p=s(82374),h=s(65840),f=s(24493),S=s(35089);function y(a){return a.pattern.map(O=>Math.round(O*a.pixelRatio))}s(86468),s(50915),s(76169),s(4931);var B=s(53781),g=s(89141);const x=(0,g.vt)();function N(a,O){if(!O.stippleEnabled)return void a.fragment.code.add(f.H`float getStippleAlpha() { return 1.0; }
void discardByStippleAlpha(float stippleAlpha, float threshold) {}
vec4 blendStipple(vec4 color, float stippleAlpha) { return color; }`);const L=!(O.draped&&O.stipplePreferContinuous),{vertex:c,fragment:d}=a;d.include(D.W),O.draped||((0,M.yu)(c,O),c.uniforms.add(new p.U("worldToScreenPerDistanceRatio",({camera:v})=>1/v.perScreenPixelRatio)).code.add(f.H`float computeWorldToScreenRatio(vec3 segmentCenter) {
float segmentDistanceToCamera = length(segmentCenter - cameraPosition);
return worldToScreenPerDistanceRatio / segmentDistanceToCamera;
}`)),a.varyings.add("vStippleDistance","float"),a.varyings.add("vStippleDistanceLimits","vec2"),a.varyings.add("vStipplePatternStretch","float"),c.code.add(f.H`
    float discretizeWorldToScreenRatio(float worldToScreenRatio) {
      float step = ${f.H.float(X)};

      float discreteWorldToScreenRatio = log(worldToScreenRatio);
      discreteWorldToScreenRatio = ceil(discreteWorldToScreenRatio / step) * step;
      discreteWorldToScreenRatio = exp(discreteWorldToScreenRatio);
      return discreteWorldToScreenRatio;
    }
  `),c.code.add(f.H`vec2 computeStippleDistanceLimits(float startPseudoScreen, float segmentLengthPseudoScreen, float segmentLengthScreen, float patternLength) {`),c.code.add(f.H`
    if (segmentLengthPseudoScreen >= ${L?"patternLength":"1e4"}) {
  `),(0,M.Nz)(c),c.code.add(f.H`float repetitions = segmentLengthScreen / (patternLength * pixelRatio);
float flooredRepetitions = max(1.0, floor(repetitions + 0.5));
float segmentLengthScreenRounded = flooredRepetitions * patternLength;
float stretch = repetitions / flooredRepetitions;
vStipplePatternStretch = max(0.75, stretch);
return vec2(0.0, segmentLengthScreenRounded);
}
return vec2(startPseudoScreen, startPseudoScreen + segmentLengthPseudoScreen);
}`),d.uniforms.add(new S.N("stipplePatternTexture",v=>v.stippleTexture),new h.m("stipplePatternSDFNormalizer",v=>function oe(a){return a?(Math.floor(.5*(function T(a){return y(a).reduce((O,L)=>Math.max(O,L))}(a)-1))+.5)/a.pixelRatio:1}(v.stipplePattern)),new h.m("stipplePatternPixelSizeInv",v=>1/Q(v))),O.stippleOffColorEnabled&&d.uniforms.add(new U.E("stippleOffColor",v=>function j(a){return null==a?g.uY:4===a.length?a:(0,B.s)(x,a[0],a[1],a[2],1)}(v.stippleOffColor))),d.code.add(f.H`float getStippleSDF(out bool isClamped) {
float stippleDistanceClamped = clamp(vStippleDistance, vStippleDistanceLimits.x, vStippleDistanceLimits.y);
vec2 aaCorrectedLimits = vStippleDistanceLimits + vec2(1.0, -1.0) / gl_FragCoord.w;
isClamped = vStippleDistance < aaCorrectedLimits.x || vStippleDistance > aaCorrectedLimits.y;
float u = stippleDistanceClamped * gl_FragCoord.w * stipplePatternPixelSizeInv * vLineSizeInv;
u = fract(u);
float encodedSDF = rgbaTofloat(texture(stipplePatternTexture, vec2(u, 0.5)));
float sdf = (encodedSDF * 2.0 - 1.0) * stipplePatternSDFNormalizer;
return (sdf - 0.5) * vStipplePatternStretch + 0.5;
}
float getStippleSDF() {
bool ignored;
return getStippleSDF(ignored);
}
float getStippleAlpha() {
bool isClamped;
float stippleSDF = getStippleSDF(isClamped);
float antiAliasedResult = clamp(stippleSDF * vLineWidth + 0.5, 0.0, 1.0);
return isClamped ? floor(antiAliasedResult + 0.5) : antiAliasedResult;
}`),d.code.add(f.H`
    void discardByStippleAlpha(float stippleAlpha, float threshold) {
     ${(0,f.If)(!O.stippleOffColorEnabled,"if (stippleAlpha < threshold) { discard; }")}
    }

    vec4 blendStipple(vec4 color, float stippleAlpha) {
      return ${O.stippleOffColorEnabled?"mix(color, stippleOffColor, stippleAlpha)":"vec4(color.rgb, color.a * stippleAlpha)"};
    }
  `)}function Q(a){const O=a.stipplePattern;return O?function A(a){if(null==a)return 1;const O=y(a);return Math.floor(O.reduce((L,c)=>L+c))}(a.stipplePattern)/O.pixelRatio:1}const X=.4},1012:(ce,w,s)=>{s.d(w,{r:()=>f});var D=s(68681),M=s(7741),U=s(82374),p=s(24493),h=s(65207);function f(S,I){const R=S.vertex;(0,M.Nz)(R),null==R.uniforms.get("markerScale")&&R.constants.add("markerScale","float",1),R.constants.add("markerSizePerLineWidth","float",D.PV).code.add(p.H`float getLineWidth() {
return max(getSize(), 1.0) * pixelRatio;
}
float getScreenMarkerSize() {
return markerSizePerLineWidth * markerScale * getLineWidth();
}`),I.space===h.lM.World&&(R.constants.add("maxSegmentLengthFraction","float",.45),R.uniforms.add(new U.U("perRenderPixelRatio",l=>l.camera.perRenderPixelRatio)),R.code.add(p.H`bool areWorldMarkersHidden(vec4 pos, vec4 other) {
vec3 midPoint = mix(pos.xyz, other.xyz, 0.5);
float distanceToCamera = length(midPoint);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
float worldMarkerSize = getScreenMarkerSize() * screenToWorldRatio;
float segmentLen = length(pos.xyz - other.xyz);
return worldMarkerSize > maxSegmentLengthFraction * segmentLen;
}
float getWorldMarkerSize(vec4 pos) {
float distanceToCamera = length(pos.xyz);
float screenToWorldRatio = perRenderPixelRatio * distanceToCamera * 0.5;
return getScreenMarkerSize() * screenToWorldRatio;
}`))}},43745:(ce,w,s)=>{s.d(w,{g:()=>T}),s(3248);var M=s(33894),U=s(28714),p=s(25866),h=s(89141),f=s(23234),S=s(83346),I=s(98176),R=s(36884),l=s(19213),_=s(47756),u=s(42263),E=s(40972),y=s(44323),A=s(51612);class T{constructor(j){this._originSR=j,this._rootOriginId="root/"+(0,M.c)(),this._origins=new Map,this._objects=new Map,this._gridSize=5e5}getOrigin(j){const x=this._origins.get(this._rootOriginId);if(null==x){const c=u.Q.rootOrigin;if(null!=c)return this._origins.set(this._rootOriginId,(0,l.f)(c[0],c[1],c[2],this._rootOriginId)),this.getOrigin(j);const d=(0,l.f)(j[0]+Math.random()-.5,j[1]+Math.random()-.5,j[2]+Math.random()-.5,this._rootOriginId);return this._origins.set(this._rootOriginId,d),d}const N=this._gridSize,oe=Math.round(j[0]/N),Q=Math.round(j[1]/N),X=Math.round(j[2]/N),a=`${oe}/${Q}/${X}`;let O=this._origins.get(a);const L=.5*N;if((0,U.d)(B,j,x.vec3),B[0]=Math.abs(B[0]),B[1]=Math.abs(B[1]),B[2]=Math.abs(B[2]),B[0]<L&&B[1]<L&&B[2]<L){if(O){const c=Math.max(...B);if((0,U.d)(B,j,O.vec3),B[0]=Math.abs(B[0]),B[1]=Math.abs(B[1]),B[2]=Math.abs(B[2]),Math.max(...B)<c)return O}return x}return O||(O=(0,l.f)(oe*N,Q*N,X*N,a),this._origins.set(a,O)),O}_drawOriginBox(j,x=(0,h.fA)(1,1,0,1)){const N=window.view,oe=N._stage,Q=x.toString();if(!this._objects.has(Q)){this._material=new A.W({width:2,color:x}),oe.add(this._material);const m=new y.x(oe,{pickable:!1}),C=new _.B({castShadow:!1});oe.add(C),m.add(C),this._objects.set(Q,C)}const X=this._objects.get(Q),a=[0,1,5,4,0,2,1,7,6,2,0,1,3,7,5,4,6,2,0],O=a.length,L=new Array(3*O),c=new Array,d=.5*this._gridSize;for(let m=0;m<O;m++)L[3*m]=j[0]+(1&a[m]?d:-d),L[3*m+1]=j[1]+(2&a[m]?d:-d),L[3*m+2]=j[2]+(4&a[m]?d:-d),m>0&&c.push(m-1,m);(0,f.projectBuffer)(L,this._originSR,0,L,N.renderSpatialReference,0,O);const v=new R.V(this._material,[[E.r.POSITION,new S.n(L,c,3,!0)]],null,I.X.Line);oe.add(v),X.addGeometry(v)}get test(){}}const B=(0,p.vt)()},19213:(ce,w,s)=>{s.d(w,{f:()=>U});var D=s(25866);class M{constructor(h,f){this.vec3=h,this.id=f}}function U(p,h,f,S){return new M((0,D.fA)(p,h,f),S)}},47756:(ce,w,s)=>{s.d(w,{B:()=>A}),s(3248);var M=s(92771),U=s(62789),p=s(28714),h=s(25866),f=s(83989),S=s(56632),I=s(67496),R=s(43448),l=s(98176),_=s(79622),u=s(65388),E=s(40972),y=s(58309);class A extends R.J{get geometries(){return this._geometries}get transformation(){return this._transformation??U.zK}set transformation(a){this._transformation=(0,M.C)(this._transformation??(0,U.vt)(),a),this._invalidateBoundingVolume(),this._emit("transformationChanged",this)}get shaderTransformation(){return this._shaderTransformation}set shaderTransformation(a){this._shaderTransformation=a?(0,M.C)(this._shaderTransformation??(0,U.vt)(),a):null,this._invalidateBoundingVolume(),this._emit("shaderTransformationChanged",this)}get effectiveTransformation(){return this.shaderTransformation??this.transformation}constructor(a={}){super(),this.type=l.X.Object,this._shaderTransformation=null,this._parentLayer=null,this._visible=!0,this.castShadow=a.castShadow??!0,this.usesVerticalDistanceToGround=a.usesVerticalDistanceToGround??!1,this.graphicUid=a.graphicUid,this.layerUid=a.layerUid,a.isElevationSource&&(this.lastValidElevationBB=new T),this._geometries=a.geometries?Array.from(a.geometries):new Array}dispose(){this._geometries.length=0}get parentLayer(){return this._parentLayer}set parentLayer(a){(0,u.vA)(null==this._parentLayer||null==a,"Object3D can only be added to a single Layer"),this._parentLayer=a}addGeometry(a){a.visible=this._visible,this._geometries.push(a),this._emit("geometryAdded",{object:this,geometry:a}),this._invalidateBoundingVolume()}removeGeometry(a){const O=this._geometries.splice(a,1)[0];O&&(this._emit("geometryRemoved",{object:this,geometry:O}),this._invalidateBoundingVolume())}removeAllGeometries(){for(;this._geometries.length>0;)this.removeGeometry(0)}geometryVertexAttributeUpdated(a,O,L=!1){this._emit("attributesChanged",{object:this,geometry:a,attribute:O,sync:L}),(0,E.b)(O)&&this._invalidateBoundingVolume()}get visible(){return this._visible}set visible(a){if(this._visible!==a){this._visible=a;for(const O of this._geometries)O.visible=this._visible;this._emit("visibilityChanged",this)}}maskOccludee(){const a=new _.p;for(const O of this._geometries)O.occludees=(0,y.Ci)(O.occludees,a);return this._emit("occlusionChanged",this),a}removeOcclude(a){for(const O of this._geometries)O.occludees=(0,y.PC)(O.occludees,a);this._emit("occlusionChanged",this)}highlight(a){const O=new _.h(a);for(const L of this._geometries)L.addHighlight(O);return this._emit("highlightChanged",this),O}removeHighlight(a){for(const O of this._geometries)O.removeHighlight(a);this._emit("highlightChanged",this)}removeStateID(a){a.channel===I.Mg.Highlight?this.removeHighlight(a):this.removeOcclude(a)}getCombinedStaticTransformation(a,O){return(0,M.lw)(O,this.transformation,a.transformation)}getCombinedShaderTransformation(a,O=(0,U.vt)()){return(0,M.lw)(O,this.effectiveTransformation,a.transformation)}get boundingVolumeWorldSpace(){return this._bvWorldSpace||(this._bvWorldSpace=this._bvWorldSpace||new B,this._validateBoundingVolume(this._bvWorldSpace,Q.WorldSpace)),this._bvWorldSpace}get boundingVolumeObjectSpace(){return this._bvObjectSpace||(this._bvObjectSpace=this._bvObjectSpace||new B,this._validateBoundingVolume(this._bvObjectSpace,Q.ObjectSpace)),this._bvObjectSpace}_validateBoundingVolume(a,O){const L=O===Q.ObjectSpace;for(const c of this._geometries){const d=c.boundingInfo;d&&g(d,a,L?c.transformation:this.getCombinedShaderTransformation(c))}(0,p.m)((0,f.a)(a.bounds),a.min,a.max,.5);for(const c of this._geometries){const d=c.boundingInfo;if(null==d)continue;const v=L?c.transformation:this.getCombinedShaderTransformation(c),m=(0,S.hG)(v);(0,p.t)(oe,d.center,v);const C=(0,p.j)(oe,(0,f.a)(a.bounds));a.bounds[3]=Math.max(a.bounds[3],C+d.radius*m)}}_invalidateBoundingVolume(){const a=this._bvWorldSpace?.bounds;this._bvObjectSpace=this._bvWorldSpace=void 0,this._parentLayer&&a&&this._parentLayer.notifyObjectBBChanged(this,a)}_emit(a,O){this._parentLayer&&this._parentLayer.events.emit(a,O)}get test(){}}class T{constructor(){this.min=(0,h.fA)(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),this.max=(0,h.fA)(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE)}isEmpty(){return this.max[0]<this.min[0]&&this.max[1]<this.min[1]&&this.max[2]<this.min[2]}}class B extends T{constructor(){super(...arguments),this.bounds=(0,f.c)()}}function g(X,a,O){const L=X.bbMin,c=X.bbMax;if((0,M.tZ)(O)){const d=(0,p.i)(j,O[12],O[13],O[14]);(0,p.g)(x,L,d),(0,p.g)(N,c,d);for(let v=0;v<3;++v)a.min[v]=Math.min(a.min[v],x[v]),a.max[v]=Math.max(a.max[v],N[v])}else if((0,p.t)(x,L,O),(0,p.p)(L,c))for(let d=0;d<3;++d)a.min[d]=Math.min(a.min[d],x[d]),a.max[d]=Math.max(a.max[d],x[d]);else{(0,p.t)(N,c,O);for(let d=0;d<3;++d)a.min[d]=Math.min(a.min[d],x[d],N[d]),a.max[d]=Math.max(a.max[d],x[d],N[d]);for(let d=0;d<3;++d){(0,p.c)(x,L),(0,p.c)(N,c),x[d]=c[d],N[d]=L[d],(0,p.t)(x,x,O),(0,p.t)(N,N,O);for(let v=0;v<3;++v)a.min[v]=Math.min(a.min[v],x[v],N[v]),a.max[v]=Math.max(a.max[v],x[v],N[v])}}}const j=(0,h.vt)(),x=(0,h.vt)(),N=(0,h.vt)(),oe=(0,h.vt)();var Q,X;(X=Q||(Q={}))[X.WorldSpace=0]="WorldSpace",X[X.ObjectSpace=1]="ObjectSpace"},19451:(ce,w,s)=>{var D,M;s.d(w,{q:()=>D}),(M=D||(D={}))[M.ASYNC=0]="ASYNC",M[M.SYNC=1]="SYNC"},44323:(ce,w,s)=>{s.d(w,{x:()=>l});var D=s(42425),M=s(86807),U=s(11432),p=s(12438),h=s(43448),f=s(98176);const S=["layerObjectAdded","layerObjectRemoved","layerObjectsAdded","layerObjectsRemoved","transformationChanged","shaderTransformationChanged","visibilityChanged","occlusionChanged","highlightChanged","geometryAdded","geometryRemoved","attributesChanged"];var I=s(83926),R=s(19451);class l extends h.J{constructor(E,y,A=""){super(),this.stage=E,this.apiLayerUid=A,this.type=f.X.Layer,this.events=new D.A,this.visible=!0,this.sliceable=!1,this._objectsAdded=new p.A,this._handles=new M.A,this._objects=new p.A,this._pickable=!0,this.visible=y?.visible??!0,this._pickable=y?.pickable??!0,this.updatePolicy=y?.updatePolicy??R.q.ASYNC,this._disableOctree=y?.disableOctree??!1,E.add(this);for(const T of S)this._handles.add(this.events.on(T,B=>E.handleEvent(T,B)))}destroy(){this._handles.size&&(this._handles.destroy(),this.stage.remove(this),this.invalidateSpatialQueryAccelerator())}get objects(){return this._objects}set pickable(E){this._pickable=E}get pickable(){return this._pickable&&this.visible}add(E){this._objects.push(E),E.parentLayer=this,this.events.emit("layerObjectAdded",{layer:this,object:E}),null!=this._octree&&this._objectsAdded.push(E)}remove(E){this._objects.removeUnordered(E)&&(E.parentLayer=null,this.events.emit("layerObjectRemoved",{layer:this,object:E}),null!=this._octree&&(this._objectsAdded.removeUnordered(E)||this._octree.remove([E])))}addMany(E){this._objects.pushArray(E);for(const y of E)y.parentLayer=this;this.events.emit("layerObjectsAdded",{layer:this,objects:E}),null!=this._octree&&this._objectsAdded.pushArray(E)}removeMany(E){const y=new Array;if(this._objects.removeUnorderedMany(E,E.length,y),0!==y.length){for(const A of y)A.parentLayer=null;if(this.events.emit("layerObjectsRemoved",{layer:this,objects:y}),null!=this._octree){for(let A=0;A<y.length;)this._objectsAdded.removeUnordered(y[A])?(y[A]=y[y.length-1],y.length-=1):++A;this._octree.remove(y)}}}sync(){this.updatePolicy!==R.q.SYNC&&this.stage.syncLayer(this.id)}notifyObjectBBChanged(E,y){null==this._octree||this._objectsAdded.includes(E)||this._octree.update(E,y)}getSpatialQueryAccelerator(){return null==this._octree&&this._objects.length>50&&!this._disableOctree?(this._octree=new I.A(E=>E.boundingVolumeWorldSpace.bounds),this._octree.add(this._objects.data,this._objects.length)):null!=this._octree&&this._objectsAdded.length>0&&(this._octree.add(this._objectsAdded.data,this._objectsAdded.length),this._objectsAdded.clear()),this._octree}invalidateSpatialQueryAccelerator(){this._octree=(0,U.pR)(this._octree),this._objectsAdded.clear()}}},42263:(ce,w,s)=>{s.d(w,{G:()=>D,Q:()=>M});const D={stableRendering:!1},M={rootOrigin:null}},51612:(ce,w,s)=>{s.d(w,{W:()=>se});var D=s(35150),M=s(69287),U=s(67685),p=s(83953),h=s(28714),f=s(25866),S=s(89141),I=s(91421),R=s(71548),l=s(93617),_=s(48499),u=s(74567),E=s(12335),y=s(91074),A=s(50957),T=s(55128),B=s(65388),g=s(40972),j=s(59642),x=s(65207),N=s(16949),Q=(s(3248),s(11556)),X=s(18110),a=s(96443),O=s(14356),L=s(54501),c=s(50915),d=s(41396);class v extends X.w{constructor(P,b){super(P,b,new Q.$(N.R,()=>s.e(7307).then(s.bind(s,17307))),C),this.primitiveType=b.wireframe?c.WR.LINES:c.WR.TRIANGLE_STRIP}_makePipelineState(P,b){const{oitPass:H,output:te,hasOccludees:le,hasPolygonOffset:Pe}=P,J=H===a.Y.NONE,W=H===a.Y.FrontFace;return(0,d.Ey)({blending:(0,u.RN)(te)?(0,O.Yf)(H):null,depthTest:{func:(0,O.K_)(H)},depthWrite:(0,O.z5)(P),drawBuffers:te===u.V.Depth?{buffers:[c.Hr.NONE]}:(0,O.m6)(H,te),colorWrite:d.kn,stencilWrite:le?L.v0:null,stencilTest:le?b?L.a9:L.qh:null,polygonOffset:J||W?Pe?m:null:O.SE})}initializePipeline(P){if(P.occluder){const b=P.hasPolygonOffset?m:null;this._occluderPipelineTransparent=(0,d.Ey)({blending:d.Ky,polygonOffset:b,depthTest:L.sf,depthWrite:null,colorWrite:d.kn,stencilWrite:null,stencilTest:L.mK,drawBuffers:P.output===u.V.Depth?{buffers:[c.Hr.NONE]}:null}),this._occluderPipelineOpaque=(0,d.Ey)({blending:d.Ky,polygonOffset:b,depthTest:L.sf,depthWrite:null,colorWrite:d.kn,stencilWrite:L.r8,stencilTest:L.I$,drawBuffers:P.output===u.V.Depth?{buffers:[c.Hr.NONE]}:null}),this._occluderPipelineMaskWrite=(0,d.Ey)({blending:null,polygonOffset:b,depthTest:L.m,depthWrite:null,colorWrite:null,stencilWrite:L.v0,stencilTest:L.a9,drawBuffers:P.output===u.V.Depth?{buffers:[c.Hr.NONE]}:null})}return this._occludeePipeline=this._makePipelineState(P,!0),this._makePipelineState(P,!1)}getPipeline(P,b){if(P)return this._occludeePipeline;switch(b){case T.N.TRANSPARENT_OCCLUDER_MATERIAL:return this._occluderPipelineTransparent??super.getPipeline();case T.N.OCCLUDER_MATERIAL:return this._occluderPipelineOpaque??super.getPipeline();default:return this._occluderPipelineMaskWrite??super.getPipeline()}}}const m={factor:0,units:-4},C=new Map([[g.r.POSITION,0],[g.r.PREVPOSITION,1],[g.r.NEXTPOSITION,2],[g.r.SUBDIVISIONFACTOR,3],[g.r.UV0,4],[g.r.COLOR,5],[g.r.COLORFEATUREATTRIBUTE,5],[g.r.SIZE,6],[g.r.SIZEFEATUREATTRIBUTE,6],[g.r.OPACITYFEATUREATTRIBUTE,7],[g.r.OBJECTANDLAYERIDCOLOR,8]]);var z,Y,k=s(18501),V=s(28700);(Y=z||(z={}))[Y.LEFT_JOIN_START=-2]="LEFT_JOIN_START",Y[Y.LEFT_JOIN_END=-1]="LEFT_JOIN_END",Y[Y.LEFT_CAP_START=-4]="LEFT_CAP_START",Y[Y.LEFT_CAP_END=-5]="LEFT_CAP_END",Y[Y.RIGHT_JOIN_START=2]="RIGHT_JOIN_START",Y[Y.RIGHT_JOIN_END=1]="RIGHT_JOIN_END",Y[Y.RIGHT_CAP_START=4]="RIGHT_CAP_START",Y[Y.RIGHT_CAP_END=5]="RIGHT_CAP_END";class se extends A.im{constructor(P){super(P,re),this._configuration=new k.Q,this.vertexAttributeLocations=C,this.produces=new Map([[T.N.OPAQUE_MATERIAL,b=>(0,u.CL)(b)||(0,u.RN)(b)&&this.parameters.renderOccluded===A.m$.OccludeAndTransparentStencil],[T.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,b=>(0,u.eh)(b)],[T.N.OCCLUDER_MATERIAL,b=>(0,u.T2)(b)&&this.parameters.renderOccluded===A.m$.OccludeAndTransparentStencil],[T.N.TRANSPARENT_OCCLUDER_MATERIAL,b=>(0,u.T2)(b)&&this.parameters.renderOccluded===A.m$.OccludeAndTransparentStencil],[T.N.TRANSPARENT_MATERIAL,b=>(0,u.RN)(b)&&this.parameters.writeDepth&&this.parameters.renderOccluded!==A.m$.OccludeAndTransparentStencil],[T.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,b=>(0,u.RN)(b)&&!this.parameters.writeDepth&&this.parameters.renderOccluded!==A.m$.OccludeAndTransparentStencil],[T.N.DRAPED_MATERIAL,b=>(0,u.i3)(b)]])}getConfiguration(P,b){this._configuration.output=P,this._configuration.oitPass=b.oitPass,this._configuration.draped=b.slot===T.N.DRAPED_MATERIAL;const H=null!=this.parameters.stipplePattern&&P!==u.V.Highlight;return this._configuration.stippleEnabled=H,this._configuration.stippleOffColorEnabled=H&&null!=this.parameters.stippleOffColor,this._configuration.stipplePreferContinuous=H&&this.parameters.stipplePreferContinuous,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.roundJoins="round"===this.parameters.join,this._configuration.capType=this.parameters.cap,this._configuration.applyMarkerOffset=null!=this.parameters.markerParameters&&function Oe(Y){return Y.anchor===x.kJ.Tip&&Y.hideOnShortSegments&&"begin-end"===Y.placement&&Y.worldSpace}(this.parameters.markerParameters),this._configuration.hasPolygonOffset=this.parameters.hasPolygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.vvOpacity=!!this.parameters.vvOpacity,this._configuration.innerColorEnabled=this.parameters.innerWidth>0&&null!=this.parameters.innerColor,this._configuration.falloffEnabled=this.parameters.falloff>0,this._configuration.hasOccludees=b.hasOccludees,this._configuration.occluder=this.parameters.renderOccluded===A.m$.OccludeAndTransparentStencil,this._configuration.terrainDepthTest=b.terrainDepthTest&&(0,u.RN)(P),this._configuration.cullAboveTerrain=b.cullAboveTerrain,this._configuration.wireframe=this.parameters.wireframe,this._configuration}get visible(){return this.parameters.color[3]>=V.Q||null!=this.parameters.stipplePattern&&(this.parameters.stippleOffColor?.[3]??0)>V.Q}intersectDraped({attributes:P,screenToWorldRatio:b},H,te,le,Pe,J){if(!te.options.selectionMode)return;const W=P.get(g.r.SIZE);let F=this.parameters.width;if(this.parameters.vvSize){const ge=P.get(g.r.SIZEFEATUREATTRIBUTE).data[0];F*=(0,M.qE)(this.parameters.vvSize.offset[0]+ge*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else W&&(F*=W.data[0]);const G=le[0],ve=le[1],he=(F/2+4)*b;let Re=Number.MAX_VALUE,xe=0;const fe=P.get(g.r.POSITION).data,Ie=_e(this.parameters,P)?fe.length-2:fe.length-5;for(let ge=0;ge<Ie;ge+=3){const ne=fe[ge],De=fe[ge+1],q=(ge+3)%fe.length,Se=G-ne,Ee=ve-De,K=fe[q]-ne,be=fe[q+1]-De,pe=(0,M.qE)((K*Se+be*Ee)/(K*K+be*be),0,1),We=K*pe-Se,me=be*pe-Ee,Ue=We*We+me*me;Ue<Re&&(Re=Ue,xe=ge/3)}Re<he*he&&Pe(J.dist,J.normal,xe,!1)}intersect(P,b,H,te,le,Pe){if(!H.options.selectionMode||!P.visible)return;if(!(0,B.zH)(b))return void D.A.getLogger("esri.views.3d.webgl-engine.materials.RibbonLineMaterial").error("intersection assumes a translation-only matrix");const J=P.attributes,W=J.get(g.r.POSITION).data;let F=this.parameters.width;if(this.parameters.vvSize){const ne=J.get(g.r.SIZEFEATUREATTRIBUTE).data[0];F*=(0,M.qE)(this.parameters.vvSize.offset[0]+ne*this.parameters.vvSize.factor[0],this.parameters.vvSize.minSize[0],this.parameters.vvSize.maxSize[0])}else J.has(g.r.SIZE)&&(F*=J.get(g.r.SIZE).data[0]);const G=H.camera,ve=we;(0,p.C)(ve,H.point);const he=F*G.pixelRatio/2+4*G.pixelRatio;(0,h.i)(je[0],ve[0]-he,ve[1]+he,0),(0,h.i)(je[1],ve[0]+he,ve[1]+he,0),(0,h.i)(je[2],ve[0]+he,ve[1]-he,0),(0,h.i)(je[3],ve[0]-he,ve[1]-he,0);for(let ne=0;ne<4;ne++)if(!G.unprojectFromRenderScreen(je[ne],Ce[ne]))return;(0,l.Cr)(G.eye,Ce[0],Ce[1],He),(0,l.Cr)(G.eye,Ce[1],Ce[2],Ve),(0,l.Cr)(G.eye,Ce[2],Ce[3],Ke),(0,l.Cr)(G.eye,Ce[3],Ce[0],Ge);let Re=Number.MAX_VALUE,xe=0;const fe=_e(this.parameters,J)?W.length-2:W.length-5;for(let ne=0;ne<fe;ne+=3){ie[0]=W[ne]+b[12],ie[1]=W[ne+1]+b[13],ie[2]=W[ne+2]+b[14];const De=(ne+3)%W.length;if(Z[0]=W[De]+b[12],Z[1]=W[De+1]+b[13],Z[2]=W[De+2]+b[14],(0,l.mN)(He,ie)<0&&(0,l.mN)(He,Z)<0||(0,l.mN)(Ve,ie)<0&&(0,l.mN)(Ve,Z)<0||(0,l.mN)(Ke,ie)<0&&(0,l.mN)(Ke,Z)<0||(0,l.mN)(Ge,ie)<0&&(0,l.mN)(Ge,Z)<0)continue;if(G.projectToRenderScreen(ie,$),G.projectToRenderScreen(Z,Le),$[2]<0&&Le[2]>0){(0,h.d)(Te,ie,Z);const Se=G.frustum,Ee=-(0,l.mN)(Se[I.FB.NEAR],ie)/(0,h.f)(Te,(0,l.Qj)(Se[I.FB.NEAR]));(0,h.h)(Te,Te,Ee),(0,h.g)(ie,ie,Te),G.projectToRenderScreen(ie,$)}else if($[2]>0&&Le[2]<0){(0,h.d)(Te,Z,ie);const Se=G.frustum,Ee=-(0,l.mN)(Se[I.FB.NEAR],Z)/(0,h.f)(Te,(0,l.Qj)(Se[I.FB.NEAR]));(0,h.h)(Te,Te,Ee),(0,h.g)(Z,Z,Te),G.projectToRenderScreen(Z,Le)}else if($[2]<0&&Le[2]<0)continue;$[2]=0,Le[2]=0;const q=(0,R.kb)((0,R.Cr)($,Le,Ye),ve);q<Re&&(Re=q,(0,h.c)($e,ie),(0,h.c)(Ze,Z),xe=ne/3)}const Ie=H.rayBegin,ge=H.rayEnd;if(Re<he*he){let ne=Number.MAX_VALUE;if((0,R.ld)((0,R.Cr)($e,Ze,Ye),(0,R.Cr)(Ie,ge,Qe),Ae)){(0,h.d)(Ae,Ae,Ie);const De=(0,h.l)(Ae);(0,h.h)(Ae,Ae,1/De),ne=De/(0,h.j)(Ie,ge)}Pe(ne,Ae,xe,!1)}}get _layout(){const P=(0,_.BP)().vec3f(g.r.POSITION).vec3f(g.r.PREVPOSITION).vec3f(g.r.NEXTPOSITION).f32(g.r.SUBDIVISIONFACTOR).vec2f(g.r.UV0);return P.f32(this.parameters.vvSize?g.r.SIZEFEATUREATTRIBUTE:g.r.SIZE),this.parameters.vvColor?P.f32(g.r.COLORFEATUREATTRIBUTE):P.vec4f(g.r.COLOR),this.parameters.vvOpacity&&P.f32(g.r.OPACITYFEATUREATTRIBUTE),(0,E.E)()&&P.vec4u8(g.r.OBJECTANDLAYERIDCOLOR),P}createBufferWriter(){return new ue(this._layout,this.parameters)}createGLMaterial(P){return new ee(P)}validateParameters(P){"miter"!==P.join&&(P.miterLimit=0),null!=P.markerParameters&&(P.markerScale=P.markerParameters.width/P.width)}}class ee extends y.A{constructor(){super(...arguments),this._stipplePattern=null}dispose(){super.dispose(),this._stippleTextures.release(this._stipplePattern),this._stipplePattern=null}beginSlot(P){const b=this._material.parameters.stipplePattern;return this._stipplePattern!==b&&(this._material.setParameters({stippleTexture:this._stippleTextures.swap(b,this._stipplePattern)}),this._stipplePattern=b),this.getTechnique(v,P)}}class re extends j.S{constructor(){super(...arguments),this.width=0,this.color=S.Un,this.join="miter",this.cap=k.x.BUTT,this.miterLimit=5,this.writeDepth=!0,this.hasPolygonOffset=!1,this.stippleTexture=null,this.stipplePreferContinuous=!0,this.markerParameters=null,this.markerScale=1,this.hasSlicePlane=!1,this.vvFastUpdate=!1,this.isClosed=!1,this.falloff=0,this.innerWidth=0,this.wireframe=!1}get transparent(){return this.color[3]<1||null!=this.stipplePattern&&(this.stippleOffColor?.[3]??0)<1}}class ue{constructor(P,b){this.vertexBufferLayout=P,this._parameters=b,this.numJoinSubdivisions=0;const H=b.stipplePattern?1:0;switch(this._parameters.join){case"miter":case"bevel":this.numJoinSubdivisions=H;break;case"round":this.numJoinSubdivisions=N.r+H}}_isClosed(P){return _e(this._parameters,P)}allocate(P){return this.vertexBufferLayout.createBuffer(P)}elementCount(P){const H=P.get(g.r.POSITION).indices.length/2+1,te=this._isClosed(P);let le=te?2:4;return le+=((te?H:H-1)-(te?0:1))*(2*this.numJoinSubdivisions+4),le+=2,this._parameters.wireframe&&(le=2+4*(le-2)),le}write(P,b,H,te,le,Pe){const J=Xe,W=ke,F=qe,G=H.get(g.r.POSITION),ve=G.indices,he=G.data.length/3,Re=H.get(g.r.DISTANCETOSTART)?.data;ve&&ve.length!==2*(he-1)&&console.warn("RibbonLineMaterial does not support indices");const xe=H.get(g.r.SIZEFEATUREATTRIBUTE)?.data[0]??H.get(g.r.SIZE)?.data[0]??1;let fe=[1,1,1,1],Ie=0;const ge=this.vertexBufferLayout.fields.has(g.r.COLORFEATUREATTRIBUTE);ge?Ie=H.get(g.r.COLORFEATUREATTRIBUTE).data[0]:H.has(g.r.COLOR)&&(fe=H.get(g.r.COLOR).data);const ne=this.vertexBufferLayout.fields.has(g.r.OPACITYFEATUREATTRIBUTE),De=ne?H.get(g.r.OPACITYFEATUREATTRIBUTE).data[0]:0,q=new Float32Array(le.buffer),Se=(0,E.E)()?new Uint8Array(le.buffer):null,Ee=this.vertexBufferLayout.stride/4;let K=Pe*Ee;const be=K;let pe=0;const We=Re?(de,ye,Me)=>pe=Re[Me]:(de,ye,Me)=>pe+=(0,h.j)(de,ye),me=(de,ye,Me,Be,Ne,et,tt)=>{if(q[K++]=ye[0],q[K++]=ye[1],q[K++]=ye[2],q[K++]=de[0],q[K++]=de[1],q[K++]=de[2],q[K++]=Me[0],q[K++]=Me[1],q[K++]=Me[2],q[K++]=Be,q[K++]=tt,q[K++]=Ne,q[K++]=xe,ge)q[K++]=Ie;else{const Fe=Math.min(4*et,fe.length-4);q[K++]=fe[Fe],q[K++]=fe[Fe+1],q[K++]=fe[Fe+2],q[K++]=fe[Fe+3]}ne&&(q[K++]=De),(0,E.E)()&&(te&&(Se[4*K]=te[0],Se[4*K+1]=te[1],Se[4*K+2]=te[2],Se[4*K+3]=te[3]),K++)};K+=Ee,(0,h.i)(W,G.data[0],G.data[1],G.data[2]),P&&(0,h.t)(W,W,P);const Ue=this._isClosed(H);if(Ue){const de=G.data.length-3;(0,h.i)(J,G.data[de],G.data[de+1],G.data[de+2]),P&&(0,h.t)(J,J,P)}else(0,h.i)(F,G.data[3],G.data[4],G.data[5]),P&&(0,h.t)(F,F,P),me(W,W,F,1,z.LEFT_CAP_START,0,0),me(W,W,F,1,z.RIGHT_CAP_START,0,0),(0,h.c)(J,W),(0,h.c)(W,F);const Je=Ue?0:1,ze=Ue?he:he-1;for(let de=Je;de<ze;de++){const ye=(de+1)%he*3;(0,h.i)(F,G.data[ye],G.data[ye+1],G.data[ye+2]),P&&(0,h.t)(F,F,P),We(J,W,de),me(J,W,F,0,z.LEFT_JOIN_END,de,pe),me(J,W,F,0,z.RIGHT_JOIN_END,de,pe);const Me=this.numJoinSubdivisions;for(let Be=0;Be<Me;++Be){const Ne=(Be+1)/(Me+1);me(J,W,F,Ne,z.LEFT_JOIN_END,de,pe),me(J,W,F,Ne,z.RIGHT_JOIN_END,de,pe)}me(J,W,F,1,z.LEFT_JOIN_START,de,pe),me(J,W,F,1,z.RIGHT_JOIN_START,de,pe),(0,h.c)(J,W),(0,h.c)(W,F)}Ue?((0,h.i)(F,G.data[3],G.data[4],G.data[5]),P&&(0,h.t)(F,F,P),pe=We(J,W,ze),me(J,W,F,0,z.LEFT_JOIN_END,Je,pe),me(J,W,F,0,z.RIGHT_JOIN_END,Je,pe)):(pe=We(J,W,ze),me(J,W,W,0,z.LEFT_CAP_END,ze,pe),me(J,W,W,0,z.RIGHT_CAP_END,ze,pe)),ae(q,be+Ee,q,be,Ee),K=ae(q,K-Ee,q,K,Ee),this._parameters.wireframe&&this._addWireframeVertices(le,be,K,Ee)}_addWireframeVertices(P,b,H,te){const le=new Float32Array(P.buffer,H*Float32Array.BYTES_PER_ELEMENT),Pe=new Float32Array(P.buffer,b*Float32Array.BYTES_PER_ELEMENT,H-b);let J=0;const W=F=>J=ae(Pe,F,le,J,te);for(let F=0;F<Pe.length-1;F+=2*te)W(F),W(F+2*te),W(F+1*te),W(F+2*te),W(F+1*te),W(F+3*te)}}function ae(Y,P,b,H,te){for(let le=0;le<te;le++)b[H++]=Y[P++];return H}function _e(Y,P){return!!Y.isClosed&&P.get(g.r.POSITION).indices.length>2}const ie=(0,f.vt)(),Z=(0,f.vt)(),Te=(0,f.vt)(),Ae=(0,f.vt)(),we=(0,f.vt)(),$=(0,U.r_)(),Le=(0,U.r_)(),$e=(0,f.vt)(),Ze=(0,f.vt)(),Ye=(0,R.vt)(),Qe=(0,R.vt)(),Xe=(0,f.vt)(),ke=(0,f.vt)(),qe=(0,f.vt)(),je=[(0,U.r_)(),(0,U.r_)(),(0,U.r_)(),(0,U.r_)()],Ce=[(0,f.vt)(),(0,f.vt)(),(0,f.vt)(),(0,f.vt)()],He=(0,l.vt)(),Ve=(0,l.vt)(),Ke=(0,l.vt)(),Ge=(0,l.vt)()},65207:(ce,w,s)=>{s.d(w,{Dt:()=>I,kJ:()=>S,lM:()=>f});var f,S,R,D=s(8189),M=s(66874),U=s(43167),p=s(55062),h=s(35094);(R=f||(f={}))[R.Draped=0]="Draped",R[R.Screen=1]="Screen",R[R.World=2]="World",R[R.COUNT=3]="COUNT",function(R){R[R.Center=0]="Center",R[R.Tip=1]="Tip",R[R.COUNT=2]="COUNT"}(S||(S={}));class I extends h.E{constructor(){super(...arguments),this.space=f.Screen,this.anchor=S.Center,this.occluder=!1,this.writeDepth=!1,this.hideOnShortSegments=!1,this.hasCap=!1,this.hasTip=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.textureCoordinateType=M.I.None,this.emissionSource=U.ZX.None,this.discardInvisibleFragments=!0,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0,this.objectAndLayerIdColorInstanced=!1}get draped(){return this.space===f.Draped}}(0,D._)([(0,p.W)({count:f.COUNT})],I.prototype,"space",void 0),(0,D._)([(0,p.W)({count:S.COUNT})],I.prototype,"anchor",void 0),(0,D._)([(0,p.W)()],I.prototype,"occluder",void 0),(0,D._)([(0,p.W)()],I.prototype,"writeDepth",void 0),(0,D._)([(0,p.W)()],I.prototype,"hideOnShortSegments",void 0),(0,D._)([(0,p.W)()],I.prototype,"hasCap",void 0),(0,D._)([(0,p.W)()],I.prototype,"hasTip",void 0),(0,D._)([(0,p.W)()],I.prototype,"vvSize",void 0),(0,D._)([(0,p.W)()],I.prototype,"vvColor",void 0),(0,D._)([(0,p.W)()],I.prototype,"vvOpacity",void 0),(0,D._)([(0,p.W)()],I.prototype,"hasOccludees",void 0),(0,D._)([(0,p.W)()],I.prototype,"terrainDepthTest",void 0),(0,D._)([(0,p.W)()],I.prototype,"cullAboveTerrain",void 0)},18501:(ce,w,s)=>{s.d(w,{Q:()=>S,x:()=>f});var f,I,D=s(8189),M=s(66874),U=s(43167),p=s(55062),h=s(35094);(I=f||(f={}))[I.BUTT=0]="BUTT",I[I.SQUARE=1]="SQUARE",I[I.ROUND=2]="ROUND",I[I.COUNT=3]="COUNT";class S extends h.E{constructor(){super(...arguments),this.capType=f.BUTT,this.hasPolygonOffset=!1,this.writeDepth=!1,this.draped=!1,this.stippleEnabled=!1,this.stippleOffColorEnabled=!1,this.stipplePreferContinuous=!0,this.roundJoins=!1,this.applyMarkerOffset=!1,this.vvSize=!1,this.vvColor=!1,this.vvOpacity=!1,this.falloffEnabled=!1,this.innerColorEnabled=!1,this.hasOccludees=!1,this.occluder=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.wireframe=!1,this.discardInvisibleFragments=!1,this.objectAndLayerIdColorInstanced=!1,this.textureCoordinateType=M.I.None,this.emissionSource=U.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.hasSliceTranslatedView=!0}}(0,D._)([(0,p.W)({count:f.COUNT})],S.prototype,"capType",void 0),(0,D._)([(0,p.W)()],S.prototype,"hasPolygonOffset",void 0),(0,D._)([(0,p.W)()],S.prototype,"writeDepth",void 0),(0,D._)([(0,p.W)()],S.prototype,"draped",void 0),(0,D._)([(0,p.W)()],S.prototype,"stippleEnabled",void 0),(0,D._)([(0,p.W)()],S.prototype,"stippleOffColorEnabled",void 0),(0,D._)([(0,p.W)()],S.prototype,"stipplePreferContinuous",void 0),(0,D._)([(0,p.W)()],S.prototype,"roundJoins",void 0),(0,D._)([(0,p.W)()],S.prototype,"applyMarkerOffset",void 0),(0,D._)([(0,p.W)()],S.prototype,"vvSize",void 0),(0,D._)([(0,p.W)()],S.prototype,"vvColor",void 0),(0,D._)([(0,p.W)()],S.prototype,"vvOpacity",void 0),(0,D._)([(0,p.W)()],S.prototype,"falloffEnabled",void 0),(0,D._)([(0,p.W)()],S.prototype,"innerColorEnabled",void 0),(0,D._)([(0,p.W)()],S.prototype,"hasOccludees",void 0),(0,D._)([(0,p.W)()],S.prototype,"occluder",void 0),(0,D._)([(0,p.W)()],S.prototype,"terrainDepthTest",void 0),(0,D._)([(0,p.W)()],S.prototype,"cullAboveTerrain",void 0),(0,D._)([(0,p.W)()],S.prototype,"wireframe",void 0),(0,D._)([(0,p.W)()],S.prototype,"discardInvisibleFragments",void 0),(0,D._)([(0,p.W)()],S.prototype,"objectAndLayerIdColorInstanced",void 0)}}]);