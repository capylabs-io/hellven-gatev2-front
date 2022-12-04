import { defineStore } from "pinia";
import axios from "axios";
import i18n from "@/i18n";

const baseUrl = process.env.VUE_APP_API_URL;

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
    acceptTerm: false,
    isSuccess: false,
    errorMessage: "",
    resetPasswordData: {
      code: "",
      password: "",
      passwordConfirmation: "",
    },
    isShowPass: false,
    isShowConfirmPass: false,
  }),

  actions: {
    async registerUser() {
      let registerUrl = baseUrl + "auth/local/register";
      axios
        .post(registerUrl, this.userData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then((response) => {
          if (response.statusText == "OK") {
            this.errorMessage = "";
            this.router.push({
              params: { lang: i18n.locale },
              name: "Signin",
            });
          }
        })
        .catch((error) => {
          this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
    async signIn() {
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
          if (response.statusText == "OK") {
            this.errorMessage = "";
            this.router.push({
              params: { lang: i18n.locale },
              name: "home",
            });
          }
        })
        .catch((error) => {
          this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
    async forgetPassword() {
      let forgetPasswordUrl = baseUrl + "auth/forgot-password";
      axios
        .post(
          forgetPasswordUrl,
          {
            email: this.userData.email,
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
            this.errorMessage = "";
            this.isSuccess = true;
          }
        })
        .catch((error) => {
          this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
    async resetPassword() {
      let resetPasswordUrl = baseUrl + "auth/reset-password";
      axios
        .post(resetPasswordUrl, this.resetPasswordData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then((response) => {
          if (response.statusText == "OK") {
            this.errorMessage = "";
            this.router.push({
              params: { lang: i18n.locale },
              name: "Signin",
            });
          }
        })
        .catch((error) => {
          this.errorMessage = error.response.data.data[0].messages[0].message;
        });
    },
  },
});
