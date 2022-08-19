<template>
  <div>
    <ks-title title="半圆"></ks-title>
    <div class="flex-center">
      <div class="circle-top"></div>
      <div class="circle-right"></div>
      <div class="circle-bottom"></div>
      <div class="circle-left"></div>
    </div>
    <ks-title title="圆"></ks-title>
    <div class="circle"></div>
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss" scoped>
.circle-top {
  width: 60px;
  height: 30px;
  border-radius: 60px 60px 0 0;
  background: #0062ff;
}
.circle-right {
  width: 30px;
  height: 60px;
  border-radius: 0 60px 60px 0;
  background: #0062ff;
}
.circle-bottom {
  width: 60px;
  height: 30px;
  border-radius: 0 0 60px 60px;
  background: #0062ff;
}
.circle-left {
  width: 30px;
  height: 60px;
  border-radius: 60px 0 0 60px;
  background: #0062ff;
}
.circle {
  width: 0;
  height: 0;
  border: 30px solid #0062ff;
  border-radius: 50%;
}
</style>