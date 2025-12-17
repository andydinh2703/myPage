// ================
// Single post endpoint
// ================


import { json, error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { getPost } from '$lib/server/posts';

// GET /api/posts/[slug] - Returns single post metadata
export const GET: RequestHandler = async ({ params }) => {
    const post = await getPost(params.slug);
    
    if (!post) {
      throw error(404, { message: 'Post not found' });
    }
    
    return json(post);
  };