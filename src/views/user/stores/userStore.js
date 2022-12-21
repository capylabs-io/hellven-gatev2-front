import { defineStore } from "pinia";
import axios from "axios";
import i18n from "@/i18n";
import { snackBarController } from "@/components/snack-bar/snack-bar-controller";
import { globalLoadingController } from "@/components/global-loading/global-loading-controller";

const baseUrl = process.env.VUE_APP_API_URL;
const snackController = snackBarController();
const loadingController = globalLoadingController();

export const userStore = defineStore("users", {
  state: () => ({
    siginInData: {
      identifier: "",
      password: "",
    },
    userData: {
      username: "",
      email: "",
      password: "",
      dateOfBirth: "1980-01-01",
    },
    fogetPasswordData: {
      email: "",
      isSuccess: false,
    },
    resetPasswordData: {
      code: "",
      password: "",
      passwordConfirmation: "",
      isSuccess: false,
    },
    vetifyAccount: {
      hideEmail: "",
      vetifyEmail: "",
      countSeconds: 0,
    },
    isShowPass: false,
    isShowConfirmPass: false,
    rememberMe: false,
    accountSettingMenu: 1, //1: Account Detail, 2: Security, 3: Privacy, 4: Transaction History
    isOpenPersonalInfoEdit: false,
    isOpenEmailEdit: false,
    isOpenPhoneEdit: false,
    isOpenChangePassword: false,
    isOpenPrivacyEdit: false,
    isOpenCommunicationPreferencesEdit: false,
    timer: null,
  }),

  actions: {
    async registerUser() {
      loadingController.increaseRequest();
      let registerUrl = baseUrl + "auth/local/register";
      axios
        .post(registerUrl, this.userData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then((response) => {
          loadingController.decreaseRequest();
          if (response.statusText == "OK") {
            this.vetifyAccount.vetifyEmail = this.userData.email;
            this.vetifyAccount.hideEmail = this.hideEmail(this.userData.email);
            snackController.success("Register is successful");
            this.router.push({
              params: { lang: i18n.locale },
              name: "RegisterVertifySent",
            });
          }
        })
        .catch((error) => {
          loadingController.decreaseRequest();
          snackController.commonError(error);
          // this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
    async resentVertifyRegister() {
      loadingController.increaseRequest();
      let registerUrl = baseUrl + "auth/send-email-confirmation";
      axios
        .post(
          registerUrl,
          {
            email: this.vetifyAccount.vetifyEmail,
          },
          {
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          }
        )
        .then((response) => {
          loadingController.decreaseRequest();
          if (response.statusText == "OK") {
            snackController.success(
              "Email sent successfully, please check your mailbox"
            );
          }
        })
        .catch((error) => {
          loadingController.decreaseRequest();
          snackController.commonError(error);
          // this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
    async vertifyRegister(confirmCode) {
      let vertifyUrl =
        baseUrl + "auth/email-confirmation?confirmation=" + confirmCode;
      var result = "";
      axios
        .get(vertifyUrl)
        .then((response) => {
          result = response.data.statusText;
          snackController.success("Verified successfully!");
        })
        .catch((error) => {
          this.router.push({
            params: { lang: i18n.locale },
            name: "home",
          });
          snackController.commonError(error);
        });
      console.log(result);
      this.vetifyAccount.countSeconds = 10;
      while (this.vetifyAccount.countSeconds > 0) {
        await this.delay(1000);
        this.vetifyAccount.countSeconds = this.vetifyAccount.countSeconds - 1;
      }
      this.router.push({
        params: { lang: i18n.locale },
        name: "Signin",
      });
    },
    async signIn() {
      loadingController.increaseRequest();
      let signInUrl = baseUrl + "auth/local";
      axios
        .post(signInUrl, this.siginInData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then((response) => {
          loadingController.decreaseRequest();
          if (response.statusText == "OK") {
            snackController.success("Login is successful");
            sessionStorage.setItem(
              "userInfo",
              JSON.stringify(response.data.user)
            );
            sessionStorage.setItem("jwt", JSON.stringify(response.data.jwt));
            sessionStorage.setItem("accountMenu", 1);
            if (this.rememberMe) {
              localStorage.setItem(
                "siginInData",
                JSON.stringify(this.siginInData)
              );
            } else {
              localStorage.removeItem("siginInData");
            }
            this.router.push({
              params: { lang: i18n.locale },
              name: "home",
            });
          }
        })
        .catch((error) => {
          loadingController.decreaseRequest();
          snackController.commonError(error);
        });
    },
    async forgetPassword() {
      loadingController.increaseRequest();
      let forgetPasswordUrl = baseUrl + "auth/forgot-password";
      axios
        .post(
          forgetPasswordUrl,
          {
            email: this.fogetPasswordData.email,
          },
          {
            headers: {
              "Content-Type":
                "application/x-www-form-urlencoded; charset=UTF-8",
            },
          }
        )
        .then((response) => {
          loadingController.decreaseRequest();
          if (response.statusText == "OK") {
            this.fogetPasswordData.isSuccess = true;
          }
        })
        .catch((error) => {
          loadingController.decreaseRequest();
          snackController.commonError(error);
          // this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
    async resetPassword() {
      loadingController.increaseRequest();
      let resetPasswordUrl = baseUrl + "auth/reset-password";
      axios
        .post(resetPasswordUrl, this.resetPasswordData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then((response) => {
          loadingController.decreaseRequest();
          if (response.statusText == "OK") {
            this.resetPasswordData.isSuccess = true;
          }
        })
        .catch((error) => {
          loadingController.decreaseRequest();
          snackController.commonError(error);
          // this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
    editPersonalInfo(editInfo) {
      loadingController.increaseRequest();
      let info = JSON.parse(sessionStorage.getItem("userInfo"));
      if (
        info.username != editInfo.username ||
        info.dateOfBirth != editInfo.dateOfBirth ||
        info.country != editInfo.country ||
        info.email != editInfo.email
      ) {
        let editInfoUrl = baseUrl + "users/edit/" + info.id;
        axios
          .put(
            editInfoUrl,
            {
              username: editInfo.username,
              dateOfBirth: editInfo.dateOfBirth,
              country: editInfo.country,
              email: editInfo.email,
            },
            {
              headers: {
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              },
            }
          )
          .then((response) => {
            if (response.statusText == "OK") {
              snackController.success("Edit successfull");
              this.isOpenEmailEdit = false;
              this.isOpenPersonalInfoEdit = false;
              this.isOpenPhoneEdit = false;
              sessionStorage.setItem("userInfo", JSON.stringify(response.data));
            }
            loadingController.decreaseRequest();
          })
          .catch((error) => {
            loadingController.decreaseRequest();
            snackController.commonError(error);
            // this.errorMessage = error.response.data.data[0].messages[0].message;
          });
      } else {
        loadingController.decreaseRequest();
        snackController.error("Please insert your edit");
      }
    },
    changePassword(currentPassword, newPassword, confirmNewPassword) {
      if (currentPassword || newPassword || confirmNewPassword) {
        let changePassUrl = baseUrl + "users/change-password";
        let token = `Bearer ${JSON.parse(sessionStorage.getItem("jwt"))}`;
        axios
          .post(
            changePassUrl,
            {
              currentPassword: currentPassword,
              newPassword: newPassword,
              confirmNewPassword: confirmNewPassword,
            },
            {
              headers: {
                Authorization: token,
                "Content-Type":
                  "application/x-www-form-urlencoded; charset=UTF-8",
              },
            }
          )
          .then((response) => {
            if (response.statusText == "OK") {
              snackController.success("Change password successfull");
              this.isOpenChangePassword = false;
            }
            loadingController.decreaseRequest();
          })
          .catch((error) => {
            loadingController.decreaseRequest();
            snackController.commonError(error);
            // this.errorMessage = error.response.data.data[0].messages[0].message;
          });
      } else {
        loadingController.decreaseRequest();
        snackController.error("Please insert your edit");
      }
    },
    delay(milliseconds) {
      return new Promise((resolve) => {
        this.timer = setTimeout(resolve, milliseconds);
      });
    },
    hideEmail(email) {
      let index = email.indexOf("@");
      let hideChar = "";
      for (let i = 1; i < index - 1; i++) {
        hideChar = hideChar + "*";
      }

      hideChar = email.charAt(0) + hideChar + email.substring(index - 1);
      return hideChar;
    },
    changePersonalInfoEdit() {
      this.isOpenPersonalInfoEdit = !this.isOpenPersonalInfoEdit;
    },
    changeEmailEdit() {
      this.isOpenEmailEdit = !this.isOpenEmailEdit;
    },
    changePhoneEdit() {
      this.isOpenPhoneEdit = !this.isOpenPhoneEdit;
    },
    changeOpenChangePassword() {
      this.isOpenChangePassword = !this.isOpenChangePassword;
    },
    changePrivacyEdit() {
      this.isOpenPrivacyEdit = !this.isOpenPrivacyEdit;
    },
    changeCommunicationPreferencesEdit() {
      this.isOpenCommunicationPreferencesEdit =
        !this.isOpenCommunicationPreferencesEdit;
    },
  },
});
