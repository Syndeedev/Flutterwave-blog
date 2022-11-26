import axios from "axios";
const apiUrl = process.env.API_URL || "https://techcrunch.com/wp-json/wp/v2/posts";
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
      const response = await axios.get(apiUrl);
      const posts = response.data.map((post) => {
        return {
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
        }
      })
      commit("allPosts", posts);
      return true;
    } catch (e) {
      return false;
    }
  },
};
