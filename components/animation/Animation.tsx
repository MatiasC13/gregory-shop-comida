import {
  useMediaQuery,
  Flex,
  Text,
  Image,
  Heading,
  CloseButton,
  Box,
} from "@chakra-ui/react";
import { motion, AnimatePresence } from "framer-motion";
import {showLogoTypeGif } from "utils/ownerData";
import { useShoping } from "../../context/context";
import { CartContextType } from "../../interfaces/CartContextType";


const Animation = (): JSX.Element => {
  const [isSmallerThan620] = useMediaQuery("(max-width: 620px)");
  const { selectedProduct, setSelectedProduct } =
    useShoping() as CartContextType;

  return (
    <AnimatePresence>
      {selectedProduct && (
        <>
          <Flex
            key={selectedProduct.id}
            alignItems="center"
            as={motion.div}
            backgroundColor="rgba(0,0,0,0.8)"
            direction={"column"}
            height="100%"
            justifyContent="center"
            layoutId={selectedProduct.id.toString()}
            left={0}
            position="fixed"
            top={0}
            width="100%"
            zIndex={5}
            onClick={() => setSelectedProduct(null)}
          >
            <Flex
              justify={isSmallerThan620 ? "center" : "end"}
              width={isSmallerThan620 ? "0rem" : "40rem"}
              mb={isSmallerThan620 ? "2rem" : "1rem"}
            >
              <CloseButton
                color={"whiteAlpha.900"}
                size={"lg"}
                _active={{
                  borderWidth: "thin",
                  borderColor: "white",
                  background: "none",
                }}
                _hover={{
                  background: "none",
                }}
                _focusVisible={{
                  boxShadow: "none",
                }}
              />
            </Flex>
            <motion.figure>
              <Image
                fallbackSrc={showLogoTypeGif}
                alt={selectedProduct.title}
                as={motion.img}
                borderRadius="md"
                maxHeight={300}
                objectFit="cover"
                src={selectedProduct.image[0]}
              />
            </motion.figure>
            <Box maxWidth={"37.5rem"} pt={"1rem"}>
              <Heading
                textAlign={"center"}
                size={"lg"}
                pb={"1rem"}
                px={["1rem", "0rem"]}
                color={"whiteAlpha.900"}
              >
                {selectedProduct.title}
              </Heading>
              <Text
                textAlign={"justify"}
                px={["1rem", "0rem"]}
                color={"whiteAlpha.900"}
              >
                {selectedProduct.description}
              </Text>
            </Box>
          </Flex>
        </>
      )}
    </AnimatePresence>
  );
};

export default Animation;
