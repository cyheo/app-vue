<template>
  <NaviBar />
  <MovieDisp :data="data" />
</template>

<script>
  import data from './assets/movies'
  import MoviInfo from './components/MovieInfo.vue';
  import NaviBar from './components/NaviBar.vue';

  export default {
    name: 'App',
    data() {
      return {
        isModal: false,
        data: data,
      }
    },
    components : {
      NaviBar: NaviBar,
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
