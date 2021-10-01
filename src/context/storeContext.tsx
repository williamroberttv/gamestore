import { ChildrenType } from '../utils/types';
import { CartProvider } from './cartContext';
import { ProductsProvider } from './productsContext';

export function StoreContext({ children }: ChildrenType) {
  return (
    <ProductsProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ProductsProvider>
  );
}
