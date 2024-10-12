/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'e1.pxfuel.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kmikze.com',
      },
      {
        protocol: 'https',
        hostname: 'www.kmikze.com', // Added for the new image
        pathname: '/5555-large_default/**', // Adjust the pathname as needed
      },
    ],
  },
}

export default nextConfig;
