<template>
  <div  class="mt-5">
    <HeaderCart :activeValue="activeValue" />
    <div class="container mt-5">
      <div class="text-center">
        <h4>Quý khách đặt hàng thành công</h4>
        <p>Đơn hàng đang trong quá trình xác nhận</p>
        <div>
          <button
            type="button"
            class="btn btn-outline-dark"
            @click="cancelHome"
          >
            Quay lại trang chủ
          </button>

          <button type="button" class="btn btn-outline-dark ml-4" @click="billInfo">
            Kiểm tra đơn hàng
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCart from "@/views/user/cart/HeaderCart.vue";

export default {
  data() {
    return {
      activeValue: 3,
    };
  },
  components: {
    HeaderCart,
  },
  created() { window.scrollTo(0, 0);},
  methods: {
    cancelHome() {
      this.$router.push("/");
    },
    billInfo(){
      this.$router.push("/don-dat");
    }
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/user/css/bill");
.product-name {
  padding: 1rem;
}
.product-speciality {
  color: black;
  background-color: white;
  padding: 0.2rem;
  border: 1px solid rgba(176, 175, 175, 0.486);
  margin: 0.5rem 0.5rem 0 0;
}
</style>
