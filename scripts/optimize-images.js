const imagemin = require('imagemin');
const mozjpeg = require('imagemin-mozjpeg');
const pngquant = require('imagemin-pngquant');
const webp = require('imagemin-webp');
const { promises: fs } = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(process.cwd(), 'public/images');
const OPTIMIZED_DIR = path.join(process.cwd(), 'public/images/optimized');

async function optimizeImages() {
  try {
    // Create optimized directory if it doesn't exist
    await fs.mkdir(OPTIMIZED_DIR, { recursive: true });

    console.log('Optimizing images...');

    // Optimize JPG/PNG images
    await imagemin([`${IMAGES_DIR}/*.{jpg,jpeg,png}`], {
      destination: OPTIMIZED_DIR,
      plugins: [
        mozjpeg({ quality: 80 }),
        pngquant({ quality: [0.6, 0.8] })
      ]
    });

    // Convert to WebP
    await imagemin([`${IMAGES_DIR}/*.{jpg,jpeg,png}`], {
      destination: OPTIMIZED_DIR,
      plugins: [
        webp({ quality: 75 })
      ]
    });

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing images:', error);
    process.exit(1);
  }
}

optimizeImages(); 