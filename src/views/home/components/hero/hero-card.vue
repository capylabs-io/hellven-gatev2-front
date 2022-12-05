<template>
  <v-card>
    <slot></slot>
  </v-card>
  <!-- <v-hover v-slot="{ hover }">
    <v-card :class="{ 'on-hover cursor-pointer': hover }">
     <slot></slot>
    </v-card>
  </v-hover> -->
</template>

<script>
export default {
  props: ["hero"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.v-card {
  width: 16%;
  height: max-content;
  border-radius: 10px;
  background-color: black;
}
.active {
  border: 3px solid white !important;
}
.on-hover {
  border: 3px solid white !important;
}
</style>
