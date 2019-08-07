import { createSelector } from 'reselect';
import { RootState, DirectoryStateType } from '../../utils/types';

const selectDirectory = (state: RootState) => state.directory;

export const selectDirectorySections = createSelector(
  [selectDirectory],
  (dir: DirectoryStateType) => dir.sections
);
