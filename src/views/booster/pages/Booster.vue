<template>
  <div class="main-content">
    <div class="content d-flex flex-column">
      <div class="booster-title white--text bungee-font mx-auto mt-10">
        <span>Booster</span>
      </div>
      <div class="booster-text bungee-font d-flex mx-auto">
        <div class="text-none align-seft-center">
          <span
            >Boosters are combat enhancement that only appear in-game When
            obtained, boosters grant Fighter temporary boost in stat For a
            Couple of rounds
          </span>
        </div>
      </div>
      <div class="d-flex flex-wrap gap-50 justify-center">
        <card
          v-for="(booster, index) in boosterList"
          :key="index"
          :booster="booster"
        >
        </card>
      </div>
    </div>
  </div>
</template>

<script>
import boosterCard from "../components/booster-card.vue";
export default {
  setup() {
    return {};
  },
  components: {
    card: boosterCard,
  },
  data() {
    return {
      boosterList: [
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
        {
          image: require(`@/assets/booster/booster-image.webp`),
          name: "Overload",
          descript:
            "Add a random Magic card to your hand Add a random Magic card to your handAdd a random Magic card to your hand",
        },
      ],
      towerList: [
        require(`@/assets/booster/booster-image.webp`),
        require(`@/assets/tower/tower2.webp`),
        require(`@/assets/booster/booster-image.webp`),
        require(`@/assets/booster/booster-image.webp`),
        require(`@/assets/booster/booster-image.webp`),
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
  height: max-content;
  row-gap: 50px;
  background-color: #f8f8f8;
}
.booster-content {
  width: 100%;
  height: 380px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.booster-title {
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
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
.gap-50 {
  gap: 50px;
}
</style>
