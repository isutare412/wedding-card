<script lang="ts">
	import { PUBLIC_CDN_BASE } from '$env/static/public';

	const flowerImages = [
		{
			src: `${PUBLIC_CDN_BASE}/miscs/flower-1.png`,
		},
		{
			src: `${PUBLIC_CDN_BASE}/miscs/flower-2.png`,
		},
		{
			src: `${PUBLIC_CDN_BASE}/miscs/flower-3.png`,
		},
		{
			src: `${PUBLIC_CDN_BASE}/miscs/flower-4.png`,
		},
		{
			src: `${PUBLIC_CDN_BASE}/miscs/flower-5.png`,
		},
	];
</script>

<div class="flex justify-between">
	{#each flowerImages as image}
		<img alt="A flower" src={image.src} class="inline-block h-24" />
	{/each}
</div>
