<template>
  <div class="sign-in-page">
    <div class="sign-in-content d-flex">
      <!-- <div class="sign-in-form ma-auto pa-12"> -->
      <v-form
        ref="form"
        lazy-validation
        class="sign-in-form ma-auto pa-4 pa-sm-8 text-center"
      >
        <div class="success-icon ma-auto d-flex justify-center">
          <v-icon color="white" x-large>mdi-check</v-icon>
        </div>
        <div class="text-dp-xs bungee-font text-xl mt-5">
          {{ $t("signin.verified-successfully") }}
        </div>
        <div class="text-md mt-2 darkgrey--text">
          {{ $t("signin.verified-successfully-sub") }}
        </div>
        <div class="text-dp-md bungee-font greyblack--text">
          {{ countDown }}s
        </div>
        <div class="text-center mt-5">
          <v-btn
            color="#5E6BE9"
            class="py-7 px-3 btn-submit bungee-font white--text"
            @click="gotoRouter('home')"
            >{{ $t("signin.log-in-now") }}</v-btn
          >
        </div>
      </v-form>
      <!-- </div> -->
    </div>
  </div>
</template>
<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import { rules } from "@/plugins/rules";
import { snackBarController } from "@/components/snack-bar/snack-bar-controller";
const snackController = snackBarController();
export default {
  name: "RegisterVertified",
  data() {
    return {
      userStore: userStore(),
      rules: rules,
    };
  },
  components: {},
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
  computed: {
    countDown() {
      return this.userStore.vetifyAccount.countSeconds;
    }
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
    fetchData() {
      if (this.$route.query.confirmation) {
        this.userStore.vertifyRegister(this.$route.query.confirmation);
      } else {
        snackController.error("Please try again!");
        this.$router.push({
          params: { lang: i18n.locale },
          name: "Signup",
        });
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