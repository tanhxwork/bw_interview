export const useUserStore = defineStore("user", {
  state: () => ({
    first_name: "",
    last_name: "",
    email: "",
    country: "",
    mobile: "",
    token: "",
    is_logged_in: false,
  }),
  getters: {
    logged_in_status() {
      return this.is_logged_in;
    },
  },
  actions: {
    async login(email, password) {
      const response = await $fetch("http://localhost:8080/login", {
        method: "POST",
        body: {
          email: email,
          password: password,
        },
      });

      if (response.token != "") {
        this.first_name = response.first_name;
        this.last_name = response.last_name;
        this.email = response.email;
        this.country = response.country;
        this.mobile = response.mobile;
        this.token = response.token;
        this.is_logged_in = true;
      }
    },
    async logout() {
      this.first_name = "";
      this.last_name = "";
      this.email = "";
      this.country = "";
      this.mobile = "";
      this.token = "";
      this.is_logged_in = false;
    },
  },
});
