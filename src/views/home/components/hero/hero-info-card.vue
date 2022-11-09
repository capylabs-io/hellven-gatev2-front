<template>
  <v-card>
    <div class="pa-3">
      <div class="title d-flex">
        <div class="title-right">
          <v-card-title
            class="bungee-font white--text text-shadow"
            style="font-size: 32px"
            >SPIKE</v-card-title
          >
          <v-card-subtitle
            class="bungee-font white--text text-shadow pt-2"
            style="font-size: 20px"
            >TANKER</v-card-subtitle
          >
        </div>
        <div class="title-left">
          <v-card-subtitle
            class="bungee-font text-shadow yellow-text"
            style="font-size: 20px"
            >LEGENDARY</v-card-subtitle
          >
        </div>
      </div>
      <div class="text-break kanit-font" style="max-width: 550px">
        <v-card-text style="font-size: 18px"
          >Spike throws cactus grenades that send needles flying, and a
          show-stopping Super: a field of cactus spines that slows down and
          damages enemies!</v-card-text
        >
      </div>
      <div class="d-flex gap-110 item-center">
        <div class="ability d-flex flex-column">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/hero/hero-ability1.webp`)"
          ></v-img>
        </div>
        <div class="ability d-flex flex-column">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/hero/hero-ability2.webp`)"
          ></v-img>
        </div>
        <div class="ability d-flex flex-column">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/hero/hero-ability3.webp`)"
          ></v-img>
        </div>
      </div>
      <div class="d-flex gap-50 mt-2 item-center">
        <div class="d-flex flex-column">
          <span class="bungee-font" style="font-size: 17px">Pincushion</span>
        </div>
        <div class="d-flex flex-column">
          <span class="bungee-font" style="font-size: 17px">Life Plant</span>
        </div>
        <div class="d-flex flex-column">
          <span class="bungee-font" style="font-size: 17px">Curveball</span>
        </div>
      </div>

      <div class="statistic item-center">
        <v-row>
          <v-col class="number-left" col="5">
            <p
              class="bungee-font white--text text-shadow clear-margin number"
              style="font-size: 27px"
            >
              500
            </p>
          </v-col>
          <v-col class="number-right" col="5">
            <p
              class="bungee-font white--text text-shadow clear-margin number"
              style="font-size: 27px"
            >
              500
            </p>
          </v-col>
          <v-col col="5">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/hero/hero-health.webp`)"
            ></v-img>
          </v-col>

          <v-col col="5">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/hero/hero-speed.webp`)"
            ></v-img
          ></v-col>
        </v-row>

        <v-row>
          <v-col class="number-left" col="5">
            <p
              class="bungee-font white--text text-shadow clear-margin number"
              style="font-size: 27px"
            >
              500
            </p>
          </v-col>
          <v-col class="number-right" col="5">
            <p
              class="bungee-font white--text text-shadow clear-margin number"
              style="font-size: 27px"
            >
              500
            </p>
          </v-col>
          <v-col col="5">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/hero/hero-damage.webp`)"
            ></v-img
          ></v-col>
          <v-col col="5">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/hero/hero-vision.webp`)"
            ></v-img
          ></v-col>
        </v-row>

        <v-row>
          <v-col class="number-left" col="5">
            <p
              class="bungee-font white--text text-shadow clear-margin number"
              style="font-size: 27px"
            >
              500
            </p>
          </v-col>
          <v-col class="number-right" col="5">
            <p
              class="bungee-font white--text text-shadow clear-margin number"
              style="font-size: 27px"
            >
              500
            </p>
          </v-col>
          <v-col col="5">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/hero/hero-move.webp`)"
            ></v-img
          ></v-col>
          <v-col col="5">
            <v-img
              class="align-seft-center"
              :src="require(`@/assets/hero/hero-mana.webp`)"
            ></v-img
          ></v-col>
        </v-row>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {};
</script>
<style scoped>
.clear-margin {
  margin: 0;
}
.text-shadow {
  text-shadow: 0px 3px #323554;
  -webkit-text-stroke-width: 2px;
  -webkit-text-stroke-color: #323554;
}
.bungee-font {
  font-family: Bungee, Helvetica, Arial;
}
.kanit-font {
  font-family: Kanit, Helvetica, Arial;
}
.yellow-text {
  color: #fae31b;
}
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.v-card {
  border-radius: 16px;
  box-shadow: 0px 13px 1px 0px #d9d9d9 !important;
}
.title-left {
  margin-left: 45%;
}
.ability {
  max-width: 10%;
}
.statistic {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5%;
}
.gap-110 {
  column-gap: 110px;
}
.gap-50 {
  column-gap: 50px;
}
.number-left {
  position: absolute;
  z-index: 999;
  padding-left: 32%;
  padding-top: 15px;
}
.number-right {
  position: absolute;
  z-index: 999;
  padding-left: 79%;
  padding-top: 15px;
}
</style>
