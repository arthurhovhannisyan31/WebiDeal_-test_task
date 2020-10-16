// deps
import { fork, takeLatest, put } from 'redux-saga/effects'
// helpers
import {
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
  GET_FORKS_ERROR,
} from '_/store/forks/constants'
import { IAction } from '_/store/forks/types'
import { fetchGitHubForks } from '_/store/forks/queries'

export function* workerGetForksSaga(action: IAction) {
  try {
    const { payload } = action
    console.log(payload)
    fetchGitHubForks(payload)
    yield put({ type: GET_FORKS_SUCCESS, payload: [] })
  } catch (err) {
    yield put({
      type: GET_FORKS_ERROR,
      payload: err,
    })
  }
}

export function* watcherGetForksSaga() {
  yield takeLatest(GET_FORKS_REQUEST, workerGetForksSaga)
}

export const forksSagas = [fork(watcherGetForksSaga)]
