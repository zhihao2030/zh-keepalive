<script setup lang="ts">
  import { useTagStore } from '../../store/modules/tabs';
  import { useKeepAliveStore } from '/@/store/modules/keepAlive';

  const router = useRouter();
  const [tabStore, keepAliveStore] = [useTagStore(), useKeepAliveStore()];
  const handleClose = (tab, index) => {
    const tabs = tabStore.tableList[index - 1];
    tabStore.tableList.splice(index, 1);
    keepAliveStore.removeKeepAlive(router.currentRoute.value.fullPath);
    // 关闭页面移出keepalive
    router.push(tabs.path);
  };
  const currentPath = computed(() => {
    return router.currentRoute.value.fullPath;
  });
</script>

<template>
  <div class="header">
    <el-tag
      v-for="(tab, index) in tabStore.tableList"
      :key="tab.path"
      class="mx-1 pointer"
      :type="currentPath === tab.path ? '' : 'info'"
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
