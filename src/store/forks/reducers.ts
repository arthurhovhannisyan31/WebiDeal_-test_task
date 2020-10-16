// deps
import { Record } from 'immutable'
// helpers
import {
  GET_FORKS_COUNT_SUCCESS,
  GET_FORKS_COUNT_REQUEST,
  GET_FORKS_PAGE_REQUEST,
  GET_FORKS_PAGE_SUCCESS,
  GET_FORKS_ERROR,
} from '_/store/forks/constants'
import { IAction, IFork } from '_/store/forks/types'

// todo move types to types file

interface IInitialStateRecord {
  loading: boolean
  error: any
  data: IFork[]
  totalCount: number
}

const InitialStateRecord = Record<IInitialStateRecord>({
  loading: false,
  error: false,
  data: [],
  totalCount: 0,
})

// todo review
const forksReducer = (state = new InitialStateRecord(), action: IAction) => {
  const { type, payload } = action
  switch (type) {
    case GET_FORKS_COUNT_REQUEST:
    case GET_FORKS_PAGE_REQUEST:
      return state.set('loading', true)
    case GET_FORKS_ERROR:
      return state.set('loading', false).set('error', payload)
    case GET_FORKS_PAGE_SUCCESS:
      return state
        .set('loading', false)
        .set('data', payload)
        .set('error', false)
    case GET_FORKS_COUNT_SUCCESS:
      return state
        .set('loading', false)
        .set('totalCount', payload)
        .set('error', false)
    default:
      return state
  }
}

export default forksReducer
