export interface MenuItem {
  title: string;
  path: string;
  image: string;
  subItems?: {
    title: string;
    path: string;
    image: string;
  }[];
}

export interface IGroceryItem {
  name: string;
  quantity: string;
  price: number;
  image: string;
}
