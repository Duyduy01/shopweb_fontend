"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[156],{26156:function(n,e,t){t.r(e),t.d(e,{default:function(){return m}});var a=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"container-fluid m-admin-product-container-design"},[n._m(0),t("form",{attrs:{id:"m-form-admin-add-product"},on:{submit:function(e){return e.preventDefault(),n.bannerCallApi.apply(null,arguments)}}},[t("div",{staticClass:"row mt-4 mb-2"},[t("div",{staticClass:"form-group col-6 text-center"},[t("label",{attrs:{for:"m-file-img"}},[t("img",{staticStyle:{"object-fit":"contain"},attrs:{src:n.banner.img,alt:"",srcset:"",height:"200px",id:"m-img-parent"}})]),t("input",{attrs:{type:"file",id:"m-file-img",hidden:"",accept:"image/png, image/jpeg, image/webp"},on:{change:n.addImg}})]),t("div",{staticClass:"col-6"},[t("div",{staticClass:"row"},[t("div",{staticClass:"form-group col-6 form-group-customer"},[t("label",{attrs:{for:""}},[n._v("Tên banner")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.$v.banner.bannerName.$model,expression:"$v.banner.bannerName.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập tên banner"},domProps:{value:n.$v.banner.bannerName.$model},on:{input:function(e){e.target.composing||n.$set(n.$v.banner.bannerName,"$model",e.target.value.trim())},blur:function(e){return n.$forceUpdate()}}}),n.submitted&&!n.$v.banner.bannerName.required?t("div",{staticClass:"error"},[n._v(" Tên banner không thể để trống ")]):n._e()]),t("div",{staticClass:"form-group col-6 form-group-customer"},[t("label",{attrs:{for:""}},[n._v("Mã banner")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.banner.bannerCode,expression:"banner.bannerCode"}],staticClass:"form-control",attrs:{type:"text",disabled:"",readonly:""},domProps:{value:n.banner.bannerCode},on:{input:function(e){e.target.composing||n.$set(n.banner,"bannerCode",e.target.value)}}})]),t("div",{staticClass:"form-group col-6 form-group-customer"},[t("label",{attrs:{for:""}},[n._v("Loại banner")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.banner.bannerType,expression:"banner.bannerType"}],staticClass:"form-control",attrs:{type:"text",disabled:"",readonly:""},domProps:{value:n.banner.bannerType},on:{input:function(e){e.target.composing||n.$set(n.banner,"bannerType",e.target.value)}}})]),t("div",{staticClass:"form-group col-6 form-group-customer"},[t("label",{attrs:{for:""}},[n._v("Thứ tự banner")]),t("input",{directives:[{name:"model",rawName:"v-model",value:n.banner.number,expression:"banner.number"}],staticClass:"form-control",attrs:{type:"text",disabled:"",readonly:""},domProps:{value:n.banner.number},on:{input:function(e){e.target.composing||n.$set(n.banner,"number",e.target.value)}}})]),t("div",{staticClass:"form-group col-6 form-group-customer"},[t("label",{attrs:{for:""}},[n._v("Link")]),t("input",{directives:[{name:"model",rawName:"v-model.trim",value:n.$v.banner.bannerLink.$model,expression:"$v.banner.bannerLink.$model",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"Vui lòng nhập Link"},domProps:{value:n.$v.banner.bannerLink.$model},on:{input:function(e){e.target.composing||n.$set(n.$v.banner.bannerLink,"$model",e.target.value.trim())},blur:function(e){return n.$forceUpdate()}}}),n.submitted&&!n.$v.banner.bannerLink.required?t("div",{staticClass:"error"},[n._v(" Link không thể để trống ")]):n._e()])]),t("div",{staticClass:"form-group d-flex justify-content-around mt-5"},[t("div",[t("button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:n.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"btn btn-outline-primary",attrs:{type:"submit"}},[[n._v(" Thay đổi ")]],2)]),t("div",[t("button",{staticClass:"btn btn-outline-primary",attrs:{type:"button",plain:""},on:{click:n.cancelBanner}},[n._v(" Quay lại ")])])])])])])])},r=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"m-admin-product-action-title text-center border-bottom"},[t("h2",[n._v("Thay đổi banner")])])}],i=t(6409),o=t(32424),s=t(15857),l={name:"BannerEdit",props:["id"],mixins:[o.oE],data:function(){return{banner:{id:this.id,bannerName:"",bannerCode:"",bannerType:"",bannerNumber:"",bannerLink:""},img:"",submitted:!1,fullscreenLoading:!1}},validations:{banner:{bannerName:{required:i.C1},bannerLink:{required:i.C1}}},created:function(){var n=this;(0,s.FV)(this.id).then((function(e){n.banner=e}))},methods:{bannerCallApi:function(n){var e=this;if(n.preventDefault(),this.submitted=!0,this.$v.$touch(),this.$v.$invalid)console.log("error validate");else{var t=new FormData;t.append("id",this.banner.id),t.append("bannerName",this.banner.bannerName),t.append("bannerLink",this.banner.bannerLink),null!=this.img&&""!=this.img&&t.append("img",this.img),this.CallApiEditBanner(t,e)}},CallApiEditBanner:function(n,e){e.openFullScreen1(),(0,s.Id)(n).then((function(n){e.fullscreenLoading=!1,e.$swal("Thành công",n.data,"success").then((function(){e.$router.push("/admin/banner")}))})).catch((function(n){e.$swal("lỗi",n.response.data.data,"error"),e.fullscreenLoading=!1}))},addImg:function(n){var e=new FileReader,t=n.target.files;this.img=t[0],e.readAsDataURL(t[0]),e.onload=function(n){document.getElementById("m-img-parent").src=n.target.result}},openFullScreen1:function(){var n=this;this.fullscreenLoading=!0,1==this.fullscreenLoading&&setTimeout((function(){n.fullscreenLoading=!1}),2500)},cancelBanner:function(){var n="/admin/banner";this.$router.push(n)}},mounted:function(){}},u=l,d=t(43736),c=(0,d.Z)(u,a,r,!1,null,"655695dc",null),m=c.exports},15857:function(n,e,t){t.d(e,{FV:function(){return s},Id:function(){return l},v2:function(){return o}});t(41539);var a=t(31223),r=t(26166),i=(0,a.X)();function o(){return new Promise((function(n,e){var t={method:"get",url:i+"/api/v1/admin/banner",headers:{"Content-Type":"application/json"}};r(t).then((function(e){n(e.data.data)})).catch((function(n){console.log(n),e(n)}))}))}function s(n){return new Promise((function(e,t){var a={method:"get",url:i+"/api/v1/admin/banner/"+n,headers:{"Content-Type":"application/json"}};r(a).then((function(n){e(n.data.data)})).catch((function(n){console.log(n),t(n)}))}))}function l(n){return new Promise((function(e,t){var a={method:"post",url:i+"/api/v1/admin/banner",headers:{},data:n};r(a).then((function(n){e(n.data)})).catch((function(n){t(n)}))}))}}}]);
//# sourceMappingURL=156-legacy.6dd81db9.js.map