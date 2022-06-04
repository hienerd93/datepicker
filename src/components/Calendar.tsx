import { getISODay, getCalendarDate, renderDay, THIS_MONTH, THIS_YEAR, checkSameDay, WEEK_DAYS, checkSameMonth } from "../helpers/calendar";

interface Props {
  year?: number;
  month?: number;
  pickedDate?: Date;
  clickDate?: (date: Date) => void;
  changeMonth: (next: boolean, month: number, year: number) => void;
}

export default function Calendar({
  month = THIS_MONTH,
  year = THIS_YEAR,
  clickDate,
  pickedDate = new Date(),
  changeMonth,
}: Props) {
  const handleClick = (date: Date) => {
    if (clickDate) {
      clickDate(date);
    }
  }

  const firstDayOfMonth = new Date(year, month - 1, 1);

  const calendarDate = getCalendarDate(month, year).map((days, index) => {
    const ths = days.map(day => {
      const picked = checkSameDay(pickedDate, day) ? 'has-text-success' : '';
      const enabled = checkSameMonth(firstDayOfMonth, day);
      return <th
        className={`${picked} ${enabled ? 'is-clickable' : 'has-text-grey-light'}`}
        key={getISODay(day)}
        onClick={() => enabled ? handleClick(day) : null}
      >
        {renderDay(day)}
      </th>
    });
    return <tr key={index}>{ths}</tr>;
  });

  return (
    <div>
      <p className="has-text-centered">
        <button type="button" onClick={() => changeMonth(false, month, year)}>Prev</button>
        <span>{month} {year}</span>
        <button type="button" onClick={() => changeMonth(true, month, year)}>Next</button>
      </p>
      <table className="table is-bordered is-striped">
        <thead>
          <tr>
            <th>{WEEK_DAYS.Sunday}</th>
            <th>{WEEK_DAYS.Monday}</th>
            <th>{WEEK_DAYS.Tuesday}</th>
            <th>{WEEK_DAYS.Wednesday}</th>
            <th>{WEEK_DAYS.Thursday}</th>
            <th>{WEEK_DAYS.Friday}</th>
            <th>{WEEK_DAYS.Saturday}</th>
          </tr>
        </thead>
        <tbody>
          {calendarDate}
        </tbody>
      </table>
    </div>
  );
}
