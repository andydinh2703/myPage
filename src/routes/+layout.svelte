<script lang="ts">
	import favicon from '$lib/assets/favicon.svg';
	import '../style.css';
	import NAV from '$lib/components/Nav.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
</svelte:head>

<NAV />

<main >
	{@render children()}
</main>





