import { useEffect, useState } from "react";


import {
  Button,

Text,

  Image,
  Flex,
} from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import { useRouter } from "next/router";
 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 //@ts-ignore
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import React from "react";
import TableSuccessMobile from "components/tableSuccesMobile/TableSuccessMobile";
import TableSuccessDesktop from "components/tableSuccessDesktop/TableSuccessDesktop";
import { useShoping } from "context/context";
import Head from 'next/head'
import { showFavIcon } from "utils/ownerData";



const Success = () => {
  const { user } = useShoping()
  const [isSmallerThan767] = useMediaQuery("(max-width: 767px)");
  const [order, setOrder] = useState("");
  const route = useRouter();
  const btnHandlerGoHome = () => {

    route.push("/");
  };
  useEffect(() => {
    // solo aca puedo modificar el layout que el servidor espera

    setOrder(new URLSearchParams(route.asPath).get("payment_id"));
    console.log(user)

    confetti();
  }, []);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={showFavIcon} />
        <title>Tu Compra</title>
      </Head>

      <Flex flexDirection={"column"} justify={"center"} align={"center"}>
        <Flex
          flexDirection={["column", "row"]}
          align={"center"}
          maxWidth={"container.sm"}
          my={"2rem"}
        >
          <Image src={"/illustration/success.svg"} boxSize={"13rem"} />
          <Flex flexDir={"column"} align={"center"} mx={["1rem", "0rem"]}>
            <Text
              fontSize={["1rem", "1.5rem"]}
              fontWeight={"bold"}
              mt={["1rem", "0rem"]}
            >
              ¡Gracias por tu compra {user.name}!
            </Text>
            <Text fontSize={["1rem", "1.5rem"]} fontWeight={"bold"} mt={"1rem"}>
              Orden: #{order} 😃
            </Text>
            <Text fontSize={"1rem"} mt={"1rem"}>
              Puedes revisar el detalle de tu compra en tu email
            </Text>
          </Flex>
        </Flex>
        {isSmallerThan767 ? <TableSuccessMobile /> : <TableSuccessDesktop />}
        <Button
          onClick={btnHandlerGoHome}
          background={"primary.400"}
          colorScheme="primary"
          width={"fit-content"}
          my={"1rem"}
        >
          volver a la tienda
        </Button>
      </Flex>
    </>
  );
};



export default Success;
