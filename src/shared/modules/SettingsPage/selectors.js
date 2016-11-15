import { createSelector } from 'reselect'

const selectSettings = () => (state) => state.settings

export const selectUser = createSelector(
  selectSettings(),
  s => s.user
)

export const selectEmails = createSelector(
  selectSettings(),
  s => s.emails
)

export const selectMobiles = createSelector(
  selectSettings(),
  s => s.mobiles
)
