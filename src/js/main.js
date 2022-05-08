/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', () => {
	// Examples
	const one = new VanillaCalendar({
		HTMLElement: document.querySelector('#one'),
	});
	one.init();

	const two = new VanillaCalendar({
		HTMLElement: document.querySelector('#two'),
		settings: {
			iso8601: false,
		},
	});
	two.init();

	const threeRus = new VanillaCalendar({
		HTMLElement: document.querySelector('#threeRus'),
		settings: {
			lang: 'ru',
		},
	});
	threeRus.init();

	const three = new VanillaCalendar({
		HTMLElement: document.querySelector('#three'),
	});
	three.name.months.kz = ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
	three.name.week.kz = ['Си', 'Же', 'Ду', 'Сй', 'Ср', 'Бе', 'Жұ'];
	three.name.arrow.prev.kz = 'Артқа';
	three.name.arrow.next.kz = 'Алға';
	three.settings.lang = 'kz';
	three.init();

	const four = new VanillaCalendar({
		HTMLElement: document.querySelector('#four'),
		settings: {
			selecting: false,
		},
	});
	four.init();

	const five = new VanillaCalendar({
		HTMLElement: document.querySelector('#five'),
		settings: {
			visibility: {
				weekend: false,
				today: false,
			},
		},
	});
	five.init();

	const six = new VanillaCalendar({
		HTMLElement: document.querySelector('#six'),
		date: new Date('2022-01-07'),
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
		HTMLElement: document.querySelector('#seven'),
		date: new Date('2022-01-08'),
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
		HTMLElement: document.querySelector('#eight'),
		date: new Date('2022-01-08'),
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
		HTMLElement: document.querySelector('#nine'),
		date: new Date('2022-02-08'),
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
		HTMLElement: document.querySelector('#ten'),
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
