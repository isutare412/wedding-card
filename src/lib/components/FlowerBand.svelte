<script lang="ts">
	const flowerImages = [
		{
			src: 'https://dmdi76qgv3i4f.cloudfront.net/miscs/flower-1.png'
		},
		{
			src: 'https://dmdi76qgv3i4f.cloudfront.net/miscs/flower-2.png'
		},
		{
			src: 'https://dmdi76qgv3i4f.cloudfront.net/miscs/flower-3.png'
		},
		{
			src: 'https://dmdi76qgv3i4f.cloudfront.net/miscs/flower-4.png'
		},
		{
			src: 'https://dmdi76qgv3i4f.cloudfront.net/miscs/flower-5.png'
		}
	];
</script>

<div class="flex justify-between">
	{#each flowerImages as image}
		<img alt="A flower" src={image.src} class="inline-block h-24" />
	{/each}
</div>
