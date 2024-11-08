<template>
  <h1>Hello World</h1>
  <Counter :count="appCount" :data="color"/>
  <button @click="increaseCount()">Count++</button>
  <p>{{ appCount }}</p>
</template>

<script>
  import Counter from '@/components/Counter.vue';

  export default {
    name: 'App',
    data() {
      return {
        appCount: 0,
        color: 'red',
      }
    },
    methods: {
      increaseCount() {
        this.appCount++;
      }
    },
    components : {
      Counter: Counter
    }

  }
</script>