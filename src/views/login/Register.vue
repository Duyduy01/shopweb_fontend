<template>
  <div>
    <div class="main">
      <div class="container">
        <div class="l-page-desgin">
          <div class="l-detail-page">
            <div class="l-themes-login-page">
              <h1>Đăng ký</h1>
            </div>

            <div class="l-themes-register-page">
              <h1>
                <router-link to="/dang-nhap">Đăng nhập</router-link>
              </h1>
            </div>
          </div>
          <form method="POST" @submit.prevent="register" ref="form">
            <div class="form-login-input-page">
              <div class="l-themes-page">
                <label for="email">Email *</label>
              </div>
              <input
                type="email"
                id="email"
                placeholder="Email*"
                name="username"
                v-model.trim="$v.username.$model"
              />
              <div class="error" v-if="submitted && !$v.username.required">
                Tài khoản không thể để trống
              </div>
              <div class="error" v-if="!$v.username.email">
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
                v-model.trim="$v.password.$model"
              />
              <div class="error" v-if="submitted && !$v.password.required">
                Mật khẩu không thể để trống
              </div>
              <div class="error" v-if="!$v.password.minLength">
                Mật khẩu phải có ít nhất
                {{ $v.password.$params.minLength.min }} kí tự.
              </div>
              <div class="error" v-if="!$v.password.maxLength">
                Mật khẩu phải ít hơn {{ $v.password.$params.maxLength.max }} kí
                tự.
              </div>
            </div>
            <div class="form-login-input-page">
              <div class="l-themes-page">
                <label for="password">Nhập lại mật khẩu *</label>
              </div>
              <input
                type="password"
                id="password"
                placeholder="Mật khẩu *"
                name="password"
                v-model.trim="$v.repeatPassword.$model"
              />
              <div
                class="error"
                v-if="submitted && !$v.repeatPassword.required"
              >
                Mật khẩu không thể để trống
              </div>
              <div class="error" v-if="!$v.repeatPassword.sameAsPassword">
                Nhập lại mật khẩu.
              </div>
            </div>
            <div class="form-login-input-page">
              <div class="l-themes-page">
                <label for="fullname">Họ và tên</label>
              </div>
              <input
                type="text"
                id="fullname"
                placeholder="Họ và tên"
                name="fullName"
                v-model.trim="$v.fullName.$model"
              />
              <div class="error" v-if="submitted && !$v.fullName.required">
                Họ và tên không thể để trống
              </div>
              <div class="error" v-if="!$v.fullName.minLength">
                Họ và tên phải có ít nhất
                {{ $v.fullName.$params.minLength.min }} kí tự.
              </div>
              <div class="error" v-if="!$v.fullName.maxLength">
                Họ và tên phải ít hơn {{ $v.fullName.$params.maxLength.max }} kí
                tự.
              </div>
            </div>

            <div class="form-login-input-page">
              <div class="l-themes-page">
                <label for="phone">Số điện thoại *</label>
              </div>
              <input
                type="text"
                id="phone"
                placeholder="Số điện thoại*"
                name="phone"
                v-model.trim="$v.phone.$model"
              />
              <div class="error" v-if="submitted && !$v.phone.required">
                Số điện thoại không thể để trống
              </div>
              <div class="error" v-if="!$v.phone.numeric">
                Số điện thoại phải là số
              </div>
              <div class="error" v-if="!$v.phone.minLength">
                Số điện thoại phải có ít nhất
                {{ $v.phone.$params.minLength.min }} kí tự.
              </div>
              <div class="error" v-if="!$v.phone.maxLength">
                Số điện thoại phải ít hơn
                {{ $v.phone.$params.maxLength.max }} kí tự.
              </div>
            </div>
            <div class="form-login-input-page">
              <div class="l-themes-page">
                <label for="phone">Địa chỉ *</label>
              </div>
              <input
                type="text"
                id="phone"
                placeholder="Địa chỉ*"
                name="address"
                v-model.trim="$v.address.$model"
              />
              <div class="error" v-if="submitted && !$v.address.required">
                Địa chỉ không thể để trống
              </div>
              <div class="error" v-if="!$v.address.minLength">
                Địa chỉ phải có ít nhất
                {{ $v.address.$params.minLength.min }} kí tự.
              </div>
            </div>
            <div class="l-list-button-page">
              <div class="l-button-register-page">
                <button
                  type="click"
                  id="register"
                  class="register"
                  v-loading.fullscreen.lock="fullscreenLoading"
                >
                  Đăng ký
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { registerUserNew } from "@/service/login/authen";
import { validationMixin } from "vuelidate";
import {
  required,
  minLength,
  maxLength,
  email,
  numeric,
  sameAs,
} from "vuelidate/lib/validators";
export default {
  name: "register",
  mixins: [validationMixin],
  data() {
    return {
      username: "",
      password: "",
      repeatPassword: "",
      fullName: "",
      phone: "",
      address: "",
      submitted: false,
      fullscreenLoading: false,
    };
  },
  created() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },
  validations: {
    username: {
      required,
      email,
    },
    password: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    repeatPassword: {
      required,
      sameAsPassword: sameAs("password"),
    },
    fullName: {
      required,
      minLength: minLength(6),
      maxLength: maxLength(20),
    },
    phone: {
      required,
      numeric,
      minLength: minLength(10),
      maxLength: maxLength(11),
    },
    address: {
      required,
      minLength: minLength(10),
    },
  },
  methods: {
    // alterError() {
    //   this.$swal("Đăng ký lỗi", "email đã tồn tại !", "error");
    // },

    async register(e) {
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        console.log("error register");
      } else {
        this.fullscreenLoading = true;
        try {
          const data = JSON.stringify({
            username: this.username,
            password: this.password,
            fullName: this.fullName,
            phone: this.phone,
            address: this.address,
          });
          const res = await registerUserNew(data);
          console.log(res);
          this.fullscreenLoading = false;
          await this.$swal({
            icon: "success",
            title: "Thành công",
            text: "Vui lòng kiểm tra email để lấy mã xác minh tài khoản!",
            timer: 3000,
          });
          const router = "/xac-minh/" + this.username;
          this.$router.push(router);
          this.fullscreenLoading = false;
        } catch (error) {
          this.fullscreenLoading = false;
          console.log(error);
          console.log("that bai");
          await this.$swal({
            icon: "error",
            title: "Đăng ký lỗi",
            text: "email đã tồn tại !",
            timer: 3000,
          });
        }
      }
    },
    // openFullScreen1() {
    //   this.fullscreenLoading = true;
    //   if (this.fullscreenLoading == true) {
    //     setTimeout(() => {
    //       this.fullscreenLoading = false;
    //     }, 3000);
    //   }
    // },
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
  width: 95%;
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
</style>
