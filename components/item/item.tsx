import React from "react";
import { Stack, Text, Button, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { convertToPath } from "product/item";
import { customColor } from "../../utils/ownerData";
import { useShoping } from "../../context/context";
import useCart from "../../hooks/useCart";
import Product from "../../interfaces/Product";
import { parseCurrency, rgbDataURL } from "utils/helper";


interface Props {
  product: Product;
}

const Item = ({ product }: Props): JSX.Element => {
  const toast = useToast();
  const { addItem } = useCart();
  const { setSelectedProduct } = useShoping();
  const itemEffect = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1 },
  };

  const handelarAddProduct = (product: Product) => {
    addItem(product);

    toast({
      title: `Agregado ${product.title}`,
      status: "success",
      isClosable: true,
      position: "top",
    });
  };

  const style = { cursor: "pointer" };
  return (
    <motion.li variants={itemEffect}>
      <Stack
        // boxShadow={"base"}
        borderRadius="md"
        padding={4}
        spacing={3}
        height="100%"
      >
        <Stack spacing={1}>
          {/* this is for a warning message*/}
          <div>
            <Image

              placeholder="blur"
              blurDataURL={rgbDataURL(customColor)}
              style={style}
              src={product.image[0]}
              alt={product.title}
              width={128}
              height={128}
              objectFit={"cover"}
              layout={"responsive"}
              onClick={() => setSelectedProduct(product)}
            />
          </div>
          <Text as={"h2"} color="primary.600" noOfLines={1}>
            {product.title}
          </Text>
          <Text color="primary.500" fontSize="sm" fontWeight="500">
            {parseCurrency(product.price)}
          </Text>
        </Stack>
        <Button
          borderRadius={40}
          colorScheme="primary"
          size="sm"
          variant="outline"
          onClick={() => {
            handelarAddProduct(product);
          }}
          _active={{
            color: "whiteAlpha.900",
            backgroundColor: "primary.400",
          }}
        >
          Agregar
        </Button>

        <Button
          borderRadius={40}
          colorScheme="primary"
          size="sm"
          variant="outline"
          _active={{
            color: "whiteAlpha.900",
            backgroundColor: "primary.400",
          }}
        >
          <Link href={`/Detail/${convertToPath(product.title)}`}>
            Ver Detalle
          </Link>
        </Button>
      </Stack>
    </motion.li>
  );
};

export default Item;
