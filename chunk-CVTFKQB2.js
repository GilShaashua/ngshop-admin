import{a as oe,b as le}from"./chunk-LJKRWKAK.js";import{a as U}from"./chunk-OGGRZLJ2.js";import{a as q,b as Q,c as X,d as Y,e as Z,f as ee,g as te,h as ie,i as ne,j as re}from"./chunk-JNCAMLTT.js";import"./chunk-KHC6GFRK.js";import{a as J,b as K}from"./chunk-EEV7KJKF.js";import"./chunk-5UAAD4RC.js";import{H as W,L as G,Q as H}from"./chunk-ASH25SDF.js";import{Aa as I,Bb as P,Cb as j,Ea as o,Fa as n,Fb as z,Ga as _,Gb as A,Ha as g,Hb as N,Ia as S,Ka as y,La as C,Ma as s,P as M,Qa as T,Va as h,Vb as R,Wa as c,X as f,Xa as u,Y as v,Ya as V,cb as F,db as w,i as E,ja as l,ka as x,mb as b,nb as D,ob as L,qb as B,va as m,xa as d}from"./chunk-B64QGUJS.js";import{a as k,b as $}from"./chunk-6DTZ7UCQ.js";var ae=()=>({fontSize:"14px",paddingInline:"15px",height:"30px"});function se(t,r){if(t&1&&(o(0,"th",13),_(1,"p-sortIcon",14),c(2),n()),t&2){let e=r.$implicit;d("pSortableColumn",e.field),l(),d("field",e.field),l(),V(" ",e.header," ")}}function ce(t,r){if(t&1&&(o(0,"tr"),m(1,se,3,3,"th",12),o(2,"th"),c(3,"Actions"),n()()),t&2){let e=r.$implicit;l(),d("ngForOf",e)}}function de(t,r){if(t&1&&(g(0),c(1),S()),t&2){let e=s().$implicit,i=s().$implicit;l(),u(i[e.field])}}function pe(t,r){if(t&1&&(g(0),c(1),b(2,"currency"),S()),t&2){let e=s().$implicit,i=s().$implicit;l(),u(D(2,1,i[e.field]))}}function me(t,r){if(t&1&&(g(0),c(1),b(2,"date"),S()),t&2){let e=s().$implicit,i=s().$implicit;l(),u(L(2,1,i[e.field],"dd/MM/yyyy"))}}function _e(t,r){if(t&1&&(g(0),_(1,"p-tag",19),S()),t&2){let e=s().$implicit,i=s().$implicit,a=s(3);l(),I(w(5,ae)),d("rounded",!0)("severity",a.orderStatus[i[e.field]].color)("value",a.orderStatus[i[e.field]].label)}}function ue(t,r){if(t&1&&(o(0,"td"),m(1,de,2,1,"ng-container",18)(2,pe,3,3,"ng-container",18)(3,me,3,4,"ng-container",18)(4,_e,2,6,"ng-container",18),n()),t&2){let e=r.$implicit;l(),d("ngIf",e.field==="user"),l(),d("ngIf",e.field==="totalPrice"),l(),d("ngIf",e.field==="dateOrdered"),l(),d("ngIf",e.field==="status")}}function fe(t,r){if(t&1){let e=y();o(0,"tr"),m(1,ue,5,4,"td",15),o(2,"td")(3,"p-button",16),C("click",function(){let a=f(e).$implicit,p=s(3);return v(p.onDeleteOrder(a.id))}),n(),_(4,"p-button",17),n()()}if(t&2){let e=r.$implicit,i=r.columns;l(),d("ngForOf",i),l(3),T("routerLink","/orders/",e.id,"")}}function ve(t,r){if(t&1&&(o(0,"p-table",9),m(1,ce,4,1,"ng-template",10)(2,fe,5,3,"ng-template",11),n()),t&2){let e=s(2);d("columns",e.cols)("value",e.orders)}}function xe(t,r){if(t&1){let e=y();o(0,"li")(1,"div",21)(2,"p-button",16),C("click",function(){let a=f(e).$implicit,p=s(3);return v(p.onDeleteOrder(a.id))}),n(),_(3,"p-button",17),n(),o(4,"div",22)(5,"div",23)(6,"div",24)(7,"span"),c(8,"User"),n(),o(9,"p"),c(10),n()(),o(11,"div",25)(12,"span"),c(13,"Total Price"),n(),o(14,"p"),c(15),b(16,"currency"),n()()(),o(17,"div",26)(18,"div",27)(19,"span"),c(20,"Date Ordered"),n(),o(21,"p"),c(22),b(23,"date"),n()(),o(24,"div",28)(25,"span"),c(26,"Status"),n(),_(27,"p-tag",29),n()()()()}if(t&2){let e=r.$implicit,i=s(3);l(3),T("routerLink","/orders/",e.id,""),l(7),u(e.user),l(5),u(D(16,10,e.totalPrice)),l(7),u(L(23,12,e.dateOrdered,"dd/MM/yyyy")),l(5),I(w(15,ae)),d("rounded",!0)("value",i.orderStatus[e.status].label)("severity",i.orderStatus[e.status].color)}}function ge(t,r){if(t&1&&(o(0,"div",20)(1,"ul"),m(2,xe,28,16,"li",15),n()()),t&2){let e=s(2);l(2),d("ngForOf",e.orders)}}function Se(t,r){t&1&&(o(0,"div",30)(1,"p"),c(2,"There are no orders yet!"),n()())}function Ce(t,r){if(t&1&&(o(0,"section",4)(1,"div",5)(2,"h1"),c(3,"Orders"),n(),o(4,"p"),c(5,"List of all orders"),n()(),m(6,ve,3,2,"p-table",6)(7,ge,3,1,"div",7)(8,Se,3,0,"div",8),n()),t&2){let e=s();l(6),d("ngIf",e.isDesktop),l(),d("ngIf",!e.isDesktop),l(),d("ngIf",!e.orders.length)}}function be(t,r){t&1&&(o(0,"div",31)(1,"p"),_(2,"i",32),n()())}function ye(t,r){if(t&1){let e=y();o(0,"div",33)(1,"div",34),_(2,"i",35),n(),o(3,"span",36),c(4),n(),o(5,"p",37),c(6),n(),o(7,"div",38)(8,"button",39),C("click",function(){f(e),s();let a=h(5);return v(a.accept())}),n(),o(9,"button",40),C("click",function(){f(e),s();let a=h(5);return v(a.reject())}),n()()()}if(t&2){let e=r.$implicit;l(4),u(e.header),l(2),u(e.message)}}var Ae=(()=>{let r=class r{constructor(i,a,p,O){this.messageService=i,this.confirmationService=a,this.ordersService=p,this.viewportSizeService=O,this.cols=[{field:"user",header:"User"},{field:"totalPrice",header:"Total price"},{field:"dateOrdered",header:"Date ordered"},{field:"status",header:"Status"}],this.orderStatus={0:{label:"Pending",color:"contrast"},1:{label:"Processed",color:"warning"},2:{label:"Shipped",color:"info"},3:{label:"Delivered",color:"success"},4:{label:"Failed",color:"danger"}}}ngOnInit(){this._observeViewportSize(),this.getOrders()}_observeViewportSize(){this.viewportSizeService.viewportWidth$.pipe(E(i=>i>=1025)).subscribe(i=>{this.isDesktop=i})}getOrders(){this.ordersService.getOrders().pipe(E(i=>i.map(p=>$(k({},p),{user:p.user.name})))).subscribe({next:i=>{this.orders=i},error:i=>{console.error("Cannot get orders",i)}})}onDeleteOrder(i){this.confirmationService.confirm({header:"Delete Order",message:"Are you sure you want to delete this Order?",accept:()=>{this.ordersService.deleteOrder(i).subscribe({next:a=>{this.orders=this.orders.filter(p=>p.id!==a.id),this.messageService.add({severity:"success",summary:"Success",detail:`The order "${a.id}" is deleted successfully!`})},error:a=>{console.error("Cannot delete order",a)}})},reject:()=>{}})}ngOnDestroy(){}};r.\u0275fac=function(a){return new(a||r)(x(G),x(W),x(U),x(q))},r.\u0275cmp=M({type:r,selectors:[["admin-orders-list"]],standalone:!0,features:[F],decls:7,vars:2,consts:[["loader",""],["cd",""],["class","orders-page",4,"ngIf","ngIfElse"],["pTemplate","headless"],[1,"orders-page"],[1,"name-page"],["class","p-table",3,"columns","value",4,"ngIf"],["class","orders-list-tablet-mobile",4,"ngIf"],["class","no-orders",4,"ngIf"],[1,"p-table",3,"columns","value"],["pTemplate","header"],["pTemplate","body"],[3,"pSortableColumn",4,"ngFor","ngForOf"],[3,"pSortableColumn"],[3,"field"],[4,"ngFor","ngForOf"],["styleClass","p-button-trash","icon","pi pi-trash",3,"click"],["styleClass","p-button-details","icon","pi pi-eye",3,"routerLink"],[4,"ngIf"],[3,"rounded","severity","value"],[1,"orders-list-tablet-mobile"],[1,"header"],[1,"body"],[1,"row-1"],[1,"user"],[1,"total-price"],[1,"row-2"],[1,"date-ordered"],[1,"status"],[3,"rounded","value","severity"],[1,"no-orders"],[1,"loader-container"],[1,"pi","pi-spin","pi-spinner"],[1,"confirm-modal","flex","flex-column","align-items-center","p-5","border-round"],[1,"icon","border-circle","inline-flex","justify-content-center","align-items-center","h-6rem","w-6rem","-mt-8"],[1,"pi","pi-question","text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-4"],[1,"mb-0"],[1,"flex","align-items-center","gap-2","mt-4"],["pButton","","label","Save",1,"w-8rem",3,"click"],["pButton","","label","Cancel",1,"p-button-outlined","w-8rem",3,"click"]],template:function(a,p){if(a&1&&(m(0,Ce,9,3,"section",2)(1,be,3,0,"ng-template",null,0,B),_(3,"p-toast"),o(4,"p-confirmDialog",null,1),m(6,ye,10,2,"ng-template",3),n()),a&2){let O=h(2);d("ngIf",p.orders&&p.isDesktop!==void 0)("ngIfElse",O)}},dependencies:[N,P,j,A,z,Y,Q,X,H,ee,Z,R,re,te,ie,ne,K,J,le,oe]});let t=r;return t})();export{Ae as OrdersListComponent};
