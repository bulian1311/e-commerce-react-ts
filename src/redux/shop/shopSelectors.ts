import { createSelector } from 'reselect';
import { RootState, ShopStateType, CollectionsType } from '../../utils/types';

type KeysType = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (state: ShopStateType) => state.collections
);

export const selectCollection = (collectionUrlParam: KeysType) =>
  createSelector(
    [selectShopCollections],
    (collections: CollectionsType) => collections[collectionUrlParam]
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections: CollectionsType) => Object.values(collections) //.keys(collections).map((key: KeysType) => collections[key])
);