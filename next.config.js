/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/governance-diagnostic",
        destination: "/pilot-fit-call",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
