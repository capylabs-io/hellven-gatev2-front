<template>
  <div class="media d-lfex flex-column">
    <div class="media-title white--text bungee-font">
      <span>MEDIA</span>
    </div>

    <div class="media-content pt-15 item-center px-15">
      <div class="media-image-responsive item-center">
        <card v-for="media in medias2" :key="media.index" v-bind:media="media">
          <v-img
            @click="overlay = !overlay"
            :src="require(`@/assets/home/media/Media${media.index}.webp`)"
          ></v-img
        ></card>
      </div>
      <div class="media-image-responsive-mb item-center">
        <card v-for="media in medias" :key="media.index" v-bind:media="media">
          <v-img
            @click="overlay = !overlay"
            :src="require(`@/assets/home/media/Media${media.index}.webp`)"
          ></v-img
        ></card>
      </div>
      <div class="media-section">
        <div v-scrollanimation class="media-image item-center fade-bottom">
          <card v-for="media in medias" :key="media.index" v-bind:media="media">
            <v-sheet
              v-if="loading"
              :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
            >
              <v-skeleton-loader
                class="mx-auto"
                width="275px"
                height="161px"
                type="image"
              ></v-skeleton-loader>
            </v-sheet>
            <template v-else>
              <v-img
                @click="overlay = !overlay"
                :src="require(`@/assets/home/media/Media${media.index}.webp`)"
              ></v-img>
            </template>
          </card>
        </div>
        <div class="d-flex mx-auto gap-50">
          <div class="slider">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/home/media/slide-left.webp`)"
            ></v-img>
          </div>
          <div class="slider">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/home/media/slide-right.webp`)"
            ></v-img>
          </div>
        </div>
      </div>
    </div>

    <v-row>
      <v-overlay :z-index="zIndex" :value="overlay" :opacity="opacity">
        <div class="overlayContent d-flex flex-column align-center">
          <div class="overlay-Count white--text bungee-font">
            <span>{{ visibleImage + 1 }}/{{ medias.length }}</span>
          </div>
          <div class="d-flex gap-50">
            <div class="slider-overlay">
              <button @click="prev">
                <v-img
                  class="align-seft-center"
                  :src="require(`@/assets/home/media/slide-left.webp`)"
                ></v-img>
              </button>
            </div>
            <cardDetail
              v-for="(media, index) in medias"
              :key="media.image"
              :index="index"
              :visibleImage="visibleImage"
            >
              <v-img class="imageDetail" :src="media.image"></v-img>
            </cardDetail>
            <div class="slider-overlay">
              <button @click="next">
                <v-img
                  class="align-seft-center"
                  :src="require(`@/assets/home/media/slide-right.webp`)"
                ></v-img>
              </button>
            </div>
          </div>
          <div class="media-image-detail item-center">
            <card
              v-for="media in medias"
              :key="media.index"
              v-bind:media="media"
            >
              <v-img
                draggable="false"
                :src="require(`@/assets/home/media/Media${media.index}.webp`)"
              ></v-img>
            </card>
          </div>
          <v-btn color="violet" fab @click="overlay = false">
            <v-icon white> mdi-close </v-icon>
          </v-btn>
        </div>
      </v-overlay>
    </v-row>
  </div>
</template>

<script>
import Card from "@/views/home/components/media/Media-card.vue";
import MediaDetail from "../components/media/view/Media-detail.vue";
// import VueScrollSnap from "vue-scroll-snap";
export default {
  name: "Media",

  components: {
    card: Card,
    cardDetail: MediaDetail,
    // vuescrollSnap: VueScrollSnap,
  },
  data() {
    return {
      overlay: false,
      opacity: 1,
      zIndex: 99,

      medias: [
        {
          index: "1",
          image: require(`@/assets/home/media/Media1.webp`),
        },
        {
          index: "2",
          image: require(`@/assets/home/media/Media2.webp`),
        },
        {
          index: "3",
          image: require(`@/assets/home/media/Media3.webp`),
        },
        {
          index: "4",
          image: require(`@/assets/home/media/Media4.webp`),
        },
        {
          index: "5",
          image: require(`@/assets/home/media/Media5.webp`),
        },
        {
          index: "6",
          image: require(`@/assets/home/media/Media6.webp`),
        },
        {
          index: "7",
          image: require(`@/assets/home/media/Media7.webp`),
        },
        {
          index: "8",
          image: require(`@/assets/home/media/Media8.webp`),
        },
        {
          index: "9",
          image: require(`@/assets/home/media/Media9.webp`),
        },
        {
          index: "10",
          image: require(`@/assets/home/media/Media10.webp`),
        },
      ],
      medias2: [
        {
          index: "1",
          image: "@/assets/home/media/Media1.webp",
        },
        {
          index: "2",
          image: `@/assets/home/media/Media2.webp`,
        },
        {
          index: "3",
          image: `@/assets/home/media/Media3.webp`,
        },
        {
          index: "4",
          image: `@/assets/home/media/Media5.webp`,
        },
        {
          index: "5",
          image: `@/assets/home/media/Media6.webp`,
        },
        {
          index: "6",
          image: `@/assets/home/media/Media7.webp`,
        },
        {
          index: "7",
          image: `@/assets/home/media/Media8.webp`,
        },
        {
          index: "8",
          image: `@/assets/home/media/Media9.webp`,
        },
        {
          index: "9",
          image: `@/assets/home/media/Media10.webp`,
        },
      ],
      loading: true,
      visibleImage: 0,
      imageInterval: null,
    };
  },

  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  beforeMount() {
    clearInterval(this.imageInterval);
  },
  methods: {
    setvisibleImage(index) {
      this.visibleImage = index;
    },
    next() {
      if (this.visibleImage >= this.medias.length - 1) {
        this.visibleImage = 0;
      } else {
        this.visibleImage++;
      }
    },

    prev() {
      if (this.visibleImage <= 0) {
        this.visibleImage = this.medias.length - 1;
      } else {
        this.visibleImage--;
      }
    },
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>
<style scoped>
.media {
  height: max-content;
  width: 100%;
  padding-top: 6%;
  padding-bottom: 6%;
  position: relative;
  background: linear-gradient(180deg, #4da9ff 0.52%, #0072dd 100%);
}
.media-title {
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
}
.overlay-Count {
  position: absolute;
  z-index: 999;
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
  margin-top: 12%;
}
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.slider {
  padding-top: 60px;
}
.media-image {
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
}
.media-image-detail {
  gap: 30px;
  display: flex;
  overflow-x: auto;
}
.media-image-responsive {
  display: none;
}
.media-image-responsive-mb {
  display: none;
}

.media-content {
  display: flex;
}
.media-section {
  display: flex;
  flex-direction: column;
}

.imageDetail {
  width: 1200px;
  height: 500px;
}
.v-dialog__content {
  padding-bottom: 200px;
}
.overlayContent {
  padding-top: 80px;
  row-gap: 50px;
}
.slider-overlay {
  padding-top: 20%;
}
.gap-50 {
  column-gap: 50px;
}
</style>
