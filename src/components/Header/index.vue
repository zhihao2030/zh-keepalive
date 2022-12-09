<script setup lang="ts">
  import { useTagStore } from '../../store/modules/tabs';
  const router = useRouter();
  const tabStore = useTagStore();
  const handleClose = (tab, index) => {
    const tabs = tabStore.tableList[index - 1];
    tabStore.tableList.splice(index, 1);
    router.push(tabs.path);
  };
  const current = ref();
  watch(
    () => router.currentRoute,
    () => {
      if (router.currentRoute.value.fullPath) {
        current.value = router.currentRoute.value.fullPath;
      }
    },
    { deep: true, immediate: true },
  );
</script>

<template>
  <div class="header">
    <el-tag
      v-for="(tab, index) in tabStore.tableList"
      :key="tab.path"
      class="mx-1 pointer"
      :type="current === tab.path ? '' : 'info'"
      :closable="tab.path !== '/'"
      :disable-transitions="false"
      @close="handleClose(tab, index)"
      @click="router.push(tab.path)"
    >
      {{ tab.name }}
    </el-tag>
  </div>
</template>

<style>
  .header {
    width: 100%;
    margin: 20px auto;
    padding: 10px 10%;
  }

  .pointer {
    cursor: pointer !important;
  }
</style>
