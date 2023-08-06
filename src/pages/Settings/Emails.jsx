import React from 'react';


const Emails = () => {
  return (
    <div className="ml-10 flex gap-36">
      <div>
                <div className="text-xl mb-2">Email</div>

          <div className="flex align-right ">
          <div className="w-1/3">
          <h1 className=" italic">Confirmation Email</h1>
          <p className=" italic ml-2">Guests will receive this confirmation email once they book. Feel free to edit and personalize</p>
          </div>
      
      <div className="w-full ml-36 bg-white p-10">
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
            <div className="bg-white border px-3 py-2 h-64">
              <div id="div3" className=""></div> {/* Remove 'w-min-full' */}
            </div>
          </div>
        </div>
      </div> 

      <div className="fixed bottom-4 right-4">
        <button
          type="button"
          className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 mr-2"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-6 py-2 bg-black text-white rounded hover:bg-gray-200"
        >
          Save
        </button>
        </div>
      </div>
    </div>
      
  );
};

export default Emails;
