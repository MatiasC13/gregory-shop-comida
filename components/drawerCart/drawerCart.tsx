import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Text,
  Box,
  Image,
  Flex,
  Center,
} from "@chakra-ui/react";
import dynamic from "next/dynamic";

const ItemCart = dynamic(() => import("components/itemCart/ItemCart"));

import useCart from "../../hooks/useCart";

import { useShoping } from "../../context/context";

import { parseCurrency } from "../../utils/helper";

import MercadoPago from "../mercado_pago_component/MercadoPago";
import React, { useState, useEffect } from "react";
import style from "styles/drawerComponent.module.css";
import { businessType } from "utils/ownerData";
import Whatsaap from "components/whatsapp/Whatsaap";

const DrawerComponent = () => {
  const { isOpenCart, onCloseCart } = useShoping();
  const { cart, getNumberOfItems, totalCost } = useCart();
  const [res, setRes] = useState("20%");

  useEffect(() => {
    if (window.navigator.userAgent.includes("Samsung")) {
      setRes("55%");
    }
  }, []);

  return (
    <Drawer
      isFullHeight={true}
      size={"sm"}
      placement={"right"}
      onClose={onCloseCart}
      isOpen={isOpenCart}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <DrawerCloseButton
            color={"primary.500"}
            _focus={{
              border: "none",
              background: "primary.50",
            }}
            _focusVisible={{
              boxShadow: "none",
            }}
          />
          <Text color={"primary.500"}>Tu compra hasta el momento</Text>
          <Text fontWeight={"thin"} color={"inherit"}>
            {getNumberOfItems()} articulos
          </Text>
        </DrawerHeader>
        <DrawerBody className={style[businessType]} mx={["0rem", "1rem"]}>
          {cart.length > 0 ? (
            cart.map((item) => (
              <ItemCart key={item.product.id} itemCart={item} />
            ))
          ) : (
            <Center>
              <Image
                src={"/illustration/confused.svg"}
                maxWidth={["60%", "63% ", "63%", "100%"]}
              />
            </Center>
          )}
        </DrawerBody>
        <DrawerFooter
          flexDirection={"column"}
          borderTopWidth="1px"
          mb={{ base: res, sm: res, md: res, lg: 0, xl: 0 }}
        >
          <Flex
            width={"100%"}
            justifyContent={"space-between"}
            fontWeight={"bold"}
            fontSize={"1.1rem"}
          >
            {cart.length > 0 && <Text color={"primary.500"}>Total: </Text>}
            {cart.length > 0 && <Text>{parseCurrency(totalCost)}</Text>}
          </Flex>
          <Box>
            <Text fontWeight={"bold"} fontSize={"1.1rem"} color={"primary.500"}>
              Pagar con:
            </Text>
            <Flex
              flexDir={"row"}
              justifyContent={"space-around"}
              alignItems={"center"}
            >
              <Whatsaap />
              <MercadoPago />
            </Flex>
          </Box>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
