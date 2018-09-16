import { currentDayObj, importAll } from './index'

const imagesHash = importAll(require.context('../images', false))

export default currentDayObj(imagesHash)
