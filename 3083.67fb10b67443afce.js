"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[3083],{43083:(b,i,o)=>{o.r(i),o.d(i,{executeAttachmentQuery:()=>A,fetchAttachments:()=>E,processAttachmentQueryResult:()=>y});var h=o(10467),m=o(77469),d=o(89563),p=o(45272),I=o(1832),f=o(70994);function j(s){const t=s.toJSON();return t.attachmentTypes&&(t.attachmentTypes=t.attachmentTypes.join(",")),t.keywords&&(t.keywords=t.keywords.join(",")),t.globalIds&&(t.globalIds=t.globalIds.join(",")),t.objectIds&&(t.objectIds=t.objectIds.join(",")),t.size&&(t.size=t.size.join(",")),t.orderByFields&&(t.orderByFields=t.orderByFields.join(",")),t}function y(s,t){const e={};for(const a of t){const{parentObjectId:n,parentGlobalId:r,attachmentInfos:l}=a;for(const _ of l){const{id:O}=_,P=(0,p.yM)((0,m.Y3)(`${s.path}/${n}/attachments/${O}`)),u=f.A.fromJSON(_);u.set({url:P,parentObjectId:n,parentGlobalId:r}),e[n]?e[n].push(u):e[n]=[u]}}return e}function A(s,t,e){let a={query:(0,I.z)({...s.query,f:"json",...j(t)})};return e&&(a={...e,...a,query:{...e.query,...a.query}}),(0,d.A)(s.path+"/queryAttachments",a).then(n=>n.data.attachmentGroups)}function E(s,t,e){return c.apply(this,arguments)}function c(){return(c=(0,h.A)(function*(s,t,e){const{objectIds:a}=t,n=[];for(const r of a)n.push((0,d.A)(s.path+"/"+r+"/attachments",e));return Promise.all(n).then(r=>a.map((l,_)=>({parentObjectId:l,attachmentInfos:r[_].data.attachmentInfos})))})).apply(this,arguments)}}}]);