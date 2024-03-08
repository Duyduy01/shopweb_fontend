<template>
  <section class="banner" v-if="banner.length > 0">
    <VueSlickCarousel v-bind="settings" class="h-100">
      <div
        v-for="(e, index) in banner"
        :key="index"
        class="banner_wrapper p-relative"
      >
        <router-link
          :to="e.bannerLink"
          class="p-absolute h-100 top-0 right-0 left-0"
        >
          <img :src="e.img" alt="" srcset="" class="w-100 h-100" />
        </router-link>
      </div>
    </VueSlickCarousel>

    <!-- <el-carousel indicator-position="outside" height="600px">
      <el-carousel-item v-for="e in banner" :key="e.id">
        <router-link :to="e.bannerLink">
          <img :src="e.img" alt="" srcset="" width="100%" height="100%" />
        </router-link>
      </el-carousel-item>
    </el-carousel> -->
  </section>
</template>

<script>
import { getAllBannerByCode } from "@/service/user/banner";
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";
export default {
  components: { VueSlickCarousel },
  data() {
    return {
      banner: [],
      //settings banner slide
      settings: {
        dots: true,
        arrows: true,
        dotsClass: "slick-dots custom-dot-class",
        edgeFriction: 0.35,
        infinite: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
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
@import url("@/assets/css/slick.css");
.banner {
  height: 25rem;
}
.banner_wrapper {
  padding-top: 25rem;
}
.slick-dots li button:before {
  font-size: 1rem;
}
@media only screen and (min-width: 576px) {
  .banner {
    height: 50rem;
  }
  .banner_wrapper {
    padding-top: 50rem;
  }
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
  .banner {
    height: 60rem;
  }
  .banner_wrapper {
    padding-top: 60rem;
  }
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
