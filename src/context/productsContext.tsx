import {
  createContext, useState, useCallback,
  useContext,
} from 'react';
import {
  ChildrenType, ProductsContextProps,
  ProductsProps,
} from '../utils/types';

const ProductsContext = createContext({} as ProductsContextProps);

export function ProductsProvider({ children }: ChildrenType) {
  const [products, setProducts] = useState<ProductsProps[]>([]);

  const getProducts = useCallback(
    (data: ProductsProps[]) => setProducts(data), [],
  );

  return (
    <ProductsContext.Provider value={{ products, getProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

export const useProducts = () => useContext(ProductsContext);
