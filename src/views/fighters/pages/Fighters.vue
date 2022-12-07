<template>
  <div class="main-content" :style="{ backgroundColor: '#12163D' }">
    <div class="content d-flex flex-column">
      <div class="fighter-title white--text bungee-font mx-auto mt-10">
        <span>FIGHTERS</span>
      </div>
      <div class="fighter-link white--text bungee-font d-flex mx-auto">
        <div class="box text-none align-seft-center active">vanguard</div>
        <div class="box text-none align-seft-center">titan soul</div>
        <div class="box text-none align-seft-center">lightforce</div>
        <div class="box text-none align-seft-center">daredevil</div>
        <div class="box text-none align-seft-center">brawler</div>
        <div class="box text-none align-seft-center">phantom exile</div>
        <div class="box text-none align-seft-center">jester</div>
      </div>
      <div
        class="fighter-content d-flex gap-100 justify-center"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/mode/modeBackground.webp') + ')',
        }"
      >
        <div class="info-card">
          <fighterInfo />
        </div>
        <div class="image">
          <v-img :src="require(`@/assets/fighter-image.webp`)"></v-img>
        </div>
      </div>
      <div class="fighter-card-list">
        <fighterCard
          v-for="(fighter, index) in fighterCard"
          :key="fighter.index"
          :index="index"
        >
          <v-img
            :src="require(`@/assets/home/hero/hero${fighter.index}.webp`)"
          ></v-img>
        </fighterCard>
      </div>
    </div>
  </div>
</template>

<script>
import fighterInfo from "../components/fighter-info.vue";
import fighterCard from "../components/fighter-card.vue";
export default {
  setup() {
    return {};
  },
  components: {
    fighterInfo: fighterInfo,
    fighterCard: fighterCard,
  },
  data() {
    return {
      fighters: [
        "vanguard",
        "titan soul",
        "lightforce",
        "daredevil",
        "brawler",
        "phantom exile",
        "jester",
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
  height: max-content;
  padding-bottom: 60px;
}
.content {
  position: relative;
  width: 100%;
  height: max-content;
  row-gap: 50px;
}
.fighter-content {
  height: max-content;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 100px;
  padding-bottom: 100px;
}
.fighter-title {
  width: max-content;
  margin: 0 auto;
  background-color: #5e6be9;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
}
.fighter-link {
  column-gap: 30px;
  background-color: transparent;
  padding: 10px;
  border-radius: 15px;
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
  width: 40%;
  align-self: center;
}
.fighter-card-list {
  display: flex;
  width: fit-content;
  column-gap: 20px;
  margin: 0 auto;
  margin-top: 50px;
}
.image {
  align-self: center;
}
</style>
