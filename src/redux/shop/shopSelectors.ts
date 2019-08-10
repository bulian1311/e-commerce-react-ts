import { createSelector, Selector } from 'reselect';
import { RootState, ShopStateType, CollectionsType, CollectionItemType } from '../../utils/types';

type KeysType = 'hats' | 'sneakers' | 'jackets' | 'womens' | 'mens';

const selectShop = (state: RootState) => state.shop;

export const selectShopCollections: Selector<RootState, CollectionsType | null> = createSelector(
  [selectShop],
  (state: ShopStateType): CollectionsType | null => state.collections
);

export const selectCollection = (collectionUrlParam: KeysType) =>
  createSelector(
    [selectShopCollections],
    (collections: CollectionsType | null): CollectionItemType | null =>
      collections ? collections[collectionUrlParam] : null
  );

export const selectCollectionForPreview: Selector<RootState, CollectionItemType[] | null> = createSelector(
  [selectShopCollections],
  (collections: CollectionsType | null): CollectionItemType[] | null =>
    collections ? Object.values(collections) : null
);

export const selectIsCollectionFetching: Selector<RootState, boolean> = createSelector(
  [selectShop],
  (shop: ShopStateType) => shop.isFetching
);

export const selectCollectionsLoaded: Selector<RootState, boolean> = createSelector(
  [selectShop],
  (shop: ShopStateType) => !!shop.collections
);