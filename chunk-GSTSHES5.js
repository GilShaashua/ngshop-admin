import{b as Ee,c as ye,d as Ie,e as be,f as R,g as Te,i as Fe,j as we,k as b,l as Ue,m as je,n as ke,o as M,p as O}from"./chunk-YLODOAOO.js";import{B as oe,Bb as he,C as q,Ca as fe,Cc as Be,Fa as f,Fb as ge,G as u,Ga as c,Ha as y,I as h,J as m,K as a,M as se,Ma as Y,Ob as S,Qa as ue,Rc as De,Sc as Pe,Tb as Se,Ub as ve,W as ne,Wb as Ce,X as ae,Xb as T,Ya as g,Zb as Ne,_a as le,_b as Ae,a as Z,ac as Re,b as w,bb as de,c as U,cc as Me,db as A,dc as Oe,ec as xe,f as j,fc as _e,g as k,gc as $e,h as I,j as L,ka as ce,l as V,la as l,m as G,ma as E,n as C,o as N,p as H,r as Q,s as ee,t as te,ub as pe,v as re,w as J,wa as z,wb as me,x as ie,ya as d}from"./chunk-7I2OQVDN.js";import{a as F,f as P}from"./chunk-CWTPBX7D.js";var Le=(()=>{let r=class r{constructor(){this._isUsedByNgShop$=new U(!1),this.isUsedByNgShop$=this._isUsedByNgShop$.asObservable()}setIsUsedByNgShop(){this._isUsedByNgShop$.next(!0)}};r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var v=(()=>{let r=class r{constructor(t,i){this.http=t,this.usersFacade=i,this._loggedInUser$=new U(this.getToken()),this.loggedInUser$=this._loggedInUser$.asObservable(),this.apiUrl=ve.API_URL}login({email:t,password:i}){return this.http.post(`${this.apiUrl}users/login`,{email:t,password:i})}logout(){localStorage.removeItem("jwtToken"),this._loggedInUser$.next(null)}logoutNgShop(){this.usersFacade.userSessionLogout()}loginNgShop(t){this.usersFacade.userSessionLogin(t)}saveTokenAdminPanel(t){return JSON.parse(atob(t.split(".")[1])).isAdmin?(localStorage.setItem("jwtToken",t),this._loggedInUser$.next(t),!0):!1}saveTokenNgShop(t){let i=atob(t.split(".")[1]),o=JSON.parse(i);this.isTokenExpried(o.exp)||localStorage.setItem("jwtToken",t)}getToken(){return localStorage.getItem("jwtToken")}getUserIdFromToken(){let t=this.getToken();if(t){let i=JSON.parse(atob(t.split(".")[1]));return i?i.userId:null}return null}isValidToken(){let t=this.getToken();if(t){let i=JSON.parse(atob(t.split(".")[1]));return!this.isTokenExpried(i)}else return!1}isTokenExpried(t){return Math.floor(new Date().getTime()/1e3)>=t}get loggedInUser(){return this._loggedInUser$.value}};r.\u0275fac=function(i){return new(i||r)(m(ge),m(M))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();var Qe={dispatch:!0,functional:!1,useEffectsErrorHandler:!0},_="__@ngrx/effects_create__";function $(e,r={}){let s=r.functional?e:e(),t=F(F({},Qe),r);return Object.defineProperty(s,_,{value:t}),s}function et(e){return Object.getOwnPropertyNames(e).filter(t=>e[t]&&e[t].hasOwnProperty(_)?e[t][_].hasOwnProperty("dispatch"):!1).map(t=>{let i=e[t][_];return F({propertyName:t},i)})}function tt(e){return et(e)}function Ve(e){return Object.getPrototypeOf(e)}function rt(e){return!!e.constructor&&e.constructor.name!=="Object"&&e.constructor.name!=="Function"}function Ge(e){return typeof e=="function"}function it(e){return e.filter(Ge)}function ot(e,r,s){let t=Ve(e),o=!!t&&t.constructor.name!=="Object"?t.constructor.name:null,n=tt(e).map(({propertyName:p,dispatch:D,useEffectsErrorHandler:Xe})=>{let W=typeof e[p]=="function"?e[p]():e[p],X=Xe?s(W,r):W;return D===!1?X.pipe(ee()):X.pipe(ie()).pipe(I(Ze=>({effect:e[p],notification:Ze,propertyName:p,sourceName:o,sourceInstance:e})))});return G(...n)}var st=10;function He(e,r,s=st){return e.pipe(N(t=>(r&&r.handleError(t),s<=1?e:He(e,r,s-1))))}var Je=(()=>{let r=class r extends Z{constructor(t){super(),t&&(this.source=t)}lift(t){let i=new r;return i.source=this,i.operator=t,i}};r.\u0275fac=function(i){return new(i||r)(m(be))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function B(...e){return C(r=>e.some(s=>typeof s=="string"?s===r.type:s.type===r.type))}var Xt=new h("@ngrx/effects Internal Root Guard"),Zt=new h("@ngrx/effects User Provided Effects"),Qt=new h("@ngrx/effects Internal Root Effects"),er=new h("@ngrx/effects Internal Root Effects Instances"),tr=new h("@ngrx/effects Internal Feature Effects"),rr=new h("@ngrx/effects Internal Feature Effects Instance Groups"),nt=new h("@ngrx/effects Effects Error Handler",{providedIn:"root",factory:()=>He}),at="@ngrx/effects/init",ct=Ee(at);function ft(e,r){if(e.notification.kind==="N"){let s=e.notification.value;!ut(s)&&r.handleError(new Error(`Effect ${lt(e)} dispatched an invalid action: ${dt(s)}`))}}function ut(e){return typeof e!="function"&&e&&e.type&&typeof e.type=="string"}function lt({propertyName:e,sourceInstance:r,sourceName:s}){let t=typeof r[e]=="function";return!!s?`"${s}.${String(e)}${t?"()":""}"`:`"${String(e)}()"`}function dt(e){try{return JSON.stringify(e)}catch{return e}}var pt="ngrxOnIdentifyEffects";function mt(e){return K(e,pt)}var ht="ngrxOnRunEffects";function gt(e){return K(e,ht)}var St="ngrxOnInitEffects";function vt(e){return K(e,St)}function K(e,r){return e&&r in e&&typeof e[r]=="function"}var qe=(()=>{let r=class r extends w{constructor(t,i){super(),this.errorHandler=t,this.effectsErrorHandler=i}addEffects(t){this.next(t)}toActions(){return this.pipe(J(t=>rt(t)?Ve(t):t),L(t=>t.pipe(J(Et))),L(t=>{let i=t.pipe(re(n=>yt(this.errorHandler,this.effectsErrorHandler)(n)),I(n=>(ft(n,this.errorHandler),n.notification)),C(n=>n.kind==="N"&&n.value!=null),te()),o=t.pipe(Q(1),C(vt),I(n=>n.ngrxOnInitEffects()));return G(i,o)}))}};r.\u0275fac=function(i){return new(i||r)(m(ce),m(nt))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function Et(e){return mt(e)?e.ngrxOnIdentifyEffects():""}function yt(e,r){return s=>{let t=ot(s,e,r);return gt(s)?s.ngrxOnRunEffects(t):t}}var It=(()=>{let r=class r{get isStarted(){return!!this.effectsSubscription}constructor(t,i){this.effectSources=t,this.store=i,this.effectsSubscription=null}start(){this.effectsSubscription||(this.effectsSubscription=this.effectSources.toActions().subscribe(this.store))}ngOnDestroy(){this.effectsSubscription&&(this.effectsSubscription.unsubscribe(),this.effectsSubscription=null)}};r.\u0275fac=function(i){return new(i||r)(m(qe),m(R))},r.\u0275prov=u({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();function ze(...e){let r=e.flat(),s=it(r);return ae([s,{provide:ne,multi:!0,useValue:()=>{a(ye),a(Ie,{optional:!0});let t=a(It),i=a(qe),o=!t.isStarted;o&&t.start();for(let n of r){let p=Ge(n)?a(n):n;i.addEffects(p)}o&&a(R).dispatch(ct())}}])}var Ye=(()=>{let r=class r{constructor(){this.actions$=a(Je),this.authService=a(v),this.usersService=a(O),this.buildUserSession$=$(()=>this.actions$.pipe(B(Fe),H(()=>{if(this.authService.isValidToken()){let t=this.authService.getUserIdFromToken();return t?this.usersService.getUserById(t).pipe(I(i=>we({user:i})),N(()=>j(b()))):j(b())}else return j(b())}))),this.buildUserSessionFailed$=$(()=>this.actions$.pipe(B(b),q(()=>{localStorage.removeItem("jwtToken")})),{dispatch:!1}),this.userSessionLogout$=$(()=>this.actions$.pipe(B(Ue),q(()=>{localStorage.removeItem("jwtToken")})),{dispatch:!1})}};r.\u0275fac=function(i){return new(i||r)},r.\u0275prov=u({token:r,factory:r.\u0275fac});let e=r;return e})();function bt(e,r){e&1&&(f(0,"small"),g(1,"Email is required!"),c())}function Tt(e,r){e&1&&(f(0,"small"),g(1,"Email is not valid!"),c())}function Ft(e,r){e&1&&(f(0,"small"),g(1,"Password is required!"),c())}function wt(e,r){e&1&&(f(0,"small"),g(1,"Minimum 6 characters!"),c())}var Ut=e=>({removeHeight:e}),Ke=e=>({submitted:e}),We=(()=>{let r=class r{constructor(t,i,o,n,p,D){this.formBuilder=t,this.authService=i,this.messageService=o,this.router=n,this.utilsService=p,this.usersService=D,this.form=this.formBuilder.group({email:["",[T.required,T.email]],password:["",[T.required,T.minLength(6)]]}),this.isSubmitted=!1,this.isPasswordShown=!1,this.isUsedByNgShop=!1,this.endSubs$=new w}ngOnInit(){this._checkFromNgShop()}onSubmitLogin(){this.isSubmitted=!0,!this.form.invalid&&(this.isUsedByNgShop?this._loginNgShop():this._loginAdminPanel())}_loginAdminPanel(){this.authService.login(this.form.value).subscribe({next:t=>P(this,null,function*(){this.authService.saveTokenAdminPanel(t.token)?(this.messageService.add({severity:"success",summary:"Success",detail:"You are logged in successfully!"}),yield k(V(2e3)),this.router.navigateByUrl("/")):this.messageService.add({severity:"error",summary:"Error",detail:"You are not an admin!"})}),error:t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.status!==400?"Server error, please try again later!":"Email or password incorrect"})}})}_loginNgShop(){this.authService.login(this.form.value).subscribe({next:t=>P(this,null,function*(){if(t&&t.token){this.authService.saveTokenNgShop(t.token);let i=this.authService.getUserIdFromToken();if(i){let o=this.usersService.getUserById(i),n=yield k(o);this.authService.loginNgShop(n),this.messageService.add({severity:"success",summary:"Success",detail:"You are logged in successfully!"}),yield k(V(2e3)),this.router.navigateByUrl("/")}}}),error:t=>{this.messageService.add({severity:"error",summary:"Error",detail:t.status!==400?"Server error, please try again later!":"Email or password incorrect"})}})}_checkFromNgShop(){this.utilsService.isUsedByNgShop$.pipe(oe(this.endSubs$)).subscribe({next:t=>{t&&(this.isUsedByNgShop=t)},error:t=>{console.error("Cannot get UsedByNgShop",t)}})}get formControls(){return this.form.controls}ngOnDestroy(){this.endSubs$.next(null),this.endSubs$.complete()}};r.\u0275fac=function(i){return new(i||r)(E(xe),E(v),E(Be),E(S),E(Le),E(O))},r.\u0275cmp=se({type:r,selectors:[["users-login"]],hostAttrs:[1,"full"],standalone:!0,features:[de],decls:30,vars:19,consts:[[1,"login-page",3,"ngClass"],[1,"login-container"],[1,"img"],["src","https://s3-bucket-gilshaashua.s3.eu-north-1.amazonaws.com/login.jpg","alt","login"],[1,"red-cover"],[1,"login-inner-container"],[1,"header"],[1,"form-login",3,"formGroup","ngSubmit"],[1,"email-input"],[1,"email"],["for","email"],[1,"pi","pi-user"],["formControlName","email","type","email","name","email","id","email","placeholder","Email",3,"ngClass"],[4,"ngIf"],[1,"password-input"],[1,"password"],["for","password"],[1,"pi","pi-ellipsis-h"],["formControlName","password","name","password","id","password","placeholder","Password",3,"type","ngClass"],[1,"eye","pi",3,"title","click"],["type","submit",1,"btn-login"],["position","bottom-center"]],template:function(i,o){i&1&&(f(0,"section",0)(1,"div",1)(2,"div",2),y(3,"img",3)(4,"div",4),c(),f(5,"div",5)(6,"div",6)(7,"h1"),g(8,"eShop"),c(),f(9,"h2"),g(10),c()(),f(11,"form",7),Y("ngSubmit",function(){return o.onSubmitLogin()}),f(12,"div",8)(13,"div",9)(14,"label",10),y(15,"i",11),c(),y(16,"input",12),c(),z(17,bt,2,0,"small",13)(18,Tt,2,0,"small",13),c(),f(19,"div",14)(20,"div",15)(21,"label",16),y(22,"i",17),c(),y(23,"input",18),f(24,"i",19),Y("click",function(){return o.isPasswordShown=!o.isPasswordShown}),c()(),z(25,Ft,2,0,"small",13)(26,wt,2,0,"small",13),c(),f(27,"button",20),g(28,"Login"),c()()()()(),y(29,"p-toast",21)),i&2&&(d("ngClass",A(13,Ut,o.isUsedByNgShop)),l(10),le(" ",o.isUsedByNgShop?"The best products in every category":"Admin Panel"," "),l(),d("formGroup",o.form),l(5),d("ngClass",A(15,Ke,o.isSubmitted)),l(),d("ngIf",o.formControls.email.hasError("required")&&o.isSubmitted),l(),d("ngIf",o.formControls.email.hasError("email")&&o.isSubmitted),l(5),ue("type",o.isPasswordShown?"text":"password"),d("ngClass",A(17,Ke,o.isSubmitted)),l(),fe(o.isPasswordShown?"pi-eye-slash":"pi-eye"),d("title",o.isPasswordShown?"Hide":"Show"),l(),d("ngIf",o.formControls.password.hasError("required")&&o.isSubmitted),l(),d("ngIf",o.formControls.password.hasError("minlength")&&o.isSubmitted))},dependencies:[he,pe,me,Se,_e,Re,Ce,Ne,Ae,$e,Me,Oe,Pe,De]});let e=r;return e})();var Mr=[{path:"",component:We,providers:[M,Te(je,ke),ze([Ye])]}];function Br(){let e=a(v),r=e.getToken();if(!r)return a(S).navigateByUrl("login"),!1;try{let s=atob(r.split(".")[1]),t=JSON.parse(s);return t.isAdmin&&!e.isTokenExpried(t.exp)?!0:(a(S).navigateByUrl("login"),!1)}catch{return console.error("Error decoding JWT token"),a(S).navigateByUrl("login"),!1}}function Gr(){let e=a(v),r=e.getToken();if(r){let s=atob(r.split(".")[1]),t=JSON.parse(s);return e.isTokenExpried(t.exp)?!0:(console.error("User is already logged in"),a(S).navigateByUrl("/"),!1)}else return!0}export{v as a,ze as b,Ye as c,We as d,Mr as e,Br as f,Gr as g};
