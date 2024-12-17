<script lang="ts">
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import '../app.css';

	let { children } = $props();
</script>

<main class="mx-auto max-w-3xl">
	{@render children()}
</main>
