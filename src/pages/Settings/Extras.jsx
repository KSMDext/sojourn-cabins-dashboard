import React from 'react';

const Extras = () => {
  return (
    <div>
      <div className="text-xl mb-2">Extras</div>
      <div className='bg-white mt-8 m-[30px] p-[30px] flex'>
        <div className="mr-8">
          <p className='text-[20px]  text-blue-800 italics'>FAQs</p>
          <div className='h-[100px] w-[200px]'>
            <p className='italic ml-2'>These are some of the expected frequently asked questions that customers ask.</p>
          </div>
          <button className="bg-black rounded text-white h-[32px] w-[200px] text-center mt-10 flex items-center mb-1">
            <span className="mr-2 p-5 mb-1"><span className="p-2">+</span> Add FAQ</span>
          </button>
          <input type="text" className="mt-2" />
        </div>
        <div>
          <div className='flex flex-col'>
            <span>Question 1 :</span>
            <input type="text" className="mb-2 border w-[1000px] p-2 rounded-md" placeholder=" Answer goes here" />
          </div>
          <div className='flex flex-col'>
            <span>Question 2:</span>
            <input type="text" className="mb-2 border w-[1000px] p-2 rounded-md" placeholder="Answer goes here" />
          </div>
          <div className='flex flex-col'>
            <span>Question 3:</span>
            <input type="text" className="mb-2 border w-[1000px] p-2 rounded-md" placeholder="Answer goes here" />
          </div>
        </div>
      </div>
      <div className='bg-white mt-8 m-[30px] p-[30px] flex'>
        <div className="mr-8">
          <p className='text-[20px] text-blue-900 italics ml-2'>Gallery</p>
          <div className='h-[200px] w-[200px]'>
            <p className='italic ml-2'>This entails random photos of locations, cabins, staff and events that happen at various places, relating to Sojourn Cabins.</p>
            <button className="bg-black rounded text-white h-[32px] w-[200px] text-center mt-10 flex items-center">
              <span className="mr-2 p-5"><span className="p-2">+</span> Add To Gallery</span>
            </button>
          </div>
        </div>
        <div>
          <div className="flex flex-col">
            <div className="flex flex-row br-4 space-x-6">
            <img src="http://localhost:3001/static/media/location2.d7ce5fb621170477a271.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="http://localhost:3001/static/media/location4.79d5bc1dfa3177bc0ff4.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="http://localhost:3001/static/media/location1.0b8824b7cd237d98fd70.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="http://localhost:3001/static/media/location4.79d5bc1dfa3177bc0ff4.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="http://localhost:3001/static/media/location1.0b8824b7cd237d98fd70.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row br-4 space-x-6">
            <img src="	http://localhost:3001/static/media/location4.79d5bc1dfa3177bc0ff4.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="	http://localhost:3001/static/media/location4.79d5bc1dfa3177bc0ff4.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="http://localhost:3001/static/media/location2.d7ce5fb621170477a271.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="http://localhost:3001/static/media/location1.0b8824b7cd237d98fd70.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
            <img src="http://localhost:3001/static/media/location1.0b8824b7cd237d98fd70.jpeg" alt="" className="mb-2 border w-[200px] h-[100px] rounded" />
          </div>
          </div>
        </div>
      </div>
      <div className='bg-white mt-8 m-[30px] p-[30px] flex'>
        <div className="mr-8">
        <p className='text-[20px] text-blue-900 italics ml-3'>Testimonials</p>
        <div className='h-[150px] w-[200px]'>
        <p className='italic ml-1'>These are some of the expected frequently asked questions that customers ask.</p>
        <button className="bg-black rounded text-white h-[32px] w-[200px] text-center mt-10 flex items-center">
        <span className="mr-2 p-4"><span className="p-2">+</span> Add Testimonials</span>
    </button>
    </div>
  </div>
  <div className="flex flex-col justify-between">
  <div className="flex flex-row br-4 space-x-6">
    <div className="flex flex-col ml-2 mb-2">
      <input type="checkbox" className="h-8 w-8 mb-5" />
      <input type="checkbox" className="h-8 w-8 mb-5" />
      <input type="checkbox" className="h-8 w-8" />
    </div>
  </div>
</div>

</div>

      <div className="ml-[950px] mb-[20px] mt-[20px] flex align-bottom ">
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
    </div>
  );
}

export default Extras;
