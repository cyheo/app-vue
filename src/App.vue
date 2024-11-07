<template>
  <NaviBar />
  <MovieInfo :data="data" @increase="increase"/>
</template>

<script>
  import data from '@/assets/movies'
  import MoviInfo from '@/components/MovieInfo.vue';
  import NaviBar from '@/components/NaviBar.vue';
  import { useCounterStore } from '@/stores/counter';

  export default {
    name: 'App',
    setup() {
      const counterStore = useCounterStore();
      return { counterStore };
    },
    data() {
      return {
        isModal: false,
        data: data,
      }
    },
    methods: {
      increase() {
        this.data[0].count += 1;
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
