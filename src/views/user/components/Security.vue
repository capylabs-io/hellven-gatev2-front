<template>
  <div class="account-detail pa-3">
    <ChangePassword />
    <div
      class="
        greyblack--text
        text-dp-xs
        font-weight-medium
        text-uppercase
        bungee-font
      "
    >
      Security
    </div>
    <v-card class="card-content mt-3">
      <v-card-title>
        <div class="d-flex justify-space-between full-width">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            {{ $t("signin.password") }}
          </div>
          <div
            class="cursor-pointer"
            @click="userStore.changeOpenChangePassword()"
          >
            <EditIcon />
            <span class="violet--text ml-2">EDIT</span>
          </div>
        </div>
        <div class="text-md text-sub">
          {{ $t("account.change-password-sub") }}
        </div>
      </v-card-title>

      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>{{
              $t("signin.password")
            }}</v-list-item-subtitle>
            <v-list-item-content>
              Last updated {{ getLaschangePass }}
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="card-content mt-3">
      <v-card-title>
        <div class="d-flex justify-space-between full-width">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            SECRET QUESTION
          </div>
          <div>
            <EditIcon />
            <span class="violet--text ml-2">EDIT</span>
          </div>
        </div>
      </v-card-title>

      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Question</v-list-item-subtitle>
            <v-list-item-content> Is CZ bald or not? </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import EditIcon from "@/components/svg/editIcon.vue";
import ChangePassword from "../dialogs/change-password.vue";

export default {
  name: "Security",
  data() {
    return {
      userStore: userStore(),
    };
  },
  components: {
    EditIcon,
    ChangePassword,
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
  },
  computed: {
    getLaschangePass() {
      const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
      if (userInfo.metadata) {
        var data = userInfo.metadata;
        return new Date(data.lastChangePassword).toLocaleDateString("en-US") || "";
      }
      return "";
    },
  },
};
</script>
<style lang="scss">
.account-detail {
  min-height: 100%;
  .card-content {
    background: #ffffff;
    box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
    border-radius: 12px;
  }
  .border-raidus-top {
    border-radius: 12px 12px 0 0;
  }
  .border-raidus-bottom {
    border-radius: 0 0 12px 12px;
  }
  .text-sub {
    color: rgba(0, 0, 0, 0.6);
  }
}
</style>