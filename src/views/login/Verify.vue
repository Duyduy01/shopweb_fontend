<template>
  <div class="ctnr">
    <div class="verify xs-flex fd-column ai-center">
      <div class="verify_title ta-center">
        <h2>Xác nhận email</h2>
        <p>Chúng tôi sẽ gửi cho bạn một email hãy kiểm tra và xác nhập code.</p>
      </div>
      <div class="form_wrapper">
        <form @submit.prevent="verify" ref="form">
          <!-- <div class="l-themes-page">
            <label for="email">Mã xác nhận:</label>
          </div> -->
          <div class="form_insert">
            <div class="form_group p-relative">
              <input
                class="p-absolute"
                type="text"
                id="email"
                placeholder="Mã xác nhận"
                name="verificationCode"
                v-model="code"
              />
            </div>
            <!-- <div class="error" v-if="submitted && !$v.code.required" >Nhập mã xác nhận</div>
                    <div class="error" v-if="!$v.code.minLength">Mã xác nhận phải có {{$v.code.$params.maxLength.max}} kí tự.</div>
                     <div class="error" v-if="!$v.code.maxLength">Mã xác nhận phải có {{$v.code.$params.maxLength.max}} kí tự.</div> -->
          </div>
          <div class="form_button xs-flex js-around ai-center">
            <button
              type="submit"
              id="login"
              class="submit"
              v-loading.fullscreen.lock="fullscreenLoading"
            >
              <span>Xác nhận</span>
            </button>
            <button
              type="button"
              id="login"
              @click="sendCodeToEmail"
              v-loading.fullscreen.lock="fullscreenLoading"
            >
              <span>Gửi lại</span>
            </button>
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
      fullscreenLoading: false,
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
          title: "Xác nhận thất bại",
          text: "Mã xác nhận không đúng!",
          timer: 1500,
        });
      } else {
        this.fullscreenLoading = true;
        try {
          const data = JSON.stringify({
            email: this.email,
            verificationCode: this.code,
          });
          const res = await verifyEmail(data);
          console.log(res);
          this.fullscreenLoading = false;
          await this.$swal({
            icon: "success",
            title: "Thành công",
            text: "Đăng ký thành công!",
            timer: 1000,
          });
          this.$router.push("/dang-nhap");
        } catch (error) {
          this.fullscreenLoading = false;
          console.error(error);
          console.error("that bai");
          await this.$swal({
            icon: "error",
            title: "Xác nhận thất bại",
            text: "Mã xác nhận không đúng!",
            timer: 1500,
          });
        }
      }
    },
    async sendCodeToEmail() {
      this.fullscreenLoading = true;
      try {
        const data = JSON.stringify({
          email: this.email,
        });
        const res = await sendToCode(data);
        console.log(res);
        this.fullscreenLoading = false;
        this.$swal({
          icon: "success",
          title: "Gửi mã xác nhận thành công",
          text: "Quý khách vui lòng kiểm tra gmail sử dụng để đăng ký tài khoản!",
          timer: 3000,
        });
      } catch (error) {
        console.log(error);
        console.log("that bai");
        this.fullscreenLoading = false;
        this.$swal({
          icon: "error",
          title: "Gửi mã xác nhận thất bại",
          text: "Quý khách vui lòng gửi lại mã xác nhận!",
          timer: 1500,
        });
      }
    },
  },
};
</script>

<style lang="css" scoped>
.verify {
  padding: 3rem 0;
}
/*------------------------------------*/
/* title */
/*------------------------------------*/
.verify_title {
  padding-bottom: 3rem;
}
.verify_title h2 {
  font-size: 3.1rem;
  line-height: 1.5;
}
.verify_title p {
  padding-top: 0.5rem;
}
/*------------------------------------*/
/* form */
/*------------------------------------*/
.form_wrapper {
  width: 36rem;
  border: 1px solid rgba(16, 16, 16, 0.1);
  box-shadow: 0 0 4px rgba(16, 16, 16, 0.1);
  border-radius: 0.8rem;
  padding: 1.6rem;
  margin-bottom: 1rem;
}
.form_insert {
  margin-bottom: 0.8rem;
}
.form_group,
.form_group input {
  background: var(--color-11);
}
.form_group {
  height: 5.4rem;
  border-width: 1px;
  border-style: solid;
  border-color: var(--color-10);
  border-radius: 0.8rem;
  padding: 1.2rem;
  margin-bottom: 0.4rem;
}
.form_group input,
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
.form_button {
  margin-top: 1.6rem;
}
.form_button button {
  width: 13rem;
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
::placeholder {
  color: var(--color-8);
}
::-moz-placeholder {
  color: var(--color-8);
}
::-webkit-input-placeholder {
  color: var(--color-8);
}
@media only screen and (max-width: 380px) {
  .verify_title {
    padding-bottom: unset;
  }
  .form_wrapper {
    width: 30rem;
    border: unset;
    box-shadow: unset;
  }
}
@media only screen and (min-width: 576px) {
  .verify {
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
