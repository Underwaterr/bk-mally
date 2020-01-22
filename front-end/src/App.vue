<template>
  <div id="app">
    <ul>
      <li v-for="cat in cats"> {{cat.name}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cats: []
    }
  },
  created() {
    fetch('https://localhost:9000/cats')
      .then(response=> response.json())
      .then(data=> this.cats = data)
  }
}
</script>
