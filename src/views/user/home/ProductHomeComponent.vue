<template>
  <div v-if="listProduct.length > 0">
    <div class="home_product_title xs-flex js-between ai-center">
      <div class="home_product_content">
        <h2>{{ title }}</h2>
      </div>
      <div class="home_product_btn xs-flex ai-center">
        <div v-if="productOptionId == 1">
          <router-link to="/san-pham/0">Shop</router-link>
        </div>
        <button
          class="btn-slick-arrow btn-slick-prev xs-none md-flex js-center ai-center"
          @click="showPrev"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-left" />
        </button>
        <button
          class="btn-slick-arrow btn-slick-next xs-none md-flex js-center ai-center"
          @click="showNext"
        >
          <font-awesome-icon icon="fa-solid fa-chevron-right" />
        </button>
      </div>
    </div>
    <div class="home_product_wrapper">
      <VueSlickCarousel
        class="h-100"
        v-bind="settings"
        v-if="listProduct.length > 0"
        ref="carousel"
      >
        <div
          class="home_product_main"
          v-for="item in listProduct"
          :key="item.id"
        >
          <div class="home_product_item p-relative">
            <router-link :to="'/chi-tiet-san-pham/' + item.id">
              <div class="home_pr_it_pic p-relative">
                <img :src="item.img" :alt="item.productName" />
                <div
                  class="home_pr_it_review p-absolute"
                  v-if="item.rate > 0 && item.totalRate > 0"
                >
                  <div class="xs-flex ai-center">
                    <div>{{ item.rate }}</div>
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <div class="home_pr_it_totalRate">
                      ({{ item.totalRate }})
                    </div>
                  </div>
                </div>
              </div>
              <div class="home_pr_it_content">
                <h4 class="">
                  {{ item.productName }}
                </h4>
                <div class="home_pr_it_sold xs-flex fw-wrap">
                  <div class="home_pr_it_price">
                    <span v-if="item.sale != 0" class="xs-flex fd-column">
                      <span class="home_pr_it_sell">
                        <s>
                          {{
                            toMoney(item.priceSell / ((100 - item.sale) / 100))
                          }}
                        </s>
                      </span>

                      <span class="home_pr_it_sale"
                        >{{ toMoney(item.priceSell) }} (-{{ item.sale }})%</span
                      >
                    </span>
                    <span class="home_pr_it_sell" v-if="item.sale == 0">
                      {{ toMoney(item.priceSell) }}
                    </span>
                  </div>
                  <div class="home_pr_it_totalSold xs-flex ai-end">
                    <span>Đã bán: {{ item.totalPay }}</span>
                  </div>
                </div>
              </div>
            </router-link>
            <div class="home_pr_it_fav p-absolute top-0 right-0">
              <button
                class="icon-heart"
                @click="favoriteProduct(item)"
                v-html="!item.favorite ? dislike : like"
              ></button>
            </div>
          </div>
        </div>
      </VueSlickCarousel>
    </div>
  </div>
</template>
<script>
import VueSlickCarousel from "vue-slick-carousel";
import "vue-slick-carousel/dist/vue-slick-carousel.css";
// optional style for arrows & dots
import "vue-slick-carousel/dist/vue-slick-carousel-theme.css";

import { getAllProductByOption } from "@/service/user/home.js";
import { toMoney } from "@/service/support/exchange.js";

export default {
  name: "ProductOption",
  components: { VueSlickCarousel },
  props: ["productOptionId", "title"],
  data() {
    return {
      listProduct: [],
      // listProductOption: [],
      countIndex: 0,
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
      //settings products slide
      settings: {
        dots: false,
        arrows: true,
        // edgeFriction: 0.35,
        infinite: false,
        autoplay: false,
        pauseOnHover: true,
        autoplaySpeed: 2500,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
            },
          },
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      },
    };
  },
  watch: {},
  created() {
    getAllProductByOption(this.productOptionId)
      .then((result) => {
        this.listProduct = result;
        this.$parent.componentRendered[`product${this.productOptionId}`] = true;
        this.$parent.checkAllComponentsRendered();
        // console.log(this.listProduct);
      })
      .catch((err) => {
        this.$parent.componentRendered[`product${this.productOptionId}`] = true;
        this.$parent.checkAllComponentsRendered();
        // console.log(err);
      });
  },
  methods: {
    toMoney,
    showPrev() {
      this.$refs.carousel.prev();
      if (this.countIndex == 0) return;
      this.countIndex--;
      // console.log(this.countIndex);
    },
    showNext() {
      this.$refs.carousel.next();
      if (
        this.countIndex ==
        this.listProduct.length - this.settings.slidesToShow
      )
        return;
      this.countIndex++;
      // console.log(this.countIndex);
    },
    prev() {
      let listImg = document.querySelectorAll(
        `.single-gallery-image-option-${this.productOptionId}`
      );

      if (this.countIndex == 0) return;

      let withPx = +listImg[0].offsetWidth + 15;
      const listImgSlide = document.querySelector(
        `.product-home-option-srcoll-${this.productOptionId}`
      );
      listImgSlide.style.transition = "transform 0.8s linear";
      this.countIndex--;
      listImgSlide.style.transform =
        "translateX(" + -this.countIndex * withPx + "px)";
    },
    next() {
      let listImg = document.querySelectorAll(
        `.single-gallery-image-option-${this.productOptionId}`
      );
      if (this.countIndex == this.listProduct.length - 4) return;

      let withPx = +listImg[0].offsetWidth + 15;
      const listImgSlide = document.querySelector(
        `.product-home-option-srcoll-${this.productOptionId}`
      );
      listImgSlide.style.transition = "transform 0.8s linear";
      this.countIndex++;
      listImgSlide.style.transform =
        "translateX(" + -this.countIndex * withPx + "px)";
    },
    async favoriteProduct(product) {
      let value = this.$root.$refs.userHeader.favoriteProductHeader(product.id);
      value.then((res) => {
        product.favorite = res == 1 ? false : true;
        this.listProduct.forEach((e) => {
          if (e.id == product.id) {
            e.favorite = res == 1 ? false : true;
          }
        });
        // this.listProductOption.forEach((e) => {
        //   if (e.id == product.id) {
        //     e.favorite = res == 1 ? false : true;
        //   }
        // });
      });
    },
  },
};
</script>
<style scoped lang="css">
/*------------------------------------*/
/* Title */
/*------------------------------------*/
.home_product_title {
  margin-bottom: 1.2rem;
}
.home_product_content {
  margin: 1.1rem 0;
}
/*------------------------------------*/
/* Btn Slide */
/*------------------------------------*/
.home_product_btn {
  margin: 1.1rem 0;
}
.home_product_btn a {
  color: var(--color-second);
  padding: 0 0.5rem;
  font-weight: 500;
}
.home_product_btn a:hover {
  color: var(--color-4);
}
.btn-slick-arrow {
  width: 4.8rem;
  height: 4.8rem;
  margin-left: 1.2rem;
  background-color: var(--color-3);
  border-radius: 2.4rem;
  z-index: 5;
  transition: background-color 250ms cubic-bezier(0.25, 0.1, 0.25, 1);
}
.btn-slick-arrow:hover {
  background-color: var(--color-btn-slick-1);
}
.slick-disabled {
  background-color: var(--color-btn-slick-disable);
  cursor: auto;
  pointer-events: none;
}
/*------------------------------------*/
/* Product Slide */
/*------------------------------------*/
.home_product_wrapper {
  padding-bottom: 3rem;
}
.home_product_item {
  border: 0 solid var(--border-1);
  border-width: 0.05rem;
  border-color: rgba(0, 0, 0, 0.0902);
  background-color: var(--bg-2);
}
/* .home_product_item {
  transition-timing-function: cubic-bezier(0.4, 0, 0.6, 1);
  transition-duration: 0.2s;
} */
.home_product_wrapper .home_pr_it_pic img {
  will-change: transform;
  aspect-ratio: 1;
  transform: translateZ(0);
  transition: transform 0.6s;
}
.home_pr_it_pic {
  overflow: hidden;
}
.home_product_item:hover .home_pr_it_pic img {
  transform: scale(1.1);
  will-change: transform;
}
/* .home_product_main:hover .home_product_item{
  transform: translate(0, -1px) rotate(0) skew(0) skewY(0) scaleX(1) scaleY(1);
} */
.home_pr_it_review {
  color: var(--color-second);
  top: 1rem;
  left: 1.2rem;
  z-index: 2;
}
.home_pr_it_review svg {
  width: 0.6rem;
  height: 1rem;
  margin: 0 0.1rem;
}
.home_pr_it_totalRate {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-6);
  letter-spacing: 0.05rem;
}
.home_pr_it_content {
  color: var(--color-second);
  padding: 1.2rem 0.8rem 0.8rem;
}
.home_pr_it_content > h4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.home_pr_it_fav {
  padding: 1rem;
  z-index: 100;
}
.icon-heart {
  display: inline !important;
}
.home_pr_it_fav,
.home_pr_it_review {
  line-height: 1;
}
.home_pr_it_sold {
  padding-top: 0.8rem;
}
.home_pr_it_price {
  flex: 1 0;
}
.home_pr_it_sale {
  color: var(--color-red);
}
.home_pr_it_totalSold {
  color: var(--color-5);
}

@media only screen and (min-width: 576px) {
}
@media only screen and (min-width: 768px) {
  .home_product_btn {
    margin: 0;
  }
  .home_pr_it_review svg {
    width: 1.2rem;
    margin: 0 0.3rem;
  }
  .home_pr_it_totalRate {
    font-size: 1.4rem;
  }
}
@media only screen and (min-width: 992px) {
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
