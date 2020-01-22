<template>
  <div id="app">
    <ul>
      <li v-for="beer in beers"> {{beer.name}} </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      beers: []
    }
  },
  created() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response=> response.json())
      .then(data=> this.beers = data)
  }
}
</script>
