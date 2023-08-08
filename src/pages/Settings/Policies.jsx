import React from 'react';

const Policies = () => {
  return (
    <div className="p-5 h-screen bg-black-50">
      <div className="text-xl mb-2">Policies</div>
      <div className="w-1/8">
        <div className="mb-4  bg-white p-4">
          <form>
            <div className="info_name text-blue-900 font-italics text-xl fontSize-20 font-display-latto">
              Reservation Policy
              <p className="text-slate-500 align-right">
                Your guests will be asked to 
                accept these terms upon checkout.
              </p>
            </div>

            <div className="flex flex-col mr-3 ml-56 align-top text-slate-500 mt-4">
              <div className="mb-2">Title:</div>
              <input
                type="text"
                className="w-full px-4 py-2 mt-0 border border-gray-300 rounded"
                placeholder="Reservation"
              />

              <div className="mb-2">Enter your reservation policy</div>
              <input
                type="text"
                className="w-full px-8 py-8 border border-gray-300 rounded"
                placeholder="Your text goes here..."
              />
            </div>
          </form>
          
          </div>
        </div>
        <form className='w-7/8'>
    <div className='mb-4'>
      <input
        type="text"
        id="name"
        className="w-full px-3 py-2 border border-gray-300 h-64"
      />
      </div>
      </form>

     {/* <form className='w-7/8'>
    <div className='mb-4'>
      <input
        type="text"
        id="name"
        className="w-full px-3 py-2 border border-gray-300 h-96"
      />
      </div>
      </form> */}
      {/* <div className="flex justify-end"> */}
        <button
          type="button"
          className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 mr-2"
        >
          Cancel
        </button>
        <button
          type="save"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-200 mr-2"
        >
          Save
        </button>
      </div>
    // </div>
  );
};

export default Policies;