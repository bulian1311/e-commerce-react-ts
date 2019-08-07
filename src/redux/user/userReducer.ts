import { AnyAction, Reducer } from 'redux';
import { UserStateType } from '../../utils/types';
import userActionTypes from './userActionTypes';

const INITIAL_STATE: UserStateType = {
  currentUser: null
}

const userReducer: Reducer<UserStateType, AnyAction> = (
  state = INITIAL_STATE,
  action
): UserStateType => {
  switch (action.type) {
    case userActionTypes.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}

export default userReducer;