<template>
  <div>
    <loader v-if="loading" />
    <blog-listing v-else />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      loading: true,
    };
  },
  created() {
    this.$store.dispatch("getAllPosts").then(() => (this.loading = false));
  },
};
</script>
