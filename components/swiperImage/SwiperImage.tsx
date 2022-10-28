import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/bundle";
import { Autoplay } from "swiper";
import { rgbDataURL } from "utils/helper";
import { customColor } from "utils/ownerData";

interface props {
  title: string;
  image: string[];
}

const SwiperImage = ({ title, image }: props) => {
  return (
    <Swiper
      loop={true}
      freeMode={true}
      className="mySwiper"
      modules={image.length > 1 ? [Autoplay] : []}
      autoplay={
        image.length > 1
          ? {
              delay: 2500,
              disableOnInteraction: true,
            }
          : {}
      }
    >
      {image &&
        image.map((i, key) => (
          <SwiperSlide key={key}>
            <Image
              placeholder="blur"
              blurDataURL={rgbDataURL(customColor)}
              // style={style}
              src={i}
              alt={title}
              // src={product.image}

              width={128}
              height={128}
              objectFit={"cover"}
              layout={"responsive"}
              // onClick={() => setSelectedProduct(product)}
            />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default SwiperImage;
