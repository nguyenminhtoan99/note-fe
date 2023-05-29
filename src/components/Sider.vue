<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-menu-item key="admin-users">
        <router-link :to="{ name: 'admin-users' }"> Users </router-link>
      </a-menu-item>
      <a-menu-item key="admin-roles">
        <router-link :to="{ name: 'admin-roles' }"> Roles </router-link>
      </a-menu-item>
      <a-menu-item key="admin-settings">
        <router-link :to="{ name: 'admin-settings' }"> Settings </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { ref } from "vue";

export default {
  components: {
    UserOutlined,
    LaptopOutlined,
    NotificationOutlined,
  },
  setup() {
    return {
      selectedKeys: ref<string[]>(["admin-roles"]),
      openKeys: ref<string[]>([]),
    };
  },
};
</script>
