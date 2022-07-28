<template>
  <div>
    <el-submenu v-if="menu.children && menu.children.length" :index="menu.path">
      <template slot="title">
        <i :class="menu.icon || 'el-icon-collection-tag'"></i>
        <span>{{ menu.title }}</span>
      </template>
      <template v-for="menu in menu.children">
        <ks-menu-item :menu="menu" :key="menu.id"></ks-menu-item>
      </template>
    </el-submenu>
    <el-menu-item v-else :index="menu.path">
      <i :class="menu.icon || 'el-icon-collection-tag'"></i>
      <span slot="title">{{ menu.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
import KsMenuItem from "./KsMenuItem";
export default {
  name: "KsMenuItem",
  props: {
    menu: {
      type: Object,
      default: () => {
        return null;
      }
    }
  },
  components: {
    KsMenuItem
  },
  data() {
    return {};
  }
};
</script>

<style></style>
