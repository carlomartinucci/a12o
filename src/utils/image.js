import { randObj, importAll } from './index'

const imagesHash = importAll(require.context('../images', false))

export default randObj(imagesHash)
