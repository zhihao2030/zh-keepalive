import { defineStore } from 'pinia';
import piniaStore from '/@/store/index';

export const useTagStore = defineStore(
  // 唯一ID
  'tabs',
  {
    persist: {
      key: 'tab',
      storage: sessionStorage,
    },
    state: () => ({
      tableList: [
        {
          name: '列表页',
          path: '/',
        },
      ],
    }),
    getters: {},
    actions: {
      updateTableList(partial) {
        this.tableList.push(partial);
      },
    },
  },
);

export function useAppOutsideStore() {
  return useTagStore(piniaStore);
}
