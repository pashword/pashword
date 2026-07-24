/** @type {import('next').NextConfig} */
const withPWA = require("next-pwa");

module.exports = withPWA({
  pwa: {
    dest: "public",
    register: true,
  },
  output: "export",
  images: {
    unoptimized: true, // Important for static export
  },
  trailingSlash: true,
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: '/pashword/:path*',
      },
    ]
  },
});
