<template>
  <v-hover v-slot="{ hover }">
    <v-card :class="{ 'on-hover cursor-pointer': hover }">
      <slot></slot>
    </v-card>
  </v-hover>
  <!-- <v-hover v-slot="{ hover }">
      <v-card :class="{ 'on-hover cursor-pointer': hover }">
       <slot></slot>
      </v-card>
    </v-hover> -->
</template>

<script>
export default {
  props: ["fighter"],
  data() {
    return {};
  },
};
</script>
<style scoped>
.v-card {
  width: 14%;
  height: max-content;
  border-radius: 10px;
  background-color: black;
}
.active {
  border: 5px solid #5e6be9 !important;
}
.on-hover {
  border: 5px solid #5e6be9 !important;
}
</style>
