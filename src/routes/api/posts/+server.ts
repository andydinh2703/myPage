// ==================
// REST API endpoint
// ==================

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';
import { getPosts } from '$lib/server/posts';

// GET /api/posts - Returns all posts metadata
export const GET: RequestHandler = async() => {
    const posts = await getPosts();
    return json({posts})
};