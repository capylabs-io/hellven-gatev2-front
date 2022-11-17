<template>
  <div class="main-content">
    <introduction></introduction>
    <mode></mode>
    <hero></hero>
    <new></new>
    <media></media>
    <community></community>
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
</style>
