<template>
  <v-app-bar
    class="bungee-font"
    width="100%"
    height="80px"
    app
    flat
    color="black"
  >
    <div class="nav-container mx-auto white--text" style="min-width: 93%">
      <v-row class="d-flex align-center">
        <v-col col="3">
          <div class="nav-left justify-start">
            <v-img
              class="nav-image"
              :src="require(`@/assets/game-logo-v2.webp`)"
            ></v-img>
            <div class="nav-link">
              <div class="text-none">
                <span>GAME</span>
                <v-icon class="pb-2 pl-2" small color="white">
                  mdi-chevron-down
                </v-icon>
              </div>
              <div class="text-none">
                <span>GUIDE</span>
                <v-icon class="pb-2 pl-2" small color="white">
                  mdi-chevron-down
                </v-icon>
              </div>
              <!-- <div class="text-none align-seft-center">HEROES</div> -->
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
        <LanguageSwitch class="nav-lang-responsive"></LanguageSwitch>
        <v-col col="3">
          <div class="nav-right">
            <div>
              <LanguageSwitch></LanguageSwitch>
            </div>
            <div class="align-center">
              <v-btn color="darkgrey" class="white--text btn-customize gap-20">
                <span>{{ $t("navbar.btnlogin") }}</span>
              </v-btn>
            </div>

            <div class="d-flex align-center">
              <v-btn color="violet" class="white--text btn-customize">
                <!-- <v-img
                  class="align-seft-center mr-2"
                  max-width="18px"
                  :src="require(`@/assets/nav/discord-icon.webp`)"
                ></v-img> -->
                <span>{{ $t("navbar.btnplay") }}</span>
              </v-btn>
            </div>
          </div>

          <v-app-bar-nav-icon
            color="white"
            class="nav-btn-responsive"
            @click.stop="drawer = !drawer"
          ></v-app-bar-nav-icon>

          <v-navigation-drawer
            app
            v-model="drawer"
            right
            hide-overlay
            color="black"
          >
            <v-list nav dense>
              <v-list-item-group v-model="group" active-class=" text--accent-4">
                <v-list-item class="white--text pb-2">
                  <v-list-item-title>
                    <v-img
                      class="align-seft-center drawer-logo"
                      :src="require(`@/assets/fighter-force.webp`)"
                    ></v-img
                  ></v-list-item-title>
                </v-list-item>
                <v-list-item class="white--text">
                  <v-list-item-title
                    ><span>GAME</span>
                    <v-icon class="pb-2 pl-2" small color="white">
                      mdi-chevron-down
                    </v-icon>
                  </v-list-item-title>
                </v-list-item>

                <v-list-item class="white--text">
                  <v-list-item-title>Heroes</v-list-item-title>
                </v-list-item>

                <v-list-item class="white--text">
                  <v-list-item-title>{{
                    $t("navbar.media")
                  }}</v-list-item-title>
                </v-list-item>

                <v-list-item class="white--text">
                  <v-list-item-title>{{ $t("navbar.new") }}</v-list-item-title>
                </v-list-item>
              </v-list-item-group>
            </v-list>
          </v-navigation-drawer>
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
  data: () => ({
    drawer: false,
    group: null,
  }),

  watch: {
    group() {
      this.drawer = false;
    },
  },
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
  justify-content: center;
  display: none;
}
.nav-lang-responsive {
  display: none;
}
.drawer {
  display: none;
}
.drawer-logo {
  margin: 0 auto;
  max-width: 80%;
}
.gap-20 {
  column-gap: 20px;
}
</style>
