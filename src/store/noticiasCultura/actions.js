import { AGREGARCULTURA, EDITARCULTURA, ELIMINARCULTURA } from './types'

export default {
  [AGREGARCULTURA]: ({ commit }, cultura) => {    
    const nuevaCultura = {
      id: cultura.id,
      cultura
    }
    commit(AGREGARCULTURA, nuevaCultura)
  },
  [EDITARCULTURA]: ({ commit }, cultura) => {
  
    commit(EDITARCULTURA, cultura)
  },
  [ELIMINARCULTURA]: ({ commit }, culturaId) => {
    commit(ELIMINARCULTURA, culturaId)
  }
}
