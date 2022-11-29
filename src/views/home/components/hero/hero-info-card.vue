<template>
  <v-card class="hero-info-card">
    <div class="title d-flex">
      <div class="title-left">
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
      <div class="title-right">
        <v-card-subtitle
          class="bungee-font text-shadow yellow-text"
          style="font-size: 20px"
          >{{ $t("hero.heroRank") }}</v-card-subtitle
        >
      </div>
    </div>
    <div class="text-break kanit-font">
      <v-card-text style="font-size: 18px"
        >Spike throws cactus grenades that send needles flying, and a
        show-stopping Super: a field of cactus spines that slows down and
        damages enemies!</v-card-text
      >
    </div>
    <div class="hero-ability">
      <div class="ability d-flex">
        <v-img
          class="align-seft-center"
          :src="require(`@/assets/home/hero/hero-ability1.webp`)"
        ></v-img>
      </div>
      <div class="ability d-flex">
        <v-img
          class="align-seft-center"
          :src="require(`@/assets/home/hero/hero-ability2.webp`)"
        ></v-img>
      </div>
      <div class="ability d-flex">
        <v-img
          class="align-seft-center"
          :src="require(`@/assets/home/hero/hero-ability3.webp`)"
        ></v-img>
      </div>
    </div>
    <div class="hero-ability-text mt-2">
      <div class="d-flex">
        <span class="bungee-font">Pincushion</span>
      </div>
      <div class="d-flex">
        <span class="bungee-font">Life Plant</span>
      </div>
      <div class="d-flex">
        <span class="bungee-font">Curveball</span>
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
            :src="require(`@/assets/home/hero/hero-health.webp`)"
          ></v-img>
        </v-col>

        <v-col col="5">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/home/hero/hero-speed.webp`)"
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
            :src="require(`@/assets/home/hero/hero-damage.webp`)"
          ></v-img
        ></v-col>
        <v-col col="5">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/home/hero/hero-vision.webp`)"
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
            :src="require(`@/assets/home/hero/hero-move.webp`)"
          ></v-img
        ></v-col>
        <v-col col="5">
          <v-img
            class="align-seft-center"
            :src="require(`@/assets/home/hero/hero-mana.webp`)"
          ></v-img
        ></v-col>
      </v-row>
    </div>
    <div class="statistic-responsive item-center">
      <v-row>
        <v-col class="number-responsive" col="12">
          <p class="bungee-font white--text text-shadow clear-margin number">
            500
          </p>
        </v-col>
        <v-col col="12">
          <v-img
            class="mx-auto statistic-image"
            :src="require(`@/assets/home/hero/hero-health.webp`)"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="number-responsive" col="12">
          <p class="bungee-font white--text text-shadow clear-margin number">
            500
          </p>
        </v-col>
        <v-col col="12">
          <v-img
            class="mx-auto statistic-image"
            :src="require(`@/assets/home/hero/hero-damage.webp`)"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="number-responsive" col="12">
          <p class="bungee-font white--text text-shadow clear-margin number">
            500
          </p>
        </v-col>
        <v-col col="12">
          <v-img
            class="mx-auto statistic-image"
            :src="require(`@/assets/home/hero/hero-mana.webp`)"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="number-responsive" col="12">
          <p class="bungee-font white--text text-shadow clear-margin number">
            500
          </p>
        </v-col>
        <v-col col="12">
          <v-img
            class="mx-auto statistic-image"
            :src="require(`@/assets/home/hero/hero-vision.webp`)"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="number-responsive" col="12">
          <p class="bungee-font white--text text-shadow clear-margin number">
            500
          </p>
        </v-col>
        <v-col col="12">
          <v-img
            class="mx-auto statistic-image"
            :src="require(`@/assets/home/hero/hero-move.webp`)"
          ></v-img>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="number-responsive" col="12">
          <p class="bungee-font white--text text-shadow clear-margin number">
            500
          </p>
        </v-col>
        <v-col col="12">
          <v-img
            class="mx-auto statistic-image"
            :src="require(`@/assets/home/hero/hero-speed.webp`)"
          ></v-img>
        </v-col>
      </v-row>
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
.yellow-text {
  color: #fae31b;
}
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}

.hero-info-card {
  border-radius: 16px;
  position: relative;
  width: max-content !important;
  box-shadow: 0px 13px 1px 0px #d9d9d9 !important ;
}
.title-right {
  margin-left: auto;
}
.title-left {
}
.ability {
  max-width: 10%;
}
.statistic {
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5%;
}
.statistic-responsive {
  display: none;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 5%;
}
.hero-ability {
  display: flex;
  column-gap: 110px;
  justify-content: center;
}

.hero-ability-text {
  display: flex;
  justify-content: center;
  column-gap: 50px;
  font-size: 17px;
}
.number-responsive {
  position: absolute;
  z-index: 3;
  font-size: 27px;
  padding-left: 70%;
  align-self: center;
  font-size: 27px;
}
.number-left {
  position: absolute;
  z-index: 3;
  padding-left: 32%;
  align-self: center;
  font-size: 27px;
}
.number-right {
  position: absolute;
  z-index: 3;
  padding-left: 79%;
  align-self: center;
  font-size: 27px;
}
.statistic-image {
}
</style>
