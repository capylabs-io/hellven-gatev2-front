<template>
  <div class="main-content" :style="{ backgroundColor: '#12163D' }">
    <div class="content d-flex flex-column">
      <div class="rune-title white--text bungee-font mx-auto mt-10">
        <span>RUNES</span>
      </div>
      <div class="rune-text bungee-font d-flex mx-auto">
        <div class="text-none align-seft-center white--text">
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
          <v-img :src="require(`@/assets/rune-image.webp`)"></v-img>
        </div>
      </div>
      <div class="fighter-card-list">
        <runeCard
          v-for="(fighter, index) in fighterCard"
          :key="fighter.index"
          :index="index"
        >
          <v-img
            :src="require(`@/assets/home/hero/hero${fighter.index}.webp`)"
          ></v-img>
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
      fighterCard: [
        {
          index: "1",
          image: "@/assets/home/hero/Hero1.webp",
        },
        {
          index: "2",
          image: "@/assets/home/hero/Hero2.webp",
        },
        {
          index: "3",
          image: "@/assets/home/hero/Hero3.webp",
        },
        {
          index: "4",
          image: "@/assets/home/hero/Hero4.webp",
        },
        {
          index: "5",
          image: "@/assets/home/hero/Hero5.webp",
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
  padding-bottom: 60px;
}
.content {
  position: relative;
  width: 100%;
  height: max-content;
  row-gap: 50px;
}
.rune-content {
  width: 100%;
  height: max-content;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.rune-title {
  width: max-content;
  margin: 0 auto;
  background-color: #5e6be9;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
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
.fighter-card-list {
  display: flex;
  width: fit-content;
  column-gap: 20px;
  margin: 0 auto;
  margin-top: 50px;
}
</style>
