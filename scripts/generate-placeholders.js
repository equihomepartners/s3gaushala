const { createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

const images = [
  { name: 'logo.png', width: 200, height: 200, text: 'S3 Gaushala Logo' },
  { name: 'hero-cow.jpg', width: 1920, height: 1080, text: 'Hero Background' },
  { name: 'hay-bales.jpg', width: 800, height: 600, text: 'Hay Bales' },
  { name: 'pellet-feed.jpg', width: 800, height: 600, text: 'Pellet Feed' },
  { name: 'volunteer-bg.jpg', width: 800, height: 600, text: 'Volunteer Background' },
  { name: 'blog-gauseva.jpg', width: 800, height: 600, text: 'Gau Seva' },
  { name: 'blog-worship.jpg', width: 800, height: 600, text: 'Cow Worship' },
  { name: 'blog-happiness.jpg', width: 800, height: 600, text: 'Happiness' },
  { name: 'blog-daily.jpg', width: 800, height: 600, text: 'Daily Life' }
];

// Create directories if they don't exist
const dirs = ['public/images', 'public/videos'];
dirs.forEach(dir => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
});

// Generate placeholder images
images.forEach(image => {
  const canvas = createCanvas(image.width, image.height);
  const ctx = canvas.getContext('2d');

  // Fill background
  ctx.fillStyle = '#f0f0f0';
  ctx.fillRect(0, 0, image.width, image.height);

  // Add text
  ctx.fillStyle = '#666666';
  ctx.font = '24px Arial';
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillText(image.text, image.width / 2, image.height / 2);

  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join('public/images', image.name), buffer);
  console.log(`Generated ${image.name}`);
}); 