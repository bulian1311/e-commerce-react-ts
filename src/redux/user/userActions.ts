import { AnyAction, ActionCreator } from 'redux';
import { UserType } from '../../utils/types';
import userActionTypes from './userActionTypes';

export const setCurrentUser: ActionCreator<AnyAction> = (user: UserType | null): AnyAction => {
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
  }
}