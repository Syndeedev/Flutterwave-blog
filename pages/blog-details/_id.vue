<template>
  <div class="blog_detail">
    <div class="blog__content">
      <div class="card__header">
        <div class="card__header_top">
          <span class="card__header_category"
            >By Ryan Jackson 2 Month Ago
          </span>
        </div>
        <h3 class="card__title">Optimizing CSS for faster page loads</h3>
      </div>
      <p class="card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit
        massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero
        nunc consequat. Aliquam sem fringilla ut morbi tincidunt augue interdum
        velit. Tellus elementum sagittis vitae et leo duis ut diam. Eget nullam
        non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris.
        Nec feugiat in fermentum posuere urna. Diam in arcu cursus euismod quis
        viverra. Facilisis mauris sit amet massa vitae tortor condimentum
        lacinia. Diam quam nulla porttitor massa id neque aliquam vestibulum
        morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque
        eleifend. Sed elementum tempus egestas sed sed risus pretium quam
        vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in ante.
        Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi
        tincidunt augue interdum velit euismod in. Accumsan lacus vel facilisis
        volutpat est velit egestas dui. Erat pellentesque adipiscing commodo
        elit at imperdiet. Quis risus sed vulputate odio ut. Nulla aliquet enim
        tortor at auctor urna.
      </p>
      <p class="card__text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Nunc non blandit
        massa enim. Pulvinar sapien et ligula ullamcorper malesuada proin libero
        nunc consequat. Aliquam sem fringilla ut morbi tincidunt augue interdum
        velit. Tellus elementum sagittis vitae et leo duis ut diam. Eget nullam
        non nisi est sit amet. Dignissim suspendisse in est ante in nibh mauris.
        Nec feugiat in fermentum posuere urna. Diam in arcu cursus euismod quis
        viverra. Facilisis mauris sit amet massa vitae tortor condimentum
        lacinia. Diam quam nulla porttitor massa id neque aliquam vestibulum
        morbi. Sed egestas egestas fringilla phasellus faucibus scelerisque
        eleifend. Sed elementum tempus egestas sed sed risus pretium quam
        vulputate. Lacus sed turpis tincidunt id aliquet risus feugiat in ante.
        Viverra nibh cras pulvinar mattis nunc sed blandit libero. Morbi
        tincidunt augue interdum velit euismod in. Accumsan lacus vel facilisis
        volutpat est velit egestas dui. Erat pellentesque adipiscing commodo
        elit at imperdiet. Quis risus sed vulputate odio ut. Nulla aliquet enim
        tortor at auctor urna. Proin fermentum leo vel orci porta non pulvinar
        neque. In egestas erat imperdiet sed euismod nisi porta lorem. Metus
        vulputate eu scelerisque felis imperdiet proin fermentum. Luctus
        venenatis lectus magna fringilla. Nunc scelerisque viverra mauris in
        aliquam. Et molestie ac feugiat sed lectus vestibulum mattis. Sem et
        tortor consequat id porta nibh venenatis cras sed. Sed felis eget velit
        aliquet sagittis id. Auctor neque vitae tempus quam pellentesque nec nam
        aliquam sem. Tincidunt ornare massa eget egestas purus viverra accumsan
        in. Aliquet lectus proin nibh nisl condime.
      </p>
    </div>
    <div>
      <h4>More Articles</h4>
      <div class="cards_container">
        <!-- <div > -->
        <post-card :post="post" v-for="post in posts" :key="post.id" />
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "BlogDetails",
  data() {
    return {
      posts: [
        {
          id: 2448226,
          date: "2022-11-25T07:23:54",
          slug: "amazon-to-shut-down-food-delivery-business-in-india",
          status: "publish",
          type: "post",
          link: "https:\/\/techcrunch.com\/2022\/11\/25\/amazon-to-shut-down-food-delivery-business-in-india\/",
          title: {
            rendered: "Amazon to shut down food delivery business in India",
          },
          content: {
            rendered:
              '<p id="speakable-summary">Amazon will shut down its food delivery business in India by the end of the year, the retailer said Friday, retreating from a vertical it entered <a href="https:\/\/techcrunch.com\/2020\/05\/21\/amazon-launches-food-delivery-service-in-india\/">less than three years ago<\/a>.<\/p>\n<p>The company said it will shut down the food delivery business, called Amazon Food, on December 29. The company launched Food in India in May 2020 in parts of Bengaluru. The company later expanded the service across the city, tying up with additional restaurants, but it never heavily promoted or marketed the platform.<\/p>\n<p>\u201cWe don\u2019t take these decisions lightly. We are discontinuing these programs in a phased manner to take care of current customers and partners and we are supporting our affected employees during this transition,&#8221; a company spokesperson told TechCrunch in a statement. &#8220;Amazon remains focused on providing our growing customer base the best online shopping experience with the largest selection of products at great value and convenience.\u201d<\/p>\n<p>The announcement is part of company&#8217;s broader restructuring in India. Earlier this week, Amazon announced it would shut down its edtech service Academy in the country next year.<\/p>\n<p><em>(More to follow)<\/em><\/p>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              "<p>Amazon will shut down its food delivery business in India by the end of the year, the retailer said Friday, retreating from a vertical it entered less than three years ago. The company said it will shut down the food delivery business, called Amazon Food, on December 29. The company launched Food in India in [&hellip;]<\/p>\n",
            protected: false,
          },

          jetpack_featured_media_url:
            "https:\/\/techcrunch.com\/wp-content\/uploads\/2022\/04\/GettyImages-1239588817.jpg",
        },
        {
          id: 2448227,
          date: "2022-11-25T07:23:54",
          slug: "amazon-to-shut-down-food-delivery-business-in-india",
          status: "publish",
          type: "post",
          link: "https:\/\/techcrunch.com\/2022\/11\/25\/amazon-to-shut-down-food-delivery-business-in-india\/",
          title: {
            rendered: "Amazon to shut down food delivery business in India",
          },
          content: {
            rendered:
              '<p id="speakable-summary">Amazon will shut down its food delivery business in India by the end of the year, the retailer said Friday, retreating from a vertical it entered <a href="https:\/\/techcrunch.com\/2020\/05\/21\/amazon-launches-food-delivery-service-in-india\/">less than three years ago<\/a>.<\/p>\n<p>The company said it will shut down the food delivery business, called Amazon Food, on December 29. The company launched Food in India in May 2020 in parts of Bengaluru. The company later expanded the service across the city, tying up with additional restaurants, but it never heavily promoted or marketed the platform.<\/p>\n<p>\u201cWe don\u2019t take these decisions lightly. We are discontinuing these programs in a phased manner to take care of current customers and partners and we are supporting our affected employees during this transition,&#8221; a company spokesperson told TechCrunch in a statement. &#8220;Amazon remains focused on providing our growing customer base the best online shopping experience with the largest selection of products at great value and convenience.\u201d<\/p>\n<p>The announcement is part of company&#8217;s broader restructuring in India. Earlier this week, Amazon announced it would shut down its edtech service Academy in the country next year.<\/p>\n<p><em>(More to follow)<\/em><\/p>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              "<p>Amazon will shut down its food delivery business in India by the end of the year, the retailer said Friday, retreating from a vertical it entered less than three years ago. The company said it will shut down the food delivery business, called Amazon Food, on December 29. The company launched Food in India in [&hellip;]<\/p>\n",
            protected: false,
          },

          jetpack_featured_media_url:
            "https:\/\/techcrunch.com\/wp-content\/uploads\/2022\/04\/GettyImages-1239588817.jpg",
        },
        {
          id: 2448229,
          date: "2022-11-25T07:23:54",
          slug: "amazon-to-shut-down-food-delivery-business-in-india",
          status: "publish",
          type: "post",
          link: "https:\/\/techcrunch.com\/2022\/11\/25\/amazon-to-shut-down-food-delivery-business-in-india\/",
          title: {
            rendered: "Amazon to shut down food delivery business in India",
          },
          content: {
            rendered:
              '<p id="speakable-summary">Amazon will shut down its food delivery business in India by the end of the year, the retailer said Friday, retreating from a vertical it entered <a href="https:\/\/techcrunch.com\/2020\/05\/21\/amazon-launches-food-delivery-service-in-india\/">less than three years ago<\/a>.<\/p>\n<p>The company said it will shut down the food delivery business, called Amazon Food, on December 29. The company launched Food in India in May 2020 in parts of Bengaluru. The company later expanded the service across the city, tying up with additional restaurants, but it never heavily promoted or marketed the platform.<\/p>\n<p>\u201cWe don\u2019t take these decisions lightly. We are discontinuing these programs in a phased manner to take care of current customers and partners and we are supporting our affected employees during this transition,&#8221; a company spokesperson told TechCrunch in a statement. &#8220;Amazon remains focused on providing our growing customer base the best online shopping experience with the largest selection of products at great value and convenience.\u201d<\/p>\n<p>The announcement is part of company&#8217;s broader restructuring in India. Earlier this week, Amazon announced it would shut down its edtech service Academy in the country next year.<\/p>\n<p><em>(More to follow)<\/em><\/p>\n',
            protected: false,
          },
          excerpt: {
            rendered:
              "<p>Amazon will shut down its food delivery business in India by the end of the year, the retailer said Friday, retreating from a vertical it entered less than three years ago. The company said it will shut down the food delivery business, called Amazon Food, on December 29. The company launched Food in India in [&hellip;]<\/p>\n",
            protected: false,
          },

          jetpack_featured_media_url:
            "https:\/\/techcrunch.com\/wp-content\/uploads\/2022\/04\/GettyImages-1239588817.jpg",
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped>
.blog__content {
  padding: 0 10rem;
  margin-top: 50px;
}
.cards_container {
  margin-top: 50px;
  display: flex;
  gap: 45px;
  flex-wrap: wrap;
  justify-content: space-between;
}
</style>
