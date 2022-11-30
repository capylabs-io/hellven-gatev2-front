import { defineStore } from "pinia";
import axios from "axios";
import i18n from "@/i18n";

const baseUrl = process.env.VUE_APP_API_URL;

export const userStore = defineStore("users", {
  state: () => ({
    userData: {
      username: "",
      email: "",
      password: "",
      dateOfbirth: "1980-01-01",
    },
    acceptTerm: false,
  }),

  actions: {
    async registerUser() {
      let registerUrl = baseUrl + "auth/local/register";
      var result = axios
        .post(registerUrl, this.userData, {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
          },
        })
        .then((response) => {
          if (response.statusText == "OK") {
            this.router.push("/" + i18n.locale + "/sign-in");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
      console.log(result);
      this.router.push({
        params: { lang: i18n.locale },
        name: "sign-in",
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
            this.router.push("/");
          }
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
});
