<script lang="ts">
	import CrossIcon from '$lib/components/icons/CrossIcon.svelte';
	import { PausableTimer } from '$lib/pausable-timer';
	import { deleteToast } from '$lib/states/toast-state.svelte';
	import { Tween } from 'svelte/motion';

	const {
		id,
		message,
		timeout = 3000
	}: { id: number; message: string; timeout?: number } = $props();

	const progress = new Tween(0, { duration: timeout });
	let timer: PausableTimer;
	let lastStop = 0;

	$effect(() => {
		progress.set(1);
		timer = new PausableTimer(() => {
			deleteToast(id);
		}, timeout);
	});

	function pauseProgress() {
		lastStop = progress.current;
		progress.set(lastStop, { duration: 0 });
		timer.pause();
	}

	function resumeProgress() {
		progress.set(1, { duration: (1 - lastStop) * timeout });
		timer.resume();
	}

	function onClickCloseButton() {
		deleteToast(id);
	}
</script>

<div
	role="alertdialog"
	onmouseenter={pauseProgress}
	onmouseleave={resumeProgress}
	class="relative max-w-[90vw] overflow-hidden rounded-sm bg-gray-50 p-4 shadow md:max-w-[690px]"
>
	<button
		onclick={onClickCloseButton}
		class="absolute right-2 top-3 rounded-full p-1 transition-colors hover:bg-black hover:bg-opacity-10"
		><div class="h-5 w-5"><CrossIcon /></div></button
	>
	<p class="mr-7 whitespace-pre text-pretty">{message}</p>
	<div
		class="absolute bottom-0 left-0 h-1 bg-zinc-900"
		style={`width: ${(1 - progress.current) * 100}%`}
	></div>
</div>
