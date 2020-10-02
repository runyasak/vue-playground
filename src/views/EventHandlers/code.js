export default `<template>
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
  <input type="text" placeholder="Your name" @keydown.enter="submitName" />
  <p id="input-helper-text">Press enter to submit</p>
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
p {
margin: 0 10px;
}

button,
input {
background-color: grey;
border-radius: 5px;
margin: 0 10px;
padding: 5px 10px;
color: #000;
}

#input-helper-text {
font-size: 10px;
}
</style>
`
