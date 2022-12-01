<template>
  <v-card class="rune-info">
    <div class="info-content p-12">
      <div class="info-top">
        <v-card-title class="bungee-font" style="font-size: 23px"
          >HEALTH RUNE</v-card-title
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
.rune-info {
  width: 600px;
  height: 233px;
  border-radius: 16px;
  position: relative;
  height: max-content;
  box-shadow: 0px 5px 1px 0px #d9d9d9 !important ;
}
.info-content {
  padding: 10px;
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

.v-card__text {
  padding-top: 0px;
}
</style>
