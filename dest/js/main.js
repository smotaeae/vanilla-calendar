"use strict";

/* eslint-disable no-alert */

/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
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
  calendarEnableInactiveDates.init(); // const six = new VanillaCalendar({
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