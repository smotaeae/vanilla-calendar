import VanillaCalendar from '@/js/modules/vanilla-calendar';

document.addEventListener('DOMContentLoaded', () => {
	const DOMCalendars = document.querySelectorAll('.vanilla-calendar');

	DOMCalendars.forEach((DOMCalendar) => {
		const calendar = new VanillaCalendar({
			calendar: DOMCalendar,
			lang: 'ru',
		});
		calendar.init();
	});
});
