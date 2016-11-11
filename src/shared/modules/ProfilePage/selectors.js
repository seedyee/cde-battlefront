import { createSelector } from 'reselect'

const selectProfile = () => (state) => state.profile

export const selectCurrentUser = createSelector(
  selectProfile(),
  p => p.user
)
