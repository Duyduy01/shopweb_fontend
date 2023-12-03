"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[806],{94806:function(t,n,e){e.r(n),e.d(n,{default:function(){return p}});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("AdminHeaderCampaign",{attrs:{activeValue:1}}),e("div",{staticClass:"product-header"},[e("h1",[t._v("Danh sách chi tiết sự kiện")]),e("div",{staticClass:"m-admin-product-action-add"},[e("router-link",{attrs:{to:"/admin/campaign/"+t.campId+"/detail/add"}},[e("button",{staticClass:"btn btn-outline-primary"},[t._v(" Thêm chi tiết sự kiện ")])])],1)]),e("div",{staticClass:"between:flex bottom:margin-3"},[e("div",{staticClass:"center:flex-items"},[e("span",{staticClass:"right:margin-1"},[t._v("Hiển thị")]),e("select",{directives:[{name:"model",rawName:"v-model",value:t.currentEntries,expression:"currentEntries"}],staticClass:"select",staticStyle:{width:"5rem"},on:{change:[function(n){var e=Array.prototype.filter.call(n.target.options,(function(t){return t.selected})).map((function(t){var n="_value"in t?t._value:t.value;return n}));t.currentEntries=n.target.multiple?e:e[0]},t.paginateEntries]}},t._l(t.showEntries,(function(n){return e("option",{key:n,domProps:{value:n}},[t._v(" "+t._s(n)+" ")])})),0),e("span",{staticClass:"left:margin-1"},[t._v("mục")])]),e("div",{staticClass:"end:flex"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"input px:width-25",attrs:{type:"search",placeholder:"Tìm kiếm tại đấy..."},domProps:{value:t.searchInput},on:{keyup:t.searchEvent,input:function(n){n.target.composing||(t.searchInput=n.target.value)}}})])]),e("div",[e("table",{staticClass:"table table:border secondary-5:border"},[e("thead",[e("tr",t._l(t.tableHeader,(function(n){return e("th",{key:n.name},[e("div",{staticClass:"between:flex center:items"},[e("span",[t._v(t._s(n.text))]),e("span",{on:{click:function(e){return e.preventDefault(),t.sortByColumn(n.name)}}},[null==t.check?e("div",[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-sort"}})],1):t._e(),0==t.check?e("div",[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-sort-down"}})],1):t._e(),t.check?e("div",[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-sort-up"}})],1):t._e()])])])})),0)]),e("tbody",t._l(t.tableData,(function(n,a){return e("tr",{key:n.id},[e("td",[t._v(t._s(a+1))]),e("td",t._l(n.productName,(function(n){return e("div",{key:n.id},[e("div",{staticClass:"text-sm-left"},[t._v(t._s(n))])])})),0),e("td",[t._v(t._s(n.discount)+"%")]),e("td",[e("div",{staticClass:"action"},[e("div",{staticClass:"m-product-cart-button-clear"},[e("button",{staticClass:"clear-test",attrs:{type:"button",id:"m-into-choose-product"}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-pen-to-square"}})],1)])])])])})),0)])]),e("div",{staticClass:"between:flex y:margin-3"},[e("div",[t._v(" Hiển thị từ "+t._s(t.showInfo.from)+" đến "+t._s(t.showInfo.to)+" / "+t._s(t.showInfo.of)+" ")]),e("div",{staticClass:"end:flex"},[e("ul",{staticClass:"pagination:nav"},[e("li",{class:["nav-item",{disabled:1===t.currentPage}]},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.currentPage=1,t.paginateEntries()}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-left"}})],1)]),e("li",{class:["nav-item",{disabled:1===t.currentPage}]},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.currentPage<1?t.currentPage=1:t.currentPage-=1,t.paginateEntries()}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-left"}})],1)]),t._l(t.showPagination,(function(n){return e("li",{key:n,class:["nav-item",{ellipsis:"..."===n,active:n===t.currentPage}]},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.paginateEvent(n)}}},[t._v(t._s(n))])])})),e("li",{class:["nav-item",{disabled:t.currentPage===t.allPages}]},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.currentPage>t.allPages?t.currentPage=t.allPages:t.currentPage+=1,t.paginateEntries()}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-right"}})],1)]),e("li",{class:["nav-item",{disabled:t.currentPage===t.allPages}]},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(n){n.preventDefault(),t.currentPage=t.allPages,t.paginateEntries()}}},[e("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-right"}})],1)])],2)])]),e("div",{staticClass:"container w-100 text-center"},[e("button",{staticClass:"btn btn-outline-dark",attrs:{type:"button"},on:{click:t.countinueCampaign}},[t._v(" Tiếp tục ")])])],1)},i=[],s=(e(41539),e(33948),e(74916),e(64765),e(69720),e(75587)),r=e(89835),c=e(17133),o=e.n(c),u=e(70297),l={name:"admin-campaign-detail-add",components:{AdminHeaderCampaign:u.Z},props:["campId"],data:function(){return{columns:[{name:"id",text:"ID"},{name:"productName",text:"Sản phẩm"},{name:"discount",text:"Phần trăm giảm giá"},{name:"#",text:"#"}],entries:[],showEntries:[5,10,15,25,50,72,100],currentEntries:10,filteredEntries:[],currentPage:1,allPages:1,searchInput:"",searchEntries:[],col:{id:"",productName:"",discount:""},sortcol:{id:"",productName:"",discount:""},check:null,listCampaignDetail:[]}},computed:{showInfo:function(){return s.uh.show(this.getCurrentEntries(),this.currentPage,this.currentEntries)},showPagination:function(){return s.uh.pagination(this.allPages,this.currentPage,2)},tableHeader:function(){return this.columns},tableData:function(){return this.filteredEntries}},created:function(){var t=this;(0,r.yJ)(this.campId).then((function(n){console.log(n),t.entries=n,t.paginateData(t.entries)}))},methods:{paginateEntries:function(){this.searchInput.length>0?(this.searchEntries=s.uh.search(this.entries,this.searchInput),this.paginateData(this.searchEntries)):(this.searchEntries=[],this.paginateData(this.entries),this.col={id:"",productName:"",discount:""})},paginateEvent:function(t){this.currentPage=t,this.paginateEntries()},searchEvent:function(){this.currentPage=1,this.paginateEntries()},paginateData:function(t){this.filteredEntries=s.uh.paginate(t,this.currentPage,this.currentEntries),this.allPages=s.uh.pages(t,this.currentEntries)},getCurrentEntries:function(){return this.searchInput.length<=0?this.entries:this.searchEntries},uniqColumData:function(t){return s.uh.unique(this.getCurrentEntries(),t)},filterByColumn:function(){var t=s.T4.removeBy(this.col,""),n=this.getCurrentEntries();Object.entries(t).length>=1&&(n=s.uh.filtered(this.getCurrentEntries(),t)),this.paginateData(n)},sortByColumn:function(t){this.col={id:"",productName:"",discount:""};var n=this.getCurrentEntries(),e=this.sortcol[t];""===e?(this.sortcol[t]="asc",n=s.uh.sorted(this.getCurrentEntries(),t,"asc"),this.check=!1):"asc"===e?(this.sortcol[t]="desc",n=s.uh.sorted(this.getCurrentEntries(),t,"desc"),this.check=!0):"desc"===e&&(this.sortcol[t]="",this.check=null),this.paginateData(n)},formatDate:function(t){if(null==t)return"Chưa nhận";var n=o()(String(t)).format("DD/MM/YYYY");return n},countinueCampaign:function(){var t=this,n=this;0==this.tableData.length?this.$swal("Thất bại","Vui lòng tạo chi tiết chiến dịch","error"):this.$swal({title:"Bạn có chắc chắn muốn tạo chiến dịch không ?",text:"",type:"question",icon:"question",showCancelButton:!0,confirmButtonText:"Đồng ý",cancelButtonText:"Quay lại",closeOnConfirm:!1,closeOnCancel:!1}).then((function(e){e.isConfirmed&&(0,r.ds)(t.campId).then((function(t){console.log(t),n.$swal("Thành công",t,"success").then((function(){n.$router.push("/admin/campaign/finish")}))})).catch((function(t){console.log(t)}))}))}},mounted:function(){}},h=l,d=e(43736),f=(0,d.Z)(h,a,i,!1,null,"54d759b2",null),p=f.exports},70297:function(t,n,e){e.d(n,{Z:function(){return u}});var a=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"mt-3"},[e("div",{staticClass:"container"},[e("el-steps",{attrs:{active:t.active,"finish-status":"success"}},[e("el-step",{attrs:{title:"Tạo sự kiện"}}),e("el-step",{attrs:{title:"Thêm thêm chi tiết sự kiện"}}),e("el-step",{attrs:{title:"Hoàn tất"}})],1)],1)])},i=[],s=(e(9653),{props:{activeValue:Number},data:function(){return{active:this.activeValue}}}),r=s,c=e(43736),o=(0,c.Z)(r,a,i,!1,null,"40d5dbbe",null),u=o.exports},89835:function(t,n,e){e.d(n,{Ec:function(){return o},Ot:function(){return u},bn:function(){return l},ds:function(){return h},nt:function(){return r},yJ:function(){return c}});e(41539);var a=e(31223),i=e(26166),s=(0,a.X)();function r(){return new Promise((function(t,n){var e={method:"get",url:s+"/api/v1/admin/campaign",headers:{"Content-Type":"application/json"}};i(e).then((function(n){t(n.data.data)})).catch((function(t){n(t)}))}))}function c(t){return new Promise((function(n,e){var a={method:"get",url:s+"/api/v1/admin/campaign/detail/"+t,headers:{"Content-Type":"application/json"}};i(a).then((function(t){n(t.data.data)})).catch((function(t){e(t)}))}))}function o(t){return new Promise((function(n,e){var a={method:"post",url:s+"/api/v1/admin/campaign/add",headers:{"Content-Type":"application/json"},data:t};i(a).then((function(t){n(t.data.data)})).catch((function(t){e(t)}))}))}function u(t){return new Promise((function(n,e){var a={method:"post",url:s+"/api/v1/admin/campaign/detail/add",headers:{"Content-Type":"application/json"},data:t};i(a).then((function(t){n(t.data.data)})).catch((function(t){e(t)}))}))}function l(){return new Promise((function(t,n){var e={method:"get",url:s+"/api/v1/admin/campaign/detail/product",headers:{"Content-Type":"application/json"}};i(e).then((function(n){t(n.data.data)})).catch((function(t){n(t)}))}))}function h(t){return new Promise((function(n,e){var a={method:"get",url:s+"/api/v1/admin/campaign/finish?campaignId="+t,headers:{"Content-Type":"application/json"}};i(a).then((function(t){n(t.data.data)})).catch((function(t){e(t)}))}))}}}]);
//# sourceMappingURL=806-legacy.86dc1313.js.map