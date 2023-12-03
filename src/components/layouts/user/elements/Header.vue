<template>
  <div class="space-header">
    <div class="header">
      <div class="top-header">
        <div class="container-header">
          <div class="top-header-left">
            <div class="header-horizotal-menu">
              <ul class="menu-header" style="margin: 0 !important">
                <li><a href="#">DuyShop</a></li>
                <li><a href="#">Chính sách</a></li>
              </ul>
            </div>
          </div>
          <div class="top-header-right">
            <div class="switcher-currency">
              <select class="currency-picker" name="currencies" id="">
                <option value="" selected="selected">VN</option>
                <option value="">INF</option>
                <option value="">GBP</option>
                <option value="">CAD</option>
                <option value="">USB</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div class="middle-header">
        <div class="container-midder-header">
          <div class="middle-header-left">
            <!-- <img src="@/assets/img/logo.jpg" alt="" srcset="" /> -->
            <router-link to="/">
              <!-- <img src="@/assets/logo/SANHO-logos_black.png" alt="" srcset="" style="width: 6rem" /> -->
            </router-link>
          </div>
          <div class="middle-header-menu" style="align-self: center">
            <div class="middle-header-horizotal-menu">
              <ul class="menu-header">
                <li>
                  <router-link to="/">Trang chủ</router-link>
                </li>
                <li>
                  <router-link to="/gioi-thieu-ve-hang">Cửa hàng</router-link>
                </li>
                <li class="product" style="background: #fff">
                  <router-link to="/san-pham/0" class="product-list">Sản phẩm</router-link>
                  <ul class="product-child">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 product-clild-bottom">
                          <template v-for="(item, key) in category">
                            <div class="category-product" :key="key">
                              <div>
                                <h4>
                                  <router-link :to="'/san-pham/' + listKeyCate(key)[0]" style="color: black">{{
                                      listKeyCate(key)[1]
                                  }}
                                  </router-link>
                                </h4>
                              </div>
                              <ul v-for="cate in item" :key="cate.id">
                                <li>
                                  <router-link :to="'/san-pham/' + cate.id">{{
                                      cate.categoryName
                                  }}</router-link>
                                </li>
                              </ul>
                            </div>
                          </template>
                        </div>
                        <!-- <div class="col-5">
                          <img id="img-product-child"
                            src="https://firebasestorage.googleapis.com/v0/b/upload-file-dea89.appspot.com/o/7fcf21ee-d9df-4422-9873-e3a0cc04c041.webp?alt=media"
                            alt="" srcset="" width="100%" height="300px" style="object-fit:contain" />
                        </div> -->
                      </div>
                    </div>
                  </ul>
                </li>
                <li class="brand-header">
                  <a style="cursor: pointer;">Nhãn hiệu</a>
                  <ul class="brand-nav-children">
                    <li v-for="b in brand" :key="b.id" @click="redirectBrand(b.id)">
                      <img :src="b.icon" alt="" srcset="" />
                      <!-- <a :href="'/nhan-hieu/' + b.id">{{ b.brandName }} </a> -->
                      <router-link :to="'/nhan-hieu/' + b.id">{{ b.brandName }}</router-link>
                    </li>
                  </ul>
                </li>
                <li><a href="#">Bài viết</a></li>
              </ul>
            </div>
          </div>
          <div class="middle-header-right" style="align-self: center">
            <div class="header-cart">
              <router-link to="/tim-kiem" style="color: black">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
              </router-link>
            </div>

            <div class="icon-login">
              <font-awesome-icon :icon="!user ? 'fa-regular fa-user' : 'fa-solid fa-user'" />
              <ul class="nav-children" v-if="user">
                <li>Xin chào,{{ user.fullName }}</li>
                <li>
                  <router-link to="/thong-tin-ca-nhan">Thông tin</router-link>
                </li>
                <li>
                  <router-link to="/don-dat">Đơn hàng</router-link>
                </li>
                <li><a @click="logout">Đăng xuất</a></li>
              </ul>
              <ul class="nav-children" v-if="!user">
                <li>Người dùng</li>
                <li>
                  <router-link :to="'/dang-nhap'">Đăng nhập</router-link>
                </li>
                <li>
                  <router-link :to="'/dang-ky'">Đăng ký</router-link>
                </li>
              </ul>
            </div>

            <div class="header-cart">
              <router-link to="/yeu-thich" style="color: black">
                <el-badge :value="totalFavorite" class="item">
                  <font-awesome-icon icon="fa-solid fa-heart" />
                </el-badge>
              </router-link>
            </div>

            <div class="header-cart">
              <router-link to="/gio-hang" style="color: black">
                <el-badge :value="getAllTotelItemCart" class="item">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </el-badge>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getAllCate } from "@/service/user/category";
import { getAllBrand } from "@/service/user/brand";
import { getAllTotalitem } from "@/service/user/cart";
import { favorite, getQuantityItem } from "@/service/user/favorite";
export default {
  name: "userHeader",
  data() {
    return {
      user: {},
      category: {},
      totalItemCart: 0,
      textSearch: "",
      totalFavorite: 0,
      brand: [],
    };
  },
  computed: {
    getAllTotelItemCart() {
      return this.totalItemCart;
    },
  },
  created() {
    this.checkUser();
    getAllCate().then((res) => {
      this.category = res;
    });

    this.totalItemByCart();
    this.totalItemByFavorite();
    this.$root.$refs.userHeader = this;

    getAllBrand().then((res) => {
      this.brand = res;
    });
  },
  methods: {
    checkUser() {
      this.user = this.$store.getters.CURRENT_USER;
    },
    logout() {
      this.$store.dispatch("LOGOUT");
      window.location = "/dang-nhap";
    },
    listKeyCate(key) {
      let keys = key.split(",");
      return keys;
    },
    totalItemByCart() {
      if (this.$store.getters.CURRENT_USER) {
        getAllTotalitem()
          .then((res) => {
            this.totalItemCart = res;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        let item = JSON.parse(localStorage.getItem("CART"));
        if (item) {
          this.totalItemCart = 0;
          item.forEach(e => {
            this.totalItemCart += e.quantity
          })
        }
      }
    },
    totalItemByFavorite() {
      if (this.$store.getters.CURRENT_USER) {
        getQuantityItem()
          .then((res) => {
            this.totalFavorite = res;
          })
          .catch((err) => {
            console.log(err);
          });
      } else {
        return;
      }
    },
    favoriteProductHeader(productId) {
      let self = this;
      let value = favorite(productId)
        .then((res) => {
          if (res == 1) self.totalFavorite -= 1;
          else if (res == 2) self.totalFavorite += 1;
          return res;
        })
        .catch((err) => {
          console.log(err);
        });
      return value;
    },
    redirectBrand(brandId) {
      // window.location.href = `/nhan-hieu/${brandId}`
      this.$router.push(`/nhan-hieu/${brandId}`).catch(error => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    }
  },
};
</script>

<style lang="css" scoped>
@import url("@/assets/user/css/header.css");
</style>
