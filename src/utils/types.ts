export type RootState = {
  user: UserStateType,
  cart: CartStateType,
  directory: DirectoryStateType,
  shop: ShopStateType
}

export type UserStateType = {
  currentUser: UserType | null;
};

export type ShopStateType = {
  collections: CollectionsType
}

export type CartStateType = {
  hidden: boolean,
  cartItems: CartItemType[]
}

export type DirectoryStateType = {
  sections: DirectoryItemType[]
}

export type UserType = {
  id: string,
  displayName: string,
  email: string,
  createdAt: any
}

export type DirectoryItemType = {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size: string
}

export type CollectionsType = {
  hats: CollectionItemType,
  sneakers: CollectionItemType,
  jackets: CollectionItemType,
  womens: CollectionItemType,
  mens: CollectionItemType
}

export type CollectionItemType = {
  id: number,
  title: string,
  routeName: string,
  items: ShopItemType[]
}

export type ShopItemType = {
  id: number,
  name: string,
  imageUrl: string,
  price: number
}

export type CartItemType = ShopItemType & {
  qty: number
}