import React from 'react';


const ExtrasTable = ({ xtrasData }) => (
  <table>
    <tbody>
      {xtrasData.map((item, index) => (
        <tr key={index}>
          <td>
            <input type="checkbox" className="h-8 w-8 mt-1 mb-2" />
          </td>
          <td>
            <img className="rounded-full w-10 h-8" src={item.ExtrasImage} alt="feedback" />
          </td>
          <td>
            <p>{item.ExtrasName}</p>
            <p>{item.ExtrasMessage}</p>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

const xtrasData = [
  {
    ExtrasName: 'Nirav Joshi',
    ExtrasMessage: 'Yea yea this is know how it is. Sho sho sho, you know AB in the building',
    ExtrasImage: 'https://images.unsplash.com/photo-1480429370139-e0132c086e2a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },
      
  {
    ExtrasName: 'Sunil Joshi',
    ExtrasMessage:'Everything went smooth; from the swimming to the massages and even the dishes prepared by the master chef. Such great culinary skill',
    ExtrasImage:
      'https://images.unsplash.com/photo-1615109398623-88346a601842?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fG1hbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
  },
  
  { 
    ExtrasName: 'Nirav Joshi',
    ExtrasMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    ExtrasImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
  },

  {
    ExtrasName: 'Sunil Joshi',
    ExtrasMessage:'Excellent customer service!! I’ll surely come back here with my side-chicks.',
    ExtrasImage:
      'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
   
  },

];
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
  <div className='bg-white mt-8 m-[30px] p-[30px]'>
        <div className="mr-8">
          <ExtrasTable xtrasData={xtrasData} />
        </div>
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


