import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ redirect, route }) => {
  const path = route.path
  const isMatched = route.matched.length !== 0

  if (!isMatched) {
    return redirect(`${process.env.NUXT_ENV_NEXT_URL}${path}`)
  }
}

export default middleware
