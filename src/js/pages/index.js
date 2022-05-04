import VanillaCalendar from '@/js/modules/vanilla-calendar';

document.addEventListener('DOMContentLoaded', () => {
	const DOMCalendar = document.querySelector('.vanilla-calendar');

	const calendar = new VanillaCalendar({
		calendar: DOMCalendar,
		// settings: {
		// 	lang: 'eng',
		// 	selecting: false,
		// 	weekend: false,
		// 	today: false,
		// 	selected: {
		// 		date: '2022-05-04',
		// 		month: 1,
		// 		year: 2022,
		// 	},
		// },
	});

	calendar.init();
});
