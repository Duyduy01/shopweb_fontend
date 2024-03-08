<template>
  <div>
    <div class="m-banner">
      <div class="m-banner-details">
        <span></span>
      </div>
    </div>
    <div class="container mt-5">
      <div class="container mb-3">
        <h4>
          Từ khóa "{{ searchProduct }}". Tổng kết quả tìm kiếm {{ result }} sản
          phẩm
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
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h3 class="text-center" v-if="listProduct.length == 0" style="">
            Không có sản phẩm nào !
          </h3>
        </div>
        <div class="mt-5 col-3" v-for="e in listData" :key="e.id">
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
              <router-link :to="'/chi-tiet-san-pham/' + e.id">
                {{ e.productName }}
              </router-link>
            </div>
            <div class="price-sell">
              <span v-if="e.sale != 0">
                <span style="color: black; text-decoration: line-through"
                  >{{ toMoney(e.priceSell / ((100 - e.sale) / 100)) }}
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
</template>

<script>
import {
  searchProductByNameSearch,
  totalProductSearch,
  totaPageProductSearch,
} from "@/service/user/product";
export default {
  name: "Search",
  data() {
    return {
      listProduct: [],
      result: 0,
      searchObject: {
        search: "",
        page: 1,
        limit: 8,
      },
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
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
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
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
    },
  },
};
</script>

<style scoped>
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

@import url("@/assets/user/css/product.css");
</style>
