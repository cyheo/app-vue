<template>
    <nav class="navbar">
        <a href="#">Home</a>
        <a href="#">Movies</a>
        <a href="#">About</a>
    </nav>
</template>

<script>
export default {
    name: "NaviBarComponent",
    props: {
        data: String
    }
}
</script>

<style>
    .navbar {
        background: #000;
        padding: 20px;
    }

    .navbar a {
        color: #fff;
        text-decoration: none;
        padding: 1em;
    }
</style>