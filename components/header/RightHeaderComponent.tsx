import { HamburgerIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, IconButton ,Text} from '@chakra-ui/react'

import dynamic from 'next/dynamic'
const DrawerMenu = dynamic(() => import('components/drawerMenu/DrawerMenu'))

import { useShoping } from 'context/context'
import useCart from 'hooks/useCart'
import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import  { useRouter } from 'next/router'
import { enabledSelectorCategory } from 'utils/helper'

const RightHeaderComponent = () => {

  const { stateProducts } = useShoping();
  const router = useRouter();
  const {getNumberOfItems} = useCart()
  const { onOpenMenu, onOpenCart }= useShoping()

  return (
    <Flex align="center" mr={["1rem", "0rem"]}>
      {stateProducts &&
        enabledSelectorCategory(stateProducts.products) &&
        !router.asPath.startsWith("/Detail") && (
          <Box display={["flex", "flex", "none", "none"]}>
            <IconButton
              icon={<HamburgerIcon boxSize={"2rem"} />}
              mr={2}
              background={"primary.400"}
              color={"whiteAlpha.900"}
              aria-label={""}
              onClick={onOpenMenu}
              _active={{ background: "none" }}
              _hover={{ background: "none" }}
              _focusVisible={{ boxShadow: "none" }}
            />
            {/* Acá está Drawer Menú */}
            <DrawerMenu />
          </Box>
        )}
      <Icon
        as={FiShoppingCart}
        h={["2rem", "2.5rem"]}
        w={["2rem", "2.5rem"]}
        color={"whiteAlpha.900"}
        cursor={"pointer"}
        onClick={onOpenCart}
      />
      <Text
        ml={["0.3rem", "0.5rem"]}
        color={"whiteAlpha.900"}
        fontWeight={"bold"}
        fontSize={"xl"}
      >
        {getNumberOfItems()}
      </Text>
    </Flex>
  );
}

export default RightHeaderComponent
