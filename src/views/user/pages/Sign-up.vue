<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <div class="sign-in-form ma-auto pa-12">
        <div class="text-dp-xs bungee-font text-center">
          <span v-if="isSignUpWithMail">{{
            $t("signin.sign-up-with-mail")
          }}</span>
          <span v-else>{{ $t("signin.sign-up-with-phone") }}</span>
        </div>
        <div class="text-xl mt-4">{{ $t("signin.email") }}</div>
        <v-text-field
          solo
          filled
          hide-details="true"
          full-width
          class="mt-2"
        ></v-text-field>
        <div class="text-xl mt-2">{{ $t("signin.password") }}</div>
        <v-text-field
          solo
          filled
          hide-details="true"
          full-width
          type="password"
          class="mt-2"
        ></v-text-field>
        <div class="text-xl mt-2">{{ $t("signin.confirm-password") }}</div>
        <v-text-field
          solo
          filled
          hide-details="true"
          full-width
          type="password"
          class="mt-2"
        ></v-text-field>
        <div class="text-xl mt-2">{{ $t("signin.date-of-birth") }}</div>
        <v-menu
          ref="menu"
          v-model="menu"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="date"
              prepend-icon="mdi-calendar"
              readonly
              v-bind="attrs"
              v-on="on"
              full-width
              hide-details="true"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            :active-picker.sync="activePicker"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1950-01-01"
            @change="save"
          ></v-date-picker>
        </v-menu>
        <v-checkbox
          class="text-lg"
          :label="$t('signin.accept-term-service')"
        ></v-checkbox>
        <div class="text-center">
          <v-btn x-small color="#5E6BE9" class="py-5"
            ><v-icon color="white">mdi-arrow-right-bold</v-icon></v-btn
          >
        </div>
        <div class="text-center mt-6">
          <v-btn
            text
            class="text-capitalize text-md"
            @click="changMethodSignUp()"
            ><span v-if="isSignUpWithMail">{{
              $t("signin.sign-up-with-phone")
            }}</span
            ><span v-else>{{ $t("signin.sign-up-with-mail") }}</span
            ><span> {{ $t("signin.instead") }}</span></v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from "@/i18n";
export default {
  name: "Signup",
  data() {
    return {
      isSignUpWithMail: true,
      activePicker: null,
      date: '1950-01-01',
      menu: false,
    };
  },
  watch: {
      menu (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },
  components: {},
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
    changMethodSignUp() {
      this.isSignUpWithMail = !this.isSignUpWithMail;
    },
    save (date) {
        this.$refs.menu.save(date)
      },
  },
};
</script>
<style lang="scss">
.sign-in-page {
  position: relative;
  height: 100vh;
  width: 100vw;
  &::before {
    content: "";
    background: url("@/assets/user/user-banner.png");
    background-size: cover;
    filter: blur(2px);
    height: 100vh;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .sign-in-content {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    .sign-in-form {
      font-family: Kanit, Helvetica, Arial;
      background: #ffffff;
      box-shadow: inset 0px -8px 0px rgba(0, 0, 0, 0.15);
      border-radius: 24px;
      z-index: 10;
    }
  }
}
</style>