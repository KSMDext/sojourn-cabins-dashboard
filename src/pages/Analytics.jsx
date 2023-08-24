import React from 'react'
import { FiArrowUp,  FiArrowDown} from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Rating } from 'primereact/rating';
        

const Analytics= () => {
  return (
    <div>
        <div className=" text-2xl ml-6 mt-6">Analytics</div>
       

<div className="flex space-x-[505px] mt-4">
  
        <div className="w-80 border rounded text-sm ml-5 mr-96">
          
        </div>
        
        <div>
        <div >
            <h1>4.3</h1>
           <Rating value={5} readOnly cancel={false} />
           </div>
          <select className="w-[190px] h-9 border-slate-200 border-1 rounded text-sm">
          <option value="" disabled hidden>
       Choose Location
        </option>
          <option value="vacation_rental">Vacation Rental</option>
          <option value="hotel">Hotel</option>
          <option value="guest_house">Guest House</option>
          </select>
        </div>
      </div>
        <div className='mb-2 ml-6'>
        <input type= "date" ml-2/></div>
        <div className=" w-auto mr-6 flex ml-6 gap-24">
          <Link>
            <div className=" w-60 h-32 bg-white rounded pt-3 pl-4"> 
              <div className="text-lg ">Total Bookings</div>
              <div className="text-2xl pt-2">19,671</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-cyan-600">  <FiArrowUp className=" h-5"/>15% </span> last month</div>
            </div>
          </Link>
          <Link>
            <div className=" w-60 h-32 bg-white rounded pt-3 pl-2"> 
              <div className="text-lg ">New Customers</div>
              <div className="text-2xl pt-2">1,143</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-red-700"><FiArrowDown className=" h-5"/> 10% </span> last month</div>
            </div>
          </Link>
          <Link>
            <div className=" w-60 h-32 bg-white rounded-lg pt-3 pl-2"> 
              <div className="text-lg ">Available Bookings</div>
              <div className="text-2xl pt-2">178</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-red-700"><FiArrowDown className=" h-5"/> 10% </span> last month</div>
            </div>
          </Link>

          <Link>
          
           <div className=" w-60 h-32 bg-white rounded-lg pt-3 pl-2 mb-2"> 
            <div className="flex   text-slate-100"></div>
              <div className="text-lg ">Total Revenue</div>
              <div className="text-2xl pt-2">$234,879.00</div>
              <div className=" flex pt-3 text-sm"><span className="flex pr-2 text-cyan-600"> <FiArrowUp className=" h-5"/>20% </span> last month</div>
            </div>
          </Link>
        </div>
        
        <div className="flex">
  <div className="w-3/4 bg-white h-96 mt-8 ml-6 rounded mr-3">
    <div className='text-xl align-top text-center '>
      <h2>CABIN REVENUES/ 24HRS ($)</h2>
    </div>
  </div>
  <div className="w-1/2 bg-white h-96 mt-8 mr-6 rounded ml-3">
    <div className='text-xl text-center align-top'>
      <h2>BOOKINGS FOR MAY 2023</h2>
    </div>
  </div>
  </div>
  <div className='align-left italics ml-6 mt-6 mb-0'>
    <h2 className='italic text-blue-900 text-xl'  >Most Frequent Customers</h2>
  </div>
  <div className=" w-auto mr-6 bg-white h-36 mt-5 ml-6 rounded"></div>
      
    </div>
  )
}

export default Analytics