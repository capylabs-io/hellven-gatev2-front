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
  props: ["fighter"],
  data() {
    return {};
  },
  methods: {
    hover() {},
  },
};
</script>
<style scoped>
.v-card {
  width: 70px;
  height: 70px;
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
