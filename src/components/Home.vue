<template>
  <div>
    <h1>Home Page</h1>
    <p>Welcome to the home page!</p>
    <p>{{ counterStore.countStatus }}</p>
  </div>
</template>

<script>
  import { useCounterStore } from '@/stores/CounterStore';

  export default {
    name: 'HomeComponent',
    setup() {
      const counterStore = useCounterStore();
      return { counterStore };
    }
  };
</script>