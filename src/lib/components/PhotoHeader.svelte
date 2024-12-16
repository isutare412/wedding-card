<script lang="ts">
	const {
		dateNums,
		dayOfWeek,
		image
	}: { dateNums: string[][]; dayOfWeek: string[]; image: string } = $props();
</script>

<div class="relative">
	<div class="z-10">
		<div class="h-48 w-full bg-[#c6d0d2]"></div>
		<div class="absolute h-28 w-full bg-gradient-to-b from-[#c6d0d2] to-white/0"></div>
	</div>
	<span class="font-sans text-3xl md:text-4xl">
		<div class="absolute top-24 flex w-full flex-col content-center items-center justify-center">
			<p class="space-x-8 font-bold">
				{#each dateNums as num}
					<span class="space-x-4">
						{#each num as digit}
							<span class="inline-block">{digit}</span>
						{/each}
					</span>
				{/each}
			</p>
			<p class="mt-12 space-x-3 text-2xl font-thin md:text-3xl">
				{#each dayOfWeek as c}
					<span class="inline-block">{c}</span>
				{/each}
			</p>
		</div>
	</span>
	<img alt="A bride and a groom" src={image} class="w-full" />
</div>
