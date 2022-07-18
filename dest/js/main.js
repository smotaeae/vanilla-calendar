(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["my-library"] = factory();
	else
		root["my-library"] = factory();
})(self, () => {
return /******/ (() => { // webpackBootstrap
var __webpack_exports__ = {};
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/* eslint-disable no-alert */
/* eslint-disable no-undef */

document.addEventListener('DOMContentLoaded', () => {
	const calendar = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar'),
	});
	calendar.init();

	const calendarMonth = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-month'),
		type: 'month',
		actions: {
			clickMonth(e) {
				alert(e.target.dataset.calendarMonth);
			},
		},
	});
	calendarMonth.init();

	const calendarDefault = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-default'),
		type: 'default',
		actions: {
			clickDay(e) {
				alert(e.target.dataset.calendarDay);
			},
		},
	});
	calendarDefault.init();

	const calendarYear = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-year'),
		type: 'year',
		actions: {
			clickYear(e) {
				alert(e.target.dataset.calendarYear);
			},
		},
	});
	calendarYear.init();

	const calendarDateMinMax = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-date-minmax'),
		date: {
			min: '2000-01-01',
			max: '2030-12-31',
		},
	});
	calendarDateMinMax.init();

	const otherToday = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-other-today'),
		date: {
			today: new Date('2022-01-07'),
		},
	});
	otherToday.init();

	const calendarRussianLang = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-russian-lang'),
		settings: {
			lang: 'ru',
		},
	});
	calendarRussianLang.init();

	const calendarOtherLang = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-other-lang'),
	});
	calendarOtherLang.name.months.full.kz = ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
	calendarOtherLang.name.months.reduction.kz = ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шіл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел'];
	calendarOtherLang.name.week.kz = ['Си', 'Же', 'Ду', 'Сй', 'Ср', 'Бе', 'Жұ'];
	calendarOtherLang.name.arrow.prev.kz = 'Артқа';
	calendarOtherLang.name.arrow.next.kz = 'Алға';
	calendarOtherLang.settings.lang = 'kz';
	calendarOtherLang.init();

	const calendarISO8601 = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-iso8601'),
		settings: {
			iso8601: false,
		},
	});
	calendarISO8601.init();

	const calendarDateRangeMinMax = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-date-range-minmax'),
		date: {
			today: new Date('2022-01-07'),
		},
		settings: {
			range: {
				min: '2022-01-01',
				max: '2022-02-12',
			},
		},
	});
	calendarDateRangeMinMax.init();

	const calendarDisabledDates = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-disabled-dates'),
		date: {
			today: new Date('2022-01-07'),
		},
		settings: {
			range: {
				min: '2022-01-01',
				max: '2022-02-12',
				disabled: ['2022-01-20', '2022-01-25', '2022-01-26'],
			},
		},
	});
	calendarDisabledDates.init();

	const calendarDisableSelectionDay = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-disable-selection-day'),
		settings: {
			selection: {
				day: false,
			},
		},
	});
	calendarDisableSelectionDay.init();

	const calendarDisableSelectionMonth = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-disable-selection-month'),
		settings: {
			selection: {
				month: false,
			},
		},
	});
	calendarDisableSelectionMonth.init();

	const calendarDisableSelectionYear = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-disable-selection-year'),
		settings: {
			selection: {
				year: false,
			},
		},
	});
	calendarDisableSelectionYear.init();

	const calendarMultipleSelectDays = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-multiple-select-days'),
		settings: {
			selection: {
				day: 'multiple',
			},
		},
	});
	calendarMultipleSelectDays.init();

	const calendarSelectedDates = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-selected-dates'),
		settings: {
			selection: {
				day: 'multiple',
			},
			selected: {
				dates: ['2022-01-09', '2022-01-10', '2022-01-11'],
				month: 0,
				year: 2022,
			},
		},
	});
	calendarSelectedDates.init();

	const calendarSelectedHolidays = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-selected-holidays'),
		settings: {
			selected: {
				month: 0,
				year: 2022,
				holidays: [
					'2022-01-01',
					'2022-01-02',
					'2022-01-03',
					'2022-01-04',
					'2022-01-05',
					'2022-01-06',
					'2022-01-07',
					'2022-01-08',
					'2022-01-09',
					'2022-01-10',
				],
			},
		},
	});
	calendarSelectedHolidays.init();

	const calendarDisableHighlightWeekend = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-disable-highlight-weekend'),
		settings: {
			visibility: {
				weekend: false,
			},
		},
	});
	calendarDisableHighlightWeekend.init();

	const calendarDisableHighlightToday = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-disable-highlight-today'),
		settings: {
			visibility: {
				today: false,
			},
		},
	});
	calendarDisableHighlightToday.init();

	const calendarEnableInactiveDates = new VanillaCalendar({
		HTMLElement: document.querySelector('#calendar-enable-inactive-dates'),
		date: {
			today: new Date('2022-01-17'),
		},
		settings: {
			visibility: {
				disabled: true,
			},
			range: {
				min: '2022-01-07',
				max: '2022-02-12',
			},
		},
	});
	calendarEnableInactiveDates.init();

	// Scroll
	const smoothScroll = {
		scroll(e) {
			const id = document.querySelector(e.target.getAttribute('href'));
			e.preventDefault();

			if (id) {
				id.scrollIntoView({ block: 'start', behavior: 'smooth' });
			}
		},

		hasClick(e) {
			this.scroll(e);
		},

		init() {
			document.addEventListener('click', (e) => {
				if (!e.target.closest('[data-smooth-scroll="list"] a[href^="#"]')) return;
				this.hasClick(e);
			});
		},
	};
	smoothScroll.init();
});

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTzs7Ozs7QUNWQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSixHQUFHO0FBQ0gsRUFBRTtBQUNGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0osR0FBRztBQUNILEVBQUU7QUFDRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxJQUFJO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSCxFQUFFO0FBQ0Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixvQ0FBb0M7QUFDNUQ7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKLEdBQUc7QUFDSDtBQUNBO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL215LWxpYnJhcnkvd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL215LWxpYnJhcnkvLi9zcmMvanMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJteS1saWJyYXJ5XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIm15LWxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG59KShzZWxmLCAoKSA9PiB7XG5yZXR1cm4gIiwiLyogZXNsaW50LWRpc2FibGUgbm8tYWxlcnQgKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXVuZGVmICovXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cdGNvbnN0IGNhbGVuZGFyID0gbmV3IFZhbmlsbGFDYWxlbmRhcih7XG5cdFx0SFRNTEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhcicpLFxuXHR9KTtcblx0Y2FsZW5kYXIuaW5pdCgpO1xuXG5cdGNvbnN0IGNhbGVuZGFyTW9udGggPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLW1vbnRoJyksXG5cdFx0dHlwZTogJ21vbnRoJyxcblx0XHRhY3Rpb25zOiB7XG5cdFx0XHRjbGlja01vbnRoKGUpIHtcblx0XHRcdFx0YWxlcnQoZS50YXJnZXQuZGF0YXNldC5jYWxlbmRhck1vbnRoKTtcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdGNhbGVuZGFyTW9udGguaW5pdCgpO1xuXG5cdGNvbnN0IGNhbGVuZGFyRGVmYXVsdCA9IG5ldyBWYW5pbGxhQ2FsZW5kYXIoe1xuXHRcdEhUTUxFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItZGVmYXVsdCcpLFxuXHRcdHR5cGU6ICdkZWZhdWx0Jyxcblx0XHRhY3Rpb25zOiB7XG5cdFx0XHRjbGlja0RheShlKSB7XG5cdFx0XHRcdGFsZXJ0KGUudGFyZ2V0LmRhdGFzZXQuY2FsZW5kYXJEYXkpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0Y2FsZW5kYXJEZWZhdWx0LmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhclllYXIgPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLXllYXInKSxcblx0XHR0eXBlOiAneWVhcicsXG5cdFx0YWN0aW9uczoge1xuXHRcdFx0Y2xpY2tZZWFyKGUpIHtcblx0XHRcdFx0YWxlcnQoZS50YXJnZXQuZGF0YXNldC5jYWxlbmRhclllYXIpO1xuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0Y2FsZW5kYXJZZWFyLmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhckRhdGVNaW5NYXggPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLWRhdGUtbWlubWF4JyksXG5cdFx0ZGF0ZToge1xuXHRcdFx0bWluOiAnMjAwMC0wMS0wMScsXG5cdFx0XHRtYXg6ICcyMDMwLTEyLTMxJyxcblx0XHR9LFxuXHR9KTtcblx0Y2FsZW5kYXJEYXRlTWluTWF4LmluaXQoKTtcblxuXHRjb25zdCBvdGhlclRvZGF5ID0gbmV3IFZhbmlsbGFDYWxlbmRhcih7XG5cdFx0SFRNTEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhci1vdGhlci10b2RheScpLFxuXHRcdGRhdGU6IHtcblx0XHRcdHRvZGF5OiBuZXcgRGF0ZSgnMjAyMi0wMS0wNycpLFxuXHRcdH0sXG5cdH0pO1xuXHRvdGhlclRvZGF5LmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhclJ1c3NpYW5MYW5nID0gbmV3IFZhbmlsbGFDYWxlbmRhcih7XG5cdFx0SFRNTEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhci1ydXNzaWFuLWxhbmcnKSxcblx0XHRzZXR0aW5nczoge1xuXHRcdFx0bGFuZzogJ3J1Jyxcblx0XHR9LFxuXHR9KTtcblx0Y2FsZW5kYXJSdXNzaWFuTGFuZy5pbml0KCk7XG5cblx0Y29uc3QgY2FsZW5kYXJPdGhlckxhbmcgPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLW90aGVyLWxhbmcnKSxcblx0fSk7XG5cdGNhbGVuZGFyT3RoZXJMYW5nLm5hbWUubW9udGhzLmZ1bGwua3ogPSBbJ9Ka0LDSo9GC0LDRgCcsICfQkNKb0L/QsNC9JywgJ9Cd0LDRg9GA0YvQtycsICfQodOZ0YPRltGAJywgJ9Cc0LDQvNGL0YAnLCAn0JzQsNGD0YHRi9C8JywgJ9Co0ZbQu9C00LUnLCAn0KLQsNC80YvQtycsICfSmtGL0YDQutKv0LnQtdC6JywgJ9Ka0LDQt9Cw0L0nLCAn0prQsNGA0LDRiNCwJywgJ9CW0LXQu9GC0L7Sm9GB0LDQvSddO1xuXHRjYWxlbmRhck90aGVyTGFuZy5uYW1lLm1vbnRocy5yZWR1Y3Rpb24ua3ogPSBbJ9Ka0LDSoycsICfQkNKb0L8nLCAn0J3QsNGDJywgJ9Ch05nRgycsICfQnNCw0LwnLCAn0JzQsNGDJywgJ9Co0ZbQuycsICfQotCw0LwnLCAn0prRi9GAJywgJ9Ka0LDQtycsICfSmtCw0YAnLCAn0JbQtdC7J107XG5cdGNhbGVuZGFyT3RoZXJMYW5nLm5hbWUud2Vlay5reiA9IFsn0KHQuCcsICfQltC1JywgJ9CU0YMnLCAn0KHQuScsICfQodGAJywgJ9CR0LUnLCAn0JbSsSddO1xuXHRjYWxlbmRhck90aGVyTGFuZy5uYW1lLmFycm93LnByZXYua3ogPSAn0JDRgNGC0pvQsCc7XG5cdGNhbGVuZGFyT3RoZXJMYW5nLm5hbWUuYXJyb3cubmV4dC5reiA9ICfQkNC70pPQsCc7XG5cdGNhbGVuZGFyT3RoZXJMYW5nLnNldHRpbmdzLmxhbmcgPSAna3onO1xuXHRjYWxlbmRhck90aGVyTGFuZy5pbml0KCk7XG5cblx0Y29uc3QgY2FsZW5kYXJJU084NjAxID0gbmV3IFZhbmlsbGFDYWxlbmRhcih7XG5cdFx0SFRNTEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhci1pc284NjAxJyksXG5cdFx0c2V0dGluZ3M6IHtcblx0XHRcdGlzbzg2MDE6IGZhbHNlLFxuXHRcdH0sXG5cdH0pO1xuXHRjYWxlbmRhcklTTzg2MDEuaW5pdCgpO1xuXG5cdGNvbnN0IGNhbGVuZGFyRGF0ZVJhbmdlTWluTWF4ID0gbmV3IFZhbmlsbGFDYWxlbmRhcih7XG5cdFx0SFRNTEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhci1kYXRlLXJhbmdlLW1pbm1heCcpLFxuXHRcdGRhdGU6IHtcblx0XHRcdHRvZGF5OiBuZXcgRGF0ZSgnMjAyMi0wMS0wNycpLFxuXHRcdH0sXG5cdFx0c2V0dGluZ3M6IHtcblx0XHRcdHJhbmdlOiB7XG5cdFx0XHRcdG1pbjogJzIwMjItMDEtMDEnLFxuXHRcdFx0XHRtYXg6ICcyMDIyLTAyLTEyJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdGNhbGVuZGFyRGF0ZVJhbmdlTWluTWF4LmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhckRpc2FibGVkRGF0ZXMgPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLWRpc2FibGVkLWRhdGVzJyksXG5cdFx0ZGF0ZToge1xuXHRcdFx0dG9kYXk6IG5ldyBEYXRlKCcyMDIyLTAxLTA3JyksXG5cdFx0fSxcblx0XHRzZXR0aW5nczoge1xuXHRcdFx0cmFuZ2U6IHtcblx0XHRcdFx0bWluOiAnMjAyMi0wMS0wMScsXG5cdFx0XHRcdG1heDogJzIwMjItMDItMTInLFxuXHRcdFx0XHRkaXNhYmxlZDogWycyMDIyLTAxLTIwJywgJzIwMjItMDEtMjUnLCAnMjAyMi0wMS0yNiddLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0Y2FsZW5kYXJEaXNhYmxlZERhdGVzLmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhckRpc2FibGVTZWxlY3Rpb25EYXkgPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLWRpc2FibGUtc2VsZWN0aW9uLWRheScpLFxuXHRcdHNldHRpbmdzOiB7XG5cdFx0XHRzZWxlY3Rpb246IHtcblx0XHRcdFx0ZGF5OiBmYWxzZSxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdGNhbGVuZGFyRGlzYWJsZVNlbGVjdGlvbkRheS5pbml0KCk7XG5cblx0Y29uc3QgY2FsZW5kYXJEaXNhYmxlU2VsZWN0aW9uTW9udGggPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLWRpc2FibGUtc2VsZWN0aW9uLW1vbnRoJyksXG5cdFx0c2V0dGluZ3M6IHtcblx0XHRcdHNlbGVjdGlvbjoge1xuXHRcdFx0XHRtb250aDogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRjYWxlbmRhckRpc2FibGVTZWxlY3Rpb25Nb250aC5pbml0KCk7XG5cblx0Y29uc3QgY2FsZW5kYXJEaXNhYmxlU2VsZWN0aW9uWWVhciA9IG5ldyBWYW5pbGxhQ2FsZW5kYXIoe1xuXHRcdEhUTUxFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItZGlzYWJsZS1zZWxlY3Rpb24teWVhcicpLFxuXHRcdHNldHRpbmdzOiB7XG5cdFx0XHRzZWxlY3Rpb246IHtcblx0XHRcdFx0eWVhcjogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRjYWxlbmRhckRpc2FibGVTZWxlY3Rpb25ZZWFyLmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhck11bHRpcGxlU2VsZWN0RGF5cyA9IG5ldyBWYW5pbGxhQ2FsZW5kYXIoe1xuXHRcdEhUTUxFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItbXVsdGlwbGUtc2VsZWN0LWRheXMnKSxcblx0XHRzZXR0aW5nczoge1xuXHRcdFx0c2VsZWN0aW9uOiB7XG5cdFx0XHRcdGRheTogJ211bHRpcGxlJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdGNhbGVuZGFyTXVsdGlwbGVTZWxlY3REYXlzLmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhclNlbGVjdGVkRGF0ZXMgPSBuZXcgVmFuaWxsYUNhbGVuZGFyKHtcblx0XHRIVE1MRWxlbWVudDogZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbGVuZGFyLXNlbGVjdGVkLWRhdGVzJyksXG5cdFx0c2V0dGluZ3M6IHtcblx0XHRcdHNlbGVjdGlvbjoge1xuXHRcdFx0XHRkYXk6ICdtdWx0aXBsZScsXG5cdFx0XHR9LFxuXHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0ZGF0ZXM6IFsnMjAyMi0wMS0wOScsICcyMDIyLTAxLTEwJywgJzIwMjItMDEtMTEnXSxcblx0XHRcdFx0bW9udGg6IDAsXG5cdFx0XHRcdHllYXI6IDIwMjIsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRjYWxlbmRhclNlbGVjdGVkRGF0ZXMuaW5pdCgpO1xuXG5cdGNvbnN0IGNhbGVuZGFyU2VsZWN0ZWRIb2xpZGF5cyA9IG5ldyBWYW5pbGxhQ2FsZW5kYXIoe1xuXHRcdEhUTUxFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItc2VsZWN0ZWQtaG9saWRheXMnKSxcblx0XHRzZXR0aW5nczoge1xuXHRcdFx0c2VsZWN0ZWQ6IHtcblx0XHRcdFx0bW9udGg6IDAsXG5cdFx0XHRcdHllYXI6IDIwMjIsXG5cdFx0XHRcdGhvbGlkYXlzOiBbXG5cdFx0XHRcdFx0JzIwMjItMDEtMDEnLFxuXHRcdFx0XHRcdCcyMDIyLTAxLTAyJyxcblx0XHRcdFx0XHQnMjAyMi0wMS0wMycsXG5cdFx0XHRcdFx0JzIwMjItMDEtMDQnLFxuXHRcdFx0XHRcdCcyMDIyLTAxLTA1Jyxcblx0XHRcdFx0XHQnMjAyMi0wMS0wNicsXG5cdFx0XHRcdFx0JzIwMjItMDEtMDcnLFxuXHRcdFx0XHRcdCcyMDIyLTAxLTA4Jyxcblx0XHRcdFx0XHQnMjAyMi0wMS0wOScsXG5cdFx0XHRcdFx0JzIwMjItMDEtMTAnLFxuXHRcdFx0XHRdLFxuXHRcdFx0fSxcblx0XHR9LFxuXHR9KTtcblx0Y2FsZW5kYXJTZWxlY3RlZEhvbGlkYXlzLmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhckRpc2FibGVIaWdobGlnaHRXZWVrZW5kID0gbmV3IFZhbmlsbGFDYWxlbmRhcih7XG5cdFx0SFRNTEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhci1kaXNhYmxlLWhpZ2hsaWdodC13ZWVrZW5kJyksXG5cdFx0c2V0dGluZ3M6IHtcblx0XHRcdHZpc2liaWxpdHk6IHtcblx0XHRcdFx0d2Vla2VuZDogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRjYWxlbmRhckRpc2FibGVIaWdobGlnaHRXZWVrZW5kLmluaXQoKTtcblxuXHRjb25zdCBjYWxlbmRhckRpc2FibGVIaWdobGlnaHRUb2RheSA9IG5ldyBWYW5pbGxhQ2FsZW5kYXIoe1xuXHRcdEhUTUxFbGVtZW50OiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItZGlzYWJsZS1oaWdobGlnaHQtdG9kYXknKSxcblx0XHRzZXR0aW5nczoge1xuXHRcdFx0dmlzaWJpbGl0eToge1xuXHRcdFx0XHR0b2RheTogZmFsc2UsXG5cdFx0XHR9LFxuXHRcdH0sXG5cdH0pO1xuXHRjYWxlbmRhckRpc2FibGVIaWdobGlnaHRUb2RheS5pbml0KCk7XG5cblx0Y29uc3QgY2FsZW5kYXJFbmFibGVJbmFjdGl2ZURhdGVzID0gbmV3IFZhbmlsbGFDYWxlbmRhcih7XG5cdFx0SFRNTEVsZW1lbnQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhci1lbmFibGUtaW5hY3RpdmUtZGF0ZXMnKSxcblx0XHRkYXRlOiB7XG5cdFx0XHR0b2RheTogbmV3IERhdGUoJzIwMjItMDEtMTcnKSxcblx0XHR9LFxuXHRcdHNldHRpbmdzOiB7XG5cdFx0XHR2aXNpYmlsaXR5OiB7XG5cdFx0XHRcdGRpc2FibGVkOiB0cnVlLFxuXHRcdFx0fSxcblx0XHRcdHJhbmdlOiB7XG5cdFx0XHRcdG1pbjogJzIwMjItMDEtMDcnLFxuXHRcdFx0XHRtYXg6ICcyMDIyLTAyLTEyJyxcblx0XHRcdH0sXG5cdFx0fSxcblx0fSk7XG5cdGNhbGVuZGFyRW5hYmxlSW5hY3RpdmVEYXRlcy5pbml0KCk7XG5cblx0Ly8gU2Nyb2xsXG5cdGNvbnN0IHNtb290aFNjcm9sbCA9IHtcblx0XHRzY3JvbGwoZSkge1xuXHRcdFx0Y29uc3QgaWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaHJlZicpKTtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblxuXHRcdFx0aWYgKGlkKSB7XG5cdFx0XHRcdGlkLnNjcm9sbEludG9WaWV3KHsgYmxvY2s6ICdzdGFydCcsIGJlaGF2aW9yOiAnc21vb3RoJyB9KTtcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0aGFzQ2xpY2soZSkge1xuXHRcdFx0dGhpcy5zY3JvbGwoZSk7XG5cdFx0fSxcblxuXHRcdGluaXQoKSB7XG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG5cdFx0XHRcdGlmICghZS50YXJnZXQuY2xvc2VzdCgnW2RhdGEtc21vb3RoLXNjcm9sbD1cImxpc3RcIl0gYVtocmVmXj1cIiNcIl0nKSkgcmV0dXJuO1xuXHRcdFx0XHR0aGlzLmhhc0NsaWNrKGUpO1xuXHRcdFx0fSk7XG5cdFx0fSxcblx0fTtcblx0c21vb3RoU2Nyb2xsLmluaXQoKTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9