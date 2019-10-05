<template>
  <div id="app">
    <h1>Readme</h1>
    <div v-html="previewReadme"></div>
    <codemirror
      style="font-size: 18px;"
      readonly
      :value="code"
      :options="editorOption">
    </codemirror>
  </div>
</template>

<script>
import { codemirror } from 'vue-codemirror'
import marked from 'marked'

import { code } from './code'

export default {
  name: 'App',
  components: { codemirror },
  data () {
    return {
      readme: '# My Readme',
      editorOption: {
        tabSize: 2,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        theme: 'material',
        readOnly: true
      },
      code
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
@import '~codemirror/lib/codemirror.css';
@import '~codemirror/theme/material.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
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
