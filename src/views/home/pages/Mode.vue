<template>
  <div class="mode d-lfex flex-column">
    <div class="mode-title">
      <v-img :src="require(`@/assets/mode/mode-title.webp`)"></v-img>
    </div>
    <div class="pt-10 d-flex item-center mode-list">
      <v-card class="mode-card pt-5" white>
        <v-img
          class="mx-auto"
          :src="require(`@/assets/mode/gamemode1-icon.webp`)"
          max-width="23%"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          {{ $t("mode.card1.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto"
          style="font-size: 20px"
        >
          {{ $t("mode.card1.text") }}
        </v-card-subtitle>
      </v-card>
      <v-card class="mode-card pt-5" white>
        <v-img
          class="mx-auto"
          :src="require(`@/assets/mode/gamemode2-icon.webp`)"
          max-width="23%"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          {{ $t("mode.card2.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto"
          style="font-size: 20px"
        >
          {{ $t("mode.card2.text") }}
        </v-card-subtitle>
      </v-card>
      <v-card class="mode-card pt-5" white>
        <v-img
          class="mx-auto"
          :src="require(`@/assets/mode/gamemode3-icon.webp`)"
          max-width="23%"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          {{ $t("mode.card3.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto"
          style="font-size: 20px"
        >
          {{ $t("mode.card3.text") }}
        </v-card-subtitle>
      </v-card>
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
.mode {
  height: 650px;
  width: 100%;
  padding-top: 6%;
  position: relative;
  background: transparent;
}
.mode-card {
  max-width: 22%;
}
.mode-title {
  max-width: 6%;
  margin: 0 auto;
}
.mode-list {
  column-gap: 2%;
}
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.v-card {
  border-radius: 16px;
  box-shadow: 0px 11px 1px 0px #d9d9d9 !important;
}

.v-card__subtitle {
  max-width: 90%;
}
</style>
