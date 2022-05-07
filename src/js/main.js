/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
	// Examples
	const one = new VanillaCalendar({
		calendar: document.querySelector('#one'),
	});
	one.init();

	const two = new VanillaCalendar({
		calendar: document.querySelector('#two'),
		settings: {
			lang: 'eng',
			iso8601: false,
		},
	});
	two.init();

	const three = new VanillaCalendar({
		calendar: document.querySelector('#three'),
	});
	three.name.months.kz = ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
	three.name.week.kz = ['Си', 'Же', 'Ду', 'Сй', 'Ср', 'Бе', 'Жұ'];
	three.settings.lang = 'kz';
	three.init();

	const four = new VanillaCalendar({
		calendar: document.querySelector('#four'),
		settings: {
			selecting: false,
		},
	});
	four.init();

	const five = new VanillaCalendar({
		calendar: document.querySelector('#five'),
		settings: {
			weekend: false,
			today: false,
		},
	});
	five.init();

	const six = new VanillaCalendar({
		calendar: document.querySelector('#six'),
		today: new Date('2022-01-07'),
		settings: {
			selected: {
				date: '2022-01-09',
				month: 1,
				year: 2022,
			},
		},
	});
	six.init();

	const seven = new VanillaCalendar({
		calendar: document.querySelector('#seven'),
		today: new Date('2022-01-08'),
		settings: {
			selected: {
				month: 1,
				year: 2022,
			},
			range: {
				min: '2022-01-07',
				max: '2022-02-12',
				values: ['2022-01-02', '2022-01-04'],
			},
		},
	});
	seven.init();

	const eight = new VanillaCalendar({
		calendar: document.querySelector('#eight'),
		today: new Date('2022-01-08'),
		settings: {
			selected: {
				month: 1,
				year: 2022,
				holidays: ['2022-01-03', '2022-01-04', '2022-01-05', '2022-01-20'],
			},
		},
	});
	eight.init();

	const nine = new VanillaCalendar({
		calendar: document.querySelector('#nine'),
		today: new Date('2022-02-08'),
		settings: {
			selected: {
				month: 2,
				year: 2022,
			},
			range: {
				min: '2022-01-07',
				max: '2022-02-12',
			},
			visibility: {
				months: false,
			},
		},
	});
	nine.init();

	const ten = new VanillaCalendar({
		calendar: document.querySelector('#ten'),
		settings: {
			visibility: {
				year: false,
				arrows: {
					prev: false,
					next: false,
				},
			},
		},
	});
	ten.init();

	// Temp
	hljs.highlightAll();
});
