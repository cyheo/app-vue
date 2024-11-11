<template>
  <h1>Welcome to the PageTwo!!!</h1>
  <button @click="counterStore.decreaseCounter()">Count--</button>
  <p>{{ counterStore.count }}</p>
</template>

<script>
  import { useCounterStore } from '@/stores/CounterStore';

  export default {
    name: 'PageTwoComponent',
    setup() {
      const counterStore = useCounterStore();
      return { counterStore };
    }
  };
</script>