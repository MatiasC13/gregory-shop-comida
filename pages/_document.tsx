import { Html, Head, Main, NextScript } from "next/document";
import { documentSetttings } from "utils/ownerData";

export default function Document() {
  return (
    <Html lang="es">
      <Head>
        <meta
          name="description"
          content={documentSetttings.metaDescription}
        />
        <meta
          name="keywords"
          content={documentSetttings.metaKeyWords}
        ></meta>
        <link
          rel="manifest"
          // crossOrigin="use-credentials"
          href={"manifest.json"}
        />
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
