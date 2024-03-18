<template>
  <section class="header">
    <div class="header-v2">
      <section class="announcement xs-none lg-block">
        <div class="ctnr xs-flex js-between ai-center">
          <div class="announcement_left">
            <!-- <div class="header-horizotal-menu"> -->
            <ul class="announcement_content xs-flex">
              <li class="annoucement_shopname p-relative">
                <router-link to="/" class="p-relative">DuyShop</router-link>
              </li>
              <li class="annoucement_policy">
                <router-link to="/" class="p-relative">8:00 am to 22:00 pm</router-link>
              </li>
            </ul>
            <!-- </div> -->
          </div>
          <div class="announcement_right">
            <div class="switcher-currency">
              <select class="currency-picker" name="currencies" id="">
                <option value="" selected="selected">VN</option>
                <option value="">INF</option>
                <option value="">GBP</option>
                <option value="">CAD</option>
                <option value="">USD</option>
              </select>
            </div>
          </div>
        </div>
      </section>
      <header class="header_main">
        <div class="ctnr xs-flex js-between ai-center">
          <div class="header_logo">
            <!-- <img src="@/assets/img/logo.jpg" alt="" srcset="" /> -->
            <router-link to="/">
              <img src="@/assets/logo/SANHO-logos_black.png" alt="Duy shop" srcset="" />
            </router-link>
          </div>
          <!-- mobi -->
          <div
            class="header_mobi_wrapper mobi_nav_hide_right xs-inline-block lg-none p-fixed h-100v top-0 right-0"
          >
            <button class="p-absolute" @click="closeMobiNav">
              <font-awesome-icon :icon="['fas', 'xmark']" size="xl" />
            </button>
            <nav class="header_mobi_nav p-relative">
              <ul class="header_mobi_menu">
                <li>
                  <router-link to="/" class="xs-block">Trang chủ</router-link>
                </li>
                <li>
                  <router-link to="/gioi-thieu-cua-hang" class="xs-block"
                    >Giới thiệu</router-link
                  >
                </li>
                <li>
                  <div
                    class="xs-flex ai-center w-100"
                    @click="openSubmenu('product')"
                  >
                    <a class="w-100">Sản phẩm</a>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      size="sm"
                      style="color: #000000"
                    />
                  </div>
                </li>
                <li>
                  <div
                    class="xs-flex ai-center w-100"
                    @click="openSubmenu('brand')"
                  >
                    <a class="w-100">Nhãn hiệu</a>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      size="sm"
                      style="color: #000000"
                    />
                  </div>
                </li>
              </ul>
              <!-- product-child -->
              <div
                class="header_mobi_submenu mobi_nav_hide_right p-absolute top-0 right-0 left-0"
                data-id="product"
              >
                <button
                  class="header_btn_back xs-flex ai-center w-100"
                  @click="previousMenu()"
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-left']"
                    size="sm"
                    style="color: #000000"
                  />
                  <div class="w-100 ta-left">All</div>
                </button>
                <router-link to="/san-pham/0" class="xs-block"
                  >Sản phẩm</router-link
                >
                <template v-for="(item, key) in category">
                  <div
                    class="header_mobi_item xs-flex ai-center w-100"
                    :key="key"
                    @click="openSubSubmenu(key)"
                  >
                    <span class="w-100">{{ listKeyCate(key)[1] }}</span>
                    <font-awesome-icon
                      :icon="['fas', 'chevron-right']"
                      size="sm"
                    />
                  </div>
                </template>
              </div>
              <div
                class="header_mobi_submenu mobi_nav_hide_right p-absolute top-0 right-0 left-0"
                data-id="product-Child"
              >
                <button
                  class="header_btn_back xs-flex ai-center w-100"
                  @click="previousMenu(isOpenSub2)"
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-left']"
                    size="sm"
                    style="color: #000000"
                  />
                  <div class="w-100 ta-left">Sản phẩm</div>
                </button>
                <router-link
                  :to="'/san-pham/' + categoryChild[0]"
                  class="xs-block"
                  >{{ categoryChild[1] }}</router-link
                >
                <template>
                  <ul class="header_mobi_sub_child">
                    <li v-for="(cate, index) in categoryChild[2]" :key="index">
                      <router-link
                        :to="'/san-pham/' + cate.id"
                        class="xs-block"
                        >{{ cate.categoryName }}</router-link
                      >
                    </li>
                  </ul>
                </template>
              </div>
              <!-- brand-child -->
              <div
                class="header_mobi_submenu mobi_nav_hide_right p-absolute top-0 right-0 left-0"
                data-id="brand"
              >
                <button
                  class="header_btn_back xs-flex ai-center w-100"
                  @click="previousMenu()"
                >
                  <font-awesome-icon
                    :icon="['fas', 'chevron-left']"
                    size="sm"
                    style="color: #000000"
                  />
                  <div class="w-100 ta-left">All</div>
                </button>
                <span class="xs-block">Nhãn hiệu</span>
                <ul>
                  <li
                    v-for="b in brand"
                    :key="b.id"
                    class="xs-flex ai-center"
                    @click="redirectBrand(b.id)"
                  >
                    <img :src="b.icon" alt="" srcset="" />
                    <router-link
                      :to="'/nhan-hieu/' + b.id"
                      class="w-100 ta-left"
                      >{{ b.brandName }}</router-link
                    >
                  </li>
                </ul>
              </div>
            </nav>
          </div>
          <!-- desktop -->
          <nav class="header_desktop_nav xs-none lg-block">
            <!-- <div class="middle-header-horizotal-menu"> -->
            <ul class="header_desktop_menu xs-flex">
              <li>
                <router-link to="/" class="p-relative xs-block h-100"
                  >Trang chủ</router-link
                >
              </li>
              <li>
                <router-link
                  to="/gioi-thieu-cua-hang"
                  class="p-relative xs-block h-100"
                  >Giới thiệu</router-link
                >
              </li>
              <li @mouseover="hoverScrim" @mouseleave="leaveScrim">
                <router-link
                  :to="'/san-pham/0'"
                  class="header_desktop_product p-relative xs-block h-100"
                  >Sản phẩm</router-link
                >
                <div class="header_desktop_submenu p-absolute">
                  <div class="header_submenu_item">
                    <ul class="row js-center header_submenu_child">
                      <template v-for="(item, key) in category">
                        <li class="col-2 header_submenu_cate" :key="key">
                          <router-link
                            :to="'/san-pham/' + listKeyCate(key)[0]"
                            class="xs-inline-block"
                            >{{ listKeyCate(key)[1] }}
                          </router-link>
                          <ul class="header_submenu_sub">
                            <li v-for="cate in item" :key="cate.id">
                              <router-link
                                :to="'/san-pham/' + cate.id"
                                class="xs-block"
                                >{{ cate.categoryName }}</router-link
                              >
                            </li>
                          </ul>
                        </li>
                      </template>
                    </ul>
                  </div>
                </div>
              </li>
              <li class="p-relative">
                <a class="p-relative xs-block h-100">Nhãn hiệu</a>
                <ul class="header_brand_submenu p-absolute">
                  <li
                    v-for="b in brand"
                    :key="b.id"
                    @click="redirectBrand(b.id)"
                  >
                    <img :src="b.icon" alt="" srcset="" />
                    <!-- <a :href="'/nhan-hieu/' + b.id">{{ b.brandName }} </a> -->
                    <router-link :to="'/nhan-hieu/' + b.id">{{
                      b.brandName
                    }}</router-link>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#" class="p-relative xs-block h-100">Bài viết</a>
              </li>
            </ul>
            <!-- </div> -->
          </nav>
          <div class="header_btn">
            <div class="header_btn_wrapper xs-flex js-right ai-center">
              <router-link
                to="/tim-kiem"
                class="header_btn_search inline-flex ai-center"
              >
                <font-awesome-icon :icon="['fas', 'magnifying-glass']" />
              </router-link>
              <a
                class="header_btn_login p-relative xs-inline-flex ai-center"
                @click="toggleUserMenu()"
              >
                <font-awesome-icon
                  :icon="!user ? 'fa-regular fa-user' : 'fa-solid fa-user'"
                  :style="!user ? {} : { color: '#161964' }"
                />
                <ul
                  class="header_login_child ta-center"
                  :style="{ display: showUserMenu ? 'block' : 'none' }"
                  v-if="user"
                >
                  <li class="header_login_user">
                    Xin chào,{{ user.fullName }}
                  </li>
                  <li>
                    <router-link to="/thong-tin-ca-nhan" class="xs-block"
                      >Thông tin</router-link
                    >
                  </li>
                  <li>
                    <router-link to="/don-dat" class="xs-block"
                      >Đơn hàng</router-link
                    >
                  </li>
                  <li><a class="xs-block" @click="logout">Đăng xuất</a></li>
                </ul>
                <ul
                  class="header_login_child ta-center"
                  :style="{ display: showUserMenu ? 'block' : 'none' }"
                  v-if="!user"
                >
                  <li>
                    <router-link :to="'/dang-nhap'" class="xs-block"
                      >Đăng nhập</router-link
                    >
                  </li>
                  <li>
                    <router-link :to="'/dang-ky'" class="xs-block"
                      >Đăng ký</router-link
                    >
                  </li>
                </ul>
              </a>
              <router-link
                to="/yeu-thich"
                class="header_btn_favorite xs-inline-flex ai-center"
              >
                <el-badge :value="totalFavorite" class="item">
                  <font-awesome-icon :icon="['far', 'heart']" />
                </el-badge>
              </router-link>
              <router-link
                to="/gio-hang"
                class="header_btn_cart xs-inline-flex ai-center"
              >
                <el-badge :value="getAllTotelItemCart" class="item">
                  <font-awesome-icon icon="fa-solid fa-cart-shopping" />
                </el-badge>
              </router-link>
              <button
                id="toggleMobi"
                class="xs-block lg-none"
                @click="openMobiNav"
              >
                <font-awesome-icon :icon="['fas', 'bars']" />
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
    <div
      class="header_scrim p-fixed xs-block top-0 right-0 bottom-0 left-0"
      :class="{ scrim_active: scrim }"
    ></div>
  </section>
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
      categoryChild: [],
      totalItemCart: 0,
      textSearch: "",
      totalFavorite: 0,
      brand: [],
      scrim: false,
      showUserMenu: false,
      isDropdownUser: false,
      isOpenSub2: true,
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
      // console.log(this.category);
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
    // hover làm mờ bg
    hoverScrim() {
      this.scrim = true;
    },
    leaveScrim() {
      this.scrim = false;
    },

    // open mobile nav
    openMobiNav() {
      document
        .querySelector(".header_mobi_wrapper")
        .classList.add("mobi_nav--active");
      document.querySelector(".header_scrim").style.zIndex = 1;
      this.hoverScrim();
      document.addEventListener("click", this.clickOutSideMobiNav);
    },
    closeMobiNav() {
      document
        .querySelector(".header_mobi_wrapper")
        .classList.remove("mobi_nav--active");
      document.querySelector(".header_scrim").style.zIndex = -1;
      document.removeEventListener("click", this.clickOutSideMobiNav);
      this.leaveScrim();
      this.previousMenu();
      this.previousMenu(this.isOpenSub2);
    },
    clickOutSideMobiNav(event) {
      const toggleMobi = document.getElementById("toggleMobi");
      const wrapperMobi = document.querySelector(".header_mobi_wrapper");
      if (toggleMobi.contains(event.target)) {
        return;
      }
      if (!wrapperMobi.contains(event.target)) {
        this.closeMobiNav();
      }
    },
    openSubmenu(key) {
      document
        .querySelector(".header_mobi_menu")
        .classList.add("mobi_nav_hide_left");
      if (key === "product") {
        document
          .querySelector('[data-id="product"]')
          .classList.add("mobi_nav--active");
      } else if (key === "brand") {
        document
          .querySelector('[data-id="brand"]')
          .classList.add("mobi_nav--active");
      }
    },
    async openSubSubmenu(key) {
      this.categoryChild = await [
        this.listKeyCate(key)[0],
        this.listKeyCate(key)[1],
        this.category[key],
      ];
      document
        .querySelector('[data-id="product"]')
        .classList.add("mobi_nav_hide_left");
      document
        .querySelector('[data-id="product-Child"]')
        .classList.add("mobi_nav--active");
    },
    previousMenu(isOpenSubSub) {
      if (isOpenSubSub) {
        document
          .querySelector('[data-id="product-Child"]')
          .classList.remove("mobi_nav--active");
        document
          .querySelector('[data-id="product"]')
          .classList.remove("mobi_nav_hide_left");
      } else {
        let submenu = document.querySelectorAll(".header_mobi_submenu");
        submenu.forEach((item) => {
          item.classList.remove("mobi_nav--active");
        });
        document
          .querySelector(".header_mobi_menu")
          .classList.remove("mobi_nav_hide_left");
      }
    },
    // Hiện thị menu user
    toggleUserMenu() {
      const buttontoggleUserMenu = document.querySelector(".header_btn_login");
      this.showUserMenu = !this.showUserMenu;
      if (this.showUserMenu) {
        buttontoggleUserMenu.classList.add("icon--active");
        //Đăng ký sự kiện đóng menu user
        document.addEventListener("click", this.clickOutSide);
      } else {
        buttontoggleUserMenu.classList.remove("icon--active");
        //Hủy đăng ký
        document.removeEventListener("click", this.clickOutSide);
      }
    },
    //Func hủy đóng menu user
    closeDropdownUser() {
      this.showUserMenu = false;
      document.removeEventListener("click", this.clickOutSide);
    },
    //Func đóng menu user
    clickOutSide(event) {
      const buttontoggleUserMenu = document.querySelector(".header_btn_login");
      const closeDropdownUser = document.querySelector(".header_login_child");
      if (this.showUserMenu) {
        if (
          buttontoggleUserMenu &&
          buttontoggleUserMenu.contains(event.target)
        ) {
          return; // Bỏ qua tính toán nếu click xảy ra trên phần tử button
        }
        if (!closeDropdownUser.contains(event.target)) {
          buttontoggleUserMenu.classList.remove("icon--active");
          this.closeDropdownUser();
        }
      }
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
          item.forEach((e) => {
            this.totalItemCart += e.quantity;
          });
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
      this.$router.push(`/nhan-hieu/${brandId}`).catch((error) => {
        if (error.name != "NavigationDuplicated") {
          throw error;
        }
      });
    },
  },
};
</script>

<style lang="css" scoped>
.header {
  position: sticky;
  top: 0;
  z-index: 1000;
}
.header-v2 {
  background-color: var(--bg-primary);
}
/*------------------------------------*/
/* announcement */
/*------------------------------------*/
.announcement {
  background-color: var(--bg-second);
  padding: 0.5rem 0;
}
ul.announcement_content > li > a {
  color: var(--color-primary);
  font-weight: 500;
  font-size: 1.4rem;
}
/* ul.header_desktop_menu > li::after, */
ul.announcement_content > li > a::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 0.05em;
  left: 0;
  bottom: 0;
  background-color: var(--bg-primary);
  transform: scaleX(0);
  transform-origin: bottom right;
  transition: transform 0.3s ease-out;
}
ul.announcement_content > li > a:hover::after {
  transform: scaleX(1);
  transform-origin: bottom left;
}
.annoucement_shopname {
  padding: 0 1rem 0 0;
}
.annoucement_shopname::before {
  content: "";
  position: absolute;
  height: 1.5rem;
  width: 0.1rem;
  background-color: var(--color-primary);
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}
.annoucement_policy {
  padding: 0 0 0 1rem;
}
.currency-picker {
  border: none;
  background-color: var(--bg-second);
  color: var(--color-primary);
}
/*------------------------------------*/
/* header */
/*------------------------------------*/
.header_main {
  border-bottom: 1px solid rgb(227 227 227 / 1);
}
.header_logo,
.header_btn {
  flex: 1 1 0;
}
.header_logo img {
  width: 6rem;
  height: 6rem;
}
.header_btn > .header_btn_wrapper > a,
.header_btn > .header_btn_wrapper > button,
.header_mobi_wrapper > button {
  padding: 0.6rem;
  border-radius: 50%;
  transition: all 0.2s;
  width: 3.5rem;
  height: 3.5rem;
}
.header_btn > .header_btn_wrapper > a {
  margin-right: 1rem;
}
.header_btn > .header_btn_wrapper > a:hover,
.header_btn > .header_btn_wrapper > button:hover,
.header_mobi_wrapper > button:hover {
  background-color: var(--color-3);
}
.header_btn svg {
  width: 100%;
  height: 100%;
  color: var(--color-second);
}
.el-badge {
  top: 0.35rem;
}
.header_login_child {
  position: absolute;
  background-color: var(--bg-primary);
  width: 20rem;
  top: calc(100% + 12.5px);
  left: -7rem;
  border-radius: 0 0 1rem 1rem;
  box-shadow: 3px 9px 15px rgba(0, 0, 0, 0.12);
  animation: tabFade 0.5s;
}
.header_login_user {
  padding: 1rem 0.5rem;
  color: red;
}
.header_login_child > li > a {
  padding: 1rem 0.5rem;
  transition: all 0.3s;
  color: var(--color-second);
}
.header_login_child > li:not(:last-child) > a {
  border-bottom: 1px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.1);
}
.header_login_child > li:last-child > a {
  border-radius: 0 0 1rem 1rem;
}
/*------------------------------------*/
/* #mobile nav */
.header_mobi_wrapper {
  background-color: var(--bg-primary);
  padding: 4rem 3rem 10rem 3.6rem;
  overflow-x: hidden;
  width: 30rem;
  z-index: 2;
}
.header_mobi_wrapper > button {
  right: 0.6rem;
  top: 1.3rem;
  margin-right: 1rem;
}
.header_mobi_menu {
  transition: transform 0.25s;
}
.header_mobi_menu > li {
  padding: 1rem 0;
}
.header_mobi_menu a {
  font-weight: 500;
  color: var(--color-second);
}
.header_mobi_submenu .header_btn_back,
.header_mobi_submenu .header_mobi_item,
.header_mobi_submenu > ul > li {
  padding: 0.4rem 0;
}
.header_mobi_submenu .header_btn_back {
  font-weight: 500;
  margin-bottom: 2.8rem;
}
.header_mobi_submenu .header_btn_back div {
  padding-left: 1.6rem;
}
.header_mobi_submenu a {
  color: var(--color-second);
}
.header_mobi_submenu > a,
.header_mobi_submenu > span {
  padding: 0.7rem 0;
  font-weight: 500;
  margin-bottom: 1.6rem;
}
.header_mobi_submenu .header_mobi_item,
.header_mobi_submenu > ul > li {
  cursor: pointer;
}
.header_mobi_submenu .header_mobi_item span,
.header_mobi_submenu .header_mobi_item svg,
.header_mobi_sub_child a {
  color: var(--color-2);
  transition: color 0.25s;
}
.header_mobi_submenu .header_mobi_item:hover span,
.header_mobi_submenu .header_mobi_item:hover svg,
.header_mobi_sub_child li:hover a {
  color: var(--color-second);
}
.header_mobi_submenu > ul img {
  margin-right: 1.5rem;
  width: 4.5rem;
  height: 4.5rem;
}
.mobi_nav_hide_right {
  transform: translateX(320px);
  transition: transform 0.25s;
}
.mobi_nav--active {
  visibility: visible;
  transform: translateX(0);
}
.mobi_nav_hide_left {
  transform: translateX(-320px);
  transition: transform 0.25s;
}
/*------------------------------------*/

/*------------------------------------*/
ul.header_desktop_menu > li > a {
  padding: 0 1rem;
  color: var(--color-second);
  line-height: 3.75;
  font-weight: 500;
}
ul.header_desktop_menu > li > a::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 0.2rem;
  background-color: var(--bg-second);
  transform: scaleX(0) rotate(0deg);
  transition: all 0.5s;
}
ul.header_desktop_menu > li:hover > a::before {
  transform: scaleX(1) rotate(0deg);
}
.header_desktop_submenu,
.header_brand_submenu {
  background-color: var(--bg-primary);
  padding: 1.6rem 4rem 4rem;
  overflow: auto;
  white-space: nowrap;
  visibility: hidden;
  opacity: 0;
  top: 99%;
  left: 0;
  right: 0;
  transition: transform 0.1s ease, opacity 0ms linear 0.1s,
    visibility 0ms linear 0.1s;
  transform-origin: top center;
  transform: scaleY(0);
}
ul.header_desktop_menu > li:hover .header_desktop_submenu,
ul.header_desktop_menu > li:hover .header_brand_submenu {
  transform: scaleY(1);
  opacity: 1;
  visibility: visible;
  transition: transform 0.25s ease, opacity 0ms, visibility 0ms;
}
.header_submenu_item {
  max-width: 110rem;
  margin: 0 auto;
  padding: 0 0 1rem 0;
}
.header_submenu_child > .header_submenu_cate,
.header_brand_submenu > li {
  opacity: 0;
  transform: translateY(-10px);
  transition: transform 0.1s, opacity 0.1s, color 0.2s;
  transition-delay: 0s;
  padding-top: 1.6rem;
}
.header_submenu_child > .header_submenu_cate a,
.header_brand_submenu > li > a {
  line-height: 1;
  font-weight: 500;
}
.header_submenu_child > .header_submenu_cate > a {
  color: var(--color-second);
  margin-bottom: 1.4rem;
}
ul.header_desktop_menu > li:hover .header_submenu_cate,
ul.header_desktop_menu > li:hover > .header_brand_submenu li {
  opacity: 1;
  transform: translateY(0);
  transition: opacity 0.2s linear, transform 0.3s ease;
  transition-delay: 0.2s;
}
.header_submenu_sub > li > a {
  color: var(--color-2);
  font-size: 1.4rem;
  padding: 0.5rem 0;
  margin-bottom: 0.6rem;
  transition: color 0.3s;
}
.header_submenu_sub > li:hover > a {
  color: var(--color-second);
}
.header_brand_submenu {
  top: 102%;
  width: 34rem;
  padding: 0;
  left: -10%;
  box-shadow: 3px 9px 15px rgba(0, 0, 0, 0.12);
}
.header_brand_submenu > li {
  cursor: pointer;
  padding: 1.5rem 2rem;
  border-bottom: 1px solid transparent;
  border-bottom-color: rgba(0, 0, 0, 0.1);
}
.header_brand_submenu > li:hover,
.header_login_child > li:hover > a {
  background-color: rgba(78, 74, 74, 0.29);
}
.header_brand_submenu > li > a {
  color: var(--color-second);
  transition: all 0.2s;
}
.header_brand_submenu > li:hover > a,
.header_login_child > li:hover > a {
  color: var(--color-primary);
}
.header_brand_submenu > li > img {
  width: 4rem;
  height: 4rem;
  margin-right: 1rem;
}
.header_scrim {
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  background-color: hsla(0, 0%, 7%, 0.36);
  -webkit-backdrop-filter: blur(4px);
  backdrop-filter: blur(4px);
  transition: opacity 0.25s, visibility 0s linear 0.25s;
}
.icon--active {
  background-color: var(--color-3);
}
.scrim_active {
  opacity: 1;
  visibility: visible;
  transition: opacity 0.8s ease, visibility 0s;
}
@media only screen and (min-width: 576px) {
}
@media only screen and (min-width: 768px) {
}
@media only screen and (min-width: 992px) {
  .header_btn > .header_btn_wrapper > a:last-of-type {
    margin-right: 0;
  }
}
@media only screen and (min-width: 1200px) {
}
@media only screen and (min-width: 1400px) {
}
</style>
