<template>
  <v-dialog
    transition="dialog-bottom-transition"
    v-model="userStore.isOpenEmailEdit"
    width="486px"
    persistent
  >
    <v-form v-if="!showCheckAuth" ref="form" lazy-validation>
      <v-card class="box white">
        <v-card-title class="justify-space-between">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            {{ $t("signin.email") }}
          </div>
          <v-icon
            class="mr-1"
            @click="userStore.changeEmailEdit()"
            color="blueJeans"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-card-text class="mt-3 text-sm font-weight-regular">
          <div class="text-xl mt-2 mt-sm-4">{{ $t("signin.email") }}</div>
          <v-text-field
            v-model="newEmail"
            :rules="rules.email"
            full-width
            class="mt-1 mt-sm-2"
            background-color="cream"
            solo
            dense
          ></v-text-field>
        </v-card-text>
        <v-card-actions
          class="d-flex flex-row align-center px-6 pb-6 bungee-font"
        >
          <v-btn
            color="violet"
            class="btn-gray-11 px-4 white--text"
            @click="checkAuth()"
            >Save</v-btn
          >
          <v-btn
            outlined
            color="violet"
            class="px-4"
            @click="userStore.changeEmailEdit()"
            >Cancel</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-form>
    <v-card class="box white" v-else>
      <v-card-title>
        <div class="d-flex justify-space-between full-width">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            {{ $t("account.reentry-pass") }}
          </div>
          <v-icon
            class="mr-1"
            @click="userStore.changeEmailEdit()"
            color="blueJeans"
            >mdi-close</v-icon
          >
        </div>
        <div class="text-center darkgrey--text text-md">
          Because you’re accessing sensitive info, you need to verify your
          password for this account.
        </div>
      </v-card-title>
      <v-card-text class="mt-3 text-sm font-weight-regular">
        <div class="text-xl mt-2 mt-sm-4">{{ $t("signin.password") }}</div>
        <v-text-field
          v-model="password"
          :append-icon="isShowPass ? 'mdi-eye' : 'mdi-eye-off'"
          :type="isShowPass ? 'text' : 'password'"
          @click:append="isShowPass = !isShowPass"
          solo
          background-color="cream"
          :rules="rules.password"
          full-width
          class="mt-2"
          :placeholder="$t('signin.password')"
        ></v-text-field>
        <div class="text-center lightblue--text cursor-pointer" @click="gotoRouter('ForgetPassword')">
          {{ $t("signin.forget-password") }}
        </div>
      </v-card-text>
      <v-card-actions
        class="d-flex flex-row align-center px-6 pb-6 bungee-font"
      >
        <v-btn
          color="violet"
          class="btn-gray-11 px-4 white--text"
          @click="editMail()"
          >Sign in</v-btn
        >
        <v-btn
          outlined
          color="violet"
          class="px-4"
          @click="userStore.changeEmailEdit()"
          >Cancel</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import { rules } from "@/plugins/rules";

export default {
  name: "EmailEdit",
  data() {
    return {
      userStore: userStore(),
      rules: rules,
      lang: i18n.locale,
      isShowPass: false,
      showCheckAuth: false,
      newEmail: "",
      password: "",
    };
  },
  components: {},
  methods: {
    checkAuth() {
      if (this.$refs.form.validate()) {
        this.showCheckAuth = true;
      }
    },
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
    editMail() {
      this.userStore.editEmail(this.newEmail, this.password);
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