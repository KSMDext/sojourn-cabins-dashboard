import React from 'react';
import { Link } from 'react-router-dom'

const Emails = () => {
  return (
    <div >
      <div className=" mt-3  text-4xl ml-10">Emails</div>
      <div className="m-3 flex gap-36">
          <div className="flex  ">
          <div className=" mt-6">
            <div className=" text-3xl mb-6">
              <h1 className=" italic text-blue-900">Confirmation Email</h1>
            </div>
            <div className=" ml-4 text-gray-800">
              Guests will receive this confirmation <br/>email once they book. Feel free to edit <br/> and personalize
            </div>
          </div>
      <div className=" w-[1068px] bg-white p-10 ml-6 h-[800px]">
          <p>Form: </p>theteam@sojourngh.com
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="div1">
              Subject:
            </label>
            <div className="bg-white border px-3 py-2 h-16">
            <input
                type="text"
                id="name"
                className="w-"
                value="Your cabin is ready!"
              />
              <div id="div1" className=""></div>
            </div>
          </div>
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="div2">
              Subject
            </label>
            <div className="bg-white border px-3 py-2 h-16">
              <input
              type=""
              className=''
              value=""
              />
              <div id="div2" className="w-7/8"></div>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="div3">
              Booking Details:(Not Editable)
            </label>
            <div className="bg-white border px-3 py-2 h-[350px]">
              <div id="div3" className=""></div> {/* Remove 'w-min-full' */}
            </div>
          </div>
        </div>
      </div> 
      </div>
      <div className=" flex   flex-row-reverse gap-6 mb-4 mr-5">
        <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/dashboard">Cancel</Link></button> 
        <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
      </div>
    </div>
      
  );
};

export default Emails;
