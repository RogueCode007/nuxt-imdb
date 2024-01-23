export const useUserStore = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {
    login() {
      this.isLoggedIn = true;
    },
    logout() {
      this.isLoggedIn = false;
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUserStore, import.meta.hot));
}
