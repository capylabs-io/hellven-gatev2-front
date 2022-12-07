<template>
  <div class="main-content" :style="{ backgroundColor: '#12163D' }">
    <div class="content d-flex flex-column">
      <div class="booster-title white--text bungee-font mx-auto mt-10">
        <span>Towers</span>
      </div>
      <div class="booster-text bungee-font d-flex mx-auto">
        <div class="text-none align-seft-center white--text">
          <span
            >Boosters are combat enhancement that only appear in-game When
            obtained, boosters grant Fighter temporary boost in stat For a
            Couple of rounds
          </span>
        </div>
      </div>
      <div
        class="booster-content d-flex gap-100 justify-center"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/mode/modeBackground.webp') + ')',
        }"
      >
        <div class="info-card">
          <boosterInfo />
        </div>
        <div class="image">
          <v-img :src="require(`@/assets/booster-image.webp`)"></v-img>
        </div>
      </div>
      <div class="fighter-card-list">
        <boosterCard
          v-for="(fighter, index) in fighterCard"
          :key="fighter.index"
          :index="index"
        >
          <v-img
            :src="require(`@/assets/home/hero/hero${fighter.index}.webp`)"
          ></v-img>
        </boosterCard>
      </div>
      <!-- <div class="tower-card-list">
        <towerCard v-for="(card, index) in towerList" :key="index">
          <v-img :src="card" class="tower-card mx-auto"></v-img>
        </towerCard>
      </div> -->
    </div>
  </div>
</template>

<script>
import boosterinfo from "../components/Booster-info.vue";
import boostercard from "../components/Boosterv2-card.vue";
export default {
  setup() {
    return {};
  },
  components: {
    boosterInfo: boosterinfo,
    boosterCard: boostercard,
  },
  data() {
    return {
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
  padding-bottom: 60px;
}
.content {
  position: relative;
  width: 100%;
  height: max-content;
  row-gap: 50px;
}
.booster-content {
  width: 100%;
  height: max-content;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 100px;
  padding-top: 100px;
}
.booster-title {
  width: max-content;
  margin: 0 auto;
  background-color: #5e6be9;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
}
.booster-text {
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
.gap-100 {
  column-gap: 100px;
}
.info-card {
  width: 35%;
  align-self: center;
}
.booster-card-list {
  width: 52%;
  column-gap: 1%;
  display: flex;
  margin-left: 20%;
}
.image {
  align-self: center;
}
.booster-card {
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
