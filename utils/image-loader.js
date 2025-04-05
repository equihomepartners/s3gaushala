export const imageLoader = ({ src }) => {
  // If the source is an absolute URL, return it as is
  if (src.startsWith('http')) {
    return src
  }
  
  // For local images, ensure they start with /images/
  if (!src.startsWith('/images/') && !src.startsWith('/')) {
    return `/images/${src}`
  }
  
  return src
}

export const getImagePath = (src) => {
  if (src.startsWith('http')) {
    return src
  }
  
  return src.startsWith('/') ? src : `/images/${src}`
} 