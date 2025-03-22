import imagemin from 'imagemin';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import webp from 'imagemin-webp';
import { promises as fs } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const IMAGES_DIR = join(dirname(__dirname), 'public/images');
const OPTIMIZED_DIR = join(dirname(__dirname), 'public/images/optimized');

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