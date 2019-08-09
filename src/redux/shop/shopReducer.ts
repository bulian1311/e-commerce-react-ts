import { Reducer, AnyAction } from 'redux';
import shopActionType from './shopActionTypes';
import { ShopStateType } from '../../utils/types';

const INITIAL_STATE: ShopStateType = { collections: null };

const shopReducer: Reducer<ShopStateType, AnyAction> = (
  state = INITIAL_STATE, action
): ShopStateType => {
  switch (action.type) {
    case shopActionType.UPDATE_COLLECTIONS:
      return { ...state, collections: action.payload }
    default:
      return state;
  }
}

export default shopReducer;