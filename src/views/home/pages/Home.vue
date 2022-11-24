<template>
  <div class="main-content">
    <introduction v-scrollanimation> </introduction>
    <mode v-scrollanimation></mode>
    <hero v-scrollanimation class="fade-right"></hero>
    <new v-scrollanimation></new>
    <media v-scrollanimation class="fade-left"></media>
    <community v-scrollanimation class="fade-bottom"></community>
    <!-- <p class="mt-4" v-html="$t('about.content')" /> -->
  </div>
</template>

<script>
import Introduction from "./Introduction.vue";
import Mode from "./Mode.vue";
import News from "./News.vue";
import Media from "./Media.vue";
import Community from "./Community.vue";
import Hero from "./Hero.vue";
export default {
  name: "Home",

  components: {
    introduction: Introduction,
    mode: Mode,
    new: News,
    media: Media,
    community: Community,
    hero: Hero,
  },
};
</script>

<style scoped>
.main-content {
  width: 100%;
  height: 100%;
  background-color: #eaeef4;
  background-size: 100%;
  background-repeat: no-repeat;
}

.unactive {
  position: relative;
  transform: translateY(150px);
  opacity: 0;
  transition: 1s all ease;
}

.active {
  transform: translateY(0);
  opacity: 1;
}
.active.fade-bottom {
  animation: fade-bottom 1s ease-in;
}
.active.fade-left {
  animation: fade-left 1s ease-in;
}
.active.fade-right {
  animation: fade-right 1s ease-in;
}
@keyframes fade-bottom {
  0% {
    transform: translateY(50px);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes fade-left {
  0% {
    transform: translateX(-100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes fade-right {
  0% {
    transform: translateX(100px);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
