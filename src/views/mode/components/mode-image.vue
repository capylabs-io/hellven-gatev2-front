<template>
  <v-card class="mode-image">
    <v-img :src="require(`@/assets/mode/image/modeImage.webp`)"></v-img>
  </v-card>
</template>

<script>
export default {
  props: ["mode"],
  name: "mode-image",
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.mode-image {
  width: 100%;
  border-radius: 16px;
  border: solid 5px white;
}
</style>
