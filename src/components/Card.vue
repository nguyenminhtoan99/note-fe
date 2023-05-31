<template>
  <a-card hoverable title="Default size card" :style="{ width: '300px', margin: '0.5rem' }">
    <template #extra>
      <a-dropdown>
        <a href="#" @click.prevent>
          <EllipsisOutlined />
        </a>
        <template #overlay>
          <a-menu>
            <a-menu-item>
              <a href="javascript:;">
                <EyeOutlined />
                <span>View</span>
              </a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">
                <EditOutlined />
                <span>Edit</span>
              </a>
            </a-menu-item>
            <a-menu-item>
              <a href="javascript:;">
                <DeleteOutlined />
                <span>Delete</span>
              </a>
            </a-menu-item>
          </a-menu>
        </template>
      </a-dropdown>
    </template>

    <p>card content</p>
    <p>card content</p>
    <p>card content</p>
  </a-card>
</template>

<script lang="ts">
import { EllipsisOutlined, EyeOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons-vue";

export default {
  components: {
    EllipsisOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined
  },
};
</script>

