/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
/* @type {import('next').NextConfig}  */

// const withPWA = require("next-pwa");
// const runtimeCaching = require("next-pwa/cache");
// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
module.exports = {
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  experimental: {
    urlImports: ["https://cdn.skypack.dev"],
  },
  // pwa: {
  //   dest: "public",
  //   // disable: process.env.NODE_ENV === "development",
  //   runtimeCaching,
  // },
  images: {
    domains: ["firebasestorage.googleapis.com"],
  },

  env: {
    ACCESS_TOKEN: process.env.ACCESS_TOKEN,

    ACCES_KEY_ID: process.env.ACCES_KEY_ID,

    SECRET_ACCESS_KEY: process.env.SECRET_ACCESS_KEY,

    GMAIL_PASS: process.env.GMAIL_PASS,

    GMAIL_USER: process.env.GMAIL_USER,

    // LOCAL_URL: "https://5706-185-198-50-34.eu.ngrok.io/",
    LOCAL_URL: process.env.LOCAL_URL,

    HOST: process.env.HOST,

    BUSINESS_NAME: "Viandas del Sur",
  },
};
