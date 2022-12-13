<template>
  <v-card class="d-flex card" white>
    <v-img class="card-image" :src="news.image"> </v-img>
    <div class="kanit-font">
      <v-card-subtitle class="text-bold gray-text">{{
        news.type
      }}</v-card-subtitle>
      <v-card-title class="text-bold">{{ news.title }} </v-card-title>
      <v-card-text class="text-bold gray-text">{{
        news.createdDate
      }}</v-card-text>
    </div>
  </v-card>
</template>

<script>
export default {
  props: ["news"],
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.card {
  max-width: 100%;
  height: max-content;
  border-radius: 10px;
  box-shadow: 0px 6px 1px 0px #d9d9d9 !important;
}
.card-image {
  max-width: 90px;
  max-height: max-content;
}
.v-card__subtitle {
  padding-bottom: 0;
}
.v-card__title {
  padding-top: 0;
  padding-bottom: 0;
}
.v-card__text {
  padding-top: 0;
}
.text-bold {
  font-weight: bold;
}
.gray-text {
  color: gray;
}
.pad-16 {
  padding: 10px 16px 0px 16px;
}
</style>
