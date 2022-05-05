import VanillaCalendar from '@/js/modules/vanilla-calendar';

document.addEventListener('DOMContentLoaded', () => {
	const DOMCalendar = document.querySelector('.vanilla-calendar');

	const calendar = new VanillaCalendar({
		calendar: DOMCalendar,
		// today: new Date('2022-05-07'),
		settings: {
			// lang: 'eng',
			// selecting: false,
			// weekend: false,
			// today: false,
			// range: {
			// 	month: false,
			// 	min: '2022-04-09',
			// 	max: '2022-06-15',
			// 	values: ['2022-07-07'],
			// },
			// selected: {
			// 	date: '2022-05-09',
			// 	month: 1,
			// 	year: 2022,
			// 	holidays: ['2022-05-01', '2022-05-06', '2022-05-12'],
			// },
			// visibility: {
			// 	year: false,
			// 	arrows: {
			// 		prev: false,
			// 		next: false,
			// 	},
			// },
		},
	});

	calendar.init();
});
