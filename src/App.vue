<template>
  <NavBar />
  <div>
    <router-view></router-view>
  </div>
  <PageOne />
</template>

<script setup>
  import NavBar from '@/components/NavBar.vue'
</script>

<style scoped>
* {
  padding: 0px;
  margin: 0px;
}
</style>