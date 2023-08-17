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



      
        <div className="ml-[900px] mb-[20px] mt-[30px] flex align-bottom ">
          <button className="bg-white rounded w-[98px] h-[32px] hover:bg-gray-100" type="button">
            <Link to="/staff" className="hover:text-gray-800">
              Cancel
            </Link>
          </button>
          <button className="bg-black rounded-lg text-white w-[98px] h-[32px] text-center hover:bg-gray-800" type="button">
            <Link to="/extras" className="hover:text-black">
              Save
            </Link>
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddFAQ;
