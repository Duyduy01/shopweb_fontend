<template>
  <div class="search_wrapper">
    <div class="ctnr">
      <div class="">
        <div class="container mb-3">
          <h4>
            Từ khóa "{{ searchProduct }}". Tổng kết quả tìm kiếm
            {{ result }} sản phẩm
          </h4>
        </div>
        <div>
          <el-input
            placeholder="Nhập tên sản phẩm cần tìm !"
            prefix-icon="el-icon-search"
            v-model="searchObject.search"
          >
          </el-input>
        </div>
      </div>
      <hr />
      <div class="main_wrapper">
        <div class="col-12 mt-5">
          <h3 class="text-center" v-if="listProduct.length == 0" style="">
            Không có sản phẩm nào !
          </h3>
        </div>
        <div class="row sM_ctnr">
          <div
            class="sM_box col-6 col-sm-4 col-lg-3"
            v-for="e in listData"
            :key="e.id"
          >
            <div class="sM_item p-relative">
              <router-link :to="'/chi-tiet-san-pham/' + e.id">
                <div class="sM_it_pic p-relative">
                  <img
                    class="p-absolute top-0 left-0 bottom-0"
                    :src="e.img"
                    :alt="e.productName"
                    loading="lazy"
                  />
                  <div
                    class="sM_it_review p-absolute"
                    v-if="e.rate > 0 && e.totalRate > 0"
                  >
                    <div class="xs-flex ai-center">
                      <div>{{ e.rate }}</div>
                      <font-awesome-icon icon="fa-solid fa-star" />
                      <div class="sM_it_totalRate">({{ e.totalRate }})</div>
                    </div>
                  </div>
                </div>
                <div class="sM_it_content">
                  <h4 class="">
                    {{ e.productName }}
                  </h4>
                  <div class="sM_it_sold xs-flex fw-wrap">
                    <div class="sM_it_price">
                      <div v-if="e.sale != 0" class="xs-flex fd-column">
                        <span class="sM_it_sell discount_percent">
                          <s class="sM_it_oldPrice">
                            {{ toMoney(e.priceSell / ((100 - e.sale) / 100)) }}
                          </s>
                          -{{ e.sale }}%
                        </span>
                        <div class="xs-flex fw-wrap js-between">
                          <span class="sM_it_sale"
                            >{{ toMoney(e.priceSell) }}
                          </span>
                          <span class="sM_it_totalSold"
                            >Đã bán: {{ e.totalPay }}</span
                          >
                        </div>
                      </div>
                      <div
                        class="sM_it_sell xs-flex js-between fw-wrap"
                        v-if="e.sale == 0"
                      >
                        <span>
                          {{ toMoney(e.priceSell) }}
                        </span>
                        <span class="sM_it_totalSold"
                          >Đã bán: {{ e.totalPay }}</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </router-link>
              <div class="sM_it_fav p-absolute top-0 right-0">
                <button
                  class="icon-heart"
                  @click="favoriteProduct(e)"
                  v-html="!e.favorite ? dislike : like"
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- pagination -->
      <div style="width: 100%; text-align: center" class="mt-4">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="totalPageSearch"
          :page-size="1"
          :current-page="searchObject.page"
          @current-change="handleCurrentChange"
        >
        </el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import {
  searchProductByNameSearch,
  totalProductSearch,
  totaPageProductSearch,
} from "@/service/user/product";
import { toMoney } from "@/service/support/exchange.js";

export default {
  name: "Search",
  data() {
    return {
      listProduct: [],
      result: 0,
      searchObject: {
        search: "",
        page: 1,
        limit: 32,
      },
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart" style="color: var(--color-favorite)"></i>',
      totalPageSearch: 1,
      checkPagination: false,
    };
  },
  created() {
    window.scrollTo(0, 0);
  },
  computed: {
    listData() {
      console.log(this.listProduct);
      return this.listProduct;
    },
    searchProduct() {
      this.sortApiCall();
      return this.searchObject.search;
    },
  },
  methods: {
    toMoney,
    sortApiCall() {
      if (!this.checkPagination) {
        this.searchObject.page = 1;
      }

      let data = JSON.stringify(this.searchObject);
      this.callApi(data);
      this.callApiTotal(data);
      this.callApiTotalPage(data);
      this.checkPagination = false;
    },
    callApi(data) {
      searchProductByNameSearch(data)
        .then((res) => {
          this.listProduct = res;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    callApiTotal(data) {
      totalProductSearch(data)
        .then((res) => {
          this.result = res;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    callApiTotalPage(data) {
      totaPageProductSearch(data)
        .then((res) => {
          this.totalPageSearch = res;
        })
        .catch((err) => {
          console.log(err.response.data);
        });
    },
    // like
    async favoriteProduct(product) {
      let value = this.$root.$refs.userHeader.favoriteProductHeader(product.id);
      value.then((res) => {
        product.favorite = res == 1 ? false : true;
      });
    },
    handleCurrentChange(val) {
      this.checkPagination = true;
      this.searchObject.page = val;
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped lang="css">
.search_wrapper {
  padding: 5rem 0;
}
/*------------------------------------*/
/* products */
/*------------------------------------*/
.main_wrapper .sM_ctnr {
  margin: 0 -0.4rem;
}
.main_wrapper .sM_box {
  padding: 0.7rem 0.4rem;
}
.sM_item .sM_it_pic img {
  will-change: transform;
  aspect-ratio: 1;
  transform: translateZ(0);
  transition: transform 0.6s;
}
.sM_it_pic {
  padding-top: 100%;
  overflow: hidden;
}
.sM_item:hover .sM_it_pic img {
  transform: scale(1.1);
  will-change: transform;
}
.sM_it_review {
  color: var(--color-second);
  top: 1rem;
  left: 1.2rem;
  z-index: 2;
}
.sM_it_review svg {
  width: 0.6rem;
  height: 1rem;
  margin: 0 0.1rem;
}
.sM_it_totalRate {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-6);
  letter-spacing: 0.05rem;
}
.sM_it_content {
  color: var(--color-second);
  padding: 1.2rem 0.8rem 0.8rem;
}
.sM_it_content > h4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.sM_it_fav {
  padding: 1rem;
  z-index: 1;
}
.icon-heart {
  display: inline !important;
}
.icon-heart > i {
  color: var(--color-red);
}
.sM_it_fav,
.sM_it_review {
  line-height: 1;
}
.sM_it_sold {
  padding-top: 0.8rem;
}
.sM_it_price {
  flex: 1 0;
}
.sM_it_sell.discount_percent {
  color: var(--color-red);
}
.sM_it_oldPrice {
  margin-right: 0.3rem;
  color: var(--color-8);
}
.sM_it_totalSold {
  color: var(--color-5);
}
/*------------------------------------*/
/* pagination */
/*------------------------------------*/
.pagi {
  margin-top: 1rem;
}
@media only screen and (min-width: 576px) {
  .main_wrapper .sM_ctnr {
    margin: 0 -0.6rem;
  }
  .main_wrapper .sM_box {
    padding: 0.7rem 0.6rem;
  }
}
@media only screen and (min-width: 768px) {
  .sM_it_review svg {
    width: 1.2rem;
    margin: 0 0.3rem;
  }
  .sM_it_totalRate {
    font-size: 1.4rem;
  }
}
@media only screen and (min-width: 992px) {
  .main_wrapper .sM_ctnr {
    margin: 0 -0.8rem;
  }
  .main_wrapper .sM_box {
    padding: 0.9rem 0.8rem;
  }
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
