// deps
import { all } from 'redux-saga/effects'
// helpers
import { forksSagas } from '_/store/forks/sagas'

export default function* rootSaga() {
  yield all([...forksSagas])
}
