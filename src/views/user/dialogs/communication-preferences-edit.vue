<template>
  <v-dialog
    transition="dialog-bottom-transition"
    v-model="userStore.isOpenCommunicationPreferencesEdit"
    width="894px"
    persistent
  >
    <v-form ref="form" lazy-validation>
      <v-card class="box white">
        <v-card-title class="justify-space-between">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            {{ $t("account.communication-preferences") }}
          </div>
          <v-icon
            class="mr-1"
            @click="userStore.changeCommunicationPreferencesEdit()"
            color="blueJeans"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-card-text class="mt-3 text-sm font-weight-regular">
          <div class="d-flex justify-space-between">
            <div class="text-xl mt-2 mt-sm-4">
              {{ $t("account.languge") }}
            </div>
            <div class="width-148">
              <v-menu>
                <template v-slot:activator="{ on, attrs }">
                  <v-btn v-bind="attrs" v-on="on">
                    <div class="d-flex align-center justify-space-between">
                      <div>{{choseLang}}</div>
                      <div><v-icon>mdi-chevron-down</v-icon></div>
                    </div>
                    </v-btn>
                </template>
                <v-list>
                  <v-list-item v-for="item in langList" :key="item.value" @click="setChoseLang(item.label)">
                    <v-list-item-title>{{item.label}}</v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-menu>
            </div>
          </div>
          <div class="text-xl mt-4">
            {{ $t("account.push-notification") }}
          </div>
          <v-row class="align-center">
            <v-col cols="10">
              <div class="black--text">
                {{ $t("account.push-notification-des") }}
              </div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-checkbox
                color="violet"
                class="text-lg pt-0"
                hide-details
                v-model="check1"
              ></v-checkbox>
            </v-col>
          </v-row>
          <div class="text-xl">
            {{ $t("account.new-offers") }}
          </div>
          <v-row class="align-center">
            <v-col cols="10">
              <div class="black--text">
                {{ $t("account.new-offers-des") }}
              </div>
            </v-col>
            <v-col cols="2" class="d-flex justify-end">
              <v-checkbox
                color="violet"
                class="text-lg pt-0"
                hide-details
                v-model="check2"
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
            @click="userStore.changeCommunicationPreferencesEdit()"
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
  name: "CommunicationPreferencesEdit",
  data() {
    return {
      userStore: userStore(),
      userInfo: [],
      rules: rules,
      lang: i18n.locale,
      check1: false,
      check2:false,
      choseLang: "",
      langList: [
        { label: "English", value: "en" },
        { label: "Vietnames", value: "vn" },
      ],
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    this.langList.forEach(e => {
        if (e.value == i18n.locale) {
          this.choseLang = e.label;
        }
      });
  },
  components: {},
  methods: {
    setChoseLang(value) {
      this.choseLang = value;
    },
    submitForm() {
      this.$router.push({
        params: { lang: this.getLang },
        name: "AccountSettings",
      });
      this.userStore.changeCommunicationPreferencesEdit();
    },
  },
  computed: {
    getLang() {
      this.langList.forEach(e => {
        if (e.label == this.choseLang) {
          return e.value;
        }
      });
      return "en";
    }
  }
};
</script>

<style scoped>
.box {
  background: #ffffff;
  box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
}
.width-148 {
  width: 148px;
}
</style>