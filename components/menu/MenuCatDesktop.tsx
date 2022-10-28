import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Text,
  Box,
} from "@chakra-ui/react";
import { useShoping } from "context/context";
import { useMemo } from "react";
import { filter } from "utils/helper";

const MenuComponent = (): JSX.Element => {
  const { setproductsState, stateProducts, HandleRefresh } = useShoping();

  const menuHandlerCategories = (search: string) => {
    setproductsState((prev) => ({
      ...prev,
      filteredProducts: filter(search, prev.products),
    }));
  };
  const categories = useMemo(
    () =>
      stateProducts.products
        .map((p) => p.category)
        .filter((p, i, arr) => {
          return arr.indexOf(p) === i;
        }),
    [stateProducts.products]
  );

  return (
    <Box display={["none", "none", "flex", "flex"]}>
      <Menu isLazy>
        <MenuButton>
          <Text fontSize={"xl"} fontWeight="bold" color={"whiteAlpha.900"}>
            Categorías
          </Text>
        </MenuButton>
        <MenuList>
          <MenuItem
            onClick={() => HandleRefresh()}
            _active={{
              color: "whiteAlpha.900",
              backgroundColor: "primary.300",
            }}
            _focus={{
              color: "whiteAlpha.900",
              backgroundColor: "primary.300",
            }}
          >
            Todos
          </MenuItem>
          {categories.map((c, i) => (
            <MenuItem
              key={i}
              onClick={() => menuHandlerCategories(c)}
              _active={{
                color: "whiteAlpha.900",
                backgroundColor: "primary.300",
              }}
              _focus={{
                color: "whiteAlpha.900",
                backgroundColor: "primary.300",
              }}
            >
              {c}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default MenuComponent;
