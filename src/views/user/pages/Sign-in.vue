<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <!-- <div class="sign-in-form ma-auto pa-12"> -->
      <v-form
        ref="form"
        lazy-validation
        class="sign-in-form ma-auto pa-4 pa-sm-8"
      >
        <div
          class="btn-back pa-0 cursor-pointer"
          @click="gotoRouter('home')"
        >
          <v-icon small color="white"> mdi-chevron-left</v-icon>
          <span class="text-capitalize white--text">Back</span>
        </div>
        <div class="text-dp-xs bungee-font text-center">
          {{ $t("signin.signin") }}
        </div>
        <div class="text-xl mt-sm-4 mt-2">{{ $t("signin.ID") }}</div>
        <v-text-field
          v-model="userStore.siginInData.identifier"
          :rules="rules.checkIdentifier"
          type="text"
          background-color="cream"
          class="mt-2"
          solo
          dense
        ></v-text-field>
        <div class="text-xl">{{ $t("signin.password") }}</div>
        <v-text-field
          :append-icon="userStore.isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="rules.password"
          :type="userStore.isShowPass ? 'text' : 'password'"
          @click:append="userStore.isShowPass = !userStore.isShowPass"
          solo
          dense
          background-color="cream"
          v-model="userStore.siginInData.password"
          class="mt-2"
        ></v-text-field>
        <v-row class="mt-sm-2">
          <v-col cols="4" class="pa-1"
            ><v-btn color="#2B69EA" class="full-width py-0 py-sm-5"><FacebookIcon /></v-btn
          ></v-col>
          <v-col cols="4" class="pa-1"
            ><v-btn color="white" class="full-width py-0 py-sm-5"><GoogleIcon /></v-btn
          ></v-col>
          <v-col cols="4" class="pa-1"
            ><v-btn color="black" class="full-width py-0 py-sm-5"><AppleIcon /></v-btn
          ></v-col>
        </v-row>
        <v-checkbox
          class="text-lg mt-sm-4"
          hide-details="true"
          :label="$t('signin.remember-me')"
        ></v-checkbox>
        <div class="text-center mt-2">
          <v-btn
            x-small
            color="#5E6BE9"
            class="py-7 px-3 btn-submit"
            @click="submitForm"
            ><ArrowRight
          /></v-btn>
        </div>
        <div class="text-center">
          <div
            x-small
            class="text-capitalize text-md cursor-pointer mt-2"
            @click="gotoRouter('ForgetPassword')"
            >{{ $t("signin.forget-password") }}</div
          >
        </div>
        <div class="text-center">
          <div
            x-small
            class="text-capitalize text-md cursor-pointer"
            @click="gotoRouter('Signup')"
            >{{ $t("signin.create-new-account") }}</div
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
import { rules } from "@/plugins/rules";
import ArrowRight from "@/components/svg/arrow-right.vue";
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
    ArrowRight,
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
    submitForm() {
      if (this.$refs.form.validate()) {
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
  height: auto;
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
  .btn-back {
    position: absolute;
    top: 7%;
    left: 5%;
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
    }
  }
  @media screen and (max-width: 600px) {
    .text-dp-xs {
      font-size: 16px !important;
      line-height: 24px !important;
    }
    .text-xl {
      font-size: 14px !important;
      line-height: 20px !important;
    }
    .text-md {
      font-size: 12px !important;
      line-height: 16px !important;
    }
  }
}
</style>