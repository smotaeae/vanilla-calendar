"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

class VanillaCalendar {
  constructor(option) {
    var _option$today, _option$settings$lang, _option$settings, _option$settings$iso, _option$settings2, _option$settings$sele, _option$settings3, _option$settings$week, _option$settings4, _option$settings$toda, _option$settings5, _option$settings$rang, _option$settings6, _option$settings6$ran, _option$settings$rang2, _option$settings7, _option$settings7$ran, _option$settings$rang3, _option$settings8, _option$settings8$ran, _option$settings$sele2, _option$settings9, _option$settings9$sel, _option$settings10, _option$settings10$se, _option$settings$sele3, _option$settings11, _option$settings11$se, _option$settings$sele4, _option$settings12, _option$settings12$se, _option$settings$visi, _option$settings13, _option$settings13$vi, _option$settings$visi2, _option$settings14, _option$settings14$vi, _option$settings$visi3, _option$settings15, _option$settings15$vi, _option$settings15$vi2, _option$settings$visi4, _option$settings16, _option$settings16$vi, _option$settings16$vi2;

    this.calendar = option.calendar;
    this.today = (_option$today = option.today) !== null && _option$today !== void 0 ? _option$today : new Date();
    this.settings = {
      lang: (_option$settings$lang = (_option$settings = option.settings) === null || _option$settings === void 0 ? void 0 : _option$settings.lang) !== null && _option$settings$lang !== void 0 ? _option$settings$lang : 'ru',
      iso8601: (_option$settings$iso = (_option$settings2 = option.settings) === null || _option$settings2 === void 0 ? void 0 : _option$settings2.iso8601) !== null && _option$settings$iso !== void 0 ? _option$settings$iso : true,
      selecting: (_option$settings$sele = (_option$settings3 = option.settings) === null || _option$settings3 === void 0 ? void 0 : _option$settings3.selecting) !== null && _option$settings$sele !== void 0 ? _option$settings$sele : true,
      weekend: (_option$settings$week = (_option$settings4 = option.settings) === null || _option$settings4 === void 0 ? void 0 : _option$settings4.weekend) !== null && _option$settings$week !== void 0 ? _option$settings$week : true,
      today: (_option$settings$toda = (_option$settings5 = option.settings) === null || _option$settings5 === void 0 ? void 0 : _option$settings5.today) !== null && _option$settings$toda !== void 0 ? _option$settings$toda : true,
      range: {
        min: (_option$settings$rang = (_option$settings6 = option.settings) === null || _option$settings6 === void 0 ? void 0 : (_option$settings6$ran = _option$settings6.range) === null || _option$settings6$ran === void 0 ? void 0 : _option$settings6$ran.min) !== null && _option$settings$rang !== void 0 ? _option$settings$rang : null,
        max: (_option$settings$rang2 = (_option$settings7 = option.settings) === null || _option$settings7 === void 0 ? void 0 : (_option$settings7$ran = _option$settings7.range) === null || _option$settings7$ran === void 0 ? void 0 : _option$settings7$ran.max) !== null && _option$settings$rang2 !== void 0 ? _option$settings$rang2 : null,
        values: (_option$settings$rang3 = (_option$settings8 = option.settings) === null || _option$settings8 === void 0 ? void 0 : (_option$settings8$ran = _option$settings8.range) === null || _option$settings8$ran === void 0 ? void 0 : _option$settings8$ran.values) !== null && _option$settings$rang3 !== void 0 ? _option$settings$rang3 : null
      },
      selected: {
        date: (_option$settings$sele2 = (_option$settings9 = option.settings) === null || _option$settings9 === void 0 ? void 0 : (_option$settings9$sel = _option$settings9.selected) === null || _option$settings9$sel === void 0 ? void 0 : _option$settings9$sel.date) !== null && _option$settings$sele2 !== void 0 ? _option$settings$sele2 : null,
        month: (_option$settings10 = option.settings) !== null && _option$settings10 !== void 0 && (_option$settings10$se = _option$settings10.selected) !== null && _option$settings10$se !== void 0 && _option$settings10$se.month ? option.settings.selected.month - 1 : null,
        year: (_option$settings$sele3 = (_option$settings11 = option.settings) === null || _option$settings11 === void 0 ? void 0 : (_option$settings11$se = _option$settings11.selected) === null || _option$settings11$se === void 0 ? void 0 : _option$settings11$se.year) !== null && _option$settings$sele3 !== void 0 ? _option$settings$sele3 : null,
        holidays: (_option$settings$sele4 = (_option$settings12 = option.settings) === null || _option$settings12 === void 0 ? void 0 : (_option$settings12$se = _option$settings12.selected) === null || _option$settings12$se === void 0 ? void 0 : _option$settings12$se.holidays) !== null && _option$settings$sele4 !== void 0 ? _option$settings$sele4 : null
      },
      visibility: {
        year: (_option$settings$visi = (_option$settings13 = option.settings) === null || _option$settings13 === void 0 ? void 0 : (_option$settings13$vi = _option$settings13.visibility) === null || _option$settings13$vi === void 0 ? void 0 : _option$settings13$vi.year) !== null && _option$settings$visi !== void 0 ? _option$settings$visi : true,
        months: (_option$settings$visi2 = (_option$settings14 = option.settings) === null || _option$settings14 === void 0 ? void 0 : (_option$settings14$vi = _option$settings14.visibility) === null || _option$settings14$vi === void 0 ? void 0 : _option$settings14$vi.months) !== null && _option$settings$visi2 !== void 0 ? _option$settings$visi2 : true,
        arrows: {
          prev: (_option$settings$visi3 = (_option$settings15 = option.settings) === null || _option$settings15 === void 0 ? void 0 : (_option$settings15$vi = _option$settings15.visibility) === null || _option$settings15$vi === void 0 ? void 0 : (_option$settings15$vi2 = _option$settings15$vi.arrows) === null || _option$settings15$vi2 === void 0 ? void 0 : _option$settings15$vi2.prev) !== null && _option$settings$visi3 !== void 0 ? _option$settings$visi3 : true,
          next: (_option$settings$visi4 = (_option$settings16 = option.settings) === null || _option$settings16 === void 0 ? void 0 : (_option$settings16$vi = _option$settings16.visibility) === null || _option$settings16$vi === void 0 ? void 0 : (_option$settings16$vi2 = _option$settings16$vi.arrows) === null || _option$settings16$vi2 === void 0 ? void 0 : _option$settings16$vi2.next) !== null && _option$settings$visi4 !== void 0 ? _option$settings$visi4 : true
        }
      }
    };
    this.name = {
      months: {
        eng: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      },
      week: {
        eng: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      },
      arrow: {
        prev: {
          eng: 'Prev',
          ru: 'Назад'
        },
        next: {
          eng: 'Next',
          ru: 'Вперед'
        }
      }
    };
  }

  createDOM() {
    this.calendar.innerHTML = `
			<div class="vanilla-calendar-header">
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_prev"
					style="${this.settings.visibility.arrows.prev ? '' : 'visibility: hidden'}">
					${this.name.arrow.prev[this.settings.lang]}
				</button>
				<b class="vanilla-calendar-month"></b>
				<button type="button"
					class="vanilla-calendar-arrow vanilla-calendar-arrow_next"
					style="${this.settings.visibility.arrows.next ? '' : 'visibility: hidden'}">
					${this.name.arrow.next[this.settings.lang]}
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
    this.selectedMonth = this.today.getMonth();
    this.selectedYear = this.today.getFullYear();

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
    const arrowPrev = this.calendar.querySelector('.vanilla-calendar-arrow_prev');
    const arrowNext = this.calendar.querySelector('.vanilla-calendar-arrow_next');
    const monthMin = this.settings.range.min ? new Date(this.settings.range.min).getMonth() : null;
    const monthMax = this.settings.range.max ? new Date(this.settings.range.max).getMonth() : null;

    if (this.settings.visibility.months !== true && monthMin !== null && monthMin === this.selectedMonth) {
      arrowPrev.style.visibility = 'hidden';
    } else if (this.settings.visibility.arrows.prev) {
      arrowPrev.style.visibility = null;
    }

    if (!this.settings.visibility.months && monthMax !== null && monthMax === this.selectedMonth) {
      arrowNext.style.visibility = 'hidden';
    } else if (this.settings.visibility.arrows.next) {
      arrowNext.style.visibility = null;
    }

    if (this.settings.visibility.year) {
      monthEl.innerText = `${this.name.months[this.settings.lang][this.selectedMonth]} ${this.selectedYear}`;
    } else {
      monthEl.innerText = this.name.months[this.settings.lang][this.selectedMonth];
    }
  }

  createWeek() {
    const weekEl = this.calendar.querySelector('.vanilla-calendar-week');
    const week = this.name.week[this.settings.lang];
    week.push(week.shift());

    for (let i = 0; i < week.length; i++) {
      const weekDayName = week[i];
      const weekDay = document.createElement('span');
      weekDay.className = 'vanilla-calendar-week__day';

      if (this.settings.weekend && this.settings.iso8601) {
        if (i === 5 || i === 6) {
          weekDay.classList.add('vanilla-calendar-week__day_weekend');
        }
      } else if (this.settings.weekend && !this.settings.iso8601) {
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
    let firstDayWeek = Number(firstDay.getDay());

    if (this.settings.iso8601) {
      firstDayWeek = Number((firstDay.getDay() !== 0 ? firstDay.getDay() : 7) - 1);
    }

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
        dayEl.dataset.calendarDay = `${year}-${month}-${day}`;
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
        dayEl.dataset.calendarDay = date; // if weekend

        if (this.settings.weekend && (dayID === 0 || dayID === 6)) {
          dayEl.classList.add('vanilla-calendar-day_weekend');
        } // if holidays


        if (Array.isArray(this.settings.selected.holidays)) {
          this.settings.selected.holidays.forEach(holiday => {
            if (holiday === date) {
              dayEl.classList.add('vanilla-calendar-day_holiday');
            }
          });
        } // if today


        const thisToday = i === this.today.getDate();
        const thisMonth = this.selectedMonth === this.today.getMonth();
        const thisYear = this.selectedYear === this.today.getFullYear();

        if (this.settings.today && thisToday && thisMonth && thisYear) {
          dayEl.classList.add('vanilla-calendar-day_today');
        } // if selected day


        if (this.selectedDate === date) {
          dayEl.classList.add('vanilla-calendar-day_selected');
        } // if range min/max


        if (this.settings.range.min > date || this.settings.range.max < date) {
          dayEl.classList.add('vanilla-calendar-day_disabled');
        } // if range values


        if (Array.isArray(this.settings.range.values)) {
          if (!this.settings.range.min && !this.settings.range.max) {
            dayEl.classList.add('vanilla-calendar-day_disabled');
          }

          this.settings.range.values.forEach(value => {
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
      const nextDays = this.name.week[this.settings.lang].length * rows - total;
      let year = this.selectedYear;
      let month = this.selectedMonth + 2;

      if (this.selectedMonth + 1 === this.name.months[this.settings.lang].length) {
        month = '01';
        year = this.selectedYear + 1;
      } else if (this.selectedMonth + 2 < 10) {
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
      this.selectedDate = element.dataset.calendarDay;
      this.createDays();
    }
  }

  click() {
    this.calendar.addEventListener('click', e => {
      if (e.target.closest('.vanilla-calendar-arrow')) {
        this.changeMonth(e.target);
      } else if (this.settings.selecting && e.target.closest('.vanilla-calendar-day')) {
        this.changeDay(e.target);
      }
    });
  }

  update() {
    this.createDOM();
    this.selectingDate();
    this.createMonth();
    this.createWeek();
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

exports.default = VanillaCalendar;
