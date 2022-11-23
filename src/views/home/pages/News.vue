<template>
  <div class="news d-lfex flex-column py-16">
    <div class="news-title">
      <v-img :src="require(`@/assets/news/new-title.webp`)"></v-img>
    </div>
    <v-row class="pt-10 ma-auto px-5 max-content">
      <v-col cols="12" sm="6" lg="3">
        <v-card class="new-card-boder" white>
          <v-sheet
            v-if="loading"
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
          >
            <v-skeleton-loader
              class="mx-auto"
              max-width="100%"
              type="image"
            ></v-skeleton-loader>
          </v-sheet>
          <v-img
            v-else
            class="mx-auto new-card-image"
            :src="require(`@/assets/news/new1-image.webp`)"
            max-width="100%"
          />
          <div class="pl-4 pt-4 bungee-font gray-text">
            <p style="margin: 0">{{ $t("new.new1.subtitle") }}</p>
          </div>
          <v-card-title class="bungee-font" style="font-size: 23px">
            {{ $t("new.new1.title") }}
          </v-card-title>

          <v-card-subtitle
            class="text-break kanit-font pt-2"
            style="font-size: 15px"
          >
            {{ $t("new.new1.link") }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card class="new-card-boder" white>
          <v-sheet
            v-if="loading"
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
          >
            <v-skeleton-loader
              class="mx-auto"
              max-width="100%"
              type="image"
            ></v-skeleton-loader>
          </v-sheet>
          <v-img
            v-else
            class="mx-auto new-card-image"
            :src="require(`@/assets/news/new1-image.webp`)"
            max-width="100%"
          />
          <div class="pl-4 pt-4 bungee-font gray-text">
            <p style="margin: 0">{{ $t("new.new1.subtitle") }}</p>
          </div>
          <v-card-title class="bungee-font" style="font-size: 23px">
            {{ $t("new.new1.title") }}
          </v-card-title>

          <v-card-subtitle
            class="text-break kanit-font pt-2"
            style="font-size: 15px"
          >
            {{ $t("new.new1.link") }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card class="new-card-boder" white>
          <v-sheet
            v-if="loading"
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
          >
            <v-skeleton-loader
              class="mx-auto"
              max-width="100%"
              type="image"
            ></v-skeleton-loader>
          </v-sheet>
          <v-img
            v-else
            class="mx-auto new-card-image"
            :src="require(`@/assets/news/new1-image.webp`)"
            max-width="100%"
          />
          <div class="pl-4 pt-4 bungee-font gray-text">
            <p style="margin: 0">{{ $t("new.new1.subtitle") }}</p>
          </div>
          <v-card-title class="bungee-font" style="font-size: 23px">
            {{ $t("new.new1.title") }}
          </v-card-title>

          <v-card-subtitle
            class="text-break kanit-font pt-2"
            style="font-size: 15px"
          >
            {{ $t("new.new1.link") }}
          </v-card-subtitle>
        </v-card>
      </v-col>
      <v-col cols="12" sm="6" lg="3">
        <v-card class="new-card-boder" white>
          <v-sheet
            v-if="loading"
            :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
          >
            <v-skeleton-loader
              class="mx-auto"
              max-width="100%"
              type="image"
            ></v-skeleton-loader>
          </v-sheet>
          <v-img
            v-else
            class="mx-auto new-card-image"
            :src="require(`@/assets/news/new1-image.webp`)"
            max-width="100%"
          />
          <div class="pl-4 pt-4 bungee-font gray-text">
            <p style="margin: 0">{{ $t("new.new1.subtitle") }}</p>
          </div>
          <v-card-title class="bungee-font" style="font-size: 23px">
            {{ $t("new.new1.title") }}
          </v-card-title>

          <v-card-subtitle
            class="text-break kanit-font pt-2"
            style="font-size: 15px"
          >
            {{ $t("new.new1.link") }}
          </v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
    <!-- <div class="news-card pt-10 item-center">
      <v-card class="new-card" white>
        <v-sheet
          v-if="loading"
          :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="100%"
            type="image"
          ></v-skeleton-loader>
        </v-sheet>
        <v-img
          v-else
          class="mx-auto new-card-image"
          :src="require(`@/assets/news/new1-image.webp`)"
          max-width="100%"
        />
        <div class="pl-4 pt-4 bungee-font gray-text">
          <p style="margin: 0">{{ $t("new.new1.subtitle") }}</p>
        </div>
        <v-card-title class="bungee-font" style="font-size: 23px">
          {{ $t("new.new1.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2"
          style="font-size: 15px"
        >
          {{ $t("new.new1.link") }}
        </v-card-subtitle>
      </v-card>

      <v-card class="new-card" white>
        <v-sheet
          v-if="loading"
          :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="100%"
            type="image"
          ></v-skeleton-loader>
        </v-sheet>
        <v-img
          v-else
          class="mx-auto new-card-image"
          :src="require(`@/assets/news/new2-image.webp`)"
          max-width="100%"
        />
        <div class="pl-4 pt-4 bungee-font gray-text">
          <p style="margin: 0">{{ $t("new.new2.subtitle") }}</p>
        </div>
        <v-card-title class="bungee-font" style="font-size: 23px">
          {{ $t("new.new2.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2"
          style="font-size: 15px"
        >
          {{ $t("new.new2.link") }}
        </v-card-subtitle>
      </v-card>

      <v-card class="new-card" white>
        <v-sheet
          v-if="loading"
          :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="100%"
            type="image"
          ></v-skeleton-loader>
        </v-sheet>
        <v-img
          v-else
          class="mx-auto new-card-image"
          :src="require(`@/assets/news/new3-image.webp`)"
          max-width="100%"
        />
        <div class="pl-4 pt-4 bungee-font gray-text">
          <p style="margin: 0">{{ $t("new.new3.subtitle") }}</p>
        </div>
        <v-card-title class="bungee-font" style="font-size: 23px">
          {{ $t("new.new3.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2"
          style="font-size: 15px"
        >
          {{ $t("new.new3.link") }}
        </v-card-subtitle>
      </v-card>
      <v-card class="new-card" white>
        <v-sheet
          v-if="loading"
          :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="100%"
            type="image"
          ></v-skeleton-loader>
        </v-sheet>
        <v-img
          v-else
          class="mx-auto new-card-image"
          :src="require(`@/assets/news/new4-image.webp`)"
          max-width="100%"
        />
        <div class="pl-4 pt-4 bungee-font gray-text">
          <p style="margin: 0">{{ $t("new.new4.subtitle") }}</p>
        </div>
        <v-card-title class="bungee-font" style="font-size: 23px">
          {{ $t("new.new4.title") }}
        </v-card-title>

        <v-card-subtitle
          class="text-break kanit-font pt-2"
          style="font-size: 15px"
        >
          {{ $t("new.new3.link") }}
        </v-card-subtitle>
      </v-card>
    </div> -->
    <div class="new-btn">
      <v-btn
        color="violet"
        class="white--text btn-customize bungee-font"
        height="50px"
      >
        <span style="font-size: 18px">{{ $t("new.btnView") }}</span>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",

  components: {},
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
  mounted() {
    setTimeout(() => {
      this.loading = false;
    }, 1500);
  },
  data: () => {
    return {
      loading: true,
    };
  },
};
</script>
<style scoped>
.news {
  height: auto;
  width: 100%;
  padding-top: 6%;
  position: relative;
  background: transparent;
}
.max-content {
  max-width: 88%;
}
@media screen and (max-width: 960px) {
  .max-content {
    max-width: 100%;
  }
}
.news-card {
  display: flex;
}
.news-title {
  max-width: 6%;
  margin: 0 auto;
}

.text-center {
  text-align: center;
}
.item-center {
  justify-content: center;
}
.new-card {
  border-radius: 16px;
  box-shadow: 0px 11px 1px 0px #d9d9d9 !important;
  max-width: 23%;
  margin: 0 20px;
}
.new-card-boder {
  border-radius: 16px;
  box-shadow: 0px 11px 1px 0px #d9d9d9 !important;
  /* max-width: 23%;
  margin: 0 20px; */
}
.btn-customize {
  border-radius: 15px;
}
.gray-text {
  color: #717171;
}
.new-btn {
  max-width: fit-content;
  margin: 0 auto;
  margin-top: 3%;
}
.new-card-image {
  max-height: 70%;
}
</style>
