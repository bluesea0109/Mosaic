import { handleActions, combineActions } from 'redux-actions'
import { wrap as imm } from 'object-path-immutable'
import { GET_NEWS } from './constant'

const initialState = {
  news: {
    data: [],
    page: 1,
    total: 0,
    pageSize: 10,
    loading: false,
    error: null,
  },
}

export const newsReducer = handleActions(
  {
    [combineActions(GET_NEWS.REQUEST)]: (state, { payload }) => {
      return imm(state)
        .set('news.page', payload.page)
        .set('news.loading', true)
        .set('news.error', null)
        .value()
    },
    [combineActions(GET_NEWS.SUCCESS)]: (state, { payload }) => {
      const totalSize = Number(payload.totalResults)
      return imm(state)
        .set('news.data', payload.articles || [])
        .set('news.total', totalSize)
        .set('news.loading', false)
        .set('news.error', null)
        .value()
    },
    [combineActions(GET_NEWS.FAILURE)]: (state, { payload }) => {
      return imm(state)
        .set('news.loading', false)
        .set('news.error', payload)
        .value()
    },
  },
  initialState,
)
