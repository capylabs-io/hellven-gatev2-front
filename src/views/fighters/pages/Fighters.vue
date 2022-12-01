<template>
  <div class="main-content">
    <div class="content d-flex flex-column">
      <div class="fighter-title white--text bungee-font mx-auto mt-10">
        <span>FIGHTERS</span>
      </div>
      <div class="fighter-link bungee-font d-flex mx-auto">
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
          <v-img :src="require(`@/assets/fighter/fighter-image.webp`)"></v-img>
        </div>
      </div>
      <div class="fighter-card-list mx-auto">
        <fighterCard
          v-for="(fighter, index) in fighterCard"
          :key="fighter.index"
        >
          <v-img
            :class="visibleImage == index ? 'indicators' : ''"
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
        {
          index: "6",
          image: "@/assets/home/hero/Hero6.webp",
        },
        {
          index: "7",
          image: "@/assets/home/hero/Hero7.webp",
        },
        {
          index: "8",
          image: "@/assets/home/hero/Hero8.webp",
        },
        {
          index: "9",
          image: "@/assets/home/hero/Hero9.webp",
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
  padding-bottom: 160px;
}
.content {
  position: relative;
  width: 100%;
  height: 720px;
  row-gap: 50px;
}
.fighter-content {
  width: 100%;
  height: 380px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.fighter-title {
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
}
.fighter-link {
  column-gap: 30px;
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
.fighter-card-list {
  width: 50%;
  column-gap: 3%;
  display: flex;
  justify-content: space-around;
  margin-top: 50px;
}
</style>
