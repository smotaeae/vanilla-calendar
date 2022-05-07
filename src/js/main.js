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

	// Temp
	hljs.highlightAll();
});
