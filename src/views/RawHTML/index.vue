<template>
  <span v-html="rawHtml"></span>
</template>

<script>
export default {
  data () {
    return {
      rawHtml: '<span style="color: red">This should be red.</span>'
    }
  }
}
</script>
