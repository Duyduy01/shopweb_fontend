<template>
  <div class="products_wrapper">
    <div class="ctnr">
      <div class="xs-flex js-center">
        <div class="products_filter w-100 xs-none lg-block">
          <div class="">
            <!-- cate -->
            <div class="prsF_child">
              <h5>Loại sản phẩm</h5>
              <div
                class="prsF_child_box"
                v-for="(item, key) in listCate"
                :key="item.id"
              >
                <div class="prsF_cate">
                  <label
                    :class="
                      listFilter.category[0] == listKeyCate(key)[0]
                        ? 'active'
                        : ''
                    "
                    :for="'cate-' + listKeyCate(key)[0]"
                    ><span>{{ listKeyCate(key)[1] }}</span></label
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
                <ul class="row">
                  <li
                    class="col-6"
                    v-for="item in listCate[key]"
                    :key="item.id"
                  >
                    <div class="prsF_cate prsF_cate_item w-100 h-100">
                      <label
                        class="xs-flex js-center ai-center ta-center w-100 h-100"
                        :class="
                          listFilter.category[0] == item.id ? 'active' : ''
                        "
                        :for="'cate-' + item.id"
                        ><span>{{ item.categoryName }}</span></label
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
                  </li>
                </ul>
              </div>
            </div>
            <!-- color -->
            <div class="prsF_child">
              <h5>Màu sắc</h5>
              <div class="prsF_child_box">
                <ul class="row">
                  <li
                    class="col-3"
                    v-for="(color, index) in listAllColor"
                    :key="index"
                  >
                    <div class="prsF_color xs-flex js-center ai-center">
                      <label
                        class="p-relative"
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
                  </li>
                </ul>
              </div>
            </div>
            <!-- size -->
            <div class="prsF_child">
              <h5>Kích thước</h5>
              <div class="prsF_child_box">
                <ul class="row">
                  <li
                    class="col-6"
                    v-for="(size, index) in listAllSize"
                    :key="index"
                  >
                    <div class="prsF_cate prsF_cate_item w-100 h-100">
                      <label
                        class="xs-flex js-center ai-center ta-center w-100 h-100"
                        :for="'size-' + size.id"
                        :id="'label-spe-' + size.id"
                        >{{ size.description }}</label
                      >
                      <input
                        type="checkbox"
                        :id="'size-' + size.id"
                        name="size"
                        :data-id="size.id"
                        data-code="size"
                        @click="
                          activeSpe(
                            size.featuredKey,
                            size.id,
                            'label-spe-' + size.id
                          )
                        "
                        hidden
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <!-- price -->
            <!-- <div class="m-filter-price">
              <div><h5>Giá tiền</h5></div>
            </div> -->
            <!-- đặc trung sản phẩm -->
            <div
              class="prsF_child"
              v-for="(item, key) in listAllSpe"
              :key="item.id"
            >
              <h5>{{ key }}</h5>
              <div class="prsF_child_box">
                <ul class="row">
                  <li class="col-6" v-for="spe in item" :key="spe.id">
                    <div class="prsF_cate prsF_cate_item w-100 h-100">
                      <label
                        class="xs-flex js-center ai-center ta-center w-100 h-100"
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
                          activeSpe(
                            spe.featuredKey,
                            spe.id,
                            'label-spe-' + spe.id
                          )
                        "
                        hidden
                      />
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="products_main w-100">
          <div class="xs-flex js-flex-end">
            <div class="prsM_select p-relative xs-none lg-block">
              <v-select
                class="prsM_select_box w-100"
                v-model="sort"
                :options="options"
                @input="sortFilter"
              >
                <template #option="option">
                  <span>{{ option.label }}</span>
                </template>
              </v-select>
              <!-- <select
                    class="prsM_select_box w-100"
                    name="sort"
                    @change="sortFilter"
                    v-model="sort"
                  >
                    <option value="1">Mới Nhất</option>
                    <option value="2">Bán chạy nhất</option>
                    <option value="3">Giá từ cao tới thấp</option>
                    <option value="4">Giá từ thấp tới cao</option>
                  </select> -->
              <!-- <div class="prsM_select_icon p-absolute h-100 xs-flex js-center ai-center">
                    <font-awesome-icon icon="fa-solid fa-chevron-down" />
                  </div> -->
            </div>
          </div>
          <!-- PRODUCT -->
          <div class="">
            <div class="col-12" v-if="listProduct.length == 0">
              <h3 class="ta-center">Không có sản phẩm nào!</h3>
            </div>
            <template v-else>
              <div class="row prsM_ctnr">
                <div
                  class="prsM_box col-6 col-sm-4"
                  v-for="e in listProduct"
                  :key="e.id"
                >
                  <div class="prsM_item p-relative">
                    <router-link :to="'/chi-tiet-san-pham/' + e.id">
                      <div class="prsM_it_pic p-relative">
                        <img
                          class="single-gallery-image"
                          :src="e.img"
                          :alt="e.productName"
                          loading="lazy"
                        />
                        <div
                          class="prsM_it_review p-absolute"
                          v-if="e.rate > 0 && e.totalRate > 0"
                        >
                          <div class="xs-flex ai-center">
                            <div>{{ e.rate }}</div>
                            <font-awesome-icon icon="fa-solid fa-star" />
                            <div class="prsM_it_totalRate">
                              ({{ e.totalRate }})
                            </div>
                          </div>
                        </div>
                      </div>
                      <div class="prsM_it_content">
                        <h4 class="">
                          {{ e.productName }}
                        </h4>
                        <div class="prsM_it_sold xs-flex fw-wrap">
                          <div class="prsM_it_price">
                            <span v-if="e.sale != 0" class="xs-flex fd-column">
                              <span class="prsM_it_sell">
                                <s>
                                  {{
                                    toMoney(
                                      e.priceSell / ((100 - e.sale) / 100)
                                    )
                                  }}
                                </s>
                              </span>

                              <span class="prsM_it_sale"
                                >{{ toMoney(e.priceSell) }} (-{{
                                  e.sale
                                }}%)</span
                              >
                            </span>
                            <span class="prsM_it_sell" v-if="e.sale == 0">
                              {{ toMoney(e.priceSell) }}
                            </span>
                          </div>
                          <div class="prsM_it_totalSold xs-flex ai-end">
                            <span>Đã bán: {{ e.totalPay }}</span>
                          </div>
                        </div>
                      </div>
                    </router-link>

                    <div class="prsM_it_fav p-absolute top-0 right-0">
                      <button
                        class="icon-heart"
                        @click="favoriteProduct(e)"
                        v-html="!e.favorite ? dislike : like"
                      ></button>
                    </div>
                  </div>
                </div>
              </div>
              <!-- pagination -->
              <div class="pagi ta-center">
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
            </template>
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
import { toMoney } from "@/service/support/exchange.js";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";

export default {
  name: "UserProduct",
  components: {
    vSelect,
  },
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
      listAllSize: [],
      listNameSpe: [],
      //specaility
      banner: "",
      listFilter: {
        category: [],
        brand: [],
        sort: [1],
        page: [1],
        limit: [32],
      },
      //pagination
      totalPage: 1,
      sort: { value: "1", label: "Mới Nhất" },
      options: [
        { value: "1", label: "Mới Nhất" },
        { value: "2", label: "Bán chạy nhất" },
        { value: "3", label: "Giá từ cao tới thấp" },
        { value: "4", label: "Giá từ thấp tới cao" },
      ],
      dislike: '<i class="far fa-heart"></i>',
      like: '<i class="fas fa-heart"></i>',
    };
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
  created() {
    getAllCate().then((res) => {
      this.listCate = res;
    });
    getAllBrand().then((res) => {
      this.listBrand = res;
    });
    getAllSpe().then((res) => {
      this.listAllSpe = res;
      let keyColor = "Màu sắc";
      let keySize = "Kích thước";
      this.listAllColor = res[keyColor];
      this.listAllSize = res[keySize];
      delete this.listAllSpe[keyColor];
      delete this.listAllSpe[keySize];
    });
    getTypeSpe().then((res) => {
      res.forEach((e) => {
        this.listFilter[e] = [];
      });
    });
    this.checkCateActive();
    this.callFilter();
    window.scrollTo(0, 0);
  },
  methods: {
    toMoney,
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
      // console.log(key);
      // console.log(speId);
      // console.log(labelActiveId);
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
      // console.log(this.listFilter);
      this.listFilter.page = [1];
      this.callFilter();
    },
    listKeyCate(key) {
      let keys = key.split(",");
      return keys;
    },
    callFilter() {
      let data = JSON.stringify(this.listFilter);
      filterTotalPage(data).then((res) => {
        this.totalPage = +res;
      });
      filterProduct(data).then((res) => {
        this.listProduct = res;
        // console.log(this.listProduct);
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
      this.listFilter.sort = [this.sort.value];
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
@import url("@/assets/css/select.css");
.products_wrapper {
  padding: 5rem 0;
}
/*------------------------------------*/
/* products sidebar fliter*/
/*------------------------------------*/
/* category */
.products_filter {
  max-width: 26rem;
  max-height: 85vh;
  position: sticky;
  top: 96.59px;
  /* overflow-y: scroll;
  overflow-x: hidden; */
  overflow: auto;
  padding-right: 1.5rem;
}
.prsF_child {
  padding-top: 3rem;
  border-bottom: solid 1px var(--color-3);
}
.prsF_child > h5 {
  opacity: 0.5;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 0;
}
.prsF_child_box {
  padding-top: 2rem;
}
.prsF_child .prsF_child_box:last-child {
  padding-bottom: 3rem;
}
.prsF_cate > label {
  padding: 0.6rem 2.4rem;
  border: 1px solid transparent;
  border-color: var(--color-15);
  background: var(--color-primary);
  cursor: pointer;
  border-radius: 0.6rem;
  font-size: 1.4rem;
  font-weight: unset;
  margin: 0;
}
.prsF_cate_item {
  padding-top: 0.8rem;
}
.prsF_cate_item > label {
  padding: 0.6rem 0.6rem;
  font-size: 1.2rem;
}
.prsF_cate > label.active {
  border-color: var(--color-primary);
  background: linear-gradient(135deg, #fce6f7, #d5d0f0);
}
label.active > span {
  background: linear-gradient(135deg, #ed55c7, #6756ca);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
/* color */
.prsF_child li:not(:last-child) .prsF_color {
  margin-bottom: 0.6rem;
}
.prsF_color > label {
  width: 2.6rem;
  height: 2.6rem;
  margin: 0.4rem;
  border-radius: 99rem;
  border: 1px solid var(--color-15);
}
.prsF_color > label::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 32px;
  height: 32px;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 2px solid transparent;
}
.prsF_color > label.active::before {
  border-color: var(--color-15);
}

.products_filter::-webkit-scrollbar {
  width: 0.4rem;
  height: 0.3rem;
}
.products_filter::-webkit-scrollbar-thumb {
  background-color: var(--color-second);
  border: 2px solid #555555;
  border-radius: 1rem;
}
/*------------------------------------*/
/* products main item */
/*------------------------------------*/
.prsM_select {
  margin-bottom: 1.5rem;
}
.products_main {
  padding-left: 0;
}
.products_main .prsM_ctnr {
  margin: 0 -0.4rem;
}
.products_main .prsM_box {
  padding: 0.7rem 0.4rem;
}
.prsM_item .prsM_it_pic img {
  will-change: transform;
  aspect-ratio: 1;
  transform: translateZ(0);
  transition: transform 0.6s;
}
.prsM_it_pic {
  overflow: hidden;
}
.prsM_item:hover .prsM_it_pic img {
  transform: scale(1.1);
  will-change: transform;
}
.prsM_it_review {
  color: var(--color-second);
  top: 1rem;
  left: 1.2rem;
  z-index: 2;
}
.prsM_it_review svg {
  width: 0.6rem;
  height: 1rem;
  margin: 0 0.1rem;
}
.prsM_it_totalRate {
  font-size: 0.8rem;
  font-weight: 500;
  color: var(--color-6);
  letter-spacing: 0.05rem;
}
.prsM_it_content {
  color: var(--color-second);
  padding: 1.2rem 0.8rem 0.8rem;
}
.prsM_it_content > h4 {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}
.prsM_it_fav {
  padding: 1rem;
  z-index: 1;
}
.icon-heart {
  display: inline !important;
}
.prsM_it_fav,
.prsM_it_review {
  line-height: 1;
}
.prsM_it_sold {
  padding-top: 0.8rem;
}
.prsM_it_price {
  flex: 1 0;
}
.prsM_it_sale {
  color: var(--color-red);
}
.prsM_it_totalSold {
  color: var(--color-5);
}
/*------------------------------------*/
/* pagination */
/*------------------------------------*/
.pagi {
  margin-top: 1rem;
}
@media only screen and (min-width: 576px) {
  .products_main .prsM_ctnr {
    margin: 0 -0.6rem;
  }
  .products_main .prsM_box {
    padding: 0 0.6rem;
  }
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
  .products_main {
    padding-left: 1.5rem;
  }
  .products_main .prsM_ctnr {
    margin: 0 -0.8rem;
  }
  .products_main .prsM_box {
    padding: 0.9rem 0.8rem;
  }
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
