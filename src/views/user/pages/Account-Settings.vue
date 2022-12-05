<template>
  <div class="account-settings background">
    <div class="content pa-7 ma-auto">
      <v-row>
        <v-col cols="12" md="4" class="pa-3">
          <v-card class="content-menu">
            <v-list class="menu-list pa-0 greyblack--text">
              <v-list-item
                class="border-raidus-top"
                :class="userStore.accountSettingMenu == 1 ? 'violet' : ''"
                @click="userStore.accountSettingMenu = 1"
              >
                <v-icon
                  class="mr-2"
                  :color="userStore.accountSettingMenu == 1 ? 'white' : ''"
                  >mdi-account-outline</v-icon
                >
                <span>Account Details</span>
              </v-list-item>
              <v-list-item
                :class="userStore.accountSettingMenu == 2 ? 'violet' : ''"
                @click="userStore.accountSettingMenu = 2"
              >
                <v-icon
                  class="mr-2"
                  :color="userStore.accountSettingMenu == 2 ? 'white' : ''"
                  >mdi-shield-outline</v-icon
                >
                <span>Security</span>
              </v-list-item>
              <v-list-item
                :class="userStore.accountSettingMenu == 3 ? 'violet' : ''"
                @click="userStore.accountSettingMenu = 3"
              >
                <v-icon
                  class="mr-2"
                  :color="userStore.accountSettingMenu == 3 ? 'white' : ''"
                  >mdi-lock-outline</v-icon
                >
                <span>Privacy & Communication</span>
              </v-list-item>
              <v-list-item
                :class="userStore.accountSettingMenu == 4 ? 'violet' : ''"
                class="border-raidus-bottom"
                @click="userStore.accountSettingMenu = 4"
              >
                <v-icon
                  class="mr-2"
                  :color="userStore.accountSettingMenu == 4 ? 'white' : ''"
                  >mdi-cart-outline</v-icon
                >
                <span>Transaction History</span>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col class="pa-3">
          <AccountDetail v-if="userStore.accountSettingMenu == 1" />
          <Security v-else-if="userStore.accountSettingMenu == 2" />
          <Privacy v-else-if="userStore.accountSettingMenu == 3" />
          <TransactionHistory v-else-if="userStore.accountSettingMenu == 4" />
        </v-col>
      </v-row>
    </div>
  </div>
</template>
<script>
import i18n from "@/i18n";
import { userStore } from "../stores/userStore.js";
import AccountDetail from "../components/Account-Detail.vue";
import Security from "../components/Security.vue";
import Privacy from "../components/Privacy.vue";
import TransactionHistory from "../components/Transaction-History.vue";
export default {
  name: "AccountSettings",
  data() {
    return {
      userStore: userStore(),
    };
  },
  components: {
    AccountDetail,
    Security,
    Privacy,
    TransactionHistory
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
  },
};
</script>
<style lang="scss">
.account-settings {
  min-height: 100%;
  font-family: Kanit, Helvetica, Arial !important;
  .content {
    max-width: 1440px;
    .content-menu {
      box-shadow: inset 0px -4px 0px rgba(0, 0, 0, 0.15);
      border-radius: 12px;
      .violet {
        color: white;
      }
    }
  }
  .border-raidus-top {
    border-radius: 12px 12px 0 0;
  }
  .border-raidus-bottom {
    border-radius: 0 0 12px 12px;
  }
}
</style>