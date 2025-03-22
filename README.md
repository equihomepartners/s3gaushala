# S3 Gaushala Website Project

## Project Overview
A Next.js website for S3 Gaushala, a non-profit cow sanctuary focused on spiritual development and cow protection. The website uses Chakra UI for styling and Framer Motion for animations.

## Current Status

### Completed Features
1. **Theme Setup**
   - ChakraProvider implementation
   - Custom theme with Inter font
   - Purple and white color scheme
   - Responsive design system

2. **Components**
   - Navbar with responsive design
   - About page with sections for:
     - Foundation history
     - Mission statement
     - Principles (Dharma, Adhibhauthika, Adhyatmika)
     - Achievement methods
     - Current projects
   - Blog section with scrolling feature

3. **Content Structure**
   - Main content in JSON format
   - Dynamic content loading system
   - Spiritual and educational focus

### Pending Tasks

1. **Image Assets**
   Need to fix 404 errors for:
   - /images/logo.png
   - /images/hero-cow.jpg
   - /images/hay-bales.jpg
   - /images/pellet-feed.jpg
   - /images/volunteer-bg.jpg
   - /images/blog-gauseva.jpg
   - /images/blog-worship.jpg
   - /images/blog-happiness.jpg
   - /images/blog-daily.jpg

2. **Bug Fixes**
   - Fix TypeError in content.map() function
   - Resolve fs.promises.readdirSync error in content directory
   - Address motion() deprecation warning

3. **Content Pages to Complete**
   - Events page
   - Gallery page
   - Contact page
   - Volunteer page
   - Donation system integration

## Project Structure

```
s3-gaushala/
├── components/
│   ├── Navbar.js       # Main navigation component
├── pages/
│   ├── _app.js         # App wrapper with ChakraProvider
│   ├── index.js        # Homepage
│   ├── about.js        # About page
│   └── [slug].js       # Dynamic page routing
├── public/
│   └── images/         # Image assets (needs population)
├── content/
│   └── main.json       # Main content data
└── utils/
    └── content.js      # Content loading utilities
```

## Tech Stack
- Next.js 14.2.25
- Chakra UI
- Framer Motion
- React Icons

## Key Features to Implement

1. **Content Management**
   - Complete content loading system
   - Add error handling for missing content

2. **Image Management**
   - Set up proper image optimization
   - Implement lazy loading
   - Add fallback images

3. **Functionality**
   - Add contact form
   - Implement donation system
   - Create volunteer registration
   - Set up event calendar

4. **Performance**
   - Optimize image loading
   - Implement proper SEO
   - Add loading states

## Design Guidelines

1. **Colors**
   - Primary: Purple shades
   - Secondary: White
   - Accent: Orange for CTAs

2. **Typography**
   - Font: Inter
   - Headings: Purple gradient
   - Body: Gray.600

3. **Components**
   - Rounded corners (xl)
   - Box shadows
   - Hover animations
   - Responsive layouts

## Content Guidelines

1. **Focus Areas**
   - Cow protection
   - Spiritual development
   - Community engagement
   - Volunteer opportunities

2. **Tone**
   - Spiritual but accessible
   - Educational
   - Community-focused
   - Action-oriented

## Development Notes

1. **Current Issues**
   - Content mapping error in index.js
   - File system errors in content loading
   - Missing image assets
   - Deprecated motion usage

2. **Priority Fixes**
   - Resolve content loading system
   - Add missing images
   - Update motion implementation
   - Complete responsive testing

## Next Steps

1. **Immediate**
   - Add all missing images
   - Fix content loading system
   - Complete basic pages

2. **Short Term**
   - Implement contact form
   - Add volunteer registration
   - Create event system

3. **Long Term**
   - Add donation integration
   - Implement blog system
   - Create admin dashboard

## Deployment
- Currently running on localhost:3000
- Needs production deployment setup
- Requires environment configuration

## Additional Notes
- Maintain spiritual focus
- Ensure accessibility
- Keep mobile-first approach
- Regular content updates needed

## Planned Improvements

1. **Hero Section Enhancement**
   - Implement full-screen video background with placeholder image
   - Add clean, modern typography for header and subheader
   - Improve CTA button styling and animations
   - Add subtle overlay gradient for better text readability

2. **Image Optimization**
   - Create and optimize all missing images:
     - /images/logo.png
     - /images/hero-cow.jpg
     - /images/hay-bales.jpg
     - /images/pellet-feed.jpg
     - /images/volunteer-bg.jpg
     - /images/blog-gauseva.jpg
     - /images/blog-worship.jpg
     - /images/blog-happiness.jpg
     - /images/blog-daily.jpg
   - Implement Next.js Image component for better performance
   - Add proper loading states and blur placeholders

3. **Performance Optimizations**
   - Fix motion deprecation warnings by updating to latest Framer Motion syntax
   - Optimize image loading with proper sizing and formats
   - Implement proper code splitting
   - Add loading states for dynamic content

4. **Navigation Improvements**
   - Add active state for current page
   - Improve mobile menu transitions
   - Add dropdown for About Us section
   - Implement smooth scroll behavior

5. **Content Structure**
   - Organize content better in JSON files
   - Add proper meta tags for SEO
   - Improve content hierarchy
   - Add proper error handling for content loading

6. **UI/UX Enhancements**
   - Implement consistent spacing system
   - Add micro-interactions and hover effects
   - Improve mobile responsiveness
   - Add proper focus states for accessibility

7. **Technical Debt**
   - Fix fs.promises.readdirSync error in content directory
   - Update deprecated motion() usage
   - Implement proper error boundaries
   - Add proper TypeScript types

## Implementation Order
1. Fix immediate errors (motion deprecation, fs error)
2. Implement hero section improvements
3. Add missing images and optimize
4. Enhance navigation and UI
5. Improve content structure
6. Add performance optimizations
7. Implement remaining features 

## Development

### Prerequisites
- Node.js 18 or higher
- npm or yarn
- FFmpeg (for video processing)

### Getting Started

1. Clone the repository
```bash
git clone https://github.com/yourusername/s3-gaushala.git
cd s3-gaushala
```

2. Install dependencies
```bash
npm install
```

3. Run the development server
```bash
npm run dev
```

The site will be available at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
s3-gaushala/
├── components/     # React components
├── pages/         # Next.js pages
├── public/        # Static assets
│   ├── images/    # Image assets
│   └── videos/    # Video assets
├── styles/        # CSS styles
└── utils/         # Utility functions
```

## Placeholder Assets

The project includes placeholder assets for development:

### Images
- `public/images/logo.png` - S3 Gaushala logo (200x200)
- `public/images/hero-cow.jpg` - Hero section background (1920x1080)
- `public/images/hay-bales.jpg` - Hay bales image (800x600)
- `public/images/pellet-feed.jpg` - Pellet feed image (800x600)
- `public/images/volunteer-bg.jpg` - Volunteer section background (800x600)
- `public/images/blog-*.jpg` - Blog post images (800x600)

### Video
- `public/videos/hero-background.mp4` - Hero section background video (1920x1080)

To replace placeholder assets:

1. Ensure new images match the specified dimensions
2. Replace files in the respective directories
3. Update image references in components if filenames change

## Scripts

### Generate Placeholder Assets

To regenerate placeholder assets:

```bash
# Generate placeholder images
node scripts/generate-placeholders.js

# Generate placeholder video
node scripts/generate-placeholder-video.js
```

## Contributing

1. Create a feature branch
2. Make your changes
3. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 