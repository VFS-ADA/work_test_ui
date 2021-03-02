<template>
  <v-app-bar
      color="white"
  >
    <v-btn text to="/">
      Home
    </v-btn>
    <v-btn text to="/docs/wiki">
      Wiki Documents
    </v-btn>
    <v-btn text to="/docs/secrets">
      Secret Documents
    </v-btn>
    <v-btn text to="/users">
      Users
    </v-btn>

    <v-spacer/>

    <div v-if="userToken!==undefined">
      User: {{ userToken.u_name }}
    </div>
    <v-btn text to="/logon"
           v-if="authenticate.token===undefined"
    >
      Logon
    </v-btn>
    <v-btn text @click="logout()"
           v-if="authenticate.token!==undefined"
    >
      Logout
    </v-btn>
  </v-app-bar>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "TopBar",
  computed: {
    ...mapGetters([
      'userToken',
      // ...
    ]),
    ...mapState([
      'authenticate',
      // ...
    ]),
  },
  methods: {
    ...mapActions([
      'setStateProperty',
      // ...
    ]),

    logout() {
      this.setStateProperty({
        state_property: "authenticate",
        data: {},
      })
    }
  }
}
</script>

<style scoped>

</style>