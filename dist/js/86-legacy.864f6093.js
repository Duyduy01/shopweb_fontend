"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[86],{58086:function(t,e,i){i.r(e),i.d(e,{default:function(){return h}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"mt-5"},[i("HeaderCart",{attrs:{activeValue:t.activeValue}}),i("div",{staticClass:"container mt-5"},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-8 product"},[t._m(0),i("div",[i("table",{staticClass:"table table secondary-5:border text-center"},[t._m(1),t.listProduct.length>=0?i("tbody",t._l(t.getListProduct,(function(e,n){return i("tr",{key:e.id,class:e.totalQuantity<e.quantity?"noQuantity":""},[i("td",[t._v(t._s(n+1))]),i("td",{staticClass:"d-flex"},[i("div",[i("router-link",{attrs:{to:null==e.parentId?"/chi-tiet-san-pham/"+e.id:"/chi-tiet-san-pham/"+e.parentId}},[i("img",{staticClass:"product-img",attrs:{src:e.img,alt:""}})])],1),i("div",{staticClass:"p-4"},[i("router-link",{staticStyle:{color:"black"},attrs:{to:null==e.parentId?"/chi-tiet-san-pham/"+e.id:"/chi-tiet-san-pham/"+e.parentId}},[t._v(" "+t._s(null==e.parentId?e.productName:e.parentName)+" ")]),i("div",{staticClass:"d-flex"},t._l(e.speciality,(function(e){return i("div",{key:e.id},[i("div",[i("button",{staticClass:"product-speciality"},[t._v(" "+t._s(e.description)+" ")])])])})),0)],1)]),i("td",[t._v(t._s(t.toMoney(e.priceSell)))]),i("td",[[i("el-input-number",{attrs:{"size:large":"",min:1,max:e.totalQuantity<e.quantity?100:e.totalQuantity,disabled:0==e.totalQuantity},on:{change:function(i){return t.handleQuantity(e)}},model:{value:e.quantity,callback:function(i){t.$set(e,"quantity",i)},expression:"td.quantity"}}),i("div",[i("p",[i("span",[t._v(t._s(e.totalQuantity))]),t._v(" sản phẩm có sẵn ")])])]],2),i("td",{attrs:{id:"total"+e.id}},[t._v(t._s(t.toMoney(e.totalPrice)))]),i("td",[i("div",{on:{click:function(i){return t.deleteProduct(e)}}},[i("font-awesome-icon",{attrs:{icon:"fa-solid fa-xmark"}})],1)])])})),0):t._e(),0==t.listProduct.length?i("tbody",[i("tr",[i("th"),i("th"),i("th",[t._v(t._s(t.errorMessage))]),i("th"),i("th"),i("th")])]):t._e()])])]),i("div",{staticClass:"col-4"},[i("div",{staticClass:"product-bill"},[t._m(2),i("div",{staticClass:"bill-content"},[i("div",{staticClass:"container"},[i("div",{staticClass:"row text-center pl-2 pr-2 pb-4"},[t._m(3),i("div",{staticClass:"col-6 mt-2"},[i("h6",[t._v(t._s(t.toMoney(this.totalBill)))])]),t._m(4),i("div",{staticClass:"col-6 mt-2"},[i("h6",[t._v(t._s(t.toMoney(this.totalBillPay)))])]),i("div",{staticClass:"col-12 mt-2"},[i("button",{staticClass:"btn btn-outline-dark w-100 button-cart",attrs:{type:"button"},on:{click:function(e){return t.toBill()}}},[t._v(" Đặt hàng ")])]),i("div",{staticClass:"col-12 mt-2"},[i("button",{staticClass:"btn btn-outline-dark w-100 button-cart",attrs:{type:"button"},on:{click:function(e){return t.toHome()}}},[t._v(" Tiếp tục mua hàng ")])])]),i("hr")]),t._m(5),t._m(6)])])])])])],1)},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-3"},[i("h4",{staticClass:"text-center"},[t._v("Danh sách sản phẩm")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("th",[t._v("Stt")]),i("th",[t._v("Sản phẩm")]),i("th",[t._v("Giá")]),i("th",[t._v("Số Lượng")]),i("th",[t._v("Tổng")]),i("th")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"p-3"},[i("h4",{staticClass:"text-center"},[t._v("Đơn hàng")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-6 mt-2"},[i("h6",[t._v("Giá gốc:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"col-6 mt-2"},[i("h6",[t._v("Tổng tiền thanh toán:")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h6",{staticClass:"text-center"},[t._v(" Áp dụng mã giảm giá, C-point tại bước tiếp theo ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"text-center"},[i("div",[i("h6",[t._v("Chúng tôi chấp nhận thanh toán:")])]),i("img",{attrs:{src:"https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2Fpayment-note.svg?alt=media",alt:""}})])}],a=(i(38862),i(57327),i(41539),i(54747),i(61396)),r=i(10928),o={data:function(){return{activeValue:0,listProduct:[],totalBill:0,feeShip:0,totalBillPay:0,errorMessage:"Chưa có sản phẩm nào !"}},components:{HeaderCart:a.Z},computed:{getListProduct:function(){return console.log(this.listProduct),this.listProduct}},created:function(){this.checkGetListProduct(),window.scrollTo(0,0)},methods:{checkGetListProduct:function(){var t=this;if(this.$store.getters.CURRENT_USER)(0,r.go)().then((function(e){Array.isArray(e)?t.listProduct=e:t.listProduct=[],t.sumMoney()})).catch((function(t){console.log(t.response.data)}));else{var e=localStorage.getItem("CART"),i={listProduct:JSON.parse(e)};i=JSON.stringify(i),(0,r.lC)(i).then((function(e){t.listProduct=e,t.sumMoney()})).catch((function(t){console.log(t.response.data)}))}},handleQuantity:function(t){var e=this;t.totalPrice=+t.quantity*+t.priceSell;var i="total"+t.id;if(document.getElementById(i).innerHTML=this.toMoney(t.totalPrice),this.sumMoney(),this.$store.getters.CURRENT_USER){var n={productId:t.id,quantity:t.quantity,billId:t.billId};n=JSON.stringify(n),(0,r.R)(n).then((function(t){console.log(t),e.$root.$refs.userHeader.totalItemByCart()})).catch((function(t){console.log(t)}))}else this.$store.commit("CHANGE_QUANTITY",t),this.$root.$refs.userHeader.totalItemByCart()},deleteProduct:function(t){var e=this;if(this.$store.getters.CURRENT_USER){var i=this,n={productId:t.id,quantity:t.quantity,billId:t.billId};n=JSON.stringify(n),(0,r.$9)(n).then((function(n){console.log(n),i.listProduct=i.listProduct.filter((function(e){return e.id!=t.id})),e.sumMoney(),e.$root.$refs.userHeader.totalItemByCart()})).catch((function(t){console.log(t)}))}else this.$store.commit("DELETE_PRODUCT_CART",t.id),this.listProduct=this.listProduct.filter((function(e){return e.id!=t.id})),this.$root.$refs.userHeader.totalItemByCart(),this.sumMoney()},sumMoney:function(){var t=this;this.totalBill=0,this.listProduct.forEach((function(e){t.totalBill+=e.totalPrice})),this.totalBill>5e5&&(this.feeShip=0),this.totalBillPay=this.totalBill+this.feeShip},toMoney:function(t){var e=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"});return e.format(t)},toBill:function(){var t=this.listProduct.filter((function(t){return t.totalQuantity<t.quantity}));t&&t.length>0?this.$swal("Xin lỗi","Một số sản phẩm trong giỏ hàng hiện tại đang hết hàng. Quý khách vui lòng chọn sản phẩm khác để thay thế","error"):this.listProduct&&0==this.listProduct.length?this.$swal("Chưa có sản phẩm trong giỏ hàng","Quý khách vui lòng chọn sản phẩm","error"):(this.$store.getters.CURRENT_USER||this.$store.commit("SET_PATH","/dat-hang"),this.$router.push("/dat-hang"))},toHome:function(){this.$router.push("/")}}},l=o,c=i(43736),u=(0,c.Z)(l,n,s,!1,null,"68053fee",null),h=u.exports},61396:function(t,e,i){i.d(e,{Z:function(){return c}});var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[i("el-step",{attrs:{title:"Giỏ hàng"}}),i("el-step",{attrs:{title:"Đặt hàng"}}),i("el-step",{attrs:{title:"Hoàn tất"}})],1)],1)])},s=[],a=(i(9653),{props:{activeValue:Number},data:function(){return{active:this.activeValue}}}),r=a,o=i(43736),l=(0,o.Z)(r,n,s,!1,null,"d64159e6",null),c=l.exports}}]);
//# sourceMappingURL=86-legacy.864f6093.js.map