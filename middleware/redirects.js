export default function ({ redirect, route }) {
  const path = route.path
  const isMatched = route.matched.length !== 0

  if (!isMatched) {
    return redirect(`https://nextjs-test-swart-two.vercel.app${path}`)
  }
}
