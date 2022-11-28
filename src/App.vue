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
@media screen and (min-width: 1264px) and (max-width: 1500px) {
  /* ------------------- home-hero --------------*/
  .info-card {
    width: 42% !important;
  }
  /* ------------------- home-introduction --------------*/
  .btn-customize-introduction {
    width: 16% !important;
    height: 60px !important;
  }
  .introduction-title {
    max-width: 55% !important;
  }
  /* ------------------- home-mode --------------*/
  .mode-card {
    max-width: 29% !important;
  }
  /* ------------------- home-hero --------------*/
  .hero-card {
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
  .title-right {
    margin-left: auto !important;
  }
  .title-left {
    margin-right: auto !important;
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
  .info-card {
    margin: 0 auto;
    width: 60% !important;
  }

  /* ------------------- home-new --------------*/
  .news {
    height: 650px !important;
  }
  .news-title {
    max-width: 10% !important;
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
  .media-title {
    max-width: 10% !important;
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
  .hero-image {
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
    width: 25% !important;
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
  /* ------------------- home-hero --------------*/
  .hero {
    margin-top: 50px !important;
  }
  .hero-card-list {
    display: none !important;
  }
  .hero-card-list-responsive {
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
  .hero-title {
    max-width: 16% !important;
  }
  /* ------------------- home-new --------------*/
  .news {
    height: 650px !important;
  }
  .news-title {
    max-width: 16% !important;
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
  .media-title {
    max-width: 16% !important;
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
    width: 46% !important;
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
  /* ------------------- home-hero --------------*/
  .hero-image {
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
  .hero-info-left {
    justify-content: center !important;
  }
}
@media screen and (max-width: 747px) {
  .nav-image {
    max-width: 20% !important;
  }
  .nav-link {
    display: none !important;
  }
  .nav-right {
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
  /* ------------------- home-introduction --------------*/

  .btn-customize-introduction {
    width: 45% !important;
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
  /* ------------------- home-hero --------------*/
  .hero {
    margin-top: 50px !important;
  }
  .shadow {
    width: 80%;
  }
  .hero-card-list {
    display: none !important;
  }
  .hero-card {
    display: none !important;
  }
  .hero-card-mb {
    display: flex !important;
    margin-top: 6%;
    column-gap: 3%;
    justify-content: center;
  }
  .hero-card-list-responsive-mb {
    column-gap: 7px;
    display: flex !important;
    justify-content: space-around;
    max-width: 70% !important;
  }
  .hero-card-list-responsive-mb .v-card {
    width: 23% !important ;
  }
  .slider-mb {
    padding-top: 10px;
    display: block !important;
  }
  .info-card {
    margin: 0 auto;
    width: 95% !important;
  }
  .hero-ability {
    column-gap: 65px !important;
  }
  .hero-ability-text {
    column-gap: 35px !important;
    font-size: 12px !important;
  }
  .statistic {
    display: none !important;
  }
  .statistic-responsive {
    display: block !important;
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
    width: 80% !important;
  }
}
@media screen and (min-width: 400px) and (max-width: 599px) {
  /* ------------------- home-nav --------------*/

  .nav-image {
    max-width: 23% !important;
  }
  /* ------------------- home-hero --------------*/
  .statistic-image {
    max-width: 79% !important;
  }

  /* ------------------- home-footer --------------*/
  .footer-top-right {
    width: 72% !important;
  }

  .community-btn {
    width: 78% !important; 
  }
}
@media screen and (max-width: 399px) {
  .btn-customize-introduction {
    width: 60% !important;
    height: 60px !important;
  }
  
  .community-btn {
    width: 90% !important; 
  }
  .mode-card-image {
    max-width: 26% !important;
  }
  .nav-image {
    max-width: 37% !important;
  }
  .mode-title {
    max-width: 27% !important;
  }
  .hero-title {
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
  }
}
</style>
