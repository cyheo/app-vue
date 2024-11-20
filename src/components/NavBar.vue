<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/one">PageOne</router-link>
      <router-link to="/two">PageTwo</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
  export default {
    name: "NavBar",
  };
</script>

<style scoped>
nav a {
  margin: 0 10px;
  text-decoration: noen;
  color: #42b983;
}
</style>