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
          <div class="nav-left justify-start align-center">
            <v-img
              class="nav-image cursor"
              :src="require(`@/assets/game-logo-v2.webp`)"
              @click="gotoRouter('home')"
            />
            <!--todo: add padding for each navbar -->
            <div class="nav-link">
              <v-menu
                open-on-hover
                bottom
                offset-y
                transition="scale-transition"
              >
                <template v-slot:activator="{ on, attrs }">
                  <div
                    class="text-none d-flex align-center gap-5 cursor"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <div>
                      <span>GAME</span>
                    </div>
                    <v-icon class="" small color="white">
                      mdi-chevron-down
                    </v-icon>
                  </div>
                </template>
                <v-list color="black">
                  <v-list-item class="white--text">
                    <v-list-item-title class="px-2 bungee-font">
                      <span>How to play</span>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    class="white--text"
                    @click="gotoRouter('modes')"
                  >
                    <v-list-item-title class="px-2 bungee-font">
                      <span>MODES</span>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>

              <v-menu open-on-hover offset-y transition="scale-transition">
                <template v-slot:activator="{ on, attrs }">
                  <div
                    class="text-none d-flex align-center gap-5 cursor"
                    v-bind="attrs"
                    v-on="on"
                  >
                    <div>
                      <span>GUIDE</span>
                    </div>
                    <v-icon class="" small color="white">
                      mdi-chevron-down
                    </v-icon>
                  </div>
                </template>
                <v-list color="black">
                  <v-list-item
                    class="white--text"
                    @click="gotoRouter('fighters')"
                  >
                    <v-list-item-title class="px-2 bungee-font">
                      <span>Fighters</span>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item class="white--text" @click="gotoRouter('spell')">
                    <v-list-item-title class="px-2 bungee-font">
                      <span>Spells</span>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    class="white--text"
                    @click="gotoRouter('boosters')"
                  >
                    <v-list-item-title class="px-2 bungee-font">
                      <span>Booster</span>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item
                    class="white--text"
                    @click="gotoRouter('towers')"
                  >
                    <v-list-item-title class="px-2 bungee-font">
                      <span>Towers</span>
                    </v-list-item-title>
                  </v-list-item>
                  <v-list-item class="white--text" @click="gotoRouter('runes')">
                    <v-list-item-title class="px-2 bungee-font">
                      <span>Runes</span>
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
              <!-- <div class="text-none align-seft-center">HEROES</div> -->
              <!-- <router-link :to="`/${$i18n.locale}/about`" class="text-copy-primary hover:text-gray-600">About</router-link> -->
              <div class="text-none cursor">
                {{ $t("navbar.media") }}
              </div>
              <div class="cursor text-none" @click="gotoRouter('news')">
                {{ $t("navbar.new") }}
              </div>
            </div>
          </div>
        </v-col>
        <!-- <LanguageSwitch class="nav-lang-responsive"></LanguageSwitch> -->
        <v-col col="3">
          <div
            class="nav-right align-center d-flex justify-end"
            v-if="windowWidth >= 748"
          >
            <!-- <div>
              <LanguageSwitch></LanguageSwitch>
            </div> -->
            <div class="align-center">
              <v-btn color="darkgrey" class="white--text btn-customize">
                <span>{{ $t("navbar.btnlogin") }}</span>
              </v-btn>
            </div>

            <div class="d-flex align-center">
              <v-btn
                color="violet"
                class="white--text btn-customize"
                @click="gotoRouter('comingsoon')"
              >
                <span>{{ $t("navbar.btnplay") }}</span>
              </v-btn>
            </div>
          </div>

          <v-app-bar-nav-icon
            color="white"
            class="nav-btn-responsive"
            @click.stop="drawer = !drawer"
            v-else
          ></v-app-bar-nav-icon>

          <v-navigation-drawer
            app
            v-model="drawer"
            right
            hide-overlay
            color="black"
            v-if="windowWidth <= 748"
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
                  <v-list-item-title class="d-flex align-center"
                    ><span>GAME</span>
                    <v-icon class="" small color="white">
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
// import LanguageSwitch from "@/views/home/components/nav-bar/LanguageSwitch.vue";
// import i18n from "@/i18n";
export default {
  // components: { LanguageSwitch },
  data: () => ({
    drawer: false,
    group: null,
    windowWidth: 0,
  }),
  created() {
    window.addEventListener("resize", this.handleResize);
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener("resize", this.handleResize);
  },
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
    gotoRouter(url) {
      this.$router.push({
        name: url,
      });
    },
    // gotoRouter(url) {
    //   this.$router.push({
    //     params: { lang: i18n.locale },
    //     name: url,
    //   });
    // },
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
  },
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
  column-gap: 1%;
}

.btn-customize {
  border-radius: 8px;
  height: 45px !important;
}
.nav-image {
  max-width: 5%;
  align-self: center;
}
.nav-link {
  display: flex;
  column-gap: 20px;
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
.gap-10 {
  column-gap: 10px;
}
.gap-5 {
  column-gap: 5px;
}
.cursor {
  cursor: pointer;
}
</style>
