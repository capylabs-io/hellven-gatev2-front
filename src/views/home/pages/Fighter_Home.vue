<template>
  <div
    class="fighter d-lfex flex-column"
    v-bind:style="{
      backgroundImage:
        'url(' + require('@/assets/mode/modeBackground.webp') + ')',
    }"
  >
    <div class="fighter-title white--text bungee-font">
      <span>FIGHTERS</span>
    </div>
    <div class="fighter-link white--text bungee-font d-flex mt-5 flex-wrap">
      <div class="box text-none align-seft-center link-active">vanguard</div>
      <div class="box text-none align-seft-center">titan soul</div>
      <div class="box text-none align-seft-center">lightforce</div>
      <div class="box text-none align-seft-center">daredevil</div>
      <div class="box text-none align-seft-center">brawler</div>
      <div class="box text-none align-seft-center">phantom exile</div>
      <div class="box text-none align-seft-center">jester</div>
    </div>
    <div class="">
      <div class="fighter-info item-center flex-reverse">
        <div class="info-card">
          <infoCard></infoCard>
        </div>
        <div class="fighter-info-left d-flex justify-center">
          <div class="slider-mb">
            <button @click="prev">
              <v-img
                class="align-seft-center"
                :src="require(`@/assets/home/media/slide-left.webp`)"
              ></v-img>
            </button>
          </div>

          <fighterImage
            v-for="(info, index) in fighters"
            :key="info.index"
            :index="index"
            :visibleImage="visibleImage"
          >
            <!-- <v-progress-circular
              v-if=""
              :size="70"
              indeterminate
              color="black"
            ></v-progress-circular> -->
            <v-img class="fighter-image mx-auto" :src="info.image"></v-img>
          </fighterImage>
          <div class="slider-mb">
            <button @click="next">
              <v-img
                class="align-seft-center"
                :src="require(`@/assets/home/media/slide-right.webp`)"
              ></v-img>
            </button>
          </div>
        </div>
      </div>

      <div class="fighter-card">
        <!-- <div class="slider">
          <button @click="prev">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/home/media/slide-left.webp`)"
            ></v-img>
          </button>
        </div>
        <div class="slider">
          <button @click="next">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/home/media/slide-right.webp`)"
            ></v-img>
          </button>
        </div> -->
        <div class="fighter-card-list">
          <card v-for="(fighter, index) in fighterImages" :key="fighter.index">
            <v-img
              @click="setvisibleImage(index)"
              :class="visibleImage == index ? 'indicators' : ''"
              :src="fighter.image"
            ></v-img>
          </card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import fighterInfo from "../components/hero/fighter-info-card.vue";
import fighterCard from "../components/hero/fighter-card.vue";
import fighterImageSlider from "../components/hero/fighter-image-slider.vue";
export default {
  components: {
    infoCard: fighterInfo,
    card: fighterCard,
    fighterImage: fighterImageSlider,
  },
  data() {
    return {
      fighterImages: [
        {
          index: "1",
          image: require(`../../../assets/fighter/fighter-icon1.webp`),
        },
        {
          index: "2",
          image: require(`../../../assets/fighter/fighter-icon2.webp`),
        },
        {
          index: "3",
          image: require(`../../../assets/fighter/fighter-icon3.webp`),
        },
      ],
      fighters: [
        {
          index: "1",
          name: "alice",
          role: "role",
          text: "A young girl who has decided to become a scientist in an effort to explain the strange things that occurred in Wonderland. She is always researching new items with her robot assistant Bunny-Bunny. But sometimes, her excessive passion and curiosity causes a commotion.",
          image: require(`../../../assets/fighter/fighter1-image.webp`),
          ability: {
            first: {
              image: require(`../../../assets/fighter/fighter1-ability1.webp`),
              name: "Bunny-Bunny Hammer",
              text: "Swings Bunny-Bunny horizontally, dealing damage. Swings Bunny-Bunny vertically when used as Aerial Skill, dealing damage.",
            },
            second: {
              image: require(`../../../assets/fighter/fighter1-ability2.webp`),
              name: "Bunny-Bunny Magic Mine",
              text: "Throws a mine. The mine explodes when any foe is within the range, dealing damage and stuns. Mines last.",
            },
            third: {
              image: require(`../../../assets/fighter/fighter1-ability3.webp`),
              name: "Bunny-Bunny Hammer",
              text: "Strikes the ground to create a shockwave, dealing damage, and pulls foes hit toward Alice. Foes struck by the shockwave are also stunned for a second.",
            },
          },
        },
        {
          index: "2",
          name: "Hook",
          role: "role",
          text: "A young girl who has decided to become a scientist in an effort to explain the strange things that occurred in Wonderland. She is always researching new items with her robot assistant Bunny-Bunny. But sometimes, her excessive passion and curiosity causes a commotion.",
          image: require(`../../../assets/fighter/fighter2-image.webp`),
          ability: {
            first: {
              image: require(`../../../assets/fighter/fighter1-ability1.webp`),
              name: "Bunny-Bunny Hammer",
              text: "Swings Bunny-Bunny horizontally, dealing damage. Swings Bunny-Bunny vertically when used as Aerial Skill, dealing damage.",
            },
            second: {
              image: require(`../../../assets/fighter/fighter1-ability2.webp`),
              name: "Bunny-Bunny Magic Mine",
              text: "Throws a mine. The mine explodes when any foe is within the range, dealing damage and stuns. Mines last.",
            },
            third: {
              image: require(`../../../assets/fighter/fighter1-ability3.webp`),
              name: "Bunny-Bunny Hammer",
              text: "Strikes the ground to create a shockwave, dealing damage, and pulls foes hit toward Alice. Foes struck by the shockwave are also stunned for a second.",
            },
          },
        },
        {
          index: "3",
          name: "Maya",
          role: "role",
          text: "A young girl who has decided to become a scientist in an effort to explain the strange things that occurred in Wonderland. She is always researching new items with her robot assistant Bunny-Bunny. But sometimes, her excessive passion and curiosity causes a commotion.",
          image: require(`../../../assets/fighter/fighter3-image.webp`),
          ability: {
            first: {
              image: require(`../../../assets/fighter/fighter1-ability1.webp`),
              name: "Bunny-Bunny Hammer",
              text: "Swings Bunny-Bunny horizontally, dealing damage. Swings Bunny-Bunny vertically when used as Aerial Skill, dealing damage.",
            },
            second: {
              image: require(`../../../assets/fighter/fighter1-ability2.webp`),
              name: "Bunny-Bunny Magic Mine",
              text: "Throws a mine. The mine explodes when any foe is within the range, dealing damage and stuns. Mines last.",
            },
            third: {
              image: require(`../../../assets/fighter/fighter1-ability3.webp`),
              name: "Bunny-Bunny Hammer",
              text: "Strikes the ground to create a shockwave, dealing damage, and pulls foes hit toward Alice. Foes struck by the shockwave are also stunned for a second.",
            },
          },
        },
      ],
      visibleImage: 0,
      imageInterval: null,
    };
  },
  mounted() {
    this.imageInterval = setInterval(() => {
      const index =
        this.visibleImage < this.fighterImages.length - 1
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
      if (this.visibleImage >= this.fighterImages.length - 1) {
        this.visibleImage = 0;
      } else {
        this.visibleImage++;
      }
    },

    prev() {
      if (this.visibleImage <= 0) {
        this.visibleImage = this.fighterImages.length - 1;
      } else {
        this.visibleImage--;
      }
    },
  },
};
</script>
<style scoped>
.fighter {
  width: 100%;
  height: max-content;
  margin-top: 2%;
  padding-top: 4%;
  padding-bottom: 4%;
  position: relative !important;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  overflow: hidden;
}

.fighter-card {
  display: flex;
  margin-top: 4%;
  column-gap: 5%;
  justify-content: center;
}

.fighter-info {
  position: relative;
  margin-top: 50px;
  column-gap: 8%;
  display: flex;
  align-content: center;
}
.fighter-card-mb,
.fighter-card-list-responsive-mb,
.slider-mb {
  display: none;
}
.fighter-card-list {
  column-gap: 3%;
  display: flex;
  justify-content: space-around;
}
.fighter-card-list-responsive {
  display: none;
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
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}

.slider {
  padding-top: 10px;
}

.flex-reverse {
}
.fighter-image {
  object-fit: contain;
  align-self: center;
}
.info-card {
  width: 40%;
}
.fighter-info-left {
  height: 500px;
  width: 500px;
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
  border-radius: 100px;
}

.v-btn {
  width: 65px;
  height: 64px !important;
}
.fighter-link {
  column-gap: 30px;
  background-color: transparent;
  padding: 10px;
  border-radius: 15px;
  justify-content: center;
}
.link-active {
  border-radius: 15px;
  background-color: #5e6be9;
  height: max-content;
  color: white;
}
.box {
  padding: 10px;
}
</style>
