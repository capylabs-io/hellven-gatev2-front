<template>
  <v-card class="rune-info">
    <div class="info-content p-12">
      <div class="info-top">
        <v-card-title class="bungee-font" style="font-size: 23px"
          >HEALTH RUNE</v-card-title
        >
      </div>
      <v-card-text class="text-break kanit-font" style="font-size: 16px"
        >Lorem ipsum dolor sit amet consectetur. Cursus nulla eget purus erat
        sit id molestie pellentesque facilisi. Arcu sed bibendum egestas mauris
        fusce. Nam convallis felis lacus nisi lectus dis ut. Id urna fames
        ridiculus diam nunc aliquam. Erat pellentesque interdum lectus
        pellentesque quam. Pretium amet blandit donec et iaculis sed dis.
        Rhoncus condimentum mauris curabitur et nulla velit viverra adipiscing.
      </v-card-text>
      <v-card-text class="d-flex gap-20 statistic">
        <div class="d-flex gap-10">
          <v-img
            class="info-icon"
            :src="require(`@/assets/mode/infoIcon.webp`)"
          />
          <span class="bungee-font">100</span>
        </div>
        <div class="d-flex gap-10">
          <v-img
            class="info-icon"
            :src="require(`@/assets/mode/infoIcon.webp`)"
          />
          <span class="bungee-font">100</span>
        </div>
        <div class="d-flex gap-10">
          <v-img
            class="info-icon"
            :src="require(`@/assets/mode/infoIcon.webp`)"
          />
          <span class="bungee-font">100</span>
        </div>
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
.gap-20 {
  column-gap: 20px;
}
.info-icon {
  width: 27px;
  height: 27px;
  align-self: center;
}

.v-card__text {
  padding-top: 0px;
}
.statistic {
  width: 30%;
}
</style>
