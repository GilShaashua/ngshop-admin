import{a as ne,b as le,c as pe,d as de,e as me,f as _e,g as ue,h as ge,i as fe,j as xe}from"./chunk-N277LYZ7.js";import"./chunk-EON3VZ3P.js";import{a as ae,b as se}from"./chunk-4YE2IULK.js";import{a as ie}from"./chunk-QKVLXTBP.js";import{H as re,L as oe,Q as ce}from"./chunk-BRWCKVVY.js";import"./chunk-4IDIVDUM.js";import{$a as u,Db as A,Ea as k,Eb as q,Fa as w,Fb as H,Ga as E,Ha as o,Ia as n,Ib as W,Ja as m,Jb as G,Ka as O,Kb as J,La as j,Na as h,Oa as v,P as M,Pa as s,Sa as Q,Ta as T,Ub as K,Vb as X,Wb as Y,X as f,Xb as Z,Y as x,Ya as S,Yb as ee,Za as l,_a as C,ac as te,fb as N,gb as L,ha as I,hb as D,i as y,ja as c,ka as g,p as B,pb as b,qb as $,rb as F,tb as z,va as _,wb as U,xa as p}from"./chunk-DHB3CJQD.js";import{a as V,b as R}from"./chunk-6DTZ7UCQ.js";var ve=()=>[],Ce=t=>({active:t});function Pe(t,r){if(t&1&&m(0,"p-sortIcon",17),t&2){let e=s().$implicit;p("field",e.field)}}function ye(t,r){if(t&1&&(o(0,"th",15),_(1,Pe,1,1,"p-sortIcon",16),l(2),n()),t&2){let e=r.$implicit,i=r.index;p("pSortableColumn",e.field)("pSortableColumnDisabled",i===1),c(),p("ngIf",e.field!=="image"),c(),u(" ",e.header," ")}}function Ie(t,r){if(t&1&&(o(0,"tr"),_(1,ye,3,4,"th",14),o(2,"th"),l(3,"Actions"),n()()),t&2){let e=r.$implicit;c(),p("ngForOf",e)}}function ke(t,r){if(t&1&&(O(0),l(1),j()),t&2){let e=s().$implicit,i=s().$implicit;c(),C(i[e.field])}}function we(t,r){if(t&1&&m(0,"img",23),t&2){let e=s().$implicit,i=s().$implicit;p("src",i[e.field],I)}}function Ee(t,r){if(t&1&&(o(0,"span"),l(1),n()),t&2){let e=s().$implicit,i=s().$implicit;c(),u(" ",i[e.field],"")}}function Te(t,r){if(t&1&&(o(0,"span"),l(1),b(2,"date"),n()),t&2){let e=s().$implicit,i=s().$implicit;c(),u(" ",F(2,1,i[e.field],"dd/MM/yyyy"),"")}}function Le(t,r){if(t&1&&(o(0,"span"),l(1),b(2,"currency"),n()),t&2){let e=s().$implicit,i=s().$implicit;c(),C($(2,1,i[e.field]))}}function De(t,r){if(t&1&&(o(0,"span"),l(1),n()),t&2){let e=s().$implicit,i=s().$implicit;c(),C(i[e.field])}}function $e(t,r){if(t&1&&(o(0,"td"),_(1,ke,2,1,"ng-container",21)(2,we,1,1,"img",22)(3,Ee,2,1,"span",21)(4,Te,3,4,"span",21)(5,Le,3,3,"span",21)(6,De,2,1,"span",21),n()),t&2){let e=r.$implicit;c(),p("ngIf",e.field==="name"),c(),p("ngIf",e.field==="image"),c(),p("ngIf",e.field==="category"),c(),p("ngIf",e.field==="dateCreated"),c(),p("ngIf",e.field==="price"),c(),p("ngIf",e.field!=="image"&&e.field!=="name"&&e.field!=="category"&&e.field!=="dateCreated"&&e.field!=="price")}}function Fe(t,r){if(t&1){let e=h();o(0,"tr"),_(1,$e,7,6,"td",18),o(2,"td")(3,"p-button",19),v("click",function(){let a=f(e).$implicit,d=s(3);return x(d.onDeleteProduct(a.id))}),n(),m(4,"p-button",20),n()()}if(t&2){let e=r.$implicit,i=r.columns;c(),p("ngForOf",i),c(3),T("routerLink","/products/form/",e.id,"")}}function ze(t,r){if(t&1&&(o(0,"p-table",11),_(1,Ie,4,1,"ng-template",12)(2,Fe,5,3,"ng-template",13),n()),t&2){let e=s(2);p("paginator",!0)("rows",10)("showCurrentPageReport",!0)("columns",e.cols)("value",e.products)}}function Ve(t,r){if(t&1){let e=h();o(0,"li",28)(1,"button",29),v("click",function(){let a=f(e).$index,d=s(4);return x(d.onClickPage(a))}),l(2),n()()}if(t&2){let e=r.$index,i=s(4);p("ngClass",D(2,Ce,e+1+""===i.currPage)),c(2),u(" ",e+1," ")}}function Re(t,r){if(t&1&&(o(0,"ul",27),w(1,Ve,3,4,"li",28,k),n()),t&2){let e=s(3);c(),E(L(0,ve).constructor(e.pageCount))}}function Be(t,r){if(t&1){let e=h();o(0,"li",32)(1,"div",33)(2,"div",34)(3,"h1"),l(4),n(),m(5,"img",23),n()(),o(6,"div",35)(7,"div",36)(8,"p",37)(9,"span"),l(10,"Price"),n(),l(11),b(12,"currency"),n(),o(13,"p",38)(14,"span"),l(15,"Stock"),n(),l(16),n()(),o(17,"div",39)(18,"p",40)(19,"span"),l(20,"Category"),n(),l(21),n(),o(22,"p",41)(23,"span"),l(24,"Date"),n(),l(25),b(26,"date"),n()(),o(27,"div",42)(28,"button",43),m(29,"i",44),n(),o(30,"button",45),v("click",function(){let a=f(e).$implicit,d=s(4);return x(d.onDeleteProduct(a.id))}),m(31,"i",46),n()()()()}if(t&2){let e=r.$implicit;c(4),C(e.name),c(),Q("src",e.image,I),c(6),u(" ",$(12,8,e.price)," "),c(5),u(" ",e.countInStock," "),c(5),u(" ",e.category," "),c(4),u(" ",F(26,10,e.dateCreated,"dd/MM/yyyy")," "),c(3),T("routerLink","/products/form/",e.id,"")}}function Me(t,r){if(t&1&&(o(0,"ul",30),_(1,Be,32,13,"li",31),n()),t&2){let e=s(3);c(),p("ngForOf",e.products)("ngForTrackBy",e.trackByProductId)}}function Oe(t,r){if(t&1){let e=h();o(0,"li",28)(1,"button",29),v("click",function(){let a=f(e).$index,d=s(4);return d.setQueryParams({currPage:a+1+""}),x(d.isLoading=!0)}),l(2),n()()}if(t&2){let e=r.$index,i=s(4);p("ngClass",D(2,Ce,e+1+""===i.currPage)),c(2),u(" ",e+1," ")}}function je(t,r){if(t&1&&(o(0,"ul",27),w(1,Oe,3,4,"li",28,k),n()),t&2){let e=s(3);c(),E(L(0,ve).constructor(e.pageCount))}}function Qe(t,r){t&1&&(o(0,"div",47)(1,"p"),m(2,"i",48),n()())}function Ne(t,r){if(t&1&&(o(0,"div",24),_(1,Re,3,1,"ul",25)(2,Me,2,2,"ul",26)(3,je,3,1,"ul",25)(4,Qe,3,0,"ng-template",null,0,z),n()),t&2){let e=S(5),i=s(2);c(),p("ngIf",i.pageCount!==void 0),c(),p("ngIf",!i.isLoading)("ngIfElse",e),c(),p("ngIf",i.pageCount!==void 0)}}function Ue(t,r){if(t&1&&(o(0,"section",4)(1,"div",5)(2,"h1"),l(3,"Products"),n(),o(4,"p"),l(5,"List of all products"),n()(),o(6,"div",6)(7,"button",7),m(8,"i",8),o(9,"span"),l(10,"New"),n()()(),_(11,ze,3,5,"p-table",9)(12,Ne,6,4,"div",10),n()),t&2){let e=s();c(11),p("ngIf",e.isDesktop),c(),p("ngIf",!e.isDesktop)}}function Ae(t,r){t&1&&(o(0,"div",47)(1,"p"),m(2,"i",48),n()())}function qe(t,r){if(t&1){let e=h();o(0,"div",49)(1,"div",50),m(2,"i",51),n(),o(3,"span",52),l(4),n(),o(5,"p",53),l(6),n(),o(7,"div",54)(8,"button",55),v("click",function(){f(e),s();let a=S(5);return x(a.accept())}),n(),o(9,"button",56),v("click",function(){f(e),s();let a=S(5);return x(a.reject())}),n()()()}if(t&2){let e=r.$implicit;c(4),C(e.header),c(2),C(e.message)}}var pt=(()=>{let r=class r{constructor(i,a,d,P,he,Se,be){this.confirmationService=i,this.productsService=a,this.messageService=d,this.router=P,this.viewportSizeService=he,this.changeDetectorRef=Se,this.route=be,this.cols=[{field:"name",header:"Name"},{field:"image",header:"Image"},{field:"price",header:"Price"},{field:"countInStock",header:"Stock"},{field:"category",header:"Category"},{field:"dateCreated",header:"Created at"}],this.currPage="1",this.pageSize="10",this.isFirstOnInit=!0,this.isLoading=!1}ngOnInit(){this._observeProducts(),this._observeViewportSize(),this.listenUrlChanges(),this.isDesktop||(this._observeQueryParams(),this.setQueryParams({currPage:this.currPage})),this.isDesktop&&this._observeQueryParams()}_observeQueryParams(){this.queryParamsSubscription=this.route.queryParams.subscribe(i=>{this.currPage=i.currPage||this.currPage,this.pageSize=i.pageSize||this.pageSize,this.getProducts()})}setQueryParams(i={}){this.router.navigate([],{relativeTo:this.route,queryParams:{currPage:i.currPage,pageSize:i.pageSize===""?i.pageSize:this.pageSize},queryParamsHandling:"merge"})}onClickPage(i){i+1!==+this.currPage&&(this.setQueryParams({currPage:i+1+""}),this.isLoading=!0)}_observeViewportSize(){this.viewportSubscription=this.viewportSizeService.viewportWidth$.pipe(y(i=>i>=1025)).subscribe(i=>{this.isDesktop=i,i?this.setQueryParams({currPage:"",pageSize:""}):this.setQueryParams({currPage:this.currPage,pageSize:this.pageSize})})}getProducts(){this.isDesktop?this.productsService.getProducts():this.productsService.getProducts({currPage:this.currPage,pageSize:this.pageSize})}_observeProducts(){this.productsSubscription=this.productsService.products$.pipe(y(i=>i instanceof Array&&!i.length?[]:(this.pageCount=i.pageCount,i.products.map(a=>R(V({},a),{category:a.category.name}))))).subscribe({next:i=>{if(this.isFirstOnInit){this.isFirstOnInit=!1;return}this.products=i,this.isLoading=!1,this.changeDetectorRef.markForCheck()},error:i=>{console.error("Cannot get products",i)}})}onDeleteProduct(i){this.confirmationService.confirm({header:"Delete Product",message:"Are you sure you want to delete this Product?",accept:()=>{this.productsService.deleteProduct(i).subscribe({next:a=>{this.products=this.products.filter(d=>d.id!==a.id),this.messageService.add({severity:"success",summary:"Success",detail:`The product "${a.name}" is deleted successfully!`}),this.changeDetectorRef.markForCheck()},error:a=>{console.error("Cannot delete product",a)}})},reject:()=>{}})}listenUrlChanges(){let i=this.router.url.split("?")[0];this.urlChangesSubscription=this.router.events.pipe(B(a=>a instanceof K)).subscribe({next:a=>{let d=a.url.split("?")[0];d!==i&&(this.getProducts(),i=d)},error:a=>{console.error("Cannot get url changes!",a)}})}trackByProductId(i,a){return a.id}ngOnDestroy(){this.urlChangesSubscription?.unsubscribe(),this.viewportSubscription?.unsubscribe(),this.queryParamsSubscription?.unsubscribe(),this.productsSubscription?.unsubscribe()}};r.\u0275fac=function(a){return new(a||r)(g(re),g(ie),g(oe),g(Z),g(ne),g(U),g(X))},r.\u0275cmp=M({type:r,selectors:[["admin-product-list"]],standalone:!0,features:[N],decls:8,vars:2,consts:[["loader",""],["cd",""],["class","products-page",4,"ngIf","ngIfElse"],["pTemplate","headless"],[1,"products-page"],[1,"name-page"],[1,"btn-container"],["routerLink","/products/form",1,"btn-create-edit-product"],[1,"pi","pi-plus"],["class","p-table",3,"paginator","rows","showCurrentPageReport","columns","value",4,"ngIf"],["class","products-tablet-mobile",4,"ngIf"],[1,"p-table",3,"paginator","rows","showCurrentPageReport","columns","value"],["pTemplate","header"],["pTemplate","body"],[3,"pSortableColumn","pSortableColumnDisabled",4,"ngFor","ngForOf"],[3,"pSortableColumn","pSortableColumnDisabled"],[3,"field",4,"ngIf"],[3,"field"],[4,"ngFor","ngForOf"],["styleClass","p-button-trash","icon","pi pi-trash",3,"click"],["styleClass","p-button-pencil","icon","pi pi-pencil",3,"routerLink"],[4,"ngIf"],["alt","product",3,"src",4,"ngIf"],["alt","product",3,"src"],[1,"products-tablet-mobile"],["class","pages",4,"ngIf"],["class","product-list",4,"ngIf","ngIfElse"],[1,"pages"],[3,"ngClass"],[3,"click"],[1,"product-list"],["class","product",4,"ngFor","ngForOf","ngForTrackBy"],[1,"product"],[1,"row-1"],[1,"name-img-container"],[1,"row-2"],[1,"price-stock-container"],[1,"price"],[1,"stock"],[1,"category-date-container"],[1,"category"],[1,"date"],[1,"actions"],[1,"btn-edit-product",3,"routerLink"],[1,"pi","pi-pencil"],[1,"btn-delete-product",3,"click"],[1,"pi","pi-trash"],[1,"loader-container"],[1,"pi","pi-spin","pi-spinner"],[1,"confirm-modal","flex","flex-column","align-items-center","p-5","border-round"],[1,"icon","border-circle","inline-flex","justify-content-center","align-items-center","h-6rem","w-6rem","-mt-8"],[1,"pi","pi-question","text-5xl"],[1,"font-bold","text-2xl","block","mb-2","mt-4"],[1,"mb-0"],[1,"flex","align-items-center","gap-2","mt-4"],["pButton","","label","Save",1,"w-8rem",3,"click"],["pButton","","label","Cancel",1,"p-button-outlined","w-8rem",3,"click"]],template:function(a,d){if(a&1&&(_(0,Ue,13,2,"section",2)(1,Ae,3,0,"ng-template",null,0,z),m(3,"p-toast"),o(4,"p-confirmDialog",null,1),_(6,qe,10,2,"ng-template",3),n(),m(7,"router-outlet")),a&2){let P=S(2);p("ngIf",d.products&&d.isDesktop!==void 0)("ngIfElse",P)}},dependencies:[J,A,q,H,G,W,te,Y,ee,de,le,pe,ce,se,ae,_e,me,xe,ue,ge,fe],changeDetection:0});let t=r;return t})();export{pt as ProductListComponent};
