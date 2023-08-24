import React, { useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import {IoArrowForward} from 'react-icons/io5';

const generateMonthGrid = (year, month) => {
  const firstDay = new Date(year, month, 1);
  const lastDay = new Date(year, month + 1, 0);
  const daysInMonth = lastDay.getDate();
  const firstDayIndex = firstDay.getDay(); // 0 - Sunday, 1 - Monday, ..., 6 - Saturday

  const grid = [];
  let dayCounter = 1;

  for (let i = 0; i < 6; i++) {
    const week = [];
    for (let j = 0; j < 7; j++) {
      if ((i === 0 && j < firstDayIndex) || dayCounter > daysInMonth) {
        week.push(null); // Placeholder for empty cells
      } else {
        week.push(dayCounter);
        dayCounter++;
      }
    }
    grid.push(week);
    if (dayCounter > daysInMonth) break;
  }

  return grid;
};

const CalendarComponent = () => {
  const currentDate = new Date();
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [year, month] = [selectedDate.getFullYear(), selectedDate.getMonth()];
  const monthGrid = generateMonthGrid(year, month);

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  

  const handlePrevMonth = () => {
    setSelectedDate(new Date(year, month - 1));
  };

  const handleNextMonth = () => {
    setSelectedDate(new Date(year, month + 1));
  };

  const handleDateClick = (day) => {
    // Handle the date click event here
    setSelectedDate(new Date(year, month, day));
  };

  return (
    <div className="w-auto mr-6 bg-white h-96 mt-2 ml-6 rounded-lg">
       <div className="flex items-center justify-center mt-"> 
          <button className="bg-white rounded-md p-2 ml-4 w-28 h-7 text-sm flex items-center pl-4" onClick={handlePrevMonth} >
            <IoMdArrowBack className="mr-1" />
          </button>
          <p className="text-center" mb="2">CALENDAR</p>
          <button className="bg-white rounded-md p-2 mr-4 w-28 h-7 text-sm flex items-center pl-8" onClick={handleNextMonth}>
            <IoArrowForward className="ml-1" />
          </button>
        </div>
    <div className="flex items-center justify-center mt-10">
     
      <p className="text-center mb-2">{`${monthNames[month]} ${year}`}</p>
     
    </div>
    <div className="grid grid-cols-7 gap-1 p-4">
      {[ 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat' ].map((day, index) => (
        <div key={day} className={`text-center font-bold ${index === 5 || index === 6 ? 'text-blue-500' : ''}`}>{day}</div>
      ))}
      {monthGrid.map((week, weekIndex) =>
        week.map((day, dayIndex) => (
          <div
            key={`${weekIndex}-${dayIndex}`}
            className={`text-center p-2 ${day === null ? 'bg-white' : ''}`}
          >
            {day !== null && (
              <button
                className={`focus:outline-none ${dayIndex === 5 || dayIndex === 6 ? 'text-blue-400' : ''} ${selectedDate.getDate() === day ? 'bg-blue-500 rounded-md' : ''}`}
                onClick={() => handleDateClick(day)}
              >
                {day}
              </button>
            )}
          </div>
        ))
      )}
    </div>
  </div>
);
};

export default CalendarComponent;