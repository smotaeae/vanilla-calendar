import VanillaCalendar from '@/js/modules/vanilla-calendar';

document.addEventListener('DOMContentLoaded', () => {
	const DOMCalendar = document.querySelector('.vanilla-calendar');

	const calendar = new VanillaCalendar({
		calendar: DOMCalendar,
	});

	calendar.init();
});
