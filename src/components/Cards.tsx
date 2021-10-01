import {
  Box, Flex, Image, Text, Button,
} from '@chakra-ui/react';
import { FiStar } from 'react-icons/fi';
import { useCartItems } from '../context/cartContext';
import { CardsProps } from '../utils/types';

export function Cards({ item }: CardsProps) {
  const { addToCart } = useCartItems();
  return (
    <Flex
      boxShadow="dark-lg"
      h="400px"
      w="300px"
      alignItems="center"
      justifyContent="space-between"
      flexDirection="column"
    >
      <Image
        src={`/assets/${item.image}`}
        alt="imagem de h"
        w="200px"
        mt="20px"
      />
      <Box
        bg="#f9f9f9"
        _dark={{ background: '#0e0e0e' }}
        p="15px"
        pr="40px"
        pl="40px"
        w="100%"
        h="150px"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Text fontWeight="400" align="center">
          {item.name}
        </Text>
        <Flex alignItems="center">
          <FiStar size={20} color="gold" />
          <Text ml="8px" fontWeight="400" align="center">
            {item.score}
          </Text>
        </Flex>
        <Flex
          justify="space-between"
          alignItems="center"
        >
          <Text fontWeight="700">
            {`R$ ${item.price.toFixed(2)}`}
          </Text>
          <Button
            onClick={() => addToCart(item)}
            bg="#FD6682"
            _hover={{ filter: 'brightness(0.9)' }}
          >
            Add to cart

          </Button>
        </Flex>
      </Box>
    </Flex>
  );
}
