// scripts/sync-posts.ts
import { syncPosts } from '../src/lib/server/posts';

await syncPosts();

// printing console log
console.log('Posts synced');