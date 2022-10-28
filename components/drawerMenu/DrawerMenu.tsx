import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  Text,
} from "@chakra-ui/react";
import { useShoping } from "../../context/context";
import MenuListCategories from "components/menu/MenuListCatMobile";

const DrawerComponent = () => {
  const { isOpenMenu, onCloseMenu } = useShoping();

  return (
    <Drawer
      size={"xl"}
      isFullHeight={false}
      placement={"top"}
      onClose={onCloseMenu}
      isOpen={isOpenMenu}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerHeader borderBottomWidth="1px">
          <DrawerCloseButton
            color={"primary.500"}
            _focus={{
              border: "none",
              background: "primary.50",
            }}
            _focusVisible={{
              boxShadow: "none",
            }}
          />
          <Text color={"primary.500"}>Categorías</Text>
        </DrawerHeader>
        <DrawerBody>
          
            <MenuListCategories />

        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default DrawerComponent;
