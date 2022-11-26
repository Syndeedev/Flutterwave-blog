<template>
  <div class="card">
    <div class="card__image_container">
      <img
        :src="post.jetpack_featured_media_url"
        width="300px"
        alt="card image"
        class="card__image"
      />
    </div>
    <div class="card__content">
      <div class="card__header">
        <div class="card__header_top">
          <span class="card__header_category">Front-end</span>
          <div class="dot"></div>
          <span class="card__header_time_posted">1 Hour Ago</span>
        </div>
        <h3 class="card__title">Optimizing CSS for faster page loads</h3>
      </div>
      <div class="card__text">
        <span
          >Not long ago I decided to improve the loading times of my website. It
          already loads pretty fast, but I knew there was still room for
          improvement and one of them was CSS loading. I will walk you through
          the process and show you how you can improve your load times as well.
          To see how CSS affects the load time of a webpage we first have to
          know how the browser converts an HTML document into a functional
          webpage...</span
        >
      </div>

      <div class="card__footer">
        <span>3 Min Read</span>
        <nuxt-link :to="'/blog-details/' + post.id" class="card__footer_link">
          Read Full <img src="~assets/arrow.svg" alt="arrow-right" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PostCard",
  props: {
    post: {
      type: Object,
    },
  },
};
</script>
<style lang="scss" scoped>
.card {
  border-radius: 5px;
  padding: 10px;
  border: 1px solid #f5f5f5;
}
.card__image {
  border-radius: 5px;
}

@media screen and (min-width: 768px) {
  .card {
    max-width: 300px;
  }
}
</style>
