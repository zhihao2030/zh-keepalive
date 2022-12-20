<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <keep-alive :include="keepAliveList">
      <Component :is="Component" :key="route.fullPath" />
    </keep-alive>
  </router-view>
</template>
<script setup lang="ts">
  const keepAliveList = ['edit'];
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    background-color: var(--color-bg-1);
  }
</style>
