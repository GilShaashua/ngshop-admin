import{b as x}from"./chunk-BVKJUJ6G.js";import{c as _}from"./chunk-AZYXWJPI.js";import"./chunk-MAVNWS4Y.js";import"./chunk-QZRC2FX4.js";import{Fb as S,Ha as s,Ia as r,Ja as o,Kb as b,P as m,Pa as u,Ya as f,Yb as y,Za as g,ac as C,fb as h,ja as l,ka as p,tb as v,va as d,xa as c}from"./chunk-CW4CGSOG.js";import"./chunk-6DTZ7UCQ.js";function I(t,e){if(t&1&&(s(0,"section",2)(1,"div",3)(2,"h2"),g(3,"Users Statistics"),r(),s(4,"button",4),o(5,"i",5),r()(),s(6,"div",6),o(7,"canvas",7),r()()),t&2){let a=u();l(7),c("data",a.chart.data)("type",a.chart.type)("options",a.chart.options)}}function k(t,e){t&1&&(s(0,"section",8)(1,"div",9)(2,"p"),o(3,"i",10),r()()())}var w=(()=>{let e=class e{constructor(i){this.usersService=i}ngOnInit(){this._getUserStatistics()}_getUserStatistics(){this.usersService.getUserStatistics().subscribe({next:i=>{this.chart={type:"doughnut",data:{labels:Object.keys(i).map(n=>n==="notAdmin"?"Not Admin":"Admin"),datasets:[{label:"Count",data:Object.values(i),backgroundColor:["rgb(255, 205, 86)","rgb(75, 192, 192)"]}]},options:{plugins:{legend:{labels:{color:"white",font:{size:16}}}}}}}})}};e.\u0275fac=function(n){return new(n||e)(p(x))},e.\u0275cmp=m({type:e,selectors:[["admin-user-statistics"]],standalone:!0,features:[h],decls:3,vars:2,consts:[["loader",""],["class","user-statistics",4,"ngIf","ngIfElse"],[1,"user-statistics"],[1,"header"],["routerLink","/",1,"btn-close"],[1,"pi","pi-times"],[1,"body"],["baseChart","",3,"data","type","options"],[1,"loader-container-statistics"],[1,"loader"],[1,"pi","pi-spin","pi-spinner"]],template:function(n,U){if(n&1&&d(0,I,8,3,"section",1)(1,k,4,0,"ng-template",null,0,v),n&2){let E=f(2);c("ngIf",U.chart)("ngIfElse",E)}},dependencies:[b,S,_,C,y]});let t=e;return t})();export{w as UserStatisticsComponent};
