import { ref } from '@nuxtjs/composition-api'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', () => {
  const loggedIn = ref<boolean>(false)
  const user = ref<Record<string, unknown> | null>(null)

  const setLoggedIn = (value: boolean) => {
    loggedIn.value = value
  }
  const setUser = (value: Record<string, unknown> | null) => {
    user.value = value
  }
  const initialFetch = async () => {
    const response = await fetch(
      'https://nextjs-test-swart-two.vercel.app/api/test'
    )
    const { user } = await response.json()

    setLoggedIn(!!user)
    setUser(user)
  }

  return { loggedIn, setLoggedIn, user, setUser, initialFetch }
})
