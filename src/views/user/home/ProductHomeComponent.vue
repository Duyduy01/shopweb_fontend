<template>
    <div>
        <div class="product-new">
          <div class="m-4">
            <!-- <h1>123456</h1> -->
            <h3>{{title}}</h3>
          </div>
          <hr />
          <div id="slide-product-list-parent">
            <div class="container-fluid form-product-list">
              <div :class="`product-home-scroll product-home-option-srcoll-${productOptionId}`">
                <div class="mt-5 col-3" v-for="e in listProduct" :key="e.id">
                  <div class="home-product-list">
                    <router-link :to="'/chi-tiet-san-pham/' + e.id">
                      <div :class="`home-single-gallery-image single-gallery-image-option-${productOptionId}`" :style="'background: url(' + e.img + ')'"></div>
                    </router-link>

                    <div class="product-action">
                      <button class="icon-heart" @click="favoriteProduct(e)"
                        v-html="!e.favorite ? dislike : like"></button>
                    </div>
                  </div>
                  <div class="product-detail">
                    <div class="product-name">
                      <router-link :to="'/chi-tiet-san-pham/' + e.id"> {{ e.productName }} </router-link>
                    </div>
                    <div class="price-sell">
                      <span v-if="e.sale != 0">
                        <span style="color: black; text-decoration: line-through">{{ toMoney(e.priceSell / ((100 -
                            e.sale) / 100))
                        }}
                        </span>

                        <span>- {{ toMoney(e.priceSell) }} (-{{ e.sale }})%</span>
                      </span>
                      <span v-if="e.sale == 0" style="color: black">
                        {{ toMoney(e.priceSell) }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="btn-product-silde">
              <button @click="prev"><i class="el-icon-arrow-left"></i></button>
              <button @click="next"><i class="el-icon-arrow-right"></i></button>
            </div>
          </div>
        </div>
    </div>
</template>
<script>
import {
  getAllProductByOption,
} from "@/service/user/home.js";
export default {
  name: "ProductOption",
  props: ['productOptionId', 'title'],
  data() {
    return {
      listProduct: [],
      // listProductOption: [],
      countIndex: 0,
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
    }
  },
  methods: {
    prev() {
      let listImg = document.querySelectorAll(`.single-gallery-image-option-${this.productOptionId}`);

      if (this.countIndex == 0) return;

      let withPx = +listImg[0].offsetWidth + 15;
      const listImgSlide = document.querySelector(`.product-home-option-srcoll-${this.productOptionId}`);
      listImgSlide.style.transition = "transform 0.8s linear";
      this.countIndex--;
      listImgSlide.style.transform =
        "translateX(" + -this.countIndex * withPx + "px)";
    },
    next() {
      let listImg = document.querySelectorAll(`.single-gallery-image-option-${this.productOptionId}`);
      if (this.countIndex == this.listProduct.length - 4) return;

      let withPx = +listImg[0].offsetWidth + 15;
      const listImgSlide = document.querySelector(`.product-home-option-srcoll-${this.productOptionId}`);
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
        this.listProductOption.forEach((e) => {
          if (e.id == product.id) {
            e.favorite = res == 1 ? false : true;
          }
        });
      });
    },
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
  },
  watch: {
  },
  created() {
    getAllProductByOption(this.productOptionId)
      .then((result) => {
        this.listProduct = result;
      })
      .catch((err) => {
        console.log(err);
      });
  },

}
</script>
<style lang="">
    
</style>