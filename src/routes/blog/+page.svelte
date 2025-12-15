<script lang="ts">
    import BlogCard from '$lib/components/BlogCard.svelte';

    // get data from server side
    let { data } = $props();

</script>

<div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-8">Blog</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {#each data.posts as post}
            <a href="/blog/{post.slug}">
                <BlogCard
                    title={post.title}
                    shortdes={post.shortdes}
                    date={post.date}
                    tags={post.tags}
                    imageUrl={post.imageUrl}
                    slug={post.slug}
                />
            </a>
        {/each}
    </div>

</div>