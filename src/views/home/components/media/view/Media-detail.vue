<template>
  <div v-if="visibleImage === index">
    <v-card>
      <slot></slot>
      <!-- <v-card-text> 

      </v-card-text> -->
      <!-- <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green darken-1" text @click="dialog = false">
          Disagree
        </v-btn>
        <v-btn color="green darken-1" text @click="dialog = false">
          Agree
        </v-btn>
      </v-card-actions> -->
    </v-card>
  </div>
</template>

<script>
export default {
  props: ["visibleImage", "index"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.v-card {
  border-radius: 5px;
  border: solid 5px white;
  box-shadow: 0px 6px 1px 0px #d9d9d9 !important;
}
</style>
