import { createSelector } from 'reselect'

const selectProject = () => (state) => state.project

export const selectProjects = createSelector(
  selectProject(),
  s => s.projects
)
