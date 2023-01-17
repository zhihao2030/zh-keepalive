<template>
  <Header />
  <router-view v-slot="{ Component, route }">
    <epsKeepAlive :is="Component" :component-key="route.fullPath" :keepAlive="keepAlive" />
  </router-view>
</template>
<script setup lang="ts">
  import EpsKeepAlive from '/@/components/epsKeepAlive';
  import { useKeepAliveStore } from '/@/store/modules/keepAlive';

  const keepAliveStore = useKeepAliveStore();
  const keepAlive = {
    includeKey: [''],
  };
  watch(
    () => keepAliveStore.keepAliveList,
    (v) => {
      if (v) {
        keepAlive.includeKey = v;
      }
    },
    {
      deep: true,
      immediate: true,
    },
  );
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
