import path from 'path';
import { promises as fs } from 'fs';

export default async function handler(req, res) {
  const { slug = 'main' } = req.query;

  try {
    const filePath = path.join(process.cwd(), 'content', `${slug}.json`);
    const fileContents = await fs.readFile(filePath, 'utf8');
    const content = JSON.parse(fileContents);
    res.status(200).json(content);
  } catch (error) {
    res.status(404).json({ error: `Content not found for ${slug}` });
  }
} 