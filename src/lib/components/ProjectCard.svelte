<script lang="ts">
  export let title: string = '';
  export let description: string = '';
  export let imageUrl: string = '';
  export let techStack: string[] = [];
  export let projectUrl: string = '';
  export let date: string = '';
</script>


<!-- Card container -->
<div class = "bg-white rounded-2xl shadow-lg hove:shadow-2xl transition-shadow overflow-hidden">
    <!-- image placeholder -->
{#if imageUrl}
     <img src="{imageUrl}" alt={title} class = "w-full h-48 object-cover">

{:else}
    <div class="h-48 bg-gray-200 flex items-center justify-center">
        <svg class="w-16 h-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
    </div>

{/if}

    <div class="p-6">
        <!-- Date meta -->
         {#if date} 
            <p class= "text-sm text-gray-500 mb-2" style="font-family: 'JetBrains Mono', monospace;">
                {date}
            </p>
        {/if}

        <!-- Title -->
         <h3 class="text-xl font-bold text-gray-9000 mb-3">
            {title}
         </h3>

         <!-- Description -->
        <p class="text-base text-gray-600 leading-relaxed mb-4">
            {description}
        </p>
        
        <!-- Tech stack tags -->
        {#if techStack && techStack.length > 0}
        <div class = "flex flex-wrap gap-2 mb-4">
            {#each techStack as tech}
            <span class="px-3 py-1 bg-[#F5F1E8] text-gray-700 rounded-full text-sm" style="font-family: 'JetBrains Mono', monospace;">
                {tech}
            </span>
            {/each}
        </div>
        {/if}

        {#if projectUrl}
        <a 
            href={projectUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            class="text-[#D97946] font-semibold hover:underline inline-flex items-center gap-1"
        >
            View Project
            <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
        </a>
{/if}
    </div>



</div>

