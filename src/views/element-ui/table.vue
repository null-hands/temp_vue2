<template>
  <el-table :data="tableData" border style="width: 100%">
    <el-table-column prop="date" label="日期" width="180">
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="180">
    </el-table-column>
    <el-table-column prop="address" label="地址">
    </el-table-column>
    <el-table-column prop="address.x" label="坐标-X" width="180" :formatter="formatterChange" />
    <el-table-column prop="address.y" label="坐标-Y" width="180" :formatter="formatterChange" />
  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄',
          'address.x': 102,
          'address.y': 103,
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄',
          'address.x': 102,
          'address.y': 103,
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄',
          'address.x': 102,
          'address.y': 103,
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄',
          'address.x': 102,
          'address.y': 103,
        }]
    };
  },
  mounted() {
    window.addEventListener('resize', function () {
      debugger;
      console.log(111);
    });
  },
  methods: {
    formatterChange(row, column) {
      if (column.property == 'address.x') {
        return row[column.property];
      } else if (column.property == 'address.y') {
        return row[column.property];
      }
    }
  }
};
</script>