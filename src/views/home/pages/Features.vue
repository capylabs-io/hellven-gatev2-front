<template>
  <div class="feature d-lfex flex-column">
    <div class="feature-title white--text bungee-font">
      <span>FEATURES</span>
    </div>

    <div
      v-scrollanimation
      class="d-flex item-center feature-list fade-right"
      v-if="translateValue == 1"
    >
      <!-- <v-card class="feature-card pt-5" white>
        <v-card-title class="bungee-font" style="font-size: 25px">
          <span> Play Your Way </span>
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-5"
          style="font-size: 21px"
        >
          <span>
            Fighter Force is for everyone. Practice your skills in Casual play,
            climb the ranks in Ranked mode, shake things up with crazy fun
            Tavern Brawls, test your luck in the Arena, play solo adventures
            against fiendishly clever computer opponents, and much, much more.
          </span>
        </v-card-subtitle>
      </v-card> -->
      <div v-for="(info, index) in news" :key="info.index" :index="index">
        <div class="d-flex flex-column feature-play">
          <div class="feature-play-card">
            <v-card class="feature-media-image-card">
              <v-img class="feature-media-image" :src="info.image"></v-img>
            </v-card>
            <div class="d-flex pt-3 gap-30 feature-play-card-info">
              <v-img
                class="feature-media-icon"
                :src="require(`@/assets/home/mode/gamemode1-icon.webp`)"
              />
              <span class="kanit-font" style="font-size: 18px">
                {{ info.title }}
              </span>
            </div>
          </div>
        </div>
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

    <div
      v-scrollanimation
      class="d-flex item-center feature-list fade-right"
      v-else
    >
      <div class="slider">
        <button @click="prev">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/home/media/slide-left.webp`)"
          ></v-img>
        </button>
      </div>
      <div class="d-flex flex-column feature-play">
        <div class="feature-play-card">
          <v-card class="feature-media-image-card">
            <v-img
              class="feature-media-image"
              :src="require(`@/assets/home/news/new4-image.webp`)"
            ></v-img>
          </v-card>
          <div class="d-flex pt-3 gap-30 feature-play-card-info">
            <v-img
              class="feature-media-icon"
              :src="require(`@/assets/home/mode/gamemode1-icon.webp`)"
            />
            <span class="kanit-font" style="font-size: 18px">
              Hone your skills and refine your decks in Casual mode!
            </span>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column feature-play">
        <div class="feature-play-card">
          <v-card class="feature-media-image-card">
            <v-img
              class="feature-media-image"
              :src="require(`@/assets/home/news/new4-image.webp`)"
            ></v-img>
          </v-card>
          <div class="d-flex pt-3 gap-30 feature-play-card-info">
            <v-img
              class="feature-media-icon"
              :src="require(`@/assets/home/mode/gamemode1-icon.webp`)"
            />
            <span class="kanit-font" style="font-size: 18px">
              Hone your skills and refine your decks in Casual mode!
            </span>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column feature-play">
        <div class="feature-play-card">
          <v-card class="feature-media-image-card">
            <v-img
              class="feature-media-image"
              :src="require(`@/assets/home/news/new4-image.webp`)"
            ></v-img>
          </v-card>
          <div class="d-flex pt-3 gap-30 feature-play-card-info">
            <v-img
              class="feature-media-icon"
              :src="require(`@/assets/home/mode/gamemode1-icon.webp`)"
            />
            <span class="kanit-font" style="font-size: 18px">
              Challenge anyone, anywhere
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- <div class="pt-10 d-flex item-center feature-list">
      <div class="slider">
        <button @click="prev">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/home/media/slide-left.webp`)"
          ></v-img>
        </button>
      </div>
      <v-card class="feature-card pt-5" white>
        <v-img
          class="mx-auto feature-card-image"
          :src="require(`@/assets/home/mode/gamemode1-icon.webp`)"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          {{ $t("mode.card1.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto card-text"
          style="font-size: 20px"
        >
          {{ $t("mode.card1.text") }}
        </v-card-subtitle>
      </v-card>
      <v-card class="feature-card pt-5" white>
        <v-img
          class="mx-auto feature-card-image"
          :src="require(`@/assets/home/mode/gamemode2-icon.webp`)"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          {{ $t("mode.card2.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto card-text"
          style="font-size: 20px"
        >
          {{ $t("mode.card2.text") }}
        </v-card-subtitle>
      </v-card>
      <v-card class="feature-card pt-5" white>
        <v-img
          class="mx-auto feature-card-image"
          :src="require(`@/assets/home/mode/gamemode3-icon.webp`)"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          {{ $t("mode.card3.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto card-text"
          style="font-size: 20px"
        >
          {{ $t("mode.card3.text") }}
        </v-card-subtitle>
      </v-card>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      translateValue: 1,
      news: [
        {
          index: "1",
          title:
            "A fast pace turn-based tactical game that can satisfy any strategic mind",
          image: require(`@/assets/home/news/new4-image.webp`),
        },
        {
          index: "2",
          title:
            "Thousands of combination from a wide range of unique hero for player to experiement",
          image: require(`@/assets/home/news/new4-image.webp`),
        },
        {
          index: "3",
          title:
            "An immense collection of challenging modes that rotates constantly to keep the game fresh",
          image: require(`@/assets/home/news/new4-image.webp`),
        },
        {
          index: "4",
          title:
            "Constantly improve and evolve to improve player’s experience as we learn from your feedbacks",
          image: require(`@/assets/home/news/new4-image.webp`),
        },
      ],
    };
  },
  methods: {
    next() {
      this.translateValue = 2;
    },
    prev() {
      this.translateValue = 1;
    },
  },
  components: {},
};
</script>
<style scoped>
.feature {
  height: 650px;
  width: calc(100%-50px);
  padding-top: 6%;
  position: relative;
  background: transparent;
  overflow: hidden;
}
.feature-card {
  max-width: 22%;
  padding: 10px;
  border-radius: 16px;
  box-shadow: 0px 6px 1px 0px rgba(73, 73, 73, 0.2) !important;
}
.feature-media {
  width: max-content;
}
.feature-title {
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
}
.feature-list {
  column-gap: 3%;
  height: max-content;
  margin-top: 80px;
  transition: 0.5 all ease;
}
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}

.card-text {
  max-width: 90%;
}
.feature-card-image {
  max-width: 23%;
}
.feature-media-icon {
  max-width: 40px;
  max-height: 45px;
}
.feature-play {
  width: max-content;
}
.feature-play-card {
  width: max-content;
  border: 0px;
  background: transparent;
}
.feature-media-image-card {
  width: max-content;
  height: max-content;
  border-radius: 7px;
  border: solid 3px white;
  box-shadow: 0px 6px 1px 0px rgb(255, 255, 255, 0.5) !important;
}
.feature-media-image {
  width: 360px;
  max-height: 210px;
}
.feature-play-card-info {
  width: 360px;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.gap-30 {
  column-gap: 30px;
}
.slider {
  padding-top: 6%;
  transition: 0.3 all ease;
}
.visible {
  display: none;
}
</style>
