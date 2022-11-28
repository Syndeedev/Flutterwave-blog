import axios from "axios";
const apiUrl = process.env.API_URL || "https://techcrunch.com/wp-json/wp/v2/posts";
export const state = () => ({
  allPosts: [],
  latestPost: {},
  currentPost: {},
});
export const getters = {
  allPosts: (state) => state.allPosts,
  latestPost: (state) =>
    state.allPosts.length ? state.allPosts[0] : state.latestPost,
  currentPost: (state) => state.currentPost,
};
export const mutations = {
  allPosts: (state, data) => {
    state.allPosts = state.allPosts.concat(data);
  },
  currentPost: (state, data) => {
    state.currentPost = data;
  },
};
export const actions = {
  async getAllPosts({ commit }, page = 1) {
    try {
      const response = await axios.get(`${apiUrl}?page=${page}`);
      const posts = response.data.map(formatPost);
      commit("allPosts", posts);
      return true;
    } catch (e) {
      return false;
    }
  },
  async getCurrentPost({ commit, state }, slug) {
    commit("currentPost", {});
    let post = state.allPosts.find((post) => post.slug === slug);
    if (post) {
      commit("currentPost", post);
      return true;
    }
    try {
      const response = await axios.get(`${apiUrl}?slug=${slug}`);
      if (response.data && response.data.length) {
        post = formatPost(response.data[0]);
        commit("currentPost", post);
        return true;
      }
      return false;
    } catch (e) {
      return false;
    }
  },
};

const formatPost = (post) => {
  return {
    id: post.id || 0,
    author: post.parselyMeta ? post.parselyMeta["parsely-author"][0] : "",
    publishedDate: post.parselyMeta ? post.parselyMeta["parsely-pub-date"] : "",
    section: post.primary_category.slug || "",
    image: post.jetpack_featured_media_url || "",
    slug: post.slug || "",
    title: post.title?.rendered || "",
    excerpt: post.excerpt?.rendered || "",
    content: post.content?.rendered || "",
    readingTime: Math.floor(Math.random() * 10) + 4,
  };
};
