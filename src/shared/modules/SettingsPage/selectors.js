import { createSelector } from 'reselect'

const selectSettings = () => (state) => state.get('settings')
export const selectUser = createSelector(
  selectSettings(),
  s => s.get('user')
)
