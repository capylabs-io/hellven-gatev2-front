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
  metaInfo: {
    meta: [
      { charset: "utf-8" },
      {
        name: "description",
        content: "An example Vue application with vue-meta.",
      },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
    ],
  },
  data: () => ({}),
};
</script>
<style>
/*@font-face {
  font-family: "Bungee";
  src: local("Bungee"),
    url(./fonts/Bungee/Bungee-Regular.ttf) format("truetype");
}*/
@import url("https://fonts.googleapis.com/css2?family=Bungee&display=swap");
@font-face {
  font-family: "Kanit";
  src: local("Kanit"), url(./fonts/Kanit/Kanit-Regular.ttf) format("truetype");
}
.bungee-font {
  font-family: Bungee, sans-serif;
}
.kanit-font {
  font-family: Kanit, Helvetica, Arial;
}
@media screen and (min-width: 1264px) and (max-width: 1500px) {
  /* ------------------- home-fighter --------------*/
  .info-card {
    width: 42% !important;
  }
  /* ------------------- home-introduction --------------*/
  .btn-customize-introduction {
    height: 60px !important;
  }
  .introduction-title {
    max-width: 55% !important;
  }
  /* ------------------- home-mode --------------*/
  .mode-card {
    max-width: 29% !important;
  }
  /* ------------------- home-fighter --------------*/
  .fighter-card {
    column-gap: 8% !important;
  }

  /* ------------------- home-media --------------*/
  .media {
    height: fit-content !important;
    padding-bottom: 120px;
  }
}
@media screen and (max-width: 1364px) {
  .nav-link {
    width: 500px !important;
  }
}
@media screen and (max-width: 1264px) {
  /* ------------------- home-nav --------------*/
  .nav-image {
    max-width: 6% !important;
  }
  /* ------------------- home-introduction --------------*/
  .btn-customize-introduction {
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
  /* ------------------- home-fighter --------------*/
  .fighter {
    position: relative !important;
    height: max-content !important;
    padding-bottom: 70px;
  }

  .fighter-card {
    margin-top: 4% !important;
    column-gap: 8% !important;
  }
  .title-right {
    margin-left: auto !important;
  }
  .title-left {
    margin-right: auto !important;
  }
  .fighter-info {
    flex-direction: column;
    row-gap: 80px !important;
  }
  .flex-reverse {
    display: flex !important;
    flex-direction: column-reverse !important ;
  }
  .fighter-info-left {
    align-self: center;
    justify-content: center;
    column-gap: 20%;
  }
  .fighter-image {
    align-self: center;
  }
  .info-card {
    margin: 0 auto;
    width: 60% !important;
  }
  .slider-mb {
    display: block !important;
    object-fit: contain;
    align-self: center;
  }
  /* ------------------- home-new --------------*/
  .news {
    height: 650px !important;
  }
  .news-title {
  }
  .new-btn {
    margin-top: 6% !important;
  }
  .new-card {
    max-width: 30% !important;
    margin: 0 8px !important;
  }
  /* ------------------- home-media --------------*/
  .media {
    height: max-content !important;
    padding-bottom: 20px;
  }

  .media-content {
    flex-direction: column;
  }
  .media-image {
    display: none !important;
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
  .community-card {
    width: 85% !important;
  }
  .social-icon {
    width: 46% !important;
  }

  /* ------------------- home-footer --------------*/
  .v-footer {
    height: 340px !important;
  }
  .footer-top {
    padding-top: 1%;
    flex-direction: column;
    height: 78% !important;
    margin-bottom: 30px;
  }
  .footer-logo {
    max-width: 80% !important;
  }
  .logo-nav {
    padding-right: 70px !important;
  }
  .footer-top-right {
    justify-content: center;
    margin-top: 20px;
    width: 50% !important;
  }

  .footer-bottom-copyright {
    max-width: 300px !important;
  }
}
@media screen and (min-width: 961px) and (max-width: 1264px) {
  .nav-link {
    width: 400px !important;
  }
  /* ------------------- home-media --------------*/

  .media-image-responsive {
    display: flex !important;
    flex-wrap: wrap;
    gap: 30px;
  }
  .fighter-image {
    margin: 0 auto !important;
    margin-top: 2% !important;
    margin-left: 39% !important;
    max-width: 400px !important;
  }
  .shadow {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    max-width: 420px !important;
  }
  .news {
    height: max-content !important;
    padding-bottom: 30px !important;
  }
  .news-card {
    flex-direction: column;
    row-gap: 30px;
    align-items: center;
  }
  .new-card {
    max-width: 50% !important;
  }
}

@media screen and (max-width: 960px) {
  /* ------------------- home-nav --------------*/

  .nav-link {
    width: 278px !important;
  }
  .nav-container {
    font-size: smaller !important;
  }
  .btn-customize {
    font-size: smaller !important;
    width: 90%;
  }
  .v-toolbar__content {
    padding: 4px 0 !important;
  }
  /* ------------------- home-introduction --------------*/
  .introduction {
    padding-top: 100px !important;
    height: max-content !important;
    padding-bottom: 100px !important;
  }
  .btn-customize-introduction {
    height: 60px !important;
  }
  .introduction-title {
    margin-top: 5%;
    max-width: 80% !important;
  }
  .logo {
    width: 40% !important;
  }

  /* ------------------- home-mode --------------*/
  .mode {
    padding-top: 60px !important;
  }
  .mode-title {
    max-width: 16% !important;
  }

  .mode-card {
    max-width: 60% !important;
  }
  .mode-card-image {
    max-width: 22% !important;
  }
  /* ------------------- home-fighter --------------*/
  .fighter {
    margin-top: 50px !important;
  }

  .fighter-card-list-responsive {
    column-gap: 2%;
    display: flex !important;
    justify-content: space-around;
    max-width: 70% !important;
  }
  .info-card {
    margin: 0 auto;
    width: 90% !important;
  }

  .title-right .v-card__title {
    width: 200px !important;
  }

  /* ------------------- home-new --------------*/
  .news {
    height: 650px !important;
  }
  .news-title {
  }
  .new-btn {
    margin-top: 6% !important;
  }
  .new-card {
    max-width: 35% !important;
    margin: 0 8px !important;
  }

  /* ------------------- home-media --------------*/
  .media {
    height: max-content !important;
  }

  .media-image {
    display: none !important;
  }

  .media-section {
    margin: 0 auto;
    margin-top: 30px;
  }
  .media-card {
    width: 31% !important;
  }

  /* ------------------- home-community --------------*/

  .community-title {
    max-width: 40% !important;
  }
  .community-text {
    max-width: 80% !important;
  }
  .community-image {
    max-width: 50% !important;
  }
  .social-icon {
    margin-top: 6% !important;
    margin-left: 34% !important;
  }
  .community-btn {
    width: 60% !important;
  }

  /* ------------------- home-footer --------------*/

  .footer-top {
    padding-top: 4%;
    flex-direction: column;
    height: 90% !important;
  }
  .footer-logo {
    max-width: 100% !important;
  }
  .logo-nav {
    padding-right: 70px !important;
  }
  .footer-top-right {
    margin-top: 20px;
    justify-content: center;
  }
}
@media screen and (min-width: 600px) and (max-width: 960px) {
  /* ------------------- home-nav --------------*/
  .nav-image {
    max-width: 8% !important;
  }
  /* ------------------- home-news --------------*/
  .news {
    height: max-content !important;
    padding-bottom: 30px !important;
  }
  .news-card {
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 25px;
    align-items: center;
  }
  .new-card {
    max-width: 47% !important;
  }
  /* ------------------- home-media --------------*/
  .media-image-responsive {
    display: flex !important;
    flex-wrap: wrap;
    gap: 16px;
  }
  /* ------------------- home-fighter --------------*/
  .fighter-image {
    margin: 0 auto !important;
    margin-top: 2% !important;
    margin-left: 34% !important;
    max-width: 410px !important;
  }
  .shadow {
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    text-align: center;
    max-width: 420px !important;
  }
  .fighter-info-left {
    align-self: center;
    justify-content: center;
    column-gap: 20%;
  }
}
@media screen and (max-width: 747px) {
  .nav-image {
    max-width: 20% !important;
  }
  .nav-link {
    display: none !important;
  }

  .nav-btn-responsive {
    justify-content: flex-end;
    display: flex !important;
    align-items: center;
    margin-left: auto;
  }

  .nav-lang-responsive {
    display: block !important;
  }
  .drawer {
    display: block !important;
  }
}
@media screen and (max-width: 599px) {
  /* ------------------- home-nav --------------*/

  .nav-link {
    display: none !important;
  }
  .nav-right {
  }
  .nav-btn-responsive {
    justify-content: flex-end;
    display: flex !important;
    align-items: center;
    margin-left: auto;
  }

  .nav-lang-responsive {
    display: block !important;
  }
  .drawer {
    display: block !important;
  }
  /* ------------------- home-introduction --------------*/

  .btn-customize-introduction {
    height: 60px !important;
  }
  .introduction-title {
    max-width: 85% !important;
    font-size: 20px !important;
  }
  /* ------------------- home-mode --------------*/
  .mode-card {
    max-width: 86% !important;
  }
  .mode-card-image {
    max-width: 20% !important;
  }
  /* ------------------- home-fighter --------------*/
  .fighter {
    margin-top: 50px !important;
  }
  .shadow {
    width: 80%;
  }

  .fighter-card {
  }
  .fighter-card-mb {
    display: flex !important;
    margin-top: 6%;
    column-gap: 3%;
    justify-content: center;
  }
  .fighter-card-list-responsive-mb {
    column-gap: 7px;
    display: flex !important;
    justify-content: space-around;
    max-width: 70% !important;
  }
  .fighter-card-list-responsive-mb .v-card {
    width: 23% !important ;
  }
  .fighter-info-left {
    width: 90% !important;
  }
  .slider-mb {
    padding-top: 10px;
    display: block !important;
  }
  .info-card {
    margin: 0 auto;
    width: 95% !important;
  }
  .fighter-ability {
    column-gap: 65px !important;
  }
  .fighter-ability-text {
    column-gap: 35px !important;
    font-size: 12px !important;
  }
  .statistic {
    display: none !important;
  }
  .statistic-responsive {
    display: block !important;
  }
  .fighter-info-left {
    align-self: center;
    justify-content: center;
    column-gap: 10px;
  }
  /* ------------------- home-news --------------*/
  .news {
    height: max-content !important;
    padding-bottom: 30px !important;
  }
  .news-card {
    flex-direction: column;
    row-gap: 25px;
    align-items: center;
  }
  .new-card {
    max-width: 88% !important;
  }
  /* ------------------- home-media --------------*/
  .media-card {
    width: 83% !important;
  }
  .media-image-responsive-mb {
    display: flex !important;
    flex-wrap: wrap;
    gap: 9px;
  }
  /* ------------------- home-community --------------*/
  .community {
    height: max-content !important;
    padding-bottom: 20px !important;
  }

  .community-text {
    font-size: 15px !important;
  }
  .social-icon {
    width: 78% !important;
  }
  /* ------------------- home-footer --------------*/
  .footer-top {
    padding-top: 4%;
    flex-direction: column;
    height: max-content !important;
  }
  .footer-bottom {
    flex-direction: column !important;
  }
  .logo-nav {
    padding-right: 70px !important;
  }
  .footer-top-right {
    width: 40% !important;
    justify-content: center;
  }
}
@media screen and (min-width: 400px) and (max-width: 599px) {
  /* ------------------- home-nav --------------*/

  .nav-image {
    max-width: 20% !important;
  }
  /* ------------------- home-fighter --------------*/
  .statistic-image {
    max-width: 79% !important;
  }

  /* ------------------- home-footer --------------*/
  .footer-top-right {
    width: 40% !important;
  }

  .community-btn {
    width: 80% !important;
  }
}
@media screen and (max-width: 399px) {
  .btn-customize-introduction {
    height: 60px !important;
  }

  .community-btn {
    width: 90% !important;
  }
  .mode-card-image {
    max-width: 26% !important;
  }
  .nav-image {
    max-width: 25% !important;
  }
  /* .mode-title {
    max-width: 27% !important;
  }
  .news-title {
    max-width: 27% !important;
  }
  .media-title {
    max-width: 27% !important;
  }
  .community-title {
    max-width: 27% !important;
  } */
}
</style>
