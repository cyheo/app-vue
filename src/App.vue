<template>
<<<<<<< HEAD
  <div id="app">
    <NavBar />
  </div>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';

  export default {
    name: "App",
    components: {
      NavBar : NavBar
=======
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
>>>>>>> parent of 50fe75b (pinia)
    }
  };
</script>