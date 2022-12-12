<template>
  <div class="sign-in-page">
    <div class="btn-back pa-0 cursor-pointer">
      <v-icon small color="white"> mdi-chevron-left</v-icon>
      <span class="text-capitalize white--text">Back</span>
    </div>
    <div class="sign-in-content d-flex">
      <v-form
        ref="form"
        lazy-validation
        class="sign-in-form ma-auto pa-4 pa-sm-8"
      >
        <div class="btn-back pa-0 cursor-pointer" @click="gotoRouter('Signin')">
          <v-icon small color="white"> mdi-chevron-left</v-icon>
          <span class="text-capitalize white--text">Back</span>
        </div>
        <div class="text-dp-xs bungee-font text-center">
          <span>{{ $t("signin.sign-up") }}</span>
        </div>
        <v-alert
          class="deeporange--text mt-2 mt-sm-4"
          dense
          outlined
          type="error"
          v-if="userStore.errorMessage"
        >
          {{ userStore.errorMessage }}
        </v-alert>
        <div class="text-xl mt-2 mt-sm-4">{{ $t("signin.email") }}</div>
        <v-text-field
          v-model="userStore.userData.email"
          :rules="rules.email"
          full-width
          class="mt-1 mt-sm-2"
          background-color="cream"
          solo
          dense
        ></v-text-field>
        <div class="text-xl">{{ $t("signin.phone") }}</div>
        <v-text-field
          v-model="userStore.userData.username"
          solo
          :rules="rules.phone"
          background-color="cream"
          full-width
          class="mt-1 mt-sm-2"
          dense
        ></v-text-field>
        <div class="text-xl">
          <span>{{ $t("signin.password") }}</span>
          <v-tooltip top>
            <template v-slot:activator="{ on, attrs }">
              <v-icon class="ml-1" small v-bind="attrs" v-on="on"
                >mdi-alert-circle-outline</v-icon
              >
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
        </div>

        <v-text-field
          :append-icon="userStore.isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="userStore.isShowPass ? 'text' : 'password'"
          @click:append="userStore.isShowPass = !userStore.isShowPass"
          v-model="userStore.userData.password"
          solo
          :rules="rules.password"
          background-color="cream"
          full-width
          class="mt-1 mt-sm-2"
          dense
        ></v-text-field>
        <PasswordStrength
          :password="userStore.userData.password"
          v-if="userStore.userData.password"
        />
        <div class="text-xl">{{ $t("signin.confirm-password") }}</div>
        <v-text-field
          solo
          full-width
          :append-icon="userStore.isShowConfirmPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="userStore.isShowConfirmPass ? 'text' : 'password'"
          @click:append="
            userStore.isShowConfirmPass = !userStore.isShowConfirmPass
          "
          background-color="cream"
          v-model="confirmPassword"
          class="mt-1 mt-sm-2"
          :rules="[passwordConfirmationRule]"
          dense
        ></v-text-field>
        <div class="text-xl mt-1 mt-sm-2">{{ $t("signin.date-of-birth") }}</div>
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
              v-model="userStore.userData.dateOfbirth"
              prepend-icon="mdi-calendar"
              readonly
              full-width
              v-bind="attrs"
              hide-details
              v-on="on"
              background-color="cream"
              solo
              dense
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="userStore.userData.dateOfbirth"
            no-title
            scrollable
            :active-picker.sync="activePicker"
            :max="
              new Date(Date.now() - new Date().getTimezoneOffset() * 60000)
                .toISOString()
                .substr(0, 10)
            "
            min="1940-01-01"
            @change="save"
            color="blue"
            :locale="lang"
          >
          </v-date-picker>
        </v-menu>
        <v-checkbox
          class="text-lg pt-0"
          hide-details
          v-model="acceptTerm"
          :disabled="!isAllInputed"
          :label="$t('signin.accept-term-service')"
        ></v-checkbox>
        <div class="text-center mt-1 mt-sm-2">
          <v-btn
            x-small
            color="#5E6BE9"
            class="py-7 px-3 btn-submit"
            @click="submitForm"
            :disabled="!acceptTerm"
            ><ArrowRight
          /></v-btn>
        </div>
      </v-form>
    </div>
  </div>
</template>
<script>
import { userStore } from "../stores/userStore.js";
import i18n from "@/i18n";
import { rules } from "@/plugins/rules";
import PasswordStrength from "@/components/Password-Strength.vue";
import ArrowRight from "@/components/svg/arrow-right.vue";
export default {
  name: "Signup",
  components: {
    PasswordStrength,
    ArrowRight,
  },
  data() {
    return {
      activePicker: null,
      menu: false,
      userStore: userStore(),
      lang: i18n.locale,
      rules: rules,
      confirmPassword: "",
      acceptTerm: false,
    };
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.userStore.userData.password === this.confirmPassword ||
        "Password must match";
    },
    isAllInputed() {
      if (
        this.userStore.userData.email == "" ||
        this.userStore.userData.username == "" ||
        this.userStore.userData.password == "" ||
        this.confirmPassword == "" ||
        this.userStore.userData.dateOfbirth == ""
      ) {
        return false;
      }
      return true;
    },
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: this.lang },
        name: url,
      });
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        this.userStore.registerUser();
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
}
@media screen and (max-width: 600px) {
  .sign-in-page {
    min-height: 810px !important;
    .sign-in-content {
      min-height: 810px !important;
    }
  }
}
</style>