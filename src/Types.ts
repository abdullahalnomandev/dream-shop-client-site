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
