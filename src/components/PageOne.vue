<template>
  <div>
    <h1>Welcome to the PageOne!!!</h1>
    <Counter :count="appCount" :data="color"/>
    <button @click="increaseCount()">Count++</button>
    <p>{{ appCount }}</p>
  </div>
</template>

<script>
  import Counter from '@/components/Counter.vue';

  export default {
    name: 'PageOneComponent',
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