<template>
  <div>
    <h1 class="text-blue-400">Nuxt Login Page</h1>
    <div v-if="!$auth.loggedIn">
      <button @click="$auth.loginWith('auth0')">Login</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'LoginPage',
})
</script>
