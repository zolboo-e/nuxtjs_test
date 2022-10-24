<template>
  <div>
    <h1 class="text-blue-400">Nuxt Settings Page</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api'
import { useAuthStore } from "~/store"


export default defineComponent({
  setup() {
    const store = useAuthStore()

    return { loggedIn: store.loggedIn, user: store.user }
  },
})
</script>
