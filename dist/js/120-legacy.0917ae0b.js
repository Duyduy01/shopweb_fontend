"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[120],{22120:function(t,e,n){n.r(e),n.d(e,{default:function(){return d}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"product-header"},[n("h1",[t._v("Thêm chi tiết cho sự kiện")]),n("div",{staticClass:"m-admin-product-action-add"},[n("el-button",{attrs:{type:"primary",plain:""},on:{click:function(e){t.dialogFormVisible=!0}}},[t._v("Tiếp tục ")])],1)]),n("div",{staticClass:"between:flex bottom:margin-3"},[n("div",{staticClass:"center:flex-items"},[n("span",{staticClass:"right:margin-1"},[t._v("Hiển thị")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentEntries,expression:"currentEntries"}],staticClass:"select",staticStyle:{width:"5rem"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentEntries=e.target.multiple?n:n[0]},t.paginateEntries]}},t._l(t.showEntries,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0),n("span",{staticClass:"left:margin-1"},[t._v("mục")])]),n("div",{staticClass:"end:flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"input px:width-25",attrs:{type:"search",placeholder:"Tìm kiếm tại đấy..."},domProps:{value:t.searchInput},on:{keyup:t.searchEvent,input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})])]),n("div",[n("table",{staticClass:"table table:border secondary-5:border text-center"},[n("thead",[n("tr",t._l(t.tableHeader,(function(e){return n("th",{key:e.name},[n("div",{staticClass:"between:flex center:items"},[n("span",[t._v(t._s(e.text))]),n("span",{on:{click:function(n){return n.preventDefault(),t.sortByColumn(e.name)}}},[null==t.check?n("div",[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-sort"}})],1):t._e(),0==t.check?n("div",[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-sort-down"}})],1):t._e(),t.check?n("div",[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-sort-up"}})],1):t._e()])])])})),0),n("tr",[n("td"),n("td"),n("td",[n("input",{directives:[{name:"model",rawName:"v-model",value:t.col.productName,expression:"col.productName"}],staticClass:"input",attrs:{type:"search",placeholder:"Lọc tên sản phẩm...."},domProps:{value:t.col.productName},on:{keyup:t.filterByColumn,input:function(e){e.target.composing||t.$set(t.col,"productName",e.target.value)}}})]),n("td",[n("select",{directives:[{name:"model",rawName:"v-model",value:t.col.productCode,expression:"col.productCode"}],staticClass:"select",attrs:{name:"",id:""},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.col,"productCode",e.target.multiple?n:n[0])},t.filterByColumn]}},[n("option",{attrs:{value:""}},[t._v("--Lọc mã sản phẩm --")]),t._l(t.uniqColumData("productCode"),(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])}))],2)]),n("td"),n("td"),n("td"),n("td")])]),n("tbody",t._l(t.tableData,(function(e,a){return n("tr",{key:e.id},[n("td",[n("el-checkbox",{attrs:{label:e.checkSelect?"Đã chọn":"Chưa Chọn",border:""},on:{change:function(n){return t.selectProductToReceipt(e)}},model:{value:e.checkSelect,callback:function(n){t.$set(e,"checkSelect",n)},expression:"td.checkSelect"}})],1),n("td",[t._v(t._s(a+1))]),n("td",[t._v(t._s(e.productName))]),n("td",[t._v(t._s(e.productCode))]),n("td",[t._v(t._s(t.toMoney(e.priceSell)))]),n("td",[t._v(t._s(t.toMoney(e.price)))]),n("td",[n("img",{attrs:{src:e.img,alt:"",width:"100px",height:"100px"}})]),n("td",[t._v(t._s(e.quantity))])])})),0)])]),n("div",{staticClass:"between:flex y:margin-3"},[n("div",[t._v(" Hiển thị từ "+t._s(t.showInfo.from)+" đến "+t._s(t.showInfo.to)+" / "+t._s(t.showInfo.of)+" ")]),n("div",{staticClass:"end:flex"},[n("ul",{staticClass:"pagination:nav"},[n("li",{class:["nav-item",{disabled:1===t.currentPage}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage=1,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-left"}})],1)]),n("li",{class:["nav-item",{disabled:1===t.currentPage}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage<1?t.currentPage=1:t.currentPage-=1,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-left"}})],1)]),t._l(t.showPagination,(function(e){return n("li",{key:e,class:["nav-item",{ellipsis:"..."===e,active:e===t.currentPage}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.paginateEvent(e)}}},[t._v(t._s(e))])])})),n("li",{class:["nav-item",{disabled:t.currentPage===t.allPages}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage>t.allPages?t.currentPage=t.allPages:t.currentPage+=1,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-right"}})],1)]),n("li",{class:["nav-item",{disabled:t.currentPage===t.allPages}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage=t.allPages,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-right"}})],1)])],2)])]),n("el-dialog",{attrs:{title:"Thông tin chi tiết chiến dịch",visible:t.dialogFormVisible,width:"90%",height:"100vh",top:"0"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-12"},[n("label",{attrs:{for:""}},[t._v("Phần chăng giảm giá")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.campaignDetail.discount,expression:"campaignDetail.discount"}],staticClass:"form-control",attrs:{name:"",id:""},on:{change:function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.$set(t.campaignDetail,"discount",e.target.multiple?n:n[0])}}},[n("option",{attrs:{value:"",selected:""}},[t._v("-- Lựa Chọn --")]),n("option",{attrs:{value:"10"}},[t._v("10%")]),n("option",{attrs:{value:"15"}},[t._v("15%")]),n("option",{attrs:{value:"20"}},[t._v("20%")]),n("option",{attrs:{value:"30"}},[t._v("30%")]),n("option",{attrs:{value:"50"}},[t._v("50%")]),n("option",{attrs:{value:"70"}},[t._v("70%")])]),t.submitted&&""==t.campaignDetail.discount?n("div",{staticClass:"error"},[t._v(" Vui lòng chọn phần trăm giảm giá ")]):t._e()])])]),n("div",{staticClass:"container-fluid"},[n("div",{staticClass:"text-center mt-2 header-modal-customer"},[n("h2",[t._v("Danh sách sản phẩm đã chọn")])]),n("div",{staticClass:"m-product-cart-context table-wrapper-scroll-y my-custom-scrollbar",staticStyle:{height:"50vh"}},[n("table",{staticClass:"table table:border secondary-5:border text-center"},[n("thead",[n("th",[t._v("Stt")]),n("th",[t._v("Tên sản phẩm")]),n("th",[t._v("Mã sản phẩm")]),n("th",[t._v("Ảnh")]),n("th",[t._v("Giá Nhập")])]),n("tbody",t._l(t.listProductSelect,(function(e,a){return n("tr",{key:e.id},[n("td",[t._v(t._s(a+1))]),n("td",[t._v(t._s(e.productName))]),n("td",[t._v(t._s(e.productCode))]),n("td",[n("img",{attrs:{src:e.img,alt:"",width:"100px",height:"100px"}})]),n("td",[t._v(t._s(t.toMoney(e.price)))]),n("td",[t._v(t._s(e.quantity))])])})),0)])])]),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button"},on:{click:t.addCampaignDetail}},[t._v(" Áp dụng ")]),n("button",{staticClass:"btn btn-outline-primary ml-2",on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" Quay lại ")])])])],1)},i=[],r=(n(41539),n(33948),n(74916),n(64765),n(69720),n(57327),n(21249),n(38862),n(75587)),s=n(89835),c={name:"AdminCampaignDetailAdd",components:{},props:["campId"],data:function(){return{columns:[{name:"checkSelect",text:"Chọn"},{name:"stt",text:"Stt"},{name:"productName",text:"Tên sản phẩm"},{name:"productCode",text:"Mã sản phẩm"},{name:"priceSell",text:"Giá bán"},{name:"price",text:"Giá nhập"},{name:"img",text:"Ảnh"},{name:"quantity",text:"Kho"}],entries:[],showEntries:[5,10,15,25,50,72,100],currentEntries:10,filteredEntries:[],currentPage:1,allPages:1,searchInput:"",searchEntries:[],col:{checkSelect:!1,id:"",productName:"",productCode:"",priceSell:"",price:"",img:"",quantity:""},sortcol:{checkSelect:!1,id:"",productName:"",productCode:"",priceSell:"",price:"",img:"",quantity:""},check:null,listProductSelect:[],listUserManu:[],dialogFormVisible:!1,totalReceipt:0,campaignDetail:{campaignId:this.campId,discount:"",listProductSelect:[]},submitted:!1}},watch:{},computed:{showInfo:function(){return r.uh.show(this.getCurrentEntries(),this.currentPage,this.currentEntries)},showPagination:function(){return r.uh.pagination(this.allPages,this.currentPage,2)},tableHeader:function(){return this.columns},tableData:function(){return this.filteredEntries},sumTotalReceiptComputed:function(){return this.totalReceipt}},created:function(){var t=this;(0,s.bn)().then((function(e){t.entries=e,t.paginateData(t.entries)}))},methods:{paginateEntries:function(){this.searchInput.length>0?(this.searchEntries=r.uh.search(this.entries,this.searchInput),this.paginateData(this.searchEntries)):(this.searchEntries=[],this.paginateData(this.entries),this.col={checkSelect:!1,id:"",productName:"",productCode:"",priceSell:"",price:"",img:"",quantity:""})},paginateEvent:function(t){this.currentPage=t,this.paginateEntries()},searchEvent:function(){this.currentPage=1,this.paginateEntries()},paginateData:function(t){this.filteredEntries=r.uh.paginate(t,this.currentPage,this.currentEntries),this.allPages=r.uh.pages(t,this.currentEntries)},getCurrentEntries:function(){return this.searchInput.length<=0?this.entries:this.searchEntries},uniqColumData:function(t){return r.uh.unique(this.getCurrentEntries(),t)},filterByColumn:function(){var t=r.T4.removeBy(this.col,""),e=this.getCurrentEntries();Object.entries(t).length>=1&&(e=r.uh.filtered(this.getCurrentEntries(),t)),this.paginateData(e)},sortByColumn:function(t){this.col={id:"",productName:"",productCode:"",priceSell:"",description:"",img:"",active:"",quantity:""};var e=this.getCurrentEntries(),n=this.sortcol[t];""===n?(this.sortcol[t]="asc",e=r.uh.sorted(this.getCurrentEntries(),t,"asc"),this.check=!1):"asc"===n?(this.sortcol[t]="desc",e=r.uh.sorted(this.getCurrentEntries(),t,"desc"),this.check=!0):"desc"===n&&(this.sortcol[t]="",this.check=null),this.paginateData(e)},toMoney:function(t){var e=new Intl.NumberFormat("it-IT",{style:"currency",currency:"VND"});return e.format(t)},selectProductToReceipt:function(t){t["total"]=t.price,t["quantitySelect"]=1,t.checkSelect?this.listProductSelect.push(t):this.listProductSelect=this.listProductSelect.filter((function(e){return e!=t}))},addCampaignDetail:function(){var t=this;if(0==t.listProductSelect.length)t.$swal("","Vui lòng chọn sản phẩm cần nhập","error"),this.dialogFormVisible=!1;else{if(""==this.campaignDetail.discount)return void(this.submitted=!0);this.campaignDetail.listProductSelect=this.listProductSelect.map((function(t){return t.id}));var e=JSON.stringify(this.campaignDetail);(0,s.Ot)(e).then((function(e){t.dialogFormVisible=!1,t.$swal("Thành công",e,"success").then((function(){t.$router.push("/admin/campaign/".concat(t.campId,"/detail"))}))})).catch((function(t){console.log(t)}))}}},mounted:function(){}},o=c,l=n(43736),u=(0,l.Z)(o,a,i,!1,null,"50e30d82",null),d=u.exports},89835:function(t,e,n){n.d(e,{Ec:function(){return o},Ot:function(){return l},bn:function(){return u},ds:function(){return d},nt:function(){return s},yJ:function(){return c}});n(41539);var a=n(31223),i=n(26166),r=(0,a.X)();function s(){return new Promise((function(t,e){var n={method:"get",url:r+"/api/v1/admin/campaign",headers:{"Content-Type":"application/json"}};i(n).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function c(t){return new Promise((function(e,n){var a={method:"get",url:r+"/api/v1/admin/campaign/detail/"+t,headers:{"Content-Type":"application/json"}};i(a).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function o(t){return new Promise((function(e,n){var a={method:"post",url:r+"/api/v1/admin/campaign/add",headers:{"Content-Type":"application/json"},data:t};i(a).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function l(t){return new Promise((function(e,n){var a={method:"post",url:r+"/api/v1/admin/campaign/detail/add",headers:{"Content-Type":"application/json"},data:t};i(a).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}function u(){return new Promise((function(t,e){var n={method:"get",url:r+"/api/v1/admin/campaign/detail/product",headers:{"Content-Type":"application/json"}};i(n).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function d(t){return new Promise((function(e,n){var a={method:"get",url:r+"/api/v1/admin/campaign/finish?campaignId="+t,headers:{"Content-Type":"application/json"}};i(a).then((function(t){e(t.data.data)})).catch((function(t){n(t)}))}))}}}]);
//# sourceMappingURL=120-legacy.0917ae0b.js.map