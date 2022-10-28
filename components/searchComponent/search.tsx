import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  InputLeftElement,
  Input,
  InputGroup,
  HStack,
  Tooltip,
} from "@chakra-ui/react";
import { filter } from "../../utils/helper";
import { SearchIcon } from "@chakra-ui/icons";

import { useShoping } from "../../context/context";

const Search = () => {
  const { setproductsState, search, setSearch } = useShoping();




  const handleChangeSearch = (e) => {
    setSearch(() => e.target.value);
  };

  const filtering = (search: string) => {
    setproductsState((prev) => ({
      ...prev,
      filteredProducts: filter(search, prev.products),
    }));
  };

  useEffect(() => {
    const handler = setTimeout(() => {
      // effect for search dissapear slider

      filtering(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  return (
    <HStack as={motion.div} my={["1rem", "2rem"]} mx={["1rem", "2rem"]}>
      <InputGroup>
        <Input
          name="filteredProducts"
          value={search}
          // htmlSize={30}
          placeholder="buscar productos"
          onChange={handleChangeSearch}
          _focus={{
            borderColor: "primary.50",
          }}
          _hover={{ 
            borderColor: "primary.100",
          }}
          _focusVisible={{
            zIndex: "none",
            borderColor: "none",
            boxShadow: "none",
          }}
        />

        <InputLeftElement>
          <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
            <SearchIcon />
          </Tooltip>
        </InputLeftElement>
        {/* <InputRightElement>
          <IconButton
            onClick={handlerResfresh}
            variant="unstyled"
            aria-label={"Search database"}
            isRound
            _focus={{
              boxShadow: " 0 0 3px rgba(255, 195, 0, 0.5 )"
            }}
          > */}
        {/* <Center>
              <Icon as={FiRefreshCw} color={"#ccc"} fontSize="2xl" />
            </Center> */}

        {/* <Icon as={FiRefreshCw} color={"#ccc"} fontSize="2xl" /> */}

        {/* <img
              src="https://img.icons8.com/external-dreamstale-lineal-dreamstale/32/000000/external-refresh-arrows-dreamstale-lineal-dreamstale.png"
              width={"2rem"}
            /> */}
        {/* </IconButton>
        </InputRightElement> */}
      </InputGroup>
    </HStack>
  );
};

export default Search;
