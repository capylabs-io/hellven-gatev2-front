<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <v-form
        v-if="!userStore.resetPasswordData.isSuccess"
        ref="form"
        lazy-validation
        class="sign-in-form ma-auto pa-4 pa-sm-8"
      >
        <div class="text-dp-xs bungee-font text-center">
          {{ $t("signin.reset-password") }}
        </div>
        <div class="text-lg">
          {{ $t("signin.reset-password-des") }}
        </div>
        <div class="lightblue--text">{{ hideEmail }}</div>
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
        <v-tooltip bottom right>
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-bind="attrs"
              v-on="on"
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
          </template>
          <div>
            <div>Password must meet the following requirements:</div>
            <div>● At least 8 characters and less than 32 characters</div>
            <div>● At least one capital letter</div>
            <div>
              ● Allow only letter, numbers and special characters (@$!%*?&)
            </div>
          </div>
        </v-tooltip>
        <PasswordStrength
          :password="userStore.resetPasswordData.password"
          v-if="userStore.resetPasswordData.password"
        />
        <div class="text-xl">{{ $t("signin.new-password-confirm") }}</div>
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
            @click="submitForm"
            ><ArrowRight
          /></v-btn>
        </div>
      </v-form>
      <div v-else class="sign-in-form ma-auto pa-4 pa-sm-8 text-center">
        <div class="success-icon ma-auto d-flex justify-center">
          <v-icon color="white" x-large>mdi-check</v-icon>
        </div>
        <div class="text-dp-xs bungee-font text-xl mt-5">
          {{ $t("signin.password-changed") }}
        </div>
        <div class="text-md mt-2 darkgrey--text">
          {{ $t("signin.password-changed-sub") }}
        </div>
        <div class="text-center mt-5">
          <v-btn
            color="#5E6BE9"
            class="py-7 px-3 btn-submit bungee-font white--text"
            @click="gotoRouter('Signin')"
            >{{ $t("signin.log-in-now") }}</v-btn
          >
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
import PasswordStrength from "@/components/Password-Strength.vue";
export default {
  name: "ResetPassword",
  props: ["code", "email"],
  data() {
    return {
      userStore: userStore(),
      rules: rules,
      hideEmail: "",
    };
  },
  components: {
    ArrowRight,
    PasswordStrength,
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.userStore.resetPasswordData.password ===
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
      this.hideEmail = this.userStore.hideEmail(this.$route.params.email);
    },
    submitForm() {
      this.userStore.resetPassword();
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
      max-width: 464px;
      height: fit-content;
      font-family: Kanit, Helvetica, Arial;
      background: #ffffff;
      box-shadow: inset 0px -8px 0px rgba(0, 0, 0, 0.15);
      border-radius: 24px;
      z-index: 10;
      .success-icon {
        width: 64px;
        height: 64px;
        background: #34c02b;
        box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.25);
        border-radius: 100px;
      }
    }
  }
}
</style>