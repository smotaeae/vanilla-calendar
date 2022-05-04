export default class VanillaCalendar {
	constructor(option) {
		this.calendar = option.calendar;
		this.day = new Date();

		this.settings = {
			lang: option.settings?.lang ?? 'ru',
			selecting: option.settings?.selecting ?? true,
			weekend: option.settings?.weekend ?? true,
			today: option.settings?.today ?? true,
			range: {
				min: option.settings?.range?.min ?? null,
				max: option.settings?.range?.max ?? null,
				values: option.settings?.range?.values ?? null,
			},
			selected: {
				date: option.settings?.selected?.date ?? null,
				month: option.settings?.selected?.month ? option.settings.selected.month - 1 : null,
				year: option.settings?.selected?.year ?? null,
				holidays: option.settings?.selected?.holidays ?? null,
			},
		};

		this.name = {
			months: {
				eng: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
			},
			week: {
				eng: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
				ru: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
			},
			arrow: {
				prev: {
					eng: 'Prev',
					ru: 'Назад',
				},
				next: {
					eng: 'Next',
					ru: 'Вперед',
				},
			},
		};
	}

	createDOM() {
		this.calendar.innerHTML = `
			<div class="vanilla-calendar-header">
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_prev">
					${this.name.arrow.prev[this.settings.lang]}
				</button>
				<b class="vanilla-calendar-month"></b>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next">
					${this.name.arrow.prev[this.settings.lang]}
				</button>
			</div>
			<div class="vanilla-calendar-content">
				<div class="vanilla-calendar-week"></div>
				<div class="vanilla-calendar-days"></div>
			</div>
		`;
	}

	selectingDate() {
		this.selectedDate = null;
		this.selectedMonth = this.day.getMonth();
		this.selectedYear = this.day.getFullYear();

		if (this.settings.selected.date !== null) {
			this.selectedDate = this.settings.selected.date;
		}

		if (this.settings.selected.month !== null && this.settings.selected.month >= 0 && this.settings.selected.month < 12) {
			this.selectedMonth = this.settings.selected.month;
		}

		if (this.settings.selected.year !== null && this.settings.selected.year >= 1970 && this.settings.selected.year <= 9999) {
			this.selectedYear = this.settings.selected.year;
		}
	}

	createMonth() {
		const monthEl = this.calendar.querySelector('.vanilla-calendar-month');

		monthEl.innerText = `${this.name.months[this.settings.lang][this.selectedMonth]} ${this.selectedYear}`;
	}

	createWeek() {
		const weekEl = this.calendar.querySelector('.vanilla-calendar-week');

		for (let i = 0; i < this.name.week[this.settings.lang].length; i++) {
			const weekDayName = this.name.week[this.settings.lang][i];
			const weekDay = document.createElement('span');

			weekDay.className = 'vanilla-calendar-week__day';

			if (this.settings.weekend && (i === 5 || i === 6)) {
				weekDay.classList.add('vanilla-calendar-week__day_weekend');
			}

			weekDay.innerText = `${weekDayName}`;
			weekEl.append(weekDay);
		}
	}

	createDays() {
		const firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
		const firstDayWeek = Number((firstDay.getDay() !== 0 ? firstDay.getDay() : 7) - 1);
		const daysSelectedMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();

		const daysEl = this.calendar.querySelector('.vanilla-calendar-days');
		daysEl.innerHTML = '';

		if (this.settings.selecting) daysEl.classList.add('vanilla-calendar-days_selecting');

		const prevMonth = () => {
			const prevMonthDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
			let day = prevMonthDays - firstDayWeek;
			let year = this.selectedYear;
			let month = this.selectedMonth;

			if (this.selectedMonth === 0) {
				month = this.name.months[this.settings.lang].length;
				year = this.selectedYear - 1;
			} else if (this.selectedMonth < 10) {
				month = `0${this.selectedMonth}`;
			}

			for (let i = 0; i < firstDayWeek; i++) {
				const dayEl = document.createElement('span');

				day += 1;

				dayEl.className = 'vanilla-calendar-day vanilla-calendar-day_prev';
				dayEl.innerText = `${day}`;
				dayEl.dataset.calendarDate = `${year}-${month}-${day}`;
				daysEl.append(dayEl);
			}
		};

		const selectedMonth = () => {
			const year = this.selectedYear;
			const month = this.selectedMonth < 10 ? `0${this.selectedMonth + 1}` : this.selectedMonth + 1;

			for (let i = 1; i <= daysSelectedMonth; i++) {
				const dayEl = document.createElement('span');
				const day = i < 10 ? `0${i}` : i;

				const date = `${year}-${month}-${day}`;
				const dayID = new Date(date).getDay();

				dayEl.className = 'vanilla-calendar-day';
				dayEl.innerText = `${i}`;
				dayEl.dataset.calendarDate = date;

				// if weekend
				if (this.settings.weekend && (dayID === 6 || dayID === 0)) {
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
				const thisToday = i === this.day.getDate();
				const thisMonth = this.selectedMonth === this.day.getMonth();
				const thisYear = this.selectedYear === this.day.getFullYear();

				if (this.settings.today && thisToday && thisMonth && thisYear) {
					dayEl.classList.add('vanilla-calendar-day_today');
				}

				// if selected day
				if (this.selectedDate === date) {
					dayEl.classList.add('vanilla-calendar-day_selected');
				}

				// if range min/max
				if (this.settings.range.min > date || this.settings.range.max < date) {
					dayEl.classList.add('vanilla-calendar-day_disabled');
				}

				// if range values
				if (Array.isArray(this.settings.range.values)) {
					if (!this.settings.range.min && !this.settings.range.max) {
						dayEl.classList.add('vanilla-calendar-day_disabled');
					}

					this.settings.range.values.forEach((value) => {
						if (value === date) {
							dayEl.classList.remove('vanilla-calendar-day_disabled');
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

			if ((this.selectedMonth + 1) === this.name.months[this.settings.lang].length) {
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
				dayEl.dataset.calendarDate = `${year}-${month}-${day}`;

				daysEl.append(dayEl);
			}
		};

		prevMonth();
		selectedMonth();
		nextMonth();
	}

	changeMonth(element) {
		const lastMonth = this.name.months[this.settings.lang].length - 1;

		if (element.closest('.vanilla-calendar-arrow_prev')) {
			if (this.selectedMonth !== 0) {
				this.selectedMonth -= 1;
			} else {
				this.selectedYear -= 1;
				this.selectedMonth = lastMonth;
			}
		} else if (element.closest('.vanilla-calendar-arrow_next')) {
			if (this.selectedMonth !== lastMonth) {
				this.selectedMonth += 1;
			} else {
				this.selectedYear += 1;
				this.selectedMonth = 0;
			}
		}

		this.createMonth();
		this.createDays();
	}

	changeDay(element) {
		if (!element.closest('.vanilla-calendar-day_prev') && !element.closest('.vanilla-calendar-day_next')) {
			this.selectedDate = element.dataset.calendarDate;
			this.createDays();
		}
	}

	click() {
		this.calendar.addEventListener('click', (e) => {
			if (e.target.closest('.vanilla-calendar-arrow')) {
				this.changeMonth(e.target);
			} else if (this.settings.selecting && e.target.closest('.vanilla-calendar-day')) {
				this.changeDay(e.target);
			}
		});
	}

	update() {
		this.selectingDate();
		this.createMonth();
		this.createDays();
	}

	init() {
		this.createDOM();
		this.selectingDate();
		this.createMonth();
		this.createWeek();
		this.createDays();
		this.click();
	}
}
