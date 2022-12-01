<template>
  <span v-if="this.unauthenticated">{{ this.unauthenticated }}</span>
  <div v-else>
    <input type="text" placeholder="Filter" v-model="filter" />
    <table>
      <thead>
        <tr>
          <th>label</th>
          <th>tldType</th>
        </tr>
      </thead>
      <tbody v-for="tld in tlds.data">
        <tr
          v-if="
            this.includes(tld.label, this.filter) ||
            this.includes(tld.tldType, this.filter)
          "
        >
          <td>{{ tld.label }}</td>
          <td>{{ tld.tldType }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";
//import json from "../assets/tld.json";

export default {
  data() {
    return {
      tlds: [],
      filter: "",
      unauthenticated: "",
    };
  },
  mounted() {
    axios
      .get("http://0.0.0.0/api/tld", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + localStorage.token,
        },
      })
      .then(
        (response) => {
          this.tlds = response.data;
        },
        (error) => {
          if (error.response.data.unauthenticated) {
            this.unauthenticated = error.response.data.unauthenticated;
          }
        }
      );
  },
  methods: {
    includes(string, subString) {
      const lowerString = string.toLowerCase();
      const lowerSubString = subString.toLowerCase();
      return lowerString.includes(lowerSubString);
    },
  },
};
</script>

<style scoped></style>
