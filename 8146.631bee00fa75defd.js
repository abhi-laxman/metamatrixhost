"use strict";(self.webpackChunkAngularClient=self.webpackChunkAngularClient||[]).push([[8146,1469],{1469:(m,n,t)=>{t.d(n,{G:()=>o,S:()=>i});class o{*[Symbol.iterator](){let e=this.next();for(;e;)yield e,e=this.next()}}class i extends o{constructor(e){super(),this.m_iGeom=-1,this.m_aGeoms=e?e.slice():[]}next(){if(this.m_iGeom<this.m_aGeoms.length-1){const e=this.m_aGeoms[++this.m_iGeom];return this.m_aGeoms[this.m_iGeom]=null,e}return null}tock(){return!1}getGeometryID(){return this.m_iGeom}getRank(){return 1}}},78422:(m,n,t)=>{t.r(n),t.d(n,{execute:()=>i});var o=t(82663),_=t(27312);function i(s,e={}){const{unit:r}=e;let l=(0,_.fromGeometryToGXGeometry)(s).calculateLength2D();const u=(0,_.getSpatialReference)(s);return l&&r&&u&&(l=(0,o.PQ)(l,u,r)),l}}}]);