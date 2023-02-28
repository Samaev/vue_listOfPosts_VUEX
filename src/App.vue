<template>
  <div id="app">
    <h1 class="row">
      <h3 class="col">List of Posts</h3>
      <select class="form-control col" v-model="selectedUser">
        <option>All Users</option>
        <option v-for="user in allUsers" v-bind:value="user" v-bind:key="user.id" >
          {{ user.name }}
        </option>
      </select>
    </h1>
    <div class="card mt-2" v-for="post in allPosts.filter(post=>post.userId === selectedUser.id)" v-bind:key="post.id">
      <div class="card-header">{{ allUsers.find(user=>user.id === post.userId).name }}</div>
      <div class="card-title">
        {{ post.title }}
      </div>
      <div class="card-body">
        {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'App',
  data () {
    return {
      selectedUser: {}
    }
  },
  computed: mapGetters(['allPosts', 'allUsers']),
  methods: mapActions(['fetchPosts', 'fetchUsers']),
  async mounted () {
    this.fetchPosts()
    this.fetchUsers()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  width: 400px;
}
</style>
