<script lang="ts">
	import {
		PUBLIC_BRIDE_FATHER_FULL_NAME,
		PUBLIC_BRIDE_FULL_NAME,
		PUBLIC_BRIDE_MOTHER_FULL_NAME,
		PUBLIC_BRIDE_NAME,
		PUBLIC_CDN_BASE,
		PUBLIC_GROOM_FATHER_FULL_NAME,
		PUBLIC_GROOM_FULL_NAME,
		PUBLIC_GROOM_MOTHER_FULL_NAME,
		PUBLIC_GROOM_NAME
	} from '$env/static/public';
	import CenterText from '$lib/components/CenterText.svelte';
	import CoupleName from '$lib/components/CoupleName.svelte';
	import Family from '$lib/components/Family.svelte';
	import FlowerBand from '$lib/components/FlowerBand.svelte';
	import Map from '$lib/components/Map.svelte';
	import PhotoFooter from '$lib/components/PhotoFooter.svelte';
	import PhotoGallery from '$lib/components/PhotoGallery.svelte';
	import PhotoHeader from '$lib/components/PhotoHeader.svelte';
	import type { PhotoSet } from '$lib/photo';
	import type { CenterTextData } from '$lib/text';

	const photoHeader = {
		dateNums: [
			['2', '5'],
			['0', '3'],
			['3', '0']
		],
		dayOfWeek: ['S', 'U', 'N', 'D', 'A', 'Y'],
		image: `${PUBLIC_CDN_BASE}/gallery/original/photo-header.jpg`
	};

	const photoFooter = {
		image: `${PUBLIC_CDN_BASE}/gallery/original/photo-footer.jpg`
	};

	const photos = [
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-1.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-1.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-2.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-2.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-3-1.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-3-1.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-3-2.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-3-2.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-3-3.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-3-3.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-4.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-4.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-5.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-5.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-6-1.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-6-1.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-6-2.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-6-2.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-7.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-7.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-8-1.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-8-1.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-9.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-9.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-10.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-10.jpg`
		},
		{
			thumbnail: `${PUBLIC_CDN_BASE}/gallery/thumbnail/photo-11.jpg`,
			full: `${PUBLIC_CDN_BASE}/gallery/original/photo-11.jpg`
		}
	] satisfies PhotoSet[];

	const mapData = {
		latitude: 37.50084,
		longitude: 127.00318,
		links: [
			{
				text: '카카오맵',
				image: `${PUBLIC_CDN_BASE}/miscs/icon-kakao-map.webp`,
				href: `https://map.kakao.com/link/map/1807085957`,
				mobileOnly: false
			},
			{
				text: '네이버지도',
				image: `${PUBLIC_CDN_BASE}/miscs/icon-naver-map.webp`,
				href: 'https://naver.me/xM2E86s2',
				mobileOnly: false
			},
			{
				text: '티맵',
				image: `${PUBLIC_CDN_BASE}/miscs/icon-tmap.png`,
				href: 'tmap://search?name=%EC%95%84%ED%8E%A0%EA%B0%80%EB%AA%A8%20%EB%B0%98%ED%8F%AC',
				mobileOnly: true
			}
		]
	};

	const coupleNames = {
		bride: `${PUBLIC_GROOM_FULL_NAME}`,
		groom: `${PUBLIC_BRIDE_FULL_NAME}`
	};

	const familyNames = {
		groom: `${PUBLIC_GROOM_NAME}`,
		groomFather: `${PUBLIC_GROOM_FATHER_FULL_NAME}`,
		groomMother: `${PUBLIC_GROOM_MOTHER_FULL_NAME}`,
		bride: `${PUBLIC_BRIDE_NAME}`,
		brideFather: `${PUBLIC_BRIDE_FATHER_FULL_NAME}`,
		brideMother: `${PUBLIC_BRIDE_MOTHER_FULL_NAME}`
	};

	const scheduleTextData = {
		paragraphs: [
			{
				body: '2025년 3월 30일 일요일 낮 12시 30분\n아펠가모 반포 LL층 단독홀'
			}
		]
	} satisfies CenterTextData;

	const invitationTextData = {
		title: 'INVITATION',
		paragraphs: [
			{
				body: '서로의 반려자로서\n평생을 함께할 것을 맹세하는 날,\n꽃피는 봄의 따스한 기운 속에서\n저희 두 사람의 새로운 시작과\n앞날의 소중한 첫걸음을\n따뜻한 마음으로\n지켜봐 주시고 축복해 주시면\n감사하겠습니다.'
			}
		]
	} satisfies CenterTextData;

	const locationTextData = {
		title: 'LOCATION',
		paragraphs: [
			{
				body: '오시는 길\n아펠가모 반포 LL층 단독홀\n서울 서초구 반포대로 235 효성빌딩 LL층'
			}
		]
	} satisfies CenterTextData;

	const transportationTextData = {
		paragraphs: [
			{
				subTitle: '버스',
				body: '서울지방조달청.서울성모병원\n405, 740, 5413'
			},
			{
				subTitle: '지하철',
				body: '고속터미널역 5번 출구\n3호선, 7호선, 9호선'
			},
			{
				subTitle: '주차안내',
				body: '건물 내 B3-B5 2시간 무료주차'
			}
		]
	} satisfies CenterTextData;

	const footerTextData = {
		paragraphs: [
			{
				body: '응원하고 격려해주신 모든 분들께\n감사드리며\n행복하게 잘 살겠습니다.'
			}
		]
	} satisfies CenterTextData;
</script>

<svelte:head>
	<title>{`${PUBLIC_GROOM_NAME}`}•{`${PUBLIC_BRIDE_NAME}`} 청첩장</title>
	<meta
		property="description"
		content="{coupleNames.groom}•{coupleNames.bride} 의 결혼식에 초대합니다."
	/>
</svelte:head>

<div class="flex-col">
	<div>
		<PhotoHeader
			dateNums={photoHeader.dateNums}
			dayOfWeek={photoHeader.dayOfWeek}
			image={photoHeader.image}
		/>
	</div>
	<div class="my-14">
		<CoupleName brideName={coupleNames.bride} groomName={coupleNames.groom} />
	</div>
	<div>
		<FlowerBand />
	</div>
	<div class="mt-20">
		<CenterText textData={scheduleTextData} />
	</div>
	<div class="mt-16">
		<CenterText textData={invitationTextData} />
	</div>
	<div class="mt-24">
		<PhotoGallery {photos} />
	</div>
	<div class="mt-10">
		<Family {...familyNames} />
	</div>
	<div class="mt-28">
		<CenterText textData={locationTextData} />
	</div>
	<div class="mt-10">
		<Map latitude={mapData.latitude} longitude={mapData.longitude} links={mapData.links} />
	</div>
	<div class="mt-12">
		<CenterText textData={transportationTextData} />
	</div>
	<div class="my-36">
		<FlowerBand />
	</div>
	<div class="my-12">
		<CenterText textData={footerTextData} />
	</div>
	<div>
		<PhotoFooter image={photoFooter.image} />
	</div>
</div>
