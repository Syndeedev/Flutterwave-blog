<template>
  <div>
    <div v-if="loading">ooooooooommmmmmmmmooooo</div>
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
    this.$store.dispatch("getAllPosts").then((res) => {
      this.loading = false;
    });
    //   console.log(response.data);
    // } catch (e) {}
  },
};
</script>
