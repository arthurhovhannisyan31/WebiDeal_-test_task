// deps
import { fork, takeLatest, put } from 'redux-saga/effects'
// helpers
import {
  GET_FORKS_REQUEST,
  GET_FORKS_SUCCESS,
  GET_FORKS_ERROR,
} from '_/store/forks/constants'
import { IAction } from '_/store/forks/types'

export function* workerGetForksSaga(action: IAction) {
  try {
    const { payload } = action
    console.log(payload)
    yield put({ type: GET_FORKS_SUCCESS })
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
