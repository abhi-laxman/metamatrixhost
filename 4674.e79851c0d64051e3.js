"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[4674],{11264:(H,S,c)=>{c.d(S,{C:()=>y});var s=c(33568);class y extends s.E{_afterNew(){super._afterNewApplyThemes(),this._dirty.colors=!1}_beforeChanged(){this.isDirty("colors")&&this.reset()}generateColors(){this.setPrivate("currentPass",this.getPrivate("currentPass",0)+1);const h=this.getPrivate("currentPass"),u=this.get("colors",[this.get("baseColor",s.C.fromHex(16711680))]);this.getPrivate("numColors")||this.setPrivate("numColors",u.length);const f=this.getPrivate("numColors"),x=this.get("passOptions"),L=this.get("reuse");for(let p=0;p<f;p++)if(L)u.push(u[p]);else{const t=u[p].toHSL();let i=t.h+(x.hue||0)*h;for(;i>1;)i-=1;let a=t.s+(x.saturation||0)*h;a>1&&(a=1),a<0&&(a=0);let n=t.l+(x.lightness||0)*h;for(;n>1;)n-=1;u.push(s.C.fromHSL(i,a,n))}}getIndex(h){const u=this.get("colors",[]),f=this.get("saturation");return h>=u.length?(this.generateColors(),this.getIndex(h)):null!=f?s.C.saturate(u[h],f):u[h]}next(){let h=this.getPrivate("currentStep",this.get("startIndex",0));return this.setPrivate("currentStep",h+this.get("step",1)),this.getIndex(h)}reset(){this.setPrivate("currentStep",this.get("startIndex",0)),this.setPrivate("currentPass",0)}}Object.defineProperty(y,"className",{enumerable:!0,configurable:!0,writable:!0,value:"ColorSet"}),Object.defineProperty(y,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.E.classNames.concat([y.className])})},14674:(H,S,c)=>{c.r(S),c.d(S,{AnimatedThemeAm5:()=>x,ColorSetAm5:()=>f.C,DarkThemeAm5:()=>y,ResponsiveThemeAm5:()=>e,ScrollbarAm5:()=>w,ThemeAm5:()=>s.T,TooltipAm5:()=>u.T,colorAm5:()=>s.d,esriChartColorSet:()=>L});var s=c(33568);class y extends s.T{setupDefaultRules(){super.setupDefaultRules(),this.rule("InterfaceColors").setAll({stroke:s.C.fromHex(0),fill:s.C.fromHex(2829099),primaryButton:s.C.lighten(s.C.fromHex(6788316),-.2),primaryButtonHover:s.C.lighten(s.C.fromHex(6779356),-.2),primaryButtonDown:s.C.lighten(s.C.fromHex(6872181),-.2),primaryButtonActive:s.C.lighten(s.C.fromHex(6872182),-.2),primaryButtonText:s.C.fromHex(16777215),primaryButtonStroke:s.C.lighten(s.C.fromHex(6788316),-.2),secondaryButton:s.C.fromHex(3881787),secondaryButtonHover:s.C.lighten(s.C.fromHex(3881787),.1),secondaryButtonDown:s.C.lighten(s.C.fromHex(3881787),.15),secondaryButtonActive:s.C.lighten(s.C.fromHex(3881787),.2),secondaryButtonText:s.C.fromHex(12303291),secondaryButtonStroke:s.C.lighten(s.C.fromHex(3881787),-.2),grid:s.C.fromHex(12303291),background:s.C.fromHex(0),alternativeBackground:s.C.fromHex(16777215),text:s.C.fromHex(16777215),alternativeText:s.C.fromHex(0),disabled:s.C.fromHex(11382189),positive:s.C.fromHex(5288704),negative:s.C.fromHex(11730944)})}}class e extends s.T{constructor(t,i){super(t,i),Object.defineProperty(this,"_dp",{enumerable:!0,configurable:!0,writable:!0,value:void 0}),Object.defineProperty(this,"responsiveRules",{enumerable:!0,configurable:!0,writable:!0,value:[]}),this._dp=new s.M([this._root._rootContainer.onPrivate("width",a=>{this._isUsed()&&this._maybeApplyRules()}),this._root._rootContainer.onPrivate("height",a=>{this._isUsed()&&this._maybeApplyRules()})])}static widthXXS(t,i){return t<=e.XXS}static widthXS(t,i){return t<=e.XS}static widthS(t,i){return t<=e.S}static widthM(t,i){return t<=e.M}static widthL(t,i){return t<=e.L}static widthXL(t,i){return t<=e.XL}static widthXXL(t,i){return t<=e.XXL}static heightXXS(t,i){return i<=e.XXS}static heightXS(t,i){return i<=e.XS}static heightS(t,i){return i<=e.S}static heightM(t,i){return i<=e.M}static heightL(t,i){return i<=e.L}static heightXL(t,i){return i<=e.XL}static heightXXL(t,i){return i<=e.XXL}static isXXS(t,i){return t<=e.XXS&&i<=e.XXS}static isXS(t,i){return t<=e.XS&&i<=e.XS}static isS(t,i){return t<=e.S&&i<=e.S}static isM(t,i){return t<=e.M&&i<=e.M}static isL(t,i){return t<=e.L&&i<=e.L}static isXL(t,i){return t<=e.XL&&i<=e.XL}static isXXL(t,i){return t<=e.XXL&&i<=e.XXL}static maybeXXS(t,i){return t<=e.XXS||i<=e.XXS}static maybeXS(t,i){return t<=e.XS||i<=e.XS}static maybeS(t,i){return t<=e.S||i<=e.S}static maybeM(t,i){return t<=e.M||i<=e.M}static maybeL(t,i){return t<=e.L||i<=e.L}static maybeXL(t,i){return t<=e.XL||i<=e.XL}static maybeXXL(t,i){return t<=e.XXL||i<=e.XXL}static newEmpty(t){return new this(t,!0)}addRule(t){return t.name&&!t.template&&(t.template=this.rule(t.name,t.tags)),this.responsiveRules.push(t),this._maybeApplyRule(t),t}removeRule(t){(0,s.r)(this.responsiveRules,t)}dispose(){this._dp&&this._dp.dispose()}_isUsed(){return-1!==this._root._rootContainer.get("themes").indexOf(this)}_maybeApplyRules(){(0,s.i)(this.responsiveRules,t=>{this._maybeUnapplyRule(t)}),(0,s.i)(this.responsiveRules,t=>{this._maybeApplyRule(t)})}_maybeApplyRule(t){if(t.applied)return;const i=this._root._rootContainer.getPrivate("width"),a=this._root._rootContainer.getPrivate("height");t.relevant.call(t,i,a)&&(t.applied=!0,t.template&&t.settings&&t.template.setAll(t.settings),t.applying&&t.applying.call(t))}_maybeUnapplyRule(t){if(!t.applied)return;const i=this._root._rootContainer.getPrivate("width"),a=this._root._rootContainer.getPrivate("height");t.relevant.call(t,i,a)||(t.applied=!1,t.template&&t.template.removeAll(),t.removing&&t.removing.call(t))}setupDefaultRules(){super.setupDefaultRules();const t=i=>this.addRule(i);t({name:"Chart",relevant:e.widthXXS,settings:{paddingLeft:0,paddingRight:0}}),t({name:"Chart",relevant:e.heightXXS,settings:{paddingTop:0,paddingBottom:0}}),t({name:"Bullet",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"Legend",relevant:e.isXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["vertical"],relevant:e.widthXS,settings:{forceHidden:!0}}),t({name:"HeatLegend",tags:["horizontal"],relevant:e.heightXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","start"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Label",tags:["heatlegend","end"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Button",tags:["resize"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisRendererX",relevant:e.heightXS,settings:{inside:!0}}),t({name:"AxisRendererY",relevant:e.widthXS,settings:{inside:!0}}),t({name:"AxisRendererXLabel",relevant:e.heightXS,settings:{minPosition:.1,maxPosition:.9}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXS,settings:{centerY:s.a,maxPosition:.9}}),t({name:"AxisLabel",tags:["x"],relevant:e.heightXXS,settings:{forceHidden:!0}}),t({name:"AxisLabel",tags:["x","minor"],relevant:e.widthXXL,settings:{forceHidden:!0}}),t({name:"AxisLabel",tags:["y"],relevant:e.widthXXS,settings:{forceHidden:!0}}),t({name:"AxisLabel",tags:["y","minor"],relevant:e.heightXXL,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["x"],relevant:e.heightXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"AxisTick",tags:["y"],relevant:e.widthXXS,settings:{inside:!0,minPosition:.1,maxPosition:.9}}),t({name:"Grid",relevant:e.maybeXXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["radial"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeS,settings:{inside:!0}}),t({name:"AxisTick",relevant:e.maybeS,settings:{inside:!0}}),t({name:"RadialLabel",tags:["circular"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"AxisTick",tags:["circular"],relevant:e.maybeXS,settings:{inside:!0}}),t({name:"PieChart",relevant:e.maybeXS,settings:{radius:(0,s.j)(99)}}),t({name:"PieChart",relevant:e.widthM,settings:{radius:(0,s.j)(99)}}),t({name:"RadialLabel",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"RadialLabel",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.maybeXS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pie"],relevant:e.widthM,settings:{forceHidden:!0}}),t({name:"FunnelSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["funnel","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PyramidSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pyramid","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"PictorialStackedSeries",relevant:e.widthM,settings:{alignLabels:!1}}),t({name:"Label",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","vertical"],relevant:e.widthL,settings:{forceHidden:!0}}),t({name:"Label",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Tick",tags:["pictorial","horizontal"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","horizontal"],relevant:e.widthS,settings:{forceHidden:!0}}),t({name:"Label",tags:["flow","vertical"],relevant:e.heightS,settings:{forceHidden:!0}}),t({name:"Chord",relevant:e.maybeXS,settings:{radius:(0,s.j)(99)}}),t({name:"Label",tags:["hierarchy","node"],relevant:e.maybeXS,settings:{forceHidden:!0}})}}Object.defineProperty(e,"XXS",{enumerable:!0,configurable:!0,writable:!0,value:100}),Object.defineProperty(e,"XS",{enumerable:!0,configurable:!0,writable:!0,value:200}),Object.defineProperty(e,"S",{enumerable:!0,configurable:!0,writable:!0,value:300}),Object.defineProperty(e,"M",{enumerable:!0,configurable:!0,writable:!0,value:400}),Object.defineProperty(e,"L",{enumerable:!0,configurable:!0,writable:!0,value:600}),Object.defineProperty(e,"XL",{enumerable:!0,configurable:!0,writable:!0,value:800}),Object.defineProperty(e,"XXL",{enumerable:!0,configurable:!0,writable:!0,value:1e3});var h=c(58405),u=c(54626),f=c(11264);class w extends s.g{constructor(){super(...arguments),Object.defineProperty(this,"thumb",{enumerable:!0,configurable:!0,writable:!0,value:this._makeThumb()}),Object.defineProperty(this,"startGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"endGrip",{enumerable:!0,configurable:!0,writable:!0,value:this._makeButton()}),Object.defineProperty(this,"_thumbBusy",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_startDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_endDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_thumbDown",{enumerable:!0,configurable:!0,writable:!0,value:!1}),Object.defineProperty(this,"_gripDown",{enumerable:!0,configurable:!0,writable:!0,value:void 0})}_addOrientationClass(){this._settings.themeTags=(0,s.m)(this._settings.themeTags,["scrollbar",this._settings.orientation]),this._settings.background||(this._settings.background=h.R.new(this._root,{themeTags:(0,s.m)(this._settings.themeTags,["main","background"])}))}_makeButton(){return this.children.push(h.B.new(this._root,{themeTags:["resize","button",this.get("orientation")],icon:s.e.new(this._root,{themeTags:["icon"]})}))}_makeThumb(){return this.children.push(h.R.new(this._root,{themeTags:["thumb",this.get("orientation")]}))}_handleAnimation(t){t&&this._disposers.push(t.events.on("stopped",()=>{this.setPrivateRaw("isBusy",!1),this._thumbBusy=!1}))}_afterNew(){this._addOrientationClass(),super._afterNew();const t=this.startGrip,i=this.endGrip,a=this.thumb,n=this.get("background");n&&this._disposers.push(n.events.on("click",r=>{this.setPrivateRaw("isBusy",!0);const l=this._display.toLocal(r.point),o=this.width(),g=this.height(),m=this.get("orientation");let d,b,v;d="vertical"==m?(l.y-a.height()/2)/g:(l.x-a.width()/2)/o,"vertical"==m?(b=d*g,v="y"):(b=d*o,v="x");const X=this.get("animationDuration",0);X>0?(this._thumbBusy=!0,this._handleAnimation(this.thumb.animate({key:v,to:b,duration:X,easing:this.get("animationEasing")}))):(this.thumb.set(v,b),this._root.events.once("frameended",()=>{this.setPrivateRaw("isBusy",!1)}))})),this._disposers.push(a.events.on("dblclick",r=>{if(!(0,s.n)(r.originalEvent,this))return;const l=this.get("animationDuration",0),o=this.get("animationEasing");this.animate({key:"start",to:0,duration:l,easing:o}),this.animate({key:"end",to:1,duration:l,easing:o})})),this._disposers.push(t.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._startDown=!0,this._gripDown="start"})),this._disposers.push(i.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._endDown=!0,this._gripDown="end"})),this._disposers.push(a.events.on("pointerdown",()=>{this.setPrivateRaw("isBusy",!0),this._thumbDown=!0,this._gripDown=void 0})),this._disposers.push(t.events.on("globalpointerup",()=>{this._startDown&&(this.setPrivateRaw("isBusy",!1),this._released()),this._startDown=!1})),this._disposers.push(i.events.on("globalpointerup",()=>{this._endDown&&(this.setPrivateRaw("isBusy",!1),this._released()),this._endDown=!1})),this._disposers.push(a.events.on("globalpointerup",()=>{this._thumbDown&&(this.setPrivateRaw("isBusy",!1),this._released()),this._thumbDown=!1})),this._disposers.push(t.on("x",()=>{this._updateThumb()})),this._disposers.push(i.on("x",()=>{this._updateThumb()})),this._disposers.push(t.on("y",()=>{this._updateThumb()})),this._disposers.push(i.on("y",()=>{this._updateThumb()})),this._disposers.push(a.events.on("positionchanged",()=>{this._updateGripsByThumb()})),"vertical"==this.get("orientation")?(t.set("x",0),i.set("x",0),this._disposers.push(a.adapters.add("y",r=>Math.max(Math.min(Number(r),this.height()-a.height()),0))),this._disposers.push(a.adapters.add("x",r=>this.width()/2)),this._disposers.push(t.adapters.add("x",r=>this.width()/2)),this._disposers.push(i.adapters.add("x",r=>this.width()/2)),this._disposers.push(t.adapters.add("y",r=>Math.max(Math.min(Number(r),this.height()),0))),this._disposers.push(i.adapters.add("y",r=>Math.max(Math.min(Number(r),this.height()),0)))):(t.set("y",0),i.set("y",0),this._disposers.push(a.adapters.add("x",r=>Math.max(Math.min(Number(r),this.width()-a.width()),0))),this._disposers.push(a.adapters.add("y",r=>this.height()/2)),this._disposers.push(t.adapters.add("y",r=>this.height()/2)),this._disposers.push(i.adapters.add("y",r=>this.height()/2)),this._disposers.push(t.adapters.add("x",r=>Math.max(Math.min(Number(r),this.width()),0))),this._disposers.push(i.adapters.add("x",r=>Math.max(Math.min(Number(r),this.width()),0))))}_updateChildren(){super._updateChildren(),(this.isDirty("end")||this.isDirty("start")||this._sizeDirty)&&this.updateGrips()}_changed(){if(super._changed(),this.isDirty("start")||this.isDirty("end")){const t="rangechanged";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this,start:this.get("start",0),end:this.get("end",1),grip:this._gripDown})}}_released(){const t="released";this.events.isEnabled(t)&&this.events.dispatch(t,{type:t,target:this})}updateGrips(){const t=this.startGrip,i=this.endGrip,a=this.get("orientation"),n=this.height(),r=this.width();"vertical"==a?(t.set("y",n*this.get("start",0)),i.set("y",n*this.get("end",1))):(t.set("x",r*this.get("start",0)),i.set("x",r*this.get("end",1)));const l=this.getPrivate("positionTextFunction"),o=Math.round(100*this.get("start",0)),g=Math.round(100*this.get("end",0));let m,d;l?(m=l.call(this,this.get("start",0)),d=l.call(this,this.get("end",0))):(m=o+"%",d=g+"%"),t.set("ariaLabel",this._t("From %1",void 0,m)),t.set("ariaValueNow",""+o),t.set("ariaValueText",o+"%"),t.set("ariaValueMin","0"),t.set("ariaValueMax","100"),i.set("ariaLabel",this._t("To %1",void 0,d)),i.set("ariaValueNow",""+g),i.set("ariaValueText",g+"%"),i.set("ariaValueMin","0"),i.set("ariaValueMax","100")}_updateThumb(){const t=this.thumb,i=this.startGrip,a=this.endGrip,n=this.height(),r=this.width();let l=i.x(),o=a.x(),g=i.y(),m=a.y(),d=0,b=1;"vertical"==this.get("orientation")?(0,s.k)(g)&&(0,s.k)(m)&&(this._thumbBusy||t.isDragging()||(t.set("height",m-g),t.set("y",g)),d=g/n,b=m/n):(0,s.k)(l)&&(0,s.k)(o)&&(this._thumbBusy||t.isDragging()||(t.set("width",o-l),t.set("x",l)),d=l/r,b=o/r),!this.getPrivate("isBusy")||this.get("start")==d&&this.get("end")==b||(this.set("start",d),this.set("end",b));const v=this.getPrivate("positionTextFunction"),X=Math.round(100*this.get("start",0)),T=Math.round(100*this.get("end",0));let C,P;v?(C=v.call(this,this.get("start",0)),P=v.call(this,this.get("end",0))):(C=X+"%",P=T+"%"),t.set("ariaLabel",this._t("From %1 to %2",void 0,C,P)),t.set("ariaValueNow",""+X),t.set("ariaValueText",X+"%")}_updateGripsByThumb(){const t=this.thumb,i=this.startGrip,a=this.endGrip;if("vertical"==this.get("orientation")){const n=t.height();i.set("y",t.y()),a.set("y",t.y()+n)}else{const n=t.width();i.set("x",t.x()),a.set("x",t.x()+n)}}}Object.defineProperty(w,"className",{enumerable:!0,configurable:!0,writable:!0,value:"Scrollbar"}),Object.defineProperty(w,"classNames",{enumerable:!0,configurable:!0,writable:!0,value:s.g.classNames.concat([w.className])});class x extends s.T{setupDefaultRules(){super.setupDefaultRules(),this.rule("Component").setAll({interpolationDuration:600}),this.rule("Hierarchy").set("animationDuration",600),this.rule("Scrollbar").set("animationDuration",600),this.rule("Tooltip").set("animationDuration",300),this.rule("MapChart").set("animationDuration",1e3),this.rule("MapChart").set("wheelDuration",300),this.rule("Entity").setAll({stateAnimationDuration:600}),this.rule("Sprite").states.create("default",{stateAnimationDuration:600}),this.rule("Tooltip",["axis"]).setAll({animationDuration:200}),this.rule("WordCloud").set("animationDuration",500),this.rule("Polygon").set("animationDuration",600),this.rule("ArcDiagram").set("animationDuration",600)}}const L=["#2888B8","#EB7028","#48A375","#9370B1","#e55035","#3d9ccc","#DC7B04","#b87bb0","#3fa681","#EE6386"].map(p=>(0,s.d)(p))}}]);