#Calendar JS Library
====================


Generates a calendar array from a given month and year,

Use this library to generate a calendar web component or custom control.

Returns an array, each array element in the array reflects a week in the calendar month

## How to use Calendar Library

var calendar = require('tsg-calendar-lib');

var data = new calendar.Calendar(6,2016).FullCalendarData;

Result: 

[ [ 1, 2, 3, 4, 5, 6, 7 ],\s\s
  [ 8, 9, 10, 11, 12, 13, 14 ],\s\s
  [ 15, 16, 17, 18, 19, 20, 21 ],\s\s
  [ 22, 23, 24, 25, 26, 27, 28 ],\s\s
  [ 29, 30, 31, 0, 0, 0, 0 ] ]\s\s