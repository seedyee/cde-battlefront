import { createSelector } from 'reselect'

const selectProject = () => (state) => state.project

export const selectAll = createSelector(
  selectProject(),
  s => s.all
)

export const selectCreated = createSelector(
  selectProject(),
  s => s.created
)

export const selectJoined = createSelector(
  selectProject(),
  s => s.joined
)

export const selectWatched = createSelector(
  selectProject(),
  s => s.watched
)

export const selectCollect = createSelector(
  selectProject(),
  s => s.collect
)

export const selectProfile = createSelector(
  selectProject(),
  s => s.profile
)
