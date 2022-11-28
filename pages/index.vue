<template>
  <div>
    <loader v-if="loading" />
    <template v-else>
      <blog-listing />
      <div class="load__more">
        <button @click="getPosts">Load More</button>
      </div>
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
<style lang="scss" scoped>
.load__more {
  margin-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    padding: 8px;
    border-radius: 5px;
    color: #000000;
    background-color: #ffffff;
    text-align: center;
    cursor: pointer;
    text-transform: capitalize;
    border: 1px solid #000000;
  }
  button:hover {
    background-color: #e6e3e3;
  }
}
</style>
