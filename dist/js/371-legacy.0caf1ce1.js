"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[371],{25371:function(e,t,i){i.r(t),i.d(t,{default:function(){return m}});var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("div",{staticClass:"product-header"},[i("h1",[e._v("Đặc trưng sản phẩm")]),i("div",{staticClass:"m-admin-product-action-add button-show-modal",attrs:{id:"one"}},[i("button",{staticClass:"btn btn-outline-primary",on:{click:e.addSpeNew}},[e._v(" Thêm đặc trưng mới ")])])]),i("el-tabs",{attrs:{type:"card"},on:{"tab-click":e.handleClick},model:{value:e.speIndex,callback:function(t){e.speIndex=t},expression:"speIndex"}},e._l(e.getListTitle,(function(t){return i("el-tab-pane",{key:t.id,attrs:{label:t.typeName}},[i("div",{staticClass:"text-center mt-1"},[i("h4",[e._v("Danh sách đặc trưng")])]),i("div",{staticClass:"text-center"},[i("button",{staticClass:"btn btn-outline-primary",on:{click:e.addSpeOld}},[e._v(" Thêm đặc trưng "+e._s(t.typeName.toLowerCase())+" ")])]),i("div",{staticClass:"between:flex bottom:margin-3"},[i("div",{staticClass:"center:flex-items"},[i("span",{staticClass:"right:margin-1"},[e._v("Hiển thị")]),i("select",{directives:[{name:"model",rawName:"v-model",value:e.currentEntries,expression:"currentEntries"}],staticClass:"select",staticStyle:{width:"5rem"},on:{change:[function(t){var i=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.currentEntries=t.target.multiple?i:i[0]},e.paginateEntries]}},e._l(e.showEntries,(function(t){return i("option",{key:t,domProps:{value:t}},[e._v(" "+e._s(t)+" ")])})),0),i("span",{staticClass:"left:margin-1"},[e._v("mục")])]),i("div",{staticClass:"end:flex"},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.searchInput,expression:"searchInput"}],staticClass:"input px:width-25",attrs:{type:"search",placeholder:"Tìm kiếm tại đấy..."},domProps:{value:e.searchInput},on:{keyup:e.searchEvent,input:function(t){t.target.composing||(e.searchInput=t.target.value)}}})])]),i("div",[i("table",{staticClass:"table table:border secondary-5:border"},[i("thead",[i("tr",e._l(e.tableHeader,(function(t){return i("th",{key:t.name},[i("div",{staticClass:"between:flex center:items"},[i("span",[e._v(e._s(t.text))])])])})),0)]),i("tbody",e._l(e.tableData,(function(t,n){return i("tr",{key:t.id},[i("td",[e._v(e._s(n+1))]),i("td",[e._v(e._s(t.featuredName))]),i("td",[e._v(e._s(t.featuredKey))]),i("td",[e._v(e._s(t.featuredNumber))]),i("td",[e._v(" "+e._s(t.description)+" "),"color"==t.featuredKey?i("div",{domProps:{innerHTML:e._s(e.renderColor(t))}}):e._e()]),i("td",[i("el-switch",{on:{change:function(i){return e.calApiUpdateStatus(t.id)}},model:{value:t.boolActive,callback:function(i){e.$set(t,"boolActive",i)},expression:"td.boolActive"}})],1),i("td",[i("div",{staticClass:"action"},[i("div",{staticClass:"m-product-cart-button-clear m-admin-product-action-add button-show-modal",attrs:{id:"one"}},[i("button",{staticClass:"clear-test",attrs:{type:"button",id:"m-into-choose-product"},on:{click:function(i){return e.ModalEdit(t)}}},[i("font-awesome-icon",{attrs:{icon:"fa-solid fa-pen-to-square"}})],1)])])])])})),0)])]),i("div",{staticClass:"between:flex y:margin-3"},[i("div",[e._v(" Hiển thị từ "+e._s(e.showInfo.from)+" đến "+e._s(e.showInfo.to)+" / "+e._s(e.showInfo.of)+" ")]),i("div",{staticClass:"end:flex"},[i("ul",{staticClass:"pagination:nav"},[i("li",{class:["nav-item",{disabled:1===e.currentPage}]},[i("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.currentPage=1,e.paginateEntries()}}},[i("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-left"}})],1)]),i("li",{class:["nav-item",{disabled:1===e.currentPage}]},[i("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.currentPage<1?e.currentPage=1:e.currentPage-=1,e.paginateEntries()}}},[i("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-left"}})],1)]),e._l(e.showPagination,(function(t){return i("li",{key:t,class:["nav-item",{ellipsis:"..."===t,active:t===e.currentPage}]},[i("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(i){return i.preventDefault(),e.paginateEvent(t)}}},[e._v(e._s(t))])])})),i("li",{class:["nav-item",{disabled:e.currentPage===e.allPages}]},[i("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.currentPage>e.allPages?e.currentPage=e.allPages:e.currentPage+=1,e.paginateEntries()}}},[i("font-awesome-icon",{attrs:{icon:"fa-solid fa-angle-right"}})],1)]),i("li",{class:["nav-item",{disabled:e.currentPage===e.allPages}]},[i("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:function(t){t.preventDefault(),e.currentPage=e.allPages,e.paginateEntries()}}},[i("font-awesome-icon",{attrs:{icon:"fa-solid fa-angles-right"}})],1)])],2)])])])})),1),i("el-dialog",{attrs:{title:"Thêm đặc trưng",visible:e.modeAddSpeNew,width:"60%"},on:{"update:visible":function(t){e.modeAddSpeNew=t}}},[i("form",{attrs:{id:"m-form-admin-add-product"},on:{submit:function(t){return t.preventDefault(),e.callApiAddSpeNew.apply(null,arguments)}}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"form-group col-6 form-group-customer"},[i("label",{attrs:{for:"categoryName"}},[e._v("Tên loại sản phẩm")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.featuredName.$model,expression:"$v.speNew.featuredName.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập tên loại đặc trưng"},domProps:{value:e.$v.speNew.featuredName.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.speNew.featuredName,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.submitted&&!e.$v.speNew.featuredName.required?i("div",{staticClass:"error"},[e._v(" Vui lòng nhập tên loại đặc trưng ")]):e._e()]),i("div",{staticClass:"form-group col-6 form-group-customer"},[i("label",{attrs:{for:"categoryName"}},[e._v("Mô tả")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.description.$model,expression:"$v.speNew.description.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập mô tả của đặc trưng"},domProps:{value:e.$v.speNew.description.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.speNew.description,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.submitted&&!e.$v.speNew.description.required?i("div",{staticClass:"error"},[e._v(" Vui lòng nhập mô tả đặc trưng ")]):e._e()]),i("div",{staticClass:"form-group col-6 form-group-customer"},[i("label",{attrs:{for:"categoryName"}},[e._v("Mã đặc trưng")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.featuredKey.$model,expression:"$v.speNew.featuredKey.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập mã đặc trưng"},domProps:{value:e.$v.speNew.featuredKey.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.speNew.featuredKey,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.submitted&&!e.$v.speNew.featuredKey.required?i("div",{staticClass:"error"},[e._v(" Vui lòng nhập mã đặc trưng ")]):e._e()]),i("div",{staticClass:"col-12 d-flex"},[i("label",[e._v("Vui Lòng chọn kích hoạt:")]),i("div",{staticClass:"d-flex"},[i("div",{staticClass:"p-2"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.active.$model,expression:"$v.speNew.active.$model",modifiers:{trim:!0}}],attrs:{type:"radio",name:"active",id:"yes",value:"1"},domProps:{checked:e._q(e.$v.speNew.active.$model,"1")},on:{change:function(t){return e.$set(e.$v.speNew.active,"$model","1")}}}),i("label",{attrs:{for:"yes"}},[e._v("Có")])]),i("div",{staticClass:"p-2"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.active.$model,expression:"$v.speNew.active.$model",modifiers:{trim:!0}}],attrs:{type:"radio",name:"active",id:"no",value:"-1"},domProps:{checked:e._q(e.$v.speNew.active.$model,"-1")},on:{change:function(t){return e.$set(e.$v.speNew.active,"$model","-1")}}}),i("label",{attrs:{for:"no"}},[e._v("Không")])])]),e.submitted&&!e.$v.speNew.active.required?i("div",{staticClass:"error"},[e._v(" Vui lòng chọn hoạt động ")]):e._e()])])]),i("span",{staticClass:"dialog-footer d-flex justify-content-end",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[e._v("Áp dụng")]),i("button",{staticClass:"btn btn-outline-primary ml-2",attrs:{type:"button"},on:{click:function(t){e.modeAddSpeNew=!1}}},[e._v(" Quay lại ")])])])]),i("el-dialog",{attrs:{title:"Thêm đặc  trưng",visible:e.modeAddSpeOld,width:"60%"},on:{"update:visible":function(t){e.modeAddSpeOld=t}}},[i("form",{attrs:{id:"m-form-admin-add-product"},on:{submit:function(t){return t.preventDefault(),e.callApiAddSpeOld.apply(null,arguments)}}},[i("div",{staticClass:"container"},[i("div",{staticClass:"row"},[i("div",{staticClass:"form-group col-6 form-group-customer"},[i("label",{attrs:{for:"categoryName"}},[e._v("Tên loại sản phẩm")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.speNew.featuredName,expression:"speNew.featuredName",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập tên loại đặc trưng",disabled:""},domProps:{value:e.speNew.featuredName},on:{input:function(t){t.target.composing||e.$set(e.speNew,"featuredName",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),i("div",{staticClass:"form-group col-6 form-group-customer"},[i("label",{attrs:{for:"categoryName"}},[e._v("Mô tả")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.description.$model,expression:"$v.speNew.description.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập mô tả của đặc trưng"},domProps:{value:e.$v.speNew.description.$model},on:{input:function(t){t.target.composing||e.$set(e.$v.speNew.description,"$model",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}}),e.submitted&&!e.$v.speNew.description.required?i("div",{staticClass:"error"},[e._v(" Vui lòng nhập mô tả đặc trưng ")]):e._e()]),i("div",{staticClass:"form-group col-6 form-group-customer"},[i("label",{attrs:{for:"categoryName"}},[e._v("Mã đặc trưng")]),i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.speNew.featuredKey,expression:"speNew.featuredKey",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập mã đặc trưng",disabled:""},domProps:{value:e.speNew.featuredKey},on:{input:function(t){t.target.composing||e.$set(e.speNew,"featuredKey",t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),"color"==this.speNew.featuredKey?i("div",{staticClass:"form-group col-12 form-group-customer"},[i("label",{staticClass:"demonstration"},[e._v("Mã màu")]),i("div",{staticClass:"block"},[i("el-color-picker",{model:{value:e.speNew.featuredCode,callback:function(t){e.$set(e.speNew,"featuredCode",t)},expression:"speNew.featuredCode"}})],1)]):e._e(),i("div",{staticClass:"col-12 d-flex"},[i("label",[e._v("Vui Lòng chọn kích hoạt:")]),i("div",{staticClass:"d-flex"},[i("div",{staticClass:"p-2"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.active.$model,expression:"$v.speNew.active.$model",modifiers:{trim:!0}}],attrs:{type:"radio",name:"active",id:"yes",value:"1"},domProps:{checked:e._q(e.$v.speNew.active.$model,"1")},on:{change:function(t){return e.$set(e.$v.speNew.active,"$model","1")}}}),i("label",{attrs:{for:"yes"}},[e._v("Có")])]),i("div",{staticClass:"p-2"},[i("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.$v.speNew.active.$model,expression:"$v.speNew.active.$model",modifiers:{trim:!0}}],attrs:{type:"radio",name:"active",id:"no",value:"-1"},domProps:{checked:e._q(e.$v.speNew.active.$model,"-1")},on:{change:function(t){return e.$set(e.$v.speNew.active,"$model","-1")}}}),i("label",{attrs:{for:"no"}},[e._v("Không")])])]),e.submitted&&!e.$v.speNew.active.required?i("div",{staticClass:"error"},[e._v(" Vui lòng chọn hoạt động ")]):e._e()])])]),i("span",{staticClass:"dialog-footer d-flex justify-content-end",attrs:{slot:"footer"},slot:"footer"},[i("button",{staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[e._v("Áp dụng")]),i("button",{staticClass:"btn btn-outline-primary ml-2",attrs:{type:"button"},on:{click:function(t){e.modeAddSpeOld=!1}}},[e._v(" Quay lại ")])])])])],1)},a=[],s=(i(41539),i(33948),i(74916),i(64765),i(69720),i(38862),i(75587)),r=i(64732),o=i(6409),c=i(32424),l={name:"AdminProduct",mixins:[c.oE],components:{},data:function(){return{columns:[{name:"id",text:"ID"},{name:"featuredName",text:"Tên đặc trưng"},{name:"featuredKey",text:"Mã đặc trưng"},{name:"featuredNumber",text:"Đặc trưng thứ"},{name:"description",text:"Mô tả"},{name:"active",text:"Trạng thái"},{name:"#",text:"Hành động"}],entries:[],showEntries:[5,10,15,25,50,72,100],currentEntries:10,filteredEntries:[],currentPage:1,allPages:1,searchInput:"",searchEntries:[],col:{id:"",featuredName:"",featuredKey:"",featuredNumber:"",description:"",active:""},sortcol:{id:"",featuredName:"",featuredKey:"",featuredNumber:"",description:"",active:""},check:null,submitted:!1,listTitle:[],speIndex:"",modeAddSpeNew:!1,modeAddSpeOld:!1,modeEditSpe:!1,speNew:{id:"",featuredName:"",description:"",featuredKey:"",active:"",featuredCode:""}}},validations:{speNew:{featuredName:{required:o.C1},description:{required:o.C1},featuredKey:{required:o.C1},active:{required:o.C1}}},computed:{showInfo:function(){return s.uh.show(this.getCurrentEntries(),this.currentPage,this.currentEntries)},showPagination:function(){return s.uh.pagination(this.allPages,this.currentPage,2)},tableHeader:function(){return this.columns},tableData:function(){return this.filteredEntries},getListTitle:function(){return this.listTitle}},created:function(){var e=this;(0,r.Oo)().then((function(t){e.listTitle=t,e.entries=e.listTitle[0].specialityEntities,e.paginateData(e.entries)}))},methods:{paginateEntries:function(){this.searchInput.length>0?(this.searchEntries=s.uh.search(this.entries,this.searchInput),this.paginateData(this.searchEntries)):(this.searchEntries=[],this.paginateData(this.entries),this.col={id:"",featuredName:"",featuredKey:"",featuredNumber:"",description:"",active:""})},paginateEvent:function(e){this.currentPage=e,this.paginateEntries()},searchEvent:function(){this.currentPage=1,this.paginateEntries()},paginateData:function(e){this.filteredEntries=s.uh.paginate(e,this.currentPage,this.currentEntries),this.allPages=s.uh.pages(e,this.currentEntries)},getCurrentEntries:function(){return this.searchInput.length<=0?this.entries:this.searchEntries},uniqColumData:function(e){return s.uh.unique(this.getCurrentEntries(),e)},filterByColumn:function(){var e=s.T4.removeBy(this.col,""),t=this.getCurrentEntries();Object.entries(e).length>=1&&(t=s.uh.filtered(this.getCurrentEntries(),e)),this.paginateData(t)},sortByColumn:function(e){this.col={id:"",featuredName:"",featuredKey:"",featuredNumber:"",description:"",active:""};var t=this.getCurrentEntries(),i=this.sortcol[e];""===i?(this.sortcol[e]="asc",t=s.uh.sorted(this.getCurrentEntries(),e,"asc"),this.check=!1):"asc"===i?(this.sortcol[e]="desc",t=s.uh.sorted(this.getCurrentEntries(),e,"desc"),this.check=!0):"desc"===i&&(this.sortcol[e]="",this.check=null),this.paginateData(t)},handleClick:function(){this.entries=this.listTitle[this.speIndex].specialityEntities,this.paginateData(this.entries)},addSpeNew:function(){this.modeAddSpeNew=!0,this.speNew={id:"",featuredName:"",description:"",featuredKey:"",active:"",featuredCode:""}},callApiAddSpeNew:function(e){var t=this;if(e.preventDefault(),this.submitted=!0,this.$v.$touch(),this.$v.$invalid)console.log("error validate");else{var i=JSON.stringify(this.speNew);console.log(i),(0,r.NX)(i).then((function(e){t.listTitle.push(e),t.$swal("Thành công","Thêm đặc trưng mới thành công","success").then((function(){}))})).catch((function(e){console.log(e),t.$swal("Thất bại",e.response.data.data,"error").then((function(){}))})),this.submitted=!1,t.modeAddSpeNew=!1,this.speNew={id:"",featuredName:"",description:"",featuredKey:"",active:"",featuredCode:""}}},addSpeOld:function(){this.speNew={id:"",featuredName:"",description:"",featuredKey:"",active:"",featuredCode:""},this.modeAddSpeOld=!0;var e=this.listTitle[this.speIndex].specialityEntities[0];this.speNew.featuredName=e.featuredName,this.speNew.featuredKey=e.featuredKey},callApiAddSpeOld:function(e){var t=this;e.preventDefault(),this.submitted=!0,this.$v.$touch(),this.$v.$invalid?console.log("error validate"):(console.log(this.speNew),""!=this.speNew.id?this.editOld(t):this.addOld(t))},addOld:function(e){var t=JSON.stringify(this.speNew);console.log(t),(0,r.Du)(t).then((function(t){1==t.active&&(t.boolActive=!0),e.$swal("Thành công","Thêm đặc trưng ".concat(t.featuredName.toLowerCase()," thành công"),"success").then((function(){})),e.listTitle[e.speIndex].specialityEntities.push(t),e.entries=e.listTitle[e.speIndex].specialityEntities,e.paginateData(e.entries),e.submitted=!1,e.modeAddSpeOld=!1,e.speNew={id:"",featuredName:"",description:"",featuredKey:"",active:"",featuredCode:""}})).catch((function(t){console.log(t),e.$swal("Thất bại",t.response.data.data,"error").then((function(){}))}))},ModalEdit:function(e){this.modeAddSpeOld=!0,this.speNew=e},editOld:function(e){var t=JSON.stringify(this.speNew);(0,r.vN)(t).then((function(t){e.$swal("Thành công","Sửa đặc trưng thành công","success").then((function(){})),console.log(t),e.speNew.boolActive=t.boolActive,e.submitted=!1,e.modeAddSpeOld=!1,e.speNew={id:"",featuredName:"",description:"",featuredKey:"",active:"",featuredCode:""}})).catch((function(t){console.log(t),e.$swal("Thất bại",t.response.data.data,"error").then((function(){}))}))},calApiUpdateStatus:function(e){console.log(e),(0,r.Nf)(e).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))},renderColor:function(e){var t="<div style='width:14px; height:14px; background-color:".concat(e.featuredCode,"';></div>");return t}},mounted:function(){}},d=l,u=i(43736),p=(0,u.Z)(d,n,a,!1,null,"61b96146",null),m=p.exports},64732:function(e,t,i){i.d(t,{Du:function(){return d},NX:function(){return l},Nf:function(){return p},Oo:function(){return c},U1:function(){return r},iE:function(){return o},vN:function(){return u}});i(41539);var n=i(31223),a=i(26166),s=(0,n.X)();function r(){return new Promise((function(e,t){var i={method:"get",url:s+"/api/v1/user/speciality",headers:{"Content-Type":"application/json"}};a(i).then((function(t){e(t.data.data)})).catch((function(e){console.log(e),t(e)}))}))}function o(){return new Promise((function(e,t){var i={method:"get",url:s+"/api/v1/user/speciality/key",headers:{"Content-Type":"application/json"}};a(i).then((function(t){e(t.data.data)})).catch((function(e){console.log(e),t(e)}))}))}function c(){return new Promise((function(e,t){var i={method:"get",url:s+"/api/v1/admin/speciality",headers:{"Content-Type":"application/json"}};a(i).then((function(t){e(t.data.data)})).catch((function(e){console.log(e),t(e)}))}))}function l(e){return new Promise((function(t,i){var n={method:"post",url:s+"/api/v1/admin/speciality/new",headers:{"Content-Type":"application/json"},data:e};a(n).then((function(e){t(e.data.data)})).catch((function(e){console.log(e),i(e)}))}))}function d(e){return new Promise((function(t,i){var n={method:"post",url:s+"/api/v1/admin/speciality/old",headers:{"Content-Type":"application/json"},data:e};a(n).then((function(e){t(e.data.data)})).catch((function(e){console.log(e),i(e)}))}))}function u(e){return new Promise((function(t,i){var n={method:"put",url:s+"/api/v1/admin/speciality",headers:{"Content-Type":"application/json"},data:e};a(n).then((function(e){t(e.data.data)})).catch((function(e){console.log(e),i(e)}))}))}function p(e){return new Promise((function(t,i){var n={method:"post",url:s+"/api/v1/admin/speciality/status/"+e,headers:{"Content-Type":"application/json"}};a(n).then((function(e){t(e.data.data)})).catch((function(e){console.log(e),i(e)}))}))}}}]);
//# sourceMappingURL=371-legacy.0caf1ce1.js.map