<template>
  <div class="mode d-lfex flex-column">
    <div class="mode-title">
      <v-img :src="require(`@/assets/mode/mode-title.webp`)"></v-img>
    </div>
    <div class="pt-10 d-flex item-center ">
      <v-card class="card pt-5 mx-5" max-width="22%" white>
        <v-img
          class="mx-auto"
          :src="require(`@/assets/mode/gamemode1-icon.webp`)"
          max-width="23%"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          Adventure Awaits
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto"
          style="font-size: 20px"
        >
          Explore a wide variety of herores. Venture into contrasting biomes
          with unique enemy factions, environments and battlefields.
        </v-card-subtitle>
      </v-card>
      <v-card class="pt-5 mx-5" max-width="22%" white>
        <v-img
          class="mx-auto"
          :src="require(`@/assets/mode/gamemode2-icon.webp`)"
          max-width="23%"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          game on!
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto"
          style="font-size: 20px"
        >
          An immense collection of challenging modes will ensure to constantly
          keep you on the edge of your sit.
        </v-card-subtitle>
      </v-card>
      <v-card class="pt-5 mx-5" max-width="22%" white>
        <v-img
          class="mx-auto"
          :src="require(`@/assets/mode/gamemode3-icon.webp`)"
          max-width="23%"
        />

        <v-card-title
          class="justify-center bungee-font"
          style="font-size: 25px"
        >
          free to play
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2 pb-10 text-center mx-auto"
          style="font-size: 20px"
        >
          Fighter Club is a free to play game that does not require any fee to
          participate. The only thing you need is a will to become the champion.
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
.mode-title {
  max-width: 6%;
  margin: 0 auto;
}
.bungee-font {
  font-family: Bungee, Helvetica, Arial;
}
.kanit-font {
  font-family: Kanit, Helvetica, Arial;
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
