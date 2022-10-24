import { Middleware } from '@nuxt/types'

const middleware: Middleware = ({ redirect, route }) => {
  const path = route.path
  const isMatched = route.matched.length !== 0

  if (!isMatched) {
    return redirect(`https://nextjs-test-swart-two.vercel.app${path}`)
    // return redirect(`http://192.168.1.42:3001${path}`)
  }
}

export default middleware
