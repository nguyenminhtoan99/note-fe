<template><a-typography-title>Users</a-typography-title></template>

<script>
import { useMenu } from "../../../stores/use-menu";

export default {
  setup() {
    const store = useMenu();
    store.onSelectedKeys(["admin-users"]);
  },
};
</script>
