<template>
  <div class="hero d-lfex flex-column">
    <div class="hero-title white--text bungee-font">
      <span>FIGHTERS</span>
    </div>
    <!-- <v-img :src="require(`@/assets/home/hero/hero-title.webp`)"></v-img> -->
    <div class="flex-reverse">
      <div class="hero-info item-center">
        <div class="hero-info-left">
          <v-img
            class="shadow"
            :src="require(`@/assets/home/hero/hero-image-shadow.webp`)"
          ></v-img>
          <!-- <v-img
            class="hero-image"
            :src="require(`@/assets/home/hero/hero-image.webp`)"
          ></v-img> -->

          <heroImage
            v-for="(image, index) in heroImages"
            :key="image"
            :index="index"
            :visibleImage="visibleImage"
          >
            <!-- <v-progress-circular
              v-if=""
              :size="70"
              indeterminate
              color="black"
            ></v-progress-circular> -->
            <v-img class="hero-image" :src="image"></v-img>
          </heroImage>
          <!--todo: add loading circle and fix size image static  -->
        </div>
        <div class="hero-card-mb d-flex item-center">
          <div class="slider-mb">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/home/media/slide-left.webp`)"
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
              :src="require(`@/assets/home/media/slide-right.webp`)"
            ></v-img>
          </div>
        </div>
        <div class="info-card">
          <infoCard></infoCard>
        </div>
      </div>
      <div class="hero-card">
        <div class="slider">
          <button @click="prev">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/home/media/slide-left.webp`)"
            ></v-img>
          </button>
        </div>
        <div class="hero-card-list">
          <card v-for="(hero, index) in heros" :key="hero.index">
            <v-btn @click="setvisibleImage(index)" color="#218AEC">
              <v-img
                :class="visibleImage == index ? 'indicators' : ''"
                :src="require(`@/assets/home/hero/hero${hero.index}.webp`)"
              ></v-img>
            </v-btn>
          </card>
          <!-- <card v-for="hero in heros" :key="hero.index" v-bind:hero="hero">
            <v-img
              :src="require(`@/assets/home/hero/hero${hero.index}.webp`)"
            ></v-img
          ></card> -->
        </div>
        <div class="hero-card-list-responsive">
          <card
            v-for="hero in heros2"
            :key="hero.index"
            v-bind:hero="hero"
          ></card>
        </div>

        <div class="slider">
          <button @click="next">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/home/media/slide-right.webp`)"
            ></v-img>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroInfo from "../components/hero/hero-info-card.vue";
import HeroCard from "../components/hero/hero-card.vue";
import heroImageSlider from "../components/hero/hero-image-slider.vue";
export default {
  components: {
    infoCard: HeroInfo,
    card: HeroCard,
    heroImage: heroImageSlider,
  },
  data() {
    return {
      heros: [
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
      heros2: [
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
      ],
      heros3: [
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
      ],
      heroImages: [
        require(`../../../assets/home/hero/hero-image.webp`),
        require(`../../../assets/home/hero/hero-image1.webp`),
        require(`../../../assets/home/hero/hero-image2.webp`),
      ],
      visibleImage: 0,
      imageInterval: null,
    };
  },
  mounted() {
    this.imageInterval = setInterval(() => {
      const index =
        this.visibleImage < this.heroImages.length - 1
          ? this.visibleImage + 1
          : 0;
      this.setvisibleImage(index);
    }, 5000);
  },
  beforeMount() {
    clearInterval(this.imageInterval);
  },
  methods: {
    setvisibleImage(index) {
      this.visibleImage = index;
    },
    next() {
      if (this.visibleImage >= this.heroImages.length - 1) {
        this.visibleImage = 0;
      } else {
        this.visibleImage++;
      }
    },

    prev() {
      if (this.visibleImage <= 0) {
        this.visibleImage = this.heroImages.length - 1;
      } else {
        this.visibleImage--;
      }
    },
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
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
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
  padding-bottom: 10px;
  margin-left: 60px;
  object-fit: cover;
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
.reveal .active {
  transform: translateY(0);
  opacity: 1;
}
.indicators {
  border: 3px solid white !important;
}

.v-btn {
  width: 65px;
  height: 64px !important;
}
</style>
