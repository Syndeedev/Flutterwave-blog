<template>
  <div>
    <latest-post-card />
    <div class="cards_container">
      <post-card
        :post="post"
        v-for="post in allPostsExceptFirst"
        :key="post.id"
      />
    </div>
    <!-- <join-us /> -->
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BlogListing",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["allPosts"]),
    allPostsExceptFirst() {
      const posts = [...this.allPosts];
      posts.shift();
      return posts;
    },
  },
};
</script>
<style lang="scss" scoped>
.cards_container {
  margin-top: 50px;
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
