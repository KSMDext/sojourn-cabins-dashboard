import React from 'react'

const GeneralSettings = () => {
  return (
    <div class="p-5 h-scree bg-black-50">
      <div class="text-xl mb-2">General Settings</div>
         <div className="w-1/8">
            <div className="mb-4 bg-white p-4">
    <form>
      <div className="info_name text-blue-900 font-bold font-display-latto">Business Info</div>
         <input type="text" id="name" />
            <div className="flex justify-center">
    <div className="flex flex-col mr-8  text-slate-500">
      <div className="mb-2">Property Name*</div>
      <input
      type="text"
      className="w-96 px-4 py-2 mb-4 border border-gray-300 rounded"
      placeholder="Sojourn cabins"
      />
      <div className="mb-2">Email Address*</div>
      <input
      type="text"
      className="w-96 px-6 py-2 border border-gray-300 rounded"
      placeholder="theteam@sojourngh.com"
      />
    </div>
    <div className="flex flex-col  text-slate-500">
      <div className="mb-2">Property Type*</div>
      <select
        className="w-96 px-4 py-2 mb-4 border border-gray-300 rounded  text-slate-500" // Use the same styling as the input field
        defaultValue="" // Set the default selected option (empty) so the placeholder shows
      >
      <option value="" disabled hidden>
       Select a property type
        </option>
        <option value="vacation_rental">Vacation Rental</option>
        <option value="hotel">Hotel</option>
        <option value="guest_house">Guest House</option>
        {/* Add more options if needed */}
      </select>
      <div className="mb-2">Phone*</div>
      <input
        type="integers"
        className="w-96 px-4 py-2 border border-gray-300 rounded"
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
  <div className="info_name text-blue-900 font-bold">Address</div>
  <input type="text" id="name" />
  <div className="flex justify-start items-center mb-4">
    <div className="flex flex-col mr-4  text-slate-500">
      City, State, Country*
      <input
      type="text"
      className="border rounded p-2 mb-2 text-gray-700" // Apply text color to the input
      placeholder="Anomabo, Central region, Ghana"
      />
      Street Address*
      <input
      type="text"
        className="border rounded p-2 mb-2 text-gray-700" // Apply text color to the input
        placeholder="5VCF+Q8"
      />
      Zip/Postal Code*
      <input
      type="text"
      className="border rounded p-2 mb-2 text-gray-700" // Apply text color to the input
      placeholder="Input 3"
      />
    </div>
    {/* Add the Google Map as an iframe */}
    <div className="border rounded overflow-hidden">
      <iframe
        title="Google Map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.472020101909!2d-1.1266588852656467!3d5.171908650496125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xfde057a668fbb1b%3A0x724f8f20e7e68e74!2sSojourn%20Cabins!5e0!3m2!1sen!2s!4v1631225516235!5m2!1sen!2s"
        width="1300"
        height="350"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
</form>


  </div>
</div>
        <div className="w-1/8">
          <div className="mb-4 bg-white p-4">
          <form>
  <div className="info_name  text-blue-900 font-bold">Regional Settings</div>
  <input type="text" id="name" />
  <div className="flex justify-center gap-24  text-slate-500 ">
    <div className="w-1/4">
      Time Zone
      <input
        type="text"
        className="border rounded p-2 py-2 mb-2 w-96 col-sm-5  text-blue-900   "
        placeholder="(GMT+00:00)Europe/London "
      />
      Your Weekend Night Are:
    </div>
    <div className="w-1/4 flex flex-col ">
      Measurement Units
      <div className="relative inline-block">
        <input
          type="text"
          className="border rounded items-center p-2 px-2 mb-2 py-2 w-96  pr-10" // Add paddingRight for the dropdown button
          placeholder="Square Feet"
        />
        <select
          className="absolute top-0 right-0 mt-2 mr-2" // Position the dropdown button
          style={{
            borderRadius: '0.25rem',
            padding: '0.25rem',
            border: 'none', // Remove the border
            backgroundColor: 'transparent', // Remove the background color
            cursor: 'pointer',
          }}
        >
          <option value="square_feet">Square Feet</option>
          <option value="square_meters">Square Meters</option>
          <option value="acres">Acres</option>
          {/* Add more options if needed */}
        </select>
      </div>
      {/* Add margin to create space */}
      <div className="relative inline-block">
        Primary English
        <input
          type="text"
          className="border rounded p-2 px-2 mb-2 py-2 w-96 pr-10" // Add paddingRight for the dropdown button
          placeholder="English"
        />
        <select
          className="absolute top-0 right-0 mt-2 mr-2" // Position the dropdown button
          style={{
            borderRadius: '0.25rem',
            padding: '1.5rem',
            border: 'none', // Remove the border
            backgroundColor: 'transparent', // Remove the background color
            cursor: 'pointer',
          }}
        >
          <option value="english">English</option>
          <option value="spanish">Spanish</option>
          <option value="french">French</option>
          {/* Add more options if needed */}
        </select>
      </div>
    </div>
  </div>
</form>
 </div>
</div>
    {/* <div className="w-1/8">
  <div className="mb-4 bg-white p-4">
  <form> */}
  <div className="info_name  text-blue-900 font-bold">Length of stay</div>
  

  <div className="flex justify-center flex-col items-center">
    <div className="flex justify-center">
      <div className="flex flex-col mr-8  text-xs  text-slate-500 ">
        <div className="mb-2"></div>
        Check-In time
        <input
          type="text"
          className="w-94 px-4 py-3 mb-4 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col mr-8  text-xs  text-slate-500">
        <div className="mb-2"></div>
        Check-Out Time
        <input
          type="text"
          className="w-94 px-4 py-3 mb-4 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col  text-xs  text-slate-500">
        <div className="mb-2 only:"></div>
        Min. Nights
        <input
          type="text"
          className="w-20 px-4 py-3 g-6 border border-gray-300 rounded"
        />
      </div>
      <div className="flex flex-col text-xs  text-slate-500">
        <div className="mb-2"></div>
        Max. Nights
        <input
          type="text"
          className="w-20 px-4 py-3 ml-5 border rounded"
        />
      </div>
    </div>
  </div>
{/* </form>

  </div>
</div> */}

<form className='w-7/8'>
          <div className="flex justify-end">
          <button
            type="button"
            className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 mr-2"
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