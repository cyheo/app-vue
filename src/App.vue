<template>
<<<<<<< HEAD
  <NaviBar />
  <MovieInfo :data="data" @increase="increase($event)"/>
  <p>Count: {{ counterStore.count }}</p>
  <p>Double Count: {{ counterStore.doubleCount }}</p>
  <button @click="counterStore.increment">Increment</button>
  <button @click="counterStore.decrement">Decrement</button>
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
      increase(index) {
        this.data[index].count += 1;
      }
    },
    components : {
      NaviBar: NaviBar,
      MovieInfo: MoviInfo,
=======
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
>>>>>>> dev_1
    }
  };
</script>