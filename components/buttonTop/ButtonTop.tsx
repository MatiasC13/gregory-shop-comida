import { Flex, IconButton } from "@chakra-ui/react";
import { ChevronUpIcon } from "@chakra-ui/icons";
interface props{
  scale:number;
}

const ButtonTop = ({ scale }:props ) => {
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Flex flexDirection={"row-reverse"}>
      <IconButton
        as={"button"}
        position={"fixed"}
        bottom={"8rem"}
        right={["1rem", "2rem"]}
        transform={`scale(${scale})`}
        aria-label=""
        background={"primary.400"}
        colorScheme="whiteAlpha"
        cursor={"pointer"}
        borderRadius={"100%"}
        onClick={scrollTop}
        _focusVisible={{
          boxShadow: "none",
        }}
      >
        <ChevronUpIcon
          boxSize={"2rem"}
          _hover={{
            background: "primary.400",
            colorScheme: "whiteAlpha",
            borderRadius: "100%",
          }}
        />
      </IconButton>
    </Flex>
  );
};

export default ButtonTop;
