import path from 'path';
import { promises as fs } from 'fs';

export async function getPageContent(slug = 'main') {
  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    return JSON.parse(fileContents);
  } catch (error) {
    console.error('Error loading content:', error);
    return {
      title: 'S3 Gaushala',
      mainContent: {
        hero: {
          title: 'The Home of Desi Cows in America',
          subtitle: 'Preserving Sacred Traditions',
          description: 'A Cow Sanctuary dedicated to protecting and improving the lives of cows in our community and beyond'
        },
        sections: []
      }
    };
  }
}

export async function getAllSlugs() {
  try {
    const contentDir = path.join(process.cwd(), 'content');
    const files = await fs.readdir(contentDir);
    return files
      .filter(file => file.endsWith('.json'))
      .map(file => file.replace('.json', ''));
  } catch (error) {
    console.error('Error reading content directory:', error);
    return [];
  }
} 