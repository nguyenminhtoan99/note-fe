import { defineStore } from "pinia";

export const useMenu = defineStore("menuId", {
  state: () => {
    return {
      selectedKeys: [],
      openKeys: [],
      collapsed: false,
      // activeKey: 2,
    };
  },
  actions: {
    onSelectedKeys(data) {
      this.selectedKeys = data;
    },
    onOpenKeys(data) {
      this.openKeys = data;
    },
  },
});
