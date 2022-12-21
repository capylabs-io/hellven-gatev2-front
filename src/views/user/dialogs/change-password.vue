<template>
  <v-dialog
    transition="dialog-bottom-transition"
    v-model="userStore.isOpenChangePassword"
    width="500px"
    persistent
  >
    <v-form ref="form" lazy-validation>
      <v-card class="box white">
        <v-card-title>
          <div class="justify-space-between full-width d-flex">
            <div
              class="text-lg greyblack--text font-weight-medium text-uppercase"
            >
              {{ $t("signin.password") }}
            </div>
            <v-icon
              class="mr-1"
              @click="userStore.changeOpenChangePassword()"
              color="blueJeans"
              >mdi-close</v-icon
            >
          </div>
          <div class="text-lg darkgrey--text">
            {{ $t("account.change-password-sub") }}
          </div>
        </v-card-title>
        <v-card-text class="mt-3 text-sm font-weight-regular">
          <div class="text-xl">{{ $t("account.old-password") }}</div>
          <v-text-field
            v-model="oldPass"
            :append-icon="isShowOldPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="isShowOldPass ? 'text' : 'password'"
            @click:append="isShowOldPass = !isShowOldPass"
            solo
            background-color="cream"
            :rules="rules.password"
            full-width
            class="mt-2"
            :placeholder='$t("account.enter-old-passwrord")'
          ></v-text-field>
          <div class="text-xl mt-4">
            <span>{{ $t("signin.new-password") }}</span>
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
            v-model="newPass"
            :append-icon="isShowNewPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="isShowNewPass ? 'text' : 'password'"
            @click:append="isShowNewPass = !isShowNewPass"
            solo
            background-color="cream"
            :rules="rules.password"
            full-width
            class="mt-2"
            :placeholder='$t("account.enter-new-passwrord")'
          ></v-text-field>
          <PasswordStrength
            :password="newPass"
            v-if="newPass"
          />
          <div class="text-xl">{{ $t("signin.new-password-confirm") }}</div>
          <v-text-field
            v-model="confirmPass"
            @click:append="isShowConfirmPass = !isShowConfirmPass"
            solo
            :append-icon="isShowConfirmPass ? 'mdi-eye' : 'mdi-eye-off'"
            :type="isShowConfirmPass ? 'text' : 'password'"
            background-color="cream"
            :rules="[passwordConfirmationRule]"
            full-width
            class="mt-2"
            :placeholder='$t("account.re-enter-new-password")'
          ></v-text-field>
        </v-card-text>
        <v-card-actions
          class="d-flex flex-row align-center px-6 pb-6 bungee-font"
        >
          <v-btn
            color="violet"
            class="btn-gray-11 px-4 white--text"
            @click="submitForm()"
            >Save</v-btn
          >
          <v-btn
            outlined
            color="violet"
            class="px-4"
            @click="userStore.changeOpenChangePassword()"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
  </v-dialog>
</template>

<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import { rules } from "@/plugins/rules";
import PasswordStrength from "@/components/Password-Strength.vue";

export default {
  name: "ChangePassword",
  data() {
    return {
      userStore: userStore(),
      userInfo: [],
      rules: rules,
      lang: i18n.locale,
      isShowOldPass: false,
      isShowNewPass: false,
      isShowConfirmPass: false,
      oldPass: "",
      newPass: "",
      confirmPass: ""
    };
  },
  computed: {
    passwordConfirmationRule() {
      return () =>
        this.newPass ===
          this.confirmPass ||
        "Password must match";
    },
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  components: {
    PasswordStrength
  },
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.userStore.changePassword(this.oldPass, this.newPass, this.confirmPass);
      }
    },
  },
};
</script>

<style scoped>
.box {
  background: #ffffff;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
}
</style>