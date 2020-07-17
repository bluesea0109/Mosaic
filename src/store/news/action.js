import { createAction } from 'redux-actions'
import * as CONSTANTS from './constant'

export const getNews = createAction(CONSTANTS.GET_NEWS.REQUEST)
export const getNewsSuccess = createAction(CONSTANTS.GET_NEWS.SUCCESS)
export const getNewsFailure = createAction(CONSTANTS.GET_NEWS.FAILURE)
