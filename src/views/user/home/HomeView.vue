<template>
  <div class="app_wrapper">
    <!-- <template v-if="isLoading">
      <div>Loading...</div>
    </template> -->
    <!-- <template v-if="!isLoading"> -->
    <home-loader :isLoaded="isLoaded" />
    <Banner />
    <section class="home">
      <div class="ctnr">
        <div class="home_product_sale section-mg">
          <productOption
            :title="'Sản phẩm đang được giảm giá'"
            :productOptionId="4"
          />
        </div>
        <section class="home_intro section-mg" v-if="listImgHome.length > 0">
          <div class="home_intro_wrapper">
            <div
              :class="`home_intro_child home_intro_child${item.number}`"
              v-for="(item, index) in listImgHome"
              :key="index"
            >
              <router-link :to="item.bannerLink">
                <div :class="`p-relative home_intro_item${item.number}`">
                  <img
                    class="p-absolute top-0 right-0 left-0 h-100 w-100"
                    :src="item.img"
                    :alt="item.bannerName"
                  />
                </div>
              </router-link>
            </div>
            <!-- <div class="home_intro_item1">1</div>
            <div class="home_intro_item2">2</div>
            <div class="home_intro_item3">3</div> -->
          </div>
        </section>

        <section class="home_product_new section-mg">
          <productOption :title="'Sản phẩm mới'" :productOptionId="1" />
        </section>

        <div class="home_trending section-mg" v-if="listTrend.length > 0">
          <div class="home_title xs-flex ai-center">
            <div class="home_content">
              <h2>Xu hướng</h2>
            </div>
          </div>
          <div class="home_trending_main row">
            <div
              class="home_trending_item col-12 col-md-6"
              v-for="trend in listTrend"
              :key="trend.id"
            >
              <router-link
                class="p-relative xs-block h-100"
                :to="trend.bannerLink"
              >
                <img
                  class="p-absolute top-0 right-0 left-0 w-100 h-100"
                  :src="trend.img"
                  :alt="trend.bannerName"
                />
                <div class="home_td_it_content p-absolute xs-flex js-flex-end">
                  <h3 v-html="formatBannerTitle(trend.bannerName)"></h3>
                  <button>KHÁM PHÁ NGAY</button>
                </div>
              </router-link>
            </div>
          </div>
        </div>

        <div class="home_product_buy section-mg">
          <productOption
            :title="'Sản phẩm mua nhiều nhất'"
            :productOptionId="3"
          />
        </div>

        <div class="home_featured section-mg" v-if="listFeatured.length > 0">
          <div class="home_title xs-flex ai-center">
            <div class="home_content">
              <h2>Đặc sắc</h2>
            </div>
          </div>
          <div class="home_featured_main xs-flex">
            <div
              class="home_featured_item"
              v-for="featured in listFeatured"
              :key="featured.id"
            >
              <router-link class="xs-block h-100" :to="featured.bannerLink">
                <img
                  class="top-0 right-0 left-0 w-100 h-100"
                  :src="featured.img"
                  :alt="featured.bannerName"
                />
                <!-- <div class="home_td_it_content p-absolute xs-flex js-flex-end">
                  <h3 v-html="formatBannerTitle(trend.bannerName)"></h3>
                  <button>KHÁM PHÁ NGAY</button>
                </div> -->
              </router-link>
            </div>
          </div>
          <!-- <div class="row">
            <div class="col-12">
              <h3 class="ml-4">Đặc sắc</h3>
              <hr />
            </div>
          </div>
          <div class="container">
            <div class="row">
              <div class="col-4" v-for="fea in listImgFeatured" :key="fea.id">
                <router-link :to="fea.bannerLink">
                  <div
                    class="home-single-gallery-image"
                    :style="`background: url(${fea.img})`"
                  ></div>
                </router-link>
              </div>
            </div>
          </div> -->
        </div>

        <div class="home_product_like section-mg">
          <productOption
            :title="'Sản phẩm được yêu thích nhất'"
            :productOptionId="2"
          />
        </div>

        <!-- <div class="home_posts section-mg">
          <div class="home_title xs-flex ai-center">
            <div class="home_content">
              <h2>Bài viết</h2>
            </div>
          </div>
          <div class="row">
            <div class="col-12 container">
              <div class="row">
                <div class="col-4">
                  <div class="post-list">
                    <div
                      class="single-gallery-image-post"
                      :style="'background: url(https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/banner%2F7498ad9f-1161-4ce8-9d7e-9d01cba6c40f.webp?alt=media)'"
                    ></div>
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
                    <div
                      class="single-gallery-image-post"
                      :style="'background: url(https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/53ea67ec-0dc6-48ef-95d3-447c6c399df9.webp?alt=media)'"
                    ></div>
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
                    <div
                      class="single-gallery-image-post"
                      :style="'background: url(https://firebasestorage.googleapis.com/v0/b/san-ho-do-an-dai-duong.appspot.com/o/f07e8212-a319-40dd-9c56-3ee7077b0c31.webp?alt=media)'"
                    ></div>
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
        </div> -->
      </div>
    </section>
    <!-- </template> -->
  </div>
</template>

<script>
// @ is an alias to /src
import HomeLoader from "@/components/layouts/loader/HomeLoader.vue";
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
  components: {
    Banner,
    productOption,
    HomeLoader,
  },
  data() {
    return {
      listProduct: [],
      listProductOption: [],
      countIndex: 0,
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
      productOptionId: 1,
      listImgHome: [],
      listTrend: [],
      listFeatured: [],
      isLoaded: false,
      isProductLoading: true,
      // Khởi tạo một object để lưu trạng thái của từng component con
      componentRendered: {
        product1: false,
        product2: false,
        product3: false,
        product4: false,
      },
      // Biến để kiểm tra xem tất cả các component con đã được hiển thị hay chưa
      allComponentsRendered: false,
    };
  },
  created() {
    window.scrollTo(0, 0);
    // getAllBannerByCode("HOME_PRODUCT").then((res) => {
    //   this.listImgHome = res;
    // });
    // getAllBannerByCode("HOME_TREND").then((res) => {
    //   this.listTrend = res;
    // });
    // getAllBannerByCode("HOME_FEATURED").then((res) => {
    //   this.listFeatured = res;
    // });
    Promise.all([
      getAllBannerByCode("HOME_PRODUCT"),
      getAllBannerByCode("HOME_TREND"),
      getAllBannerByCode("HOME_FEATURED"),
    ])
      .then((responses) => {
        this.listImgHome = responses[0];
        this.listTrend = responses[1];
        this.listFeatured = responses[2];

        this.checkAllComponentsRendered();
      })
      .catch((err) => {
        this.checkAllComponentsRendered();
      });
  },
  mounted() {},
  methods: {
    // Hàm để kiểm tra xem tất cả các component con đã được hiển thị hay chưa
    checkAllComponentsRendered() {
      // Kiểm tra xem tất cả các trạng thái của component con đã là true hay không
      this.allComponentsRendered = Object.values(this.componentRendered).every(
        (rendered) => rendered
      );
      // Nếu tất cả các component con đã được hiển thị, gọi hàm handleLoad()
      if (this.allComponentsRendered) {
        this.handleLoad();
      }
    },
    handleLoad() {
      // Kiểm tra khi phần tử hoặc component đã load xong
      setTimeout(() => {
        this.isLoaded = true;
      }, 1000);
    },
    // handleDataLoaded() {
    //   console.log(1);
    //   this.promises.push(Promise.resolve());
    //   this.emitAllComponentsReady();
    // },
    // emitAllComponentsReady() {
    //   // Sử dụng Promise.all để chờ tất cả các lời hứa hoàn thành
    //   Promise.all(this.promises).then(() => {
    //     // Khi tất cả các lời hứa đã được giải quyết, phát ra sự kiện 'allComponentsReady'
    //     console.log("hihihaha");
    //   });
    // },
    formatBannerTitle(title) {
      // Split the words and join them with <br> between each word
      return title.split(" ").join("<br>");
    },
  },
  // mounted() {},
};
</script>

<style scoped lang="css">
@import url("@/assets/user/css/home.css");
.section-mg {
  margin-top: 3rem;
}
.home_title {
  margin-bottom: 1.2rem;
}
.home_content {
  margin: 1.1rem 0;
}
.home {
  margin-bottom: 2rem;
}
/*------------------------------------*/
/* Home intro */
/*------------------------------------*/
.home_intro_wrapper {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 0.8rem;
  grid-row-gap: 0.8rem;
}
.home_intro_child1 {
  grid-row: 1/3;
  grid-column: 1/2;
}
.home_intro_child2 {
  grid-row: 1/2;
  grid-column: 2/3;
}
.home_intro_child3 {
  grid-row: 2/3;
  grid-column: 2/3;
}
.home_intro_item1 {
  padding-top: calc(100% + 0.8rem);
  overflow: hidden;
}
.home_intro_item2,
.home_intro_item3 {
  padding-top: 50%;
  overflow: hidden;
}
.home_intro_item1::before,
.home_intro_item2::before,
.home_intro_item3::before {
  content: "";
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  border: 1px solid var(--color-1);
  opacity: 0.5;
  z-index: 1;
}
.home_intro_wrapper img {
  transition: transform 3s;
}
.home_intro_child:hover img {
  transform: scale(1.3);
}
/*------------------------------------*/
/* home trending */
/*------------------------------------*/
.home_trending_main {
  row-gap: 0.8rem;
}
.home_trending_main a {
  border-radius: 2px;
  overflow: hidden;
  padding-top: 100%;
}
.home_trending_main img,
.home_featured_main .home_featured_item img {
  aspect-ratio: 1/1;
  object-fit: cover;
}
.home_td_it_content {
  bottom: 10%;
  left: 2rem;
  height: 90%;
  flex-flow: column;
}
.home_td_it_content h3 {
  text-transform: uppercase;
  margin: 2rem 0;
  color: var(--color-primary);
  line-height: 1.2;
  font-weight: 500;
  font-size: 3.6rem;
}
.home_td_it_content button {
  border-radius: 100vmax;
  background-color: var(--color-primary);
  font-weight: 400;
  line-height: 1.25;
  padding: 1.9rem 2.4rem;
  width: max-content;
  transition: background 0.2s;
}
.home_td_it_content button:hover {
  background-color: var(--color-3);
}
/*------------------------------------*/
/* home featured */
/*------------------------------------*/
.home_featured_main {
  padding-bottom: 1rem;
  column-gap: 0.8rem;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  -webkit-scroll-snap-type: x mandatory;
  scrollbar-width: thin;
  -webkit-scrollbar-width: thin;
}
.home_featured_main .home_featured_item {
  flex: 1 1 0%;
  /* scroll-snap-align: start; */
}
.home_featured_main .home_featured_item a {
  min-width: 30rem;
}
/*------------------------------------*/
/* home featured */
/*------------------------------------*/
@media only screen and (min-width: 576px) {
  .section-mg {
    margin-top: 5rem;
  }
  .home_intro_wrapper {
    grid-column-gap: 1.2rem;
    grid-row-gap: 1.2rem;
  }
  .home_intro_item1 {
    padding-top: calc(100% + 1.2rem);
  }
  .home_trending_main {
    row-gap: 1.2rem;
  }
  .home_featured_main {
    column-gap: 1.2rem;
  }
  /* .home_trending_main .home_trending_item {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  } */
}
@media only screen and (min-width: 768px) {
  .home_trending_main {
    row-gap: 0;
  }
  .home_trending_main .home_trending_item {
    padding-left: 0.6rem;
    padding-right: 0.6rem;
  }
  /* .home_trending_main a {
    padding-top: 50rem;
  } */
  .home_td_it_content h3 {
    font-size: 4.4rem;
  }
  .home_td_it_content button {
    padding: 1.4rem 4rem;
  }
}
@media only screen and (min-width: 992px) {
  .section-mg {
    margin-top: 8.4rem;
  }
  .home {
    margin-bottom: 5.6rem;
  }
  .home_intro_wrapper {
    grid-column-gap: 1.6rem;
    grid-row-gap: 1.6rem;
  }
  .home_intro_item1 {
    padding-top: calc(76% + 1.6rem);
  }
  .home_intro_item2,
  .home_intro_item3 {
    padding-top: 38%;
  }
  .home_trending_main .home_trending_item {
    padding-left: 0.8rem;
    padding-right: 0.8rem;
  }
  .home_td_it_content {
    left: 4rem;
  }
  .home_featured_main {
    column-gap: 1.6rem;
  }
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
