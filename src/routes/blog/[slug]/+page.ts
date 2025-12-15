import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
    try {
        // Dynamically import the markdown file based on the slug
        const post = await import(`../../../posts/${params.slug}.md`);
        
        return {
            content: post.default,      // The rendered Svelte component
            metadata: post.metadata     // The frontmatter data
        };
    } catch (e) {
        // If the file doesn't exist, show 404
        throw error(404, `Post not found: ${params.slug}`);
    }
};