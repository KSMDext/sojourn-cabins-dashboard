import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineX } from 'react-icons/hi'; // Import the close icon
import { IoListOutline } from 'react-icons/io5'; // Import the list icon

const AddFAQ = () => {
  return (
    <div className="bg-white p-8 relative">
      <div className="flex items-center mb-4">
        <IoListOutline className="text-2xl text-gray-600 mr-2" />
        <div>
          <p className="text-2xl font-medium">Add FAQ</p>
          <p className="border-b border-slate-200">Provide the details to update block</p>
        </div>
        <button className="ml-auto text-gray-600 hover:text-gray-800"></button>
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
          <HiOutlineX />
        </button>
      </div>

      <form>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" >Questions</label>
          <input
            type="text"
            placeholder='text goes here...'
            className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700" >Answers</label>
          <input
            type="text"
            placeholder='text goes here...'
            className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
          />
        </div>



      
        <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5">
        <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/settings/extras">Cancel</Link></button> 
        <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
    </div>
      </form>
    </div>
  );
};

export default AddFAQ;
