<template>
  <div id="app">
    <TopBar/>
    <v-container fluid>
      <v-row>
        <v-col
            align="center"
            justify="center"
        >
          <router-view/>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>


import TopBar from "@/components/TopBar";

export default {
  name: 'App',
  components: {
    TopBar
  },
  data() {
    return {
    }
  },
}
</script>

<style>

</style>
