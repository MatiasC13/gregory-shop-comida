import React from "react";
import {
  useMediaQuery,
  HStack,
  // Image,
  Box,
  Text,
  Flex,
  Table,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
  Center,
  Divider,
  IconButton,
} from "@chakra-ui/react";
import CartItem from "../../interfaces/CartItem";
import { parseCurrency, rgbDataURL } from "../../utils/helper";
import { AddIcon, MinusIcon, DeleteIcon } from "@chakra-ui/icons";
import useCart from "../../hooks/useCart";
import Image from "next/image";
import { customColor } from "utils/ownerData";


interface Prop {
  itemCart: CartItem;
}

const ItemCart = ({ itemCart }: Prop): JSX.Element => {
   const [isSmallerThan350] = useMediaQuery("(max-width: 350px)");
  const { updateCart, removeItem } = useCart();

  const onMinus = () => {
    updateCart(itemCart.product, -1);
    // const updateItem = {...itemCart}
    // updateItem.quantityUnits= updateItem.quantityUnits-1

    // setCart((prev => [...prev.filter(c => c.product.id !== itemCart.product.id), updateItem]))
  };

  const onMore = () => {
    updateCart(itemCart.product, 1);
  };

  return (
    <>
      <HStack justify={"space-around"} py={"0.5rem"}>
        <Box minWidth={isSmallerThan350 ? "17%" : "25%"}>
          <Image
            // fallback={<Fallback />}
            // fallbackSrc={"/img/logo.gif"}
            // borderRadius={"sm"}
            placeholder="blur"
            blurDataURL={rgbDataURL(customColor)}
            width={"3rem"}
            height={"3rem"}
            layout="responsive"
            objectFit={"cover"}
            src={itemCart.product.image[0]}
          />
          <Flex justifyContent={"space-between"} mt={"0.5rem"}>
            <IconButton
              onClick={() => onMore()}
              aria-label={""}
              size={"xs"}
              _focus={{
                border: "none",
                color: "primary.500",
              }}
            >
              <AddIcon fontSize={"sm"} />
            </IconButton>
            <Text fontSize={["md", "lg"]}>{itemCart.quantityUnits}</Text>
            <IconButton
              onClick={() => onMinus()}
              aria-label={""}
              size={"xs"}
              disabled={itemCart.quantityUnits === 1}
              _focus={{
                border: "none",
                color: "primary.500",
              }}
            >
              <MinusIcon fontSize={"sm"} />
            </IconButton>
          </Flex>
        </Box>
        <Box>
          <Center>
            <Text color={"primary.600"} noOfLines={1}>
              {itemCart.product.title}
            </Text>
          </Center>
          <TableContainer whiteSpace={"break-spaces"} width={"14rem"}>
            <Table variant="unstyled" size={"sm"}>
              <Tbody>
                <Tr>
                  <Td>Precio unitario</Td>
                  <Td isNumeric>{parseCurrency(itemCart.product.price)}</Td>
                </Tr>
              </Tbody>
              <Tfoot>
                <Tr>
                  <Th>Subtotal</Th>
                  <Th>
                    {parseCurrency(
                      itemCart.product.price * itemCart.quantityUnits
                    )}
                  </Th>
                </Tr>
              </Tfoot>
            </Table>
          </TableContainer>
        </Box>
        <IconButton
          size={["xs", "md"]}
          aria-label=""
          onClick={() => removeItem(itemCart.product.id)}
          _focus={{
            border: "none",
            color: "primary.500",
          }}
        >
          <DeleteIcon alignSelf={"center"} fontSize={"lg"} />
        </IconButton>
      </HStack>
      <Divider />
    </>
  );
};

export default ItemCart;
