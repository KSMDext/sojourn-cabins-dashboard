import React from 'react'

const CreatePackage = () => {
  return (
    <div>
      <div className='bg-white m-[50px] p-[10px] flex'>
        <p className='text-xl font-bold text-sky-700'>Add-Ons</p>
        <div className='flex gap-[400px]'>


        <div className='pt-[20px]'>
        <p className='italic text-md  text-sky-700'>Extra Charges</p>
        <div className="mb-2 flex items-center text-[14px]">
          <input 
            className=" border-1 border-slate-200 w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px] ">Massage</span>
           
      </div>
      <div className="mb-2 flex items-center text-[14px]">
          <input 
            className=" border-1 border-slate-200 w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px] ">Splash pool</span>
           
      </div>
      <div className="mb-2 flex items-center text-[14px]">
          <input 
            className=" border-1 border-slate-200 w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px] ">Chef</span>
           
      </div>
      <div className="mb-2 flex items-center text-[14px]">
          <input 
            className=" border-1 border-slate-200 w-[23px] h-[19px]"
            type="checkbox"
          /><span className="pl-[5px] ">Tourism</span>
           
      </div>
          
          
        </div>

        <div className='mt-[15px]'>
          <p className='italic text-md  text-sky-700 text-center'>Length of stay</p>
          <div className=' flex-col gap-[40px]'>
            <div className='flex gap-[20px]'>

            <div className='flex flex-col'>
              <span>Min Nights</span>
              <input type="number" className='border border-slate-300' />
            </div>

            <div className='flex flex-col'>
            <span>Max Nights</span>
              <input type="number" className='border border-slate-300'/>
            </div>
            </div>

            <div className='flex flex-col'>
              <span>Price*</span>
              <input type='text' placeholder='$' className='border border-slate-300 w-[11.5rem]' />
            </div>
            </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default CreatePackage