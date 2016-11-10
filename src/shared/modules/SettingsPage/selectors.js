import { createSelector } from 'reselect'

const selectSettings = () => (state) => state.settings

export const selectUser = createSelector(
  selectSettings(),
  s => s.user
)
