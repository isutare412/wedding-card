<script lang="ts">
	const { image }: { image: string } = $props();
</script>

<div class="relative">
	<div class="z-10">
		<div class="h-24 w-full bg-white"></div>
		<div class="absolute h-36 w-full bg-gradient-to-b from-white to-white/0"></div>
	</div>
	<img alt="A bride and a groom" src={image} class="w-full" />
</div>
