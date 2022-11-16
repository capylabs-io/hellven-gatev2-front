<template>
  <v-app-bar
    class="bungee-font"
    height="80px"
    style="z-index: 99,max-width:100%,"
    app
    flat
    color="blue1"
  >
    <div class="nav-container ml-13 text-s white--text" style="min-width: 95%">
      <v-row class="d-flex align-center justify-space-between">
        <v-col col="8" class="d-inline-flex nav-gap">
          <v-img
            class="align-seft-center"
            max-width="30px"
            :src="require(`@/assets/nav/Logo.webp`)"
          ></v-img>
          <div class="text-none">
            <span>GAME</span>
            <v-icon class="pb-2 pl-2" small color="white">
              mdi-chevron-down
            </v-icon>
          </div>
          <div class="text-none align-seft-center">HEROES</div>
          <!-- <router-link :to="`/${$i18n.locale}/about`" class="text-copy-primary hover:text-gray-600">About</router-link> -->
          <div class="text-none align-seft-center">
            {{ $t("navbar.media") }}
          </div>
          <div class="text-none align-seft-center">{{ $t("navbar.new") }}</div>
        </v-col>
        <v-col col="3">
          <div class="d-flex align-center justify-end nav-right">
            <div>
              <LanguageSwitch></LanguageSwitch>
            </div>
            <div class="d-flex align-center">
              <v-btn
                color="violet"
                class="white--text btn-customize"
                height="45px"
              >
                <v-img
                  class="align-seft-center mr-2"
                  max-width="18px"
                  :src="require(`@/assets/nav/discord-icon.webp`)"
                ></v-img>
                <span>{{ $t("navbar.btndiscord") }}</span>
              </v-btn>
            </div>
          </div>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
import LanguageSwitch from "@/views/home/pages/LanguageSwitch.vue";

export default {
  openLink(url) {
    window.open(url, "_blank");
  },
  components: { LanguageSwitch },
};
</script>

<style scoped>
.nav-container {
  max-width: 1562px;
}
.nav-gap {
  column-gap: 3%;
}
.nav-right{
  column-gap: 3%;
}
.bungee-font {
  font-family: Bungee, Helvetica, Arial;
}
.kanit-font {
  font-family: Kanit, Helvetica, Arial;
}
.btn-customize {
  border-radius: 15px;
  box-shadow: 0px 6px 1px 0px #4b56ba;
}
</style>
