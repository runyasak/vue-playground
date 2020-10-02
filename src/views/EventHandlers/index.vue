<template>
  <div>
    <h1>Example 1</h1>
    <div>
      <p>Number of clicks: {{ nClicks }}</p>
      <div>
        <button @click="nClicks++">
          Click
        </button>
        <button @click="nClicks = 0">
          Reset
        </button>
      </div>
    </div>
    <h1>Example 2</h1>
    <div>
      <input
        type="text"
        placeholder="Write your name then press enter"
        @keydown.enter="submitName"
      />
      <p>Your name is {{ userName }}</p>
    </div>
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
