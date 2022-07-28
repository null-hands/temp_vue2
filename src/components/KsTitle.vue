<template>
  <div class="ks-title">
    <div class="ks-title-text">{{ title || "标题" }}</div>
  </div>
</template>

<script>
export default {
  name: "KsTitle",
  props: {
    title: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.ks-title {
  width: 100%;
  height: 28px;
  padding-right: 4px;
  margin-bottom: 15px;
  display: flex;
  align-items: center;
}
.ks-title:before {
  content: "";
  width: 4px;
  height: 100%;
  margin-right: 12px;
  background: #365be3;
  border-radius: 3px;
}
.ks-title-text {
  width: 100%;
  text-align: left;
  line-height: 28px;
  font-weight: bold;
}
</style>
