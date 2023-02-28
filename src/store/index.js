import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: []
  },
  getters: {
    allPosts (state) {
      return state.posts
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
    }
  },
  actions: {
    async fetchPosts (context) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      context.commit('updatePosts', posts)
    }
  },
  modules: {
  }
})
