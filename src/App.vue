<template>
  <h1>Hello World</h1>
  <Counter/>
</template>

<script>
  import Counter from '@/components/Counter.vue';

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {
    },
    components : {
      Counter: Counter
    }

  }
</script>