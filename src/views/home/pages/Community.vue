<template>
  <div
    class="community d-lfex flex-column item-center text-center"
    v-bind:style="{
      backgroundImage:
        'url(' + require('@/assets/community-background.webp') + ')',
    }"
  >
    <div
      v-scrollanimation
      class="community-title bungee-font white--text fade-bottom"
    >
      <span>JOIN THE COMMUNITY</span>
    </div>
    <!-- <v-img
      :src="require(`@/assets/home/community/community-title.webp`)"
    ></v-img> -->
    <v-card v-scrollanimation class="community-card mx-auto mt-10 fade-bottom">
      <div class="item-center kanit-font mx-auto text-break community-text">
        <p>
          {{ $t("community.text") }}
        </p>
      </div>
      <!-- <v-btn
        color="violet"
        class="community-btn white--text btn-customize bungee-font"
        height="70px"
      >
        <div class="text-break btn-title mb-4 ml-4 mr-2">
          <p class="clear-margin">{{ $t("community.btndiscordtext1") }}</p>
          <p class="clear-margin">{{ $t("community.btndiscordtext2") }}</p>
        </div>
        <v-img
          class="align-seft-center ml-3 mr-4"
          max-width="60%"
          :src="require(`@/assets/home/community/discord-btn-logo.webp`)"
        ></v-img>
      </v-btn> -->

      <div class="d-flex social-icon mx-auto flex-wrap">
        <v-img
          class="align-seft-center community-image"
          :src="require(`@/assets/home/community/facebook-icon.webp`)"
        ></v-img>
        <v-img
          class="align-seft-center community-image"
          :src="require(`@/assets/home/community/twitter-icon.webp`)"
        ></v-img>
        <v-img
          class="align-seft-center community-image"
          :src="require(`@/assets/home/community/discord-icon.webp`)"
        ></v-img>
        <v-img
          class="align-seft-center community-image"
          :src="require(`@/assets/home/community/youtube-icon.webp`)"
        ></v-img>
      </div>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
<style scoped>
.community {
  height: max-content;
  width: 100%;
  padding-top: 6%;
  padding-bottom: 6%;
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
.community-text {
  max-width: 85%;
  font-size: 23px;
}
.community-title {
  max-width: 16%;
  font-size: larger;
  margin: 0 auto;
  background-color: black;
  width: max-content;
  padding: 15px;
  transform: skew(-5deg, 0deg);
  box-shadow: 8px 7px 0px -2px rgba(0, 0, 0, 0.2);
}
.community-image {
  width: 48px;
  max-height: max-content;
}
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.btn-customize {
  border-radius: 15px;
  box-shadow: 0px 8px 1px 0px #4b56ba;
}
.community-btn {
  margin: 0 auto;
  margin-top: 2%;
}
.community-btn-responsive {
  display: none;
  margin: 0 auto;
  margin-top: 2%;
}
.btn-title {
  font-size: 16px;
  max-width: 150px;
  align-items: center;
}
.clear-margin {
  margin: 0;
  height: 22px;
}
.social-icon {
  align-items: center;
  width: 40%;
  margin-top: 3%;
  column-gap: 5%;
  object-fit: cover;
}
.community-card {
  padding: 17px;
  width: 60%;
  height: max-content;
  border-radius: 16px;
  box-shadow: 0px 6px 1px 0px #d9d9d9 !important;
}
</style>
