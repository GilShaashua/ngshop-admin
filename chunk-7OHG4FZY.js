import{a as se,p as R}from"./chunk-BZVDLNXJ.js";import{a as te,b as ie}from"./chunk-4VZW4ZX4.js";import{a as H,b as J,c as K,d as Q,e as W,f as X,g as Y,h as Z,i as ee}from"./chunk-K744DSDX.js";import"./chunk-XTHAZUHM.js";import"./chunk-SXDXBO7B.js";import{Ba as v,Ca as r,Da as s,Dc as q,Ea as m,Ia as S,Ib as O,J as T,Ja as x,Ka as l,Kb as V,Lb as j,M as L,Mb as N,Nc as z,O as g,Oa as I,Oc as G,P as C,Pb as B,Ua as b,Va as c,Wa as y,Xa as h,_a as E,ia as a,ib as w,ja as f,jb as D,m as U,mb as k,sb as $,ta as p,tb as M,uc as A,va as _,yb as F,yc as P}from"./chunk-RV5TDKZX.js";import{e as re}from"./chunk-CWTPBX7D.js";var ne=re(se());var oe=(()=>{let t=class t{transform(i){let o=ne.getName(i,"en");return o||null}};t.\u0275fac=function(o){return new(o||t)},t.\u0275pipe=L({name:"country",type:t,pure:!0,standalone:!0});let e=t;return e})();function ae(e,t){if(e&1&&m(0,"p-sortIcon",15),e&2){let n=l().$implicit;_("field",n.field)}}function me(e,t){if(e&1&&(r(0,"th",13),p(1,ae,1,1,"p-sortIcon",14),c(2),s()),e&2){let n=t.$implicit,i=t.index;_("pSortableColumn",n.field)("pSortableColumnDisabled",i!==0),a(),_("ngIf",n.field==="name"),a(),h(" ",n.header," ")}}function ce(e,t){if(e&1&&(r(0,"tr"),p(1,me,3,4,"th",12),r(2,"th"),c(3,"Actions"),s()()),e&2){let n=t.$implicit;a(),_("ngForOf",n)}}function pe(e,t){e&1&&m(0,"p-tag",19)}function _e(e,t){e&1&&m(0,"p-tag",20)}function ue(e,t){if(e&1&&p(0,pe,1,0,"p-tag",19)(1,_e,1,0),e&2){let n=l().$implicit,i=l().$implicit;v(0,i[n.field]?0:1)}}function de(e,t){if(e&1&&(c(0),w(1,"country")),e&2){let n=l().$implicit,i=l().$implicit;h(" ",D(1,1,i[n.field])," ")}}function fe(e,t){if(e&1&&c(0),e&2){let n=l().$implicit,i=l().$implicit;h(" ",i[n.field]," ")}}function ge(e,t){if(e&1&&(r(0,"td"),p(1,ue,2,1)(2,de,2,3)(3,fe,1,1),s()),e&2){let n=t.$implicit;a(),v(1,n.field==="isAdmin"?1:n.field==="country"?2:3)}}function Ce(e,t){if(e&1){let n=S();r(0,"tr"),p(1,ge,4,1,"td",16),r(2,"td")(3,"p-button",17),x("click",function(){let u=g(n).$implicit,d=l(2);return C(d.onDeleteUser(u.id))}),s(),m(4,"p-button",18),s()()}if(e&2){let n=t.$implicit,i=t.columns;a(),_("ngForOf",i),a(3),I("routerLink","/users/form/",n.id,"")}}function xe(e,t){if(e&1&&(r(0,"section",4)(1,"div",5)(2,"h1"),c(3,"Users"),s(),r(4,"p"),c(5,"List of all users"),s()(),r(6,"div",6)(7,"button",7),m(8,"i",8),r(9,"span"),c(10,"New"),s()()(),r(11,"p-table",9),p(12,ce,4,1,"ng-template",10)(13,Ce,5,2,"ng-template",11),s()()),e&2){let n=l();a(11),_("columns",n.cols)("value",n.users)}}function be(e,t){e&1&&(r(0,"div",21)(1,"p"),m(2,"i",22),s()())}function he(e,t){if(e&1){let n=S();r(0,"div",23)(1,"div",24),m(2,"i",25),s(),r(3,"span",26),c(4),s(),r(5,"p",27),c(6),s(),r(7,"div",28)(8,"button",29),x("click",function(){g(n),l();let o=b(5);return C(o.accept())}),s(),r(9,"button",30),x("click",function(){g(n),l();let o=b(5);return C(o.reject())}),s()()()}if(e&2){let n=t.$implicit;a(4),y(n.header),a(2),y(n.message)}}var Ae=(()=>{let t=class t{constructor(i,o,u,d){this.usersService=i,this.confirmationService=o,this.messageService=u,this.router=d,this.cols=[{field:"name",header:"Name"},{field:"email",header:"Email"},{field:"isAdmin",header:"Admin"},{field:"country",header:"Country"}]}ngOnInit(){this.getUsers(),this.listenUrlChanges()}getUsers(){this.usersService.getUsers().subscribe({next:i=>{this.users=i},error:i=>{console.error("Cannot get users",i)}})}onDeleteUser(i){console.log("userId",i),this.confirmationService.confirm({header:"Delete User",message:"Are you sure you want to delete this User?",accept:()=>{this.usersService.deleteUser(i).subscribe({next:o=>{this.users=this.users.filter(u=>u.id!==o.id),this.messageService.add({severity:"success",summary:"Success",detail:`The user "${o.name}" is deleted successfully!`})},error:o=>{console.error("Cannot delete user",o)}})},reject:()=>{}})}listenUrlChanges(){this.urlChangesSubscription=this.router.events.pipe(U(i=>i instanceof O)).subscribe({next:()=>{this.getUsers()},error:i=>{console.error("Cannot get url changes!",i)}})}ngOnDestroy(){this.urlChangesSubscription?.unsubscribe()}};t.\u0275fac=function(o){return new(o||t)(f(R),f(A),f(P),f(j))},t.\u0275cmp=T({type:t,selectors:[["admin-users-list"]],standalone:!0,features:[E],decls:8,vars:2,consts:[["class","users-page",4,"ngIf","ngIfElse"],["loader",""],["cd",""],["pTemplate","headless"],[1,"users-page"],[1,"name-page"],[1,"btn-container"],["routerLink","/users/form",1,"btn-create-edit-user"],[1,"pi","pi-plus"],[1,"p-table",3,"columns","value"],["pTemplate","header"],["pTemplate","body"],[3,"pSortableColumn","pSortableColumnDisabled",4,"ngFor","ngForOf"],[3,"pSortableColumn","pSortableColumnDisabled"],[3,"field",4,"ngIf"],[3,"field"],[4,"ngFor","ngForOf"],["styleClass","p-button-trash","icon","pi pi-trash",3,"click"],["styleClass","p-button-pencil","icon","pi pi-pencil",3,"routerLink"],["styleClass","p-mr-2","icon","pi pi-check","severity","success"],["styleClass","p-mr-2","icon","pi pi-times","severity","danger"],[1,"loader-container"],[1,"pi","pi-spin","pi-spinner"],[1,"confirm-modal","flex","flex-column","align-items-center","p-5","border-round"],[1,"icon","border-circle","inline-flex","justify-content-center","align-items-center","h-6rem","w-6rem","-mt-8"],[1,"pi","pi-question","text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-4"],[1,"mb-0"],[1,"flex","align-items-center","gap-2","mt-4"],["pButton","","label","Save",1,"w-8rem",3,"click"],["pButton","","label","Cancel",1,"p-button-outlined","w-8rem",3,"click"]],template:function(o,u){if(o&1&&(p(0,xe,14,2,"section",0)(1,be,3,0,"ng-template",null,1,k),m(3,"p-toast"),r(4,"p-confirmDialog",null,2),p(6,he,10,2,"ng-template",3),s(),m(7,"router-outlet")),o&2){let d=b(2);_("ngIf",u.users)("ngIfElse",d)}},dependencies:[F,$,M,N,B,V,G,z,q,K,H,J,ee,X,Y,Z,W,Q,ie,te,oe]});let e=t;return e})();export{Ae as UsersListComponent};
