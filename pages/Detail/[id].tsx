import { Stack, Box, Container } from "@chakra-ui/react";
import dynamic from "next/dynamic";
const SwiperImage = dynamic(() => import("components/swiperImage/SwiperImage"));
const ItemDetail = dynamic(() => import("components/itemDetail/ItemDetail"));

import Product from "interfaces/Product";
import { getItemData, getPathsFromTitle } from "product/item";

interface Props {
  productInfo: Product;
}

const Detail = ({ productInfo }: Props) => {
  return (
    <Container maxWidth={"container.lg"} p={5}>
      <Stack
        direction={["column", "column", "row"]}
        align={"center"}
        spacing={["1rem", "1rem", "3rem"]}
      >
        <Box w={["100%", "45%"]}>
          <SwiperImage title={productInfo.title} image={productInfo.image} />
        </Box>
        <Box w={["100%", "50%"]}>
          <ItemDetail product={productInfo} />
        </Box>
      </Stack>
    </Container>
  );
};

export default Detail;

export async function getStaticPaths() {
  //  const paths = await getPathsFromTitle();
  const paths = await getPathsFromTitle();

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps({ params }) {
  const id = params.id;
  const productInfo = await getItemData(id);

  return {
    props: {
      productInfo,
    },
  };
}
