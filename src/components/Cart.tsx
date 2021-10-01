import {
  Box,
  Button, Drawer, DrawerBody,
  DrawerCloseButton, DrawerContent,
  DrawerFooter, DrawerHeader, DrawerOverlay,
  Flex, IconButton, Image, Text,
} from '@chakra-ui/react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useCartItems } from '../context/cartContext';
import { ProductsProps } from '../utils/types';

type CartProps = {
  items: ProductsProps[]
}

export function Cart({ items }: CartProps) {
  const {
    isOpen, cartItems, handleOpenCart, getTotalPrice,
  } = useCartItems();

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

        <DrawerBody>
          <Flex flexDirection="column">
            {items.map((item) => (
              <Flex mb="20px" key={item.id}>
                <Image src={`/assets/${item.image}`} />
                <Flex flexDirection="column" justify="space-between">
                  <Box>
                    <Text mb="16px" fontWeight="700">{item.name}</Text>
                    <Text
                      mb="16px"
                      fontWeight="700"
                    >
                      {`R$ ${item.price.toFixed(2)}`}

                    </Text>
                    <Text>
                      {item.price > 250
                        ? 'Frete grátis' : 'Frete: R$ 10,00'}
                    </Text>
                  </Box>
                  <Flex justify="space-between" align="center" maxW="150px">
                    <IconButton
                      aria-label="add"
                      icon={<FiMinus size={20} />}
                    />
                    <Text> 0 </Text>
                    <IconButton
                      aria-label="subtract"
                      icon={<FiPlus size={20} />}
                    />
                  </Flex>
                </Flex>
              </Flex>
            ))}
          </Flex>
        </DrawerBody>

        <DrawerFooter>
          <Text mr="16px" fontWeight="700">
            {cartItems.length > 0
              ? `Total: R$ ${getTotalPrice()}`
              : 'Nenhum item no carrinho'}
          </Text>
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
