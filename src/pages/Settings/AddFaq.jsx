import React from 'react'

const AddFaq = () => {
  return (
    <div>
      
    <div className="p-[40px] pt-[10px] mt-[40px] m-[35px] bg-white ">
      <form className="text-left grid lg:grid-cols-2 space-y-[30px] text-slate-500 mt-[20px]">
        
      <p className="mx-[35px] mt-[20px] text-2xl font-medium	">Add FAQ</p>

          <label className="w-[310px] h-[40px] text-[14px]">
            Question
            <input 
            className="w-[400px] h-[32px] p-2 border-1 border-slate-200 rounded"
            type="text" 
            placeholder= "text goes here.."
            />
          </label>
  
          <label 
          className="w-[310px] h-[40px] md: mt-[50px] text-[14px]"
          style={{marginTop: "0px"}}>
            Answer
            <input 
            className="w-[400px] h-[32px] p-2 border-1  border-slate-200 rounded"
            type="text" 
            placeholder= "text goes here.."

            />
          </label>

        
      </form>
      
    </div>
    
    
    </div>
  )
}

export default AddFaq