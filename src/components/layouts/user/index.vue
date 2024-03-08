<template>
  <div>
    <Header></Header>
    <app-main></app-main>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from "@/components/layouts/user/elements/Header.vue";
import Footer from "@/components/layouts/user/elements/Footer.vue";
import AppMain from "@/components/layouts/user/elements/AppMain.vue";
// import { favorite } from "@/service/user/favorite";

export default {
  // name: "UserLayout",
  components: {
    Header,
    Footer,
    AppMain,
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss"></style>
