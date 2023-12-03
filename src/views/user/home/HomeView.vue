<template>
  <div>
    <Banner />
    <div class="main">
      <div class="container-list">
        <div class="product-new">
          <productOption :title="'Sản phẩm đang được giảm giá'" :productOptionId="4" />
        </div>

        <div class="container-fluid">
          <div class="product-featured-container">
            <div class="featured-one">
              <div class="product-featured-img">
                <div class="featured-over">
                  <router-link :to="listImgHome[0].bannerLink">
                    <img :src="listImgHome[0].img" alt="" srcset="" class="featured-img" />
                  </router-link>
                </div>
              </div>
              <div class="product-featured-img">
                <div class="featured-over">
                  <router-link :to="listImgHome[1].bannerLink">
                    <img :src="listImgHome[1].img" alt="" srcset="" class="featured-img" />
                  </router-link>
                </div>
              </div>
            </div>
            <div class="featured-two">
              <div class="product-featured-img2">
                <div class="featured-over">
                  <router-link :to="listImgHome[2].bannerLink">
                    <img :src="listImgHome[2].img" alt="" srcset="" class="featured-img2" />
                  </router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="product-line">
          <productOption :title="'Sản phẩm mới'" :productOptionId="1" />
        </div>

        <div class="banner-trending mt-4">
          <div class="row">
            <div class="col-12">
              <h3 class="ml-4">Xu hướng</h3>
              <hr />
            </div>
            <div class="col-12 container">
              <div class="row">
                <div class="home-product-list col-6" v-for="trend in listImgTrend" :key="trend.id">
                  <router-link :to="trend.bannerLink">
                    <div class="home-single-gallery-image" :style="`background: url(${trend.img})`">
                    </div>
                  </router-link>
                </div>

                <div class="col-12"></div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <productOption :title="'Sản phẩm mua nhiều nhất'" :productOptionId="3" />
        </div>
        <div class="banner-trending mt-4">
          <div class="row">
            <div class="col-12">
              <h3 class="ml-4">Đặc sắc</h3>
              <hr />
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-4" v-for="fea in listImgFeatured" :key="fea.id">
                <router-link :to="fea.bannerLink">
                  <div class="home-single-gallery-image" :style="`background: url(${fea.img})`">
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
        <div>
          <productOption :title="'Sản phẩm được yêu thích nhất'" :productOptionId="2" />
        </div>
        <div class="banner-trending mt-4">
          <div class="row">
            <div class="col-12">
              <h3 class="ml-4">#Bài viết</h3>
              <hr />
            </div>
            <div class="col-12 container">
              <div class="row">
                <div class="col-4">
                  <div class="post-list">
                    <div class="single-gallery-image-post"
                      :style="'background: url(https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2F7498ad9f-1161-4ce8-9d7e-9d01cba6c40f.webp?alt=media)'">
                    </div>
                  </div>
                  <div class="post-name">
                    <h3>
                      <a>Bài viết về câu kạc bộ Liverpool Sport</a>
                    </h3>
                  </div>
                  <div class="post-date">
                    <span>21:14 18/10/2021</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="post-list">
                    <div class="single-gallery-image-post"
                      :style="'background: url(https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/53ea67ec-0dc6-48ef-95d3-447c6c399df9.webp?alt=media)'">
                    </div>
                  </div>
                  <div class="post-name">
                    <h3>
                      <a>Bài viết về áo thun Jordan Dri-FIT Sport</a>
                    </h3>
                  </div>
                  <div class="post-date">
                    <span>21:14 18/10/2021</span>
                  </div>
                </div>
                <div class="col-4">
                  <div class="post-list">
                    <div class="single-gallery-image-post"
                      :style="'background: url(https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/f07e8212-a319-40dd-9c56-3ee7077b0c31.webp?alt=media)'">
                    </div>
                  </div>
                  <div class="post-name">
                    <h3>
                      <a>Bài viết về áo thun Jordan Dri-FIT Sport</a>
                    </h3>
                  </div>
                  <div class="post-date">
                    <span>21:14 18/10/2021</span>
                  </div>
                </div>
                <div class="col-12 m-4">
                  <div class="btn-more-post">
                    <button>Xem thêm</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from "@/components/layouts/user/elements/BannerNew.vue";
import productOption from "@/views/user/home/ProductHomeComponent.vue";
import { getAllBannerByCode } from "@/service/user/banner";
import {
  getAllProductAll,
  getAllProductByOption,
} from "@/service/user/home.js";

export default {
  watch: {},
  name: "HomeView",
  data() {
    return {
      listProduct: [],
      listProductOption: [],
      countIndex: 0,
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
      productOptionId: 1,
      listImgHome: [],
      listImgTrend: [],
      listImgFeatured: []
    };
  },
  components: {
    Banner,
    productOption
  },
  created() {
    getAllProductAll()
      .then((result) => {
        this.listProduct = result;
      })
      .catch((err) => {
        console.log(err);
      });
    getAllProductByOption(this.productOptionId)
      .then((result) => {
        this.listProductOption = result;
      })
      .catch((err) => {
        console.log(err);
      });
    getAllBannerByCode("HOME_PRODUCT").then(res => {
      this.listImgHome = res
    });
    getAllBannerByCode("HOME_TREND").then(res => {
      this.listImgTrend = res
    });
    getAllBannerByCode("HOME_FEATURED").then(res => {
      this.listImgFeatured = res
    });
    window.scrollTo(0, 0);
  },
  methods: {

  },
  mounted() { },
};
</script>

<style scoped lang="css">
@import url("@/assets/user/css/home.css");
</style>
