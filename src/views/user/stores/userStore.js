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
      dateOfbirth: "1980-01-01",
    },
    fogetPasswordData: {
      email: "",
      isSuccess: false,
    },
    errorMessage: "",
    resetPasswordData: {
      code: "",
      password: "",
      passwordConfirmation: "",
    },
    vetifyAccount: {
      hideEmail: "",
      vetifyEmail: ""
    },
    isShowPass: false,
    isShowConfirmPass: false,
    accountSettingMenu: 1, //1: Account Detail, 2: Security, 3: Privacy, 4: Transaction History
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
            let index = this.userData.email.indexOf('@');
            let hideChar="";
            for (let i=1; i< index-1 ; i++) {
              hideChar = hideChar + "*";
            }
            this.vetifyAccount.vetifyEmail = this.userData.email;
            this.vetifyAccount.hideEmail = this.vetifyAccount.vetifyEmail.charAt(0) + hideChar + this.vetifyAccount.vetifyEmail.substring(index-1);
            snackController.success("Register is successful");
            this.errorMessage = "";
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
    async signIn() {
      loadingController.increaseRequest();
      let signInUrl = baseUrl + "auth/local";
      axios
        .post(
          signInUrl,
          {
            identifier: this.userData.username,
            password: this.userData.password,
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
            snackController.success("Login is successful");
            this.errorMessage = "";
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
            this.errorMessage = "";
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
            this.errorMessage = "";
            this.router.push({
              params: { lang: i18n.locale },
              name: "Signin",
            });
          }
        })
        .catch((error) => {
          loadingController.decreaseRequest();
          snackController.commonError(error);
          // this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
  },
});
