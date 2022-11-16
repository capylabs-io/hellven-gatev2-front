<template>
  <div
    class="introduction d-flex flex-column align-center"
    v-bind:style="{
      backgroundImage:
        'url(' +
        require('@/assets/introduction/background-introduction.webp') +
        ')',
    }"
  >
    <div class="logo">
      <v-img
        class="align-seft-center"
        :src="require(`@/assets/introduction/game-logo.webp`)"
      ></v-img>
    </div>
    <div
      class="text-center text-capitalize mx-auto white--text text-shadow text-center introduction-title bungee-font"
    >
      <p class="text-break mx-auto" style="max-width: 35%">
        {{ $t("introduction.title") }}
      </p>
    </div>
    <v-btn
      color="yellow"
      class="black--text btn-customize px-3"
      height="60px"
      width="13%"
    >
      <v-img
        class="align-seft-center mr-2"
        max-width="35px"
        :src="require(`@/assets/introduction/steam-icon.webp`)"
      ></v-img>
      <span class="bungee-font" style="font-size: 21px">{{
        $t("introduction.btndownload")
      }}</span>
    </v-btn>
    <!-- -webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: black; -->
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
};
</script>
<style scoped>
.introduction {
  width: 100%;
  height: 900px;
  background-size: 100%;
  background-repeat: no-repeat;
  padding-top: 6%;
  row-gap: 8%;
}
.btn-customize {
  border-radius: 15px;
  box-shadow: 0px 8px 1px 0px #40b22d;
}

.text-shadow {
  text-shadow: 0px 4px black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
}
.bungee-font {
  font-family: Bungee, Helvetica, Arial;
}
.kanit-font {
  font-family: Kanit, Helvetica, Arial;
}
.logo {
  width: 20%;
}
.clear-margin {
  margin: 0;
}
.text-center {
  text-align: center;
}
.introduction-title {
  font-size: 26px;
  font-weight: bolder;
  justify-content: center;
}
.v-btn {
  max-width: max-content;
}
</style>
