import { Flex, Button, Image, Text } from '@chakra-ui/react';
import { useShoping } from 'context/context';
import React from 'react'

const NotFoundProducts = () => {
    const { setSearch } = useShoping();
  return (
    <Flex flexDirection={["column", "row"]} justify={"center"} align={"center"}>
      <Image src={"/illustration/noMatch.svg"} boxSize={"13rem"} />
      <Flex flexDirection={["column"]} justify={"center"} align={"center"}>
        <Text
          fontWeight={"bold"}
          fontSize={["1rem", "1.3rem"]}
          mt={["2rem", "0rem"]}
          ml={["0rem", "1rem"]}
        >
          No se encontraron coincidencias para tu búsqueda 😬
        </Text>
        <Button
          onClick={() => setSearch("")}
          background={"primary.400"}
          colorScheme="primary"
          width={"fit-content"}
          my={"1rem"}
          _focusVisible={{
            boxShadow: "none",
          }}
        >
          volver a la tienda
        </Button>
      </Flex>
    </Flex>
  );
}

export default NotFoundProducts
