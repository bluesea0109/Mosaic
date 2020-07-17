import { createSelector } from 'reselect'

const newsItem = (state) => state.news

export const selectNews = createSelector(
  newsItem,
  (newsItem) => newsItem.news.data,
)

export const selectPage = createSelector(
  newsItem,
  (newsItem) => newsItem.news.page,
)

export const selectTotal = createSelector(
  newsItem,
  (newsItem) => newsItem.news.total,
)

export const selectLoading = createSelector(
  newsItem,
  (newsItem) => newsItem.news.loading,
)

export const selectError = createSelector(
  newsItem,
  (newsItem) => newsItem.news.error,
)
