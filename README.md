# S3 Gaushala Website

A modern, responsive website for S3 Gaushala built with Next.js and Chakra UI.

## Features

- Responsive design optimized for all devices
- Dynamic content management
- Interactive hero section with video background
- Newsletter subscription system
- Donation and sponsorship integration
- Image gallery with lazy loading
- Event calendar and updates
- Contact form with validation

## Tech Stack

- Next.js - React framework for production
- Chakra UI - Component library for consistent design
- Framer Motion - Animations and transitions
- Netlify - Hosting and deployment

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone [repository-url]
cd s3-gaushala
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Environment Variables

Create a `.env.local` file in the root directory with the following variables:
```
NEXT_PUBLIC_SITE_URL=your-site-url
```

## Deployment

The website is configured for deployment on Netlify. The `netlify.toml` file includes all necessary build settings.

To deploy:
1. Connect your GitHub repository to Netlify
2. Configure build settings:
   - Build command: `npm run build`
   - Publish directory: `.next`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License.

## Contact

S3 Gaushala - gaushalausa@gmail.com 