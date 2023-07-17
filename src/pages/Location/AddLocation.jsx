import React from 'react'
import {Link} from "react-router-dom"

export const AddLocation = () => {
  return (
    <div>
      <p className="mx-[95px] mt-[40px] text-4xl font-semibold	">AddLocation</p>
    <div className="p-[100px] pt-[10px] mt-[40px] m-[100px] bg-white w-[1104px] h-[481px]">
      <form className="text-left grid lg:grid-cols-2 space-y-[50px] text-slate-500 mt-[20px]">
          <label className="w-[310px] h-[40px]">
            Location Name*
            <input 
            className="w-[400px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
            type="text" />
          </label>

          <label 
          className="w-[310px] h-[40px] md: mt-[50px]"
          style={{marginTop: "0px"}}>
            Location Address*
            <input 
            className="w-[400px] h-[44px] p-2 border-1  border-slate-400 rounded-lg "
            type="text" />
          </label>

          <label 
            className="w-[310px] h-[40px]">
            Country*
            <input 
            className="w-[400px] h-[44px] p-2 border-1  border-slate-400 rounded-lg"
            type="text" />
          </label>

          <label
          className="w-[310px] h-[40px]">
            Description*
            <input 
            className="w-[400px] h-[44px] p-2 border-1 border-slate-400 rounded-lg"
            type="text" />
          </label>
          <select
            className="grid md:grid-cols-6 w-[209px] h-[44px] p-2 border-1 border-slate-400 rounded text-sm"
            name="Choose Location Manager">
            <option value="Manager1">Choose Location Manager</option>
            <option value="Manager1">Manager2</option>
            <option value="Manager1">Manager3</option>
        </select>
        <label htmlFor="photo" className="cursor-pointer w-[239px] h-[115px] ml-[160px] bg-neutral-300	p-[20px] mr-[70px] rounded-xl">
                Add Photo
           
          <input type="file" id="photo" className="mb-2 w-[220px]" accept="image/*" />
          </label>
         
      </form>
      
    </div>
    <div className="ml-[1000px] mb-[20px]">
    <button className="bg-white rounded-lg mr-[10px]  rounded w-[98px] h-[32px]" type="button"><Link to="/location">Cancel</Link></button> 
    <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
    </div>
    
    </div>
  )
}

export default AddLocation