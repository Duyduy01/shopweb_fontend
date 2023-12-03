<template>
  <div>
    <HeaderCart :activeValue="activeValue" />
    <div class="container mt-5">
      <div class="text-center">
        <h4>Thành công</h4>
        <p>Quý khách đã tạo sự kiện thành công</p>
        <div>
          <button
            type="button"
            class="btn btn-outline-dark"
            @click="cancelCampain"
          >
            Quay lại
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
    cancelCampain() {
      this.$router.push("/admin/campaign");
    },
 
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
