import React from 'react'
import { Link } from 'react-router-dom';

const AddSeasonalRule = () => {
  return (
    <div>
      <div className="ml-4 mt-4 text-lg">Add Seasonal Rules</div>
      <div className="mb-4 bg-white p-4 mt-4 ml-4 mr-4 h-[200px]">
        <div className="mb-2 ml-10 w-[300px]" >
        <input
      type="text"
      className="w-[400px] px-4 py-2 mb-2 border border-gray-300 rounded-md"
      placeholder=""
      />
        </div>
        <div className="flex">
            <div className="mr-3 ml-8 text-[14px]">
              <label htmlFor="role" className="block">
                Start date*
              </label>
              <input type= "date" className="w-[200px] h-[30px] p-2 border-1 border-slate-200 rounded"
                 />
              
            </div>
            <div className="mr-3 ml-8 text-[14px]">
              <label htmlFor="role" className="block">
                Expiry date*
              </label>
              <input type= "date" className="w-[200px] h-[30px] p-2 border-1 border-slate-200 rounded"
                 />
              
            </div>
              <div className="mr-[100px] mb-[100px]">
            <label className="w-[250px] h-[40px] md: mt-[60px] text-[14px] mb-[50px] ml-[350px]">Min nights*
              <input
                className="w-[200px] h-[32px] p-2 border-1 mb-6 border-slate-200 rounded"
                type="text"
              />
            </label>

            <label className="w-[250px] h-[40px] text-[14px] ml-[350px]">Max nights*
              <input
                className="w-[200px] h-[32px] p-2 border-1 border-slate-200 rounded"
                type="text"
              />
            </label>
          </div>
          </div>
        </div>
     <div>
             <div className="ml-[950px] mb-1">
             <option value="" disabled hidden>
       Choose Location
        </option>
                <select className="w-[300px] h-[40px] border-1 mb-2 border-slate-400 rounded-md mt-2">
                  <option>Cabin 1</option>
                  <option>Cabin 2</option>
                  <option>Cabin 3</option>
                </select>
              </div>

              <div className="ml-4">
              <option value="" disabled hidden>
       Choose Cabin
        </option>
                <select className="w-[300px] h-[40px] border-1 border-slate-400 rounded-md mt-2">
                  <option>Location 1</option>
                  <option>Location 2</option>
                  <option>Location 3</option>
                </select>
              </div>
      
      <div className="flex gap-4">
        <div className="w-1/2">
          <div className="mb-4 bg-white p-4 mt-4 ml-4 mr-[250px] h-[250px]">
            <div className="text-lg">
            All Locations<br/> Location 1<br/>Location 2<br/> Location 3</div>
            {/* Content for the first section */}
          </div>
        
        </div>
        
        <div className="w-1/2">
          <div className="mb-4 bg-white p-4 mt-4 ml-[250px]  mr-4 h-[250px]">
          All Cabins<br/> Cabins 1<br/>Cabins 2<br/>Cabins 3
            {/* Content for the second section */}
          </div>
        </div>
        </div>
      </div>
      <div className="mb-4 bg-white p-4 mt-4 ml-4 mr-4 h-[200px]">
      <div className="flex">
  <div className="flex flex-col mr-8 text-xs text-slate-500">
    <div className="mb-2">
      <img src="https://fastly.picsum.photos/id/1004/150/150.jpg?hmac=hW4E91fXt6JsDw5q28Dff-zsrhWDzDuvT7xcYu0DS10" alt="Sample" 
      height={50} width={50}/>
    </div>
    Weekday
    <input
      type="text"
      className="w-[250px] px-4 py-3 mb-4 border border-gray-300 rounded"
    />
  </div>

  <div className="flex flex-col mr-8 text-xs text-slate-500">
    <div className="mb-2"></div>
    Weekend
    <input
      type="text"
      className="w-[250px] px-4 py-3 mb-4 border border-gray-300 rounded"
    />
  </div>

  <div className="flex flex-col mr-8 text-xs text-slate-500">
    <div className="mb-2"></div>
    Weekly
    <input
      type="text"
      className="w-[250px] px-4 py-3 g-6 border border-gray-300 rounded"
    />
  </div>

  <div className="flex flex-col mr-8 text-xs text-slate-500">
    <div className="mb-2"></div>
    Monthly
    <input
      type="text"
      className="w-[250px]  px-4 py-3 g-6 border border-gray-300 rounded"
    />
  </div>

  <div className="flex flex-col mr-8 text-xs text-slate-500">
    <div className="mb-2"></div>
    Extra Adult
    <input
      type="text"
      className="w-[250px]  px-4 py-3 g-6 border mb-[100px] border-gray-300 rounded"
    />
  </div>
</div>


      </div>



      <div className=" flex   flex-row-reverse gap-6 mt-4 mr-5 mb-2">
        <button className="bg-white rounded-lg mr-[10px]  w-[98px] h-[32px]" type="button"><Link to="/priceoptions/extracharge">Cancel</Link></button> 
        <button className="bg-black  rounded-lg text-white w-[98px] h-[32px] text-center" type="button">Save</button>
    </div>
    </div>
    
  )
}

export default AddSeasonalRule