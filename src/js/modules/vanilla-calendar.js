export default class VanillaCalendar {
	constructor(option) {
		this.calendar = option.calendar;
		this.lang = option.lang ?? 'eng';
		this.day = new Date();
		this.year = this.day.getFullYear();
		this.month = this.day.getMonth();
		this.today = this.day.getDate();

		this.selectYear = this.year;
		this.selectMonth = this.month;

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

	writeMonth() {
		const calendarMonth = this.calendar.querySelector('.vanilla-calendar-month');

		calendarMonth.innerText = `${this.name.months[this.lang][this.selectMonth]} ${this.selectYear}`;
	}

	writeWeek() {
		const calendarWeek = this.calendar.querySelector('.vanilla-calendar-week');

		for (let i = 0; i < this.name.week[this.lang].length; i++) {
			const weekDayName = this.name.week[this.lang][i];
			const weekDay = document.createElement('span');

			weekDay.className = 'vanilla-calendar-week__day';
			weekDay.innerText = `${weekDayName}`;
			calendarWeek.append(weekDay);
		}
	}

	writeDays() {
		this.firstDay = new Date(this.selectYear, this.selectMonth, 1);
		this.firstWeekDay = Number((this.firstDay.getDay() !== 0 ? this.firstDay.getDay() : 7) - 1);
		this.monthDays = new Date(this.selectYear, this.selectMonth + 1, 0).getDate();

		const calendarDays = this.calendar.querySelector('.vanilla-calendar-days');
		calendarDays.innerHTML = '';

		for (let i = 0; i < this.firstWeekDay; i++) {
			const day = document.createElement('span');

			day.className = 'vanilla-calendar-day vanilla-calendar-day_disabled';
			calendarDays.append(day);
		}

		for (let i = 1; i <= this.monthDays; i++) {
			const day = document.createElement('span');
			const dataDay = i < 10 ? `0${i}` : i;
			const dataMonth = this.selectMonth < 10 ? `0${this.selectMonth + 1}` : this.selectMonth + 1;

			day.className = 'vanilla-calendar-day';
			day.innerText = `${i}`;
			day.dataset.calendarDate = `${this.selectYear}-${dataMonth}-${dataDay}`;

			if (i === this.today && this.selectMonth === this.month && this.selectYear === this.year) {
				day.classList.add('vanilla-calendar-day_today');
			}

			calendarDays.append(day);
		}
	}

	update() {
		this.writeMonth();
		this.writeDays();
	}

	changeMonth(element) {
		const lasMonth = this.name.months[this.lang].length - 1;

		if (element.closest('.vanilla-calendar-arrow_prev')) {
			if (this.selectMonth !== 0) {
				this.selectMonth -= 1;
			} else {
				this.selectYear -= 1;
				this.selectMonth = lasMonth;
			}
		} else if (element.closest('.vanilla-calendar-arrow_next')) {
			if (this.selectMonth !== lasMonth) {
				this.selectMonth += 1;
			} else {
				this.selectYear += 1;
				this.selectMonth = 0;
			}
		}

		this.update();
	}

	hasClick() {
		this.calendar.addEventListener('click', (e) => {
			if (e.target.closest('.vanilla-calendar-arrow')) {
				this.changeMonth(e.target);
			}
		});
	}

	init() {
		// eslint-disable-next-line no-console
		this.createDOM();
		this.writeMonth();
		this.writeWeek();
		this.writeDays();
		this.hasClick();
	}
}
