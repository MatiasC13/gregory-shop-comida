import React from "react";
import { Button, Flex, Link, Text } from "@chakra-ui/react";
import { BsFillCartCheckFill } from "react-icons/bs";
// import {CgShoppingBag}  from "react-icons/cg";
import { useShoping } from "../../context/context";
import useCart from "../../hooks/useCart";
import { urlWhatsaapp } from "utils/helper";
import { whatsaapNumber } from "utils/ownerData";
interface props {
  mode?: "Whatsaap" | "Cart";
}
const OpenCartSticky = ({ mode = "Cart" }: props) => {
  const { onOpenCart } = useShoping();
  const { getNumberOfItems, textMessage } = useCart();
  return (
    <Flex
      position="sticky"
      justifyContent={"center"}
      mr={["1rem", "2rem"]}
      mb={"1rem"}
      bottom={4}
    >
      {mode === "Whatsaap" ? (
        <Button
          // onClick={onOpenCart}
          leftIcon={<BsFillCartCheckFill size={"2rem"} />}
          width="fit-content"
          background={"primary.400"}
          colorScheme="primary"
          as={Link}
          href={urlWhatsaapp(textMessage(), whatsaapNumber)}
          target="blank"
        >
          <Text>Contactar por: {getNumberOfItems()} artículos</Text>
          {/* <Text>{cart.length} producto/s en tu bolsa de compras</Text> */}
        </Button>
      ) : (
        <Button
          onClick={onOpenCart}
          leftIcon={<BsFillCartCheckFill size={"2rem"} />}
          width="fit-content"
          background={"primary.400"}
          colorScheme="primary"
        >
            <Text>{getNumberOfItems()} artículos</Text>

        </Button>
      )}
    </Flex>
  );
};

export default OpenCartSticky;
