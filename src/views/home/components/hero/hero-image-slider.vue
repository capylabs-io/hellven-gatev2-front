<template>
  <div v-if="visibleImage === index" v-scrollanimation class="fade-right">
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
.unactive {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.active {
  transform: translateY(0);
  animation: fade-right 1s ease-in;
  opacity: 1;
}
@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
