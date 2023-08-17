import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineX } from 'react-icons/hi'; // Import the close icon
import { IoListOutline } from 'react-icons/io5'; // Import the list icon
import ImageUploader from '../../components/ImageUploader';

const AddTestimonial = () => {
  return (
    <div className="p-[40px] pt-[10px] mt-[40px] m-[35px] bg-white relative">
      <div className="flex items-center mb-4">
        <IoListOutline className="text-2xl text-gray-600 mr-2" />
        <div>
          <p className="text-2xl font-medium">Add Testimonial</p>
          <p className="border-b border-slate-200">Provide the details to update block</p>
        </div>
        <button className="ml-auto text-gray-600 hover:text-gray-800">
        </button>
        <button className="absolute top-3 right-3 text-gray-600 hover:text-gray-800">
          <HiOutlineX />
        </button>
      </div>
      <div className="p-[50px] pt-[10px] mt-[40px] m-[35px] bg-white">
        <form className="text-left grid lg:grid-cols-2 space-y-[40px] text-slate-500 mt-[20px]">
          <label className="w-[310px] h-[30px] text-[14px]">
            Name:
            <input
              className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
              type="text"
            />
          </label>

          <label
            className="w-[310px] h-[30px] text-[14px] mt-[50px] ml-12"
            style={{ marginTop: '0px' }}
          >
            Description:
            <input
              className="w-[350px] h-[32px] p-2 border-1 border-slate-200 rounded"
              type="text"
            />
          </label>

          
        </form>
      </div>

      <div className="flex items-center mt-[20px] ml-[675px]">
        <ImageUploader />
      </div>

      <div className="ml-[950px] mb-[20px] mt-[20px] flex align-bottom">
        <button className="bg-white mr-[10px] rounded w-[98px] h-[32px] hover:bg-gray-100" type="button">
          <Link to="/staff" className="hover:text-gray-800">
            Cancel
          </Link>
        </button>
        <button className="bg-black rounded-lg text-white w-[98px] h-[32px] text-center hover:bg-gray-800" type="button">
          <Link to="/staff" className="hover:text-black">
            Save
          </Link>
        </button>
      </div>
    </div>
  );
};

export default AddTestimonial;
