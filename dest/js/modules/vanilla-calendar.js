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
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************************!*\
  !*** ./src/js/modules/vanilla-calendar.js ***!
  \********************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VanillaCalendar)
/* harmony export */ });
class VanillaCalendar {
	constructor(selector, option) {
		this.HTMLElement = document.querySelector(selector);
		if (!this.HTMLElement) return;
		this.type = option?.type ?? 'default';
		this.title = option.title ?? '';
		this.date = {
			min: option?.date?.min ?? '1970-01-01',
			max: option?.date?.max ?? '2470-12-31',
			today: option?.date?.today ?? new Date(),
		};
		this.settings = {
			lang: option?.settings?.lang ?? 'en',
			iso8601: option?.settings?.iso8601 ?? true,
			range: {
				min: option?.settings?.range?.min ?? this.date.min,
				max: option?.settings?.range?.max ?? this.date.max,
				disabled: option?.settings?.range?.disabled ?? null,
			},
			selection: {
				day: option?.settings?.selection?.day ?? 'single',
				month: option?.settings?.selection?.month ?? true,
				year: option?.settings?.selection?.year ?? true,
			},
			selected: {
				active: option.settings?.selected?.active ?? null,
				dates: option?.settings?.selected?.dates ?? null,
				month: option?.settings?.selected?.month ?? null,
				year: option?.settings?.selected?.year ?? null,
				holidays: option?.settings?.selected?.holidays ?? null,
			},
			visibility: {
				monthShort: option?.settings?.visibility?.monthShort ?? true,
				weekNumbers: option?.settings?.visibility?.weekNumbers ?? false,
				weekend: option?.settings?.visibility?.weekend ?? true,
				today: option?.settings?.visibility?.today ?? true,
				disabled: option?.settings?.visibility?.disabled ?? false,
			},
		};
		this.locale = {
			months: option?.locale?.months ?? [],
			weekday: option?.locale?.weekday ?? [],
		};
		this.actions = {
			clickDay: option?.actions?.clickDay ?? null,
			clickMonth: option?.actions?.clickMonth ?? null,
			clickYear: option?.actions?.clickYear ?? null,
		};
		this.popups = option?.popups ?? null;

		this.currentType = this.type;
		this.currentTitle = this.title;
	}

	setVariablesDates() {
		this.activeDates = [];
		this.selectedDates = [];
		this.selectedMonth = this.date.today.getUTCMonth();
		this.selectedYear = this.date.today.getUTCFullYear();

		if (this.settings.selected.dates !== null) {
			this.selectedDates = this.settings.selected.dates;
		}

		if (this.settings.selected.active !== null) {
			this.activeDates = this.settings.selected.active;
		}

		if (this.settings.selected.month !== null && this.settings.selected.month >= 0 && this.settings.selected.month < 12) {
			this.selectedMonth = this.settings.selected.month;
		}

		if (this.settings.selected.year !== null && this.settings.selected.year >= 0 && this.settings.selected.year <= 9999) {
			this.selectedYear = this.settings.selected.year;
		}

		this.viewYear = this.selectedYear;
		this.dateMin = this.settings.visibility.disabled ? new Date(this.date.min) : new Date(this.settings.range.min);
		this.dateMax = this.settings.visibility.disabled ? new Date(this.date.max) : new Date(this.settings.range.max);
	}

	createDOM() {
		if (this.currentType === 'default') {
			this.HTMLElement.classList.add('vanilla-calendar_default');
			this.HTMLElement.classList.remove('vanilla-calendar_month');
			this.HTMLElement.classList.remove('vanilla-calendar_year');
			this.HTMLElement.innerHTML = `
			<div class="vanilla-calendar-header vanilla-calendar-header-main">
				<div class="vanilla-calendar-header-title">
					${this.currentTitle}
				</div>
				<div class="vanilla-calendar-header-controls">
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_prev"
					title="prev">
				</button>
				<div class="vanilla-calendar-header__content">
					<b class="vanilla-calendar-month${this.settings.selection.month ? '' : ' vanilla-calendar-month_disabled'}"></b>
					<b class="vanilla-calendar-year${this.settings.selection.year ? '' : ' vanilla-calendar-year_disabled'}"></b>
				</div>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next"
					title="next">
				</button>
			</div>
			${this.settings.visibility.weekNumbers ? `
			<div class="vanilla-calendar-column">
				<div class="vanilla-calendar-column__title">#</div>
				<div class="vanilla-calendar-column__content vanilla-calendar-week-numbers"></div>
			</div>
			` : ''}
			<div class="vanilla-calendar-content">
				<div class="vanilla-calendar-week"></div>
				<div class="vanilla-calendar-days"></div>
			</div>
		`;
		} else if (this.currentType === 'month') {
			this.HTMLElement.classList.remove('vanilla-calendar_default');
			this.HTMLElement.classList.add('vanilla-calendar_month');
			this.HTMLElement.classList.remove('vanilla-calendar_year');
			this.HTMLElement.innerHTML = `
			<div class="vanilla-calendar-header">
				<div class="vanilla-calendar-header__content">
					<b class="vanilla-calendar-month"></b>
					<b class="vanilla-calendar-year vanilla-calendar-year_not-active${this.settings.selection.year ? '' : ' vanilla-calendar-year_disabled'}"></b>
				</div>
			</div>
			<div class="vanilla-calendar-content">
				<div class="vanilla-calendar-months"></div>
			</div>`;
		} else if (this.currentType === 'year') {
			this.HTMLElement.classList.remove('vanilla-calendar_default');
			this.HTMLElement.classList.remove('vanilla-calendar_month');
			this.HTMLElement.classList.add('vanilla-calendar_year');
			this.HTMLElement.innerHTML = `
			<div class="vanilla-calendar-header">
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_prev"
					title="prev">
				</button>
				<div class="vanilla-calendar-header__content">
					<b class="vanilla-calendar-month vanilla-calendar-month_not-active${this.settings.selection.month ? '' : ' vanilla-calendar-month_disabled'}"></b>
					<b class="vanilla-calendar-year"></b>
				</div>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next"
					title="next">
				</button>
			</div>
			<div class="vanilla-calendar-content">
				<div class="vanilla-calendar-years"></div>
			</div>`;
		}
	}

	generateDate(date) {
		const year = date.getUTCFullYear();
		let month = date.getUTCMonth() + 1;
		let day = date.getUTCDate();

		month = month < 10 ? `0${month}` : month;
		day = day < 10 ? `0${day}` : day;

		return `${year}-${month}-${day}`;
	}

	controlArrows() {
		if (!['default', 'year'].includes(this.currentType)) return;

		const arrowPrev = this.HTMLElement.querySelector('.vanilla-calendar-arrow_prev');
		const arrowNext = this.HTMLElement.querySelector('.vanilla-calendar-arrow_next');

		const defaultControl = () => {
			if (this.currentType !== 'default') return;

			const isSelectedMinMount = this.selectedMonth === this.dateMin.getUTCMonth();
			const isSelectedMaxMount = this.selectedMonth === this.dateMax.getUTCMonth();
			const isSelectedMinYear = this.selectedYear === this.dateMin.getUTCFullYear();
			const isSelectedMaxYear = this.selectedYear === this.dateMax.getUTCFullYear();

			if ((isSelectedMinMount && isSelectedMinYear) || !this.settings.selection.month) {
				arrowPrev.style.visibility = 'hidden';
			} else {
				arrowPrev.style.visibility = null;
			}
			if ((isSelectedMaxMount && isSelectedMaxYear) || !this.settings.selection.month) {
				arrowNext.style.visibility = 'hidden';
			} else {
				arrowNext.style.visibility = null;
			}
		};

		const yearControl = () => {
			if (this.currentType !== 'year') return;

			if (this.dateMin.getUTCFullYear() && (this.viewYear - 7) <= this.dateMin.getUTCFullYear()) {
				arrowPrev.style.visibility = 'hidden';
			} else {
				arrowPrev.style.visibility = null;
			}

			if (this.dateMax.getUTCFullYear() && (this.viewYear + 7) >= this.dateMax.getUTCFullYear()) {
				arrowNext.style.visibility = 'hidden';
			} else {
				arrowNext.style.visibility = null;
			}
		};

		defaultControl();
		yearControl();
	}

	writeYear() {
		const yearEl = this.HTMLElement.querySelector('.vanilla-calendar-year');
		yearEl.innerText = this.selectedYear;
	}

	writeMonth() {
		const monthEl = this.HTMLElement.querySelector('.vanilla-calendar-month');
		monthEl.innerText = this.locale.months[this.selectedMonth];
	}

	createWeek() {
		const weekEl = this.HTMLElement.querySelector('.vanilla-calendar-week');
		const templateWeekDayEl = document.createElement('span');
		templateWeekDayEl.className = 'vanilla-calendar-week__day';

		const weekday = [...this.locale.weekday];
		if (this.settings.iso8601) weekday.push(weekday.shift());

		weekEl.innerHTML = '';

		for (let i = 0; i < weekday.length; i++) {
			const weekDayName = weekday[i];
			const weekDayEl = templateWeekDayEl.cloneNode(true);

			if (this.settings.visibility.weekend && this.settings.iso8601) {
				if (i === 5 || i === 6) {
					weekDayEl.classList.add('vanilla-calendar-week__day_weekend');
				}
			} else if (this.settings.visibility.weekend && !this.settings.iso8601) {
				if (i === 0 || i === 6) {
					weekDayEl.classList.add('vanilla-calendar-week__day_weekend');
				}
			}

			weekDayEl.innerText = `${weekDayName}`;
			weekEl.append(weekDayEl);
		}
	}

	getWeekNumber(date) {
		const day = new Date(date).getUTCDate();
		const month = new Date(date).getUTCMonth();
		const year = new Date(date).getUTCFullYear();
		const correctDate = new Date(year, month, day);
		const yearStart = new Date(Date.UTC(correctDate.getUTCFullYear(), 0, 1));
		const weekNumber = Math.ceil((((correctDate - yearStart) / 86400000) + 1) / 7);
		return {
			year: correctDate.getUTCFullYear(),
			week: weekNumber,
		};
	}

	createWeekNumbers(firstDayWeek, daysSelectedMonth) {
		if (!this.settings.visibility.weekNumbers) return;
		const weekNumbersEl = this.HTMLElement.querySelector('.vanilla-calendar-week-numbers');
		const daysEl = this.HTMLElement.querySelectorAll('.vanilla-calendar-day');
		const countWeek = Math.ceil((firstDayWeek + daysSelectedMonth) / 7);
		const templateWeekNumberEl = document.createElement('span');
		templateWeekNumberEl.className = 'vanilla-calendar-week-number';

		weekNumbersEl.innerHTML = '';

		for (let i = 0; i < countWeek; i++) {
			const weekNumber = this.getWeekNumber(daysEl[i * 7].dataset.calendarDay);
			const weekNumberEl = templateWeekNumberEl.cloneNode(true);
			weekNumberEl.innerText = `${weekNumber.week}`;
			weekNumberEl.dataset.calendarYear = `${weekNumber.year}`;
			weekNumbersEl.append(weekNumberEl);
		}
	}

	createPopup(daysEl) {
		if (!this.popups) return;

		// eslint-disable-next-line no-restricted-syntax
		for (const day in this.popups) {
			if (Object.hasOwnProperty.call(this.popups, day)) {
				const dayEl = daysEl.querySelector(`[data-calendar-day="${day}"]`);
				if (!dayEl) return;

				const dayInfo = this.popups[day];
				dayEl.classList.add(dayInfo.modifier);
				dayEl.innerHTML += `<div class="vanilla-calendar-day__popup">${dayInfo.html}</div>`;
			}
		}
	}

	createDays() {
		const firstDay = new Date(Date.UTC(this.selectedYear, this.selectedMonth, 1));
		const daysSelectedMonth = new Date(Date.UTC(this.selectedYear, this.selectedMonth + 1, 0)).getUTCDate();

		let firstDayWeek = Number(firstDay.getUTCDay());
		if (this.settings.iso8601) firstDayWeek = Number((firstDay.getUTCDay() !== 0 ? firstDay.getUTCDay() : 7) - 1);

		const daysEl = this.HTMLElement.querySelector('.vanilla-calendar-days');
		const templateDayEl = document.createElement('div');
		templateDayEl.className = 'vanilla-calendar-day';

		if (['single', 'multiple', 'multiple-ranged'].includes(this.settings.selection.day)) {
			daysEl.classList.add('vanilla-calendar-days_selecting');
		}

		daysEl.innerHTML = '';

		const setDayModifier = (dayEl, dayID, date) => {
			// if weekend
			if (this.settings.visibility.weekend && (dayID === 0 || dayID === 6)) {
				dayEl.classList.add('vanilla-calendar-day_weekend');
			}

			// if holidays
			if (Array.isArray(this.settings.selected.holidays)) {
				this.settings.selected.holidays.forEach((holiday) => {
					if (holiday === date) {
						dayEl.classList.add('vanilla-calendar-day_holiday');
					}
				});
			}

			// if today
			let thisToday = this.date.today.getUTCDate();
			let thisMonth = this.date.today.getUTCMonth() + 1;
			thisToday = thisToday < 10 ? `0${thisToday}` : thisToday;
			thisMonth = thisMonth < 10 ? `0${thisMonth}` : thisMonth;

			const thisDay = `${this.date.today.getUTCFullYear()}-${thisMonth}-${thisToday}`;

			if (this.settings.visibility.today && dayEl.dataset.calendarDay === thisDay) {
				dayEl.classList.add('vanilla-calendar-day_today');
			}

			// if selected day
			if (this.selectedDates.find((selectedDate) => selectedDate === date)) {
				dayEl.classList.add('vanilla-calendar-day_selected');
			}

			// if active day
			if (this.activeDates.find((selectedDate) => selectedDate === date)) {
				dayEl.classList.add('vanilla-calendar-day_active');
			}


			// if range min/max
			if (this.settings.range.min > date || this.settings.range.max < date) {
				dayEl.classList.add('vanilla-calendar-day_disabled');
			}

			// if range values
			if (Array.isArray(this.settings.range.disabled)) {
				this.settings.range.disabled.forEach((dateDisabled) => {
					if (dateDisabled === date) {
						dayEl.classList.add('vanilla-calendar-day_disabled');
					}
				});
			}
		};

		const prevMonth = () => {
			const prevMonthDays = new Date(Date.UTC(this.selectedYear, this.selectedMonth, 0)).getUTCDate();
			let day = prevMonthDays - firstDayWeek;
			let year = this.selectedYear;
			let month = this.selectedMonth;

			if (this.selectedMonth === 0) {
				month = this.locale.months.length;
				year = this.selectedYear - 1;
			} else if (this.selectedMonth < 10) {
				month = `0${this.selectedMonth}`;
			}

			for (let i = 0; i < firstDayWeek; i++) {
				day += 1;

				const date = `${year}-${month}-${day}`;
				const dayIDCurrent = new Date(Date.UTC(this.selectedYear, this.selectedMonth, day - 1));
				const prevMonthID = dayIDCurrent.getUTCMonth() - 1;
				const dayID = new Date(Date.UTC(this.selectedYear, prevMonthID, day)).getUTCDay();

				const dayEl = templateDayEl.cloneNode(true);
				dayEl.classList.add('vanilla-calendar-day_prev');
				dayEl.innerText = `${day}`;
				dayEl.dataset.calendarDay = date;

				setDayModifier(dayEl, dayID, date);
				daysEl.append(dayEl);
			}
		};

		const selectedMonth = () => {
			for (let i = 1; i <= daysSelectedMonth; i++) {
				const day = new Date(Date.UTC(this.selectedYear, this.selectedMonth, i));

				const date = this.generateDate(day);
				const dayID = day.getUTCDay();

				const dayEl = templateDayEl.cloneNode(true);
				dayEl.innerText = `${i}`;
				dayEl.dataset.calendarDay = date;

				setDayModifier(dayEl, dayID, date);
				daysEl.append(dayEl);
			}
		};

		const nextMonth = () => {
			const total = firstDayWeek + daysSelectedMonth;
			const rows = Math.ceil(total / this.locale.weekday.length);
			const nextDays = (this.locale.weekday.length * rows) - total;

			let year = this.selectedYear;
			let month = this.selectedMonth + 2;

			if ((this.selectedMonth + 1) === this.locale.months.length) {
				month = '01';
				year = this.selectedYear + 1;
			} else if ((this.selectedMonth + 2) < 10) {
				month = `0${this.selectedMonth + 2}`;
			}

			for (let i = 1; i <= nextDays; i++) {
				const day = i < 10 ? `0${i}` : i;

				const date = `${year}-${month}-${day}`;
				const dayIDCurrent = new Date(Date.UTC(this.selectedYear, this.selectedMonth, i));
				const nextMonthID = dayIDCurrent.getUTCMonth() + 1;
				const dayID = new Date(Date.UTC(this.selectedYear, nextMonthID, i)).getUTCDay();

				const dayEl = templateDayEl.cloneNode(true);
				dayEl.classList.add('vanilla-calendar-day_next');
				dayEl.innerText = `${i}`;
				dayEl.dataset.calendarDay = date;

				setDayModifier(dayEl, dayID, date);
				daysEl.append(dayEl);
			}
		};

		prevMonth();
		selectedMonth();
		nextMonth();
		this.createPopup(daysEl);
		this.createWeekNumbers(firstDayWeek, daysSelectedMonth);
	}

	changeMonth(route) {
		const lastMonth = this.locale.months.length - 1;

		switch (route) {
			case 'prev':
				if (this.selectedMonth !== 0) {
					this.selectedMonth -= 1;
				} else if (this.settings.selection.year) {
					this.selectedYear -= 1;
					this.selectedMonth = lastMonth;
				}
				break;
			case 'next':
				if (this.selectedMonth !== lastMonth) {
					this.selectedMonth += 1;
				} else if (this.settings.selection.year) {
					this.selectedYear += 1;
					this.selectedMonth = 0;
				}
				break;
			// no default
		}

		this.settings.selected.month = this.selectedMonth;

		this.controlArrows();
		this.writeYear();
		this.writeMonth();
		this.createDays();
	}

	createYears() {
		this.currentType = 'year';
		this.createDOM();
		this.controlArrows();
		this.writeYear();
		this.writeMonth();

		const yearsEl = this.HTMLElement.querySelector('.vanilla-calendar-years');
		if (this.settings.selection.year) yearsEl.classList.add('vanilla-calendar-years_selecting');
		const templateYearEl = document.createElement('span');
		templateYearEl.className = 'vanilla-calendar-years__year';

		for (let i = this.viewYear - 7; i < this.viewYear + 8; i++) {
			const year = i;
			const yearEl = templateYearEl.cloneNode(true);

			if (year === this.selectedYear) {
				yearEl.classList.add('vanilla-calendar-years__year_selected');
			}
			if (year < this.dateMin.getUTCFullYear()) {
				yearEl.classList.add('vanilla-calendar-years__year_disabled');
			}
			if (year > this.dateMax.getUTCFullYear()) {
				yearEl.classList.add('vanilla-calendar-years__year_disabled');
			}

			yearEl.dataset.calendarYear = year;
			yearEl.innerText = `${year}`;
			yearsEl.append(yearEl);
		}
	}

	createMonths() {
		this.currentType = 'month';
		this.createDOM();
		this.writeYear();
		this.writeMonth();

		const monthsEl = this.HTMLElement.querySelector('.vanilla-calendar-months');
		if (this.settings.selection.month) monthsEl.classList.add('vanilla-calendar-months_selecting');

		const templateMonthEl = document.createElement('span');
		templateMonthEl.className = 'vanilla-calendar-months__month';

		for (let i = 0; i < this.locale.months.length; i++) {
			const month = this.locale.months[i];
			const monthEl = templateMonthEl.cloneNode(true);

			if (i === this.selectedMonth) {
				monthEl.classList.add('vanilla-calendar-months__month_selected');
			}
			if (i < this.dateMin.getUTCMonth() && this.selectedYear === this.dateMin.getUTCFullYear()) {
				monthEl.classList.add('vanilla-calendar-months__month_disabled');
			}
			if (i > this.dateMax.getUTCMonth() && this.selectedYear === this.dateMax.getUTCFullYear()) {
				monthEl.classList.add('vanilla-calendar-months__month_disabled');
			}

			monthEl.dataset.calendarMonth = i;

			monthEl.title = `${month}`;
			monthEl.innerText = `${this.settings.visibility.monthShort ? month.substring(0, 3) : month}`;
			monthsEl.append(monthEl);
		}
	}

	getLocale() {
		if (this.settings.lang === 'define') return;

		this.locale.weekday = [];
		for (let i = 0; i < 7; i++) {
			let weekday = new Date(0, 0, i).toLocaleString(this.settings.lang, { weekday: 'short' });
			weekday = `${weekday.charAt(0).toUpperCase()}${weekday.substring(1, weekday.length)}`;
			weekday = weekday.replace(/\./, '');
			this.locale.weekday.push(weekday);
		}

		this.locale.months = [];
		for (let i = 0; i < 12; i++) {
			let month = new Date(0, i).toLocaleString(this.settings.lang, { month: 'long' });
			month = `${month.charAt(0).toUpperCase()}${month.substring(1, month.length)}`;
			month = month.replace(/\./, '');
			this.locale.months.push(month);
		}
	}

	update() {
		this.setVariablesDates();
		this.createDOM();
		this.controlArrows();
		this.getLocale();
		this.writeYear();
		this.writeMonth();
		if (this.currentType === 'default') {
			this.createWeek();
			this.createDays();
		} else if (this.currentType === 'month') {
			this.createMonths();
		} else if (this.currentType === 'year') {
			this.createYears();
		}
	}

	click() {
		this.HTMLElement.addEventListener('click', (e) => {
			const arrowEl = e.target.closest('.vanilla-calendar-arrow');
			const arrowPrevEl = e.target.closest('.vanilla-calendar-arrow_prev');
			const arrowNextEl = e.target.closest('.vanilla-calendar-arrow_next');
			const dayEl = e.target.closest('.vanilla-calendar-day');
			const dayPrevEl = e.target.closest('.vanilla-calendar-day_prev');
			const dayNextEl = e.target.closest('.vanilla-calendar-day_next');
			const yearHeaderEl = e.target.closest('.vanilla-calendar-year');
			const yearItemEl = e.target.closest('.vanilla-calendar-years__year');
			const monthHeaderEl = e.target.closest('.vanilla-calendar-month');
			const monthItemEl = e.target.closest('.vanilla-calendar-months__month');

			const clickDaySingle = () => {
				if (dayEl.classList.contains('vanilla-calendar-day_selected')) {
					this.selectedDates.splice(this.selectedDates.indexOf(dayEl.dataset.calendarDay), 1);
				} else {
					this.selectedDates = [];
					this.selectedDates.push(dayEl.dataset.calendarDay);
				}
			};

			const clickDayMultiple = () => {
				if (dayEl.classList.contains('vanilla-calendar-day_selected')) {
					this.selectedDates.splice(this.selectedDates.indexOf(dayEl.dataset.calendarDay), 1);
				} else {
					this.selectedDates.push(dayEl.dataset.calendarDay);
				}
			};

			const clickDayMultipleRanged = () => {
				if (this.selectedDates.length > 1) this.selectedDates = [];
				this.selectedDates.push(dayEl.dataset.calendarDay);

				if (!this.selectedDates[1]) return;

				const startDate = new Date(Date.UTC(
					new Date(this.selectedDates[0]).getUTCFullYear(),
					new Date(this.selectedDates[0]).getUTCMonth(),
					new Date(this.selectedDates[0]).getUTCDate(),
				));

				const endDate = new Date(Date.UTC(
					new Date(this.selectedDates[1]).getUTCFullYear(),
					new Date(this.selectedDates[1]).getUTCMonth(),
					new Date(this.selectedDates[1]).getUTCDate(),
				));

				const addSelectedDate = (day) => {
					const date = this.generateDate(day);
					if (this.settings.range.disabled && this.settings.range.disabled.includes(date)) return;
					this.selectedDates.push(date);
				};

				this.selectedDates = [];

				if (endDate > startDate) {
					for (let i = startDate; i <= endDate; i.setUTCDate(i.getUTCDate() + 1)) {
						addSelectedDate(i);
					}
				} else {
					for (let i = startDate; i >= endDate; i.setUTCDate(i.getUTCDate() - 1)) {
						addSelectedDate(i);
					}
				}
			};

			const clickDay = () => {
				if (['single', 'multiple', 'multiple-ranged'].includes(this.settings.selection.day) && dayEl) {
					switch (this.settings.selection.day) {
						case 'single':
							clickDaySingle();
							break;
						case 'multiple':
							clickDayMultiple();
							break;
						case 'multiple-ranged':
							clickDayMultipleRanged();
							break;
						// no default
					}

					if (this.actions.clickDay) this.actions.clickDay(e);
					this.settings.selected.dates = this.selectedDates;

					if (dayPrevEl) {
						this.changeMonth('prev');
					} else if (dayNextEl) {
						this.changeMonth('next');
					} else {
						this.createDays();
					}
				} else if (arrowEl && this.currentType !== 'year' && this.currentType !== 'month') {
					this.changeMonth(e.target.title);
				}
			};

			const clickYear = () => {
				if (!this.settings.selection.year) return;
				if (arrowEl && this.currentType === 'year') {
					if (arrowNextEl) {
						this.viewYear += 15;
					} else if (arrowPrevEl) {
						this.viewYear -= 15;
					}
					this.createYears();
				} else if (this.currentType !== 'year' && yearHeaderEl) {
					this.createYears();
				} else if (this.currentType === 'year' && yearHeaderEl) {
					this.currentType = this.type;
					this.update();
				} else if (yearItemEl) {
					const year = Number(yearItemEl.dataset.calendarYear);
					this.currentType = this.type;
					if (this.selectedMonth < this.dateMin.getUTCMonth() && year === this.dateMin.getUTCFullYear()) {
						this.settings.selected.month = this.dateMin.getUTCMonth();
					}
					if (this.selectedMonth > this.dateMax.getUTCMonth() && year === this.dateMax.getUTCFullYear()) {
						this.settings.selected.month = this.dateMax.getUTCMonth();
					}
					this.settings.selected.year = year;
					if (this.actions.clickYear) this.actions.clickYear(e);
					this.update();
				}
			};

			const clickMonth = () => {
				if (!this.settings.selection.month) return;
				if (this.currentType !== 'month' && monthHeaderEl) {
					this.createMonths();
				} else if (this.currentType === 'month' && monthHeaderEl) {
					this.currentType = this.type;
					this.update();
				} else if (monthItemEl) {
					const month = Number(monthItemEl.dataset.calendarMonth);
					this.currentType = this.type;
					this.settings.selected.month = month;
					if (this.actions.clickMonth) this.actions.clickMonth(e);
					this.update();
				}
			};

			clickDay();
			clickYear();
			clickMonth();
		});
	}

	init() {
		if (!this.HTMLElement) return;
		this.update();
		this.click();
	}
}

window.VanillaCalendar = VanillaCalendar;

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QSxJQUFJO0FBQ0o7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0EsTUFBTTtBQUNOLDZCQUE2QixjQUFjO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktbGlicmFyeS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vbXktbGlicmFyeS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS1saWJyYXJ5L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbXktbGlicmFyeS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LWxpYnJhcnkvLi9zcmMvanMvbW9kdWxlcy92YW5pbGxhLWNhbGVuZGFyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIm15LWxpYnJhcnlcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wibXktbGlicmFyeVwiXSA9IGZhY3RvcnkoKTtcbn0pKHNlbGYsICgpID0+IHtcbnJldHVybiAiLCIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFZhbmlsbGFDYWxlbmRhciB7XG5cdGNvbnN0cnVjdG9yKHNlbGVjdG9yLCBvcHRpb24pIHtcblx0XHR0aGlzLkhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3Rvcik7XG5cdFx0aWYgKCF0aGlzLkhUTUxFbGVtZW50KSByZXR1cm47XG5cdFx0dGhpcy50eXBlID0gb3B0aW9uPy50eXBlID8/ICdkZWZhdWx0Jztcblx0XHR0aGlzLnRpdGxlID0gb3B0aW9uLnRpdGxlID8/ICcnO1xuXHRcdHRoaXMuZGF0ZSA9IHtcblx0XHRcdG1pbjogb3B0aW9uPy5kYXRlPy5taW4gPz8gJzE5NzAtMDEtMDEnLFxuXHRcdFx0bWF4OiBvcHRpb24/LmRhdGU/Lm1heCA/PyAnMjQ3MC0xMi0zMScsXG5cdFx0XHR0b2RheTogb3B0aW9uPy5kYXRlPy50b2RheSA/PyBuZXcgRGF0ZSgpLFxuXHRcdH07XG5cdFx0dGhpcy5zZXR0aW5ncyA9IHtcblx0XHRcdGxhbmc6IG9wdGlvbj8uc2V0dGluZ3M/LmxhbmcgPz8gJ2VuJyxcblx0XHRcdGlzbzg2MDE6IG9wdGlvbj8uc2V0dGluZ3M/Lmlzbzg2MDEgPz8gdHJ1ZSxcblx0XHRcdHJhbmdlOiB7XG5cdFx0XHRcdG1pbjogb3B0aW9uPy5zZXR0aW5ncz8ucmFuZ2U/Lm1pbiA/PyB0aGlzLmRhdGUubWluLFxuXHRcdFx0XHRtYXg6IG9wdGlvbj8uc2V0dGluZ3M/LnJhbmdlPy5tYXggPz8gdGhpcy5kYXRlLm1heCxcblx0XHRcdFx0ZGlzYWJsZWQ6IG9wdGlvbj8uc2V0dGluZ3M/LnJhbmdlPy5kaXNhYmxlZCA/PyBudWxsLFxuXHRcdFx0fSxcblx0XHRcdHNlbGVjdGlvbjoge1xuXHRcdFx0XHRkYXk6IG9wdGlvbj8uc2V0dGluZ3M/LnNlbGVjdGlvbj8uZGF5ID8/ICdzaW5nbGUnLFxuXHRcdFx0XHRtb250aDogb3B0aW9uPy5zZXR0aW5ncz8uc2VsZWN0aW9uPy5tb250aCA/PyB0cnVlLFxuXHRcdFx0XHR5ZWFyOiBvcHRpb24/LnNldHRpbmdzPy5zZWxlY3Rpb24/LnllYXIgPz8gdHJ1ZSxcblx0XHRcdH0sXG5cdFx0XHRzZWxlY3RlZDoge1xuXHRcdFx0XHRhY3RpdmU6IG9wdGlvbi5zZXR0aW5ncz8uc2VsZWN0ZWQ/LmFjdGl2ZSA/PyBudWxsLFxuXHRcdFx0XHRkYXRlczogb3B0aW9uPy5zZXR0aW5ncz8uc2VsZWN0ZWQ/LmRhdGVzID8/IG51bGwsXG5cdFx0XHRcdG1vbnRoOiBvcHRpb24/LnNldHRpbmdzPy5zZWxlY3RlZD8ubW9udGggPz8gbnVsbCxcblx0XHRcdFx0eWVhcjogb3B0aW9uPy5zZXR0aW5ncz8uc2VsZWN0ZWQ/LnllYXIgPz8gbnVsbCxcblx0XHRcdFx0aG9saWRheXM6IG9wdGlvbj8uc2V0dGluZ3M/LnNlbGVjdGVkPy5ob2xpZGF5cyA/PyBudWxsLFxuXHRcdFx0fSxcblx0XHRcdHZpc2liaWxpdHk6IHtcblx0XHRcdFx0bW9udGhTaG9ydDogb3B0aW9uPy5zZXR0aW5ncz8udmlzaWJpbGl0eT8ubW9udGhTaG9ydCA/PyB0cnVlLFxuXHRcdFx0XHR3ZWVrTnVtYmVyczogb3B0aW9uPy5zZXR0aW5ncz8udmlzaWJpbGl0eT8ud2Vla051bWJlcnMgPz8gZmFsc2UsXG5cdFx0XHRcdHdlZWtlbmQ6IG9wdGlvbj8uc2V0dGluZ3M/LnZpc2liaWxpdHk/LndlZWtlbmQgPz8gdHJ1ZSxcblx0XHRcdFx0dG9kYXk6IG9wdGlvbj8uc2V0dGluZ3M/LnZpc2liaWxpdHk/LnRvZGF5ID8/IHRydWUsXG5cdFx0XHRcdGRpc2FibGVkOiBvcHRpb24/LnNldHRpbmdzPy52aXNpYmlsaXR5Py5kaXNhYmxlZCA/PyBmYWxzZSxcblx0XHRcdH0sXG5cdFx0fTtcblx0XHR0aGlzLmxvY2FsZSA9IHtcblx0XHRcdG1vbnRoczogb3B0aW9uPy5sb2NhbGU/Lm1vbnRocyA/PyBbXSxcblx0XHRcdHdlZWtkYXk6IG9wdGlvbj8ubG9jYWxlPy53ZWVrZGF5ID8/IFtdLFxuXHRcdH07XG5cdFx0dGhpcy5hY3Rpb25zID0ge1xuXHRcdFx0Y2xpY2tEYXk6IG9wdGlvbj8uYWN0aW9ucz8uY2xpY2tEYXkgPz8gbnVsbCxcblx0XHRcdGNsaWNrTW9udGg6IG9wdGlvbj8uYWN0aW9ucz8uY2xpY2tNb250aCA/PyBudWxsLFxuXHRcdFx0Y2xpY2tZZWFyOiBvcHRpb24/LmFjdGlvbnM/LmNsaWNrWWVhciA/PyBudWxsLFxuXHRcdH07XG5cdFx0dGhpcy5wb3B1cHMgPSBvcHRpb24/LnBvcHVwcyA/PyBudWxsO1xuXG5cdFx0dGhpcy5jdXJyZW50VHlwZSA9IHRoaXMudHlwZTtcblx0XHR0aGlzLmN1cnJlbnRUaXRsZSA9IHRoaXMudGl0bGU7XG5cdH1cblxuXHRzZXRWYXJpYWJsZXNEYXRlcygpIHtcblx0XHR0aGlzLmFjdGl2ZURhdGVzID0gW107XG5cdFx0dGhpcy5zZWxlY3RlZERhdGVzID0gW107XG5cdFx0dGhpcy5zZWxlY3RlZE1vbnRoID0gdGhpcy5kYXRlLnRvZGF5LmdldFVUQ01vbnRoKCk7XG5cdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLmRhdGUudG9kYXkuZ2V0VVRDRnVsbFllYXIoKTtcblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnNlbGVjdGVkLmRhdGVzICE9PSBudWxsKSB7XG5cdFx0XHR0aGlzLnNlbGVjdGVkRGF0ZXMgPSB0aGlzLnNldHRpbmdzLnNlbGVjdGVkLmRhdGVzO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnNlbGVjdGVkLmFjdGl2ZSAhPT0gbnVsbCkge1xuXHRcdFx0dGhpcy5hY3RpdmVEYXRlcyA9IHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWQuYWN0aXZlO1xuXHRcdH1cblxuXHRcdGlmICh0aGlzLnNldHRpbmdzLnNlbGVjdGVkLm1vbnRoICE9PSBudWxsICYmIHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWQubW9udGggPj0gMCAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdGVkLm1vbnRoIDwgMTIpIHtcblx0XHRcdHRoaXMuc2VsZWN0ZWRNb250aCA9IHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWQubW9udGg7XG5cdFx0fVxuXG5cdFx0aWYgKHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWQueWVhciAhPT0gbnVsbCAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdGVkLnllYXIgPj0gMCAmJiB0aGlzLnNldHRpbmdzLnNlbGVjdGVkLnllYXIgPD0gOTk5OSkge1xuXHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgPSB0aGlzLnNldHRpbmdzLnNlbGVjdGVkLnllYXI7XG5cdFx0fVxuXG5cdFx0dGhpcy52aWV3WWVhciA9IHRoaXMuc2VsZWN0ZWRZZWFyO1xuXHRcdHRoaXMuZGF0ZU1pbiA9IHRoaXMuc2V0dGluZ3MudmlzaWJpbGl0eS5kaXNhYmxlZCA/IG5ldyBEYXRlKHRoaXMuZGF0ZS5taW4pIDogbmV3IERhdGUodGhpcy5zZXR0aW5ncy5yYW5nZS5taW4pO1xuXHRcdHRoaXMuZGF0ZU1heCA9IHRoaXMuc2V0dGluZ3MudmlzaWJpbGl0eS5kaXNhYmxlZCA/IG5ldyBEYXRlKHRoaXMuZGF0ZS5tYXgpIDogbmV3IERhdGUodGhpcy5zZXR0aW5ncy5yYW5nZS5tYXgpO1xuXHR9XG5cblx0Y3JlYXRlRE9NKCkge1xuXHRcdGlmICh0aGlzLmN1cnJlbnRUeXBlID09PSAnZGVmYXVsdCcpIHtcblx0XHRcdHRoaXMuSFRNTEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndmFuaWxsYS1jYWxlbmRhcl9kZWZhdWx0Jyk7XG5cdFx0XHR0aGlzLkhUTUxFbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ3ZhbmlsbGEtY2FsZW5kYXJfbW9udGgnKTtcblx0XHRcdHRoaXMuSFRNTEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmFuaWxsYS1jYWxlbmRhcl95ZWFyJyk7XG5cdFx0XHR0aGlzLkhUTUxFbGVtZW50LmlubmVySFRNTCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLWhlYWRlciB2YW5pbGxhLWNhbGVuZGFyLWhlYWRlci1tYWluXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLWhlYWRlci10aXRsZVwiPlxuXHRcdFx0XHRcdCR7dGhpcy5jdXJyZW50VGl0bGV9XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1oZWFkZXItY29udHJvbHNcIj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItYXJyb3cgdmFuaWxsYS1jYWxlbmRhci1hcnJvd19wcmV2XCJcblx0XHRcdFx0XHR0aXRsZT1cInByZXZcIj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLWhlYWRlcl9fY29udGVudFwiPlxuXHRcdFx0XHRcdDxiIGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1tb250aCR7dGhpcy5zZXR0aW5ncy5zZWxlY3Rpb24ubW9udGggPyAnJyA6ICcgdmFuaWxsYS1jYWxlbmRhci1tb250aF9kaXNhYmxlZCd9XCI+PC9iPlxuXHRcdFx0XHRcdDxiIGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci15ZWFyJHt0aGlzLnNldHRpbmdzLnNlbGVjdGlvbi55ZWFyID8gJycgOiAnIHZhbmlsbGEtY2FsZW5kYXIteWVhcl9kaXNhYmxlZCd9XCI+PC9iPlxuXHRcdFx0XHQ8L2Rpdj5cblx0XHRcdFx0PGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCJcblx0XHRcdFx0XHRjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItYXJyb3cgdmFuaWxsYS1jYWxlbmRhci1hcnJvd19uZXh0XCJcblx0XHRcdFx0XHR0aXRsZT1cIm5leHRcIj5cblx0XHRcdFx0PC9idXR0b24+XG5cdFx0XHQ8L2Rpdj5cblx0XHRcdCR7dGhpcy5zZXR0aW5ncy52aXNpYmlsaXR5LndlZWtOdW1iZXJzID8gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItY29sdW1uXCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLWNvbHVtbl9fdGl0bGVcIj4jPC9kaXY+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLWNvbHVtbl9fY29udGVudCB2YW5pbGxhLWNhbGVuZGFyLXdlZWstbnVtYmVyc1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHRgIDogJyd9XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1jb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLXdlZWtcIj48L2Rpdj5cblx0XHRcdFx0PGRpdiBjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItZGF5c1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0YDtcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3VycmVudFR5cGUgPT09ICdtb250aCcpIHtcblx0XHRcdHRoaXMuSFRNTEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmFuaWxsYS1jYWxlbmRhcl9kZWZhdWx0Jyk7XG5cdFx0XHR0aGlzLkhUTUxFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXJfbW9udGgnKTtcblx0XHRcdHRoaXMuSFRNTEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmFuaWxsYS1jYWxlbmRhcl95ZWFyJyk7XG5cdFx0XHR0aGlzLkhUTUxFbGVtZW50LmlubmVySFRNTCA9IGBcblx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLWhlYWRlclwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1oZWFkZXJfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YiBjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItbW9udGhcIj48L2I+XG5cdFx0XHRcdFx0PGIgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLXllYXIgdmFuaWxsYS1jYWxlbmRhci15ZWFyX25vdC1hY3RpdmUke3RoaXMuc2V0dGluZ3Muc2VsZWN0aW9uLnllYXIgPyAnJyA6ICcgdmFuaWxsYS1jYWxlbmRhci15ZWFyX2Rpc2FibGVkJ31cIj48L2I+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0PC9kaXY+XG5cdFx0XHQ8ZGl2IGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1jb250ZW50XCI+XG5cdFx0XHRcdDxkaXYgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLW1vbnRoc1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+YDtcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3VycmVudFR5cGUgPT09ICd5ZWFyJykge1xuXHRcdFx0dGhpcy5IVE1MRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd2YW5pbGxhLWNhbGVuZGFyX2RlZmF1bHQnKTtcblx0XHRcdHRoaXMuSFRNTEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndmFuaWxsYS1jYWxlbmRhcl9tb250aCcpO1xuXHRcdFx0dGhpcy5IVE1MRWxlbWVudC5jbGFzc0xpc3QuYWRkKCd2YW5pbGxhLWNhbGVuZGFyX3llYXInKTtcblx0XHRcdHRoaXMuSFRNTEVsZW1lbnQuaW5uZXJIVE1MID0gYFxuXHRcdFx0PGRpdiBjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItaGVhZGVyXCI+XG5cdFx0XHRcdDxidXR0b24gdHlwZT1cImJ1dHRvblwiXG5cdFx0XHRcdFx0Y2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLWFycm93IHZhbmlsbGEtY2FsZW5kYXItYXJyb3dfcHJldlwiXG5cdFx0XHRcdFx0dGl0bGU9XCJwcmV2XCI+XG5cdFx0XHRcdDwvYnV0dG9uPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1oZWFkZXJfX2NvbnRlbnRcIj5cblx0XHRcdFx0XHQ8YiBjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItbW9udGggdmFuaWxsYS1jYWxlbmRhci1tb250aF9ub3QtYWN0aXZlJHt0aGlzLnNldHRpbmdzLnNlbGVjdGlvbi5tb250aCA/ICcnIDogJyB2YW5pbGxhLWNhbGVuZGFyLW1vbnRoX2Rpc2FibGVkJ31cIj48L2I+XG5cdFx0XHRcdFx0PGIgY2xhc3M9XCJ2YW5pbGxhLWNhbGVuZGFyLXllYXJcIj48L2I+XG5cdFx0XHRcdDwvZGl2PlxuXHRcdFx0XHQ8YnV0dG9uIHR5cGU9XCJidXR0b25cIlxuXHRcdFx0XHRcdGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1hcnJvdyB2YW5pbGxhLWNhbGVuZGFyLWFycm93X25leHRcIlxuXHRcdFx0XHRcdHRpdGxlPVwibmV4dFwiPlxuXHRcdFx0XHQ8L2J1dHRvbj5cblx0XHRcdDwvZGl2PlxuXHRcdFx0PGRpdiBjbGFzcz1cInZhbmlsbGEtY2FsZW5kYXItY29udGVudFwiPlxuXHRcdFx0XHQ8ZGl2IGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci15ZWFyc1wiPjwvZGl2PlxuXHRcdFx0PC9kaXY+YDtcblx0XHR9XG5cdH1cblxuXHRnZW5lcmF0ZURhdGUoZGF0ZSkge1xuXHRcdGNvbnN0IHllYXIgPSBkYXRlLmdldFVUQ0Z1bGxZZWFyKCk7XG5cdFx0bGV0IG1vbnRoID0gZGF0ZS5nZXRVVENNb250aCgpICsgMTtcblx0XHRsZXQgZGF5ID0gZGF0ZS5nZXRVVENEYXRlKCk7XG5cblx0XHRtb250aCA9IG1vbnRoIDwgMTAgPyBgMCR7bW9udGh9YCA6IG1vbnRoO1xuXHRcdGRheSA9IGRheSA8IDEwID8gYDAke2RheX1gIDogZGF5O1xuXG5cdFx0cmV0dXJuIGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG5cdH1cblxuXHRjb250cm9sQXJyb3dzKCkge1xuXHRcdGlmICghWydkZWZhdWx0JywgJ3llYXInXS5pbmNsdWRlcyh0aGlzLmN1cnJlbnRUeXBlKSkgcmV0dXJuO1xuXG5cdFx0Y29uc3QgYXJyb3dQcmV2ID0gdGhpcy5IVE1MRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmFuaWxsYS1jYWxlbmRhci1hcnJvd19wcmV2Jyk7XG5cdFx0Y29uc3QgYXJyb3dOZXh0ID0gdGhpcy5IVE1MRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmFuaWxsYS1jYWxlbmRhci1hcnJvd19uZXh0Jyk7XG5cblx0XHRjb25zdCBkZWZhdWx0Q29udHJvbCA9ICgpID0+IHtcblx0XHRcdGlmICh0aGlzLmN1cnJlbnRUeXBlICE9PSAnZGVmYXVsdCcpIHJldHVybjtcblxuXHRcdFx0Y29uc3QgaXNTZWxlY3RlZE1pbk1vdW50ID0gdGhpcy5zZWxlY3RlZE1vbnRoID09PSB0aGlzLmRhdGVNaW4uZ2V0VVRDTW9udGgoKTtcblx0XHRcdGNvbnN0IGlzU2VsZWN0ZWRNYXhNb3VudCA9IHRoaXMuc2VsZWN0ZWRNb250aCA9PT0gdGhpcy5kYXRlTWF4LmdldFVUQ01vbnRoKCk7XG5cdFx0XHRjb25zdCBpc1NlbGVjdGVkTWluWWVhciA9IHRoaXMuc2VsZWN0ZWRZZWFyID09PSB0aGlzLmRhdGVNaW4uZ2V0VVRDRnVsbFllYXIoKTtcblx0XHRcdGNvbnN0IGlzU2VsZWN0ZWRNYXhZZWFyID0gdGhpcy5zZWxlY3RlZFllYXIgPT09IHRoaXMuZGF0ZU1heC5nZXRVVENGdWxsWWVhcigpO1xuXG5cdFx0XHRpZiAoKGlzU2VsZWN0ZWRNaW5Nb3VudCAmJiBpc1NlbGVjdGVkTWluWWVhcikgfHwgIXRoaXMuc2V0dGluZ3Muc2VsZWN0aW9uLm1vbnRoKSB7XG5cdFx0XHRcdGFycm93UHJldi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhcnJvd1ByZXYuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKGlzU2VsZWN0ZWRNYXhNb3VudCAmJiBpc1NlbGVjdGVkTWF4WWVhcikgfHwgIXRoaXMuc2V0dGluZ3Muc2VsZWN0aW9uLm1vbnRoKSB7XG5cdFx0XHRcdGFycm93TmV4dC5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRhcnJvd05leHQuc3R5bGUudmlzaWJpbGl0eSA9IG51bGw7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IHllYXJDb250cm9sID0gKCkgPT4ge1xuXHRcdFx0aWYgKHRoaXMuY3VycmVudFR5cGUgIT09ICd5ZWFyJykgcmV0dXJuO1xuXG5cdFx0XHRpZiAodGhpcy5kYXRlTWluLmdldFVUQ0Z1bGxZZWFyKCkgJiYgKHRoaXMudmlld1llYXIgLSA3KSA8PSB0aGlzLmRhdGVNaW4uZ2V0VVRDRnVsbFllYXIoKSkge1xuXHRcdFx0XHRhcnJvd1ByZXYuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXJyb3dQcmV2LnN0eWxlLnZpc2liaWxpdHkgPSBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAodGhpcy5kYXRlTWF4LmdldFVUQ0Z1bGxZZWFyKCkgJiYgKHRoaXMudmlld1llYXIgKyA3KSA+PSB0aGlzLmRhdGVNYXguZ2V0VVRDRnVsbFllYXIoKSkge1xuXHRcdFx0XHRhcnJvd05leHQuc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXJyb3dOZXh0LnN0eWxlLnZpc2liaWxpdHkgPSBudWxsO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRkZWZhdWx0Q29udHJvbCgpO1xuXHRcdHllYXJDb250cm9sKCk7XG5cdH1cblxuXHR3cml0ZVllYXIoKSB7XG5cdFx0Y29uc3QgeWVhckVsID0gdGhpcy5IVE1MRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmFuaWxsYS1jYWxlbmRhci15ZWFyJyk7XG5cdFx0eWVhckVsLmlubmVyVGV4dCA9IHRoaXMuc2VsZWN0ZWRZZWFyO1xuXHR9XG5cblx0d3JpdGVNb250aCgpIHtcblx0XHRjb25zdCBtb250aEVsID0gdGhpcy5IVE1MRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmFuaWxsYS1jYWxlbmRhci1tb250aCcpO1xuXHRcdG1vbnRoRWwuaW5uZXJUZXh0ID0gdGhpcy5sb2NhbGUubW9udGhzW3RoaXMuc2VsZWN0ZWRNb250aF07XG5cdH1cblxuXHRjcmVhdGVXZWVrKCkge1xuXHRcdGNvbnN0IHdlZWtFbCA9IHRoaXMuSFRNTEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZhbmlsbGEtY2FsZW5kYXItd2VlaycpO1xuXHRcdGNvbnN0IHRlbXBsYXRlV2Vla0RheUVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdHRlbXBsYXRlV2Vla0RheUVsLmNsYXNzTmFtZSA9ICd2YW5pbGxhLWNhbGVuZGFyLXdlZWtfX2RheSc7XG5cblx0XHRjb25zdCB3ZWVrZGF5ID0gWy4uLnRoaXMubG9jYWxlLndlZWtkYXldO1xuXHRcdGlmICh0aGlzLnNldHRpbmdzLmlzbzg2MDEpIHdlZWtkYXkucHVzaCh3ZWVrZGF5LnNoaWZ0KCkpO1xuXG5cdFx0d2Vla0VsLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCB3ZWVrZGF5Lmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRjb25zdCB3ZWVrRGF5TmFtZSA9IHdlZWtkYXlbaV07XG5cdFx0XHRjb25zdCB3ZWVrRGF5RWwgPSB0ZW1wbGF0ZVdlZWtEYXlFbC5jbG9uZU5vZGUodHJ1ZSk7XG5cblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnZpc2liaWxpdHkud2Vla2VuZCAmJiB0aGlzLnNldHRpbmdzLmlzbzg2MDEpIHtcblx0XHRcdFx0aWYgKGkgPT09IDUgfHwgaSA9PT0gNikge1xuXHRcdFx0XHRcdHdlZWtEYXlFbC5jbGFzc0xpc3QuYWRkKCd2YW5pbGxhLWNhbGVuZGFyLXdlZWtfX2RheV93ZWVrZW5kJyk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy52aXNpYmlsaXR5LndlZWtlbmQgJiYgIXRoaXMuc2V0dGluZ3MuaXNvODYwMSkge1xuXHRcdFx0XHRpZiAoaSA9PT0gMCB8fCBpID09PSA2KSB7XG5cdFx0XHRcdFx0d2Vla0RheUVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXItd2Vla19fZGF5X3dlZWtlbmQnKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHR3ZWVrRGF5RWwuaW5uZXJUZXh0ID0gYCR7d2Vla0RheU5hbWV9YDtcblx0XHRcdHdlZWtFbC5hcHBlbmQod2Vla0RheUVsKTtcblx0XHR9XG5cdH1cblxuXHRnZXRXZWVrTnVtYmVyKGRhdGUpIHtcblx0XHRjb25zdCBkYXkgPSBuZXcgRGF0ZShkYXRlKS5nZXRVVENEYXRlKCk7XG5cdFx0Y29uc3QgbW9udGggPSBuZXcgRGF0ZShkYXRlKS5nZXRVVENNb250aCgpO1xuXHRcdGNvbnN0IHllYXIgPSBuZXcgRGF0ZShkYXRlKS5nZXRVVENGdWxsWWVhcigpO1xuXHRcdGNvbnN0IGNvcnJlY3REYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGgsIGRheSk7XG5cdFx0Y29uc3QgeWVhclN0YXJ0ID0gbmV3IERhdGUoRGF0ZS5VVEMoY29ycmVjdERhdGUuZ2V0VVRDRnVsbFllYXIoKSwgMCwgMSkpO1xuXHRcdGNvbnN0IHdlZWtOdW1iZXIgPSBNYXRoLmNlaWwoKCgoY29ycmVjdERhdGUgLSB5ZWFyU3RhcnQpIC8gODY0MDAwMDApICsgMSkgLyA3KTtcblx0XHRyZXR1cm4ge1xuXHRcdFx0eWVhcjogY29ycmVjdERhdGUuZ2V0VVRDRnVsbFllYXIoKSxcblx0XHRcdHdlZWs6IHdlZWtOdW1iZXIsXG5cdFx0fTtcblx0fVxuXG5cdGNyZWF0ZVdlZWtOdW1iZXJzKGZpcnN0RGF5V2VlaywgZGF5c1NlbGVjdGVkTW9udGgpIHtcblx0XHRpZiAoIXRoaXMuc2V0dGluZ3MudmlzaWJpbGl0eS53ZWVrTnVtYmVycykgcmV0dXJuO1xuXHRcdGNvbnN0IHdlZWtOdW1iZXJzRWwgPSB0aGlzLkhUTUxFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YW5pbGxhLWNhbGVuZGFyLXdlZWstbnVtYmVycycpO1xuXHRcdGNvbnN0IGRheXNFbCA9IHRoaXMuSFRNTEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnZhbmlsbGEtY2FsZW5kYXItZGF5Jyk7XG5cdFx0Y29uc3QgY291bnRXZWVrID0gTWF0aC5jZWlsKChmaXJzdERheVdlZWsgKyBkYXlzU2VsZWN0ZWRNb250aCkgLyA3KTtcblx0XHRjb25zdCB0ZW1wbGF0ZVdlZWtOdW1iZXJFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHR0ZW1wbGF0ZVdlZWtOdW1iZXJFbC5jbGFzc05hbWUgPSAndmFuaWxsYS1jYWxlbmRhci13ZWVrLW51bWJlcic7XG5cblx0XHR3ZWVrTnVtYmVyc0VsLmlubmVySFRNTCA9ICcnO1xuXG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudFdlZWs7IGkrKykge1xuXHRcdFx0Y29uc3Qgd2Vla051bWJlciA9IHRoaXMuZ2V0V2Vla051bWJlcihkYXlzRWxbaSAqIDddLmRhdGFzZXQuY2FsZW5kYXJEYXkpO1xuXHRcdFx0Y29uc3Qgd2Vla051bWJlckVsID0gdGVtcGxhdGVXZWVrTnVtYmVyRWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0d2Vla051bWJlckVsLmlubmVyVGV4dCA9IGAke3dlZWtOdW1iZXIud2Vla31gO1xuXHRcdFx0d2Vla051bWJlckVsLmRhdGFzZXQuY2FsZW5kYXJZZWFyID0gYCR7d2Vla051bWJlci55ZWFyfWA7XG5cdFx0XHR3ZWVrTnVtYmVyc0VsLmFwcGVuZCh3ZWVrTnVtYmVyRWwpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZVBvcHVwKGRheXNFbCkge1xuXHRcdGlmICghdGhpcy5wb3B1cHMpIHJldHVybjtcblxuXHRcdC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuXHRcdGZvciAoY29uc3QgZGF5IGluIHRoaXMucG9wdXBzKSB7XG5cdFx0XHRpZiAoT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGhpcy5wb3B1cHMsIGRheSkpIHtcblx0XHRcdFx0Y29uc3QgZGF5RWwgPSBkYXlzRWwucXVlcnlTZWxlY3RvcihgW2RhdGEtY2FsZW5kYXItZGF5PVwiJHtkYXl9XCJdYCk7XG5cdFx0XHRcdGlmICghZGF5RWwpIHJldHVybjtcblxuXHRcdFx0XHRjb25zdCBkYXlJbmZvID0gdGhpcy5wb3B1cHNbZGF5XTtcblx0XHRcdFx0ZGF5RWwuY2xhc3NMaXN0LmFkZChkYXlJbmZvLm1vZGlmaWVyKTtcblx0XHRcdFx0ZGF5RWwuaW5uZXJIVE1MICs9IGA8ZGl2IGNsYXNzPVwidmFuaWxsYS1jYWxlbmRhci1kYXlfX3BvcHVwXCI+JHtkYXlJbmZvLmh0bWx9PC9kaXY+YDtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRjcmVhdGVEYXlzKCkge1xuXHRcdGNvbnN0IGZpcnN0RGF5ID0gbmV3IERhdGUoRGF0ZS5VVEModGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCwgMSkpO1xuXHRcdGNvbnN0IGRheXNTZWxlY3RlZE1vbnRoID0gbmV3IERhdGUoRGF0ZS5VVEModGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCArIDEsIDApKS5nZXRVVENEYXRlKCk7XG5cblx0XHRsZXQgZmlyc3REYXlXZWVrID0gTnVtYmVyKGZpcnN0RGF5LmdldFVUQ0RheSgpKTtcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5pc284NjAxKSBmaXJzdERheVdlZWsgPSBOdW1iZXIoKGZpcnN0RGF5LmdldFVUQ0RheSgpICE9PSAwID8gZmlyc3REYXkuZ2V0VVRDRGF5KCkgOiA3KSAtIDEpO1xuXG5cdFx0Y29uc3QgZGF5c0VsID0gdGhpcy5IVE1MRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcudmFuaWxsYS1jYWxlbmRhci1kYXlzJyk7XG5cdFx0Y29uc3QgdGVtcGxhdGVEYXlFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRcdHRlbXBsYXRlRGF5RWwuY2xhc3NOYW1lID0gJ3ZhbmlsbGEtY2FsZW5kYXItZGF5JztcblxuXHRcdGlmIChbJ3NpbmdsZScsICdtdWx0aXBsZScsICdtdWx0aXBsZS1yYW5nZWQnXS5pbmNsdWRlcyh0aGlzLnNldHRpbmdzLnNlbGVjdGlvbi5kYXkpKSB7XG5cdFx0XHRkYXlzRWwuY2xhc3NMaXN0LmFkZCgndmFuaWxsYS1jYWxlbmRhci1kYXlzX3NlbGVjdGluZycpO1xuXHRcdH1cblxuXHRcdGRheXNFbC5pbm5lckhUTUwgPSAnJztcblxuXHRcdGNvbnN0IHNldERheU1vZGlmaWVyID0gKGRheUVsLCBkYXlJRCwgZGF0ZSkgPT4ge1xuXHRcdFx0Ly8gaWYgd2Vla2VuZFxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MudmlzaWJpbGl0eS53ZWVrZW5kICYmIChkYXlJRCA9PT0gMCB8fCBkYXlJRCA9PT0gNikpIHtcblx0XHRcdFx0ZGF5RWwuY2xhc3NMaXN0LmFkZCgndmFuaWxsYS1jYWxlbmRhci1kYXlfd2Vla2VuZCcpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiBob2xpZGF5c1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZXR0aW5ncy5zZWxlY3RlZC5ob2xpZGF5cykpIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zZWxlY3RlZC5ob2xpZGF5cy5mb3JFYWNoKChob2xpZGF5KSA9PiB7XG5cdFx0XHRcdFx0aWYgKGhvbGlkYXkgPT09IGRhdGUpIHtcblx0XHRcdFx0XHRcdGRheUVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXItZGF5X2hvbGlkYXknKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBpZiB0b2RheVxuXHRcdFx0bGV0IHRoaXNUb2RheSA9IHRoaXMuZGF0ZS50b2RheS5nZXRVVENEYXRlKCk7XG5cdFx0XHRsZXQgdGhpc01vbnRoID0gdGhpcy5kYXRlLnRvZGF5LmdldFVUQ01vbnRoKCkgKyAxO1xuXHRcdFx0dGhpc1RvZGF5ID0gdGhpc1RvZGF5IDwgMTAgPyBgMCR7dGhpc1RvZGF5fWAgOiB0aGlzVG9kYXk7XG5cdFx0XHR0aGlzTW9udGggPSB0aGlzTW9udGggPCAxMCA/IGAwJHt0aGlzTW9udGh9YCA6IHRoaXNNb250aDtcblxuXHRcdFx0Y29uc3QgdGhpc0RheSA9IGAke3RoaXMuZGF0ZS50b2RheS5nZXRVVENGdWxsWWVhcigpfS0ke3RoaXNNb250aH0tJHt0aGlzVG9kYXl9YDtcblxuXHRcdFx0aWYgKHRoaXMuc2V0dGluZ3MudmlzaWJpbGl0eS50b2RheSAmJiBkYXlFbC5kYXRhc2V0LmNhbGVuZGFyRGF5ID09PSB0aGlzRGF5KSB7XG5cdFx0XHRcdGRheUVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXItZGF5X3RvZGF5Jyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIHNlbGVjdGVkIGRheVxuXHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWREYXRlcy5maW5kKChzZWxlY3RlZERhdGUpID0+IHNlbGVjdGVkRGF0ZSA9PT0gZGF0ZSkpIHtcblx0XHRcdFx0ZGF5RWwuY2xhc3NMaXN0LmFkZCgndmFuaWxsYS1jYWxlbmRhci1kYXlfc2VsZWN0ZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gaWYgYWN0aXZlIGRheVxuXHRcdFx0aWYgKHRoaXMuYWN0aXZlRGF0ZXMuZmluZCgoc2VsZWN0ZWREYXRlKSA9PiBzZWxlY3RlZERhdGUgPT09IGRhdGUpKSB7XG5cdFx0XHRcdGRheUVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXItZGF5X2FjdGl2ZScpO1xuXHRcdFx0fVxuXG5cblx0XHRcdC8vIGlmIHJhbmdlIG1pbi9tYXhcblx0XHRcdGlmICh0aGlzLnNldHRpbmdzLnJhbmdlLm1pbiA+IGRhdGUgfHwgdGhpcy5zZXR0aW5ncy5yYW5nZS5tYXggPCBkYXRlKSB7XG5cdFx0XHRcdGRheUVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXItZGF5X2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGlmIHJhbmdlIHZhbHVlc1xuXHRcdFx0aWYgKEFycmF5LmlzQXJyYXkodGhpcy5zZXR0aW5ncy5yYW5nZS5kaXNhYmxlZCkpIHtcblx0XHRcdFx0dGhpcy5zZXR0aW5ncy5yYW5nZS5kaXNhYmxlZC5mb3JFYWNoKChkYXRlRGlzYWJsZWQpID0+IHtcblx0XHRcdFx0XHRpZiAoZGF0ZURpc2FibGVkID09PSBkYXRlKSB7XG5cdFx0XHRcdFx0XHRkYXlFbC5jbGFzc0xpc3QuYWRkKCd2YW5pbGxhLWNhbGVuZGFyLWRheV9kaXNhYmxlZCcpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdGNvbnN0IHByZXZNb250aCA9ICgpID0+IHtcblx0XHRcdGNvbnN0IHByZXZNb250aERheXMgPSBuZXcgRGF0ZShEYXRlLlVUQyh0aGlzLnNlbGVjdGVkWWVhciwgdGhpcy5zZWxlY3RlZE1vbnRoLCAwKSkuZ2V0VVRDRGF0ZSgpO1xuXHRcdFx0bGV0IGRheSA9IHByZXZNb250aERheXMgLSBmaXJzdERheVdlZWs7XG5cdFx0XHRsZXQgeWVhciA9IHRoaXMuc2VsZWN0ZWRZZWFyO1xuXHRcdFx0bGV0IG1vbnRoID0gdGhpcy5zZWxlY3RlZE1vbnRoO1xuXG5cdFx0XHRpZiAodGhpcy5zZWxlY3RlZE1vbnRoID09PSAwKSB7XG5cdFx0XHRcdG1vbnRoID0gdGhpcy5sb2NhbGUubW9udGhzLmxlbmd0aDtcblx0XHRcdFx0eWVhciA9IHRoaXMuc2VsZWN0ZWRZZWFyIC0gMTtcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5zZWxlY3RlZE1vbnRoIDwgMTApIHtcblx0XHRcdFx0bW9udGggPSBgMCR7dGhpcy5zZWxlY3RlZE1vbnRofWA7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAwOyBpIDwgZmlyc3REYXlXZWVrOyBpKyspIHtcblx0XHRcdFx0ZGF5ICs9IDE7XG5cblx0XHRcdFx0Y29uc3QgZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG5cdFx0XHRcdGNvbnN0IGRheUlEQ3VycmVudCA9IG5ldyBEYXRlKERhdGUuVVRDKHRoaXMuc2VsZWN0ZWRZZWFyLCB0aGlzLnNlbGVjdGVkTW9udGgsIGRheSAtIDEpKTtcblx0XHRcdFx0Y29uc3QgcHJldk1vbnRoSUQgPSBkYXlJREN1cnJlbnQuZ2V0VVRDTW9udGgoKSAtIDE7XG5cdFx0XHRcdGNvbnN0IGRheUlEID0gbmV3IERhdGUoRGF0ZS5VVEModGhpcy5zZWxlY3RlZFllYXIsIHByZXZNb250aElELCBkYXkpKS5nZXRVVENEYXkoKTtcblxuXHRcdFx0XHRjb25zdCBkYXlFbCA9IHRlbXBsYXRlRGF5RWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0XHRkYXlFbC5jbGFzc0xpc3QuYWRkKCd2YW5pbGxhLWNhbGVuZGFyLWRheV9wcmV2Jyk7XG5cdFx0XHRcdGRheUVsLmlubmVyVGV4dCA9IGAke2RheX1gO1xuXHRcdFx0XHRkYXlFbC5kYXRhc2V0LmNhbGVuZGFyRGF5ID0gZGF0ZTtcblxuXHRcdFx0XHRzZXREYXlNb2RpZmllcihkYXlFbCwgZGF5SUQsIGRhdGUpO1xuXHRcdFx0XHRkYXlzRWwuYXBwZW5kKGRheUVsKTtcblx0XHRcdH1cblx0XHR9O1xuXG5cdFx0Y29uc3Qgc2VsZWN0ZWRNb250aCA9ICgpID0+IHtcblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IGRheXNTZWxlY3RlZE1vbnRoOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZGF5ID0gbmV3IERhdGUoRGF0ZS5VVEModGhpcy5zZWxlY3RlZFllYXIsIHRoaXMuc2VsZWN0ZWRNb250aCwgaSkpO1xuXG5cdFx0XHRcdGNvbnN0IGRhdGUgPSB0aGlzLmdlbmVyYXRlRGF0ZShkYXkpO1xuXHRcdFx0XHRjb25zdCBkYXlJRCA9IGRheS5nZXRVVENEYXkoKTtcblxuXHRcdFx0XHRjb25zdCBkYXlFbCA9IHRlbXBsYXRlRGF5RWwuY2xvbmVOb2RlKHRydWUpO1xuXHRcdFx0XHRkYXlFbC5pbm5lclRleHQgPSBgJHtpfWA7XG5cdFx0XHRcdGRheUVsLmRhdGFzZXQuY2FsZW5kYXJEYXkgPSBkYXRlO1xuXG5cdFx0XHRcdHNldERheU1vZGlmaWVyKGRheUVsLCBkYXlJRCwgZGF0ZSk7XG5cdFx0XHRcdGRheXNFbC5hcHBlbmQoZGF5RWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRjb25zdCBuZXh0TW9udGggPSAoKSA9PiB7XG5cdFx0XHRjb25zdCB0b3RhbCA9IGZpcnN0RGF5V2VlayArIGRheXNTZWxlY3RlZE1vbnRoO1xuXHRcdFx0Y29uc3Qgcm93cyA9IE1hdGguY2VpbCh0b3RhbCAvIHRoaXMubG9jYWxlLndlZWtkYXkubGVuZ3RoKTtcblx0XHRcdGNvbnN0IG5leHREYXlzID0gKHRoaXMubG9jYWxlLndlZWtkYXkubGVuZ3RoICogcm93cykgLSB0b3RhbDtcblxuXHRcdFx0bGV0IHllYXIgPSB0aGlzLnNlbGVjdGVkWWVhcjtcblx0XHRcdGxldCBtb250aCA9IHRoaXMuc2VsZWN0ZWRNb250aCArIDI7XG5cblx0XHRcdGlmICgodGhpcy5zZWxlY3RlZE1vbnRoICsgMSkgPT09IHRoaXMubG9jYWxlLm1vbnRocy5sZW5ndGgpIHtcblx0XHRcdFx0bW9udGggPSAnMDEnO1xuXHRcdFx0XHR5ZWFyID0gdGhpcy5zZWxlY3RlZFllYXIgKyAxO1xuXHRcdFx0fSBlbHNlIGlmICgodGhpcy5zZWxlY3RlZE1vbnRoICsgMikgPCAxMCkge1xuXHRcdFx0XHRtb250aCA9IGAwJHt0aGlzLnNlbGVjdGVkTW9udGggKyAyfWA7XG5cdFx0XHR9XG5cblx0XHRcdGZvciAobGV0IGkgPSAxOyBpIDw9IG5leHREYXlzOyBpKyspIHtcblx0XHRcdFx0Y29uc3QgZGF5ID0gaSA8IDEwID8gYDAke2l9YCA6IGk7XG5cblx0XHRcdFx0Y29uc3QgZGF0ZSA9IGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWA7XG5cdFx0XHRcdGNvbnN0IGRheUlEQ3VycmVudCA9IG5ldyBEYXRlKERhdGUuVVRDKHRoaXMuc2VsZWN0ZWRZZWFyLCB0aGlzLnNlbGVjdGVkTW9udGgsIGkpKTtcblx0XHRcdFx0Y29uc3QgbmV4dE1vbnRoSUQgPSBkYXlJREN1cnJlbnQuZ2V0VVRDTW9udGgoKSArIDE7XG5cdFx0XHRcdGNvbnN0IGRheUlEID0gbmV3IERhdGUoRGF0ZS5VVEModGhpcy5zZWxlY3RlZFllYXIsIG5leHRNb250aElELCBpKSkuZ2V0VVRDRGF5KCk7XG5cblx0XHRcdFx0Y29uc3QgZGF5RWwgPSB0ZW1wbGF0ZURheUVsLmNsb25lTm9kZSh0cnVlKTtcblx0XHRcdFx0ZGF5RWwuY2xhc3NMaXN0LmFkZCgndmFuaWxsYS1jYWxlbmRhci1kYXlfbmV4dCcpO1xuXHRcdFx0XHRkYXlFbC5pbm5lclRleHQgPSBgJHtpfWA7XG5cdFx0XHRcdGRheUVsLmRhdGFzZXQuY2FsZW5kYXJEYXkgPSBkYXRlO1xuXG5cdFx0XHRcdHNldERheU1vZGlmaWVyKGRheUVsLCBkYXlJRCwgZGF0ZSk7XG5cdFx0XHRcdGRheXNFbC5hcHBlbmQoZGF5RWwpO1xuXHRcdFx0fVxuXHRcdH07XG5cblx0XHRwcmV2TW9udGgoKTtcblx0XHRzZWxlY3RlZE1vbnRoKCk7XG5cdFx0bmV4dE1vbnRoKCk7XG5cdFx0dGhpcy5jcmVhdGVQb3B1cChkYXlzRWwpO1xuXHRcdHRoaXMuY3JlYXRlV2Vla051bWJlcnMoZmlyc3REYXlXZWVrLCBkYXlzU2VsZWN0ZWRNb250aCk7XG5cdH1cblxuXHRjaGFuZ2VNb250aChyb3V0ZSkge1xuXHRcdGNvbnN0IGxhc3RNb250aCA9IHRoaXMubG9jYWxlLm1vbnRocy5sZW5ndGggLSAxO1xuXG5cdFx0c3dpdGNoIChyb3V0ZSkge1xuXHRcdFx0Y2FzZSAncHJldic6XG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkTW9udGggIT09IDApIHtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkTW9udGggLT0gMTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLnNldHRpbmdzLnNlbGVjdGlvbi55ZWFyKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZFllYXIgLT0gMTtcblx0XHRcdFx0XHR0aGlzLnNlbGVjdGVkTW9udGggPSBsYXN0TW9udGg7XG5cdFx0XHRcdH1cblx0XHRcdFx0YnJlYWs7XG5cdFx0XHRjYXNlICduZXh0Jzpcblx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRNb250aCAhPT0gbGFzdE1vbnRoKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZE1vbnRoICs9IDE7XG5cdFx0XHRcdH0gZWxzZSBpZiAodGhpcy5zZXR0aW5ncy5zZWxlY3Rpb24ueWVhcikge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWRZZWFyICs9IDE7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZE1vbnRoID0gMDtcblx0XHRcdFx0fVxuXHRcdFx0XHRicmVhaztcblx0XHRcdC8vIG5vIGRlZmF1bHRcblx0XHR9XG5cblx0XHR0aGlzLnNldHRpbmdzLnNlbGVjdGVkLm1vbnRoID0gdGhpcy5zZWxlY3RlZE1vbnRoO1xuXG5cdFx0dGhpcy5jb250cm9sQXJyb3dzKCk7XG5cdFx0dGhpcy53cml0ZVllYXIoKTtcblx0XHR0aGlzLndyaXRlTW9udGgoKTtcblx0XHR0aGlzLmNyZWF0ZURheXMoKTtcblx0fVxuXG5cdGNyZWF0ZVllYXJzKCkge1xuXHRcdHRoaXMuY3VycmVudFR5cGUgPSAneWVhcic7XG5cdFx0dGhpcy5jcmVhdGVET00oKTtcblx0XHR0aGlzLmNvbnRyb2xBcnJvd3MoKTtcblx0XHR0aGlzLndyaXRlWWVhcigpO1xuXHRcdHRoaXMud3JpdGVNb250aCgpO1xuXG5cdFx0Y29uc3QgeWVhcnNFbCA9IHRoaXMuSFRNTEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZhbmlsbGEtY2FsZW5kYXIteWVhcnMnKTtcblx0XHRpZiAodGhpcy5zZXR0aW5ncy5zZWxlY3Rpb24ueWVhcikgeWVhcnNFbC5jbGFzc0xpc3QuYWRkKCd2YW5pbGxhLWNhbGVuZGFyLXllYXJzX3NlbGVjdGluZycpO1xuXHRcdGNvbnN0IHRlbXBsYXRlWWVhckVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuXHRcdHRlbXBsYXRlWWVhckVsLmNsYXNzTmFtZSA9ICd2YW5pbGxhLWNhbGVuZGFyLXllYXJzX195ZWFyJztcblxuXHRcdGZvciAobGV0IGkgPSB0aGlzLnZpZXdZZWFyIC0gNzsgaSA8IHRoaXMudmlld1llYXIgKyA4OyBpKyspIHtcblx0XHRcdGNvbnN0IHllYXIgPSBpO1xuXHRcdFx0Y29uc3QgeWVhckVsID0gdGVtcGxhdGVZZWFyRWwuY2xvbmVOb2RlKHRydWUpO1xuXG5cdFx0XHRpZiAoeWVhciA9PT0gdGhpcy5zZWxlY3RlZFllYXIpIHtcblx0XHRcdFx0eWVhckVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXIteWVhcnNfX3llYXJfc2VsZWN0ZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmICh5ZWFyIDwgdGhpcy5kYXRlTWluLmdldFVUQ0Z1bGxZZWFyKCkpIHtcblx0XHRcdFx0eWVhckVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXIteWVhcnNfX3llYXJfZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmICh5ZWFyID4gdGhpcy5kYXRlTWF4LmdldFVUQ0Z1bGxZZWFyKCkpIHtcblx0XHRcdFx0eWVhckVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXIteWVhcnNfX3llYXJfZGlzYWJsZWQnKTtcblx0XHRcdH1cblxuXHRcdFx0eWVhckVsLmRhdGFzZXQuY2FsZW5kYXJZZWFyID0geWVhcjtcblx0XHRcdHllYXJFbC5pbm5lclRleHQgPSBgJHt5ZWFyfWA7XG5cdFx0XHR5ZWFyc0VsLmFwcGVuZCh5ZWFyRWwpO1xuXHRcdH1cblx0fVxuXG5cdGNyZWF0ZU1vbnRocygpIHtcblx0XHR0aGlzLmN1cnJlbnRUeXBlID0gJ21vbnRoJztcblx0XHR0aGlzLmNyZWF0ZURPTSgpO1xuXHRcdHRoaXMud3JpdGVZZWFyKCk7XG5cdFx0dGhpcy53cml0ZU1vbnRoKCk7XG5cblx0XHRjb25zdCBtb250aHNFbCA9IHRoaXMuSFRNTEVsZW1lbnQucXVlcnlTZWxlY3RvcignLnZhbmlsbGEtY2FsZW5kYXItbW9udGhzJyk7XG5cdFx0aWYgKHRoaXMuc2V0dGluZ3Muc2VsZWN0aW9uLm1vbnRoKSBtb250aHNFbC5jbGFzc0xpc3QuYWRkKCd2YW5pbGxhLWNhbGVuZGFyLW1vbnRoc19zZWxlY3RpbmcnKTtcblxuXHRcdGNvbnN0IHRlbXBsYXRlTW9udGhFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcblx0XHR0ZW1wbGF0ZU1vbnRoRWwuY2xhc3NOYW1lID0gJ3ZhbmlsbGEtY2FsZW5kYXItbW9udGhzX19tb250aCc7XG5cblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubG9jYWxlLm1vbnRocy5sZW5ndGg7IGkrKykge1xuXHRcdFx0Y29uc3QgbW9udGggPSB0aGlzLmxvY2FsZS5tb250aHNbaV07XG5cdFx0XHRjb25zdCBtb250aEVsID0gdGVtcGxhdGVNb250aEVsLmNsb25lTm9kZSh0cnVlKTtcblxuXHRcdFx0aWYgKGkgPT09IHRoaXMuc2VsZWN0ZWRNb250aCkge1xuXHRcdFx0XHRtb250aEVsLmNsYXNzTGlzdC5hZGQoJ3ZhbmlsbGEtY2FsZW5kYXItbW9udGhzX19tb250aF9zZWxlY3RlZCcpO1xuXHRcdFx0fVxuXHRcdFx0aWYgKGkgPCB0aGlzLmRhdGVNaW4uZ2V0VVRDTW9udGgoKSAmJiB0aGlzLnNlbGVjdGVkWWVhciA9PT0gdGhpcy5kYXRlTWluLmdldFVUQ0Z1bGxZZWFyKCkpIHtcblx0XHRcdFx0bW9udGhFbC5jbGFzc0xpc3QuYWRkKCd2YW5pbGxhLWNhbGVuZGFyLW1vbnRoc19fbW9udGhfZGlzYWJsZWQnKTtcblx0XHRcdH1cblx0XHRcdGlmIChpID4gdGhpcy5kYXRlTWF4LmdldFVUQ01vbnRoKCkgJiYgdGhpcy5zZWxlY3RlZFllYXIgPT09IHRoaXMuZGF0ZU1heC5nZXRVVENGdWxsWWVhcigpKSB7XG5cdFx0XHRcdG1vbnRoRWwuY2xhc3NMaXN0LmFkZCgndmFuaWxsYS1jYWxlbmRhci1tb250aHNfX21vbnRoX2Rpc2FibGVkJyk7XG5cdFx0XHR9XG5cblx0XHRcdG1vbnRoRWwuZGF0YXNldC5jYWxlbmRhck1vbnRoID0gaTtcblxuXHRcdFx0bW9udGhFbC50aXRsZSA9IGAke21vbnRofWA7XG5cdFx0XHRtb250aEVsLmlubmVyVGV4dCA9IGAke3RoaXMuc2V0dGluZ3MudmlzaWJpbGl0eS5tb250aFNob3J0ID8gbW9udGguc3Vic3RyaW5nKDAsIDMpIDogbW9udGh9YDtcblx0XHRcdG1vbnRoc0VsLmFwcGVuZChtb250aEVsKTtcblx0XHR9XG5cdH1cblxuXHRnZXRMb2NhbGUoKSB7XG5cdFx0aWYgKHRoaXMuc2V0dGluZ3MubGFuZyA9PT0gJ2RlZmluZScpIHJldHVybjtcblxuXHRcdHRoaXMubG9jYWxlLndlZWtkYXkgPSBbXTtcblx0XHRmb3IgKGxldCBpID0gMDsgaSA8IDc7IGkrKykge1xuXHRcdFx0bGV0IHdlZWtkYXkgPSBuZXcgRGF0ZSgwLCAwLCBpKS50b0xvY2FsZVN0cmluZyh0aGlzLnNldHRpbmdzLmxhbmcsIHsgd2Vla2RheTogJ3Nob3J0JyB9KTtcblx0XHRcdHdlZWtkYXkgPSBgJHt3ZWVrZGF5LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpfSR7d2Vla2RheS5zdWJzdHJpbmcoMSwgd2Vla2RheS5sZW5ndGgpfWA7XG5cdFx0XHR3ZWVrZGF5ID0gd2Vla2RheS5yZXBsYWNlKC9cXC4vLCAnJyk7XG5cdFx0XHR0aGlzLmxvY2FsZS53ZWVrZGF5LnB1c2god2Vla2RheSk7XG5cdFx0fVxuXG5cdFx0dGhpcy5sb2NhbGUubW9udGhzID0gW107XG5cdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCAxMjsgaSsrKSB7XG5cdFx0XHRsZXQgbW9udGggPSBuZXcgRGF0ZSgwLCBpKS50b0xvY2FsZVN0cmluZyh0aGlzLnNldHRpbmdzLmxhbmcsIHsgbW9udGg6ICdsb25nJyB9KTtcblx0XHRcdG1vbnRoID0gYCR7bW9udGguY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHttb250aC5zdWJzdHJpbmcoMSwgbW9udGgubGVuZ3RoKX1gO1xuXHRcdFx0bW9udGggPSBtb250aC5yZXBsYWNlKC9cXC4vLCAnJyk7XG5cdFx0XHR0aGlzLmxvY2FsZS5tb250aHMucHVzaChtb250aCk7XG5cdFx0fVxuXHR9XG5cblx0dXBkYXRlKCkge1xuXHRcdHRoaXMuc2V0VmFyaWFibGVzRGF0ZXMoKTtcblx0XHR0aGlzLmNyZWF0ZURPTSgpO1xuXHRcdHRoaXMuY29udHJvbEFycm93cygpO1xuXHRcdHRoaXMuZ2V0TG9jYWxlKCk7XG5cdFx0dGhpcy53cml0ZVllYXIoKTtcblx0XHR0aGlzLndyaXRlTW9udGgoKTtcblx0XHRpZiAodGhpcy5jdXJyZW50VHlwZSA9PT0gJ2RlZmF1bHQnKSB7XG5cdFx0XHR0aGlzLmNyZWF0ZVdlZWsoKTtcblx0XHRcdHRoaXMuY3JlYXRlRGF5cygpO1xuXHRcdH0gZWxzZSBpZiAodGhpcy5jdXJyZW50VHlwZSA9PT0gJ21vbnRoJykge1xuXHRcdFx0dGhpcy5jcmVhdGVNb250aHMoKTtcblx0XHR9IGVsc2UgaWYgKHRoaXMuY3VycmVudFR5cGUgPT09ICd5ZWFyJykge1xuXHRcdFx0dGhpcy5jcmVhdGVZZWFycygpO1xuXHRcdH1cblx0fVxuXG5cdGNsaWNrKCkge1xuXHRcdHRoaXMuSFRNTEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuXHRcdFx0Y29uc3QgYXJyb3dFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy52YW5pbGxhLWNhbGVuZGFyLWFycm93Jyk7XG5cdFx0XHRjb25zdCBhcnJvd1ByZXZFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy52YW5pbGxhLWNhbGVuZGFyLWFycm93X3ByZXYnKTtcblx0XHRcdGNvbnN0IGFycm93TmV4dEVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnZhbmlsbGEtY2FsZW5kYXItYXJyb3dfbmV4dCcpO1xuXHRcdFx0Y29uc3QgZGF5RWwgPSBlLnRhcmdldC5jbG9zZXN0KCcudmFuaWxsYS1jYWxlbmRhci1kYXknKTtcblx0XHRcdGNvbnN0IGRheVByZXZFbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy52YW5pbGxhLWNhbGVuZGFyLWRheV9wcmV2Jyk7XG5cdFx0XHRjb25zdCBkYXlOZXh0RWwgPSBlLnRhcmdldC5jbG9zZXN0KCcudmFuaWxsYS1jYWxlbmRhci1kYXlfbmV4dCcpO1xuXHRcdFx0Y29uc3QgeWVhckhlYWRlckVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnZhbmlsbGEtY2FsZW5kYXIteWVhcicpO1xuXHRcdFx0Y29uc3QgeWVhckl0ZW1FbCA9IGUudGFyZ2V0LmNsb3Nlc3QoJy52YW5pbGxhLWNhbGVuZGFyLXllYXJzX195ZWFyJyk7XG5cdFx0XHRjb25zdCBtb250aEhlYWRlckVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnZhbmlsbGEtY2FsZW5kYXItbW9udGgnKTtcblx0XHRcdGNvbnN0IG1vbnRoSXRlbUVsID0gZS50YXJnZXQuY2xvc2VzdCgnLnZhbmlsbGEtY2FsZW5kYXItbW9udGhzX19tb250aCcpO1xuXG5cdFx0XHRjb25zdCBjbGlja0RheVNpbmdsZSA9ICgpID0+IHtcblx0XHRcdFx0aWYgKGRheUVsLmNsYXNzTGlzdC5jb250YWlucygndmFuaWxsYS1jYWxlbmRhci1kYXlfc2VsZWN0ZWQnKSkge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlcy5zcGxpY2UodGhpcy5zZWxlY3RlZERhdGVzLmluZGV4T2YoZGF5RWwuZGF0YXNldC5jYWxlbmRhckRheSksIDEpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlcyA9IFtdO1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlcy5wdXNoKGRheUVsLmRhdGFzZXQuY2FsZW5kYXJEYXkpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRjb25zdCBjbGlja0RheU11bHRpcGxlID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoZGF5RWwuY2xhc3NMaXN0LmNvbnRhaW5zKCd2YW5pbGxhLWNhbGVuZGFyLWRheV9zZWxlY3RlZCcpKSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZERhdGVzLnNwbGljZSh0aGlzLnNlbGVjdGVkRGF0ZXMuaW5kZXhPZihkYXlFbC5kYXRhc2V0LmNhbGVuZGFyRGF5KSwgMSk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZERhdGVzLnB1c2goZGF5RWwuZGF0YXNldC5jYWxlbmRhckRheSk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGNsaWNrRGF5TXVsdGlwbGVSYW5nZWQgPSAoKSA9PiB7XG5cdFx0XHRcdGlmICh0aGlzLnNlbGVjdGVkRGF0ZXMubGVuZ3RoID4gMSkgdGhpcy5zZWxlY3RlZERhdGVzID0gW107XG5cdFx0XHRcdHRoaXMuc2VsZWN0ZWREYXRlcy5wdXNoKGRheUVsLmRhdGFzZXQuY2FsZW5kYXJEYXkpO1xuXG5cdFx0XHRcdGlmICghdGhpcy5zZWxlY3RlZERhdGVzWzFdKSByZXR1cm47XG5cblx0XHRcdFx0Y29uc3Qgc3RhcnREYXRlID0gbmV3IERhdGUoRGF0ZS5VVEMoXG5cdFx0XHRcdFx0bmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGVzWzBdKS5nZXRVVENGdWxsWWVhcigpLFxuXHRcdFx0XHRcdG5ldyBEYXRlKHRoaXMuc2VsZWN0ZWREYXRlc1swXSkuZ2V0VVRDTW9udGgoKSxcblx0XHRcdFx0XHRuZXcgRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZXNbMF0pLmdldFVUQ0RhdGUoKSxcblx0XHRcdFx0KSk7XG5cblx0XHRcdFx0Y29uc3QgZW5kRGF0ZSA9IG5ldyBEYXRlKERhdGUuVVRDKFxuXHRcdFx0XHRcdG5ldyBEYXRlKHRoaXMuc2VsZWN0ZWREYXRlc1sxXSkuZ2V0VVRDRnVsbFllYXIoKSxcblx0XHRcdFx0XHRuZXcgRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZXNbMV0pLmdldFVUQ01vbnRoKCksXG5cdFx0XHRcdFx0bmV3IERhdGUodGhpcy5zZWxlY3RlZERhdGVzWzFdKS5nZXRVVENEYXRlKCksXG5cdFx0XHRcdCkpO1xuXG5cdFx0XHRcdGNvbnN0IGFkZFNlbGVjdGVkRGF0ZSA9IChkYXkpID0+IHtcblx0XHRcdFx0XHRjb25zdCBkYXRlID0gdGhpcy5nZW5lcmF0ZURhdGUoZGF5KTtcblx0XHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5yYW5nZS5kaXNhYmxlZCAmJiB0aGlzLnNldHRpbmdzLnJhbmdlLmRpc2FibGVkLmluY2x1ZGVzKGRhdGUpKSByZXR1cm47XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RlZERhdGVzLnB1c2goZGF0ZSk7XG5cdFx0XHRcdH07XG5cblx0XHRcdFx0dGhpcy5zZWxlY3RlZERhdGVzID0gW107XG5cblx0XHRcdFx0aWYgKGVuZERhdGUgPiBzdGFydERhdGUpIHtcblx0XHRcdFx0XHRmb3IgKGxldCBpID0gc3RhcnREYXRlOyBpIDw9IGVuZERhdGU7IGkuc2V0VVRDRGF0ZShpLmdldFVUQ0RhdGUoKSArIDEpKSB7XG5cdFx0XHRcdFx0XHRhZGRTZWxlY3RlZERhdGUoaSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGZvciAobGV0IGkgPSBzdGFydERhdGU7IGkgPj0gZW5kRGF0ZTsgaS5zZXRVVENEYXRlKGkuZ2V0VVRDRGF0ZSgpIC0gMSkpIHtcblx0XHRcdFx0XHRcdGFkZFNlbGVjdGVkRGF0ZShpKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRcdGNvbnN0IGNsaWNrRGF5ID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoWydzaW5nbGUnLCAnbXVsdGlwbGUnLCAnbXVsdGlwbGUtcmFuZ2VkJ10uaW5jbHVkZXModGhpcy5zZXR0aW5ncy5zZWxlY3Rpb24uZGF5KSAmJiBkYXlFbCkge1xuXHRcdFx0XHRcdHN3aXRjaCAodGhpcy5zZXR0aW5ncy5zZWxlY3Rpb24uZGF5KSB7XG5cdFx0XHRcdFx0XHRjYXNlICdzaW5nbGUnOlxuXHRcdFx0XHRcdFx0XHRjbGlja0RheVNpbmdsZSgpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ211bHRpcGxlJzpcblx0XHRcdFx0XHRcdFx0Y2xpY2tEYXlNdWx0aXBsZSgpO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdGNhc2UgJ211bHRpcGxlLXJhbmdlZCc6XG5cdFx0XHRcdFx0XHRcdGNsaWNrRGF5TXVsdGlwbGVSYW5nZWQoKTtcblx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHQvLyBubyBkZWZhdWx0XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0aWYgKHRoaXMuYWN0aW9ucy5jbGlja0RheSkgdGhpcy5hY3Rpb25zLmNsaWNrRGF5KGUpO1xuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWQuZGF0ZXMgPSB0aGlzLnNlbGVjdGVkRGF0ZXM7XG5cblx0XHRcdFx0XHRpZiAoZGF5UHJldkVsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNoYW5nZU1vbnRoKCdwcmV2Jyk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmIChkYXlOZXh0RWwpIHtcblx0XHRcdFx0XHRcdHRoaXMuY2hhbmdlTW9udGgoJ25leHQnKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dGhpcy5jcmVhdGVEYXlzKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2UgaWYgKGFycm93RWwgJiYgdGhpcy5jdXJyZW50VHlwZSAhPT0gJ3llYXInICYmIHRoaXMuY3VycmVudFR5cGUgIT09ICdtb250aCcpIHtcblx0XHRcdFx0XHR0aGlzLmNoYW5nZU1vbnRoKGUudGFyZ2V0LnRpdGxlKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgY2xpY2tZZWFyID0gKCkgPT4ge1xuXHRcdFx0XHRpZiAoIXRoaXMuc2V0dGluZ3Muc2VsZWN0aW9uLnllYXIpIHJldHVybjtcblx0XHRcdFx0aWYgKGFycm93RWwgJiYgdGhpcy5jdXJyZW50VHlwZSA9PT0gJ3llYXInKSB7XG5cdFx0XHRcdFx0aWYgKGFycm93TmV4dEVsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnZpZXdZZWFyICs9IDE1O1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoYXJyb3dQcmV2RWwpIHtcblx0XHRcdFx0XHRcdHRoaXMudmlld1llYXIgLT0gMTU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuY3JlYXRlWWVhcnMoKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUeXBlICE9PSAneWVhcicgJiYgeWVhckhlYWRlckVsKSB7XG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVZZWFycygpO1xuXHRcdFx0XHR9IGVsc2UgaWYgKHRoaXMuY3VycmVudFR5cGUgPT09ICd5ZWFyJyAmJiB5ZWFySGVhZGVyRWwpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUeXBlID0gdGhpcy50eXBlO1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAoeWVhckl0ZW1FbCkge1xuXHRcdFx0XHRcdGNvbnN0IHllYXIgPSBOdW1iZXIoeWVhckl0ZW1FbC5kYXRhc2V0LmNhbGVuZGFyWWVhcik7XG5cdFx0XHRcdFx0dGhpcy5jdXJyZW50VHlwZSA9IHRoaXMudHlwZTtcblx0XHRcdFx0XHRpZiAodGhpcy5zZWxlY3RlZE1vbnRoIDwgdGhpcy5kYXRlTWluLmdldFVUQ01vbnRoKCkgJiYgeWVhciA9PT0gdGhpcy5kYXRlTWluLmdldFVUQ0Z1bGxZZWFyKCkpIHtcblx0XHRcdFx0XHRcdHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWQubW9udGggPSB0aGlzLmRhdGVNaW4uZ2V0VVRDTW9udGgoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKHRoaXMuc2VsZWN0ZWRNb250aCA+IHRoaXMuZGF0ZU1heC5nZXRVVENNb250aCgpICYmIHllYXIgPT09IHRoaXMuZGF0ZU1heC5nZXRVVENGdWxsWWVhcigpKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnNldHRpbmdzLnNlbGVjdGVkLm1vbnRoID0gdGhpcy5kYXRlTWF4LmdldFVUQ01vbnRoKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHRoaXMuc2V0dGluZ3Muc2VsZWN0ZWQueWVhciA9IHllYXI7XG5cdFx0XHRcdFx0aWYgKHRoaXMuYWN0aW9ucy5jbGlja1llYXIpIHRoaXMuYWN0aW9ucy5jbGlja1llYXIoZSk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y29uc3QgY2xpY2tNb250aCA9ICgpID0+IHtcblx0XHRcdFx0aWYgKCF0aGlzLnNldHRpbmdzLnNlbGVjdGlvbi5tb250aCkgcmV0dXJuO1xuXHRcdFx0XHRpZiAodGhpcy5jdXJyZW50VHlwZSAhPT0gJ21vbnRoJyAmJiBtb250aEhlYWRlckVsKSB7XG5cdFx0XHRcdFx0dGhpcy5jcmVhdGVNb250aHMoKTtcblx0XHRcdFx0fSBlbHNlIGlmICh0aGlzLmN1cnJlbnRUeXBlID09PSAnbW9udGgnICYmIG1vbnRoSGVhZGVyRWwpIHtcblx0XHRcdFx0XHR0aGlzLmN1cnJlbnRUeXBlID0gdGhpcy50eXBlO1xuXHRcdFx0XHRcdHRoaXMudXBkYXRlKCk7XG5cdFx0XHRcdH0gZWxzZSBpZiAobW9udGhJdGVtRWwpIHtcblx0XHRcdFx0XHRjb25zdCBtb250aCA9IE51bWJlcihtb250aEl0ZW1FbC5kYXRhc2V0LmNhbGVuZGFyTW9udGgpO1xuXHRcdFx0XHRcdHRoaXMuY3VycmVudFR5cGUgPSB0aGlzLnR5cGU7XG5cdFx0XHRcdFx0dGhpcy5zZXR0aW5ncy5zZWxlY3RlZC5tb250aCA9IG1vbnRoO1xuXHRcdFx0XHRcdGlmICh0aGlzLmFjdGlvbnMuY2xpY2tNb250aCkgdGhpcy5hY3Rpb25zLmNsaWNrTW9udGgoZSk7XG5cdFx0XHRcdFx0dGhpcy51cGRhdGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fTtcblxuXHRcdFx0Y2xpY2tEYXkoKTtcblx0XHRcdGNsaWNrWWVhcigpO1xuXHRcdFx0Y2xpY2tNb250aCgpO1xuXHRcdH0pO1xuXHR9XG5cblx0aW5pdCgpIHtcblx0XHRpZiAoIXRoaXMuSFRNTEVsZW1lbnQpIHJldHVybjtcblx0XHR0aGlzLnVwZGF0ZSgpO1xuXHRcdHRoaXMuY2xpY2soKTtcblx0fVxufVxuXG53aW5kb3cuVmFuaWxsYUNhbGVuZGFyID0gVmFuaWxsYUNhbGVuZGFyO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9