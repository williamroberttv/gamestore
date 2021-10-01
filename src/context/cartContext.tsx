import {
  createContext, useState,
  useContext,
} from 'react';
import { CartContextProps, ChildrenType, ProductsProps } from '../utils/types';

const CartContext = createContext({} as CartContextProps);

export function CartProvider({ children }: ChildrenType) {
  const [cartItems, setCartItems] = useState<ProductsProps[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const getTotalPrice = () => {
    const totalPrices = cartItems.map((item) => item.price);
    const cartTotal = totalPrices.reduce((acc, item) => acc + item);
    return cartTotal.toFixed(2);
  };

  const addToCart = (item: ProductsProps) => {
    setCartItems((state) => [...state, item]);
  };

  const handleOpenCart = () => setIsOpen((state) => !state);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      getTotalPrice,
      isOpen,
      handleOpenCart,
    }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartItems = () => useContext(CartContext);
