import{c as P}from"./chunk-VR22NGQE.js";import"./chunk-MAVNWS4Y.js";import{a as x}from"./chunk-D2YCWBPB.js";import{Fb as S,Ha as n,Ia as r,Ja as s,Kb as b,P as p,Pa as u,Ya as f,Yb as y,Za as g,ac as C,fb as h,ja as l,ka as d,tb as v,va as m,xa as c}from"./chunk-DHB3CJQD.js";import"./chunk-6DTZ7UCQ.js";function I(e,i){if(e&1&&(n(0,"section",2)(1,"div",3)(2,"h2"),g(3,"Products Statistics"),r(),n(4,"button",4),s(5,"i",5),r()(),n(6,"div",6),s(7,"canvas",7),r()()),e&2){let a=u();l(7),c("data",a.chart.data)("type",a.chart.type)("options",a.chart.options)}}function j(e,i){e&1&&(n(0,"section",8)(1,"div",9)(2,"p"),s(3,"i",10),r()()())}var L=(()=>{let i=class i{constructor(o){this.productsService=o}ngOnInit(){this._getProductStatistics()}_getProductStatistics(){this.productsService.getProductStatistics().subscribe({next:o=>{this.chart={type:"doughnut",data:{labels:Object.keys(o).map(t=>t.charAt(0).toUpperCase()+t.slice(1)),datasets:[{label:"Products",data:Object.values(o).map(t=>t.count),backgroundColor:Object.values(o).map(t=>t.categoryColor)}]},options:{plugins:{legend:{labels:{color:"white",font:{size:16}}}}}}}})}};i.\u0275fac=function(t){return new(t||i)(d(x))},i.\u0275cmp=p({type:i,selectors:[["admin-product-statistics"]],standalone:!0,features:[h],decls:3,vars:2,consts:[["loader",""],["class","product-statistics",4,"ngIf","ngIfElse"],[1,"product-statistics"],[1,"header"],["routerLink","/",1,"btn-close"],[1,"pi","pi-times"],[1,"body"],["baseChart","",3,"data","type","options"],[1,"loader-container-statistics"],[1,"loader"],[1,"pi","pi-spin","pi-spinner"]],template:function(t,_){if(t&1&&m(0,I,8,3,"section",1)(1,j,4,0,"ng-template",null,0,v),t&2){let E=f(2);c("ngIf",_.chart)("ngIfElse",E)}},dependencies:[b,S,C,y,P]});let e=i;return e})();export{L as ProductStatisticsComponent};
