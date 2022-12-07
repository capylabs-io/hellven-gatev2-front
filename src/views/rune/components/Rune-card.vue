<template>
  <v-card>
    <slot></slot>
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
.v-card {
  /* width: 76px;
  height: 76px;
  height: max-content;
  background-color: white;
  border: 5px solid #c4c4c4;
  border-radius: 10px;
  padding: 6px; */
  width: 70px;
  height: 70px;
  border-radius: 10px;
  background-color: black;
}
</style>
