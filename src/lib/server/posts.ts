// ===================================
// Storage utilities
// ===================================

import postsData from '../../data/posts.json';

// Post metadata (no content - that stays in markdown)
export interface PostMeta {
  slug: string;
  title: string;
  shortdes: string;
  date: string;
  tags: string[];
  imageUrl: string;
}

// Get all posts from JSON (imported at build time)
export async function getPosts(): Promise<PostMeta[]> {
  const posts: PostMeta[] = postsData.posts;
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// Get single post metadata
export async function getPost(slug: string): Promise<PostMeta | null> {
  const posts = await getPosts();
  return posts.find(p => p.slug === slug) || null;
}

