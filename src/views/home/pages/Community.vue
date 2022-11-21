<template>
  <div class="community d-lfex flex-column item-center text-center">
    <div class="community-title">
      <v-img :src="require(`@/assets/community/community-title.webp`)"></v-img>
    </div>
    <div class="pt-10 item-center kanit-font mx-auto text-break community-text">
      <p>
        {{ $t("community.text") }}
      </p>
    </div>
    <v-btn
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
        :src="require(`@/assets/community/discord-btn-logo.webp`)"
      ></v-img>
    </v-btn>

    <v-btn
      color="violet"
      height="45px"
      class="white--text community-btn-responsive btn-customize"
    >
      <v-img
        class="align-seft-center mr-2"
        max-width="18px"
        :src="require(`@/assets/nav/discord-icon.webp`)"
      ></v-img>
      <span>{{ $t("navbar.btndiscord") }}</span>
    </v-btn>
    <div class="d-flex social-icon">
      <v-img
        class="align-seft-center community-image"
        :src="require(`@/assets/community/facebook-icon.webp`)"
      ></v-img>
      <v-img
        class="align-seft-center community-image"
        max-width="20%"
        :src="require(`@/assets/community/twitter-icon.webp`)"
      ></v-img>
      <v-img
        class="align-seft-center community-image"
        max-width="20%"
        :src="require(`@/assets/community/discord-icon.webp`)"
      ></v-img>
      <v-img
        class="align-seft-center community-image"
        max-width="20%"
        :src="require(`@/assets/community/youtube-icon.webp`)"
      ></v-img>
    </div>
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
  height: 650px;
  width: 100%;
  padding-top: 6%;
  position: relative;
  background: transparent;
}
.community-text {
  max-width: 35%;
  font-size: 20px;
}
.community-title {
  max-width: 16%;
  margin: 0 auto;
}
.community-image {
  max-width: 20%;
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
  max-width: 15%;
  margin-left: 43%;
  margin-top: 3%;
  column-gap: 5%;
}
</style>
