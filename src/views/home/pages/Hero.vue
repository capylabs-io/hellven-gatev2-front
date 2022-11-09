<template>
  <div class="hero d-lfex flex-column">
    <div class="hero-title">
      <v-img :src="require(`@/assets/hero/hero-title.webp`)"></v-img>
    </div>
    <div class="d-flex mt-15 gap-200 item-center">
      <div class="">
        <v-img
          class="align-seft-center shadow"
          :src="require(`@/assets/hero/hero-image-shadow.webp`)"
        ></v-img>
        <v-img
          class="align-seft-center ml-16 mt-5"
          :src="require(`@/assets/hero/hero-image.webp`)"
        ></v-img>
      </div>
      <infoCard></infoCard>
    </div>
    <div class="hero-card d-flex item-center">
      <div class="slider">
        <v-img
          class="align-seft-center"
          :src="require(`@/assets/media/slide-left.webp`)"
        ></v-img>
      </div>
      <div class="hero-card-list d-flex justify-space-around">
        <card v-for="hero in heros" :key="hero.index" v-bind:hero="hero"></card>
      </div>
      <div class="slider">
        <v-img
          class="align-seft-center"
          :src="require(`@/assets/media/slide-right.webp`)"
        ></v-img>
      </div>
    </div>
  </div>
</template>

<script>
import HeroInfo from "../components/hero/hero-info-card.vue";
import HeroCard from "../components/hero/hero-card.vue";
export default {
  components: {
    infoCard: HeroInfo,
    card: HeroCard,
  },
  data() {
    return {
      heros: [
        {
          index: "1",
          image: "@/assets/hero/Hero1.webp",
        },
        {
          index: "2",
          image: "@/assets/hero/Hero2.webp",
        },
        {
          index: "3",
          image: "@/assets/hero/Hero3.webp",
        },
        {
          index: "4",
          image: "@/assets/hero/Hero4.webp",
        },
        {
          index: "5",
          image: "@/assets/hero/Hero5.webp",
        },
        {
          index: "6",
          image: "@/assets/hero/Hero6.webp",
        },
        {
          index: "7",
          image: "@/assets/hero/Hero7.webp",
        },
        {
          index: "8",
          image: "@/assets/hero/Hero8.webp",
        },
        {
          index: "9",
          image: "@/assets/hero/Hero9.webp",
        },
      ],
    };
  },
};
</script>
<style scoped>
.hero {
  height: 950px;
  width: 100% fit-content;
  padding-top: 5%;
  position: relative;
  background: linear-gradient(180deg, #4da9ff 0.52%, #0072dd 100%);
}

.hero-card {
  padding-top: 4%;
  column-gap: 5%;
}

.hero-card-list {
  column-gap: 3%;
}
.hero-title {
  max-width: 6%;
  margin: 0 auto;
}
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.shadow {
  position: absolute;
}
.slider {
  padding-top: 10px;
}
.gap-200 {
  column-gap: 200px;
}
</style>
