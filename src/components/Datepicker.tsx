import { useState } from "react";
import { getISODay, nextMonth, prevMonth, THIS_MONTH, THIS_YEAR } from "../helpers/calendar";
import Calendar from "./Calendar";

export default function Datepicker() {
  const [date, setDate] = useState(new Date());
  const [current, setCurrent] = useState({ year: THIS_YEAR, month: THIS_MONTH })
  const handleChange = (date: Date) => {
    setDate(date);
  }
  const handleChangeMonth = (next: boolean, year: number, month: number) => {
    setCurrent(next ? nextMonth(month, year) : prevMonth(month, year));
  }
  return (
    <>
      <p>{getISODay(date)}</p>
      <Calendar
        year={current.year}
        month={current.month}
        changeMonth={(next, month, year) => handleChangeMonth(next, year, month)}
        pickedDate={date} clickDate={(date) => handleChange(date)}
      />
    </>
  )
}
