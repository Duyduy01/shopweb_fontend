"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[520],{33520:function(t,e,n){n.r(e),n.d(e,{default:function(){return v}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mt-5"},[n("HeaderCart",{attrs:{activeValue:t.activeValue}}),n("div",{staticClass:"container mt-5"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-8 pt-1"},[n("div",{staticClass:"product"},[t._m(0),n("hr"),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"fullName"}},[t._v("Họ và tên")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.fullName,expression:"user.fullName"}],staticClass:"form-control",attrs:{type:"text",id:"fullName",name:"fullName",placeholder:"Nhập họ và tên",disabled:""},domProps:{value:t.user.fullName},on:{input:function(e){e.target.composing||t.$set(t.user,"fullName",e.target.value)}}})])]),n("div",{staticClass:"col-6"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"phone"}},[t._v("Số điện thoại")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.user.phone,expression:"user.phone"}],staticClass:"form-control",attrs:{type:"text",id:"phone",name:"phone",placeholder:"Vui lòng nhập số điện thoại",disabled:""},domProps:{value:t.user.phone},on:{input:function(e){e.target.composing||t.$set(t.user,"phone",e.target.value)}}})])]),n("div",{staticClass:"col-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"city"}},[t._v("Tỉnh / Thành Phố")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.bill.city,expression:"bill.city"}],staticClass:"form-control",attrs:{id:"city"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.bill,"city",e.target.multiple?n:n[0])},t.chooseCity]}},[n("option",{attrs:{selected:"",value:"0"}},[t._v("--Lựa Chọn--")]),t._l(t.listCity,(function(e){return n("option",{key:e.ProvinceID,domProps:{value:e.ProvinceID}},[t._v(" "+t._s(e.ProvinceName)+" ")])}))],2)])]),n("div",{staticClass:"col-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"district"}},[t._v("Quận / Huyện")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.bill.district,expression:"bill.district"}],staticClass:"form-control",attrs:{id:"district"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.bill,"district",e.target.multiple?n:n[0])},t.chooseDistrict]}},[n("option",{attrs:{selected:"",value:"0"}},[t._v("--Lựa Chọn--")]),t._l(t.listDistrict,(function(e){return n("option",{key:e.DistrictID,domProps:{value:e.DistrictID}},[t._v(" "+t._s(e.DistrictName)+" ")])}))],2)])]),n("div",{staticClass:"col-4"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"ward"}},[t._v("Phường / Xã")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.bill.ward,expression:"bill.ward"}],staticClass:"form-control",attrs:{id:"ward"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.bill,"ward",e.target.multiple?n:n[0])},t.chooseWard]}},[n("option",{attrs:{selected:"",value:"0"}},[t._v("--Lựa Chọn--")]),t._l(t.listWard,(function(e){return n("option",{key:e.WardCode,domProps:{value:e.WardCode}},[t._v(" "+t._s(e.WardName)+" ")])}))],2)])]),n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"phone"}},[t._v("Địa chỉ")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.bill.address,expression:"bill.address"}],staticClass:"form-control",attrs:{type:"text",id:"address",name:"address",placeholder:"Vui lòng nhập địa chỉ"},domProps:{value:t.bill.address},on:{input:function(e){e.target.composing||t.$set(t.bill,"address",e.target.value)}}})])]),n("div",{staticClass:"col-12"},[n("div",{staticClass:"form-group"},[n("label",{attrs:{for:"phone"}},[t._v("Ghi chú")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bill.note,expression:"bill.note"}],staticClass:"form-control",attrs:{name:"note",id:"note",rows:"5"},domProps:{value:t.bill.note},on:{input:function(e){e.target.composing||t.$set(t.bill,"note",e.target.value)}}})])])])])]),n("div",{staticClass:"product"},[t._m(1),n("div",{staticClass:"bill-pay"},[n("button",{class:1==t.bill.pay?"btn-bill-pay active":"btn-bill-pay",on:{click:t.choosePay}},[n("div",[t._v("Thanh toán khi nhận hàng")]),t._m(2)]),n("button",{class:2==t.bill.pay?"btn-bill-pay active":"btn-bill-pay",on:{click:t.chooseVNPay}},[n("div",[t._v("Thanh toán qua VNPAY")]),t._m(3)])])]),n("div",{staticClass:"product"},[t._m(4),n("div",{staticClass:"bill-pay"},[n("table",{staticClass:"table table secondary-5:border text-center"},[t._m(5),t.listProduct.length>=0?n("tbody",t._l(t.getListProduct,(function(e,i){return n("tr",{key:e.id},[n("td",[t._v(t._s(i+1))]),n("td",{staticClass:"d-flex justify-content-center"},[n("div",[n("img",{staticClass:"product-img",attrs:{src:e.img,alt:""}})]),n("div",{staticClass:"product-name"},[n("div",[t._v(" "+t._s(null==e.parentId?e.productName:e.parentName)+" ")]),n("div",{staticClass:"d-flex"},t._l(e.speciality,(function(e){return n("div",{key:e.id},[n("div",[n("button",{staticClass:"product-speciality"},[t._v(" "+t._s(e.description)+" ")])])])})),0)])]),n("td",[t._v(t._s(t.toMoney(e.priceSell)))]),n("td",[t._v(" "+t._s(e.quantity)+" ")]),n("td",{attrs:{id:"total"+e.id}},[t._v(t._s(t.toMoney(e.totalPrice)))])])})),0):t._e(),0==t.listProduct.length?n("tbody",[n("tr",[n("th"),n("th"),n("th",[t._v(t._s(t.errorMessage))]),n("th"),n("th"),n("th")])]):t._e()])])])]),n("div",{staticClass:"col-4 pt-1"},[n("div",{staticClass:"product-bill"},[t._m(6),n("hr"),n("div",{staticClass:"bill-content"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row text-center pl-2 pr-2 pb-4"},[t._m(7),n("div",{staticClass:"col-6 mt-2"},[n("h6",[t._v(t._s(t.toMoney(this.totalBillPay)))])]),t._m(8),n("div",{staticClass:"col-12 mt-2"},[n("button",{staticClass:"btn btn-outline-dark w-100 button-cart",attrs:{type:"button"},on:{click:t.ActionPayMent}},[t._v(" Thanh toán ")])]),t._m(9)])])])])])])])],1)},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-2"},[n("h4",{staticClass:"text-center"},[t._v("Thông tin giao hàng")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h4",{staticClass:"text-center"},[t._v("Phương thức thanh toán")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Fcod.svg?alt=media",alt:"",srcset:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Fvnpay.svg?alt=media",alt:""}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{},[n("h4",{staticClass:"text-center"},[t._v("Giỏ hàng")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("th",[t._v("Stt")]),n("th",[t._v("Sản phẩm")]),n("th",[t._v("Giá")]),n("th",[t._v("Số Lượng")]),n("th",[t._v("Tổng")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pb-2"},[n("h4",{staticClass:"text-center"},[t._v("Đơn hàng")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-6 mt-2"},[n("h6",[t._v("Tổng tiền thanh toán:")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 mt-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-8"},[n("input",{staticClass:"form-control",attrs:{type:"text",id:"fullName",name:"fullName",placeholder:"Nhập mã giảm giá"}})]),n("div",{staticClass:"col-4"},[n("button",{staticClass:"btn btn-dark",attrs:{type:"button"}},[n("span",{staticStyle:{"font-size":"14px"}},[t._v("Áp dụng")])])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12 mt-2"},[n("button",{staticClass:"btn btn-outline-dark w-100 button-cart",attrs:{type:"button"}},[t._v(" Quay lại giỏ hàng ")])])}],s=(n(41539),n(54747),n(38862),n(61396)),o=n(10928),r=n(30403),c=n(90259),l=n(69409),u={data:function(){return{activeValue:1,listProduct:[],errorMessage:"Chưa có sản phẩm nào !",totalBill:0,feeShip:0,totalBillPay:0,bill:{city:0,district:0,ward:0,note:"",pay:!1,address:""},listCity:[],listDistrict:[],listWard:[],user:{}}},components:{HeaderCart:s.Z},computed:{getListProduct:function(){return this.listProduct}},created:function(){var t=this;window.scrollTo(0,0),this.checkGetListProduct(),(0,r.hw)().then((function(e){t.listCity=e})).catch((function(t){console.log(t)})),(0,c.n)().then((function(e){t.user=e,t.bill.city=null==t.user.city?0:+t.user.city,t.chooseCity(),t.bill.district=null==t.user.district?0:+t.user.district,t.chooseDistrict(),t.bill.ward=null==t.user.ward?0:t.user.ward,t.bill.address=t.user.address})).catch((function(t){console.log(t)}))},methods:{checkGetListProduct:function(){var t=this;(0,o.go)().then((function(e){Array.isArray(e)?t.listProduct=e:t.listProduct=[],t.sumMoney()})).catch((function(t){console.log(t.response.data)}))},sumMoney:function(){var t=this;this.totalBill=0,this.listProduct.forEach((function(e){t.totalBill+=e.totalPrice})),this.totalBill>7e5&&(this.feeShip=0),this.totalBillPay=this.totalBill+this.feeShip},toMoney:function(t){var e=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"});return e.format(t)},chooseCity:function(){var t=this;this.listDistrict=[],this.listWard=[],this.bill.district=0,this.bill.ward=0;var e={province_id:this.bill.city};e=JSON.stringify(e),(0,r._h)(e).then((function(e){t.listDistrict=e})).catch((function(t){console.log(t)}))},chooseDistrict:function(){var t=this;this.listWard=[],this.bill.ward=0;var e={district_id:this.bill.district};e=JSON.stringify(e),(0,r.ih)(e).then((function(e){t.listWard=e})).catch((function(t){console.log(t)}))},chooseWard:function(){},choosePay:function(){this.bill.pay=1},chooseVNPay:function(){this.bill.pay=2},ActionPayMent:function(){var t=this,e=this,n=0==this.bill.city||0==this.bill.district||0==this.bill.ward||""==this.bill.address;if(n)this.$swal("Yêu cầu","Vui lòng nhập đầy đủ địa chỉ","error").then((function(){}));else if(this.bill.pay){var i=document.getElementById("city"),a=i.options[i.selectedIndex].text,s=document.getElementById("district"),o=s.options[s.selectedIndex].text,r=document.getElementById("ward"),c=r.options[r.selectedIndex].text,u=this.bill.address+" - "+c+" - "+o+" - "+a;console.log(u),this.bill.addressDetail=u;var d=JSON.stringify(this.bill);console.log(d),(0,l.p7)(d).then((function(n){t.$root.$refs.userHeader.totalItemByCart(),e.$swal("Thành công",n.data,"success").then((function(){e.$router.push("/hoan-thanh-dat-hang")}))})).catch((function(t){e.$swal("Lỗi",t.response.data.data,"error")}))}else this.$swal("Yêu cầu","Vui lòng chọn phương thức thành toán","error").then((function(){}))}}},d=u,h=n(43736),p=(0,h.Z)(d,i,a,!1,null,"5064faf9",null),v=p.exports},61396:function(t,e,n){n.d(e,{Z:function(){return l}});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"container"},[n("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[n("el-step",{attrs:{title:"Giỏ hàng"}}),n("el-step",{attrs:{title:"Đặt hàng"}}),n("el-step",{attrs:{title:"Hoàn tất"}})],1)],1)])},a=[],s=(n(9653),{props:{activeValue:Number},data:function(){return{active:this.activeValue}}}),o=s,r=n(43736),c=(0,r.Z)(o,i,a,!1,null,"d64159e6",null),l=c.exports},30403:function(t,e,n){n.d(e,{_h:function(){return s},hw:function(){return a},ih:function(){return o}});n(41539);var i=n(26166);function a(){return new Promise((function(t,e){var n={method:"get",url:"https://online-gateway.ghn.vn/shiip/public-api/master-data/province",headers:{"Content-Type":"application/json",token:"f3c6e338-c3a8-11ec-9bdc-f620c30e1b62"}};i(n).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function s(t){return new Promise((function(e,n){var a={method:"post",url:"https://online-gateway.ghn.vn/shiip/public-api/master-data/district",headers:{"Content-Type":"application/json",token:"f3c6e338-c3a8-11ec-9bdc-f620c30e1b62"},data:t};i(a).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function o(t){return new Promise((function(e,n){var a={method:"post",url:"https://online-gateway.ghn.vn/shiip/public-api/master-data/ward?district_id",headers:{"Content-Type":"application/json",token:"f3c6e338-c3a8-11ec-9bdc-f620c30e1b62"},data:t};i(a).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}},69409:function(t,e,n){n.d(e,{Ne:function(){return c},PZ:function(){return u},Wx:function(){return h},XE:function(){return d},cR:function(){return r},p7:function(){return o},ul:function(){return p},zA:function(){return l}});n(41539);var i=n(31223),a=n(26166),s=(0,i.X)();function o(t){return new Promise((function(e,n){var i={method:"post",url:s+"/api/v3/user/bill",headers:{"Content-Type":"application/json"},data:t};a(i).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function r(t,e){return new Promise((function(n,i){var o={method:"get",url:s+"/api/v3/user/bill/status/"+t+"/?page="+e,headers:{"Content-Type":"application/json"}};a(o).then((function(t){n(t.data.data)})).catch((function(t){i(t)}))}))}function c(t){return new Promise((function(e,n){var i={method:"get",url:s+"/api/v3/user/bill/total/"+t,headers:{"Content-Type":"application/json"}};a(i).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function l(t){return new Promise((function(e,n){var i={method:"put",url:s+"/api/v3/user/bill/cancel/"+t,headers:{"Content-Type":"application/json"}};a(i).then((function(t){e(t.data)})).catch((function(t){console.log(t),n(t)}))}))}function u(t){return new Promise((function(e,n){var i={method:"get",url:s+"/api/v3/user/bill/detail/"+t,headers:{"Content-Type":"application/json"}};a(i).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function d(t){return new Promise((function(e,n){var i={method:"post",url:s+"/api/v3/user/comment/review",headers:{"Content-Type":"application/json"},data:t};a(i).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function h(t){return new Promise((function(e,n){var i={method:"get",url:s+"/api/v3/user/bill/pay-now"+t,headers:{"Content-Type":"application/json"}};a(i).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function p(t){return new Promise((function(e,n){var i={method:"post",url:s+"/api/v3/user/bill/pay-now",headers:{"Content-Type":"application/json"},data:t};a(i).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}},90259:function(t,e,n){n.d(e,{g:function(){return r},n:function(){return o}});n(41539);var i=n(31223),a=n(26166),s=(0,i.X)();function o(){return new Promise((function(t,e){var n={method:"get",url:s+"/api/v3/user/detail",headers:{"Content-Type":"application/json"}};a(n).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function r(t){return new Promise((function(e,n){var i={method:"post",url:s+"/api/v3/user/detail",headers:{"Content-Type":"application/json"},data:t};a(i).then((function(t){e(t.data.data)})).catch((function(t){n(t.response.data)}))}))}}}]);
//# sourceMappingURL=520-legacy.0225437f.js.map