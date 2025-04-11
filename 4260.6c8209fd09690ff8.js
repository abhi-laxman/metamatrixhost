"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[4260,4128],{10420:(k,E,u)=>{u.d(E,{c:()=>v,g:()=>y});var _=u(10467),x=(u(61579),u(34499));function y(l){return"l"===l?"m":"s"}function v(l){return b.apply(this,arguments)}function b(){return(b=(0,_.A)(function*(l){if(yield l.componentOnReady(),(0,x.i)())return l.requestUpdate(),new Promise(A=>requestAnimationFrame(()=>A()))})).apply(this,arguments)}},57051:(k,E,u)=>{u.d(E,{D:()=>At,a:()=>q,b:()=>Q,c:()=>mt,d:()=>St,g:()=>ht,h:()=>gt,i:()=>Ct,k:()=>L,l:()=>Dt,m:()=>Ft,p:()=>V,q:()=>Z,r:()=>bt,s:()=>tt,t:()=>_t,u:()=>$t,v:()=>yt,w:()=>Pt,x:()=>J,y:()=>M,z:()=>Nt});var _=u(10467),y=(u(34499),["input:not([inert])","select:not([inert])","textarea:not([inert])","a[href]:not([inert])","button:not([inert])","[tabindex]:not(slot):not([inert])","audio[controls]:not([inert])","video[controls]:not([inert])",'[contenteditable]:not([contenteditable="false"]):not([inert])',"details>summary:first-of-type:not([inert])","details:not([inert])"].join(",")),p=typeof Element>"u",w=p?function(){}:Element.prototype.matches||Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector,v=!p&&Element.prototype.getRootNode?function(t){var e;return null==t||null===(e=t.getRootNode)||void 0===e?void 0:e.call(t)}:function(t){return t?.ownerDocument},b=function t(e,r){var i;void 0===r&&(r=!0);var c=null==e||null===(i=e.getAttribute)||void 0===i?void 0:i.call(e,"inert");return""===c||"true"===c||r&&e&&t(e.parentNode)},C=function t(e,r,i){for(var c=[],f=Array.from(e);f.length;){var d=f.shift();if(!b(d,!1))if("SLOT"===d.tagName){var m=d.assignedElements(),O=t(m.length?m:d.children,!0,i);i.flatten?c.push.apply(c,O):c.push({scopeParent:d,candidates:O})}else{w.call(d,y)&&i.filter(d)&&(r||!e.includes(d))&&c.push(d);var U=d.shadowRoot||"function"==typeof i.getShadowRoot&&i.getShadowRoot(d),Tt=!b(U,!1)&&(!i.shadowRootFilter||i.shadowRootFilter(d));if(U&&Tt){var rt=t(!0===U?d.children:U.children,!0,i);i.flatten?c.push.apply(c,rt):c.push({scopeParent:d,candidates:rt})}else f.unshift.apply(f,d.children)}}return c},I=function(t){return!isNaN(parseInt(t.getAttribute("tabindex"),10))},$=function(t){if(!t)throw new Error("No node provided");return t.tabIndex<0&&(/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName)||function(t){var e,r=null==t||null===(e=t.getAttribute)||void 0===e?void 0:e.call(t,"contenteditable");return""===r||"true"===r}(t))&&!I(t)?0:t.tabIndex},o=function(t,e){return t.tabIndex===e.tabIndex?t.documentOrder-e.documentOrder:t.tabIndex-e.tabIndex},s=function(t){return"INPUT"===t.tagName},H=function(t){var e=t.getBoundingClientRect();return 0===e.width&&0===e.height},lt=function(t,e){return!(e.disabled||b(e)||function(t){return s(t)&&"hidden"===t.type}(e)||function(t,e){var r=e.displayCheck,i=e.getShadowRoot;if("hidden"===getComputedStyle(t).visibility)return!0;var c=w.call(t,"details>summary:first-of-type");if(w.call(c?t.parentElement:t,"details:not([open]) *"))return!0;if(r&&"full"!==r&&"legacy-full"!==r){if("non-zero-area"===r)return H(t)}else{if("function"==typeof i){for(var d=t;t;){var m=t.parentElement,D=v(t);if(m&&!m.shadowRoot&&!0===i(m))return H(t);t=t.assignedSlot?t.assignedSlot:m||D===t.ownerDocument?m:D.host}t=d}if(function(t){var e,f,d,m,r=t&&v(t),i=null===(e=r)||void 0===e?void 0:e.host,c=!1;if(r&&r!==t)for(c=!!(null!==(f=i)&&void 0!==f&&null!==(d=f.ownerDocument)&&void 0!==d&&d.contains(i)||null!=t&&null!==(m=t.ownerDocument)&&void 0!==m&&m.contains(t));!c&&i;){var D,O,R;c=!(null===(O=i=null===(D=r=v(i))||void 0===D?void 0:D.host)||void 0===O||null===(R=O.ownerDocument)||void 0===R||!R.contains(i))}return c}(t))return!t.getClientRects().length;if("legacy-full"!==r)return!0}return!1}(e,t)||function(t){return"DETAILS"===t.tagName&&Array.prototype.slice.apply(t.children).some(function(r){return"SUMMARY"===r.tagName})}(e)||function(t){if(/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))for(var e=t.parentElement;e;){if("FIELDSET"===e.tagName&&e.disabled){for(var r=0;r<e.children.length;r++){var i=e.children.item(r);if("LEGEND"===i.tagName)return!!w.call(e,"fieldset[disabled] *")||!i.contains(t)}return!0}e=e.parentElement}return!1}(e))},G=function(t,e){return!(function(t){return function(t){return s(t)&&"radio"===t.type}(t)&&!function(t){if(!t.name)return!0;var i,e=t.form||v(t),r=function(f){return e.querySelectorAll('input[type="radio"][name="'+f+'"]')};if(typeof window<"u"&&typeof window.CSS<"u"&&"function"==typeof window.CSS.escape)i=r(window.CSS.escape(t.name));else try{i=r(t.name)}catch(f){return console.error("Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s",f.message),!1}var c=function(t,e){for(var r=0;r<t.length;r++)if(t[r].checked&&t[r].form===e)return t[r]}(i,t.form);return!c||c===t}(t)}(e)||$(e)<0||!lt(t,e))},ut=function(t){var e=parseInt(t.getAttribute("tabindex"),10);return!!(isNaN(e)||e>=0)},dt=function t(e){var r=[],i=[];return e.forEach(function(c,f){var d=!!c.scopeParent,m=d?c.scopeParent:c,D=function(t,e){var r=$(t);return r<0&&e&&!I(t)?0:r}(m,d),O=d?t(c.candidates):m;0===D?d?r.push.apply(r,O):r.push(m):i.push({documentOrder:f,tabIndex:D,item:c,isScope:d,content:O})}),i.sort(o).reduce(function(c,f){return f.isScope?c.push.apply(c,f.content):c.push(f.content),c},[]).concat(r)},ft=function(t,e){var r;return r=(e=e||{}).getShadowRoot?C([t],e.includeContainer,{filter:G.bind(null,e),flatten:!1,getShadowRoot:e.getShadowRoot,shadowRootFilter:ut}):function(t,e,r){if(b(t))return[];var i=Array.prototype.slice.apply(t.querySelectorAll(y));return e&&w.call(t,y)&&i.unshift(t),i.filter(r)}(t,e.includeContainer,G.bind(null,e)),dt(r)};const V={getShadowRoot:!0};function ht(t){const i=L(t,"[dir]");return i?i.getAttribute("dir"):"ltr"}function M(t){return t.getRootNode()}function mt(t){const e=M(t);return"host"in e?e:null}function X(t){return t.host||null}function Z(t,{selector:e,id:r}){if(!t)return null;t.assignedSlot&&(t=t.assignedSlot);const i=M(t);return(r?"getElementById"in i?i.getElementById(r):null:e?i.querySelector(e):null)||Z(X(i),{selector:e,id:r})}function L(t,e){return t?t.closest(e)||L(X(M(t)),e):null}function Q(t){return B.apply(this,arguments)}function B(){return(B=(0,_.A)(function*(t){if(t)return function pt(t){return"function"==typeof t?.setFocus}(t)?t.setFocus():t.focus()})).apply(this,arguments)}function J(t){if(t)return ft(t,V)[0]??t}function gt(t){J(t)?.focus()}function yt(t,e,r){return"string"==typeof e&&""!==e?e:""===e||!0===e?t[r]:void 0}function _t(t){return(!!t).toString()}function bt(t){return q(t)||function xt(t){return!!function wt(t){return function Et(t){return t.currentTarget.assignedNodes({flatten:!0})}(t).filter(e=>e.nodeType===Node.TEXT_NODE).map(e=>e.textContent).join("").trim()}(t)}(t)}function At(t){for(const e of t.childNodes)if(e.nodeType===Node.TEXT_NODE&&""!==e.textContent?.trim()||e.nodeType===Node.ELEMENT_NODE)return!0;return!1}function q(t){return!!tt(t).length}function tt(t,e){return function It(t,e){const r=t.assignedElements({flatten:!0});return e?function vt(t,e){return t.filter(r=>r.matches(e))}(r,e):r}(t.target,e)}function Ct(t){return!(!t.isPrimary||0!==t.button)}function $t(t){return 0===t.detail}const St=(t,e,r,i=!0)=>{const c=t.indexOf(e);let m;return i&&(r="previous"===r&&0===c?"last":"next"===r&&c===t.length-1?"first":r),m="previous"===r?t[c-1]||t[i?t.length-1:c]:"next"===r?t[c+1]||t[i?0:c]:"last"===r?t[t.length-1]:t[0],Q(m),m};function Dt(t,e){if(t.parentNode!==e.parentNode)return!1;const r=Array.from(t.parentNode.children);return r.indexOf(t)<r.indexOf(e)}function Nt(t,e,r,i){return z.apply(this,arguments)}function z(){return(z=(0,_.A)(function*(t,e,r,i){return nt(t,e,"animation",r,i)})).apply(this,arguments)}function Pt(t,e,r,i){return W.apply(this,arguments)}function W(){return(W=(0,_.A)(function*(t,e,r,i){return nt(t,e,"transition",r,i)})).apply(this,arguments)}function Y(){return(Y=(0,_.A)(function*(t,e){yield K(),t?.(),yield K(),e?.()})).apply(this,arguments)}function et(t,e,r){const i="transition"===e?"transitionProperty":"animationName";return t.getAnimations().find(c=>c[i]===r)}function nt(t,e,r,i,c){return j.apply(this,arguments)}function j(){return j=(0,_.A)(function*(t,e,r,i,c){let f=et(t,r,e);if(f||(yield K(),f=et(t,r,e)),!f)return function Ot(t,e){return Y.apply(this,arguments)}(i,c);i?.();try{yield f.finished}catch{}finally{c?.()}}),j.apply(this,arguments)}function K(){return new Promise(t=>requestAnimationFrame(()=>t()))}function Ft(t){return t.endsWith("px")}},61579:(k,E,u)=>{u.d(E,{l:()=>v});var _=u(34499);const N=new Set,x={trace:0,debug:1,info:2,warn:4,error:8,off:10};function p(l,...A){(function y(l){return x[l]>=x[_.l]})(l)&&console[l].call(this,"%ccalcite","background: #007AC2; color: #fff; border-radius: 4px; padding: 2px 4px;",...A)}let w;const v={debug:l=>p("debug",l),info:l=>p("info",l),warn:l=>p("warn",l),error:l=>p("error",l),trace:l=>p("trace",l),deprecated:function b(l,{component:A,name:C,suggested:I,removalVersion:$}){const T=`${l}:${"component"===l?"":A}${C}`;if(N.has(T))return;N.add(T);const o=Array.isArray(I);o&&!w&&(w=new Intl.ListFormat("en",{style:"long",type:"disjunction"})),p("warn",`[${C}] ${l} is deprecated and will be removed in ${"future"===$?"a future version":`v${$}`}.${I?` Use ${o?w.format(I.map(a=>`"${a}"`)):`"${I}"`} instead.`:""}`)}}},24128:(k,E,u)=>{u.d(E,{c:()=>N});var _=u(34499);function N(y,p,w){if(!(0,_.i)())return;const v=function x(y){class p extends window.MutationObserver{constructor(v){super(v),this.observedEntry=[],this.callback=v}observe(v,b){return this.observedEntry.push({target:v,options:b}),super.observe(v,b)}unobserve(v){const b=this.observedEntry.filter(l=>l.target!==v);this.observedEntry=[],this.callback(super.takeRecords(),this),this.disconnect(),b.forEach(l=>this.observe(l.target,l.options))}}return"intersection"===y?window.IntersectionObserver:"mutation"===y?p:window.ResizeObserver}(y);return new v(p,w)}},84260:(k,E,u)=>{u.r(E),u.d(E,{Flow:()=>I});var _=u(10467),N=u(34499),x=u(67967),y=u(38324),p=u(51434),w=u(24128),v=u(10420),b=u(57051),l=u(85139);const C=l.AH`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;align-items:stretch;overflow:hidden;background-color:transparent}:host .frame{position:relative;margin:0;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;padding:0;animation-name:none;animation-duration:var(--calcite-animation-timing);background-color:var(--calcite-flow-background-color)}:host ::slotted(*){display:none;block-size:100%}:host ::slotted(*[selected]){display:flex}:host ::slotted(.calcite-match-height:last-child){display:flex;flex:1 1 auto;overflow:hidden}:host .frame--advancing{animation-name:calcite-frame-advance}:host .frame--retreating{animation-name:calcite-frame-retreat}@keyframes calcite-frame-advance{0%{--tw-bg-opacity: .5;transform:translate3d(50px,0,0)}to{--tw-bg-opacity: 1;transform:translateZ(0)}}@keyframes calcite-frame-retreat{0%{--tw-bg-opacity: .5;transform:translate3d(-50px,0,0)}to{--tw-bg-opacity: 1;transform:translateZ(0)}}:host([hidden]){display:none}[hidden]{display:none}`;let I=(()=>{class $ extends p.WF{constructor(){super(),this.itemMutationObserver=(0,w.c)("mutation",()=>this.updateItemsAndProps()),this.items=[],this.selectedIndex=-1,this.flowDirection="standby",this.listen("calciteInternalFlowItemChange",this.handleCalciteInternalFlowItemChange),this.listen("calciteFlowItemBack",this.handleItemBackClick)}static{this.properties={flowDirection:16,customItemSelectors:1}}static{this.styles=C}back(){var o=this;return(0,_.A)(function*(){const{items:s,selectedIndex:a}=o,h=s[a],P=s[a-1];if(!h||!P)return;const S=h.beforeBack?h.beforeBack:()=>Promise.resolve();try{yield S.call(h)}catch{return}return h.selected=!1,P.selected=!0,P})()}setFocus(){var o=this;return(0,_.A)(function*(){yield(0,v.c)(o);const{items:s}=o;return s[o.selectedIndex]?.setFocus()})()}connectedCallback(){super.connectedCallback(),this.itemMutationObserver?.observe(this.el,{childList:!0,subtree:!0})}willUpdate(o){o.has("flowDirection")&&(this.hasUpdated||"standby"!==this.flowDirection)&&this.handleFlowDirectionChange(this.flowDirection)}loaded(){this.updateItemsAndProps()}disconnectedCallback(){super.disconnectedCallback(),this.itemMutationObserver?.disconnect()}handleFlowDirectionChange(o){var s=this;return(0,_.A)(function*(){"standby"!==o&&(yield(0,b.z)(s.frameEl,"retreating"===o?"calcite-frame-retreat":"calcite-frame-advance"),s.resetFlowDirection())})()}handleCalciteInternalFlowItemChange(o){o.stopPropagation(),this.updateFlowProps()}handleItemBackClick(o){var s=this;return(0,_.A)(function*(){if(!o.defaultPrevented)return yield s.back(),s.setFocus()})()}resetFlowDirection(){this.flowDirection="standby"}getFlowDirection(o,s){return o>-1&&s>0||o>0?s<o?"retreating":"advancing":"standby"}updateItemsAndProps(){const{customItemSelectors:o,el:s}=this,a=Array.from(s.querySelectorAll("calcite-flow-item"+(o?`,${o}`:""))).filter(h=>h.closest("calcite-flow")===s);this.items=a,this.ensureSelectedFlowItemExists(),this.updateFlowProps()}updateFlowProps(){const{selectedIndex:o,items:s}=this,a=this.findSelectedFlowItemIndex(s);s.forEach((h,P)=>{const S=P===a;S||(h.menuOpen=!1),h.showBackButton=S&&a>0}),-1!==a&&(o!==a&&(this.flowDirection=this.getFlowDirection(o,a)),this.selectedIndex=a)}findSelectedFlowItemIndex(o){const s=o.slice(0).reverse().find(a=>!!a.selected);return o.indexOf(s)}ensureSelectedFlowItemExists(){const{items:o}=this;if(-1!==this.findSelectedFlowItemIndex(o))return;const s=o[o.length-1];s&&(s.selected=!0)}setFrameEl(o){this.frameEl=o}render(){const{flowDirection:o}=this;return y.qy`<div class=${(0,p.CP)({frame:!0,"frame--advancing":"advancing"===o,"frame--retreating":"retreating"===o})} ${(0,x.K)(this.setFrameEl)}><slot></slot></div>`}}return $})();(0,N.c)("calcite-flow",I)},67967:(k,E,u)=>{u.d(E,{_:()=>C,K:()=>T});var _=u(39009),N=u(75051),x=u(8971);const y=(o,s)=>{const a=o._$AN;if(void 0===a)return!1;for(const h of a)h._$AO?.(s,!1),y(h,s);return!0},p=o=>{let s,a;do{if(void 0===(s=o._$AM))break;a=s._$AN,a.delete(o),o=s}while(0===a?.size)},w=o=>{for(let s;s=o._$AM;o=s){let a=s._$AN;if(void 0===a)s._$AN=a=new Set;else if(a.has(o))break;a.add(o),l(s)}};function v(o){void 0!==this._$AN?(p(this),this._$AM=o,w(this)):this._$AM=o}function b(o,s=!1,a=0){const h=this._$AH,P=this._$AN;if(void 0!==P&&0!==P.size)if(s)if(Array.isArray(h))for(let S=a;S<h.length;S++)y(h[S],!1),p(h[S]);else null!=h&&(y(h,!1),p(h));else y(this,o)}const l=o=>{o.type==x.OA.CHILD&&(o._$AP??=b,o._$AQ??=v)};class A extends x.WL{constructor(){super(...arguments),this._$AN=void 0}_$AT(s,a,h){super._$AT(s,a,h),w(this),this.isConnected=s._$AU}_$AO(s,a=!0){s!==this.isConnected&&(this.isConnected=s,s?this.reconnected?.():this.disconnected?.()),a&&(y(this,s),p(this))}setValue(s){if((0,N.Rt)(this._$Ct))this._$Ct._$AI(s,this);else{const a=[...this._$Ct._$AH];a[this._$Ci]=s,this._$Ct._$AI(a,this,0)}}disconnected(){}reconnected(){}}const C=()=>new I;class I{}const $=new WeakMap,T=(0,x.u$)(class extends A{render(o){return _.s6}update(o,[s]){const a=s!==this.Y;return a&&void 0!==this.Y&&this.rt(void 0),(a||this.lt!==this.ct)&&(this.Y=s,this.ht=o.options?.host,this.rt(this.ct=o.element)),_.s6}rt(o){if(this.isConnected||(o=void 0),"function"==typeof this.Y){const s=this.ht??globalThis;let a=$.get(s);void 0===a&&(a=new WeakMap,$.set(s,a)),void 0!==a.get(this.Y)&&this.Y.call(this.ht,void 0),a.set(this.Y,o),void 0!==o&&this.Y.call(this.ht,o)}else this.Y.value=o}get lt(){return"function"==typeof this.Y?$.get(this.ht??globalThis)?.get(this.Y):this.Y?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}})}}]);