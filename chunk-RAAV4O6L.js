import{b as ye,c as be,d as Ie,e as Te,f as R,g as Fe,i as we,j as Ue,k as I,l as je,m as ke,n as Ce,o as O,p as x}from"./chunk-YLODOAOO.js";import{B as se,Bb as Se,C as z,Ca as ue,Cc as De,Fa as f,Fb as ve,G as u,Ga as c,Ha as y,I as h,J as m,K as a,M as ne,Ma as K,Ob as S,Qa as le,Rc as Pe,Sc as Le,Tb as Ee,Ub as A,W as ae,Wb as Me,X as ce,Xb as T,Ya as g,Zb as Ne,_a as de,_b as Ae,a as Q,ac as Re,b as w,bb as pe,c as U,cc as Oe,db as N,dc as xe,ec as _e,f as j,fc as $e,g as k,gc as Be,h as b,j as V,ka as fe,l as G,la as l,m as H,ma as E,n as C,o as M,p as J,qb as me,r as ee,s as te,t as re,ub as he,v as ie,w as q,wa as Y,wb as ge,x as oe,ya as d}from"./chunk-7I2OQVDN.js";import{a as F,f as L}from"./chunk-CWTPBX7D.js";var Ve=(()=>{let r=class r{constructor(){this._isUsedByNgShop$=new U(!1),this.isUsedByNgShop$=this._isUsedByNgShop$.asObservable()}setIsUsedByNgShop(){this._isUsedByNgShop$.next(!0)}};r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var v=(()=>{let r=class r{constructor(t,i){this.http=t,this.usersFacade=i,this._loggedInUser$=new U(this.getToken()),this.loggedInUser$=this._loggedInUser$.asObservable(),this.apiUrl=A.API_URL}checkProdMode(){console.log("environment",A),console.log("isDevMode",me()),A.production&&void 0}login({email:t,password:i}){return this.http.post(`${this.apiUrl}users/login`,{email:t,password:i})}logout(){localStorage.removeItem("jwtToken"),this._loggedInUser$.next(null)}logoutNgShop(){this.usersFacade.userSessionLogout()}loginNgShop(t){this.usersFacade.userSessionLogin(t)}saveTokenAdminPanel(t){return JSON.parse(atob(t.split(".")[1])).isAdmin?(localStorage.setItem("jwtToken",t),this._loggedInUser$.next(t),!0):!1}saveTokenNgShop(t){let i=atob(t.split(".")[1]),o=JSON.parse(i);this.isTokenExpried(o.exp)||localStorage.setItem("jwtToken",t)}getToken(){return localStorage.getItem("jwtToken")}getUserIdFromToken(){let t=this.getToken();if(t){let i=JSON.parse(atob(t.split(".")[1]));return i?i.userId:null}return null}isValidToken(){let t=this.getToken();if(t){let i=JSON.parse(atob(t.split(".")[1]));return!this.isTokenExpried(i)}else return!1}isTokenExpried(t){return Math.floor(new Date().getTime()/1e3)>=t}get loggedInUser(){return this._loggedInUser$.value}};r.\u0275fac=function(i){return new(i||r)(m(ve),m(O))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var et={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},$="__@ngrx/effects_create__";function B(e,r={}){let s=r.functional?e:e(),t=F(F({},et),r);return Object.defineProperty(s,$,{value:t}),s}function tt(e){return Object.getOwnPropertyNames(e).filter(t=>e[t]&&e[t].hasOwnProperty($)?e[t][$].hasOwnProperty("dispatch"):!1).map(t=>{let i=e[t][$];return F({propertyName:t},i)})}function rt(e){return tt(e)}function Ge(e){return Object.getPrototypeOf(e)}function it(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function He(e){return typeof e=="function"}function ot(e){return e.filter(He)}function st(e,r,s){let t=Ge(e),o=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,n=rt(e).map(({propertyName:p,dispatch:P,useEffectsErrorHandler:Ze})=>{let X=typeof e[p]=="function"?e[p]():e[p],Z=Ze?s(X,r):X;return P===!1?Z.pipe(te()):Z.pipe(oe()).pipe(b(Qe=>({effect:e[p],notification:Qe,propertyName:p,sourceName:o,sourceInstance:e})))});return H(...n)}var nt=10;function Je(e,r,s=nt){return e.pipe(M(t=>(r&&r.handleError(t),s<=1?e:Je(e,r,s-1))))}var qe=(()=>{let r=class r extends Q{constructor(t){super(),t&&(this.source=t)}lift(t){let i=new r;return i.source=this,i.operator=t,i}};r.\u0275fac=function(i){return new(i||r)(m(Te))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function D(...e){return C(r=>e.some(s=>typeof s=="string"?s===r.type:s.type===r.type))}var tr=new h("@ngrx/effects Internal Root Guard"),rr=new h("@ngrx/effects User Provided Effects"),ir=new h("@ngrx/effects Internal Root Effects"),or=new h("@ngrx/effects Internal Root Effects Instances"),sr=new h("@ngrx/effects Internal Feature Effects"),nr=new h("@ngrx/effects Internal Feature Effects Instance Groups"),at=new h("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>Je}),ct="@ngrx/effects/init",ft=ye(ct);function ut(e,r){if(e.notification.kind==="N"){let s=e.notification.value;!lt(s)&&r.handleError(new Error(`Effect ${dt(e)} dispatched an invalid action: ${pt(s)}`))}}function lt(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function dt({propertyName:e,sourceInstance:r,sourceName:s}){let t=typeof r[e]=="function";return!!s?`"${s}.${String(e)}${t?"()":""}"`:`"${String(e)}()"`}function pt(e){try{return JSON.stringify(e)}catch{return e}}var mt="ngrxOnIdentifyEffects";function ht(e){return W(e,mt)}var gt="ngrxOnRunEffects";function St(e){return W(e,gt)}var vt="ngrxOnInitEffects";function Et(e){return W(e,vt)}function W(e,r){return e&&r in e&&typeof e[r]=="function"}var ze=(()=>{let r=class r extends w{constructor(t,i){super(),this.errorHandler=t,this.effectsErrorHandler=i}addEffects(t){this.next(t)}toActions(){return this.pipe(q(t=>it(t)?Ge(t):t),V(t=>t.pipe(q(yt))),V(t=>{let i=t.pipe(ie(n=>bt(this.errorHandler,this.effectsErrorHandler)(n)),b(n=>(ut(n,this.errorHandler),n.notification)),C(n=>n.kind==="N"&&n.value!=null),re()),o=t.pipe(ee(1),C(Et),b(n=>n.ngrxOnInitEffects()));return H(i,o)}))}};r.\u0275fac=function(i){return new(i||r)(m(fe),m(at))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function yt(e){return ht(e)?e.ngrxOnIdentifyEffects():""}function bt(e,r){return s=>{let t=st(s,e,r);return St(s)?s.ngrxOnRunEffects(t):t}}var It=(()=>{let r=class r{get isStarted(){return!!this.effectsSubscription}constructor(t,i){this.effectSources=t,this.store=i,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};r.\u0275fac=function(i){return new(i||r)(m(ze),m(R))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function Ye(...e){let r=e.flat(),s=ot(r);return ce([s,{provide:ae,multi:!0,useValue:()=>{a(be),a(Ie,{optional:!0});let t=a(It),i=a(ze),o=!t.isStarted;o&&t.start();for(let n of r){let p=He(n)?a(n):n;i.addEffects(p)}o&&a(R).dispatch(ft())}}])}var Ke=(()=>{let r=class r{constructor(){this.actions$=a(qe),this.authService=a(v),this.usersService=a(x),this.buildUserSession$=B(()=>this.actions$.pipe(D(we),J(()=>{if(this.authService.isValidToken()){let t=this.authService.getUserIdFromToken();return t?this.usersService.getUserById(t).pipe(b(i=>Ue({user:i})),M(()=>j(I()))):j(I())}else return j(I())}))),this.buildUserSessionFailed$=B(()=>this.actions$.pipe(D(I),z(()=>{localStorage.removeItem("jwtToken")})),{dispatch:!1}),this.userSessionLogout$=B(()=>this.actions$.pipe(D(je),z(()=>{localStorage.removeItem("jwtToken")})),{dispatch:!1})}};r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=u({token:r,factory:r.\u0275fac});let e=r;return e})();function Tt(e,r){e&1&&(f(0,"small"),g(1,"Email is required!"),c())}function Ft(e,r){e&1&&(f(0,"small"),g(1,"Email is not valid!"),c())}function wt(e,r){e&1&&(f(0,"small"),g(1,"Password is required!"),c())}function Ut(e,r){e&1&&(f(0,"small"),g(1,"Minimum 6 characters!"),c())}var jt=e=>({removeHeight:e}),We=e=>({submitted:e}),Xe=(()=>{let r=class r{constructor(t,i,o,n,p,P){this.formBuilder=t,this.authService=i,this.messageService=o,this.router=n,this.utilsService=p,this.usersService=P,this.form=this.formBuilder.group({email:["",[T.required,T.email]],password:["",[T.required,T.minLength(6)]]}),this.isSubmitted=!1,this.isPasswordShown=!1,this.isUsedByNgShop=!1,this.endSubs$=new w}ngOnInit(){this._checkFromNgShop()}onSubmitLogin(){this.isSubmitted=!0,!this.form.invalid&&(this.isUsedByNgShop?this._loginNgShop():this._loginAdminPanel())}_loginAdminPanel(){this.authService.login(this.form.value).subscribe({next:t=>L(this,null,function*(){this.authService.saveTokenAdminPanel(t.token)?(this.messageService.add({severity:"success",summary:"Success",detail:"You are logged in successfully!"}),yield k(G(2e3)),this.router.navigateByUrl("/")):this.messageService.add({severity:"error",summary:"Error",detail:"You are not an admin!"})}),error:t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.status!==400?"Server error, please try again later!":"Email or password incorrect"})}})}_loginNgShop(){this.authService.login(this.form.value).subscribe({next:t=>L(this,null,function*(){if(t&&t.token){this.authService.saveTokenNgShop(t.token);let i=this.authService.getUserIdFromToken();if(i){let o=this.usersService.getUserById(i),n=yield k(o);this.authService.loginNgShop(n),this.messageService.add({severity:"success",summary:"Success",detail:"You are logged in successfully!"}),yield k(G(2e3)),this.router.navigateByUrl("/")}}}),error:t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.status!==400?"Server error, please try again later!":"Email or password incorrect"})}})}_checkFromNgShop(){this.utilsService.isUsedByNgShop$.pipe(se(this.endSubs$)).subscribe({next:t=>{t&&(this.isUsedByNgShop=t)},error:t=>{console.error("Cannot get UsedByNgShop",t)}})}get formControls(){return this.form.controls}ngOnDestroy(){this.endSubs$.next(null),this.endSubs$.complete()}};r.\u0275fac=function(i){return new(i||r)(E(_e),E(v),E(De),E(S),E(Ve),E(x))},r.\u0275cmp=ne({type:r,selectors:[["users-login"]],hostAttrs:[1,"full"],standalone:!0,features:[pe],decls:30,vars:19,consts:[[1,"login-page",3,"ngClass"],[1,"login-container"],[1,"img"],["src","https://s3-bucket-gilshaashua.s3.eu-north-1.amazonaws.com/login.jpg","alt","login"],[1,"red-cover"],[1,"login-inner-container"],[1,"header"],[1,"form-login",3,"formGroup","ngSubmit"],[1,"email-input"],[1,"email"],["for","email"],[1,"pi","pi-user"],["formControlName","email","type","email","name","email","id","email","placeholder","Email",3,"ngClass"],[4,"ngIf"],[1,"password-input"],[1,"password"],["for","password"],[1,"pi","pi-ellipsis-h"],["formControlName","password","name","password","id","password","placeholder","Password",3,"type","ngClass"],[1,"eye","pi",3,"title","click"],["type","submit",1,"btn-login"],["position","bottom-center"]],template:function(i,o){i&1&&(f(0,"section",0)(1,"div",1)(2,"div",2),y(3,"img",3)(4,"div",4),c(),f(5,"div",5)(6,"div",6)(7,"h1"),g(8,"eShop"),c(),f(9,"h2"),g(10),c()(),f(11,"form",7),K("ngSubmit",function(){return o.onSubmitLogin()}),f(12,"div",8)(13,"div",9)(14,"label",10),y(15,"i",11),c(),y(16,"input",12),c(),Y(17,Tt,2,0,"small",13)(18,Ft,2,0,"small",13),c(),f(19,"div",14)(20,"div",15)(21,"label",16),y(22,"i",17),c(),y(23,"input",18),f(24,"i",19),K("click",function(){return o.isPasswordShown=!o.isPasswordShown}),c()(),Y(25,wt,2,0,"small",13)(26,Ut,2,0,"small",13),c(),f(27,"button",20),g(28,"Login"),c()()()()(),y(29,"p-toast",21)),i&2&&(d("ngClass",N(13,jt,o.isUsedByNgShop)),l(10),de(" ",o.isUsedByNgShop?"The best products in every category":"Admin Panel"," "),l(),d("formGroup",o.form),l(5),d("ngClass",N(15,We,o.isSubmitted)),l(),d("ngIf",o.formControls.email.hasError("required")&&o.isSubmitted),l(),d("ngIf",o.formControls.email.hasError("email")&&o.isSubmitted),l(5),le("type",o.isPasswordShown?"text":"password"),d("ngClass",N(17,We,o.isSubmitted)),l(),ue(o.isPasswordShown?"pi-eye-slash":"pi-eye"),d("title",o.isPasswordShown?"Hide":"Show"),l(),d("ngIf",o.formControls.password.hasError("required")&&o.isSubmitted),l(),d("ngIf",o.formControls.password.hasError("minlength")&&o.isSubmitted))},dependencies:[Se,he,ge,Ee,$e,Re,Me,Ne,Ae,Be,Oe,xe,Le,Pe]});let e=r;return e})();var $r=[{path:"",component:Xe,providers:[O,Fe(ke,Ce),Ye([Ke])]}];function Vr(){let e=a(v),r=e.getToken();if(!r)return a(S).navigateByUrl("login"),!1;try{let s=atob(r.split(".")[1]),t=JSON.parse(s);return t.isAdmin&&!e.isTokenExpried(t.exp)?!0:(a(S).navigateByUrl("login"),!1)}catch{return console.error("Error decoding JWT token"),a(S).navigateByUrl("login"),!1}}function zr(){let e=a(v),r=e.getToken();if(r){let s=atob(r.split(".")[1]),t=JSON.parse(s);return e.isTokenExpried(t.exp)?!0:(console.error("User is already logged in"),a(S).navigateByUrl("/"),!1)}else return!0}export{v as a,Ye as b,Ke as c,Xe as d,$r as e,Vr as f,zr as g};
