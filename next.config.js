/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  env: {
    GCMS_CONTENT_API: process.env.GCMS_CONTENT_API,
    GCMS_ASSET_API: process.env.GCMS_ASSET_API,
    GCMS_MGMT_API: process.env.GCMS_MGMT_API,
    GCMS_PROD_AUTH_TOKEN: process.env.GCMS_PROD_AUTH_TOKEN,
    GCMS_DEV_AUTH_TOKEN: process.env.GCMS_DEV_AUTH_TOKEN,
  },
};
