"use strict";

/* eslint-disable no-alert */

/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  // Examples
  var one = new VanillaCalendar({
    HTMLElement: document.querySelector('#one')
  });
  one.init(); // const two = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#two'),
  // 	settings: {
  // 		iso8601: false,
  // 	},
  // });
  // two.init();
  // const threeRus = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#threeRus'),
  // 	settings: {
  // 		lang: 'ru',
  // 	},
  // });
  // threeRus.init();
  // const three = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#three'),
  // });
  // three.name.months.full.kz = ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
  // three.name.months.reduction.kz = ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шіл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел'];
  // three.name.week.kz = ['Си', 'Же', 'Ду', 'Сй', 'Ср', 'Бе', 'Жұ'];
  // three.name.arrow.prev.kz = 'Артқа';
  // three.name.arrow.next.kz = 'Алға';
  // three.settings.lang = 'kz';
  // three.init();
  // const four = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#four'),
  // 	settings: {
  // 		selection: {
  // 			day: false,
  // 			month: true,
  // 			year: false,
  // 		},
  // 	},
  // });
  // four.init();
  // const five = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#five'),
  // 	settings: {
  // 		visibility: {
  // 			weekend: false,
  // 			today: false,
  // 		},
  // 	},
  // });
  // five.init();
  // const six = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#six'),
  // 	date: {
  // 		today: new Date('2022-01-07'),
  // 	},
  // 	settings: {
  // 		selected: {
  // 			date: '2022-01-09',
  // 			month: 1,
  // 			year: 2022,
  // 		},
  // 	},
  // });
  // six.init();
  // const seven = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#seven'),
  // 	date: {
  // 		today: new Date('2022-01-08'),
  // 	},
  // 	settings: {
  // 		selection: {
  // 			month: false,
  // 		},
  // 		selected: {
  // 			month: 1,
  // 			year: 2022,
  // 		},
  // 		range: {
  // 			min: '2022-01-07',
  // 			max: '2022-02-12',
  // 			disabled: ['2022-01-12', '2022-01-21', '2022-02-04'],
  // 		},
  // 		visibility: {
  // 			disabled: true,
  // 		},
  // 	},
  // 	actions: {
  // 		clickDay(e) {
  // 			alert(e.target.dataset.calendarDay);
  // 		},
  // 		clickMonth(e) {
  // 			alert(e.target.dataset.calendarMonth);
  // 		},
  // 		clickYear(e) {
  // 			alert(e.target.dataset.calendarYear);
  // 		},
  // 	},
  // });
  // seven.init();
  // const eight = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#eight'),
  // 	date: {
  // 		today: new Date('2022-01-08'),
  // 	},
  // 	settings: {
  // 		selected: {
  // 			month: 1,
  // 			year: 2022,
  // 			holidays: ['2022-01-03', '2022-01-04', '2022-01-05', '2022-01-20'],
  // 		},
  // 	},
  // });
  // eight.init();
  // const nine = new VanillaCalendar({
  // 	HTMLElement: document.querySelector('#nine'),
  // 	type: 'month',
  // 	// date: {
  // 	// 	today: new Date('2022-02-08'),
  // 	// },
  // 	settings: {
  // 		selection: {
  // 			month: false,
  // 		},
  // 		// selected: {
  // 		// 	month: 0,
  // 		// 	year: 2022,
  // 		// },
  // 		// range: {
  // 		// 	min: '2022-02-07',
  // 		// 	max: '2040-05-12',
  // 		// },
  // 	},
  // });
  // nine.init();
  // Temp

  hljs.highlightAll();
});