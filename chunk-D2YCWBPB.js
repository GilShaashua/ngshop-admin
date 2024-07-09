import{I as u,L as c,Nb as h,Ob as n,bc as d,c as p,t as a}from"./chunk-DHB3CJQD.js";var B=(()=>{let e=class e{constructor(t){this.http=t,this._filterBy$=new p({categories:[],name:""}),this.filterBy$=this._filterBy$.asObservable(),this._products$=new p([]),this.products$=this._products$.asObservable(),this.apiUrl=d.API_URL}getProducts({currPage:t,pageSize:i}={}){let r=new h;this._filterBy$.value.categories.length&&(r=r.append("categories",this._filterBy$.value.categories.join(","))),this._filterBy$.value.name&&(r=r.append("products",this._filterBy$.value.name)),t&&i&&(r=r.append("currPage",t),r=r.append("pageSize",i)),this.http.get(`${this.apiUrl}products`,{params:r}).pipe(a(1)).subscribe({next:o=>{this._setProducts(o)},error:o=>{console.error("err",o)}})}_setProducts(t){this._products$.next(t)}getProductById(t){return this.http.get(`${this.apiUrl}products/${t}`)}addProduct(t){return this.http.post(`${this.apiUrl}products`,t)}editProduct(t){return this.http.put(`${this.apiUrl}products/${t.get("id")}`,t)}editProductGallery(t,i){return this.http.put(`${this.apiUrl}products/gallery-images/${i}`,t)}deleteProduct(t){return this.http.delete(`${this.apiUrl}products/${t}`)}getProductsCount(){return this.http.get(`${this.apiUrl}products/get/count`)}getFeaturedProducts(t){return this.http.get(`${this.apiUrl}products/get/featured/${t}`)}setFilterBy(t){this._filterBy$.next(t)}getProductStatistics(){return this.http.get(`${this.apiUrl}products/get/statistics`)}};e.\u0275fac=function(i){return new(i||e)(c(n))},e.\u0275prov=u({token:e,factory:e.\u0275fac,providedIn:"root"});let s=e;return s})();export{B as a};
