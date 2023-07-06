<template>
  <a-breadcrumb :style="{ marginBottom: '15px' }">
    <a-breadcrumb-item :to="{ path: '/' }">Home</a-breadcrumb-item>
    <a-breadcrumb-item
      v-for="(crumb, index) in breadcrumb"
      :key="index"
      :to="crumb.path"
    >
      {{ crumb.name }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
export default {
  computed: {
    breadcrumb() {
      const matched = this.$route.matched;
      let crumbs = [];
      matched.forEach((route) => {
        if (route.name) {
          crumbs.push({ name: route.name, path: route.path });
        }
      });
      return crumbs;
    },
  },
};
</script>
