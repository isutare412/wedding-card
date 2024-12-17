<script lang="ts" module>
	import { register as swiperRegister } from 'swiper/element/bundle';

	swiperRegister();
</script>

<script lang="ts">
	import type { PhotoSet } from '$lib/photo';
	import { type SwiperContainer } from 'swiper/element/bundle';

	const { photos }: { photos: PhotoSet[] } = $props();

	let swiperElement: SwiperContainer;
	let isPopupOpen = $state(false);

	function openPopup(i: number) {
		swiperElement.swiper.slideToLoop(i, 0);
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

	function onOverlayClick(event: MouseEvent) {
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
		{#each photos as photo, i}
			<button onclick={() => openPopup(i)} class="block outline-none">
				<img alt="wedding couple shot" src={photo.thumbnail} />
			</button>
		{/each}
	</div>

	<!-- svelte-ignore a11y_click_events_have_key_events -->
	<!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
	<div
		role="dialog"
		onclick={onOverlayClick}
		class="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-80"
		class:hidden={!isPopupOpen}
	>
		<swiper-container
			bind:this={swiperElement}
			navigation="true"
			pagination="true"
			pagination-clickable="true"
			space-between="30"
			keyboard-enabled="true"
			class="fixed left-1/2 top-1/2 h-full max-h-[70vh] w-full max-w-[90vw] -translate-x-1/2 -translate-y-1/2 md:max-h-[80vh] md:max-w-[60vw]"
		>
			{#each photos as photo}
				<swiper-slide class="bg-white">
					<img
						alt="detailed wedding shot"
						src={photo.full}
						class="block h-full w-full object-contain"
					/>
				</swiper-slide>
			{/each}
		</swiper-container>
	</div>
</div>

<style>
	:root {
		--swiper-navigation-color: rgb(75, 79, 70);
		--swiper-pagination-color: rgb(75, 79, 70);
	}
</style>
