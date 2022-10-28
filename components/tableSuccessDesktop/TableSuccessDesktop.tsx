import React from "react";
import NextImage from "next/image";
import { Table, Tbody, Tr, Th, Td, Thead } from "@chakra-ui/react";
import useCart from "hooks/useCart";
import { parseCurrency } from "utils/helper";

const TableSuccessDesktop = () => {
  const { cart, totalCost } = useCart();

  return (
    <Table
      size={"lg"}
      variant={"striped"}
      colorScheme={"primary"}
      background={"primary.200"}
      maxWidth={"container.sm"}
    >
      <Thead>
        <Tr>
          <Th></Th>
          <Th>Producto</Th>
          <Th>Cantidad</Th>
          <Th>Precio</Th>
          <Th>SubTotal</Th>
        </Tr>
      </Thead>
      <Tbody>
        {cart.map(({ product: { price, title, image }, quantityUnits }, i) => (
          <Tr key={i}>
            <Td position={"relative"} p={0}>
              <NextImage
                objectFit={"cover"}
                layout={"responsive"}
                quality={100}
                width={1}
                height={1}
                src={image[0]}
              />
            </Td>
            <Td>{title}</Td>
            <Td isNumeric>{quantityUnits}</Td>
            <Td isNumeric>{parseCurrency(price)}</Td>
            <Td isNumeric>{parseCurrency(quantityUnits * price)}</Td>
          </Tr>
        ))}
        <Tr>
          <Td fontWeight={"extrabold"}>Total</Td>
          <Td></Td>
          <Td></Td>
          <Td></Td>
          <Td align="right" fontWeight={"extrabold"} isNumeric>
            {parseCurrency(totalCost)}
          </Td>
        </Tr>
      </Tbody>
    </Table>
  );
};

export default TableSuccessDesktop;
