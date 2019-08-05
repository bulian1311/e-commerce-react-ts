import { AnyAction, Reducer } from 'redux';
import { UserType } from '../../utils/types';

type StateType = {
  currentUser: UserType | null;
};

const INITIAL_STATE: StateType = {
  currentUser: null
}

const userReducer: Reducer = (
  state: StateType = INITIAL_STATE,
  action: AnyAction
): StateType => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };
    default:
      return state;
  }
}

export default userReducer;