import { AGREGARECONOMIA, EDITARECONOMIA, ELIMINARECONOMIA } from './types'

export default {
  [AGREGARECONOMIA] (state, data) {
    // state.cultura.push(data)
    console.log('mutations - economia')
    console.log(data)
    state.economia[data.id] = data.economia
  },
  [EDITARECONOMIA] (state, data) {
    console.log('mutation economia')
    console.log(data)
    state.economia[data.id] = data
  },
  [ELIMINARECONOMIA] (state, id) {
    delete state.economia[id]
  }
}
