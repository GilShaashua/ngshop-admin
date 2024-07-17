import{a as T}from"./chunk-ZHE4O2IY.js";import{c as J}from"./chunk-GRDIOF3G.js";import"./chunk-MAVNWS4Y.js";import{e as V,fa as F,ga as A,h as j,n as k}from"./chunk-COXHLCCB.js";import"./chunk-OVKFVBDW.js";import{$a as C,Fb as I,Ha as a,Ia as s,Ja as l,Kb as D,Na as _,Oa as S,P as y,Pa as m,X as g,Y as f,Ya as v,Yb as Y,Za as u,ac as N,bb as w,cb as x,db as M,fb as B,i as h,ja as c,ka as b,tb as E,va as O,xa as p}from"./chunk-5BBGCJT5.js";import"./chunk-6DTZ7UCQ.js";function L(o,n){if(o&1){let i=_();a(0,"section",2)(1,"div",3)(2,"div",4)(3,"h2"),u(4,"Orders Statistics"),s(),a(5,"button",5),l(6,"i",6),s()(),a(7,"p-dropdown",7),M("ngModelChange",function(e){g(i);let r=m();return x(r.filterBy.dateOrdered,e)||(r.filterBy.dateOrdered=e),f(e)}),S("onChange",function(){g(i);let e=m();return f(e.getOrderStatistics())}),s()(),a(8,"div",8)(9,"div",9)(10,"p"),u(11),s()(),l(12,"canvas",10),s()()}if(o&2){let i=m();c(7),p("options",i.years),w("ngModel",i.filterBy.dateOrdered),c(4),C("Amount of orders: ",i.amountOrdersPerYear,""),c(),p("data",i.chart.data)("type",i.chart.type)("options",i.chart.options)}}function P(o,n){o&1&&(a(0,"section",11)(1,"div",12)(2,"p"),l(3,"i",13),s()()())}var ee=(()=>{let n=class n{constructor(t){this.ordersService=t,this.monthMap={1:"January",2:"February",3:"March",4:"April",5:"May",6:"June",7:"July",8:"August",9:"September",10:"October",11:"November",12:"December"},this.filterBy={dateOrdered:""}}ngOnInit(){this._getOrdersYears()}_getOrdersYears(){this.ordersService.getOrdersYears().subscribe(({years:t})=>{this.years=t,this.filterBy.dateOrdered=this.years[0],this.getOrderStatistics()})}getOrderStatistics(){this.ordersService.getOrderStatistics(this.filterBy).pipe(h(({ordersMap:t})=>{let e={};for(let r in t){let d=this.monthMap[r];e[d]=t[r]}return{ordersMap:e}})).subscribe({next:({ordersMap:t})=>{let e={type:"doughnut",data:{labels:Object.keys(t),datasets:[{label:"Orders",data:Object.values(t),backgroundColor:["rgb(255, 99, 132)","rgb(54, 162, 235)","rgb(255, 205, 86)","rgb(75, 192, 192)","rgb(153, 102, 255)","rgb(255, 159, 64)","rgb(25, 25, 112)","rgb(0, 128, 128)","rgb(255, 69, 0)","rgb(255, 215, 0)","rgb(0, 128, 0)","rgb(128, 0, 128)"]}]},options:{plugins:{legend:{labels:{color:"white",font:{size:16}}}}}};this.amountOrdersPerYear=Object.values(t).reduce((r,d)=>r+d,0),this.chart=e}})}};n.\u0275fac=function(e){return new(e||n)(b(T))},n.\u0275cmp=y({type:n,selectors:[["admin-order-statistics"]],standalone:!0,features:[B],decls:3,vars:2,consts:[["loader",""],["class","order-statistics-page",4,"ngIf","ngIfElse"],[1,"order-statistics-page"],[1,"header"],[1,"inner-container"],["routerLink","/",1,"btn-close"],[1,"pi","pi-times"],["placeholder","Select a Year",3,"ngModelChange","onChange","options","ngModel"],[1,"body"],[1,"amount-orders-year"],["baseChart","",3,"data","type","options"],[1,"loader-container-statistics"],[1,"loader"],[1,"pi","pi-spin","pi-spinner"]],template:function(e,r){if(e&1&&O(0,L,13,6,"section",1)(1,P,4,0,"ng-template",null,0,E),e&2){let d=v(2);p("ngIf",r.chart&&r.years&&r.filterBy.dateOrdered)("ngIfElse",d)}},dependencies:[D,I,J,N,Y,A,F,k,V,j]});let o=n;return o})();export{ee as OrderStatisticsComponent};
