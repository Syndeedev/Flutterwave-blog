<template>
  <div class="card">
    <div class="card__image__container">
      <img
        width="100%"
        src="~assets/large.png"
        alt="image"
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
        <span class="card__footer_time">3 Min Read</span>
        <nuxt-link to="" class="card__footer_link">
          Read Full <img src="~assets/arrow.svg" alt="arrow-right" />
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "LatestPostCard",
};
</script>
<style lang="scss" scoped>
.card {
  border: 1px solid #f5f5f5;
  border-radius: 5px;
  display: flex;
  padding: 8px;
  margin-top: 50px;
  flex-direction: column;
  align-items: initial;

  &__image {
    border-radius: 3.5px;
    object-fit: contain;
    width: 90%;
  }

  &__text {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: $color-fl-black-20;
    padding-bottom: 30px;
  }

  &__header {
    &_top {
      display: flex;
      align-items: center;
    }
    &_category {
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: $color-fl-black-30;
    }

    &_time_posted {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: $color-fl-black-20;
    }
  }

  &__content {
    padding-top: 16px;
  }

  &__title {
    font-style: normal;
    font-weight: 900;
    font-size: 22px;
    line-height: 26px;
    color: $color-fl-black;
    padding: 8px 0;
  }

  &__footer {
    display: flex;
    justify-content: space-between;
    &_time {
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      color: $color-fl-black-20;
    }
    &_link {
      display: flex;
      align-items: center;
      font-style: normal;
      font-weight: 700;
      font-size: 12px;
      line-height: 14px;
      color: $color-fl-blue;
      text-decoration: none;
    }
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
