import { randObj, importAll } from './utils'

const audioHash = importAll(require.context('./audio', false))

export default randObj(audioHash)
