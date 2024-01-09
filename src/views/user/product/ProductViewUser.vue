<template>
  <div>
    <div class="m-banner">
      <div class="m-banner-details">
        <span></span>
      </div>
    </div>
    <div class="container-fluid mt-5">
      <div class="row">
        <div class="col-3">
          <div class="m-filter-header">
            <h4>Danh sách bộ lọc</h4>
          </div>
          <div class="m-filter ml-2 m-filter-main">
            <!-- cate -->
            <div class="m-filter-cate">
              <div>
                <h5>Loại sản phẩm</h5>
              </div>
              <div
                class="m-filter-padding"
                v-for="(item, key) in listCate"
                :key="item.id"
              >
                <div class="row ml-1">
                  <div class="col-3 m-filter-obj">
                    <label
                      :class="
                        listFilter.category[0] == listKeyCate(key)[0]
                          ? 'active'
                          : ''
                      "
                      :for="'cate-' + listKeyCate(key)[0]"
                      >{{ listKeyCate(key)[1] }}</label
                    >
                    <input
                      type="radio"
                      name="cateId"
                      :id="'cate-' + listKeyCate(key)[0]"
                      class="m-fitler-active"
                      :data-id="listKeyCate(key)[0]"
                      data-code="cateId"
                      @click="activeCate(listKeyCate(key)[0])"
                      hidden
                    />
                  </div>
                </div>
                <div class="row ml-3">
                  <div
                    class="col-6 m-filter-obj"
                    v-for="item in listCate[key]"
                    :key="item.id"
                  >
                    <label
                      :class="listFilter.category[0] == item.id ? 'active' : ''"
                      :for="'cate-' + item.id"
                      >{{ item.categoryName }}</label
                    >
                    <input
                      type="radio"
                      name="cateId"
                      :id="'cate-' + item.id"
                      :data-id="item.id"
                      data-code="cateId"
                      class="m-fitler-active"
                      @click="activeCate(item.id)"
                      hidden
                    />
                  </div>
                </div>
              </div>
            </div>
            <!-- brand -->
            <div class="m-filter-brand">
              <div>
                <h5>Nhãn hiệu</h5>
              </div>
              <div class="row m-filter-padding">
                <div
                  class="col-4 m-filter-obj"
                  v-for="brand in listBrand"
                  :key="brand.id"
                >
                  <label
                    :for="'brand-' + brand.id"
                    :id="'label-brand-' + brand.id"
                    >{{ brand.brandName }}</label
                  >
                  <input
                    type="radio"
                    name="brandId"
                    :id="'brand-' + brand.id"
                    class="m-fitler-active"
                    @click="
                      activeFilter(
                        'brandId',
                        brand.id,
                        'label-brand-' + brand.id
                      )
                    "
                    hidden
                  />
                </div>
              </div>
            </div>
            <!-- color -->
            <div class="m-filter-color">
              <div>
                <h5>Màu sắc</h5>
              </div>
              <div class="row m-filter-padding">
                <div
                  class="col-3 m-filter-color-object"
                  v-for="color in listAllColor"
                  :key="color.id"
                >
                  <label
                    :for="'color-' + color.id"
                    :style="'background-color:' + color.featuredCode"
                    :id="'label-spe-' + color.id"
                  ></label>
                  <input
                    type="checkbox"
                    :id="'color-' + color.id"
                    name="color"
                    :data-id="color.id"
                    data-code="color"
                    @click="
                      activeSpe(
                        color.featuredKey,
                        color.id,
                        'label-spe-' + color.id
                      )
                    "
                    hidden
                  />
                </div>
              </div>
            </div>
            <!-- price -->
            <!-- <div class="m-filter-price">
              <div><h5>Giá tiền</h5></div>
            </div> -->
            <!-- đặc trung sản phẩm -->
            <div
              class="m-filter-spe"
              v-for="(item, key) in listAllSpe"
              :key="item.id"
            >
              <div>
                <h5>{{ key }}</h5>
              </div>
              <div class="row m-filter-padding">
                <div
                  class="col-4 m-filter-obj"
                  v-for="spe in item"
                  :key="spe.id"
                >
                  <label
                    :for="key + '-' + spe.id"
                    :id="'label-spe-' + spe.id"
                    >{{ spe.description }}</label
                  >
                  <input
                    type="checkbox"
                    :name="key"
                    :id="key + '-' + spe.id"
                    :data-id="spe.id"
                    :data-code="spe.featuredKey"
                    class="m-fitler-active"
                    @click="
                      activeSpe(spe.featuredKey, spe.id, 'label-spe-' + spe.id)
                    "
                    hidden
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-9">
          <div class="container-fluid">
            <div class="row">
              <div class="m-header">
                <div class="m-sort-right">
                  <select
                    name="sort"
                    id="m-sort"
                    @change="sortFilter"
                    v-model="sort"
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
                        <router-link :to="'/chi-tiet-san-pham/' + e.id">
                          {{ e.productName }}
                        </router-link>
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
                :current-page="listFilter.page[0]"
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
import { filterProduct, filterTotalPage } from "@/service/user/product";
import { getAllCate } from "@/service/user/category";
import { getAllBrand } from "@/service/admin/brand";
import { getAllSpe, getTypeSpe } from "@/service/admin/speciality";
export default {
  name: "UserProduct",
  props: ["cateId"],
  data() {
    return {
      listProduct: [],
      // cate
      listCate: {},
      // brand
      listBrand: [],
      //specaility
      listAllSpe: {},
      listAllColor: [],
      listNameSpe: [],
      //specaility

      banner: "",
      listFilter: {
        category: [],
        brand: [],
        sort: [1],
        page: [1],
        limit: [8],
      },
      //pagination
      totalPage: 1,
      sort: 1,
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
    };
  },
  created() {
    getAllCate().then((res) => {
      this.listCate = res;
    });
    getAllBrand().then((res) => {
      this.listBrand = res;
    });
    getAllSpe().then((res) => {
      this.listAllSpe = res;
      let key = "Màu sắc";
      this.listAllColor = res[key];
      delete this.listAllSpe[key];
      // console.log(res);
    });
    getTypeSpe().then((res) => {
      res.forEach((e) => {
        this.listFilter[e] = [];
      });
    });
    this.checkCateActive();
    this.callFilter();
    window.scrollTo(0, 0);
    console.log(this.listAllColor);
  },
  computed: {
    getCateId() {
      return this.cateId;
    },
  },
  watch: {
    getCateId() {
      if (this.getCateId > 0) {
        this.listFilter.category = [this.getCateId];
      } else {
        this.listFilter.category = [];
      }
      this.listFilter.page = [1];
      this.callFilter();
      window.scrollTo(0, 0);
    },
  },
  methods: {
    // filter
    // activeFilter(code, brandId, labelBrandId) {
    //   let cateCode = code;
    //   // if (cateCode == "cateId") this.activeCate(e);
    //   if (cateCode == "brandId") this.activeBrand(brandId, labelBrandId);
    //   this.listFilter.page = [1];
    //   this.callFilter();
    //   window.scrollTo(0, 0);
    // },
    // cate
    activeCate(e) {
      let cateId = e;
      this.$router.push(`/san-pham/${cateId}`).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
        if (e == 0) {
          this.checkCateActive();
        }
      });
    },
    //brand
    // activeBrand(brandId, labelBrandId) {
    //   let labelActive = document.getElementById(labelBrandId);

    //   let listLabel = document.querySelectorAll(
    //     ".m-filter-brand>div>.m-filter-obj>label"
    //   );
    //   listLabel.forEach((e) => {
    //     e.classList.remove("active");
    //   });
    //   labelActive.classList.add("active");

    //   this.listFilter.brand = [brandId];
    // },
    // spe
    activeSpe(key, speId, labelActiveId) {
      let labelActive = document.getElementById(labelActiveId);

      let checkActive = event.srcElement.checked;

      if (checkActive) {
        labelActive.classList.add("active");
        this.listFilter[key].push(speId);
      } else {
        labelActive.classList.remove("active");
        // this.listFilter[key].pop(colorId);
        this.listFilter[key] = this.listFilter[key].filter((e) => e != speId);
      }
      this.listFilter.page = [1];
      this.callFilter();
    },
    listKeyCate(key) {
      let keys = key.split(",");
      return keys;
    },
    // covert tien
    toMoney(totalprice) {
      var formatter = new Intl.NumberFormat("it-IT", {
        style: "currency",
        currency: "VND",
      });
      return formatter.format(totalprice);
    },
    callFilter() {
      let data = JSON.stringify(this.listFilter);
      filterTotalPage(data).then((res) => {
        this.totalPage = +res;
      });
      filterProduct(data).then((res) => {
        this.listProduct = res;
      });

      this.getTotalPage;
      window.scrollTo(0, 0);
    },
    checkCateActive() {
      if (this.cateId != 0) {
        this.listFilter.category = [this.cateId];
      }
    },
    handleCurrentChange(val) {
      this.listFilter.page = [val];
      this.callFilter();
    },
    sortFilter() {
      this.listFilter.sort = [this.sort];
      this.listFilter.page = [1];
      this.callFilter();
    },
    async favoriteProduct(product) {
      let value = this.$root.$refs.userHeader.favoriteProductHeader(product.id);
      value.then((res) => {
        product.favorite = res == 1 ? false : true;
      });
    },
  },
};
</script>

<style scoped lang="css">
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
@import url("@/assets/user/css/filter.css");
</style>
