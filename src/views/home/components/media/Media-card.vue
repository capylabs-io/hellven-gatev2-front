<template>
  <v-card class="media-card">
    <v-img
      :src="require(`@/assets/home/media/Media${media.index}.webp`)"
    ></v-img>
  </v-card>
</template>

<script>
export default {
  props: ["media"],
  name: "media-card",
};
</script>
<style scoped>
.media-card {
  width: 16%;
  border-radius: 5px;
  border: solid 3px white;
  box-shadow: 0px 6px 1px 0px rgb(255, 255, 255, 0.5) !important;
}
</style>
