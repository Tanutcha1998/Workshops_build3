<template>
  <div class="page-view">
    <NavBar />
    <h1>pricing page working!</h1>
  </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
export default {
  name: "PricingView",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss">
.page-view {
  text-align: center;
  align-content: center;
  background-color: azure;
  height: 100vh;
}
</style>
