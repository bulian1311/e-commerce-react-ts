import { AnyAction, ActionCreator } from 'redux';
import { UserType } from '../../utils/types';

export const setCurrentUser: ActionCreator<AnyAction> = (user: UserType | null): AnyAction => {
  return {
    type: 'SET_CURRENT_USER',
    payload: user
  }
}