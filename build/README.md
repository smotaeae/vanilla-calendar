# Vanilla JS Calendar

Vanilla JS calendar without using additional packages. [DEMO](https://vanilla-calendar.frontend.uvarov.tech/)

## Initialize

Get vanilla-calendar in one of the following ways:

### NPM

```sh
npm install @uvarov.frontend/vanilla-calendar
```

Then import it in your javascript file

```js
import VanillaCalendar from '@uvarov.frontend/vanilla-calendar';
```

### or Script tag

It’s possible to manually include the necessary `<script>` tags in the end body of your HTML page and then initialize a calendar via browser globals.

```html
<script>var exports = {};</script>
<script src="./js/modules/vanilla-calendar.min.js"></script>
```

## API

The `HTMLElement` option is mandatory, all other options are optional.

| Name | Default | Description |
| ---- | :-----: | ----------- |
| HTMLElement | — | DOM object |
| date | new Date() | The day that will be considered today. The date is provided in the `new Date()` method. |
| settings.lang | en | Сalendar language. |
| settings.iso8601 | true | Weeks in ISO 8601 format. |
| settings.selecting | true | Disable click by day. |
| settings.range.min | null | The Minimum date to display the selection. The date is passed as a string in year-month-day format. |
| settings.range.max | null | The maximum date to display the selection. The date is passed as a string in year-month-day format. |
| settings.range.values | null | An array of dates to display and select. The date is passed as a string in year-month-day format.|
| settings.selected.date | null | Selected date. The date is passed as a string in year-month-day format. |
| settings.selected.month | null | Selected month. |
| settings.selected.year | null | Selected year. |
| settings.selected.holidays | null | An array of dates with optional holidays or weekends. The date is passed as a string in year-month-day format. |
| settings.visibility.weekend | true | Highlight weekend. |
| settings.visibility.today | true | Highlight today. |
| settings.visibility.months | true | Show months with inactive dates. |
| settings.visibility.year | true | Show year. |
| settings.visibility.arrows.prev | true | Show prev arrow. |
| settings.visibility.arrows.next |true | Show next arrow. |

## Usage example

```js
const calendar = new VanillaCalendar({
 HTMLElement: document.querySelector('.vanilla-calendar'),
 date: new Date('2022-01-07'),
 settings: {
  lang: 'ru',
  iso8601: true,
  selecting: true,
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
   weekend: true,
   today: true,
   months: false,
   year: true,
   arrows: {
    prev: true,
    next: true,
   },
  },
 },
});

calendar.init();
```

Change settings and update:

```js
calendar.date = new Date('2022-01-25');
calendar.settings.lang = 'en';
calendar.settings.iso8601 = false;
calendar.settings.selected.date = '2022-01-15';

calendar.update();
```

## License

MIT License

## Author

Yuri Uvarov (*uvarov.frontend@gmail.com*)
