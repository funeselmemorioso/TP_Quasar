import { AGREGARCULTURA, EDITARCULTURA, ELIMINARCULTURA } from './types'

export default {
  [AGREGARCULTURA] (state, data) {
    // state.cultura.push(data)
    console.log('mutations - cultura')
    console.log(data)
    state.cultura[data.id] = data.cultura
  },
  [EDITARCULTURA] (state, data) {
    state.cultura[data.id] = data
  },
  [ELIMINARCULTURA] (state, id) {
    delete state.cultura[id]
  }
}
