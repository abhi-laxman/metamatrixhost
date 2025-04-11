"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[930],{40930:(A,h,o)=>{o.r(h),o.d(h,{MediaLayerInteraction:()=>s});var d=o(10467),l=o(8189),M=o(98877),i=o(17715),y=o(56492),u=o(48900),r=o(85211),T=(o(3248),o(35150),o(40707),o(76576)),g=o(56985),E=o(19824);const v=Symbol(),p=Symbol(),P=Symbol();let s=class extends M.A{constructor(t){var e;super(t),e=this,this._tool=null,this._updatingHandles=new g.U,this.enabled=!1,this._onPointerMove=(0,y.sg)(function(){var n=(0,d.A)(function*(a){const _=yield e._updatingHandles.addPromise(e._findElementAtScreenPoint(a));e.destroyed||(e.removeHandles(p),_&&_!==e.selectedElement&&(e.view.cursor="pointer",e.addHandles((0,i.hA)(()=>e.view.cursor=null),p)))});return function(a){return n.apply(this,arguments)}}())}initialize(){this.addHandles((0,i.DQ)(this._updatingHandles)),this._updatingHandles.add(()=>this.enabled,t=>this._setEnabled(t),u.Vh),this._updatingHandles.add(()=>this._preferredInteractionTool,()=>this._preferredInteractionToolChanged())}get _validatedSelectedElement(){const t=this.selectedElement;if(!t)return null;const{layer:{source:e}}=this;return e?"hasElement"in e?e.hasElement(t)?t:null:e===t?t:null:null}get _preferredInteractionTool(){return this.options?.tool??"transform"}get updating(){return this._updatingHandles.updating}_setEnabled(t){if(this.removeHandles(v),!t)return;const{view:e}=this;this.addHandles([e.on("immediate-click",n=>this._onClick(n),E.o.TOOL),e.on("pointer-move",n=>this._onPointerMove(n).catch(()=>{}),E.o.TOOL),e.on("key-down",n=>{"z"===n.key&&this._tool?.canUndo()&&(this._tool.undo(),n.stopPropagation()),"r"===n.key&&this._tool?.canRedo()&&(this._tool.redo(),n.stopPropagation())}),this._updatingHandles.add(()=>this._validatedSelectedElement,n=>this._selectedElementChanged(n),u.Vh),(0,i.hA)(()=>{e.cursor=null,this._removeTool()})],v)}_findElementAtScreenPoint(t){var e=this;return(0,d.A)(function*(){const n=(yield e.view.hitTest(t,{include:[e.layer]})).results[0];return"media"===n?.type?n.element:null})()}_onClick(t){var e=this;return(0,d.A)(function*(){yield e._updatingHandles.addPromise(t.async((0,d.A)(function*(){const n=yield e._findElementAtScreenPoint(t);e.destroyed||(n&&t.stopPropagation(),e.selectedElement=n,e.selectedElement&&(e.view.cursor=null))})))})()}_preferredInteractionToolChanged(){const{_tool:t}=this;t&&(this._preferredInteractionTool===t.type||this._updatingHandles.addPromise(this._recreateTool()))}_recreateTool(){var t=this;return(0,d.A)(function*(){t.removeHandles(P),t._removeTool();const e=t._validatedSelectedElement;if(!e)return;const n=new AbortController;t.addHandles((0,i.rE)(n),P);const{TransformTool:a,ControlPointsTransformTool:_}=yield Promise.all([o.e(3930),o.e(7269),o.e(8066),o.e(3085),o.e(4424),o.e(5073),o.e(224),o.e(9574)]).then(o.bind(o,69574));if(n.signal.aborted)return;const{view:c}=t;switch(t._preferredInteractionTool){case"transform":t._tool=new a({target:e,view:c});break;case"reshape":t._tool=new _({mediaElement:e,view:c})}t.addHandles((0,i.hA)(()=>{t._tool&&(c.tools.remove(t._tool),t._tool=null)}),t._tool),c.addAndActivateTool(t._tool)})()}_removeTool(){this._tool&&this.removeHandles(this._tool)}_selectedElementChanged(t){var e=this;return(0,d.A)(function*(){t?.georeference?yield e._updatingHandles.addPromise(e._recreateTool()):e._removeTool()})()}};(0,l._)([(0,r.MZ)()],s.prototype,"_validatedSelectedElement",null),(0,l._)([(0,r.MZ)()],s.prototype,"_preferredInteractionTool",null),(0,l._)([(0,r.MZ)({constructOnly:!0})],s.prototype,"view",void 0),(0,l._)([(0,r.MZ)({constructOnly:!0})],s.prototype,"layer",void 0),(0,l._)([(0,r.MZ)()],s.prototype,"selectedElement",void 0),(0,l._)([(0,r.MZ)()],s.prototype,"enabled",void 0),(0,l._)([(0,r.MZ)()],s.prototype,"options",void 0),(0,l._)([(0,r.MZ)()],s.prototype,"updating",null),s=(0,l._)([(0,T.$)("esri.views.2d.layers.support.MediaLayerInteraction")],s)}}]);