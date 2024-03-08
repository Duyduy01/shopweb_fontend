<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view />
    </transition>

    <!-- <button class="top-main" @click="scrollTop">
      <font-awesome-icon icon="fas fa-arrow-up" />
    </button> -->
  </section>
</template>

<script>
export default {
  name: "AppMain",
  methods: {
    scrollTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style scoped>
.top-main {
  position: fixed;
  top: 1;
  bottom: 0;
  left: 1;
  right: 0;
  z-index: 1000;
  background-color: rgba(0, 0, 0, 0.667);
  width: 4rem;
  height: 4rem;
  margin: 0 1rem 1rem 0;
  border-radius: 50%;
}
.top-main > svg {
  font-size: 1.6rem;
  color: #fff;
}
</style>
