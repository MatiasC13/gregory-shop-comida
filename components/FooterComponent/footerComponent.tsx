import { Box, Text, Icon, Flex } from "@chakra-ui/react";
import useCart from "hooks/useCart";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
// import { BsTelephone } from "react-icons/bs";
import { GiRotaryPhone } from "react-icons/gi";
import { urlWhatsaapp } from "utils/helper";
import {
  instagramAccount,
  msgOWnerContact,
  whatsaapNumber,
  telefono,
} from "utils/ownerData";

const Footer = () => {
  const { textMessage } = useCart();

  return (
    <>
      <Flex
        height={"5rem"}
        bg={"primary.400"}
        justify={"space-around"}
        alignItems={"center"}
      >
        <Flex alignItems={"center"}>
          <Icon
            as={GiRotaryPhone}
            boxSize={"2rem"}
            marginRight={[1, 2]}
            color={"whiteAlpha.900"}
          />
          <Text
            fontSize={["lg", "xl"]}
            fontWeight={"bold"}
            color={"whiteAlpha.900"}
          >
            {telefono}
          </Text>
        </Flex>
        <Box>
          <a
            target="_blank"
            href={urlWhatsaapp(msgOWnerContact, whatsaapNumber)}
            rel="noreferrer"
          >
            <Icon
              h={9}
              w={9}
              marginRight={2}
              color={"whiteAlpha.900"}
              as={FaWhatsapp}
              cursor={"pointer"}
              title="realiza tu compra de forma directa"
              href={urlWhatsaapp(textMessage(), whatsaapNumber)}
              aria-label={"link de whatssap  para confirmar la compra"}
            />
          </a>
          {true && (
            <a target="_blank" href={instagramAccount} rel="noreferrer">
              <Icon
                h={9}
                w={9}
                marginRight={2}
                color={"whiteAlpha.900"}
                as={FaInstagram}
              />
            </a>
          )}
          {true && (
            <a target="_blank" href={instagramAccount} rel="noreferrer">
              <Icon
                h={9}
                w={9}
                marginRight={2}
                color={"whiteAlpha.900"}
                as={FaFacebook}
              />
            </a>
          )}
        </Box>
      </Flex>
      <Text
        height={"1rem"}
        textAlign={"center"}
        bg={"primary.400"}
        color={"whiteAlpha.900"}
        fontSize={"0.7rem"}
      >
        made with ❤ by{" "}
        <a target="blank" href="https://tiendasgregory.com/">
          Gregory
        </a>
      </Text>
    </>
  );
};

export default Footer;
