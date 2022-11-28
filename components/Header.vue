<template>
  <div>
    <header class="header">
      <nuxt-link to="/">
        <img src="~assets/dasdas-logo.svg" alt="Dasdas Logo" />
      </nuxt-link>

      <div class="header__icons">
        <a href="https://www.twitter.com" target="_blank">
          <img src="~assets/twitter.svg" alt="twitter Logo" />
        </a>
        <span>.</span>
        <a href="https://www.dribbble.com" target="_blank">
          <img src="~assets/dribbble.svg" alt="dribbble Logo" />
        </a>
        <span>.</span>
        <a
          href="https://www.figma.com/file/9XGAZezd4zERCQGtRwbm2Z/Blog-Template-(Community)?node-id=15%3A55&t=ijlMbE3ZkCC5PHzD-0"
          target="_blank"
        >
          <img src="~assets/figma.svg" alt="figma Logo" />
        </a>
        <span>.</span>
        <a href="https://github.com/Syndeedev/Flutterwave-blog" target="_blank">
          <img src="~assets/github.svg" alt="github Logo" />
        </a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: "PageHeader",
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 8px;
}
.header__icons {
  display: flex;
  gap: 5px;
  a:hover {
    transform: scale(1.1);
  }
}
</style>
