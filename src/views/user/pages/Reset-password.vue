<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <div class="sign-in-form ma-auto pa-12">
        <div class="text-dp-xs bungee-font text-center">
          {{ $t("signin.reset-password") }}
        </div>
        <div class="text-lg text-center">
          {{ $t("signin.reset-password-des") }}
        </div>
        <div class="text-xl mt-4">{{ $t("signin.new-password") }}</div>
        <v-alert
          class="deeporange--text mt-4"
          dense
          outlined
          type="error"
          v-if="userStore.errorMessage"
        >
          {{ userStore.errorMessage }}
        </v-alert>
        <v-text-field
          v-model="userStore.resetPasswordData.password"
          :append-icon="userStore.isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="userStore.isShowPass ? 'text' : 'password'"
          @click:append="userStore.isShowPass = !userStore.isShowPass"
          solo
          background-color="cream"
          :rules="rules.password"
          full-width
          class="mt-2"
        ></v-text-field>
        <div class="text-xl mt-4">{{ $t("signin.new-password-confirm") }}</div>
        <v-text-field
          v-model="userStore.resetPasswordData.passwordConfirmation"
          @click:append="userStore.isShowPass = !userStore.isShowPass"
          solo
          :append-icon="userStore.isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="userStore.isShowPass ? 'text' : 'password'"
          background-color="cream"
          :rules="[passwordConfirmationRule]"
          full-width
          class="mt-2"
        ></v-text-field>
        <div class="text-center pt-4">
          <v-btn
            class="py-7 px-3 btn-submit"
            color="#5E6BE9"
            @click="userStore.resetPassword()"
            ><ArrowRight
          /></v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import ArrowRight from "@/components/svg/arrow-right.vue";
import { rules } from "@/plugins/rules";
export default {
  name: "ResetPassword",
  props: ["code"],
  data() {
    return {
      userStore: userStore(),
      rules: rules,
    };
  },
  components: {
    ArrowRight,
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.userStore.userData.password ===
          this.userStore.resetPasswordData.passwordConfirmation ||
        "Password must match";
    },
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData();
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    );
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
    fetchData() {
      this.userStore.resetPasswordData.code = this.$route.params.code;
    },
  },
};
</script>
<style lang="scss">
.sign-in-page {
  position: relative;
  min-height: 100vh;
  height: fit-content;
  width: 100vw;
  &::before {
    content: "";
    background: url("@/assets/user/user-banner.png");
    background-size: cover;
    filter: blur(2px);
    height: 100%;
    width: 100vw;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
  }
  .sign-in-content {
    width: 100vw;
    min-height: 100vh;
    height: fit-content;
    position: absolute;
    top: 0;
    left: 0;
    .sign-in-form {
      width: 90%;
      max-width: 588px;
      height: fit-content;
      font-family: Kanit, Helvetica, Arial;
      background: #ffffff;
      box-shadow: inset 0px -8px 0px rgba(0, 0, 0, 0.15);
      border-radius: 24px;
      z-index: 10;
    }
  }
}
</style>