import React from 'react'

const Extras = () => {
  return (
    <div class="p-5 h-scree bg-black-50">
    <div class="text-xl mb-2">Extras</div>
    
    <form className='w-7/8'>
    <div className='mb-4'>
      <input
        type="text"
        id="name"
        className="w-full px-3 py-2 border border-gray-300 h-96"
      />
      </div>
      </form>

     <form className='w-7/8'>
    <div className='mb-4'>
      <input
        type="text"
        id="name"
        className="w-full px-3 py-2 border border-gray-300 h-96"
      />
      </div>
      </form>
      <form className='w-7/8'>
    <div className='mb-4'>
      <input
        type="text"
        id="name"
        className="w-full px-3 py-2 border border-gray-300 h-96"
      />
      </div>
      
      <div className="flex justify-end">
      <button
        type="button"
        className="px-5 py-2 bg-white text-black rounded hover:bg-gray-200 mr-2"
      >
        Cancel
      </button>
      <button
        type="save"
        className="px-6 py-2 bg-black   text-white rounded hover:bg-gray-200 mr-2"
      >
        Save
      </button>
    </div>
      </form>
    
      </div>
  )
}

export default Extras