import React from "react";
import { Flex } from "@chakra-ui/react";

interface PropsHeader {
  children: JSX.Element[];
}

const Header = ({ children }): JSX.Element => {
  return (
    <Flex
      direction={"row"}
      height={["6rem"]}
      background={"primary.400"}
      justify={"space-between"}
      align={"center"}
      padding={[1, 16]}
      position="sticky"
      zIndex={3}
      top={0}
    >
      {children}
    </Flex>
  );
};

export default Header;
