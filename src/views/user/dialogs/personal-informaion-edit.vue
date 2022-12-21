<template>
  <v-dialog
    transition="dialog-bottom-transition"
    v-model="userStore.isOpenPersonalInfoEdit"
    width="400px"
    persistent
  >
    <v-form ref="form" lazy-validation>
      <v-card class="box white">
        <v-card-title class="justify-space-between">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            {{ $t("account.personal-info") }}
          </div>
          <v-icon
            class="mr-1"
            @click="userStore.changePersonalInfoEdit()"
            color="blueJeans"
            >mdi-close</v-icon
          >
        </v-card-title>
        <v-card-text class="mt-3 text-sm font-weight-regular">
          <div class="text-xl mt-2 mt-sm-4">{{ $t("signin.username") }}</div>
          <v-text-field
            v-model="userInfo.username"
            :rules="rules.required"
            full-width
            class="mt-1 mt-sm-2"
            background-color="cream"
            solo
            dense
          ></v-text-field>
          <div class="text-xl">{{ $t("account.country") }}</div>
          <v-select
            class="cursor-pointer"
            label="Please select your country"
            v-model="userInfo.country"
            background-color="cream"
            solo
            dense
            :items="countryList"
          >
          </v-select>
          <div class="text-xl mt-1 mt-sm-2">
            {{ $t("signin.date-of-birth") }}
          </div>
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
                v-model="userInfo.dateOfBirth"
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
              v-model="userInfo.dateOfBirth"
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
            @click="userStore.changePersonalInfoEdit()"
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
import { countryList } from "@/plugins/country";

export default {
  name: "PersonalInformationEdit",
  data() {
    return {
      userStore: userStore(),
      userInfo: [],
      rules: rules,
      activePicker: null,
      menu: false,
      lang: i18n.locale,
      countryList: countryList,
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  watch: {
    menu(val) {
      val && setTimeout(() => (this.activePicker = "YEAR"));
    },
  },
  components: {},
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
    save(date) {
      this.$refs.menu.save(date);
    },
    submitForm() {
      if (this.$refs.form.validate()) {
        this.userStore.editPersonalInfo(this.userInfo);
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
