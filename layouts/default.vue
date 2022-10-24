<template>
  <div class="h-screen w-screen grid grid-cols-[80px,1fr] grid-rows-[70px,1fr]">
    <div class="bg-[#C62F37] flex justify-center items-center">
      <div class="w-8 h-8 bg-white rounded flex justify-center items-center">GTN</div>
    </div>
    <div class="bg-blue-400">
      <div v-if="!store.loggedIn">
        <NuxtLink to="/api/auth/login">Login</NuxtLink>
      </div>
    </div>
    <ul class="bg-[#EA3A44] row-start-2 text-white relative">
      <li>
        <NuxtLink to="/">
          <a class="w-full aspect-square flex justify-center items-center hover:bg-white/10">
            Index
          </a>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about">
          <a class="w-full aspect-square flex justify-center items-center hover:bg-white/10">
            About
          </a>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/user">
          <a class="w-full aspect-square flex justify-center items-center hover:bg-white/10">
            User
          </a>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/settings">
          <a class="w-full aspect-square flex justify-center items-center hover:bg-white/10">
            Settings
          </a>
        </NuxtLink>
      </li>
      <li v-if="store.loggedIn">
        <NuxtLink class="absolute bottom-0 w-full aspect-square flex justify-center items-center hover:bg-white/10"
          to="/api/auth/logout">Logout</NuxtLink>
      </li>
    </ul>
    <Nuxt />
  </div>
</template>

<script lang="ts">
import { defineComponent, useAsync } from '@nuxtjs/composition-api'
import { useAuthStore } from "~/store"


export default defineComponent({
  setup() {
    const store = useAuthStore()
    useAsync(() => store.initialFetch())

    return { store }
  },
})
</script>