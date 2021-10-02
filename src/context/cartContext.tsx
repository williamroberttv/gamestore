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
    const totalPrices = cartItems.map((item) => item.price * item.amount);
    const cartTotal = totalPrices.reduce((acc, item) => acc + item);
    return cartTotal.toFixed(2);
  };

  const addToCart = (clickedItem: ProductsProps) => {
    setCartItems((state) => {
      const isItemInCart = state.find((item) => item.id === clickedItem.id);
      if (isItemInCart) {
        return state.map((item) => (item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item));
      }

      return [...state, { ...clickedItem, amount: 1 }];
    });
  };

  const removeFromCart = (id: number) => {
    setCartItems((prev) => prev.reduce((acc, item) => {
      if (item.id === id) {
        if (item.amount === 1) return acc;
        return [...acc, { ...item, amount: item.amount - 1 }];
      }
      return [...acc, item];
    }, [] as ProductsProps[]));
  };

  const handleOpenCart = () => setIsOpen((state) => !state);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
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
