import {
  useState, useEffect, useCallback, ChangeEvent,
} from 'react';

import {
  Box, Grid, Input, InputGroup, InputLeftElement,
} from '@chakra-ui/react';
import { FiSearch } from 'react-icons/fi';

import { Header } from '../../components/Header';
import { Cards } from '../../components/Cards';
import { Cart } from '../../components/Cart';
import { useProducts } from '../../context/productsContext';
import { useCartItems } from '../../context/cartContext';
import { ProductsProps } from '../../utils/types';
import { Filters } from '../../components/Filters';

export function Home() {
  const { products } = useProducts();
  const { cartItems } = useCartItems();
  const [filteredProducts, setFilteredProducts] = useState<ProductsProps[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const sortAlphabetically = (order: string) => {
    if (order === 'down') {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => b.name.localeCompare(a.name)),
      );
    }
    if (order === 'up') {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name)),
      );
    }
  };

  const sortByPrice = (order: string) => {
    if (order === 'up') {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => {
          if (b.price > a.price) { return -1; }
          if (b.price < a.price) { return 1; }
          return 0;
        }),
      );
    } else {
      setFilteredProducts(
        [...filteredProducts].sort((a, b) => {
          if (a.price > b.price) { return -1; }
          if (a.price < b.price) { return 1; }
          return 0;
        }),
      );
    }
  };

  const sortByStars = () => {
    setFilteredProducts(
      [...filteredProducts].sort((a, b) => {
        if (a.score > b.score) { return -1; }
        if (a.score < b.score) { return 1; }
        return 0;
      }),
    );
  };

  const handleSearch = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.currentTarget;
    setInputValue(value.toLowerCase());
    if (inputValue === '') {
      setFilteredProducts(products);
    } else {
      const filteredByInput = products.filter((item) => item.name
        .toLowerCase().includes(
          value,
        ));
      setFilteredProducts(filteredByInput);
    }
  }, [products, inputValue]);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <>
      <Header />
      <Box w="80%" m="auto" mt="50px">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            children={<FiSearch size={20} />}
          />
          <Input
            onChange={(e) => handleSearch(e)}
            type="search"
            placeholder="Procurar game"
          />
        </InputGroup>
        <Filters
          sortAlphabetically={sortAlphabetically}
          sortByPrice={sortByPrice}
          sortByStars={sortByStars}
        />
        <Grid
          templateColumns="repeat(auto-fit, 300px)"
          justifyContent="center"
          m="50px auto"
          gap={5}
        >
          {filteredProducts.map((product) => (
            <Cards key={product.id} item={product} />
          ))}
        </Grid>
      </Box>
      <Cart items={cartItems} />
    </>
  );
}
