<template>
  <div
    class="introduction d-flex flex-column align-center justify-center"
    v-bind:style="{
      backgroundImage:
        'url(' + require('@/assets/introduction-background.webp') + ')',
    }"
  >
    <template v-if="loading">
      <div
        class="text-center d-flex flex-column justify-center align-center"
        style="height: 900px"
      >
        <v-progress-circular
          :size="70"
          :width="7"
          indeterminate
          color="black"
        ></v-progress-circular>
      </div>
    </template>
    <template v-else>
      <div v-scrollanimation class="logo fade-bottom">
        <v-img
          class="align-seft-center"
          :src="require(`@/assets/fighter-force.webp`)"
        ></v-img>
      </div>
      <div
        class="text-capitalize mx-auto white--text text-shadow text-center introduction-title"
      >
        <p class="text-break mx-auto">
          {{ $t("introduction.title") }}
        </p>
      </div>
      <v-btn color="yellow" class="black--text btn-customize-introduction">
        <span class="bungee-font" style="font-size: 20px">{{
          $t("introduction.btnplay")
        }}</span>
      </v-btn>
    </template>

    <!-- -webkit-text-stroke-width: 0.5px;
-webkit-text-stroke-color: black; -->
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  data() {
    return {
      loading: true,
    };
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
};
</script>
<style scoped>
.introduction {
  width: 100%;
  height: 1000px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  row-gap: 50px;
  position: relative;
}
.btn-customize-introduction {
  border-radius: 15px;
  box-shadow: 0px 8px 1px 0px #40b22d;
  width: max-content;
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
  font-family: bungee;
  font-size: 40px;
  font-weight: 1000;
  line-height: 40px;
  letter-spacing: 0px;
  justify-content: center;
  max-width: 40%;
  transition-delay: 0.1s;
}
.v-btn {
  max-width: max-content;
}
</style>
