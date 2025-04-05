/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // This is important for Netlify
    domains: ['s3gaushala.org'], // Add your domain if you're loading images from it
  },
  // Ensure trailing slashes are handled consistently
  trailingSlash: true,
}

module.exports = nextConfig 