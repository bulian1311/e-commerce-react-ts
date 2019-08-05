export type RootState = {
  user: { currentUser: UserType | null }
  cart: { hidden: boolean }
}

export type UserType = {
  id: string,
  displayName: string,
  email: string,
  createdAt: any
}

export type MenuItemType = {
  title: string,
  imageUrl: string,
  id: number,
  linkUrl: string,
  size: string
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

// Redux types

// export type UserActionType = AnyAction & {
//   payload: UserType
// }