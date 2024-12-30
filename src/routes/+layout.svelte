<script lang="ts">
	import ToastContainer from '$lib/components/ToastContainer.svelte';
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-3xl bg-white">
	{@render children()}
</main>
<ToastContainer />
