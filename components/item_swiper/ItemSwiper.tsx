import { Stack } from "@chakra-ui/react";
import { useShoping } from "context/context";
import React from "react";
import Product from "../../interfaces/Product";
import { rgbDataURL } from "../../utils/helper";
import Image from "next/image";
import { customColor } from "utils/ownerData";

interface Props {
  product: Product;
}

const Item = ({ product }: Props): JSX.Element => {
  const { setSelectedProduct } = useShoping();

  return (
    <Stack mt={"2rem"} padding={"1rem"} borderRadius="md">
      <Stack height={"13rem"} pos={"relative"} spacing={1}>
        <Image
          src={product.image[0]}
          alt={product.title}
          layout="fill"
          style={{
            cursor: "pointer",
            margin: "0 1rem",
            borderRadius: "10px",
          }}
          placeholder="blur"
          blurDataURL={rgbDataURL(customColor)}
          onClick={() => setSelectedProduct(product)}
          objectFit="cover"
        />
      </Stack>
    </Stack>
  );
};

export default Item;
