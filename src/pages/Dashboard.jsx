import React , {useState}from 'react'
import { FiArrowUp,  FiArrowDown} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import BarGraph from '../components/Charts/BarGraph';


import CustomCalendar from '../components/Calendar'
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  const [date] = useState(new Date());

 

  return (
    <div>
        <div className=" text-2xl ml-6 mt-6">Dashboard</div>
        <div className=" w-auto mr-6 flex ml-6 justify-between">
          <Link>
            <div className=" w-[350px] h-32 bg-white rounded-lg pt-3 pl-4 mx-2"> 
              <div className="text-xl ">Bookings</div>
              <div className="text-3xl pt-2">3,120</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-cyan-600">  <FiArrowUp className=" h-5"/>15% </span> last month</div>
            </div>
          </Link>
          <Link>
            <div className=" w-[350px] h-32 bg-white rounded-lg pt-3 pl-4 mx-2"> 
              <div className="text-xl ">Check In</div>
              <div className="text-3xl pt-2">1,748</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-red-700"><FiArrowDown className=" h-5"/> 10% </span> last month</div>
            </div>
          </Link>
          <Link>
            <div className=" w-[350px] h-32 bg-white rounded-lg pt-3 pl-4 mx-2"> 
              <div className="text-xl ">Check Out</div>
              <div className="text-3xl pt-2">989</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-cyan-600"> <FiArrowUp className=" h-5"/>20% </span> last month</div>
            </div>
          </Link>
        </div>

        <div className="w-auto mr-6 bg-white h-96 mt-10 ml-6 rounded-lg flex flex-col justify-center items-center">
  <div className="text-xl mt-0 text-center">
    <h2>CABIN REVENUES/ 24HRS ($)</h2>
  </div>
  <div className="">
    <BarGraph className="w-[400px]" />
  </div>
</div>


        <div className=" w-auto mr-6 bg-white h-96 mt-10 ml-6 rounded-lg">

        <div className="w-auto mr-6 bg-white h-96 mt-10 ml-6 rounded-lg">
          
        <div className="w-auto mr-6 bg-white h-96 mt-10 ml-6 rounded-lg">
        <div className="flex w-auto mr-6 mt-10 ml-6 space-x-4">
          <div className="flex-none w-1/2 bg-white h-96 rounded-lg">
            <CustomCalendar selectedDate={date} />
          </div>
          <div className="flex-none w-1/2 bg-white h-96 rounded-lg">
            <CustomCalendar selectedDate={date} />
          </div>
        </div>
        </div>
        </div>
        </div>
      
    </div>
  )
}

export default Dashboard  