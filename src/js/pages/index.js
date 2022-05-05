import VanillaCalendar from '@/js/modules/vanilla-calendar.babel.min';

document.addEventListener('DOMContentLoaded', () => {
	const DOMCalendar = document.querySelector('.vanilla-calendar');

	const calendar = new VanillaCalendar({
		calendar: DOMCalendar,
		today: new Date('2022-01-07'),
		settings: {
			lang: 'ru',
			iso8601: true,
			selecting: true,
			weekend: true,
			today: true,
			range: {
				min: '2022-01-01',
				max: '2022-02-12',
				values: ['2022-01-25'],
			},
			selected: {
				date: '2022-01-09',
				month: 1,
				year: 2022,
				holidays: ['2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'],
			},
			visibility: {
				year: true,
				months: true,
				arrows: {
					prev: false,
					next: true,
				},
			},
		},
	});

	calendar.init();

	setTimeout(() => {
		calendar.today = new Date('2022-01-25');
		calendar.settings.lang = 'eng';
		calendar.settings.iso8601 = false;
		calendar.settings.selected.date = '2022-01-15';
		calendar.settings.visibility.arrows.prev = true;

		calendar.update();
	}, 5000);
});
