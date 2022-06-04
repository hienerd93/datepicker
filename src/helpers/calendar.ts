import {
  previousSunday,
  isSunday,
  eachDayOfInterval,
  lastDayOfMonth,
  format,
  isSameDay,
  isSameMonth,
  addMonths,
} from "date-fns";
import { chunk } from "lodash";

export const THIS_YEAR = new Date().getFullYear();
export const THIS_MONTH = new Date().getMonth() + 1;

export const getFirstSunday = (month = THIS_MONTH, year = THIS_YEAR) => {
  const monthFirstDay = new Date(year, month - 1, 1);
  return isSunday(monthFirstDay) ? monthFirstDay : previousSunday(monthFirstDay);
}

export const getCalendarDate = (month = THIS_MONTH, year = THIS_YEAR) => {
  const firstSunday = getFirstSunday(month, year);
  const calendarDate = eachDayOfInterval({ start: firstSunday, end: lastDayOfMonth(new Date(year, month - 1)) });
  return chunk(calendarDate, 7);
}

export const renderDay = (date: Date) => {
  return format(date, 'dd');
};

export const getISODay = (date: Date) => {
  return format(date, 'yyyy-MM-dd');
};

export const checkSameDay = (date: Date, compareDate: Date) => {
  return isSameDay(date, compareDate);
}

export const checkSameMonth = (date: Date, compareDate: Date) => {
  return isSameMonth(date, compareDate);
}

export const nextMonth = (month = THIS_MONTH, year = THIS_YEAR) => {
  const _nextMonth = addMonths(new Date(year, month - 1), 1);
  return { year: _nextMonth.getFullYear(), month: _nextMonth.getMonth() + 1};
}

export const prevMonth = (month = THIS_MONTH, year = THIS_YEAR) => {
  const _prevMonth = addMonths(new Date(year, month - 1), -1);
  return { year: _prevMonth.getFullYear(), month: _prevMonth.getMonth() + 1};
}

export enum WEEK_DAYS {
  Sunday = 'Sun',
  Saturday = 'Sat',
  Monday = 'Mon',
  Tuesday = 'Tue',
  Wednesday = 'Wed',
  Thursday = 'Thu',
  Friday = 'Fri',
}
