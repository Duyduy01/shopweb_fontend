"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[591],{99591:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}});var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"product-header"},[n("h1",[t._v("Danh sách thương hiệu")]),n("div",{staticClass:"m-admin-product-action-add button-show-modal",attrs:{id:"one"}},[n("button",{staticClass:"btn btn-outline-primary",on:{click:t.modalAdd}},[t._v(" Thêm thương hiệu ")])])]),n("div",{staticClass:"between:flex bottom:margin-3"},[n("div",{staticClass:"center:flex-items"},[n("span",{staticClass:"right:margin-1"},[t._v("Hiển thị")]),n("select",{directives:[{name:"model",rawName:"v-model",value:t.currentEntries,expression:"currentEntries"}],staticClass:"select",staticStyle:{width:"5rem"},on:{change:[function(e){var n=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.currentEntries=e.target.multiple?n:n[0]},t.paginateEntries]}},t._l(t.showEntries,(function(e){return n("option",{key:e,domProps:{value:e}},[t._v(" "+t._s(e)+" ")])})),0),n("span",{staticClass:"left:margin-1"},[t._v("mục")])]),n("div",{staticClass:"end:flex"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.searchInput,expression:"searchInput"}],staticClass:"input px:width-25",attrs:{type:"search",placeholder:"Tìm kiếm tại đấy..."},domProps:{value:t.searchInput},on:{keyup:t.searchEvent,input:function(e){e.target.composing||(t.searchInput=e.target.value)}}})])]),n("div",[n("table",{staticClass:"table table:border secondary-5:border"},[n("thead",[n("tr",t._l(t.tableHeader,(function(e){return n("th",{key:e.name},[n("div",{staticClass:"between:flex center:items"},[n("span",[t._v(t._s(e.text))])])])})),0)]),n("tbody",t._l(t.tableData,(function(e,a){return n("tr",{key:e.id},[n("td",[t._v(t._s(a+1))]),n("td",[t._v(t._s(e.brandName))]),n("td",{staticClass:"text-center"},[n("img",{staticStyle:{"object-fit":"contain"},attrs:{src:e.icon,alt:"",srcset:"",width:"50px",height:"50px"}})]),n("td",[t._v(t._s(e.content))]),n("td",[n("el-switch",{on:{change:function(n){return t.updateStatus(e.id)}},model:{value:e.boolActive,callback:function(n){t.$set(e,"boolActive",n)},expression:"td.boolActive"}})],1),n("td",[n("div",{staticClass:"action"},[n("div",{staticClass:"m-product-cart-button-clear m-admin-product-action-add button-show-modal",attrs:{id:"one"}},[n("button",{staticClass:"clear-test",attrs:{type:"button",id:"m-into-choose-product"},on:{click:function(n){return t.ModalEdit(e)}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-pen-to-square"}})],1)])])])])})),0)])]),n("div",{staticClass:"between:flex y:margin-3"},[n("div",[t._v(" Hiển thị từ "+t._s(t.showInfo.from)+" đến "+t._s(t.showInfo.to)+" / "+t._s(t.showInfo.of)+" ")]),n("div",{staticClass:"end:flex"},[n("ul",{staticClass:"pagination:nav"},[n("li",{class:["nav-item",{disabled:1===t.currentPage}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage=1,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-left"}})],1)]),n("li",{class:["nav-item",{disabled:1===t.currentPage}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage<1?t.currentPage=1:t.currentPage-=1,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-left"}})],1)]),t._l(t.showPagination,(function(e){return n("li",{key:e,class:["nav-item",{ellipsis:"..."===e,active:e===t.currentPage}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(n){return n.preventDefault(),t.paginateEvent(e)}}},[t._v(t._s(e))])])})),n("li",{class:["nav-item",{disabled:t.currentPage===t.allPages}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage>t.allPages?t.currentPage=t.allPages:t.currentPage+=1,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-right"}})],1)]),n("li",{class:["nav-item",{disabled:t.currentPage===t.allPages}]},[n("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(e){e.preventDefault(),t.currentPage=t.allPages,t.paginateEntries()}}},[n("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-right"}})],1)])],2)])]),n("el-dialog",{attrs:{title:"Thêm thương hiệu",visible:t.dialogFormVisible,width:"60%"},on:{"update:visible":function(e){t.dialogFormVisible=e}}},[n("form",{attrs:{id:"m-form-admin-add-product"},on:{submit:function(e){return e.preventDefault(),t.updateBrand.apply(null,arguments)}}},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[n("div",{staticClass:"form-group col-6 form-group-customer"},[n("label",{attrs:{for:"staff"}},[t._v("Tên thương hiệu")]),n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.brand.brandName.$model,expression:"$v.brand.brandName.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",id:"brandName",name:"brandName"},domProps:{value:t.$v.brand.brandName.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.brand.brandName,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.submitted&&!t.$v.brand.brandName.required?n("div",{staticClass:"error"},[t._v(" Vui lòng nhập tên thương hiệu ")]):t._e()]),n("div",{staticClass:"col-12 d-flex"},[n("label",[t._v("Vui Lòng chọn kích hoạt:")]),n("div",{staticClass:"d-flex"},[n("div",{staticClass:"p-2"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.brand.status.$model,expression:"$v.brand.status.$model",modifiers:{trim:!0}}],attrs:{type:"radio",name:"active",id:"yes",value:"1"},domProps:{checked:t._q(t.$v.brand.status.$model,"1")},on:{change:function(e){return t.$set(t.$v.brand.status,"$model","1")}}}),n("label",{attrs:{for:"yes"}},[t._v("Có")])]),n("div",{staticClass:"p-2"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.brand.status.$model,expression:"$v.brand.status.$model",modifiers:{trim:!0}}],attrs:{type:"radio",name:"active",id:"no",value:"-1"},domProps:{checked:t._q(t.$v.brand.status.$model,"-1")},on:{change:function(e){return t.$set(t.$v.brand.status,"$model","-1")}}}),n("label",{attrs:{for:"no"}},[t._v("Không")])])]),t.submitted&&!t.$v.brand.status.required?n("div",{staticClass:"error"},[t._v(" Vui lòng chọn hoạt động ")]):t._e()]),n("div",{staticClass:"form-group col-12 form-group-customer"},[n("label",{attrs:{for:"note"}},[t._v("Nội dung")]),n("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.brand.content.$model,expression:"$v.brand.content.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{name:"content",id:"content",rows:"5"},domProps:{value:t.$v.brand.content.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.brand.content,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.submitted&&!t.$v.brand.content.required?n("div",{staticClass:"error"},[t._v(" Nội dung không thể để trống ")]):t._e()])])]),n("span",{staticClass:"dialog-footer d-flex justify-content-end",attrs:{slot:"footer"},slot:"footer"},[n("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[t._v("Áp dụng")]),n("button",{staticClass:"btn btn-outline-primary ml-2",attrs:{type:"button"},on:{click:function(e){t.dialogFormVisible=!1}}},[t._v(" Quay lại ")])])])])],1)},i=[],s=(n(41539),n(33948),n(74916),n(64765),n(69720),n(38862),n(75587)),r=n(47566),o=n(6409),c=n(32424),l={name:"AdminProduct",mixins:[c.oE],components:{},data:function(){return{columns:[{name:"id",text:"ID"},{name:"brandName",text:"Tên thương hiệu"},{name:"icon",text:"icon"},{name:"content",text:"Nội dung"},{name:"status",text:"Trạng thái"},{name:"#",text:"Hành động"}],entries:[],showEntries:[5,10,15,25,50,72,100],currentEntries:10,filteredEntries:[],currentPage:1,allPages:1,searchInput:"",searchEntries:[],col:{id:"",brandName:"",content:"",status:""},sortcol:{id:"",brandName:"",content:"",status:""},check:null,submitted:!1,dialogFormVisible:!1,brand:{id:null,brandName:"",status:"",content:""}}},validations:{brand:{brandName:{required:o.C1},status:{required:o.C1},content:{required:o.C1}}},computed:{showInfo:function(){return s.uh.show(this.getCurrentEntries(),this.currentPage,this.currentEntries)},showPagination:function(){return s.uh.pagination(this.allPages,this.currentPage,2)},tableHeader:function(){return this.columns},tableData:function(){return this.filteredEntries}},created:function(){var t=this;(0,r.iC)().then((function(e){t.entries=e,t.paginateData(t.entries)}))},methods:{paginateEntries:function(){this.searchInput.length>0?(this.searchEntries=s.uh.search(this.entries,this.searchInput),this.paginateData(this.searchEntries)):(this.searchEntries=[],this.paginateData(this.entries),this.col={id:"",brandName:"",content:"",status:""})},paginateEvent:function(t){this.currentPage=t,this.paginateEntries()},searchEvent:function(){this.currentPage=1,this.paginateEntries()},paginateData:function(t){this.filteredEntries=s.uh.paginate(t,this.currentPage,this.currentEntries),this.allPages=s.uh.pages(t,this.currentEntries)},getCurrentEntries:function(){return this.searchInput.length<=0?this.entries:this.searchEntries},uniqColumData:function(t){return s.uh.unique(this.getCurrentEntries(),t)},filterByColumn:function(){var t=s.T4.removeBy(this.col,""),e=this.getCurrentEntries();Object.entries(t).length>=1&&(e=s.uh.filtered(this.getCurrentEntries(),t)),this.paginateData(e)},sortByColumn:function(t){this.col={id:"",brandName:"",content:"",status:""};var e=this.getCurrentEntries(),n=this.sortcol[t];""===n?(this.sortcol[t]="asc",e=s.uh.sorted(this.getCurrentEntries(),t,"asc"),this.check=!1):"asc"===n?(this.sortcol[t]="desc",e=s.uh.sorted(this.getCurrentEntries(),t,"desc"),this.check=!0):"desc"===n&&(this.sortcol[t]="",this.check=null),this.paginateData(e)},modalAdd:function(){this.dialogFormVisible=!0},ModalEdit:function(t){this.dialogFormVisible=!0,this.brand=t},updateStatus:function(t){(0,r.PZ)(t)},updateBrand:function(t){t.preventDefault(),this.submitted=!0,this.$v.$touch(),this.$v.$invalid?console.log("error validate"):null==this.brand.id?this.apiAddBrand():this.apiEditBrand()},apiAddBrand:function(){var t=this,e=this,n=JSON.stringify(this.brand);(0,r.Y2)(n).then((function(n){t.entries.push(n.data),t.paginateData(t.entries),e.$swal("Thành công",n.message,"success").then((function(){})),t.brand={id:null,brandName:"",status:"",content:""},t.submitted=!1})).catch((function(t){console.log(t.response.data),e.$swal("Lỗi",t.response.data.data,"error")})),e.dialogFormVisible=!1},apiEditBrand:function(){var t=this,e=this,n=JSON.stringify(this.brand);(0,r.zI)(n).then((function(n){t.brand.boolActive=n.data.boolActive,e.$swal("Thành công",n.message,"success").then((function(){})),t.brand={id:null,brandName:"",status:"",content:""},t.submitted=!1})).catch((function(t){console.log(t.response.data),e.$swal("Lỗi",t.response.data.data,"error")})),e.dialogFormVisible=!1}},mounted:function(){}},u=l,d=n(43736),h=(0,d.Z)(u,a,i,!1,null,"cfde0e64",null),m=h.exports},47566:function(t,e,n){n.d(e,{PZ:function(){return u},Y2:function(){return c},iC:function(){return o},lR:function(){return r},zI:function(){return l}});n(41539);var a=n(31223),i=n(26166),s=(0,a.X)();function r(){return new Promise((function(t,e){var n={method:"get",url:s+"/api/v1/user/brand",headers:{"Content-Type":"application/json"}};i(n).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function o(){return new Promise((function(t,e){var n={method:"get",url:s+"/api/v1/admin/brand",headers:{"Content-Type":"application/json"}};i(n).then((function(e){t(e.data.data)})).catch((function(t){e(t)}))}))}function c(t){return new Promise((function(e,n){var a={method:"post",url:s+"/api/v1/admin/brand",headers:{"Content-Type":"application/json"},data:t};i(a).then((function(t){e(t.data)})).catch((function(t){console.log(t),n(t)}))}))}function l(t){return new Promise((function(e,n){var a={method:"put",url:s+"/api/v1/admin/brand",headers:{"Content-Type":"application/json"},data:t};i(a).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))}function u(t){return new Promise((function(e,n){var a={method:"get",url:s+"/api/v1/admin/brand/status/"+t,headers:{"Content-Type":"application/json"}};i(a).then((function(t){e(t.data)})).catch((function(t){n(t)}))}))}}}]);
//# sourceMappingURL=591-legacy.9298de17.js.map