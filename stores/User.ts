import { defineStore, acceptHMRUpdate } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {},
  persist: true,
});
