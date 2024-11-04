<template>
  <div v-for="(movie, i) in data" :key="i">
    <h3 class="bg-yellow" :style="movie.textColor">{{ movie.title }}</h3>
    <p>개봉: {{ movie.year }}</p>
    <p>장르: {{ movie.category }}</p>
  </div>
</template>

<script>
  export default {
    name: "MovieInfoComponent",
    props: {
      data : Array
    }
  }
</script>