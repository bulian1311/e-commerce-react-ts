import { createSelector } from 'reselect';
import { RootState, ShopStateType, CollectionsType, CollectionItemType } from '../../utils/types';

type KeysType = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections = createSelector(
  [selectShop],
  (state: ShopStateType): CollectionsType | null => state.collections
);

export const selectCollection = (collectionUrlParam: KeysType) =>
  createSelector(
    [selectShopCollections],
    (collections: CollectionsType | null): CollectionItemType | null =>
      collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionForPreview = createSelector(
  [selectShopCollections],
  (collections: CollectionsType | null): CollectionItemType[] | null =>
    collections ? Object.values(collections) : null
);