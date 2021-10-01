import { useCallback, useEffect } from 'react';

import {
  Box, Grid, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

import { api } from '../../services/api';

import { Header } from '../../components/Header';
import { Cards } from '../../components/Cards';
import { useProducts } from '../../context/productsContext';
import { Cart } from '../../components/Cart';
import { useCartItems } from '../../context/cartContext';

export function Home() {
  const { products, getProducts } = useProducts();
  const { cartItems } = useCartItems();

  const getProductsData = useCallback(async () => {
    const response = await api('products');
    getProducts(response.data);
  }, [getProducts]);

  useEffect(() => {
    getProductsData();
  }, [getProductsData]);

  return (
    <>
      <Header />
      <Box w="80%" m="auto" mt="50px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch size={20} />}
          />
          <Input type="search" placeholder="Procurar game" />
        </InputGroup>
        <Grid
          templateColumns="repeat(auto-fit, 300px)"
          justifyContent="center"
          m="50px auto"
          gap={5}
        >
          {products.map((product) => (
            <Cards key={product.id} item={product} />
          ))}
        </Grid>
      </Box>
      <Cart items={cartItems} />
    </>
  );
}
