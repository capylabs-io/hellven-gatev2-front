<template>
  <v-card class="fighter-info">
    <div class="info-content">
      <div class="info-top">
        <v-card-title class="bungee-font" style="font-size: 23px"
          >Alice</v-card-title
        >
        <v-card-title class="bungee-font" style="font-size: 17px"
          ><span style="color: #00c49d">common</span></v-card-title
        >
      </div>
      <div class="info-top pb-2">
        <v-card-title
          class="d-flex gap-10 kanit-font"
          style="font-weight: bolder"
        >
          <div class="d-flex gap-10">
            <v-img
              class="info-icon"
              :src="require(`@/assets/mode/infoIcon.webp`)"
            />
            <span class="">200</span>
          </div>
          <div class="d-flex gap-10">
            <v-img
              class="info-icon"
              :src="require(`@/assets/mode/infoIcon.webp`)"
            />
            <span class="">4</span>
          </div>
          <div class="d-flex gap-10">
            <v-img
              class="info-icon"
              :src="require(`@/assets/mode/infoIcon.webp`)"
            />
            <span class="">10</span>
          </div>
          <div class="d-flex gap-10">
            <v-img
              class="info-icon"
              :src="require(`@/assets/mode/infoIcon.webp`)"
            />
            <span class="">24-30</span>
          </div>
        </v-card-title>
        <v-card-title class="bungee-font" style="font-size: 17px"
          ><span style="color: #516ffd"
            >faction something here</span
          ></v-card-title
        >
      </div>
      <v-card-text
        class="text-break kanit-font pb-5 gray-text"
        style="font-size: 19px"
        >A young girl who has decided to become a scientist in an effort to
        explain the strange things that occurred in Wonderland. She is always
        researching new items with her robot assistant Bunny-Bunny. But
        sometimes, her excessive passion and curiosity causes a commotion.
      </v-card-text>

      <div class="d-flex ability-info">
        <v-img
          class="ability-image"
          :src="require(`@/assets/fighter/fighter-ability1.webp`)"
        />
        <div>
          <v-card-title class="text-break kanit-font bolder-text"
            >Bunny-Bunny Hammer
          </v-card-title>
          <v-card-text
            class="text-break kanit-font gray-text"
            style="font-size: 16px"
            >Swings Bunny-Bunny horizontally, dealing damage. Swings Bunny-Bunny
            vertically when used as Aerial Skill, dealing damage.
          </v-card-text>
        </div>
      </div>
      <div class="d-flex ability-info">
        <v-img
          class="ability-image"
          :src="require(`@/assets/fighter/fighter-ability2.webp`)"
        />
        <div>
          <v-card-title class="text-break kanit-font bolder-text"
            >Bunny-Bunny Magic Mine
          </v-card-title>
          <v-card-text
            class="text-break kanit-font gray-text"
            style="font-size: 16px"
            >Throws a mine. The mine explodes when any foe is within the range,
            dealing damage and stuns. Mines last.
          </v-card-text>
        </div>
      </div>
      <div class="d-flex ability-info">
        <v-img
          class="ability-image"
          :src="require(`@/assets/fighter/fighter-ability3.webp`)"
        />
        <div>
          <v-card-title class="text-break kanit-font bolder-text"
            >Bunny-Bunny Hammer
          </v-card-title>
          <v-card-text
            class="text-break kanit-font gray-text"
            style="font-size: 16px"
            >Strikes the ground to create a shockwave, dealing damage, and pulls
            foes hit toward Alice. Foes struck by the shockwave are also stunned
            for a second.
          </v-card-text>
        </div>
      </div>
      <div class="info-btn mx-auto py-1">
        <v-btn color="#5e6be9" class="white--text btn-customize bungee-font">
          <span>base stats</span>
        </v-btn>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.fighter-info {
  width: 700px;
  height: max-content;
  border-radius: 16px;
  position: relative;
  width: fit-content !important;
  height: max-content;
  box-shadow: 0px 5px 1px 0px #d9d9d9 !important ;
}
.info-top {
  display: flex;
  justify-content: space-between;
}
.info-content {
  padding: 13px;
}
.gap-10 {
  column-gap: 10px;
}
.info-icon {
  width: 27px;
  height: 27px;
  align-self: center;
}
.btn-customize {
  border-radius: 10px;
}
.v-card__text {
  padding-top: 0px;
}

.v-card__title {
  padding-bottom: 0px;
  padding-top: 0px;
}
.ability-image {
  width: 58px;
  height: 58px;
}
.ability-info {
  padding: 0 16px 16px 16px;
}
.v-card__text {
  padding-bottom: 0px;
}
.bolder-text {
  font-size: 16px;
  font-weight: bold;
}
.gray-text {
  color: gray;
}
.info-btn {
  width: max-content;
}
</style>
