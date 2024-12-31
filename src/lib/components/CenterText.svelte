<script lang="ts">
	import type { CenterTextData } from '$lib/text';

	const { textData }: { textData: CenterTextData } = $props();
</script>

{#snippet titleParagraph(input: { title?: string; body?: string })}
	<div class="flex flex-col space-y-1">
		{#if input.title !== undefined}
			<p class="font-bold">{input.title}</p>
		{/if}
		{#if input.body !== undefined}
			<p>
				{input.body}
			</p>
		{/if}
	</div>
{/snippet}

<div>
	<div
		class="flex flex-col space-y-6 whitespace-pre-line px-2 text-center font-serif leading-loose opacity-70 md:text-xl md:leading-loose"
	>
		{#if textData.title !== undefined}
			<p class="font-extrabold tracking-wider">{textData.title}</p>
		{/if}
		{#each textData.paragraphs as paragraph}
			{@render titleParagraph({ title: paragraph.subTitle, body: paragraph.body })}
		{/each}
	</div>
</div>
