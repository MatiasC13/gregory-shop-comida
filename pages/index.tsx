import { GetStaticProps } from "next";
import { useEffect } from "react";
import dynamic from "next/dynamic";
const Animation = dynamic(() => import("components/animation/Animation"));
const List = dynamic(() => import("components/List/List"));
import Product from "../interfaces/Product";
const Swiper = dynamic(() => import("components/Swiper/Swiper"));
const OpenCartSticky = dynamic(
  () => import("components/open_cart/OpenCartSticky")
);
const RegisterForm = dynamic(() => import("components/form/RegisterForm"));
const Banner = dynamic(() => import("components/banner/Banner"));
const Search = dynamic(() => import("components/searchComponent/search"));
import { useShoping } from "../context/context";
import CustomContainer from "components/customContainer/CustomContainer";
import Head from "next/head";
import { showBusinesName, showFavIcon } from "utils/ownerData";
import getProducts from "product/storeservice";

interface Props {
  initialProducts: Product[];
}

const IndexRoute = ({ initialProducts }: Props): JSX.Element => {
  const { stateProducts, setproductsState, cart, slider, setSlider } =
    useShoping();

  useEffect(() => {
    setproductsState({
      products: initialProducts,
      filteredProducts: initialProducts,
      boostProducts: initialProducts.filter((p) => p.boost),
    });
  }, []);

  useEffect(() => {
    stateProducts.filteredProducts.length === stateProducts.products.length
      ? setSlider(true)
      : setSlider(false);
  }, [stateProducts.filteredProducts.length]);

  return (
    <>
      <Head>
        <link rel="shortcut icon" href={showFavIcon} />
        <title>{showBusinesName}</title>
      </Head>
      <>
        {slider && (
          <>
            {stateProducts.boostProducts.length >= 3 ? (
              <Swiper products={stateProducts.boostProducts} />
            ) : (
              <Banner />
            )}
          </>
        )}

        <RegisterForm />
        {stateProducts.products.length > 0 && (
          <>
            <CustomContainer>
              <Search />
            </CustomContainer>
            <List products={stateProducts.filteredProducts} />
          </>
        )}

        {Boolean(cart.length) && <OpenCartSticky />}

        <Animation />
      </>
    </>
  );
};

export default IndexRoute;

export const getStaticProps: GetStaticProps = async () => {
  // const initialProducts = await apiExcel(process.env.URL_EXCEL);
  const initialProducts = await getProducts();
  return {
    revalidate: 30,

    props: {
      initialProducts,
    },
  };
};
