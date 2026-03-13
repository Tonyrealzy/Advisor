import withPWA from "next-pwa";

const nextConfig = {
  turbopack: {},
  // your Next.js config
};

export default withPWA({
  dest: "public",
  // other PWA options
})(nextConfig);

// const nextConfig: NextConfig = {
//   turbopack: {},
//   /* config options here */
// };

// export default withPWA({
//   ...nextConfig,
//   dest: "public",
//   // other PWA options
// });

// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   /* config options here */
// };

// export default nextConfig;
