<template>
    <div>
        <p>Count: {{ counterStore.count }}</p>
        <p>Double Count: {{ counterStore.doubleCount }}</p>
        <button @clikc="counterStore.increment">Increment</button>
        <button @clikc="counterStore.decrement">Decrement</button>
    </div>
</template>

<script>
    import { useCounterStore } from '@stores/counter'

    const counterState = useCounterStore();
</script>
<style>
    
</style>