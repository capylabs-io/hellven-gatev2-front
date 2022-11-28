<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <div class="sign-in-form ma-auto pa-12">
        <div class="text-dp-xs bungee-font text-center">{{ $t("signin.signin") }}</div>
        <div class="text-xl mt-4">{{ $t("ID") }}</div>
        <v-text-field solo filled hide-details="true" full-width class="mt-2"></v-text-field>
        <div class="text-xl mt-2">{{ $t("signin.password") }}</div>
        <v-text-field
          solo
          filled
          hide-details="true"
          full-width
          type="password"
          class="mt-2"
        ></v-text-field>
        <div class="d-flex mt-6">
          <v-btn color="#2B69EA" class="px-14"><FacebookIcon /></v-btn>
          <v-btn color="white" class="px-14 mx-2"><GoogleIcon /></v-btn>
          <v-btn color="black" class="px-14"><AppleIcon /></v-btn>
        </div>
        <v-checkbox class="text-lg" :label='$t("signin.remember-me")'></v-checkbox>
        <div class="text-center">
            <v-btn x-small color="#5E6BE9" class="py-5"><v-icon color="white">mdi-arrow-right-bold</v-icon></v-btn>
        </div>
        <div class="text-center mt-6">
            <v-btn text class="text-capitalize text-md" @click="gotoRouter('ForgetPassword')">{{ $t("signin.forget-password") }}</v-btn>
        </div>
        <div class="text-center">
            <v-btn text class="text-capitalize text-md" @click="gotoRouter('Signup')">{{ $t("signin.create-new-account") }}</v-btn>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import FacebookIcon from "@/components/svg/facebook.vue";
import GoogleIcon from "@/components/svg/google.vue";
import AppleIcon from "@/components/svg/apple.vue";
import i18n from "@/i18n";
export default {
  name: "Signin",
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