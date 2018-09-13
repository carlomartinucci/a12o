import { randObj, importAll } from './utils'

const imagesHash = importAll(require.context('./images', false))

export default randObj(imagesHash)
