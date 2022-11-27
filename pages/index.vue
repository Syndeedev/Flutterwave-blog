<template>
  <div>
    <loader v-if="loading" />
    <blog-listing v-else />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    if (!this.allPosts.length) {
      this.$store.dispatch("getAllPosts").then(() => (this.loading = false));
    } else {
      this.loading = false;
    }
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
};
</script>
