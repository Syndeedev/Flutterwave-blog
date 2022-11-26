<template>
  <div class="blog__detail" v-if="currentPost">
    <div class="blog__content">
      <div class="card__header">
        <div class="card__header_top">
          <span class="card__header_time_posted">
            By {{ currentPost.author }}
          </span>
          <div class="dot"></div>
          <span class="card__header_time_posted">
            {{ $moment(currentPost.publishedDate).fromNow() }}
          </span>
        </div>
        <h3 class="card__title" v-html="currentPost.title"></h3>
      </div>

      <p v-html="currentPost.content"></p>
    </div>
    <div v-if="randomPosts.length">
      <h4>More Articles</h4>
      <div class="cards_container">
        <post-card v-for="post in randomPosts" :key="post.id" :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BlogDetails",

  computed: {
    ...mapGetters(["allPosts"]),
    currentPost() {
      return this.allPosts.find((post) => post.slug === this.$route.params.id);
    },
    randomPosts() {
      return [...this.allPosts]
        .filter((post) => post.id !== this.currentPost.id)
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);
    },
  },
};
</script>
<style lang="scss" scoped>
.blog__detail {
  margin-bottom: 10rem;
}
.blog__content {
  padding: 0 10px;
  margin: 50px 0;
}
.card__title {
  padding: 16px 0;
}
@media screen and (min-width: 768px) {
  .blog__content {
    padding: 0 6rem;
  }
}
@media screen and (min-width: 1024px) {
  .blog__content {
    padding: 0 10rem;
  }
}
.cards_container {
  margin-top: 50px;
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
