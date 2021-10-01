/* eslint-disable no-extra-boolean-cast */
import {
  IconButton, Flex, Text, useColorMode,
} from '@chakra-ui/react';
import { FiSun, FiMoon, FiShoppingCart } from 'react-icons/fi';
import { useCartItems } from '../context/cartContext';

export function Header() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { cartItems, getTotalPrice, handleOpenCart } = useCartItems();

  return (
    <Flex
      flexDirection={['column', 'column', 'row']}
      align="center"
      justify="space-between"
      w="80%"
      m="auto"
      mt="20px"
    >
      <Text fontSize={30} fontWeight="700" color="#FD6682">gamestore</Text>
      <Flex mt={[30, 30, 30]} align="center" justify="flex-end">
        <IconButton
          onClick={toggleColorMode}
          aria-label="Search database"
          icon={
            colorMode === 'light' ? <FiMoon size={20} /> : <FiSun size={20} />
          }
          bg="transparent"
          mr="20px"
        />
        <IconButton
          aria-label="Search database"
          icon={<FiShoppingCart size={20} />}
          mr="20px"
          bg="transparent"
          outline="none"
          onClick={handleOpenCart}
        />

        <Text>
          {`R$ ${cartItems.length > 0
            ? getTotalPrice()
            : '0.00'}`}

        </Text>
      </Flex>
    </Flex>
  );
}
