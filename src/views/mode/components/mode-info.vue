<template>
  <v-card class="mode-info">
    <div class="info-content p-12">
      <div class="info-top mx-auto">
        <v-img
          class="info-icon"
          :src="require(`@/assets/home/mode/gamemode1-icon.webp`)"
        />
        <v-card-title class="bungee-font" style="font-size: 23px"
          >RUFFS</v-card-title
        >
      </div>
      <v-card-text class="text-break kanit-font" style="font-size: 18px"
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
.mode-info {
  width: 486px;
  height: 233px;
  border-radius: 16px;
  position: relative;
  width: fit-content !important;
  height: max-content;
  box-shadow: 0px 5px 1px 0px #d9d9d9 !important ;
  padding: 5px;
}
.info-top {
  display: flex;
  justify-content: center;
}
.gap-10 {
  column-gap: 10px;
}
.info-icon {
  max-width: 27px;
  height: 27px;
  align-self: center;
}
.v-card__text {
  padding-top: 0px;
}
</style>
