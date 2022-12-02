<template>
  <div
    class="main-content"
    v-bind:style="{
      backgroundImage:
        'url(' + require('@/assets/mode/modeBackground.webp') + ')',
    }"
  >
    <div class="content d-flex flex-column">
      <div class="mode-title white--text bungee-font mx-auto mt-10">
        <span>MODES</span>
      </div>
      <div class="mode-link bungee-font d-flex mx-auto white--text">
        <div class="box text-none align-seft-center active">Casual</div>
        <div class="box text-none align-seft-center">Campaign</div>
        <div class="box text-none align-seft-center">Ranking</div>
        <div class="box text-none align-seft-center">Survival</div>
        <div class="box text-none align-seft-center">City Defend</div>
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
  data() {
    return {
      modes: [
        {
          mode: "mode 1",
          name: "Ruffs",
          detail:
            "He may bark orders at his subordinates, but Colonel Ruffs is a very good boy! Possessing a serious and calm demeanor, Ruffs keeps his dog traits hidden, unless there's a game of fetch going on.",
        },
        {
          mode: "mode 2",
          name: "Ruffs",
          detail:
            "He may bark orders at his subordinates, but Colonel Ruffs is a very good boy! Possessing a serious and calm demeanor, Ruffs keeps his dog traits hidden, unless there's a game of fetch going on.",
        },
        {
          mode: "mode 3",
          name: "Ruffs",
          detail:
            "He may bark orders at his subordinates, but Colonel Ruffs is a very good boy! Possessing a serious and calm demeanor, Ruffs keeps his dog traits hidden, unless there's a game of fetch going on.",
        },
        {
          mode: "mode 4",
          name: "Ruffs",
          detail:
            "He may bark orders at his subordinates, but Colonel Ruffs is a very good boy! Possessing a serious and calm demeanor, Ruffs keeps his dog traits hidden, unless there's a game of fetch going on.",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
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
  background-color: black;
  padding: 10px;
  border-radius: 15px;
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

.mode-title {
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
}
</style>
