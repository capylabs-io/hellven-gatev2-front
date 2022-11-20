<template>
  <v-app-bar
    class="bungee-font"
    width="100%"
    height="80px"
    app
    flat
    color="blue1"
  >
    <div class="nav-container mx-auto white--text" style="min-width: 93%">
      <v-row class="d-flex align-center">
        <v-col col="3">
          <div class="nav-left justify-start">
            <v-img
              class="nav-image"
              :src="require(`@/assets/nav/Logo.webp`)"
            ></v-img>
            <div class="nav-link">
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
              <div class="text-none align-seft-center">
                {{ $t("navbar.new") }}
              </div>
            </div>
          </div>
        </v-col>
        <v-col col="3">
          <LanguageSwitch class="nav-lang-responsive"></LanguageSwitch>
        </v-col>
        <v-col col="3">
          <div class="nav-right">
            <div>
              <LanguageSwitch></LanguageSwitch>
            </div>
            <div class="d-flex align-center">
              <v-btn color="violet" class="white--text btn-customize">
                <v-img
                  class="align-seft-center mr-2"
                  max-width="18px"
                  :src="require(`@/assets/nav/discord-icon.webp`)"
                ></v-img>
                <span>{{ $t("navbar.btndiscord") }}</span>
              </v-btn>
            </div>
          </div>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <div class="d-flex align-center ml-4">
                <v-btn
                  icon
                  elevation="0"
                  v-bind="attrs"
                  v-on="on"
                  class="nav-btn-responsive"
                >
                  <v-icon color="white"> mdi-format-list-bulleted </v-icon>
                </v-btn>
              </div>
            </template>
            <v-list class="gray12">
              <v-list-item>
                <v-list-item-title>Game</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title>Heroes</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> {{ $t("navbar.media") }}</v-list-item-title>
              </v-list-item>
              <v-list-item>
                <v-list-item-title> {{ $t("navbar.new") }} </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </div>
  </v-app-bar>
</template>

<script>
import LanguageSwitch from "@/views/home/components/nav-bar/LanguageSwitch.vue";

export default {
  openLink(url) {
    window.open(url, "_blank");
  },
  components: { LanguageSwitch },
};
</script>

<style scoped>
.nav-container {
  font-size: large;
}
.nav-left {
  display: flex;
  column-gap: 3%;
}
.nav-right {
  justify-content: flex-end;
  display: flex;
  column-gap: 3%;
  align-items: center;
}

.btn-customize {
  border-radius: 15px;
  box-shadow: 0px 6px 1px 0px #4b56ba;
  height: 45px !important;
}
.nav-image {
  max-width: 5%;
  align-self: center;
}
.nav-link {
  display: flex;
  column-gap: 12px;
}
.nav-btn-responsive {
  display: none;
}
.nav-lang-responsive {
  display: none;
}
</style>
