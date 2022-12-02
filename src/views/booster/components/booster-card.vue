<template>
  <v-card class="booster-card-border" white>
    <div class="booster-image">
      <v-img
        class="mx-auto booster-card-image"
        :src="booster.image"
        max-width="100%"
      />
    </div>

    <v-card-title class="card-title kanit-font">
      <span>Overload</span>
    </v-card-title>
    <v-card-subtitle class="text-break kanit-font" style="font-size: 15px">
      <span>
        Add a random Magic card to your hand Add a random Magic card to your
        handAdd a random Magic card to your hand
      </span>
    </v-card-subtitle>
  </v-card>
</template>

<script>
export default {
  props: ["booster"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.booster-card {
  border-radius: 16px;
  box-shadow: 0px 11px 1px 0px #d9d9d9 !important;
  max-width: 23%;
  margin: 0 20px;
}
.booster-card-border {
  width: 300px;
  height: 380px;
  border-radius: 18px;
  box-shadow: 0px 6px 1px 0px #d9d9d9 !important;
}

.booster-card-image {
  width: 220px;
  height: 220px;
}
.booster-image {
  width: 100%;
  height: 220px;
  background-color: #1c1d3d;
}
.card-title {
  justify-content: center;
  font-weight: bolder;
}
.v-card__subtitle {
  text-align: center;
}
</style>
