import { createSelector } from 'reselect'

const selectAuth = state => state.auth

export const selectUser = createSelector(
  selectAuth,
  a => a.user
)

export const selectLogined = createSelector(
  selectAuth,
  a => a.logined
)
