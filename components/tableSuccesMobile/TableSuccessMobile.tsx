import React, { Fragment } from "react";
import NextImage from "next/image";
import { Table, Tbody, Tr, Th, Td, Box } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import useCart from "hooks/useCart";
import { parseCurrency } from "utils/helper";

const TableSuccessMobile = () => {
  const [isSmallerThan635] = useMediaQuery("(max-width: 635px)");
  const { cart, totalCost } = useCart();

  return (
    <>
      {cart.map(({ product: { price, title, image }, quantityUnits }, i) => (
        <Fragment key={i}>
          <Box
            width={isSmallerThan635 ? "100%" : "container.sm"}
            height={isSmallerThan635 ? "100%" : "0%"}
            p={"2rem"}
            border={"1px solid white"}
            borderRadius={"md"}
          >
            {/* <Stack
            backgroundColor="whiteAlpha.900"
            boxShadow={"base"}
            borderRadius="md"
            padding={4}
            spacing={3}
            height="100%"
          > */}
            <NextImage
              width={1}
              height={1}
              objectFit={"cover"}
              layout={"responsive"}
              src={image[0]}
            />
            {/* <Image src={image} /> */}
            {/* </Stack> */}
          </Box>
          <Table
            size={"md"}
            variant={"simple"}
            colorScheme={"primary"}
            background={"primary.200"}
            maxWidth={"container.sm"}
            mb={"2rem"}
          >
            <Tbody>
              <Tr>
                <Th>Producto</Th>
                <Td textAlign={"end"}>{title}</Td>
              </Tr>
              <Tr>
                <Th>Cantidad</Th>
                <Td isNumeric>{quantityUnits}</Td>
              </Tr>
              <Tr>
                <Th>Precio</Th>
                <Td isNumeric>{parseCurrency(price)}</Td>
              </Tr>
              <Tr>
                <Th>SubTotal</Th>
                <Td isNumeric>{parseCurrency(quantityUnits * price)}</Td>
              </Tr>
              <Tr>
                <Td fontWeight={"extrabold"}>Total</Td>
                <Td align="right" fontWeight={"extrabold"} isNumeric>
                  {parseCurrency(totalCost)}
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Fragment>
      ))}
    </>
  );
};

export default TableSuccessMobile;
