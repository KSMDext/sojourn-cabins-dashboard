import React from 'react'
import {SlCalender} from "react-icons/sl";
import {Link} from "react-router-dom";

const AddReservations = () => {
  return (
    <div>
    <p className="mx-[95px] mt-[40px] text-4xl font-semibold	">AddReservations</p>

    {/* Booking Details Section */}
      <div className="p-[30px] pt-[10px] grid grid-cols-3 mt-[40px] mb-[10px] m-[100px] bg-white w-[1119px] h-[252px]">
        <p className=" text-xl font-bold text-sky-700	">Booking Details</p>
        <div >
          <span className="text-xl font-bold text-sky-500	">Check-in</span>
          <div className="flex items-center mt-[20px]">
            <SlCalender />
            <span className="ml-2">date</span>
          </div>
          <label>
            Adults
          <input
          type="text"
          className="border-1 border-slate-400 rounded-lg w-[82px] h-[30px] px-[18px] mt-[10px]"/>
          </label>
          <div className="flex flex-col items-left mt-[20px]">
          <div className="flex items-center">
            
            <span>Cabin type*</span>
          </div>
          <input 
            className="w-[228px] h-[37px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="text"
          />
          </div>
        </div>
        <div>
          <span className="text-xl font-bold text-sky-500	">Check-out</span>
          <div className="flex items-center mt-[20px]">
            <SlCalender />
            <span className="ml-2">date</span>
          </div>
          <label>
            Kids
          <input
          type="text"
          className="border-1 border-slate-400 rounded-lg w-[82px] h-[30px] px-[18px] mt-[10px]"/>
          </label>
          <div className="flex flex-col items-left mt-[20px]">
          <div className="flex items-center">
            
            <span>Cabin type*</span>
          </div>
          <input 
            className="w-[228px] h-[37px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="text"
          />
          </div>
        </div>   
      </div>

{/* Guest Details Section */}
      <div className="p-[30px]  pt-[10px] grid grid-cols-2 m-[100px] mt-[10px] mb-[10px] bg-white w-[1119px] h-[227px]">
          
          <div>
          <p className="text-xl font-bold text-sky-700	">Guest Details </p>
          <div className="ml-[100px]">
          <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>First Name*</span>
          </div>
          <input 
            className="w-[401px] h-[39px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="text"
          />
          </div>
          <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Email*</span>
          </div>
          <input 
            className="w-[401px] h-[39px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="email"
          />
          </div>
          </div>
          </div>

          <div className="mt-[23px]">
          <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Last Name*</span>
          </div>
          <input 
            className="w-[401px] h-[39px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="text"
          />
          </div>
          <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Phone*</span>
          </div>
          <input 
            className="w-[401px] h-[39px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="tel"
          />
          </div>
          </div>
      </div>
  {/* Price Details Section*/}

 
      <div className="p-[30px] grid grid-rows-3 pt-[10px]  m-[100px] mt-[10px] mb-[10px] bg-white w-[1120px] h-[237px]">
      <div className="mt-[10px]">
      <p className=" text-xl font-bold text-sky-700	">Price Details</p>
      <table className="table-fixed border-separate border-spacing-x-[100px] border-b-2 ml-[100px]">
          <thead>
            <tr>
              <th className="border-b-0">Service Name</th>
              <th className="border-b-0">Quantity</th>
              <th className="border-b-0">Price</th>
              <th className="border-b-0">Tax</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {/* Add more rows here if needed */}
          </tbody>
      </table>
    </div>
    
    <div className="gap-[20px] ml-[100px] ">
    
      <input className=" w-[300px]" type="text" />
      <input className="text-center w-[80px]" type="number" />
      <input className="" type="text" />
      <input className="" type="text" />
      <input className="" type="text" />

      <div className="border-separate  border-b-2 mr-[34px]">
      </div>
    </div>
    <div className="ml-[800px] mr-[30px]">
      <span className="mr-2">Total: </span>
      <input type="text" className="border-none focus:ring-0 " placeholder="$"/>
      <div className="items-baseline border-b border-black">

      </div>

      <input type="checkbox"/><span className="text-xs text-lime-500 italic">Fully Paid</span>
    </div>

  </div>
  <div className="ml-[1000px] mb-[20px]">
    <button className="bg-white rounded-lg mr-[10px]  rounded w-[98px] h-[32px] hover:bg-current  " type="button"><Link to="/reservations" className="hover:text-white">Cancel</Link></button> 
    <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center hover:bg-current" type="button"><Link to="" className="hover:text-black">Save</Link></button>
    </div>    
  </div>
  )
}

export default AddReservations