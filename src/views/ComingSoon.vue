<template>
  <div
    class="main-content d-flex flex-column align-center justify-center"
    v-bind:style="{
      backgroundImage:
        'url(' + require('@/assets/coming-soon-background.webp') + ')',
    }"
  >
    <div class="white--text title">
      <span class="bungee-font text-shadow">Coming soon</span>
    </div>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
  components: {},
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: 903px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}

.text-shadow {
  text-shadow: 0px 4px 50px black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.title {
  width: 50%;
  font-size: 37px !important;
  font-weight: bolder;
  text-align: center;
}
</style>
