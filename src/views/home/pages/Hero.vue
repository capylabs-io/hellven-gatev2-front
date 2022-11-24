<template>
  <div class="hero d-lfex flex-column">
    <div class="hero-title">
      <v-img :src="require(`@/assets/hero/hero-title.webp`)"></v-img>
    </div>
    <div class="flex-reverse">
      <div class="hero-info item-center">
        <div class="hero-info-left">
          <v-img
            class="shadow"
            :src="require(`@/assets/hero/hero-image-shadow.webp`)"
          ></v-img>
          <v-img
            class="hero-image"
            :src="require(`@/assets/hero/hero-image.webp`)"
          ></v-img>
        </div>
        <div class="hero-card-mb d-flex item-center">
          <div class="slider-mb">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/media/slide-left.webp`)"
            ></v-img>
          </div>
          <div class="hero-card-list-responsive-mb">
            <card
              v-for="hero in heros3"
              :key="hero.index"
              v-bind:hero="hero"
            ></card>
          </div>
          <div class="slider-mb">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/media/slide-right.webp`)"
            ></v-img>
          </div>
        </div>
        <div class="info-card">
          <infoCard></infoCard>
        </div>
      </div>
      <div class="hero-card">
        <div class="slider">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/media/slide-left.webp`)"
          ></v-img>
        </div>
        <div class="hero-card-list">
          <card
            v-for="hero in heros"
            :key="hero.index"
            v-bind:hero="hero"
          ></card>
        </div>
        <div class="hero-card-list-responsive">
          <card
            v-for="hero in heros2"
            :key="hero.index"
            v-bind:hero="hero"
          ></card>
        </div>

        <div class="slider">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/media/slide-right.webp`)"
          ></v-img>
        </div>
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
      heros2: [
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
      ],
      heros3: [
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
      ],
    };
  },
  computed() {},
};
</script>
<style scoped>
.hero {
  height: 950px;
  width: 100% fit-content;
  margin-top: 2%;
  padding-top: 5%;
  position: relative !important;
  background: linear-gradient(180deg, #4da9ff 0.52%, #0072dd 100%);
}

.hero-card {
  display: flex;
  margin-top: 6%;
  column-gap: 5%;
  justify-content: center;
}

.hero-info {
  position: relative;
  margin-top: 50px;
  column-gap: 4%;
  display: flex;
}
.hero-card-mb,
.hero-card-list-responsive-mb,
.slider-mb {
  display: none;
}
.hero-card-list {
  column-gap: 3%;
  display: flex;
  justify-content: space-around;
}
.hero-card-list-responsive {
  display: none;
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

.flex-reverse {
}
.hero-image {
  margin-top: 20px;
  margin-left: 100px;
}
.info-card {
  width: 35%;
}
.hero-info-left {
}

.reveal {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 2s all ease;
}
.reveal.active {
  transform: translateY(0);
  opacity: 1;
}
</style>
