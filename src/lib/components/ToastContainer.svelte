<script lang="ts">
	import Toast from '$lib/components/Toast.svelte';
	import { toastState } from '$lib/states/toast-state.svelte';
	import { flip } from 'svelte/animate';
	import { fly } from 'svelte/transition';

	let toasts = $derived(toastState.toasts);
</script>

<div class="fixed bottom-2 flex w-screen flex-col-reverse items-center space-y-2 space-y-reverse">
	{#each toasts as toast (toast.id)}
		<div in:fly={{ y: -20, duration: 200 }} animate:flip={{ duration: 150 }}>
			<Toast {...toast} />
		</div>
	{/each}
</div>
