<template>
  <a-typography-title>Your Notes</a-typography-title>
  <a-button type="primary" @click="$router.push({ name: 'create-note' })"
    >Add note</a-button
  >
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="All">
      <a-row :gutter="[10, 16]">
        <a-col>
          <Card />
        </a-col>
        <a-col>
          <Card />
        </a-col>
      </a-row>
    </a-tab-pane>
    <a-tab-pane key="2" tab="Pin" force-render>
      <a-row :gutter="[10, 16]">
        <a-col>
          <Card />
        </a-col>
        <a-col>
          <Card />
        </a-col>
      </a-row>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Favourite">
      <a-row :gutter="[10, 16]">
        <a-col>
          <Card />
        </a-col>
        <a-col> <Card /> </a-col
      ></a-row>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
import { useMenu } from "../../../stores/use-menu";
import { ref } from "vue";
import Card from "../../../components/Card.vue";

export default {
  components: {
    Card,
  },
  setup() {
    const store = useMenu();
    store.onSelectedKeys(["admin-notes"]);

    return {
      activeKey: ref("1"),
    };
  },
};
</script>
