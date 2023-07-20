import React from 'react'
import {Link} from 'react-router-dom';
import {CiCircleAlert} from "react-icons/ci";
import {RiArrowDropDownLine} from "react-icons/ri";

const AddCabins = () => {
  return (
    <div>
      <p className="mx-[95px] mt-[20px] text-4xl font-semibold">Add Cabins</p>

    {/* Cabin Details */}
    <div className="grid grid-cols-2 gap-[300px] p-[20px] pt-[10px] mr-[0px] mt-[20px] mb-[10px] m-[100px] bg-white w-[1107px] h-[166px] ">
      <div className="grid grid-cols-2 ">
        <p className="w-[141px] h-[14px] text-xl font-bold text-sky-700	">Cabin Details</p>  
      <div>
      <form>
      <div className="grid grid-rows-2">
      <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Name this Cabin*</span>
          </div>
          <input 
            className="w-[334px] h-[34px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="number"
          />
      </div>
      <div className="grid grid-cols-2">
      <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Max Guest</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <input 
            className="w-[108px] h-[35px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="number"
          />
      </div>

      <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Max Kids</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <input 
            className="w-[108px] h-[35px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="number"
          />
      </div>
      </div>
      </div>
      </form>
    </div>
      </div>
    

    <div>    
      <div>
      <form>
      <div className="grid grid-rows-2">
      <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Units</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <input 
            className="w-[127px] h-[34px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="number"
          />
      </div>
      <div>
      <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span>Room Size</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <input 
            className="w-[253px] h-[35px] p-2 border-1 border-slate-400 rounded-lg mt-2"
            type="number"
          />
      </div>
      </div>
      </div>
      </form>
    </div>
      </div>
    </div>

{/* BED */}
    <div className="grid grid-cols-2 gap-[350px] p-[20px] pt-[10px] mr-[0px] mt-[20px] mb-[10px] m-[100px] bg-white w-[1107px] h-[223px] ">
      <div >
        <p className="w-[141px] h-[14px] text-xl font-bold text-sky-700">Beds</p>  
      <div className="grid grid-cols-2 gap-[100px] w-[700px]">
      <form>
      <div className="grid grid-rows-2 pt-[20px]">
      <div className="flex flex-col items-left">
          <div className="flex items-center">           
            <span>Bed type</span>
          </div>
          <select className="w-[334px] h-[34px]  border-1 border-slate-400 rounded-lg mt-2"> 
            <option value="">Choose bed type</option>
            
          </select>
      </div>
      <div className="grid grid-cols-2">
      <div className="flex flex-col items-left">
          <div className="flex items-center">
          </div>
          <select className="w-[334px] h-[34px]  border-1 border-slate-400 rounded-lg mt-2"> 
            <option value="">Choose bed type</option>
            
          </select>
      </div>
      </div>
      </div>
      </form>
      <form>
      <div className="flex flex-col items-left">
          <div className="flex items-center">           
            <span className="mt-[20px] mb-[5px]">Number</span>
          </div>
          <input 
            type="number"
            className="w-[127px] h-[34px] p-2 border-1 border-slate-400 rounded-lg "        
          />
        <input 
        type="number"
        className="w-[127px] h-[34px] p-2 border-1 border-slate-400 rounded-lg mt-2"        
        />
      </div>
      
        </form>
    </div>
  </div>
    
{/* Amenities Section */}
    <div>    
      <div>
      <form>
      {/* <div className="grid grid-rows-2"> */}
      <div className="grid grid-cols-2 ">
        <div>
      <div className="flex flex-col items-left">
          <div className="flex items-center">
            
            <span className="text-xl font-bold text-sky-700">Amenities</span>
            
          </div>
      </div>

      <div>
          <input 
            className=" border-1 border-cyan-400 w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px]">Air conditioning</span>
           
      </div>
      <div>
      <input 
            className=" border-1 border-cyan-400	w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px]">Minibar</span>
      </div>
      <div>
      <input 
            className=" border-1 border-cyan-400	w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px]">WorkSpace</span>
      </div>
      <div>
      <input 
            className=" border-1 border-cyan-400	w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px]">Internet</span>
      </div>
      </div>
      <div className="mt-[25px]">
      <div>
      <input 
            className=" border-1 border-cyan-400	w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px]">Shower</span>
      </div>
      <div>
      <input 
            className=" border-1 border-cyan-400	w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px]">Towel</span>
      </div>
      <div>
      <input 
            className=" border-1 border-cyan-400	w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px]">Safe</span>
      </div>
      </div>
      </div>
      {/* </div> */}
      </form>
    </div>
      </div>
    </div>

{/* Photo Section */}
    <div className="p-[20px] pt-[10px] gap-[20px] grid grid-cols-2 m-[100px] mt-[10px] mb-[10px] bg-white w-[1111px] h-[238px]">
      <div className="grid grid-cols-2">
    <div>
    <p className="text-xl font-bold text-sky-700">Photo</p>
    </div>
    <div className="mt-[100px] ml-[10px]">
        <label htmlFor="photo" className="cursor-pointer w-[239px] h-[115px] bg-neutral-300 p-[20px] rounded-xl flex flex-col items-center justify-center">
          <span className="mb-2">Add Photo</span>
          <input type="file" id="photo" className="w-[220px]" accept="image/*" />
        </label>
    </div>
    </div>
    {/* Description Section */}
    <div className="grid grid-rows-2">
      <div>
        <p className="text-xl font-bold text-sky-700">Description</p>
        <label>
          Description*
        <textarea
          className="w-[444px] h-[98px] p-2 border-1 border-slate-400 rounded-lg">
        </textarea>
        </label>    
      </div>

      <div className="flex flex-col items-left">
          <div className="flex items-center">           
            <span>Location*</span>
          </div>
          <select className="w-[444px] h-[39px]  border-1 border-slate-400 rounded-lg mt-2"> 
            <option value=""></option>
            
          </select>
      </div>
      </div>
    </div>
{/* Price Section */}
    <div className="p-[20px] pt-[10px] grid grid-cols-3 m-[100px] mt-[10px] mb-[10px] bg-white w-[1111px] h-[166px]">
    <div>
    <p className="text-xl font-bold text-sky-700">Price</p>
    <div className="flex flex-col items-left">
          <div className="flex items-center">           
            <span>Rate Type</span>
            <CiCircleAlert className="mr-1" />
          </div>
          <select className="w-[337px] h-[36px]  border-1 border-slate-400 rounded-lg mt-2"> 
            <option value=""></option>
            
          </select>
      </div>
      <div className="flex items-center">
        <p className="text-sky-500 text-xs inline-flex">
          More pricing options
          <RiArrowDropDownLine className="ml-1 h-[20px] w-[30px] self-center" />
        </p>
      </div>


    </div>

    <div className="mt-[30px]">
      <label className="flex flex-col w-[310px]">
        <span className="flex items-center">
          Weekday Price
          <CiCircleAlert className="ml-1" />
        </span>
        <input 
          className="w-[337px] h-[36px] p-2 border-1 border-slate-400 rounded-lg mt-2"
          type="text"
        />
      </label>
    </div>


    <div className="mt-[30px]">
      <label className="flex flex-col w-[310px]">
        <span className="flex items-center">
          Weekend Price
          <CiCircleAlert className="ml-1" />
        </span>
        <input 
          className="w-[337px] h-[36px] p-2 border-1 border-slate-400 rounded-lg mt-2"
          type="text"
        />
      </label>
    </div>

    </div>
    <div className="ml-[1000px] mb-[20px]">
    <button className="bg-white rounded-lg mr-[10px]  rounded w-[98px] h-[32px] hover:bg-current  " type="button"><Link to="/cabins" className="hover:text-white">Cancel</Link></button> 
    <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center hover:bg-current" type="button"><Link to="" className="hover:text-black">Save</Link></button>
    </div>
    </div>

  )
}

export default AddCabins