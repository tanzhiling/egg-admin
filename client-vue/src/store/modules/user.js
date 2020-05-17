import { removeCookie } from "@/utils/cookie";
export default {
  namespaced: true,
  state: {},
  mutations: {},
  actions: {
    logout() {
      removeCookie("token");
      window.location.reload();
    },
  },
};
