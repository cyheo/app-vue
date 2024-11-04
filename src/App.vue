<template>
  <Navbar />
  <MovieDisp :data="data" />
</template>

<script>
  import data from './assets/movies'
  import MoviDisp from './components/MovieDisp.vue';
  import Navbar from './components/Navbar.vue';

  export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        data: data,
      }
    },
    components : {
      MovieDisp: MoviDisp,
      Navbar: Navbar,
    }

  }
</script>

<style>
  .bg-yellow {
    background: gold;
    padding: 10px;
  }
</style>
