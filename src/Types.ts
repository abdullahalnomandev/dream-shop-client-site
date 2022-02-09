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
  count: number;
  discount: number;
  _id: string;
}

// export interface IGroceryItem2 {
//   count: number;
//   discount: number;
//   image: string;
//   name: string;
//   price: number;
//   quantity: string;
//   _id: string;
// }

export interface IBooking {
  address: string;
  area: string;
  email: string;
  name: string;
  phone: string;
}
