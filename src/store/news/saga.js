import axios from 'axios'
import { call, put, takeLatest } from 'redux-saga/effects'
import { API_KEY } from 'config'
import * as ACTIONS from './action'
import { fetchError } from 'utils'

export function* doGetNews({ payload }) {
  try {
    const res = yield call(
      axios.get,
      `/v2/everything?q=${payload.search || 'a'}&page=${
        payload.page || 1
      }&pageSize=10&sortBy=publishedAt&apiKey=${API_KEY}`,
    )
    yield put(ACTIONS.getNewsSuccess(res.data))
  } catch (error) {
    const errorMessage = fetchError(error.response)
    yield put(ACTIONS.getNewsFailure(errorMessage))
  }
}

export function* newsSaga() {
  yield takeLatest(ACTIONS.getNews, doGetNews)
}
