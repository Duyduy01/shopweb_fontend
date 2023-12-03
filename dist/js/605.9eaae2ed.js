"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[605],{33605:function(t,e,i){i.r(e),i.d(e,{default:function(){return I}});var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t._m(0),s("div",{staticClass:"container mt-5"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-7"},[s("div",{staticClass:"container-fluid"},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-6"},[s("div",{staticClass:"p-d-img-parent"},[s("img",{attrs:{src:t.product.img,alt:"",srcset:""}})])]),t._l(t.product.listImg,(function(t){return s("div",{key:t.id,staticClass:"col-6"},[s("div",{staticClass:"p-d-img-parent"},[s("img",{attrs:{src:t,alt:"",srcset:""}})])])}))],2)])]),s("div",{staticClass:"col-5"},[s("div",{staticClass:"list-product-detail"},[s("div",{staticClass:"product-header"},[s("div",{staticClass:"d-flex"},[s("h2",[t._v(t._s(t.productName))]),s("div",{staticClass:"ml-2"},[s("button",{attrs:{id:"love-product"},domProps:{innerHTML:t._s(t.favorite?t.like:t.dislike)},on:{click:t.favoriteProduct}})])]),s("div",[s("span",[t._v(t._s(t.product.productCode)+" ")]),t._v(" | "),s("span",[t._v("Đã bán: "+t._s(t.totalPay)+" ")]),t._v(" | "),s("span",[t._v("Đánh giá: "+t._s(t.totalRate)+" ")])]),s("div",[s("el-rate",{attrs:{disabled:"","show-score":"","text-color":"#ff9900","score-template":"{value} / 5"},model:{value:t.rating,callback:function(e){t.rating=e},expression:"rating"}})],1),s("div",{staticClass:"price-sell"},[0!=t.product.sale?s("div",{staticClass:"d-flex"},[s("h5",{staticStyle:{color:"black","text-decoration":"line-through"}},[t._v(" "+t._s(t.toMoney(t.product.priceSell/((100-t.product.sale)/100)))+" ")]),s("h5",{staticStyle:{color:"red"}},[t._v(" - "+t._s(t.toMoney(t.product.priceSell))+" (-"+t._s(t.product.sale)+")% ")])]):t._e(),0==t.product.sale?s("h5",{staticStyle:{color:"black"}},[t._v(" "+t._s(t.toMoney(t.product.priceSell))+" ")]):t._e()]),s("hr")]),s("div",{class:t.checkValidate?"product-content":""},[s("div",{staticClass:"product-color"},[t._m(1),s("div",{staticClass:"d-flex"},t._l(t.listColor,(function(e){return s("div",{key:e.id,staticClass:"content-color"},[s("div",{staticClass:"color"},[s("input",{attrs:{type:"radio",name:"check-color",id:"color-"+e.id,hidden:""},domProps:{value:e.id},on:{click:t.chooseColor}}),s("label",{staticClass:"check-color",attrs:{for:"color-"+e.id,"data-id":e.id}},[t._v(" "+t._s(e.description)+" ")])])])})),0)]),s("div",{staticClass:"product-color"},[t._m(2),s("div",{staticClass:"d-flex"},t._l(t.listSize,(function(e){return s("div",{key:e.id,staticClass:"content-size d-flex"},[s("div",{staticClass:"size"},[s("input",{attrs:{type:"radio",name:"check-size",id:"size-"+e.id,hidden:""},domProps:{value:e.id},on:{click:t.chooseSize}}),s("label",{staticClass:"check-size",attrs:{for:"size-"+e.id}},[t._v(" "+t._s(e.description)+" ")])])])})),0)]),s("div",{staticClass:"product-color"},[t._m(3),s("div",{staticClass:"d-flex"},[s("div",{staticClass:"content-size d-flex"},[s("div",{staticClass:"size"},[s("label",{staticClass:"check-size"},[t._v(" "+t._s(t.brandName)+" ")])])])])]),s("div",{staticClass:"product-color"},[t._m(4),s("div",{staticClass:"product-quantity"},[[s("el-input-number",{attrs:{"size:large":"",min:1,max:t.product.quantity},on:{change:t.handleQuantity},model:{value:t.cart.quantity,callback:function(e){t.$set(t.cart,"quantity",e)},expression:"cart.quantity"}}),s("div",[s("p",[s("span",[t._v(t._s(t.product.quantity))]),t._v(" sản phẩm có sẵn ")])])]],2)]),t.checkValidate?s("div",{staticClass:"messager"},[t._v(" Vui lòng chọn đủ thông tin ")]):t._e()]),s("hr"),s("div",{staticClass:"product-add-cart"},[s("div",{staticClass:"choose-size"},[s("a",{staticStyle:{"border-bottom":"1px solid rgba(120, 115, 115, 0.414)",cursor:"pointer","font-size":"15px"},on:{click:function(e){t.chooseModalSize=!0}}},[t._v(" Hướng dẫn chọn size ")])]),s("div",{staticClass:"info-other"},[s("div",{staticClass:"mt-4"},[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-check"}}),t._v(" Miễn phí vận chuyển Cho đơn hàng ")],1),s("div",[s("font-awesome-icon",{attrs:{icon:"fa-solid fa-check"}}),t._v(" Đổi trả miễn phí trong vòng 30 ngày kể từ ngày mua ")],1)]),s("div",{staticClass:"btn-add-cart"},[s("div",[s("el-button",{attrs:{type:"primary",plain:""},on:{click:t.addCart}},[t._v("Thêm vào giỏ hàng")])],1),s("div",[s("el-button",{attrs:{type:"primary",plain:""},on:{click:t.payNow}},[t._v("Mua ngay")])],1),s("div",[s("el-button",{attrs:{type:"primary",plain:""}},[t._v("Quay lại")])],1)])]),s("div",{staticClass:"foot"},[s("div",{staticClass:"foot-detail"},[s("el-collapse",[s("el-collapse-item",{attrs:{title:"Giới thiệu",name:"1"}},[s("div",{domProps:{innerHTML:t._s(t.description)}})]),s("el-collapse-item",{attrs:{title:"Mô tả",name:"2"}},[s("div",{domProps:{innerHTML:t._s(t.content)}})]),s("el-collapse-item",{attrs:{title:"Cách sử dụng",name:"3"}},[s("div",[t._v(" Giặt máy ở chế độ nhẹ, nhiệt độ thường. Không sử dụng hóa chất tẩy có chứa Clo. Phơi trong bóng mát. Sấy thùng, chế độ nhẹ nhàng. Là ở nhiệt độ trung bình 150 độ C. Giặt với sản phẩm cùng màu. Không là lên chi tiết trang trí. ")])])],1)],1)])])])])]),s("div",[s("Comment",{attrs:{productId:t.productId}})],1),s("el-dialog",{attrs:{top:"24vh",title:"Hướng dẫn chọn size",visible:t.chooseModalSize,width:"60%",height:"100vh"},on:{"update:visible":function(e){t.chooseModalSize=e}}},[s("div",{staticClass:"container text-center"},[s("img",{staticStyle:{"object-fit":"contain"},attrs:{src:i(45334),alt:"",srcset:"",width:"100%"}})])])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"m-banner"},[i("div",{staticClass:"m-banner-details"},[i("span")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h5",[t._v("Màu")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h5",[t._v("Kích cỡ")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h5",[t._v("Thương hiệu")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"title"},[i("h5",[t._v("Số lượng")])])}],c=i(31223),o=i(26166);let n=(0,c.X)();function l(t){return new Promise(((e,i)=>{var s={method:"get",url:n+"/api/v1/user/product-detail/"+t,headers:{"Content-Type":"application/json"}};o(s).then((function(t){e(t.data.data)})).catch((function(t){i(t)}))}))}function r(t){return new Promise(((e,i)=>{var s={method:"post",url:n+"/api/v1/user/product-detail",headers:{"Content-Type":"application/json"},data:t};o(s).then((function(t){e(t.data.data)})).catch((function(t){i(t)}))}))}function d(t){return new Promise(((e,i)=>{var s={method:"get",url:n+"/api/v1/user/comment"+t,headers:{"Content-Type":"application/json"}};o(s).then((function(t){e(t.data.data)})).catch((function(t){i(t)}))}))}var h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.getListComment.length>0?i("div",{staticClass:"container mt-4"},[i("hr"),t._m(0),i("hr"),t._l(t.getListComment,(function(e){return i("div",{key:e.id},[i("div",{staticClass:"cmt-username"},[i("div",[i("h5",[t._v(t._s(e.userName))])]),i("div",[i("span",[t._v(t._s(t.formatDate(e.cmtDatetime)))])])]),i("div",[i("div",{staticClass:"cmt-stars"},[i("el-rate",{attrs:{disabled:""},model:{value:e.stars,callback:function(i){t.$set(e,"stars",i)},expression:"cmt.stars"}})],1),i("div",{staticClass:"cmt-title"},[i("h6",[t._v(t._s(e.title))])]),i("div",{staticClass:"cmt-content"},[t._v(" "+t._s(e.context)+" ")])]),i("hr")])})),i("div",{staticClass:"col-12"},[i("div",{staticStyle:{width:"100%","text-align":"center"}},[i("el-pagination",{attrs:{background:"",layout:"prev, pager, next",total:t.comment.totalPages,"page-size":1},on:{"current-change":t.handleCurrentChange}})],1)])],2):t._e(),0==t.getListComment.length?i("div",{staticClass:"container mt-4"},[i("hr"),t._m(1),i("hr"),i("h6",[t._v("Chưa có đánh giá nào !")]),i("hr")]):t._e()])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",[t._v("Danh sách đánh giá")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h4",[t._v("Danh sách đánh giá")])])}],v=i(17133),p=i.n(v),m={props:["productId"],created(){this.callApiGetComment(1,3)},data(){return{listComment:[],comment:{}}},computed:{getListComment(){return this.listComment}},methods:{callApiGetComment(t,e){let i=`/${this.productId}?page=${t}&limit=${e}`;d(i).then((t=>{this.comment=t,this.listComment=t.content})).catch((t=>{console.log(t)}))},handleCurrentChange(t){this.callApiGetComment(t,3)},formatDate(t){if(null==t)return"Chưa nhận";let e=p()(String(t)).format("DD/MM/YYYY HH:mm:ss");return e}}},f=m,C=i(43736),_=(0,C.Z)(f,h,u,!1,null,"0c254404",null),g=_.exports,y=i(10928),k={props:["productId"],components:{Comment:g},data(){return{productName:"",product:{},listColor:[],listSize:[],choose:{productId:this.productId,sizeId:null,colorId:null},quantily:1,checkValidate:!1,cart:{productId:null,quantity:1,totalQuantity:null},favorite:!1,parentId:null,dislike:'<i class="far fa-heart"></i>',like:'<i class="fas fa-heart"></i>',totalRate:0,rating:0,totalPay:0,chooseModalSize:!1,brandName:"",content:"",description:""}},created(){window.scrollTo(0,0),l(this.productId).then((t=>{console.log(t),this.totalRate=t.totalRate,this.rating=t.rate,this.totalPay=t.totalPay,this.product=t,this.listColor=t.color,this.listSize=t.size,this.productName=t.productName,this.parentId=t.id,this.favorite=t.favorite,this.brandName=t.brandName,this.content=t.content,this.description=t.description}))},methods:{chooseSize(t){this.cart.quantity=1,this.checkValidate=!1;let e=t.path[0].checked?1:0;if(1==e){let e=t.path[1].childNodes[1],i=document.querySelectorAll(".check-size");i.forEach((t=>{t.classList.remove("active")})),e.classList.add("active");let s=t.path[0].value;this.choose.sizeId=s,this.afterClickColorAndSize()}},chooseColor(t){this.cart.quantity=1,this.checkValidate=!1;let e=t.path[0].checked?1:0;if(1==e){let e=t.path[1].childNodes[1],i=document.querySelectorAll(".check-color");i.forEach((t=>{t.classList.remove("active")})),e.classList.add("active");let s=t.path[0].value;this.choose.colorId=s,null!=this.choose.sizeId&&(this.choose.sizeId=null),this.afterClickColorAndSize()}},afterClickColorAndSize(){let t=JSON.stringify(this.choose);r(t).then((t=>{this.product=t[0],this.checkQuantity(t)})).catch((t=>{console.log(t.response.data)}))},checkQuantity(t){if(null!=this.choose.colorId&&null==this.choose.sizeId){let e=document.querySelectorAll(".check-size");e.forEach((t=>{t.classList.remove("active")})),t.forEach((t=>{let e="size-"+t.size.id,i=document.getElementById(e);if(i.checked=!1,0==t.quantity){i.disabled=!0;let t=i.parentElement.childNodes[1];t.classList.add("inactive")}else{i.disabled=!1;let t=i.parentElement.childNodes[1];t.classList.remove("inactive")}}))}else this.cart.productId=t[0].id,this.cart.totalQuantity=t[0].quantity},addCart(){if(null==this.choose.colorId||null==this.choose.sizeId)this.checkValidate=!0;else{if(this.$store.getters.CURRENT_USER){let t=JSON.stringify(this.cart);(0,y.Z5)(t).then((t=>{console.log(t),this.$root.$refs.userHeader.totalItemByCart()})).catch((t=>{console.log(t.response.data)}))}else this.$store.commit("SET_CART",this.cart),this.$root.$refs.userHeader.totalItemByCart();this.$swal("Thành công","Thêm vào giỏ hàng thành công","success").then((function(){}))}},payNow(){null==this.choose.colorId||null==this.choose.sizeId?this.checkValidate=!0:this.$router.push(`/dat-hang-ngay/san-pham/${this.cart.productId}/so-luong/${this.cart.quantity}`)},handleQuantity(t){console.log(t)},toMoney(t){var e=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"});return e.format(t)},async favoriteProduct(){let t=this.$root.$refs.userHeader.favoriteProductHeader(this.parentId);t.then((t=>{this.favorite=1!=t}))}}},z=k,b=(0,C.Z)(z,s,a,!1,null,"0b2f295e",null),I=b.exports},45334:function(t,e,i){t.exports=i.p+"img/change-size.7d656c42.png"}}]);
//# sourceMappingURL=605.9eaae2ed.js.map