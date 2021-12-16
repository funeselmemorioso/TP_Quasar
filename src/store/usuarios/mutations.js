import { EDITARUSUARIO } from './types'

export default {
  [EDITARUSUARIO] (state) {
    state.usuario.logueado = !state.usuario.logueado
  }
}
