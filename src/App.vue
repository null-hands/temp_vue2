<template>
  <layout-container />
</template>

<script>
import LayoutContainer from '@/layout/index.vue';
export default {
  components: { LayoutContainer },
};
</script>
<style lang="scss">
body {
  padding: 0;
  margin: 0;
}
.flex-center {
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: center;
}
</style>