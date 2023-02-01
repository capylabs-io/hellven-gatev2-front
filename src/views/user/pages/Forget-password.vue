<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <v-form ref="form" lazy-validation class="sign-in-form ma-auto pa-12">
        <div class="btn-back pa-0 cursor-pointer" @click="gotoRouter('Signin')">
          <v-icon small color="white"> mdi-chevron-left</v-icon>
          <span class="text-capitalize white--text">Back</span>
        </div>
        <div class="text-dp-xs bungee-font text-center">
          {{ $t("signin.forget-password") }}
        </div>
        <div class="text-lg text-center">
          {{ $t("signin.forget-password-des") }}
        </div>
        <div
          class="pa-3 lightcyan border-radius-12 my-4"
          v-if="userStore.forgetPasswordData.isSuccess"
        >
          {{ $t("signin.forget-password-done")
          }}<a>{{ $t("signin.forget-password-contact") }}</a>
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
          v-model="userStore.forgetPasswordData.email"
          :rules="rules.checkIdentifier"
          solo
          background-color="cream"
          full-width
          :disabled="userStore.forgetPasswordData.isSuccess"
          class="mt-2"
        ></v-text-field>
        <div class="text-center">
          <v-btn
            x-small
            color="#5E6BE9"
            class="py-7 px-3 btn-submit"
            :disabled="
              userStore.forgetPasswordData.isSuccess ||
              userStore.forgetPasswordData.email === ''
            "
            @click="submitForm"
            ><ArrowRight
          /></v-btn>
        </div>
        <div class="text-center pt-4">
          <v-btn text class="text-capitalize text-md">{{
            $t("signin.contact-support")
          }}</v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import ArrowRight from "@/components/svg/arrow-right.vue";
import { rules } from "@/plugins/rules";
export default {
  name: "ForgetPassword",
  data() {
    return {
      userStore: userStore(),
      rules: rules,
    };
  },
  components: {
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
        this.userStore.forgetPassword();
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
      max-width: 464px;
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