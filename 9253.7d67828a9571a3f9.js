"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[9253],{71634:(k,E,s)=>{s.r(E),s.d(E,{ActionBar:()=>S}),s(86126),s(72152);var z=s(10467),C=s(34499),O=s(1376),w=s(38324),x=s(51434),g=s(57051),T=s(10420),H=s(24128),B=s(67967),$=s(39009),f=s(52401),L=s(20846);const D=o=>o.reduce((n,t)=>n+t,0)/o.length,M=({layout:o,actionCount:n,actionWidth:t,width:e,actionHeight:i,height:c,groupCount:l})=>Math.max(n-(({width:o,actionWidth:n,layout:t,height:e,actionHeight:i,groupCount:c})=>Math.floor((("horizontal"===t?o:e)-2*c)/("horizontal"===t?n:i)))({width:e,actionWidth:t,layout:o,height:c,actionHeight:i,groupCount:l}),0),b=o=>Array.from(o.querySelectorAll("calcite-action")).filter(n=>!n.closest("calcite-action-menu")||n.slot===L.S.trigger);var N=s(49137),J=s(85139);const V=J.AH`:host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{pointer-events:auto;display:inline-flex;align-self:stretch;gap:var(--calcite-action-bar-items-space, 0)}:host([layout=vertical]){flex-direction:column}:host([layout=vertical]):host([overflow-actions-disabled]){overflow-y:auto}:host([layout=vertical]):host([expanded]){max-inline-size:var(--calcite-action-bar-expanded-max-width, auto)}:host([layout=vertical]) .action-group--end{margin-block-start:auto}:host([layout=vertical]) ::slotted(calcite-action-group:not(:last-of-type)){border-block-end-width:var(--calcite-border-width-sm)}:host([layout=horizontal]){flex-direction:row}:host([layout=horizontal]):host([overflow-actions-disabled]){overflow-x:auto}:host([layout=horizontal]) .action-group--end{margin-inline-start:auto}:host([layout=horizontal]) ::slotted(calcite-action-group:not(:last-of-type)){border-inline-end-width:var(--calcite-border-width-sm)}.action-group--end{justify-content:flex-end}:host([hidden]){display:none}[hidden]{display:none}`;let S=(()=>{class o extends x.WF{constructor(){super(),this.mutationObserver=(0,H.c)("mutation",()=>this.mutationObserverHandler()),this.resize=(0,O.A)(({width:t,height:e})=>{const{el:i,expanded:c,expandDisabled:l,layout:a,overflowActionsDisabled:h,actionGroups:r}=this;if(h||"vertical"===a&&!e||"horizontal"===a&&!t)return;const d=b(i),v=l?d.length:d.length+1;this.updateGroups();const p=this.hasActionsEnd||this.hasBottomActions||!l?r.length+1:r.length,{actionHeight:y,actionWidth:u}=(o=>{const n=o.filter(e=>e.slot!==f.S.menuActions),t=n?.length;return{actionWidth:t?D(n.map(e=>e.clientWidth||0)):0,actionHeight:t?D(n.map(e=>e.clientHeight||0)):0}})(d);(({actionGroups:o,expanded:n,overflowCount:t})=>{let e=t;o.reverse().forEach(i=>{let c=0;const l=b(i).reverse();l.forEach(a=>{a.slot===f.S.menuActions&&(a.removeAttribute("slot"),a.textEnabled=n)}),e>0&&l.some(a=>(l.filter(h=>!h.slot).length>1&&l.length>2&&!a.closest("calcite-action-menu")&&(a.textEnabled=!0,a.setAttribute("slot",f.S.menuActions),c++,c>1&&e--),e<1)),i.manager.component.requestUpdate()})})({actionGroups:r,expanded:c,overflowCount:M({layout:a,actionCount:v,actionHeight:y,actionWidth:u,height:e,width:t,groupCount:p})})},C.D.resize),this.resizeHandler=t=>{const{width:e,height:i}=t.contentRect;this.resize({width:e,height:i})},this.resizeObserver=(0,H.c)("resize",t=>this.resizeHandlerEntries(t)),this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionBarToggle.emit()},this.hasActionsEnd=!1,this.hasBottomActions=!1,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.messages=(0,N.u)(),this.overflowActionsDisabled=!1,this.overlayPositioning="absolute",this.scale="m",this.calciteActionBarToggle=(0,x.lh)({cancelable:!1}),this.listen("calciteActionMenuOpen",this.actionMenuOpenHandler)}static{this.properties={expandTooltip:16,hasActionsEnd:16,hasBottomActions:16,actionsEndGroupLabel:1,expandDisabled:7,expanded:7,layout:3,messageOverrides:0,overflowActionsDisabled:7,overlayPositioning:3,position:3,scale:3}}static{this.styles=V}overflowActions(){var t=this;return(0,z.A)(function*(){t.resize({width:t.el.clientWidth,height:t.el.clientHeight})})()}setFocus(){var t=this;return(0,z.A)(function*(){yield(0,T.c)(t),(0,g.h)(t.el)})()}connectedCallback(){super.connectedCallback(),this.updateGroups(),this.overflowActions(),this.mutationObserver?.observe(this.el,{childList:!0,subtree:!0}),this.overflowActionsDisabledHandler(this.overflowActionsDisabled)}willUpdate(t){t.has("expandDisabled")&&(this.hasUpdated||!1!==this.expandDisabled)&&this.overflowActions(),t.has("expanded")&&this.hasUpdated&&this.expandedHandler(),t.has("layout")&&(this.hasUpdated||"vertical"!==this.layout)&&this.updateGroups(),t.has("overflowActionsDisabled")&&(this.hasUpdated||!1!==this.overflowActionsDisabled)&&this.overflowActionsDisabledHandler(this.overflowActionsDisabled)}loaded(){this.overflowActions()}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver?.disconnect(),this.resizeObserver?.disconnect()}expandedHandler(){const{el:t,expanded:e}=this;(function j({el:o,expanded:n}){b(o).filter(t=>t.slot!==f.S.menuActions).forEach(t=>t.textEnabled=n),o.querySelectorAll("calcite-action-group, calcite-action-menu").forEach(t=>t.expanded=n)})({el:t,expanded:e}),this.overflowActions()}overflowActionsDisabledHandler(t){t?this.resizeObserver?.disconnect():(this.resizeObserver?.observe(this.el),this.overflowActions())}actionMenuOpenHandler(t){if(t.target.menuOpen){const e=t.composedPath();this.actionGroups?.forEach(i=>{e.includes(i)||(i.menuOpen=!1)})}}mutationObserverHandler(){this.updateGroups(),this.overflowActions()}resizeHandlerEntries(t){t.forEach(this.resizeHandler)}updateGroups(){const t=Array.from(this.el.querySelectorAll("calcite-action-group"));this.actionGroups=t,this.setGroupLayout(t)}setGroupLayout(t){t.forEach(e=>e.layout=this.layout)}handleDefaultSlotChange(){this.updateGroups()}handleActionsEndSlotChange(t){this.hasActionsEnd=(0,g.a)(t)}handleBottomActionsSlotChange(t){this.hasBottomActions=(0,g.a)(t)}handleTooltipSlotChange(t){const e=(0,g.s)(t).filter(i=>i?.matches("calcite-tooltip"));this.expandTooltip=e[0]}renderBottomActionGroup(){const{expanded:t,expandDisabled:e,el:i,position:c,toggleExpand:l,scale:a,layout:h,messages:r,actionsEndGroupLabel:d,overlayPositioning:v}=this,p=e?null:(({expanded:o,expandText:n,collapseText:t,expandLabel:e,collapseLabel:i,toggle:c,el:l,position:a,tooltip:h,ref:r,scale:d})=>{const v="rtl"===(0,g.g)(l),p=o?t:n,y=o?i:e,u=["chevrons-left","chevrons-right"];v&&u.reverse();const m="end"===function F(o,n){return o||n.closest("calcite-shell-panel")?.position||"start"}(a,l);return $.qy`<calcite-action .icon=${o?m?u[1]:u[0]:m?u[0]:u[1]} id=expand-toggle .label=${y} @click=${c} .scale=${d} .text=${p} .textEnabled=${o} title=${(o||h?null:p)??$.s6} ${(0,B.K)(Z=>(({tooltip:o,referenceElement:n,expanded:t,ref:e})=>(o&&(o.referenceElement=!t&&n?n:null),e&&e(n),n))({tooltip:h,referenceElement:Z,expanded:o,ref:r}))}></calcite-action>`})({collapseLabel:r.collapseLabel,collapseText:r.collapse,el:i,expandLabel:r.expandLabel,expandText:r.expand,expanded:t,position:c,scale:a,toggle:l,tooltip:this.expandTooltip});return w.qy`<calcite-action-group class=${(0,x.CP)("action-group--end")} .hidden=${this.expandDisabled&&!(this.hasActionsEnd||this.hasBottomActions)} .label=${d} .layout=${h} .overlayPositioning=${v} .scale=${a}><slot name=${"actions-end"} @slotchange=${this.handleActionsEndSlotChange}></slot><slot name=${"bottom-actions"} @slotchange=${this.handleBottomActionsSlotChange}></slot><slot name=${"expand-tooltip"} @slotchange=${this.handleTooltipSlotChange}></slot>${p}</calcite-action-group>`}render(){return w.qy`<slot @slotchange=${this.handleDefaultSlotChange}></slot>${this.renderBottomActionGroup()}`}}return o})();(0,C.c)("calcite-action-bar",S)}}]);