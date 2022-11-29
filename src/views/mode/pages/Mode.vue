<template>
  <div
    class="main-content"
    v-bind:style="{
      backgroundImage:
        'url(' + require('@/assets/mode/modeBackground.webp') + ')',
    }"
  >
    <div class="content d-flex flex-column">
      <div class="mode-title pt-10 mx-auto">
        <v-img :src="require(`@/assets/mode/modeTitle.webp`)"></v-img>
      </div>
      <div class="mode-link bungee-font d-flex mx-auto white--text">
        <div class="box text-none align-seft-center active">Mode 1</div>
        <div class="box text-none align-seft-center">Mode 2</div>
        <div class="box text-none align-seft-center">Mode 3</div>
        <div class="box text-none align-seft-center">Mode 4</div>
      </div>
      <div class="mode-content d-flex gap-50 justify-center">
        <div class="slider">
          <button @click="prev">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/mode/slide-left.webp`)"
            ></v-img>
          </button>
        </div>
        <div class="info-card">
          <modeInfo />
        </div>
        <div class="image">
          <modeImage />
        </div>
        <div class="slider">
          <button @click="next">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/mode/slide-right.webp`)"
            ></v-img>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import modeImage from "../components/mode-image.vue";
import modeInfo from "../components/mode-info.vue";
export default {
  setup() {
    return {};
  },
  components: {
    modeImage: modeImage,
    modeInfo: modeInfo,
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
}
.content {
  position: relative;
  width: 100%;
  height: 720px;
  row-gap: 50px;
}
.mode-content {
}
.mode-link {
  column-gap: 10px;
}
.active {
  border-radius: 15px;
  background-color: #5e6be9;
  height: max-content;
}
.box {
  padding: 10px;
}
.slider {
  align-self: center;
}
.gap-50 {
  column-gap: 50px;
}
.info-card {
  width: 26%;
  align-self: center;
}
.image {
  align-self: center;
}
</style>
