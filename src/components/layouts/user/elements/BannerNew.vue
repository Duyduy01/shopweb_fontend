<template>
  <el-carousel indicator-position="outside" height="600px">
    <el-carousel-item v-for="e in banner" :key="e.id">
      <router-link :to="e.bannerLink">
        <img :src="e.img" alt="" srcset="" width="100%" height="100%" />
      </router-link>
    </el-carousel-item>
  </el-carousel>
</template>

<script>
import { getAllBannerByCode } from "@/service/user/banner";
export default {
  data() {
    return {
      banner: [],
    };
  },
  async created() {
    try {
      this.banner = await getAllBannerByCode(this.$route.name);
    } catch (e) {
      console.error(e);
    }
  },
};
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
