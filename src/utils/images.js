import { importAll } from './index'

const imagesHash = importAll(require.context('../images', false))

export default imagesHash
