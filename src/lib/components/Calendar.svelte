<script lang="ts">
	import { generateCalendar } from '$lib/date';

	const { weddingDate }: { weddingDate: Date } = $props();
	const weddingDateKr = new Date(weddingDate.toLocaleString('en-US', { timeZone: 'Asia/Seoul' }));

	const year = weddingDateKr.getFullYear();
	const month = weddingDateKr.getMonth();
	const dateOfMonth = weddingDateKr.getDate();
	const weeks = generateCalendar(year, month + 1).map((dates) =>
		dates.map((date) => ({ date, isWeddingDay: date === dateOfMonth }))
	);
</script>

<div class="mx-auto w-full max-w-lg px-4">
	<span class="text-center font-serif md:text-lg">
		<p class="font-extrabold tracking-wider opacity-60 md:text-xl">CALENDAR</p>
		<table class="mt-12 w-full table-fixed">
			<thead>
				<tr class="h-12">
					<th class="text-red-500">일</th>
					<th class="opacity-60">월</th>
					<th class="opacity-60">화</th>
					<th class="opacity-60">수</th>
					<th class="opacity-60">목</th>
					<th class="opacity-60">금</th>
					<th class="opacity-60">토</th>
				</tr>
			</thead>
			<tbody>
				{#each weeks as dates}
					<tr class="h-12">
						{#each dates as d}
							<td>
								<div
									class="mx-auto flex h-8 w-8 items-center justify-center rounded-full"
									class:opacity-60={!d.isWeddingDay}
									class:bg-red-100={d.isWeddingDay}
									class:font-bold={d.isWeddingDay}
									class:text-red-500={d.isWeddingDay}
								>
									<div class="h-min w-min">
										<span class="align-middle leading-none">
											{d.date}
										</span>
									</div>
								</div>
							</td>
						{/each}
					</tr>
				{/each}
			</tbody>
		</table>
	</span>
</div>
