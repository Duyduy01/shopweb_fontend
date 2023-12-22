<template>
  <div>
    <!-- Main Sidebar Container -->
    <aside class="main-sidebar sidebar-dark-primary elevation-4">
      <!-- Brand Logo -->
      <router-link to="/admin/home" class="brand-link">
        <img src="@/assets/logo/SANHO-logos_white.png" alt="AdminLTE Logo" class="brand-image img-circle elevation-3"
          style="opacity: 0.8" />
        <span class="brand-text font-weight-light">DUY SHOP</span>
      </router-link>

      <!-- Sidebar -->
      <div class="sidebar">
        <!-- Sidebar user panel (optional) -->
        <div class="user-panel mt-3 pb-3 mb-3 d-flex">
          <div class="image">
            <img src="@/assets/logo/SANHO-logos_white.png" class="img-circle elevation-2" alt="User Image"
              style="object-fit:co" />
          </div>
          <div class="d-flex justify-content-between w-100" style="font-size: 17px">
            <div>
              <a href="#" class="d-block">{{ user.fullName }}</a>
            </div>
            <div>
              <p class="d-block" @click="logout" style="color:#fff">
                <font-awesome-icon icon="fas fa-sign-out-alt" />
              </p>
            </div>
          </div>
        </div>

        <!-- SidebarSearch Form -->
        <div class="form-inline">
          <div class="input-group" data-widget="sidebar-search">
            <input class="form-control form-control-sidebar" type="search" placeholder="Tìm kiếm" aria-label="Search" />
            <div class="input-group-append">
              <button class="btn btn-sidebar">
                <i class="fas fa-search fa-fw"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Sidebar Menu -->
        <nav class="mt-2">
          <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">

            <!-- Add icons to the links using the .nav-icon class
               with font-awesome or any other icon font library -->
            <!-- sản phẩm -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Cập nhập sản phẩm đặc trưng
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/product" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Danh sách sản phẩm</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/admin/product/add-product" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Thêm sản phẩm (cha)</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/admin/product/add" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Thêm sản phẩm (Con)</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- Đặc trưng -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-tachometer-alt"></i>
                <p>
                  Cập nhập đặc trưng
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/speciality" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Đặc trưng</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- đơn đặt hàng -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Quản lý đơn đặt
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/bill" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Danh sách đơn đặt</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- phiếu nhập kho -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Cập nhập phiếu nhập kho
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/receipt" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Danh sách phiếu nhập kho</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/admin/receipt/add" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Lập phiếu nhập kho</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- category -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Cập nhập danh mục sản phẩm
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/category" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Danh sách danh mục sản phẩm</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- thương hiệu -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Cập nhập thương hiệu
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/brand" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Danh sách thương hiệu</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- banner -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Quản lý banner
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/banner" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Banner</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- Chiến dịch -->
            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Cập nhập sự kiện
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/campaign" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Danh sách sự kiện</p>
                  </router-link>
                </li>
              </ul>
            </li>

            <li class="nav-item">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Báo cáo
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/report/one-day" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Báo cáo theo một ngày</p>
                  </router-link>
                </li>
                <li class="nav-item">
                  <router-link to="/admin/report/several-days" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Báo cáo doanh thu</p>
                  </router-link>
                </li>
              </ul>
            </li>
            <!-- đơn quản lý người dùng -->
            <li class="nav-item" v-if="checkRole">
              <a href="#" class="nav-link" style="background-color: black">
                <i class="nav-icon fas fa-chart-pie"></i>
                <p>
                  Quản lý người dùng
                  <i class="right fas fa-angle-left"></i>
                </p>
              </a>
              <ul class="nav nav-treeview">
                <li class="nav-item">
                  <router-link to="/admin/user-manager" class="nav-link">
                    <i class="far fa-circle nav-icon"></i>
                    <p>Cập nhập người dùng</p>
                  </router-link>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <!-- /.sidebar-menu -->
      </div>
      <!-- /.sidebar -->
    </aside>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: this.$store.getters.CURRENT_USER,
      checkRole: false,
    };
  },
  methods: {
    checkUser() {
      let roles = this.user.authorities;
      roles.forEach((e) => {
        if (e.authority == "ROLE_SUPER_ADMIN") this.checkRole = true;
      });
    },
    logout() {
      this.$store.commit("LOGOUT");
      window.location = "/dang-nhap";
    },
  },
  props: {},
  created() {
    this.checkUser();
  },
};
</script>

<style lang="scss" scoped>
</style>
