<template>
  <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible>
    <div class="logo" />
    <a-menu
      v-model:selectedKeys="selectedKeys"
      v-model:openKeys="openKeys"
      mode="inline"
    >
      <a-menu-item key="admin-notes">
        <router-link :to="{ name: 'admin-notes' }">
          <ProfileOutlined />
          <span>Notes</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="admin-users">
        <router-link :to="{ name: 'admin-users' }">
          <UserOutlined />
          <span>Users</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="admin-roles">
        <router-link :to="{ name: 'admin-roles' }">
          <TagsOutlined />
          <span>Roles</span>
        </router-link>
      </a-menu-item>

      <a-menu-item key="admin-settings">
        <router-link :to="{ name: 'admin-settings' }">
          <SettingOutlined />
          <span>Settings</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script lang="ts">
import {
  UserOutlined,
  TagsOutlined,
  SettingOutlined,
  ProfileOutlined,
} from "@ant-design/icons-vue";
import { useMenu } from "../stores/use-menu";
import { storeToRefs } from "pinia";

export default {
  components: {
    UserOutlined,
    TagsOutlined,
    SettingOutlined,
    ProfileOutlined,
  },
  setup() {
    const store = useMenu();

    return {
      ...storeToRefs(store),
    };
  },
};
</script>

<style>
/* #components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}

.site-layout .site-layout-background {
  background: #fff;
} */

.ant-layout-sider {
  background-color: white;
}

/* .ant-menu {
  background-color: red;
} */

/* .ant-menu-item-selected a {
  background-color: white;
} */
/* .ant-menu-item a::before {
  background-color: #1f1c2f;
} */
/* .ant-menu-item-selected {
  background-color: #1f1c2f;
} */
</style>
