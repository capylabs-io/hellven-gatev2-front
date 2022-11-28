<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <v-footer height="300px" width="100%" color="black">
    <div class="footer-container d-flex flex-column align-center">
      <div class="footer-top white--text align-center justify-space-between">
        <div
          class="footer-top-left d-flex flex-column align-center"
          style="row-gap: 20px"
        >
          <v-img
            class="align-seft-center footer-logo"
            :src="require(`@/assets/fighter-force.webp`)"
          ></v-img>
          <div class="logo-nav">
            <div class="text-none d-flex">
              <span>GAME</span>
              <v-icon class="pb-2 pl-2" small color="white">
                mdi-chevron-down
              </v-icon>
            </div>
            <div class="text-none align-seft-center">HEROES</div>
            <div class="text-none align-seft-center">MEDIA</div>
            <div class="text-none align-seft-center">NEWS</div>
          </div>
        </div>
        <div class="footer-top-right">
          <v-img
            class="align-seft-center mr-2 footer-image"
            :src="require(`@/assets/footer/AppStore_ft.webp`)"
          ></v-img>
          <v-img
            class="align-seft-center footer-image"
            :src="require(`@/assets/footer/Anroid_ft.webp`)"
          ></v-img>
        </div>
      </div>

      <hr />
      <div class="footer-bottom white--text d-flex mt-5">
        <div class="footer-bottom-copyright">
          <p class="font-weight-lighter">
            Copyright © 2022 Capy Lab. All Rights Reserved
          </p>
        </div>
        <div class="d-flex font-weight-bold" style="gap: 20px">
          <div class="text-none align-seft-center">Terms</div>
          <div class="text-none align-seft-center">Privacy</div>
          <div class="text-none align-seft-center">Cookies</div>
        </div>
      </div>
    </div>
  </v-footer>
</template>
<script>
export default {
  methods: {
    openLink(url) {
      window.open(url, "_blank");
    },
  },
};
</script>

<style scoped>
.footer-container {
  width: 100%;
  position: relative;
  height: 100%;
}

.footer-top {
  width: 98%;
  position: relative;
  column-gap: 400px;
  height: 72%;
  font-family: Bungee, Helvetica, Arial;
  display: flex;
}
.footer-top-left {
  width: 21%;
}
.footer-top-right {
  width: 20%;
  display: flex;
  padding-bottom: 70px;
}
.footer-logo {
  max-width: 65%;
}
.footer-bottom {
  height: 25%;
  width: 95%;
  position: relative;
  font-size: small;
  align-items: center;
  justify-content: space-between;
}

hr {
  width: 98%;
  border: 1px solid #6c6c6c;
}
.logo-nav {
  display: flex;
  gap: 10%;
}
.footer-image {
  max-width: 48%;
}
</style>
