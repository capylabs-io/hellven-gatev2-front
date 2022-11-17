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
.bungee-font {
  font-family: Bungee, Helvetica, Arial;
}
.kanit-font {
  font-family: Kanit, Helvetica, Arial;
}
@media screen and (max-width: 1264px) {
  /* ------------------- home-introduction --------------*/
  .btn-customize-introduction {
    width: 16% !important;
    height: 60px !important;
  }
  .introduction-title {
    max-width: 55% !important;
  }
  /* ------------------- home-mode --------------*/
  .mode {
    height: max-content !important;
    padding-top: 2% !important;
  }
  .mode-title {
    max-width: 10% !important;
  }
  .mode-list {
    flex-direction: column;
    row-gap: 50px !important;
    column-gap: 0 !important;
    align-items: center;
  }
  .mode-card {
    max-width: 35% !important;
  }
  /* ------------------- home-hero --------------*/
  .hero {
    position: relative !important;
    height: fit-content !important;
    padding-bottom: 70px;
  }
  .hero-title {
    max-width: 10% !important;
  }
  .hero-card {
    margin-top: 4% !important;
    column-gap: 8% !important;
  }
  .hero-info {
    flex-direction: column;
    row-gap: 80px !important;
  }
  .flex-reverse {
    display: flex !important;
    flex-direction: column-reverse !important ;
  }
  .hero-image {
    align-self: center;
  }
  .hero-info-card {
    width: 50%;
    margin: 0 auto;
  }
  /* ------------------- home-new --------------*/
  .news {
    height: 650px !important;
  }
  .news-title {
    max-width: 10% !important;
  }
  /* ------------------- home-media --------------*/
  .media {
    height: 900px !important;
  }
  .media-title {
    max-width: 10% !important;
  }
  .media-content {
    flex-direction: column;
  }
  .media-image {
    display: none !important;
  }
  .media-image-responsive {
    display: flex !important;
    flex-wrap: wrap;
    gap: 30px;
  }
  .slider {
    padding-top: 2% !important;
    width: fit-content;
  }
  .media-section {
    column-gap: 20% !important;
    margin: 0 auto;
    margin-top: 30px;
  }
  .media-card {
    width: 25% !important;
  }
  /* ------------------- home-community --------------*/
  .community {
    height: 600px !important;
  }
  .community-title {
    max-width: 25% !important;
  }
  .community-text {
    max-width: 50% !important;
  }
  .community-image {
    max-width: 30% !important;
  }
  .social-icon {
    margin-left: 40% !important;
  }

  /* ------------------- home-footer --------------*/
  .v-footer {
    height: 340px !important;
  }
  .footer-top {
    padding-top: 1%;
    flex-direction: column;
    height: 78% !important;
  }
  .footer-logo {
    max-width: 80% !important;
  }
  .logo-nav {
    padding-right: 70px !important;
  }
  .footer-top-right {
    margin-top: 20px;
    width: 30% !important;
  }
  .footer-bottom {
    width: max-content !important;
    gap: 720px !important;
  }
  .footer-bottom-copyright {
    max-width: 300px !important;
  }
}
@media screen and (min-width: 960px) and (max-width: 1264px) {
}
@media screen and (max-width: 600px) {
}
@media screen and (min-width: 600px) and (max-width: 960px) {
}
</style>
