<script lang="ts">
	import type { AccountData } from '$lib/account';
	import { addToast } from '$lib/states/toast-state.svelte';

	const { accounts }: { accounts: AccountData[] } = $props();

	function onClickCopyButton(name: string, account: string): () => void {
		return () => {
			// https://forums.developer.apple.com/forums/thread/691873
			// Apple WebKit does not allow async.
			if (/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
				navigator.clipboard
					.write([
						new ClipboardItem({
							'text/plain': Promise.resolve(account)
						})
					])
					.then(() => addCopyResultToast(name, account));
			} else {
				navigator.clipboard.writeText(account).then(() => addCopyResultToast(name, account));
			}
		};
	}

	function addCopyResultToast(name: string, account: string) {
		addToast(`${name}님의 계좌번호 ${account} 를 복사 했어요`, { timeout: 3_000 });
	}
</script>

<div>
	<span class="text-center font-serif opacity-60 md:text-xl">
		<p class="font-extrabold">축하의 마음 전하기</p>
		<div class="my-6 space-y-4">
			{#each accounts as account}
				<p>
					{account.ownerName}
					{account.bank}
					{account.number}
					&nbsp;<button
						onclick={onClickCopyButton(account.ownerName, account.number)}
						class="rounded-md px-1 hover:bg-black hover:bg-opacity-10"
						><span class="font-bold">복사</span></button
					>
				</p>
			{/each}
		</div>
	</span>
</div>
