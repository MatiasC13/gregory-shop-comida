import React from 'react'
import { Container, Image} from "@chakra-ui/react";
import { showBannerType } from 'utils/ownerData';

const Banner = () => {
  return (
    <Container
      maxWidth="container.lg"
      mt={["2rem", "3rem"]}
      paddingInlineStart={["0rem"]}
      paddingInlineEnd={["0rem"]}
    >
      <Image
        src={showBannerType}
        alt="banner"
        objectFit="cover"
        maxHeight={"sm"}
        width={"100%"}
      />
      {/* <video
        controls
        autoPlay
        loop
        muted
        width={"100%"}
        controlsList="nodownload"
      >
        <source
          src="logo&banner/comida/banner.mp4"
          // type="video/mp4"
        />
        Tu navegador no es compatible con el video
      </video> */}
    </Container>
  );
}

export default Banner
