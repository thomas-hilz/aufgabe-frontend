<template>
  <form id="login" @submit.prevent="login">
    <input type="text" placeholder="Email" v-model="email" />
    <label v-if="this.emailHint">{{ emailHint }}</label>
    <input type="password" placeholder="Passwort" v-model="password" />
    <label v-if="this.passwordHint">{{ passwordHint }}</label>
    <button type="submit">Login</button>
    <label v-if="this.loginHint">{{ loginHint }}</label>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      email: "",
      emailHint: "",
      password: "",
      passwordHint: "",
      loginHint: "",
    };
  },

  methods: {
    login() {
      this.emailHint = "";
      this.passwordHint = "";
      this.loginHint = "";
      axios({
        method: "post",
        url: "http://0.0.0.0/api/login",
        data: {
          email: this.email,
          password: this.password,
        },
      }).then(
        (result) => {
          if (result.data.incorrect_credentials) {
            this.loginHint = result.data.incorrect_credentials;
          } else {
            this.loginHint = "Erfolgreich eingeloggt.";
            localStorage.token = result.data.token;
          }
        },
        (error) => {
          const errors = error.response.data.errors;
          if (errors.email) {
            this.emailHint = errors.email[0];
          }
          if (errors.password) {
            this.passwordHint = errors.password[0];
          }
        }
      );
    },
  },
};
</script>

<style scoped>
#login {
  display: flex;
  flex-direction: column;
}
</style>
