<template>
  <div :class="{ 'on-hover cursor-pointer': hover }">
    <slot></slot>
  </div>
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
.active {
  border: 3px solid white !important;
}
.on-hover {
  border: 3px solid white !important;
  border-radius: 100px;
}
</style>
