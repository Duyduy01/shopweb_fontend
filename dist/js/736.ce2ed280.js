"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[736],{47736:function(t,e,a){a.r(e),a.d(e,{default:function(){return p}});var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container-fluid mt-5"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-3"},[t._m(1),a("div",{staticClass:"m-filter ml-2 m-filter-main"},[a("div",{staticClass:"m-filter-cate"},[t._m(2),t._l(t.listCate,(function(e,i){return a("div",{key:e.id,staticClass:"m-filter-padding"},[a("div",{staticClass:"row ml-1"},[a("div",{staticClass:"col-3 m-filter-obj"},[a("label",{class:t.listFilter.category[0]==t.listKeyCate(i)[0]?"active":"",attrs:{for:"cate-"+t.listKeyCate(i)[0]}},[t._v(t._s(t.listKeyCate(i)[1]))]),a("input",{staticClass:"m-fitler-active",attrs:{type:"radio",name:"cateId",id:"cate-"+t.listKeyCate(i)[0],"data-id":t.listKeyCate(i)[0],"data-code":"cateId",hidden:""},on:{click:t.activeCate}})])]),a("div",{staticClass:"row ml-3"},t._l(t.listCate[i],(function(e){return a("div",{key:e.id,staticClass:"col-6 m-filter-obj"},[a("label",{class:t.listFilter.category[0]==e.id?"active":"",attrs:{for:"cate-"+e.id}},[t._v(t._s(e.categoryName))]),a("input",{staticClass:"m-fitler-active",attrs:{type:"radio",name:"cateId",id:"cate-"+e.id,"data-id":e.id,"data-code":"cateId",hidden:""},on:{click:t.activeCate}})])})),0)])}))],2),a("div",{staticClass:"m-filter-brand"},[t._m(3),a("div",{staticClass:"row m-filter-padding"},t._l(t.listBrand,(function(e){return a("div",{key:e.id,staticClass:"col-4 m-filter-obj"},[a("label",{attrs:{for:"brand-"+e.id}},[t._v(t._s(e.brandName))]),a("input",{staticClass:"m-fitler-active",attrs:{type:"radio",name:"brandId",id:"brand-"+e.id,"data-id":e.id,"data-code":"brandId",hidden:""},on:{click:t.activeFilter}})])})),0)]),a("div",{staticClass:"m-filter-color"},[t._m(4),a("div",{staticClass:"row m-filter-padding"},t._l(t.listAllColor,(function(e){return a("div",{key:e.id,staticClass:"col-3 m-filter-color-object"},[a("label",{style:"background-color:"+e.featuredCode,attrs:{for:"color-"+e.id}}),a("input",{attrs:{type:"checkbox",id:"color-"+e.id,name:"color","data-id":e.id,"data-code":"color",hidden:""},on:{click:t.activeSpe}})])})),0)]),t._l(t.listAllSpe,(function(e,i){return a("div",{key:e.id,staticClass:"m-filter-spe"},[a("div",[a("h5",[t._v(t._s(i))])]),a("div",{staticClass:"row m-filter-padding"},t._l(e,(function(e){return a("div",{key:e.id,staticClass:"col-4 m-filter-obj"},[a("label",{attrs:{for:i+"-"+e.id}},[t._v(t._s(e.description))]),a("input",{staticClass:"m-fitler-active",attrs:{type:"checkbox",name:i,id:i+"-"+e.id,"data-id":e.id,"data-code":e.featuredKey,hidden:""},on:{click:t.activeSpe}})])})),0)])}))],2)]),a("div",{staticClass:"col-9"},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"m-header"},[a("div",{staticClass:"m-sort-right"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.sort,expression:"sort"}],attrs:{name:"sort",id:"m-sort"},on:{change:[function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.sort=e.target.multiple?a:a[0]},t.sortFilter]}},[a("option",{attrs:{value:"1"}},[t._v("Mới Nhất")]),a("option",{attrs:{value:"2"}},[t._v("Bán chạy nhất")]),a("option",{attrs:{value:"3"}},[t._v("Giá từ cao tới thấp")]),a("option",{attrs:{value:"4"}},[t._v("Giá từ thấp tới cao")])])])]),a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12"},[0==t.listProduct.length?a("h3",{staticClass:"text-center"},[t._v(" Không có sản phẩm nào ! ")]):t._e()]),t._l(t.listProduct,(function(e){return a("div",{key:e.id,staticClass:"mt-5 col-3"},[a("div",{staticClass:"product-list"},[a("router-link",{attrs:{to:"/chi-tiet-san-pham/"+e.id}},[a("div",{staticClass:"single-gallery-image",style:"background: url("+e.img+")"})]),a("div",{staticClass:"product-action"},[a("button",{staticClass:"icon-heart",domProps:{innerHTML:t._s(e.favorite?t.like:t.dislike)},on:{click:function(a){return t.favoriteProduct(e)}}})])],1),a("div",{staticClass:"product-detail"},[a("div",{staticClass:"product-name"},[a("router-link",{attrs:{to:"/chi-tiet-san-pham/"+e.id}},[t._v(" "+t._s(e.productName)+" ")])],1),a("div",{staticClass:"price-sell"},[0!=e.sale?a("span",[a("span",{staticStyle:{color:"black","text-decoration":"line-through"}},[t._v(t._s(t.toMoney(e.priceSell/((100-e.sale)/100)))+" ")]),a("span",[t._v("- "+t._s(t.toMoney(e.priceSell))+" (-"+t._s(e.sale)+")%")])]):t._e(),0==e.sale?a("span",{staticStyle:{color:"black"}},[t._v(" "+t._s(t.toMoney(e.priceSell))+" ")]):t._e()])])])}))],2)])]),a("div",{staticStyle:{width:"100%","text-align":"center"}},[a("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.totalPage,"page-size":1,"current-page":t.listFilter.page[0]},on:{"current-change":t.handleCurrentChange}})],1)])])])])])},n=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-banner"},[a("div",{staticClass:"m-banner-details"},[a("span")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"m-filter-header"},[a("h4",[t._v("Danh sách bộ lọc")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",[t._v("Loại sản phẩm")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",[t._v("Nhãn hiệu")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h5",[t._v("Màu sắc")])])}],r=a(17431),s=a(51048),o=a(47566),l=a(64732),c={name:"UserProduct",props:["cateId"],data(){return{listProduct:[],listCate:{},listBrand:[],listAllSpe:{},listAllColor:[],listNameSpe:[],banner:"",listFilter:{category:[],brand:[],sort:[1],page:[1],limit:[8]},totalPage:1,sort:1,dislike:'<i class="far fa-heart"></i>',like:'<i class="fas fa-heart"></i>'}},created(){(0,s.I)().then((t=>{this.listCate=t})),(0,o.lR)().then((t=>{this.listBrand=t})),(0,l.U1)().then((t=>{this.listAllSpe=t;let e="Màu sắc";this.listAllColor=t[e],delete this.listAllSpe[e]})),(0,l.iE)().then((t=>{t.forEach((t=>{this.listFilter[t]=[]}))})),this.checkCateActive(),this.callFilter(),window.scrollTo(0,0)},computed:{getCateId(){return this.cateId}},watch:{getCateId(){this.listFilter.category=[this.getCateId],this.listFilter.page=[1],this.callFilter(),window.scrollTo(0,0)}},methods:{activeFilter(t){let e=t.path[0].getAttribute("data-code");"brandId"==e&&this.activeBrand(t),this.listFilter.page=[1],this.callFilter(),window.scrollTo(0,0)},activeCate(t){let e=t.path[0].getAttribute("data-id");this.$router.push(`/san-pham/${e}`).catch((t=>{if("NavigationDuplicated"!=t.name)throw t}))},activeBrand(t){let e=t.path[1].childNodes[0],a=t.path[0].getAttribute("data-id"),i=document.querySelectorAll(".m-filter-brand>div>.m-filter-obj>label");i.forEach((t=>{t.classList.remove("active")})),e.classList.add("active"),this.listFilter.brand=[a]},activeSpe(t){let e=t.path[1].childNodes[0],a=t.path[0].checked,i=t.path[0].getAttribute("data-id"),n=t.path[0].getAttribute("data-code");a?(e.classList.add("active"),this.listFilter[n].push(i)):(e.classList.remove("active"),this.listFilter[n]=this.listFilter[n].filter((t=>t!=i))),this.listFilter.page=[1],this.callFilter()},listKeyCate(t){let e=t.split(",");return e},toMoney(t){var e=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"});return e.format(t)},callFilter(){let t=JSON.stringify(this.listFilter);(0,r.Vo)(t).then((t=>{this.totalPage=+t})),(0,r.BY)(t).then((t=>{this.listProduct=t})),this.getTotalPage,window.scrollTo(0,0)},checkCateActive(){0!=this.cateId&&(this.listFilter.category=[this.cateId])},handleCurrentChange(t){this.listFilter.page=[t],this.callFilter()},sortFilter(){this.listFilter.sort=[this.sort],this.listFilter.page=[1],this.callFilter()},async favoriteProduct(t){let e=this.$root.$refs.userHeader.favoriteProductHeader(t.id);e.then((e=>{t.favorite=1!=e}))}}},d=c,u=a(43736),h=(0,u.Z)(d,i,n,!1,null,"42ae7342",null),p=h.exports},47566:function(t,e,a){a.d(e,{PZ:function(){return d},Y2:function(){return l},iC:function(){return o},lR:function(){return s},zI:function(){return c}});var i=a(31223),n=a(26166);let r=(0,i.X)();function s(){return new Promise(((t,e)=>{var a={method:"get",url:r+"/api/v1/user/brand",headers:{"Content-Type":"application/json"}};n(a).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function o(){return new Promise(((t,e)=>{var a={method:"get",url:r+"/api/v1/admin/brand",headers:{"Content-Type":"application/json"}};n(a).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function l(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/admin/brand",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data)})).catch((function(t){console.log(t),a(t)}))}))}function c(t){return new Promise(((e,a)=>{var i={method:"put",url:r+"/api/v1/admin/brand",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data)})).catch((function(t){a(t)}))}))}function d(t){return new Promise(((e,a)=>{var i={method:"get",url:r+"/api/v1/admin/brand/status/"+t,headers:{"Content-Type":"application/json"}};n(i).then((function(t){e(t.data)})).catch((function(t){a(t)}))}))}},64732:function(t,e,a){a.d(e,{Du:function(){return d},NX:function(){return c},Nf:function(){return h},Oo:function(){return l},U1:function(){return s},iE:function(){return o},vN:function(){return u}});var i=a(31223),n=a(26166);let r=(0,i.X)();function s(){return new Promise(((t,e)=>{var a={method:"get",url:r+"/api/v1/user/speciality",headers:{"Content-Type":"application/json"}};n(a).then((function(e){t(e.data.data)})).catch((function(t){console.log(t),e(t)}))}))}function o(){return new Promise(((t,e)=>{var a={method:"get",url:r+"/api/v1/user/speciality/key",headers:{"Content-Type":"application/json"}};n(a).then((function(e){t(e.data.data)})).catch((function(t){console.log(t),e(t)}))}))}function l(){return new Promise(((t,e)=>{var a={method:"get",url:r+"/api/v1/admin/speciality",headers:{"Content-Type":"application/json"}};n(a).then((function(e){t(e.data.data)})).catch((function(t){console.log(t),e(t)}))}))}function c(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/admin/speciality/new",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){console.log(t),a(t)}))}))}function d(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/admin/speciality/old",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){console.log(t),a(t)}))}))}function u(t){return new Promise(((e,a)=>{var i={method:"put",url:r+"/api/v1/admin/speciality",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){console.log(t),a(t)}))}))}function h(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/admin/speciality/status/"+t,headers:{"Content-Type":"application/json"}};n(i).then((function(t){e(t.data.data)})).catch((function(t){console.log(t),a(t)}))}))}},17431:function(t,e,a){a.d(e,{BY:function(){return s},M1:function(){return l},MG:function(){return d},Vo:function(){return o},eM:function(){return c}});var i=a(31223),n=a(26166);let r=(0,i.X)();function s(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/user/product/filter",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){a(t)}))}))}function o(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/user/product/filter/total/page",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){a(t)}))}))}function l(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/user/product/search",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){a(t)}))}))}function c(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/user/product/search/total",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){a(t)}))}))}function d(t){return new Promise(((e,a)=>{var i={method:"post",url:r+"/api/v1/user/product/search/totalPage",headers:{"Content-Type":"application/json"},data:t};n(i).then((function(t){e(t.data.data)})).catch((function(t){a(t)}))}))}}}]);
//# sourceMappingURL=736.ce2ed280.js.map