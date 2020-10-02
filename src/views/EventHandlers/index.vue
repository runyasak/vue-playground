<template>
  <div>
    <h1>Example 1</h1>
    <p>Number of clicks: {{ nClicks }}</p>
    <button @click="nClicks++">
      Click
    </button>
    <button @click="nClicks = 0">
      Reset
    </button>
    <h1>Example 2</h1>
    <p>Your name is {{ userName }}</p>
    <input
      type="text"
      placeholder="Write your name then press enter"
      @keydown.enter="submitName"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      nClicks: 0,
      userName: '<your-name>'
    }
  },
  methods: {
    submitName(event) {
      this.userName = event.target.value
    }
  }
}
</script>

<style>
</style>
