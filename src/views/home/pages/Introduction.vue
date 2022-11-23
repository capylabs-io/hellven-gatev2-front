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
        :src="require(`@/assets/fighter-force.webp`)"
      ></v-img>
    </div>
    <div
      class="text-center text-capitalize mx-auto white--text text-shadow text-center introduction-title bungee-font"
    >
      <p class="text-break mx-auto">
        {{ $t("introduction.title") }}
      </p>
    </div>
    <v-btn color="yellow" class="black--text btn-customize-introduction px-3">
      <!-- <v-img
        class="align-seft-center mr-2"
        max-width="35px"
        :src="require(`@/assets/introduction/steam-icon.webp`)"
      ></v-img> -->
      <span class="bungee-font" style="font-size: 20px">{{
        $t("introduction.btnplay")
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
  height: 950px;
  background-size: cover;
  background-repeat: no-repeat;
  padding-top: 6%;
  background-position: center;
  row-gap: 8%;
  position: relative;
}
.btn-customize-introduction {
  border-radius: 15px;
  box-shadow: 0px 8px 1px 0px #40b22d;
  width: 13%;
  height: 60px !important;
}

.text-shadow {
  text-shadow: 0px 4px black;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: black;
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
  max-width: 35%;
}
.v-btn {
  max-width: max-content;
}
</style>
