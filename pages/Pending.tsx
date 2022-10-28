import { Button, Text, Flex, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Whatsaap from "../components/whatsapp/Whatsaap";

import Head from "next/head";
import { showFavIcon } from "utils/ownerData";
// import Image from "next/image";

function Pending() {
  const route = useRouter();

  const btnHandlerGoHome = () => {
    route.push("/");
  };

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
          my={"4rem"}
          mx={["1rem", "0rem"]}
        >
          <Image src={"/illustration/pending.svg"} boxSize={"13rem"} />
          <Text
            fontWeight={"bold"}
            fontSize={["1rem", "1.3rem"]}
            mt={["2rem", "0rem"]}
            ml={["0rem", "1rem"]}
          >
            Tu compra está pendiente, cualquier duda puedes consultarnos,
            estamos para ayudarte 🤗
          </Text>
        </Flex>
        <Flex flexDirection={["column", "row"]} mb={"1rem"}>
          <Whatsaap />
          <Button
            onClick={btnHandlerGoHome}
            background={"primary.400"}
            colorScheme={"primary"}
            width={"fit-content"}
            mt={["1rem", "0rem"]}
            ml={["0rem", "1rem"]}
            _focusVisible={{
              boxShadow: "none",
            }}
          >
            volver a la tienda
          </Button>
        </Flex>
        <style>{`
body{
    overflow: hidden;
}
`}</style>
      </Flex>
    </>
  );
}

export default Pending;
