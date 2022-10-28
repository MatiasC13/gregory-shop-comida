import { IconButton, Image, useToast } from "@chakra-ui/react";
import { useShoping } from "../../context/context";
import useCart from "hooks/useCart";
import { NodeNextRequest } from "next/dist/server/base-http/node";

const MercadoPago = () => {
  const { onOpenForm, onCloseCart } = useShoping();

  const { cart } = useCart();
  const toast = useToast();

  const handlerMP = () => {
    if (cart.length > 0) {
      onCloseCart();

      onOpenForm();
    } else {
      toast({
        status: "error",
        title: "No tienes productos en tu carrito 😣",
        isClosable: true,
        position: "top",
      });
    }
  };

  return (
    <>
      <IconButton
        onClick={handlerMP}
        title={"realiza tu compra con mercado pago"}
        width={"100%"}
        aria-label={""}
        alignSelf={"left"}
        background={"none"}
        _active={{
          background: "none",
        }}
        _hover={{
          background: "none",
        }}
        _focusVisible={{
          boxShadow: "none",
        }}
      >
        <Image
          // fallbackSrc={"/img/logo.gif"}
          src={"/img/mercado-pago.svg"}
          alt={"Mercado Pago"}
          width={"60%"}
        />
      </IconButton>
    </>
  );
};

export default MercadoPago;
