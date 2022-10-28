import { ListItem, List } from "@chakra-ui/react";
import { filter } from "utils/helper";
import { useShoping } from "context/context";

const MenuListCategories = () => {
  const { setproductsState, stateProducts, HandleRefresh } = useShoping();

  const menuHandlerCategories = (search: string) => {
    setproductsState((prev) => ({
      ...prev,
      filteredProducts: filter(search, prev.products),
    }));
  };
  const categories = stateProducts.products
    .map((p) => p.category)
    .filter(
      (p, i, arr) => {
        return arr.indexOf(p) === i;
      },
      [stateProducts.products]
    );

  return (
    <List>
      <ListItem
        py={"0.3rem"}
        borderRadius={"md"}
        _active={{
          color: "whiteAlpha.900",
          backgroundColor: "primary.300",
        }}
        _focus={{
          color: "whiteAlpha.900",
          backgroundColor: "primary.300",
        }}
        onClick={() => HandleRefresh()}
      >
        Todos
      </ListItem>
      {categories.map((c, i) => (
        <ListItem
          key={i}
          py={"0.3rem"}
          borderRadius={"md"}
          _active={{
            color: "whiteAlpha.900",
            backgroundColor: "primary.300",
          }}
          _focus={{
            color: "whiteAlpha.900",
            backgroundColor: "primary.300",
          }}
          onClick={() => menuHandlerCategories(c)}
        >
          {c}
        </ListItem>
      ))}
    </List>
  );
};

export default MenuListCategories;
