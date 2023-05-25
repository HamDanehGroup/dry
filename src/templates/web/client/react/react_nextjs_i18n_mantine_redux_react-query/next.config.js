/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    SERVER_API_URL_V1: "http://localhost:1337/api",
  },
  i18n: {
    locales: ["en", "fa"],
    defaultLocale: "fa",
    localeDetection: false,
  },
};

module.exports = nextConfig;
