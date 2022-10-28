import { Flex, IconButton,Image } from '@chakra-ui/react'
import MenuComponent from 'components/menu/MenuCatDesktop'
import { useShoping } from 'context/context'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { enabledSelectorCategory } from 'utils/helper'
import { showLogoType } from 'utils/ownerData'


const LeftHeaderComponent = () => {

  const [menu, setMenu] = useState(false);
  const { setproductsState, stateProducts} = useShoping()
  const router = useRouter();
  const logoFunction = () => {
  console.log("hola");
        console.log("MMMM", router.asPath);

    if (router.asPath === "/") {
      setproductsState((prev) => ({ ...prev, filteredProducts: prev.products }));
    } else {
      router.push("/");
    }
  }

  // useEffect(() => {
  //  if(!router.asPath.startsWith("/Detail")){
  //   setMenu(true);
  //  }
    // "/Detail/50".startsWith("/Detail");
   
  // }, []);

  return (
    <Flex align={"center"} direction={["column", "row"]}>
      <IconButton
        aria-label={""}
        borderRadius={"full"}
        mr={["0", "2rem"]}
        boxSize={["6rem", "7rem"]}
        onClick={logoFunction}
        _focusVisible={{ boxShadow: "none" }}
      >
        <Image src={showLogoType} alt="logo" />
      </IconButton>
      {stateProducts &&
        enabledSelectorCategory(stateProducts.products) &&
        !router.asPath.startsWith("/Detail") && <MenuComponent />}
    </Flex>
  );
}

export default LeftHeaderComponent
