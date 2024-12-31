<script lang="ts">
	import ToastContainer from '$lib/components/ToastContainer.svelte';
	import '@fontsource/arvo/400.css';
	import '@fontsource/arvo/700.css';
	import '@fontsource/nanum-myeongjo/400.css';
	import '@fontsource/nanum-myeongjo/700.css';
	import '@fontsource/nanum-myeongjo/800.css';
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-3xl bg-white">
	{@render children()}
</main>
<ToastContainer />
