<template>
  <div class="card">
    <div class="card__image_container">
      <img :src="post.image" :alt="post.section" class="card__image" />
    </div>
    <div class="card__content">
      <div class="card__header">
        <div class="card__header_top">
          <span class="card__header_category">{{ post.section }}</span>
          <div class="dot"></div>
          <span class="card__header_time_posted">{{
            $moment(post.publishedDate).fromNow()
          }}</span>
        </div>
        <h3 v-html="trimString(post.title, 45)" class="card__title"></h3>
      </div>
      <div class="card__text">
        <p v-html="trimString(post.excerpt, 200)"></p>
      </div>

      <div class="card__footer">
        <span>{{ post.readingTime }} Min Read</span>
        <nuxt-link :to="`/${post.slug}`" class="card__footer_link">
          Read Full <img src="~assets/arrow.svg" alt="arrow-right" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { shortenText } from "@/helpers";
export default {
  name: "PostCard",
  data() {
    return {
      reading_time: Math.floor(Math.random() * (10 - 4 + 1)) + 4,
    };
  },
  props: {
    post: {
      type: Object,
    },
  },
  methods: {
    trimString(str, length) {
      return shortenText(str, length);
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
  width: 100%;
  border-radius: 5px;
}

@media screen and (min-width: 768px) {
  .card {
    max-width: 300px;
  }
  .card__image {
    height: 190px;
  }
}
</style>
