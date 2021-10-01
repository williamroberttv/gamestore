import { ReactNode } from 'react';

export type ProductsProps = {
  id: number;
  name: string;
  price: number;
  score: number;
  image: string;
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
}

export type ProductsContextProps ={
  products: ProductsProps[];
  getProducts : (data: ProductsProps[]) => void;
}
