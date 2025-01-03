<script lang="ts">
	import Toast from '$lib/components/Toast.svelte';
	import { toastState } from '$lib/states/toast-state.svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	let toasts = $derived(toastState.toasts);
</script>

<div class="fixed bottom-2 flex w-screen flex-col-reverse items-center gap-y-2">
	{#each toasts as toast (toast.id)}
		<div
			in:fly={{ y: -20, duration: 200 }}
			out:fly={{ y: 20, duration: 200 }}
			animate:flip={{ duration: 200 }}
		>
			<Toast {...toast} />
		</div>
	{/each}
</div>
