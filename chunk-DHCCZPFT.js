import{Cb as o,D as i,G as s,Rb as p}from"./chunk-ERFA3NGG.js";var l=(()=>{let r=class r{constructor(t){this.http=t,this.apiUrl=p.API_URL}getOrders(){return this.http.get(`${this.apiUrl}orders`)}getOrderById(t){return this.http.get(`${this.apiUrl}orders/${t}`)}addOrder(t){return this.http.post(`${this.apiUrl}orders`,t)}editOrder(t){return this.http.put(`${this.apiUrl}orders/${t.id}`,t)}deleteOrder(t){return this.http.delete(`${this.apiUrl}orders/${t}`)}getOrdersCount(){return this.http.get(`${this.apiUrl}orders/get/count`)}getTotalSales(){return this.http.get(`${this.apiUrl}orders/get/total-sales`)}};r.\u0275fac=function(h){return new(h||r)(s(o))},r.\u0275prov=i({token:r,factory:r.\u0275fac,providedIn:"root"});let e=r;return e})();export{l as a};
