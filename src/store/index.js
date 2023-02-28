import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    posts: [],
    users: []
  },
  getters: {
    allPosts (state) {
      return state.posts
    },
    allUsers (state) {
      return state.users
    }
  },
  mutations: {
    updatePosts (state, posts) {
      state.posts = posts
    },
    updateUsers (state, users) {
      state.users = users
    }
  },
  actions: {
    async fetchPosts (context) {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts')
      const posts = await res.json()
      context.commit('updatePosts', posts)
    },
    async fetchUsers (context) {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await res.json()
      context.commit('updateUsers', users)
    }
  },
  modules: {
  }
})
