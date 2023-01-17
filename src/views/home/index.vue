<template>
  <div class="wrap">
    <el-table :data="tableData" style="width: 90%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
      <el-table-column fixed="right" label="Operations" width="120">
        <template #default="{ row }">
          <el-button link type="primary" size="small" @click="handleClick(row)">Edit</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts" setup>
  import { useRouter, useRoute } from 'vue-router';
  import { useTagStore } from '/@/store/modules/tabs';
  import { useKeepAliveStore } from '/@/store/modules/keepAlive';

  const keepAliveStore = useKeepAliveStore();
  const router = useRouter();
  const route = useRoute();
  const tabStore = useTagStore();
  const handleClick = (row) => {
    const path = `/edit?date=${row.date}`;
    router.push(path);
    const tabList = [...tabStore.tableList];
    const tab = {
      name: 'edit' + row.date,
      path,
    };
    if (!tabList.find((item) => item.path === tab.path)) {
      tabStore.updateTableList(tab);
    }
    console.log(tabStore.tableList);
  };

  watch(
    () => route.fullPath,
    (v) => {
      if (v) {
        keepAliveStore.setKeepAlive(v);
      }
    },
  );
  const tableData = [
    {
      date: '2016-05-03',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-02',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    },
    {
      date: '2016-05-04',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Home',
    },
    {
      date: '2016-05-01',
      name: 'Tom',
      state: 'California',
      city: 'Los Angeles',
      address: 'No. 189, Grove St, Los Angeles',
      zip: 'CA 90036',
      tag: 'Office',
    },
  ];
</script>

<style scoped>
  .wrap {
    display: flex;
    justify-content: center;
  }
</style>
