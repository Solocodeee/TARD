"use client"

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";

export default function NavProduct() {
  const [startDate, setStartDate] = useState<Date | null>(new Date());

  return (
    <div className="flex flex-wrap items-center justify-between px-6 py-4 rounded-md">
    <h2 className="text-sm sm:text-base md:text-lg font-semibold text-[#090914] flex-grow">Product Analytics</h2>
  
    <div className="flex items-center gap-3 justify-center flex-wrap mt-0 sm:mt-0">
    <DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  dateFormat="dd-MM-yyyy"
  showMonthDropdown
  showYearDropdown
  dropdownMode="select"
  className="border bg-white rounded-md px-2 py-1 text-xs text-gray-600  focus:outline-none focus:ring-1 focus:ring-indigo-500 w-36 text-center"
/>

<DatePicker
  selected={startDate}
  onChange={(date) => setStartDate(date)}
  dateFormat="dd-MM-yyyy"
  showMonthDropdown
  showYearDropdown
  dropdownMode="select"
  className="border bg-white rounded-md px-2 py-1 text-xs text-gray-600  focus:outline-none focus:ring-1 focus:ring-indigo-500 w-36 text-center"
/>
</div>

  </div>
  

  

  );
}
