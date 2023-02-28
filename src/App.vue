<template>
  <div id="app">
    <h1>
      List of Posts
    </h1>
    <div class="card mt-2" v-for="post in allPosts" v-bind:key="post.id">
      <div class="card-header">
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
  computed: mapGetters(['allPosts']),
  methods: mapActions(['fetchPosts']),
  async mounted () {
    this.fetchPosts()
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
