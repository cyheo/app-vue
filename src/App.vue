<template>
  <!-- <NavBar /> -->
  <MovieDisp :data="data" />
</template>

<script>
  import data from './assets/movies'
  import MoviInfo from './components/MovieInfo.vue';
  //import NavBar from './components/NavBar.vue';

  export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        data: data,
      }
    },
    components : {
      //NavBar: NavBar,
      MovieDisp: MoviInfo,
    }

  }
</script>

<style>
  .bg-yellow {
    background: gold;
    padding: 10px;
  }
</style>
