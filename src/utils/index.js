// @flow
export const importAll: (r: *) => {} = r => {
  let acc = {}
  r.keys().forEach(key => acc[key] = r(key))
  return acc
}

export const randObj = (hash: {}) => {
  const values = Object.values(hash)
  return values[Math.round(Math.random() * (values.length - 1))]
}

const currentDay = () => Math.round(Date.now() / (1000 * 60 * 60 * 24))
export function currentDayObj(hash: { [string]: string }): string {
  const values: Array<string> = (Object.values(hash): any)
  return values[currentDay() % values.length]
}

// togli tutto quello che trovi prima di '/'
// togli tutto quello che trovi dopo di '.'
// sostituisci '_' con ' '
export const clearAudioSrc = (src: string) => src.replace(/^.*\//, '').replace(/\..*$/, '').replace(/_/g, ' ')
