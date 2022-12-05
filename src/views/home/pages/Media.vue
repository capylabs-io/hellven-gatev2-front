<template>
  <div class="media d-lfex flex-column">
    <div class="media-title white--text bungee-font">
      <span>MEDIA</span>
    </div>
    
    <!--todo: add popup view image -->
    <div class="media-content pt-15 item-center px-15">
      <div class="media-image-responsive item-center">
        <card
          v-for="media in medias2"
          :key="media.index"
          v-bind:media="media"
        ></card>
      </div>
      <div class="media-image-responsive-mb item-center">
        <card
          v-for="media in medias"
          :key="media.index"
          v-bind:media="media"
        ></card>
      </div>
      <div class="media-section">
        <div class="slider">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/home/media/slide-left.webp`)"
          ></v-img>
        </div>
        <div class="media-image item-center">
          <card
            v-for="media in medias"
            :key="media.index"
            v-bind:media="media"
          ></card>
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
</template>

<script>
import Card from "@/views/home/components/media/Media-card.vue";
export default {
  name: "Media",

  components: {
    card: Card,
  },
  data() {
    return {
      medias: [
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
          image: `@/assets/home/media/Media4.webp`,
        },
        {
          index: "5",
          image: `@/assets/home/media/Media5.webp`,
        },
        {
          index: "6",
          image: `@/assets/home/media/Media6.webp`,
        },
        {
          index: "7",
          image: `@/assets/home/media/Media7.webp`,
        },
        {
          index: "8",
          image: `@/assets/home/media/Media8.webp`,
        },
        {
          index: "9",
          image: `@/assets/home/media/Media9.webp`,
        },
        {
          index: "10",
          image: `@/assets/home/media/Media10.webp`,
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
    };
  },
};
</script>
<style scoped>
.media {
  height: 770px;
  width: 100%;
  padding-top: 6%;
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
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.slider {
  padding-top: 9%;
}
.media-image {
  gap: 30px;
  display: flex;
  flex-wrap: wrap;
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
}
</style>
