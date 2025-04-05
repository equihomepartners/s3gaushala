import { Box, Image } from '@chakra-ui/react'
import NextImage from 'next/image'

const shimmer = (w, h) => `
<svg width="${w}" height="${h}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <defs>
    <linearGradient id="g">
      <stop stop-color="#f6f7f8" offset="0%" />
      <stop stop-color="#edeef1" offset="20%" />
      <stop stop-color="#f6f7f8" offset="40%" />
      <stop stop-color="#f6f7f8" offset="100%" />
    </linearGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="#f6f7f8" />
  <rect id="r" width="${w}" height="${h}" fill="url(#g)" />
  <animate xlink:href="#r" attributeName="x" from="-${w}" to="${w}" dur="1s" repeatCount="indefinite"  />
</svg>`;

const toBase64 = (str) =>
  typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);

const OptimizedImage = ({ src, alt, ...props }) => {
  const isProduction = process.env.NODE_ENV === 'production'
  const imageSrc = isProduction ? src : `/images/${src}`

  return (
    <Box position="relative" overflow="hidden" {...props}>
      {isProduction ? (
        <Image
          src={imageSrc}
          alt={alt}
          width="100%"
          height="100%"
          objectFit="cover"
          loading="lazy"
        />
      ) : (
        <NextImage
          src={imageSrc}
          alt={alt}
          fill
          style={{ objectFit: 'cover' }}
          loading="lazy"
        />
      )}
    </Box>
  )
}

export default OptimizedImage