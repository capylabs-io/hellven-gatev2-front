<template>
  <v-card class="new-card-border" white>
    <v-img class="new-card-image" :src="news.image" />
    <div class="kanit-font text-truncate pad-16" style="font-size: 15px">
      <span> {{ news.descript }} </span>
    </div>
    <v-card-title class="card-title kanit-font">
      <span>{{ news.name }}</span>
    </v-card-title>
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
.pad-16 {
  padding: 10px 16px 0px 16px;
}
.new-card {
  border-radius: 16px;
  box-shadow: 0px 11px 1px 0px #d9d9d9 !important;
  max-width: 23%;
  margin: 0 20px;
}
.new-card-border {
  width: 300px;
  height: max-content;
  border-radius: 18px;
  box-shadow: 0px 6px 1px 0px #d9d9d9 !important;
}

.card-title {
  justify-content: center;
  font-weight: bolder;
}
.v-card__subtitle {
  padding-bottom: 0;
}
.v-card__title {
  padding-top: 0;
}
.new-card-image {
  object-fit: contain;
}
.new-image {
}
</style>
