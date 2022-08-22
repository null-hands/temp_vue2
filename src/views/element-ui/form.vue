<template>
  <div>
    <ks-title title="filterable-中文"></ks-title>
    <el-form class="filter-form" ref="form" :model="form" label-width="90px">
      <el-form-item prop="staffCode" label="员工："
        :rules="{required: true, message: 'dd', trigger: 'change'}">
        <el-select v-model="form.staffCode" filterable default-first-option clearable
          placeholder="请选择员工">
          <el-option v-for="item in staffList" :key="item.code" :label="item.name"
            :value="item.code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="workCode" label="工作地点：">
        <el-select v-model="form.workCode" filterable default-first-option>
          <el-option v-for="item in workList" :key="item.code" :label="item.work"
            :value="item.code"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item prop="empiric" label="工作经验：">
        <el-input v-model="form.empiric"></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  mixins: [],
  data() {
    return {
      form: {
        staffCode: '',
        workCode: '',
        empiric: ''
      },
      staffList: [
        { name: '妖皇东皇太一', code: 1 },
        { name: '天帝昊天', code: 2 },
        { name: '西王母西王母', code: 3 },
      ],
      workList: [
        { work: '天庭', code: 'wk01' },
        { work: '妖庭', code: 'wk02' },
        { work: '地府', code: 'wk03' },
      ]
    };
  },
  methods: {

  }
};
</script>

<style lang="scss" scoped>
::v-deep {
  .filter-form {
    .el-select,
    .el-input {
      width: 240px;
    }
  }
}
</style>