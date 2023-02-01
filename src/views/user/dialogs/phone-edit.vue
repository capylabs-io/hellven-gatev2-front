<template>
  <v-dialog
    transition="dialog-bottom-transition"
    v-model="usersStore.isOpenPhoneEdit"
    width="500px"
    persistent
  >
    <v-form ref="form">
      <v-card class="box white">
        <v-card-title>
          <div class="d-flex justify-space-between full-width">
            <div
              class="text-lg greyblack--text font-weight-medium text-uppercase"
            >
              {{ $t("signin.phone") }}
            </div>
            <div>
              <v-icon
                class="mr-1"
                @click="usersStore.changePhoneEdit()"
                color="blueJeans"
                >mdi-close</v-icon
              >
            </div>
          </div>
          <div class="text-md text-sub">
            Use your phone number as your account name to log in. You can also
            opt in to receive security-related alerts.
          </div>
        </v-card-title>

        <v-card-text class="mt-3 text-sm font-weight-regular">
          <div class="text-xl mt-2 mt-sm-4">{{ $t("signin.phone") }}</div>
          <v-text-field
            v-model="userInfo.phone"
            :rules="$rules.phone"
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
            @click="submitForm()"
            >Save</v-btn
          >
          <v-btn
            outlined
            color="violet"
            class="px-4"
            @click="usersStore.changePhoneEdit()"
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
import { mapStores } from "pinia";
export default {
  name: "PhoneEdit",
  data() {
    return {
      // userStore: userStore(),
      userInfo: [],
      lang: i18n.locale,
    };
  },
  computed: {
    ...mapStores(userStore),
  },
  mounted() {
    // this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    this.userInfo = this.usersStore.userData;
  },
  // created() {
  //   this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  // },
  components: {},
  methods: {
    submitForm() {
      if (this.$refs.form.validate()) {
        this.usersStore.editPersonalInfo(this.userInfo);
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

