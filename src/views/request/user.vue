<template>
  <div>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="登录" name="login">
        <el-form ref="login" :model="form" label-width="80px">
          <el-form-item label="手机">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
      <el-tab-pane label="注册" name="register">
        <el-form ref="register" :model="form" label-width="80px">
          <el-form-item label="手机">
            <el-input v-model="form.mobile"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="form.pwd"></el-input>
          </el-form-item>
          <el-form-item label="性别">
            <el-radio-group v-model="form.sex">
              <el-radio label="1">男</el-radio>
              <el-radio label="2">女</el-radio>
              <el-radio label="0">未知</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="register()">注册</el-button>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { loginApi, registerApi } from '@/api/index.js';
export default {
  data() {
    return {
      activeName: 'login',
      form: {
        mobile: '',
        pwd: '',
        sex: '0'
      }
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    login() {
      let data = { ...this.form };
      // this.$axios.get('/api/users/login', { params: data }, res => {
      //   debugger;
      //   console.log(res);
      // });
      loginApi(data).then(res => {
        debugger;
        console.log(res);
      });
    },
    register() {
      let data = { ...this.form };
      registerApi(data).then(res => {
        debugger;
        if (res.code != 200) {
          this.$message.error(res.msg);
        } else {
          this.$message.success(res.msg);
        }
      });
    }
  }
};
</script>

<style lang="scss" scsoped>
.el-tabs {
  width: 400px !important;
  margin: 10px auto;
  .el-tabs__nav {
    width: 100%;
    .el-tabs__item {
      width: 50% !important;
      text-align: center;
    }
  }
}
</style>