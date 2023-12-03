<template>
  <div>
    <Header />
    <app-main />
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/layouts/user/elements/Header.vue";
import Footer from "@/components/layouts/user/elements/Footer.vue";
import AppMain from "@/components/layouts/user/elements/AppMain.vue";
// import { favorite } from "@/service/user/favorite";

export default {
  name: "UserLayout",
  components: {
    Header,
    Footer,
    AppMain,
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
  box-sizing: border-box;
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol";
}
html {
  font-size: 14px;
}
</style>
