import { store } from 'quasar/wrappers'
import { createStore } from 'vuex'

import noticiasEconomia from './noticiasEconomia'
import noticiasCultura from './noticiasCultura'
import usuarios from './usuarios'

export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {    
      noticiasEconomia,
      noticiasCultura,
      usuarios
    },

    strict: process.env.DEBUGGING
  })

  return Store
})
