export default function ({ redirect, route }) {
  const path = route.path
  const isMatched = route.matched.length !== 0

  if (!isMatched) {
    return redirect(`http://192.168.1.42:3001${path}`)
  }
}
