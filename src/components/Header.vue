<template>
  <div class="background">
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
    <a-typography>
      <a-typography-title class="title">Good morning, Thin.</a-typography-title>
      <a-typography-paragraph class="date">{{
        currentDate
      }}</a-typography-paragraph>
    </a-typography>

    <a-dropdown>
      <template #overlay>
        <a-menu @click="handleMenuClick">
          <a-menu-item key="1">
            <UserOutlined />
            1st menu item
          </a-menu-item>
          <a-menu-item key="2">
            <UserOutlined />
            2nd menu item
          </a-menu-item>
          <a-menu-item key="3">
            <UserOutlined />
            3rd item
          </a-menu-item>
        </a-menu>
      </template>
      <a-button>
        Button
        <DownOutlined />
      </a-button>
    </a-dropdown>
  </div>
</template>

<script lang="ts">
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons-vue";
import { useMenu } from "../stores/use-menu";
import { storeToRefs } from "pinia";
import moment from "moment";

export default {
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
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
</style>
