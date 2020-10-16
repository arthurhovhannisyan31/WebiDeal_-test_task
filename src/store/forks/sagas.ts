// deps
import { fork, takeLatest, put, call } from 'redux-saga/effects'
// helpers
import {
  GET_FORKS_COUNT_REQUEST,
  GET_FORKS_COUNT_SUCCESS,
  GET_FORKS_PAGE_REQUEST,
  GET_FORKS_PAGE_SUCCESS,
  GET_FORKS_ERROR,
} from '_/store/forks/constants'
import { IAction } from '_/store/forks/types'
import { fetchGitHubForksPage, fetchGitHubUser } from '_/store/forks/queries'

export function* workerGetForksSaga(action: IAction) {
  try {
    const { payload } = action
    const { data } = yield call(fetchGitHubForksPage, payload)
    yield put({
      type: GET_FORKS_PAGE_SUCCESS,
      payload: {
        data,
        page: payload.page,
        per_page: payload.per_page,
        url: payload.url,
      },
    })
  } catch (err) {
    yield put({
      type: GET_FORKS_ERROR,
      payload: err,
    })
  }
}

export function* workerGetForksCountSaga(action: IAction) {
  try {
    const { payload } = action
    const { data } = yield call(fetchGitHubUser, payload)
    yield put({
      type: GET_FORKS_COUNT_SUCCESS,
      payload: data.forks_count,
    })
  } catch (err) {
    yield put({
      type: GET_FORKS_ERROR,
      payload: err,
    })
  }
}

export function* watcherGetForksSaga() {
  yield takeLatest(GET_FORKS_PAGE_REQUEST, workerGetForksSaga)
}

export function* watcherGetForksCountSaga() {
  yield takeLatest(GET_FORKS_COUNT_REQUEST, workerGetForksCountSaga)
}

export const forksSagas = [
  fork(watcherGetForksSaga),
  fork(watcherGetForksCountSaga),
]
