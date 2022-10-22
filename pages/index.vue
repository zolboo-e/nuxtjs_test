<template>
  <div>
    <h1 class="text-blue-400">Nuxt Index Page</h1>
    <!-- <div v-if="!$auth.loggedIn">
      <button @click="$auth.loginWith('auth0')">Login</button>
    </div>
    <div v-if="$auth.loggedIn">
      <img :src="`${$auth.user?.picture}`" />
      <h1>{{$auth.user?.email}}</h1>
      <button @click="$auth.logout()">Logout</button>
    </div> -->
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'IndexPage',
})
</script>
