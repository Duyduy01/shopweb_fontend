import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/components/layouts/user/index.vue";
import LayoutManager from "@/components/layouts/user/manager/UserManager.vue";
import LayoutAdmin from "@/components/layouts/admin";
import { Role } from "@/helpers/role";
Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    component: Layout,
    redirect: "/404",
    children: [
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/user/404.vue"),
        meta: {
          title: "404",
        },
      },
    ],
  },
  {
    path: "/",
    component: Layout,
    redirect: "/",
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/user/home/HomeView.vue"),
        meta: {
          title: "Trang chủ",
        },
      },
    ],
  },
  {
    path: "/gioi-thieu-cua-hang",
    component: Layout,
    redirect: "/gioi-thieu-cua-hang",
    children: [
      {
        path: "/gioi-thieu-cua-hang",
        name: "gioi-thieu-cua-hang",
        component: () => import("@/views/AboutView.vue"),
        meta: {
          title: "Giới thiệu",
        },
      },
    ],
  },
  {
    path: "/dang-ky",
    component: Layout,
    redirect: "/dang-ky",
    children: [
      {
        path: "/dang-ky",
        name: "register",
        component: () => import("@/views/login/Register.vue"),
        meta: {
          title: "Đăng ký",
        },
      },
    ],
  },
  {
    path: "/dang-nhap",
    component: Layout,
    redirect: "/dang-nhap",
    children: [
      {
        path: "/dang-nhap",
        name: "dang-nhap",
        component: () => import("@/views/login/Login.vue"),
        meta: {
          title: "Đăng nhập",
        },
      },
    ],
  },
  {
    path: "/xac-minh/:email",
    component: Layout,
    redirect: "/xac-minh/:email",
    children: [
      {
        path: "/xac-minh/:email",
        name: "xac-minh",
        component: () => import("@/views/login/Verify.vue"),
        meta: {
          title: "Xác minh",
        },
        props: true,
      },
    ],
  },
  {
    path: "/san-pham/:cateId",
    component: Layout,
    redirect: "/san-pham/:cateId",
    children: [
      {
        path: "/san-pham/:cateId",
        name: "product",
        component: () => import("@/views/user/product/ProductViewUser.vue"),
        meta: {
          title: "Sản phẩm",
        },
        props: true,
      },
    ],
  },
  {
    path: "/chi-tiet-san-pham/:productId",
    component: Layout,
    redirect: "/chi-tiet-san-pham/:productId",
    children: [
      {
        path: "/chi-tiet-san-pham/:productId",
        name: "product-detail",
        component: () =>
          import("@/views/user/product/ProductDetailUserView.vue"),
        meta: {
          title: "Chi tiết sản phẩm",
        },
        props: true,
      },
    ],
  },
  {
    path: "/gio-hang",
    component: Layout,
    redirect: "/gio-hang",
    children: [
      {
        path: "/gio-hang",
        name: "cart",
        component: () => import("@/views/user/cart/CartView.vue"),
        meta: {
          title: "Giỏ hàng",
        },
        props: true,
      },
    ],
  },
  {
    path: "/dat-hang",
    component: Layout,
    redirect: "/dat-hang",
    children: [
      {
        path: "/dat-hang",
        name: "bill",
        component: () => import("@/views/user/cart/BillView.vue"),
        props: true,
        meta: {
          authorize: [Role.User],
          requiresAuth: true,
          title: "Đặt hàng",
        },
      },
    ],
  },
  {
    path: "/dat-hang-ngay/san-pham/:productId/so-luong/:quantity",
    component: Layout,
    redirect: "/dat-hang-ngay/san-pham/:productId/so-luong/:quantity",
    children: [
      {
        path: "/dat-hang-ngay/san-pham/:productId/so-luong/:quantity",
        name: "bill-pay-now",
        component: () => import("@/views/user/cart/BillPayNowView.vue"),
        props: true,
        meta: {
          authorize: [Role.User],
          requiresAuth: true,
          title: "Đặt hàng ngay",
        },
      },
    ],
  },
  {
    path: "/hoan-thanh-dat-hang",
    component: Layout,
    redirect: "/hoan-thanh-dat-hang",
    children: [
      {
        path: "/hoan-thanh-dat-hang",
        name: "finish-bill",
        component: () => import("@/views/user/cart/FinishBillView.vue"),
        props: true,
        meta: {
          authorize: [Role.User],
          requiresAuth: true,
          title: "Hoàn thành đơn hàng",
        },
      },
    ],
  },
  {
    path: "/don-dat",
    component: LayoutManager,
    redirect: "/don-dat",
    children: [
      {
        path: "/don-dat",
        name: "bill-list",
        component: () => import("@/views/user/bill/BillUserView.vue"),
        props: true,
        meta: {
          authorize: [Role.User],
          requiresAuth: true,
          title: "Đơn đặt",
        },
      },
    ],
  },
  {
    path: "/thong-tin-ca-nhan",
    component: LayoutManager,
    redirect: "/thong-tin-ca-nhan",
    children: [
      {
        path: "/thong-tin-ca-nhan",
        name: "user-info",
        component: () => import("@/views/user/manager/UserInfoView.vue"),
        props: true,
        meta: {
          authorize: [Role.User],
          requiresAuth: true,
          title: "Thông tin cá nhân",
        },
      },
    ],
  },
  {
    path: "/yeu-thich",
    component: LayoutManager,
    redirect: "/yeu-thich",
    children: [
      {
        path: "/yeu-thich",
        name: "favorite-info",
        component: () => import("@/views/user/manager/FavoriteInfoView.vue"),
        props: true,
        meta: {
          authorize: [Role.User],
          requiresAuth: true,
          title: "Yêu thích",
        },
      },
    ],
  },
  {
    path: "/nhan-hieu/:id",
    component: Layout,
    redirect: "/nhan-hieu/:id",
    children: [
      {
        path: "/nhan-hieu/:id",
        name: "bran",
        component: () => import("@/views/user/brand/UserBrandView.vue"),
        props: true,
        meta: {
          title: "Sản phẩm",
        },
      },
    ],
  },
  {
    path: "/tim-kiem",
    component: Layout,
    redirect: "/tim-kiem",
    children: [
      {
        path: "/tim-kiem",
        name: "tim-kiem",
        component: () =>
          import("@/views/user/product/SearchProductUserView.vue"),
        props: true,
        meta: {
          title: "Tìm kiếm",
        },
      },
    ],
  },
  {
    path: "/danh-gia/:billId",
    component: Layout,
    redirect: "/danh-gia/:billId",
    children: [
      {
        path: "/danh-gia/:billId",
        name: "danh-gia",
        component: () => import("@/views/user/bill/ReviewProductView.vue"),
        props: true,
        meta: {
          title: "Đánh giá",
        },
      },
    ],
  },
  ////////////////////////////////End-User//////////////////////////////

  ////////////////////////////////start-Admin//////////////////////////////
  {
    path: "/admin",
    component: LayoutAdmin,

    redirect: "/admin/home",
    children: [
      {
        path: "/admin/home",
        name: "admin-home",
        component: () => import("@/views/admin/AdminHomeView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin home",
        },
      },
    ],
  },
  // start product //
  {
    path: "/admin/product",
    component: LayoutAdmin,

    redirect: "/admin/product",
    children: [
      {
        path: "/admin/product",
        name: "admin-product",
        component: () => import("@/views/admin/product/AdminProductView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin product",
        },
      },
    ],
  },
  {
    path: "/admin/product/add-product",
    component: LayoutAdmin,
    redirect: "/admin/product/add-product",
    children: [
      {
        path: "/admin/product/add-product",
        name: "admin-product-add-product",
        component: () =>
          import("@/views/admin/product/AdminProductAddMainView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin product",
        },
      },
    ],
  },
  {
    path: "/admin/product/add",
    component: LayoutAdmin,
    redirect: "/admin/product/add",
    children: [
      {
        path: "/admin/product/add",
        name: "admin-product-add",
        component: () =>
          import("@/views/admin/product/AdminProductAddView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin product",
        },
      },
    ],
  },
  {
    path: "/admin/product/edit-main/:id",
    component: LayoutAdmin,
    redirect: "/admin/product/edit-main/:id",
    children: [
      {
        path: "/admin/product/edit-main/:id",
        name: "admin-product-edit-main",
        component: () =>
          import("@/views/admin/product/AdminProductAddMainView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin product",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/product/edit/:id",
    component: LayoutAdmin,
    redirect: "/admin/product/edit/:id",
    children: [
      {
        path: "/admin/product/edit/:id",
        name: "admin-product-edit",
        component: () =>
          import("@/views/admin/product/AdminProductAddView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin product",
        },
        props: true,
        default: null,
      },
    ],
  },
  // end product //
  // receipt
  {
    path: "/admin/receipt",
    component: LayoutAdmin,

    redirect: "/admin/receipt",
    children: [
      {
        path: "/admin/receipt",
        name: "admin-product-receipt",
        component: () => import("@/views/admin/receipt/AdminReceiptView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin receipt",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/receipt/add",
    component: LayoutAdmin,

    redirect: "/admin/receipt/add",
    children: [
      {
        path: "/admin/receipt/add",
        name: "admin-product-receipt-add",
        component: () => import("@/views/admin/receipt/AdminReceiptUpload.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin receipt",
        },
        props: true,
        default: null,
      },
    ],
  },
  // thương hiệu
  {
    path: "/admin/brand",
    component: LayoutAdmin,

    redirect: "/admin/brand",
    children: [
      {
        path: "/admin/brand",
        name: "admin-brand",
        component: () => import("@/views/admin/brand/AdminBrandView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin brand",
        },
        props: true,
        default: null,
      },
    ],
  },
  // category
  {
    path: "/admin/category",
    component: LayoutAdmin,

    redirect: "/admin/category",
    children: [
      {
        path: "/admin/category",
        name: "admin-category",
        component: () => import("@/views/admin/category/AdminCategoryView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin category",
        },
        props: true,
        default: null,
      },
    ],
  },
  // thương hiệu
  {
    path: "/admin/bill",
    component: LayoutAdmin,

    redirect: "/admin/bill",
    children: [
      {
        path: "/admin/bill",
        name: "admin-bill",
        component: () => import("@/views/admin/bill/AdminBillView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin bill",
        },
        props: true,
        default: null,
      },
    ],
  },
  // chiến dịch
  {
    path: "/admin/campaign",
    component: LayoutAdmin,

    redirect: "/admin/campaign",
    children: [
      {
        path: "/admin/campaign",
        name: "admin-campaign",
        component: () => import("@/views/admin/campaign/AdminCampaignView"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin campaign",
        },
        props: true,
        default: null,
      },
    ],
  },
  // thêm chiến dịch
  {
    path: "/admin/campaign/add",
    component: LayoutAdmin,

    redirect: "/admin/campaign/add",
    children: [
      {
        path: "/admin/campaign/add",
        name: "admin-campaign-add",
        component: () => import("@/views/admin/campaign/AdminCampaignAddView"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin campaign",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/campaign/:campId/detail",
    component: LayoutAdmin,

    redirect: "/admin/campaign/:campId/detail",
    children: [
      {
        path: "/admin/campaign/:campId/detail",
        name: "admin-campaign-detail",
        component: () =>
          import("@/views/admin/campaign/AdminCampaignDetailView"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin campaign detail",
        },
        props: true,
        default: null,
      },
    ],
  },
  // add campagin detail
  {
    path: "/admin/campaign/:campId/detail/add",
    component: LayoutAdmin,

    redirect: "/admin/campaign/:campId/detail/add",
    children: [
      {
        path: "/admin/campaign/:campId/detail/add",
        name: "admin-campaign-detail-add",
        component: () =>
          import("@/views/admin/campaign/AdminCampaignDetailAddView"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin campaign detail",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/campaign/finish",
    component: LayoutAdmin,

    redirect: "/admin/campaign/finish",
    children: [
      {
        path: "/admin/campaign/finish",
        name: "admin-campaign-finish",
        component: () =>
          import("@/views/admin/campaign/AdminCampaignFinishView"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin campaign finish",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/report/one-day",
    component: LayoutAdmin,

    redirect: "/admin/report/one-day",
    children: [
      {
        path: "/admin/report/one-day",
        name: "admin-report-one-day",
        component: () => import("@/views/admin/report/AdminReportOneDay.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin report",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/report/several-days",
    component: LayoutAdmin,
    redirect: "/admin/report/several-days",
    children: [
      {
        path: "/admin/report/several-days",
        name: "admin-report-several-days",
        component: () =>
          import("@/views/admin/report/AdminReportSeveralDays.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin report",
        },
        props: true,
        default: null,
      },
    ],
  },

  // supper admin quản lý user

  {
    path: "/admin/user-manager",
    component: LayoutAdmin,
    redirect: "/admin/user-manager",
    children: [
      {
        path: "/admin/user-manager",
        name: "admin-user-manager",
        component: () => import("@/views/admin/user/AdminUserManager.vue"),
        meta: {
          authorize: [Role.SupAmdin],
          requiresAuth: true,
          title: "Admin user",
        },
        props: true,
        default: null,
      },
    ],
  },
  // supper admin quản lý user
  // đặc trưng sản phẩm
  {
    path: "/admin/speciality",
    component: LayoutAdmin,

    redirect: "/admin/speciality",
    children: [
      {
        path: "/admin/speciality",
        name: "admin-speciality",
        component: () => import("@/views/admin/speciality/AdminSpecialityView"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin speciality",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/banner",
    component: LayoutAdmin,

    redirect: "/admin/banner",
    children: [
      {
        path: "/admin/banner",
        name: "admin-banner",
        component: () => import("@/views/admin/banner/BannerAdminView"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin banner",
        },
        props: true,
        default: null,
      },
    ],
  },
  {
    path: "/admin/banner/edit/:id",
    component: LayoutAdmin,

    redirect: "/admin/banner/edit/:id",
    children: [
      {
        path: "/admin/banner/edit/:id",
        name: "admin-banner-edit",
        component: () => import("@/views/admin/banner/BannerAdminEditView.vue"),
        meta: {
          authorize: [Role.Admin, Role.SupAmdin],
          requiresAuth: true,
          title: "Admin banner",
        },
        props: true,
        default: null,
      },
    ],
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});
const DEFAULT_TITLE = "Cửa hàng thể thao";
router.afterEach((to, from) => {
  console.log(from);
  // Use next tick to handle router history correctly
  // see: https://github.com/vuejs/vue-router/issues/914#issuecomment-384477609
  Vue.nextTick(() => {
    document.title = to.meta.title || DEFAULT_TITLE;
  });
});

export default router;
