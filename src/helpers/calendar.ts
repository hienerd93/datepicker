import {
  previousSunday,
  isSunday,
  eachDayOfInterval,
  lastDayOfMonth,
  format,
  isSameDay,
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

export enum WEEK_DAYS {
  Sunday = 'Sun',
  Saturday = 'Sat',
  Monday = 'Mon',
  Tuesday = 'Tue',
  Wednesday = 'Wed',
  Thursday = 'Thu',
  Friday = 'Fri',
}
