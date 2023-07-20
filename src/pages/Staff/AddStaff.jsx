import React from 'react'
import { Link} from 'react-router-dom';

const AddStaff = () => {
  return (
    <div>
      <p className="mx-[95px] mt-[40px] text-4xl font-semibold	">Add Staff</p>
    <div className="p-[70px] pt-[10px] mt-[50px] m-[100px] mr-[200px] bg-white">
      <form className="text-left grid lg:grid-cols-2 space-y-[50px] text-slate-500 mt-[20px]">
          <label className="w-[310px] h-[40px]">
            First Name*
            <input 
            className="w-[400px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
            type="text" />
          </label>

          <label 
          className="w-[310px] h-[40px] md: mt-[50px]"
          style={{marginTop: "0px"}}>
            Last Name*
            <input 
            className="w-[400px] h-[44px] p-2 border-1  border-slate-400 rounded-lg "
            type="text" />
          </label>

          <label 
            className="w-[310px] h-[40px]">
            Email*
            <input 
            className="w-[400px] h-[44px] p-2 border-1  border-slate-400 rounded-lg"
            type="text" />
          </label>

          <label
          className="w-[310px] h-[40px]">
            Phone*
            <input 
            className="w-[400px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
            type="text" />
          </label>
          <label
          className="w-[310px] h-[40px]">
            Address*
            <input 
            className="w-[400px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
            type="text" />
          </label>
          <label
          className="w-[310px] h-[40px]">
            Work Location*
            <input 
            className="w-[400px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
            type="text" />
          </label>
          <label
          className="w-[310px] h-[40px]">
            Country*
            <input 
            className="w-[400px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
            type="text" />
          </label>

          <div className="flex">
            <div className="mr-2">
              <label htmlFor="role" className="block">
                Role*
              </label>
              <input
                id="role"
                className="w-[200px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
                type="text"
              />
            </div>
            <select
              className="w-[200px] h-[44px] p-2 border-1 border-slate-400 rounded text-sm mt-[25px]"
              name="staffType"
            >
              <option value="">Choose Staff Type</option>
              <option value="Staff1">Staff1</option>
              <option value="Staff2">Staff2</option>
            </select>

          </div>
          <label htmlFor="photo" className="cursor-pointer w-[239px] h-[115px] ml-[600px] bg-neutral-300 p-[20px] rounded-xl">
                Add Photo
           
          <input type="file" id="photo" className="mb-2 w-[220px]" accept="image/*" />
          </label>
         
      </form>
      
    </div>
    <div className="ml-[890px] mb-[20px]">
    <button className="bg-white rounded-lg mr-[10px]  rounded w-[98px] h-[32px] hover:bg-current  " type="button"><Link to="/staff" className="hover:text-white">Cancel</Link></button> 
    <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center hover:bg-current" type="button"><Link to="/staff" className="hover:text-black">Save</Link></button>
    </div>
    
    </div>
  )
}

export default AddStaff