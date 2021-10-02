import { ReactNode } from 'react';

export type ProductsProps = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
  amount: number;
};

export type CardsProps = {
 item: ProductsProps;
}

export type ChildrenType = {
  children: ReactNode;
}

export type CartContextProps ={
  cartItems: ProductsProps[];
  isOpen: boolean;
  addToCart: (item: ProductsProps) => void;
  getTotalPrice: () => void;
  handleOpenCart: () => void;
  removeFromCart: (id: number) => void;
}

export type ProductsContextProps ={
  products: ProductsProps[];
  getProducts : (data: ProductsProps[]) => void;
}

export type FiltersProps = {
  sortAlphabetically: (order: string) => void;
  sortByPrice: (order: string) => void;
  sortByStars: () => void;
}
