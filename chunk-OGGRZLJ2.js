import{I as a,Kb as i,L as o,Lb as p,_b as h}from"./chunk-B64QGUJS.js";var u=(()=>{let r=class r{constructor(t){this.http=t,this.apiUrl=h.API_URL}getOrders(){return this.http.get(`${this.apiUrl}orders`)}getOrderById(t){return this.http.get(`${this.apiUrl}orders/${t}`)}addOrder(t){return this.http.post(`${this.apiUrl}orders`,t)}editOrder(t){return this.http.put(`${this.apiUrl}orders/${t.id}`,t)}deleteOrder(t){return this.http.delete(`${this.apiUrl}orders/${t}`)}getOrdersCount(){return this.http.get(`${this.apiUrl}orders/get/count`)}getTotalSales(){return this.http.get(`${this.apiUrl}orders/get/total-sales`)}getOrderStatistics({dateOrdered:t}){let e=new i().set("dateOrdered",t);return this.http.get(`${this.apiUrl}orders/get/statistics`,{params:e})}getOrdersYears(){return this.http.get(`${this.apiUrl}orders/get/years`)}getTotalSalesStatistics({dateOrdered:t}){let e=new i().set("dateOrdered",t);return this.http.get(`${this.apiUrl}orders/get/total-sales-statistics`,{params:e})}};r.\u0275fac=function(e){return new(e||r)(o(p))},r.\u0275prov=a({token:r,factory:r.\u0275fac,providedIn:"root"});let s=r;return s})();export{u as a};
