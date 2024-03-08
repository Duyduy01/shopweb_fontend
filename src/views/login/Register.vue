<template>
  <div class="ctnr">
    <div class="login xs-flex ai-center js-center">
      <div class="login_title xs-none lg-block">
        <h2>Đăng ký để nhận ưu đãi đặc biệt từ chúng tôi</h2>
      </div>
      <div class="login_form">
        <div class="form_wrapper">
          <form @submit.prevent="register" ref="form">
            <div class="form_insert">
              <div class="form_group p-relative xs-flex js-center ai-center">
                <input
                  class="p-absolute"
                  type="email"
                  id="email"
                  placeholder="Email"
                  name="username"
                  v-model.trim="$v.username.$model"
                />
              </div>
              <div class="form_error" v-if="submitted && !$v.username.required">
                Tài khoản không thể để trống
              </div>
              <div class="form_error" v-if="!$v.username.email">
                Trường này phải là email.
              </div>
            </div>
            <div class="form_insert">
              <div class="form_group p-relative xs-flex js-center ai-center">
                <input
                  class="p-absolute"
                  type="password"
                  id="password"
                  placeholder="Mật khẩu"
                  name="password"
                  v-model.trim="$v.password.$model"
                />
              </div>
              <div class="form_error" v-if="submitted && !$v.password.required">
                Mật khẩu không thể để trống
              </div>
              <div class="form_error" v-if="!$v.password.minLength">
                Mật khẩu phải có ít nhất
                {{ $v.password.$params.minLength.min }} kí tự.
              </div>
              <div class="form_error" v-if="!$v.password.maxLength">
                Mật khẩu phải ít hơn {{ $v.password.$params.maxLength.max }} kí
                tự.
              </div>
            </div>
            <div class="form_insert">
              <div class="form_group p-relative xs-flex js-center ai-center">
                <input
                  class="p-absolute"
                  type="password"
                  id="password"
                  placeholder="Xác nhận lại mật khẩu"
                  name="password"
                  v-model.trim="$v.repeatPassword.$model"
                />
              </div>
              <div
                class="form_error"
                v-if="submitted && !$v.repeatPassword.required"
              >
                Mật khẩu không thể để trống
              </div>
              <div
                class="form_error"
                v-if="
                  submitted &&
                  $v.repeatPassword.required &&
                  !$v.repeatPassword.sameAsPassword
                "
              >
                Mật khẩu đã nhập không khớp
              </div>
            </div>
            <div class="form_insert">
              <div class="form_group p-relative xs-flex js-center ai-center">
                <input
                  class="p-absolute"
                  type="text"
                  id="fullname"
                  placeholder="Họ và tên"
                  name="fullName"
                  v-model.trim="$v.fullName.$model"
                />
              </div>
              <div class="form_error" v-if="submitted && !$v.fullName.required">
                Họ và tên không thể để trống
              </div>
              <div class="form_error" v-if="!$v.fullName.minLength">
                Họ và tên phải có ít nhất
                {{ $v.fullName.$params.minLength.min }} kí tự.
              </div>
              <div class="form_error" v-if="!$v.fullName.maxLength">
                Họ và tên phải ít hơn {{ $v.fullName.$params.maxLength.max }} kí
                tự.
              </div>
            </div>

            <div class="form_insert">
              <div class="form_group p-relative xs-flex js-center ai-center">
                <input
                  class="p-absolute"
                  type="text"
                  id="phone"
                  placeholder="Số điện thoại"
                  name="phone"
                  v-model.trim="$v.phone.$model"
                />
              </div>
              <div class="form_error" v-if="submitted && !$v.phone.required">
                Số điện thoại không thể để trống
              </div>
              <div class="form_error" v-if="!$v.phone.numeric">
                Số điện thoại phải là số
              </div>
              <div
                class="form_error"
                v-if="!$v.phone.minLength && $v.phone.numeric"
              >
                Số điện thoại phải có ít nhất
                {{ $v.phone.$params.minLength.min }} kí tự.
              </div>
              <div
                class="form_error"
                v-if="!$v.phone.maxLength && $v.phone.numeric"
              >
                Số điện thoại phải ít hơn
                {{ $v.phone.$params.maxLength.max }} kí tự.
              </div>
            </div>
            <div class="form_insert">
              <div class="form_group p-relative xs-flex js-center ai-center">
                <input
                  class="p-absolute"
                  type="text"
                  id="phone"
                  placeholder="Địa chỉ"
                  name="address"
                  v-model.trim="$v.address.$model"
                />
              </div>
              <div class="form_error" v-if="submitted && !$v.address.required">
                Địa chỉ không thể để trống
              </div>
              <div class="form_error" v-if="!$v.address.minLength">
                Địa chỉ phải có ít nhất
                {{ $v.address.$params.minLength.min }} kí tự.
              </div>
            </div>
            <button
              class="form_button xs-inline-block ta-center w-100"
              type="submit"
              v-loading.fullscreen.lock="fullscreenLoading"
            >
              <span>Đăng ký</span>
            </button>
          </form>
          <div class="register_link ta-center">
            Bạn đã có tài khoản?
            <router-link to="/dang-nhap">Đăng nhập</router-link>
          </div>
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
        } catch (error) {
          this.fullscreenLoading = false;
          console.log(error);
          console.log("that bai");
          await this.$swal({
            icon: "error",
            title: "Đăng ký lỗi",
            text: "Email đã tồn tại!",
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
  margin-top: 1.6rem;
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
