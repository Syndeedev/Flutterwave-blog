<template>
  <div id="app">
    <page-header />
    <Nuxt />
  </div>
</template>
<script>
import PageHeader from "../components/Header.vue";
export default {
  components: { PageHeader },
};
</script>
<style lang="scss" scoped>
#app {
  background-color: #ffffff;
  max-width: 70rem;
  margin: auto;
  padding: 0 10px;
  min-height: 100vh;
}
@media screen and (min-width: 768px) {
  #app {
    padding: 0 20px;
  }
}
@media screen and (min-width: 1024px) {
  #app {
    padding: 0 40px;
  }
}
</style>
