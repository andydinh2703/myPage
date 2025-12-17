<script lang="ts">
	let isMenuOpen = $state(false);

	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
</script>

<nav class="bg-[#F5F1E8]/80 backdrop-blur-sm border-b border-gray-200 fixed top-0 left-0 right-0 z-50">
	<div class="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
		<!-- Logo -->
		<a href="/" class="text-xl font-bold text-gray-900" style="font-family: 'JetBrains Mono', monospace;">
			ANDY.
		</a>

		<!-- Desktop Navigation Links (hidden on mobile) -->
		<div class="hidden md:flex gap-8">
			<a href="/#projects" class="text-base text-gray-600 hover:text-[#D97946] transition-colors">Projects</a>
			<a href="/blog" class="text-base text-gray-600 hover:text-[#D97946] transition-colors">Blog</a>
		</div>

		<!-- Hamburger Menu Button (visible on mobile only) -->
		<button
			onclick={toggleMenu}
			class="md:hidden w-12 h-12 flex items-center justify-center text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#D97946] focus:ring-offset-2 rounded"
			aria-label="Toggle menu"
		>
			{#if isMenuOpen}
				<!-- X icon -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			{:else}
				<!-- Hamburger icon -->
				<svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
					<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
				</svg>
			{/if}
		</button>
	</div>

	<!-- Mobile Menu (shown when hamburger is clicked) -->
	{#if isMenuOpen}
		<div class="md:hidden bg-[#F5F1E8] border-t border-gray-200">
			<div class="px-6 py-4 space-y-4">
				<a
					href="/#projects"
					onclick={toggleMenu}
					class="block text-base text-gray-600 hover:text-[#D97946] transition-colors py-2"
				>
					Projects
				</a>
				<a
					href="/blog"
					onclick={toggleMenu}
					class="block text-base text-gray-600 hover:text-[#D97946] transition-colors py-2"
				>
					Blog
				</a>
			</div>
		</div>
	{/if}
</nav>