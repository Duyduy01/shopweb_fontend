"use strict";(self["webpackChunkfront_end_do_an"]=self["webpackChunkfront_end_do_an"]||[]).push([[871],{63871:function(t,e,r){r.r(e),r.d(e,{default:function(){return h}});var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"main"},[r("div",{staticClass:"container"},[r("div",{staticClass:"l-page-desgin"},[r("div",{staticClass:"l-detail-page"},[t._m(0),r("div",{staticClass:"l-themes-register-page"},[r("h1",[r("router-link",{attrs:{to:"/dang-ky"}},[t._v("Đăng ký")])],1)])]),r("form",{ref:"form",attrs:{method:"POST"},on:{submit:function(e){return e.preventDefault(),t.login.apply(null,arguments)}}},[r("div",{staticClass:"form-login-input-page form-group"},[t._m(1),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.username.$model,expression:"$v.form.username.$model",modifiers:{trim:!0}}],attrs:{type:"email",id:"email",placeholder:"Email*",name:"username"},domProps:{value:t.$v.form.username.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.username,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.submitted&&!t.$v.form.username.required?r("div",{staticClass:"error"},[t._v(" Tài khoản không thể để trống ")]):t._e(),t.$v.form.username.email?t._e():r("div",{staticClass:"error"},[t._v(" Trường này phải là email. ")])]),r("div",{staticClass:"form-login-input-page"},[t._m(2),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.$v.form.password.$model,expression:"$v.form.password.$model",modifiers:{trim:!0}}],attrs:{type:"password",id:"password",placeholder:"Mật khẩu *",name:"password"},domProps:{value:t.$v.form.password.$model},on:{input:function(e){e.target.composing||t.$set(t.$v.form.password,"$model",e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}}),t.submitted&&!t.$v.form.password.required?r("div",{staticClass:"error"},[t._v(" Mật khẩu không thể để trống ")]):t._e(),t.$v.form.password.minLength?t._e():r("div",{staticClass:"error"},[t._v(" Mật khẩu phải có ít nhất "+t._s(t.$v.form.password.$params.minLength.min)+" kí tự. ")]),t.$v.form.password.maxLength?t._e():r("div",{staticClass:"error"},[t._v(" Mật khẩu phải ít hơn "+t._s(t.$v.form.password.$params.maxLength.max)+" kí tự. ")])]),t._m(3),t._m(4)])])])])},a=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"l-themes-login-page"},[r("h1",[t._v("Đăng nhập")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"l-themes-page"},[r("label",{attrs:{for:"email"}},[t._v("Email *")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"l-themes-page"},[r("label",{attrs:{for:"password"}},[t._v("Mật khẩu *")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"form-check ml-3"},[r("input",{staticClass:"form-check-input",attrs:{type:"checkbox",id:"exampleCheck1"}}),r("label",{staticClass:"form-check-label",attrs:{for:"exampleCheck1"}},[t._v("Nhớ mật khẩu")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"l-list-button-page"},[r("div",{staticClass:"l-button-login"},[r("button",{staticClass:"login",attrs:{type:"submit",id:"login"}},[t._v("Đăng nhập")])]),r("div",{staticClass:"l-footer-page"},[r("div",{staticClass:"forgot-password-page"},[r("a",{attrs:{href:"./forgot.html"}},[t._v(" Quên mật khẩu?")])])])])}],i=(r(38862),r(10928)),o=r(32424),n=r(6409),l=r(66605),m={name:"Login",data:function(){return{form:{username:"",password:""},submitted:!1}},mixins:[o.oE],validations:{form:{username:{required:n.C1,email:n.Do},password:{required:n.C1,minLength:(0,n.Ei)(6),maxLength:(0,n.BS)(20)}}},methods:{login:function(t){var e=this;t.preventDefault();var r=this;this.submitted=!0,this.$v.$touch(),this.$v.$invalid?console.log("error login"):(this.$store.dispatch("LOGIN"),(0,l.x)(this.$data.form).then((function(t){e.$store.commit("LOGIN_SUCCESS",t.data),e.addLocalToCart(),r.$swal("Thành công","Đăng nhập thành công !","success").then((function(){window.location.href="/"}))})).catch((function(t){e.$store.commit("LOGIN_FAILED",{err:t}),r.$swal("Thất bại","Vui lòng kiểm tra lại tài khoản và mật khẩu!","error")})))},addLocalToCart:function(){var t=this,e=JSON.parse(localStorage.getItem("CART"));if(null!=e&&e.length>0&&this.$store.getters.CURRENT_USER){var r=this.$store.getters.CURRENT_USER.token,s={listProduct:e};s=JSON.stringify(s),(0,i.ad)(s,r).then((function(e){console.log(e),t.$store.commit("REMOVE_CART")})).catch((function(t){console.log(t)}))}}},computed:{authError:function(){return this.$store.getters.AUTH_ERROR}},created:function(){window.scrollTo(0,0)}},c=m,u=r(43736),d=(0,u.Z)(c,s,a,!1,null,"90e8939a",null),h=d.exports}}]);
//# sourceMappingURL=871-legacy.fe293738.js.map