# Vanilla JS Calendar

Vanilla js calendar without using additional packages.

## API

The `calendar` option is mandatory, all other options are optional.

| Name | Default | Description |
| ---- | :-----: | ----------- |
| calendar | - | DOM object |
| today | new Date() | The day that will be considered today. The date is provided in the `new Date()` method. |
| settings.lang | ru | Сalendar language. |
| settings.iso8601 | true | Weeks in ISO 8601 format. |
| settings.selecting | true | Allow the choice of dates. |
| settings.weekend | true | Highlight weekend. |
| settings.today | true | Highlight today. |
| settings.range.min | null | The Minimum date to display the selection. The date is passed as a string in year-month-day format. |
| settings.range.max | null | The maximum date to display the selection. The date is passed as a string in year-month-day format. |
| settings.range.values | null | An array of dates to display and select. The date is passed as a string in year-month-day format.|
| settings.selected.date | null | Selected date. The date is passed as a string in year-month-day format. |
| settings.selected.month | null | Selected month. |
| settings.selected.year | null | Selected year. |
| settings.selected.holidays | null | An array of dates with optional holidays or weekends. The date is passed as a string in year-month-day format. |
| settings.visibility.year | true | Show year. |
| settings.visibility.months | true | Show months with inactive dates. |
| settings.visibility.arrows.prev | true | Show prev arrow. |
| settings.visibility.arrows.next |true | Show next arrow. |

## Usage example

```js
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';

const calendar = new VanillaCalendar({
 calendar: document.querySelector('.vanilla-calendar'),
 today: new Date('2022-01-07'),
 settings: {
  lang: 'ru',
  iso8601: true,
  selecting: true,
  weekend: true,
  today: true,
  range: {
   min: '2022-01-01',
   max: '2022-02-12',
   values: ['2022-01-25'],
  },
  selected: {
   date: '2022-01-09',
   month: 1,
   year: 2022,
   holidays: ['2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'],
  },
  visibility: {
   year: true,
   months: true,
   arrows: {
    prev: false,
    next: true,
   },
  },
 },
});

calendar.init();
```

Change settings and update:

```js
 calendar.today = new Date('2022-01-25');
 calendar.settings.lang = 'eng';
 calendar.settings.iso8601 = false;
 calendar.settings.selected.date = '2022-01-15';
 calendar.settings.visibility.arrows.prev = true;

 calendar.update();
```

## License

MIT License

## Author

Yuri Uvarov (*uvarov.frontend@gmail.com*)
