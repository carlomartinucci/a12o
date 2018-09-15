export const importAll = r => {
  let acc = {}
  r.keys().forEach(key => acc[key] = r(key))
  return acc
}

export const randObj = hash => {
  const values = Object.values(hash)
  return values[Math.round(Math.random() * (values.length - 1))]
}
