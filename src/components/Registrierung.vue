<template>
  <form id="registrierung" @submit.prevent="registrieren">
    <input type="text" placeholder="Email" v-model="email" />
    <label v-if="this.emailHint">{{emailHint}}</label>
    <input type="password" placeholder="Passwort" v-model="password" />
    <label v-if="this.passwordHint">{{passwordHint}}</label>
    <button type="submit">Registrieren</button>
    <label v-if="this.registerHint">{{registerHint}}</label>
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
      registerHint: "",
    };
  },

  methods: {
    registrieren() {
      this.emailHint = "";
      this.passwordHint = "";
      this.registerHint = "";
      axios({
        method: "post",
        url: "http://0.0.0.0:80/api/register",
        data: {
          email: this.email,
          password: this.password,
        },
      })
        .then(
          (result) => {
            //console.log(result ? result.data : result);
            this.registerHint = "Erfolgreich registriert.";
          },
          (error) => {
            const errors = error.response.data.errors;
            if (errors.email) {
              this.emailHint = errors.email[0];
            }
            if (errors.password) {
              this.passwordHint = errors.password[0];
            }
          },
        );
    },
  },
};
</script>

<style scoped>
#registrierung {
  display: flex;
  flex-direction: column;
}
</style>
