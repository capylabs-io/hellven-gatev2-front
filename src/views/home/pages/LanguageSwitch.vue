<template>
  <div class="relative">
    <v-menu bottom origin="center center" transition="scale-transition">
      <template v-slot:activator="{ on, attrs }">
        <div class="d-flex align-center ml-4">
          <v-btn
            elevation="0"
            color="transparent"
            class="flex items-center white--text"
            v-bind="attrs"
            v-on="on"
          >
            <img
              class="image"
              :src="require(`@/assets/locale/${$i18n.locale}-flag.png`)"
            />

            <span class="ml-2">{{ $i18n.locale.toUpperCase() }}</span>
          </v-btn>
        </div>
      </template>
      <v-list class="dropdown-color">
        <v-list-item @click.prevent="setLocale('en')">
          <v-list-item-title class="d-flex px-2">
            <img class="image" :src="require(`@/assets/locale/en-flag.png`)" />
            <span class="ml-2 white--text align-center"
              >English</span
            ></v-list-item-title
          >
        </v-list-item>
        <v-list-item @click.prevent="setLocale('vn')">
          <v-list-item-title class="d-flex px-2 hover:bg-gray-200">
            <img class="image" :src="require(`@/assets/locale/vn-flag.png`)" />
            <span class="ml-2 white--text align-center"
              >Vietnam</span
            ></v-list-item-title
          >
        </v-list-item>
      </v-list>
    </v-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
      this.$router.push({
        params: { lang: locale },
      });
    },
  },
};
</script>

<style scoped>
.dropdown-fade-enter-active,
.dropdown-fade-leave-active {
  transition: all 0.1s ease-in-out;
}
.dropdown-fade-enter,
.dropdown-fade-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}
.dropdown-fade {
}
.image {
  width: 40px;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
  align-items: center;
}
.dropdown-color {
  background-color: #1b379a;
}
.lang-item:hover {
}
.align-center {
  align-self: center;
}
</style>
