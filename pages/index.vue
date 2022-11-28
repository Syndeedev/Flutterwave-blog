<template>
  <div>
    <loader v-if="loading" />
    <template v-else>
      <blog-listing />
      <button @click="getPosts">Load More</button>
      <join-us />
    </template>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "IndexPage",
  data() {
    return {
      loading: true,
      page: 0,
    };
  },
  mounted() {
    if (!this.allPosts.length) {
      this.getPosts();
    } else {
      this.loading = false;
    }
  },
  computed: {
    ...mapGetters(["allPosts"]),
  },
  methods: {
    getPosts() {
      this.loading = true;
      this.$store
        .dispatch("getAllPosts", ++this.page)
        .then(() => (this.loading = false));
    },
  },
};
</script>
