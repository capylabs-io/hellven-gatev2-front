<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <!-- <div class="sign-in-form ma-auto pa-12"> -->
      <v-form ref="form" lazy-validation class="sign-in-form ma-auto pa-12">
        <div class="text-dp-xs bungee-font text-center">
          {{ $t("signin.signin") }}
        </div>
        <v-alert
          class="deeporange--text mt-4"
          dense
          outlined
          type="error"
          v-if="userStore.errorMessage"
        >
          {{ userStore.errorMessage }}
        </v-alert>
        <div class="text-xl mt-4">{{ $t("signin.ID") }}</div>
        <v-text-field
          v-model="userStore.siginInData.identifier"
          :rules="rules.checkIdentifier"
          solo
          background-color="cream"
          full-width
          class="mt-2"
        ></v-text-field>
        <div class="text-xl">{{ $t("signin.password") }}</div>
        <v-text-field
          :append-icon="userStore.isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="rules.password"
          :type="userStore.isShowPass ? 'text' : 'password'"
          @click:append="userStore.isShowPass = !userStore.isShowPass"
          solo
          background-color="cream"
          v-model="userStore.siginInData.password"
          class="mt-2"
        ></v-text-field>
        <div class="d-flex mt-6 flex-sm-row flex-column">
          <v-btn color="#2B69EA" class="px-14"><FacebookIcon /></v-btn>
          <v-btn color="white" class="px-14 mx-sm-2 my-sm-0 my-2 mx-0"
            ><GoogleIcon
          /></v-btn>
          <v-btn color="black" class="px-14"><AppleIcon /></v-btn>
        </div>
        <v-checkbox
          class="text-lg"
          :label="$t('signin.remember-me')"
        ></v-checkbox>
        <div class="text-center">
          <v-btn
            x-small
            color="#5E6BE9"
            class="py-5"
            @click="submitForm"
            ><v-icon color="white">mdi-arrow-right-bold</v-icon></v-btn
          >
        </div>
        <div class="text-center mt-6">
          <v-btn
            text
            class="text-capitalize text-md"
            @click="gotoRouter('ForgetPassword')"
            >{{ $t("signin.forget-password") }}</v-btn
          >
        </div>
        <div class="text-center">
          <v-btn
            text
            class="text-capitalize text-md"
            @click="gotoRouter('Signup')"
            >{{ $t("signin.create-new-account") }}</v-btn
          >
        </div>
      </v-form>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import FacebookIcon from "@/components/svg/facebook.vue";
import GoogleIcon from "@/components/svg/google.vue";
import AppleIcon from "@/components/svg/apple.vue";
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import {rules} from "@/plugins/rules";
export default {
  name: "Signin",
  data() {
    return {
      userStore: userStore(),
      rules: rules,
    };
  },
  components: {
    FacebookIcon,
    GoogleIcon,
    AppleIcon,
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
    submitForm() {
      if (this.$refs.form.validate()){
        this.userStore.signIn();
      }
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