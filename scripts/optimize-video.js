import ffmpeg from 'fluent-ffmpeg';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const inputPath = join(dirname(__dirname), 'public/videos/BGVideo4K.mp4');
const outputPath = join(dirname(__dirname), 'public/videos/BGVideo4K-optimized.mp4');

console.log('Optimizing video...');

ffmpeg(inputPath)
  .outputOptions([
    '-vf scale=1920:-1', // Scale width to 1920px, maintain aspect ratio
    '-c:v libx264',      // Use H.264 codec
    '-crf 28',           // Constant Rate Factor (23-28 is a good balance)
    '-preset medium',     // Encoding speed preset
    '-movflags +faststart', // Enable fast start for web playback
    '-an'                // Remove audio
  ])
  .output(outputPath)
  .on('end', () => {
    console.log('Video optimization complete!');
  })
  .on('error', (err) => {
    console.error('Error:', err);
    process.exit(1);
  })
  .run(); 