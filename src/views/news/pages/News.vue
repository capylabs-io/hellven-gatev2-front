<template>
  <div class="main-content">
    <div class="content d-flex flex-column">
      <div class="news-title white--text bungee-font mx-auto mt-10">
        <span>NEWS</span>
      </div>
      <div
        class="news-link white--text bungee-font d-flex mt-5 flex-wrap mx-auto"
      >
        <div class="box text-none align-seft-center link-active">
          change log
        </div>
        <div class="box text-none align-seft-center">event</div>
      </div>
      <div class="d-flex flex-wrap gap-40 justify-center news-list mx-auto">
        <card v-for="(news, index) in news" :key="index" :news="news"> </card>
      </div>
      <div class="text-center">
        <v-pagination
          v-model="page"
          :length="4"
          circle
          color="violet"
        ></v-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import newCard from "../components/new-card.vue";
export default {
  setup() {
    return {};
  },
  components: {
    card: newCard,
  },
  data() {
    return {
      page: 1,
      news: [
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
        },
        {
          image: require(`@/assets/home/news/new1-image.webp`),
          name: "WAS THE HARDEST CHALLENGE EVER TOO EASY FOR YOU?",
          descript: "10 Oct 2022",
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
  background-color: #f8f8f8;
}
.content {
  position: relative;
  width: 100%;
  height: max-content;
  row-gap: 50px;
}
.news-content {
  width: 100%;
  height: 380px;
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
.news-title {
  width: max-content;
  margin: 0 auto;
  background-color: black;
  font-size: x-large;
  padding: 12px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
}
.news-list {
  width: 85%;
}
.news-text {
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
.news-link {
  width: max-content;
  column-gap: 30px;
  background-color: black;
  padding: 10px;
  border-radius: 15px;
  justify-content: center;
}
.box {
  padding: 10px;
}
.gap-100 {
  column-gap: 100px;
}
.gap-40 {
  gap: 40px;
}
.link-active {
  border-radius: 15px;
  background-color: #5e6be9;
  height: max-content;
  color: white;
}
</style>
