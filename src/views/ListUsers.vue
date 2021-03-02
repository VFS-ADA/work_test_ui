<template>
  <div v-if="users._items!==undefined">
    <p
        v-for="user in users._items"
        :key="user._id"
    >
      {{ user }}
    </p>
  </div>
</template>

<script>
import {mapActions, mapGetters, mapState} from "vuex";

export default {
  name: "ListUsers",
  data() {
    return {}
  },
  computed: {
    ...mapGetters([
      'userToken',
      // ...
    ]),
    ...mapState([
      'users',
      // ...
    ]),
  },
  methods: {
    ...mapActions([
      'apiGet',
      // ...
    ]),

    getUsers() {
      this.apiGet({
        url: "/users",
        params: {},
        state_property: "users",
        commit: true,
      })
    }
  },
  mounted() {
    this.getUsers()
  }
}
</script>

<style scoped>

</style>