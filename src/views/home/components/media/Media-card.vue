<template>
  <v-card class="media-card">
    <slot></slot>
  </v-card>
</template>

<script>
export default {
  name: "media-card",
};
</script>
<style scoped>
.media-card {
  width: 16%;
  border-radius: 5px;
  border: solid 5px white;
  box-shadow: 0px 6px 1px 0px #d9d9d9 !important;
  object-fit: cover;
  object-position: center;
}
</style>
