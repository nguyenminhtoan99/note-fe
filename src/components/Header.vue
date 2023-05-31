<template>
  <a-layout-header :style="{ background: '#fff', padding: '0 17px' }">
    <MenuUnfoldOutlined v-if="collapsed" class="trigger" @click="() => (collapsed = !collapsed)" />
    <MenuFoldOutlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />
  </a-layout-header>
</template>

<script lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { useMenu } from "../stores/use-menu";
import { storeToRefs } from "pinia";

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
  },
  setup() {
    const store = useMenu();

    return {
      ...storeToRefs(store),
    };
  },
};
</script>
