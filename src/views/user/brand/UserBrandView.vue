<template>
  <div>
    <div class="m-banner">
      <div class="m-banner-details">
        <span></span>
      </div>
    </div>
    <div class="container-fluid mt-4">
      <div class="row">
        <div class="col-12">
          <div class="brand-product">
            <div class="container d-flex justify-content-around">
              <div v-for="b in listBrand" :key="b.id">
                <label
                  :class="
                    id != b.id
                      ? 'label-brand'
                      : 'label-brand label-brand-active'
                  "
                  :for="'brand' + b.id"
                >
                  <img :src="b.icon" alt="" srcset="" />
                  {{ b.brandName }}
                </label>
                <input
                  type="radio"
                  name="brand-choose"
                  :id="'brand' + b.id"
                  @click="activeBrand(b.id)"
                  :data-id="b.id"
                  hidden
                />
              </div>
            </div>
          </div>
        </div>
        <div class="col-3">
          <div class="brand-cate-main">
            <div>
              <h4>Danh mục sản phẩm</h4>
              <hr />
            </div>
            <div class="brand-cate">
              <div v-for="(item, key) in listCate" :key="item.id">
                <div class="brand-cate-parent">
                  <label for="">
                    <h4>{{ listKeyCate(key)[1] }}</h4>
                  </label>
                </div>
                <div class="ml-5">
                  <div
                    class="brand-cate-child"
                    v-for="item in listCate[key]"
                    :key="item.id"
                  >
                    <label
                      :for="'cate-' + item.id"
                      :id="'label-cate-' + item.id"
                      >{{ item.categoryName }}</label
                    >
                    <input
                      type="radio"
                      name="cate-choose"
                      :id="'cate-' + item.id"
                      @click="activeCate(item.id, 'label-cate-' + item.id)"
                      :data-id="item.id"
                      hidden
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="container-fluid brand-list-product">
            <div class="row">
              <div class="m-header">
                <div class="m-sort-right">
                  <select
                    name="sort"
                    id="m-sort"
                    @change="sortFilter"
                    v-model="dataApi.sort"
                  >
                    <option value="1">Mới Nhất</option>
                    <option value="2">Bán chạy nhất</option>
                    <option value="3">Giá từ cao tới thấp</option>
                    <option value="4">Giá từ thấp tới cao</option>
                  </select>
                </div>
              </div>
              <!-- PRODUCT -->
              <div class="container-fluid">
                <div class="row">
                  <div class="col-12">
                    <h3
                      class="text-center"
                      v-if="listProduct.length == 0"
                      style=""
                    >
                      Không có sản phẩm nào !
                    </h3>
                  </div>
                  <div class="mt-5 col-3" v-for="e in listProduct" :key="e.id">
                    <div class="product-list">
                      <router-link :to="'/chi-tiet-san-pham/' + e.id">
                        <div
                          class="single-gallery-image"
                          :style="'background: url(' + e.img + ')'"
                        ></div>
                      </router-link>

                      <div class="product-action">
                        <button
                          class="icon-heart"
                          @click="favoriteProduct(e)"
                          v-html="!e.favorite ? dislike : like"
                        ></button>
                      </div>
                    </div>
                    <div class="product-detail">
                      <div class="product-name">
                        <a href="#"> {{ e.productName }} </a>
                      </div>
                      <div class="price-sell">
                        <span v-if="e.sale != 0">
                          <span
                            style="color: black; text-decoration: line-through"
                            >{{ toMoney(e.priceSell / ((100 - e.sale) / 100)) }}
                          </span>

                          <span
                            >- {{ toMoney(e.priceSell) }} (-{{ e.sale }})%</span
                          >
                        </span>
                        <span v-if="e.sale == 0" style="color: black">
                          {{ toMoney(e.priceSell) }}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <!-- pagination -->
            <div style="width: 100%; text-align: center">
              <el-pagination
                background
                layout="prev, pager, next"
                :total="totalPage"
                :page-size="1"
                @current-change="handleCurrentChange"
              >
              </el-pagination>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllCate } from "@/service/user/category";
import {
  getAllBrand,
  getProductByBrand,
  getTotalByBrand,
} from "@/service/user/brand";
export default {
  props: ["id"],
  data() {
    return {
      listBrand: [],
      listCate: {},
      listProduct: [],
      totalPage: 1,
      sort: 1,
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
      dataApi: {
        brand: this.id,
        category: "",
        sort: 1,
        page: 1,
        limit: 8,
      },
    };
  },
  created() {
    getAllCate().then((res) => {
      this.listCate = res;
      console.log(this.listCate);
    });
    getAllBrand().then((res) => {
      this.listBrand = res;
      console.log(this.listBrand);
    });
    console.log(this.id);
    this.callApi(this.id);
    this.callApiTotal(this.id);
  },
  computed: {
    getBrandByUrl() {
      return this.id;
    },
  },
  watch: {
    getBrandByUrl() {
      let brandId = this.id;
      this.dataApi.page = 1;
      this.callApi(brandId);
      this.callApiTotal(brandId);
      window.scrollTo(0, 0);
    },
  },
  methods: {
    async callApiTotal(brandId) {
      if (brandId != 0) this.dataApi.brand = brandId;
      try {
        const res = await getTotalByBrand(this.dataApi);
        this.totalPage = res;
      } catch (error) {
        throw new Error(error);
      }
    },
    async callApi(brandId) {
      window.scrollTo(0, 0);
      if (brandId != 0) this.dataApi.brand = brandId;
      console.log(brandId);
      console.log(this.dataApi);
      try {
        const res = await getProductByBrand(this.dataApi);
        this.listProduct = res;
      } catch (error) {
        throw new Error(error);
      }
    },
    handleCurrentChange(val) {
      this.dataApi.page = val;
      this.callApi(0);
    },
    sortFilter() {
      this.callApi(0);
    },
    listKeyCate(key) {
      let keys = key.split(",");
      return keys;
    },
    // choose brand
    activeBrand(brandId) {
      // let labelActive = e.path[1].childNodes[0];

      // let listLabel = document.querySelectorAll(".label-brand");
      // listLabel.forEach((e) => {
      //   e.classList.remove("label-brand-active");
      // });
      // labelActive.classList.add("label-brand-active");

      // this.dataApi.page = 1
      // this.callApi(brandId);
      // this.callApiTotal(brandId);
      this.$router.push(`/nhan-hieu/${brandId}`).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
    // choose cate
    activeCate(categoryId, labelBrandId) {
      let labelActive = document.getElementById(labelBrandId);

      let listLabel = document.querySelectorAll(".brand-cate-child>label");
      listLabel.forEach((e) => {
        e.classList.remove("brand-cate-child-active");
      });
      labelActive.classList.add("brand-cate-child-active");

      this.dataApi.category = categoryId;
      this.dataApi.page = 1;
      this.callApi(0);
      this.callApiTotal(0);
    },
    async favoriteProduct(product) {
      let value = this.$root.$refs.userHeader.favoriteProductHeader(product.id);
      value.then((res) => {
        product.favorite = res == 1 ? false : true;
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
};
</script>

<style lang="scss" scoped>
.m-banner {
  width: 100%;
  background-color: rgb(5, 5, 5);
}

.m-banner-details {
  width: 87%;
  margin: auto;
  padding: 1rem;
}

.m-banner-details > span {
  margin: 0 1rem 0 1rem;
}

/* header */
.m-header {
  margin: auto;
  width: 100%;
  display: flex;
  justify-content: flex-end;
}

.m-header > h1 {
  color: black;
}

#m-sort {
  width: 17rem;
  height: 2.4rem;
  margin-right: 3rem;
}

@import url("@/assets/user/css/brand.css");
@import url("@/assets/user/css/product.css");
</style>
