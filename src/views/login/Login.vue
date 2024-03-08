<template>
  <div class="ctnr">
    <div class="login xs-flex ai-center js-center">
      <div class="login_title xs-none lg-block">
        <h2>Đăng nhập để thoả thích mua sắm dễ dàng hơn</h2>
      </div>
      <div class="login_form">
        <div class="form_wrapper">
          <form @submit.prevent="login" ref="form">
            <div class="form_insert">
              <div
                :class="isUsernameValid ? 'b' : 'a'"
                class="form_group p-relative xs-flex js-center ai-center"
              >
                <input
                  class="p-absolute"
                  type="email"
                  id="email"
                  name="username"
                  placeholder="Email"
                  v-model.trim="$v.form.username.$model"
                />
                <!-- <label for="email">Email</label> -->
              </div>
              <div
                class="form_error"
                v-if="submitted && !$v.form.username.required"
              >
                Tài khoản không thể để trống
              </div>
              <div class="form_error" v-if="!$v.form.username.email">
                Trường này phải là email.
              </div>
            </div>
            <div class="form_insert">
              <div
                :class="isPasswordValid ? 'b' : 'a'"
                class="form_group p-relative xs-flex js-center ai-center"
              >
                <input
                  class="p-absolute"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Mật khẩu"
                  v-model.trim="$v.form.password.$model"
                />
                <!-- <label for="password">Mật khẩu</label> -->
              </div>
              <div
                class="form_error"
                v-if="submitted && !$v.form.password.required"
              >
                Mật khẩu không thể để trống
              </div>
              <div class="form_error" v-if="!$v.form.password.minLength">
                Mật khẩu phải có ít nhất
                {{ $v.form.password.$params.minLength.min }} kí tự.
              </div>
              <div class="form_error" v-if="!$v.form.password.maxLength">
                Mật khẩu phải ít hơn
                {{ $v.form.password.$params.maxLength.max }} kí tự.
              </div>
            </div>
            <div class="form_check">
              <router-link to="#">Quên mật khẩu?</router-link>
            </div>
            <button
              class="form_button xs-inline-block ta-center w-100"
              type="submit"
              v-loading.fullscreen.lock="fullscreenLoading"
            >
              <span>Đăng nhập</span>
            </button>
          </form>
          <div class="register_link ta-center">
            Bạn chưa có tài khoản?
            <router-link to="/dang-ky">Đăng ký</router-link>
          </div>
        </div>
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
      fullscreenLoading: false,
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
  computed: {
    authError() {
      return this.$store.getters.AUTH_ERROR;
    },
    isUsernameValid() {
      return (
        !this.$v.form.username.$dirty ||
        (this.$v.form.username.required && this.$v.form.username.email)
      );
    },
    isPasswordValid() {
      return (
        !this.$v.form.password.$dirty ||
        (this.$v.form.password.required &&
          this.$v.form.password.minLength &&
          this.$v.form.password.maxLength)
      );
    },
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
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
        this.fullscreenLoading = true;
        try {
          this.$store.dispatch("LOGIN");
          const res = await login(this.$data.form);
          this.$store.commit("LOGIN_SUCCESS", res.data);
          this.addLocalToCart();
          this.fullscreenLoading = false;
          await self.$swal({
            icon: "success",
            title: "Thành công",
            text: "Đăng nhập thành công!",
            timer: 1000,
          });
          window.location.href = "/";
        } catch (err) {
          this.$store.commit("LOGIN_FAILED", { err });
          this.fullscreenLoading = false;
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
};
</script>

<style lang="css" scoped>
.login {
  padding: 3rem 0;
  column-gap: 4.8rem;
}
/*------------------------------------*/
/* title */
/*------------------------------------*/
.login_title {
  width: 39rem;
}
.login_title h2 {
  font-size: 6.2rem;
  font-weight: 600;
  font-style: normal;
  line-height: 1.55;
  margin: 0;
}
/*------------------------------------*/
/* form */
/*------------------------------------*/
.form_insert {
  margin-bottom: 0.8rem;
}
.form_wrapper {
  /* background: #f9f9f9; */
  width: 36rem;
  border: 1px solid rgba(16, 16, 16, 0.1);
  box-shadow: 0 0 4px rgba(16, 16, 16, 0.1);
  border-radius: 0.8rem;
  padding: 1.6rem;
}
.form_group {
  height: 5.4rem;
  background: var(--color-primary);
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-10);
  border-radius: 0.8rem;
  padding: 1.2rem;
  margin-bottom: 0.4rem;
}
.a {
  border-color: red;
}
.b {
  border-color: var(--color-10);
}
/* .form_group label {
  padding-top: 0;
  position: absolute;
  left: 12px;
  margin: 0;
} */
.form_group input,
.form_check a,
.form_button span {
  font-weight: 400;
  line-height: 150%;
}
.form_group input:invalid ~ .form_group {
  border-color: #fe252c;
}
.form_group input:valid ~ .form_group {
  border-color: #ccc;
}
.form_group input {
  border: none;
  width: 89%;
  height: 2.5rem;
  left: 1.2rem;
}
.form_error {
  color: var(--color-red);
  padding: 0 1rem;
}
.form_check {
  margin: 0.8rem 0;
}
.form_check a {
  font-size: 1.2rem;
  color: var(--color-9);
}
.form_button {
  padding: 0.7rem 2rem 0.8rem;
  background: linear-gradient(135deg, #fce6f7, #d5d0f0);
  border-radius: 99rem;
}
.form_button span {
  background: linear-gradient(135deg, #ed55c7, #6756ca);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-family: var(--font-inter);
  margin: 0 0.8rem;
}
.register_link {
  margin: 1.9rem 0;
}
.register_link a {
  background: linear-gradient(135deg, #ed55c7, #6756ca);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 600;
}
::placeholder {
  color: var(--color-8);
}
::-moz-placeholder {
  color: var(--color-8);
}
::-webkit-input-placeholder {
  color: var(--color-8);
}
/* .form_group input:invalid ~ label,
.form_group input ~ label {
  font-size: 14px;
  line-height: 150%;
  color: #b3b3b3;
  top: 50%;
  transform: translateY(-50%);
  /* transition: all 0.2s ease-in-out;
} */
/* .form_group input:valid:not(:placeholder-shown) ~ label {
  font-size: 12px;
  line-height: 150%;
  top: 11%;
  transform: unset;
} */
@media only screen and (max-width: 380px) {
  .form_wrapper {
    width: 30rem;
    border: unset;
    box-shadow: unset;
  }
}
@media only screen and (min-width: 576px) {
  .login {
    padding: 9rem 0;
  }
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
