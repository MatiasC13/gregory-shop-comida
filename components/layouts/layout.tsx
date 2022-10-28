import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import { useShoping } from "context/context";
import Head from "next/head";
const Footer = dynamic(
  () => import("components/FooterComponent/footerComponent")
);
import Header from "../header/Header";
const DrawerComponent = dynamic(()=>import ("components/drawerCart/drawerCart"));
const ButtonTop = dynamic(()=>import("components/buttonTop/ButtonTop"));
const LeftHeaderComponent = dynamic(() => import("components/header/LeftHeaderComponent"));
const RightHeaderComponent = dynamic(
  () => import("components/header/RightHeaderComponent")
);




interface Props {
  children: React.ReactNode;
}

function Layout({ children }: Props): JSX.Element {
  const [scale, setScale] = useState(0);
  const {stateProducts} = useShoping()
  // const error = true;
  // if(error){

  //   throw new Error("Error provocado en el layout")
  // }



  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 300) {
        setScale(0);
      } else {
        setScale(1);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scale]);


  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no"
        />
        <meta name="description" content="Description" />
        <meta name="keywords" content="Keywords" />

        <link
          rel="manifest"
          crossOrigin="use-credentials"
          href="/manifest.json"
        />
      </Head>
      <Header>
        <LeftHeaderComponent />{" "}
        {Boolean(stateProducts.products.length) && <RightHeaderComponent />}
      </Header>
      <DrawerComponent />
      <main>
        {children}
      </main>
      <ButtonTop scale={scale} />
      <Footer />
    </>
  );
}

export default Layout;
