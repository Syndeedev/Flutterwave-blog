import axios from "axios";
export const state = () => ({
  allPosts: [],
});
export const getters = {
  allPosts: (state) => state.allPosts,
  latestPost: (state) => state.allPosts[0]
  
};
export const mutations = {
  allPosts: (state, data) => {
    state.allPosts = data;
  },
};
export const actions = {
  async getAllPosts({ commit }) {
    try {
      const response = await axios.get(
        `https://techcrunch.com/wp-json/wp/v2/posts`
      );
      let data = [];

      Array.from(response.data).forEach((post, i) => {
        data.push({
          id: post.id,
          author: post.parselyMeta["parsely-author"][0],
          publishedDate: post.parselyMeta["parsely-pub-date"],
          section: post.primary_category.slug,
          image: post.jetpack_featured_media_url,
          slug: post.slug,
          title: post.title.rendered,
          excerpt: post.excerpt.rendered,
          content: post.content.rendered,
          readingTime: Math.floor(Math.random() * 10) + 4,
        });
      });
      commit("allPosts", data);
      return response;
    } catch (e) {
      //
    }
  },
};
