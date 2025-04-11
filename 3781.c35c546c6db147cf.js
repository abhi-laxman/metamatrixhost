"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[3781],{75915:(z,A,e)=>{e.d(A,{D:()=>X,b:()=>q});var s=e(18238),i=e(43208),l=e(74567),E=e(29359),r=e(93877),h=e(20367),n=e(34416),b=e(79052),x=e(67334),u=e(66874),a=e(23388),g=e(17304),T=e(66360),v=e(55388),D=e(28799),t=e(96537),C=e(6413),c=e(44987),M=e(6698),p=e(87522),L=e(9933),_=e(55189),y=e(51734),d=e(63758),j=e(33605),f=e(83475),Z=e(9198),N=e(7741),te=e(88791),Q=e(18356),k=e(65840),S=e(24493),$=e(35089),ae=e(40972),re=e(18597),R=e(43713),B=e(28700);function q(P){const O=new R.N5,{vertex:H,fragment:U,varyings:I}=O,{output:W,normalType:m,offsetBackfaces:K,instancedColor:G,spherical:V,receiveShadows:Y,snowCover:w,pbrMode:ee,textureAlphaPremultiplied:F,instancedDoublePrecision:oe,hasVertexColors:ne,hasVertexTangents:ie,hasColorTexture:le,hasNormalTexture:_e,hasNormalTextureTransform:de,hasColorTextureTransform:ce}=P;if((0,N.NB)(H,P),O.include(b.I),I.add("vpos","vec3"),O.include(j.A,P),O.include(h.B,P),O.include(T.G,P),O.include(d.q2,P),!(0,l.RN)(W))return O.include(v.E,P),O;O.include(d.Sx,P),O.include(d.MU,P),O.include(d.O1,P),O.include(d.QM,P),(0,N.yu)(H,P),O.include(n.Y,P),O.include(r.d,P);const se=m===n.W.Attribute||m===n.W.Compressed;return se&&K&&O.include(i.M),O.include(D.W,P),O.include(g.Mh,P),G&&O.attributes.add(ae.r.INSTANCECOLOR,"vec4"),I.add("vPositionLocal","vec3"),O.include(u.U,P),O.include(s.oD,P),O.include(x.K,P),O.include(a.c,P),H.uniforms.add(new Q.E("externalColor",J=>J.externalColor)),I.add("vcolorExt","vec4"),O.include(y.Z,P),H.main.add(S.H`
    forwardNormalizedVertexColor();
    vcolorExt = externalColor;
    ${(0,S.If)(G,"vcolorExt *= instanceColor * 0.003921568627451;")}
    vcolorExt *= vvColor();
    vcolorExt *= getSymbolColor();
    forwardColorMixMode();

    vpos = getVertexInLocalOriginSpace();
    vPositionLocal = vpos - view[3].xyz;
    vpos = subtractOrigin(vpos);
    ${(0,S.If)(se,"vNormalWorld = dpNormal(vvLocalNormal(normalModel()));")}
    vpos = addVerticalOffset(vpos, localOrigin);
    ${(0,S.If)(ie,"vTangent = dpTransformVertexTangent(tangent);")}
    gl_Position = transformPosition(proj, view, vpos);
    ${(0,S.If)(se&&K,"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);")}

    forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
    forwardLinearDepth();
    forwardTextureCoordinates();
    forwardColorUV();
    forwardNormalUV();
    forwardEmissiveUV();
    forwardOcclusionUV();
    forwardMetallicRoughnessUV();

    if (vcolorExt.a < ${S.H.float(B.Q)}) {
      gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
    }
  `),O.include(C.kA,P),O.include(t.n,P),O.include(f.S,P),O.include(oe?_.G:_.Bz,P),O.fragment.include(E.HQ,P),O.include(re.z,P),(0,N.yu)(U,P),U.uniforms.add(H.uniforms.get("localOrigin"),new te.t("ambient",J=>J.ambient),new te.t("diffuse",J=>J.diffuse),new k.m("opacity",J=>J.opacity),new k.m("layerOpacity",J=>J.layerOpacity)),le&&U.uniforms.add(new $.N("tex",J=>J.texture)),O.include(L._Z,P),O.include(p.c,P),U.include(Z.N),O.include(M.r,P),(0,C.a8)(U),(0,C.eU)(U),(0,c.O4)(U),U.main.add(S.H`
    discardBySlice(vpos);
    discardByTerrainDepth();
    ${le?S.H`
            vec4 texColor = texture(tex, ${ce?"colorUV":"vuv0"});
            ${(0,S.If)(F,"texColor.rgb /= texColor.a;")}
            discardOrAdjustAlpha(texColor);`:S.H`vec4 texColor = vec4(1.0);`}
    shadingParams.viewDirection = normalize(vpos - cameraPosition);
    ${m===n.W.ScreenDerivative?S.H`vec3 normal = screenDerivativeNormal(vPositionLocal);`:S.H`shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
    applyPBRFactors();
    float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

    vec3 posWorld = vpos + localOrigin;

      float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
      float shadow = ${Y?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":(0,S.If)(V,"lightingGlobalFactor * (1.0 - additionalAmbientScale)","0.0")};

    vec3 matColor = max(ambient, diffuse);
    vec3 albedo = mixExternalColor(${(0,S.If)(ne,"vColor.rgb *")} matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
    float opacity_ = layerOpacity * mixExternalOpacity(${(0,S.If)(ne,"vColor.a * ")} opacity, texColor.a, vcolorExt.a, int(colorMixMode));
    ${_e?`mat3 tangentSpace = computeTangentSpace(${ie?"normal":"normal, vpos, vuv0"});\n            vec3 shadingNormal = computeTextureNormal(tangentSpace, ${de?"normalUV":"vuv0"});`:"vec3 shadingNormal = normal;"}
    vec3 normalGround = ${V?"normalize(posWorld);":"vec3(0.0, 0.0, 1.0);"}

    ${(0,S.If)(w,S.H`
          float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
          albedo = mix(albedo, vec3(1), snow);
          shadingNormal = mix(shadingNormal, normal, snow);
          ssao = mix(ssao, 1.0, snow);`)}

    vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

    ${ee===L.A9.Normal||ee===L.A9.Schematic?S.H`
            float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
            ${(0,S.If)(w,S.H`mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);`)}
            vec4 emission = ${w?"mix(getEmissions(), vec4(0.0), snow)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:S.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
    vec4 finalColor = vec4(shadedColor, opacity_);
    outputColorHighlightOID(finalColor, vpos);
  `),O}const X=Object.freeze(Object.defineProperty({__proto__:null,build:q},Symbol.toStringTag,{value:"Module"}))},34187:(z,A,e)=>{e.d(A,{R:()=>re,b:()=>ae});var s=e(18238),i=e(43208),l=e(74567),E=e(29359),r=e(93877),h=e(20367),n=e(34416),b=e(79052),x=e(67334),u=e(66874),a=e(23388),g=e(66360),T=e(55388),v=e(96537),D=e(6413),t=e(44987),C=e(87522),c=e(9933),M=e(55189),p=e(51734),L=e(33605),_=e(83475),y=e(9198),d=e(7741),j=e(88791),f=e(18356),Z=e(65840),N=e(24493),te=e(35089),Q=e(40972),k=e(18597),S=e(43713),$=e(28700);function ae(R){const B=new S.N5,{vertex:q,fragment:X,varyings:P}=B,{output:O,offsetBackfaces:H,instancedColor:U,pbrMode:I,snowCover:W,spherical:m}=R,K=I===c.A9.Normal||I===c.A9.Schematic;if((0,d.NB)(q,R),B.include(b.I),P.add("vpos","vec3"),B.include(L.A,R),B.include(h.B,R),B.include(g.G,R),B.include(p.Z,R),(0,l.RN)(O)&&((0,d.yu)(B.vertex,R),B.include(n.Y,R),B.include(r.d,R),H&&B.include(i.M),U&&B.attributes.add(Q.r.INSTANCECOLOR,"vec4"),P.add("vNormalWorld","vec3"),P.add("localvpos","vec3"),B.include(u.U,R),B.include(s.oD,R),B.include(x.K,R),B.include(a.c,R),q.uniforms.add(new f.E("externalColor",G=>G.externalColor)),P.add("vcolorExt","vec4"),q.main.add(N.H`
      forwardNormalizedVertexColor();
      vcolorExt = externalColor;
      ${(0,N.If)(U,"vcolorExt *= instanceColor * 0.003921568627451;")}
      vcolorExt *= vvColor();
      vcolorExt *= getSymbolColor();
      forwardColorMixMode();

      bool alphaCut = vcolorExt.a < ${N.H.float($.Q)};
      vpos = getVertexInLocalOriginSpace();
      localvpos = vpos - view[3].xyz;
      vpos = subtractOrigin(vpos);
      vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
      vpos = addVerticalOffset(vpos, localOrigin);
      vec4 basePosition = transformPosition(proj, view, vpos);

      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      forwardLinearDepth();
      forwardTextureCoordinates();

      gl_Position = alphaCut ? vec4(1e38, 1e38, 1e38, 1.0) :
      ${(0,N.If)(H,"offsetBackfacingClipPosition(basePosition, vpos, vNormalWorld, cameraPosition);","basePosition;")}
    `)),(0,l.RN)(O)){const{hasColorTexture:G,hasColorTextureTransform:V,receiveShadows:Y}=R;B.include(D.kA,R),B.include(v.n,R),B.include(_.S,R),B.include(R.instancedDoublePrecision?M.G:M.Bz,R),B.fragment.include(E.HQ,R),B.include(k.z,R),(0,d.yu)(B.fragment,R),(0,t.Gc)(X),(0,D.a8)(X),(0,D.eU)(X),X.uniforms.add(q.uniforms.get("localOrigin"),q.uniforms.get("view"),new j.t("ambient",w=>w.ambient),new j.t("diffuse",w=>w.diffuse),new Z.m("opacity",w=>w.opacity),new Z.m("layerOpacity",w=>w.layerOpacity)),G&&X.uniforms.add(new te.N("tex",w=>w.texture)),B.include(c._Z,R),B.include(C.c,R),X.include(y.N),(0,t.O4)(X),X.main.add(N.H`
      discardBySlice(vpos);
      discardByTerrainDepth();
      vec4 texColor = ${G?`texture(tex, ${V?"colorUV":"vuv0"})`:" vec4(1.0)"};
      ${(0,N.If)(G,`${(0,N.If)(R.textureAlphaPremultiplied,"texColor.rgb /= texColor.a;")}\n        discardOrAdjustAlpha(texColor);`)}
      vec3 viewDirection = normalize(vpos - cameraPosition);
      applyPBRFactors();
      float ssao = evaluateAmbientOcclusionInverse();
      ssao *= getBakedOcclusion();

      float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
      vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
      float shadow = ${Y?"max(lightingGlobalFactor * (1.0 - additionalAmbientScale), readShadowMap(vpos, linearDepth))":m?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};
      vec3 matColor = max(ambient, diffuse);
      ${R.hasVertexColors?N.H`vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:N.H`vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
             float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
      ${(0,N.If)(W,"albedo = mix(albedo, vec3(1), 0.9);")}
      ${N.H`vec3 shadingNormal = normalize(vNormalWorld);
             albedo *= 1.2;
             vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
             float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
             float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
             float treeRadialFalloff = vColor.r;
             float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
             additionalLight += backLightFactor * mainLightIntensity;`}
      ${(0,N.If)(K,`vec3 normalGround = ${m?"normalize(vpos + localOrigin)":"vec3(0.0, 0.0, 1.0)"};`)}
      ${K?N.H`float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                 ${(0,N.If)(W,N.H`mrr = vec3(0.0, 1.0, 0.04);`)}
            vec4 emission = ${W?"vec4(0.0)":"getEmissions()"};
            vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:N.H`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
      vec4 finalColor = vec4(shadedColor, opacity_);
      outputColorHighlightOID(finalColor, vpos);`)}return B.include(T.E,R),B}const re=Object.freeze(Object.defineProperty({__proto__:null,build:ae},Symbol.toStringTag,{value:"Module"}))},30493:(z,A,e)=>{e.d(A,{S:()=>C,b:()=>v,g:()=>D});var s=e(83953),i=e(45475),l=e(65152),E=e(85340),r=e(8733),h=e(94804),n=e(99286),b=e(82374),x=e(65840),u=e(24493),a=e(35089),g=e(43713);const T=16;function v(){const c=new g.N5,M=c.fragment;return c.include(l.c),c.include(r.Ir),M.include(E.E),M.uniforms.add(new b.U("radius",p=>D(p.camera))).code.add(u.H`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),M.code.add(u.H`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),M.uniforms.add(new a.N("normalMap",p=>p.normalTexture),new a.N("depthMap",p=>p.depthTexture),new x.m("projScale",p=>p.projScale),new a.N("rnm",p=>p.noiseTexture),new n.G("rnmScale",(p,L)=>(0,s.hZ)(t,L.camera.fullWidth/p.noiseTexture.descriptor.width,L.camera.fullHeight/p.noiseTexture.descriptor.height)),new x.m("intensity",p=>p.intensity),new h.E("screenSize",p=>(0,s.hZ)(t,p.camera.fullWidth,p.camera.fullHeight))),c.outputs.add("fragOcclusion","float"),M.main.add(u.H`
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${u.H.int(T)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${u.H.int(T)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A * A * A * A) / 2.2;

      fragOcclusion = A;`),c}function D(c){return Math.max(10,20*c.computeScreenPixelSizeAtDist(Math.abs(4*c.relativeElevation)))}const t=(0,i.vt)(),C=Object.freeze(Object.defineProperty({__proto__:null,build:v,getRadius:D},Symbol.toStringTag,{value:"Module"}))},84254:(z,A,e)=>{e.d(A,{S:()=>a,b:()=>u});var s=e(65152),i=e(85340),l=e(15683),E=e(65840),r=e(24493),h=e(91784),n=e(35089),b=e(43713);const x=4;function u(){const g=new b.N5,T=g.fragment;g.include(s.c);const v=(x+1)/2,D=1/(2*v*v);return T.include(i.E),T.uniforms.add(new n.N("depthMap",t=>t.depthTexture),new h.o("tex",t=>t.colorTexture),new l.t("blurSize",t=>t.blurSize),new E.m("projScale",(t,C)=>{const c=C.camera.distance;return c>5e4?Math.max(0,t.projScale-(c-5e4)):t.projScale})),T.code.add(r.H`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${r.H.float(D)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),g.outputs.add("fragBlur","float"),T.main.add(r.H`
    float b = 0.0;
    float w_total = 0.0;

    float center_d = linearDepthFromTexture(depthMap, uv);

    float sharpness = -0.05 * projScale / center_d;
    for (int r = -${r.H.int(x)}; r <= ${r.H.int(x)}; ++r) {
      float rf = float(r);
      vec2 uvOffset = uv + rf * blurSize;
      blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
    }
    fragBlur = b / w_total;`),g}const a=Object.freeze(Object.defineProperty({__proto__:null,build:u},Symbol.toStringTag,{value:"Module"}))},10136:(z,A,e)=>{e.d(A,{Eb:()=>l,_j:()=>E,k5:()=>i});var i,x,s=e(69287);function l(x){switch(x){case"multiply":default:return i.Multiply;case"ignore":return i.Ignore;case"replace":return i.Replace;case"tint":return i.Tint}}function E(x,u,a){if(null==x||u===i.Ignore)return a[0]=255,a[1]=255,a[2]=255,void(a[3]=255);const g=(0,s.qE)(Math.round(x[3]*h),0,h),T=0===g||u===i.Tint?0:u===i.Replace?n:b;a[0]=(0,s.qE)(Math.round(x[0]*r),0,r),a[1]=(0,s.qE)(Math.round(x[1]*r),0,r),a[2]=(0,s.qE)(Math.round(x[2]*r),0,r),a[3]=g+T}(x=i||(i={}))[x.Multiply=1]="Multiply",x[x.Ignore=2]="Ignore",x[x.Replace=3]="Replace",x[x.Tint=4]="Tint";const r=255,h=85,n=h,b=2*h},61079:(z,A,e)=>{e.d(A,{A:()=>l});var s=e(10136),i=e(24493);function l(E){E.vertex.code.add(i.H`
    vec4 decodeSymbolColor(vec4 symbolColor, out int colorMixMode) {
      float symbolAlpha = 0.0;

      const float maxTint = 85.0;
      const float maxReplace = 170.0;
      const float scaleAlpha = 3.0;

      if (symbolColor.a > maxReplace) {
        colorMixMode = ${i.H.int(s.k5.Multiply)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxReplace);
      } else if (symbolColor.a > maxTint) {
        colorMixMode = ${i.H.int(s.k5.Replace)};
        symbolAlpha = scaleAlpha * (symbolColor.a - maxTint);
      } else if (symbolColor.a > 0.0) {
        colorMixMode = ${i.H.int(s.k5.Tint)};
        symbolAlpha = scaleAlpha * symbolColor.a;
      } else {
        colorMixMode = ${i.H.int(s.k5.Multiply)};
        symbolAlpha = 0.0;
      }

      return vec4(symbolColor.r, symbolColor.g, symbolColor.b, symbolAlpha);
    }
  `)}},43208:(z,A,e)=>{e.d(A,{M:()=>i});var s=e(24493);function i(l){l.vertex.code.add(s.H`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}},20367:(z,A,e)=>{e.d(A,{B:()=>c});var s=e(31610),i=e(32954),l=e(62789),E=e(28714),r=e(25866),h=e(74567),n=e(28825),b=e(7741),x=e(58021),u=e(24493),a=e(33724),g=e(57887),T=e(40972),v=e(45825);e(70938);const C=(0,i.vt)();function c(p,L){const _=L.hasModelTransformation,y=L.instancedDoublePrecision;_&&(p.vertex.uniforms.add(new g.X("model",j=>j.modelTransformation??l.zK)),p.vertex.uniforms.add(new a.k("normalLocalOriginFromModel",j=>((0,s.Ge)(C,j.modelTransformation??l.zK),C)))),L.instanced&&y&&(p.attributes.add(T.r.INSTANCEMODELORIGINHI,"vec3"),p.attributes.add(T.r.INSTANCEMODELORIGINLO,"vec3"),p.attributes.add(T.r.INSTANCEMODEL,"mat3"),p.attributes.add(T.r.INSTANCEMODELNORMAL,"mat3"));const d=p.vertex;y&&(d.include(n.u,L),d.uniforms.add(new x.d("viewOriginHi",j=>(0,v.Zo)((0,E.i)(M,j.camera.viewInverseTransposeMatrix[3],j.camera.viewInverseTransposeMatrix[7],j.camera.viewInverseTransposeMatrix[11]),M)),new x.d("viewOriginLo",j=>(0,v.jA)((0,E.i)(M,j.camera.viewInverseTransposeMatrix[3],j.camera.viewInverseTransposeMatrix[7],j.camera.viewInverseTransposeMatrix[11]),M)))),d.code.add(u.H`
    vec3 getVertexInLocalOriginSpace() {
      return ${_?y?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":y?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${y?u.H`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),d.code.add(u.H`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${_?y?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":y?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),L.output===h.V.Normal&&((0,b.S7)(d),d.code.add(u.H`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${_?y?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":y?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),L.hasVertexTangents&&d.code.add(u.H`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${_?y?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":y?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const M=(0,r.vt)()},34416:(z,A,e)=>{e.d(A,{W:()=>r,Y:()=>E});var r,h,s=e(69690),i=e(24493),l=e(40972);function E(h,n){switch(n.normalType){case r.Compressed:h.attributes.add(l.r.NORMALCOMPRESSED,"vec2"),h.vertex.code.add(i.H`vec3 decompressNormal(vec2 normal) {
float z = 1.0 - abs(normal.x) - abs(normal.y);
return vec3(normal + sign(normal) * min(z, 0.0), z);
}
vec3 normalModel() {
return decompressNormal(normalCompressed);
}`);break;case r.Attribute:h.attributes.add(l.r.NORMAL,"vec3"),h.vertex.code.add(i.H`vec3 normalModel() {
return normal;
}`);break;case r.ScreenDerivative:h.fragment.code.add(i.H`vec3 screenDerivativeNormal(vec3 positionView) {
return normalize(cross(dFdx(positionView), dFdy(positionView)));
}`);break;default:(0,s.Xb)(n.normalType);case r.COUNT:}}(h=r||(r={}))[h.Attribute=0]="Attribute",h[h.Compressed=1]="Compressed",h[h.ScreenDerivative=2]="ScreenDerivative",h[h.COUNT=3]="COUNT"},67334:(z,A,e)=>{e.d(A,{K:()=>h});var s=e(61079),i=e(24493),l=e(41204),E=e(40972),r=e(3264);function h(n,b){b.hasSymbolColors?(n.include(s.A),n.attributes.add(E.r.SYMBOLCOLOR,"vec4"),n.varyings.add("colorMixMode","mediump float"),n.vertex.code.add(i.H`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(n.fragment.uniforms.add(new l.c("colorMixMode",x=>r.Um[x.colorMixMode])),n.vertex.code.add(i.H`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}},17304:(z,A,e)=>{e.d(A,{Mh:()=>x,Zo:()=>u,gy:()=>a});var s=e(69690),i=e(32954),l=e(89141),E=e(34416),r=e(83224),h=e(24493),n=e(14705),b=e(33724);function x(g,T){switch(T.normalType){case E.W.Attribute:case E.W.Compressed:g.include(E.Y,T),g.varyings.add("vNormalWorld","vec3"),g.varyings.add("vNormalView","vec3"),g.vertex.uniforms.add(new n.h("transformNormalGlobalFromModel",v=>v.transformNormalGlobalFromModel),new b.k("transformNormalViewFromGlobal",v=>v.transformNormalViewFromGlobal)),g.vertex.code.add(h.H`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case E.W.ScreenDerivative:g.vertex.code.add(h.H`void forwardNormal() {}`);break;default:(0,s.Xb)(T.normalType);case E.W.COUNT:}}class u extends r.dO{constructor(){super(...arguments),this.transformNormalViewFromGlobal=(0,i.vt)()}}class a extends r.EM{constructor(){super(...arguments),this.transformNormalGlobalFromModel=(0,i.vt)(),this.toMapSpace=(0,l.vt)()}}},55388:(z,A,e)=>{e.d(A,{E:()=>C});var s=e(18238),i=e(74567),l=e(29359),E=e(93877),r=e(34416),h=e(70094),n=e(66874),b=e(17304),x=e(78689),u=e(14051),a=e(33605),g=e(83475),T=e(7741),v=e(24493),D=e(35089),t=e(67496);function C(c,M){const{vertex:p,fragment:L}=c,_=M.hasColorTexture&&M.alphaDiscardMode!==t.sf.Opaque,{output:y,normalType:d,hasColorTextureTransform:j}=M;switch(y){case i.V.Depth:(0,T.NB)(p,M),c.include(E.d,M),c.fragment.include(l.HQ,M),c.include(n.U,M),_&&L.uniforms.add(new D.N("tex",f=>f.texture)),p.main.add(v.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),c.include(g.S,M),L.main.add(v.H`
        discardBySlice(vpos);
        ${(0,v.If)(_,v.H`vec4 texColor = texture(tex, ${j?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}`);break;case i.V.Shadow:case i.V.ShadowHighlight:case i.V.ShadowExcludeHighlight:case i.V.ViewshedShadow:case i.V.ObjectAndLayerIdColor:(0,T.NB)(p,M),c.include(E.d,M),c.include(n.U,M),c.include(a.A,M),c.include(x.L,M),c.fragment.include(l.HQ,M),c.include(h.g,M),(0,s.xJ)(c),c.varyings.add("depth","float"),_&&L.uniforms.add(new D.N("tex",f=>f.texture)),p.main.add(v.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();`),c.include(g.S,M),L.main.add(v.H`
        discardBySlice(vpos);
        ${(0,v.If)(_,v.H`vec4 texColor = texture(tex, ${j?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        ${y===i.V.ObjectAndLayerIdColor?v.H`outputObjectAndLayerIdColor();`:v.H`outputDepth(depth);`}`);break;case i.V.Normal:(0,T.NB)(p,M),c.include(E.d,M),c.include(r.Y,M),c.include(b.Mh,M),c.include(n.U,M),c.include(a.A,M),_&&L.uniforms.add(new D.N("tex",Z=>Z.texture)),d===r.W.ScreenDerivative&&c.varyings.add("vPositionView","vec3"),p.main.add(v.H`
        vpos = getVertexInLocalOriginSpace();
        ${d===r.W.Attribute||d===r.W.Compressed?v.H`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:v.H`vPositionView = (view * vec4(vpos, 1.0)).xyz;`}
        vpos = subtractOrigin(vpos);
        vpos = addVerticalOffset(vpos, localOrigin);
        gl_Position = transformPosition(proj, view, vpos);
        forwardTextureCoordinates();`),c.fragment.include(l.HQ,M),c.include(g.S,M),L.main.add(v.H`
        discardBySlice(vpos);
        ${(0,v.If)(_,v.H`vec4 texColor = texture(tex, ${j?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}

        ${d===r.W.ScreenDerivative?v.H`vec3 normal = screenDerivativeNormal(vPositionView);`:v.H`vec3 normal = normalize(vNormalWorld);
                    if (gl_FrontFacing == false){
                      normal = -normal;
                    }`}
        fragColor = vec4(0.5 + 0.5 * normal, 1.0);`);break;case i.V.Highlight:(0,T.NB)(p,M),c.include(E.d,M),c.include(n.U,M),c.include(a.A,M),_&&L.uniforms.add(new D.N("tex",f=>f.texture)),p.main.add(v.H`vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();`),c.fragment.include(l.HQ,M),c.include(g.S,M),c.include(u.Q,M),L.main.add(v.H`
        discardBySlice(vpos);
        ${(0,v.If)(_,v.H`vec4 texColor = texture(tex, ${j?"colorUV":"vuv0"});
                discardOrAdjustAlpha(texColor);`)}
        calculateOcclusionAndOutputHighlight();`)}}},78689:(z,A,e)=>{e.d(A,{L:()=>E});var s=e(74567),i=e(91322),l=e(24493);function E(r,h){switch(h.output){case s.V.Shadow:case s.V.ShadowHighlight:case s.V.ShadowExcludeHighlight:case s.V.ViewshedShadow:r.fragment.include(i.U),r.fragment.code.add(l.H`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}},28799:(z,A,e)=>{e.d(A,{W:()=>T});var s=e(32954),i=e(45475),l=e(66874),E=e(10728),r=e(6698),h=e(99286),n=e(24493),b=e(33724),x=e(91784),u=e(35089),a=e(40972),g=e(2006);function T(v,D){const t=v.fragment;D.hasVertexTangents?(v.attributes.add(a.r.TANGENT,"vec4"),v.varyings.add("vTangent","vec4"),t.code.add(D.doubleSidedMode===r.W.WindingOrder?n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`:n.H`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):t.code.add(n.H`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),D.textureCoordinateType!==l.I.None&&(v.include(E.r,D),t.uniforms.add(D.bindType===g.c.Pass?new u.N("normalTexture",C=>C.textureNormal):new x.o("normalTexture",C=>C.textureNormal)),D.hasNormalTextureTransform&&(t.uniforms.add(new h.G("scale",C=>C.scale??i.Un)),t.uniforms.add(new b.k("normalTextureTransformMatrix",C=>C.normalTextureTransformMatrix??s.zK))),t.code.add(n.H`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),D.hasNormalTextureTransform&&t.code.add(n.H`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),t.code.add(n.H`return tangentSpace * rawNormal;
}`))}},74077:(z,A,e)=>{e.d(A,{W:()=>x});var s=e(28714),i=e(25866),l=e(53781),E=e(89141),r=e(9933),h=e(58021),n=e(21130),b=e(24493);function x(g,T){const v=g.fragment,D=void 0!==T.lightingSphericalHarmonicsOrder?T.lightingSphericalHarmonicsOrder:2;0===D?(v.uniforms.add(new h.d("lightingAmbientSH0",({lighting:t})=>(0,s.i)(u,t.sh.r[0],t.sh.g[0],t.sh.b[0]))),v.code.add(b.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):1===D?(v.uniforms.add(new n.I("lightingAmbientSH_R",({lighting:t})=>(0,l.s)(a,t.sh.r[0],t.sh.r[1],t.sh.r[2],t.sh.r[3])),new n.I("lightingAmbientSH_G",({lighting:t})=>(0,l.s)(a,t.sh.g[0],t.sh.g[1],t.sh.g[2],t.sh.g[3])),new n.I("lightingAmbientSH_B",({lighting:t})=>(0,l.s)(a,t.sh.b[0],t.sh.b[1],t.sh.b[2],t.sh.b[3]))),v.code.add(b.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):2===D&&(v.uniforms.add(new h.d("lightingAmbientSH0",({lighting:t})=>(0,s.i)(u,t.sh.r[0],t.sh.g[0],t.sh.b[0])),new n.I("lightingAmbientSH_R1",({lighting:t})=>(0,l.s)(a,t.sh.r[1],t.sh.r[2],t.sh.r[3],t.sh.r[4])),new n.I("lightingAmbientSH_G1",({lighting:t})=>(0,l.s)(a,t.sh.g[1],t.sh.g[2],t.sh.g[3],t.sh.g[4])),new n.I("lightingAmbientSH_B1",({lighting:t})=>(0,l.s)(a,t.sh.b[1],t.sh.b[2],t.sh.b[3],t.sh.b[4])),new n.I("lightingAmbientSH_R2",({lighting:t})=>(0,l.s)(a,t.sh.r[5],t.sh.r[6],t.sh.r[7],t.sh.r[8])),new n.I("lightingAmbientSH_G2",({lighting:t})=>(0,l.s)(a,t.sh.g[5],t.sh.g[6],t.sh.g[7],t.sh.g[8])),new n.I("lightingAmbientSH_B2",({lighting:t})=>(0,l.s)(a,t.sh.b[5],t.sh.b[6],t.sh.b[7],t.sh.b[8]))),v.code.add(b.H`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),T.pbrMode!==r.A9.Normal&&T.pbrMode!==r.A9.Schematic||v.code.add(b.H`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const u=(0,i.vt)(),a=(0,E.vt)()},96537:(z,A,e)=>{e.d(A,{n:()=>X});var s=e(24493),i=e(18679),l=e(8189),E=e(69287),r=e(11432),h=e(48900),n=e(82595),b=e(85211),g=(e(3248),e(35150),e(40707),e(76576)),T=e(83953),v=e(10294),D=e(5077),t=e(22057),C=e(86679),c=e(11556),M=e(18110),p=e(84254),L=e(41396);class _ extends M.w{constructor(O,H){super(O,H,new c.$(p.S,()=>e.e(1467).then(e.bind(e,77496))))}initializePipeline(){return(0,L.Ey)({colorWrite:L.kn})}}var d=e(45475),j=e(70938);class f extends j.Y{constructor(){super(...arguments),this.projScale=1}}class Z extends f{constructor(){super(...arguments),this.intensity=1}}class N extends j.Y{}class te extends N{constructor(){super(...arguments),this.blurSize=(0,d.vt)()}}var Q=e(30493);class k extends M.w{constructor(O,H){super(O,H,new c.$(Q.S,()=>e.e(2863).then(e.bind(e,42863))))}initializePipeline(){return(0,L.Ey)({colorWrite:L.kn})}}var S=e(67496),$=e(50915),ae=e(76169),re=e(4931);const R=2;let B=class extends t.A{constructor(P){super(P),this.consumes={required:["normals"]},this.produces=v.OG.SSAO,this.isEnabled=()=>!1,this._enableTime=(0,n.l5)(0),this._passParameters=new Z,this._drawParameters=new te}initialize(){const P=Uint8Array.from(atob("eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM"),H=>H.charCodeAt(0)),O=new re.R;O.wrapMode=$.pF.CLAMP_TO_EDGE,O.pixelFormat=$.Ab.RGB,O.wrapMode=$.pF.REPEAT,O.hasMipmap=!0,O.width=32,O.height=32,this._passParameters.noiseTexture=new ae.g(this.renderingContext,O,P),this.techniques.precompile(k),this.techniques.precompile(_),this.addHandles((0,h.wB)(()=>this.isEnabled(),()=>this._enableTime=(0,n.l5)(0)))}destroy(){this._passParameters.noiseTexture=(0,r.WD)(this._passParameters.noiseTexture)}render(P){const O=this.bindParameters,H=P.find(({name:J})=>"normals"===J),U=H?.getTexture(),I=H?.getTexture($.nI),W=this.fboCache,m=O.camera,K=m.fullViewport[2],G=m.fullViewport[3],V=Math.round(K/R),Y=Math.round(G/R),w=this.techniques.get(k),ee=this.techniques.get(_);if(!w.compiled||!ee.compiled)return this._enableTime=(0,n.l5)(performance.now()),this.requestRender(S.C7.UPDATE),W.acquire(V,Y,v.OG.SSAO,D.N.RED);0===this._enableTime&&(this._enableTime=(0,n.l5)(performance.now()));const F=this.renderingContext,oe=this.view.qualitySettings.fadeDuration,ie=(0,E.qE)((C.b-m.relativeElevation)/(C.b-C.O),0,1),le=oe>0?Math.min(oe,performance.now()-this._enableTime)/oe:1,_e=le*ie;this._passParameters.normalTexture=U,this._passParameters.depthTexture=I,this._passParameters.projScale=1/m.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*q/(0,Q.g)(m)**6*_e;const de=W.acquire(K,G,"ssao input",D.N.RG);F.bindFramebuffer(de.fbo),F.setViewport(0,0,K,G),F.bindTechnique(w,O,this._passParameters,this._drawParameters),F.screen.draw();const ce=W.acquire(V,Y,"ssao blur",D.N.RED);F.bindFramebuffer(ce.fbo),this._drawParameters.colorTexture=de.getTexture(),(0,T.hZ)(this._drawParameters.blurSize,0,R/G),F.bindTechnique(ee,O,this._passParameters,this._drawParameters),F.setViewport(0,0,V,Y),F.screen.draw(),de.release();const se=W.acquire(V,Y,v.OG.SSAO,D.N.RED);return F.bindFramebuffer(se.fbo),F.setViewport(0,0,K,G),F.setClearColor(1,1,1,0),F.clear($.NV.COLOR),this._drawParameters.colorTexture=ce.getTexture(),(0,T.hZ)(this._drawParameters.blurSize,R/K,0),F.bindTechnique(ee,O,this._passParameters,this._drawParameters),F.setViewport(0,0,V,Y),F.screen.draw(),F.setViewport4fv(m.fullViewport),ce.release(),le<1&&this.requestRender(S.C7.UPDATE),se}};(0,l._)([(0,b.MZ)()],B.prototype,"consumes",void 0),(0,l._)([(0,b.MZ)()],B.prototype,"produces",void 0),(0,l._)([(0,b.MZ)({constructOnly:!0})],B.prototype,"isEnabled",void 0),B=(0,l._)([(0,g.$)("esri.views.3d.webgl-engine.effects.ssao.SSAO")],B);const q=.5;function X(P,O){const H=P.fragment;O.receiveAmbientOcclusion?(H.uniforms.add(new i.x("ssaoTex",U=>U.ssao?.getTexture())),H.constants.add("blurSizePixelsInverse","float",1/R),H.code.add(s.H`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):H.code.add(s.H`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}},6413:(z,A,e)=>{e.d(A,{a8:()=>T,eU:()=>v,kA:()=>D});var s=e(27980),i=e(69690),l=e(74077),E=e(96537),r=e(44987),h=e(87522),n=e(9933),b=e(64570),x=e(81680),u=e(82374),a=e(24493),g=e(68675);function T(t){t.constants.add("ambientBoostFactor","float",g.uH)}function v(t){t.uniforms.add(new u.U("lightingGlobalFactor",C=>C.lighting.globalFactor))}function D(t,C){const c=t.fragment;switch(t.include(E.n,C),C.pbrMode!==n.A9.Disabled&&t.include(h.c,C),t.include(l.W,C),t.include(b.p),c.code.add(a.H`
    const float GAMMA_SRGB = ${a.H.float(s.Tf)};
    const float INV_GAMMA_SRGB = 0.4761904;
    ${C.pbrMode===n.A9.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),T(c),v(c),(0,r.Gc)(c),c.code.add(a.H`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${C.spherical?a.H`normalize(vPosWorld)`:a.H`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),(0,r.O4)(c),c.code.add(a.H`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),C.pbrMode){case n.A9.Disabled:case n.A9.WaterOnIntegratedMesh:case n.A9.Water:t.include(r.Vt),c.code.add(a.H`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight) {
vec3 mainLighting = applyShading(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case n.A9.Normal:case n.A9.Schematic:c.code.add(a.H`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec4 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),c.code.add(a.H`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),C.useFillLights?c.uniforms.add(new x.o("hasFillLights",M=>M.enableFillLights)):c.constants.add("hasFillLights","bool",!1),c.code.add(a.H`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
float NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
vec3 mainLightIrradianceComponent = NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),c.uniforms.add(new u.U("lightingSpecularStrength",M=>M.lighting.mainLight.specularStrength),new u.U("lightingEnvironmentStrength",M=>M.lighting.mainLight.environmentStrength)).code.add(a.H`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
float NdotH = clamp(dot(normal, h), 0.0, 1.0);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),c.code.add(a.H`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission.rgb == vec3(0.0) ? _emission.rgb : pow(_emission.rgb, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${C.pbrMode!==n.A9.Schematic||C.hasColorTexture?a.H`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:a.H`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case n.A9.Simplified:case n.A9.TerrainWithWater:(0,r.Gc)(c),(0,r.O4)(c),c.code.add(a.H`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:(0,i.Xb)(C.pbrMode);case n.A9.COUNT:}}},6698:(z,A,e)=>{e.d(A,{W:()=>E,r:()=>l});var E,r,s=e(69690),i=e(24493);function l(r,h){const n=r.fragment;switch(n.code.add(i.H`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),h.doubleSidedMode){case E.None:n.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case E.View:n.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case E.WindingOrder:n.code.add(i.H`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:(0,s.Xb)(h.doubleSidedMode);case E.COUNT:}}(r=E||(E={}))[r.None=0]="None",r[r.View=1]="View",r[r.WindingOrder=2]="WindingOrder",r[r.COUNT=3]="COUNT"},55189:(z,A,e)=>{e.d(A,{Bz:()=>c,G:()=>C}),e(62789),e(25866);var l=e(91322),E=e(21130),r=e(24493),h=e(75178),n=e(2006),b=e(64157);class x extends b.n{constructor(L,_,y){super(L,"mat4",n.c.Draw,(d,j,f,Z)=>d.setUniformMatrix4fv(L,_(j,f,Z)),y)}}class u extends b.n{constructor(L,_,y){super(L,"mat4",n.c.Pass,(d,j,f)=>d.setUniformMatrix4fv(L,_(j,f)),y)}}var a=e(18679);function C(p,L){L.receiveShadows&&(p.fragment.uniforms.add(new u("shadowMapMatrix",(_,y)=>y.shadowMap.getShadowMapMatrices(_.origin),4)),M(p))}function c(p,L){L.receiveShadows&&(p.fragment.uniforms.add(new x("shadowMapMatrix",(_,y)=>y.shadowMap.getShadowMapMatrices(_.origin),4)),M(p))}function M(p){const L=p.fragment;L.include(l.U),L.uniforms.add(new a.x("shadowMap",_=>_.shadowMap.depthTexture),new h.W("numCascades",_=>_.shadowMap.numCascades),new E.I("cascadeDistances",_=>_.shadowMap.cascadeDistances)).code.add(r.H`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}e(70938)},63758:(z,A,e)=>{e.d(A,{MU:()=>n,O1:()=>b,QM:()=>x,Sx:()=>h,q2:()=>r});var s=e(32954),i=e(66874),l=e(24493),E=e(33724);function r(u,a){a.hasColorTextureTransform?(u.varyings.add("colorUV","vec2"),u.vertex.uniforms.add(new E.k("colorTextureTransformMatrix",g=>g.colorTextureTransformMatrix??s.zK)).code.add(l.H`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):u.vertex.code.add(l.H`void forwardColorUV(){}`)}function h(u,a){a.hasNormalTextureTransform&&a.textureCoordinateType!==i.I.None?(u.varyings.add("normalUV","vec2"),u.vertex.uniforms.add(new E.k("normalTextureTransformMatrix",g=>g.normalTextureTransformMatrix??s.zK)).code.add(l.H`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):u.vertex.code.add(l.H`void forwardNormalUV(){}`)}function n(u,a){a.hasEmissionTextureTransform&&a.textureCoordinateType!==i.I.None?(u.varyings.add("emissiveUV","vec2"),u.vertex.uniforms.add(new E.k("emissiveTextureTransformMatrix",g=>g.emissiveTextureTransformMatrix??s.zK)).code.add(l.H`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):u.vertex.code.add(l.H`void forwardEmissiveUV(){}`)}function b(u,a){a.hasOcclusionTextureTransform&&a.textureCoordinateType!==i.I.None?(u.varyings.add("occlusionUV","vec2"),u.vertex.uniforms.add(new E.k("occlusionTextureTransformMatrix",g=>g.occlusionTextureTransformMatrix??s.zK)).code.add(l.H`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):u.vertex.code.add(l.H`void forwardOcclusionUV(){}`)}function x(u,a){a.hasMetallicRoughnessTextureTransform&&a.textureCoordinateType!==i.I.None?(u.varyings.add("metallicRoughnessUV","vec2"),u.vertex.uniforms.add(new E.k("metallicRoughnessTextureTransformMatrix",g=>g.metallicRoughnessTextureTransformMatrix??s.zK)).code.add(l.H`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):u.vertex.code.add(l.H`void forwardMetallicRoughnessUV(){}`)}},83475:(z,A,e)=>{e.d(A,{S:()=>b}),e(2006),e(64157);var E=e(65840),r=e(24493),h=e(67496),n=e(28700);function b(a,g){!function u(a,g,T){const v=a.fragment,D=g.alphaDiscardMode,t=D===h.sf.Blend;D!==h.sf.Mask&&D!==h.sf.MaskBlend||v.uniforms.add(T),v.code.add(r.H`
    void discardOrAdjustAlpha(inout vec4 color) {
      ${D===h.sf.Opaque?"color.a = 1.0;":`if (color.a < ${t?r.H.float(n.Q):"textureAlphaCutoff"}) {\n              discard;\n             } ${(0,r.If)(D===h.sf.Mask,"else { color.a = 1.0; }")}`}
    }
  `)}(a,g,new E.m("textureAlphaCutoff",T=>T.textureAlphaCutoff))}},9198:(z,A,e)=>{e.d(A,{N:()=>E});var s=e(10136),i=e(71781),l=e(24493);function E(r){r.include(i.a),r.code.add(l.H`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${l.H.int(s.k5.Multiply)}) {
        return allMixed;
      }
      if (mode == ${l.H.int(s.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.H.int(s.k5.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in macOS using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${l.H.int(s.k5.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${l.H.int(s.k5.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}},91322:(z,A,e)=>{e.d(A,{U:()=>i});var s=e(24493);function i(l){l.code.add(s.H`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}},3781:(z,A,e)=>{e.d(A,{$U:()=>k});var s=e(28714),i=e(25866),l=e(23191),E=e(48499),r=e(74567),h=e(34416),n=e(43167),b=e(6698),x=e(9933),u=e(12335),a=e(67496),g=e(19589),T=e(50957),v=e(14356),D=e(49178),t=e(55128),C=e(40972),c=e(29452),M=e(61427),p=e(3264),L=e(2301),_=e(8189),y=e(66874),d=e(55062),j=e(35094);class f extends j.E{constructor(I,W){super(),this.spherical=I,this.doublePrecisionRequiresObfuscation=W,this.alphaDiscardMode=a.sf.Opaque,this.doubleSidedMode=b.W.None,this.pbrMode=x.A9.Disabled,this.cullFace=a.s2.None,this.normalType=h.W.Attribute,this.customDepthTest=a.it.Less,this.emissionSource=n.ZX.None,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1,this.occlusionPass=!1,this.hasVvInstancing=!0,this.useCustomDTRExponentForWater=!1,this.useFillLights=!0}get textureCoordinateType(){return this.hasColorTexture||this.hasMetallicRoughnessTexture||this.emissionSource===n.ZX.Texture||this.hasOcclusionTexture||this.hasNormalTexture?y.I.Default:y.I.None}get objectAndLayerIdColorInstanced(){return this.instanced}get discardInvisibleFragments(){return this.transparent}}(0,_._)([(0,d.W)({count:a.sf.COUNT})],f.prototype,"alphaDiscardMode",void 0),(0,_._)([(0,d.W)({count:b.W.COUNT})],f.prototype,"doubleSidedMode",void 0),(0,_._)([(0,d.W)({count:x.A9.COUNT})],f.prototype,"pbrMode",void 0),(0,_._)([(0,d.W)({count:a.s2.COUNT})],f.prototype,"cullFace",void 0),(0,_._)([(0,d.W)({count:h.W.COUNT})],f.prototype,"normalType",void 0),(0,_._)([(0,d.W)({count:a.it.COUNT})],f.prototype,"customDepthTest",void 0),(0,_._)([(0,d.W)({count:n.ZX.COUNT})],f.prototype,"emissionSource",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasVertexColors",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasSymbolColors",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasVerticalOffset",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasColorTexture",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasMetallicRoughnessTexture",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasOcclusionTexture",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasNormalTexture",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasScreenSizePerspective",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasVertexTangents",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasOccludees",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasModelTransformation",void 0),(0,_._)([(0,d.W)()],f.prototype,"offsetBackfaces",void 0),(0,_._)([(0,d.W)()],f.prototype,"vvSize",void 0),(0,_._)([(0,d.W)()],f.prototype,"vvColor",void 0),(0,_._)([(0,d.W)()],f.prototype,"receiveShadows",void 0),(0,_._)([(0,d.W)()],f.prototype,"receiveAmbientOcclusion",void 0),(0,_._)([(0,d.W)()],f.prototype,"textureAlphaPremultiplied",void 0),(0,_._)([(0,d.W)()],f.prototype,"instanced",void 0),(0,_._)([(0,d.W)()],f.prototype,"instancedColor",void 0),(0,_._)([(0,d.W)()],f.prototype,"writeDepth",void 0),(0,_._)([(0,d.W)()],f.prototype,"transparent",void 0),(0,_._)([(0,d.W)()],f.prototype,"enableOffset",void 0),(0,_._)([(0,d.W)()],f.prototype,"terrainDepthTest",void 0),(0,_._)([(0,d.W)()],f.prototype,"cullAboveTerrain",void 0),(0,_._)([(0,d.W)()],f.prototype,"snowCover",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasColorTextureTransform",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasEmissionTextureTransform",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasNormalTextureTransform",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasOcclusionTextureTransform",void 0),(0,_._)([(0,d.W)()],f.prototype,"hasMetallicRoughnessTextureTransform",void 0);var Z=e(11556),N=e(34187);class te extends L.R5{constructor(I,W){super(I,W,new Z.$(N.R,()=>e.e(8093).then(e.bind(e,88093)))),this.type="RealisticTreeTechnique"}}var Q=e(28700);class k extends T.im{constructor(I,W){super(I,$),this.materialType="default",this.supportsEdges=!0,this.produces=new Map([[t.N.OPAQUE_MATERIAL,m=>((0,r.iq)(m)||(0,r.PJ)(m))&&!this.parameters.transparent],[t.N.TRANSPARENT_MATERIAL,m=>((0,r.iq)(m)||(0,r.PJ)(m))&&this.parameters.transparent&&this.parameters.writeDepth],[t.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,m=>((0,r.XY)(m)||(0,r.PJ)(m))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._vertexBufferLayout=function re(U){const I=(0,E.BP)().vec3f(C.r.POSITION);return U.normalType===h.W.Compressed?I.vec2i16(C.r.NORMALCOMPRESSED,{glNormalized:!0}):I.vec3f(C.r.NORMAL),U.hasVertexTangents&&I.vec4f(C.r.TANGENT),(U.textureId||U.normalTextureId||U.metallicRoughnessTextureId||U.emissiveTextureId||U.occlusionTextureId)&&I.vec2f(C.r.UV0),U.hasVertexColors&&I.vec4u8(C.r.COLOR),U.hasSymbolColors&&I.vec4u8(C.r.SYMBOLCOLOR),(0,u.E)()&&I.vec4u8(C.r.OBJECTANDLAYERIDCOLOR),I}(this.parameters),this._configuration=new f(W.spherical,W.doublePrecisionRequiresObfuscation)}isVisibleForOutput(I){return I!==r.V.Shadow&&I!==r.V.ShadowExcludeHighlight&&I!==r.V.ShadowHighlight||this.parameters.castShadows}get visible(){const I=this.parameters;if(I.layerOpacity<Q.Q)return!1;const{hasInstancedColor:W,hasVertexColors:m,hasSymbolColors:K,vvColor:G}=I,V=W||G||K,Y="replace"===I.colorMixMode,w=I.opacity>=Q.Q;if(m&&V)return Y||w;const ee=I.externalColor&&I.externalColor[3]>=Q.Q;return m?Y?ee:w:V?Y||w:Y?ee:w}get hasEmissions(){return!!this.parameters.emissiveTextureId||!(0,s.p)(this.parameters.emissiveFactor,i.uY)}getConfiguration(I,W){const m=this.parameters,{treeRendering:K,doubleSided:G,doubleSidedType:V}=m;return this._configuration.output=I,this._configuration.hasNormalTexture=!K&&!!m.normalTextureId,this._configuration.hasColorTexture=!!m.textureId,this._configuration.hasVertexTangents=!K&&m.hasVertexTangents,this._configuration.instanced=m.isInstanced,this._configuration.instancedDoublePrecision=m.instancedDoublePrecision,this._configuration.vvSize=!!m.vvSize,this._configuration.hasVerticalOffset=null!=m.verticalOffset,this._configuration.hasScreenSizePerspective=null!=m.screenSizePerspective,this._configuration.hasSlicePlane=m.hasSlicePlane,this._configuration.alphaDiscardMode=m.textureAlphaMode,this._configuration.normalType=K?h.W.Attribute:m.normalType,this._configuration.transparent=m.transparent,this._configuration.writeDepth=m.writeDepth,null!=m.customDepthTest&&(this._configuration.customDepthTest=m.customDepthTest),this._configuration.hasOccludees=W.hasOccludees,this._configuration.cullFace=m.hasSlicePlane?a.s2.None:m.cullFace,this._configuration.cullAboveTerrain=W.cullAboveTerrain,this._configuration.hasModelTransformation=!K&&null!=m.modelTransformation,this._configuration.hasVertexColors=m.hasVertexColors,this._configuration.hasSymbolColors=m.hasSymbolColors,this._configuration.doubleSidedMode=K?b.W.WindingOrder:G&&"normal"===V?b.W.View:G&&"winding-order"===V?b.W.WindingOrder:b.W.None,this._configuration.instancedColor=m.hasInstancedColor,(0,r.RN)(I)?(this._configuration.terrainDepthTest=W.terrainDepthTest,this._configuration.receiveShadows=m.receiveShadows,this._configuration.receiveAmbientOcclusion=m.receiveAmbientOcclusion&&null!=W.ssao):(this._configuration.terrainDepthTest=!1,this._configuration.receiveShadows=this._configuration.receiveAmbientOcclusion=!1),this._configuration.vvColor=!!m.vvColor,this._configuration.textureAlphaPremultiplied=!!m.textureAlphaPremultiplied,this._configuration.pbrMode=m.usePBR?m.isSchematic?x.A9.Schematic:x.A9.Normal:x.A9.Disabled,this._configuration.hasMetallicRoughnessTexture=!K&&!!m.metallicRoughnessTextureId,this._configuration.emissionSource=K?n.ZX.None:null!=m.emissiveTextureId?n.ZX.Texture:m.usePBR?n.ZX.Value:n.ZX.None,this._configuration.hasOcclusionTexture=!K&&!!m.occlusionTextureId,this._configuration.offsetBackfaces=!(!m.transparent||!m.offsetTransparentBackfaces),this._configuration.oitPass=W.oitPass,this._configuration.enableOffset=W.camera.relativeElevation<v.xt,this._configuration.snowCover=function ae(U){return null!=U.weather&&U.weatherVisible&&"snowy"===U.weather.type&&"enabled"===U.weather.snowCover}(W),this._configuration.hasColorTextureTransform=!!m.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!m.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!m.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!m.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!m.metallicRoughnessTextureTransformMatrix,this._configuration}intersect(I,W,m,K,G,V){if(null!=this.parameters.verticalOffset){const Y=m.camera;(0,s.i)(O,W[12],W[13],W[14]);let w=null;switch(m.viewingMode){case l.RT.Global:w=(0,s.n)(X,O);break;case l.RT.Local:w=(0,s.c)(X,q)}let ee=0;const F=(0,s.d)(H,O,Y.eye),oe=(0,s.l)(F),ne=(0,s.h)(F,F,1/oe);let ie=null;this.parameters.screenSizePerspective&&(ie=(0,s.f)(w,ne)),ee+=(0,p.kE)(Y,oe,this.parameters.verticalOffset,ie??0,this.parameters.screenSizePerspective),(0,s.h)(w,w,ee),(0,s.q)(P,w,m.transform.inverseRotation),K=(0,s.d)(R,K,P),G=(0,s.d)(B,G,P)}(0,D.Uy)(I,m,K,G,(0,c.ou)(m.verticalOffset),V)}createGLMaterial(I){return new S(I)}createBufferWriter(){return new M.Z(this._vertexBufferLayout)}}class S extends g.m8{constructor(I){super({...I,...I.material.parameters})}beginSlot(I){this._material.setParameters({receiveShadows:I.shadowMap.enabled});const W=this._material.parameters;this.updateTexture(W.textureId);const m=I.camera.viewInverseTransposeMatrix;return(0,s.i)(W.origin,m[3],m[7],m[11]),this._material.setParameters(this.textureBindParameters),this.getTechnique(W.treeRendering?te:L.R5,I)}}class $ extends L.uD{constructor(){super(...arguments),this.treeRendering=!1,this.hasVertexTangents=!1}}const R=(0,i.vt)(),B=(0,i.vt)(),q=(0,i.fA)(0,0,1),X=(0,i.vt)(),P=(0,i.vt)(),O=(0,i.vt)(),H=(0,i.vt)()},2301:(z,A,e)=>{e.d(A,{R5:()=>p,V:()=>M,uD:()=>c});var s=e(25866),i=e(89141),l=e(74567),E=e(34416),r=e(17304),h=e(11556),n=e(18110),b=e(67496),x=e(50957),u=e(96443),a=e(14356),g=e(54501),T=e(30906),v=e(75915),D=e(50915),t=e(41396),C=e(28700);class c extends r.Zo{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=T.mb,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=b.s2.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=s.uY,this.instancedDoublePrecision=!1,this.normalType=E.W.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.ambient=(0,s.CN)(.2,.2,.2),this.diffuse=(0,s.CN)(.8,.8,.8),this.externalColor=(0,i.fA)(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=(0,s.vt)(),this.hasSlicePlane=!1,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=b.it.Less,this.textureAlphaMode=b.sf.Blend,this.textureAlphaCutoff=C.Q,this.textureAlphaPremultiplied=!1,this.renderOccluded=x.m$.Occlude,this.isDecoration=!1}}class M extends r.gy{constructor(){super(...arguments),this.origin=(0,s.vt)(),this.slicePlaneLocalOrigin=this.origin}}class p extends n.w{constructor(d,j,f=new h.$(v.D,()=>e.e(5301).then(e.bind(e,45301)))){super(d,j,f),this.type="DefaultMaterialTechnique"}_makePipeline(d,j){const{oitPass:f,output:Z,transparent:N,cullFace:te,customDepthTest:Q,hasOccludees:k,enableOffset:S}=d,$=f===u.Y.NONE,ae=f===u.Y.FrontFace;return(0,t.Ey)({blending:(0,l.RN)(Z)&&N?(0,a.Yf)(f):null,culling:(y=d,y.cullFace===b.s2.None&&(y.hasSlicePlane||y.transparent||y.doubleSidedMode)?null:(0,t.Xt)(te)),depthTest:{func:(0,a.K_)(f,L(Q))},depthWrite:(0,a.z5)(d),drawBuffers:Z===l.V.Depth?{buffers:[D.Hr.NONE]}:(0,a.m6)(f,Z),colorWrite:t.kn,stencilWrite:k?g.v0:null,stencilTest:k?j?g.a9:g.qh:null,polygonOffset:$||ae?null:(0,a.aB)(S)});var y}initializePipeline(d){return this._occludeePipelineState=this._makePipeline(d,!0),this._makePipeline(d,!1)}getPipeline(d){return d?this._occludeePipelineState:super.getPipeline()}}function L(y){return y===b.it.Lequal?D.MT.LEQUAL:D.MT.LESS}}}]);