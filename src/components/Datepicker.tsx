import { useState } from "react";
import { getISODay } from "../helpers/calendar";
import Calendar from "./Calendar";

export default function Datepicker() {
  const [date, setDate] = useState(new Date());
  const handleChange = (date: Date) => {
    setDate(date);
  }
  return (
    <>
      <p>{getISODay(date)}</p>
      <Calendar pickedDate={date} clickDate={(date) => handleChange(date)} />
    </>
  )
}
