<template>
  <div class="account-detail pa-3">
    <PrivacyEdit/>
    <CommunicationPreferencesEdit/>
    <div class="greyblack--text text-dp-xs font-weight-medium text-uppercase">
      {{ $t("account.privacy-commmunication") }}
    </div>
    <v-card class="card-content mt-3">
      <v-card-title>
        <div class="d-flex justify-space-between full-width">
          <div
            class="text-lg greyblack--text font-weight-medium text-uppercase"
          >
            {{ $t("account.game-privacy") }}
          </div>
          <div class="cursor-pointer" @click="userStore.changePrivacyEdit()">
            <EditIcon />
            <span class="violet--text ml-2">EDIT</span>
          </div>
        </div>
        <div class="text-md text-sub">
          We recommend updating your password periodically to prevent
          unauthorized access.
        </div>
      </v-card-title>

      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Share Game Data</v-list-item-subtitle>
            <v-list-item-content class="max-width-862">
              Lorem ipsum dolor sit amet consectetur. Dictum tincidunt eu
              penatibus pretium consectetur ut condimentum sapien maecenas. Sit
              venenatis massa eros bibendum. Nibh facilisis ut consequat
              ultrices egestas. Fermentum massa egestas pharetra massa
              consequat.
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
            communication preferences
          </div>
          <div class="cursor-pointer" @click="userStore.changeCommunicationPreferencesEdit()">
            <EditIcon />
            <span class="violet--text ml-2">EDIT</span>
          </div>
        </div>
      </v-card-title>

      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Language</v-list-item-subtitle>
            <v-list-item-content>
              <div class="d-flex justify-space-between">
                <div class="max-width-690">
                  We recommend updating your password periodically to prevent
                  unauthorized access.
                </div>
                <div>{{lang.label}} ({{lang.value}})</div>
              </div>
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Push notification</v-list-item-subtitle>
            <v-list-item-content>
              <div class="d-flex justify-space-between">
                <div class="max-width-690">
                  Lorem ipsum dolor sit amet consectetur. Dictum tincidunt eu
                  penatibus pretium consectetur ut condimentum sapien maecenas.
                </div>
                <div>Yes</div>
              </div>
            </v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>News and Special Offers</v-list-item-subtitle>
            <v-list-item-content>
              <div class="d-flex justify-space-between">
                <div class="max-width-690">
                  Lorem ipsum dolor sit amet consectetur. Dictum tincidunt eu penatibus pretium consectetur ut condimentum sapien maecenas.
                </div>
                <div>Yes</div>
              </div>
            </v-list-item-content>
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
import PrivacyEdit from "../dialogs/privacy-edit.vue";
import CommunicationPreferencesEdit from "../dialogs/communication-preferences-edit.vue";
export default {
  name: "Privacy",
  data() {
    return {
      userStore: userStore(),
      lang: "",
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
          this.lang = e;
        }
      });
  },
  components: {
    EditIcon,
    PrivacyEdit,
    CommunicationPreferencesEdit
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
  .max-width-862 {
    max-width: 862px;
  }
  .max-width-690 {
    max-width: 690px;
  }
}
</style>