import VanillaCalendar from '@/js/modules/vanilla-calendar';

document.addEventListener('DOMContentLoaded', () => {
	const DOMCalendar = document.querySelector('.vanilla-calendar');

	const calendar = new VanillaCalendar({
		calendar: DOMCalendar,
		settings: {
			// lang: 'eng',
			// selecting: false,
			// weekend: false,
			// today: false,
			// range: {
			// 	min: '2022-05-09',
			// 	max: '2022-05-10',
			// 	values: ['2022-05-01', '2022-05-04', '2022-05-22'],
			// },
			// selected: {
			// 	date: '2022-05-04',
			// 	month: 1,
			// 	year: 2022,
			// 	holidays: ['2022-05-01', '2022-05-06', '2022-05-12'],
			// },
		},
	});

	calendar.init();
});
