<script lang="ts">
	import { PUBLIC_KAKAO_MAP_API_KEY } from '$env/static/public';
	import { isMobile } from '$lib/mobile';

	const {
		latitude,
		longitude,
		links
	}: {
		latitude: number;
		longitude: number;
		links: { text: string; image: string; href: string; mobileOnly: boolean }[];
	} = $props();

	let mapElement: HTMLDivElement;

	$effect(() => {
		const options = {
			center: new kakao.maps.LatLng(latitude, longitude),
			level: 4
		} satisfies kakao.maps.MapOptions;
		const map = new kakao.maps.Map(mapElement, options);

		const markerPosition = new kakao.maps.LatLng(latitude, longitude);
		const marker = new kakao.maps.Marker({
			position: markerPosition
		});
		marker.setMap(map);
	});

	function onMobileOnlyClick(
		event: MouseEvent & {
			currentTarget: EventTarget & HTMLSpanElement;
		}
	) {
		if (!isMobile()) {
			event.preventDefault();
			alert(`모바일에서만 실행 가능해요 📱`);
			return;
		}
	}
</script>

<svelte:head>
	<script
		type="text/javascript"
		src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${PUBLIC_KAKAO_MAP_API_KEY}`}
	></script>
</svelte:head>

{#snippet mapLinkButton(imageSrc: string, text: string)}
	<img alt="Map icon" src={imageSrc} class="inline-block h-4" /><span
		class="ml-1 inline-block text-sm text-gray-600">{text}</span
	>
{/snippet}

<div>
	<div bind:this={mapElement} id="map" class="mx-auto h-[300px] w-full"></div>
	<div class="mt-2 flex justify-stretch divide-x">
		{#each links as link}
			<div class="flex flex-1 justify-center">
				<div>
					{#if link.mobileOnly}
						<a href={link.href} target="_blank" onclick={onMobileOnlyClick}>
							{@render mapLinkButton(link.image, link.text)}
						</a>
					{:else}
						<a href={link.href} target="_blank">
							{@render mapLinkButton(link.image, link.text)}
						</a>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</div>
