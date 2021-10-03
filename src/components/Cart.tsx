import {
  Box,
  Button, Drawer, DrawerBody,
  DrawerCloseButton, DrawerContent,
  DrawerFooter, DrawerHeader, DrawerOverlay,
  Flex, IconButton, Image, Text,
} from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useCartItems } from '../context/cartContext';

export function Cart() {
  const {
    isOpen, cartItems, handleOpenCart,
    removeFromCart, addToCart, getCartTotal,
  } = useCartItems();

  const getShippingTotal = () => {
    const productsPrices = cartItems.map((item) => item.price * item.amount);
    const totalProductsPrices = productsPrices.reduce(
      (acc, item) => acc + item,
    );
    const amountProducts = cartItems.map((item) => item.amount);
    const totalAmount = amountProducts.reduce((acc, item) => acc + item);
    if (totalProductsPrices >= 250) {
      return 0;
    }
    return totalAmount * 10;
  };

  const getTotal = () => {
    const totalProducts = cartItems.map((item) => item.price * item.amount);
    const totalProductsPrice = totalProducts.reduce((acc, item) => acc + item);
    const totalShippingPrice = getShippingTotal();
    getCartTotal(totalProductsPrice + totalShippingPrice);
    return totalProductsPrice + totalShippingPrice;
  };

  return (
    <Drawer
      isOpen={isOpen}
      size="lg"
      placement="right"
      onClose={handleOpenCart}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Finalize sua compra</DrawerHeader>

        <DrawerBody p="10px">
          <Flex flexDirection="column">
            {cartItems.map((item) => (
              <Flex mb="20px" key={item.id}>
                <Image w={[150, 250]} src={`/assets/${item.image}`} />
                <Flex ml="16px" flexDirection="column" justify="space-between">
                  <Box>
                    <Text mb="16px" fontWeight="700">{item.name}</Text>
                    <Text
                      mb="16px"
                      fontWeight="700"
                    >
                      {`R$ ${(item.price * item.amount).toFixed(2)}`}

                    </Text>
                    <Text mb="16px">
                      {getShippingTotal() === 0
                        ? 'Frete grátis'
                        : `Frete: R$ ${item.amount * 10}`}
                    </Text>
                  </Box>
                  <Flex
                    justify="space-between"
                    align="center"
                    w={['120px', '150px']}
                  >
                    <IconButton
                      onClick={() => removeFromCart(item.id)}
                      bg="#FD6682"
                      _hover={{ filter: 'brightness(0.9)' }}
                      aria-label="subtract"
                      icon={<FiMinus size={20} />}
                    />
                    <Text>
                      {item.amount}
                    </Text>
                    <IconButton
                      onClick={() => addToCart(item)}
                      bg="#FD6682"
                      _hover={{ filter: 'brightness(0.9)' }}
                      aria-label="add"
                      icon={<FiPlus size={20} />}
                    />
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          {cartItems.length > 0
            ? (
              <Flex>
                <Text mr="16px" fontWeight="700">
                  {(getShippingTotal() === 0
                    ? 'Frete grátis'
                    : `Frete: R$ ${getShippingTotal().toFixed(2)}`)}
                </Text>
                <Text mr="16px" fontWeight="700">
                  {`Total: R$ ${getTotal().toFixed(2)}`}
                </Text>
              </Flex>
            )
            : (<Text mr="16px">Nenhum item no carrinho</Text>)}
          <Button
            onClick={handleOpenCart}
            variant="outline"
            mr={3}
          >
            Cancelar
          </Button>
          <Button bg="#FD6682" disabled={!cartItems.length}>Pagar</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
