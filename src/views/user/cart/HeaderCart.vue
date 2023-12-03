<template>
  <div>
    <div class="container">
      <el-steps :active="active" finish-status="success">
        <el-step title="Giỏ hàng"></el-step>
        <el-step title="Đặt hàng"></el-step>
        <el-step title="Hoàn tất"></el-step>
      </el-steps>
    </div>
  </div>
</template>

<script>
export default {
   props: {
    activeValue: Number
  },
  data() {
    return {
      active: this.activeValue,
    };
  },
};
</script>

<style lang="scss" scoped>
.header {
  width: 30%;
  margin: 2rem auto;
}
</style>
