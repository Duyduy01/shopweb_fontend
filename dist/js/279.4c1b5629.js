"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[279],{42279:function(t,a,e){e.r(a),e.d(a,{default:function(){return u}});var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",{staticClass:"container mt-5"},[e("div",{staticClass:"container mb-3"},[e("h4",[t._v(' Từ khóa "'+t._s(t.searchProduct)+'". Tổng kết quả tìm kiếm '+t._s(t.result)+" sản phẩm ")])]),e("div",[e("el-input",{attrs:{placeholder:"Nhập tên sản phẩm cần tìm !","prefix-icon":"el-icon-search"},model:{value:t.searchObject.search,callback:function(a){t.$set(t.searchObject,"search",a)},expression:"searchObject.search"}})],1)]),e("hr"),e("div",{staticClass:"container"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-12"},[0==t.listProduct.length?e("h3",{staticClass:"text-center"},[t._v(" Không có sản phẩm nào ! ")]):t._e()]),t._l(t.listData,(function(a){return e("div",{key:a.id,staticClass:"mt-5 col-3"},[e("div",{staticClass:"product-list"},[e("router-link",{attrs:{to:"/chi-tiet-san-pham/"+a.id}},[e("div",{staticClass:"single-gallery-image",style:"background: url("+a.img+")"})]),e("div",{staticClass:"product-action"},[e("button",{staticClass:"icon-heart",domProps:{innerHTML:t._s(a.favorite?t.like:t.dislike)},on:{click:function(e){return t.favoriteProduct(a)}}})])],1),e("div",{staticClass:"product-detail"},[e("div",{staticClass:"product-name"},[e("router-link",{attrs:{to:"/chi-tiet-san-pham/"+a.id}},[t._v(" "+t._s(a.productName)+" ")])],1),e("div",{staticClass:"price-sell"},[0!=a.sale?e("span",[e("span",{staticStyle:{color:"black","text-decoration":"line-through"}},[t._v(t._s(t.toMoney(a.priceSell/((100-a.sale)/100)))+" ")]),e("span",[t._v("- "+t._s(t.toMoney(a.priceSell))+" (-"+t._s(a.sale)+")%")])]):t._e(),0==a.sale?e("span",{staticStyle:{color:"black"}},[t._v(" "+t._s(t.toMoney(a.priceSell))+" ")]):t._e()])])])}))],2)]),e("div",{staticClass:"mt-4",staticStyle:{width:"100%","text-align":"center"}},[e("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalPageSearch,"page-size":1,"current-page":t.searchObject.page},on:{"current-change":t.handleCurrentChange}})],1)])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"m-banner"},[e("div",{staticClass:"m-banner-details"},[e("span")])])}],s=e(17431),c={name:"Search",data(){return{listProduct:[],result:0,searchObject:{search:"",page:1,limit:8},dislike:'<i class="far fa-heart"></i>',like:'<i class="fas fa-heart"></i>',totalPageSearch:1,checkPagination:!1}},created(){},computed:{listData(){return this.listProduct},searchProduct(){return this.sortApiCall(),this.searchObject.search}},methods:{sortApiCall(){this.checkPagination||(this.searchObject.page=1);let t=JSON.stringify(this.searchObject);this.callApi(t),this.callApiTotal(t),this.callApiTotalPage(t),this.checkPagination=!1},callApi(t){(0,s.M1)(t).then((t=>{this.listProduct=t})).catch((t=>{console.log(t.response.data)}))},callApiTotal(t){(0,s.eM)(t).then((t=>{this.result=t})).catch((t=>{console.log(t.response.data)}))},callApiTotalPage(t){(0,s.MG)(t).then((t=>{this.totalPageSearch=t})).catch((t=>{console.log(t.response.data)}))},toMoney(t){var a=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"});return a.format(t)},async favoriteProduct(t){let a=this.$root.$refs.userHeader.favoriteProductHeader(t.id);a.then((a=>{t.favorite=1!=a}))},handleCurrentChange(t){this.checkPagination=!0,this.searchObject.page=t}}},i=c,o=e(43736),l=(0,o.Z)(i,n,r,!1,null,"bccd081a",null),u=l.exports},17431:function(t,a,e){e.d(a,{BY:function(){return c},M1:function(){return o},MG:function(){return u},Vo:function(){return i},eM:function(){return l}});var n=e(31223),r=e(26166);let s=(0,n.X)();function c(t){return new Promise(((a,e)=>{var n={method:"post",url:s+"/api/v1/user/product/filter",headers:{"Content-Type":"application/json"},data:t};r(n).then((function(t){a(t.data.data)})).catch((function(t){e(t)}))}))}function i(t){return new Promise(((a,e)=>{var n={method:"post",url:s+"/api/v1/user/product/filter/total/page",headers:{"Content-Type":"application/json"},data:t};r(n).then((function(t){a(t.data.data)})).catch((function(t){e(t)}))}))}function o(t){return new Promise(((a,e)=>{var n={method:"post",url:s+"/api/v1/user/product/search",headers:{"Content-Type":"application/json"},data:t};r(n).then((function(t){a(t.data.data)})).catch((function(t){e(t)}))}))}function l(t){return new Promise(((a,e)=>{var n={method:"post",url:s+"/api/v1/user/product/search/total",headers:{"Content-Type":"application/json"},data:t};r(n).then((function(t){a(t.data.data)})).catch((function(t){e(t)}))}))}function u(t){return new Promise(((a,e)=>{var n={method:"post",url:s+"/api/v1/user/product/search/totalPage",headers:{"Content-Type":"application/json"},data:t};r(n).then((function(t){a(t.data.data)})).catch((function(t){e(t)}))}))}}}]);
//# sourceMappingURL=279.4c1b5629.js.map