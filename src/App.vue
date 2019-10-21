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
    <v-content
      :key="$route.fullPath"
      @hook:mounted="initiateData">
      <v-container
        fluid
        class="fill-height">
        <v-row class="fill-height">
          <v-col cols="6">
            <div v-html="previewReadme"></div>
          </v-col>
          <v-col cols="6">
            <div class="fill-height d-flex flex-column">
              <div class="font-weight-bold">
                Code
              </div>
              <div class="_h-50pct">
                <codemirror
                  ref="playground-codemirror"
                  class="pb-4"
                  readonly
                  :value="previewCode"
                  :options="editorOption">
                </codemirror>
              </div>
              <div class="font-weight-bold">
                Result
              </div>
              <div class="_h-50pct">
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
          v-for="item in listItems"
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

export default {
  name: 'App',
  components: { codemirror },
  data () {
    return {
      drawer: true,
      editorOption: {
        tabSize: 2,
        lineNumbers: true,
        line: true,
        mode: 'text/javascript',
        theme: 'material',
        readOnly: true
      },
      previewCode: '',
      previewReadme: ''
    }
  },
  computed: {
    listItems () {
      const mapRoutes = this.$router.options.routes.map(route => ({
        name: route.name,
        title: route.meta.title
      }))
      const filterExistingRoutes = mapRoutes.filter(({ name, title }) => name && title)
      return filterExistingRoutes.map(({ name, title }) => ({
        title,
        to: { name }
      }))
    },
    resultComponent () {
      const routeName = this.$route.name
      return () => import(`@/views/${routeName}`)
    }
  },
  mounted () {
    this.initiateData()
  },
  methods: {
    async initiateData () {
      const [code, readme] = await Promise.all([
        this.importPreviewCode(),
        this.importPreviewReadme()
      ])

      this.previewCode = code
      this.previewReadme = readme
    },
    toggleDrawer () {
      this.drawer = !this.drawer
    },
    importPreviewCode () {
      return new Promise((resolve, reject) => {
        import(`@/views/${this.$route.name}/code.js`)
          .then(({ default: result }) => { resolve(result) })
          .catch(error => reject(new Error(error.message)))
      })
    },
    importPreviewReadme () {
      return new Promise((resolve, reject) => {
        import(`@/views/${this.$route.name}/README.md`)
          .then(({ default: result }) => { resolve(result) })
          .catch(error => reject(new Error(error.message)))
      })
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
.vue-codemirror {
  height: 100%;
  padding-bottom: 16px;
}
.CodeMirror {
  height: 100%;
}
</style>
