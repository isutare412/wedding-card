<script lang="ts">
	import type { AccountData } from '$lib/account';
	import CopyIcon from '$lib/components/icons/CopyIcon.svelte';
	import { addToast } from '$lib/states/toast-state.svelte';

	const { accounts }: { accounts: AccountData[] } = $props();

	function onClickCopyButton(name: string, account: string): () => void {
		return () => {
			navigator.clipboard.writeText(account).then(() => addCopyResultToast(name, account));
		};
	}

	function addCopyResultToast(name: string, account: string) {
		addToast(`${name}님의 계좌번호 ${account} 를 복사 했어요`, { timeout: 3_000 });
	}
</script>

<div>
	<span class="font-serif text-gray-600 md:text-xl">
		<p class="text-center font-bold tracking-wider">축하의 마음 전하기</p>
		<div class="mx-auto my-4 w-fit">
			<table class="table-auto border-separate border-spacing-x-2 border-spacing-y-1">
				{#each accounts as account}
					<tbody>
						<tr>
							<td><span class="align-middle">{account.ownerName}</span></td>
							<td><span class="align-middle">{account.bank}</span></td>
							<td><span class="align-middle">{account.number}</span></td>
							<td class="flex items-center justify-center">
								<button
									onclick={onClickCopyButton(account.ownerName, account.number)}
									class="rounded-md pl-1 hover:bg-black hover:bg-opacity-10"
								>
									<div class="inline-block h-5 w-5 -translate-y-[1px] align-middle">
										<CopyIcon />
									</div>
									<span
										class="inline-block -translate-x-[5px] align-middle text-sm font-bold tracking-tight"
										>복사</span
									>
								</button>
							</td>
						</tr>
					</tbody>
				{/each}
			</table>
		</div>
	</span>
</div>
