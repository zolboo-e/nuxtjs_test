<template>
  <div>
    <h1 class="text-blue-400">Nuxt Index Page</h1>
    <div>
      <img v-if="!!store.user" :src="`${store.user.picture}`" />
      <h1>{{store.user?.email}}</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, useContext } from '@nuxtjs/composition-api'
import { useAuthStore } from "~/store"

export default defineComponent({
  setup() {
    const context = useContext();
    const store = useAuthStore(context.$pinia)

    const toggle = () => {
      store.setLoggedIn(!store.loggedIn)
    }
    return { store, toggle }
  },
})
</script>