import { defineStore } from "pinia";
import i18n from "@/i18n";
import { User, Auth } from "@/plugins/api.js";
import { snackBarController } from "@/components/snack-bar/snack-bar-controller.js";
import { loadingController } from "@/components/global-loading/global-loading-controller.js";
import { ref, computed } from "vue";
// const baseUrl = process.env.VUE_APP_API_URL;

export const userStore = defineStore(
  "users",
  () => {
    /* eslint-disable */
    const loading = loadingController(); //store
    const snackbar = snackBarController(); //store

    //#region states
    const signInData = ref({
      identifier: "",
      password: "",
    });
    const jwt = ref("");
    const userData = ref({
      username: "",
      email: "",
      password: "",
      dateOfBirth: "1980-01-01",
      phone: "",
    });
    const resetPasswordData = ref({
      code: "",
      password: "",
      passwordConfirmation: "",
      isSuccess: false,
    });
    const verifyAccount = ref({
      hideEmail: "",
      verifyEmail: "",
      countSeconds: 0,
    });
    const isShowPass = ref(false);
    const isShowConfirmPass = ref(false);
    const rememberMe = ref(false);
    const accountSettingMenu = ref(1); //1: Account Detail, 2: Security, 3: Privacy, 4: Transaction History
    const isOpenPersonalInfoEdit = ref(false);
    const isOpenEmailEdit = ref(false);
    const isOpenPhoneEdit = ref(false);
    const isOpenChangePassword = ref(false);
    const isOpenPrivacyEdit = ref(false);
    const isOpenCommunicationPreferencesEdit = ref(false);
    // timer: null,
    //#endregion

    //#region actions
    async function registerUser() {
      try {
        loading.increaseRequest();
        const res = await Auth.register(this.userData);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        this.verifyAccount.verifyEmail = this.userData.email;
        this.verifyAccount.hideEmail = this.hideEmail(this.userData.email);
        snackbar.success("Register successfully!");
        this.router.push({
          params: { lang: i18n.locale },
          name: "RegisterVertifySent",
        });
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    async function resentVertifyRegister() {
      try {
        loading.increaseRequest();
        const res = await Auth.resendRegisterLink(this.verifyAccount.verifyEmail);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Email sent successfully! Please check your mailbox!");
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    async function verifyRegister(confirmCode) {
      try {
        loading.increaseRequest();
        const res = await Auth.verifyRegister(confirmCode);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Verified account successfully!");
        this.router.push({
          params: { lang: i18n.locale },
          name: "Signin",
        });
        this.verifyAccount.countSeconds = 10;
        while (this.verifyAccount.countSeconds > 0) {
          await this.$utils.delay(1000);
          this.verifyAccount.countSeconds = this.verifyAccount.countSeconds - 1;
        }
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
        this.router.push({
          params: { lang: i18n.locale },
          name: "home",
        });
      } finally {
        loading.decreaseRequest();
      }
    }
    async function signIn() {
      try {
        loading.increaseRequest();
        const res = await Auth.signIn(this.signInData);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Login successfully!");
        this.jwt = res.data.jwt;
        this.userData = res.data.user;
        // sessionStorage.setItem("userInfo", JSON.stringify(res.data.user));
        // sessionStorage.setItem("jwt", JSON.stringify(res.data.jwt));
        sessionStorage.setItem("accountMenu", 1);
        if (this.rememberMe) {
          localStorage.setItem("signInData", JSON.stringify(this.signInData));
        } else {
          localStorage.removeItem("signInData");
        }
        this.router.push({
          params: { lang: i18n.locale },
          name: "home",
        });
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    async function forgetPassword() {
      try {
        loading.increaseRequest();
        const res = await Auth.forgetPassword(this.forgetPasswordData.email);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Email sent successfully! Please check your mailbox!");
        this.forgetPasswordData.isSuccess = true;
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    async function resetPassword() {
      try {
        loading.increaseRequest();
        const res = await Auth.resetPassword(this.resetPasswordData);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Reset Password Successfully!");
        this.resetPasswordData.isSuccess = true;
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    async function editPersonalInfo(editInfo) {
      try {
        loading.increaseRequest();
        const query = {};
        const userInfo = JSON.parse(sessionStorage.getItem("userInfo"));

        Object.entries(editInfo).forEach(([info, infoValue]) => {
          if (userInfo[info] != infoValue) {
            query[info] = infoValue;
          }
        });
        if (!query) {
          window.location.reload();
          return;
        }
        const res = await User.updateUserInfo(query);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Update info successfully!");
        this.isOpenPersonalInfoEdit = false;
        this.isOpenPhoneEdit = false;
        sessionStorage.setItem("userInfo", JSON.stringify(res.data));
        window.location.reload(); //Khong nen reload lai trang web
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    async function changePassword(currentPassword, newPassword, confirmNewPassword) {
      try {
        loading.increaseRequest();
        if (!currentPassword || !newPassword || !confirmNewPassword) return;
        const res = await User.changePassword(currentPassword, newPassword, confirmNewPassword);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Change password successfully!");
        this.isOpenChangePassword = false;
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    async function editEmail(newEmail, password) {
      try {
        loading.increaseRequest();
        const res = await User.updateUserEmail(newEmail, password);
        if (!res) {
          snackbar.commonError(`Error occurred! Please try again later!`);
          return;
        }
        snackbar.success("Update email successfully!");
        // sessionStorage.setItem("userInfo", JSON.stringify(response.data));
        this.isOpenEmailEdit = false;
        // window.location.reload();
      } catch (error) {
        console.error(`Error: ${error}`);
        snackbar.commonError(error);
      } finally {
        loading.decreaseRequest();
      }
    }
    function hideEmail(email) {
      let index = email.indexOf("@");
      let hideChar = "";
      for (let i = 1; i < index - 1; i++) {
        hideChar = hideChar + "*";
      }

      hideChar = email.charAt(0) + hideChar + email.substring(index - 1);
      return hideChar;
    }
    function changePersonalInfoEdit() {
      this.isOpenPersonalInfoEdit = !this.isOpenPersonalInfoEdit;
    }
    function changeEmailEdit() {
      this.isOpenEmailEdit = !this.isOpenEmailEdit;
    }
    function changePhoneEdit() {
      this.isOpenPhoneEdit = !this.isOpenPhoneEdit;
    }
    function changeOpenChangePassword() {
      this.isOpenChangePassword = !this.isOpenChangePassword;
    }
    function changePrivacyEdit() {
      this.isOpenPrivacyEdit = !this.isOpenPrivacyEdit;
    }
    function changeCommunicationPreferencesEdit() {
      this.isOpenCommunicationPreferencesEdit = !this.isOpenCommunicationPreferencesEdit;
    }
    //#endregion

    //#region Computed
    const isConnected = computed(() => this.jwt && this.userData);
    //#endregion

    return {
      //Computed
      isConnected,

      //actions
      registerUser,
      resentVertifyRegister,
      verifyRegister,
      signIn,
      forgetPassword,
      resetPassword,
      editPersonalInfo,
      changePassword,
      editEmail,
      hideEmail,
      changePersonalInfoEdit,
      changeEmailEdit,
      changePhoneEdit,
      changeOpenChangePassword,
      changePrivacyEdit,
      changeCommunicationPreferencesEdit,

      //states
      signInData,
      jwt,
      userData,
      resetPasswordData,
      verifyAccount,
      isShowPass,
      isShowConfirmPass,
      rememberMe,
      accountSettingMenu, //1: Account Detail, 2: Security, 3: Privacy, 4: Transaction History
      isOpenPersonalInfoEdit,
      isOpenEmailEdit,
      isOpenPhoneEdit,
      isOpenChangePassword,
      isOpenPrivacyEdit,
      isOpenCommunicationPreferencesEdit,
    };
  },
  {
    persist: [
      {
        paths: ["signInData", "rememberMe"],
        storage: localStorage,
      },
      {
        paths: ["userData", "jwt"],
        storage: sessionStorage,
      },
    ],
  }
);
/* eslint-enable */
