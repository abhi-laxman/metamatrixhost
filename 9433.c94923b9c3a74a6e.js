"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[9433],{79433:(p,c,o)=>{o.r(c),o.d(c,{MMCoreModule:()=>M});var l=o(60177),h=o(93887),r=o(50303),e=o(30540);const f=["maincoregrpahic1"],m=[{path:"",component:(()=>{class t{ngAfterViewInit(){this.initializeCanvas(),this.startMatrixEffect()}initializeCanvas(){const n=this.canvasRef.nativeElement;this.ctx=n.getContext("2d"),this.w=n.width=document.body.offsetWidth,this.h=n.height=document.body.offsetHeight,this.cols=Math.floor(this.w/20)+1,this.ypos=Array(this.cols).fill(0),this.ctx.fillStyle="transparent",this.ctx.fillRect(0,0,this.w,this.h)}drawMatrixFrame(){this.ctx.fillStyle="#0001",this.ctx.fillRect(0,0,this.w,this.h),this.ctx.fillStyle="#fff2",this.ctx.font="15pt monospace",this.ypos.forEach((n,i)=>{const s=String.fromCharCode(33+94*Math.random());this.ctx.fillText(s,20*i,n),this.ypos[i]=n>100+1e4*Math.random()?0:n+20})}startMatrixEffect(){setInterval(()=>this.drawMatrixFrame(),50)}static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275cmp=e.VBU({type:t,selectors:[["app-mm-core"]],viewQuery:function(i,s){if(1&i&&e.GBs(f,7),2&i){let a;e.mGM(a=e.lsd())&&(s.canvasRef=a.first)}},decls:7,vars:0,consts:[[1,"main-core-view-class"],[1,"main-core-grpahic1"],[1,"main-core-overlay-1-class"],["id","g1"],["maincoregrpahic1",""]],template:function(i,s){1&i&&(e.j41(0,"div",0)(1,"div",1)(2,"div",2)(3,"a"),e.EFF(4,"Welcome to metamatriX!"),e.k0s()(),e.nrm(5,"canvas",3,4),e.k0s()())},styles:["html[_ngcontent-%COMP%], body[_ngcontent-%COMP%]{height:100%;margin:0}.main-core-view-class[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;height:100vh}.main-core-overlay-1-class[_ngcontent-%COMP%]{position:absolute;z-index:1}.main-core-overlay-1-class[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{position:relative;top:50vh;left:50vw;font-size:85px;font-weight:600;font-family:Segoe UI,Tahoma,Geneva,Verdana,sans-serif;color:#fff;text-decoration:none}#main-core-grpahic1[_ngcontent-%COMP%]   #g1[_ngcontent-%COMP%]{overflow:hidden;position:absolute;top:0;left:0;z-index:0}.main-core-grpahic1[_ngcontent-%COMP%]{width:100vw;height:100vh;position:relative}"]})}}return t})()}];let d=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[r.iI.forChild(m),r.iI]})}}return t})(),M=(()=>{class t{static{this.\u0275fac=function(i){return new(i||t)}}static{this.\u0275mod=e.$C({type:t})}static{this.\u0275inj=e.G2t({imports:[l.MD,h.G,d]})}}return t})()}}]);