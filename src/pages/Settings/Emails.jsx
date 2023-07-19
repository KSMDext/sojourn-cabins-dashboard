import React from 'react';

const Emails = () => {
  return (
    <div className="p-2 h-screen bg-black-50">
      <div className="text-xl mb-2">Email</div>

      <h1>Confirmation Email</h1>

      <div className="flex justify-center items-center h-4/5"> {/* Increase height */}
        <div className="w-3/5 bg-white p-10">
          Form: theteam@sojourngh.com
          <div className="mb-8">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="div1">
              Subject:
            </label>
            <div className="bg-white border px-3 py-2 h-16">
            <input
                type="text"
                id="name"
                className="w-full h-full"
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
  );
};

export default Emails;
