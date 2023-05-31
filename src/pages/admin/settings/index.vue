<template><a-typography-title>Settings</a-typography-title></template>

<script>
import { useMenu } from "../../../stores/use-menu";

export default {
  setup() {
    const store = useMenu();
    store.onSelectedKeys(["admin-settings"]);
  },
};
</script>
