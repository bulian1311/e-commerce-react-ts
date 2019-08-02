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