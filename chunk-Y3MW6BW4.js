import{I as a,Kb as c,L as u,Lb as h,_b as n,c as o,t as p}from"./chunk-B64QGUJS.js";var y=(()=>{let r=class r{constructor(t){this.http=t,this._filterBy$=new o({categories:[],name:""}),this.filterBy$=this._filterBy$.asObservable(),this._products$=new o([]),this.products$=this._products$.asObservable(),this.apiUrl=n.API_URL}getProducts(){let t=new c;this._filterBy$.value.categories.length&&(t=t.append("categories",this._filterBy$.value.categories.join(","))),this._filterBy$.value.name&&(t=t.append("products",this._filterBy$.value.name)),this.http.get(`${this.apiUrl}products`,{params:t}).pipe(p(1)).subscribe({next:s=>{this._setProducts(s)},error:s=>{console.error("err",s)}})}_setProducts(t){this._products$.next(t)}getProductById(t){return this.http.get(`${this.apiUrl}products/${t}`)}addProduct(t){return this.http.post(`${this.apiUrl}products`,t)}editProduct(t){return this.http.put(`${this.apiUrl}products/${t.get("id")}`,t)}editProductGallery(t,e){return this.http.put(`${this.apiUrl}products/gallery-images/${e}`,t)}deleteProduct(t){return this.http.delete(`${this.apiUrl}products/${t}`)}getProductsCount(){return this.http.get(`${this.apiUrl}products/get/count`)}getFeaturedProducts(t){return this.http.get(`${this.apiUrl}products/get/featured/${t}`)}setFilterBy(t){this._filterBy$.next(t)}};r.\u0275fac=function(e){return new(e||r)(u(h))},r.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"});let i=r;return i})();export{y as a};
