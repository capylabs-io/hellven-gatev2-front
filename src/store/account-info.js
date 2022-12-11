import { defineCachedStore } from "pinia-cached-store";

export const accountInfo = defineCachedStore({
  id: "accountStore",

  state: () => ({
    jwt: "",
    id: "",
    email: "",
    username: "",
    updatedAt: "",
    createdAt: "",
  }),

  async refresh({ jwt, id, email, username, updatedAt, createdAt }) {
    this.$state.jwt = jwt;
    this.$state.id = id;
    this.$state.email = email;
    this.$state.username = username;
    this.$state.updatedAt = updatedAt;
    this.$state.createdAt = createdAt;
  },
});
