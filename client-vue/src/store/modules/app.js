import { setStorage, getStorage } from "@/utils/storage";
let initTags = {
  title: "仪表盘",
  name: "dashboard",
  path: "/dashboard",
};
export default {
  namespaced: true,
  state: {
    tagsList: [initTags],
    activityTab: "dashboard",
  },
  mutations: {
    getTagsList(state) {
      if (getStorage("tagsList", true)) {
        state.tagsList = getStorage("tagsList", true);
      }
    },
    closeTagsList(state, item) {
      if (item) {
        state.tagsList = [initTags, item];
      } else {
        state.tagsList = [initTags];
      }
      setStorage("tagsList", state.tagsList, true);
    },
    setTags(state, route) {
      state.activityTab = route.name;
      const only = state.tagsList.some((item) => item.name === route.name);
      if (!only) {
        state.tagsList.push(route);
        setStorage("tagsList", state.tagsList, true);
      }
    },
    removeTags(state, name) {
      const tagIndex = state.tagsList.findIndex(
        (item) => item.name ===name
      );
      state.tagsList.splice(tagIndex, 1);
      setStorage("tagsList", state.tagsList, true);
    },
    setActivityTab(state, route) {
      state.activityTab = route.name;
    },
  },
  actions: {},
};
