import React from 'react'

const Emails = () => {
  return (
    <div class="p-2 h-scree bg-black-50">
        <div class="text-xl mb-2">Email</div>
        
        <h1>Confirmation Email</h1>
        <h6>Guests will receive this confirmation email once they book. Feel free to edit and personalize</h6>
        
        
          <form className='w-1/8'>
        <div className='flex justify-end'>
          <input
            type="text"
            id="name"
            className="w-3/5  px-3 py-2 border border-gray-300 h-64"
          />
          </div>
          <div className="flex justify-end space-between">
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

export default Emails