<template>
  <div>
    <h1>Welcome to the PageOne!!!</h1>
    <div>
      <button class="button" @click="counterStore.increaseCounter()">Increase Count</button>
      <button class="button" @click="counterStore.decreaseCounter()">Decrease Count</button>
    </div>
    <p>{{ counterStore.count }}</p>
    <p>{{ counterStore.countStatus }}</p>
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

<style scoped>
  .button {
    margin: 0 20px 0 0;
  }
</style>