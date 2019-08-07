import { Reducer, AnyAction } from 'redux';
import { ShopStateType } from '../../utils/types';
import data from './shopData';


const INITIAL_STATE: ShopStateType = { collections: data };

const shopReducer: Reducer<ShopStateType, AnyAction> = (
  state = INITIAL_STATE, action
): ShopStateType => {
  switch (action.type) {
    default:
      return state;
  }
}

export default shopReducer;