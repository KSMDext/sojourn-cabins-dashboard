import React from 'react';


const Emails = () => {
  return (
    <div className="p-2 h-screen bg-black-50">
      <div className="text-xl mb-2">Email</div>

      <div className="flex align-right justify-items-stretch">
      <div className="w-1/5">
      <h1>Confirmation Email</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci impedit odio obcaecati cumque 
        numquam dolores dignissimos consectetur aspernatur, nisi atque quidem quam non tempora vitae, 
        tenetur hic corporis! Facilis, eos!</p>
      </div>

      {/* <div className="w-100">
      <div className="flex justify-center ml-80  h-3/7"> {/* Increase height */}
        <div className="w-1/2 bg-white p-10">
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
    //   </div>
    // </div>
  );
};

export default Emails;
