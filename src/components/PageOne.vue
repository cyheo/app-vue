<template>
  <div>
    <h1>Welcome to the PageOne!!!</h1>
    <button @click="counterStore.increaseCounter()">Count++</button>
    <p>{{ counterStore.count }}</p>
  </div>
</template>

<script>
  import { useCounterStore } from '@/stores/CounterStore';

  export default {
    name: 'PageOneComponent',
    setup() {
      const counterStore = useCounterStore();
      return { counterStore };
    }
  }
</script>