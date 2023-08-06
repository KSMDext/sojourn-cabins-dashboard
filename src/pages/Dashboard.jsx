import React from 'react'
import { FiArrowUp,  FiArrowDown} from 'react-icons/fi';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  return (
    <div>
        <div className=" text-2xl ml-6 mt-6">Dashboard</div>
        <div className=" w-auto mr-6 flex ml-6 gap-24">
          <Link>
            <div className=" w-80 h-32 bg-white rounded-lg pt-3 pl-4"> 
              <div className="text-xl ">Bookings</div>
              <div className="text-3xl pt-2">3,120</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-cyan-600">  <FiArrowUp className=" h-5"/>15% </span> last month</div>
            </div>
          </Link>
          <Link>
            <div className=" w-80 h-32 bg-white rounded-lg pt-3 pl-4"> 
              <div className="text-xl ">Check In</div>
              <div className="text-3xl pt-2">1,748</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-red-700"><FiArrowDown className=" h-5"/> 10% </span> last month</div>
            </div>
          </Link>
          <Link>
            <div className=" w-80 h-32 bg-white rounded-lg pt-3 pl-4"> 
              <div className="text-xl ">Check Out</div>
              <div className="text-3xl pt-2">989</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-cyan-600"> <FiArrowUp className=" h-5"/>20% </span> last month</div>
            </div>
          </Link>
        </div>
      <div className=" w-auto mr-6 bg-white h-96 mt-10 ml-6 rounded-lg">
        </div>
      
    </div>
  )
}

export default Dashboard