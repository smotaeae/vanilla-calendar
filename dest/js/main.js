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
/* eslint-disable no-alert */

/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  var calendar = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar')
  });
  calendar.init();
  var calendarMonth = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-month'),
    type: 'month',
    actions: {
      clickMonth: function clickMonth(e) {
        alert(e.target.dataset.calendarMonth);
      }
    }
  });
  calendarMonth.init();
  var calendarDefault = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-default'),
    type: 'default',
    actions: {
      clickDay: function clickDay(e) {
        alert(e.target.dataset.calendarDay);
      }
    }
  });
  calendarDefault.init();
  var calendarYear = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-year'),
    type: 'year',
    actions: {
      clickYear: function clickYear(e) {
        alert(e.target.dataset.calendarYear);
      }
    }
  });
  calendarYear.init();
  var calendarDateMinMax = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-date-minmax'),
    date: {
      min: '2000-01-01',
      max: '2030-12-31'
    }
  });
  calendarDateMinMax.init();
  var otherToday = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-other-today'),
    date: {
      today: new Date('2022-01-07')
    }
  });
  otherToday.init();
  var calendarRussianLang = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-russian-lang'),
    settings: {
      lang: 'ru'
    }
  });
  calendarRussianLang.init();
  var calendarOtherLang = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-other-lang')
  });
  calendarOtherLang.name.months.full.kz = ['Қаңтар', 'Ақпан', 'Наурыз', 'Сәуір', 'Мамыр', 'Маусым', 'Шілде', 'Тамыз', 'Қыркүйек', 'Қазан', 'Қараша', 'Желтоқсан'];
  calendarOtherLang.name.months.reduction.kz = ['Қаң', 'Ақп', 'Нау', 'Сәу', 'Мам', 'Мау', 'Шіл', 'Там', 'Қыр', 'Қаз', 'Қар', 'Жел'];
  calendarOtherLang.name.week.kz = ['Си', 'Же', 'Ду', 'Сй', 'Ср', 'Бе', 'Жұ'];
  calendarOtherLang.name.arrow.prev.kz = 'Артқа';
  calendarOtherLang.name.arrow.next.kz = 'Алға';
  calendarOtherLang.settings.lang = 'kz';
  calendarOtherLang.init();
  var calendarISO8601 = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-iso8601'),
    settings: {
      iso8601: false
    }
  });
  calendarISO8601.init();
  var calendarDateRangeMinMax = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-date-range-minmax'),
    date: {
      today: new Date('2022-01-07')
    },
    settings: {
      range: {
        min: '2022-01-01',
        max: '2022-02-12'
      }
    }
  });
  calendarDateRangeMinMax.init();
  var calendarDisabledDates = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-disabled-dates'),
    date: {
      today: new Date('2022-01-07')
    },
    settings: {
      range: {
        min: '2022-01-01',
        max: '2022-02-12',
        disabled: ['2022-01-20', '2022-01-25', '2022-01-26']
      }
    }
  });
  calendarDisabledDates.init();
  var calendarDisableSelectionDay = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-disable-selection-day'),
    settings: {
      selection: {
        day: false
      }
    }
  });
  calendarDisableSelectionDay.init();
  var calendarDisableSelectionMonth = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-disable-selection-month'),
    settings: {
      selection: {
        month: false
      }
    }
  });
  calendarDisableSelectionMonth.init();
  var calendarDisableSelectionYear = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-disable-selection-year'),
    settings: {
      selection: {
        year: false
      }
    }
  });
  calendarDisableSelectionYear.init();
  var calendarMultipleSelectDays = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-multiple-select-days'),
    settings: {
      selection: {
        day: 'multiple'
      }
    }
  });
  calendarMultipleSelectDays.init();
  var calendarSelectedDates = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-selected-dates'),
    settings: {
      selection: {
        day: 'multiple'
      },
      selected: {
        dates: ['2022-01-09', '2022-01-10', '2022-01-11'],
        month: 0,
        year: 2022
      }
    }
  });
  calendarSelectedDates.init();
  var calendarSelectedHolidays = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-selected-holidays'),
    settings: {
      selected: {
        month: 0,
        year: 2022,
        holidays: ['2022-01-01', '2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05', '2022-01-06', '2022-01-07', '2022-01-08', '2022-01-09', '2022-01-10']
      }
    }
  });
  calendarSelectedHolidays.init();
  var calendarDisableHighlightWeekend = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-disable-highlight-weekend'),
    settings: {
      visibility: {
        weekend: false
      }
    }
  });
  calendarDisableHighlightWeekend.init();
  var calendarDisableHighlightToday = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-disable-highlight-today'),
    settings: {
      visibility: {
        today: false
      }
    }
  });
  calendarDisableHighlightToday.init();
  var calendarEnableInactiveDates = new VanillaCalendar({
    HTMLElement: document.querySelector('#calendar-enable-inactive-dates'),
    date: {
      today: new Date('2022-01-17')
    },
    settings: {
      visibility: {
        disabled: true
      },
      range: {
        min: '2022-01-07',
        max: '2022-02-12'
      }
    }
  });
  calendarEnableInactiveDates.init(); // Scroll

  var smoothScroll = {
    scroll: function scroll(e) {
      var id = document.querySelector(e.target.getAttribute('href'));
      e.preventDefault();

      if (id) {
        id.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
    },
    hasClick: function hasClick(e) {
      this.scroll(e);
    },
    init: function init() {
      var _this = this;

      document.addEventListener('click', function (e) {
        if (!e.target.closest('[data-smooth-scroll="list"] a[href^="#"]')) return;

        _this.hasClick(e);
      });
    }
  };
  smoothScroll.init();
});
/******/ 	return __webpack_exports__;
/******/ })()
;
});