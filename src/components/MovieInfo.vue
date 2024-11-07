<template>
  <div v-for="(movie, index) in data" :key="index">
    <h3 class="bg-yellow" :style="movie.textColor">{{ movie.title }}</h3>
    <p>개봉: {{ movie.year }}</p>
    <p>장르: {{ movie.category }}</p>
    <div class="box">
      <button @click="$emit('increase', index)">좋아요</button>
      <p>{{ movie.count }}</p>
    </div>
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

<style>
  .box {
    float: flex;
  }
</style>