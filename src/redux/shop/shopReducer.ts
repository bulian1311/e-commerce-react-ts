import { Reducer, AnyAction } from 'redux';
import shopActionType from './shopActionTypes';
import { ShopStateType } from '../../utils/types';

const INITIAL_STATE: ShopStateType = {
  collections: null,
  isFetching: false,
  errorMessage: null
};

const shopReducer: Reducer<ShopStateType, AnyAction> = (
  state = INITIAL_STATE, action
): ShopStateType => {
  switch (action.type) {
    case shopActionType.FETCH_COLLECTIONS_START:
      return { ...state, isFetching: true };
    case shopActionType.FETCH_COLLECTIONS_SUCCESS:
      return { ...state, collections: action.payload, isFetching: false };
    case shopActionType.FETCH_COLLECTIONS_FAILURE:
      return { ...state, isFetching: false, errorMessage: action.payload }
    default:
      return state;
  }
}

export default shopReducer;