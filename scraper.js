const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs').promises;
const path = require('path');

const BASE_URL = 'https://gaushalausa.org';

const headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
    'Accept-Language': 'en-US,en;q=0.5',
    'Connection': 'keep-alive',
    'Upgrade-Insecure-Requests': '1',
    'Cache-Control': 'max-age=0'
};

async function scrapePage(url) {
    try {
        const response = await axios.get(url, { headers });
        const $ = cheerio.load(response.data);
        
        // Get all content
        const content = {
            title: $('title').text().trim(),
            description: $('meta[name="description"]').attr('content'),
            navigation: [],
            mainContent: {
                hero: {
                    title: $('h1').first().text().trim(),
                    subtitle: $('h2').first().text().trim()
                },
                sections: []
            },
            images: [],
            text: []
        };

        // Get navigation
        $('nav a, .menu-item a').each((i, el) => {
            const text = $(el).text().trim();
            const href = $(el).attr('href');
            if (text && href) {
                content.navigation.push({
                    text,
                    href: href.startsWith('http') ? href : `${BASE_URL}${href}`
                });
            }
        });

        // Get all images
        $('img').each((i, el) => {
            const src = $(el).attr('src');
            if (src && !src.includes('data:image')) {
                content.images.push({
                    src: src.startsWith('http') ? src : `${BASE_URL}${src}`,
                    alt: $(el).attr('alt') || ''
                });
            }
        });

        // Get all text content
        $('p, h1, h2, h3, h4, h5, h6').each((i, el) => {
            const text = $(el).text().trim();
            if (text && !text.includes('Home – Our Blog')) {
                content.text.push({
                    type: el.name,
                    content: text
                });
            }
        });

        return content;
    } catch (error) {
        console.error(`Error scraping ${url}:`, error.message);
        return null;
    }
}

async function scrapeWebsite() {
    try {
        // Create content directory if it doesn't exist
        await fs.mkdir('content', { recursive: true });
        
        // Define main pages to scrape
        const mainPages = [
            '/',
            '/about-us',
            '/events',
            '/gallery',
            '/blog',
            '/volunteer',
            '/contact-us',
            '/donate',
            '/shop'
        ];

        // Scrape each main page
        for (const page of mainPages) {
            const url = `${BASE_URL}${page}`;
            console.log(`Scraping ${url}...`);
            const content = await scrapePage(url);
            if (content) {
                const fileName = page === '/' ? 'main' : page.replace('/', '');
                await fs.writeFile(
                    path.join('content', `${fileName}.json`),
                    JSON.stringify(content, null, 2)
                );
                console.log(`Saved content for ${fileName}`);
            }
        }

        console.log('Website content scraped successfully!');
    } catch (error) {
        console.error('Error scraping website:', error.message);
    }
}

scrapeWebsite(); 