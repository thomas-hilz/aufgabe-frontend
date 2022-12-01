<script setup>
import Registrierung from "./components/Registrierung.vue";
import Login from "./components/Login.vue";
import Productstore from "./components/Productstore.vue";
</script>

<template>
    <header>
      <router-link to="/registrierung">Registrierung</router-link>
      <router-link to="/login">Login</router-link>
      <router-link to="/productstore">Productstore</router-link>
    </header>
    <main>
      <router-view />
    </main>
</template>

<script>
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      message: null,
      errorMessage: null,
    };
  },
  created() {},
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

a{
  padding: 2rem;
}

main{
  padding: 2rem;
}
</style>
