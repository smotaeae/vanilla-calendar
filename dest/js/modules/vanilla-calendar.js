"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var VanillaCalendar = /*#__PURE__*/function () {
  function VanillaCalendar(option) {
    var _option$date, _option$settings$lang, _option$settings, _option$settings$iso, _option$settings2, _option$settings$sele, _option$settings3, _option$settings$rang, _option$settings4, _option$settings4$ran, _option$settings$rang2, _option$settings5, _option$settings5$ran, _option$settings$rang3, _option$settings6, _option$settings6$ran, _option$settings$sele2, _option$settings7, _option$settings7$sel, _option$settings8, _option$settings8$sel, _option$settings$sele3, _option$settings9, _option$settings9$sel, _option$settings$sele4, _option$settings10, _option$settings10$se, _option$settings$visi, _option$settings11, _option$settings11$vi, _option$settings$visi2, _option$settings12, _option$settings12$vi, _option$settings$visi3, _option$settings13, _option$settings13$vi, _option$settings$visi4, _option$settings14, _option$settings14$vi, _option$settings$visi5, _option$settings15, _option$settings15$vi, _option$settings15$vi2, _option$settings$visi6, _option$settings16, _option$settings16$vi, _option$settings16$vi2;

    _classCallCheck(this, VanillaCalendar);

    this.HTMLElement = option.HTMLElement;
    this.date = (_option$date = option.date) !== null && _option$date !== void 0 ? _option$date : new Date();
    this.settings = {
      lang: (_option$settings$lang = (_option$settings = option.settings) === null || _option$settings === void 0 ? void 0 : _option$settings.lang) !== null && _option$settings$lang !== void 0 ? _option$settings$lang : 'en',
      iso8601: (_option$settings$iso = (_option$settings2 = option.settings) === null || _option$settings2 === void 0 ? void 0 : _option$settings2.iso8601) !== null && _option$settings$iso !== void 0 ? _option$settings$iso : true,
      selecting: (_option$settings$sele = (_option$settings3 = option.settings) === null || _option$settings3 === void 0 ? void 0 : _option$settings3.selecting) !== null && _option$settings$sele !== void 0 ? _option$settings$sele : true,
      range: {
        min: (_option$settings$rang = (_option$settings4 = option.settings) === null || _option$settings4 === void 0 ? void 0 : (_option$settings4$ran = _option$settings4.range) === null || _option$settings4$ran === void 0 ? void 0 : _option$settings4$ran.min) !== null && _option$settings$rang !== void 0 ? _option$settings$rang : null,
        max: (_option$settings$rang2 = (_option$settings5 = option.settings) === null || _option$settings5 === void 0 ? void 0 : (_option$settings5$ran = _option$settings5.range) === null || _option$settings5$ran === void 0 ? void 0 : _option$settings5$ran.max) !== null && _option$settings$rang2 !== void 0 ? _option$settings$rang2 : null,
        values: (_option$settings$rang3 = (_option$settings6 = option.settings) === null || _option$settings6 === void 0 ? void 0 : (_option$settings6$ran = _option$settings6.range) === null || _option$settings6$ran === void 0 ? void 0 : _option$settings6$ran.values) !== null && _option$settings$rang3 !== void 0 ? _option$settings$rang3 : null
      },
      selected: {
        date: (_option$settings$sele2 = (_option$settings7 = option.settings) === null || _option$settings7 === void 0 ? void 0 : (_option$settings7$sel = _option$settings7.selected) === null || _option$settings7$sel === void 0 ? void 0 : _option$settings7$sel.date) !== null && _option$settings$sele2 !== void 0 ? _option$settings$sele2 : null,
        month: (_option$settings8 = option.settings) !== null && _option$settings8 !== void 0 && (_option$settings8$sel = _option$settings8.selected) !== null && _option$settings8$sel !== void 0 && _option$settings8$sel.month ? option.settings.selected.month - 1 : null,
        year: (_option$settings$sele3 = (_option$settings9 = option.settings) === null || _option$settings9 === void 0 ? void 0 : (_option$settings9$sel = _option$settings9.selected) === null || _option$settings9$sel === void 0 ? void 0 : _option$settings9$sel.year) !== null && _option$settings$sele3 !== void 0 ? _option$settings$sele3 : null,
        holidays: (_option$settings$sele4 = (_option$settings10 = option.settings) === null || _option$settings10 === void 0 ? void 0 : (_option$settings10$se = _option$settings10.selected) === null || _option$settings10$se === void 0 ? void 0 : _option$settings10$se.holidays) !== null && _option$settings$sele4 !== void 0 ? _option$settings$sele4 : null
      },
      visibility: {
        weekend: (_option$settings$visi = (_option$settings11 = option.settings) === null || _option$settings11 === void 0 ? void 0 : (_option$settings11$vi = _option$settings11.visibility) === null || _option$settings11$vi === void 0 ? void 0 : _option$settings11$vi.weekend) !== null && _option$settings$visi !== void 0 ? _option$settings$visi : true,
        today: (_option$settings$visi2 = (_option$settings12 = option.settings) === null || _option$settings12 === void 0 ? void 0 : (_option$settings12$vi = _option$settings12.visibility) === null || _option$settings12$vi === void 0 ? void 0 : _option$settings12$vi.today) !== null && _option$settings$visi2 !== void 0 ? _option$settings$visi2 : true,
        months: (_option$settings$visi3 = (_option$settings13 = option.settings) === null || _option$settings13 === void 0 ? void 0 : (_option$settings13$vi = _option$settings13.visibility) === null || _option$settings13$vi === void 0 ? void 0 : _option$settings13$vi.months) !== null && _option$settings$visi3 !== void 0 ? _option$settings$visi3 : true,
        year: (_option$settings$visi4 = (_option$settings14 = option.settings) === null || _option$settings14 === void 0 ? void 0 : (_option$settings14$vi = _option$settings14.visibility) === null || _option$settings14$vi === void 0 ? void 0 : _option$settings14$vi.year) !== null && _option$settings$visi4 !== void 0 ? _option$settings$visi4 : true,
        arrows: {
          prev: (_option$settings$visi5 = (_option$settings15 = option.settings) === null || _option$settings15 === void 0 ? void 0 : (_option$settings15$vi = _option$settings15.visibility) === null || _option$settings15$vi === void 0 ? void 0 : (_option$settings15$vi2 = _option$settings15$vi.arrows) === null || _option$settings15$vi2 === void 0 ? void 0 : _option$settings15$vi2.prev) !== null && _option$settings$visi5 !== void 0 ? _option$settings$visi5 : true,
          next: (_option$settings$visi6 = (_option$settings16 = option.settings) === null || _option$settings16 === void 0 ? void 0 : (_option$settings16$vi = _option$settings16.visibility) === null || _option$settings16$vi === void 0 ? void 0 : (_option$settings16$vi2 = _option$settings16$vi.arrows) === null || _option$settings16$vi2 === void 0 ? void 0 : _option$settings16$vi2.next) !== null && _option$settings$visi6 !== void 0 ? _option$settings$visi6 : true
        }
      }
    };
    this.name = {
      months: {
        en: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        ru: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
      },
      week: {
        en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        ru: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб']
      },
      arrow: {
        prev: {
          en: 'Prev',
          ru: 'Назад'
        },
        next: {
          en: 'Next',
          ru: 'Вперед'
        }
      }
    };
  }

  _createClass(VanillaCalendar, [{
    key: "createDOM",
    value: function createDOM() {
      var _this$name$arrow$prev, _this$name$arrow$next;

      this.HTMLElement.innerHTML = "\n\t\t\t<div class=\"vanilla-calendar-header\">\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"vanilla-calendar-arrow vanilla-calendar-arrow_prev\"\n\t\t\t\t\tstyle=\"".concat(this.settings.visibility.arrows.prev ? '' : 'visibility: hidden', "\">\n\t\t\t\t\t").concat((_this$name$arrow$prev = this.name.arrow.prev[this.settings.lang]) !== null && _this$name$arrow$prev !== void 0 ? _this$name$arrow$prev : this.name.arrow.prev.en, "\n\t\t\t\t</button>\n\t\t\t\t<b class=\"vanilla-calendar-month\"></b>\n\t\t\t\t<button type=\"button\"\n\t\t\t\t\tclass=\"vanilla-calendar-arrow vanilla-calendar-arrow_next\"\n\t\t\t\t\tstyle=\"").concat(this.settings.visibility.arrows.next ? '' : 'visibility: hidden', "\">\n\t\t\t\t\t").concat((_this$name$arrow$next = this.name.arrow.next[this.settings.lang]) !== null && _this$name$arrow$next !== void 0 ? _this$name$arrow$next : this.name.arrow.next.en, "\n\t\t\t\t</button>\n\t\t\t</div>\n\t\t\t<div class=\"vanilla-calendar-content\">\n\t\t\t\t<div class=\"vanilla-calendar-week\"></div>\n\t\t\t\t<div class=\"vanilla-calendar-days\"></div>\n\t\t\t</div>\n\t\t");
    }
  }, {
    key: "selectingDate",
    value: function selectingDate() {
      this.selectedDate = null;
      this.selectedMonth = this.date.getMonth();
      this.selectedYear = this.date.getFullYear();

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
  }, {
    key: "createMonth",
    value: function createMonth() {
      var monthEl = this.HTMLElement.querySelector('.vanilla-calendar-month');
      var arrowPrev = this.HTMLElement.querySelector('.vanilla-calendar-arrow_prev');
      var arrowNext = this.HTMLElement.querySelector('.vanilla-calendar-arrow_next');
      var monthMin = this.settings.range.min ? new Date(this.settings.range.min).getMonth() : null;
      var monthMax = this.settings.range.max ? new Date(this.settings.range.max).getMonth() : null;

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
        monthEl.innerText = "".concat(this.name.months[this.settings.lang][this.selectedMonth], " ").concat(this.selectedYear);
      } else {
        monthEl.innerText = this.name.months[this.settings.lang][this.selectedMonth];
      }
    }
  }, {
    key: "createWeek",
    value: function createWeek() {
      var weekEl = this.HTMLElement.querySelector('.vanilla-calendar-week');
      var week = this.name.week[this.settings.lang];
      week.push(week.shift());

      for (var i = 0; i < week.length; i++) {
        var weekDayName = week[i];
        var weekDay = document.createElement('span');
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

        weekDay.innerText = "".concat(weekDayName);
        weekEl.append(weekDay);
      }
    }
  }, {
    key: "createDays",
    value: function createDays() {
      var _this = this;

      var firstDay = new Date(this.selectedYear, this.selectedMonth, 1);
      var firstDayWeek = Number(firstDay.getDay());

      if (this.settings.iso8601) {
        firstDayWeek = Number((firstDay.getDay() !== 0 ? firstDay.getDay() : 7) - 1);
      }

      var daysSelectedMonth = new Date(this.selectedYear, this.selectedMonth + 1, 0).getDate();
      var daysEl = this.HTMLElement.querySelector('.vanilla-calendar-days');
      daysEl.innerHTML = '';
      if (this.settings.selecting) daysEl.classList.add('vanilla-calendar-days_selecting');

      var prevMonth = function prevMonth() {
        var prevMonthDays = new Date(_this.selectedYear, _this.selectedMonth, 0).getDate();
        var day = prevMonthDays - firstDayWeek;
        var year = _this.selectedYear;
        var month = _this.selectedMonth;

        if (_this.selectedMonth === 0) {
          month = _this.name.months[_this.settings.lang].length;
          year = _this.selectedYear - 1;
        } else if (_this.selectedMonth < 10) {
          month = "0".concat(_this.selectedMonth);
        }

        for (var i = 0; i < firstDayWeek; i++) {
          var dayEl = document.createElement('span');
          day += 1;
          dayEl.className = 'vanilla-calendar-day vanilla-calendar-day_prev';
          dayEl.innerText = "".concat(day);
          dayEl.dataset.calendarDay = "".concat(year, "-").concat(month, "-").concat(day);
          daysEl.append(dayEl);
        }
      };

      var selectedMonth = function selectedMonth() {
        var year = _this.selectedYear;
        var month = _this.selectedMonth < 10 ? "0".concat(_this.selectedMonth + 1) : _this.selectedMonth + 1;

        var _loop = function _loop(i) {
          var dayEl = document.createElement('span');
          var day = i < 10 ? "0".concat(i) : i;
          var date = "".concat(year, "-").concat(month, "-").concat(day);
          var dayID = new Date(date).getDay();
          dayEl.className = 'vanilla-calendar-day';
          dayEl.innerText = "".concat(i);
          dayEl.dataset.calendarDay = date; // if weekend

          if (_this.settings.visibility.weekend && (dayID === 0 || dayID === 6)) {
            dayEl.classList.add('vanilla-calendar-day_weekend');
          } // if holidays


          if (Array.isArray(_this.settings.selected.holidays)) {
            _this.settings.selected.holidays.forEach(function (holiday) {
              if (holiday === date) {
                dayEl.classList.add('vanilla-calendar-day_holiday');
              }
            });
          } // if today


          var thisToday = i === _this.date.getDate();

          var thisMonth = _this.selectedMonth === _this.date.getMonth();

          var thisYear = _this.selectedYear === _this.date.getFullYear();

          if (_this.settings.visibility.today && thisToday && thisMonth && thisYear) {
            dayEl.classList.add('vanilla-calendar-day_today');
          } // if selected day


          if (_this.selectedDate === date) {
            dayEl.classList.add('vanilla-calendar-day_selected');
          } // if range min/max


          if (_this.settings.range.min > date || _this.settings.range.max < date) {
            dayEl.classList.add('vanilla-calendar-day_disabled');
          } // if range values


          if (Array.isArray(_this.settings.range.values)) {
            if (!_this.settings.range.min && !_this.settings.range.max) {
              dayEl.classList.add('vanilla-calendar-day_disabled');
            }

            _this.settings.range.values.forEach(function (value) {
              if (value === date) {
                dayEl.classList.remove('vanilla-calendar-day_disabled');
              }
            });
          }

          daysEl.append(dayEl);
        };

        for (var i = 1; i <= daysSelectedMonth; i++) {
          _loop(i);
        }
      };

      var nextMonth = function nextMonth() {
        var total = firstDayWeek + daysSelectedMonth;
        var rows = Math.ceil(total / _this.name.week[_this.settings.lang].length);
        var nextDays = _this.name.week[_this.settings.lang].length * rows - total;
        var year = _this.selectedYear;
        var month = _this.selectedMonth + 2;

        if (_this.selectedMonth + 1 === _this.name.months[_this.settings.lang].length) {
          month = '01';
          year = _this.selectedYear + 1;
        } else if (_this.selectedMonth + 2 < 10) {
          month = "0".concat(_this.selectedMonth + 2);
        }

        for (var i = 1; i <= nextDays; i++) {
          var dayEl = document.createElement('span');
          var day = i < 10 ? "0".concat(i) : i;
          dayEl.className = 'vanilla-calendar-day vanilla-calendar-day_next';
          dayEl.innerText = "".concat(i);
          dayEl.dataset.calendarDay = "".concat(year, "-").concat(month, "-").concat(day);
          daysEl.append(dayEl);
        }
      };

      prevMonth();
      selectedMonth();
      nextMonth();
    }
  }, {
    key: "changeMonth",
    value: function changeMonth(element) {
      var lastMonth = this.name.months[this.settings.lang].length - 1;

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
  }, {
    key: "changeDay",
    value: function changeDay(element) {
      if (!element.closest('.vanilla-calendar-day_prev') && !element.closest('.vanilla-calendar-day_next')) {
        this.selectedDate = element.dataset.calendarDay;
        this.createDays();
      }
    }
  }, {
    key: "click",
    value: function click() {
      var _this2 = this;

      this.HTMLElement.addEventListener('click', function (e) {
        if (e.target.closest('.vanilla-calendar-arrow')) {
          _this2.changeMonth(e.target);
        } else if (_this2.settings.selecting && e.target.closest('.vanilla-calendar-day')) {
          _this2.changeDay(e.target);
        }
      });
    }
  }, {
    key: "update",
    value: function update() {
      this.createDOM();
      this.selectingDate();
      this.createMonth();
      this.createWeek();
      this.createDays();
    }
  }, {
    key: "init",
    value: function init() {
      this.createDOM();
      this.selectingDate();
      this.createMonth();
      this.createWeek();
      this.createDays();
      this.click();
    }
  }]);

  return VanillaCalendar;
}();

exports.default = VanillaCalendar;