<template>
  <a-typography-title>Your Notes</a-typography-title>

  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="All">
      <Card />
    </a-tab-pane>
    <a-tab-pane key="2" tab="Pin" force-render
      >Content of Tab Pane 2</a-tab-pane
    >
    <a-tab-pane key="3" tab="Favourite">Content of Tab Pane 3</a-tab-pane>
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
