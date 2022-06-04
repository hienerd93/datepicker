import { getISODay, getCalendarDate, renderDay, THIS_MONTH, THIS_YEAR, checkSameDay, WEEK_DAYS } from "../helpers/calendar";

interface Props {
  year?: number;
  month?: number;
  pickedDate?: Date;
  clickDate?: (date: Date) => void;
}

export default function Calendar({ month = THIS_MONTH, year = THIS_YEAR, clickDate, pickedDate = new Date() }: Props) {
  const handleClick = (date: Date) => {
    if (clickDate) {
      clickDate(date);
    }
  }

  const calendarDate = getCalendarDate(month, year).map((days, index) => {
    const ths = days.map(day => {
      const classStyle = `${checkSameDay(pickedDate, day) ? 'has-text-success' : ''}`;
      return <th
        className={classStyle}
        key={getISODay(day)}
        onClick={() => handleClick(day)}
      >
        {renderDay(day)}
      </th>
    });
    return <tr key={index}>{ths}</tr>;
  });

  return (
    <div>
      <p className="has-text-centered">{month} {year}</p>
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
