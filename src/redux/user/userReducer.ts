import { AnyAction, Reducer } from 'redux';
import { UserStateType } from '../../utils/types';
import userActionTypes from './userActionTypes';

const INITIAL_STATE: UserStateType = {
  currentUser: null,
  errorMassage: null
}

const userReducer: Reducer<UserStateType, AnyAction> = (
  state = INITIAL_STATE,
  action
): UserStateType => {
  switch (action.type) {
    case userActionTypes.SIGN_IN_SUCCESS:
      return { ...state, currentUser: action.payload, errorMassage: null };

    case userActionTypes.SIGN_OUT_SUCCESS:
      return { ...state, currentUser: null, errorMassage: null }

    case userActionTypes.SIGN_IN_FAILURE:
    case userActionTypes.SIGN_OUT_FAILURE:
    case userActionTypes.SIGN_UP_FAILURE:
      return { ...state, errorMassage: action.payload }

    default:
      return state;
  }
}

export default userReducer;