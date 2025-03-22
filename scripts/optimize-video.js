const ffmpeg = require('fluent-ffmpeg');
const path = require('path');

const inputPath = path.join(process.cwd(), 'public/videos/BGVideo4K.mp4');
const outputPath = path.join(process.cwd(), 'public/videos/BGVideo4K-optimized.mp4');

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
  })
  .run(); 