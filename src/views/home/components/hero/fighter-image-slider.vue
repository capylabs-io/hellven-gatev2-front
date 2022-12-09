<template>
  <div v-if="visibleImage === index" v-scrollanimation class="fade-right image">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: ["visibleImage", "index"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.image {
  align-self: center;
}
</style>
