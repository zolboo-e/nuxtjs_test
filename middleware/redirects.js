export default function ({ redirect, route }) {
  const path = route.path
  const isMatched = route.matched.length !== 0

  if (!isMatched) {
    return redirect(`${process.env.NEXT_URL}${path}`)
  }
}
