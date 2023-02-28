<template>
  <div class="card">
    Post
  </div>
</template>

<script>
export default {
  name: 'PostList',
  props: {
  },
  methods: {
    getPosts: function () {
      fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
        this.$store.state.posts = response.data;
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
