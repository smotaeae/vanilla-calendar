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
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ VanillaCalendar)
/* harmony export */ });
class VanillaCalendar {
	constructor(option) {
		this.HTMLElement = option.HTMLElement;
		this.type = option.type ?? 'default';
		this.date = {
			min: option.date?.min ?? '1970-01-01',
			max: option.date?.max ?? '2470-12-31',
			today: option.date?.today ?? new Date(),
		};
		this.settings = {
			lang: option.settings?.lang ?? 'en',
			iso8601: option.settings?.iso8601 ?? true,
			range: {
				min: option.settings?.range?.min ?? this.date.min,
				max: option.settings?.range?.max ?? this.date.max,
				disabled: option.settings?.range?.disabled ?? null,
			},
			selection: {
				day: option.settings?.selection?.day ?? 'single',
				month: option.settings?.selection?.month ?? true,
				year: option.settings?.selection?.year ?? true,
			},
			selected: {
				dates: option.settings?.selected?.dates ?? null,
				month: option.settings?.selected?.month ?? null,
				year: option.settings?.selected?.year ?? null,
				holidays: option.settings?.selected?.holidays ?? null,
			},
			visibility: {
				weekend: option.settings?.visibility?.weekend ?? true,
				today: option.settings?.visibility?.today ?? true,
				disabled: option.settings?.visibility?.disabled ?? false,
			},
		};
		this.actions = {
			clickDay: option.actions?.clickDay ?? null,
			clickMonth: option.actions?.clickMonth ?? null,
			clickYear: option.actions?.clickYear ?? null,
		};
		this.name = {
			months: {
				full: {
					en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
					ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
					ro: ['Ianuarie', 'Februarie', 'Martie', 'Aprilie', 'Mai', 'Iunie', 'Iulie', 'August', 'Septembrie', 'Octombrie', 'Noiembrie', 'Decembrie'],
					pt: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro' ],
				},
				reduction: {
					en: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
					ru: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
					ro: ['Ian', 'Feb', 'Mar', 'Apr', 'Mai', 'Iun', 'Iul', 'Aug', 'Sep', 'Oct', 'Noi', 'Dec'],
					pt: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dec' ],

				},
			},
			week: {
				en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
				ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
				ro: ['Du', 'Lu', 'Ma', 'Mi', 'Jo', 'Vi', 'Sa'],
				pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
			},
			arrow: {
				prev: {
					en: 'Prev',
					ru: 'Назад',
					ro: 'Anterior',
					pt: 'Anterior',
				},
				next: {
					en: 'Next',
					ru: 'Вперед',
					ro: 'Următorul',
					pt: 'Seguinte',
				},
			},
		};
		this.currentType = this.type;
	}

	setVariablesDates() {
		this.selectedDates = [];
		this.selectedMonth = this.date.today.getMonth();
		this.selectedYear = this.date.today.getFullYear();

		if (this.settings.selected.dates !== null) {
			this.selectedDates = this.settings.selected.dates;
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
			<div class="vanilla-calendar-header">
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_prev">
					${this.name.arrow.prev[this.settings.lang] ?? this.name.arrow.prev.en}
				</button>
				<div class="vanilla-calendar-header__content">
					<b class="vanilla-calendar-year${this.settings.selection.year ? '' : ' vanilla-calendar-year_disabled'}"></b>
					<b class="vanilla-calendar-month${this.settings.selection.month ? '' : ' vanilla-calendar-month_disabled'}"></b>
				</div>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next">
					${this.name.arrow.next[this.settings.lang] ?? this.name.arrow.next.en}
				</button>
			</div>
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
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_prev"
					style="visibility: hidden">
					${this.name.arrow.prev[this.settings.lang] ?? this.name.arrow.prev.en}
				</button>
				<div class="vanilla-calendar-header__content">
					<b class="vanilla-calendar-year vanilla-calendar-year_not-active${this.settings.selection.year ? '' : ' vanilla-calendar-year_disabled'}"></b>
					<b class="vanilla-calendar-month"></b>
				</div>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next"
					style="visibility: hidden">
					${this.name.arrow.next[this.settings.lang] ?? this.name.arrow.next.en}
				</button>
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
					class="vanilla-calendar-arrow vanilla-calendar-arrow_prev">
					${this.name.arrow.prev[this.settings.lang] ?? this.name.arrow.prev.en}
				</button>
				<div class="vanilla-calendar-header__content">
					<b class="vanilla-calendar-year"></b>
					<b class="vanilla-calendar-month vanilla-calendar-month_not-active${this.settings.selection.month ? '' : ' vanilla-calendar-month_disabled'}"></b>
				</div>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next">
					${this.name.arrow.next[this.settings.lang] ?? this.name.arrow.next.en}
				</button>
			</div>
			<div class="vanilla-calendar-content">
				<div class="vanilla-calendar-years"></div>
			</div>`;
		}
	}

	controlArrows() {
		if (!['default', 'year'].includes(this.currentType)) return;

		const arrowPrev = this.HTMLElement.querySelector('.vanilla-calendar-arrow_prev');
		const arrowNext = this.HTMLElement.querySelector('.vanilla-calendar-arrow_next');

		const defaultControl = () => {
			if (this.currentType !== 'default') return;

			const isSelectedMinMount = this.selectedMonth === this.dateMin.getMonth();
			const isSelectedMaxMount = this.selectedMonth === this.dateMax.getMonth();
			const isSelectedMinYear = this.selectedYear === this.dateMin.getFullYear();
			const isSelectedMaxYear = this.selectedYear === this.dateMax.getFullYear();

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

			if (this.dateMin.getFullYear() && (this.viewYear - 7) <= this.dateMin.getFullYear()) {
				arrowPrev.style.visibility = 'hidden';
			} else {
				arrowPrev.style.visibility = null;
			}

			if (this.dateMax.getFullYear() && (this.viewYear + 7) >= this.dateMax.getFullYear()) {
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
		monthEl.innerText = this.name.months.full[this.settings.lang][this.selectedMonth];
	}

	createWeek() {
		const weekEl = this.HTMLElement.querySelector('.vanilla-calendar-week');
		const week = [...this.name.week[this.settings.lang]];
		week.push(week.shift());

		for (let i = 0; i < week.length; i++) {
			const weekDayName = week[i];
			const weekDay = document.createElement('span');

			weekDay.className = 'vanilla-calendar-week__day';

			if (this.settings.visibility.weekend && this.settings.iso8601) {
				if (i === 5 || i === 6) {
					weekDay.classList.add('vanilla-calendar-week__day_weekend');
				}
			} else if (this.settings.visibility.weekend && !this.settings.iso8601) {
				if (i === 0 || i === 6) {
					weekDay.classList.add('vanilla-calendar-week__day_weekend');
				}
			}

			weekDay.innerText = `${weekDayName}`;
			weekEl.append(weekDay);
		}
	}

	createDays() {
		const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
		const daysSelectedMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();

		let firstDayWeek = Number(firstDay.getDay());
		if (this.settings.iso8601) firstDayWeek = Number((firstDay.getDay() !== 0 ? firstDay.getDay() : 7) - 1);

		const daysEl = this.HTMLElement.querySelector('.vanilla-calendar-days');
		if (['single', 'multiple'].includes(this.settings.selection.day)) daysEl.classList.add('vanilla-calendar-days_selecting');
		daysEl.innerHTML = '';

		const prevMonth = () => {
			const prevMonthDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
			let day = prevMonthDays - firstDayWeek;
			let year = this.selectedYear;
			let month = this.selectedMonth;

			if (this.selectedMonth === 0) {
				month = this.name.months.full[this.settings.lang].length;
				year = this.selectedYear - 1;
			} else if (this.selectedMonth < 10) {
				month = `0${this.selectedMonth}`;
			}

			for (let i = 0; i < firstDayWeek; i++) {
				const dayEl = document.createElement('span');

				day += 1;

				dayEl.className = 'vanilla-calendar-day vanilla-calendar-day_prev';
				dayEl.innerText = `${day}`;
				dayEl.dataset.calendarDay = `${year}-${month}-${day}`;
				daysEl.append(dayEl);
			}
		};

		const selectedMonth = () => {
			const year = this.selectedYear;
			const month = this.selectedMonth < 9 ? `0${this.selectedMonth + 1}` : this.selectedMonth + 1;

			for (let i = 1; i <= daysSelectedMonth; i++) {
				const dayEl = document.createElement('span');
				const day = i < 10 ? `0${i}` : i;

				const date = `${year}-${month}-${day}`;
				const dayID = new Date(date).getDay();

				dayEl.className = 'vanilla-calendar-day';
				dayEl.innerText = `${i}`;
				dayEl.dataset.calendarDay = date;

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
				const thisToday = i === this.date.today.getDate();
				const thisMonth = this.selectedMonth === this.date.today.getMonth();
				const thisYear = this.selectedYear === this.date.today.getFullYear();

				if (this.settings.visibility.today && thisToday && thisMonth && thisYear) {
					dayEl.classList.add('vanilla-calendar-day_today');
				}

				// if selected day
				if (this.selectedDates.find((selectedDate) => selectedDate === date)) {
					dayEl.classList.add('vanilla-calendar-day_selected');
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

				daysEl.append(dayEl);
			}
		};

		const nextMonth = () => {
			const total = firstDayWeek + daysSelectedMonth;
			const rows = Math.ceil(total / this.name.week[this.settings.lang].length);
			const nextDays = (this.name.week[this.settings.lang].length * rows) - total;

			let year = this.selectedYear;
			let month = this.selectedMonth + 2;

			if ((this.selectedMonth + 1) === this.name.months.full[this.settings.lang].length) {
				month = '01';
				year = this.selectedYear + 1;
			} else if ((this.selectedMonth + 2) < 10) {
				month = `0${this.selectedMonth + 2}`;
			}

			for (let i = 1; i <= nextDays; i++) {
				const dayEl = document.createElement('span');
				const day = i < 10 ? `0${i}` : i;

				dayEl.className = 'vanilla-calendar-day vanilla-calendar-day_next';
				dayEl.innerText = `${i}`;
				dayEl.dataset.calendarDay = `${year}-${month}-${day}`;

				daysEl.append(dayEl);
			}
		};

		prevMonth();
		selectedMonth();
		nextMonth();
	}

	changeMonth(element) {
		const lastMonth = this.name.months.full[this.settings.lang].length - 1;

		if (element.closest('.vanilla-calendar-arrow_prev')) {
			if (this.selectedMonth !== 0) {
				this.selectedMonth -= 1;
			} else if (this.settings.selection.year) {
				this.selectedYear -= 1;
				this.selectedMonth = lastMonth;
			}
		} else if (element.closest('.vanilla-calendar-arrow_next')) {
			if (this.selectedMonth !== lastMonth) {
				this.selectedMonth += 1;
			} else if (this.settings.selection.year) {
				this.selectedYear += 1;
				this.selectedMonth = 0;
			}
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

		for (let i = this.viewYear - 7; i < this.viewYear + 8; i++) {
			const year = i;
			const yearEl = document.createElement('span');
			yearEl.className = 'vanilla-calendar-years__year';

			if (year === this.selectedYear) {
				yearEl.classList.add('vanilla-calendar-years__year_selected');
			}
			if (year < this.dateMin.getFullYear()) {
				yearEl.classList.add('vanilla-calendar-years__year_disabled');
			}
			if (year > this.dateMax.getFullYear()) {
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

		const months = this.name.months.reduction[this.settings.lang];

		for (let i = 0; i < months.length; i++) {
			const month = months[i];
			const monthEl = document.createElement('span');

			monthEl.className = 'vanilla-calendar-months__month';

			if (i === this.selectedMonth) {
				monthEl.classList.add('vanilla-calendar-months__month_selected');
			}
			if (i < this.dateMin.getMonth() && this.selectedYear === this.dateMin.getFullYear()) {
				monthEl.classList.add('vanilla-calendar-months__month_disabled');
			}
			if (i > this.dateMax.getMonth() && this.selectedYear === this.dateMax.getFullYear()) {
				monthEl.classList.add('vanilla-calendar-months__month_disabled');
			}

			monthEl.dataset.calendarMonth = i;

			monthEl.innerText = `${month}`;
			monthsEl.append(monthEl);
		}
	}

	update() {
		this.setVariablesDates();
		this.createDOM();
		this.controlArrows();
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

			const clickDefault = () => {
				if (['single', 'multiple'].includes(this.settings.selection.day) && dayEl) {
					if (!dayPrevEl && !dayNextEl) {
						if (this.actions.clickDay) this.actions.clickDay(e);

						if (dayEl.classList.contains('vanilla-calendar-day_selected')) {
							this.selectedDates.splice(this.selectedDates.indexOf(dayEl.dataset.calendarDay), 1);
						} else {
							if (this.settings.selection.day === 'single') {
								this.selectedDates = [];
							}
							this.selectedDates.push(dayEl.dataset.calendarDay);
						}

						this.createDays();
					}
				} else if (arrowEl && this.currentType !== 'year' && this.currentType !== 'month') {
					this.changeMonth(e.target);
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
					if (this.actions.clickYear) this.actions.clickYear(e);
					const year = Number(yearItemEl.dataset.calendarYear);
					this.currentType = this.type;
					if (this.selectedMonth < this.dateMin.getMonth() && year === this.dateMin.getFullYear()) {
						this.settings.selected.month = this.dateMin.getMonth();
					}
					if (this.selectedMonth > this.dateMax.getMonth() && year === this.dateMax.getFullYear()) {
						this.settings.selected.month = this.dateMax.getMonth();
					}
					this.settings.selected.year = year;
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
					if (this.actions.clickMonth) this.actions.clickMonth(e);
					const month = Number(monthItemEl.dataset.calendarMonth);
					this.currentType = this.type;
					this.settings.selected.month = month;
					this.update();
				}
			};

			clickDefault();
			clickYear();
			clickMonth();
		});
	}

	init() {
		this.update();
		this.click();
	}
}

window.VanillaCalendar = VanillaCalendar;

/******/ 	return __webpack_exports__;
/******/ })()
;
});