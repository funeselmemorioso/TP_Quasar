import { AGREGARECONOMIA, EDITARECONOMIA, ELIMINARECONOMIA } from './types'

export default {
  [AGREGARECONOMIA]: ({ commit }, economia) => {
    console.log('actions - economia')
    console.log(economia)
    const nuevaeconomia = {
      id: economia.id,
      economia
    }
    commit(AGREGARECONOMIA, nuevaeconomia)
  },
  [EDITARECONOMIA]: ({ commit }, economia) => {
    console.log('actions economia')
    console.log(economia)
    commit(EDITARECONOMIA, economia)
  },
  [ELIMINARECONOMIA]: ({ commit }, economiaId) => {
    commit(ELIMINARECONOMIA, economiaId)
  }
}
