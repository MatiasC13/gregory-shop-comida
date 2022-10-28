import {
  Box,
  Grid,
  Container,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import Product from "../../interfaces/Product";
import dynamic from "next/dynamic";
const Item = dynamic(() => import("components/item/item"));
const NotFoundProducts = dynamic(() => import("components/notFoundProducts/NotFoundProducts")) ;

interface ProductsList {
  products: Product[];
}
const List = ({ products }: ProductsList) => {
  return (
    <Box p={4} mt={["0.5rem"]}>
      <Container
        maxWidth="container.lg"
      >
        {products.length > 0 ? (
          <motion.ul
            animate="show"
            initial="hidden"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.5,
                },
              },
            }}
          >
            <Grid
              gridGap={6}
              templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
            >
              {products.map((product: Product) => (
                <Item key={product.id} product={product} />
              ))}
            </Grid>
          </motion.ul>
        ) : (
          <NotFoundProducts />
        )}
      </Container>
    </Box>
  );
};

export default List;
