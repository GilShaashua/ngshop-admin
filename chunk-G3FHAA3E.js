import{a as U}from"./chunk-VN3CMVUA.js";import{a as q,b as K,c as Q,d as X,e as Y,f as Z,g as ee,h as te,i as ie,j as ne}from"./chunk-HVJQZFG7.js";import"./chunk-5L25SNYF.js";import{a as H,b as J}from"./chunk-4PAJVUNI.js";import{I as P,M as W,R as G}from"./chunk-PGUS56OB.js";import{$a as F,Ca as S,Eb as M,Fb as O,Gb as j,Ha as r,Ia as o,Ja as m,Ka as D,Kb as B,La as T,Na as b,Oa as C,P as E,Pa as s,Ta as y,Ub as z,Wb as N,X as f,Xb as L,Y as u,Ya as x,Yb as A,Za as p,_a as v,fb as $,hb as I,i as k,ja as l,ka as g,p as w,tb as V,va as _,wb as R,xa as c}from"./chunk-CW4CGSOG.js";import"./chunk-6DTZ7UCQ.js";var ae=e=>({backgroundColor:e,width:"2em",height:"2em",borderRadius:"50%"}),le=e=>({backgroundColor:e});function ce(e,n){if(e&1&&m(0,"p-sortIcon",17),e&2){let t=s().$implicit;c("field",t.field)}}function se(e,n){if(e&1&&(r(0,"th",15),_(1,ce,1,1,"p-sortIcon",16),p(2),o()),e&2){let t=n.$implicit,i=n.index;c("pSortableColumn",t.field)("pSortableColumnDisabled",i!==0),l(),c("ngIf",t.field==="name"),l(),F(" ",t.header," ")}}function me(e,n){if(e&1&&(r(0,"tr"),_(1,se,3,4,"th",14),r(2,"th"),p(3,"Actions"),o()()),e&2){let t=n.$implicit;l(),c("ngForOf",t)}}function pe(e,n){if(e&1&&m(0,"i",24),e&2){let t=s().$implicit,i=s().$implicit;S("pi pi-",i[t.field],"")}}function _e(e,n){if(e&1&&m(0,"div",25),e&2){let t=s().$implicit,i=s().$implicit;c("ngStyle",I(1,ae,i[t.field]))}}function de(e,n){if(e&1&&(D(0),p(1),T()),e&2){let t=s().$implicit,i=s().$implicit;l(),v(i[t.field])}}function ge(e,n){if(e&1&&(r(0,"td"),_(1,pe,1,3,"i",21)(2,_e,1,3,"div",22)(3,de,2,1,"ng-container",23),o()),e&2){let t=n.$implicit;l(),c("ngIf",t.field==="icon"),l(),c("ngIf",t.field==="color"),l(),c("ngIf",t.field==="name")}}function fe(e,n){if(e&1){let t=b();r(0,"tr"),_(1,ge,4,3,"td",18),r(2,"td")(3,"p-button",19),C("click",function(){let a=f(t).$implicit,d=s(3);return u(d.onDeleteCategory(a._id))}),o(),m(4,"p-button",20),o()()}if(e&2){let t=n.$implicit,i=n.columns;l(),c("ngForOf",i),l(3),y("routerLink","/categories/form/",t._id,"")}}function ue(e,n){if(e&1&&(r(0,"p-table",11),_(1,me,4,1,"ng-template",12)(2,fe,5,3,"ng-template",13),o()),e&2){let t=s(2);c("columns",t.cols)("value",t.categories)}}function Ce(e,n){if(e&1){let t=b();r(0,"li")(1,"div",28)(2,"div",29)(3,"p-button",19),C("click",function(){let a=f(t).$implicit,d=s(3);return u(d.onDeleteCategory(a.id))}),o(),m(4,"p-button",20),o()(),r(5,"div",30)(6,"div",31)(7,"span"),p(8,"Icon"),o(),m(9,"i",24),o(),r(10,"div",32)(11,"span"),p(12,"Name"),o(),r(13,"p"),p(14),o()(),r(15,"div",33)(16,"span"),p(17,"Color"),o(),m(18,"div",25),o()()()}if(e&2){let t=n.$implicit;l(4),y("routerLink","/categories/form/",t.id,""),l(5),S("pi pi-",t.icon,""),l(5),v(t.name),l(4),c("ngStyle",I(7,le,t.color))}}function ve(e,n){if(e&1&&(r(0,"div",26)(1,"ul"),_(2,Ce,19,9,"li",27),o()()),e&2){let t=s(2);l(2),c("ngForOf",t.categories)("ngForTrackBy",t.trackByCategoryId)}}function be(e,n){if(e&1&&(r(0,"section",4)(1,"div",5)(2,"h1"),p(3,"Categories"),o(),r(4,"p"),p(5,"List of all categories"),o()(),r(6,"div",6)(7,"button",7),m(8,"i",8),r(9,"span"),p(10,"New"),o()()(),_(11,ue,3,2,"p-table",9)(12,ve,3,2,"div",10),o()),e&2){let t=s();l(11),c("ngIf",t.isDesktop),l(),c("ngIf",!t.isDesktop)}}function xe(e,n){e&1&&(r(0,"div",34)(1,"p"),m(2,"i",35),o()())}function he(e,n){if(e&1){let t=b();r(0,"div",36)(1,"div",37),m(2,"i",38),o(),r(3,"span",39),p(4),o(),r(5,"p",40),p(6),o(),r(7,"div",41)(8,"button",42),C("click",function(){f(t),s();let a=x(5);return u(a.accept())}),o(),r(9,"button",43),C("click",function(){f(t),s();let a=x(5);return u(a.reject())}),o()()()}if(e&2){let t=n.$implicit;l(4),v(t.header),l(2),v(t.message)}}var Ne=(()=>{let n=class n{constructor(i,a,d,h,oe,re){this.categoriesService=i,this.router=a,this.messageService=d,this.confirmationService=h,this.viewportSizeService=oe,this.changeDetectorRef=re,this.cols=[{field:"name",header:"Name"},{field:"icon",header:"Icon"},{field:"color",header:"Color"}]}ngOnInit(){this._observeViewportSize(),this.getCategories(),this.listenUrlChanges()}_observeViewportSize(){this.viewportSizeService.viewportWidth$.pipe(k(i=>i>=1025)).subscribe({next:i=>{this.isDesktop=i,this.changeDetectorRef.markForCheck()}})}getCategories(){this.categoriesService.getCategories().subscribe({next:i=>{this.categories=i,this.changeDetectorRef.markForCheck()},error:i=>{console.error("Cannot get categories",i)}})}onDeleteCategory(i){this.confirmationService.confirm({header:"Delete Category",message:"Are you sure you want to delete this Category?",accept:()=>{this.categoriesService.deleteCategory(i).subscribe({next:a=>{this.categories=this.categories.filter(d=>d.id!==a.id),this.messageService.add({severity:"success",summary:"Success",detail:`The category "${a.name}" is deleted successfully!`}),this.changeDetectorRef.markForCheck()},error:a=>{console.error("Cannot delete category",a)}})},reject:()=>{}})}listenUrlChanges(){this.urlChangesSubscription=this.router.events.pipe(w(i=>i instanceof z)).subscribe({next:()=>{this.getCategories()},error:i=>{console.error("Cannot get url changes!",i)}})}trackByCategoryId(i,a){return a.id}ngOnDestroy(){this.urlChangesSubscription?.unsubscribe()}};n.\u0275fac=function(a){return new(a||n)(g(U),g(L),g(W),g(P),g(q),g(R))},n.\u0275cmp=E({type:n,selectors:[["admin-categories"]],standalone:!0,features:[$],decls:8,vars:2,consts:[["loader",""],["cd",""],["class","categories-page",4,"ngIf","ngIfElse"],["pTemplate","headless"],[1,"categories-page"],[1,"name-page"],[1,"btn-container"],["routerLink","/categories/form",1,"btn-create-edit-category"],[1,"pi","pi-plus"],["class","p-table",3,"columns","value",4,"ngIf"],["class","categories-list-tablet-mobile",4,"ngIf"],[1,"p-table",3,"columns","value"],["pTemplate","header"],["pTemplate","body"],[3,"pSortableColumn","pSortableColumnDisabled",4,"ngFor","ngForOf"],[3,"pSortableColumn","pSortableColumnDisabled"],[3,"field",4,"ngIf"],[3,"field"],[4,"ngFor","ngForOf"],["styleClass","p-button-trash","icon","pi pi-trash",3,"click"],["styleClass","p-button-pencil","icon","pi pi-pencil",3,"routerLink"],["style","font-size: 1.5em",3,"class",4,"ngIf"],["class","color-preview",3,"ngStyle",4,"ngIf"],[4,"ngIf"],[2,"font-size","1.5em"],[1,"color-preview",3,"ngStyle"],[1,"categories-list-tablet-mobile"],[4,"ngFor","ngForOf","ngForTrackBy"],[1,"header"],[1,"actions"],[1,"inner-container"],[1,"icon"],[1,"name"],[1,"color"],[1,"loader-container"],[1,"pi","pi-spin","pi-spinner"],[1,"confirm-modal","flex","flex-column","align-items-center","p-5","border-round"],[1,"icon","border-circle","inline-flex","justify-content-center","align-items-center","h-6rem","w-6rem","-mt-8"],[1,"pi","pi-question","text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-4"],[1,"mb-0"],[1,"flex","align-items-center","gap-2","mt-4"],["pButton","","label","Save",1,"w-8rem",3,"click"],["pButton","","label","Cancel",1,"p-button-outlined","w-8rem",3,"click"]],template:function(a,d){if(a&1&&(_(0,be,13,2,"section",2)(1,xe,3,0,"ng-template",null,0,V),m(3,"p-toast"),r(4,"p-confirmDialog",null,1),_(6,he,10,2,"ng-template",3),o(),m(7,"router-outlet")),a&2){let h=x(2);c("ngIf",d.categories)("ngIfElse",h)}},dependencies:[B,M,O,j,ne,ee,G,te,ie,A,N,X,K,Q,J,H,Z,Y],changeDetection:0});let e=n;return e})();export{Ne as CategoriesComponent};
