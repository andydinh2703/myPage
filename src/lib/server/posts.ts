// ===================================
// Storage utilities
// ===================================

import { readFile, writeFile, readdir } from 'fs/promises';
import { join } from 'path';

// locations of storage and the source to pull from
const DATA_FILE = join(process.cwd(), 'src/data/posts.json');
const POSTS_DIR = join(process.cwd(), 'src/posts');

// Post metadata (no content - that stays in markdown)
export interface PostMeta {
  slug: string;
  title: string;
  shortdes: string;
  date: string;
  tags: string[];
  imageUrl: string;
}

// Parse frontmatter only (ignore content)
function parseFrontmatter(markdown: string): Omit<PostMeta, 'slug'> {
    const match = markdown.match(/^---\n([\s\S]*?)\n---/);
    if (!match) throw new Error('Invalid frontmatter');
    const frontmatter = match[1];

    const meta: Record<string, any> = {};
    let currentKey = '';
    const arrayItems: string[] = [];

    for (const line of frontmatter.split('\n')) {
        if (line.startsWith('  - ')) {
        arrayItems.push(line.replace('  - ', '').trim());
        } else if (line.includes(':')) {
        if (arrayItems.length && currentKey) {
            meta[currentKey] = [...arrayItems];
            arrayItems.length = 0;
        }
        const [key, ...rest] = line.split(':');
        const value = rest.join(':').trim();
        currentKey = key.trim();
        if (value) meta[currentKey] = value.replace(/^["']|["']$/g, '');
        }
    }
    if (arrayItems.length && currentKey) {
        meta[currentKey] = arrayItems;
    }

    return meta as Omit<PostMeta, 'slug'>;
}

// Sync markdown frontmatter to JSON
export async function syncPosts(): Promise<PostMeta[]> {
  const files = await readdir(POSTS_DIR);
  const posts: PostMeta[] = [];

  for (const file of files.filter(f => f.endsWith('.md'))) {
    const markdown = await readFile(join(POSTS_DIR, file), 'utf-8');
    const slug = file.replace('.md', '');
    const meta = parseFrontmatter(markdown);
    posts.push({ slug, ...meta });
  }

  // sort posts
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  await writeFile(DATA_FILE, JSON.stringify({ posts }, null, 2));
  return posts;
}

// Get all posts from JSON
export async function getPosts(): Promise<PostMeta[]> {
  const data = await readFile(DATA_FILE, 'utf-8');
  const posts: PostMeta[] = JSON.parse(data).posts;
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single post metadata
export async function getPost(slug: string): Promise<PostMeta | null> {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug) || null;
}

