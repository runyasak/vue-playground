<template>
  <div id="app">
    <h1>Readme</h1>
    <div v-html="previewReadme"></div>
  </div>
</template>

<script>
import marked from 'marked'

export default {
  name: 'App',
  data () {
    return {
      readme: '# My Readme'
    }
  },
  computed: {
    previewReadme () {
      return marked(this.readme)
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
