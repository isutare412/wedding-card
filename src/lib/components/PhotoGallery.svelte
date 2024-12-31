<script lang="ts">
	import ArrowIconThick from '$lib/components/icons/ArrowIconThick.svelte';
	import CrossIconThick from '$lib/components/icons/CrossIconThick.svelte';
	import type { PhotoSet } from '$lib/photo';
	import Swiper from 'swiper';
	import 'swiper/css';
	import 'swiper/css/navigation';
	import 'swiper/css/pagination';
	import { Navigation, Pagination } from 'swiper/modules';

	const { photos }: { photos: PhotoSet[] } = $props();

	let swiper: Swiper;
	let swiperIndex: number = $state(0);
	let isPopupOpen = $state(false);
	let isFirstSlide = $derived(swiperIndex === 0);
	let isLastSlide = $derived(swiperIndex === photos.length - 1);

	$effect(() => {
		swiper = new Swiper('.swiper', {
			modules: [Navigation, Pagination],
			on: {
				activeIndexChange: (swiper) => (swiperIndex = swiper.activeIndex)
			},
			spaceBetween: 30
		});
	});

	function openPopup(i: number) {
		swiper.slideToLoop(i, 0);
		isPopupOpen = true;
	}

	function onDocumentKeyup(
		event: KeyboardEvent & {
			currentTarget: EventTarget & Document;
		}
	) {
		if (isPopupOpen) {
			if (event.key === 'Escape') {
				isPopupOpen = false;
				return;
			}

			if (event.key === 'ArrowLeft') {
				swiper.slidePrev();
				return;
			}

			if (event.key === 'ArrowRight') {
				swiper.slideNext();
				return;
			}
		}
	}

	function onClickOverlay(event: MouseEvent) {
		if (event.target !== event.currentTarget) return;

		isPopupOpen = false;
	}

	function onClickNextButton(event: MouseEvent) {
		swiper.slideNext();
	}

	function onClickPrevButton(event: MouseEvent) {
		swiper.slidePrev();
	}

	function onClickCloseButton(event: MouseEvent) {
		isPopupOpen = false;
	}
</script>

<svelte:head>
	{#each photos as photo}
		<link rel="prefetch" href={photo.full} />
	{/each}

	{#if isPopupOpen}
		<style>
			body {
				overflow: hidden;
			}
		</style>
	{/if}
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
		onclick={onClickOverlay}
		class="fixed left-0 top-0 z-10 h-screen w-screen bg-black bg-opacity-80"
		class:hidden={!isPopupOpen}
	>
		<div
			role="dialog"
			onclick={onClickOverlay}
			class="fixed left-1/2 top-1/2 flex h-full max-h-[80vh] w-full max-w-5xl -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center space-y-4 px-4 md:max-h-[90vh]"
		>
			<!-- Slider main container -->
			<div class="swiper h-full w-full">
				<!-- Additional required wrapper -->
				<div class="swiper-wrapper">
					<!-- Slides -->
					{#each photos as photo}
						<div class="swiper-slide">
							<img
								alt="detailed wedding shot"
								src={photo.full}
								class="block h-full w-full object-contain"
							/>
						</div>
					{/each}
				</div>
			</div>

			<div class="z-10 flex items-center justify-center space-x-4 text-zinc-200 transition-colors">
				<button
					onclick={onClickPrevButton}
					class="outline-none"
					disabled={isFirstSlide}
					class:opacity-60={isFirstSlide}
				>
					<div
						class:hover:bg-zinc-600={!isFirstSlide}
						class:hover:text-zinc-50={!isFirstSlide}
						class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 md:h-11 md:w-11"
					>
						<div class="h-5 w-5 -translate-x-[2px]"><ArrowIconThick /></div>
					</div>
				</button>
				<button
					onclick={onClickNextButton}
					class="outline-none"
					disabled={isLastSlide}
					class:opacity-60={isLastSlide}
				>
					<div
						class:hover:bg-zinc-600={!isLastSlide}
						class:hover:text-zinc-50={!isLastSlide}
						class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 md:h-11 md:w-11"
					>
						<div class="h-5 w-5 translate-x-[2px] rotate-180">
							<ArrowIconThick />
						</div>
					</div>
				</button>
				<button onclick={onClickCloseButton}>
					<div
						class="flex h-10 w-10 items-center justify-center rounded-full bg-zinc-900 outline-none hover:bg-zinc-600 hover:text-zinc-50 md:h-11 md:w-11"
					>
						<div class="h-4 w-4"><CrossIconThick /></div>
					</div>
				</button>
			</div>
		</div>
	</div>
</div>

<style>
	:root {
		--swiper-navigation-color: rgb(75, 79, 70);
		--swiper-pagination-color: rgb(75, 79, 70);
	}

	div.swiper {
		position: static;
	}
</style>
