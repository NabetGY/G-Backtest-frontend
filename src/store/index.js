import { createStore } from 'vuex'

import auth from "@/modules/auth/store"
import backtest from "@/modules/backtest/store/backtest"


// Create a new store instance.
const store = createStore({

  modules: {
    auth,
    backtest
  }
})

export default store
