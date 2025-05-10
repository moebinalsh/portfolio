/** @type {import("next").NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/portfolio",
  assetPrefix: "/portfolio",
  images: {
    unoptimized: true, // Necessary for static export to work correctly with GitHub Pages
  },
};

export default nextConfig;

