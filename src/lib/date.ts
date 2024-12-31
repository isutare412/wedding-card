export function generateCalendar(year: number, month: number): number[][] {
	// Get the day of the week for the first day of the month (0: Sunday, 6: Saturday)
	const firstDay = new Date(year, month - 1, 1).getDay();

	// Get the last date of the month
	const lastDate = new Date(year, month, 0).getDate();

	const weeks: number[][] = [];
	let week = new Array(7).fill(undefined); // Create an array of 7 slots filled with undefined

	for (let date = 1; date <= lastDate; date++) {
		const currentDay = (firstDay + date - 1) % 7;
		week[currentDay] = date;

		// If the week is complete or it's the last date of the month, add the week
		// to weeks and reset the week array
		if (currentDay === 6 || date === lastDate) {
			weeks.push(week);
			week = new Array(7).fill(undefined);
		}
	}

	return weeks;
}
