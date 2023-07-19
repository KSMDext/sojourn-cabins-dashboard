import React from 'react'

const GeneralSettings = () => {
  return (
    
      <div class="p-5 h-scree bg-black-50">
        <div class="text-xl mb-2">General Settings</div>
         <div className="w-1/8">
          <div className="mb-4 bg-white p-4">
            <form>
              <div className="info_name">Business Info</div>
              <input
              type="text"
              id="name"
              />
        <div className="flex justify-center">
      <div className="flex flex-col items-center mr-8">
        <input
          type="text"
          className="w-48 px-4 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Sojourn cabins"
        />
        <input
          type="text"
          className="w-48 px-6 py-2 border border-gray-300 rounded"
          placeholder="theteam@sojourngh.com"
        />
      </div>
      <div className="flex flex-col items-center">
        <input
          type="text"
          className="w-48 px-4 py-2 mb-4 border border-gray-300 rounded"
          placeholder="Vacation Rental"
        />
        <input
          type="integers"
          className="w-48 px-4 py-2 border border-gray-300 rounded"
          placeholder="+44 72 8392018"
        />
        
      </div>
    </div>
      </form>
  </div>
</div>

         <div className="w-1/8">
          <div className="mb-4 bg-white p-4">
            <form>
              <div className="info_name">Address</div>
              <input
              type="text"
              id="name"
              />
       <div className="flex justify-start">
      <div className="flex flex-col">
        <input
          type="text"
          className="border rounded p-2 mb-2"
          placeholder="Anomabo,Central region,Ghana"
        />
        <input
          type="text"
          className="border rounded p-2 mb-2"
          placeholder="5VCF+Q8"
        />
        <input
          type="text"
          className="border rounded p-2 mb-2"
          placeholder="Input 3"
        />
      </div>
    </div>
      </form>
  </div>
</div>
        <div className="w-1/8">
          <div className="mb-4 bg-white p-4">
            <form>
              <div className="info_name">Regional Settings</div>
              <input
              type="text"
              id="name"
              />
         <div className="flex justify-center">
      <div className="w-1/4">
        <input
          type="text"
          className="border rounded p-2 px-2 mb-2 w-full"
          placeholder="Left Textbox"
        />
      </div>
      <div className="w-1/4 flex flex-col justify">
        <input
          type="text"
          className="border rounded p-2 px-2 mb-2 py-2 min-w-full"
          placeholder="Right Textbox 1"
        />
        <input
          type="text"
          className="border rounded p-2 px-2 br-8"
          placeholder="Right Textbox 2"
        />
      </div>
    </div>
      </form>
  </div>
</div>


<div className="w-1/8">
  <div className="mb-4 bg-white p-4">
    <form>
      <div className="info_name">Length of stay</div>
      <input type="text" id="name" />

      <div className="flex justify-center">
        <input
          type="text"
          className="w-48 px-4 py-2 mb-4 border border-gray-300 rounded mr-8"
          
        />

<input
          type="text"
          className="w-38 px-4 py-2 mb-4 border border-gray-300 rounded mr-5"
          
        />

        <input
          type="text"
          className="w-24 px-4 py-2 mb-4 border border-gray-300 rounded mr-8" 
        />
        
<input
          type="text"
          className="w-24 px-4 py-2 mb-4 border border-gray-300 rounded mr-8"
         
        />

      </div>
    </form>
  </div>
</div>

<form className='w-7/8'>
          <div className="flex justify-end">
          <button
            type="button"
            className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 mr-10"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-6 py-2 bg-black   text-white rounded hover:bg-gray-200 mr-2"
          >
            Save
          </button>
          
        </div>
        
        
        </form>
        
         </div>
          )
}

export default GeneralSettings