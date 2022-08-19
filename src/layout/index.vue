<template>
  <el-container>
    <el-header>Header</el-header>
    <el-container>
      <el-aside width="200px">
        <ks-menu :menus="menus" active="/home"></ks-menu>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import KsMenu from "@components/KsMenu.vue";
export default {
  components: {
    KsMenu
  },
  data() {
    return {
      menus: []
    };
  },
  created() {
    this.getMenu();
  },
  methods: {
    // 获取菜单
    getMenu() {
      this.menus = [
        {
          id: '1',
          title: '首页',
          path: '/home',
          icon: ''
        },
        {
          id: '2',
          title: 'Canvas',
          path: 'canvas',
          icon: '',
          children: [
            {
              id: '2-1',
              title: 'Canvas',
              path: '/canvas',
              icon: ''
            }
          ]
        },
        {
          id: '3',
          title: 'Request',
          path: 'request',
          icon: '',
          children: [
            {
              id: '3-1',
              title: 'User',
              path: '/user',
              icon: ''
            }
          ]
        },
        {
          id: '4',
          title: 'CSS',
          path: 'css',
          icon: '',
          children: [
            {
              id: '4-1',
              title: 'cssBase',
              path: '/cssBase',
              icon: ''
            }
          ]
        },
        {
          id: '5',
          title: 'ElementUI',
          path: 'elementui',
          icon: '',
          children: [
            {
              id: '5-1',
              title: 'form',
              path: '/form',
              icon: ''
            },
            {
              id: '5-2',
              title: 'table',
              path: '/table',
              icon: ''
            }
          ]
        }
      ];
    }
  }
};
</script>

<style  lang="scss" scoped>
.el-header {
  height: 50px !important;
  background: $color-lightblue;
  color: white;
  text-align: center;
  line-height: 50px;
}
.el-aside {
  width: 250px !important;
  height: calc(100vh - 50px);
}
</style>