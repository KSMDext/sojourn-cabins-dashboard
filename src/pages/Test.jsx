import CalendarView from "../components/Calenderview";
const bookingData = {
    cabin1: [
      { startDate: '2023-08-28', endDate: '2023-08-30', startTime: '10:00 AM', endTime: '2:00 PM' },
      { startDate: '2023-08-29', endDate: '2023-08-30', startTime: '3:00 PM', endTime: '5:00 PM' },
    ],
    cabin2: [
      { startDate: '2023-08-29', endDate: '2023-08-31', startTime: '2:00 PM', endTime: '4:00 PM' },
      { startDate: '2023-08-30', endDate: '2023-08-31', startTime: '9:00 AM', endTime: '11:00 AM' },
    ],
    cabin3: [
      { startDate: '2023-08-31', endDate: '2023-09-02', startTime: '1:00 PM', endTime: '3:00 PM' },
    ],
    // ... more cabin bookings
  };
  
const Test = () => {
    return (
        <CalendarView bookingData={bookingData}/>
    )
}

export default Test;