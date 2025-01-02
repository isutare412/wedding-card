<script lang="ts">
	const {
		groom,
		groomFather,
		groomMother,
		bride,
		brideFather,
		brideMother
	}: {
		groom: string;
		groomFather: string;
		groomMother: string;
		bride: string;
		brideFather: string;
		brideMother: string;
	} = $props();
</script>

{#snippet relationLine(father: string, mother: string, relation: string, name: string)}
	<p class="text-center font-serif text-lg leading-loose text-gray-600 md:text-xl md:leading-loose">
		<span class="font-bold">{father}</span> • <span class="font-bold">{mother}</span> 의 {relation}
		<span class="font-bold">{name}</span>
	</p>
{/snippet}

<div class="flex flex-col space-y-2 px-2">
	{@render relationLine(groomFather, groomMother, '아들', groom)}
	{@render relationLine(brideFather, brideMother, '딸', bride)}
</div>
