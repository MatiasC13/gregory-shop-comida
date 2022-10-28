import { Button, Flex, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Product from "interfaces/Product";
import { parseCurrency } from "utils/helper";
import useCart from "hooks/useCart";

interface Props {
  product: Product;
}

const ItemDetail = ({ product }: Props): JSX.Element => {
  const { addItem } = useCart();

  const route = useRouter();

  const btnHandelarAddProduct = (product: Product) => {
    addItem(product);
  };
  const btnHandlerGoHome = () => {
    route.push("/");
  };

  return (
    <>
      <Text
        as={"h1"}
        color="primary.600"
        noOfLines={1}
        fontSize={"3xl"}
        mb={"1rem"}
        textAlign={"center"}
      >
        {product.title}
      </Text>
      <Text as={"p"} color="primary.600" mb={"1rem"}>
        {product.description}
      </Text>
      <Text
        color="primary.500"
        fontSize="sm"
        fontWeight="500"
        textAlign={"end"}
      >
        {parseCurrency(product.price)}
      </Text>
      <Button
        w={"100%"}
        mt={"1rem"}
        borderRadius={40}
        colorScheme="primary"
        size="sm"
        variant="outline"
        onClick={() => {
          btnHandelarAddProduct(product);
        }}
        _active={{
          color: "whiteAlpha.900",
          backgroundColor: "primary.400",
        }}
      >
        Agregar
      </Button>
      <Flex justify={["center", "center", "flex-end"]}>
        <Button
          onClick={btnHandlerGoHome}
          background={"primary.400"}
          colorScheme={"primary"}
          width={"fit-content"}
          mt={"2rem"}
          // ml={["0rem", "1rem"]}
          _focusVisible={{
            boxShadow: "none",
          }}
        >
          volver a la tienda
        </Button>
      </Flex>
    </>
  );
};
export default ItemDetail;
//     <Stack direction={["column", "row"]} spacing={"1rem"} maxWidth={"container.lg"}>
//       <SwiperImage />
//       <Box>
//         <Text as={"h2"} color="primary.600" noOfLines={1}>
//           {/* {product.title} */} Titulo
//         </Text>
//         <Text color="primary.500" fontSize="sm" fontWeight="500">
//           {/* {parseCurrency(product.price)} */} Precio
//         </Text>
//         <Button
//           borderRadius={40}
//           colorScheme="primary"
//           size="sm"
//           variant="outline"
//           onClick={() => {
//             // handelarAddProduct(product);
//           }}
//           _active={{
//             color: "whiteAlpha.900",
//             backgroundColor: "primary.400",
//           }}
//         >
//           Agregar
//         </Button>

// </Box>
//     </Stack>
