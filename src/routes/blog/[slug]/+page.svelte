<script lang="ts">
    let { data } = $props();
</script>

<article class="max-w-3xl mx-auto px-4 py-24">
    <!-- Header with metadata -->
    <h1 class="text-4xl font-bold mb-4">{data.metadata.title}</h1>
    <p class="text-gray-500 mb-8">{new Date(data.metadata.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' })}</p>
    
    <!-- Render the markdown content as a Svelte component -->
    <div class="prose">
        <svelte:component this={data.content} />
    </div>
</article>