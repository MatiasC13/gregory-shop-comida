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
    GMAIL_USER: "gregory.notificaciones@gmail.com",

    // LOCAL_URL: "http://localhost:3000/",
    LOCAL_URL: "https://master.d3ue6qn3gssqvm.amplifyapp.com/",

    BUSINESS_NAME: "Viandas del Sur",
  },
};
