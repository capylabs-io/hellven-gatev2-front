<template>
  <div class="account-detail pa-3">
    <PersonalInformationEdit />
    <EmailEdit />
    <PhoneEdit />
    <div class="greyblack--text text-dp-xs font-weight-medium text-uppercase bungee-font">
      {{$t("account.account-details")}}
    </div>
    <v-card class="card-content mt-6">
      <v-card-title class="justify-space-between">
        <div class="text-lg greyblack--text font-weight-medium text-uppercase">
          personal information
        </div>
        <div class="cursor-pointer" @click="userStore.changePersonalInfoEdit()">
          <v-icon class="mr-2" color="violet" small>mdi-account-edit</v-icon>
          <span class="violet--text">EDIT</span>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Name</v-list-item-subtitle>
            <v-list-item-content>{{ userInfo.username || "" }}</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Country / Region</v-list-item-subtitle>
            <v-list-item-content>{{ userInfo.country || "" }}</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>D.O.B</v-list-item-subtitle>
            <v-list-item-content>{{
              userInfo.dateOfBirth || "" 
            }}</v-list-item-content>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-card>
    <v-card class="card-content mt-3">
      <v-card-title class="justify-space-between">
        <div class="text-lg greyblack--text font-weight-medium text-uppercase">
          EMAIL
        </div>
        <div class="cursor-pointer" @click="userStore.changeEmailEdit()">
          <EditIcon />
          <span class="violet--text ml-2">EDIT</span>
        </div>
      </v-card-title>
      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Email</v-list-item-subtitle>
            <v-list-item-content>{{ userInfo.email || "" }}</v-list-item-content>
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
            Phone number
          </div>
          <div
            v-if="userInfo.phone"
            class="cursor-pointer"
            @click="userStore.changePhoneEdit()"
          >
            <EditIcon />
            <span class="violet--text ml-2">EDIT</span>
          </div>
        </div>
        <div class="text-md text-sub">
          Use your phone number as your account name to log in. You can also opt
          in to receive security-related alerts.
        </div>
      </v-card-title>

      <v-divider></v-divider>
      <v-list>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-subtitle>Phone number</v-list-item-subtitle>
            <v-list-item-content>
              <div
                v-if="!userInfo.phone"
                class="cursor-pointer"
                @click="userStore.changePhoneEdit()"
              >
                <v-icon small class="mr-2" color="violet"
                  >mdi-phone-plus</v-icon
                >
                <span class="violet--text text-md">Add phone number</span>
              </div>
              <div v-else>{{ userInfo.phone || "" }}</div>
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
import PersonalInformationEdit from "../dialogs/personal-informaion-edit.vue";
import EmailEdit from "../dialogs/email-edit.vue";
import PhoneEdit from "../dialogs/phone-edit.vue";
export default {
  name: "AccountDetail",
  data() {
    return {
      userStore: userStore(),
      userInfo: [],
    };
  },
  created() {
    this.userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
  },
  components: {
    EditIcon,
    PersonalInformationEdit,
    EmailEdit,
    PhoneEdit,
  },
  methods: {
    gotoRouter(url) {
      this.$router.push({
        params: { lang: i18n.locale },
        name: url,
      });
    },
  }
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