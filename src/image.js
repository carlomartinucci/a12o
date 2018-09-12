const importAll = r => {
  let acc = {}
  r.keys().forEach(key => acc[key] = r(key))
  return acc
}

const imagesHash = importAll(require.context('./images', false))

const randImg = imagesHash => {
  const images = Object.values(imagesHash)
  return images[Math.round(Math.random() * (images.length - 1))]
}


export default randImg(imagesHash)
