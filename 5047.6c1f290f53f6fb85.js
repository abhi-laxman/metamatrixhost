"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[5047],{45047:(W,F,i)=>{i.r(F),i.d(F,{default:()=>J});var C=i(10467),s=i(8189),A=(i(13242),i(1119)),l=i(85211),I=(i(3248),i(35150),i(40707),i(76576)),w=i(41843),f=i(75737),b=i(42900),E=i(92190),a=(i(60421),i(56295)),v=i(83648),x=i(12619),O=i(48900),j=i(2188),P=i(5668),L=i(46186);const g="esri-utility-network-association-list",y={featureObserver:`${g}__feature-observer`,filterContainer:`${g}__filter-container`,limitNoticeContainer:`${g}__limit-notice-container`,loadingContainer:`${g}__loading-container`};let d=class extends j.A{constructor(e,t){super(e,t),this._isFeatureCountNoticeOpen=!0,this._observer=new IntersectionObserver(([n])=>{n?.isIntersecting&&this._increaseFeaturePage()},{root:window.document}),this._observerNode=null,this.featuresPerPage=50,this.filterText="",this.headingLevel=5,this.maxFeatureCount=1e3,this.messagesFeature=null,this.messagesCommon=null,this.selectedLayer=null,this.tooltipReferenceMap=new x.A,this.viewModel=new v.A}initialize(){this.setUpObserver()}loadDependencies(){return(0,b.W)({icon:()=>i.e(1951).then(i.bind(i,81951)),input:()=>Promise.all([i.e(1951),i.e(3869)]).then(i.bind(i,13869)),loader:()=>i.e(5897).then(i.bind(i,45897)),notice:()=>Promise.all([i.e(1951),i.e(7520)]).then(i.bind(i,77520))})}destroy(){this.tooltipReferenceMap.clear()}get associatedFeatureCount(){const t=this.selectedLayer?this.viewModel.associationViewModels.get(this.selectedLayer):null;return t?t.length:0}set currentFeaturePage(e){const{featuresPerPage:t,associatedFeatureCount:n}=this,o=Math.ceil(n/t)||1,r=Math.max(Math.min(e,o),1);this._set("currentFeaturePage",r)}get currentFeaturePage(){return this._get("currentFeaturePage")??1}get endIndex(){const{currentFeaturePage:e,featuresPerPage:t,maxFeatureCount:n}=this;return Math.min(e*t,n)}renderConnectivityIcon(e,t){const{tooltipReferenceMap:n}=this;let o;switch(e){case"junction-edge-from-connectivity":o="connection-end-left";break;case"junction-edge-to-connectivity":o="connection-end-right";break;case"junction-edge-midspan-connectivity":o="connection-middle";break;default:o="connection-to-connection"}return(0,a.K)("calcite-icon",{afterCreate:r=>n.set(t,r),afterRemoved:()=>n.delete(t),icon:o,scale:"s",slot:"content-start"})}renderFeatureCountWarning(){const{associatedFeatureCount:e,maxFeatureCount:t,messagesFeature:n}=this;return e>t?(0,a.K)("calcite-notice",{class:this._isFeatureCountNoticeOpen?y.limitNoticeContainer:void 0,closable:!0,icon:"information",kind:"info",open:!0,scale:"s",width:"full",onCalciteNoticeBeforeOpen:()=>this._isFeatureCountNoticeOpen=!0,onCalciteNoticeClose:()=>this._isFeatureCountNoticeOpen=!1},(0,a.K)("div",{slot:"title"},n.associationsLimitNoticeTitle),(0,a.K)("div",{slot:"message"},(0,L.V)(n.associationsLimitNoticeMessage,{number:t}))):null}renderFeatureObserver(){return(0,a.K)("div",{afterCreate:this._onObserverCreate,bind:this,class:y.featureObserver,key:"feature-observer"})}renderFilter(){return(0,a.K)("div",{class:y.filterContainer,key:"filter"},(0,a.K)("calcite-input",{icon:"search",placeholder:this.messagesFeature.associationFilterPlaceholder,type:"search",onCalciteInputInput:e=>{this.filterText=e.currentTarget.value.trim().toLowerCase(),this.currentFeaturePage=1}}))}renderLoading(){return(0,a.K)("div",{class:y.loadingContainer,key:"loading-container"},this.renderLoadingIcon())}renderLoadingIcon(){return(0,a.K)("calcite-loader",{inline:!0,label:this.messagesCommon.loading})}getConnectivityTooltip(e){const{messagesFeature:t}=this;switch(e){case"connectivity":case"junction-junction-connectivity":return t.associationsJunctionJunction;case"junction-edge-from-connectivity":return t.associationsJunctionEdgeFrom;case"junction-edge-midspan-connectivity":return t.associationsJunctionEdgeMidspan;case"junction-edge-to-connectivity":return t.associationsJunctionEdgeTo;default:return""}}setUpObserver(){this.addHandles((0,O.wB)(()=>this._observerNode,()=>this._onObserverChange()))}_increaseFeaturePage(){this.currentFeaturePage++}_onObserverChange(){var e=this;return(0,C.A)(function*(){e._observerNode&&e._observer.unobserve(e._observerNode);const{state:t,showAllEnabled:n}=e.viewModel;e._observerNode&&"ready"===t&&n&&e._observer.observe(e._observerNode)})()}_onObserverCreate(e){this._observerNode=e}};(0,s._)([(0,l.MZ)()],d.prototype,"_observer",void 0),(0,s._)([(0,l.MZ)()],d.prototype,"_observerNode",void 0),(0,s._)([(0,l.MZ)()],d.prototype,"associatedFeatureCount",null),(0,s._)([(0,l.MZ)()],d.prototype,"currentFeaturePage",null),(0,s._)([(0,l.MZ)()],d.prototype,"endIndex",null),(0,s._)([(0,l.MZ)()],d.prototype,"featuresPerPage",void 0),(0,s._)([(0,l.MZ)()],d.prototype,"filterText",void 0),(0,s._)([(0,l.MZ)()],d.prototype,"headingLevel",void 0),(0,s._)([(0,l.MZ)()],d.prototype,"maxFeatureCount",void 0),(0,s._)([(0,l.MZ)(),(0,P.G)("esri/widgets/Feature/t9n/Feature")],d.prototype,"messagesFeature",void 0),(0,s._)([(0,l.MZ)(),(0,P.G)("esri/t9n/common")],d.prototype,"messagesCommon",void 0),(0,s._)([(0,l.MZ)()],d.prototype,"selectedLayer",void 0),(0,s._)([(0,l.MZ)()],d.prototype,"tooltipReferenceMap",void 0),(0,s._)([(0,l.MZ)({type:v.A})],d.prototype,"viewModel",void 0),d=(0,s._)([(0,I.$)("esri.widgets.support.UtilityNetworkAssociations.UtilityNetworkAssociationList")],d);const R=d;var M,U=i(68479);function N(e){const{percentAlong:t}=e;return null==t?"":(0,U.ZV)(t,{style:"percent",maximumFractionDigits:2})}function T(e){const{associationType:t}=e;return"connectivity"===t||"junction-junction-connectivity"===t||"junction-edge-from-connectivity"===t||"junction-edge-midspan-connectivity"===t||"junction-edge-to-connectivity"===t}const V="esri-feature-utility-network-associations",Z={base:V,listItemHidden:`${V}__list-item--hidden`};let c=M=class extends R{constructor(e,t){super(e,t),this.description=null,this.flowItems=null,this.flowType="feature-utility-network-association-type",this.listType=null,this.parentFeatureViewModel=null,this.title=null,this.viewModel=new v.A,this.visibleElements=new f.A}initialize(){this.setUpObserver()}loadDependencies(){return(0,b.W)({chip:()=>Promise.all([i.e(1951),i.e(9998)]).then(i.bind(i,99998)),icon:()=>i.e(1951).then(i.bind(i,81951)),list:()=>Promise.all([i.e(1951),i.e(3869),i.e(2076),i.e(6620)]).then(i.bind(i,26620)),"list-item":()=>Promise.all([i.e(1951),i.e(8569),i.e(6126),i.e(2076),i.e(7313)]).then(i.bind(i,10160)),tooltip:()=>Promise.all([i.e(8569),i.e(3529)]).then(i.bind(i,43529))})}destroy(){this.tooltipReferenceMap.clear()}render(){const e=this.viewModel.associationViewModels,{state:t,showAllEnabled:n}=this.viewModel,{state:o}=this.parentFeatureViewModel??{};return(0,a.K)("div",{class:this.classes(Z.base,E.D.widget)},"loading"===t||"querying"===t||"loading"===o?this.renderLoading():(0,a.K)("calcite-list",{displayMode:"nested",label:this.selectedLayer?.title??this.messagesCommon.untitled},n&&this.selectedLayer?(0,a.K)(a.w,null,this.renderFilter(),this.renderFeatureCountWarning(),this._renderAssociatedFeatureListPage(),this.renderFeatureObserver()):Array.from(e.keys(),r=>this._renderTypeList(r,e.get(r)))))}_showAllAssociations(e){const{flowItems:t,viewModel:n,description:o}=this;if(!t||!e)return;n.showAllEnabled=!0;const r=new M({selectedLayer:e,title:e?.title,flowItems:t,parentFeatureViewModel:this.parentFeatureViewModel,featureVisibleElements:this.featureVisibleElements,description:o,visibleElements:new f.A({title:!1,description:!1}),viewModel:n});t.push(r)}_renderAssociatedFeatureListPage(){const e=this.viewModel.associationViewModels.get(this.selectedLayer).filter(t=>(0,w.DQ)(t.featureViewModel).toLowerCase().includes(this.filterText)).slice(0,this.endIndex);return[...this._renderTooltips(e),...this._renderAssociatedFeatureList(e)]}_renderItemTooltip(e){const{tooltipReferenceMap:t}=this;return T(e.association)?(0,a.K)("calcite-tooltip",{key:`tooltip-${e.featureViewModel.uid}`,overlayPositioning:"fixed",referenceElement:t.get(e.featureViewModel.uid)},this.getConnectivityTooltip(e.association.associationType)):null}_renderAssociatedFeature(e){const{featureViewModel:t}=e,n=(0,w.DQ)(t),o="loading"===t.state,r=this._findFlowItem(t),u=r<0&&this._isParentFeature(t),m=u||r>=0;return(0,a.K)("calcite-list-item",{class:o?Z.listItemHidden:void 0,description:(0,A._e)(e.terminalName??""),key:`associated-feature-type-${t.uid}`,label:(0,A._e)(n),onCalciteListItemSelect:()=>this._handleFeatureClick(u,r,t)},T(e.association)?this.renderConnectivityIcon(e.association.associationType,e.featureViewModel.uid):null,function $(e){return"junction-edge-midspan-connectivity"===e.associationType}(e.association)?(0,a.K)("calcite-chip",{label:N(e.association),scale:"s",slot:"content-end"},N(e.association)):null,this._renderChevronIconNode(m))}_selectAssociation(e){var t=this;return(0,C.A)(function*(){const{flowItems:n,featureVisibleElements:o}=t;if(!n)return;e.abilities={utilityNetworkAssociationsContent:!0};const{default:r}=yield Promise.resolve().then(i.bind(i,10573));n.push(new r({flowItems:n,flowType:"feature-association",viewModel:e,visibleElements:o}))})()}_handleFeatureClick(e,t,n){if(e)this.flowItems.drain(o=>{"showAllEnabled"in o.viewModel&&(o.viewModel.showAllEnabled=!1),o.viewModel=null,o.destroy()});else if(t<0||!this.flowItems)this._selectAssociation(n);else for(;this.flowItems.length>t+1;){const o=this.flowItems.pop();o&&("showAllEnabled"in o.viewModel&&(o.viewModel.showAllEnabled=!1),o.viewModel=null,o.destroy())}}_featureViewModelMatch(e,t){const n=e.graphic,o=n?.layer;let r=null;"subtype-sublayer"===o?.type&&o.parent?r=o.parent.globalIdField??null:o&&"globalIdField"in o&&(r=o.globalIdField);const u=r?n?.attributes[r]:null,m=t.graphic,h=m?.layer;let p=null;"subtype-sublayer"===h?.type&&h.parent?p=h.parent.globalIdField??null:h&&"globalIdField"in h&&(p=h.globalIdField);const K=p?m?.attributes[p]:null;return u&&K&&u===K}_isParentFeature(e){const t=this.flowItems?.getItemAt(0);return!!t&&this._featureViewModelMatch(t.parentFeatureViewModel,e)}_findFlowItem(e){return this.flowItems?.findIndex(t=>"feature-association"===t.flowType&&this._featureViewModelMatch(t.viewModel,e))??-1}_renderTooltips(e){return e.toArray().map(t=>this._renderItemTooltip(t))}_renderAssociatedFeatureList(e){return e.toArray().map(t=>this._renderAssociatedFeature(t))}_renderChevronIconNode(e){return(0,a.K)("calcite-icon",{flipRtl:!0,icon:e?"move-up":"chevron-right",scale:"s",slot:"content-end"})}_renderTypeList(e,t){const{messagesFeature:n}=this,{displayCount:o}=this.viewModel,r=t.slice(0,o),u=r.length<t.length;return(0,a.K)("calcite-list-item",{key:"show-all",label:e.title,open:!0,value:e.id},(0,a.K)("calcite-chip",{label:String(t.length),scale:"s",slot:"content-end"},t.length),(0,a.K)("calcite-list",{group:e.id,label:e.title??""},[this._renderTooltips(r),this._renderAssociatedFeatureList(r)],u?(0,a.K)("calcite-list-item",{description:(0,L.V)(n?.numberRecords,{number:t.length.toString()}),key:"show-all-item",label:n.showAll,onCalciteListItemSelect:()=>this._showAllAssociations(e)},(0,a.K)("calcite-icon",{icon:"list",scale:"s",slot:"content-end"})):null))}};(0,s._)([(0,l.MZ)()],c.prototype,"description",void 0),(0,s._)([(0,l.MZ)()],c.prototype,"featureVisibleElements",void 0),(0,s._)([(0,l.MZ)()],c.prototype,"flowItems",void 0),(0,s._)([(0,l.MZ)()],c.prototype,"flowType",void 0),(0,s._)([(0,l.MZ)()],c.prototype,"listType",void 0),(0,s._)([(0,l.MZ)()],c.prototype,"parentFeatureViewModel",void 0),(0,s._)([(0,l.MZ)()],c.prototype,"title",void 0),(0,s._)([(0,l.MZ)({type:v.A})],c.prototype,"viewModel",void 0),(0,s._)([(0,l.MZ)({type:f.A,nonNullable:!0})],c.prototype,"visibleElements",void 0),c=M=(0,s._)([(0,I.$)("esri.widgets.Feature.FeatureUtilityNetworkAssociationList")],c);const J=c}}]);