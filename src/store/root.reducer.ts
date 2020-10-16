// deps
import { combineReducers } from 'redux'
// helpers
import { moduleName, forksReducer } from '_/store/forks'

const rootReducer = combineReducers({
  [moduleName]: forksReducer,
})

export default rootReducer
