<template>
  <a-layout :style="{ height: '100vh' }">
    <Sider />
    <a-layout>
      <Header />
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          height: 'auto',
        }"
      >
        <Breadcrumb />
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script>
import Header from "../components/Header.vue";
import Sider from "../components/Sider.vue";
import Breadcrumb from "../components/Breadcrumb.vue";

export default {
  components: {
    Header,
    Sider,
    Breadcrumb,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap");

* {
  font-family: "Poppins", sans-serif;
}
</style>
