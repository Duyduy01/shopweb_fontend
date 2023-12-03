<template>
  <div>
    <div class="container">
      <div class="l-page-desgin">
        <div class="l-detail-page-forgot forgot-design">
          <div>
            <h1>Xác nhận email</h1>
          </div>
          <div>
            <p>
              Chúng tôi sẽ gửi cho bạn một email hãy kiểm tra và xác nhập code.
            </p>
          </div>
        </div>
        <form method="" @submit.prevent="verify" ref="form">
          <div class="form-login-input-page">
            <div class="l-themes-page">
              <label for="email">Mã xác nhận *</label>
            </div>
            <input
              type="text"
              id="email"
              placeholder="Mã xác nhận *"
              name="verificationCode"
              v-model="code"
            />
            <!-- <div class="error" v-if="submitted && !$v.code.required" >Nhập mã xác nhận</div>
                <div class="error" v-if="!$v.code.minLength">Mã xác nhận phải có {{$v.code.$params.maxLength.max}} kí tự.</div>
                 <div class="error" v-if="!$v.code.maxLength">Mã xác nhận phải có {{$v.code.$params.maxLength.max}} kí tự.</div> -->
          </div>

          <div class="l-list-button-page">
            <div class="l-button-login-page-forgot text-center">
              <button type="submit" id="login" class="submit">Xác nhận</button>
              <button
                class="ml-2 sendTo"
                type="button"
                id="login"
                @click="sendCodeToEmail"
              >
                Gửi lại
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { validationMixin } from "vuelidate";
import {
  required,
  numeric,
  maxLength,
  minLength,
} from "vuelidate/lib/validators";
import { verifyEmail, sendToCode } from "@/service/login/authen";
export default {
  name: "Verify",
  mixins: [validationMixin],
  props: ["email"],
  data() {
    return {
      code: "",
      submitted: false,
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  validations: {
    code: {
      required,
      numeric,
      minLength: minLength(6),
      maxLength: maxLength(6),
    },
  },
  methods: {
    check() {
      console.log("user" + localStorage.getItem("user"));
    },
    async verify(e) {
      e.preventDefault();
      this.submitted = true;
      this.$v.$touch();
      if (this.$v.$invalid) {
        await this.$swal({
          icon: "error",
          title: "Xác nhận",
          text: "Mã xác nhận không đúng!",
          timer: 1500,
        });
      } else {
        try {
          const data = JSON.stringify({
            email: this.email,
            verificationCode: this.code,
          });
          const res = await verifyEmail(data);
          console.log(res);
          await this.$swal({
            icon: "success",
            title: "Thành công",
            text: "Đăng ký thành công!",
            timer: 1000,
          });
          this.$router.push("/dang-nhap");
        } catch (error) {
          console.error(error);
          console.error("that bai");
          await this.$swal({
            icon: "error",
            title: "Xác nhận",
            text: "Mã xác nhận không đúng!",
            timer: 1500,
          });
        }
      }
    },
    async sendCodeToEmail() {
      try {
        const data = JSON.stringify({
          email: this.email,
        });
        const res = await sendToCode(data);
        console.log(res);
        this.$swal({
          icon: "success",
          title: "Gửi mã xác nhận thành công",
          text: "Quý khách vui lòng kiểm tra gmail sử dụng để đăng ký tài khoản!",
          timer: 1500,
        });
      } catch (error) {
        console.log(error);
        console.log("that bai");
        this.$swal({
          icon: "error",
          title: "Xác nhận thất bại",
          text: "Quý khách vui lòng gửi lại mã xác nhận!",
          timer: 1500,
        });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.l-page-desgin {
  width: 60%;
  padding: 2rem;
  margin: auto;
}

/* tiêu đề */
.l-detail-page {
  font-weight: 100;
  display: flex;
  justify-content: center;
}

.l-detail-page > div {
  padding: 1.5rem 0 0 1rem;
}

.l-detail-page > .l-themes-login-page {
  position: relative;
  padding: 1.5rem;
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
  width: 100%;
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

  padding: 0.8rem;

  color: #fff;
}

.l-list-button-page > .l-button-login-page-forgot > .submit {
  background-color: black;
  border: 1px solid black;
}

.l-list-button-page > .l-button-login-page-forgot > .submit:hover {
  background-color: #fff;
  border: 1px solid black;
  color: black;
}

/* l-button-login-page-forgot-cancel */
.l-button-login-page-forgot-cancel {
  padding: 0.8rem;
}

.sendTo {
  color: #fff;
  background-color: black;
}

.l-list-button-page > .l-button-login-page-forgot > .sendTo:hover {
  background-color: #fff;
  border: 1px solid black;
  color: black;
}
</style>
