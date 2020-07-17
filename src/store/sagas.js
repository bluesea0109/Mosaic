import { all } from 'redux-saga/effects'
import { newsSaga } from './news'

export default function* rootSaga() {
  yield all([newsSaga()])
}
