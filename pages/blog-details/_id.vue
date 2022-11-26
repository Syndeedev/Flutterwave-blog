<template>
  <div class="blog_detail">
    <div class="blog__content">
      <div class="card__header">
        <div class="card__header_top">
          <span class="card__header_time_posted"
            >By {{ currentPost.author }}
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
    <div>
      <h4>More Articles</h4>
      <div class="cards_container">
        <post-card :post="post" v-for="post in randomPosts" :key="post.id" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "BlogDetails",

  computed: {
    ...mapGetters(["allPosts", "randomPosts"]),
    postId() {
      return parseInt(this.$route.params.id);
    },
    currentPost() {
      return this.allPosts.find((post) => post.id === this.postId);
    },
    randomPosts() {
      return [...this.allPosts]
        .filter((post) => post.id !== this.postId)
        .sort(() => Math.random() - Math.random())
        .slice(0, 3);
    },
  },
};
</script>
<style lang="scss" scoped>
.blog__content {
  padding: 0 10px;
  margin-top: 50px;
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
