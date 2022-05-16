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

It’s possible to manually include the necessary `<script>` tags in the end body of your HTML page and then initialize a
calendar via browser globals.

```html

<script>var exports = {};</script>
<script src="./js/modules/vanilla-calendar.min.js"></script>
```

## API

The `HTMLElement` option is mandatory, all other options are optional.

| Name                         |    Type     |   Default    | Description                                                                                                                                                      |
|------------------------------|:-----------:|:------------:|------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| HTMLElement                  | DOM object  |     null     | Indicates in which object the calendar will be initialized.                                                                                                      |
| type                         |   String    |  'default'   | Calendar type. Possible options: 'default', 'month', 'year'.                                                                                                     |
| date.min                     |   String    | '1970-01-01' | The minimum possible date that the calendar will take into account.                                                                                              |
| date.max                     |   String    | '2470-12-31' | The maximum possible date that the calendar will take into account.                                                                                              |
| date.today                   | Date object |  new Date()  | Specifies which day the calendar will consider today.                                                                                                            |
| settings.lang                |   String    |     'en'     | Indicates what language the labels will be in. The available default options are 'ru' and 'en'. It is also possible to install any other language, see the demo. |
| settings.iso8601             |   Boolean   |     true     | Weeks in ISO 8601 format.                                                                                                                                        |
| settings.range.min           |   String    |     null     | Dates less than this will be considered disabled.                                                                                                                |
| settings.range.max           |   String    |     null     | Dates greater than this will be considered disabled.                                                                                                             |
| settings.range.disabled      |    Array    |     null     | Force the specified dates to be disabled.                                                                                                                        |
| settings.selection.day       |   String    |   'single'   | Allow to choose a days. Possible options: 'single', 'multiple'.                                                                                                  |
| settings.selection.month     |   Boolean   |     true     | Allow to select a month.                                                                                                                                         |
| settings.selection.year      |   Boolean   |     true     | Allow to select a year.                                                                                                                                          |
| settings.selected.dates      |    Array    |     null     | List of days to be selected.                                                                                                                                     |
| settings.selected.month      |   Number    |     null     | Selected month by default.                                                                                                                                       |
| settings.selected.year       |   Number    |     null     | Selected year by default.                                                                                                                                        |
| settings.selected.holidays   |    Array    |     null     | The specified days will be considered additional days off.                                                                                                       |
| settings.visibility.weekend  |   Boolean   |     true     | Highlight the weekend.                                                                                                                                           |
| settings.visibility.today    |   Boolean   |     true     | Highlight the today.                                                                                                                                             |
| settings.visibility.disabled |   Boolean   |    false     | Show disabled days.                                                                                                                                              |
| actions.clickDay             |  Function   |     null     | The method is triggered after clicking on a day in the calendar, but before other operations.                                                                    |
| actions.clickMonth           |  Function   |     null     | The method is triggered after clicking on a month in the calendar, but before other operations.                                                                  |
| actions.clickYear            |  Function   |     null     | The method is triggered after clicking on a year in the calendar, but before other operations.                                                                   |

## Usage example

```js
const calendar = new VanillaCalendar({
	HTMLElement: document.querySelector('.vanilla-calendar'),
	type: 'month',
	date: {
		min: '2000-01-01',
		max: '2030-12-31',
		today: new Date('2022-01-07'),
	},
	settings: {
		lang: 'ru',
		iso8601: true,
		range: {
			min: '2022-01-01',
			max: '2022-02-12',
			disabled: ['2022-01-25'],
		},
		selection: {
			day: 'multiple',
			month: false,
			year: false,
		},
		selected: {
			dates: ['2022-01-09', '2022-01-10'],
			month: 1,
			year: 2022,
			holidays: ['2022-01-02', '2022-01-03', '2022-01-04', '2022-01-05'],
		},
		visibility: {
			weekend: false,
			today: true,
			disabled: true,
		},
	},
	actions: {
		clickDay(e) {
			alert(e.target.dataset.calendarDay);
		},
		clickMonth(e) {
			alert(e.target.dataset.calendarMonth);
		},
		clickYear(e) {
			alert(e.target.dataset.calendarYear);
		},
	},
});

calendar.init();
```

Change settings and update:

```js
calendar.date.today = new Date('2022-01-25');
calendar.settings.lang = 'en';
calendar.settings.iso8601 = false;
calendar.settings.selected.date = '2022-01-15';

calendar.update();
```

## License

MIT License

## Author

Yuri Uvarov (*uvarov.frontend@gmail.com*)
