<template>
  <v-app>
    <app-navbar></app-navbar>
    <v-main>
      <router-view />
    </v-main>
    <app-footer></app-footer>
  </v-app>
</template>

<script>
import Footer from "../src/components/Footer.vue";
import NavigationBar from "../src/components/NavigationBar.vue";
export default {
  name: "App",
  components: {
    "app-navbar": NavigationBar,
    "app-footer": Footer,
  },
  data: () => ({
    //
  }),
};
</script>
<style>
@font-face {
  font-family: "Bungee";
  src: local("Bungee"),
    url(./fonts/Bungee/Bungee-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Kanit";
  src: local("Kanit"), url(./fonts/Kanit/Kanit-Regular.ttf) format("truetype");
}
</style>
