<template>
  <div class="card" v-if="latestPost && latestPost.id">
    <div class="card__image__container">
      <img
        :src="latestPost.image"
        :alt="latestPost.section"
        class="card__image"
      />
    </div>
    <div class="card__content">
      <div class="card__header">
        <div class="card__header_top">
          <span class="card__header_category">{{ latestPost.section }}</span>
          <div class="dot"></div>
          <span class="card__header_time_posted">
            {{ $moment(latestPost.publishedDate).fromNow() }}
          </span>
        </div>
        <h3 v-html="trimString(latestPost.title, 100)" class="card__title"></h3>
      </div>
      <div class="card__text">
        <span v-html="trimString(latestPost.excerpt, 200)"></span>
      </div>

      <div class="card__footer">
        <span>{{ latestPost.readingTime }} Min Read</span>
        <nuxt-link :to="`/${latestPost.slug}`" class="card__footer_link">
          Read Full <img src="~assets/arrow.svg" alt="arrow-right" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { shortenText } from "@/helpers";
export default {
  name: "LatestPostCard",
  computed: {
    ...mapGetters(["latestPost"]),
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
  margin-top: 50px;
  &__image {
    border-radius: 3.5px;
    object-fit: contain;
    width: 90%;
  }
}
@media screen and (min-width: 768px) {
  .card {
    flex-direction: row;
    align-items: center;
  }
  .card__image {
    // transition: all 0.7s ease;
    width: 23rem;
    object-fit: fill;
  }
  //   .card__image:hover {
  // transform: scale(1.1);
  //   }
  .card__content {
    padding: 0 16px;
  }
}
</style>
