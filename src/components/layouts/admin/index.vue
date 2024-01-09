<template>
  <div class="hold-transition sidebar-mini layout-fixed">
    <div class="wrapper">
      <Header />
      <Sidebar />
      <div class="content-wrapper">
        <router-view></router-view>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
import "@/assets/dist/js/adminlte.js";
import Header from "@/components/layouts/admin/elements/HeaderAdmin.vue";
import Footer from "@/components/layouts/admin/elements/FooterAdmin.vue";
import Sidebar from "@/components/layouts/admin/elements/SidebarAdmin.vue";
export default {
  name: "UserLayout",
  components: {
    Header,
    Footer,
    Sidebar,
  },
};
</script>

<style lang="scss" scoped>
@import url("@/assets/plugins/fontawesome-free/css/all.min.css");
@import url("@/assets/dist/css/adminlte.css");
</style>
