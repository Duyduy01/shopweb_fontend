<template>
  <div>
    <div class="container">
      <div><h4 class="text-center">Thông tin đơn hàng</h4></div>
      <el-tabs type="border-card" v-model="billIndex">
        <el-tab-pane label="Tất cả"
          ><div v-if="billIndex == 0">
            <BillDetail :billIndex="billIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Chờ xác nhận"
          ><div v-if="billIndex == 1"><BillDetail :billIndex="billIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Chờ đóng hàng"
          ><div v-if="billIndex == 2"><BillDetail :billIndex="billIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Đang chuyển hàng"
          ><div v-if="billIndex == 3"><BillDetail :billIndex="billIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Đang giao"
          ><div v-if="billIndex == 4"><BillDetail :billIndex="billIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Thành công"
          ><div v-if="billIndex == 5"><BillDetail :billIndex="billIndex" /></div
        ></el-tab-pane>
        <el-tab-pane label="Đã hủy"
          ><div v-if="billIndex == 6"><BillDetail :billIndex="billIndex" /></div
        ></el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
import BillDetail from "@/views/user/bill/BillDetailUserView.vue";
export default {
  components: {
    BillDetail,
  },
  name: "BillView",
  data() {
    return {
      billIndex: 0,
      ListBill: [],
    };
  },
  created() {},
  methods: {
    // handleClick() {
    //   console.log(this.billIndex);
    // },
    // getAllBill() {},
  },
  mounted() {},
};
</script>

<style scoped>
@import url("@/assets/user/css/home.css");
</style>
