<template>
  <a-layout>
    <Header />
    <a-layout>
      <Sider />
      <a-layout style="padding: 0 24px 24px">
        <Breadcrumb />
        <a-layout-content
          :style="{
            background: '#fff',
            padding: '24px',
            margin: 0,
            minHeight: '280px',
          }"
        >
          <router-view></router-view>
        </a-layout-content>
      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "../components/Header.vue";
import Sider from "../components/Sider.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
import {
  UserOutlined,
  LaptopOutlined,
  NotificationOutlined,
} from "@ant-design/icons-vue";
import { defineComponent, ref } from "vue";

export default {
  components: {
    Header,
    Sider,
    Breadcrumb,
  },
  setup() {
    return {
      selectedKeys1: ref(["2"]),
      selectedKeys2: ref(["1"]),
      collapsed: ref(false),
      openKeys: ref(["sub1"]),
    };
  },
};
</script>
