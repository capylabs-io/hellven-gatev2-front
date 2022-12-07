<template>
  <div class="main-content" :style="{ backgroundColor: '#12163D' }">
    <div class="content d-flex flex-column">
      <div class="spell-title white--text bungee-font mx-auto mt-10">
        <span>Spell</span>
      </div>
      <div class="spell-link bungee-font d-flex mx-auto white--text">
        <div class="box text-none align-seft-center active">Common</div>
        <div class="box text-none align-seft-center">Rare</div>
        <div class="box text-none align-seft-center">unknown</div>
      </div>
      <div
        class="spell-content d-flex gap-100 justify-center"
        v-bind:style="{
          backgroundImage:
            'url(' + require('@/assets/mode/modeBackground.webp') + ')',
        }"
      >
        <div class="info-card">
          <spellInfo />
        </div>
        <div class="image">
          <v-img :src="require(`@/assets/spell-image.webp`)"></v-img>
        </div>
      </div>
      <div class="fighter-card-list">
        <spellCard
          v-for="(fighter, index) in fighterCard"
          :key="fighter.index"
          :index="index"
        >
          <v-img
            :src="require(`@/assets/home/hero/hero${fighter.index}.webp`)"
          ></v-img>
        </spellCard>
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
import SepllInfo from "../components/Spell-info.vue";
import SpellCard from "../components/Spell-card.vue";
export default {
  setup() {
    return {};
  },
  components: {
    spellInfo: SepllInfo,
    spellCard: SpellCard,
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
  row-gap: 10px;
}
.spell-content {
  width: 100%;
  height: max-content;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
  padding-bottom: 100px;
  padding-top: 100px;
}
.spell-title {
  width: max-content;
  margin: 0 auto;
  background-color: #5e6be9;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
}
.spell-text {
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
  align-self: center;
}
.spell-card-list {
  width: 52%;
  column-gap: 1%;
  display: flex;
  margin-left: 20%;
}
.image {
  align-self: center;
}
.spell-card {
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
.spell-link {
  column-gap: 10px;
  background-color: transparent;
  padding: 10px;
  border-radius: 15px;
}
</style>
