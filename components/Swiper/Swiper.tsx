
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/free-mode";
import ItemSwiper from "../item_swiper/ItemSwiper";
import { useEffect, useState } from "react";

const ItemSlider = ({ products }) => {
  const [slider, setSlider] = useState([]);

  useEffect(() => {
    setSlider(products);
  }, []);

  return (
    <Swiper
      loop={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: true,
      }}
      freeMode={true}
      modules={[Autoplay, FreeMode]}
      breakpoints={{
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        480: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 15,
        },
      }}
      className="mySwiper"
    >
        {slider.map((product, i) => (
          <SwiperSlide key={i}>
            <ItemSwiper product={product} />
          </SwiperSlide>
        ))}
        </Swiper>
  );
};

export default ItemSlider;
