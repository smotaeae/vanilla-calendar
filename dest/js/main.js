"use strict";

/* eslint-disable no-undef */
document.addEventListener('DOMContentLoaded', function () {
  var DOMCalendar = document.querySelector('.vanilla-calendar');
  var calendar = new VanillaCalendar({
    calendar: DOMCalendar
  });
  calendar.init();
});