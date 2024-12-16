<script lang="ts">
	const { brideName, groomName }: { brideName: string; groomName: string } = $props();
</script>

<div class="p-3">
	<p class="text-center font-serif text-3xl font-semibold tracking-widest md:text-4xl">
		{`${groomName} | ${brideName}`}
	</p>
</div>
