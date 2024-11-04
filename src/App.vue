<template>
  <NaviBar />
  <MovieInfo :data="data" @increase="increase($event)"/>
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
    methods: {
      increase(index) {
        this.data[index].count += 1;
      }
    },
    components : {
      NaviBar: NaviBar,
      MovieInfo: MoviInfo,
    }

  }
</script>

<style>
  .bg-yellow {
    background: gold;
    padding: 10px;
  }
</style>
