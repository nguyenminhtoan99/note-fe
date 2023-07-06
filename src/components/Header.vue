<template>
  <div class="background">
    <a-row justify="space-between">
      <a-col>
        <a-button
          type="text"
          shape="circle"
          v-if="collapsed"
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        >
          <MenuUnfoldOutlined />
        </a-button>
        <a-button
          type="text"
          shape="circle"
          v-else
          class="trigger"
          @click="() => (collapsed = !collapsed)"
        >
          <MenuFoldOutlined />
        </a-button>
      </a-col>
      <a-col>
        <a-dropdown>
          <template #overlay>
            <a-menu @click="handleMenuClick">
              <a-menu-item key="profile">
                <UserOutlined />
                My profile
              </a-menu-item>
              <a-menu-item key="logout">
                <LogoutOutlined />
                Logout
              </a-menu-item>
            </a-menu>
          </template>
          <a-button shape="round" type="text" class="profile">
            <a-avatar size="small">
              <template #icon>
                <UserOutlined />
              </template>
            </a-avatar>

            <span> Thin Vo </span>

            <DownOutlined />
          </a-button>
        </a-dropdown>
      </a-col>
    </a-row>

    <a-typography>
      <a-typography-title class="title">Good morning, Thin.</a-typography-title>
      <a-typography-paragraph class="date">{{
        currentDate
      }}</a-typography-paragraph>
    </a-typography>
  </div>
</template>

<script lang="ts">
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
  DownOutlined,
} from "@ant-design/icons-vue";
import { useMenu } from "../stores/use-menu";
import { storeToRefs } from "pinia";
import moment from "moment";

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    UserOutlined,
    LogoutOutlined,
    DownOutlined,
  },
  setup() {
    const store = useMenu();

    const handleMenuClick = (e) => {
      console.log("click", e);
    };

    return {
      ...storeToRefs(store),
      currentDate: moment().format("dddd, MMMM DD, YYYY HH:mm:ss"),
      handleMenuClick,
    };
  },
};
</script>

<style scoped>
.background {
  background-image: url("../assets/background.jpg");
  background-size: cover;
  background-position: center;
  height: 30%;
  padding: 16px;
}

.trigger {
  background-color: black;
  color: white;
}

.title {
  color: white;
  margin-top: 3rem;
  margin-bottom: 0;
}
.date {
  color: white;
  text-transform: uppercase;
}

.profile {
  color: white;
  background-color: black;
}
</style>
