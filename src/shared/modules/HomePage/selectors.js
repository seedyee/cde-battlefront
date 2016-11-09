import { createSelector } from 'reselect'

const selectHome = () => (state) => state.home

export const selectUsers = createSelector(
  selectHome(),
  (home) => home.users
)
