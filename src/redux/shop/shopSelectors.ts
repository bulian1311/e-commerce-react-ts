import { createSelector } from 'reselect';
import { RootState, ShopStateType } from '../../utils/types';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (state: ShopStateType) => state.collections
);
