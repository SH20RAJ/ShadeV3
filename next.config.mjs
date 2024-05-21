/** @type {import('next').NextConfig} */
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
  dest: "public",
});


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  reactStrictMode: true,
  beforeFiles: [{
    source: ':path*',
    has: [{ type: 'host',  value: 'music.shade.cool' }],
    destination: '/music/:path*',
  }]
};

export default withPWA(nextConfig);
// export default nextConfig;