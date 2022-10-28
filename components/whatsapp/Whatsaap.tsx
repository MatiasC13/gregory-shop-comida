import React from "react";
import { Link, IconButton, Icon } from "@chakra-ui/react";
import { FaWhatsapp} from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import useCart from "../../hooks/useCart";
import { urlWhatsaapp } from "../../utils/helper";
import { whatsaapNumber } from "../../utils/ownerData";

const Whatsaap = (): JSX.Element => {
  const { getNumberOfItems, textMessage } = useCart();

  return (
    <IconButton
      // colorScheme="whatsapp"
      color="#25d366"
      title="realiza tu compra de forma directa"
      isExternal
      as={Link}
      href={urlWhatsaapp(textMessage(), whatsaapNumber)}
      aria-label={"link de whatssap  para confirmar la compra"}
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
      <Icon as={IoLogoWhatsapp} boxSize={"2rem"}>
        Completar pedido ({getNumberOfItems()} productos)
      </Icon>
    </IconButton>
  );
};

export default Whatsaap;
