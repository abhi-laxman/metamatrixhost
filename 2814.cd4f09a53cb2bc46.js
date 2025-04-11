"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[2814],{80449:(ve,Y,e)=>{e.d(Y,{C:()=>ae,b:()=>$});var O=e(29359),R=e(93877),C=e(70094),T=e(23388),U=e(51734),Z=e(33605),H=e(71781),W=e(7741),S=e(18356),I=e(24493),N=e(40972),V=e(18597),M=e(43713);function $(ee){const de=new M.N5,{vertex:ge,fragment:ie,attributes:Te,varyings:K}=de,{vvColor:X,hasVertexColors:A}=ee;return(0,W.NB)(ge,ee),de.include(R.d,ee),de.include(T.c,ee),de.include(Z.A,ee),de.include(C.g,ee),ie.include(O.HQ,ee),de.include(V.z,ee),de.include(U.Z,ee),Te.add(N.r.POSITION,"vec3"),X&&Te.add(N.r.COLORFEATUREATTRIBUTE,"float"),A||K.add("vColor","vec4"),K.add("vpos","vec3"),ge.uniforms.add(new S.E("uColor",me=>me.color)),ge.main.add(I.H`
      vpos = position;
      forwardNormalizedVertexColor();
      forwardObjectAndLayerIdColor();

      ${A?"vColor *= uColor;":X?"vColor = uColor * interpolateVVColor(colorFeatureAttribute);":"vColor = uColor;"}
      forwardViewPosDepth((view * vec4(vpos, 1.0)).xyz);
      gl_Position = transformPosition(proj, view, vpos);`),ie.include(H.a),ie.main.add(I.H`discardBySlice(vpos);
discardByTerrainDepth();
outputColorHighlightOID(vColor, vpos);`),de}const ae=Object.freeze(Object.defineProperty({__proto__:null,build:$},Symbol.toStringTag,{value:"Module"}))},67771:(ve,Y,e)=>{e.d(Y,{H:()=>S,b:()=>W});var O=e(87170),R=e(57524),C=e(65840),T=e(24493),U=e(75178),Z=e(35089),H=e(43713);function W(){const I=new H.N5;I.include(O.Q);const{fragment:N}=I;return N.uniforms.add(new Z.N("highlightTexture",V=>V.highlightTexture),new Z.N("highlightOptionsTexture",V=>V.highlightOptionsTexture),new C.m("pixelRatio",V=>V.pixelRatio),new C.m("occludedIntensityFactor",V=>V.occludedFactor),new U.W("maxHighlightLevel",V=>V.highlights.length-1)),N.constants.add("pixelSampleScale","float",1),I.include(R.y),N.code.add(T.H`const float pascal17[9] = float[9](12870.0, 11440.0, 8008.0, 4368.0, 1820.0, 560.0, 120.0, 16.0, 1.0);
const float denom17 =  65536.0;
float colorWeight[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float colorOcclusion[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
float weights[16] = float[16](0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0);
void applyTexel(vec2 texel, float weight) {
if (texel != vec2(0.0)){
int maxChannel = (maxHighlightLevel >> 2) & 1;
for (int channelIndex = 0; channelIndex <= maxChannel; ++channelIndex){
uint channel = readChannel(texel, channelIndex << 2);
int firstIndex = channelIndex << 2;
int maxIndex  = min(firstIndex + 3, maxHighlightLevel);
for (int highlightIndex = firstIndex; highlightIndex <= maxIndex; ++highlightIndex ) {
uint v = readChannelBits(channel, highlightIndex);
if ((v & 1u) == 1u){
colorWeight[highlightIndex] += weight;
if ((v & 2u) == 2u){
colorOcclusion[highlightIndex] += weight;
}
}
}
}
}
}
vec2 readTexel(ivec2 iuv, int du, int dv) {
return texelFetch(highlightTexture, iuv + ivec2(du, dv), 0).rg;
}
void readAndApplyTexel(ivec2 iuv, int du, int dv, float weight) {
vec2 texel = readTexel(iuv, du, dv);
applyTexel(texel, weight);
}
void readAndApply2TexelsU(ivec2 iuv, int du, int dv, float weight) {
readAndApplyTexel(iuv, -du, dv, weight);
readAndApplyTexel(iuv, +du, dv, weight);
}
float getWeight(int pixelDistance) {
float scaledDistance = float(pixelDistance) * pixelSampleScale / pixelRatio;
float d0f = floor(scaledDistance);
int d0 = int(d0f);
if (d0 >= 8){
return 0.0;
}
float w0 = pascal17[d0];
float w1 = pascal17[d0+1];
float f =  scaledDistance - d0f;
return mix(w0, w1, f);
}`),N.main.add(T.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
ivec2 iuv = ivec2(sUV * highlightTextureSize);
vec2 centerTexel = texelFetch(highlightTexture, iuv, 0).rg;
bool outlinePossible = false;
if (vOutlinePossible > 0.0){
for (int highlightLevel=0; highlightLevel<= maxHighlightLevel; ++highlightLevel) {
if ((readLevelBits(centerTexel,highlightLevel) & 1u) == 0u) {
outlinePossible = true;
break;
}
}
}
if (outlinePossible) {
int maxPixelDistance = clamp(int(8.0 * pixelRatio / pixelSampleScale), 2, 16);
float weightSum = 0.0;
for(int y = 0; y <= maxPixelDistance; ++y) {
float w = getWeight(y);
weights[y] = w;
weightSum += w * (y == 0 ? 1.0 : 2.0);
}
for(int y = 0; y <= maxPixelDistance; ++y) {
weights[y] = weights[y] / weightSum;
}
float weight0 = weights[0];
applyTexel(centerTexel, weight0 * weight0);
for(int y = 0; y <= maxPixelDistance; y += 1) {
float yFactor = weights[y];
if (y != 0) {
float xFactor = weight0;
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApplyTexel(iuv, 0, +y, weight);
readAndApplyTexel(iuv, 0, -y, weight);
}
}
for(int x = 1; x <= maxPixelDistance; x += 1) {
float xFactor = weights[x];
float weight = xFactor * yFactor;
if (weight > 0.0) {
readAndApply2TexelsU(iuv, x, +y, weight);
if (y != 0){
readAndApply2TexelsU(iuv, x, -y, weight);
}
}
}
}
} else {
applyTexel(centerTexel, 1.0);
}
int frontColorIndex = 999;
int maxColorIndex = 0;
for (int i = 0; i <= maxHighlightLevel; ++i) {
if (colorWeight[i] > 0.0){
frontColorIndex = min(frontColorIndex, i);
maxColorIndex = max(maxColorIndex, i);
}
}
if (frontColorIndex == 999){
fragColor = vec4(0.0);
return;
}
vec4 accumulatedColor = vec4(0.0);
for (int curColorIndex = frontColorIndex; curColorIndex <= maxColorIndex; ++curColorIndex) {
float curColorWeight = colorWeight[curColorIndex];
if (curColorWeight <= 0.01){
continue;
}
uint vc = readLevelBits(centerTexel, curColorIndex);
bool centerFilled = (vc & 1u) == 1u;
bool centerOccluded = (vc & 3u) == 3u;
float curColorOcclusion = colorOcclusion[curColorIndex];
bool occluded = centerFilled ? centerOccluded : curColorOcclusion > 0.5 * curColorWeight;
int colorChannel = centerFilled ? 0 : 1;
vec4 colorBase = texelFetch(highlightOptionsTexture, ivec2(curColorIndex, colorChannel), 0);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, 0.03, curColorWeight);
float intensity = colorBase.a * occlusionFactor * outlineFactor;
vec3 currentColor = colorBase.rgb;
float a0 = accumulatedColor.a;
float a1 = intensity;
float alpha = clamp(a0 + a1 - a0 * a1, 0.0, 1.0);
if (alpha > 0.001){
vec3 blendedColor = ((1.0 - a1) * a0 * accumulatedColor.rgb + a1 * currentColor) / alpha;
accumulatedColor = vec4(blendedColor, alpha);
}
}
fragColor = accumulatedColor;`),I}const S=Object.freeze(Object.defineProperty({__proto__:null,build:W},Symbol.toStringTag,{value:"Module"}))},35269:(ve,Y,e)=>{e.d(Y,{H:()=>Z,a:()=>N,b:()=>I,c:()=>H,g:()=>W,o:()=>S});var O=e(65152),R=e(24493),C=e(91784),T=e(70938),U=e(43713);class Z extends T.Y{}function H(){const V=new U.N5,{outputs:M,fragment:$}=V;return V.include(O.c),$.uniforms.add(new C.o("textureInput",ae=>ae.input)),$.constants.add("outlineWidth","int",Math.ceil(S)),$.constants.add("cellSize","int",W),M.add("fragGrid","vec2"),$.main.add(R.H`ivec2 inputTextureSize = textureSize(textureInput, 0);
ivec2 cellBottomLeftCornerInput = ivec2(floor(gl_FragCoord.xy) * vec2(cellSize));
ivec2 coordMid =  cellBottomLeftCornerInput + ivec2(cellSize >> 1);
uvec2 centreTexel = uvec2( texelFetch(textureInput, coordMid, 0).rg * 255.0) & uvec2(0x55u);
float marginSquare = float(outlineWidth*outlineWidth);
uvec2 outputValue = centreTexel & uvec2(0x55u);
for(int y = -outlineWidth; y <= cellSize + outlineWidth; y+=2) {
int dy = y < 0 ? -y : y > cellSize ? y-cellSize : 0;
int xMargin = dy > 0 ? int(ceil(sqrt(marginSquare - float(dy*dy)))) : outlineWidth;
for(int x = -xMargin; x <= cellSize + xMargin; x+=2) {
ivec2 coord = cellBottomLeftCornerInput + ivec2(x, y);
uvec2[4] texels = uvec2[4] (
uvec2(texelFetch(textureInput,coord+ivec2(0,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,0),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(0,1),0).rg * 255.0) & uvec2(0x55u),
uvec2(texelFetch(textureInput,coord+ivec2(1,1),0).rg * 255.0) & uvec2(0x55u)
);
if (texels[0] == texels[1] && texels[1] == texels[2] && texels[2] == texels[3] && texels[3] ==  centreTexel) {
continue;
}
for (int i=0; i<4; ++i){
outputValue |= ((texels[i] ^ centreTexel) << 1);
outputValue |= texels[i];
}
}
}
fragGrid = vec2(outputValue) / 255.0;`),V}const W=32,S=9,I=.4,N=Object.freeze(Object.defineProperty({__proto__:null,HighlightDownsampleDrawParameters:Z,blurSize:I,build:H,gridCellPixelSize:W,outlineSize:S},Symbol.toStringTag,{value:"Module"}))},11320:(ve,Y,e)=>{e.d(Y,{H:()=>W,b:()=>H});var O=e(87170),R=e(57524),C=e(24493),T=e(41204),U=e(35089),Z=e(43713);function H(){const S=new Z.N5;S.include(O.Q),S.include(R.y);const{fragment:I}=S;return S.outputs.add("fragSingleHighlight","vec2",0),I.uniforms.add(new U.N("highlightTexture",N=>N.highlightTexture),new T.c("highlightLevel",N=>N.highlightLevel)),I.main.add(C.H`ivec2 iuv = ivec2(gl_FragCoord.xy);
vec2 inputTexel = texelFetch(highlightTexture, iuv, 0).rg;
uint bits = readLevelBits(inputTexel, highlightLevel);
bool hasHighlight = (bits & 1u) == 1u;
bool hasOccluded  = (bits & 2u) == 2u;
fragSingleHighlight = vec2(hasHighlight ? 1.0 : 0.0, hasOccluded ? 1.0 : 0.0);`),S}const W=Object.freeze(Object.defineProperty({__proto__:null,build:H},Symbol.toStringTag,{value:"Module"}))},60615:(ve,Y,e)=>{e.d(Y,{O:()=>S,a:()=>N,b:()=>I});var O=e(40281),R=e(65152),C=e(65840),T=e(24493),U=e(41204),Z=e(35089),H=e(70938),W=e(43713);class S extends H.Y{constructor(){super(...arguments),this.overlayIndex=O.vr.INNER,this.opacity=1}}function I(){const V=new W.N5;return V.include(R.c),V.fragment.uniforms.add(new Z.N("tex",M=>M.texture)),V.fragment.uniforms.add(new U.c("overlayIdx",M=>M.overlayIndex)),V.fragment.uniforms.add(new C.m("opacity",M=>M.opacity)),V.fragment.main.add(T.H`vec2 overlayUV = overlayIdx == 0 ? vec2(uv.x * 0.5, uv.y) : vec2(uv.x * 0.5 + 0.5, uv.y);
fragColor = texture(tex, overlayUV) * opacity;`),V}const N=Object.freeze(Object.defineProperty({__proto__:null,OverlayCompositingPassParameters:S,build:I},Symbol.toStringTag,{value:"Module"}))},4499:(ve,Y,e)=>{e.d(Y,{S:()=>N,b:()=>I});var O=e(87170),R=e(57524),C=e(15683),T=e(65840),U=e(24493),Z=e(41204),H=e(35089),W=e(35269),S=e(43713);function I(){const V=new S.N5;V.include(O.Q);const{fragment:M}=V;return M.uniforms.add(new H.N("blurInput",$=>$.singleHighlightBlurTexture),new C.t("blurSize",$=>$.blurSize),new H.N("highlightTexture",$=>$.highlightTexture),new H.N("highlightOptionsTexture",$=>$.highlightOptionsTexture),new Z.c("highlightLevel",$=>$.highlightLevel),new T.m("occludedIntensityFactor",$=>$.occludedFactor)),M.constants.add("inner","float",1-(W.o-W.b)/W.o),V.include(R.y),M.main.add(U.H`vec2 highlightTextureSize = vec2(textureSize(highlightTexture,0));
vec2 uv = sUV;
vec2 center = texture(blurInput, uv).rg;
vec2 blurredHighlightValue = (vOutlinePossible == 0.0)
? center
: center * 0.204164
+ texture(blurInput, uv + blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv - blurSize * 1.407333).rg * 0.304005
+ texture(blurInput, uv + blurSize * 3.294215).rg * 0.093913
+ texture(blurInput, uv - blurSize * 3.294215).rg * 0.093913;
float highlightIntensity = blurredHighlightValue.r;
float occlusionWeight = blurredHighlightValue.g;
if (highlightIntensity <= 0.01) {
discard;
}
vec4 fillColor    = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 0), 0);
vec4 outlineColor = texelFetch(highlightOptionsTexture, ivec2(highlightLevel, 1), 0);
vec2 centerTexel = texelFetch(highlightTexture, ivec2(uv * highlightTextureSize), 0).rg;
uint centerBits = readLevelBits(centerTexel, highlightLevel);
bool centerFilled = (centerBits & 1u) == 1u;
bool centerOccluded = (centerBits & 3u) == 3u;
bool occluded = centerOccluded || (0.5 * highlightIntensity < occlusionWeight);
float occlusionFactor = occluded ? occludedIntensityFactor : 1.0;
float outlineFactor = centerFilled ? 1.0 : smoothstep(0.0, inner, highlightIntensity);
float fillFactor = centerFilled ? 1.0 : 0.0;
vec4 baseColor = mix(outlineColor, fillColor, fillFactor);
float intensity = baseColor.a * occlusionFactor * outlineFactor;
fragColor = vec4(baseColor.rgb, intensity);`),V}const N=Object.freeze(Object.defineProperty({__proto__:null,build:I},Symbol.toStringTag,{value:"Module"}))},31092:(ve,Y,e)=>{e.d(Y,{S:()=>W,a:()=>I,b:()=>S});var O=e(45475),R=e(87170),C=e(15683),T=e(24493),U=e(91784),Z=e(70938),H=e(43713);class W extends Z.Y{constructor(){super(...arguments),this.blurSize=(0,O.vt)()}}function S(){const N=new H.N5;return N.include(R.Q),N.outputs.add("fragSingleHighlight","vec2",0),N.fragment.uniforms.add(new C.t("blurSize",V=>V.blurSize),new U.o("blurInput",V=>V.blurInput)).main.add(T.H`vec2 highlightTextureSize = vec2(textureSize(blurInput,0));
vec2 center = texture(blurInput, sUV).rg;
if (vOutlinePossible == 0.0) {
fragSingleHighlight = center;
} else {
vec2 sum = center * 0.204164;
sum += texture(blurInput, sUV + blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV - blurSize * 1.407333).rg * 0.304005;
sum += texture(blurInput, sUV + blurSize * 3.294215).rg * 0.093913;
sum += texture(blurInput, sUV - blurSize * 3.294215).rg * 0.093913;
fragSingleHighlight = sum;
}`),N}const I=Object.freeze(Object.defineProperty({__proto__:null,SingleHighlightBlurDrawParameters:W,build:S},Symbol.toStringTag,{value:"Module"}))},31412:(ve,Y,e)=>{e.d(Y,{T:()=>W,a:()=>I,b:()=>S});var O=e(25866),R=e(65152),C=e(88791),T=e(24493),U=e(35089),Z=e(70938),H=e(43713);class W extends Z.Y{constructor(){super(...arguments),this.color=(0,O.fA)(1,1,1)}}function S(){const N=new H.N5;return N.include(R.c),N.fragment.uniforms.add(new U.N("tex",V=>V.texture),new C.t("uColor",V=>V.color)),N.fragment.main.add(T.H`vec4 texColor = texture(tex, uv);
fragColor = texColor * vec4(uColor, 1.0);`),N}const I=Object.freeze(Object.defineProperty({__proto__:null,TextureOnlyPassParameters:W,build:S},Symbol.toStringTag,{value:"Module"}))},33087:(ve,Y,e)=>{e.d(Y,{q:()=>R});var O=e(60611);class R{constructor(T,U){this._storage=new O.F,this.id="",this.name="",this.size=0,this._storage.maxSize=T,this._storage.register(this),U&&this._storage.registerRemoveFunc("",U)}destroy(){this._storage.deregister(this),this._storage.destroy()}put(T,U,Z=1){this._storage.put(this,T,U,Z,1)}pop(T){return this._storage.pop(this,T)}get(T){return this._storage.get(this,T)}clear(){this._storage.clearAll()}get maxSize(){return this._storage.maxSize}set maxSize(T){this._storage.maxSize=T}resetHitRate(){}}},67571:(ve,Y,e)=>{e.d(Y,{O:()=>O});class O{constructor(){this._outer=new Map}clear(){this._outer.clear()}get empty(){return 0===this._outer.size}get(C,T){return this._outer.get(C)?.get(T)}getInner(C){return this._outer.get(C)}set(C,T,U){const Z=this._outer.get(C);Z?Z.set(T,U):this._outer.set(C,new Map([[T,U]]))}delete(C,T){const U=this._outer.get(C);U&&(U.delete(T),0===U.size&&this._outer.delete(C))}forEach(C){this._outer.forEach((T,U)=>C(T,U))}forAll(C){for(const T of this._outer.values())for(const U of T.values())C(U)}}},14624:(ve,Y,e)=>{var O,R;e.d(Y,{$:()=>O}),(R=O||(O={}))[R.EnableFastUpdates=0]="EnableFastUpdates",R[R.DisableFastUpdates=1]="DisableFastUpdates",R[R.UpdateFastLocalOrigin=2]="UpdateFastLocalOrigin"},8134:(ve,Y,e)=>{e.d(Y,{$4:()=>de,O0:()=>ge,O1:()=>ie,Sw:()=>Te,eH:()=>ae,rc:()=>ee});var O=e(90261),R=e(68677),C=e(89563),T=e(33087),U=e(67685),Z=e(76926);const H="picture-fill",W="simple-fill",S="simple-line",I="simple-marker",N="text",V="cim",M=new Map([["dash",[4,3]],["dashdot",[4,3,1,3]],["dot",[1,3]],["longdash",[8,3]],["longdashdot",[8,3,1,3]],["longdashdotdot",[8,3,1,3,1,3]],["shortdash",[4,1]],["shortdashdot",[4,1,1,1]],["shortdashdotdot",[4,1,1,1,1,1]],["shortdot",[1,1]],["solid",[]]]),$=new T.q(1e3);function ae(K){const X=K.style;let A=null;if(K)switch(K.type){case I:"cross"!==X&&"x"!==X&&(A=K.color);break;case W:X&&"solid"!==X?"none"!==X&&(A={type:"pattern",x:0,y:0,src:(0,O.s)(`esri/symbols/patterns/${X}.png`),width:5,height:5}):A=K.color;break;case H:A={type:"pattern",src:K.url,width:(0,U.Lz)(K.width)*K.xscale,height:(0,U.Lz)(K.height)*K.yscale,x:(0,U.Lz)(K.xoffset),y:(0,U.Lz)(K.yoffset)};break;case N:A=K.color;break;case V:A=(0,Z.Nk)(K)}return A}function ee(K,X){const A=K+"-"+X;return void 0!==$.get(A)?Promise.resolve($.get(A)):(0,C.A)(K,{responseType:"image"}).then(me=>{const ue=me.data,re=ue.naturalWidth,J=ue.naturalHeight,b=document.createElement("canvas");b.width=re,b.height=J;const B=b.getContext("2d");B.fillStyle=X,B.fillRect(0,0,re,J),B.globalCompositeOperation="destination-in",B.drawImage(ue,0,0);const z=b.toDataURL();return $.put(A,z),z})}function de(K){if(!K)return null;let X=null;switch(K.type){case W:case H:case I:X=de(K.outline);break;case S:{const A=(0,U.Lz)(K.width);null!=K.style&&"none"!==K.style&&0!==A&&(X={color:K.color,style:ie(K.style),width:A,cap:K.cap,join:"miter"===K.join?(0,U.Lz)(K.miterLimit):K.join},X.dashArray=ge(X).join(",")||"none");break}default:X=null}return X}function ge(K){if(!K?.style)return[];const{dashArray:X,style:A,width:me}=K;if("string"==typeof X&&"none"!==X)return X.split(",").map(J=>Number(J));const ue=me??0,re=M.has(A)?M.get(A).map(J=>J*ue):[];if("butt"!==K.cap)for(const[J,b]of re.entries())re[J]=J%2==1?b+ue:Math.max(b-ue,1);return re}const ie=(()=>{const K={};return X=>{if(K[X])return K[X];const A=X.replaceAll("-","");return K[X]=A,A}})(),Te=new R.A([128,128,128])},83393:(ve,Y,e)=>{e.d(Y,{$d:()=>ae,GG:()=>tt,N7:()=>ee,Sx:()=>de,UQ:()=>Le,di:()=>Ne,dt:()=>X,f3:()=>ht,k_:()=>$});var O=e(10467),R=e(68677),C=e(89447),U=(e(3248),e(67685)),Z=e(25866),H=e(72211),W=e(76926),S=e(8134),I=e(74760),N=e(94048);const V=new R.A("white");function $(E){if(!E)return 0;if((0,N.wk)(E)){const w=function M(E){const w=E.symbolLayers?.at(-1);if(w&&"outline"in w)return w?.outline?.size}(E);return w??0}return(0,U.PN)((0,S.$4)(E)?.width)}function ae(E){if(null==E||!("symbolLayers"in E)||null==E.symbolLayers)return!1;switch(E.type){case"point-3d":return E.symbolLayers.some(w=>"object"===w.type);case"line-3d":return E.symbolLayers.some(w=>"path"===w.type);case"polygon-3d":return E.symbolLayers.some(w=>"object"===w.type||"extrude"===w.type);default:return!1}}function ee(E){return E.resource?.href??""}function de(E,w){if(!E)return null;let G=null;return(0,N.wk)(E)?G=function ge(E){const w=E.symbolLayers;if(!w)return null;let G=null;return w.forEach(le=>{"object"===le.type&&le.resource?.href||(G="water"===le.type?le.color:le.material?le.material.color:null)}),G?new R.A(G):null}(E):(0,N.$y)(E)&&(G="cim"===E.type?(0,W.Nk)(E):E.color?new R.A(E.color):null),G?ie(G,w):null}function ie(E,w){if(null==w||null==E)return E;const G=E.toRgba();return G[3]=G[3]*w,new R.A(G)}function X(E,w,G){E&&(w||null!=G)&&(w&&(w=new R.A(w)),(0,N.wk)(E)?function Te(E,w,G){const le=E.symbolLayers;if(!le)return;const ye=ce=>ie(w=w??ce??(null!=G?V:null),G);le.forEach(ce=>{if("object"!==ce.type||!ce.resource?.href||w)if("water"===ce.type)ce.color=ye(ce.color);else{const ze=ye(null!=ce.material?ce.material.color:null);null==ce.material?ce.material=new I.N({color:ze}):ce.material.color=ze,null!=G&&"outline"in ce&&null!=ce.outline?.color&&(ce.outline.color=ie(ce.outline.color,G))}})}(E,w,G):(0,N.$y)(E)&&function K(E,w,G){(w=w??E.color)&&(E.color=ie(w,G)),null!=G&&"outline"in E&&E.outline?.color&&(E.outline.color=ie(E.outline.color,G))}(E,w,G))}function me(){return me=(0,O.A)(function*(E,w){const G=E.symbolLayers;G&&(yield(0,C.jJ)(G,function(){var le=(0,O.A)(function*(ye){return function ue(E,w){return re.apply(this,arguments)}(ye,w)});return function(ye){return le.apply(this,arguments)}}()))}),me.apply(this,arguments)}function re(){return re=(0,O.A)(function*(E,w){switch(E.type){case"extrude":!function B(E,w){E.size="number"==typeof w[2]?w[2]:0}(E,w);break;case"icon":case"line":case"text":!function J(E,w){const G=b(w);null!=G&&(E.size=G)}(E,w);break;case"path":!function xe(E,w){const G=Ce(w,Z.Un,[E.width,void 0,E.height]);E.width=ne(w[0],E.width,1,G),E.height=ne(w[2],E.height,1,G)}(E,w);break;case"object":yield function z(E,w){return te.apply(this,arguments)}(E,w)}}),re.apply(this,arguments)}function b(E){for(const w of E)if("number"==typeof w)return w;return null}function te(){return te=(0,O.A)(function*(E,w){const{resourceSize:G,symbolSize:le}=yield function q(E){return se.apply(this,arguments)}(E),ye=Ce(w,G,le);E.width=ne(w[0],le[0],G[0],ye),E.depth=ne(w[1],le[1],G[1],ye),E.height=ne(w[2],le[2],G[2],ye)}),te.apply(this,arguments)}function Ce(E,w,G){for(let le=0;le<3;le++){const ye=E[le];switch(ye){case"symbol-value":{const ce=G[le];return null!=ce?ce/w[le]:1}case"proportional":break;default:if(ye&&w[le])return ye/w[le]}}return 1}function se(){return(se=(0,O.A)(function*(E){const{computeObjectLayerResourceSize:w}=yield e.e(5020).then(e.bind(e,75020)),G=yield w(E,10),{width:le,height:ye,depth:ce}=E,He=[le,ce,ye];let ze=1;for(let Fe=0;Fe<3;Fe++){const k=He[Fe];if(null!=k){ze=k/G[Fe];break}}for(let Fe=0;Fe<3;Fe++)null==He[Fe]&&(He[Fe]=G[Fe]*ze);return{resourceSize:G,symbolSize:He}})).apply(this,arguments)}function ne(E,w,G,le){switch(E){case"proportional":return G*le;case"symbol-value":return w??G;default:return E}}function Le(E,w){return Ye.apply(this,arguments)}function Ye(){return Ye=(0,O.A)(function*(E,w){if(E&&w)return(0,N.wk)(E)?function A(E,w){return me.apply(this,arguments)}(E,w):void((0,N.$y)(E)&&function be(E,w){const G=b(w);if(null!=G)switch(E.type){case"simple-marker":E.size=G;break;case"picture-marker":{const le=E.width/E.height;le>1?(E.width=G,E.height=G*le):(E.width=G*le,E.height=G);break}case"simple-line":E.width=G;break;case"text":E.font.size=G}}(E,w))}),Ye.apply(this,arguments)}function tt(E,w,G){if(E&&null!=w)if((0,N.wk)(E)){const le=E.symbolLayers;le&&le.forEach(ye=>{if("object"===ye.type)switch(G){case"tilt":ye.tilt=(ye.tilt??0)+w;break;case"roll":ye.roll=(ye.roll??0)+w;break;default:ye.heading=(ye.heading??0)+w}"icon"===ye.type&&(ye.angle+=w)})}else(0,N.$y)(E)&&("simple-marker"!==E.type&&"picture-marker"!==E.type&&"text"!==E.type||(E.angle+=w))}function Ne(E){if(!E)return null;const w=E.effects.filter(G=>"bloom"!==G.type).map(G=>G.toJSON());return(0,H.zu)(w)}function ht(E){return null!=E&&"polygon-3d"===E.type&&E.symbolLayers.some(w=>"extrude"===w.type)}},27723:(ve,Y,e)=>{var O,R,T;function C(T){return null!=T&&!T.running}e.d(Y,{c:()=>R,pi:()=>C,tf:()=>O}),(T=O||(O={}))[T.Idle=0]="Idle",T[T.Rendering=1]="Rendering",T[T.Ready=2]="Ready",T[T.Fading=3]="Fading",function(T){T[T.RG=0]="RG",T[T.BA=1]="BA",T[T.COUNT=2]="COUNT"}(R||(R={}))},58135:(ve,Y,e)=>{e.d(Y,{c:()=>M,n:()=>V});var M,K,O=e(69690),R=e(69287),C=e(54029),T=e(92771),U=e(62789),Z=e(28714),H=e(25866),W=e(63842),S=e(47258),I=e(27723),N=e(30261);class V{constructor(){this.startTime=0,this._data=(0,C.v)(null),this._readChannels=I.c.RG,this.parallax=new $,this.parallaxNew=new $,this._anchorPoint=(0,H.vt)(),this._fadeState=(0,C.v)(M.HIDE),this._fadeFactor=(0,C.v)(1)}get data(){return this._data.value}set data(X){this._data.value=X}get readChannels(){return this._readChannels}get fadeState(){return this._fadeState.value}get fadeFactor(){return this._fadeFactor.value}get opacity(){switch(this.fadeState){case M.HIDE:return 0;case M.FADE_OUT:return 1-this.fadeFactor;case M.FADE_IN:return this.fadeFactor;case M.SHOW:case M.CROSS_FADE:return 1}}fade(X,A,me){this.isFading&&this.fadeFactor<1&&(this._fadeFactor.value=me?(0,R.qE)((A-this.startTime)/(ge*me),0,1):1,1===this.fadeFactor&&this._endFade()),this._evaluateState(X,A),this._updateParallax(X)}_evaluateState(X,A){const me=X.relativeElevation,ue=this._updateAnchorPoint(X);(me>1.7*N.zF||me<-1e4||ue>Te)&&this.opacity>0?this._startFade(M.HIDE,A):this.isFading||(me>N.zF||me<-.35*N.zF||ue>ie*Te?this.opacity>0&&this._startFade(M.FADE_OUT,A):(0,I.pi)(this.data)&&(0===this.opacity?this._startFade(M.FADE_IN,A):this.data.state===I.tf.Ready&&this._startFade(this.fadeState===M.SHOW?M.CROSS_FADE:M.SHOW,A)))}_updateParallax(X){const A=(0,Z.k)(X.eye);this.parallax.radiusCurvatureCorrection=.84*Math.sqrt(Math.max(A-S.$O.radius*S.$O.radius,0))/Math.sqrt(A),(0,W.Cr)(ae,this.parallax.anchorPoint,ee),(0,T.e$)(this.parallax.transform,U.zK,ee[3],(0,W.yo)(ee)),(0,W.Cr)(ae,this.parallaxNew.anchorPoint,ee),(0,T.e$)(this.parallaxNew.transform,U.zK,ee[3],(0,W.yo)(ee))}_updateAnchorPoint(X){return(0,Z.n)(this._anchorPoint,X.eye),(0,Z.h)(this._anchorPoint,this._anchorPoint,S.$O.radius),this.fadeState===M.HIDE&&this.data?.state===I.tf.Ready?((0,Z.c)(this.parallax.anchorPoint,this._anchorPoint),0):(0,Z.l)((0,Z.d)(de,this.parallax.anchorPoint,this._anchorPoint))}requestFade(){this._fadeFactor.value=0}_startFade(X,A){switch(this._fadeState.value=X,this.startTime=A,X){case M.CROSS_FADE:this.requestFade(),this._switchReadChannels(),(0,Z.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case M.FADE_IN:this.requestFade(),this._switchReadChannels(),(0,Z.c)(this.parallax.anchorPoint,this._anchorPoint),(0,Z.c)(this.parallaxNew.anchorPoint,this._anchorPoint);break;case M.FADE_OUT:this.requestFade();break;case M.SHOW:this._switchReadChannels(),(0,Z.c)(this.parallax.anchorPoint,this._anchorPoint),(0,Z.c)(this.parallaxNew.anchorPoint,this._anchorPoint),this._endFade();break;case M.HIDE:this._endFade()}}_endFade(){switch(this._fadeFactor.value=1,this.data&&this.data.state!==I.tf.Ready&&(this.data.state=I.tf.Idle),this.fadeState){case M.CROSS_FADE:(0,Z.c)(this.parallax.anchorPoint,this.parallaxNew.anchorPoint),this._fadeState.value=M.SHOW;break;case M.FADE_IN:this._fadeState.value=M.SHOW;break;case M.FADE_OUT:this._fadeState.value=M.HIDE;break;case M.SHOW:case M.HIDE:break;default:(0,O.Xb)(this.fadeState)}}_switchReadChannels(){this.data?.state===I.tf.Ready&&(this._readChannels=1-this._readChannels,this.data.state=I.tf.Fading)}get isFading(){return this.fadeState===M.FADE_OUT||this.fadeState===M.FADE_IN||this.fadeState===M.CROSS_FADE}}(K=M||(M={}))[K.HIDE=0]="HIDE",K[K.FADE_IN=1]="FADE_IN",K[K.SHOW=2]="SHOW",K[K.CROSS_FADE=3]="CROSS_FADE",K[K.FADE_OUT=4]="FADE_OUT";class ${constructor(){this.anchorPoint=(0,H.vt)(),this.radiusCurvatureCorrection=0,this.transform=(0,U.vt)()}}const ae=(0,H.fA)(0,0,1),ee=(0,W.vt)(),de=(0,H.vt)(),ge=1.25,ie=.5,Te=2e5},30261:(ve,Y,e)=>{e.d(Y,{k9:()=>b,zF:()=>J});var S,O=e(8189),R=e(71065),C=e(85211),H=(e(3248),e(35150),e(40707),e(15463)),W=e(76576);let I=S=class extends R.A{constructor(B){super(B),this.type="cloudy",this.cloudCover=.5}clone(){return new S({cloudCover:this.cloudCover})}};(0,O._)([(0,H.e)({cloudy:"cloudy"}),(0,C.MZ)({json:{write:{isRequired:!0}}})],I.prototype,"type",void 0),(0,O._)([(0,C.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],I.prototype,"cloudCover",void 0),I=S=(0,O._)([(0,W.$)("esri.views.3d.environment.CloudyWeather")],I);const N=I;var V;let M=V=class extends R.A{constructor(B){super(B),this.type="foggy",this.fogStrength=.5}clone(){return new V({fogStrength:this.fogStrength})}};(0,O._)([(0,H.e)({foggy:"foggy"}),(0,C.MZ)({json:{write:{isRequired:!0}}})],M.prototype,"type",void 0),(0,O._)([(0,C.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],M.prototype,"fogStrength",void 0),M=V=(0,O._)([(0,W.$)("esri.views.3d.environment.FoggyWeather")],M);const $=M;var ae;let ee=ae=class extends R.A{constructor(B){super(B),this.type="rainy",this.cloudCover=.5,this.precipitation=.5}clone(){return new ae({cloudCover:this.cloudCover,precipitation:this.precipitation})}};(0,O._)([(0,H.e)({rainy:"rainy"}),(0,C.MZ)({json:{write:{isRequired:!0}}})],ee.prototype,"type",void 0),(0,O._)([(0,C.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],ee.prototype,"cloudCover",void 0),(0,O._)([(0,C.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],ee.prototype,"precipitation",void 0),ee=ae=(0,O._)([(0,W.$)("esri.views.3d.environment.RainyWeather")],ee);const de=ee;var ge;let ie=ge=class extends R.A{constructor(B){super(B),this.type="snowy",this.cloudCover=.5,this.precipitation=.5,this.snowCover="disabled"}clone(){return new ge({cloudCover:this.cloudCover,precipitation:this.precipitation,snowCover:this.snowCover})}};(0,O._)([(0,H.e)({snowy:"snowy"}),(0,C.MZ)({json:{write:{isRequired:!0}}})],ie.prototype,"type",void 0),(0,O._)([(0,C.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],ie.prototype,"cloudCover",void 0),(0,O._)([(0,C.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],ie.prototype,"precipitation",void 0),(0,O._)([(0,C.MZ)({type:["enabled","disabled"],nonNullable:!0,json:{write:!0}})],ie.prototype,"snowCover",void 0),ie=ge=(0,O._)([(0,W.$)("esri.views.3d.environment.SnowyWeather")],ie);const Te=ie;var K;let X=K=class extends R.A{constructor(B){super(B),this.type="sunny",this.cloudCover=.5}clone(){return new K({cloudCover:this.cloudCover})}};(0,O._)([(0,H.e)({sunny:"sunny"}),(0,C.MZ)({json:{write:{isRequired:!0}}})],X.prototype,"type",void 0),(0,O._)([(0,C.MZ)({type:Number,nonNullable:!0,range:{min:0,max:1},json:{write:!0}})],X.prototype,"cloudCover",void 0),X=K=(0,O._)([(0,W.$)("esri.views.3d.environment.SunnyWeather")],X),Object.keys({sunny:X,cloudy:N,rainy:de,snowy:Te,foggy:$});const J=1e4,b=1e5},81897:(ve,Y,e)=>{e.d(Y,{t:()=>$,z:()=>re});var O=e(83953),R=e(45475),C=e(89141),T=e(87477),U=e(70744),Z=e(23653),H=e(81596),W=e(83034),S=e(23191),I=e(83346),N=e(98176),V=e(36884),M=e(40972);function $(J,b,B=null){const z=[],te=b.mapPositions;!function ae(J,b){const{attributeData:{position:B},removeDuplicateStartEnd:z}=J,te=function A(J){const b=J.length;return J[0]===J[b-3]&&J[1]===J[b-2]&&J[2]===J[b-1]}(B)&&z,xe=B.length/3-(te?1:0),Ce=new Array(2*(xe-1)),q=te?B.slice(0,-3):B;let se=0;for(let ne=0;ne<xe-1;ne++)Ce[se++]=ne,Ce[se++]=ne+1;b.push([M.r.POSITION,new I.n(q,Ce,3,te)])}(b,z);const xe=z[0][1].data,q=(0,W.EH)(z[0][1].indices.length);return function ee(J,b,B){if(null!=J.attributeData.colorFeature)return;b.push([M.r.COLOR,new I.n(J.attributeData.color??C.Un,B,4)])}(b,z,q),function ie(J,b,B){null==J.attributeData.sizeFeature&&b.push([M.r.SIZE,new I.n([J.attributeData.size??1],B,1,!0)])}(b,z,q),function de(J,b,B){J.attributeData.normal&&b.push([M.r.NORMAL,new I.n(J.attributeData.normal,B,3)])}(b,z,q),function ge(J,b,B){null!=J.attributeData.colorFeature&&b.push([M.r.COLORFEATUREATTRIBUTE,new I.n([J.attributeData.colorFeature],B,1,!0)])}(b,z,q),function Te(J,b,B){null!=J.attributeData.sizeFeature&&b.push([M.r.SIZEFEATUREATTRIBUTE,new I.n([J.attributeData.sizeFeature],B,1,!0)])}(b,z,q),function K(J,b,B){null!=J.attributeData.opacityFeature&&b.push([M.r.OPACITYFEATUREATTRIBUTE,new I.n([J.attributeData.opacityFeature],B,1,!0)])}(b,z,q),function X(J,b,B){if(null==J.overlayInfo||J.overlayInfo.renderCoordsHelper.viewingMode!==S.RT.Global||!J.overlayInfo.spatialReference.isGeographic)return;const z=(0,Z.jh)(B.length),te=(0,T.tO)(J.overlayInfo.spatialReference);for(let Le=0;Le<z.length;Le+=3)(0,U.RC)(B,Le,z,Le,te);const xe=B.length/3,Ce=(0,H.oe)(xe+1);let q=me,se=ue,ne=0,be=0;(0,O.hZ)(q,z[be++],z[be++]),be++,Ce[0]=0;for(let Le=1;Le<xe+1;++Le)Le===xe&&(be=0),(0,O.hZ)(se,z[be++],z[be++]),be++,ne+=(0,O.xg)(q,se),Ce[Le]=ne,[q,se]=[se,q];b.push([M.r.DISTANCETOSTART,new I.n(Ce,b[0][1].indices,1,!0)])}(b,z,xe),new V.V(J,z,te,N.X.Line,B)}const me=(0,R.vt)(),ue=(0,R.vt)();function re(J,b){if(null==J||0===J.length)return[];const B=[];return J.forEach(z=>{const xe=(0,Z.jh)(3*z.length);z.forEach((q,se)=>{xe[3*se]=q[0],xe[3*se+1]=q[1],xe[3*se+2]=q[2]}),B.push({attributeData:{position:xe,normal:b},removeDuplicateStartEnd:!1})}),B}},21031:(ve,Y,e)=>{e.d(Y,{A:()=>H,C:()=>Z});var O=e(23234),R=e(23653),C=e(37723),T=e(69307),U=e(24425);function Z(S,I,N,V){const M="polygon"===S.type?C.Wq.CCW_IS_HOLE:C.Wq.NONE,$="polygon"===S.type?S.rings:S.paths,{position:ae,outlines:ee}=(0,C.oR)($,!!S.hasZ,M,S.spatialReference),de=(0,R.jh)(ae.length),ge=(0,T.au)(ae,S.spatialReference,0,de,0,ae,0,ae.length/3,I,N,V),ie=null!=ge;return{lines:ie?W(ee,ae,de):[],projectionSuccess:ie,sampledElevation:ge}}function H(S,I){const N="polygon"===S.type?C.Wq.CCW_IS_HOLE:C.Wq.NONE,V="polygon"===S.type?S.rings:S.paths,{position:M,outlines:$}=(0,C.oR)(V,!1,N),ae=(0,O.projectBuffer)(M,S.spatialReference,0,M,I,0);for(let ee=2;ee<M.length;ee+=3)M[ee]=U.bi;return{lines:ae?W($,M):[],projectionSuccess:ae}}function W(S,I,N=null){const V=new Array;for(const{index:M,count:$}of S){if($<=1)continue;const ae=3*M,ee=3*$;V.push({position:(0,R.l5)(I,3*M,3*$),mapPositions:null!=N?(0,R.l5)(N,ae,ee):void 0})}return V}},24425:(ve,Y,e)=>{e.d(Y,{bi:()=>Vr});var A,g,O=e(8189),R=e(42425),C=e(3248),T=e(60797),U=e(11432),Z=e(12438),H=e(48900),W=e(17435),S=e(85211),I=e(35150),V=(e(40707),e(76576)),M=e(92771),$=e(28714),ae=e(25866),ee=e(88372),de=e(45321),ge=e(40281),ie=e(51995),Te=e(19213);class K{constructor(){this._extent=(0,ie.vt)(),this.resolution=0,this.renderLocalOrigin=(0,Te.f)(0,0,0,"O"),this.pixelRatio=1,this.mapUnitsPerPixel=1,this.canvasGeometries=new X}get extent(){return this._extent}setupGeometryViewsCyclical(h){this.setupGeometryView();const _=.001*h.range;if(this._extent[0]-_<=h.min){const f=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,ie.cY)(this._extent,h.range,0,f)}if(this._extent[2]+_>=h.max){const f=this.canvasGeometries.extents[this.canvasGeometries.numViews++];(0,ie.cY)(this._extent,-h.range,0,f)}}setupGeometryView(){this.canvasGeometries.numViews=1,(0,ie.C)(this.canvasGeometries.extents[0],this._extent)}hasSomeSizedView(){for(let h=0;h<this.canvasGeometries.numViews;h++){const _=this.canvasGeometries.extents[h];if(_[0]!==_[2]&&_[1]!==_[3])return!0}return!1}}class X{constructor(){this.extents=[(0,ie.vt)(),(0,ie.vt)(),(0,ie.vt)()],this.numViews=0}}(g=A||(A={}))[g.Color=0]="Color",g[g.ColorNoRasterImage=1]="ColorNoRasterImage",g[g.Highlight=2]="Highlight",g[g.WaterNormal=3]="WaterNormal",g[g.Occluded=4]="Occluded",g[g.ObjectAndLayerIdColor=5]="ObjectAndLayerIdColor";class me{constructor(h,_,f){this._fbos=h,this._format=_,this._name=f}get valid(){return null!=this._handle?.getTexture()}dispose(){this._handle=(0,U.Gz)(this._handle)}get texture(){return this._handle?.getTexture()}bind(h,_,f){this._handle&&this._handle.fbo?.width===_&&this._handle.fbo?.height===f||(this._handle?.release(),this._handle=this._fbos.acquire(_,f,this._name,this._format)),h.bindFramebuffer(this._handle?.fbo)}generateMipMap(){this._handle?.getTexture()?.descriptor?.hasMipmap&&this._handle?.getTexture()?.generateMipmap()}}var ue=e(5077),re=e(74567),J=e(12335);class b{constructor(h,_,f,D,P=ue.N.RGBA_MIPMAP){this.output=f,this.content=D,this.fbo=new me(h,P,_)}get valid(){return this.fbo.valid}}class B{constructor(h){this.targets=[new b(h,"overlay color",re.V.Color,A.Color),new b(h,"overlay IM color",re.V.Color,A.ColorNoRasterImage),new b(h,"overlay highlight",re.V.Highlight,A.Highlight,ue.N.RG),new b(h,"overlay water",re.V.Normal,A.WaterNormal),new b(h,"overlay occluded",re.V.Color,A.Occluded)],(0,J.E)()&&this.targets.push(new b(h,"overlay olid",re.V.ObjectAndLayerIdColor,A.ObjectAndLayerIdColor,ue.N.RGBA))}getTexture(h){return this.targets[h]?.fbo.texture}dispose(){for(const h of this.targets)h.fbo.dispose()}computeValidity(){return this.targets.reduce((h,_,f)=>_.valid?h|=1<<f:h,0)}}var xe,Ne,z=e(80009),te=e(89141);!function(g){g[g.Material=0]="Material",g[g.ShadowMap=1]="ShadowMap",g[g.Highlight=2]="Highlight",g[g.ViewshedShadowMap=3]="ViewshedShadowMap"}(xe||(xe={})),e(44987),e(9933),e(18693),e(80585),e(65840),e(24493),e(35089),e(64157),function(g){g[g.Disabled=0]="Disabled",g[g.Enabled=1]="Enabled",g[g.EnabledWithWater=2]="EnabledWithWater",g[g.COUNT=3]="COUNT"}(Ne||(Ne={})),(0,te.vt)();var ze=e(31412),Fe=e(85732),k=e(83953),yt=e(10294),ir=e(22057),Ze=e(11556),$e=e(18110),or=e(67771),Me=e(41396);class It extends $e.w{constructor(h,_){super(h,_,new Ze.$(or.H,()=>e.e(1585).then(e.bind(e,51585))))}initializePipeline(){return(0,Me.Ey)({blending:Me.Ky,colorWrite:Me.kn})}}var Xe=e(35269);class At extends $e.w{constructor(h,_){super(h,_,new Ze.$(Xe.a,()=>e.e(2815).then(e.bind(e,2815))))}initializePipeline(){return(0,Me.Ey)({colorWrite:Me.kn})}}var sr=e(56253),nr=e(70938);class ar extends nr.Y{constructor(){super(...arguments),this.occludedFactor=sr.cD,this.verticalCellCount=0,this.horizontalCellCount=0,this.highlightLevel=0,this.pixelRatio=1}}var lr=e(11320);class bt extends $e.w{constructor(h,_){super(h,_,new Ze.$(lr.H,()=>e.e(9762).then(e.bind(e,39762))))}initializePipeline(){return(0,Me.Ey)({colorWrite:Me.kn})}}var hr=e(4499);class Lt extends $e.w{constructor(h,_){super(h,_,new Ze.$(hr.S,()=>e.e(6818).then(e.bind(e,94437))))}initializePipeline(){return(0,Me.Ey)({blending:Me.Ky,colorWrite:Me.kn})}}var Ut=e(31092);class Wt extends $e.w{constructor(h,_){super(h,_,new Ze.$(Ut.a,()=>e.e(8546).then(e.bind(e,98546))))}initializePipeline(){return(0,Me.Ey)({colorWrite:Me.kn})}}var rt=e(67496),dr=e(14253),cr=e(4728),ur=e(30614),jt=e(32788),Re=e(50915),Je=e(76169),Ft=e(4931);let dt=class extends ir.A{constructor(){super(...arguments),this.produces=yt.OG.HIGHLIGHTS,this.consumes={required:[yt.OG.HIGHLIGHTS,"highlights"]},this._useMultipleHighlights=!1,this._downsampleDrawParameters=new Xe.H,this._passParameters=new ar,this._singleHighlightBlurDrawParameters=new Ut.S,this._grid=new gr}initialize(){this.addHandles([(0,H.wB)(()=>this._updateOptionsTexture(),()=>{},H.Vh)])}destroy(){this._grid.coverage=(0,U.Gz)(this._grid.coverage),this._grid.vao=(0,U.WD)(this._grid.vao),this._passParameters.highlightOptionsTexture=(0,U.Gz)(this._passParameters.highlightOptionsTexture)}_updateOptionsTexture(){if(null==this._passParameters.highlightOptionsTexture){const g=new Ft.R(16,2);g.internalFormat=Re.Ab.RGBA,g.samplingMode=Re.Cj.NEAREST,this._passParameters.highlightOptionsTexture=new Je.g(this.renderingContext,g,null)}this._passParameters.highlightOptionsTexture.setData(function vr(g){const h=new Uint8Array(128);let _=0;for(const f of g){const D=4*_,P=4*_+64;++_;const{color:L}=f,F=f.haloColor??L;h[D+0]=L.r,h[D+1]=L.g,h[D+2]=L.b,h[D+3]=f.fillOpacity*L.a*255,h[P+0]=F.r,h[P+1]=F.g,h[P+2]=F.b,h[P+3]=f.haloOpacity*F.a*255}return h}(this.view.state.highlights)),this.requestRender(rt.C7.UPDATE)}precompile(){this.techniques.precompile(At),this._useMultipleHighlights?this.techniques.precompile(It):(this.techniques.precompile(bt),this.techniques.precompile(Wt),this.techniques.precompile(Lt))}render(g){const h=g.find(({name:fe})=>fe===yt.OG.HIGHLIGHTS),{techniques:_,bindParameters:f,_passParameters:D,renderingContext:P}=this;if(!f.decorations)return h;const L=_.get(At);if(!L.compiled)return this.requestRender(rt.C7.UPDATE),h;const F=g.find(({name:fe})=>"highlights"===fe).getTexture(),Q=()=>{this._gridUpdateResources(F);const fe=this._gridComputeCoverage(L,F,f),{horizontalCellCount:he,verticalCellCount:Se}=fe;return D.horizontalCellCount=he,D.verticalCellCount=Se,D.coverageTexture=fe.coverage?.getTexture(),fe},_e=fe=>{const he=fe.verticalCellCount*fe.horizontalCellCount;P.bindVAO(fe.vao),P.drawElementsInstanced(Re.WR.TRIANGLES,6,Re.pe.UNSIGNED_BYTE,0,he)},{camera:Oe}=f,Pe=()=>{P.bindFramebuffer(h.fbo),P.setViewport4fv(Oe.fullViewport)};return this._useMultipleHighlights?this._renderMultiple(F,Q,_e,Pe):this._renderSingle(F,Q,_e,Pe),D.highlightTexture=null,D.coverageTexture=null,h}_renderMultiple(g,h,_,f){const{techniques:D,bindParameters:P,_passParameters:L,renderingContext:F}=this,Q=D.get(It);if(!Q.compiled)return void this.requestRender(rt.C7.UPDATE);const _e=h();L.highlightTexture=g,L.pixelRatio=P.camera.pixelRatio,F.bindTechnique(Q,P,L),f(),_(_e)}_renderSingle(g,h,_,f){const{fboCache:D,techniques:P,bindParameters:L,_passParameters:F,renderingContext:Q}=this,_e=P.get(bt),Oe=P.get(Wt),Pe=P.get(Lt);if(!Pe.compiled||!Oe.compiled||!_e.compiled)return void this.requestRender(rt.C7.UPDATE);const fe=h(),{width:he,height:Se}=g.descriptor;F.highlightTexture=g;const{camera:st}=L,{fullWidth:nt,fullHeight:Rt,pixelRatio:ft}=st,at=Math.ceil(nt/ft),lt=Math.ceil(Rt/ft),{_singleHighlightBlurDrawParameters:pe}=this,Ae=this.view._stage.renderView.renderer,{highlights:rr}=L;for(let pt=0;pt<rr.length;++pt){const{name:zr}=rr[pt];if(!Ae.hasHighlightOptions(zr))continue;F.highlightLevel=pt,Q.setClearColor(0,0,0,0);const St=D.acquire(he,Se,"single highlight",ue.N.RG);Q.bindFramebuffer(St.fbo),Q.setViewport(0,0,he,Se),Q.clear(Re.NV.COLOR),Q.bindTechnique(_e,L,F),_(fe),pe.blurInput=St.getTexture(),(0,k.hZ)(pe.blurSize,1/at,0);const mt=D.acquire(at,lt,"single highlight blur h",ue.N.RG);Q.unbindTexture(mt.fbo?.colorTexture),Q.bindFramebuffer(mt.fbo),Q.setViewport(0,0,at,lt),Q.clear(Re.NV.COLOR),Q.bindTechnique(Oe,L,F,pe),_(fe),St.release(),(0,k.hZ)(pe.blurSize,0,1/lt),F.singleHighlightBlurTexture=mt.getTexture(),f(),Q.bindTechnique(Pe,L,F,pe),_(fe),mt.release()}}_gridUpdateResources(g){const h=this._grid,{width:_,height:f}=g.descriptor;if(h.horizontalCellCount=Math.ceil(_/Xe.g),h.verticalCellCount=Math.ceil(f/Xe.g),h.vao)return;const D=this.renderingContext,P=jt.g.createIndex(D,Re._U.STATIC_DRAW,pr);h.vao=new ur.Z(D,dr.D,new Map([["geometry",cr.wR]]),new Map([["geometry",jt.g.createVertex(D,Re._U.STATIC_DRAW)]]),P)}_gridComputeCoverage(g,h,_){const f=this.renderingContext,D=this._grid,P=h.descriptor,L=Math.ceil(P.width/Xe.g),F=Math.ceil(P.height/Xe.g);this._downsampleDrawParameters.input=h,D.coverage?.release();const Q=this.fboCache.acquire(L,F,"highlight coverage",ue.N.RG);return D.coverage=Q,f.bindFramebuffer(Q.fbo),f.bindTechnique(g,_,this._passParameters,this._downsampleDrawParameters),f.setViewport(0,0,L,F),f.screen.draw(),D}get test(){}};(0,O._)([(0,S.MZ)()],dt.prototype,"produces",void 0),(0,O._)([(0,S.MZ)()],dt.prototype,"consumes",void 0),dt=(0,O._)([(0,V.$)("esri.views.3d.webgl-engine.effects.highlight.Highlight")],dt);class gr{constructor(){this.coverage=null,this.vao=null,this.verticalCellCount=0,this.horizontalCellCount=0,this.viewportWidth=0,this.viewportHeight=0}}let _r=0;const pr=new Uint8Array([0,1,2,2,1,3]);var yr=e(67571),we=e(65388);class xr{constructor(h,_,f,D){this._textures=h,this._techniques=_,this.materialChanged=f,this.requestRender=D,this._id2glMaterialRef=new yr.O}dispose(){this._textures.destroy()}acquire(h,_,f){if(this._ownMaterial(h),!h.produces.get(_)?.(f))return null;let P=this._id2glMaterialRef.get(f,h.id);if(null==P){const L=h.createGLMaterial({material:h,techniques:this._techniques,textures:this._textures,output:f});P=new Cr(L),this._id2glMaterialRef.set(f,h.id,P)}return P.ref(),P.glMaterial}release(h,_){const f=this._id2glMaterialRef.get(_,h.id);null!=f&&(f.unref(),f.referenced||((0,U.WD)(f.glMaterial),this._id2glMaterialRef.delete(_,h.id)))}_ownMaterial(h){h.repository&&h.repository!==this&&I.A.getLogger("esri.views.3d.webgl-engine.lib.GLMaterialRepository").error("Material is already owned by a different material repository"),h.repository=this}}class Cr{constructor(h){this.glMaterial=h,this._refCnt=0}ref(){++this._refCnt}unref(){--this._refCnt,(0,we.vA)(this._refCnt>=0)}get referenced(){return this._refCnt>0}}var ut,Or=e(43745),ct=e(50957),Bt=e(96443),We=(e(82595),e(62789)),Ee=e(45475),Dr=e(58135),Pr=e(37683),Ke=e(55128);!function(g){g[g.Immediate=0]="Immediate",g[g.FadeWithWeather=1]="FadeWithWeather"}(ut||(ut={}));var xt=e(68675);class Tr{constructor(h){this.shadowMap=h,this.slot=Ke.N.OPAQUE_MATERIAL,this.slicePlane=null,this.hasOccludees=!1,this.enableFillLights=!0,this.oitPass=Bt.Y.NONE,this.alignPixelEnabled=!1,this.decorations=!0,this.overlayStretch=1,this.viewshedEnabled=!1,this._camera=new z.A,this._inverseViewport=(0,Ee.vt)(),this._oldLighting=new xt.TA,this._newLighting=new xt.TA,this._fadedLighting=new xt.TA,this._lighting=this._newLighting,this.ssr=new Mr,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.highlights=new Array,this.highlightOrderMap=new Map,this.highlightMixOrigin=(0,Ee.vt)(),this.highlightMixTexture=null,this.hudRenderStyle=Pr.D.Occluded,this.hudOccludedFragmentOpacity=1,this.clouds=new Dr.n,this.shadowHighlightsVisible=!1}get camera(){return this._camera}set camera(h){this._camera=h,this._inverseViewport[0]=1/h.fullViewport[2],this._inverseViewport[1]=1/h.fullViewport[3]}get inverseViewport(){return this._inverseViewport}get lighting(){return this._lighting}fadeLighting(){switch(this.clouds.fadeFactor){case 0:this._lighting=this._oldLighting;break;default:this._fadedLighting.lerpLighting(this._oldLighting,this._newLighting,this.clouds.fadeFactor),this._lighting=this._fadedLighting;break;case 1:this._lighting=this._newLighting,this._oldLighting.copyFrom(this._newLighting)}}updateLighting(h,_,f,D){this._oldLighting.copyFrom(this.lighting),this._newLighting.noonFactor=_,this._newLighting.globalFactor=f,this._newLighting.set(h),D===ut.FadeWithWeather&&this.clouds.requestFade(),this.fadeLighting()}get highlight(){return null==this.highlightLevel?null:this.highlights[this.highlightLevel]}}class Mr{constructor(){this.fadeFactor=1,this.reprojectionMatrix=(0,We.vt)()}}class Nt{constructor(h,_){this.rctx=h,this.lastFrameCamera=new z.A,this.output=re.V.Color,this.renderOccludedMask=gt,this.bind=new Tr(_),this.bind.alignPixelEnabled=!0}}const gt=ct.m$.Occlude|ct.m$.OccludeAndTransparent|ct.m$.OccludeAndTransparentStencil;var Ct=e(69287),wr=e(32954),Ot=e(53781),Rr=e(23191);let it=class extends z.A{constructor(){super(...arguments),this._projectionMatrix=(0,We.vt)()}get projectionMatrix(){return this._projectionMatrix}};(0,O._)([(0,S.MZ)()],it.prototype,"_projectionMatrix",void 0),(0,O._)([(0,S.MZ)({readOnly:!0})],it.prototype,"projectionMatrix",null),it=(0,O._)([(0,V.$)("esri.views.3d.webgl-engine.lib.CascadeCamera")],it);var Et,Ht=e(7084);!function(g){g[g.Highlight=0]="Highlight",g[g.ExcludeHighlight=1]="ExcludeHighlight"}(Et||(Et={}));class vt{constructor(){this.camera=new it,this.lightMat=(0,We.vt)()}}class Sr{constructor(){this.maxNumCascadesHighQuality=4,this.maxNumCascadesLowQuality=4,this.textureSizeModHighQuality=1.3,this.textureSizeModLowQuality=.9,this.splitSchemeLambda=0}}class Ir{constructor(h,_){this._fbos=h,this._viewingMode=_,this._enabled=!1,this._snapshots=new Array,this._textureHeight=0,this._numCascades=1,this.settings=new Sr,this._projectionView=(0,We.vt)(),this._projectionViewInverse=(0,We.vt)(),this._modelViewLight=(0,We.vt)(),this._cascadeDistances=[0,0,0,0,0],this._usedCascadeDistances=(0,te.vt)(),this._cascades=[new vt,new vt,new vt,new vt],this._lastOrigin=null,this._maxTextureWidth=Math.min((0,C.A)("esri-mobile")?4096:16384,h.rctx.parameters.maxTextureSize)}dispose(){this.enabled=!1,this.disposeOffscreenBuffers()}get depthTexture(){return this._handle?.getTexture()}get _textureWidth(){return this._textureHeight*this._numCascades}get numCascades(){return this._numCascades}get cascadeDistances(){return(0,Ot.s)(this._usedCascadeDistances,this._cascadeDistances[0],this._numCascades>1?this._cascadeDistances[1]:1/0,this._numCascades>2?this._cascadeDistances[2]:1/0,this._numCascades>3?this._cascadeDistances[3]:1/0)}disposeOffscreenBuffers(){this._handle=(0,U.Gz)(this._handle),this._discardSnapshots()}set maxCascades(h){this.settings.maxNumCascadesHighQuality=(0,Ct.qE)(Math.floor(h),1,4)}get maxCascades(){return this.settings.maxNumCascadesHighQuality}set enabled(h){this._enabled=h,h||this.disposeOffscreenBuffers()}get enabled(){return this._enabled}get ready(){return this._enabled&&null!=this.depthTexture}get cascades(){for(let h=0;h<this._numCascades;++h)Pt[h]=this._cascades[h];return Pt.length=this._numCascades,Pt}start(h,_,f,D,P){(0,we.vA)(this.enabled);const{near:L,far:F}=function jr(g){let{near:h,far:_}=g;return h<2&&(h=2),_<2&&(_=2),h>=_&&(h=2,_=4),{near:h,far:_}}(f);this._computeCascadeDistances(L,F,D),this._textureHeight=this._computeTextureHeight(h,P,D),this._setupMatrices(h,_);const{viewMatrix:Q,projectionMatrix:_e}=h;for(let Oe=0;Oe<this._numCascades;++Oe)this._constructCascade(Oe,_e,Q,_);this._lastOrigin=null,this.clear()}finish(){(0,we.vA)(this.enabled),this._handle?.detachDepth()}getShadowMapMatrices(h){if(!this._lastOrigin||!(0,$.p)(h,this._lastOrigin)){this._lastOrigin=this._lastOrigin||(0,ae.vt)(),(0,$.c)(this._lastOrigin,h);for(let _=0;_<this._numCascades;++_){(0,M.Tl)($t,this._cascades[_].lightMat,h);for(let f=0;f<16;++f)Qt[16*_+f]=$t[f]}}return Qt}moveSnapshot(h){(0,we.vA)(this.enabled),this._handle?.detachDepth(),this._snapshots[h]?.release(),this._snapshots[h]=this._handle,this._handle=null,this.clear()}copySnapshot(h){const _=this._handle?.getTexture()?.descriptor;if(!this.enabled||!_)return;this._snapshots[h]?.release();const{width:f,height:D}=_;this._snapshots[h]=this._fbos.acquire(f,D,h===Et.Highlight?"shadow highlight snapshot":"shadow no highlight snapshot",ue.N.RGBA4);const L=this._fbos.rctx;this._bindFbo();const F=L.bindTexture(this._snapshots[h]?.getTexture(),Je.g.TEXTURE_UNIT_FOR_UPDATES);L.gl.copyTexSubImage2D(Re.Ap.TEXTURE_2D,0,0,0,0,0,f,D),L.bindTexture(F,Je.g.TEXTURE_UNIT_FOR_UPDATES)}getSnapshot(h){return this.enabled?this._snapshots[h]?.getTexture():null}clear(){const h=this._fbos.rctx;this._ensureFbo(),this._bindFbo(),h.setClearColor(1,1,1,1),h.clear(Re.NV.COLOR|Re.NV.DEPTH)}_computeTextureHeight(h,_,f){const D=Math.min(window.devicePixelRatio,_)/h.pixelRatio,P=f?this.settings.textureSizeModHighQuality:this.settings.textureSizeModLowQuality,L=(0,Ht.Mv)(Math.floor(Math.max(h.fullWidth,h.fullHeight)*D*P)),F=Math.min(this._maxTextureWidth,this._numCascades*L);return(0,Ht.uT)(F/this._numCascades)}_ensureFbo(){this._handle?.fbo?.width===this._textureWidth&&this._handle?.fbo.height===this._textureHeight||(this._handle?.release(),this._handle=this._fbos.acquire(this._textureWidth,this._textureHeight,"shadow map",ue.N.RGBA4)),this._handle?.acquireDepth(ue.z.DEPTH16_BUFFER)}_discardSnapshot(h){this._snapshots[h]=(0,U.Gz)(this._snapshots[h])}_discardSnapshots(){for(let h=0;h<this._snapshots.length;++h)this._discardSnapshot(h);this._snapshots.length=0}_bindFbo(){this._fbos.rctx.bindFramebuffer(this._handle?.fbo)}_constructCascade(h,_,f,D){const P=this._cascades[h],L=-this._cascadeDistances[h],F=-this._cascadeDistances[h+1],Q=(_[10]*L+_[14])/Math.abs(_[11]*L+_[15]),_e=(_[10]*F+_[14])/Math.abs(_[11]*F+_[15]);(0,we.vA)(Q<_e);for(let he=0;he<8;++he){(0,Ot.s)(Vt,he%4==0||he%4==3?-1:1,he%4==0||he%4==1?-1:1,he<4?Q:_e,1);const Se=Be[he];(0,Ot.t)(Se,Vt,this._projectionViewInverse),Se[0]/=Se[3],Se[1]/=Se[3],Se[2]/=Se[3]}(0,$.v)(Dt,Be[0]),P.camera.viewMatrix=(0,M.Tl)(Ar,this._modelViewLight,Dt);for(let he=0;he<8;++he)(0,$.t)(Be[he],Be[he],P.camera.viewMatrix);let Oe=Be[0][2],Pe=Be[0][2];for(let he=1;he<8;++he)Oe=Math.min(Oe,Be[he][2]),Pe=Math.max(Pe,Be[he][2]);Oe-=200,Pe+=200,P.camera.near=-Pe,P.camera.far=-Oe,function Wr(g,h,_,f,D){const P=1/Be[0][3],L=1/Be[4][3];(0,we.vA)(P<L);let F=P+Math.sqrt(P*L);const Q=Math.sin((0,Ct.XM)(g[2]*h[0]+g[6]*h[1]+g[10]*h[2]));F/=Q,function Lr(g,h,_,f,D,P,L,F){(0,k.hZ)(je,0,0);for(let pe=0;pe<4;++pe)(0,k.WQ)(je,je,g[pe]);(0,k.hs)(je,je,.25),(0,k.hZ)(ke,0,0);for(let pe=4;pe<8;++pe)(0,k.WQ)(ke,ke,g[pe]);(0,k.hs)(ke,ke,.25),(0,k.Cc)(Qe[0],g[4],g[5],.5),(0,k.Cc)(Qe[1],g[5],g[6],.5),(0,k.Cc)(Qe[2],g[6],g[7],.5),(0,k.Cc)(Qe[3],g[7],g[4],.5);let Q=0,_e=(0,k.hG)(Qe[0],je);for(let pe=1;pe<4;++pe){const Ae=(0,k.hG)(Qe[pe],je);Ae<_e&&(_e=Ae,Q=pe)}(0,k.Re)(De,Qe[Q],g[Q+4]);const Oe=De[0];let Pe,fe;De[0]=-De[1],De[1]=Oe,(0,k.Re)(Tt,ke,je),(0,k.Om)(Tt,De)<0&&(0,k.ze)(De,De),(0,k.Cc)(De,De,Tt,_),(0,k.S8)(De,De),Pe=fe=(0,k.Om)((0,k.Re)(Ge,g[0],je),De);for(let pe=1;pe<8;++pe){const Ae=(0,k.Om)((0,k.Re)(Ge,g[pe],je),De);Ae<Pe?Pe=Ae:Ae>fe&&(fe=Ae)}(0,k.C)(f,je),(0,k.hs)(Ge,De,Pe-h),(0,k.WQ)(f,f,Ge);let he=-1,Se=1,st=0,nt=0;for(let pe=0;pe<8;++pe){(0,k.Re)(ot,g[pe],f),(0,k.S8)(ot,ot);const Ae=De[0]*ot[1]-De[1]*ot[0];Ae>0?Ae>he&&(he=Ae,st=pe):Ae<Se&&(Se=Ae,nt=pe)}(0,we.MX)(he>0,"leftArea"),(0,we.MX)(Se<0,"rightArea"),(0,k.hs)(qe,De,Pe),(0,k.WQ)(qe,qe,je),(0,k.hs)(et,De,fe),(0,k.WQ)(et,et,je),_t[0]=-De[1],_t[1]=De[0];const Rt=(0,we.L)(f,g[nt],et,(0,k.WQ)(Ge,et,_t),1,D),ft=(0,we.L)(f,g[st],et,Ge,1,P),at=(0,we.L)(f,g[st],qe,(0,k.WQ)(Ge,qe,_t),1,L),lt=(0,we.L)(f,g[nt],qe,Ge,1,F);(0,we.MX)(Rt,"rayRay"),(0,we.MX)(ft,"rayRay"),(0,we.MX)(at,"rayRay"),(0,we.MX)(lt,"rayRay")}(Be,F,Q,zt,Kt,br,Gt,Zt),function Ur(g,h,_,f,D){(0,k.Re)(Ie,_,f),(0,k.hs)(Ie,Ie,.5),j[0]=Ie[0],j[1]=Ie[1],j[2]=0,j[3]=Ie[1],j[4]=-Ie[0],j[5]=0,j[6]=Ie[0]*Ie[0]+Ie[1]*Ie[1],j[7]=Ie[0]*Ie[1]-Ie[1]*Ie[0],j[8]=1,j[oe(0,2)]=-(0,k.Om)(Ue(j,0),g),j[oe(1,2)]=-(0,k.Om)(Ue(j,1),g);let P=(0,k.Om)(Ue(j,0),_)+j[oe(0,2)],L=(0,k.Om)(Ue(j,1),_)+j[oe(1,2)],F=(0,k.Om)(Ue(j,0),f)+j[oe(0,2)],Q=(0,k.Om)(Ue(j,1),f)+j[oe(1,2)];P=-(P+F)/(L+Q),j[oe(0,0)]+=j[oe(1,0)]*P,j[oe(0,1)]+=j[oe(1,1)]*P,j[oe(0,2)]+=j[oe(1,2)]*P,P=1/((0,k.Om)(Ue(j,0),_)+j[oe(0,2)]),L=1/((0,k.Om)(Ue(j,1),_)+j[oe(1,2)]),j[oe(0,0)]*=P,j[oe(0,1)]*=P,j[oe(0,2)]*=P,j[oe(1,0)]*=L,j[oe(1,1)]*=L,j[oe(1,2)]*=L,j[oe(2,0)]=j[oe(1,0)],j[oe(2,1)]=j[oe(1,1)],j[oe(2,2)]=j[oe(1,2)],j[oe(1,2)]+=1,P=(0,k.Om)(Ue(j,1),h)+j[oe(1,2)],L=(0,k.Om)(Ue(j,2),h)+j[oe(2,2)],F=(0,k.Om)(Ue(j,1),_)+j[oe(1,2)],Q=(0,k.Om)(Ue(j,2),_)+j[oe(2,2)],P=-.5*(P/L+F/Q),j[oe(1,0)]+=j[oe(2,0)]*P,j[oe(1,1)]+=j[oe(2,1)]*P,j[oe(1,2)]+=j[oe(2,2)]*P,P=(0,k.Om)(Ue(j,1),h)+j[oe(1,2)],L=(0,k.Om)(Ue(j,2),h)+j[oe(2,2)],F=-L/P,j[oe(1,0)]*=F,j[oe(1,1)]*=F,j[oe(1,2)]*=F,D[0]=j[0],D[1]=j[1],D[2]=0,D[3]=j[2],D[4]=j[3],D[5]=j[4],D[6]=0,D[7]=j[5],D[8]=0,D[9]=0,D[10]=1,D[11]=0,D[12]=j[6],D[13]=j[7],D[14]=0,D[15]=j[8]}(zt,Kt,Gt,Zt,D.projectionMatrix),D.projectionMatrix[10]=2/(_-f),D.projectionMatrix[14]=-(_+f)/(_-f)}(f,D,Oe,Pe,P.camera),(0,M.lw)(P.lightMat,P.camera.projectionMatrix,P.camera.viewMatrix);const fe=this._textureHeight;P.camera.viewport=[h*fe,0,fe,fe]}_setupMatrices(h,_){(0,M.lw)(this._projectionView,h.projectionMatrix,h.viewMatrix),(0,M.B8)(this._projectionViewInverse,this._projectionView);const f=this._viewingMode===Rr.RT.Global?h.eye:(0,$.i)(Dt,0,0,1);(0,M.t5)(this._modelViewLight,[0,0,0],[-_[0],-_[1],-_[2]],f)}_computeCascadeDistances(h,_,f){const D=f?this.settings.maxNumCascadesHighQuality:this.settings.maxNumCascadesLowQuality;this._numCascades=Math.min(1+Math.floor((0,we.kL)(_/h,4)),D);const P=(_-h)/this._numCascades,L=(_/h)**(1/this._numCascades);let F=h,Q=h;for(let _e=0;_e<this._numCascades+1;++_e)this._cascadeDistances[_e]=(0,Ct.Cc)(F,Q,this.settings.splitSchemeLambda),F*=L,Q+=P}get test(){}}const Ar=(0,We.vt)(),Vt=(0,te.vt)(),Be=[];for(let g=0;g<8;++g)Be.push((0,te.vt)());const zt=(0,Ee.vt)(),Kt=(0,Ee.vt)(),br=(0,Ee.vt)(),Gt=(0,Ee.vt)(),Zt=(0,Ee.vt)(),Dt=(0,ae.vt)(),Pt=[],$t=(0,We.vt)(),Qt=We.zK.concat(We.zK,We.zK,We.zK,We.zK),je=(0,Ee.vt)(),ke=(0,Ee.vt)(),Qe=[(0,Ee.vt)(),(0,Ee.vt)(),(0,Ee.vt)(),(0,Ee.vt)()],De=(0,Ee.vt)(),Tt=(0,Ee.vt)(),Ge=(0,Ee.vt)(),ot=(0,Ee.vt)(),qe=(0,Ee.vt)(),et=(0,Ee.vt)(),_t=(0,Ee.vt)();function oe(g,h){return 3*h+g}const Yt=(0,Ee.vt)();function Ue(g,h){return(0,k.hZ)(Yt,g[h],g[h+3]),Yt}const Ie=(0,Ee.vt)(),j=(0,wr.vt)();class Xt extends $e.w{constructor(h,_){super(h,_,new Ze.$(ze.a,()=>e.e(9247).then(e.bind(e,89247))))}initializePipeline(h){return(0,Me.Ey)(h.hasAlpha?{blending:Me.Ky,colorWrite:Me.kn}:{colorWrite:Me.kn})}}var Jt=e(55062);class kt extends Jt.K{constructor(){super(...arguments),this.hasAlpha=!1}}(0,O._)([(0,Jt.W)()],kt.prototype,"hasAlpha",void 0);var Fr=e(19451),Br=e(5417),qt=e(60615);class er extends $e.w{constructor(h,_){super(h,_,new Ze.$(qt.a,()=>e.e(817).then(e.bind(e,40817))))}}var tr=e(34150);let Ve=class extends Fe.RW{constructor(g){super(g),this._overlays=null,this._renderTargets=null,this._overlayParameters=new qt.O,this.hasHighlights=!1,this._hasWater=!1,this._renderers=new Map,this._sortedDrapeSourceRenderersDirty=!1,this._sortedRenderers=new Z.A,this._passParameters=new ze.T,this._materials=null,this._screenToWorldRatio=1,this._localOriginFactory=null,this.unloadedMemory=0,this.ignoresMemoryFactor=!1,this._camera=new z.A,this.events=new R.A,this.longitudeCyclical=null,this.produces=new Map([[Ke.N.DRAPED_MATERIAL,h=>h!==re.V.Highlight||this.hasHighlights],[Ke.N.DRAPED_WATER,()=>this._hasWater]]),this._hasTargetWithoutRasterImage=!1,this._hasDrapedFeatureSource=!1,this._hasDrapedRasterSource=!1}initialize(){const g=this._view,h=g._stage,_=h.renderer.fboCache,{waterTextures:f,textures:D}=h.renderView;this._renderContext=new Nt(this._rctx,new Ir(_,g.state.viewingMode)),this.addHandles([(0,H.wB)(()=>f.updating,()=>this.events.emit("content-changed"),H.pc),(0,H.wB)(()=>this.spatialReference,F=>this._localOriginFactory=new Or.g(F),H.pc),(0,H.on)(()=>g.allLayerViews,"after-changes",()=>this._sortedDrapeSourceRenderersDirty=!0),(0,H.wB)(()=>function fr(g){let h=0;for(const f of g){const{name:D}=f;h+=D.length;const{color:P,fillOpacity:L,haloColor:F,haloOpacity:Q}=f;h+=P.r+P.g+P.b+P.a+L,h+=F?F.r+F.g+F.b+F.a+Q:0}const _=g.at(0);if(_){const{shadowOpacity:f,shadowDifference:D,shadowColor:P}=_;h+=f+D+P.r+P.g+P.b+P.a}return _r+++(h>=0?0:1)}(g.state.highlights),()=>this._sortedDrapeSourceRenderersDirty=!0,H.Vh),(0,H.wB)(()=>g.state.highlights,F=>{this._bindParameters.highlights=F,this._bindParameters.highlightOrderMap=g.state.highlightOrderMap,this._updateHighlights()},H.Vh),g.resourceController.scheduler.registerTask(tr.W6.STAGE,this)]),this._materials=new xr(D,this._techniques,()=>{this.notifyChange("rendersOccludedDraped"),this.events.emit("content-changed"),this.notifyChange("updating"),this.notifyChange("isEmpty")},()=>this.events.emit("content-changed"));const{_bindParameters:P,_camera:L}=this;L.near=1,L.far=1e4,L.relativeElevation=null,P.slot=Ke.N.DRAPED_MATERIAL,P.mainDepth=null,P.camera=L,P.oitPass=Bt.Y.NONE,P.updateLighting([new Br.$p((0,ae.S)())],0,0,ut.Immediate)}destroy(){this._renderers.forEach(g=>g.destroy()),this._renderers.clear(),this._passParameters.texture=(0,U.WD)(this._passParameters.texture),this.disposeOverlays()}get _bindParameters(){return this._renderContext.bind}get _rctx(){return this._stage.renderView.renderingContext}get _view(){return this.parent.view}get _stage(){return this.parent.view._stage}get spatialReference(){return this.parent.spatialReference}get _techniques(){return this._stage.renderView.techniques}get rctx(){return this._rctx}get materials(){return this._materials}get screenToWorldRatio(){return this._screenToWorldRatio}get localOriginFactory(){return this._localOriginFactory}get pluginContext(){return this._pluginContext}initializeRenderContext(g){this._pluginContext=g,this._techniques.precompile(er)}uninitializeRenderContext(){}acquireTechniques(){return[]}render(){}get updating(){return this._sortedDrapeSourceRenderersDirty||(0,T.Bs)(this._renderers,g=>g.updating)}get hasOverlays(){return null!=this._overlays&&null!=this._renderTargets}getMaterialRenderer(g){for(const h of this._renderers.values()){const _=h.getMaterialRenderer(g);if(_)return _}return null}get layers(){return this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers(),this._sortedRenderers.map(g=>g.drapeSource.layer).filter(g=>!!g)}_updateHighlights(){const g=this._view.state;this._renderers.forEach(h=>h.updateHighlights(g.highlightOrderMap))}createDrapeSourceRenderer(g,h,_){const f=this._renderers.get(g);f?.destroy();const D=new h({..._,rendererContext:this,drapeSource:g});return this._renderers.set(g,D),this._sortedDrapeSourceRenderersDirty=!0,"fullOpacity"in g&&this.addHandles((0,H.wB)(()=>g.fullOpacity,()=>this.events.emit("content-changed")),g),D}removeDrapeSourceRenderer(g){if(null==g)return;const h=this._renderers.get(g);null!=h&&(this._sortedDrapeSourceRenderersDirty=!0,this._renderers.delete(g),this.removeHandles(g),h.destroy())}computeValidity(){return this._renderTargets?.computeValidity()??0}releaseRenderTargets(){this._renderTargets?.dispose()}get overlays(){return this._overlays??[]}ensureDrapeTargets(g){this._hasTargetWithoutRasterImage=!!this._overlays&&(0,W.bw)(g,h=>h.drapeTargetType===ee.sv.WithoutRasterImage)}ensureDrapeSources(g){this._overlays?(this._hasDrapedFeatureSource=(0,W.bw)(g,h=>h.drapeSourceType===ee.Om.Features),this._hasDrapedRasterSource=(0,W.bw)(g,h=>h.drapeSourceType===ee.Om.RasterImage)):this._hasDrapedFeatureSource=this._hasDrapedRasterSource=!1}get _needsColorWithoutRasterImage(){return this._hasDrapedRasterSource&&this._hasDrapedFeatureSource&&this._hasTargetWithoutRasterImage}ensureOverlays(g,h,_=this._bindParameters.overlayStretch){null==this._overlays&&(this._renderTargets=new B(this._stage.renderer.fboCache),this._overlays=[new K,new K]),this.ensureDrapeTargets(g),this.ensureDrapeSources(h),this._bindParameters.overlayStretch=_}disposeOverlays(){this._overlays=null,this._renderTargets=(0,U.WD)(this._renderTargets),this.events.emit("textures-disposed")}getTexture(g){if(null!=g)return g===A.ColorNoRasterImage&&!this._needsColorWithoutRasterImage&&this._hasDrapedFeatureSource?this._renderTargets?.getTexture(A.Color):this._renderTargets?.getTexture(g)}get running(){return this.updating}runTask(g){this._processDrapeSources(g,()=>!0)}_processDrapeSources(g,h){let _=!1;for(const[f,D]of this._renderers){if(g.done)break;(f.destroyed||h(f))&&D.commitChanges(this._view.state.highlightOrderMap)&&(_=!0,g.madeProgress())}this._sortedDrapeSourceRenderersDirty&&(this._sortedDrapeSourceRenderersDirty=!1,_=!0,this._updateSortedDrapeSourceRenderers()),_&&(null!=this._overlays&&0===this._renderers.size&&this.disposeOverlays(),this.notifyChange("updating"),this.notifyChange("isEmpty"),this.events.emit("content-changed"),this.hasHighlights=(0,T.Bs)(this._renderers,f=>f.hasHighlights),this.notifyChange("rendersOccludedDraped"))}hasHighlightOptions(g){return(0,T.Bs)(this._renderers,h=>h.hasHighlightOptions(g))}processSyncDrapeSources(){this._processDrapeSources(tr.Bb,g=>g.updatePolicy===Fr.q.SYNC)}get isEmpty(){return!de.b.OVERLAY_DRAW_DEBUG_TEXTURE&&!(0,T.Bs)(this._renderers,g=>!g.isEmpty)}get hasWater(){const g=(0,T.Bs)(this._renderers,h=>h.hasWater);return g!==this._hasWater&&(this._hasWater=g,this.events.emit("has-water")),this._hasWater}get rendersOccludedDraped(){const g=this._renderContext.renderOccludedMask;this._renderContext.renderOccludedMask=Mt,++this._techniques.precompiling;const h=this._sortedRenderers.some(({renderer:_})=>_.precompile(this._renderContext));return--this._techniques.precompiling,this._renderContext.renderOccludedMask=g,h}renders(g){if(de.b.OVERLAY_DRAW_DEBUG_TEXTURE&&g!==A.Occluded&&g!==A.Highlight)return!0;++this._techniques.precompiling;const h=this._sortedRenderers.some(({renderer:_})=>_.precompile(this._renderContext));return--this._techniques.precompiling,h}get mode(){return this.isEmpty?Ne.Disabled:this.hasWater&&this.renders(A.WaterNormal)?Ne.EnabledWithWater:this._renderTargets?.getTexture(A.Color)?Ne.Enabled:Ne.Disabled}updateAnimation(g){let h=!1;return this._renderers.forEach(_=>h=_.updateAnimation(g)||h),h&&this.parent.requestRender(rt.C7.BACKGROUND),h}updateDrapeSourceOrder(){this._sortedDrapeSourceRenderersDirty=!0}precompileShaders(g){if(this._renderTargets){this._bindParameters.alignPixelEnabled=g.alignPixelEnabled,++this._techniques.precompiling;for(const h of this._renderTargets.targets){if(h.content===A.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const _=h.output;this._renderContext.output=_,this._bindParameters.slot=_===re.V.Normal?Ke.N.DRAPED_WATER:Ke.N.DRAPED_MATERIAL,h.content===A.Occluded&&(this._renderContext.renderOccludedMask=Mt),this._sortedRenderers.forAll(({drapeSource:f,renderer:D})=>{h.content===A.ColorNoRasterImage&&f.drapeSourceType===ee.Om.RasterImage||D.precompile(this._renderContext)}),this._renderContext.renderOccludedMask=gt}--this._techniques.precompiling}}drawOverlays(g){if(this._overlays&&this._renderTargets){for(const h of this._overlays)this.longitudeCyclical?h.setupGeometryViewsCyclical(this.longitudeCyclical):h.setupGeometryView();this._bindParameters.alignPixelEnabled=g.alignPixelEnabled;for(const h of this._renderTargets.targets){if(h.content===A.ColorNoRasterImage&&!this._needsColorWithoutRasterImage)continue;const _=this._drawTarget(ge.vr.INNER,h),f=this._drawTarget(ge.vr.OUTER,h);(_||f)&&h.fbo.generateMipMap()}}}_drawTarget(g,h){const _=this._overlays[g],f=_.canvasGeometries;if(0===f.numViews)return!1;const D=this._view.state.contentPixelRatio;this._screenToWorldRatio=D*_.mapUnitsPerPixel/this._bindParameters.overlayStretch;const P=h.output;if(this.isEmpty||P===re.V.Normal&&!this.hasWater||!_.hasSomeSizedView())return!1;const{_rctx:L,_camera:F,_renderContext:Q,_bindParameters:_e}=this;if(F.pixelRatio=_.pixelRatio*D,Q.output=P,_e.screenToWorldRatio=this._screenToWorldRatio,_e.screenToPCSRatio=this._screenToWorldRatio*this.parent.worldToPCSRatio,_e.slot=P===re.V.Normal?Ke.N.DRAPED_WATER:Ke.N.DRAPED_MATERIAL,h.content===A.Occluded&&(Q.renderOccludedMask=Mt),!this.renders(h.content))return Q.renderOccludedMask=gt,!1;const{resolution:Oe}=_,Pe=g===ge.vr.INNER?0:Oe;if(L.setViewport(Pe,0,Oe,Oe),this._bindTargetFBO(h),g===ge.vr.INNER&&(L.setClearColor(0,0,0,0),L.clear(Re.NV.COLOR)),de.b.OVERLAY_DRAW_DEBUG_TEXTURE&&h.content!==A.Occluded&&h.content!==A.Highlight){this._techniques.precompile(Xt,wt);const fe=this._techniques.get(Xt,wt);for(let he=0;he<f.numViews;he++)this._setViewParameters(f.extents[he],_),this._ensureDebugPatternResources(_.resolution,Hr[g]),L.bindTechnique(fe,_e,this._passParameters),L.screen.draw()}if(h.output===re.V.Highlight){const{fboCache:fe}=this._stage.renderer,he=this._resolution;this._bindTargetFBO(h),function mr(g,h,_,f,D,P=0){const L=f.highlights,F=L.length>1?h.acquire(_.width,_.height,"highlight mix",ue.N.RG):null;if(F){const _e=g.getBoundFramebufferObject();g.bindFramebuffer(F.fbo),g.clearFramebuffer(te.uY),g.bindFramebuffer(_e)}const Q=F?.getTexture();f.highlightMixTexture=Q,(0,k.hZ)(f.highlightMixOrigin,P,0),L.forEach((_e,Oe)=>{Oe>0&&(g.bindTexture(Q,Je.g.TEXTURE_UNIT_FOR_UPDATES),g.gl.copyTexSubImage2D(Re.Ap.TEXTURE_2D,0,0,0,P,0,_.width,_.height),g.bindTexture(null,Je.g.TEXTURE_UNIT_FOR_UPDATES)),g.clear(Re.NV.DEPTH),f.highlightLevel=Oe,D()}),f.highlightLevel=null,f.highlightMixTexture=null,F?.release()}(L,fe,{width:he,height:he},_e,()=>this._renderAllGeometry(g,h),Pe)}else this._renderAllGeometry(g,h);return L.bindFramebuffer(null),Q.renderOccludedMask=gt,!0}_renderAllGeometry(g,h){const _=this._overlays[g],f=_.canvasGeometries;this._sortedRenderers.forAll(({drapeSource:D,renderer:P})=>{if(h.content===A.ColorNoRasterImage&&D.drapeSourceType===ee.Om.RasterImage)return;const{fullOpacity:L}=D,F=null!=L&&L<1&&h.output===re.V.Color&&this._bindTemporaryFBO();for(let Q=0;Q<f.numViews;Q++)this._setViewParameters(f.extents[Q],_),P.render(this._renderContext);if(F){this._bindTargetFBO(h),this._overlayParameters.texture=F.getTexture(),this._overlayParameters.opacity=L,this._overlayParameters.overlayIndex=g;const Q=this._techniques.get(er);this._rctx.bindTechnique(Q,this._bindParameters,this._overlayParameters),this._rctx.screen.draw(),F.release()}})}_bindTargetFBO(g){const h=this._resolution;g.fbo.bind(this._rctx,2*h,h)}_bindTemporaryFBO(){const g=this._resolution,_=this._stage.renderer.fboCache,f=_.acquire(2*g,g,"overlay tmp");return _.rctx.bindFramebuffer(f.fbo),_.rctx.clear(Re.NV.COLOR),f}get _resolution(){return this._overlays?.[ge.vr.INNER].resolution??0}notifyContentChanged(){this.events.emit("content-changed")}intersect(g,h,_,f){this._sortedDrapeSourceRenderersDirty&&this._updateSortedDrapeSourceRenderers();let D=0;for(const{renderer:P}of this._sortedRenderers)D=P.intersect?.(g,h,_,f,D)??D}_updateSortedDrapeSourceRenderers(){if(this._sortedRenderers.clear(),0===this._renderers.size)return;const g=this._view.map.allLayers,h=g.length;this._renderers.forEach((_,f)=>{const D=g.indexOf(f.layer),P=D>=0;this._sortedRenderers.push(new Nr(f,_,h*(f.renderGroup??(P?ee.O7.MapLayer:ee.O7.ViewLayer))+(P?D:0)))}),this._sortedRenderers.sort((_,f)=>_.index-f.index)}_setViewParameters(g,h){const _=this._camera;_.viewport=[0,0,h.resolution,h.resolution],(0,M.v3)(_.projectionMatrix,0,g[2]-g[0],0,g[3]-g[1],_.near,_.far),(0,M.kN)(_.viewMatrix,[-g[0],-g[1],0])}_ensureDebugPatternResources(g,h){if((0,$.i)(this._passParameters.color,h[0],h[1],h[2]),this._passParameters.texture)return;const _=new Uint8Array(g*g*4);let f=0;for(let P=0;P<g;P++)for(let L=0;L<g;L++){const F=Math.floor(L/10),Q=Math.floor(P/10);F<2||Q<2||10*F>g-20||10*Q>g-20?(_[f++]=255,_[f++]=255,_[f++]=255,_[f++]=255):(_[f++]=255,_[f++]=255,_[f++]=255,_[f++]=1&F&&1&Q?1&L^1&P?0:255:1&F^1&Q?0:128)}const D=new Ft.R(g);D.samplingMode=Re.Cj.NEAREST,this._passParameters.texture=new Je.g(this._rctx,D,_)}get test(){}};(0,O._)([(0,S.MZ)()],Ve.prototype,"hasHighlights",void 0),(0,O._)([(0,S.MZ)()],Ve.prototype,"_sortedDrapeSourceRenderersDirty",void 0),(0,O._)([(0,S.MZ)({constructOnly:!0})],Ve.prototype,"parent",void 0),(0,O._)([(0,S.MZ)({readOnly:!0})],Ve.prototype,"_techniques",null),(0,O._)([(0,S.MZ)({type:Boolean,readOnly:!0})],Ve.prototype,"updating",null),(0,O._)([(0,S.MZ)()],Ve.prototype,"isEmpty",null),(0,O._)([(0,S.MZ)({readOnly:!0})],Ve.prototype,"rendersOccludedDraped",null),Ve=(0,O._)([(0,V.$)("esri.views.3d.terrain.OverlayRenderer")],Ve);class Nr{constructor(h,_,f){this.drapeSource=h,this.renderer=_,this.index=f}}const Hr=[[1,.5,.5],[.5,.5,1]],Vr=-2,Mt=ct.m$.OccludeAndTransparent,wt=new kt;wt.hasAlpha=!0},40281:(ve,Y,e)=>{var O,R,C,T;e.d(Y,{vr:()=>O}),(T=O||(O={}))[T.INNER=0]="INNER",T[T.OUTER=1]="OUTER",function(T){T[T.REGULAR=0]="REGULAR",T[T.HAS_NORTH_POLE=1]="HAS_NORTH_POLE",T[T.HAS_SOUTH_POLE=2]="HAS_SOUTH_POLE",T[T.HAS_BOTH_POLES=3]="HAS_BOTH_POLES"}(R||(R={})),function(T){T[T.FADING=0]="FADING",T[T.IMMEDIATE=1]="IMMEDIATE",T[T.UNFADED=2]="UNFADED"}(C||(C={}))},87170:(ve,Y,e)=>{e.d(Y,{Q:()=>I});var O=e(83953),R=e(45475),C=e(24493),T=e(2006),U=e(64157);class Z extends U.n{constructor(M,$){super(M,"ivec2",T.c.Pass,(ae,ee,de)=>ae.setUniform2iv(M,$(ee,de)))}}var H=e(41204),W=e(35089),S=e(35269);function I(V){const{vertex:M}=V;M.uniforms.add(new W.N("coverageTexture",$=>$.coverageTexture),new Z("highlightRenderCellCount",$=>(0,O.hZ)(N,$.horizontalCellCount,$.verticalCellCount)),new Z("highlightTextureResolution",({highlightTexture:$})=>(0,O.hZ)(N,$.descriptor.width,$.descriptor.height)),new H.c("highlightLevel",$=>$.highlightLevel)).constants.add("cellSize","int",S.g),V.varyings.add("sUV","vec2"),V.varyings.add("vOutlinePossible","float"),M.code.add(C.H`const ivec2 cellVertices[4] = ivec2[4](ivec2(0,0), ivec2(1,0), ivec2(0,1), ivec2(1,1));`).main.add(C.H`int cellIndex = gl_InstanceID;
int cellX = cellIndex % highlightRenderCellCount[0];
int cellY = (cellIndex - cellX) / highlightRenderCellCount[0];
ivec2 cellPos = ivec2(cellX, cellY);
uvec2 covTexel = uvec2(texelFetch(coverageTexture, cellPos, 0).rg * 255.0);
int channelIndex = (highlightLevel >> 2) & 3;
uint channelValue = covTexel[channelIndex];
int highlightIndex = (highlightLevel & 3) << 1;
bool covered = ((channelValue >> highlightIndex) & 1u) == 1u;
if (!covered) {
gl_Position = vec4(0.0);
return;
}
vOutlinePossible = (((channelValue >> highlightIndex) & 2u) == 2u) ? 1.0 : 0.0;
ivec2 iPosInCell = cellVertices[gl_VertexID];
vec2 sPos = vec2(cellPos * cellSize + iPosInCell * (cellSize));
vec2 vPos = sPos / vec2(highlightTextureResolution);
sUV = vPos;
gl_Position = vec4(2.0 * vPos - vec2(1.0), 0.0, 1.0);`)}const N=(0,R.vt)()},68307:(ve,Y,e)=>{e.d(Y,{v:()=>C,z:()=>R});var O=e(24493);function R(T){T.fragment.code.add(O.H`float normals2FoamIntensity(vec3 n, float waveStrength){
float normalizationFactor =  max(0.015, waveStrength);
return max((n.x + n.y)*0.3303545/normalizationFactor + 0.3303545, 0.0);
}`)}function C(T){T.fragment.code.add(O.H`vec3 foamIntensity2FoamColor(float foamIntensityExternal, float foamPixelIntensity, vec3 skyZenitColor, float dayMod){
return foamIntensityExternal * (0.075 * skyZenitColor * pow(foamPixelIntensity, 4.) +  50.* pow(foamPixelIntensity, 23.0)) * dayMod;
}`)}},18693:(ve,Y,e)=>{e.d(Y,{E:()=>J});var O=e(68307),R=e(27980),C=e(24493);function T(b){b.fragment.code.add(C.H`
    const float GAMMA = ${C.H.float(R.Tf)};
    const float INV_GAMMA = ${C.H.float(1/R.Tf)};

    vec4 delinearizeGamma(vec4 color) {
      return vec4(pow(color.rgb, vec3(INV_GAMMA)), color.a);
    }

    vec3 linearizeGamma(vec3 color) {
      return pow(color, vec3(GAMMA));
    }
  `)}var U=e(87522),Z=e(86679),H=e(85340),W=e(94804),S=e(82374),I=e(50765),N=e(18679);function V(b,B){if(!B.screenSpaceReflections)return;const z=b.fragment;z.include(H.E),z.uniforms.add(new W.E("nearFar",te=>te.camera.nearFar),new N.x("depthMap",te=>te.depth?.attachment),new I.F("proj",te=>te.camera.projectionMatrix),new S.U("invResolutionHeight",te=>1/te.camera.height),new I.F("reprojectionMatrix",te=>te.ssr.reprojectionMatrix)).code.add(C.H`
  vec2 reprojectionCoordinate(vec3 projectionCoordinate)
  {
    vec4 zw = proj * vec4(0.0, 0.0, -projectionCoordinate.z, 1.0);
    vec4 reprojectedCoord = reprojectionMatrix * vec4(zw.w * (projectionCoordinate.xy * 2.0 - 1.0), zw.z, zw.w);
    reprojectedCoord.xy /= reprojectedCoord.w;
    return reprojectedCoord.xy * 0.5 + 0.5;
  }

  const int maxSteps = ${B.highStepCount?"150":"75"};

  vec4 applyProjectionMat(mat4 projectionMat, vec3 x)
  {
    vec4 projectedCoord =  projectionMat * vec4(x, 1.0);
    projectedCoord.xy /= projectedCoord.w;
    projectedCoord.xy = projectedCoord.xy*0.5 + 0.5;
    return projectedCoord;
  }

  vec3 screenSpaceIntersection(vec3 dir, vec3 startPosition, vec3 viewDir, vec3 normal)
  {
    vec3 viewPos = startPosition;
    vec3 viewPosEnd = startPosition;

    // Project the start position to the screen
    vec4 projectedCoordStart = applyProjectionMat(proj, viewPos);
    vec3  Q0 = viewPos / projectedCoordStart.w; // homogeneous camera space
    float k0 = 1.0/ projectedCoordStart.w;

    // advance the position in the direction of the reflection
    viewPos += dir;

    vec4 projectedCoordVanishingPoint = applyProjectionMat(proj, dir);

    // Project the advanced position to the screen
    vec4 projectedCoordEnd = applyProjectionMat(proj, viewPos);
    vec3  Q1 = viewPos / projectedCoordEnd.w; // homogeneous camera space
    float k1 = 1.0/ projectedCoordEnd.w;

    // calculate the reflection direction in the screen space
    vec2 projectedCoordDir = (projectedCoordEnd.xy - projectedCoordStart.xy);
    vec2 projectedCoordDistVanishingPoint = (projectedCoordVanishingPoint.xy - projectedCoordStart.xy);

    float yMod = min(abs(projectedCoordDistVanishingPoint.y), 1.0);

    float projectedCoordDirLength = length(projectedCoordDir);
    float maxSt = float(maxSteps);

    // normalize the projection direction depending on maximum steps
    // this determines how blocky the reflection looks
    vec2 dP = yMod * (projectedCoordDir)/(maxSt * projectedCoordDirLength);

    // Normalize the homogeneous camera space coordinates
    vec3  dQ = yMod * (Q1 - Q0)/(maxSt * projectedCoordDirLength);
    float dk = yMod * (k1 - k0)/(maxSt * projectedCoordDirLength);

    // initialize the variables for ray marching
    vec2 P = projectedCoordStart.xy;
    vec3 Q = Q0;
    float k = k0;
    float rayStartZ = -startPosition.z; // estimated ray start depth value
    float rayEndZ = -startPosition.z;   // estimated ray end depth value
    float prevEstimateZ = -startPosition.z;
    float rayDiffZ = 0.0;
    float dDepth;
    float depth;
    float rayDiffZOld = 0.0;

    // early outs
    if (dot(normal, dir) < 0.0 || dot(-viewDir, normal) < 0.0)
      return vec3(P, 0.0);
    float dDepthBefore = 0.0;

    for(int i = 0; i < maxSteps-1; i++)
    {
      depth = -linearDepthFromTexture(depthMap, P); // get linear depth from the depth buffer

      // estimate depth of the marching ray
      rayStartZ = prevEstimateZ;
      dDepth = -rayStartZ - depth;
      rayEndZ = (dQ.z * 0.5 + Q.z)/ ((dk * 0.5 + k));
      rayDiffZ = rayEndZ- rayStartZ;
      prevEstimateZ = rayEndZ;

      if(-rayEndZ > nearFar[1] || -rayEndZ < nearFar[0] || P.y < 0.0  || P.y > 1.0 )
      {
        return vec3(P, 0.);
      }

      // If we detect a hit - return the intersection point, two conditions:
      //  - dDepth > 0.0 - sampled point depth is in front of estimated depth
      //  - if difference between dDepth and rayDiffZOld is not too large
      //  - if difference between dDepth and 0.025/abs(k) is not too large
      //  - if the sampled depth is not behind far plane or in front of near plane

      if((dDepth) < 0.025/abs(k) + abs(rayDiffZ) && dDepth > 0.0 && depth > nearFar[0] && depth < nearFar[1] && abs(P.y - projectedCoordStart.y) > invResolutionHeight)
      {
        float weight = dDepth / (dDepth - dDepthBefore);
        vec2 Pf = mix(P - dP, P, 1.0 - weight);
        if (abs(Pf.y - projectedCoordStart.y) > invResolutionHeight) {
          return vec3(Pf, depth);
        }
        else {
          return vec3(P, depth);
        }
      }

      // continue with ray marching
      P = clamp(P + dP, vec2(0.0), vec2(0.999));
      Q.z += dQ.z;
      k += dk;
      rayDiffZOld = rayDiffZ;
      dDepthBefore = dDepth;
    }
    return vec3(P, 0.0);
  }
  `)}var M=e(25866),$=e(47258),ae=e(27723),ee=e(58135),de=e(30261),ge=e(44987),ie=e(81680),Te=e(58021),K=e(2006),X=e(64157);class A extends X.n{constructor(B,z){super(B,"samplerCube",K.c.Bind,(te,xe)=>te.bindTexture(B,z(xe)))}}function me(b){const B=b.fragment;B.constants.add("radiusCloudsSquared","float",ue).code.add(C.H`vec3 intersectWithCloudLayer(vec3 dir, vec3 cameraPosition, vec3 spherePos) {
float B = 2.0 * dot(cameraPosition, dir);
float C = dot(cameraPosition, cameraPosition) - radiusCloudsSquared;
float det = B * B - 4.0 * C;
float pointIntDist = max(0.0, 0.5 *(-B + sqrt(det)));
return (cameraPosition + dir * pointIntDist) - spherePos;
}`),B.uniforms.add(new S.U("radiusCurvatureCorrection",({clouds:ne})=>ne.parallax.radiusCurvatureCorrection)).code.add(C.H`vec3 correctForPlanetCurvature(vec3 dir) {
dir.z = dir.z * (1.0 - radiusCurvatureCorrection) + radiusCurvatureCorrection;
return dir;
}`),B.code.add(C.H`vec3 rotateDirectionToAnchorPoint(mat4 rotMat, vec3 inVec) {
return (rotMat * vec4(inVec, 0.0)).xyz;
}`),(0,ge.Gc)(B),(0,ge.O4)(B);const z=(0,M.fA)(.28,.175,.035);B.constants.add("RIM_COLOR","vec3",z),B.code.add(C.H`
    vec3 calculateCloudColor(vec3 cameraPosition, vec3 worldSpaceRay, vec4 clouds) {
      float upDotLight = dot(cameraPosition, mainLightDirection);
      float dirDotLight = max(dot(worldSpaceRay, mainLightDirection), 0.0);
      float sunsetTransition = clamp(pow(max(upDotLight, 0.0), ${C.H.float(.3)}), 0.0, 1.0);

      // Base color of the clouds that depends on lighting of the sun and sky
      vec3 ambientLight = calculateAmbientIrradiance(cameraPosition,  0.0);
      vec3 combinedLight = clamp((mainLightIntensity + ambientLight )/PI, vec3(0.0), vec3(1.0));
      vec3 baseCloudColor = pow(combinedLight * pow(clouds.xyz, vec3(GAMMA)), vec3(INV_GAMMA));

      // Rim light around the edge of the clouds simulating scattering of the direct lun light
      float scatteringMod = max(clouds.a < 0.5 ? clouds.a / 0.5 : - clouds.a / 0.5 + 2.0, 0.0);
      float rimLightIntensity = 0.5 + 0.5 * pow(max(upDotLight, 0.0), 0.35);
      vec3 directSunScattering = RIM_COLOR * rimLightIntensity * (pow(dirDotLight, ${C.H.float(140)})) * scatteringMod;

      // Brighten the clouds around the sun at the sunsets
      float additionalLight = ${C.H.float(.2)} * pow(dirDotLight, ${C.H.float(10)}) * (1. - pow(sunsetTransition, ${C.H.float(.3)})) ;

      return vec3(baseCloudColor * (1.0 + additionalLight) + directSunScattering);
    }
  `),B.uniforms.add(new ie.o("readChannelsRG",ne=>ne.clouds.readChannels===ae.c.RG),new A("cubeMap",ne=>ne.clouds.data?.cubeMap?.colorTexture??null)).code.add(C.H`vec4 sampleCloud(vec3 rayDir, bool readOtherChannel) {
vec4 s = texture(cubeMap, rayDir);
bool readRG = readChannelsRG ^^ readOtherChannel;
s = readRG ? vec4(vec3(s.r), s.g) : vec4(vec3(s.b), s.a);
return length(s) == 0.0 ? vec4(s.rgb, 1.0) : s;
}`),B.uniforms.add(new Te.d("anchorPoint",ne=>ne.clouds.parallax.anchorPoint),new Te.d("anchorPointNew",ne=>ne.clouds.parallaxNew.anchorPoint),new I.F("rotationClouds",ne=>ne.clouds.parallax.transform),new I.F("rotationCloudsNew",ne=>ne.clouds.parallaxNew.transform),new S.U("cloudsOpacity",ne=>ne.clouds.opacity),new S.U("fadeFactor",ne=>ne.clouds.fadeFactor),new ie.o("crossFade",ne=>ne.clouds.fadeState===ee.c.CROSS_FADE)).code.add(C.H`vec4 renderClouds(vec3 worldRay, vec3 cameraPosition) {
vec3 intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPoint);
vec3 worldRayRotated = rotateDirectionToAnchorPoint(rotationClouds, normalize(intersectionPoint));
vec3 worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
vec4 cloudData = sampleCloud(worldRayRotatedCorrected, crossFade);
vec3 cameraPositionN = normalize(cameraPosition);
vec4 cloudColor = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
if(crossFade) {
intersectionPoint = intersectWithCloudLayer(worldRay, cameraPosition, anchorPointNew);
worldRayRotated = rotateDirectionToAnchorPoint(rotationCloudsNew, normalize(intersectionPoint));
worldRayRotatedCorrected = correctForPlanetCurvature(worldRayRotated);
cloudData = sampleCloud(worldRayRotatedCorrected, false);
vec4 cloudColorNew = vec4(calculateCloudColor(cameraPositionN, worldRay, cloudData), cloudData.a);
cloudColor = mix(cloudColor, cloudColorNew, fadeFactor);
}
float totalTransmittance = length(cloudColor.rgb) == 0.0 ?
1.0 :
clamp(cloudColor.a * cloudsOpacity + (1.0 - cloudsOpacity), 0.0 , 1.0);
return vec4(cloudColor.rgb, totalTransmittance);
}`)}const ue=($.$O.radius+de.k9)**2;function re(b){b.code.add(C.H`vec3 tonemapACES(vec3 x) {
return clamp((x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14), 0.0, 1.0);
}`)}function J(b,B){b.include(U.f,B),b.include(T),b.include(O.v),B.cloudReflections&&b.include(me),b.include(V,B);const z=b.fragment;z.include(re),z.constants.add("fresnelSky","vec3",[.02,1,15]),z.constants.add("fresnelMaterial","vec2",[.02,.1]),z.constants.add("roughness","float",.015),z.constants.add("foamIntensityExternal","float",1.7),z.constants.add("ssrIntensity","float",.65),z.constants.add("ssrHeightFadeStart","float",Z.O),z.constants.add("ssrHeightFadeEnd","float",Z.b),z.constants.add("waterDiffusion","float",.92),z.constants.add("waterSeaColorMod","float",.8),z.constants.add("correctionViewingPowerFactor","float",.4),z.constants.add("skyZenitColor","vec3",[.52,.68,.9]),z.constants.add("skyColor","vec3",[.67,.79,.9]),z.constants.add("cloudFresnelModifier","vec2",[1.2,.01]),z.code.add(C.H`PBRShadingWater shadingInfo;
vec3 getSkyGradientColor(in float cosTheta, in vec3 horizon, in vec3 zenit) {
float exponent = pow((1.0 - cosTheta), fresnelSky[2]);
return mix(zenit, horizon, exponent);
}`),z.uniforms.add(new S.U("lightingSpecularStrength",te=>te.lighting.mainLight.specularStrength),new S.U("lightingEnvironmentStrength",te=>te.lighting.mainLight.environmentStrength)),z.code.add(C.H`vec3 getSeaColor(in vec3 n, in vec3 v, in vec3 l, vec3 color, in vec3 lightIntensity, in vec3 localUp, in float shadow, float foamIntensity, vec3 viewPosition, vec3 position) {
float reflectionHit = 0.0;
float reflectionHitDiffused = 0.0;
vec3 seaWaterColor = linearizeGamma(color);
vec3 h = normalize(l + v);
shadingInfo.NdotV = clamp(dot(n, v), 0.001, 1.0);
shadingInfo.VdotN = clamp(dot(v, n), 0.001, 1.0);
shadingInfo.NdotH = clamp(dot(n, h), 0.0, 1.0);
shadingInfo.VdotH = clamp(dot(v, h), 0.0, 1.0);
shadingInfo.LdotH = clamp(dot(l, h), 0.0, 1.0);
float upDotV = max(dot(localUp,v), 0.0);
vec3 skyHorizon = linearizeGamma(skyColor);
vec3 skyZenit = linearizeGamma(skyZenitColor);
vec3 skyColor = getSkyGradientColor(upDotV, skyHorizon, skyZenit );
float upDotL = max(dot(localUp,l),0.0);
float daytimeMod = 0.1 + upDotL * 0.9;
skyColor *= daytimeMod;
float shadowModifier = clamp(shadow, 0.8, 1.0);
vec3 fresnelModifier = fresnelReflection(shadingInfo.VdotN, vec3(fresnelSky[0]), fresnelSky[1]);
vec3 reflSky = lightingEnvironmentStrength * fresnelModifier * skyColor * shadowModifier;
vec3 reflSea = seaWaterColor * mix(skyColor, upDotL * lightIntensity * LIGHT_NORMALIZATION, 2.0 / 3.0) * shadowModifier;
vec3 specular = vec3(0.0);
if(upDotV > 0.0 && upDotL > 0.0) {
vec3 specularSun = brdfSpecularWater(shadingInfo, roughness, vec3(fresnelMaterial[0]), fresnelMaterial[1]);
vec3 incidentLight = lightIntensity * LIGHT_NORMALIZATION * shadow;
float NdotL = clamp(dot(n, l), 0.0, 1.0);
specular = lightingSpecularStrength * NdotL * incidentLight * specularSun;
}
vec3 foam = vec3(0.0);
if(upDotV > 0.0) {
foam = foamIntensity2FoamColor(foamIntensityExternal, foamIntensity, skyZenitColor, daytimeMod);
}
float correctionViewingFactor = pow(max(dot(v, localUp), 0.0), correctionViewingPowerFactor);
vec3 normalCorrectedClouds = mix(localUp, n, correctionViewingFactor);
vec3 reflectedWorld = normalize(reflect(-v, normalCorrectedClouds));`),B.cloudReflections&&z.uniforms.add(new S.U("cloudsOpacity",te=>te.clouds.opacity)).code.add(C.H`vec4 cloudsColor = renderClouds(reflectedWorld, position);
cloudsColor.a = 1.0 - cloudsColor.a;
cloudsColor = pow(cloudsColor, vec4(GAMMA));
cloudsColor *= clamp(fresnelModifier.y * cloudFresnelModifier[0] - cloudFresnelModifier[1], 0.0, 1.0) * cloudsOpacity;`),B.screenSpaceReflections?z.uniforms.add(new I.F("view",te=>te.camera.viewMatrix),new N.x("lastFrameColorTexture",te=>te.ssr.lastFrameColor?.getTexture()),new S.U("fadeFactorSSR",te=>te.ssr.fadeFactor)).code.add(C.H`vec3 viewDir = normalize(viewPosition);
vec4 viewNormalVectorCoordinate = view * vec4(n, 0.0);
vec3 viewNormal = normalize(viewNormalVectorCoordinate.xyz);
vec4 viewUp = view * vec4(localUp, 0.0);
vec3 viewNormalCorrectedSSR = mix(viewUp.xyz, viewNormal, correctionViewingFactor);
vec3 reflected = normalize(reflect(viewDir, viewNormalCorrectedSSR));
vec3 hitCoordinate = screenSpaceIntersection(reflected, viewPosition, viewDir, viewUp.xyz);
vec3 reflectedColor = vec3(0.0);
if (hitCoordinate.z > 0.0)
{
vec2 reprojectedCoordinate = reprojectionCoordinate(hitCoordinate);
vec2 dCoords = smoothstep(0.3, 0.6, abs(vec2(0.5, 0.5) - hitCoordinate.xy));
float heightMod = smoothstep(ssrHeightFadeEnd, ssrHeightFadeStart, -viewPosition.z);
reflectionHit = clamp(1.0 - (1.3 * dCoords.y), 0.0, 1.0) * heightMod * fadeFactorSSR;
reflectionHitDiffused = waterDiffusion * reflectionHit;
reflectedColor = linearizeGamma(texture(lastFrameColorTexture, reprojectedCoordinate).xyz) *
reflectionHitDiffused * fresnelModifier.y * ssrIntensity;
}
float seaColorMod =  mix(waterSeaColorMod, waterSeaColorMod * 0.5, reflectionHitDiffused);
vec3 waterRenderedColor = tonemapACES((1.0 - reflectionHitDiffused) * reflSky + reflectedColor +
reflSea * seaColorMod + specular + foam);`):z.code.add(C.H`vec3 waterRenderedColor = tonemapACES(reflSky + reflSea * waterSeaColorMod + specular + foam);`),z.code.add(B.cloudReflections?B.screenSpaceReflections?C.H`return waterRenderedColor * (1.0 - (1.0 - reflectionHit) * cloudsColor.a) + (1.0 - reflectionHit) * cloudsColor.xyz;
}`:C.H`return waterRenderedColor * (1.0 - cloudsColor.a) + cloudsColor.xyz;
}`:C.H`return waterRenderedColor;
}`)}},4728:(ve,Y,e)=>{e.d(Y,{SL:()=>U,wR:()=>T});var O=e(40972),R=e(50915),C=e(30454);const T=[],U=[new C._(O.r.POSITION,3,R.pe.FLOAT,0,12)];new C._(O.r.POSITION,2,R.pe.FLOAT,0,8),new C._(O.r.POSITION,2,R.pe.FLOAT,0,16),new C._(O.r.UV0,2,R.pe.FLOAT,8,16)},35386:(ve,Y,e)=>{var O,R,C;e.d(Y,{k:()=>R,q:()=>O}),(C=O||(O={}))[C.ADD=0]="ADD",C[C.UPDATE=1]="UPDATE",C[C.REMOVE=2]="REMOVE",function(C){C[C.NONE=0]="NONE",C[C.VISIBILITY=1]="VISIBILITY",C[C.GEOMETRY=2]="GEOMETRY",C[C.TRANSFORMATION=4]="TRANSFORMATION",C[C.HIGHLIGHT=8]="HIGHLIGHT",C[C.OCCLUDEE=16]="OCCLUDEE"}(R||(R={}))},25612:(ve,Y,e)=>{e.d(Y,{$:()=>H});var O=e(33894),R=e(92771),C=e(62789),T=e(28714),U=e(83989),Z=e(56632);class H{constructor(I,N={}){this.geometry=I,this.screenToWorldRatio=1,this._transformation=(0,C.vt)(),this._shaderTransformation=null,this._boundingSphere=null,this.id=(0,O.c)(),this.layerUid=N.layerUid,this.graphicUid=N.graphicUid,this.castShadow=N.castShadow??!1,N.objectShaderTransformation&&this.objectShaderTransformationChanged(N.objectShaderTransformation)}get transformation(){return this._transformation}set transformation(I){(0,R.C)(this._transformation,I),this._boundingSphere=null}get boundingInfo(){return this.geometry.boundingInfo}objectShaderTransformationChanged(I){null==I?this._shaderTransformation=null:(this._shaderTransformation??=(0,C.vt)(),(0,R.lw)(this._shaderTransformation,I,this.geometry.transformation)),this._boundingSphere=null}get boundingSphere(){return this.boundingInfo?(null==this._boundingSphere&&(this._boundingSphere??=(0,U.c)(),(0,T.t)((0,U.a)(this._boundingSphere),this.boundingInfo.center,this.shaderTransformation),this._boundingSphere[3]=this.boundingInfo.radius*(0,Z.hG)(this.shaderTransformation)),this._boundingSphere):U.N}get material(){return this.geometry.material}get type(){return this.geometry.type}get shaderTransformation(){return this._shaderTransformation??this.transformation}get attributes(){return this.geometry.attributes}get highlight(){return this.geometry.highlights}foreachHighlightOptions(I){this.geometry.foreachHighlightOptions(I)}get hasHighlights(){return this.geometry.hasHighlights}get occludees(){return this.geometry.occludees}get visible(){return this.geometry.visible}set visible(I){this.geometry.visible=I}}},25079:(ve,Y,e)=>{e.d(Y,{v:()=>z});var O=e(89141),R=e(48499),C=e(74567),T=e(12335),U=e(67496),Z=e(91074),H=e(14356),W=e(55128),S=e(40972),I=e(61427),N=e(53670),V=e(59642),M=e(11556),$=e(18110),ae=e(96443),ee=e(54501),de=e(80449),ge=e(50915),ie=e(41396);class K extends $.w{constructor(q,se){super(q,se,new M.$(de.C,()=>e.e(8791).then(e.bind(e,98791))))}_createPipeline(q,se){const{oitPass:ne,output:be,transparent:Le,cullFace:Ye,draped:tt,hasOccludees:Ne,polygonOffset:ht,enableOffset:E}=q,w=ne===ae.Y.NONE,G=ne===ae.Y.FrontFace;return(0,ie.Ey)({blending:(0,C.RN)(be)&&Le?(0,H.Yf)(ne):null,culling:(0,ie.Xt)(Ye),depthTest:tt?null:{func:(0,H.K_)(ne)},depthWrite:(0,H.z5)(q),drawBuffers:be===C.V.Depth?{buffers:[ge.Hr.NONE]}:(0,H.m6)(ne,be),colorWrite:ie.kn,stencilWrite:Ne?ee.v0:null,stencilTest:Ne?se?ee.a9:ee.qh:null,polygonOffset:w||G?ht?X:null:(0,H.aB)(E)})}initializePipeline(q){return this._occludeePipelineState=this._createPipeline(q,!0),this._createPipeline(q,!1)}getPipeline(q){return q?this._occludeePipelineState:super.getPipeline()}}const X={factor:1,units:1};var A=e(8189),me=e(66874),ue=e(43167),re=e(55062),J=e(35094);class b extends J.E{constructor(){super(...arguments),this.cullFace=U.s2.None,this.hasVertexColors=!1,this.transparent=!1,this.discardInvisibleFragments=!1,this.polygonOffset=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.terrainDepthTest=!1,this.cullAboveTerrain=!1,this.objectAndLayerIdColorInstanced=!1,this.vvColor=!1,this.draped=!1,this.textureCoordinateType=me.I.None,this.emissionSource=ue.ZX.None,this.occlusionPass=!1,this.hasVvInstancing=!0,this.vvSize=!1,this.vvOpacity=!1}}(0,A._)([(0,re.W)({count:U.s2.COUNT})],b.prototype,"cullFace",void 0),(0,A._)([(0,re.W)()],b.prototype,"hasVertexColors",void 0),(0,A._)([(0,re.W)()],b.prototype,"transparent",void 0),(0,A._)([(0,re.W)()],b.prototype,"discardInvisibleFragments",void 0),(0,A._)([(0,re.W)()],b.prototype,"polygonOffset",void 0),(0,A._)([(0,re.W)()],b.prototype,"enableOffset",void 0),(0,A._)([(0,re.W)()],b.prototype,"writeDepth",void 0),(0,A._)([(0,re.W)()],b.prototype,"hasOccludees",void 0),(0,A._)([(0,re.W)()],b.prototype,"terrainDepthTest",void 0),(0,A._)([(0,re.W)()],b.prototype,"cullAboveTerrain",void 0),(0,A._)([(0,re.W)()],b.prototype,"objectAndLayerIdColorInstanced",void 0),(0,A._)([(0,re.W)()],b.prototype,"vvColor",void 0),(0,A._)([(0,re.W)()],b.prototype,"draped",void 0);var B=e(28700);class z extends N.W{constructor(q){super(q,xe),this._configuration=new b,this.supportsEdges=!0,this.produces=new Map([[W.N.OPAQUE_MATERIAL,se=>this._isOpaqueMaterialPass(se)],[W.N.OPAQUE_MATERIAL_WITHOUT_NORMALS,se=>this._isOpaqueNoSSAODepthPass(se)],[W.N.TRANSPARENT_MATERIAL,se=>(0,C.QG)(se)&&this._transparent&&this.parameters.writeDepth],[W.N.TRANSPARENT_MATERIAL_WITHOUT_NORMALS,se=>(0,C.eh)(se)&&this._transparent&&this.parameters.writeDepth],[W.N.TRANSPARENT_MATERIAL_WITHOUT_DEPTH,se=>(0,C.QG)(se)&&this._transparent&&!this.parameters.writeDepth],[W.N.DRAPED_MATERIAL,se=>(0,C.i3)(se)]])}getConfiguration(q,se){return this._configuration.output=q,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasVertexColors=this.parameters.hasVertexColors&&!this.parameters.vvColor,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this._transparent,this._configuration.discardInvisibleFragments=this._transparent&&!this._isOpaquePass(q)&&this.parameters.discardInvisibleFragments,this._configuration.polygonOffset=this.parameters.polygonOffset,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=se.hasOccludees,this._configuration.oitPass=se.oitPass,this._configuration.enableOffset=se.camera.relativeElevation<H.xt,this._configuration.terrainDepthTest=se.terrainDepthTest&&(0,C.RN)(q),this._configuration.cullAboveTerrain=se.cullAboveTerrain,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.draped=this.parameters.draped,this._configuration}get visible(){return this.parameters.color[3]>=B.Q}get _transparent(){return this.parameters.color[3]<1||this.parameters.forceTransparentMode}_isOpaquePass(q){return this._isOpaqueMaterialPass(q)||this._isOpaqueNoSSAODepthPass(q)}_isOpaqueMaterialPass(q){return q===C.V.Highlight||(0,C.QG)(q)&&!this._transparent}_isOpaqueNoSSAODepthPass(q){return(0,C.eh)(q)&&this.parameters.writeDepth&&!this._transparent}createGLMaterial(q){return new te(q)}createBufferWriter(){const q=(0,R.BP)().vec3f(S.r.POSITION);return(0,T.E)()&&q.vec4u8(S.r.OBJECTANDLAYERIDCOLOR),this.parameters.vvColor?q.f32(S.r.COLORFEATUREATTRIBUTE):q.vec4u8(S.r.COLOR),new I.Z(q)}}class te extends Z.A{beginSlot(q){return this.getTechnique(K,q)}}class xe extends V.S{constructor(){super(...arguments),this.color=O.uY,this.forceTransparentMode=!1,this.writeDepth=!0,this.hasVertexColors=!1,this.polygonOffset=!1,this.hasSlicePlane=!1,this.cullFace=U.s2.None,this.draped=!1,this.discardInvisibleFragments=!1}}},6771:(ve,Y,e)=>{e.d(Y,{Ci:()=>C,Dq:()=>Z,dB:()=>U,zK:()=>T});var O=e(48499),R=e(40972);const C=(0,O.BP)().vec3f(R.r.POSITION),T=(0,O.BP)().vec3f(R.r.POSITION).vec2f(R.r.UV0),U=(0,O.BP)().vec3f(R.r.POSITION).vec4u8(R.r.COLOR),Z=(0,O.BP)().vec3f(R.r.POSITION).vec2f(R.r.UV0).vec4u8(R.r.OBJECTANDLAYERIDCOLOR)},53670:(ve,Y,e)=>{e.d(Y,{W:()=>C});var O=e(50957),R=e(49178);class C extends O.im{intersect(U,Z,H,W,S,I){return(0,R.Uy)(U,H,W,S,void 0,I)}}},24639:(ve,Y,e)=>{e.d(Y,{Xq:()=>Z,wk:()=>U});const O={dash:[4,3],dot:[1,3],"long-dash":[8,3],"short-dash":[4,1],"short-dot":[1,1]},R={dash:O.dash,"dash-dot":[...O.dash,...O.dot],dot:O.dot,"long-dash":O["long-dash"],"long-dash-dot":[...O["long-dash"],...O.dot],"long-dash-dot-dot":[...O["long-dash"],...O.dot,...O.dot],none:null,"short-dash":O["short-dash"],"short-dash-dot":[...O["short-dash"],...O["short-dot"]],"short-dash-dot-dot":[...O["short-dash"],...O["short-dot"],...O["short-dot"]],"short-dot":O["short-dot"],solid:null},C=8;function U(W){return{pattern:[W,W],pixelRatio:2}}function Z(W){return"style"===W?.type?function H(W){return null!=W?function T(W,S){return null==W?W:{pattern:W.slice(),pixelRatio:S}}(R[W],C):null}(W.style):null}}}]);