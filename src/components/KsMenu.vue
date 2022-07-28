<template>
  <el-menu :default-active="active" @open="handleOpen" @close="handleClose" @select="handleSelect"
    background-color="#545c64" text-color="#ecf5ff">
    <template v-for="menu in menus">
      <ks-menu-item :menu="menu" :key="menu.id"></ks-menu-item>
    </template>
  </el-menu>
</template>

<script>
import KsMenuItem from "./KsMenuItem";
export default {
  props: {
    menus: {
      type: Array,
      default: () => {
        return [];
      }
    },
    active: {
      type: String,
      default: ''
    }
  },
  components: {
    KsMenuItem
  },
  watch: {
    menus: {
      handler(menu) {
        if (menu) {
          this.$nextTick(() => {
            !this.active ? menu[0].path : null;
          });
        }
      },
      immediate: true
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(keyPath);
      this.$router.push(key);
    }
  }
};
</script>

<style lang="scss">
.el-menu {
  height: 100%;
  border-right: none !important;
}
.el-submenu__title {
  text-align: left;
}
.el-submenu .el-menu-item {
  text-align: left;
}
.el-menu-item.is-active {
  color: white !important;
  background: #434a50 !important;
}
</style>
