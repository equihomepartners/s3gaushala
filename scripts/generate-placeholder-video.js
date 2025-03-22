const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

// Create videos directory if it doesn't exist
const videoDir = path.join('public', 'videos');
if (!fs.existsSync(videoDir)) {
  fs.mkdirSync(videoDir, { recursive: true });
}

// FFmpeg command to create a 10-second gradient video using color overlay
const command = `ffmpeg -f lavfi -i color=c=0x4A90E2:s=1920x1080:d=10 -vf "drawbox=x=0:y=0:w=1920:h=1080:color=0x2ECC71@0.5:t=fill" -c:v libx264 -preset medium -crf 23 -pix_fmt yuv420p ${path.join(videoDir, 'hero-background.mp4')}`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error generating video: ${error}`);
    return;
  }
  console.log('Generated hero-background.mp4');
}); 