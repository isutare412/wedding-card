<script lang="ts">
	import ToastContainer from '$lib/components/ToastContainer.svelte';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-3xl bg-white">
	{@render children()}
</main>
<ToastContainer />
