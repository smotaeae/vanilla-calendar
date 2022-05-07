/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', () => {
	const DOMCalendar = document.querySelector('.vanilla-calendar');

	const calendar = new VanillaCalendar({
		calendar: DOMCalendar,
	});

	calendar.init();
});
