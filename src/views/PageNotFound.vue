<template>
  <div
    class="main-content"
    v-bind:style="{
      backgroundImage:
        'url(' + require('@/assets/coming-soon-background.webp') + ')',
    }"
  >
    <div class="white--text title mx-auto">
      <span class="bungee-font text-shadow">404 Not Found!</span>
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
  height: 902px;
  background-size: 100%;
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
  text-align: center;
  font-weight: bolder;
  padding-top: 440px;
}
</style>
