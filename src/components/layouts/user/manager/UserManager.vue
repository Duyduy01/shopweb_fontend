<template>
  <div>
    <Header />
    <section class="app-main">
      <transition name="fade-transform" mode="out-in">
        <div class="container mt-5">
          <div class="row">
            <div class="col-2">
              <div class="user-mananger">
                <div class="col-12">
                  <h5>Xin chào, {{ fullName }}</h5>
                </div>
                <div class="m-2">
                  <a @click="redirectUrl('/thong-tin-ca-nhan')">
                    <font-awesome-icon icon="fas fa-user" />
                    <span id="user-profile-manager" class="user-info">
                      Thông tin cá nhân</span
                    >
                  </a>
                </div>
                <div class="m-2">
                  <a @click="redirectUrl('/don-dat')">
                    <font-awesome-icon icon="fas fa-wallet" />
                    <span id="user-bill-manager" class="user-info">
                      Đơn hàng</span
                    >
                  </a>
                </div>
                <div class="m-2">
                  <a @click="redirectUrl('/yeu-thich')">
                    <font-awesome-icon icon="fas fa-heart" />
                    <span id="user-favorite-manager" class="user-info">
                      Yêu thích</span
                    >
                  </a>
                </div>
                <div class="m-2">
                  <font-awesome-icon icon="fas fa-key" />
                  <span id="user-changes-manager" class="user-info">
                    Thay đổi mật khẩu</span
                  >
                </div>
              </div>
            </div>
            <div class="col-10">
              <router-view />
            </div>
          </div>
        </div>
      </transition>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layouts/user/elements/Header.vue";
import Footer from "@/components/layouts/user/elements/Footer.vue";

export default {
  components: {
    Header,
    Footer,
  },
  name: "BillView",
  data() {
    return {
      fullName: this.$store.getters.CURRENT_USER.fullName,
      checkActiveManager: null,
    };
  },
  computed: {
    checkActive() {
      return this.checkActiveManager;
    },
  },

  created() {},
  methods: {
    activePageCurrent() {
      let url =
        this.checkActiveManager == null
          ? this.$route.fullPath
          : this.checkActiveManager;
      if (url == "/thong-tin-ca-nhan") {
        this.checkActiveManager = 1;
        document
          .getElementById("user-profile-manager")
          .classList.add("active-manager-user");
      } else if (url == "/don-dat") {
        this.checkActiveManager = 2;
        document
          .getElementById("user-bill-manager")
          .classList.add("active-manager-user");
      } else if (url == "/yeu-thich") {
        this.checkActiveManager = 3;
        document
          .getElementById("user-favorite-manager")
          .classList.add("active-manager-user");
      }
    },
    redirectUrl(urlRedirect) {
      let urlOld = this.$route.fullPath;
      if (urlOld == urlRedirect) return;
      let element = document.querySelectorAll(".user-info");
      element.forEach((e) => {
        e.classList.remove("active-manager-user");
      });
      this.$router.push(urlRedirect);
      this.checkActiveManager = urlRedirect;
      this.activePageCurrent();
    },
  },
  mounted() {
    this.activePageCurrent();
  },
};
</script>

<style scoped>
.user-info {
  color: black;
  cursor: pointer;
}
.active-manager-user {
  color: orange;
}

.user-info:hover {
  color: orange;
}
</style>
