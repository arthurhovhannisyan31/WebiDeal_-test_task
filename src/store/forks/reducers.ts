// deps
import {
  // Map,
  Record,
} from 'immutable'
// helpers
import {
  GET_FORKS_REQUEST,
  GET_FORKS_ERROR,
  GET_FORKS_SUCCESS,
} from '_/store/forks/constants'
import { IAction } from '_/store/forks/types'

// todo move types to types file

interface IInitialStateRecord {
  loading: boolean
  error: any
}

const InitialStateRecord = Record<IInitialStateRecord>({
  loading: false,
  error: false,
})

// todo review
const forksReducer = (state = new InitialStateRecord(), action: IAction) => {
  const { type, payload } = action
  console.log(type, payload)
  switch (type) {
    case GET_FORKS_REQUEST:
      return state.set('loading', true)
    case GET_FORKS_ERROR:
      return state.set('loading', false).set('error', true)
    case GET_FORKS_SUCCESS:
      return state.set('loading', false)
    default:
      return state
  }
}

export default forksReducer
