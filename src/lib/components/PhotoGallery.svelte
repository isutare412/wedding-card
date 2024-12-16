<script lang="ts">
	import type { PhotoSet } from '$lib/photo';

	const { photos }: { photos: PhotoSet[] } = $props();

	let isPopupOpen = $state(false);
	let popupImage = $state(photos[0].full);

	function openPopup(image: string) {
		popupImage = image;
		isPopupOpen = true;
	}

	function onDocumentKeyup(
		event: KeyboardEvent & {
			currentTarget: EventTarget & Document;
		}
	) {
		if (isPopupOpen && event.key === 'Escape') {
			isPopupOpen = false;
			return;
		}
	}

	function onOverlayClick(
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLDivElement;
		}
	) {
		if (event.target !== event.currentTarget) return;

		isPopupOpen = false;
	}
</script>

<svelte:head>
	{#each photos as photo}
		<link rel="prefetch" href={photo.full} />
	{/each}
</svelte:head>

<svelte:document onkeyup={onDocumentKeyup} />

<div>
	<!-- Thumbnail view -->
	<div class="grid grid-cols-3 gap-1 sm:grid-cols-4 md:grid-cols-5">
		{#each photos as photo}
			<button onclick={() => openPopup(photo.full)} class="block outline-none">
				<img alt="wedding couple shot" src={photo.thumbnail} />
			</button>
		{/each}
	</div>

	<!-- Detail popup view -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<!-- svelte-ignore a11y_click_events_have_key_events -->
	{#if isPopupOpen}
		<div
			role="dialog"
			onclick={onOverlayClick}
			class="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-80"
		>
			<img
				alt="popup detail wedding shot"
				src={popupImage}
				class="fixed left-1/2 top-1/2 max-h-[90vh] max-w-[90vw] -translate-x-1/2 -translate-y-1/2"
			/>
		</div>
	{/if}
</div>
