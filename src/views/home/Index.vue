<template>
  <div>
    <table>
      <tr>
        <td>姓名</td>
        <td>年龄</td>
        <td>性别</td>
      </tr>
      <tr v-for="(item,index) in arr" :key="index" :data-key="index">
        <td>{{item.name}}</td>
        <td>{{item.age}}</td>
        <td>{{item.sex}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [
        { name: 1, age: 1 },
        { name: 2, age: 2 }
      ]
    };
  },
  created() {
    this.getMap();
  },
  methods: {
    getMap() {
      this.arr.map(item => {
        item.name = item.name + '00';
        this.$set(item, 'sex', 1);
        console.log(item);
      });
      console.log(this.arr);
    }
  }
};
</script>

<style>
</style>