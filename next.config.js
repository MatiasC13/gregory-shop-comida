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

    LOCAL_URL: "http://localhost:3000/",
    // LOCAL_URL: "https://b717-2800-a4-77a-1f00-c97d-2069-617d-a20c.sa.ngrok.io/",

    BUSINESS_NAME: "Viandas del Sur"
  },
};
