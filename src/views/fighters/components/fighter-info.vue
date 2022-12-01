<template>
  <v-card class="fighter-info">
    <div class="info-content p-12">
      <div class="info-top">
        <v-card-title class="bungee-font" style="font-size: 23px"
          >RUFFS</v-card-title
        >
        <v-card-title class="d-flex gap-10">
          <v-img
            class="info-icon"
            :src="require(`@/assets/mode/infoIcon.webp`)"
          />
          <v-img
            class="info-icon"
            :src="require(`@/assets/mode/infoIcon.webp`)"
          />
          <v-img
            class="info-icon"
            :src="require(`@/assets/mode/infoIcon.webp`)"
          />
        </v-card-title>
      </div>
      <v-card-text class="text-break kanit-font" style="font-size: 16px"
        >He may bark orders at his subordinates, but Colonel Ruffs is a very
        good boy! Possessing a serious and calm demeanor, Ruffs keeps his dog
        traits hidden, unless there's a game of fetch going on.
      </v-card-text>
      <v-btn class="info-btn bungee-font white--text" color="#5e6be9">
        <span>discover</span>
      </v-btn>
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
  width: 486px;
  height: 233px;
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
.gap-10 {
  column-gap: 10px;
}
.info-icon {
  width: 27px;
  height: 27px;
  align-self: center;
}
.info-btn {
  margin: 0 16px 16px 16px;
  border-radius: 10px;
  height: max-content;
}
.v-card__text {
  padding-top: 0px;
}
</style>
