<template>
  <div class="main">
    <div class="container">
      <div class="l-page-desgin">
        <div class="l-detail-page">
          <div class="l-themes-login-page">
            <h1>Đăng nhập</h1>
          </div>

          <div class="l-themes-register-page">
            <h1>
              <router-link to="/dang-ky">Đăng ký</router-link>
            </h1>
          </div>
        </div>
        <form method="POST" @submit.prevent="login" ref="form">
          <div class="form-login-input-page form-group">
            <div class="l-themes-page"><label for="email">Email *</label></div>
            <input
              type="email"
              id="email"
              placeholder="Email*"
              name="username"
              v-model.trim="$v.form.username.$model"
            />
            <div class="error" v-if="submitted && !$v.form.username.required">
              Tài khoản không thể để trống
            </div>
            <div class="error" v-if="!$v.form.username.email">
              Trường này phải là email.
            </div>
          </div>
          <div class="form-login-input-page">
            <div class="l-themes-page">
              <label for="password">Mật khẩu *</label>
            </div>
            <input
              type="password"
              id="password"
              placeholder="Mật khẩu *"
              name="password"
              v-model.trim="$v.form.password.$model"
            />
            <div class="error" v-if="submitted && !$v.form.password.required">
              Mật khẩu không thể để trống
            </div>
            <div class="error" v-if="!$v.form.password.minLength">
              Mật khẩu phải có ít nhất
              {{ $v.form.password.$params.minLength.min }} kí tự.
            </div>
            <div class="error" v-if="!$v.form.password.maxLength">
              Mật khẩu phải ít hơn
              {{ $v.form.password.$params.maxLength.max }} kí tự.
            </div>
          </div>
          <div class="form-check ml-3">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
            <label class="form-check-label" for="exampleCheck1"
              >Nhớ mật khẩu</label
            >
          </div>

          <div class="l-list-button-page">
            <div class="l-button-login">
              <button type="submit" id="login" class="login">Đăng nhập</button>
            </div>
            <div class="l-footer-page">
              <div class="forgot-password-page">
                <a href="./forgot.html"> Quên mật khẩu?</a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { addCartIntoLocal } from "@/service/user/cart";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
} from "vuelidate/lib/validators";
import { login } from "@/helpers/auth";
export default {
  name: "Login",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      submitted: false,
    };
  },
  mixins: [validationMixin],
  validations: {
    form: {
      username: {
        required,
        email,
      },
      password: {
        required,
        minLength: minLength(6),
        maxLength: maxLength(20),
      },
    },
  },
  methods: {
    async login(e) {
      e.preventDefault();
      let self = this;
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error login");
        return;
      } else {
        try {
          this.$store.dispatch("LOGIN");
          const res = await login(this.$data.form);
          this.$store.commit("LOGIN_SUCCESS", res.data);
          this.addLocalToCart();
          await self.$swal({
            icon: "success",
            title: "Thành công",
            text: "Đăng nhập thành công!",
            timer: 1000,
          });
          window.location.href = "/";
        } catch (err) {
          this.$store.commit("LOGIN_FAILED", { err });
          self.$swal({
            icon: "error",
            title: "Đăng nhập thất bại",
            text: "Vui lòng kiểm tra lại email và mật khẩu!",
            timer: 2000,
          });
        }

        // this.$store.dispatch("LOGIN");
        // login(this.$data.form)
        //   .then((res) => {
        //     this.$store.commit("LOGIN_SUCCESS", res.data);
        //     this.addLocalToCart();
        //     self
        //       .$swal({
        //         icon: "success",
        //         title: "Thành công",
        //         text: "Đăng nhập thành công !",
        //         timer: 1000,
        //       })
        //       .then(function () {
        //         window.location.href = "/";
        //       });
        //   })
        //   .catch((err) => {
        //     this.$store.commit("LOGIN_FAILED", { err });
        //     self.$swal(
        //       "Thất bại",
        //       "Vui lòng kiểm tra lại tài khoản và mật khẩu!",
        //       "error"
        //     );
        // });
      }
    },
    async addLocalToCart() {
      let self = this;
      let itemCart = JSON.parse(localStorage.getItem("CART"));
      if (itemCart != null && itemCart.length > 0) {
        if (this.$store.getters.CURRENT_USER) {
          let token = this.$store.getters.CURRENT_USER.token;
          let data = JSON.stringify({
            listProduct: itemCart,
          });
          try {
            const res = await addCartIntoLocal(data, token);
            console.log(res);
            self.$store.commit("REMOVE_CART");
          } catch (error) {
            console.error(error);
          }
        }
      }
    },
  },
  computed: {
    authError() {
      return this.$store.getters.AUTH_ERROR;
    },
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
};
</script>

<style lang="css" scoped>
.l-page-desgin {
  width: 60%;
  padding: 2rem;
  margin: 4rem auto;
  background-color: rgba(172, 170, 170, 0.141);
  border-radius: 10px;
}

/* tiêu đề */
.l-detail-page {
  font-weight: 100;
  display: flex;
  justify-content: center;
}

.l-detail-page > div {
  padding: 1rem 0 0 1rem;
}

.l-detail-page > .l-themes-login-page {
  position: relative;
  padding: 1rem;
}

.l-detail-page > .l-themes-login-page::after {
  position: absolute;
  width: 0.5rem;
  height: 0.5rem;
  content: "";
  background-color: black;
  top: 0;
  bottom: 1;
  left: 1;
  right: 0;
  margin: 3rem 0 0 0.5rem;
}

.l-detail-page > .l-themes-register-page > h1 > a {
  text-decoration: none;
  color: rgba(54, 53, 53, 0.815);
}

.l-detail-page > .l-themes-register-page > h1:hover > a {
  color: black;
}

/* lable */
.l-themes-page > label {
  font-size: 1.1rem;
}

/* input */
.form-login-input-page {
  padding: 1.1rem;
  width: 100%;
  margin: auto;
}

.form-login-input-page > input {
  width: 95%;
  padding: 0.2rem 0.6rem;
  border: 1px solid rgba(218, 217, 217, 0.815);
  height: 3rem;
}

.l-list-button-page {
  width: 97%;
  display: flex;
  justify-content: space-between;
  margin: 1.2rem auto;
}

.l-footer-page > .forgot-password-page > a {
  text-decoration: none;
  color: rgba(54, 53, 53, 0.815);
  line-height: 3.5rem;
  font-size: 1.1rem;
}

.l-footer-page > .forgot-password-page:hover > a {
  color: black;
}

/* register */

.l-list-button-page > .l-button-register-page {
  width: 100%;
  margin: 1rem 0;
}

.l-list-button-page > .l-button-register-page > .register {
  height: 3.6rem;
  width: 100%;
  padding: 0.8rem;

  background-color: black;
  border: 1px solid black;
  color: #fff;
}

.l-list-button-page > .l-button-register-page:hover > .register {
  background-color: #fff;
  border: 1px solid black;
  color: black;
}

/* forgot */
.forgot-design {
  margin: 2rem 0;
  text-align: center;
}

.l-list-button-page > .l-button-login-page-forgot {
  width: 100%;
}

.l-list-button-page > .l-button-login-page-forgot > button {
  height: 3.6rem;
  width: 98%;
  padding: 0.8rem;

  color: #fff;
}

.l-list-button-page > .l-button-login-page-forgot > .submit {
  background-color: black;
  border: 1px solid black;
}

.l-list-button-page > .l-button-login-page-forgot:hover > .submit {
  background-color: #fff;
  border: 1px solid black;
  color: black;
}

/* l-button-login-page-forgot-cancel */
.l-button-login-page-forgot-cancel {
  padding: 0.8rem;
}

.l-button-login-page-forgot-cancel > button {
  height: 3.6rem;
  width: 94.7%;

  border: 1px solid black;
  text-decoration: none;
  color: black;
  background-color: #fff;
}

.l-button-login-page-forgot-cancel > button:hover {
  color: #fff;
  background-color: black;
}

/* login */
.login-desgin {
  margin-top: 8.1rem;
}

.l-detail {
  width: 100%;
  padding: 2rem;
  position: relative;
}

.l-exits {
  font-size: 1.6rem;
  padding: 1rem;
  position: absolute;
  left: 1;
  right: 0;
  top: 0;
  bottom: 1;
  z-index: 2;
}

.modal-body-desgin {
  text-align: center;
}

.form-login-input {
  padding: 1.1rem;
}

.form-login-input > input {
  height: 3.1rem;
  width: 21.85rem;
  padding: 0.8rem;
  border: 1px solid rgba(218, 217, 217, 0.815);
}

.l-modal-footer-detail {
  width: 80%;
  text-align: end;
  display: block;
  margin: 1.1rem 0;
}

.l-modal-footer-detail > .forgot-password > a {
  text-decoration: none;
  color: rgba(65, 60, 60, 0.76);
}

.l-list-button {
  width: 100%;
}

.l-button-register {
  margin: 1.6rem;
}

.l-button-register > .register,
.l-button-login > .login {
  height: 3.6rem;
  width: 21.85rem;
  padding: 0.8rem;
  border: none;
}

.l-button-login > .login {
  background-color: black;
  color: #fff;
}

.l-button-register > .register {
  background-color: #fff;
  border: 1px solid black;
}

.l-button-register > .register:hover {
  background-color: black;
  color: #fff;
}

.l-button-login > .login:hover {
  background-color: #fff;
  border: 1px solid black;
  color: black;
}

/* forget */

.l-detail-forget {
  padding: 2.1rem;
}

.l-list-button-forget {
  width: 100%;
}

.l-list-button-forget > .l-button-login-forget {
  display: flex;
  width: 100%;
  justify-content: center;
}

.l-list-button-forget > .l-button-login-forget > button {
  margin-top: 1.1rem;
  height: 3.6rem;
  width: 30%;
  padding: 0.8rem;
  border: none;
}

.l-list-button-forget > .l-button-login-forget > .cancel {
  margin-left: 0.6rem;
  background-color: #fff;
  border: 1px solid black;
  color: black;
}

.l-list-button-forget > .l-button-login-forget > .submit {
  color: #fff;
  background-color: black;
}

.l-list-button-forget > .l-button-login-forget > .submit:hover {
  color: #fff;
  background-color: #fff;
  border: 1px solid black;
  color: black;
}

.l-list-button-forget > .l-button-login-forget > .cancel:hover {
  background-color: black;
  color: #fff;
}
</style>
