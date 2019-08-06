import { createSelector } from 'reselect';
import { RootState, UserType, UserStateType } from '../../utils/types';

const selectUser = (state: RootState): UserStateType => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user: UserStateType): UserType | null => user.currentUser
);