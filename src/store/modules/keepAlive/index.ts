import { defineStore } from 'pinia';


export const useKeepAliveStore = defineStore(
  // 唯一ID
  'keepAlive',
  {
    state: () => ({
      keepAliveList: ['edit'],
    }),
    getters: {},
    actions: {
      setKeepAlive(page: string) {
        if (!this.keepAliveList.find((v) => v === page)) {
          this.keepAliveList.push(page);
        }
      },
      removeKeepAlive(page: string) {
        this.keepAliveList = this.keepAliveList.filter((v) => v !== page);
      },
    },
  },
);

