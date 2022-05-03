export default class VanillaCalendar {
	constructor(option) {
		this.calendar = option.calendar;
		this.lang = option.lang ?? 'eng';
		this.day = new Date();
		this.year = this.day.getFullYear();
		this.month = this.day.getMonth();
		this.today = this.day.getDate();

		this.selectedYear = this.year;
		this.selectedMonth = this.month;

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
					${this.name.arrow.prev[this.lang]}
				</button>
				<b class="vanilla-calendar-month"></b>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next">
					${this.name.arrow.prev[this.lang]}
				</button>
			</div>
			<div class="vanilla-calendar-content">
				<div class="vanilla-calendar-week"></div>
				<div class="vanilla-calendar-days"></div>
			</div>
		`;
	}

	createMonth() {
		const monthEl = this.calendar.querySelector('.vanilla-calendar-month');

		monthEl.innerText = `${this.name.months[this.lang][this.selectedMonth]} ${this.selectedYear}`;
	}

	createWeek() {
		const weekEl = this.calendar.querySelector('.vanilla-calendar-week');

		for (let i = 0; i < this.name.week[this.lang].length; i++) {
			const weekDayName = this.name.week[this.lang][i];
			const weekDay = document.createElement('span');

			weekDay.className = 'vanilla-calendar-week__day';
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

		const prevMonth = () => {
			const prevMonthDays = new Date(this.selectedYear, this.selectedMonth, 0).getDate();
			let dataDay = prevMonthDays - firstDayWeek;
			let year = this.selectedYear;
			let month = 0;

			for (let i = 0; i < firstDayWeek; i++) {
				const day = document.createElement('span');

				if (this.selectedMonth === 0) {
					month = this.name.months[this.lang].length;
					year = this.selectedYear - 1;
				} else if (this.selectedMonth < 10) {
					month = `0${this.selectedMonth}`;
				} else {
					month = this.selectedMonth;
				}

				dataDay += 1;

				day.className = 'vanilla-calendar-day vanilla-calendar-day_prev';
				day.innerText = `${dataDay}`;
				day.dataset.calendarDate = `${year}-${month}-${dataDay}`;
				daysEl.append(day);
			}
		};

		const selectedMonth = () => {
			const year = this.selectedYear;
			let month = 0;

			for (let i = 1; i <= daysSelectedMonth; i++) {
				const day = document.createElement('span');
				const dataDay = i < 10 ? `0${i}` : i;

				if (this.selectedMonth < 10) {
					month = `0${this.selectedMonth}`;
				} else {
					month = this.selectedMonth;
				}

				day.className = 'vanilla-calendar-day';
				day.innerText = `${i}`;
				day.dataset.calendarDate = `${year}-${month}-${dataDay}`;

				if (i === this.today && this.selectedMonth === this.month && this.selectedYear === this.year) {
					day.classList.add('vanilla-calendar-day_today');
				}

				daysEl.append(day);
			}
		};

		const nextMonth = () => {
			const total = firstDayWeek + daysSelectedMonth;
			const rows = Math.ceil(total / this.name.week[this.lang].length);
			const nextDays = (this.name.week[this.lang].length * rows) - total;

			let year = this.selectedYear;
			let month = 0;

			for (let i = 1; i <= nextDays; i++) {
				const day = document.createElement('span');
				const dataDay = i < 10 ? `0${i}` : i;

				if ((this.selectedMonth + 1) === this.name.months[this.lang].length) {
					month = '01';
					year = this.selectedYear + 1;
				} else if ((this.selectedMonth + 2) < 10) {
					month = `0${this.selectedMonth + 2}`;
				} else {
					month = this.selectedMonth + 2;
				}

				day.className = 'vanilla-calendar-day vanilla-calendar-day_next';
				day.innerText = `${i}`;
				day.dataset.calendarDate = `${year}-${month}-${dataDay}`;
				daysEl.append(day);
			}
		};

		prevMonth();
		selectedMonth();
		nextMonth();
	}

	changeMonth(element) {
		const lastMonth = this.name.months[this.lang].length - 1;

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

	hasClick() {
		this.calendar.addEventListener('click', (e) => {
			if (e.target.closest('.vanilla-calendar-arrow')) {
				this.changeMonth(e.target);
			}
		});
	}

	update() {
		this.createMonth();
		this.createDays();
	}

	init() {
		this.createDOM();
		this.createMonth();
		this.createWeek();
		this.createDays();
		this.hasClick();
	}
}
