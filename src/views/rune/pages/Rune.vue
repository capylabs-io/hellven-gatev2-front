<template>
  <div class="main-content">
    <div class="content d-flex flex-column">
      <div class="rune-title white--text bungee-font mx-auto mt-10">
        <span>RUNES</span>
      </div>
      <div class="rune-text bungee-font d-flex mx-auto">
        <div class="text-none align-seft-center">
          <span
            >Boosters are combat enhancement that only appear in-game When
            obtained, boosters grant Fighter temporary boost in stat For a
            Couple of rounds
          </span>
        </div>
      </div>
      <div
        class="rune-content d-flex gap-50 justify-center"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/mode/modeBackground.webp') + ')',
        }"
      >
        <div class="info-card">
          <runeInfo />
        </div>
        <div class="image">
          <v-img :src="require(`@/assets/rune/rune-image.webp`)"></v-img>
        </div>
      </div>
      <div class="rune-card-list">
        <runeCard v-for="(card, index) in towerList" :key="index">
          <v-img :src="card" class="rune-card mx-auto"></v-img>
        </runeCard>
      </div>
    </div>
  </div>
</template>

<script>
import runeInfo from "../components/Rune-info.vue";
import runeCard from "../components/Rune-card.vue";
export default {
  setup() {
    return {};
  },
  components: {
    runeInfo: runeInfo,
    runeCard: runeCard,
  },
  data() {
    return {
      towerList: [
        require(`@/assets/tower/tower1.webp`),
        require(`@/assets/tower/tower2.webp`),
        require(`@/assets/tower/tower1.webp`),
        require(`@/assets/tower/tower1.webp`),
        require(`@/assets/tower/tower1.webp`),
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  width: 100%;
  height: 100%;
  padding-bottom: 160px;
}
.content {
  position: relative;
  width: 100%;
  height: 720px;
  row-gap: 50px;
}
.rune-content {
  width: 100%;
  height: 380px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.rune-title {
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
}
.rune-text {
  width: 50%;
  text-align: center;
  font-size: larger;
}
.active {
  border-radius: 15px;
  background-color: #5e6be9;
  height: max-content;
  color: white;
}
.box {
  padding: 10px;
}
.gap-50 {
  column-gap: 200px;
}
.info-card {
  width: 35%;
  align-self: center;
}
.rune-card-list {
  width: 52%;
  column-gap: 1%;
  display: flex;
  margin-left: 21%;
}
.image {
  align-self: center;
}
.rune-card {
  align-self: center;
  width: calc(46px * 1.1);
  height: calc(64px * 1.1);
}
</style>
