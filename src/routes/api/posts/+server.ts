// ==================
// REST API endpoint
// ==================

import { json } from '@sveltejs/kit';
import type { RequestHandler } from '@sveltejs/kit';    
import { getPosts, syncPosts } from '$lib/server/posts';

// GET /api/posts - Returns all posts metadata
export const GET: RequestHandler = async() => {
    const posts = await getPosts();
    return json({posts})
};

// POST /api/posts - Sync from markdown files
export const POST: RequestHandler = async() => {
    const posts = await syncPosts();
    return json({posts, message: 'Posts synced from markdown files.'
    }, {status: 201});
};