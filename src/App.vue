<template>
  <v-app class="_bg-material-imp">
    <v-app-bar
      color="primary"
      fixed
      app>
      <v-app-bar-nav-icon @click="toggleDrawer"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title>Vue Playground</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-content>
      <v-container
        fluid
        class="fill-height">
        <v-row class="fill-height">
          <v-col cols="6">
            <div v-html="previewReadme"></div>
          </v-col>
          <v-col cols="6">
            <div class="fill-height d-flex flex-column">
              <div class="_h-50pct">
                <div class="font-weight-bold">
                  Code
                </div>
                <codemirror
                  ref="playground-codemirror"
                  readonly
                  :value="code"
                  :options="editorOption">
                </codemirror>
              </div>
              <div class="_h-50pct">
                <div class="font-weight-bold">
                  Result
                </div>
                <div class="white black--text fill-height">
                  <component :is="resultComponent"></component>
                </div>
              </div>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
    <v-navigation-drawer
      v-model="drawer"
      app
      color="#191D20">
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title class="title">
            Topics
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list nav>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          link
          :to="item.to">
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-app>
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
      drawer: true,
      readme: '# My Readme',
      editorOption: {
        tabSize: 2,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        theme: 'material',
        readOnly: true
      },
      code,
      items: [
        {
          title: 'test',
          to: { name: 'home' }
        }
      ]
    }
  },
  mounted () {
    console.log(this.$router)
  },
  computed: {
    previewReadme () {
      return marked(this.readme)
    },
    resultComponent () {
      const component = () => import('@/MyHelloWorld.vue')
      return component
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="scss" scoped>
@import '~codemirror/lib/codemirror.css';
@import '~codemirror/theme/material.css';

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

._bg-material-imp {
  background-color: #263238 !important;
}

._h-50pct {
  height: 50%;
}
</style>

<style>
.CodeMirror {
  height: auto;
}
</style>
