<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <div class="sign-in-form ma-auto pa-12">
        <div class="text-dp-xs bungee-font text-center">
          {{ $t("signin.forget-password") }}
        </div>
        <div class="text-lg text-center">
          {{ $t("signin.forget-password-des") }}
        </div>
        <div class="text-xl mt-4">{{ $t("signin.username") }}</div>
        <v-text-field
          outlined
          background-color="cream"
          dense
          hide-details="true"
          full-width
          class="mt-2"
        ></v-text-field>
        <div class="text-center pt-4">
          <v-btn x-small color="#5E6BE9" class="py-5"
            ><v-icon color="white">mdi-arrow-right-bold</v-icon></v-btn
          >
        </div>
        <div class="text-center pt-4">
          <v-btn
            text
            class="text-capitalize text-md"
            >{{ $t("signin.contact-support") }}</v-btn
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ForgetPassword",
  components: {},
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