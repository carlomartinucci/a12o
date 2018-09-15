import { randObj, importAll } from './index'

const audioHash = importAll(require.context('../audio', false))

export default randObj(audioHash)
