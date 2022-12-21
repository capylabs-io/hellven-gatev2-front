<template>
  <v-dialog
    transition="dialog-bottom-transition"
    v-model="userStore.isOpenPrivacyEdit"
    width="894px"
    persistent
  >
    <v-form ref="form" lazy-validation>
      <v-card class="box white">
        <v-card-title class="justify-space-between">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            {{ $t("account.game-privacy") }}
          </div>
          <v-icon
            class="mr-1"
            @click="userStore.changePrivacyEdit()"
            color="blueJeans"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-card-text class="mt-3 text-sm font-weight-regular">
          <div class="text-xl mt-2 mt-sm-4">
            {{ $t("account.share-game-data") }}
          </div>
          <v-row>
            <v-col cols="10">
              <div class="black--text">
                {{ $t("account.share-game-data-des") }}
              </div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-checkbox
                color="violet"
                class="text-lg pt-0"
                hide-details
                v-model="check"
              ></v-checkbox>
            </v-col>
          </v-row>
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
            @click="userStore.changePrivacyEdit()"
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

export default {
  name: "PrivacyEdit",
  data() {
    return {
      userStore: userStore(),
      userInfo: [],
      rules: rules,
      lang: i18n.locale,
      check: false,
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  components: {},
  methods: {
    submitForm() {
      this.userStore.changePrivacyEdit();
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