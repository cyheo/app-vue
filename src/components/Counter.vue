<template>
    <p>Count: {{ count }}, Color: {{ data }}</p>
</template>

<script>
export default {
    name: 'CounterComponent',
    props: {
        count: Number,
        data: String,
    }
}
</script>